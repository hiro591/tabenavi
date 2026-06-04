// ─────────────────────────────────────────────────────────────────────────
// チェーン & 目的の「単一の真実(single source of truth)」
// sitemap.ts / chains/[slug]/[goal] / items/[id] / guide が全てここを参照する。
// 以前 sitemap と goalページの CHAINS が drift してソフト404が発生したため、
// 定義を1箇所に集約して二度と乖離しないようにする。
//
// CHAINS の slug は URL に使われ、name は DB の chain_restaurants.name と完全一致させること。
// ─────────────────────────────────────────────────────────────────────────

export interface ChainInfo {
  name: string; // DB の chain_restaurants.name と完全一致
  emoji: string;
}

export const CHAINS: Record<string, ChainInfo> = {
  mcdonalds: { name: "マクドナルド", emoji: "🍔" },
  yoshinoya: { name: "吉野家", emoji: "🥩" },
  matsuya: { name: "松屋", emoji: "🥩" },
  sukiya: { name: "すき家", emoji: "🥩" },
  saizeriya: { name: "サイゼリヤ", emoji: "🍝" },
  gusto: { name: "ガスト", emoji: "🍽️" },
  mos: { name: "モスバーガー", emoji: "🍔" },
  kfc: { name: "ケンタッキー", emoji: "🍗" },
  marugame: { name: "丸亀製麺", emoji: "🍜" },
  starbucks: { name: "スターバックス", emoji: "☕" },
  subway: { name: "サブウェイ", emoji: "🥪" },
  dennys: { name: "デニーズ", emoji: "🍽️" },
  hidakaya: { name: "日高屋", emoji: "🍜" },
  ohsho: { name: "餃子の王将", emoji: "🥟" },
  sushiro: { name: "スシロー", emoji: "🍣" },
  kurasushi: { name: "くら寿司", emoji: "🍣" },
  ootoya: { name: "大戸屋", emoji: "🍱" },
  yayoiken: { name: "やよい軒", emoji: "🍱" },
  doutor: { name: "ドトール", emoji: "☕" },
  bamiyan: { name: "バーミヤン", emoji: "🥡" },
  "seven-eleven": { name: "セブンイレブン", emoji: "🏪" },
  lawson: { name: "ローソン", emoji: "🏪" },
  familymart: { name: "ファミリーマート", emoji: "🏪" },
  burgerking: { name: "バーガーキング", emoji: "🍔" },
  zetteria: { name: "ゼッテリア", emoji: "🍔" },
  matsunoya: { name: "松のや", emoji: "🍴" },
  ichibanya: { name: "CoCo壱番屋", emoji: "🍛" },
  tenya: { name: "てんや", emoji: "🍤" },
  joyfull: { name: "ジョイフル", emoji: "🍴" },
  "bikkuri-donkey": { name: "びっくりドンキー", emoji: "🍔" },
  cocos: { name: "ココス", emoji: "🍳" },
  "steak-gusto": { name: "ステーキガスト", emoji: "🥩" },
};

export interface GoalInfo {
  title: string;
  description: string;
  filterFn: string;
  sortFn: string;
}

export const GOALS: Record<string, GoalInfo> = {
  "high-protein": {
    title: "高タンパクメニュー",
    description: "タンパク質が多い順にランキング。筋トレ・ボディメイク中の外食に。",
    filterFn: "protein_gte_10",
    sortFn: "protein_desc",
  },
  "low-calorie": {
    title: "低カロリーメニュー",
    description: "カロリーが低い順にランキング。ダイエット中でも安心の外食メニュー。",
    filterFn: "calories_lte_800",
    sortFn: "calories_asc",
  },
  diet: {
    title: "ダイエットにおすすめ",
    description: "低カロリー＆高タンパクのダイエット向きメニュー。PFCバランス良好なものを厳選。",
    filterFn: "diet_friendly",
    sortFn: "diet_score",
  },
  "low-fat": {
    title: "低脂質メニュー",
    description: "脂質が低い順にランキング。脂質制限中の外食選びに。",
    filterFn: "all",
    sortFn: "fat_asc",
  },
  "protein-cost": {
    title: "タンパク質コスパ最強メニュー",
    description: "1円あたりのタンパク質量でランキング。コスパ重視の筋トレ民に。",
    filterFn: "has_price_protein",
    sortFn: "protein_per_yen",
  },
  "under-500kcal": {
    title: "500kcal以下メニュー",
    description: "500kcal以下のメニュー一覧。軽めの外食に。",
    filterFn: "calories_lte_500",
    sortFn: "calories_asc",
  },
  "under-500yen": {
    title: "500円以下メニュー",
    description: "ワンコインで食べられるメニュー一覧。栄養データ付き。",
    filterFn: "price_lte_500",
    sortFn: "price_asc",
  },
  "low-carb": {
    title: "低糖質メニュー",
    description: "炭水化物が少ない順にランキング。糖質制限中の外食に。",
    filterFn: "all",
    sortFn: "carbs_asc",
  },
};

export const CHAIN_SLUGS = Object.keys(CHAINS);
export const GOAL_KEYS = Object.keys(GOALS);

// DB の chain_restaurants.name → URL slug の逆引き。
// items/[id] のパンくず等で、メニューが属するチェーンのページへリンクするのに使う。
const NAME_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(CHAINS).map(([slug, info]) => [info.name, slug])
);

export function chainSlugByName(name: string | null | undefined): string | null {
  if (!name) return null;
  return NAME_TO_SLUG[name] ?? null;
}
