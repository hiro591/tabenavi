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
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="bg-sky-400 text-white font-bold text-lg sm:text-xl px-5 py-3.5 scroll-mt-24 mt-2 mb-8 border-t-[3px] border-b-[3px] border-sky-600"
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
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-gray-900 text-sm sm:text-base">{name}</p>
          {chain && (
            <p className="text-xs text-gray-500 mt-0.5">{chain}</p>
          )}
        </div>
        {recommended && (
          <span className="bg-sky-400 text-white text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
            おすすめ
          </span>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
          <p className="text-sky-600 font-bold text-sm">{calories}</p>
          <p className="text-sky-600 text-[10px]">kcal</p>
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
  title = "たべなびで栄養管理を始めよう",
  subtitle = "20チェーン・500メニューの栄養データ、全部無料",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="my-12 bg-gradient-to-r from-sky-400 to-cyan-400 p-8 text-center shadow-lg shadow-sky-200/50 border-t-[3px] border-b-[3px] border-sky-600">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sky-100 text-sm sm:text-base mb-6">{subtitle}</p>
      <Link
        href="/signup"
        className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3 rounded-full text-base shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
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
    <div className="overflow-x-auto border border-gray-200 my-6 shadow-sm">
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
  children,
}: {
  rank: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const rankColors: Record<number, { bg: string; circle: string }> = {
    1: { bg: "from-yellow-50 to-amber-50", circle: "bg-yellow-400" },
    2: { bg: "from-gray-50 to-slate-50", circle: "bg-gray-400" },
    3: { bg: "from-sky-50 to-cyan-50", circle: "bg-sky-400" },
  };
  const colors = rankColors[rank] || { bg: "from-gray-50 to-gray-50", circle: "bg-gray-300" };

  return (
    <div className="mb-8 border border-gray-200 overflow-hidden">
      <div className={`bg-gradient-to-r ${colors.bg} px-5 py-4 flex items-center gap-3 border-b border-gray-100`}>
        <span className={`w-10 h-10 rounded-full ${colors.circle} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
          {rank}
        </span>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── 14. NutritionTable ──────────────────────────────────────────────────────

export function NutritionTable({
  items,
  highlightProtein,
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
}) {
  return (
    <div className="overflow-x-auto border border-gray-200 my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-sky-400 text-white">
            <th className="text-left px-4 py-2.5 font-bold">メニュー</th>
            <th className="text-right px-4 py-2.5 font-bold">カロリー</th>
            <th className="text-right px-4 py-2.5 font-bold">P</th>
            <th className="text-right px-4 py-2.5 font-bold">F</th>
            <th className="text-right px-4 py-2.5 font-bold">C</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.name}
              className={
                item.highlight
                  ? "bg-sky-50/50"
                  : i % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50/50"
              }
            >
              <td className="px-4 py-2.5 text-gray-900 font-medium">
                {item.name}
                {item.highlight && (
                  <span className="ml-2 text-xs text-sky-600 font-bold">おすすめ</span>
                )}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.calories} kcal</td>
              <td className={`text-right px-4 py-2.5 font-bold ${highlightProtein ? "text-sky-600" : "text-blue-600"}`}>
                {item.protein.toFixed(1)}g
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.fat.toFixed(1)}g</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.carbs.toFixed(1)}g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── 15. ArticleFooter ───────────────────────────────────────────────────────

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
  {
    slug: "low-carb-eating-out",
    title: "糖質制限×外食ガイド",
    description: "チェーン店の低糖質メニューを徹底解説。",
  },
  {
    slug: "diet-lunch",
    title: "ダイエット中のランチガイド",
    description: "500kcal以下のランチメニューを厳選。",
  },
  {
    slug: "family-restaurant-diet",
    title: "ファミレスダイエット比較",
    description: "サイゼリヤ・ガスト・デニーズを徹底比較。",
  },
  {
    slug: "drinking-party-diet",
    title: "飲み会で太らないガイド",
    description: "お酒のカロリーとおつまみの選び方。",
  },
  {
    slug: "daily-meal-plan",
    title: "1日1500kcalプラン",
    description: "外食だけで達成する食事プラン。",
  },
  {
    slug: "protein-cost-ranking",
    title: "タンパク質コスパランキング",
    description: "1gあたりの価格で外食メニューを比較。",
  },
  {
    slug: "yoshinoya-diet",
    title: "吉野家ダイエットガイド",
    description: "低カロリーランキングとおすすめの食べ方。",
  },
  {
    slug: "matsuya-diet",
    title: "松屋ダイエットガイド",
    description: "定食vs丼の比較と低カロリーメニュー。",
  },
  {
    slug: "sukiya-diet",
    title: "すき家ダイエットガイド",
    description: "牛丼ライトで糖質オフ。",
  },
  {
    slug: "kfc-diet",
    title: "ケンタッキーダイエットガイド",
    description: "高タンパクメニューの選び方。",
  },
  {
    slug: "gusto-diet",
    title: "ガストダイエットガイド",
    description: "低カロリーランキングと注文テクニック。",
  },
  {
    slug: "subway-diet",
    title: "サブウェイダイエットガイド",
    description: "低カロリーサンドの選び方。",
  },
  {
    slug: "ootoya-diet",
    title: "大戸屋ダイエットガイド",
    description: "定食の選び方とおすすめメニュー。",
  },
  {
    slug: "dennys-diet",
    title: "デニーズダイエットガイド",
    description: "低カロリーメニューとソース別比較。",
  },
  {
    slug: "starbucks-diet",
    title: "スタバダイエットガイド",
    description: "低カロリードリンクとカスタマイズ術。",
  },
  {
    slug: "marugame-diet",
    title: "丸亀製麺ダイエットガイド",
    description: "うどんは太る？低カロリーの選び方。",
  },
  {
    slug: "morning-diet",
    title: "朝食ダイエットガイド",
    description: "朝マック・コンビニの朝食メニュー。",
  },
  {
    slug: "ramen-diet",
    title: "ラーメンとダイエット",
    description: "カロリー比較と太らない食べ方。",
  },
  {
    slug: "curry-diet",
    title: "カレーとダイエット",
    description: "チェーン店別カロリー比較。",
  },
  {
    slug: "sushi-diet",
    title: "回転寿司ダイエットガイド",
    description: "ネタ別カロリーと太らない食べ方。",
  },
  {
    slug: "pfc-guide",
    title: "PFCバランス入門",
    description: "計算方法と外食での実践ガイド。",
  },
  {
    slug: "recording-diet",
    title: "レコーディングダイエット",
    description: "記録するだけで痩せる科学的根拠。",
  },
  {
    slug: "late-night-eating",
    title: "夜食で太らない方法",
    description: "深夜の外食・コンビニメニュー。",
  },
  {
    slug: "eating-order",
    title: "太らない食べ順ガイド",
    description: "食べ順ダイエットの実践方法。",
  },
  {
    slug: "seven-eleven-diet",
    title: "セブンイレブンダイエット",
    description: "低カロリー＆高タンパク商品。",
  },
  {
    slug: "bulkup-eating-out",
    title: "増量期の外食ガイド",
    description: "バルクアップ向きチェーン店メニュー。",
  },
];

export function ArticleFooter({ currentSlug }: { currentSlug: string }) {
  const related = RELATED_ARTICLES.filter(
    (a) => a.slug !== currentSlug
  ).slice(0, 3);

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
