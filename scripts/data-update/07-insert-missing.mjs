// Insert just the 7 missing items found by audit.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const APPLY = process.argv.includes("--apply");
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

const num = (v) => { if (v === "" || v == null) return 0; const n = Number(v); return isNaN(n) ? 0 : n; };
const intNum = (v) => Math.round(num(v));

// Read sheet
const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });

// Get chains
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));

// Fetch ALL DB items with proper pagination (order by id)
let allItems = [];
for (let page = 0; ; page++) {
  const { data } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id")
    .in("chain_restaurant_id", chains.map((c) => c.id))
    .order("id", { ascending: true })
    .range(page * 1000, page * 1000 + 999);
  if (!data || data.length === 0) break;
  allItems = allItems.concat(data);
  if (data.length < 1000) break;
}
console.log(`[db] ${allItems.length} items fetched`);

// Build chain -> normalized name set
const dbByChain = {};
for (const it of allItems) {
  const cId = it.chain_restaurant_id;
  if (!dbByChain[cId]) dbByChain[cId] = new Set();
  dbByChain[cId].add(normalize(it.name));
}

// Find missing rows
const missing = [];
for (const r of rows) {
  const cId = chainNameToId[r["チェーン"]];
  if (!cId) continue;
  if (!dbByChain[cId]?.has(normalize(r["商品名"]))) {
    missing.push(r);
  }
}

console.log(`[missing] ${missing.length} sheet rows not in DB:`);
for (const m of missing) {
  console.log(`  ${m["チェーン"]} | ${m["商品名"]} | ${m["カロリー(kcal)"]}kcal`);
}

if (!APPLY) { console.log(`\n[DRY] pass --apply to insert.`); process.exit(0); }

const inserts = missing.map((r) => ({
  chain_restaurant_id: chainNameToId[r["チェーン"]],
  name: r["商品名"],
  calories: intNum(r["カロリー(kcal)"]),
  protein: num(r["タンパク質(g)"]),
  fat: num(r["脂質(g)"]),
  carbs: num(r["炭水化物(g)"]),
  category: r["カテゴリ"] || null,
  source_type: "chain_restaurant",
}));

const { error, data } = await sb.from("menu_items").insert(inserts).select("id");
if (error) { console.error("INSERT failed:", error); process.exit(1); }
console.log(`[ok] inserted ${data.length} items`);
