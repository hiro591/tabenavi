// Inspect v2 sheet: skip leading # comments + empty rows, handle 8-col schema.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = [
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト",
  "バーミヤン", "やよい軒", "大戸屋", "CoCo壱番屋", "松のや",
  "くら寿司",
];

// 1. Read + strip leading comments
const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
if (dataStart < 0) { console.error("Header row not found"); process.exit(1); }
const cleaned = lines.slice(dataStart).join("\n");

const rows = parse(cleaned, { columns: true, skip_empty_lines: true, trim: true });
console.log(`\n[CSV] Total data rows: ${rows.length}`);
console.log(`[CSV] Columns: ${Object.keys(rows[0] || {}).join(" | ")}`);

// 2. Verify chains
const sheetByChain = {};
for (const r of rows) {
  const chain = r["チェーン"];
  if (!sheetByChain[chain]) sheetByChain[chain] = [];
  sheetByChain[chain].push(r);
}
const sheetChains = Object.keys(sheetByChain);
const unknown = sheetChains.filter((c) => !TARGET_CHAINS.includes(c));
const missing = TARGET_CHAINS.filter((c) => !sheetChains.includes(c));
if (unknown.length) console.error(`[ERROR] Unknown chains:`, unknown);
if (missing.length) console.error(`[WARN] Target chains missing:`, missing);

// 3. Duplicate detection
const byKey = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  byKey[key] = (byKey[key] || 0) + 1;
}
const dupes = Object.entries(byKey).filter(([_, n]) => n > 1);
console.log(`\n[DUPES] Same (chain,name) appearing 2+ times: ${dupes.length}`);

if (dupes.length > 0) {
  // Check if duplicate nutritions match
  const dupGroups = {};
  for (const r of rows) {
    const key = `${r["チェーン"]}|${r["商品名"]}`;
    if (!byKey[key] || byKey[key] < 2) continue;
    if (!dupGroups[key]) dupGroups[key] = [];
    dupGroups[key].push(r);
  }
  let identicalDupes = 0, differentDupes = 0;
  const exDiff = [];
  for (const [key, arr] of Object.entries(dupGroups)) {
    const sigs = arr.map((r) => `${r["カロリー(kcal)"]}/${r["タンパク質(g)"]}/${r["脂質(g)"]}/${r["炭水化物(g)"]}`);
    if (sigs.every((s) => s === sigs[0])) identicalDupes++;
    else { differentDupes++; if (exDiff.length < 10) exDiff.push({ key, sigs, cats: arr.map((r) => r["カテゴリ"]) }); }
  }
  console.log(`  Identical-nutrition: ${identicalDupes}`);
  console.log(`  Different-nutrition: ${differentDupes}`);
  if (exDiff.length) {
    console.log(`\n  Different-nutrition examples:`);
    for (const e of exDiff) {
      console.log(`    ${e.key}`);
      e.sigs.forEach((s, i) => console.log(`      [${e.cats[i]}] ${s}`));
    }
  }
}

// 4. Empty PFC analysis (user confirmed: empty = official site doesn't publish)
let calOnly = 0, allFilled = 0, partial = 0, missingCal = 0;
const perChainEmpty = {};
for (const r of rows) {
  const cal = r["カロリー(kcal)"];
  const p = r["タンパク質(g)"], f = r["脂質(g)"], c = r["炭水化物(g)"];
  const num = (v) => v !== "" && v != null && !isNaN(Number(v));
  if (!num(cal)) missingCal++;
  else if (num(p) && num(f) && num(c)) allFilled++;
  else if (!num(p) && !num(f) && !num(c)) {
    calOnly++;
    const chain = r["チェーン"];
    perChainEmpty[chain] = (perChainEmpty[chain] || 0) + 1;
  } else partial++;
}
console.log(`\n[DATA QUALITY]`);
console.log(`  Calories + full PFC: ${allFilled}`);
console.log(`  Calories only (PFC missing intentionally): ${calOnly}`);
console.log(`  Partial PFC (1-2 of P/F/C missing): ${partial}`);
console.log(`  Missing calories: ${missingCal}`);
console.log(`\n  Cal-only per chain:`);
for (const [c, n] of Object.entries(perChainEmpty)) console.log(`    ${c}: ${n}`);

// 5. DB comparison
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainMap = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const dbMissing = TARGET_CHAINS.filter((c) => !chainMap[c]);
if (dbMissing.length) console.error(`\n[WARN] Target chains not in DB:`, dbMissing);

console.log(`\n[DB vs SHEET]`);
console.log(`Chain | DB | Sheet | Δ`);
let totalDb = 0, totalSheet = 0;
for (const chain of TARGET_CHAINS) {
  const id = chainMap[chain];
  const sheetN = sheetByChain[chain]?.length ?? 0;
  if (!id) { console.log(`${chain} | (chain not in DB) | ${sheetN} | -`); continue; }
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  totalDb += count ?? 0;
  totalSheet += sheetN;
  console.log(`${chain} | ${count} | ${sheetN} | ${sheetN - (count ?? 0)}`);
}
console.log(`TOTAL | ${totalDb} | ${totalSheet} | ${totalSheet - totalDb}`);
