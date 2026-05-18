// Step 2: NULL out food_logs.menu_item_id for orphan refs, then delete remaining orphans.
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
  return name.replace(/[®™©]/g, "").replace(/[（(]/g, "(").replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\(?並盛\)?$/, "(並)").replace(/\(?大盛\)?$/, "(大)").replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)").replace(/\(?中盛\)?$/, "(中)").toLowerCase();
}
function readSheet(file) {
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split("\n");
  const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
  return parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });
}

const allRows = [...readSheet("/tmp/tabenavi_sheet_v2.csv"), ...readSheet("/tmp/tabenavi_conveni.csv")];
const sheetByChain = {};
for (const r of allRows) {
  if (!sheetByChain[r["チェーン"]]) sheetByChain[r["チェーン"]] = new Set();
  sheetByChain[r["チェーン"]].add(normalize(r["商品名"]));
}

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainIdToName = Object.fromEntries(chains.map((c) => [c.id, c.name]));

let allDb = [];
for (let p = 0; ; p++) {
  const { data } = await sb.from("menu_items").select("id, name, chain_restaurant_id")
    .in("chain_restaurant_id", chains.map((c) => c.id)).order("id").range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  allDb = allDb.concat(data); if (data.length < 1000) break;
}

const orphans = allDb.filter((it) => {
  const c = chainIdToName[it.chain_restaurant_id];
  return !sheetByChain[c]?.has(normalize(it.name));
});
console.log(`[orphans remaining] ${orphans.length}`);

const orphanIds = orphans.map((o) => o.id);

// Step A: Find food_logs referencing these orphans
console.log(`\n[step A] Finding food_logs that reference orphans...`);
const refLogIds = [];
for (let i = 0; i < orphanIds.length; i += 100) {
  const batch = orphanIds.slice(i, i + 100);
  const { data: logs } = await sb.from("food_logs").select("id, menu_item_id").in("menu_item_id", batch);
  if (logs) refLogIds.push(...logs.map((l) => l.id));
}
console.log(`  Found ${refLogIds.length} food_logs to nullify`);

if (!APPLY) {
  console.log(`\n[DRY] Would NULL menu_item_id on ${refLogIds.length} logs, then delete ${orphans.length} orphans.`);
  process.exit(0);
}

// Step B: NULL out menu_item_id on those food_logs
if (refLogIds.length > 0) {
  console.log(`\n[step B] Nullifying menu_item_id on ${refLogIds.length} food_logs...`);
  for (let i = 0; i < refLogIds.length; i += 100) {
    const batch = refLogIds.slice(i, i + 100);
    const { error } = await sb.from("food_logs").update({ menu_item_id: null }).in("id", batch);
    if (error) { console.error(`  fail:`, error.message); process.exit(1); }
  }
  console.log(`  ✓ done`);
}

// Step C: Now delete orphans
console.log(`\n[step C] Deleting ${orphans.length} orphans...`);
let deleted = 0, errors = 0;
const BATCH = 100;
for (let i = 0; i < orphanIds.length; i += BATCH) {
  const batch = orphanIds.slice(i, i + BATCH);
  const { error } = await sb.from("menu_items").delete().in("id", batch);
  if (error) { console.error(`  fail batch ${i}:`, error.message); errors += batch.length; }
  else deleted += batch.length;
  process.stdout.write(`\r  ${Math.min(i + BATCH, orphanIds.length)}/${orphanIds.length}`);
}
console.log(`\n  DELETE: ${deleted} ok, ${errors} err`);

// Final audit
console.log(`\n=== POST-DELETE AUDIT ===`);
let ok = 0, total = 0;
for (const c of TARGET_CHAINS) {
  const id = chains.find((ch) => ch.name === c)?.id;
  if (!id) continue;
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  const sheetN = sheetByChain[c]?.size ?? 0;
  total += count ?? 0;
  const status = count === sheetN ? "✓" : `(diff +${count - sheetN})`;
  if (count === sheetN) ok++;
  console.log(`  ${c}: ${count} / sheet ${sheetN} ${status}`);
}
console.log(`  TOTAL: DB ${total} / Sheet 3412 / Match: ${ok}/14`);
