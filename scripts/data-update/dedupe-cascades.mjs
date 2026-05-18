// Remove the 17 cascade duplicates: keep oldest (created_at ASC), delete rest.
// Also handles food_logs FK by nullifying first.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const APPLY = process.argv.includes("--apply");
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

function normalize(name) {
  return name.replace(/[®™©]/g, "").replace(/[（(]/g, "(").replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\(?並盛\)?$/, "(並)").replace(/\(?大盛\)?$/, "(大)").replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)").replace(/\(?中盛\)?$/, "(中)").toLowerCase();
}

const TARGET = ["マクドナルド", "松屋", "吉野家", "すき家", "ガスト", "バーミヤン",
  "やよい軒", "大戸屋", "CoCo壱番屋", "松のや", "くら寿司",
  "セブンイレブン", "ファミリーマート", "ローソン"];

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET);

let allDb = [];
for (let p = 0; ; p++) {
  const { data } = await sb.from("menu_items").select("id, name, chain_restaurant_id, created_at")
    .in("chain_restaurant_id", chains.map((c) => c.id)).order("id").range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  allDb = allDb.concat(data); if (data.length < 1000) break;
}

const groups = {};
for (const it of allDb) {
  const k = `${it.chain_restaurant_id}|${normalize(it.name)}`;
  if (!groups[k]) groups[k] = [];
  groups[k].push(it);
}

const toDelete = [];
for (const [_, arr] of Object.entries(groups).filter(([_, a]) => a.length > 1)) {
  arr.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  toDelete.push(...arr.slice(1));
}
const ids = toDelete.map((i) => i.id);
console.log(`[plan] DELETE ${toDelete.length} cascade dups`);

if (!APPLY) { console.log(`[DRY] pass --apply to execute`); process.exit(0); }

// Nullify FK refs
const refLogIds = [];
for (let i = 0; i < ids.length; i += 100) {
  const batch = ids.slice(i, i + 100);
  const { data: logs } = await sb.from("food_logs").select("id").in("menu_item_id", batch);
  if (logs) refLogIds.push(...logs.map((l) => l.id));
}
console.log(`Nullifying ${refLogIds.length} food_logs refs`);
if (refLogIds.length > 0) {
  for (let i = 0; i < refLogIds.length; i += 100) {
    await sb.from("food_logs").update({ menu_item_id: null }).in("id", refLogIds.slice(i, i + 100));
  }
}

// Delete
let ok = 0, err = 0;
for (let i = 0; i < ids.length; i += 100) {
  const batch = ids.slice(i, i + 100);
  const { error } = await sb.from("menu_items").delete().in("id", batch);
  if (error) { console.error(error.message); err += batch.length; } else ok += batch.length;
}
console.log(`DELETE: ${ok} ok, ${err} err`);

// Final audit
console.log(`\n=== FINAL AUDIT ===`);
let total = 0;
for (const c of TARGET) {
  const id = chains.find((ch) => ch.name === c).id;
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  total += count ?? 0;
  console.log(`  ${c}: ${count}`);
}
console.log(`  TOTAL: ${total}`);
