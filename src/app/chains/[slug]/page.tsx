import { createPublicClient } from "@/lib/supabase/public";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CHAINS, GOALS } from "@/lib/chains";

// ISR: チェーンハブ。各チェーンの目的別ランキングへの幹(ハブ)。
export const revalidate = 86400;

type MenuItem = {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
};

export async function generateStaticParams() {
  return Object.keys(CHAINS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chain = CHAINS[slug];
  if (!chain) return {};
  const url = `https://www.tabenavi.jp/chains/${slug}`;
  const title = `${chain.name}のカロリー・PFC一覧｜目的別ランキング【2026年最新】| たべなび`;
  const description = `${chain.name}の全メニューを公式栄養データで一覧化。高タンパク・低カロリー・ダイエット・低糖質など目的別ランキングからベストな一品を探せます。`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website", url },
  };
}

export default async function ChainHubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chain = CHAINS[slug];
  if (!chain) notFound();

  const supabase = createPublicClient();

  const { data: chainRow } = await supabase
    .from("chain_restaurants")
    .select("id")
    .eq("name", chain.name)
    .single();

  if (!chainRow) notFound();

  const { data: itemsRaw } = await supabase
    .from("menu_items")
    .select("id, name, calories, protein, fat, carbs, price")
    .eq("chain_restaurant_id", chainRow.id);

  const items: MenuItem[] = itemsRaw ?? [];
  if (items.length === 0) notFound();

  // ハイライト指標(チェーンの特徴を一目で)
  // カロリー下限50: 山椒・紅生姜・たれ等の調味料/薬味を除外し、主要メニュー欄に実際の料理が並ぶようにする
  const withCal = items.filter((i) => (i.calories ?? 0) >= 50);
  const withProtein = items.filter((i) => (i.protein ?? 0) > 0);
  const lowestCal = withCal.length
    ? withCal.reduce((a, b) => ((a.calories ?? 0) <= (b.calories ?? 0) ? a : b))
    : null;
  const highestProtein = withProtein.length
    ? withProtein.reduce((a, b) => ((a.protein ?? 0) >= (b.protein ?? 0) ? a : b))
    : null;

  // 主要メニュー(カロリー低い順に最大15件)を /items へ
  const topItems = [...withCal].sort((a, b) => (a.calories ?? 0) - (b.calories ?? 0)).slice(0, 15);

  const otherChains = Object.entries(CHAINS).filter(([k]) => k !== slug);

  const url = `https://www.tabenavi.jp/chains/${slug}`;
  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "たべなび", item: "https://www.tabenavi.jp" },
        { "@type": "ListItem", position: 2, name: "チェーン一覧", item: "https://www.tabenavi.jp/chains" },
        { "@type": "ListItem", position: 3, name: chain.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${chain.name}の目的別ランキング`,
      itemListElement: Object.entries(GOALS).map(([key, g], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${chain.name}の${g.title}`,
        url: `${url}/${key}`,
      })),
    },
  ]);

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{jsonLd}</script>
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-28">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-sky-500">たべなび</Link>
          <span>/</span>
          <Link href="/chains" className="hover:text-sky-500">チェーン一覧</Link>
          <span>/</span>
          <span className="text-gray-600">{chain.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{chain.emoji}</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {chain.name}のカロリー・PFC一覧
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                公式栄養データに基づく｜全{items.length}品
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {chain.name}の全メニューを目的別ランキングで比較できます。ダイエット・筋トレ・糖質制限など、目的に合った一品を探しましょう。
          </p>
        </div>

        {/* ハイライト */}
        {(lowestCal || highestProtein) && (
          <div className="grid grid-cols-2 gap-3 mb-8">
            {lowestCal && (
              <Link href={`/items/${lowestCal.id}`} className="bg-orange-50 border border-orange-100 rounded-xl p-4 hover:bg-orange-100 transition-colors">
                <p className="text-[11px] text-orange-500 font-bold mb-1">最も低カロリー</p>
                <p className="text-sm font-bold text-gray-900 truncate">{lowestCal.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{lowestCal.calories}kcal</p>
              </Link>
            )}
            {highestProtein && (
              <Link href={`/items/${highestProtein.id}`} className="bg-blue-50 border border-blue-100 rounded-xl p-4 hover:bg-blue-100 transition-colors">
                <p className="text-[11px] text-blue-500 font-bold mb-1">最も高タンパク</p>
                <p className="text-sm font-bold text-gray-900 truncate">{highestProtein.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">P{highestProtein.protein}g</p>
              </Link>
            )}
          </div>
        )}

        {/* 目的別ランキング(8ゴール) */}
        <h2 className="text-base font-bold text-gray-900 mb-3">{chain.name}の目的別ランキング</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {Object.entries(GOALS).map(([key, g]) => (
            <Link
              key={key}
              href={`/chains/${slug}/${key}`}
              className="block bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-sky-200 hover:shadow-md transition-all"
            >
              <p className="text-sm font-bold text-gray-900 mb-1">{g.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{g.description}</p>
            </Link>
          ))}
        </div>

        {/* 主要メニュー(items へ) */}
        <h2 className="text-base font-bold text-gray-900 mb-3">主要メニュー(低カロリー順)</h2>
        <div className="space-y-2 mb-10">
          {topItems.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:bg-sky-50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  {item.calories != null && (
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">{item.calories}kcal</span>
                  )}
                  {item.protein != null && (
                    <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">P{item.protein}g</span>
                  )}
                  {item.fat != null && (
                    <span className="text-xs text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">F{item.fat}g</span>
                  )}
                  {item.carbs != null && (
                    <span className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">C{item.carbs}g</span>
                  )}
                  {item.price != null && (
                    <span className="text-xs text-gray-500 ml-auto">¥{item.price}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-sm font-bold text-gray-900 mb-1">全チェーン横断で栄養検索</p>
          <p className="text-xs text-gray-500 mb-3">32チェーン・6,000品以上をPFC・カロリー・価格で絞り込み</p>
          <Link href="/search" className="inline-block px-6 py-2.5 bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-sky-200">
            メニューを無料で検索
          </Link>
        </div>

        {/* 他チェーンのハブへ */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-800 mb-3">他のチェーンを見る</h2>
          <div className="flex flex-wrap gap-2">
            {otherChains.map(([key, c]) => (
              <Link key={key} href={`/chains/${key}`}
                className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">
                {c.emoji} {c.name}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-gray-400 text-center">
          ※ 栄養データは各チェーン公式サイトに基づきます。メニュー改定により変動する場合があります。
        </p>
      </div>
    </>
  );
}
