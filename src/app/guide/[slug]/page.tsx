import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { GOALS, CHAINS as PROGRAMMATIC_CHAINS } from "@/lib/chains";

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

// ISR: cache chain nutrition pages for 12 hours (CPU optimization).
export const revalidate = 43200;

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
  return {
    title: slug === "eating-out-diet"
      ? "【2026年最新】外食ダイエット完全ガイド｜チェーン店別おすすめメニュー | たべなび"
      : `【2026年最新】${chain?.name ?? "外食"} カロリー・栄養成分一覧｜全メニューPFC表 | たべなび`,
    description:
      chain?.description ?? "外食チェーンの栄養成分一覧",
    alternates: { canonical: `https://www.tabenavi.jp/guide/${slug}` },
  };
}

async function fetchItems(slug: string) {
  const supabase = await createClient();

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
}

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

  const highProteinItems = [...items]
    .filter((i) => i.protein != null)
    .sort((a, b) => (b.protein ?? 0) - (a.protein ?? 0))
    .slice(0, 5);

  const title = isGeneralGuide
    ? "外食ダイエット完全ガイド"
    : `${chain!.name} カロリー・栄養成分一覧`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: chain?.description ?? "外食チェーンの栄養成分一覧",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "たべなび",
      url: "https://www.tabenavi.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "たべなび",
    },
    mainEntityOfPage: `https://tabenavi.jp/guide/${slug}`,
  };

  const otherChains = Object.entries(CHAIN_MAP).filter(
    ([key]) => key !== slug && key !== "conveni"
  );

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            {chain.name}の全メニューのカロリー、タンパク質（P）、脂質（F）、炭水化物（C）の栄養成分を一覧でまとめています。
            ダイエットや筋トレ中の食事選びにお役立てください。
            ※価格・栄養成分は店舗により異なる場合があります。
          </p>
        )}

        {/* 目的別ランキングへの内部リンク(チェーンページ=ハブ → 8目的ランキング → 各メニュー) */}
        {slug in PROGRAMMATIC_CHAINS && chain && (
          <section className="mb-12">
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

        {/* Full Nutrition Table */}
        {items.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              全メニュー栄養成分一覧
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="text-left px-4 py-3 font-medium">メニュー</th>
                    {isGeneralGuide && (
                      <th className="text-left px-4 py-3 font-medium">チェーン</th>
                    )}
                    <th className="text-right px-4 py-3 font-medium">価格</th>
                    <th className="text-right px-4 py-3 font-medium">カロリー</th>
                    <th className="text-right px-4 py-3 font-medium">タンパク質</th>
                    <th className="text-right px-4 py-3 font-medium">脂質</th>
                    <th className="text-right px-4 py-3 font-medium">炭水化物</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr
                      key={item.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-4 py-2.5 text-gray-900 font-medium max-w-[200px] truncate">
                        <Link
                          href={`/items/${item.id}`}
                          className="hover:text-orange-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </td>
                      {isGeneralGuide && (
                        <td className="px-4 py-2.5 text-gray-500 text-xs">
                          {item.chain_restaurants?.name ?? "-"}
                        </td>
                      )}
                      <td className="text-right px-4 py-2.5 text-gray-700">
                        {item.price != null ? `¥${item.price}` : "-"}
                      </td>
                      <td className="text-right px-4 py-2.5 text-gray-700">
                        {item.calories != null ? `${item.calories} kcal` : "-"}
                      </td>
                      <td className="text-right px-4 py-2.5 text-gray-700">
                        {item.protein != null ? `${item.protein.toFixed(1)} g` : "-"}
                      </td>
                      <td className="text-right px-4 py-2.5 text-gray-700">
                        {item.fat != null ? `${item.fat.toFixed(1)} g` : "-"}
                      </td>
                      <td className="text-right px-4 py-2.5 text-gray-700">
                        {item.carbs != null ? `${item.carbs.toFixed(1)} g` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Low Calorie Top 5 */}
        {lowCalItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              ダイエット中のおすすめメニューTOP5
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

        {/* High Protein Top 5 */}
        {highProteinItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              高タンパクメニューTOP5
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

        {/* Tips section */}
        {chain && TIPS_MAP[slug] && (
          <section className="mb-12">
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
