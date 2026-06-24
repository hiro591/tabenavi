export type ArticleCategory =
  | "chain"     // チェーン店個別ガイド
  | "method"    // ダイエット手法・実践
  | "training"  // 筋トレ・増量
  | "tool"      // ツール・データ
  | "support"   // 継続・トラブル対応
  | "scene"     // シーン別
  | "cuisine"   // 料理ジャンル
  | "overview"; // 総合

export interface RelatedArticle {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
}

export const RELATED_ARTICLES: RelatedArticle[] = [
  // ─── overview ─────────────────────────────────────
  { slug: "eating-out-diet", title: "外食ダイエット完全ガイド", description: "外食でもダイエットを成功させるコツを紹介。", category: "overview" },

  // ─── chain (16) ───────────────────────────────────
  { slug: "mcdonalds-diet", title: "マクドナルドでダイエット", description: "マクドナルドの低カロリーメニューを徹底解説。", category: "chain" },
  { slug: "yoshinoya-diet", title: "吉野家ダイエットガイド", description: "低カロリーランキングとおすすめの食べ方。", category: "chain" },
  { slug: "matsuya-diet", title: "松屋ダイエットガイド", description: "定食vs丼の比較と低カロリーメニュー。", category: "chain" },
  { slug: "sukiya-diet", title: "すき家ダイエットガイド", description: "牛丼ライトで糖質オフ。", category: "chain" },
  { slug: "saizeriya-diet", title: "サイゼリヤでダイエット", description: "サイゼリヤの低カロリーメニューを解説。", category: "chain" },
  { slug: "gusto-diet", title: "ガストダイエットガイド", description: "低カロリーランキングと注文テクニック。", category: "chain" },
  { slug: "ootoya-diet", title: "大戸屋ダイエットガイド", description: "定食の選び方とおすすめメニュー。", category: "chain" },
  { slug: "dennys-diet", title: "デニーズダイエットガイド", description: "低カロリーメニューとソース別比較。", category: "chain" },
  { slug: "kfc-diet", title: "ケンタッキーダイエットガイド", description: "高タンパクメニューの選び方。", category: "chain" },
  { slug: "subway-diet", title: "サブウェイダイエットガイド", description: "低カロリーサンドの選び方。", category: "chain" },
  { slug: "starbucks-diet", title: "スタバダイエットガイド", description: "低カロリードリンクとカスタマイズ術。", category: "chain" },
  { slug: "marugame-diet", title: "丸亀製麺ダイエットガイド", description: "うどんは太る？低カロリーの選び方。", category: "chain" },
  { slug: "seven-eleven-diet", title: "セブンイレブンダイエット", description: "低カロリー＆高タンパク商品。", category: "chain" },
  { slug: "lawson-diet", title: "ローソンダイエット", description: "低カロリー＆高タンパク商品。", category: "chain" },
  { slug: "familymart-diet", title: "ファミマダイエット", description: "RIZAP商品＆低カロリー。", category: "chain" },
  { slug: "conveni-protein", title: "コンビニ高タンパク商品", description: "コンビニで買える高タンパク商品ランキング。", category: "chain" },

  // ─── method (8) ───────────────────────────────────
  { slug: "low-carb-eating-out", title: "糖質制限×外食ガイド", description: "チェーン店の低糖質メニューを徹底解説。", category: "method" },
  { slug: "low-fat-eating-out", title: "低脂質な外食メニュー", description: "脂質を抑えたい人向けの外食ガイド。", category: "method" },
  { slug: "eating-order", title: "太らない食べ順ガイド", description: "食べ順ダイエットの実践方法。", category: "method" },
  { slug: "daily-meal-plan", title: "1日1500kcalプラン", description: "外食だけで達成する食事プラン。", category: "method" },
  { slug: "recording-diet", title: "レコーディングダイエット", description: "記録するだけで痩せる科学的根拠。", category: "method" },
  { slug: "eat-and-lose", title: "食べて痩せる方法", description: "我慢しないダイエット。", category: "method" },
  { slug: "no-exercise-diet", title: "運動なしダイエット", description: "食事だけで痩せる方法。", category: "method" },
  { slug: "metabolism-boost-foods", title: "代謝を上げる食べ物", description: "痩せやすい体を食事で作る。", category: "method" },

  // ─── training (3) ─────────────────────────────────
  { slug: "muscle-eating-out", title: "筋トレ中の外食ガイド", description: "筋トレ中に最適な外食メニューを紹介。", category: "training" },
  { slug: "bulkup-eating-out", title: "増量期の外食ガイド", description: "バルクアップ向きチェーン店メニュー。", category: "training" },
  { slug: "protein-cost-ranking", title: "タンパク質コスパランキング", description: "1gあたりの価格で外食メニューを比較。", category: "training" },

  // ─── tool (3) ─────────────────────────────────────
  { slug: "pfc-guide", title: "PFCバランス入門", description: "計算方法と外食での実践ガイド。", category: "tool" },
  { slug: "bmr-calculator", title: "基礎代謝の計算と上げ方", description: "痩せやすい体を作る方法。", category: "tool" },
  { slug: "calorie-database", title: "外食カロリーデータベース", description: "主要チェーンのカロリー情報まとめ。", category: "tool" },
  { slug: "eating-out-nutrition-report", title: "外食6,097品を全部調べた統計レポート", description: "32チェーンの公式栄養データを全数検証してわかった真実。", category: "tool" },

  // ─── support (5) ──────────────────────────────────
  { slug: "cheat-day", title: "チートデイ完全ガイド", description: "正しいやり方・頻度・メニュー。", category: "support" },
  { slug: "diet-plateau", title: "停滞期の乗り越え方", description: "体重が減らない時の対策。", category: "support" },
  { slug: "rebound-prevention", title: "リバウンド防止ガイド", description: "ダイエット後の体重維持。", category: "support" },
  { slug: "diet-mistakes", title: "ダイエットNG集", description: "やってはいけないこと10選。", category: "support" },
  { slug: "late-night-eating", title: "夜食で太らない方法", description: "深夜の外食・コンビニメニュー。", category: "support" },

  // ─── scene (3) ────────────────────────────────────
  { slug: "morning-diet", title: "朝食ダイエットガイド", description: "朝マック・コンビニの朝食メニュー。", category: "scene" },
  { slug: "diet-lunch", title: "ダイエット中のランチガイド", description: "500kcal以下のランチメニューを厳選。", category: "scene" },
  { slug: "drinking-party-diet", title: "飲み会で太らないガイド", description: "お酒のカロリーとおつまみの選び方。", category: "scene" },

  // ─── cuisine (6) ──────────────────────────────────
  { slug: "gyudon-comparison", title: "牛丼チェーン栄養比較", description: "吉野家・松屋・すき家の栄養成分を比較。", category: "cuisine" },
  { slug: "hamburger-comparison", title: "ハンバーガー5社カロリー比較", description: "マック・モス・バーキン・ケンタ・ゼッテリアを徹底比較。", category: "cuisine" },
  { slug: "ramen-diet", title: "ラーメンとダイエット", description: "カロリー比較と太らない食べ方。", category: "cuisine" },
  { slug: "curry-diet", title: "カレーとダイエット", description: "チェーン店別カロリー比較。", category: "cuisine" },
  { slug: "sushi-diet", title: "回転寿司ダイエットガイド", description: "ネタ別カロリーと太らない食べ方。", category: "cuisine" },
  { slug: "family-restaurant-diet", title: "ファミレスダイエット比較", description: "サイゼリヤ・ガスト・デニーズを徹底比較。", category: "cuisine" },
  { slug: "conveni-comparison", title: "コンビニ3社カロリー比較", description: "セブン・ローソン・ファミマを栄養データで横断比較。", category: "chain" },
  { slug: "high-protein-chain-database", title: "高タンパク外食ランキング", description: "32チェーン6,000品を検証した、外食で高タンパクなメニューのランキング。", category: "training" },
  { slug: "ohsho-diet", title: "餃子の王将のダイエットメニュー｜高タンパク・低カロリーの選び方", description: "餃子の王将で太りにくいメニューの選び方を、カロリー・タンパク質・PFCの実データで解説。唐揚げ・レバニラ・餃子など主要メニューを高タンパク／低カロリー順に整理し、ダイエット中でも王将を楽しむコツを紹介します。", category: "chain" },
  { slug: "yayoiken-diet", title: "やよい軒の高タンパク・ダイエットメニュー｜定食のタンパク質ランキング", description: "やよい軒の定食をタンパク質・カロリー・PFCの実データでランキング。高タンパクな定食やダイエット中におすすめの低カロリーメニュー、ご飯の調整法まで外食減量の視点で解説します。", category: "chain" },
  { slug: "ichibanya-diet", title: "CoCo壱番屋のダイエット・カロリー攻略｜太りにくいカレーの選び方", description: "CoCo壱番屋（ココイチ）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ライス量の調整やトッピング選びでカロリーを抑える方法、高タンパクなトッピングを紹介します。", category: "chain" },
  { slug: "bikkuri-donkey-diet", title: "びっくりドンキーのダイエット・カロリーガイド｜太りにくいメニューの選び方", description: "びっくりドンキーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ハンバーグディッシュのカロリー比較、ライス量やサイドの選び方、高タンパク・低カロリーのおすすめを紹介します。", category: "chain" },
  { slug: "mos-diet", title: "モスバーガーのダイエット・カロリーガイド｜太りにくいメニューの選び方", description: "モスバーガーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。バーガーのカロリー比較、菜摘など低糖質メニュー、サイドの選び方を紹介します。", category: "chain" },
  { slug: "doutor-diet", title: "ドトールのダイエット・カロリーガイド｜低カロリーなフード・ドリンクの選び方", description: "ドトールでダイエット中に選びたいメニューを、カロリー・タンパク質・PFCの実データで解説。ミラノサンドやドリンクのカロリー比較、低カロリー・高タンパクな組み合わせ、糖質を抑える選び方を紹介します。", category: "chain" },
  { slug: "tenya-diet", title: "てんやのダイエット・カロリーガイド｜天丼・天ぷらの太りにくい選び方", description: "てんや（天丼・天ぷら）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。天丼のカロリー比較、定食やそばとの組み合わせ、揚げ物の脂質を抑える選び方を紹介します。", category: "chain" },
  { slug: "cocos-diet", title: "ココスのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方", description: "ファミレス・ココスでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ハンバーグやサラダ、朝食メニューの選び方、高タンパク・低カロリーのおすすめを紹介します。", category: "chain" },
];

export const ARTICLE_CATEGORIES = {
  chain: { label: "チェーン店別ダイエット", color: "from-sky-400 to-cyan-400" },
  method: { label: "ダイエット手法・実践", color: "from-emerald-400 to-teal-400" },
  training: { label: "筋トレ・増量", color: "from-orange-400 to-red-400" },
  tool: { label: "ツール・データ", color: "from-indigo-400 to-purple-400" },
  support: { label: "継続・トラブル対応", color: "from-pink-400 to-rose-400" },
  scene: { label: "シーン別ガイド", color: "from-yellow-400 to-amber-400" },
  cuisine: { label: "料理ジャンル別", color: "from-violet-400 to-fuchsia-400" },
  overview: { label: "総合ガイド", color: "from-slate-400 to-gray-500" },
} as const satisfies Record<ArticleCategory, { label: string; color: string }>;

// Deterministic shuffle by slug seed
function rotate<T>(arr: T[], n: number): T[] {
  if (arr.length === 0) return arr;
  const k = ((n % arr.length) + arr.length) % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

export function pickRelated(currentSlug: string): RelatedArticle[] {
  const current = RELATED_ARTICLES.find((a) => a.slug === currentSlug);
  const others = RELATED_ARTICLES.filter((a) => a.slug !== currentSlug);
  const seed = Array.from(currentSlug).reduce((s, c) => s + c.charCodeAt(0), 0);

  if (!current) return rotate(others, seed).slice(0, 3);

  const sameCategory = rotate(others.filter((a) => a.category === current.category), seed);
  const otherCategory = rotate(others.filter((a) => a.category !== current.category), seed);

  const sameTake = Math.min(2, sameCategory.length);
  const result = [...sameCategory.slice(0, sameTake)];
  result.push(...otherCategory.slice(0, 3 - result.length));
  return result;
}
