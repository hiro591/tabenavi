// Status of all chains: updated vs not updated
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const UPDATED = new Set([
  // V2 sheet (11チェーン)
  "マクドナルド", "松屋", "吉野家", "すき家", "ガスト", "バーミヤン",
  "やよい軒", "大戸屋", "CoCo壱番屋", "松のや", "くら寿司",
  // Conveni (3社)
  "セブンイレブン", "ファミリーマート", "ローソン",
  // 5 chains (今回)
  "モスバーガー", "ケンタッキー", "バーガーキング", "サブウェイ", "ゼッテリア",
]);

const { data: chains } = await sb.from("chain_restaurants").select("id, name").order("name");

console.log(`Total chains in DB: ${chains.length}\n`);
console.log("✅ Updated (sheet data applied + orphans removed):");
let updatedCount = 0, pendingCount = 0, totalUpdated = 0, totalPending = 0;
for (const c of chains) {
  if (UPDATED.has(c.name)) {
    const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", c.id);
    console.log(`  ${c.name}: ${count} items`);
    updatedCount++;
    totalUpdated += count ?? 0;
  }
}
console.log(`\nUpdated chains: ${updatedCount} / Total items: ${totalUpdated}\n`);

console.log("⏳ Pending (no sheet data applied yet):");
for (const c of chains) {
  if (!UPDATED.has(c.name)) {
    const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", c.id);
    console.log(`  ${c.name}: ${count} items`);
    pendingCount++;
    totalPending += count ?? 0;
  }
}
console.log(`\nPending chains: ${pendingCount} / Total items: ${totalPending}`);
console.log(`\nGRAND TOTAL: ${updatedCount + pendingCount} chains, ${totalUpdated + totalPending} items`);
