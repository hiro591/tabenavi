// Delete orphans across all 14 chains (11 main + 3 conveni).
// Modes: DRY (default), APPLY (--apply)
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const APPLY = process.argv.includes("--apply");
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = [
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト", "バーミヤン",
  "やよい軒", "大戸屋", "CoCo壱番屋", "松のや", "くら寿司",
  "セブンイレブン", "ファミリーマート", "ローソン",
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

function readSheet(file) {
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split("\n");
  const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
  return parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });
}

const sheet11 = readSheet("/tmp/tabenavi_sheet_v2.csv");
const sheetConveni = readSheet("/tmp/tabenavi_conveni.csv");
const allRows = [...sheet11, ...sheetConveni];
console.log(`[sheets] ${sheet11.length} (11chains) + ${sheetConveni.length} (conveni) = ${allRows.length} total`);

// Build chain → set of normalized sheet names
const sheetByChain = {};
for (const r of allRows) {
  if (!sheetByChain[r["チェーン"]]) sheetByChain[r["チェーン"]] = new Set();
  sheetByChain[r["チェーン"]].add(normalize(r["商品名"]));
}

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const chainIdToName = Object.fromEntries(chains.map((c) => [c.id, c.name]));

// Fetch ALL DB items with pagination (id ordered)
let allDbItems = [];
for (let p = 0; ; p++) {
  const { data } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id")
    .in("chain_restaurant_id", chains.map((c) => c.id))
    .order("id", { ascending: true })
    .range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  allDbItems = allDbItems.concat(data);
  if (data.length < 1000) break;
}
console.log(`[db] ${allDbItems.length} existing items across ${chains.length} chains`);

// Identify orphans
const orphans = [];
for (const it of allDbItems) {
  const chainName = chainIdToName[it.chain_restaurant_id];
  const sheetSet = sheetByChain[chainName] ?? new Set();
  if (!sheetSet.has(normalize(it.name))) orphans.push(it);
}
console.log(`\n[orphans] Total: ${orphans.length}`);

// Per chain breakdown
const byChain = {};
for (const o of orphans) {
  const c = chainIdToName[o.chain_restaurant_id];
  byChain[c] = (byChain[c] || 0) + 1;
}
console.log(`Per chain orphans:`);
for (const [c, n] of Object.entries(byChain).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${c}: ${n}`);
}

// Check food_logs references
console.log(`\n[safety check] food_logs references...`);
const orphanIds = orphans.map((o) => o.id);
const refSet = new Set();
for (let i = 0; i < orphanIds.length; i += 100) {
  const batch = orphanIds.slice(i, i + 100);
  const { data: logs } = await sb.from("food_logs").select("menu_item_id").in("menu_item_id", batch);
  if (logs) logs.forEach((l) => refSet.add(l.menu_item_id));
}
console.log(`Orphans referenced by food_logs: ${refSet.size}`);
if (refSet.size > 0) {
  console.log(`(These food_logs will have menu_item_id set to NULL after deletion)`);
  for (const o of orphans.filter((o) => refSet.has(o.id)).slice(0, 20)) {
    console.log(`  ${chainIdToName[o.chain_restaurant_id]} | ${o.name}`);
  }
}

// Also check favorites references
console.log(`\n[safety check] favorites references...`);
const favRefSet = new Set();
for (let i = 0; i < orphanIds.length; i += 100) {
  const batch = orphanIds.slice(i, i + 100);
  const { data: favs } = await sb.from("favorites").select("menu_item_id").in("menu_item_id", batch);
  if (favs) favs.forEach((f) => favRefSet.add(f.menu_item_id));
}
console.log(`Orphans referenced by favorites: ${favRefSet.size}`);

if (!APPLY) {
  console.log(`\n[DRY RUN] Pass --apply to delete ${orphans.length} orphans.`);
  process.exit(0);
}

// Delete in batches
console.log(`\n=== DELETING ${orphans.length} orphans ===`);
const BATCH = 100;
let deleted = 0, errors = 0;
for (let i = 0; i < orphanIds.length; i += BATCH) {
  const batch = orphanIds.slice(i, i + BATCH);
  const { error } = await sb.from("menu_items").delete().in("id", batch);
  if (error) { console.error(`fail batch ${i}:`, error.message); errors += batch.length; }
  else deleted += batch.length;
  process.stdout.write(`\r  progress: ${Math.min(i + BATCH, orphanIds.length)}/${orphanIds.length}`);
}
console.log(`\n  DELETE: ${deleted} ok, ${errors} err`);

// Final audit
console.log(`\n=== POST-DELETE AUDIT ===`);
let totalAfter = 0, totalSheet = 0;
for (const c of TARGET_CHAINS) {
  const id = chainNameToId[c];
  if (!id) continue;
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  const sheetN = sheetByChain[c]?.size ?? 0;
  totalAfter += count ?? 0;
  totalSheet += sheetN;
  const ok = count === sheetN ? "✓" : `(diff +${count - sheetN})`;
  console.log(`  ${c}: ${count} / sheet ${sheetN} ${ok}`);
}
console.log(`  TOTAL: DB ${totalAfter} / Sheet ${totalSheet}`);
