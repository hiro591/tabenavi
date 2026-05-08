// Quick scan of current menu_items DB state
// Usage: node scripts/audit-current-db.mjs
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const url = env.find((l) => l.startsWith("NEXT_PUBLIC_SUPABASE_URL=")).split("=")[1].trim();
const key = env.find((l) => l.startsWith("SUPABASE_SERVICE_ROLE_KEY=")).split("=")[1].trim();
const sb = createClient(url, key);

const { data: chains, error: e1 } = await sb
  .from("chain_restaurants")
  .select("id, name")
  .order("name");

if (e1) {
  console.error("Error fetching chains:", e1);
  process.exit(1);
}

console.log(`\n=== DB Summary ===`);
console.log(`Total chains: ${chains.length}\n`);

console.log(`Chain | Items`);
console.log(`---|---`);

let grandTotal = 0;
for (const chain of chains) {
  const { count } = await sb
    .from("menu_items")
    .select("*", { count: "exact", head: true })
    .eq("chain_restaurant_id", chain.id);
  console.log(`${chain.name} | ${count}`);
  grandTotal += count ?? 0;
}

console.log(`---|---`);
console.log(`Total items: ${grandTotal}\n`);
