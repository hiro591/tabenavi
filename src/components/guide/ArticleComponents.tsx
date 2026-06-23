"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  BookOpen,
  Search,
  Database,
} from "lucide-react";
import { pickRelated } from "@/lib/articles";
import { MENU_PHOTOS, MENU_STOCK, GENRE_STOCK } from "@/lib/guide/photos";

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
    <div className="flex items-center gap-2 bg-sky-50 text-sky-700 rounded-full px-3 py-1 text-xs font-medium w-fit">
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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="relative max-w-[780px] mx-auto my-10 border-[3px] border-double border-sky-300 rounded-lg overflow-hidden bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(125,211,252,0.04)_8px,rgba(125,211,252,0.04)_16px)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-sky-50/60 hover:bg-sky-50 transition-colors"
      >
        <span className="flex items-center gap-2 text-base font-bold text-gray-800">
          <BookOpen className="w-5 h-5 text-sky-400" />
          この記事の内容
        </span>
        <span className="text-sm text-sky-500 font-medium">
          {isOpen ? "閉じる" : "開く"}
        </span>
      </button>
      {isOpen && (
        <ol className="px-6 pb-5 pt-2 space-y-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-start gap-3 text-sm text-gray-600 hover:text-sky-600 transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-sky-400 group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <span className="leading-snug">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}

// ─── 4. SectionHeading (H2) ──────────────────────────────────────────────────

export function SectionHeading({
  children,
  id,
  index,
}: {
  children: React.ReactNode;
  id: string;
  index?: number;
}) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-bold text-lg sm:text-xl pl-4 pr-5 py-3.5 rounded-r-lg scroll-mt-24 mt-2 mb-8 shadow-sm border-l-[5px] border-sky-700"
    >
      {index != null && (
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/25 text-white text-sm flex items-center justify-center font-extrabold tabular-nums">
          {index}
        </span>
      )}
      <span className="leading-snug">{children}</span>
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
    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-5 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[repeating-linear-gradient(90deg,_var(--color-sky-300)_0px,_var(--color-sky-300)_6px,_transparent_6px,_transparent_12px)]">
      {children}
    </h3>
  );
}

// ─── 5b. SubSubSectionHeading (H4) ──────────────────────────────────────────

export function SubSubSectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4 className="border-l-[3px] border-sky-300 pl-4 text-base font-bold text-gray-900 mb-3">
      {children}
    </h4>
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
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0">
          <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">{name}</p>
          {chain && <p className="text-xs text-gray-500 mt-0.5">{chain}</p>}
        </div>
        <div className="flex flex-col items-end flex-shrink-0">
          {recommended && (
            <span className="bg-sky-400 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold mb-1">
              おすすめ
            </span>
          )}
          <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">
            {calories}
            <span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span>
          </span>
        </div>
      </div>
      <PFCBar protein={protein} fat={fat} carbs={carbs} />
      {price != null && (
        <p className="text-sm font-bold text-gray-700 mt-2">¥{price.toLocaleString()}</p>
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
    <div className="my-8 rounded-lg overflow-hidden border border-sky-200 bg-white">
      <div className="bg-sky-400 px-5 py-2.5 flex items-center gap-2">
        <Lightbulb className="w-4 h-4 text-white" />
        <h4 className="font-bold text-white text-sm">{title}</h4>
      </div>
      <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed bg-sky-50/40">
        {children}
      </div>
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
    <div className="my-8 rounded-lg overflow-hidden border border-red-200 bg-white">
      <div className="bg-red-500 px-5 py-2.5 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-white" />
        <h4 className="font-bold text-white text-sm">{title}</h4>
      </div>
      <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed bg-red-50/40">
        {children}
      </div>
    </div>
  );
}

// ─── 8b. Marker (蛍光ペン風ハイライト) ───────────────────────────────────────

export function Marker({
  children,
  color = "sky",
}: {
  children: React.ReactNode;
  color?: "sky" | "blue" | "green";
}) {
  const colorMap = {
    sky: "rgba(125,211,252,0.35)",
    blue: "rgba(96,165,250,0.35)",
    green: "rgba(74,222,128,0.35)",
  };
  return (
    <span
      className="font-bold"
      style={{
        background: `linear-gradient(transparent 64%, ${colorMap[color]} 64%)`,
      }}
    >
      {children}
    </span>
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
      <div className="w-full h-48 sm:h-64 rounded bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center my-8">
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <div className="w-full rounded overflow-hidden my-8 shadow-sm border border-gray-100">
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
  title = "そのメニュー、何kcal？ たべなびで今すぐ検索",
  subtitle = "32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料で今すぐ使えます。",
  href = "/search",
  buttonText = "メニューを無料で検索する",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonText?: string;
}) {
  return (
    <section className="my-12 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 p-8 text-center shadow-lg shadow-sky-200/50">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sky-50 text-sm sm:text-base mb-6 leading-relaxed">{subtitle}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
      >
        <Search className="w-4 h-4" />
        {buttonText}
      </Link>
      <p className="text-sky-50/90 text-xs mt-3">
        食べたものを記録して管理するなら{" "}
        <Link href="/signup" className="underline font-medium hover:text-white">
          無料会員登録
        </Link>
      </p>
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
    <figure className="my-6">
      {/* デスクトップ: 表 */}
      <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sky-400 text-white">
              {headers.map((h) => (
                <th key={h} className="text-left px-4 py-3 font-bold text-sm">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${
                      i === bestRowIndex ? "text-green-600 font-bold" : j === 0 ? "text-gray-900 font-medium" : "text-gray-700"
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
      {/* モバイル: 行ごとカード(横スクロール回避) */}
      <div className="sm:hidden space-y-2.5">
        {rows.map((row, i) => (
          <div key={i} className={`rounded-xl border p-3.5 ${i === bestRowIndex ? "border-green-300 bg-green-50/40" : "border-gray-200 bg-white"}`}>
            <p className="font-bold text-gray-900 text-sm mb-2">
              {i === bestRowIndex && <span className="text-green-600">★ </span>}
              {row[0]}
            </p>
            <dl className="grid grid-cols-1 gap-y-1 text-[13px]">
              {row.slice(1).map((cell, j) => (
                <div key={j} className="flex justify-between gap-2 border-b border-gray-50 pb-1 last:border-0">
                  <dt className="text-gray-400">{headers[j + 1]}</dt>
                  <dd className={`font-medium ${i === bestRowIndex ? "text-green-600" : "text-gray-700"}`}>{cell}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </figure>
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
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-400 text-white text-sm font-bold flex items-center justify-center mt-0.5">
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

// ─── 12b. CheckList ──────────────────────────────────────────────────────────

export function CheckList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── 13. RankingCard ─────────────────────────────────────────────────────────

export function RankingCard({
  rank,
  title,
  subtitle,
  calories,
  protein,
  fat,
  carbs,
  children,
}: {
  rank: number;
  title: string;
  subtitle: string;
  calories?: number;
  protein?: number;
  fat?: number;
  carbs?: number;
  children: React.ReactNode;
}) {
  const rankColors: Record<number, { bg: string; circle: string; ring: string }> = {
    1: { bg: "from-yellow-50 to-amber-50", circle: "bg-gradient-to-br from-yellow-400 to-amber-500", ring: "ring-yellow-200" },
    2: { bg: "from-gray-50 to-slate-50", circle: "bg-gradient-to-br from-gray-300 to-slate-400", ring: "ring-gray-200" },
    3: { bg: "from-orange-50 to-amber-50", circle: "bg-gradient-to-br from-orange-300 to-amber-400", ring: "ring-orange-200" },
  };
  const colors = rankColors[rank] || { bg: "from-gray-50 to-gray-50", circle: "bg-gray-300", ring: "ring-gray-100" };
  const hasPfc = protein != null && fat != null && carbs != null;

  return (
    <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className={`bg-gradient-to-r ${colors.bg} px-5 py-4 flex items-center gap-3 border-b border-gray-100`}>
        <span className={`flex-shrink-0 w-10 h-10 rounded-full ${colors.circle} flex items-center justify-center text-white font-bold text-lg shadow-sm ring-2 ${colors.ring}`}>
          {rank}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        {calories != null && (
          <span className="flex-shrink-0 text-2xl font-extrabold text-gray-900 tabular-nums leading-none">
            {calories}
            <span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span>
          </span>
        )}
      </div>
      <div className="p-5">
        {hasPfc && (
          <div className="mb-4">
            <PFCBar protein={protein} fat={fat} carbs={carbs} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// ─── 14. NutritionTable ──────────────────────────────────────────────────────

export function NutritionTable({
  items,
  highlightProtein,
  caption,
}: {
  items: {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    highlight?: boolean;
  }[];
  highlightProtein?: boolean;
  caption?: string;
}) {
  const [sortKey, setSortKey] = useState<"calories" | "protein" | "fat" | "carbs" | null>(null);
  const [asc, setAsc] = useState(true);
  const view = sortKey
    ? [...items].sort((a, b) => (asc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]))
    : items;
  const head = (key: "calories" | "protein" | "fat" | "carbs", label: string) => (
    <th
      onClick={() => {
        setAsc(sortKey === key ? !asc : true);
        setSortKey(key);
      }}
      className="text-right px-4 py-2.5 font-bold cursor-pointer select-none hover:bg-sky-500 transition-colors"
    >
      {label}
      <span className="ml-0.5 opacity-70 text-[10px]">{sortKey === key ? (asc ? "▲" : "▼") : "⇅"}</span>
    </th>
  );
  return (
    <figure className="my-6">
      {/* デスクトップ: ソート可能な表 */}
      <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-sky-400 text-white">
              <th className="text-left px-4 py-2.5 font-bold">メニュー</th>
              {head("calories", "カロリー")}
              {head("protein", "P")}
              {head("fat", "F")}
              {head("carbs", "C")}
            </tr>
          </thead>
          <tbody>
            {view.map((item, i) => (
              <tr key={item.name} className={item.highlight ? "bg-sky-50/60" : i % 2 ? "bg-gray-50/50" : "bg-white"}>
                <td className="px-4 py-2.5 text-gray-900 font-medium">
                  {item.name}
                  {item.highlight && (
                    <span className="ml-2 text-[11px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full font-bold">おすすめ</span>
                  )}
                </td>
                <td className="text-right px-4 py-2.5 font-bold text-gray-900 tabular-nums">
                  {item.calories}
                  <span className="text-[11px] text-gray-400 ml-0.5">kcal</span>
                </td>
                <td className={`text-right px-4 py-2.5 font-bold tabular-nums ${highlightProtein ? "text-blue-600" : "text-blue-500"}`}>
                  {item.protein.toFixed(1)}
                  <span className="text-[11px] font-normal text-gray-400">g</span>
                </td>
                <td className="text-right px-4 py-2.5 text-amber-600 tabular-nums">
                  {item.fat.toFixed(1)}
                  <span className="text-[11px] text-gray-400">g</span>
                </td>
                <td className="text-right px-4 py-2.5 text-green-600 tabular-nums">
                  {item.carbs.toFixed(1)}
                  <span className="text-[11px] text-gray-400">g</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* モバイル: カード積み上げ(横スクロール撲滅・kcal特大) */}
      <div className="sm:hidden space-y-2.5">
        {view.map((item) => (
          <div key={item.name} className={`rounded-xl border p-3.5 ${item.highlight ? "border-sky-300 bg-sky-50/50" : "border-gray-200 bg-white"}`}>
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="font-bold text-gray-900 text-sm leading-snug">
                {item.name}
                {item.highlight && (
                  <span className="ml-1.5 text-[10px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full font-bold align-middle">おすすめ</span>
                )}
              </p>
              <span className="text-lg font-extrabold text-gray-900 tabular-nums flex-shrink-0">
                {item.calories}
                <span className="text-[11px] text-gray-400 ml-0.5">kcal</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
              <div className="bg-blue-50 rounded py-1">
                <b className="text-blue-600 text-sm">{item.protein.toFixed(1)}g</b>
                <br />P
              </div>
              <div className="bg-amber-50 rounded py-1">
                <b className="text-amber-600 text-sm">{item.fat.toFixed(1)}g</b>
                <br />F
              </div>
              <div className="bg-green-50 rounded py-1">
                <b className="text-green-600 text-sm">{item.carbs.toFixed(1)}g</b>
                <br />C
              </div>
            </div>
          </div>
        ))}
      </div>
      {caption && <figcaption className="text-[11px] text-gray-400 mt-3">{caption}</figcaption>}
    </figure>
  );
}

// ─── 15. QuickAnswer ─────────────────────────────────────────────────────────
// AI Overview / Featured Snippet 対策。記事冒頭に「結論」を提示

export function QuickAnswer({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50/50 p-5 sm:p-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">
          Q
        </div>
        <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug pt-0.5">
          {question}
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
          A
        </div>
        <div className="text-sm sm:text-base text-gray-800 leading-relaxed pt-0.5 [&_strong]:text-sky-700 [&_strong]:font-bold">
          {answer}
        </div>
      </div>
    </div>
  );
}

// ─── 16. ArticleSummary ──────────────────────────────────────────────────────
// 記事末尾の3-5箇条「この記事のポイント」

export function ArticleSummary({
  points,
}: {
  points: string[];
}) {
  return (
    <section className="my-10 rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle className="w-5 h-5 text-emerald-500" />
        <h3 className="text-base font-bold text-gray-900">この記事のポイント</h3>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold mt-0.5">
              {i + 1}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── 17. FAQSection ──────────────────────────────────────────────────────────
// FAQPage JSON-LD 自動生成つき。Google "People Also Ask" 対策
// Note: dangerouslySetInnerHTML is safe here - JSON.stringify of structured static data.

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQSection({ items, slug }: { items: FAQItem[]; slug: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  });

  return (
    <section className="my-10">
      <script
        type="application/ld+json"
        data-slug={slug}
        // Safe: faqJsonLd is JSON.stringify of static FAQ data, no user input.
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        よくある質問
      </h2>
      <div className="space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                  Q. {it.q}
                </span>
                <ChevronRight
                  className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm sm:text-[15px] text-gray-700 leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{it.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── 18. AuthorBio ───────────────────────────────────────────────────────────
// E-E-A-T シグナル: 著者・データソースの明示

export function AuthorBio() {
  return (
    <section className="my-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
          ヒ
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-900 mb-1">ヒロ（たべなび開発者）</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
            外食中心の生活で86kgまで増えた後、外食のカロリー・PFCを「数字で選ぶ」ことで73kgまで13kg減量。その経験から、外食・コンビニ32チェーン・6,000品以上のメニュー栄養データを各社公式サイトから取得・検証した「たべなび」を個人開発・運営しています。
          </p>
          <Link
            href="/sources"
            className="inline-flex items-center gap-1 text-xs text-sky-600 hover:underline"
          >
            データ出典・編集方針について
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 19. UpdateHistory ───────────────────────────────────────────────────────
// 更新履歴の可視化（鮮度シグナル）

export function UpdateHistory({
  entries,
}: {
  entries: { date: string; note: string }[];
}) {
  return (
    <details className="my-8 rounded-lg border border-gray-200 bg-gray-50/60">
      <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
        更新履歴を表示（{entries.length}件）
      </summary>
      <ul className="px-4 pb-4 pt-1 space-y-2 text-xs text-gray-600">
        {entries.map((e, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-mono text-gray-500 flex-shrink-0">{e.date}</span>
            <span>{e.note}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

// ─── 20. ArticleFooter ───────────────────────────────────────────────────────

export function ArticleFooter({ currentSlug }: { currentSlug: string }) {
  const related = pickRelated(currentSlug);

  return (
    <section className="mt-12 pt-10 border-t-[3px] border-double border-gray-300">
      <h3 className="text-xl font-bold text-gray-900 mb-6">関連記事</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/guide/${article.slug}`}
            className="block bg-white border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-sky-500 transition-colors">
              {article.title}
            </h4>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {article.description}
            </p>
            <span className="text-sm text-sky-500 font-medium inline-flex items-center gap-1">
              読む
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── 24. CompareBar (横棒比較バー = ランキング可視化) ──────────────────────────
// 競合は数値を表/本文でしか出さない。1指標を「長さ」で見せて一目で比較できる差別化部品。
export function CompareBar({
  title,
  items,
  unit = "kcal",
  metric = "calorie",
  sort = "asc",
  highlightTop = 1,
  caption,
}: {
  title: string;
  items: { name: string; value: number; note?: string }[];
  unit?: string;
  metric?: "calorie" | "protein" | "fat" | "carbs";
  sort?: "asc" | "desc" | "none";
  highlightTop?: number;
  caption?: string;
}) {
  const palette = {
    calorie: { fill: "bg-sky-400", track: "bg-sky-50", text: "text-sky-700" },
    protein: { fill: "bg-blue-500", track: "bg-blue-50", text: "text-blue-700" },
    fat: { fill: "bg-amber-400", track: "bg-amber-50", text: "text-amber-700" },
    carbs: { fill: "bg-green-500", track: "bg-green-50", text: "text-green-700" },
  }[metric];

  const sorted =
    sort === "none"
      ? items
      : [...items].sort((a, b) => (sort === "asc" ? a.value - b.value : b.value - a.value));
  const max = Math.max(...sorted.map((i) => i.value)) || 1;

  return (
    <figure className="my-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <figcaption className="text-sm font-bold text-gray-900 mb-4">{title}</figcaption>
      <div className="space-y-3">
        {sorted.map((it, i) => {
          const pct = Math.max((it.value / max) * 100, 6);
          const strong = i < highlightTop;
          return (
            <div key={it.name}>
              <div className="flex items-baseline justify-between mb-1 gap-2">
                <span className="text-[13px] sm:text-sm text-gray-700 font-medium truncate">
                  {strong && <span className="text-sky-500 mr-1">●</span>}
                  {it.name}
                </span>
                <span className={`text-sm font-bold tabular-nums ${strong ? palette.text : "text-gray-600"}`}>
                  {it.value.toLocaleString()}
                  <span className="text-[11px] font-normal ml-0.5">{unit}</span>
                  {it.note && <span className="text-[11px] text-gray-400 font-normal ml-1.5">{it.note}</span>}
                </span>
              </div>
              <div className={`h-3 rounded-full ${palette.track} overflow-hidden`}>
                <div
                  className={`h-full rounded-full ${strong ? palette.fill : "bg-gray-300"} transition-[width] duration-500`}
                  style={{ width: `${pct}%` }}
                  role="img"
                  aria-label={`${it.name} ${it.value}${unit}`}
                />
              </div>
            </div>
          );
        })}
      </div>
      {caption && <p className="text-[11px] text-gray-400 mt-4">{caption}</p>}
    </figure>
  );
}

type CompareBarProps = Parameters<typeof CompareBar>[0];
export const CalorieBar = (p: Omit<CompareBarProps, "metric" | "unit">) => (
  <CompareBar {...p} metric="calorie" unit="kcal" sort={p.sort ?? "asc"} />
);
export const ProteinBar = (p: Omit<CompareBarProps, "metric" | "unit">) => (
  <CompareBar {...p} metric="protein" unit="g" sort={p.sort ?? "desc"} />
);

// ─── 25. PFCBar (P:F:C カロリー寄与の積み上げ横バー) ──────────────────────────
// 割合はグラム比でなくカロリー寄与(P×4/F×9/C×4)。脂質が多い=見た目も太い、と直感が合う。
export function PFCBar({
  protein,
  fat,
  carbs,
  showLegend = true,
  compact = false,
}: {
  protein: number;
  fat: number;
  carbs: number;
  showLegend?: boolean;
  compact?: boolean;
}) {
  const pK = protein * 4,
    fK = fat * 9,
    cK = carbs * 4;
  const tot = pK + fK + cK || 1;
  const seg = [
    { label: "P", g: protein, pct: (pK / tot) * 100, fill: "bg-blue-500", text: "text-blue-700" },
    { label: "F", g: fat, pct: (fK / tot) * 100, fill: "bg-amber-400", text: "text-amber-700" },
    { label: "C", g: carbs, pct: (cK / tot) * 100, fill: "bg-green-500", text: "text-green-700" },
  ];
  return (
    <div className={compact ? "" : "my-3"}>
      <div
        className="flex h-3 w-full rounded-full overflow-hidden bg-gray-100"
        role="img"
        aria-label={`PFCバランス タンパク質${protein}g 脂質${fat}g 炭水化物${carbs}g`}
      >
        {seg.map((s) => (
          <div key={s.label} className={s.fill} style={{ width: `${s.pct}%` }} />
        ))}
      </div>
      {showLegend && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {seg.map((s) => (
            <span key={s.label} className="inline-flex items-center gap-1.5 text-[11px]">
              <span className={`w-2.5 h-2.5 rounded-sm ${s.fill}`} />
              <span className={`font-bold ${s.text}`}>{s.label}</span>
              <span className="text-gray-500 tabular-nums">
                {s.g.toFixed(1)}g・{Math.round(s.pct)}%
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── 26. ArticleMeta (公開日＋更新日＋権威バッジの信頼ヘッダ) ──────────────────
export function ArticleMeta({ published, updated }: { published: string; updated: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 mb-6">
      <AuthorityBadge />
      <span className="text-xs text-gray-400">公開: {published}</span>
      <span className="text-xs text-gray-500 font-medium inline-flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        更新: {updated}
      </span>
    </div>
  );
}

// ─── 28. MenuPhoto (自分で撮った実写真。マニフェスト登録分だけ表示・未登録は何も出さない) ───
// Next/Imageを使わず<img>直接配信(Vercel画像最適化のコストを避ける)。事前リサイズ前提。
export function MenuPhoto({
  id,
  genre,
  priority = false,
}: {
  id: string;
  genre?: string;
  priority?: boolean;
}) {
  // 優先順: 実写真(/public) → メニュー個別の代用 → ジャンル代用。どれも無ければ非表示(壊れない)。
  const real = MENU_PHOTOS[id];
  const p = real ?? MENU_STOCK[id] ?? (genre ? GENRE_STOCK[genre] : undefined);
  if (!p) return null;
  const isStock = !real;
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.src}
          alt={p.alt}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-auto max-h-80 object-cover"
        />
      </div>
      <figcaption className="text-[11px] text-gray-400 mt-2">
        {p.caption ?? p.alt}
        {isStock ? "（※写真はイメージ）" : " ／撮影: たべなび"}
      </figcaption>
    </figure>
  );
}

// ─── 27. SourceNote (データ近傍のインライン出典) ─────────────────────────────
export function SourceNote({
  source = "各チェーン公式サイトの栄養成分情報",
  asOf,
}: {
  source?: string;
  asOf: string;
}) {
  return (
    <p className="flex items-start gap-1.5 text-[11px] text-gray-400 mt-2 mb-6">
      <Database className="w-3 h-3 mt-0.5 flex-shrink-0" />
      <span>
        出典: {source}（{asOf} 時点）／たべなびDBで検証済み
      </span>
    </p>
  );
}
