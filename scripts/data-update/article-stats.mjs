// 独自データ記事(B-1)用の実統計を算出。引用される数字を作る。
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8").split("\n");
const get = (k) => env.find((l) => l.startsWith(k + "="))?.split("=")[1]?.trim();
const sb = createClient(get("NEXT_PUBLIC_SUPABASE_URL"), get("SUPABASE_SERVICE_ROLE_KEY"));

// 全メニュー取得(ページネーション)
let all = [];
for (let p = 0; ; p++) {
  const { data } = await sb.from("menu_items")
    .select("name, calories, protein, fat, carbs, price, category, chain_restaurants(name)")
    .order("id").range(p * 1000, p * 1000 + 999);
  if (!data || data.length === 0) break;
  all = all.concat(data);
  if (data.length < 1000) break;
}
const { data: chains } = await sb.from("chain_restaurants").select("id");
console.log(`総メニュー: ${all.length} / 総チェーン(DB): ${chains.length}`);

const withCal = all.filter((i) => i.calories != null);
const withP = all.filter((i) => i.protein != null);
const withPFC = all.filter((i) => i.protein != null && i.fat != null && i.carbs != null);
console.log(`\n=== データ網羅 ===`);
console.log(`カロリーあり: ${withCal.length} (${(withCal.length/all.length*100).toFixed(0)}%)`);
console.log(`PFC完備: ${withPFC.length} (${(withPFC.length/all.length*100).toFixed(0)}%)`);

const pct = (n, d) => `${n} (${(n/d*100).toFixed(1)}%)`;
console.log(`\n=== 統計(カロリーあり ${withCal.length}件 を母数) ===`);
console.log(`500kcal以下: ${pct(withCal.filter(i=>i.calories<=500).length, withCal.length)}`);
console.log(`400kcal以下: ${pct(withCal.filter(i=>i.calories<=400).length, withCal.length)}`);
console.log(`800kcal超(高カロリー): ${pct(withCal.filter(i=>i.calories>800).length, withCal.length)}`);
console.log(`平均カロリー: ${Math.round(withCal.reduce((s,i)=>s+i.calories,0)/withCal.length)}kcal`);

console.log(`\n=== 高タンパク(タンパク質あり ${withP.length}件 を母数) ===`);
console.log(`P20g以上(高タンパク): ${pct(withP.filter(i=>i.protein>=20).length, withP.length)}`);
console.log(`P30g以上: ${pct(withP.filter(i=>i.protein>=30).length, withP.length)}`);

console.log(`\n=== ダイエット向き(低カロリー&高タンパク) ===`);
const dietFriendly = withPFC.filter(i=>i.calories<=600 && i.protein>=15);
console.log(`500kcal以下 かつ P20g以上: ${withPFC.filter(i=>i.calories<=500&&i.protein>=20).length}件`);
console.log(`600kcal以下 かつ P15g以上(ダイエット向き): ${pct(dietFriendly.length, withPFC.length)}`);

console.log(`\n=== 牛丼3社 並盛 比較 ===`);
for (const want of ["吉野家","松屋","すき家"]) {
  const item = all.find(i => i.chain_restaurants?.name===want && /牛丼|牛めし/.test(i.name) && /並/.test(i.name));
  if (item) console.log(`  ${want} ${item.name}: ${item.calories}kcal P${item.protein} F${item.fat} C${item.carbs}`);
}

console.log(`\n=== 高タンパク低カロリーTOP10(P20g以上 かつ 低kcal順) ===`);
withPFC.filter(i=>i.protein>=20 && i.calories>0).sort((a,b)=>a.calories-b.calories).slice(0,10)
  .forEach((i,n)=>console.log(`  ${n+1}. ${i.chain_restaurants?.name} ${i.name}: ${i.calories}kcal P${i.protein}g`));

console.log(`\n=== タンパク質コスパTOP10(価格あり, P/円) ===`);
withP.filter(i=>i.price>0 && i.protein>0).map(i=>({...i, ppy: i.protein/i.price}))
  .sort((a,b)=>b.ppy-a.ppy).slice(0,10)
  .forEach((i,n)=>console.log(`  ${n+1}. ${i.chain_restaurants?.name} ${i.name}: P${i.protein}g/¥${i.price} (1円=${i.ppy.toFixed(3)}g, 100円=${(i.ppy*100).toFixed(1)}g)`));

console.log(`\n=== カテゴリ別 平均カロリー(上位) ===`);
const byCat = {};
for (const i of withCal) { const c=i.category||"その他"; (byCat[c]=byCat[c]||[]).push(i.calories); }
Object.entries(byCat).filter(([_,a])=>a.length>=20).map(([c,a])=>({c, avg:Math.round(a.reduce((s,x)=>s+x,0)/a.length), n:a.length}))
  .sort((a,b)=>b.avg-a.avg).slice(0,8).forEach(x=>console.log(`  ${x.c}: 平均${x.avg}kcal (${x.n}件)`));
