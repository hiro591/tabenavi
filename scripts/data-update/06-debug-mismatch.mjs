import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

function normalize(name) {
  return name
    .replace(/[®™©]/g, "")
    .replace(/[（(]/g, "(")
    .replace(/[）)]/g, ")")
    .replace(/[\s　]/g, "")
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚａ-ｚ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\(?並盛\)?$/, "(並)")
    .replace(/\(?大盛\)?$/, "(大)")
    .replace(/\(?特盛\)?$/, "(特)")
    .replace(/\(?小盛\)?$/, "(小)")
    .replace(/\(?中盛\)?$/, "(中)")
    .toLowerCase();
}

// Get 松屋 chain id
const { data: chains } = await sb.from("chain_restaurants").select("id, name").eq("name", "松屋");
const matsuyaId = chains[0].id;

// Get DB items for 松屋 with "国産とろろ" or "焼きのり"
const { data: dbItems } = await sb
  .from("menu_items")
  .select("name, calories")
  .eq("chain_restaurant_id", matsuyaId)
  .or("name.ilike.%国産とろろ%,name.ilike.%焼きのり%,name.ilike.%生玉子%");
console.log("=== DB items matching:");
for (const it of dbItems) {
  const buf = Buffer.from(it.name, "utf8");
  console.log(`  raw: "${it.name}" (${buf.length} bytes)`);
  console.log(`  hex: ${buf.toString("hex")}`);
  console.log(`  normalized: "${normalize(it.name)}"`);
}

// Now read sheet and find same names
const raw = fs.readFileSync("/tmp/tabenavi_sheet_v2.csv", "utf8");
const lines = raw.split("\n");
const dataStart = lines.findIndex((l) => l.startsWith("チェーン,"));
const rows = parse(lines.slice(dataStart).join("\n"), { columns: true, skip_empty_lines: true, trim: true });

console.log("\n=== Sheet rows matching:");
for (const r of rows) {
  if (r["チェーン"] !== "松屋") continue;
  const name = r["商品名"];
  if (name.includes("国産とろろ") || name.includes("焼きのり") || name === "生玉子") {
    const buf = Buffer.from(name, "utf8");
    console.log(`  raw: "${name}" (${buf.length} bytes)`);
    console.log(`  hex: ${buf.toString("hex")}`);
    console.log(`  normalized: "${normalize(name)}"`);
  }
}

// Direct compare
console.log("\n=== Direct compare ===");
const dbNames = new Set(dbItems.map((it) => normalize(it.name)));
const sheetMissing = [];
for (const r of rows) {
  if (r["チェーン"] !== "松屋") continue;
  const name = r["商品名"];
  if (!name.includes("国産とろろ") && !name.includes("焼きのり") && name !== "生玉子") continue;
  if (!dbNames.has(normalize(name))) {
    sheetMissing.push(name);
    console.log(`  MISSING from DB: "${name}"`);
  } else {
    console.log(`  FOUND in DB: "${name}"`);
  }
}
