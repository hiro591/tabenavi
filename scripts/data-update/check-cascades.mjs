// Find the 17 cascade duplicates: DB items that normalize to same key within a chain.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
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

const TARGET = ["マクドナルド", "松屋", "吉野家", "すき家", "ガスト"];
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET);
const cIdName = Object.fromEntries(chains.map((c) => [c.id, c.name]));

let allDb = [];
for (let p = 0; ; p++) {
  const { data } = await sb.from("menu_items").select("id, name, chain_restaurant_id, calories, created_at")
    .in("chain_restaurant_id", chains.map((c) => c.id)).order("id").range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  allDb = allDb.concat(data); if (data.length < 1000) break;
}

// Group by chain + normalized name
const groups = {};
for (const it of allDb) {
  const k = `${it.chain_restaurant_id}|${normalize(it.name)}`;
  if (!groups[k]) groups[k] = [];
  groups[k].push(it);
}

const cascades = Object.entries(groups).filter(([_, arr]) => arr.length > 1);
console.log(`Cascade groups (2+ items normalize to same): ${cascades.length}`);
console.log(`Total extra rows: ${cascades.reduce((s, [_, a]) => s + a.length - 1, 0)}\n`);

for (const [k, arr] of cascades) {
  const chain = cIdName[arr[0].chain_restaurant_id];
  console.log(`[${chain}] normalized: "${k.split("|")[1]}"`);
  arr.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  for (const it of arr) console.log(`  "${it.name}" | ${it.calories}kcal | id=${it.id.slice(0, 8)} | created ${it.created_at.slice(0, 10)}`);
  console.log("");
}
