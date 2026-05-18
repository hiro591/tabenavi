import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

const { data: chains } = await sb.from("chain_restaurants").select("id, name");
const cMap = Object.fromEntries(chains.map((c) => [c.name, c.id]));

const missing = [
  ["松屋", "国産とろろ玉子セット"],
  ["松屋", "焼きのり"],
  ["松屋", "生玉子"],
  ["松屋", "新豚汁（単品）"],
  ["ガスト", "【お料理ご注文のお客様限定】トッピング 目玉焼き"],
  ["ガスト", "【お料理ご注文のお客様限定】［追加］ケチャップ"],
];

for (const [chain, name] of missing) {
  const cId = cMap[chain];
  // Exact match
  const { data: exact } = await sb.from("menu_items").select("name, calories").eq("chain_restaurant_id", cId).eq("name", name);
  // ilike search
  const word = name.length > 10 ? name.substring(0, 8) : name;
  const { data: like } = await sb.from("menu_items").select("name, calories").eq("chain_restaurant_id", cId).ilike("name", `%${word}%`).limit(5);
  console.log(`\n[${chain}] looking for: "${name}"`);
  console.log(`  Exact match: ${exact?.length ?? 0}`);
  console.log(`  Similar (LIKE %${word}%): ${like?.length ?? 0}`);
  if (like && like.length > 0) {
    for (const l of like) console.log(`    "${l.name}" (${l.calories}kcal)`);
  }
}
