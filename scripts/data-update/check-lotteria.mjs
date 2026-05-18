// Check Lotteria/Zetteria status in DB
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const { data } = await sb.from("chain_restaurants").select("id, name, emoji, created_at")
  .or("name.ilike.%ロッテリア%,name.ilike.%ゼッテリア%,name.ilike.%lotteria%,name.ilike.%zetteria%");
console.log("Matching chains in DB:");
for (const c of data) console.log(`  ${c.name} | id=${c.id} | emoji=${c.emoji}`);

if (data && data[0]) {
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true })
    .eq("chain_restaurant_id", data[0].id);
  console.log(`\nMenu items: ${count}`);
}
