// Final audit: verify all conveni sheet rows are in DB.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET = ["セブンイレブン", "ファミリーマート", "ローソン"];

function normalize(name) {
  return name.replace(/[®™©]/g, "").replace(/[（(]/g, "(").replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).toLowerCase();
}

const raw = fs.readFileSync("/tmp/tabenavi_conveni.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET);
const cMap = Object.fromEntries(chains.map((c) => [c.name, c.id]));

let allDb = [];
for (let p = 0; ; p++) {
  const { data } = await sb.from("menu_items").select("id, name, chain_restaurant_id, calories, protein, fat, carbs")
    .in("chain_restaurant_id", chains.map((c) => c.id)).order("id").range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  allDb = allDb.concat(data); if (data.length < 1000) break;
}

const dbByChain = {};
for (const it of allDb) {
  if (!dbByChain[it.chain_restaurant_id]) dbByChain[it.chain_restaurant_id] = new Set();
  dbByChain[it.chain_restaurant_id].add(normalize(it.name));
}

const missing = [];
for (const r of rows) {
  const cId = cMap[r["チェーン"]];
  if (!dbByChain[cId]?.has(normalize(r["商品名"]))) missing.push(r);
}

console.log(`[db] ${allDb.length} items / [sheet] ${rows.length} rows`);
console.log(`Missing from DB: ${missing.length}`);
for (const m of missing.slice(0, 10)) console.log(`  ${m["チェーン"]} | ${m["商品名"]}`);

console.log(`\n=== Final per-chain counts ===`);
let totalDb = 0, totalSheet = 0;
for (const c of TARGET) {
  const cId = cMap[c];
  const dbN = (dbByChain[cId]?.size ?? 0);
  const dbCount = allDb.filter((it) => it.chain_restaurant_id === cId).length;
  const sheetN = rows.filter((r) => r["チェーン"] === c).length;
  totalDb += dbCount; totalSheet += sheetN;
  console.log(`  ${c}: DB ${dbCount} / Sheet ${sheetN} / Diff +${dbCount - sheetN}`);
}
console.log(`  TOTAL: DB ${totalDb} / Sheet ${totalSheet}`);

// Sample integrity
console.log(`\n=== Sample data ===`);
const samples = [
  ["セブンイレブン", "手巻おにぎり ツナマヨネーズ"],
  ["ファミリーマート", "サラダチキン"],
  ["ローソン", "サラダチキン"],
];
for (const [chain, name] of samples) {
  const cId = cMap[chain];
  const item = allDb.find((it) => it.chain_restaurant_id === cId && normalize(it.name).includes(normalize(name)));
  if (item) console.log(`  ${chain} | ${item.name}: ${item.calories}/${item.protein}/${item.fat}/${item.carbs}`);
  else console.log(`  ${chain} | ${name}: NOT FOUND`);
}
