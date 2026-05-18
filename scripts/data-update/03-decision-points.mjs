// Decision-points report: dupes detail + DB items NOT in sheet (would orphan)
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

const csv = fs.readFileSync("/tmp/tabenavi_sheet.csv", "utf8");
const rows = parse(csv, { columns: true, skip_empty_lines: true, trim: true });

// 1. Get all 17 different-nutrition dupes with sources
const byKey = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  if (!byKey[key]) byKey[key] = [];
  byKey[key].push(r);
}

console.log(`=== ALL 17 DIFFERENT-NUTRITION DUPES (full detail) ===\n`);
let n = 0;
for (const [key, arr] of Object.entries(byKey)) {
  if (arr.length < 2) continue;
  const sigs = arr.map((r) => `${r["カロリー(kcal)"]}/${r["タンパク質(g)"]}/${r["脂質(g)"]}/${r["炭水化物(g)"]}`);
  const allSame = sigs.every((s) => s === sigs[0]);
  if (allSame) continue;
  n++;
  console.log(`[${n}] ${key}`);
  arr.forEach((r, i) => {
    console.log(`    [${r["カテゴリ"]}] cal=${r["カロリー(kcal)"]} p=${r["タンパク質(g)"]} f=${r["脂質(g)"]} c=${r["炭水化物(g)"]}`);
    console.log(`        URL: ${r["URL"]}`);
    console.log(`        備考: ${r["備考"] || "(empty)"}`);
  });
  console.log("");
}

// 2. Find DB items NOT in sheet (would be orphaned if we delete-and-replace)
console.log(`\n=== DB ITEMS NOT IN SHEET (would orphan if delete-replace) ===\n`);

const sheetKeys = new Set();
for (const r of rows) sheetKeys.add(`${r["チェーン"]}|${r["商品名"]}`);

const { data: chains } = await sb
  .from("chain_restaurants")
  .select("id, name")
  .in("name", TARGET_CHAINS);
const chainMap = Object.fromEntries(chains.map((c) => [c.id, c.name]));
const chainIds = chains.map((c) => c.id);

const { data: dbItems } = await sb
  .from("menu_items")
  .select("id, name, chain_restaurant_id, calories, protein, fat, carbs")
  .in("chain_restaurant_id", chainIds);

const orphans = [];
for (const item of dbItems) {
  const chainName = chainMap[item.chain_restaurant_id];
  const key = `${chainName}|${item.name}`;
  if (!sheetKeys.has(key)) {
    orphans.push({ chain: chainName, ...item });
  }
}

console.log(`Total DB items not found in sheet: ${orphans.length}\n`);
const byChain = {};
for (const o of orphans) {
  if (!byChain[o.chain]) byChain[o.chain] = [];
  byChain[o.chain].push(o);
}
for (const [chain, list] of Object.entries(byChain)) {
  console.log(`\n--- ${chain} (${list.length} items) ---`);
  for (const o of list) {
    console.log(`  ${o.name} | ${o.calories}/${o.protein}/${o.fat}/${o.carbs}`);
  }
}

// 3. food_logs FK check - which items are referenced?
console.log(`\n\n=== food_logs that reference orphaned items ===`);
const orphanIds = orphans.map((o) => o.id);
let referencedOrphans = [];
if (orphanIds.length) {
  for (let i = 0; i < orphanIds.length; i += 100) {
    const batch = orphanIds.slice(i, i + 100);
    const { data: logs } = await sb
      .from("food_logs")
      .select("menu_item_id")
      .in("menu_item_id", batch);
    if (logs) referencedOrphans.push(...logs.map((l) => l.menu_item_id));
  }
}
const refSet = new Set(referencedOrphans);
console.log(`Orphan items referenced by food_logs: ${refSet.size}`);
if (refSet.size > 0) {
  for (const o of orphans.filter((o) => refSet.has(o.id))) {
    console.log(`  ${o.chain} | ${o.name}`);
  }
}

// 4. menu_items column nullability - check if PFC can be NULL
console.log(`\n=== Schema sanity: try inserting a NULL-PFC test row in dryrun ===`);
const testChainId = chains[0].id;
const { error: testErr } = await sb.rpc("noop").select(); // RPC won't exist but we test
// Instead: just check existing data for any zero/null
const { data: zeroProtein } = await sb
  .from("menu_items")
  .select("name, protein")
  .or("protein.is.null,protein.eq.0")
  .limit(3);
console.log(`Existing items with NULL or 0 protein:`, zeroProtein?.length, zeroProtein);
