import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import {
  RELATED_ARTICLES,
  ARTICLE_CATEGORIES,
  type ArticleCategory,
} from "@/lib/articles";

const CATEGORY_DESCRIPTIONS: Record<ArticleCategory, string> = {
  chain: "マクドナルド、吉野家、サイゼリヤ、コンビニなど、人気外食チェーンごとの低カロリーメニューと太らない食べ方を完全解説。",
  method: "糖質制限、低脂質、食べ順、レコーディングダイエットなど、外食でも実践できるダイエット手法をまとめました。",
  training: "筋トレ中・増量期の外食選び、高タンパクメニュー、コスパランキングなど、ボディメイクのための記事。",
  tool: "PFCバランス計算、基礎代謝計算、外食カロリーDB。栄養管理に役立つ実用ガイド。",
  support: "停滞期、リバウンド、チートデイ、夜食。ダイエットを続ける中で必ず直面する悩みへの解決策。",
  scene: "朝食、ランチ、飲み会など、シーンごとの太らない食べ方をチェーン店メニュー込みで紹介。",
  cuisine: "牛丼、ラーメン、カレー、寿司、ファミレス。ジャンルごとのカロリー比較と賢い選び方。",
  overview: "外食ダイエットの全体像をまずは押さえたい方向けの完全ガイド。",
};

export function generateStaticParams() {
  return (Object.keys(ARTICLE_CATEGORIES) as ArticleCategory[]).map(
    (category) => ({ category })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!(category in ARTICLE_CATEGORIES)) {
    return { title: "カテゴリが見つかりません | たべなび" };
  }
  const cat = category as ArticleCategory;
  const meta = ARTICLE_CATEGORIES[cat];
  const description = CATEGORY_DESCRIPTIONS[cat];
  const articles = RELATED_ARTICLES.filter((a) => a.category === cat);
  const title = `${meta.label}の記事一覧（${articles.length}本）｜外食ダイエットガイド | たべなび`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.tabenavi.jp/guide/category/${category}`,
      type: "website",
    },
    alternates: { canonical: `https://www.tabenavi.jp/guide/category/${category}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!(category in ARTICLE_CATEGORIES)) notFound();
  const cat = category as ArticleCategory;
  const meta = ARTICLE_CATEGORIES[cat];
  const description = CATEGORY_DESCRIPTIONS[cat];
  const articles = RELATED_ARTICLES.filter((a) => a.category === cat);

  // Safe: JSON.stringify of static data, no user input. Standard Next.js JSON-LD pattern.
  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.tabenavi.jp" },
      { "@type": "ListItem", position: 2, name: "外食栄養ガイド", item: "https://www.tabenavi.jp/guide" },
      { "@type": "ListItem", position: 3, name: meta.label, item: `https://www.tabenavi.jp/guide/category/${category}` },
    ],
  });

  const itemListJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: meta.label,
    description,
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.tabenavi.jp/guide/${a.slug}`,
      name: a.title,
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: itemListJsonLd }} />

      <div className="min-h-screen bg-gray-50">
        {/* ─── Breadcrumb ─── */}
        <nav className="max-w-5xl mx-auto px-4 pt-6 pb-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-sky-600">ホーム</Link>
          <span className="mx-1">/</span>
          <Link href="/guide" className="hover:text-sky-600">外食栄養ガイド</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">{meta.label}</span>
        </nav>

        {/* ─── Hero ─── */}
        <header className="max-w-5xl mx-auto px-4 pt-4 pb-10">
          <Link
            href="/guide"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-sky-600 mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            ガイド一覧に戻る
          </Link>
          <div className={`inline-block bg-gradient-to-r ${meta.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
            {meta.label}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {meta.label}の記事一覧
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
          <p className="mt-3 text-xs text-gray-400">{articles.length}本の記事</p>
        </header>

        {/* ─── Article grid ─── */}
        <main className="max-w-5xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/guide/${article.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-sky-500 mb-3" />
                <h2 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-sky-500 font-medium">
                  記事を読む
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* ─── Other categories CTA ─── */}
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">他のカテゴリも見る</h3>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(ARTICLE_CATEGORIES) as ArticleCategory[])
                .filter((c) => c !== cat)
                .map((c) => (
                  <Link
                    key={c}
                    href={`/guide/category/${c}`}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-sky-300 hover:text-sky-600 transition-colors"
                  >
                    {ARTICLE_CATEGORIES[c].label}
                  </Link>
                ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
