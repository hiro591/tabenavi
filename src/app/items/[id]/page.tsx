import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import ShareCard from "./ShareCard";
import ItemHeroImage from "./ItemHeroImage";

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
      return { label: "外食チェーン", color: "bg-orange-100 text-orange-700" };
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

function getSuitabilityBadges(item: MenuItem) {
  const badges: { label: string; icon: string }[] = [];
  const { calories, protein, fat } = item;

  if (protein != null && protein > 20) {
    badges.push({ label: "高タンパク", icon: "check" });
  }
  if (calories != null && calories < 400) {
    badges.push({ label: "低カロリー", icon: "check" });
  }
  if (fat != null && fat < 15) {
    badges.push({ label: "低脂質", icon: "check" });
  }
  if (calories != null && calories < 500 && protein != null && protein > 15) {
    badges.push({ label: "ダイエット向き", icon: "check" });
  }
  if (protein != null && protein > 25) {
    badges.push({ label: "筋トレ向き", icon: "check" });
  }

  return badges;
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
  const chainEmoji = item.chain_restaurants?.emoji ?? "🍽️";
  const mapsUrl = chainName
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(chainName)}`
    : `https://www.google.com/maps`;

  return (
    <div className="min-h-screen bg-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/search"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">&larr;</span>
            <span className="text-sm">検索に戻る</span>
          </Link>
          <button
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="共有"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-8 pb-6 text-center">
          <div className="flex justify-center mb-4">
            <ItemHeroImage chainName={chainName} emoji={chainEmoji} />
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
            <p className="text-2xl font-bold text-orange-500">
              &yen;{item.price.toLocaleString()}
            </p>
          )}
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
                <p className="text-4xl font-bold text-orange-500">
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
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium"
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
                  <div className="text-center mb-2">
                    <span className="text-3xl">
                      {similar.chain_restaurants?.emoji ?? "🍽️"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    {similar.chain_restaurants?.name ?? ""}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate mb-1">
                    {similar.name}
                  </p>
                  {similar.calories != null && (
                    <p className="text-xs text-orange-500 font-medium">
                      {similar.calories} kcal
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 py-3 px-4">
        <div className="max-w-lg mx-auto flex gap-3">
          <FavoriteButton itemId={item.id} />
          <ShareCard item={item} />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-xl font-medium active:bg-orange-600 transition-colors"
          >
            <span className="text-lg">📍</span>
            <span>近くの{chainName || "お店"}を探す</span>
          </a>
        </div>
      </div>
    </div>
  );
}
