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
}

// ─── Food Photos ─────────────────────────────────────────────────────────────

const FOOD_PHOTOS: Record<string, string> = {
  "ハンバーガー":
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
  "牛丼":
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=400&fit=crop",
  "サラダ":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
  "コーヒー":
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
  "うどん":
    "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&h=400&fit=crop",
  "寿司":
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop",
  "定食":
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
  "中華":
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop",
  "ダイエット":
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
  "筋トレ":
    "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&h=400&fit=crop",
  "コンビニ":
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop",
};

// ─── 1. ArticleHero ─────────────────────────────────────────────────────────

export function ArticleHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle: string;
  breadcrumb: string;
}) {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/guide"
            className="hover:text-orange-600 transition-colors"
          >
            ガイド
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">{breadcrumb}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-6">
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            ガイド一覧に戻る
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 2. TableOfContents ──────────────────────────────────────────────────────

export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 sticky top-20">
      <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
        <BookOpen className="w-4.5 h-4.5 text-orange-500" />
        目次
      </h2>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2.5 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
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

// ─── 3. NutritionTable ───────────────────────────────────────────────────────

export function NutritionTable({
  items,
  showChain,
}: {
  items: MenuItem[];
  showChain?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <div className="max-h-[500px] overflow-y-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                メニュー
              </th>
              {showChain && (
                <th className="text-left px-3 py-3 font-semibold">チェーン</th>
              )}
              <th className="text-right px-3 py-3 font-semibold">カロリー</th>
              <th className="text-right px-3 py-3 font-semibold">
                タンパク質
              </th>
              <th className="text-right px-3 py-3 font-semibold">脂質</th>
              <th className="text-right px-3 py-3 font-semibold">炭水化物</th>
              <th className="text-right px-3 py-3 font-semibold rounded-tr-xl">
                価格
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={`${item.name}-${i}`}
                className={`border-t border-gray-100 hover:bg-orange-50/40 transition-colors ${
                  i % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {item.name}
                </td>
                {showChain && (
                  <td className="px-3 py-3 text-gray-500">{item.chain}</td>
                )}
                <td className="px-3 py-3 text-right font-bold text-orange-600">
                  {item.calories}kcal
                </td>
                <td className="px-3 py-3 text-right font-semibold text-blue-600">
                  {item.protein}g
                </td>
                <td className="px-3 py-3 text-right text-amber-600">
                  {item.fat}g
                </td>
                <td className="px-3 py-3 text-right text-green-600">
                  {item.carbs}g
                </td>
                <td className="px-3 py-3 text-right font-bold text-gray-800">
                  {item.price != null ? `¥${item.price.toLocaleString()}` : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── 4. RankingCard ──────────────────────────────────────────────────────────

const RANK_COLORS: Record<number, string> = {
  1: "bg-yellow-400 text-yellow-900",
  2: "bg-gray-300 text-gray-700",
  3: "bg-amber-600 text-amber-50",
};

export function RankingCard({
  rank,
  name,
  chain,
  calories,
  protein,
  fat,
  carbs,
  price,
  description,
  badge,
}: {
  rank: number;
  name: string;
  chain?: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  price?: number;
  description?: string;
  badge?: string;
}) {
  const rankColor = RANK_COLORS[rank] || "bg-gray-200 text-gray-600";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5">
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full ${rankColor} flex items-center justify-center font-bold text-lg`}
        >
          {rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            {badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                {badge}
              </span>
            )}
          </div>
          {chain && (
            <p className="text-sm text-gray-500 mt-0.5">{chain}</p>
          )}

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
              {calories}kcal
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              P {protein}g
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
              F {fat}g
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
              C {carbs}g
            </span>
            {price != null && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                ¥{price.toLocaleString()}
              </span>
            )}
          </div>

          {description && (
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── 5. ComparisonTable ──────────────────────────────────────────────────────

export function ComparisonTable({
  chains,
}: {
  chains: { name: string; items: { label: string; value: string }[] }[];
}) {
  if (chains.length === 0) return null;

  const labels = chains[0].items.map((item) => item.label);

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 bg-gray-100 font-semibold text-gray-700 rounded-tl-xl">
              項目
            </th>
            {chains.map((chain, i) => (
              <th
                key={chain.name}
                className={`text-center px-4 py-3 font-bold text-white ${
                  i === 0
                    ? "bg-orange-500"
                    : i === 1
                      ? "bg-blue-500"
                      : i === 2
                        ? "bg-green-500"
                        : "bg-purple-500"
                }${i === chains.length - 1 ? " rounded-tr-xl" : ""}`}
              >
                {chain.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {labels.map((label, rowIdx) => {
            const values = chains.map(
              (chain) => chain.items[rowIdx]?.value ?? "-"
            );
            const numericValues = values.map((v) =>
              parseFloat(v.replace(/[^0-9.]/g, ""))
            );
            const allNumeric = numericValues.every((n) => !isNaN(n));
            const bestIdx = allNumeric
              ? numericValues.indexOf(Math.min(...numericValues))
              : -1;

            return (
              <tr
                key={label}
                className={`border-t border-gray-100 ${
                  rowIdx % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 font-medium text-gray-700">
                  {label}
                </td>
                {values.map((value, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-4 py-3 text-center ${
                      colIdx === bestIdx
                        ? "font-bold text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── 6. TipBox ───────────────────────────────────────────────────────────────

const TIP_VARIANTS = {
  info: {
    bg: "bg-blue-50",
    border: "border-l-blue-500",
    icon: Lightbulb,
    iconColor: "text-blue-500",
    titleColor: "text-blue-800",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-l-amber-500",
    icon: AlertTriangle,
    iconColor: "text-amber-500",
    titleColor: "text-amber-800",
  },
  success: {
    bg: "bg-green-50",
    border: "border-l-green-500",
    icon: CheckCircle,
    iconColor: "text-green-500",
    titleColor: "text-green-800",
  },
};

export function TipBox({
  title,
  children,
  variant = "info",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success";
}) {
  const v = TIP_VARIANTS[variant];
  const Icon = v.icon;

  return (
    <div
      className={`${v.bg} ${v.border} border-l-4 rounded-r-xl px-5 py-4 my-6`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${v.iconColor}`} />
        <h4 className={`font-bold ${v.titleColor}`}>{title}</h4>
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

// ─── 7. SectionHeading ───────────────────────────────────────────────────────

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
      className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-l-orange-500 bg-orange-50/50 px-4 py-3 rounded-r-lg scroll-mt-24 mt-10 mb-6"
    >
      {children}
    </h2>
  );
}

// ─── 8. PhotoPlaceholder ─────────────────────────────────────────────────────

export function PhotoPlaceholder({
  query,
  alt,
}: {
  query: string;
  alt: string;
}) {
  const [hasError, setHasError] = useState(false);
  const src = FOOD_PHOTOS[query];

  if (!src || hasError) {
    return (
      <div className="w-full h-48 sm:h-64 rounded-xl bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center my-6">
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden my-6 shadow-sm">
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

// ─── 9. CTABanner ────────────────────────────────────────────────────────────

export function CTABanner() {
  return (
    <section className="my-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 sm:px-10 py-10 text-center shadow-lg">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        たべなびで栄養管理を始めよう
      </h3>
      <p className="text-orange-100 text-sm sm:text-base mb-6">
        20チェーン・500メニューの栄養データ、全部無料
      </p>
      <Link
        href="/items"
        className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
        無料で始める
        <ExternalLink className="w-4 h-4" />
      </Link>
    </section>
  );
}

// ─── 10. ArticleFooter ───────────────────────────────────────────────────────

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
