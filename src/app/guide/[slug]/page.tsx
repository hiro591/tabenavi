import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { GOALS, CHAINS as PROGRAMMATIC_CHAINS } from "@/lib/chains";
import { QuickAnswer, FAQSection, MenuPhoto, type FAQItem } from "@/components/guide/ArticleComponents";
import { ServiceOffers } from "@/components/guide/AffiliateComponents";
import { serviceTagForChain } from "@/data/mealDeliveryOffers";
import { RELATED_ARTICLES } from "@/lib/articles";
import NutritionTableClient from "./NutritionTableClient";

const CHAIN_MAP: Record<string, { name: string; description: string }> = {
  mcdonalds: {
    name: "マクドナルド",
    description:
      "マクドナルドの全メニューのカロリー・栄養成分（タンパク質・脂質・炭水化物）一覧です。",
  },
  yoshinoya: {
    name: "吉野家",
    description: "吉野家の全メニューのカロリー・栄養成分一覧です。",
  },
  matsuya: {
    name: "松屋",
    description: "松屋の全メニューのカロリー・栄養成分一覧です。",
  },
  sukiya: {
    name: "すき家",
    description: "すき家の全メニューのカロリー・栄養成分一覧です。",
  },
  saizeriya: {
    name: "サイゼリヤ",
    description: "サイゼリヤの全メニューのカロリー・栄養成分一覧です。",
  },
  starbucks: {
    name: "スターバックス",
    description:
      "スターバックスの全ドリンクのカロリー・栄養成分一覧です。",
  },
  conveni: {
    name: "セブンイレブン",
    description: "コンビニ3社の高タンパク商品ランキングです。",
  },
  kfc: {
    name: "ケンタッキー",
    description: "ケンタッキーフライドチキンの全メニューのカロリー・栄養成分一覧です。",
  },
  mos: {
    name: "モスバーガー",
    description: "モスバーガーの全メニューのカロリー・栄養成分一覧です。",
  },
  gusto: {
    name: "ガスト",
    description: "ガストの全メニューのカロリー・栄養成分一覧です。",
  },
  bamiyan: {
    name: "バーミヤン",
    description: "バーミヤンの全メニューのカロリー・栄養成分一覧です。",
  },
  ohsho: {
    name: "餃子の王将",
    description: "餃子の王将の全メニューのカロリー・栄養成分一覧です。",
  },
  hidakaya: {
    name: "日高屋",
    description: "日高屋の全メニューのカロリー・栄養成分一覧です。",
  },
  marugame: {
    name: "丸亀製麺",
    description: "丸亀製麺の全メニューのカロリー・栄養成分一覧です。",
  },
  kurasushi: {
    name: "くら寿司",
    description: "くら寿司の全メニューのカロリー・栄養成分一覧です。",
  },
  sushiro: {
    name: "スシロー",
    description: "スシローの全メニューのカロリー・栄養成分一覧です。",
  },
  dennys: {
    name: "デニーズ",
    description: "デニーズの全メニューのカロリー・栄養成分一覧です。",
  },
  doutor: {
    name: "ドトール",
    description: "ドトールの全ドリンク・フードのカロリー・栄養成分一覧です。",
  },
  subway: {
    name: "サブウェイ",
    description: "サブウェイの全メニューのカロリー・栄養成分一覧です。",
  },
  ootoya: {
    name: "大戸屋",
    description: "大戸屋の全メニューのカロリー・栄養成分一覧です。",
  },
  yayoiken: {
    name: "やよい軒",
    description: "やよい軒の全メニューのカロリー・栄養成分一覧です。",
  },
  burgerking: {
    name: "バーガーキング",
    description: "バーガーキングの全メニューのカロリー・栄養成分一覧です。",
  },
  zetteria: {
    name: "ゼッテリア",
    description: "ゼッテリアの全メニューのカロリー・栄養成分一覧です。",
  },
  matsunoya: {
    name: "松のや",
    description: "松のやの全メニューのカロリー・栄養成分一覧です。",
  },
  ichibanya: {
    name: "CoCo壱番屋",
    description: "CoCo壱番屋の全メニューのカロリー・栄養成分一覧です。",
  },
  tenya: {
    name: "てんや",
    description: "天丼てんやの全メニューのカロリー・栄養成分一覧です。",
  },
  joyfull: {
    name: "ジョイフル",
    description: "ジョイフルの全メニューのカロリー・栄養成分一覧です。",
  },
  "bikkuri-donkey": {
    name: "びっくりドンキー",
    description: "びっくりドンキーの全メニューのカロリー・栄養成分一覧です。",
  },
  cocos: {
    name: "ココス",
    description: "ココスの全メニューのカロリー・栄養成分一覧です。",
  },
  "steak-gusto": {
    name: "ステーキガスト",
    description: "ステーキガストの全メニューのカロリー・栄養成分一覧です。",
  },
  "seven-eleven": {
    name: "セブンイレブン",
    description: "セブンイレブンの全商品のカロリー・栄養成分一覧です。",
  },
  lawson: {
    name: "ローソン",
    description: "ローソンの全商品のカロリー・栄養成分一覧です。",
  },
  familymart: {
    name: "ファミリーマート",
    description: "ファミリーマートの全商品のカロリー・栄養成分一覧です。",
  },
};

const TIPS_MAP: Record<string, string> = {
  mcdonalds:
    "マクドナルドでダイエット中に外食する場合、バーガー単品で注文し、セットのポテトをサイドサラダに変更するのが基本です。チキン系メニューはビーフ系より脂質が低い傾向があります。ドリンクはブラックコーヒーやお茶を選ぶと余計なカロリーを抑えられます。",
  yoshinoya:
    "吉野家でカロリーを抑えるなら、サイズ選びが最も重要です。並盛と大盛で約230kcalの差があります。サラシア牛丼やライザップ牛サラダなど、健康志向メニューも充実しています。",
  matsuya:
    "松屋ではライスの量を調整するのが効果的です。ミニ盛にするだけで100kcal以上の削減になります。定食メニューは味噌汁・サラダ付きで栄養バランスが取りやすいのでおすすめです。",
  sukiya:
    "すき家ではミニサイズを選ぶことでカロリーを大幅にカットできます。牛丼ライトはご飯の代わりに豆腐を使用しており、糖質制限中の方におすすめです。",
  saizeriya:
    "サイゼリヤはコスパ最強の外食チェーンです。グリルチキンやサラダなど、低カロリー・高タンパクメニューが充実しています。パスタはオリーブオイル系を選ぶと脂質を抑えやすくなります。",
  starbucks:
    "スターバックスでカロリーを抑えるなら、ミルクをアーモンドミルクや無脂肪乳に変更するのが効果的です。シロップの量を減らすカスタマイズも有効です。ブラックコーヒーやティーはほぼゼロカロリーです。",
  kfc:
    "ケンタッキーではオリジナルチキンよりも骨なしケンタッキーの方がカロリーが低めです。サイドメニューのコールスローは比較的低カロリーなので、ポテトの代わりに選ぶのがおすすめです。",
  mos:
    "モスバーガーではモスの菜摘（なつみ）シリーズがダイエット向きです。バンズの代わりにレタスで包んでおり、糖質を大幅にカットできます。ソイパティを選ぶと脂質も抑えられます。",
  gusto:
    "ガストでは日替わりランチが栄養バランスに優れています。ハンバーグ系よりもチキン系・魚系メニューを選ぶと脂質を抑えやすくなります。セットのスープバーは低カロリーで満腹感が得られます。",
  bamiyan:
    "バーミヤンでは蒸し鶏や野菜メニューが低カロリーでおすすめです。炒め物は油を多く使うため、蒸し料理やスープ系を選ぶとカロリーを抑えられます。ご飯の量は少なめに調整しましょう。",
  ohsho:
    "餃子の王将では餃子は意外とタンパク質が摂れるメニューです。チャーハンや天津飯よりも、レバニラ炒めや鶏の唐揚げなどタンパク質メインのメニューを選ぶのがポイントです。",
  hidakaya:
    "日高屋では野菜たっぷりタンメンやバクダン炒め定食が栄養バランスに優れています。ラーメンのスープを飲み干さないだけでも、塩分・カロリーを大幅にカットできます。",
  marugame:
    "丸亀製麺ではうどん自体は低脂質で消化が良い食事です。トッピングの天ぷらを控えめにし、ネギやおろし生姜など薬味で味わうのがヘルシーに食べるコツです。",
  kurasushi:
    "くら寿司ではお寿司1貫あたりのカロリーは比較的低めです。サイドメニューの揚げ物を避け、赤身魚やイカ・タコなど低脂質なネタを選ぶのがダイエットのポイントです。",
  sushiro:
    "スシローではまぐろやサーモンなど定番ネタが高タンパク・低カロリーです。シャリハーフを選べる店舗では糖質をカットできます。味噌汁やあおさ汁はカロリー控えめで満足感を得られます。",
  dennys:
    "デニーズではバランスランチや和食メニューが栄養バランスに優れています。ハンバーグやステーキ系よりも、魚定食やサラダ系メニューを選ぶとカロリーを抑えやすくなります。",
  doutor:
    "ドトールではブレンドコーヒーやティーがほぼゼロカロリーです。フードメニューを選ぶ場合、全粒粉サンドやトーストなど軽食系がカロリー控えめです。ミラノサンドは具材によってカロリーが大きく変わるので確認しましょう。",
  subway:
    "サブウェイでは野菜を多めにカスタマイズできるのが最大の強みです。パンを全粒粉に変更し、ソースはオイル＆ビネガーやマスタードを選ぶと脂質を抑えられます。ローストチキンやターキーが高タンパクでおすすめです。",
  ootoya:
    "大戸屋では手作り定食が栄養バランスに優れています。五穀米に変更できるメニューを選ぶと食物繊維を増やせます。チキンかあさん煮やしまほっけ定食など、高タンパクメニューがおすすめです。",
  yayoiken:
    "やよい軒ではご飯おかわり無料ですが、食べすぎに注意が必要です。最初から少なめを注文するのがポイント。しょうが焼き定食や焼魚定食は高タンパクで栄養バランスに優れています。",
  burgerking:
    "バーガーキングは100％ビーフ直火焼きが特徴。ワッパーJr.など小さめサイズ、サラダ、グリルチキンを組み合わせるとカロリーを抑えつつタンパク質を確保できます。",
  zetteria:
    "ゼッテリア（旧ロッテリア）は絶品バーガーが看板。サイドにサラダやスープを選び、セットドリンクをアイスティーに変えるとカロリーカットしやすいです。",
  matsunoya:
    "松のやでは衣が薄めの「ロースかつ」よりタンパク質量で見ると「ヒレかつ」がコスパ良好。ご飯小盛＋豚汁の組み合わせで満足感を保ちつつカロリーを抑えられます。",
  ichibanya:
    "CoCo壱番屋ではライス少なめ＋スープカレー仕立てが王道のダイエットルート。トッピングはほうれん草・なす・チキンなどが低カロリー高栄養です。",
  tenya:
    "天丼てんやでは天丼単品にせず、定食メニューでサラダ・味噌汁を組み合わせるとバランスが取れます。ご飯小盛で約100kcal削減できます。",
  "seven-eleven":
    "セブンイレブンは商品ラインナップが豊富。サラダチキン、ゆで卵、おにぎり、味噌汁を組み合わせれば1食300kcal台で完結できます。",
  lawson:
    "ローソンはブランパンや「たんぱく質」シリーズが充実。糖質制限ダイエッターはコンビニNo.1の選択肢量。",
  familymart:
    "ファミマはRIZAP共同開発商品とお母さん食堂シリーズが軸。ダイエット初心者にも使いやすい単品完結型の商品が多いのが強みです。",
  joyfull:
    "ジョイフルは低価格帯ファミレス。日替わりランチや単品の小鉢を組み合わせると、コスパよくカロリー調整できます。揚げ物より和膳・グリル系を選ぶのがコツ。",
  "bikkuri-donkey":
    "びっくりドンキーはハンバーグ専門。ディッシュのライス量を少なめにし、サラダやスープを足すとPFCバランスが整います。チーズ・ソース増しは脂質が跳ねるので注意。",
  cocos:
    "ココスは朝food/サラダバーが強み。グリル系メイン+サラダバーで野菜を確保し、ライスを控えめにするとダイエット向きの一食になります。",
  "steak-gusto":
    "ステーキガストは赤身ステーキ+サラダバーで高タンパク低脂質を狙えます。ライス・カレー・パンの食べ放題は糖質が増えやすいので量を意識しましょう。",
};

// チェーン→ジャンル代用画像(GENRE_STOCK)のマップ。
// GENRE_STOCKに正確な無料画像が無いジャンル(牛丼=吉野家/すき家/松屋/てんや、とんかつ等)は
// あえて未指定にして画像を出さない(誤った画像より無しが正しい。実写真で順次対応)。
const CHAIN_GENRE: Record<string, string> = {
  mcdonalds: "burger", mos: "burger", burgerking: "burger", zetteria: "burger",
  kfc: "fried-chicken", matsunoya: "fried-chicken",
  saizeriya: "pasta",
  marugame: "udon",
  kurasushi: "sushi", sushiro: "sushi",
  ohsho: "chinese", bamiyan: "chinese", hidakaya: "chinese",
  ichibanya: "curry",
  starbucks: "cafe", doutor: "cafe",
  subway: "sandwich",
  gusto: "steak", dennys: "steak", joyfull: "steak", cocos: "steak",
  "bikkuri-donkey": "steak", "steak-gusto": "steak",
  ootoya: "grilled-fish", yayoiken: "grilled-fish",
  "seven-eleven": "salad", lawson: "salad", familymart: "salad", conveni: "salad",
};

// 面A(チェーンのデータページ)→面B(ダイエット手法記事)への送客マップ。
// 「カロリーを調べに来て離脱寸前の人」を、購買意欲・回遊性の高い手法記事へ送る。
// 同時に最高トラフィックページから内部リンクを通し、面B記事の順位を押し上げる(集客の元栓)。
const CHAIN_DIET: Record<string, string> = {
  mcdonalds: "mcdonalds-diet", yoshinoya: "yoshinoya-diet", matsuya: "matsuya-diet",
  sukiya: "sukiya-diet", saizeriya: "saizeriya-diet", gusto: "gusto-diet",
  ootoya: "ootoya-diet", dennys: "dennys-diet", kfc: "kfc-diet", subway: "subway-diet",
  starbucks: "starbucks-diet", marugame: "marugame-diet", "seven-eleven": "seven-eleven-diet",
  lawson: "lawson-diet", familymart: "familymart-diet", conveni: "conveni-protein",
};

// ISR: 栄養データは月次程度しか変わらないため30日キャッシュ。再生成CPUを約14x削減。
// データ更新時は import スクリプトから revalidatePath("/guide/<slug>") で即時反映する想定。
export const revalidate = 2592000;

// 初回アクセス時に生成→キャッシュ(オンデマンドISR)。これで毎リクエストのSSRを避ける。
export async function generateStaticParams() {
  return [];
}

interface MenuItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  category: string | null;
  chain_restaurants: { name: string } | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chain = CHAIN_MAP[slug];

  if (slug === "eating-out-diet") {
    return {
      title:
        "外食ダイエット完全ガイド｜チェーン店別おすすめメニューとカロリー早見表【2026年最新】 | たべなび",
      description:
        "外食ダイエットの基本と、主要チェーン店の低カロリー・高タンパクメニューをまとめた完全ガイド。チェーン別の選び方のコツやPFCバランスの整え方も解説します。",
      alternates: { canonical: `https://www.tabenavi.jp/guide/${slug}` },
    };
  }

  const name = chain?.name ?? "外食";
  // PFC充足を実データで判定し、タイトル/説明文を「カロリー・栄養成分(PFC)」か「カロリー」に出し分ける。
  // PFC欠損チェーン(サイゼリヤ等7社)に「栄養成分(PFC)」を約束しない=YMYL整合＋検索意図ミスマッチ回避。
  const items = await fetchItems(slug);
  const hasPfc =
    coverage(items, "protein") >= PFC_COVERAGE_MIN &&
    coverage(items, "fat") >= PFC_COVERAGE_MIN &&
    coverage(items, "carbs") >= PFC_COVERAGE_MIN;
  // 【実測済みの教訓・2026-07】PFC欠損チェーンのtitleに「栄養成分(PFC)は公式非公開」と入れる実験(7/2)は
  // 逆効果だった: 「◯◯ 栄養成分」クエリの表示が約97%消失(サイゼ7.7位→14位・クリック-65%)。
  // titleの否定語はGoogleに「このページに栄養成分は無い」と解釈される。誠実な非公開注記は
  // ページ内(QuickAnswer/FAQ)でのみ行い、titleには入れない。この形へ戻して回復済み → 再変更しないこと。
  const title = hasPfc
    ? `${name}のカロリー・栄養成分一覧｜全メニューのPFC(タンパク質・脂質・炭水化物)【2026年最新】 | たべなび`
    : `${name}のカロリー一覧｜全メニューのカロリーを一覧で確認【2026年最新】 | たべなび`;
  const description =
    slug === "conveni"
      ? chain?.description ?? "コンビニ3社の栄養成分一覧"
      : hasPfc
        ? `${name}の全メニューのカロリー・タンパク質・脂質・炭水化物(PFC)を一覧表で掲載。低カロリー・高タンパクのおすすめメニューや、ダイエット・筋トレ中の選び方のコツも解説します。`
        : `${name}の全メニューのカロリーを一覧表で掲載。低カロリーのおすすめメニューや、ダイエット中の選び方のコツも解説します。`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.tabenavi.jp/guide/${slug}` },
    openGraph: {
      title: hasPfc
        ? `${name}のカロリー・栄養成分一覧【2026年最新】`
        : `${name}のカロリー一覧【2026年最新】`,
      description: hasPfc
        ? `${name}の全メニューのPFC(タンパク質・脂質・炭水化物)を一覧で確認。`
        : `${name}の全メニューのカロリーを一覧で確認。`,
      url: `https://www.tabenavi.jp/guide/${slug}`,
      type: "article",
    },
  };
}

// generateMetadata と本体で同一クエリを共有(cache()でリクエスト内1回に)。
const fetchItems = cache(async (slug: string) => {
  const supabase = createPublicClient();

  if (slug === "conveni") {
    const { data } = await supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants(name)")
      .eq("source_type", "convenience_store")
      .order("calories", { ascending: true })
      .returns<MenuItem[]>();
    return data ?? [];
  }

  if (slug === "eating-out-diet") {
    const { data } = await supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants(name)")
      .not("calories", "is", null)
      .order("calories", { ascending: true })
      .limit(200)
      .returns<MenuItem[]>();
    return data ?? [];
  }

  const chain = CHAIN_MAP[slug];
  if (!chain) return [];

  const { data } = await supabase
    .from("menu_items")
    .select("id, name, calories, protein, fat, carbs, price, category, chain_restaurants!inner(name)")
    .eq("chain_restaurants.name", chain.name)
    .order("calories", { ascending: true })
    .returns<MenuItem[]>();

  return data ?? [];
});

// 値>0の割合。protein/fat/carbsが実質欠損のチェーン(サイゼリヤ3%/くら寿司0%/ガスト0%/スシロー0%
// /バーミヤン0%/日高屋1%/ステーキガスト0%)を検出し、PFC列・高P/低脂質UIを隠してカロリー基準に縮退する。
// これをしないと「0.0g」の羅列=誤情報になる(YMYL)。閾値0.5: 実データは≤3% か ≥65% に二極化している。
function coverage(items: MenuItem[], key: "protein" | "fat" | "carbs") {
  if (items.length === 0) return 0;
  return items.filter((i) => (i[key] ?? 0) > 0).length / items.length;
}
const PFC_COVERAGE_MIN = 0.5;

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chain = CHAIN_MAP[slug];
  const isGeneralGuide = slug === "eating-out-diet";

  if (!chain && !isGeneralGuide) {
    notFound();
  }

  const items = await fetchItems(slug);

  // データが無いチェーンページは薄いコンテンツになるため404にする(thin content/インデックス汚染を防ぐ)。
  // isGeneralGuide(総合ガイド)は別ロジックなので除外。
  if (!isGeneralGuide && items.length === 0) {
    notFound();
  }

  const lowCalItems = [...items]
    .filter((i) => i.calories != null)
    .sort((a, b) => (a.calories ?? 0) - (b.calories ?? 0))
    .slice(0, 5);

  // 「[チェーン] タンパク質 ランキング」の検索意図に合わせTOP10まで掲載
  const highProteinItems = [...items]
    .filter((i) => i.protein != null)
    .sort((a, b) => (b.protein ?? 0) - (a.protein ?? 0))
    .slice(0, 10);

  const lowFatItems = [...items]
    .filter((i) => i.fat != null)
    .sort((a, b) => (a.fat ?? 0) - (b.fat ?? 0))
    .slice(0, 5);

  // データ品質ガード(カバレッジ基準): 値>0が半数未満のチェーンでは該当列・UIを隠す。
  // 例: サイゼリヤ(P3%)/くら寿司(P0%)/ガスト/スシロー/バーミヤン/日高屋/ステーキガストはPFC欠損。
  // max>0だけで判定すると、値が数件あるだけのサイゼリヤを通して「0.0g」の高タンパクTOP5を出してしまう。
  const hasProteinData = coverage(items, "protein") >= PFC_COVERAGE_MIN;
  const hasFatData = coverage(items, "fat") >= PFC_COVERAGE_MIN;
  const hasCarbsData = coverage(items, "carbs") >= PFC_COVERAGE_MIN;
  const hasPfcData = hasProteinData && hasFatData && hasCarbsData;
  // 価格は揃っているチェーンが少ない。3割以上に価格がある時だけ価格列を出す。
  const priceCount = items.filter((i) => i.price != null).length;
  const hasPriceData = items.length > 0 && priceCount / items.length >= 0.3;

  const title = isGeneralGuide
    ? "外食ダイエット完全ガイド"
    : hasPfcData
      ? `${chain!.name} カロリー・栄養成分一覧`
      : `${chain!.name} カロリー一覧`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: chain?.description ?? "外食チェーンの栄養成分一覧",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
    publisher: {
      "@type": "Organization",
      name: "たべなび",
    },
    mainEntityOfPage: `https://www.tabenavi.jp/guide/${slug}`,
  };

  // パンくず構造化データ(検索結果でのパンくず表示＋階層理解)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.tabenavi.jp" },
      { "@type": "ListItem", position: 2, name: "ガイド", item: "https://www.tabenavi.jp/guide" },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://www.tabenavi.jp/guide/${slug}`,
      },
    ],
  };

  // QuickAnswer / FAQ はDB実値から組み立てる(捏造ゼロ・チェーン毎に常に正確)。
  const topLowCal = lowCalItems[0];
  const topProtein = highProteinItems[0];
  const quickAnswerNode = chain ? (
    <>
      {chain.name}の全<strong>{items.length}メニュー</strong>
      {hasPfcData
        ? "のカロリー・タンパク質・脂質・炭水化物を一覧で確認できます。"
        : "のカロリーを一覧で確認できます。"}
      {topLowCal && (
        <>
          最もカロリーが低いのは「{topLowCal.name}」（
          <strong>{topLowCal.calories}kcal</strong>）
        </>
      )}
      {hasProteinData && topProtein && topProtein.protein != null && (
        <>
          、高タンパクなのは「{topProtein.name}」（
          <strong>タンパク質{topProtein.protein.toFixed(1)}g</strong>）
        </>
      )}
      です。
    </>
  ) : null;
  // 【教訓の続き・2026-07-22】QuickAnswer内のPFC非公開注記も削除した。titleロールバック(7/12)後も
  // 回復が停滞したため、最上部パッセージの否定語密集を7/2以前の状態へ完全復元。
  // 非公開の誠実な説明はFAQ(ポジティブ先行の語順)にのみ残す。QuickAnswerに否定注記を再追加しないこと。

  const faqItems: FAQItem[] = [];
  if (chain && topLowCal) {
    const second = lowCalItems[1];
    faqItems.push({
      q: `${chain.name}で一番カロリーが低いメニューは？`,
      a: `${topLowCal.name}で${topLowCal.calories}kcalです。${
        second ? `次いで${second.name}（${second.calories}kcal）などが低カロリーです。` : ""
      }ダイエット中はこうした低カロリーメニューを選ぶのがおすすめです。`,
    });
  }
  if (chain && hasProteinData && topProtein && topProtein.protein != null) {
    faqItems.push({
      q: `${chain.name}で高タンパクなメニューは？`,
      a: `${topProtein.name}がタンパク質${topProtein.protein.toFixed(
        1
      )}gで最も多く、筋トレ・ボディメイク中の方におすすめです。本ページの「高タンパク(タンパク質)ランキングTOP10」も参考にしてください。`,
    });
  }
  if (chain) {
    faqItems.push({
      q: `${chain.name}の栄養成分（カロリー・PFC）はどこで確認できますか？`,
      a: hasPfcData
        ? `本ページで${chain.name}の全${items.length}メニューのカロリー・タンパク質・脂質・炭水化物を一覧表で確認できます。アプリ「たべなび」を使えば、食べたメニューをタップするだけで栄養を記録・管理できます。`
        : `カロリーは本ページで全${items.length}メニュー分を一覧表で確認できます。タンパク質・脂質・炭水化物(PFC)は${chain.name}が公式に公開していないため掲載していません。`,
    });
  }
  if (chain && TIPS_MAP[slug]) {
    faqItems.push({
      q: `${chain.name}でダイエット中に選ぶならどのメニューがおすすめ？`,
      a: TIPS_MAP[slug],
    });
  }

  const otherChains = Object.entries(CHAIN_MAP).filter(
    ([key]) => key !== slug && key !== "conveni"
  );

  // 目次(TOC): 実際に表示されるセクションだけを動的に。id付きH2と対でpassageランク/サイトリンクを狙う。
  const toc: { id: string; label: string }[] = [];
  if (slug in PROGRAMMATIC_CHAINS && chain) toc.push({ id: "by-goal", label: `${chain.name}を目的別に探す` });
  if (items.length > 0) toc.push({ id: "nutrition-table", label: hasPfcData ? "全メニュー栄養成分一覧" : "全メニューカロリー一覧" });
  if (lowCalItems.length > 0) toc.push({ id: "low-calorie", label: "低カロリーメニューランキングTOP5" });
  if (hasProteinData && highProteinItems.length > 0) toc.push({ id: "high-protein", label: "高タンパク(タンパク質)ランキングTOP10" });
  if (hasFatData && lowFatItems.length > 0) toc.push({ id: "low-fat", label: "低脂質メニューランキングTOP5" });
  if (chain && TIPS_MAP[slug]) toc.push({ id: "tips", label: `${chain.name}で栄養管理するコツ` });
  if (faqItems.length > 0) toc.push({ id: "faq", label: "よくある質問" });

  // 面B(ダイエット手法記事)への送客リンク: チェーン固有のダイエット記事＋普遍的な高価値記事。
  const guideLinkSlugs = [
    CHAIN_DIET[slug],
    "high-protein-chain-database",
    "protein-cost-ranking",
    "eating-out-diet",
    "diet-lunch",
  ].filter((s): s is string => Boolean(s) && s !== slug);
  const guideLinks = [...new Set(guideLinkSlugs)]
    .map((s) => RELATED_ARTICLES.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">ガイド一覧</span>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long" })}
        </p>

        {/* Introduction text */}
        {chain && (
          <p className="text-gray-600 leading-relaxed mb-8">
            {hasPfcData
              ? `${chain.name}の全メニューのカロリー、タンパク質（P）、脂質（F）、炭水化物（C）の栄養成分を一覧でまとめています。`
              : `${chain.name}の全メニューのカロリーを一覧でまとめています。`}
            ダイエットや筋トレ中の食事選びにお役立てください。
            ※カロリー・栄養成分は店舗・時期により異なる場合があります。
          </p>
        )}

        {/* QuickAnswer: AI Overview / 強調スニペット対策の冒頭即答 */}
        {quickAnswerNode && (
          <QuickAnswer
            question={`${chain!.name}でカロリーが低い・高タンパクなメニューは？`}
            answer={quickAnswerNode}
          />
        )}

        {/* チェーンのジャンル代用画像(著作権フリー・実写真があれば自動で差し替わる) */}
        {chain && <MenuPhoto id={`chain-${slug}`} genre={CHAIN_GENRE[slug]} priority />}

        {/* 目次(TOC): id付きH2へのアンカー。同一ページ内ジャンプ＋passageランク対策 */}
        {toc.length > 2 && (
          <nav className="mb-10 rounded-xl border border-gray-200 bg-gray-50/50 p-4">
            <p className="text-xs font-bold text-gray-500 mb-2">目次</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-sm text-sky-600 hover:underline">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* 目的別ランキングへの内部リンク(チェーンページ=ハブ → 8目的ランキング → 各メニュー) */}
        {slug in PROGRAMMATIC_CHAINS && chain && (
          <section id="by-goal" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {chain.name}を目的別に探す
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.entries(GOALS).map(([goalKey, g]) => (
                <Link
                  key={goalKey}
                  href={`/chains/${slug}/${goalKey}`}
                  className="flex items-center justify-center text-center bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl px-3 py-3 text-xs font-bold transition-colors leading-tight"
                >
                  {g.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Full Nutrition Table (ソート/検索/カテゴリ絞り込み可能。SSRで全件HTML化=SEO非劣化) */}
        {items.length > 0 && (
          <section id="nutrition-table" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {hasPfcData ? "全メニュー栄養成分一覧" : "全メニューカロリー一覧"}
            </h2>
            <NutritionTableClient
              items={items}
              isGeneralGuide={isGeneralGuide}
              hasPriceData={hasPriceData}
              hasProteinData={hasProteinData}
              hasFatData={hasFatData}
              hasCarbsData={hasCarbsData}
            />
          </section>
        )}

        {/* Low Calorie Top 5 */}
        {lowCalItems.length > 0 && (
          <section id="low-calorie" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              低カロリーメニューランキングTOP5（ダイエット向け）
            </h2>
            <div className="space-y-3">
              {lowCalItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    {isGeneralGuide && item.chain_restaurants?.name && (
                      <p className="text-xs text-gray-400">
                        {item.chain_restaurants.name}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-orange-500">
                      {item.calories} kcal
                    </p>
                    <p className="text-xs text-gray-400">
                      P{item.protein?.toFixed(1) ?? "-"}g
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* High Protein Top 5 (タンパク質データが実質あるチェーンのみ) */}
        {hasProteinData && highProteinItems.length > 0 && (
          <section id="high-protein" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              高タンパク(タンパク質)ランキングTOP10
            </h2>
            <div className="space-y-3">
              {highProteinItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    {isGeneralGuide && item.chain_restaurants?.name && (
                      <p className="text-xs text-gray-400">
                        {item.chain_restaurants.name}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-blue-600">
                      P {item.protein?.toFixed(1) ?? "-"}g
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.calories ?? "-"} kcal
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Low Fat Top 5 (「○○ 脂質 一覧」系クエリ対応。脂質データが揃うチェーンのみ) */}
        {hasFatData && lowFatItems.length > 0 && (
          <section id="low-fat" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              低脂質メニューランキングTOP5
            </h2>
            <div className="space-y-3">
              {lowFatItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    {isGeneralGuide && item.chain_restaurants?.name && (
                      <p className="text-xs text-gray-400">
                        {item.chain_restaurants.name}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-amber-600">
                      脂質 {item.fat?.toFixed(1) ?? "-"}g
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.calories ?? "-"} kcal
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tips section */}
        {chain && TIPS_MAP[slug] && (
          <section id="tips" className="mb-12 scroll-mt-20">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {chain.name}で上手に栄養管理するコツ
            </h2>
            <div className="prose prose-gray">
              <p className="text-gray-600 leading-relaxed">
                {TIPS_MAP[slug]}
              </p>
            </div>
          </section>
        )}

        {/* 面B(ダイエット手法記事)への送客。離脱寸前の流入を深掘り記事へ＋内部リンクで面B記事を強化 */}
        {guideLinks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {chain ? `${chain.name}を活用してダイエット・筋トレするなら` : "外食ダイエットをもっと極める"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guideLinks.map((a) => (
                <Link
                  key={a.slug}
                  href={`/guide/${a.slug}`}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-sky-300 hover:shadow-sm transition-all"
                >
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 text-base">
                    📖
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-gray-900 leading-snug">{a.title}</span>
                    <span className="block text-xs text-gray-500 mt-0.5 leading-snug">{a.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 換金面: 栄養を見に来た流入の終点に、文脈一致の宅配食オファーを控えめに1ブロック。
            面Aは購買WTPが弱いため、テーブル/送客の下に節度ある配置。serviceTagでチェーンに合わせ出し分け。 */}
        <ServiceOffers
          tag={serviceTagForChain(slug)}
          heading={chain ? `${chain.name}の外食が続く人へ。栄養バランスを整える選択肢` : "外食が続く人へ。栄養バランスを整える選択肢"}
        />

        {/* Internal links to other guides */}
        {otherChains.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              他のチェーン店のガイド
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherChains.map(([key, value]) => (
                <Link
                  key={key}
                  href={`/guide/${key}`}
                  className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
                >
                  {value.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ: FAQPage構造化データを自動生成(DB実値ベース・捏造なし) */}
        {faqItems.length > 0 && (
          <div id="faq" className="scroll-mt-20">
            <FAQSection items={faqItems} slug={slug} />
          </div>
        )}

        {/* CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-4 text-sm">
            栄養管理をもっと簡単に。
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            たべなびで栄養管理を始める（無料）
          </Link>
        </section>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
