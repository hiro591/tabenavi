"use client";

import Link from "next/link";
import { BookOpen, ChevronRight, ExternalLink } from "lucide-react";

// ─── Sidebar TOC ─────────────────────────────────────────────────────────────

function SidebarTOC({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="mb-6">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5" />
        目次
      </h3>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-[13px] text-gray-500 hover:text-sky-600 transition-colors group leading-snug"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-50 text-sky-500 text-[10px] font-bold flex items-center justify-center mt-0.5 group-hover:bg-sky-400 group-hover:text-white transition-colors">
                {i + 1}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Sidebar Related Articles ────────────────────────────────────────────────

const GUIDE_ARTICLES = [
  { slug: "eating-out-diet", title: "外食ダイエット完全ガイド" },
  { slug: "muscle-eating-out", title: "筋トレ中の外食ガイド" },
  { slug: "mcdonalds-diet", title: "マクドナルドでダイエット" },
  { slug: "gyudon-comparison", title: "牛丼チェーン栄養比較" },
  { slug: "conveni-protein", title: "コンビニ高タンパク商品" },
  { slug: "saizeriya-diet", title: "サイゼリヤでダイエット" },
  { slug: "low-fat-eating-out", title: "低脂質な外食メニュー" },
  { slug: "calorie-database", title: "外食カロリーDB" },
  { slug: "low-carb-eating-out", title: "糖質制限×外食ガイド" },
  { slug: "diet-lunch", title: "ダイエット中のランチガイド" },
  { slug: "family-restaurant-diet", title: "ファミレスダイエット比較" },
  { slug: "drinking-party-diet", title: "飲み会で太らないガイド" },
  { slug: "daily-meal-plan", title: "1日1500kcalプラン" },
  { slug: "protein-cost-ranking", title: "タンパク質コスパランキング" },
];

function SidebarRelated({ currentSlug }: { currentSlug: string }) {
  const related = GUIDE_ARTICLES.filter((a) => a.slug !== currentSlug).slice(
    0,
    5
  );

  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
        関連ガイド
      </h3>
      <ul className="space-y-2">
        {related.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/guide/${article.slug}`}
              className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-sky-600 transition-colors"
            >
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Sidebar CTA ─────────────────────────────────────────────────────────────

function SidebarCTA() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-cyan-50 border border-sky-200 rounded-lg p-4 text-center">
      <p className="text-sm font-bold text-gray-800 mb-1">
        たべなび
      </p>
      <p className="text-xs text-gray-500 mb-3">
        外食の栄養管理を、もっとラクに。
      </p>
      <Link
        href="/items"
        className="inline-flex items-center gap-1 bg-sky-400 hover:bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
      >
        無料で始める
        <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
}

// ─── ArticleLayout ───────────────────────────────────────────────────────────

export function ArticleLayout({
  tocItems,
  currentSlug,
  children,
}: {
  tocItems: { id: string; label: string }[];
  currentSlug: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10 lg:flex lg:gap-10">
      {/* Main content */}
      <article className="flex-1 min-w-0 max-w-[780px] text-base text-gray-800 leading-[1.8]">
        {children}
      </article>

      {/* Sidebar — desktop only */}
      <aside className="hidden lg:block w-[260px] flex-shrink-0">
        <div className="sticky top-24">
          <SidebarTOC items={tocItems} />
          <SidebarRelated currentSlug={currentSlug} />
          <SidebarCTA />
        </div>
      </aside>
    </div>
  );
}
