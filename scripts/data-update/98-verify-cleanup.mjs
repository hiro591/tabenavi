// Verify the cleanup plan: inspect specific duplicate groups carefully.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

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

// Fetch ALL with pagination
let allItems = [];
const PAGE = 1000;
for (let page = 0; ; page++) {
  const { data } = await sb
    .from("menu_items")
    .select("id, name, chain_restaurant_id, created_at, calories, protein, fat, carbs")
    .in("chain_restaurant_id", chainIds)
    .order("created_at", { ascending: true })
    .range(page * PAGE, page * PAGE + PAGE - 1);
  if (!data || data.length === 0) break;
  allItems = allItems.concat(data);
  if (data.length < PAGE) break;
}
console.log(`[db] ${allItems.length} items fetched\n`);

// Group by (chain_id, name)
const groups = {};
for (const it of allItems) {
  const k = `${it.chain_restaurant_id}|${it.name}`;
  if (!groups[k]) groups[k] = [];
  groups[k].push(it);
}

const dupGroups = Object.entries(groups).filter(([_, arr]) => arr.length > 1);
console.log(`Total dup groups: ${dupGroups.length}`);

// Group sizes
const sizes = {};
for (const [_, arr] of dupGroups) sizes[arr.length] = (sizes[arr.length] || 0) + 1;
console.log(`Sizes distribution:`);
for (const [size, count] of Object.entries(sizes).sort((a, b) => Number(a[0]) - Number(b[0]))) {
  console.log(`  ${size}x: ${count} groups`);
}

// Inspect a few specific cases
console.log(`\n=== Inspect: ガスト チーズINハンバーグ ===`);
const cinHam = chains.find((c) => c.name === "ガスト");
if (cinHam) {
  const g = groups[`${cinHam.id}|チーズINハンバーグ`];
  if (g) {
    g.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    for (const it of g) {
      console.log(`  ${it.created_at} | ${it.calories}/${it.protein}/${it.fat}/${it.carbs} | id=${it.id.slice(0, 8)}`);
    }
  }
}

console.log(`\n=== Inspect: 松屋 ライス（大盛）（みそ汁含まず） ===`);
const matsu = chains.find((c) => c.name === "松屋");
if (matsu) {
  const g = groups[`${matsu.id}|ライス（大盛）（みそ汁含まず）`];
  if (g) {
    g.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    for (const it of g) {
      console.log(`  ${it.created_at} | ${it.calories}/${it.protein}/${it.fat}/${it.carbs} | id=${it.id.slice(0, 8)}`);
    }
  }
}

console.log(`\n=== Inspect: マクドナルド ビッグマック ===`);
const mcd = chains.find((c) => c.name === "マクドナルド");
if (mcd) {
  for (const name of ["ビッグマック", "ビッグマック®"]) {
    const g = groups[`${mcd.id}|${name}`] ?? [];
    console.log(`  "${name}": ${g.length} entries`);
    g.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    for (const it of g) {
      console.log(`    ${it.created_at} | ${it.calories}/${it.protein}/${it.fat}/${it.carbs}`);
    }
  }
}

// Verify cleanup plan: are all to-be-deleted items the LATEST in their group?
let toDelete = 0;
let safe = 0, unsafe = 0;
for (const [_, arr] of dupGroups) {
  arr.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  for (let i = 1; i < arr.length; i++) {
    toDelete++;
    // The kept one (arr[0]) should be older or equal
    if (new Date(arr[0].created_at) <= new Date(arr[i].created_at)) safe++;
    else unsafe++;
  }
}
console.log(`\n=== Cleanup Safety Check ===`);
console.log(`Items to delete: ${toDelete}`);
console.log(`Safe (kept is oldest): ${safe}`);
console.log(`Unsafe: ${unsafe}`);
