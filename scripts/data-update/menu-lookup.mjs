// menu-lookup.mjs — 読み取り専用のメニュー照合CLI（記事の数値検算用）
// 使い方:
//   node scripts/data-update/menu-lookup.mjs "<チェーン名>" ["<商品名の部分一致>"]
//   node scripts/data-update/menu-lookup.mjs --chains            # チェーン名一覧
// 例:
//   node scripts/data-update/menu-lookup.mjs "ガスト" "ハンバーグ"
//   node scripts/data-update/menu-lookup.mjs "セブンイレブン" "サラダチキン"
// 出力: 該当メニューの name / calories / protein / fat / carbs / price（DB実値）
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(new URL("../../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const args = process.argv.slice(2);

if (args[0] === "--chains") {
  const { data, error } = await sb.from("chain_restaurants").select("name").order("name");
  if (error) { console.error(error.message); process.exit(1); }
  console.log(data.map((d) => d.name).join("\n"));
  process.exit(0);
}

const [chain, term] = args;
if (!chain) {
  console.error('使い方: node menu-lookup.mjs "<チェーン名>" ["<商品名の部分一致>"]');
  process.exit(1);
}

let q = sb
  .from("menu_items")
  .select("name, calories, protein, fat, carbs, price, category, chain_restaurants!inner(name)")
  .eq("chain_restaurants.name", chain)
  .order("calories", { ascending: true });
if (term) q = q.ilike("name", `%${term}%`);

const { data, error } = await q.returns().limit(500);
if (error) { console.error(error.message); process.exit(1); }
if (!data.length) {
  console.log(`(該当なし) chain="${chain}"${term ? ` term="${term}"` : ""}`);
  process.exit(0);
}
console.log(`# ${chain}${term ? ` / "${term}"` : ""} — ${data.length}件`);
for (const r of data) {
  const k = r.calories ?? "—";
  const p = r.protein ?? "—";
  const f = r.fat ?? "—";
  const c = r.carbs ?? "—";
  const y = r.price ?? "—";
  console.log(`${r.name} | ${k}kcal P${p} F${f} C${c} | ¥${y} | ${r.category ?? ""}`);
}
