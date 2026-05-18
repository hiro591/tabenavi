// Check which of the 5 chains exist in DB
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

// Sheet uses these names
const SHEET = ["モスバーガー", "KFC", "バーガーキング", "サブウェイ", "ゼッテリア"];

// Check each by name + similar
for (const name of SHEET) {
  const { data } = await sb.from("chain_restaurants").select("id, name, emoji").ilike("name", `%${name}%`);
  console.log(`Sheet "${name}":`);
  if (data && data.length > 0) {
    for (const c of data) {
      const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", c.id);
      console.log(`  ✓ DB has "${c.name}" (${count} items) emoji=${c.emoji}`);
    }
  } else {
    console.log(`  ✗ NOT in DB - needs creation`);
  }
}

// Also check ケンタッキー since KFC might map to it
const { data: kfc } = await sb.from("chain_restaurants").select("id, name").ilike("name", "%ケンタッキー%");
console.log(`\nケンタッキー (potential KFC mapping):`);
for (const c of kfc || []) {
  const { count } = await sb.from("menu_items").select("*", { count: "exact", head: true }).eq("chain_restaurant_id", c.id);
  console.log(`  "${c.name}" (${count} items)`);
}

// Sheet quality check
const raw = fs.readFileSync("/tmp/tabenavi_5chains.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });
console.log(`\n[sheet] ${rows.length} rows`);

const byKey = {};
for (const r of rows) {
  const key = `${r["チェーン"]}|${r["商品名"]}`;
  byKey[key] = (byKey[key] || 0) + 1;
}
const dupes = Object.entries(byKey).filter(([_, n]) => n > 1);
console.log(`Duplicates: ${dupes.length}`);

let full = 0, calOnly = 0, missing = 0;
const num = (v) => v !== "" && v != null && !isNaN(Number(v));
for (const r of rows) {
  const cal = r["カロリー(kcal)"];
  const p = r["タンパク質(g)"], f = r["脂質(g)"], c_ = r["炭水化物(g)"];
  if (!num(cal)) missing++;
  else if (num(p) && num(f) && num(c_)) full++;
  else calOnly++;
}
console.log(`Data quality: full=${full}, calOnly=${calOnly}, missingCal=${missing}`);
