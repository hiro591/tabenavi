// Normalize names and match true orphans
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

// Aggressive normalization for matching only
function normalize(name) {
  return name
    .replace(/[®™©]/g, "")
    .replace(/[（(]/g, "(")
    .replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "")
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    // unify size markers
    .replace(/\(?並盛\)?$/, "(並)")
    .replace(/\(?大盛\)?$/, "(大)")
    .replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)")
    .replace(/\(?中盛\)?$/, "(中)")
    .toLowerCase();
}

// Parse sheet
const csv = fs.readFileSync("/tmp/tabenavi_sheet.csv", "utf8");
const rows = parse(csv, { columns: true, skip_empty_lines: true, trim: true });

// Build sheet keys (normalized) per chain
const sheetByChainNorm = {};
const sheetByChainOrig = {};
for (const r of rows) {
  const chain = r["チェーン"];
  if (!sheetByChainNorm[chain]) { sheetByChainNorm[chain] = new Set(); sheetByChainOrig[chain] = []; }
  sheetByChainNorm[chain].add(normalize(r["商品名"]));
  sheetByChainOrig[chain].push(r["商品名"]);
}

// Get DB items
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainMap = Object.fromEntries(chains.map((c) => [c.id, c.name]));
const { data: dbItems } = await sb
  .from("menu_items")
  .select("id, name, chain_restaurant_id, calories, protein, fat, carbs")
  .in("chain_restaurant_id", chains.map((c) => c.id));

// Find true orphans (after normalization)
const trueOrphans = [];
const falseOrphans = [];
for (const item of dbItems) {
  const chain = chainMap[item.chain_restaurant_id];
  const sheetSet = sheetByChainNorm[chain] ?? new Set();
  const norm = normalize(item.name);
  if (sheetSet.has(norm)) {
    falseOrphans.push({ chain, name: item.name, normalized: norm });
  } else {
    trueOrphans.push({ chain, name: item.name, calories: item.calories, normalized: norm, id: item.id });
  }
}

console.log(`=== AFTER NORMALIZATION ===`);
console.log(`False orphans (DB name differs but sheet has same item): ${falseOrphans.length}`);
console.log(`True orphans (truly only in DB, not in sheet): ${trueOrphans.length}`);

console.log(`\n--- TRUE ORPHANS by chain ---`);
const orphByChain = {};
for (const o of trueOrphans) {
  if (!orphByChain[o.chain]) orphByChain[o.chain] = [];
  orphByChain[o.chain].push(o);
}
for (const [chain, list] of Object.entries(orphByChain)) {
  console.log(`\n${chain} (${list.length}):`);
  for (const o of list) console.log(`  ${o.name} | ${o.calories}kcal`);
}

console.log(`\n\n--- FALSE ORPHANS sample (DB name vs Sheet equiv via normalization) ---`);
for (const o of falseOrphans.slice(0, 30)) {
  // find matching sheet name
  const orig = sheetByChainOrig[o.chain].find((n) => normalize(n) === o.normalized);
  console.log(`  ${o.chain}: "${o.name}" ≈ "${orig}"`);
}

// Check food_logs for true orphans
const trueOrphanIds = trueOrphans.map((o) => o.id);
let refTrueOrphans = new Set();
if (trueOrphanIds.length) {
  for (let i = 0; i < trueOrphanIds.length; i += 100) {
    const batch = trueOrphanIds.slice(i, i + 100);
    const { data: logs } = await sb.from("food_logs").select("menu_item_id").in("menu_item_id", batch);
    if (logs) logs.forEach((l) => refTrueOrphans.add(l.menu_item_id));
  }
}
console.log(`\n\n--- TRUE ORPHANS referenced by food_logs: ${refTrueOrphans.size} ---`);
for (const o of trueOrphans.filter((o) => refTrueOrphans.has(o.id))) {
  console.log(`  ${o.chain} | ${o.name}`);
}
