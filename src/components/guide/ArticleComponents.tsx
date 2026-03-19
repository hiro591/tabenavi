"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  BookOpen,
  ExternalLink,
  Database,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string;
  chain?: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  price?: number;
  recommended?: boolean;
}

// ─── 1. AuthorityBadge ───────────────────────────────────────────────────────

export function AuthorityBadge() {
  return (
    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium w-fit">
      <Database className="w-3.5 h-3.5" />
      たべなびの栄養データベースに基づく情報です
    </div>
  );
}

// ─── 2. ArticleHero ──────────────────────────────────────────────────────────

export function ArticleHero({
  title,
  subtitle,
  imageUrl,
  breadcrumb,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      <div className="relative z-10 h-full max-w-[780px] mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
        <nav className="flex items-center gap-1 text-sm text-white/70 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/guide" className="hover:text-white transition-colors">
            ガイド
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{breadcrumb}</span>
        </nav>
        <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-white/80 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// ─── 3. TableOfContents ──────────────────────────────────────────────────────

export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
      <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-orange-500" />
        この記事の内容
      </h2>
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {i + 1}
              </span>
              <span className="leading-snug">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── 4. SectionHeading (H2) ──────────────────────────────────────────────────

export function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="bg-orange-500 text-white font-bold text-lg sm:text-xl px-5 py-3 rounded-lg scroll-mt-24 mb-6"
    >
      {children}
    </h2>
  );
}

// ─── 5. SubSectionHeading (H3) ───────────────────────────────────────────────

export function SubSectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="border-l-[3px] border-orange-400 pl-4 text-lg font-bold text-gray-900 mb-4">
      {children}
    </h3>
  );
}

// ─── 6. NutritionCard ────────────────────────────────────────────────────────

export function NutritionCard({
  name,
  chain,
  calories,
  protein,
  fat,
  carbs,
  price,
  recommended,
}: MenuItem) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-gray-900 text-sm sm:text-base">{name}</p>
          {chain && (
            <p className="text-xs text-gray-500 mt-0.5">{chain}</p>
          )}
        </div>
        {recommended && (
          <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
            おすすめ ★
          </span>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="bg-orange-50 rounded-lg py-2 px-3 text-center">
          <p className="text-orange-600 font-bold text-sm">{calories}</p>
          <p className="text-orange-600 text-[10px]">kcal</p>
        </div>
        <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
          <p className="text-blue-600 font-bold text-sm">{protein.toFixed(1)}g</p>
          <p className="text-blue-600 text-[10px]">タンパク</p>
        </div>
        <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
          <p className="text-amber-600 font-bold text-sm">{fat.toFixed(1)}g</p>
          <p className="text-amber-600 text-[10px]">脂質</p>
        </div>
        <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
          <p className="text-green-600 font-bold text-sm">{carbs.toFixed(1)}g</p>
          <p className="text-green-600 text-[10px]">炭水化物</p>
        </div>
      </div>
      {price != null && (
        <p className="text-sm font-bold text-gray-700">¥{price.toLocaleString()}</p>
      )}
    </div>
  );
}

// ─── 7. TipBox ───────────────────────────────────────────────────────────────

export function TipBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="w-5 h-5 text-orange-500" />
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

// ─── 8. WarningBox ───────────────────────────────────────────────────────────

export function WarningBox({
  title = "注意",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-red-300 bg-red-50 rounded-xl p-5 my-6">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-5 h-5 text-red-500" />
        <h4 className="font-bold text-red-700">{title}</h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

// ─── 9. ArticleImage ─────────────────────────────────────────────────────────

export function ArticleImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-48 sm:h-64 rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center my-8">
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden my-8 shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-48 sm:h-64 object-cover"
      />
    </div>
  );
}

// ─── 10. CTABanner ───────────────────────────────────────────────────────────

export function CTABanner({
  title = "たべなびで栄養管理を始めよう",
  subtitle = "20チェーン・500メニューの栄養データ、全部無料",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="my-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-center shadow-lg shadow-orange-200/50">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-orange-100 text-sm sm:text-base mb-6">{subtitle}</p>
      <Link
        href="/items"
        className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-3 rounded-full text-base shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
      >
        無料で始める
        <ExternalLink className="w-4 h-4" />
      </Link>
    </section>
  );
}

// ─── 11. ComparisonTable ─────────────────────────────────────────────────────

export function ComparisonTable({
  headers,
  rows,
  bestRowIndex,
}: {
  headers: string[];
  rows: (string | number)[][];
  bestRowIndex?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 my-6 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-orange-500 text-white">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-bold text-sm">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-gray-100 ${
                i % 2 === 1 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${
                    i === bestRowIndex
                      ? "text-green-600 font-bold"
                      : j === 0
                        ? "text-gray-900 font-medium"
                        : "text-gray-700"
                  }`}
                >
                  {i === bestRowIndex && j === 0 ? `★ ${cell}` : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── 12. NumberedList ─────────────────────────────────────────────────────────

export function NumberedList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <div>
            <p className="font-bold text-gray-900 text-base">{item.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 13. ArticleFooter ───────────────────────────────────────────────────────

const RELATED_ARTICLES = [
  {
    slug: "mcdonalds-diet",
    title: "マクドナルドでダイエット",
    description: "マクドナルドの低カロリーメニューを徹底解説。",
  },
  {
    slug: "gyudon-comparison",
    title: "牛丼チェーン栄養比較",
    description: "吉野家・松屋・すき家の栄養成分を比較。",
  },
  {
    slug: "conveni-protein",
    title: "コンビニ高タンパク商品",
    description: "コンビニで買える高タンパク商品ランキング。",
  },
  {
    slug: "eating-out-diet",
    title: "外食ダイエット完全ガイド",
    description: "外食でもダイエットを成功させるコツを紹介。",
  },
  {
    slug: "muscle-eating-out",
    title: "筋トレ中の外食ガイド",
    description: "筋トレ中に最適な外食メニューを紹介。",
  },
  {
    slug: "saizeriya-diet",
    title: "サイゼリヤでダイエット",
    description: "サイゼリヤの低カロリーメニューを解説。",
  },
  {
    slug: "low-fat-eating-out",
    title: "低脂質な外食メニュー",
    description: "脂質を抑えたい人向けの外食ガイド。",
  },
  {
    slug: "calorie-database",
    title: "外食カロリーデータベース",
    description: "主要チェーンのカロリー情報まとめ。",
  },
];

export function ArticleFooter({ currentSlug }: { currentSlug: string }) {
  const related = RELATED_ARTICLES.filter(
    (a) => a.slug !== currentSlug
  ).slice(0, 3);

  return (
    <section className="mt-12 pt-10 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">関連記事</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/guide/${article.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
              {article.title}
            </h4>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {article.description}
            </p>
            <span className="text-sm text-orange-600 font-medium inline-flex items-center gap-1">
              読む
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
