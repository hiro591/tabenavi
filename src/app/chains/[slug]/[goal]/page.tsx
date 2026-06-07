import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CHAINS, GOALS } from "@/lib/chains";

// ISR: programmatic SEO pages cached 24h. Each (chain × goal) combo regenerates daily at most.
export const revalidate = 86400;

type MenuItem = {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  category: string | null;
};

function applyFilter(items: MenuItem[], filterFn: string): MenuItem[] {
  switch (filterFn) {
    case "protein_gte_10":
      return items.filter((i) => (i.protein ?? 0) >= 10);
    case "calories_lte_800":
      return items.filter((i) => (i.calories ?? 0) > 0 && (i.calories ?? 0) <= 800);
    case "diet_friendly":
      return items.filter((i) => (i.calories ?? 0) <= 600 && (i.protein ?? 0) >= 15);
    case "has_price_protein":
      return items.filter((i) => (i.price ?? 0) > 0 && (i.protein ?? 0) > 0);
    case "calories_lte_500":
      return items.filter((i) => (i.calories ?? 0) > 0 && (i.calories ?? 0) <= 500);
    case "price_lte_500":
      return items.filter((i) => (i.price ?? 0) > 0 && (i.price ?? 0) <= 500);
    default:
      return items;
  }
}

function applySort(items: MenuItem[], sortFn: string): MenuItem[] {
  const sorted = [...items];
  switch (sortFn) {
    case "protein_desc":
      return sorted.sort((a, b) => (b.protein ?? 0) - (a.protein ?? 0));
    case "calories_asc":
      return sorted.sort((a, b) => (a.calories ?? 0) - (b.calories ?? 0));
    case "fat_asc":
      return sorted.sort((a, b) => (a.fat ?? 0) - (b.fat ?? 0));
    case "carbs_asc":
      return sorted.sort((a, b) => (a.carbs ?? 0) - (b.carbs ?? 0));
    case "price_asc":
      return sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    case "diet_score":
      return sorted.sort((a, b) => {
        const sa = (a.protein ?? 0) / Math.max(a.calories ?? 1, 1);
        const sb = (b.protein ?? 0) / Math.max(b.calories ?? 1, 1);
        return sb - sa;
      });
    case "protein_per_yen":
      return sorted.sort((a, b) => {
        const pa = (a.protein ?? 0) / (a.price ?? 1);
        const pb = (b.protein ?? 0) / (b.price ?? 1);
        return pb - pa;
      });
    default:
      return sorted;
  }
}

// ─── Static params ───

export async function generateStaticParams() {
  const params = [];
  for (const slug of Object.keys(CHAINS)) {
    for (const goal of Object.keys(GOALS)) {
      params.push({ slug, goal });
    }
  }
  return params;
}

// ─── Metadata ───

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; goal: string }>;
}): Promise<Metadata> {
  const { slug, goal } = await params;
  const chain = CHAINS[slug];
  const goalInfo = GOALS[goal];
  if (!chain || !goalInfo) return {};

  const title = `${chain.name}の${goalInfo.title}ランキング【2026年最新】| たべなび`;
  const description = `${chain.name}の${goalInfo.description}公式栄養データに基づくPFC・カロリー・価格を一覧比較。`;
  const url = `https://www.tabenavi.jp/chains/${slug}/${goal}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "article", url },
  };
}

// ─── Page ───

export default async function ChainGoalPage({
  params,
}: {
  params: Promise<{ slug: string; goal: string }>;
}) {
  const { slug, goal } = await params;
  const chain = CHAINS[slug];
  const goalInfo = GOALS[goal];

  if (!chain || !goalInfo) notFound();

  const supabase = await createClient();

  const { data: chainRow } = await supabase
    .from("chain_restaurants")
    .select("id")
    .eq("name", chain.name)
    .single();

  if (!chainRow) notFound();

  const { data: items } = await supabase
    .from("menu_items")
    .select("id, name, calories, protein, fat, carbs, price, category")
    .eq("chain_restaurant_id", chainRow.id);

  if (!items || items.length === 0) notFound();

  const filtered = applySort(applyFilter(items, goalInfo.filterFn), goalInfo.sortFn).slice(0, 20);

  const otherGoals = Object.entries(GOALS).filter(([k]) => k !== goal); // 全目的へ内部リンク(ハブ強化)
  const otherChains = Object.entries(CHAINS).filter(([k]) => k !== slug).slice(0, 8);

  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${chain.name}の${goalInfo.title}ランキング`,
      description: `${chain.name}の${goalInfo.description}`,
      author: { "@type": "Organization", name: "たべなび" },
      publisher: { "@type": "Organization", name: "たべなび", url: "https://www.tabenavi.jp" },
      datePublished: "2026-04-13",
      dateModified: "2026-04-13",
      mainEntityOfPage: `https://www.tabenavi.jp/chains/${slug}/${goal}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "たべなび", item: "https://www.tabenavi.jp" },
        { "@type": "ListItem", position: 2, name: "チェーン一覧", item: "https://www.tabenavi.jp/chains" },
        { "@type": "ListItem", position: 3, name: chain.name, item: `https://www.tabenavi.jp/chains/${slug}` },
        { "@type": "ListItem", position: 4, name: goalInfo.title, item: `https://www.tabenavi.jp/chains/${slug}/${goal}` },
      ],
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
          <Link href={`/chains/${slug}`} className="hover:text-sky-500">{chain.name}</Link>
          <span>/</span>
          <span className="text-gray-600">{goalInfo.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{chain.emoji}</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {chain.name}の{goalInfo.title}ランキング
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                公式栄養データに基づく｜{filtered.length}メニュー
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{goalInfo.description}</p>
        </div>

        {/* Ranking */}
        {filtered.length > 0 ? (
          <div className="space-y-2 mb-10">
            {filtered.map((item, i) => (
              <Link
                key={item.id}
                href={`/items/${item.id}`}
                className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:bg-sky-50 transition-colors"
              >
                <span className={`text-lg font-bold w-8 text-center tabular-nums ${i < 3 ? "text-sky-500" : "text-gray-300"}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {item.calories != null && (
                      <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">
                        {item.calories}kcal
                      </span>
                    )}
                    {item.protein != null && (
                      <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">
                        P{item.protein}g
                      </span>
                    )}
                    {item.fat != null && (
                      <span className="text-xs text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">
                        F{item.fat}g
                      </span>
                    )}
                    {item.carbs != null && (
                      <span className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                        C{item.carbs}g
                      </span>
                    )}
                    {item.price != null && (
                      <span className="text-xs text-gray-500 ml-auto">¥{item.price}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-sm text-gray-400">条件に合うメニューが見つかりませんでした</p>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-sm font-bold text-gray-900 mb-1">全チェーン横断で栄養検索できます</p>
          <p className="text-xs text-gray-500 mb-3">32チェーン・6,000品以上をPFC・カロリー・価格で検索</p>
          <Link
            href={`/chains/${slug}`}
            className="inline-block px-5 py-2.5 bg-white border border-sky-200 text-sky-600 text-sm font-bold rounded-xl mr-2 mb-2"
          >
            {chain.name}の他のランキング
          </Link>
          <Link
            href="/search"
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-sky-200 mb-2"
          >
            メニューを無料で検索
          </Link>
        </div>

        {/* Internal links: other goals */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-800 mb-3">{chain.name}の他のランキング</h2>
          <div className="flex flex-wrap gap-2">
            {otherGoals.map(([key, g]) => (
              <Link key={key} href={`/chains/${slug}/${key}`}
                className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">
                {g.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Internal links: other chains */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-800 mb-3">他のチェーンの{goalInfo.title}</h2>
          <div className="flex flex-wrap gap-2">
            {otherChains.map(([key, c]) => (
              <Link key={key} href={`/chains/${key}/${goal}`}
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
