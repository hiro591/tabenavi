import Link from "next/link";
import type { Metadata } from "next";
import { CHAINS } from "@/lib/chains";

export const revalidate = 86400;

const url = "https://www.tabenavi.jp/chains";

export const metadata: Metadata = {
  title: "チェーン店別 カロリー・PFC一覧｜目的別ランキング | たべなび",
  description:
    "マクドナルド・吉野家・サイゼリヤなど32チェーンのメニューを公式栄養データで一覧化。高タンパク・低カロリー・ダイエット・低糖質など目的別ランキングからベストな外食を探せます。",
  alternates: { canonical: url },
  openGraph: {
    title: "チェーン店別 カロリー・PFC一覧｜目的別ランキング",
    description: "32チェーンのメニューを公式栄養データで目的別に比較。",
    type: "website",
    url,
  },
};

export default function ChainsIndexPage() {
  const chains = Object.entries(CHAINS);

  const jsonLd = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "たべなび", item: "https://www.tabenavi.jp" },
        { "@type": "ListItem", position: 2, name: "チェーン一覧", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "チェーン店別 栄養データ一覧",
      itemListElement: chains.map(([slug, c], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `${url}/${slug}`,
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
          <span className="text-gray-600">チェーン一覧</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 leading-tight mb-2">
            チェーン店別 カロリー・PFC一覧
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            32チェーン・6,000品以上の公式栄養データ。チェーンを選んで、目的別ランキング(高タンパク・低カロリー・ダイエット・低糖質など)からベストな一品を探せます。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {chains.map(([slug, c]) => (
            <Link
              key={slug}
              href={`/chains/${slug}`}
              className="flex items-center gap-2.5 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:shadow-md hover:border-sky-200 transition-all"
            >
              <span className="text-2xl flex-shrink-0">{c.emoji}</span>
              <span className="text-sm font-semibold text-gray-900 truncate">{c.name}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-2xl p-5 text-center">
          <p className="text-sm font-bold text-gray-900 mb-1">条件で横断検索もできます</p>
          <p className="text-xs text-gray-500 mb-3">カロリー・タンパク質・脂質・価格で全チェーンから絞り込み</p>
          <Link href="/search" className="inline-block px-6 py-2.5 bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-sky-200">
            メニューを無料で検索
          </Link>
        </div>
      </div>
    </>
  );
}
