import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, MapPin, Utensils } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";
import { chainSlugByName, GOALS } from "@/lib/chains";
import FavoriteButton from "./FavoriteButton";
import ShareCard from "./ShareCard";
import ItemHeroImage from "./ItemHeroImage";
import ReportButton from "./ReportButton";

interface MenuItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  category: string | null;
  price: number | null;
  source_type: string | null;
  description: string | null;
  chain_restaurants: {
    name: string;
    emoji: string;
  } | null;
}

function getSourceBadge(sourceType: string | null) {
  switch (sourceType) {
    case "chain_restaurant":
      return { label: "外食チェーン", color: "bg-sky-100 text-sky-700" };
    case "convenience_store":
      return { label: "コンビニ", color: "bg-blue-100 text-blue-700" };
    case "supermarket":
      return { label: "スーパー", color: "bg-green-100 text-green-700" };
    default:
      return { label: "その他", color: "bg-gray-100 text-gray-700" };
  }
}

function calcPfcRatio(protein: number, fat: number, carbs: number) {
  const pCal = protein * 4;
  const fCal = fat * 9;
  const cCal = carbs * 4;
  const total = pCal + fCal + cCal;
  if (total === 0) return { p: 0, f: 0, c: 0 };
  return {
    p: Math.round((pCal / total) * 100),
    f: Math.round((fCal / total) * 100),
    c: Math.round((cCal / total) * 100),
  };
}

const BADGE_COLORS: Record<string, string> = {
  "高タンパク": "bg-blue-50 text-blue-700 border border-blue-200",
  "低カロリー": "bg-green-50 text-green-700 border border-green-200",
  "低脂質": "bg-amber-50 text-amber-700 border border-amber-200",
  "ダイエット向き": "bg-emerald-50 text-emerald-700 border border-emerald-200",
  "筋トレ向き": "bg-indigo-50 text-indigo-700 border border-indigo-200",
};

function getSuitabilityBadges(item: MenuItem) {
  const badges: { label: string; icon: string; color: string }[] = [];
  const { calories, protein, fat } = item;

  if (protein != null && protein > 20) {
    badges.push({ label: "高タンパク", icon: "check", color: BADGE_COLORS["高タンパク"] });
  }
  if (calories != null && calories < 400) {
    badges.push({ label: "低カロリー", icon: "check", color: BADGE_COLORS["低カロリー"] });
  }
  if (fat != null && fat < 15) {
    badges.push({ label: "低脂質", icon: "check", color: BADGE_COLORS["低脂質"] });
  }
  if (calories != null && calories < 500 && protein != null && protein > 15) {
    badges.push({ label: "ダイエット向き", icon: "check", color: BADGE_COLORS["ダイエット向き"] });
  }
  if (protein != null && protein > 25) {
    badges.push({ label: "筋トレ向き", icon: "check", color: BADGE_COLORS["筋トレ向き"] });
  }

  return badges;
}

// ISR: cache page for 24 hours. Massive CPU savings vs SSR on every request.
// Menu data changes infrequently — 24h freshness is acceptable.
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase
    .from("menu_items")
    .select("*, chain_restaurants(name)")
    .eq("id", id)
    .single();

  if (!item) return { title: "メニュー | たべなび" };

  const chain = item.chain_restaurants?.name ?? "";
  const title = `${chain ? chain + " " : ""}${item.name} カロリー・栄養成分 | たべなび`;
  const desc = `${chain ? chain + "の" : ""}${item.name}の栄養成分。カロリー${item.calories ?? "?"}kcal、タンパク質${item.protein ?? "?"}g、脂質${item.fat ?? "?"}g、炭水化物${item.carbs ?? "?"}g。`;

  return {
    title,
    description: desc,
    openGraph: { title, description: desc },
  };
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: item } = await supabase
    .from("menu_items")
    .select("*, chain_restaurants(name, emoji)")
    .eq("id", id)
    .single<MenuItem>();

  if (!item) {
    notFound();
  }

  const { data: similarItems } = await supabase
    .from("menu_items")
    .select("*, chain_restaurants(name, emoji)")
    .eq("category", item.category ?? "")
    .neq("id", item.id)
    .limit(6)
    .returns<MenuItem[]>();

  const sourceBadge = getSourceBadge(item.source_type);
  const hasNutrition =
    item.calories != null ||
    item.protein != null ||
    item.fat != null ||
    item.carbs != null;
  const pfcRatio =
    item.protein != null && item.fat != null && item.carbs != null
      ? calcPfcRatio(item.protein, item.fat, item.carbs)
      : null;
  const badges = getSuitabilityBadges(item);
  const chainName = item.chain_restaurants?.name ?? "";
  // メニューが属するチェーンの URL slug（パンくず・チェーンページへのリンク用）。
  // これで孤児だった商品ページがチェーンページ/目的別ランキングと相互リンクする。
  const chainSlug = chainSlugByName(chainName);
  const mapsUrl = chainName
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(chainName)}`
    : `https://www.google.com/maps`;

  // チェーンページに繋ぐ目的別ランキング(全8目的)。chainSlug がある場合のみ。
  // 6,200のメニューページから8目的ランキング全てに内部リンクを通す。
  const rankingLinks = chainSlug
    ? Object.entries(GOALS).map(([key, g]) => ({
        key,
        title: g.title,
        href: `/chains/${chainSlug}/${key}`,
      }))
    : [];

  // Static server-rendered JSON-LD for nutrition data SEO
  const itemJsonLd = {
    "@context": "https://schema.org",
    "@type": "NutritionInformation",
    name: `${chainName ? chainName + " " : ""}${item.name}`,
    calories: item.calories ? `${item.calories} calories` : undefined,
    proteinContent: item.protein ? `${item.protein} g` : undefined,
    fatContent: item.fat ? `${item.fat} g` : undefined,
    carbohydrateContent: item.carbs ? `${item.carbs} g` : undefined,
  };

  // BreadcrumbList JSON-LD: たべなび → (チェーン) → メニュー。検索結果にパンくず表示 + 内部リンク構造を明示。
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "たべなび", item: "https://www.tabenavi.jp" },
      ...(chainSlug
        ? [{ "@type": "ListItem", position: 2, name: chainName, item: `https://www.tabenavi.jp/guide/${chainSlug}` }]
        : []),
      {
        "@type": "ListItem",
        position: chainSlug ? 3 : 2,
        name: item.name,
        item: `https://www.tabenavi.jp/items/${item.id}`,
      },
    ],
  };

  // ─── AEO(AI Overview対策): データ駆動FAQ ───────────────────────────────
  // 2026年: FAQリッチリザルトは廃止されたが FAQPage schema は AI Overview 引用に有効(可視Q&A必須)。
  // 各回答に実数値を埋め込むため、6,200ページそれぞれで回答が一意 = 薄いコンテンツ判定を回避。
  const dispName = chainName ? `${chainName}の${item.name}` : item.name;
  const faqs: { q: string; a: string }[] = [];

  if (item.calories != null) {
    faqs.push({
      q: `${dispName}のカロリーは何kcalですか？`,
      a: `${item.name}のカロリーは${item.calories}kcalです。${chainName ? `${chainName}の公式栄養データに基づきます。` : ""}`,
    });
  }
  if (item.protein != null && item.fat != null && item.carbs != null) {
    faqs.push({
      q: `${item.name}のPFC（タンパク質・脂質・炭水化物）は？`,
      a: `タンパク質${item.protein}g、脂質${item.fat}g、炭水化物${item.carbs}gです。`,
    });
  }
  if (item.protein != null) {
    const a =
      item.protein >= 20
        ? `タンパク質${item.protein}gと高タンパクで、筋トレ・ボディメイク中にもおすすめです。`
        : item.protein >= 10
          ? `タンパク質は${item.protein}gです。不足分は他の食事やプロテインで補うと効率的です。`
          : `タンパク質は${item.protein}gとやや控えめです。高タンパクなサイドメニューと組み合わせるのがおすすめです。`;
    faqs.push({ q: `${item.name}は高タンパクですか？`, a });
  }
  if (item.calories != null) {
    const dietFriendly = badges.some((b) => b.label === "ダイエット向き" || b.label === "低カロリー");
    faqs.push({
      q: `${item.name}はダイエット向きですか？`,
      a: dietFriendly
        ? `${item.calories}kcalと比較的低カロリーで、ダイエット中でも選びやすいメニューです。${item.protein != null && item.protein >= 15 ? `タンパク質も${item.protein}gと十分です。` : ""}`
        : `${item.calories}kcalです。ダイエット中はライス少なめやサイドメニューの調整でカロリーを抑えるのがおすすめです。`,
    });
  }
  if (item.carbs != null) {
    faqs.push({
      q: `${item.name}の糖質（炭水化物）はどれくらいですか？`,
      a: `炭水化物は${item.carbs}gです。${item.carbs <= 20 ? "糖質制限中でも比較的選びやすい量です。" : "糖質を抑えたい場合はご飯・パン・麺を減らすのがおすすめです。"}`,
    });
  }
  if (item.price != null) {
    faqs.push({
      q: `${item.name}の値段はいくらですか？`,
      a: `${item.price}円です（店舗・時期により異なる場合があります）。`,
    });
  }

  // FAQ が2件以上揃ったページのみ schema を出す(空/薄いFAQにschemaを付けない)
  const faqJsonLd =
    faqs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white pb-28">
      {/* 静的な構造化データ(ユーザー入力なし) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/search"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">検索に戻る</span>
          </Link>
          <ShareCard item={item} variant="header" />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4">
        {/* 可視パンくず(内部リンク + UX) */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 pt-3 flex-wrap">
          <Link href="/" className="hover:text-sky-500">たべなび</Link>
          {chainSlug && (
            <>
              <span>/</span>
              <Link href={`/guide/${chainSlug}`} className="hover:text-sky-500">
                {chainName}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[180px]">{item.name}</span>
        </nav>
        {/* Hero Section */}
        <div className="pt-8 pb-6 text-center">
          <div className="flex justify-center mb-4">
            <ItemHeroImage chainName={chainName} />
          </div>

          <div className="flex justify-center mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${sourceBadge.color}`}
            >
              {sourceBadge.label}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-1">{chainName}</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h1>

          {item.price != null && (
            <p className="text-2xl font-bold text-sky-500">
              &yen;{item.price.toLocaleString()}
            </p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">※価格は店舗により異なる場合があります</p>
        </div>

        {/* Nutrition Info Card */}
        {hasNutrition && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-4">
              栄養成分
            </h2>

            {item.calories != null && (
              <div className="text-center mb-5">
                <p className="text-xs text-gray-400 mb-1">カロリー</p>
                <p className="text-4xl font-bold text-sky-500">
                  {item.calories}
                  <span className="text-lg font-normal text-gray-400 ml-1">
                    kcal
                  </span>
                </p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-xs text-blue-600 mb-1">タンパク質</p>
                <p className="text-xl font-bold text-blue-700">
                  {item.protein != null ? item.protein.toFixed(1) : "-"}
                  <span className="text-xs font-normal ml-0.5">g</span>
                </p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-3 text-center">
                <p className="text-xs text-yellow-700 mb-1">脂質</p>
                <p className="text-xl font-bold text-yellow-700">
                  {item.fat != null ? item.fat.toFixed(1) : "-"}
                  <span className="text-xs font-normal ml-0.5">g</span>
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-xs text-green-700 mb-1">炭水化物</p>
                <p className="text-xl font-bold text-green-700">
                  {item.carbs != null ? item.carbs.toFixed(1) : "-"}
                  <span className="text-xs font-normal ml-0.5">g</span>
                </p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">※栄養成分値は目安です。実際の値と異なる場合があります</p>
            <div className="mt-1">
              <ReportButton itemId={item.id} itemName={item.name} chainName={chainName} />
            </div>
          </div>
        )}

        {/* PFC Balance Bar */}
        {pfcRatio && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              PFCバランス
            </h2>
            <div className="flex rounded-full overflow-hidden h-4 mb-3">
              {pfcRatio.p > 0 && (
                <div
                  className="bg-blue-400"
                  style={{ width: `${pfcRatio.p}%` }}
                />
              )}
              {pfcRatio.f > 0 && (
                <div
                  className="bg-yellow-400"
                  style={{ width: `${pfcRatio.f}%` }}
                />
              )}
              {pfcRatio.c > 0 && (
                <div
                  className="bg-green-400"
                  style={{ width: `${pfcRatio.c}%` }}
                />
              )}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                P {pfcRatio.p}%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                F {pfcRatio.f}%
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                C {pfcRatio.c}%
              </span>
            </div>
          </div>
        )}

        {/* Suitability Badges */}
        {badges.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              体型管理への適性
            </h2>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${badge.color}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {item.description && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">説明</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        )}

        {/* Similar Items */}
        {similarItems && similarItems.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              同じカテゴリーのメニュー
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {similarItems.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/items/${similar.id}`}
                  className="flex-shrink-0 w-36 bg-white rounded-xl border border-gray-100 shadow-sm p-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-2">
                    {(() => {
                      const logo = getChainLogo(similar.chain_restaurants?.name ?? "");
                      return logo ? (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: logo.bg }}
                        >
                          <img src={logo.url} alt={similar.chain_restaurants?.name ?? ""} className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-sky-400" />
                        </div>
                      );
                    })()}
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    {similar.chain_restaurants?.name ?? ""}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate mb-1">
                    {similar.name}
                  </p>
                  {similar.calories != null && (
                    <p className="text-xs text-sky-500 font-medium">
                      {similar.calories} kcal
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* チェーンの目的別ランキングへの内部リンク(孤児ページをチェーンページ/ランキングに接続) */}
        {chainSlug && rankingLinks.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              {chainName}のメニューを目的別に探す
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {rankingLinks.map((r) => (
                <Link
                  key={r.key}
                  href={r.href}
                  className="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm px-3.5 py-3 hover:bg-sky-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800">{r.title}</span>
                  <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                </Link>
              ))}
            </div>
            <Link
              href={`/guide/${chainSlug}`}
              className="mt-2 block text-center text-xs text-sky-600 hover:underline"
            >
              {chainName}の全メニュー栄養一覧を見る →
            </Link>
          </div>
        )}

        {/* よくある質問(AEO: 可視Q&A + FAQPage schema。AI Overview/PAA 引用対策) */}
        {faqs.length >= 2 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 mb-3">よくある質問</h2>
            <div className="space-y-2">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1.5">Q. {f.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">A. {f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-2">
              ※栄養成分は各チェーンの公式情報に基づきます（店舗・時期により変動する場合があります）。
            </p>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 py-3 px-4 z-50">
        <div className="max-w-lg mx-auto space-y-2">
          <div className="flex gap-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold text-sm active:bg-emerald-600 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              近くの店舗を探す
            </a>
            <Link
              href={`/record?menu_id=${item.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 bg-gradient-to-r from-sky-400 to-cyan-500 text-white rounded-xl font-semibold text-sm active:scale-[0.98] transition-all"
            >
              この食事を記録する
            </Link>
          </div>
          <div className="flex gap-2 justify-center">
            <FavoriteButton itemId={item.id} />
            <ShareCard item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
