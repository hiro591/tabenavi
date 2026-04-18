/**
 * アフィリエイト商品マスタ
 *
 * 使い方:
 *   1. もしもアフィリエイト/Amazonアソシエイト/楽天アフィリエイトに登録
 *   2. 各商品のamazonUrl / rakutenUrlを、自分のアフィリリンクに差し替え
 *   3. プレースホルダー文字列「YOUR_AFFILIATE_LINK_HERE」を全置換
 *
 * 重要: 全商品にPR表記が自動で付与されます (景表法/ステマ規制対応)
 */

export type AffiliateProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: ProductCategory;
  amazonUrl?: string;
  rakutenUrl?: string;
  priceHint?: string;
  highlight?: string;
};

export type ProductCategory =
  | "protein-powder"
  | "protein-bar"
  | "low-carb-food"
  | "kitchen-scale"
  | "supplement"
  | "meal-prep"
  | "convenience-protein";

const PLACEHOLDER = "YOUR_AFFILIATE_LINK_HERE";

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  // ─── プロテインパウダー ───────────────────────────────────────
  {
    id: "ultora-whey",
    name: "ULTORA ホエイダイエットプロテイン",
    description:
      "国内製造・人工甘味料不使用のホエイプロテイン。1食あたりタンパク質21g。外食でタンパク質が不足しがちな日の補完に最適。",
    imageUrl: "/affiliate/ultora.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER, // 要差し替え: もしも経由Amazonリンク
    rakutenUrl: PLACEHOLDER,
    priceHint: "約4,000円〜 (1kg)",
    highlight: "コスパ◎ タンパク質1gあたり約2円",
  },
  {
    id: "myprotein-impact",
    name: "MYPROTEIN Impact ホエイプロテイン",
    description:
      "世界No.1ブランド。60種類以上のフレーバーで飽きない。コスパ重視ならこれ。",
    imageUrl: "/affiliate/myprotein.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (1kg)",
    highlight: "60種以上のフレーバー",
  },
  {
    id: "savas-shape",
    name: "ザバス シェイプ＆ビューティ ソイプロテイン",
    description:
      "ソイプロテインで腹持ち◎。ダイエット中の置き換え・間食代わりに。",
    imageUrl: "/affiliate/savas.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (945g)",
    highlight: "国内ブランドで安心",
  },

  // ─── プロテインバー ───────────────────────────────────────
  {
    id: "inbar-protein",
    name: "in バー プロテイン Granola",
    description:
      "1本でタンパク質10g。コンビニでも買えるが、Amazonまとめ買いが圧倒的にお得。",
    imageUrl: "/affiliate/inbar.jpg",
    category: "protein-bar",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,000円〜 (12本)",
    highlight: "外出時の高タンパク間食に",
  },
  {
    id: "onebar-protein",
    name: "1本満足バー プロテイン",
    description:
      "1本でタンパク質15g。チョコ系で甘いものが食べたい時の救世主。",
    imageUrl: "/affiliate/onebar.jpg",
    category: "protein-bar",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,200円〜 (12本)",
    highlight: "甘いもの欲求対策に",
  },

  // ─── 低糖質食品 ───────────────────────────────────────
  {
    id: "base-food-bread",
    name: "BASE BREAD (ベースブレッド)",
    description:
      "1食で26種の栄養素が摂れる完全栄養パン。糖質制限中の朝食・ランチ代用に。",
    imageUrl: "/affiliate/base-bread.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,500円〜 (16袋)",
    highlight: "完全栄養・タンパク質13g/袋",
  },
  {
    id: "low-carb-noodle",
    name: "紀文 糖質0g麺",
    description:
      "ラーメン代わりに。1袋で糖質0g・15kcal。ダイエット中の麺欲を満たす。",
    imageUrl: "/affiliate/0g-noodle.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (12袋)",
    highlight: "糖質0g・15kcal",
  },

  // ─── キッチンスケール ───────────────────────────────────────
  {
    id: "tanita-scale",
    name: "タニタ デジタルクッキングスケール",
    description:
      "0.1g単位で計量。自炊する日のPFC計算精度が劇的に上がる。レコーディングダイエット必携。",
    imageUrl: "/affiliate/tanita.jpg",
    category: "kitchen-scale",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約1,500円〜",
    highlight: "0.1g精度・3kgまで",
  },

  // ─── サプリメント ───────────────────────────────────────
  {
    id: "myprotein-bcaa",
    name: "MYPROTEIN BCAA 4:1:1",
    description:
      "筋肉の分解防止＆回復促進。トレーニング中の摂取で筋トレ効果UP。",
    imageUrl: "/affiliate/bcaa.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (500g)",
    highlight: "コスパ最強BCAA",
  },
  {
    id: "dhc-multivitamin",
    name: "DHC マルチビタミン (60日分)",
    description:
      "外食中心だと不足しがちなビタミンを1粒で補完。1日10円台のコスパ。",
    imageUrl: "/affiliate/dhc-vit.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円",
    highlight: "1日10円台",
  },

  // ─── 寿司・和食関連 ───────────────────────────────────────
  {
    id: "kombu-cha",
    name: "玉露園 梅こんぶ茶",
    description:
      "外食・寿司の前後に飲むと食べ過ぎ予防に。低カロリーで満腹中枢を刺激。",
    imageUrl: "/affiliate/kombu-cha.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円〜",
    highlight: "外食前のひと工夫",
  },
  {
    id: "miso-soup-pack",
    name: "永谷園 1杯でしじみ70個分の濃縮しじみ味噌汁",
    description:
      "外食やお酒の翌朝に。低カロリーでミネラル補給。デスクに常備推奨。",
    imageUrl: "/affiliate/miso-soup.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約800円〜 (10食)",
    highlight: "オフィス常備に",
  },

  // ─── ラーメン・麺類関連 ───────────────────────────────────
  {
    id: "konjac-rice",
    name: "蒟蒻畑 マンナンごはん (パックごはん)",
    description:
      "白米に混ぜるだけで糖質約25%カット。ラーメンや丼のごはん部分の置き換えに。",
    imageUrl: "/affiliate/mannan.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (12食)",
    highlight: "糖質25%カット",
  },

  // ─── 飲み会・お酒関連 ───────────────────────────────────
  {
    id: "ukon",
    name: "ハウス ウコンの力 顆粒",
    description:
      "飲み会前の必需品。肝臓ケアでお酒の翌日も快調に。",
    imageUrl: "/affiliate/ukon.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約1,500円〜 (10袋)",
    highlight: "飲み会の必需品",
  },
  {
    id: "highball-can",
    name: "サントリー 角ハイボール缶 (糖質ゼロ)",
    description:
      "ダイエット中の家飲みに。糖質0g・プリン体0g。ビールから切り替えるだけで月数千kcal節約。",
    imageUrl: "/affiliate/highball.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (24本)",
    highlight: "糖質0g・プリン体0g",
  },

  // ─── キッチン・調理関連 ───────────────────────────────────
  {
    id: "shaker-bottle",
    name: "ザバス プロテインシェイカー",
    description:
      "プロテインをダマなく混ぜる定番シェイカー。割れにくく食洗機対応。",
    imageUrl: "/affiliate/shaker.jpg",
    category: "kitchen-scale",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円〜",
    highlight: "プロテイン民の必需品",
  },

  // ─── コンビニで補えない高タンパク (Amazon定期便) ─────────────
  {
    id: "salada-chicken-pack",
    name: "サラダチキン まとめ買いパック",
    description:
      "コンビニで毎回買うより、Amazon定期便の方が1個あたり50円以上安い。",
    imageUrl: "/affiliate/salada-chicken.jpg",
    category: "convenience-protein",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (10個)",
    highlight: "1個あたり300円以下",
  },
  {
    id: "tuna-can",
    name: "いなば ライトツナ ノンオイル",
    description:
      "1缶でタンパク質14g・低脂質。常備しておけば外食できない日の救世主。",
    imageUrl: "/affiliate/tuna.jpg",
    category: "convenience-protein",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,000円〜 (24缶)",
    highlight: "1缶あたり80円・タンパク質14g",
  },
];

// ─── ヘルパー: カテゴリ別取得 ───────────────────────────────────
export function getProductsByCategory(
  category: ProductCategory,
  limit?: number
): AffiliateProduct[] {
  const filtered = AFFILIATE_PRODUCTS.filter((p) => p.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getProductById(id: string): AffiliateProduct | undefined {
  return AFFILIATE_PRODUCTS.find((p) => p.id === id);
}

export function isAffiliateConfigured(product: AffiliateProduct): boolean {
  return Boolean(
    (product.amazonUrl && product.amazonUrl !== PLACEHOLDER) ||
      (product.rakutenUrl && product.rakutenUrl !== PLACEHOLDER)
  );
}
