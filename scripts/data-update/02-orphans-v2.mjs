// Find true orphans (DB items not in sheet) after normalization, for v2 sheet.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = [
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト",
  "バーミヤン", "やよい軒", "大戸屋", "CoCo壱番屋", "松のや", "くら寿司",
];

function normalize(name) {
  return name
    .replace(/[®™©]/g, "")
    .replace(/[（(]/g, "(")
    .replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "")
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\(?並盛\)?$/, "(並)")
    .replace(/\(?大盛\)?$/, "(大)")
    .replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)")
    .replace(/\(?中盛\)?$/, "(中)")
    .toLowerCase();
}

const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const cleaned = lines.slice(dataStart).join("\n");
const rows = parse(cleaned, { columns: true, skip_empty_lines: true, trim: true });

const sheetByChainNorm = {};
const sheetByChainOrig = {};
for (const r of rows) {
  const chain = r["チェーン"];
  if (!sheetByChainNorm[chain]) { sheetByChainNorm[chain] = new Set(); sheetByChainOrig[chain] = []; }
  sheetByChainNorm[chain].add(normalize(r["商品名"]));
  sheetByChainOrig[chain].push(r["商品名"]);
}

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainMap = Object.fromEntries(chains.map((c) => [c.id, c.name]));
const { data: dbItems } = await sb
  .from("menu_items")
  .select("id, name, chain_restaurant_id, calories, protein, fat, carbs")
  .in("chain_restaurant_id", chains.map((c) => c.id));

const trueOrphans = [], falseOrphans = [];
for (const item of dbItems) {
  const chain = chainMap[item.chain_restaurant_id];
  const sheetSet = sheetByChainNorm[chain] ?? new Set();
  if (sheetSet.has(normalize(item.name))) {
    falseOrphans.push({ chain, name: item.name });
  } else {
    trueOrphans.push({ chain, name: item.name, calories: item.calories, id: item.id });
  }
}

console.log(`=== ORPHAN ANALYSIS (post-normalization) ===`);
console.log(`False orphans (matched via normalization): ${falseOrphans.length}`);
console.log(`True orphans (only in DB, not in sheet): ${trueOrphans.length}`);

const byChain = {};
for (const o of trueOrphans) {
  if (!byChain[o.chain]) byChain[o.chain] = [];
  byChain[o.chain].push(o);
}
console.log(`\n--- True orphans by chain ---`);
for (const [chain, list] of Object.entries(byChain)) {
  console.log(`\n${chain} (${list.length}):`);
  for (const o of list.slice(0, 100)) console.log(`  ${o.name} | ${o.calories}kcal`);
}

// food_logs referencing orphans
const orphanIds = trueOrphans.map((o) => o.id);
const refSet = new Set();
if (orphanIds.length) {
  for (let i = 0; i < orphanIds.length; i += 100) {
    const batch = orphanIds.slice(i, i + 100);
    const { data: logs } = await sb.from("food_logs").select("menu_item_id").in("menu_item_id", batch);
    if (logs) logs.forEach((l) => refSet.add(l.menu_item_id));
  }
}
console.log(`\n--- True orphans referenced by food_logs: ${refSet.size} ---`);
for (const o of trueOrphans.filter((o) => refSet.has(o.id))) {
  console.log(`  ${o.chain} | ${o.name}`);
}
