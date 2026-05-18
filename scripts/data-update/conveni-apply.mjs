// Apply conveni v1 sheet to Supabase.
// Same robust pattern as 03-apply-v2.mjs (with all bugs fixed).
//   - INT rounding for calories
//   - Proper pagination for DB lookup
//   - Idempotent: re-run safe
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const APPLY = process.argv.includes("--apply");
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET_CHAINS = ["セブンイレブン", "ファミリーマート", "ローソン"];

function normalize(name) {
  return name
    .replace(/[®™©]/g, "")
    .replace(/[（(]/g, "(")
    .replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "")
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .toLowerCase();
}

const num = (v) => { if (v === "" || v == null) return 0; const n = Number(v); return isNaN(n) ? 0 : n; };
const intNum = (v) => Math.round(num(v));

const raw = fs.readFileSync("/tmp/tabenavi_conveni.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });
console.log(`[sheet] ${rows.length} rows`);

const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const chainIdToName = Object.fromEntries(chains.map((c) => [c.id, c.name]));
console.log(`[db] ${chains.length} chains found`);

// Fetch ALL DB items with pagination (id-ordered, deterministic)
let dbItems = [];
for (let page = 0; ; page++) {
  const { data } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id, calories, protein, fat, carbs, category")
    .in("chain_restaurant_id", chains.map((c) => c.id))
    .order("id", { ascending: true })
    .range(page * 1000, page * 1000 + 999);
  if (!data || data.length === 0) break;
  dbItems = dbItems.concat(data);
  if (data.length < 1000) break;
}
console.log(`[db] ${dbItems.length} existing items`);

// Build lookup
const lookup = {};
for (const it of dbItems) {
  const cId = it.chain_restaurant_id;
  const key = normalize(it.name);
  if (!lookup[cId]) lookup[cId] = {};
  if (!lookup[cId][key]) lookup[cId][key] = [];
  lookup[cId][key].push(it);
}

const updates = [];
const inserts = [];
let multiMatch = 0;

for (const r of rows) {
  const chainId = chainNameToId[r["チェーン"]];
  if (!chainId) { console.error(`skip: unknown chain ${r["チェーン"]}`); continue; }
  const itemName = r["商品名"];
  const norm = normalize(itemName);
  const matched = lookup[chainId]?.[norm] ?? [];

  const payload = {
    chain_restaurant_id: chainId,
    name: itemName,
    calories: intNum(r["カロリー(kcal)"]),
    protein: num(r["タンパク質(g)"]),
    fat: num(r["脂質(g)"]),
    carbs: num(r["炭水化物(g)"]),
    category: r["カテゴリ"] || null,
  };

  if (matched.length === 0) {
    inserts.push({ ...payload, source_type: "chain_restaurant" });
  } else {
    if (matched.length > 1) multiMatch += matched.length - 1;
    for (const m of matched) {
      updates.push({
        id: m.id,
        calories: payload.calories,
        protein: payload.protein,
        fat: payload.fat,
        carbs: payload.carbs,
        category: payload.category,
      });
    }
  }
}

console.log(`\n=== PLAN ===`);
console.log(`UPDATE: ${updates.length} (multi-match cascade: ${multiMatch})`);
console.log(`INSERT: ${inserts.length}`);
console.log(`DELETE: 0 (orphans preserved)`);

if (!APPLY) { console.log(`\n[DRY] pass --apply to execute.`); process.exit(0); }

// Updates
console.log(`\nUpdating ${updates.length}...`);
let uOk = 0, uErr = 0;
for (let i = 0; i < updates.length; i++) {
  const u = updates[i];
  const { error } = await sb.from("menu_items").update({
    calories: u.calories, protein: u.protein, fat: u.fat, carbs: u.carbs, category: u.category,
  }).eq("id", u.id);
  if (error) { console.error(`UPDATE fail id=${u.id}:`, error.message); uErr++; }
  else uOk++;
  if ((i + 1) % 50 === 0) process.stdout.write(`\r  ${i + 1}/${updates.length}`);
}
console.log(`\n  UPDATE: ${uOk} ok, ${uErr} err`);

// Inserts
console.log(`\nInserting ${inserts.length}...`);
const BATCH = 100;
let iOk = 0, iErr = 0;
for (let i = 0; i < inserts.length; i += BATCH) {
  const batch = inserts.slice(i, i + BATCH);
  const { error, data } = await sb.from("menu_items").insert(batch).select("id");
  if (error) { console.error(`INSERT fail batch ${i}:`, error.message); iErr += batch.length; }
  else iOk += data?.length ?? 0;
  process.stdout.write(`\r  ${Math.min(i + BATCH, inserts.length)}/${inserts.length}`);
}
console.log(`\n  INSERT: ${iOk} ok, ${iErr} err`);

// Audit
console.log(`\n=== AUDIT ===`);
let total = 0;
for (const c of TARGET_CHAINS) {
  const id = chainNameToId[c];
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  total += count ?? 0;
  console.log(`  ${c}: ${count}`);
}
console.log(`  TOTAL: ${total}`);
