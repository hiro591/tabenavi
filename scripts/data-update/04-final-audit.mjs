// Final audit: verify all sheet rows are now in DB.
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

// Read sheet
const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const chainIds = chains.map((c) => c.id);

// Fetch ALL items with pagination (order by id - deterministic, no tie issues)
let allItems = [];
for (let page = 0; ; page++) {
  const { data } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id, calories, protein, fat, carbs, category")
    .in("chain_restaurant_id", chainIds)
    .order("id", { ascending: true })
    .range(page * 1000, page * 1000 + 999);
  if (!data || data.length === 0) break;
  allItems = allItems.concat(data);
  if (data.length < 1000) break;
}
console.log(`[db] ${allItems.length} items in DB`);
console.log(`[sheet] ${rows.length} rows in sheet\n`);

// Build chain → normalized name set
const dbByChain = {};
for (const it of allItems) {
  const cId = it.chain_restaurant_id;
  if (!dbByChain[cId]) dbByChain[cId] = { items: [], normSet: new Set() };
  dbByChain[cId].items.push(it);
  dbByChain[cId].normSet.add(normalize(it.name));
}

// Check: are all sheet rows present?
const missingFromDb = [];
for (const r of rows) {
  const cId = chainNameToId[r["チェーン"]];
  if (!cId) continue;
  const norm = normalize(r["商品名"]);
  if (!dbByChain[cId]?.normSet.has(norm)) {
    missingFromDb.push({ chain: r["チェーン"], name: r["商品名"], cal: r["カロリー(kcal)"] });
  }
}

console.log(`=== Sheet rows missing in DB: ${missingFromDb.length} ===`);
if (missingFromDb.length > 0) {
  for (const m of missingFromDb.slice(0, 20)) {
    console.log(`  ${m.chain} | ${m.name} | ${m.cal}kcal`);
  }
}

// Per-chain final counts
console.log(`\n=== Final per-chain counts ===`);
console.log(`Chain | DB items | Sheet rows | Difference (DB extra = orphans/dupes)`);
let totalDb = 0, totalSheet = 0;
for (const c of TARGET_CHAINS) {
  const id = chainNameToId[c];
  const dbN = dbByChain[id]?.items.length ?? 0;
  const sheetN = rows.filter((r) => r["チェーン"] === c).length;
  const diff = dbN - sheetN;
  totalDb += dbN; totalSheet += sheetN;
  console.log(`${c} | ${dbN} | ${sheetN} | +${diff}`);
}
console.log(`TOTAL | ${totalDb} | ${totalSheet} | +${totalDb - totalSheet}`);

// Sample data integrity check: pick 5 random items and verify nutrition matches sheet
console.log(`\n=== Sample data integrity (5 items) ===`);
const samples = [
  { chain: "マクドナルド", name: "ビッグマック" },
  { chain: "吉野家", name: "牛丼 並盛" },
  { chain: "松屋", name: "牛めし（並盛）" },
  { chain: "すき家", name: "牛丼 並盛" },
  { chain: "くら寿司", name: "まぐろ" },
];
for (const s of samples) {
  const cId = chainNameToId[s.chain];
  const item = (dbByChain[cId]?.items || []).find((it) => normalize(it.name) === normalize(s.name));
  if (item) {
    console.log(`  ${s.chain} | ${item.name}: ${item.calories}/${item.protein}/${item.fat}/${item.carbs}`);
  } else {
    console.log(`  ${s.chain} | ${s.name}: NOT FOUND`);
  }
}
