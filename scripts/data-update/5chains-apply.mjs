// Apply 5-chains sheet: create new chains (バーガーキング/サブウェイ/ゼッテリア),
// map KFC→ケンタッキー, UPDATE+INSERT, DELETE orphans (one-shot pipeline).
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const APPLY = process.argv.includes("--apply");
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

// Sheet chain name → DB chain name (KFC → ケンタッキー)
const SHEET_TO_DB_CHAIN = {
  "モスバーガー": "モスバーガー",
  "KFC": "ケンタッキー",
  "バーガーキング": "バーガーキング",
  "サブウェイ": "サブウェイ",
  "ゼッテリア": "ゼッテリア",
};

// DB chains we need to ensure exist
const NEW_CHAINS = [
  { name: "バーガーキング", emoji: "🍔" },
  { name: "サブウェイ", emoji: "🥪" },
  { name: "ゼッテリア", emoji: "🍔" },
];

const DB_TARGET_CHAINS = [...new Set(Object.values(SHEET_TO_DB_CHAIN))];

function normalize(name) {
  return name.replace(/[®™©]/g, "").replace(/[（(]/g, "(").replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "").replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\(?並盛\)?$/, "(並)").replace(/\(?大盛\)?$/, "(大)").replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)").replace(/\(?中盛\)?$/, "(中)").toLowerCase();
}
const num = (v) => { if (v === "" || v == null) return 0; const n = Number(v); return isNaN(n) ? 0 : n; };
const intNum = (v) => Math.round(num(v));

// Read sheet
const raw = fs.readFileSync("/tmp/tabenavi_5chains.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });
console.log(`[sheet] ${rows.length} rows`);

// Step 1: Ensure new chains exist
console.log(`\n[step 1] Ensure ${NEW_CHAINS.length} new chains exist`);
for (const nc of NEW_CHAINS) {
  const { data: existing } = await sb.from("chain_restaurants").select("id").eq("name", nc.name).maybeSingle();
  if (existing) { console.log(`  ✓ ${nc.name} already exists`); continue; }
  if (APPLY) {
    const { data, error } = await sb.from("chain_restaurants").insert({ name: nc.name, emoji: nc.emoji }).select("id").single();
    if (error) { console.error(`  fail to create ${nc.name}:`, error.message); process.exit(1); }
    console.log(`  + CREATED ${nc.name} (id=${data.id.slice(0, 8)}...)`);
  } else {
    console.log(`  [DRY] would create ${nc.name}`);
  }
}

// Step 2: Fetch all relevant chain IDs
const { data: chains } = await sb.from("chain_restaurants").select("id, name").in("name", DB_TARGET_CHAINS);
console.log(`\n[step 2] ${chains.length}/${DB_TARGET_CHAINS.length} target chains in DB`);
const chainNameToId = Object.fromEntries(chains.map((c) => [c.name, c.id]));
const chainIdToName = Object.fromEntries(chains.map((c) => [c.id, c.name]));

if (chains.length < DB_TARGET_CHAINS.length) {
  if (!APPLY) console.log(`  (new chains will appear after --apply)`);
  else { console.error(`  missing chains`); process.exit(1); }
}

// Build sheet → DB chain mapping and per-chain item sets
const sheetByDbChain = {};
for (const r of rows) {
  const dbChain = SHEET_TO_DB_CHAIN[r["チェーン"]];
  if (!sheetByDbChain[dbChain]) sheetByDbChain[dbChain] = [];
  sheetByDbChain[dbChain].push(r);
}

console.log(`\n[breakdown by db chain]`);
for (const [c, list] of Object.entries(sheetByDbChain)) console.log(`  ${c}: ${list.length}`);

// Step 3: Fetch existing DB items
let dbItems = [];
if (chains.length > 0) {
  for (let p = 0; ; p++) {
    const { data } = await sb.from("menu_items").select("id, name, chain_restaurant_id")
      .in("chain_restaurant_id", chains.map((c) => c.id)).order("id").range(p * 1000, p * 1000 + 999);
    if (!data || data.length === 0) break;
    dbItems = dbItems.concat(data);
    if (data.length < 1000) break;
  }
}
console.log(`\n[step 3] ${dbItems.length} existing DB items`);

// Build lookup
const lookup = {};
for (const it of dbItems) {
  const k = `${it.chain_restaurant_id}|${normalize(it.name)}`;
  lookup[k] = it.id;
}

// Step 4: Plan UPDATE / INSERT / DELETE
const updates = [], inserts = [];
const sheetKeys = new Set(); // for orphan detection

for (const r of rows) {
  const dbChain = SHEET_TO_DB_CHAIN[r["チェーン"]];
  const chainId = chainNameToId[dbChain];
  if (!chainId) {
    // Chain doesn't exist yet (dry run). Push as insert.
    inserts.push({
      _pendingChain: dbChain,
      name: r["商品名"],
      calories: intNum(r["カロリー(kcal)"]),
      protein: num(r["タンパク質(g)"]),
      fat: num(r["脂質(g)"]),
      carbs: num(r["炭水化物(g)"]),
      category: r["カテゴリ"] || null,
      source_type: "chain_restaurant",
    });
    continue;
  }
  const key = `${chainId}|${normalize(r["商品名"])}`;
  sheetKeys.add(key);
  const payload = {
    chain_restaurant_id: chainId,
    name: r["商品名"],
    calories: intNum(r["カロリー(kcal)"]),
    protein: num(r["タンパク質(g)"]),
    fat: num(r["脂質(g)"]),
    carbs: num(r["炭水化物(g)"]),
    category: r["カテゴリ"] || null,
  };
  if (lookup[key]) {
    updates.push({ id: lookup[key], ...payload });
  } else {
    inserts.push({ ...payload, source_type: "chain_restaurant" });
  }
}

// Orphans (DB items in target chains but not matched by any sheet row)
const orphans = dbItems.filter((it) => !sheetKeys.has(`${it.chain_restaurant_id}|${normalize(it.name)}`));

console.log(`\n=== PLAN ===`);
console.log(`UPDATE: ${updates.length}`);
console.log(`INSERT: ${inserts.length}`);
console.log(`DELETE (orphans): ${orphans.length}`);

if (!APPLY) {
  console.log(`\n[DRY] pass --apply to execute`);
  if (chains.length < DB_TARGET_CHAINS.length) console.log(`Note: ${DB_TARGET_CHAINS.length - chains.length} chains will be created first`);
  process.exit(0);
}

// Step 5: UPDATEs
console.log(`\n[update] ${updates.length}`);
let uOk = 0, uErr = 0;
for (let i = 0; i < updates.length; i++) {
  const u = updates[i];
  const { error } = await sb.from("menu_items").update({
    calories: u.calories, protein: u.protein, fat: u.fat, carbs: u.carbs, category: u.category,
  }).eq("id", u.id);
  if (error) { console.error(`  fail:`, error.message); uErr++; } else uOk++;
}
console.log(`  ${uOk} ok, ${uErr} err`);

// Step 6: INSERTs (resolve pending chains)
console.log(`\n[insert] ${inserts.length}`);
for (const ins of inserts) {
  if (ins._pendingChain) {
    ins.chain_restaurant_id = chainNameToId[ins._pendingChain];
    delete ins._pendingChain;
    if (!ins.chain_restaurant_id) {
      // chain was just created in step 1; re-fetch
      const { data } = await sb.from("chain_restaurants").select("id").eq("name", chainIdToName[ins._pendingChain] ?? "").maybeSingle();
      if (data) ins.chain_restaurant_id = data.id;
    }
  }
}
// Re-resolve via fresh chain lookup
const { data: refreshedChains } = await sb.from("chain_restaurants").select("id, name").in("name", DB_TARGET_CHAINS);
const freshMap = Object.fromEntries(refreshedChains.map((c) => [c.name, c.id]));
for (const ins of inserts) {
  if (!ins.chain_restaurant_id) {
    // find chain name back from earlier mapping
    for (const [sheetChain, dbChain] of Object.entries(SHEET_TO_DB_CHAIN)) {
      if (rows.find((r) => r["チェーン"] === sheetChain && r["商品名"] === ins.name)) {
        ins.chain_restaurant_id = freshMap[dbChain];
        break;
      }
    }
  }
}

const BATCH = 100;
let iOk = 0, iErr = 0;
for (let i = 0; i < inserts.length; i += BATCH) {
  const batch = inserts.slice(i, i + BATCH);
  const { error, data } = await sb.from("menu_items").insert(batch).select("id");
  if (error) { console.error(`  fail batch ${i}:`, error.message); iErr += batch.length; }
  else iOk += data?.length ?? 0;
  process.stdout.write(`\r  ${Math.min(i + BATCH, inserts.length)}/${inserts.length}`);
}
console.log(`\n  ${iOk} ok, ${iErr} err`);

// Step 7: DELETE orphans (with food_logs NULL first)
if (orphans.length > 0) {
  const orphanIds = orphans.map((o) => o.id);
  // Nullify food_logs refs
  const refLogIds = [];
  for (let i = 0; i < orphanIds.length; i += 100) {
    const batch = orphanIds.slice(i, i + 100);
    const { data: logs } = await sb.from("food_logs").select("id").in("menu_item_id", batch);
    if (logs) refLogIds.push(...logs.map((l) => l.id));
  }
  console.log(`\n[delete] nullifying ${refLogIds.length} food_logs refs`);
  for (let i = 0; i < refLogIds.length; i += 100) {
    await sb.from("food_logs").update({ menu_item_id: null }).in("id", refLogIds.slice(i, i + 100));
  }

  // Also nullify favorites refs
  const favLogIds = [];
  for (let i = 0; i < orphanIds.length; i += 100) {
    const batch = orphanIds.slice(i, i + 100);
    const { data: favs } = await sb.from("favorites").select("id").in("menu_item_id", batch);
    if (favs) favLogIds.push(...favs.map((f) => f.id));
  }
  if (favLogIds.length > 0) {
    console.log(`  nullifying/deleting ${favLogIds.length} favorites refs`);
    // favorites might not allow NULL; try deleting instead
    for (let i = 0; i < favLogIds.length; i += 100) {
      await sb.from("favorites").delete().in("id", favLogIds.slice(i, i + 100));
    }
  }

  let dOk = 0, dErr = 0;
  console.log(`[delete] ${orphans.length} orphans`);
  for (let i = 0; i < orphanIds.length; i += BATCH) {
    const batch = orphanIds.slice(i, i + BATCH);
    const { error } = await sb.from("menu_items").delete().in("id", batch);
    if (error) { console.error(`  fail batch ${i}:`, error.message); dErr += batch.length; }
    else dOk += batch.length;
    process.stdout.write(`\r  ${Math.min(i + BATCH, orphanIds.length)}/${orphanIds.length}`);
  }
  console.log(`\n  ${dOk} ok, ${dErr} err`);
}

// Final audit
console.log(`\n=== AUDIT ===`);
let total = 0;
for (const c of DB_TARGET_CHAINS) {
  const id = freshMap[c];
  if (!id) { console.log(`  ${c}: MISSING`); continue; }
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", id);
  const sheetN = sheetByDbChain[c]?.length ?? 0;
  total += count ?? 0;
  console.log(`  ${c}: DB ${count} / Sheet ${sheetN} ${count === sheetN ? "✓" : `(diff +${count - sheetN})`}`);
}
console.log(`  TOTAL: ${total}`);
