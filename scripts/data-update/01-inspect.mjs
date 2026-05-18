// Inspect current DB state for the 10 chains in the sheet, and verify CSV integrity.
// Usage: node scripts/data-update/01-inspect.mjs
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = [
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト",
  "バーミヤン", "やよい軒", "大戸屋", "CoCo壱番屋", "松のや",
];

// 1. Parse CSV
const csv = fs.readFileSync("/tmp/tabenavi_sheet.csv", "utf8");
const rows = parse(csv, { columns: true, skip_empty_lines: true, trim: true });
console.log(`\n[CSV] Total rows: ${rows.length}`);

const sheetByChain = {};
for (const r of rows) {
  const chain = r["チェーン"];
  if (!sheetByChain[chain]) sheetByChain[chain] = [];
  sheetByChain[chain].push(r);
}

// 2. Verify all chains in sheet exist in TARGET_CHAINS
const sheetChains = Object.keys(sheetByChain);
const unknown = sheetChains.filter((c) => !TARGET_CHAINS.includes(c));
const missing = TARGET_CHAINS.filter((c) => !sheetChains.includes(c));
if (unknown.length) console.error(`[ERROR] Unknown chains in sheet:`, unknown);
if (missing.length) console.error(`[WARN] Target chains missing from sheet:`, missing);

// 3. Detect duplicates within sheet (same chain + name)
const dupCheck = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  dupCheck[key] = (dupCheck[key] || 0) + 1;
}
const dupes = Object.entries(dupCheck).filter(([_, n]) => n > 1);
if (dupes.length) {
  console.error(`\n[ERROR] Duplicate (chain,name) in sheet (${dupes.length}):`);
  dupes.slice(0, 20).forEach(([k, n]) => console.error(`  ${k} × ${n}`));
}

// 4. Check for missing/invalid numeric values
let invalidCount = 0;
for (const r of rows) {
  const fields = ["カロリー(kcal)", "タンパク質(g)", "脂質(g)", "炭水化物(g)"];
  for (const f of fields) {
    const v = r[f];
    if (v === "" || v == null || isNaN(Number(v))) {
      if (invalidCount < 10) console.error(`[INVALID] ${r["チェーン"]} | ${r["商品名"]} | ${f}=${JSON.stringify(v)}`);
      invalidCount++;
    }
  }
}
if (invalidCount > 0) console.error(`[ERROR] Total invalid numeric cells: ${invalidCount}`);

// 5. Fetch chain UUIDs from DB
const { data: chains, error: cErr } = await sb
  .from("chain_restaurants")
  .select("id, name")
  .in("name", TARGET_CHAINS);
if (cErr) { console.error(cErr); process.exit(1); }

const chainMap = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const dbMissing = TARGET_CHAINS.filter((c) => !chainMap[c]);
if (dbMissing.length) console.error(`[ERROR] Target chains not in DB:`, dbMissing);

// 6. Fetch menu_items count per chain
console.log(`\n[DB] Current menu_items per chain:`);
console.log(`Chain | DB count | Sheet count | Diff`);
console.log(`---|---|---|---`);
let totalDb = 0, totalSheet = 0;
for (const chain of TARGET_CHAINS) {
  const id = chainMap[chain];
  if (!id) { console.log(`${chain} | (no chain row) | ${sheetByChain[chain]?.length ?? 0} | -`); continue; }
  const { count } = await sb
    .from("menu_items")
    .select("*", { count: "exact", head: true })
    .eq("chain_restaurant_id", id);
  const sheetCount = sheetByChain[chain]?.length ?? 0;
  totalDb += count ?? 0;
  totalSheet += sheetCount;
  console.log(`${chain} | ${count} | ${sheetCount} | ${sheetCount - (count ?? 0)}`);
}
console.log(`---|---|---|---`);
console.log(`TOTAL | ${totalDb} | ${totalSheet} | ${totalSheet - totalDb}`);

// 7. Check food_logs FK behavior - count logs that reference these chains' items
const allChainIds = chains.map((c) => c.id);
const { data: itemIds } = await sb
  .from("menu_items")
  .select("id")
  .in("chain_restaurant_id", allChainIds);
const ids = (itemIds ?? []).map((r) => r.id);

let logsCount = 0;
if (ids.length) {
  // batch in chunks of 100 to avoid URL length limit
  for (let i = 0; i < ids.length; i += 100) {
    const batch = ids.slice(i, i + 100);
    const { count } = await sb
      .from("food_logs")
      .select("*", { count: "exact", head: true })
      .in("menu_item_id", batch);
    logsCount += count ?? 0;
  }
}
console.log(`\n[DB] food_logs referencing these 10 chains' items: ${logsCount}`);
console.log(`(If we DELETE/INSERT, those logs may lose their menu_item_id reference.)`);

// 8. Sample current menu_items columns
const { data: sample } = await sb
  .from("menu_items")
  .select("*")
  .limit(1);
if (sample?.[0]) {
  console.log(`\n[DB] menu_items columns:`, Object.keys(sample[0]).join(", "));
}
