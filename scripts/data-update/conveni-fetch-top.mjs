// Fetch top low-cal & high-protein items per conveni chain for article rewrites.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const TARGET = ["セブンイレブン", "ファミリーマート", "ローソン"];

const out = {};
for (const chain of TARGET) {
  const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", chain).single();

  // Top 15 highest protein
  const { data: byProtein } = await sb.from("menu_items")
    .select("name, calories, protein, fat, carbs, category")
    .eq("chain_restaurant_id", c.id)
    .gt("protein", 15)
    .order("protein", { ascending: false })
    .limit(15);

  // Top 10 lowest cal (above 50kcal to avoid drinks)
  const { data: byLowCal } = await sb.from("menu_items")
    .select("name, calories, protein, fat, carbs, category")
    .eq("chain_restaurant_id", c.id)
    .gt("calories", 50)
    .order("calories", { ascending: true })
    .limit(15);

  // Sarada chiken specifically
  const { data: chicken } = await sb.from("menu_items")
    .select("name, calories, protein, fat, carbs")
    .eq("chain_restaurant_id", c.id)
    .ilike("name", "%サラダチキン%")
    .order("protein", { ascending: false })
    .limit(8);

  // Onigiri
  const { data: onigiri } = await sb.from("menu_items")
    .select("name, calories, protein, fat, carbs")
    .eq("chain_restaurant_id", c.id)
    .or("name.ilike.%おにぎり%,name.ilike.%おむすび%")
    .order("calories", { ascending: true })
    .limit(8);

  out[chain] = { byProtein, byLowCal, chicken, onigiri };
}

console.log(JSON.stringify(out, null, 2));
