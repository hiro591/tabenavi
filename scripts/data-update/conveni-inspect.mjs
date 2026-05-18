// Inspect conveni sheet vs DB.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

// Check what conveni chains exist in DB
const { data: chains } = await sb.from("chain_restaurants").select("id, name").order("name");
console.log("=== All chains in DB ===");
for (const c of chains) console.log(`  ${c.name}`);

// Filter conveni-related
const conveniChains = chains.filter((c) => /セブン|ローソン|ファミリー|ファミマ|conveni|コンビニ/i.test(c.name));
console.log("\n=== Conveni chains found ===");
for (const c of conveniChains) console.log(`  ${c.name}: ${c.id}`);

// Read sheet
const raw = fs.readFileSync("/tmp/tabenavi_conveni.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });

const sheetChains = [...new Set(rows.map((r) => r["チェーン"]))];
console.log("\n=== Sheet chains ===");
for (const c of sheetChains) console.log(`  ${c}`);

// Per-chain breakdown
const breakdown = {};
for (const r of rows) breakdown[r["チェーン"]] = (breakdown[r["チェーン"]] || 0) + 1;

console.log("\n=== Sheet rows per chain ===");
for (const [c, n] of Object.entries(breakdown)) console.log(`  ${c}: ${n}`);

// Check duplicates
const byKey = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  byKey[key] = (byKey[key] || 0) + 1;
}
const dupes = Object.entries(byKey).filter(([_, n]) => n > 1);
console.log(`\n=== Duplicates: ${dupes.length} ===`);
for (const [k, n] of dupes.slice(0, 10)) console.log(`  ${k} × ${n}`);

// Check empty PFC
let cal_only = 0, full = 0, missing_cal = 0;
for (const r of rows) {
  const cal = r["カロリー(kcal)"];
  const p = r["タンパク質(g)"], f = r["脂質(g)"], c_ = r["炭水化物(g)"];
  const num = (v) => v !== "" && v != null && !isNaN(Number(v));
  if (!num(cal)) missing_cal++;
  else if (num(p) && num(f) && num(c_)) full++;
  else cal_only++;
}
console.log(`\n=== Data quality ===`);
console.log(`  Full (cal + PFC): ${full}`);
console.log(`  Cal only: ${cal_only}`);
console.log(`  Missing calories: ${missing_cal}`);

// DB items count for conveni chains
console.log(`\n=== DB existing items per conveni chain ===`);
for (const c of conveniChains) {
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", c.id);
  console.log(`  ${c.name}: ${count}`);
}
