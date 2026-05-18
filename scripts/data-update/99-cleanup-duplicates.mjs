// Emergency cleanup: remove duplicate menu_items created by the bug in 03-apply-v2.mjs.
// Strategy: for each (chain_id, name) group with count > 1 in target chains,
// keep the OLDEST (created_at ASC) and delete the rest.
// Modes: DRY (default), APPLY (with --apply)
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const APPLY = process.argv.includes("--apply");
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = [
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト",
  "バーミヤン", "やよい軒", "大戸屋", "CoCo壱番屋", "松のや", "くら寿司",
];

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainIds = chains.map((c) => c.id);
const chainName = Object.fromEntries(chains.map((c) => [c.id, c.name]));

// Fetch ALL items (paginate past 1000 limit)
let allItems = [];
const PAGE = 1000;
for (let page = 0; ; page++) {
  const { data, error } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id, created_at")
    .in("chain_restaurant_id", chainIds)
    .order("created_at", { ascending: true })
    .range(page * PAGE, page * PAGE + PAGE - 1);
  if (error) { console.error(error); process.exit(1); }
  if (!data || data.length === 0) break;
  allItems = allItems.concat(data);
  if (data.length < PAGE) break;
}
console.log(`[db] ${allItems.length} items fetched`);

// Group by (chain_id, name)
const groups = {};
for (const it of allItems) {
  const k = `${it.chain_restaurant_id}|${it.name}`;
  if (!groups[k]) groups[k] = [];
  groups[k].push(it);
}

const dupGroups = Object.entries(groups).filter(([_, arr]) => arr.length > 1);
console.log(`[dup] ${dupGroups.length} duplicate groups`);

const toDelete = [];
for (const [k, arr] of dupGroups) {
  // Sort by created_at ASC, keep first, delete rest
  arr.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  toDelete.push(...arr.slice(1));
}
console.log(`[plan] DELETE ${toDelete.length} duplicate rows`);

// Show distribution by chain
const byChain = {};
for (const it of toDelete) {
  const c = chainName[it.chain_restaurant_id];
  byChain[c] = (byChain[c] || 0) + 1;
}
console.log(`\nPer chain:`);
for (const [c, n] of Object.entries(byChain)) console.log(`  ${c}: ${n}`);

// Sample
console.log(`\nSample (first 10):`);
for (const it of toDelete.slice(0, 10)) {
  console.log(`  ${chainName[it.chain_restaurant_id]} | ${it.name} | created ${it.created_at}`);
}

if (!APPLY) {
  console.log(`\n[DRY RUN] Pass --apply to delete.`);
  process.exit(0);
}

// Verify none of them are referenced by food_logs - if so, log warning but proceed
const ids = toDelete.map((i) => i.id);
const refIds = new Set();
for (let i = 0; i < ids.length; i += 100) {
  const batch = ids.slice(i, i + 100);
  const { data: logs } = await sb.from("food_logs").select("menu_item_id").in("menu_item_id", batch);
  if (logs) logs.forEach((l) => refIds.add(l.menu_item_id));
}
console.log(`\n[check] ${refIds.size} duplicates are referenced by food_logs (their menu_item_id will become NULL)`);

// Delete in batches
console.log(`\n=== DELETING ===`);
const BATCH = 100;
let deleted = 0, errors = 0;
for (let i = 0; i < ids.length; i += BATCH) {
  const batch = ids.slice(i, i + BATCH);
  const { error } = await sb.from("menu_items").delete().in("id", batch);
  if (error) { console.error(`  fail batch ${i}:`, error.message); errors += batch.length; }
  else deleted += batch.length;
  process.stdout.write(`\r  progress: ${Math.min(i + BATCH, ids.length)}/${ids.length}`);
}
console.log(`\n  DELETE: ${deleted} ok, ${errors} errors`);

// Audit
console.log(`\n=== POST-CLEANUP AUDIT ===`);
let total = 0;
for (const c of TARGET_CHAINS) {
  const id = chains.find((ch) => ch.name === c).id;
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  total += count ?? 0;
  console.log(`  ${c}: ${count}`);
}
console.log(`  TOTAL: ${total}`);
