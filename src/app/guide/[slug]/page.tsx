import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
};

interface MenuItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
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
    title: `${chain?.name ?? "外食"} カロリー・栄養成分一覧 | たべなび`,
    description:
      chain?.description ?? "外食チェーンの栄養成分一覧",
  };
}

async function fetchItems(slug: string) {
  const supabase = await createClient();

  if (slug === "conveni") {
    const { data } = await supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, category, chain_restaurants(name)")
      .eq("source_type", "convenience_store")
      .order("calories", { ascending: true })
      .returns<MenuItem[]>();
    return data ?? [];
  }

  if (slug === "eating-out-diet") {
    const { data } = await supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, category, chain_restaurants(name)")
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
    .select("id, name, calories, protein, fat, carbs, category, chain_restaurants!inner(name)")
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
    dateModified: "2026-03-01",
    author: {
      "@type": "Organization",
      name: "たべなび",
    },
  };

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
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

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
