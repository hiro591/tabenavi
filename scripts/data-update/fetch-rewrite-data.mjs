// Fetch latest data needed for Tier 1 article rewrites.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const queries = {
  // McDonald's: top 15 lowest cal main items (バーガー系)
  mcdonalds: async () => {
    const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", "マクドナルド").single();
    const { data } = await sb
      .from("menu_items")
      .select("name, calories, protein, fat, carbs, category")
      .eq("chain_restaurant_id", c.id)
      .or("category.eq.ハンバーガー,category.eq.バーガー,category.ilike.%バーガー%")
      .order("calories", { ascending: true })
      .limit(20);
    return data;
  },
  // Yoshinoya: top items
  yoshinoya: async () => {
    const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", "吉野家").single();
    const { data } = await sb
      .from("menu_items")
      .select("name, calories, protein, fat, carbs, category")
      .eq("chain_restaurant_id", c.id)
      .order("calories", { ascending: true })
      .limit(30);
    return data;
  },
  // Gyudon comparison: 牛丼 並盛 from 3 chains
  gyudon: async () => {
    const result = [];
    for (const chain of ["吉野家", "松屋", "すき家"]) {
      const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", chain).single();
      const { data } = await sb
        .from("menu_items")
        .select("name, calories, protein, fat, carbs")
        .eq("chain_restaurant_id", c.id)
        .or("name.ilike.%牛丼 並盛%,name.ilike.%牛めし%並%,name.ilike.%牛めし 並盛%,name.ilike.%牛丼（並）%")
        .limit(10);
      result.push({ chain, data });
    }
    return result;
  },
  // Sukiya 牛丼ライト
  sukiya_light: async () => {
    const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", "すき家").single();
    const { data } = await sb
      .from("menu_items")
      .select("name, calories, protein, fat, carbs")
      .eq("chain_restaurant_id", c.id)
      .ilike("name", "%牛丼ライト%")
      .limit(10);
    return data;
  },
  // Conveni protein - all chains with high protein items (we have just chains)
  // Will check what conveni chains exist
  conveni_chains: async () => {
    const { data } = await sb.from("chain_restaurants").select("id, name");
    return data?.filter((c) => /セブン|ローソン|ファミリー|ファミマ|conveni|コンビニ/i.test(c.name));
  },
  // Saizeriya top low-cal items
  saizeriya: async () => {
    const { data: c } = await sb.from("chain_restaurants").select("id").eq("name", "サイゼリヤ").single();
    if (!c) return null;
    const { data } = await sb
      .from("menu_items")
      .select("name, calories, protein, fat, carbs, category")
      .eq("chain_restaurant_id", c.id)
      .order("calories", { ascending: true })
      .limit(20);
    return data;
  },
};

console.log(JSON.stringify(await (async () => {
  const out = {};
  for (const [k, fn] of Object.entries(queries)) {
    try { out[k] = await fn(); } catch (e) { out[k] = { error: e.message }; }
  }
  return out;
})(), null, 2));
