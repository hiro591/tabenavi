/**
 * アフィリエイト商品マスタ
 *
 * 使い方 (推奨):
 *   1. .env.local に NEXT_PUBLIC_AMAZON_AFFILIATE_TAG を設定
 *      → 18商品すべてが Amazon検索リンク経由で commission 計上対象になる
 *   2. .env.local に NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID を設定
 *      → 18商品すべてが 楽天 検索リンク経由で commission 計上対象になる
 *   3. 個別商品ページの直リンクが取得できたら amazonUrl / rakutenUrl を上書き
 *      (検索リンクから直リンクに昇格、CVR が向上する)
 *
 * 旧プレースホルダー方式は廃止。未設定でも検索URLにフォールバックして
 * "リンクが死んでいる状態" を防ぐ。
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

export const AFFILIATE_PLACEHOLDER = "YOUR_AFFILIATE_LINK_HERE";
const PLACEHOLDER = AFFILIATE_PLACEHOLDER;

export type AffiliateLink = {
  url: string;
  isDirect: boolean; // true = 個別商品直リンク, false = 検索結果フォールバック
};

const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? "";
const RAKUTEN_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? "";

function isPlaceholder(v?: string): boolean {
  return !v || v === AFFILIATE_PLACEHOLDER;
}

function buildAmazonSearchUrl(productName: string): string {
  const q = encodeURIComponent(productName);
  return AMAZON_TAG
    ? `https://www.amazon.co.jp/s?k=${q}&tag=${AMAZON_TAG}`
    : `https://www.amazon.co.jp/s?k=${q}`;
}

function buildRakutenSearchUrl(productName: string): string {
  const q = encodeURIComponent(productName);
  const search = `https://search.rakuten.co.jp/search/mall/${q}/`;
  if (!RAKUTEN_ID) return search;
  // 楽天アフィリエイト hgc 形式でラップ (commission 計上対象)
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_ID}/?pc=${encodeURIComponent(search)}&link_type=hybrid_url`;
}

/** Legacy: 直リンクのみを返す。プレースホルダーや未設定は null。 */
export function getValidAmazonUrl(product: AffiliateProduct): string | null {
  if (isPlaceholder(product.amazonUrl)) return null;
  return product.amazonUrl ?? null;
}

/** Legacy: 直リンクのみを返す。プレースホルダーや未設定は null。 */
export function getValidRakutenUrl(product: AffiliateProduct): string | null {
  if (isPlaceholder(product.rakutenUrl)) return null;
  return product.rakutenUrl ?? null;
}

/** 直リンク優先・なければ検索URLフォールバック。常に有効URLを返す。 */
export function getAmazonLink(product: AffiliateProduct): AffiliateLink {
  if (!isPlaceholder(product.amazonUrl)) {
    return { url: product.amazonUrl as string, isDirect: true };
  }
  return { url: buildAmazonSearchUrl(product.name), isDirect: false };
}

/** 直リンク優先・なければ検索URLフォールバック。常に有効URLを返す。 */
export function getRakutenLink(product: AffiliateProduct): AffiliateLink {
  if (!isPlaceholder(product.rakutenUrl)) {
    return { url: product.rakutenUrl as string, isDirect: true };
  }
  return { url: buildRakutenSearchUrl(product.name), isDirect: false };
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  // ─── プロテインパウダー ───────────────────────────────────────
  {
    id: "ultora-whey",
    name: "ULTORA ホエイダイエットプロテイン",
    description:
      "13kg痩せた1年で5袋(5kg)消費した主力。人工甘味料不使用なのにチョコ味が普通に美味い。残業で帰り遅い夜、コンビニ寄らず家でシェイカー振るだけで済む＝衝動買い防止にもなってる。",
    imageUrl: "https://shop.r10s.jp/ultora/cabinet/12530611/12989527/imgrc0108557950.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER, // 旧もしも直リンクは商品ページ販売終了で死にリンク化 → 楽天ID付き検索リンクにフォールバック(2026-06-08)
    priceHint: "約4,000円〜 (1kg)",
    highlight: "俺の主力 / 年5袋消費",
  },
  {
    id: "myprotein-impact",
    name: "MYPROTEIN Impact ホエイプロテイン",
    description:
      "ULTORAに飽きた時のローテ要員。ナチュラルチョコとミルクティーを試したけど、ミルクティーが当たり。セール中の5kg買いだと1食あたり50円切る。減量中の財布に優しい救世主。",
    imageUrl: "/affiliate/myprotein.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (1kg)",
    highlight: "味選び迷ったら / 60種",
  },
  {
    id: "savas-shape",
    name: "ザバス シェイプ＆ビューティ ソイプロテイン",
    description:
      "夜の置き換え用に2袋リピート。ホエイより腹持ちがガチで違って、寝る前に飲んでも翌朝胃もたれしない。ミルクティー味が無難に飲みやすい。スーパーでも買えるのが緊急時に地味に助かる。",
    imageUrl: "/affiliate/savas.jpg",
    category: "protein-powder",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (945g)",
    highlight: "夜の置き換え用",
  },

  // ─── プロテインバー ───────────────────────────────────────
  {
    id: "inbar-protein",
    name: "in バー プロテイン Granola",
    description:
      "出社カバンに常備して1年。会議が長引いて昼食えない日、これ1本で乗り切れる。コンビニで200円弱だけどAmazon定期便なら1本140円台。月3箱ペースで買い続けてる定番。",
    imageUrl: "/affiliate/inbar.jpg",
    category: "protein-bar",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,000円〜 (12本)",
    highlight: "カバンに常備 / 月3箱",
  },
  {
    id: "onebar-protein",
    name: "1本満足バー プロテイン",
    description:
      "減量中の「甘いもの食いたい欲」をこれで殺してきた。チョコがガチでチョコ味で、満足感が普通のお菓子と変わらない。13kg痩せた1年で4箱は消費。コンビニスイーツ買うより罪悪感ゼロ。",
    imageUrl: "/affiliate/onebar.jpg",
    category: "protein-bar",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,200円〜 (12本)",
    highlight: "甘いもの欲を殺す / 4箱消費",
  },

  // ─── 低糖質食品 ───────────────────────────────────────
  {
    id: "base-food-bread",
    name: "BASE BREAD (ベースブレッド)",
    description:
      "出社日の朝食、これ1個＋ブラックコーヒーで固定。栄養考えるのが面倒な朝に答え出してくれる。最初パサつき気味で正直微妙だったけど、レンチン10秒で化ける。チョコ味なら甘党も納得。",
    imageUrl: "/affiliate/base-bread.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,500円〜 (16袋)",
    highlight: "朝食固定で思考停止",
  },
  {
    id: "low-carb-noodle",
    name: "紀文 糖質0g麺",
    description:
      "二郎食いたい夜の代替案。市販ラーメンスープに突っ込んで茹で卵とキャベツのせれば、罪悪感ゼロのなんちゃってラーメンが完成。麺感は本物の80%だけど糖質ゼロの安心感がデカい。",
    imageUrl: "/affiliate/0g-noodle.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (12袋)",
    highlight: "深夜の麺欲を罪悪感ゼロで",
  },

  // ─── キッチンスケール ───────────────────────────────────────
  {
    id: "tanita-scale",
    name: "タニタ デジタルクッキングスケール",
    description:
      "これ買ってからガチで世界変わった。「ご飯1膳」が実は200gだったり、目分量と実重量で200kcal違ったりする現実を突きつけられる。データ好きには必須。1500円で痩せられるなら安すぎる投資。",
    imageUrl: "/affiliate/tanita.jpg",
    category: "kitchen-scale",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約1,500円〜",
    highlight: "目分量との決別ツール",
  },

  // ─── サプリメント ───────────────────────────────────────
  {
    id: "myprotein-bcaa",
    name: "MYPROTEIN BCAA 4:1:1",
    description:
      "週2のジムで筋肉落としたくない時用。減量中はカロリー絞ってる分、筋肉減りやすい気がして導入。トロピカル味を水筒に入れてジムで飲んでる。スポドリ感覚で続けやすい。",
    imageUrl: "/affiliate/bcaa.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (500g)",
    highlight: "ジム日のお供",
  },
  {
    id: "dhc-multivitamin",
    name: "DHC マルチビタミン (60日分)",
    description:
      "外食ばっかりだった86kg時代、明らかに野菜不足だったので保険として導入。今も毎朝1粒の習慣続いてる。サプリで何かが劇的に変わるとは思わないけど、1日10円台ならむしろ飲まない理由がない。",
    imageUrl: "/affiliate/dhc-vit.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円",
    highlight: "外食民の保険 / 1日10円",
  },

  // ─── 寿司・和食関連 ───────────────────────────────────────
  {
    id: "kombu-cha",
    name: "玉露園 梅こんぶ茶",
    description:
      "回転寿司行く前にデスクで一杯。胃が温まって最初の3皿で「あれ、もう満足かも」ってなる現象を発見してから手放せない。1杯3kcalで効果アリ。デスクの引き出しに常駐してる。",
    imageUrl: "/affiliate/kombu-cha.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円〜",
    highlight: "寿司前の自衛策",
  },
  {
    id: "miso-soup-pack",
    name: "永谷園 1杯でしじみ70個分の濃縮しじみ味噌汁",
    description:
      "飲み会翌朝の出社、これが命綱。会社の給湯室で湯を注ぐだけで人間に戻れる。1杯30kcal台でランチ前の空腹も紛れる。オフィスの引き出しに10袋ストックしてる。30代の必需品。",
    imageUrl: "/affiliate/miso-soup.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約800円〜 (10食)",
    highlight: "二日酔い翌朝の命綱",
  },

  // ─── ラーメン・麺類関連 ───────────────────────────────────
  {
    id: "konjac-rice",
    name: "蒟蒻畑 マンナンごはん (パックごはん)",
    description:
      "「ご飯抜きは無理」派の救済策。普通の白米と半々で炊くと食感も味もほぼ気にならない。停滞期に試して効いた。レンジで2分、夜の自炊サボリ日でも罪悪感少なめにご飯食える。",
    imageUrl: "/affiliate/mannan.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,500円〜 (12食)",
    highlight: "停滞期に試して効いた",
  },

  // ─── 飲み会・お酒関連 ───────────────────────────────────
  {
    id: "ukon",
    name: "ハウス ウコンの力 顆粒",
    description:
      "接待の前にコンビニで買うと300円取られるけど、Amazonまとめ買いなら1袋150円。デスクの引き出しに常備して、急な飲み会前にサッと飲んでる。あるとないでは翌朝の動き出しが違う(個人の体感)。",
    imageUrl: "/affiliate/ukon.jpg",
    category: "supplement",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約1,500円〜 (10袋)",
    highlight: "急な飲み会対策",
  },
  {
    id: "highball-can",
    name: "サントリー 角ハイボール缶 (糖質ゼロ)",
    description:
      "3年前(86kg)の俺は毎晩ビール2本で+500kcal積み上げてた。これに切り替えただけで体感そのまま月-1.5kg。糖質0g・プリン体0gで罪悪感なし。家飲みのデフォルトをこっちに変えるのが最強の節約。",
    imageUrl: "/affiliate/highball.jpg",
    category: "low-carb-food",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (24本)",
    highlight: "ビール卒業 / 月-1.5kg",
  },

  // ─── キッチン・調理関連 ───────────────────────────────────
  {
    id: "shaker-bottle",
    name: "ザバス プロテインシェイカー",
    description:
      "1年使ってもパッキン破損ゼロの優等生。空きペットボトルで代用してた頃はダマだらけで萎えてたけど、専用シェイカーは一振りで完璧。500円ケチって離脱するくらいなら買った方が早い。",
    imageUrl: "/affiliate/shaker.jpg",
    category: "kitchen-scale",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約500円〜",
    highlight: "1年使って無故障",
  },

  // ─── コンビニで補えない高タンパク (Amazon定期便) ─────────────
  {
    id: "salada-chicken-pack",
    name: "サラダチキン まとめ買いパック",
    description:
      "コンビニで毎回400円払ってた俺、Amazon定期便にしてから月3000円浮いた。冷蔵庫に常備しておけば「夜何食う問題」が解決。袋開けてオートミール乗せて1分で高タンパク飯完成。",
    imageUrl: "/affiliate/salada-chicken.jpg",
    category: "convenience-protein",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約3,000円〜 (10個)",
    highlight: "コンビニ卒業 / 月3000円浮く",
  },
  {
    id: "tuna-can",
    name: "いなば ライトツナ ノンオイル",
    description:
      "サラダにぶっかけて夜飯完結する個人開発者の味方。コードレビュー佳境で買い物行けない夜、これとカット野菜で5分で高タンパク飯成立。1缶80円台でタンパク質14gはコスパおかしい。常備推奨。",
    imageUrl: "/affiliate/tuna.jpg",
    category: "convenience-protein",
    amazonUrl: PLACEHOLDER,
    rakutenUrl: PLACEHOLDER,
    priceHint: "約2,000円〜 (24缶)",
    highlight: "残業22時の救世主",
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

