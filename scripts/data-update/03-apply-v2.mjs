// Apply v2 sheet data to Supabase.
// Strategy: UPDATE matched (normalized name) + INSERT new + KEEP orphans.
// Modes: DRY (default, shows counts only) or APPLY (when --apply passed).
//
// Usage:
//   node scripts/data-update/03-apply-v2.mjs           # dry run
//   node scripts/data-update/03-apply-v2.mjs --apply   # actually mutate DB
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

const num = (v) => {
  if (v === "" || v == null) return 0;
  const n = Number(v);
  return isNaN(n) ? 0 : n;
};
const intNum = (v) => Math.round(num(v));

// ─── 1. Read sheet ─────────────────────────────────────
const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), {
  columns: true, skip_empty_lines: true, trim: true,
});
console.log(`[sheet] ${rows.length} rows`);

// ─── 2. Get chains ─────────────────────────────────────
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", TARGET_CHAINS);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const chainIdToName = Object.fromEntries(chains.map((c) => [c.id, c.name]));
console.log(`[db] ${chains.length} chains found`);

// ─── 3. Get existing DB items ──────────────────────────
const { data: dbItems } = await sb
  .from("menu_items")
  .select("id, name, chain_restaurant_id, calories, protein, fat, carbs, category")
  .in("chain_restaurant_id", chains.map((c) => c.id));
console.log(`[db] ${dbItems.length} existing items`);

// Build lookup: chainId -> normalizedName -> [dbItems]
const lookup = {};
for (const it of dbItems) {
  const cId = it.chain_restaurant_id;
  const key = normalize(it.name);
  if (!lookup[cId]) lookup[cId] = {};
  if (!lookup[cId][key]) lookup[cId][key] = [];
  lookup[cId][key].push(it);
}

// ─── 4. Plan ───────────────────────────────────────────
const updates = []; // { dbId, name, ...nutrition, category }
const inserts = []; // { chain_restaurant_id, name, calories, ... }
let multiMatch = 0;

for (const r of rows) {
  const chainName = r["チェーン"];
  const chainId = chainNameToId[chainName];
  if (!chainId) { console.error(`[skip] unknown chain: ${chainName}`); continue; }

  const itemName = r["商品名"];
  const norm = normalize(itemName);
  const matched = lookup[chainId]?.[norm] ?? [];

  const payload = {
    chain_restaurant_id: chainId,
    name: itemName, // use sheet's exact name for inserts; updates keep DB name
    calories: intNum(r["カロリー(kcal)"]), // DB schema: INTEGER
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
        // Keep DB's original name (don't rename existing items)
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
console.log(`DELETE: 0 (orphans preserved per option B)`);
console.log(`\nBreakdown by chain (sheet rows):`);
const breakdown = {};
for (const r of rows) {
  const c = r["チェーン"];
  breakdown[c] = (breakdown[c] || 0) + 1;
}
for (const [c, n] of Object.entries(breakdown)) console.log(`  ${c}: ${n}`);

if (!APPLY) {
  console.log(`\n[DRY RUN] Pass --apply to execute.`);
  process.exit(0);
}

// ─── 5. Apply ──────────────────────────────────────────
console.log(`\n=== APPLYING ===`);

// 5a. Updates (one by one, but with progress)
console.log(`Updating ${updates.length} items...`);
let updateOK = 0, updateErr = 0;
for (let i = 0; i < updates.length; i++) {
  const u = updates[i];
  const { error } = await sb
    .from("menu_items")
    .update({
      calories: u.calories,
      protein: u.protein,
      fat: u.fat,
      carbs: u.carbs,
      category: u.category,
    })
    .eq("id", u.id);
  if (error) { console.error(`  UPDATE fail id=${u.id}:`, error.message); updateErr++; }
  else updateOK++;
  if ((i + 1) % 25 === 0) process.stdout.write(`\r  progress: ${i + 1}/${updates.length}`);
}
console.log(`\n  UPDATE: ${updateOK} ok, ${updateErr} errors`);

// 5b. Inserts (batched)
console.log(`Inserting ${inserts.length} items...`);
const BATCH = 100;
let insertOK = 0, insertErr = 0;
for (let i = 0; i < inserts.length; i += BATCH) {
  const batch = inserts.slice(i, i + BATCH);
  const { error, data } = await sb.from("menu_items").insert(batch).select("id");
  if (error) {
    console.error(`  INSERT fail batch ${i}/${inserts.length}:`, error.message);
    insertErr += batch.length;
  } else {
    insertOK += data?.length ?? 0;
  }
  process.stdout.write(`\r  progress: ${Math.min(i + BATCH, inserts.length)}/${inserts.length}`);
}
console.log(`\n  INSERT: ${insertOK} ok, ${insertErr} errors`);

// ─── 6. Audit ──────────────────────────────────────────
console.log(`\n=== POST-APPLY AUDIT ===`);
console.log(`Chain | After | Expected`);
let totalAfter = 0, totalExpected = 0;
for (const c of TARGET_CHAINS) {
  const id = chainNameToId[c];
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  const sheetN = breakdown[c] ?? 0;
  const beforeN = dbItems.filter((it) => it.chain_restaurant_id === id).length;
  const orphans = beforeN - updates.filter((u) => dbItems.find((it) => it.id === u.id)?.chain_restaurant_id === id).length;
  const expected = orphans + sheetN; // orphans preserved + all sheet rows (as updated or new)
  totalAfter += count ?? 0;
  totalExpected += expected;
  const ok = count === expected ? "✓" : "✗";
  console.log(`${c} | ${count} | ${expected} ${ok}`);
}
console.log(`TOTAL | ${totalAfter} | ${totalExpected} ${totalAfter === totalExpected ? "✓" : "✗"}`);
