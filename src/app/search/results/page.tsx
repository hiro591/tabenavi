"use client";

import { Suspense } from "react";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getChainLogo } from "@/lib/chain-logos";
import { ChevronLeft, Heart, MapPin, Plus, Utensils } from "lucide-react";

const SORT_OPTIONS = [
  { label: "おすすめ順",       value: "recommended" },
  { label: "カロリー低い順",   value: "calorie_asc" },
  { label: "タンパク質多い順", value: "protein_desc" },
  { label: "価格安い順",       value: "price_asc" },
];

interface MenuItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  category: string | null;
  source_type: string | null;
  image_url: string | null;
  chain_restaurants: { name: string; emoji: string } | null;
}

// ─── Chain logo panel (handles image error fallback) ─────────────────────────

function ChainLogoPanel({
  item,
  fitnessBadge,
}: {
  item: MenuItem;
  fitnessBadge: { label: string; style: string } | null;
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logoInfo = getChainLogo(item.chain_restaurants?.name || "");
  const showLogo = logoInfo && !logoFailed;

  return (
    <div
      className="w-28 shrink-0 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: showLogo ? logoInfo.bg : undefined }}
    >
      {item.image_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
      ) : showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoInfo.url}
          alt={item.chain_restaurants?.name || ""}
          className="w-full h-full object-contain p-4"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getCardGradient(item)}`}>
          <Utensils className="w-10 h-10 text-orange-300" />
        </div>
      )}
      {fitnessBadge && (
        <span className={`absolute bottom-1.5 left-1.5 right-1.5 text-center text-[9px] font-bold px-1.5 py-0.5 rounded-lg ${fitnessBadge.style}`}>
          {fitnessBadge.label}
        </span>
      )}
    </div>
  );
}

// ─── Store gradient per brand ────────────────────────────────────────────────

function getCardGradient(item: MenuItem): string {
  const n = item.chain_restaurants?.name ?? "";
  if (n.includes("セブン"))    return "from-green-100 to-emerald-50";
  if (n.includes("ローソン"))  return "from-blue-100 to-sky-50";
  if (n.includes("ファミリー") || n.includes("ファミマ")) return "from-sky-100 to-cyan-50";
  if (n.includes("マクドナルド")) return "from-yellow-100 to-amber-50";
  if (n.includes("すき家"))    return "from-orange-100 to-amber-50";
  if (n.includes("吉野家"))    return "from-red-100 to-rose-50";
  if (n.includes("松屋"))      return "from-amber-100 to-yellow-50";
  if (n.includes("スターバックス")) return "from-green-100 to-teal-50";
  if (n.includes("モスバーガー"))   return "from-red-100 to-orange-50";
  if (item.source_type === "convenience_store") return "from-blue-50 to-indigo-50";
  if (item.source_type === "chain_restaurant")  return "from-orange-50 to-amber-50";
  if (item.source_type === "supermarket")       return "from-emerald-50 to-green-50";
  return "from-gray-100 to-gray-50";
}

function getStoreBadgeStyle(name: string | undefined, sourceType: string | null): string {
  const n = name ?? "";
  if (n.includes("セブン"))    return "bg-green-100 text-green-700";
  if (n.includes("ローソン"))  return "bg-blue-100 text-blue-700";
  if (n.includes("ファミリー") || n.includes("ファミマ")) return "bg-sky-100 text-sky-700";
  if (n.includes("マクドナルド")) return "bg-yellow-100 text-yellow-700";
  if (n.includes("すき家"))    return "bg-orange-100 text-orange-700";
  if (n.includes("吉野家"))    return "bg-red-100 text-red-700";
  if (n.includes("松屋"))      return "bg-amber-100 text-amber-700";
  if (n.includes("スターバックス")) return "bg-green-100 text-green-800";
  if (sourceType === "convenience_store") return "bg-blue-50 text-blue-600";
  if (sourceType === "supermarket")       return "bg-emerald-50 text-emerald-600";
  return "bg-orange-50 text-orange-600";
}

// Fitness badge: shown when protein is notably high or calories notably low
function getFitnessBadge(item: MenuItem): { label: string; style: string } | null {
  if (item.protein != null && item.protein >= 25)
    return { label: "高タンパク", style: "bg-blue-500 text-white" };
  if (item.calories != null && item.calories <= 300)
    return { label: "低カロリー", style: "bg-green-500 text-white" };
  return null;
}

// ─── Main content ─────────────────────────────────────────────────────────────

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const searchQ    = searchParams.get("q") || "";
  const category   = searchParams.get("category") || "";
  const sourceType = searchParams.get("source_type") || "";
  const calorieMin = Number(searchParams.get("calorie_min")) || 0;
  const calorieMax = Number(searchParams.get("calorie_max")) || 0;
  const proteinMin = Number(searchParams.get("protein_min")) || 0;
  const proteinMax = Number(searchParams.get("protein_max")) || 0;
  const fatMin     = Number(searchParams.get("fat_min")) || 0;
  const fatMax     = Number(searchParams.get("fat_max")) || 0;
  const priceMin   = Number(searchParams.get("price_min")) || 0;
  const priceMax   = Number(searchParams.get("price_max")) || 0;
  const sort       = searchParams.get("sort") || "recommended";

  const fetchItems = useCallback(async () => {
    if (page === 1) setLoading(true);
    const supabase = createClient();
    let query = supabase.from("menu_items").select("*, chain_restaurants(name, emoji)");

    if (searchQ) {
      // Also search by chain restaurant name (e.g. typing "マクドナルド" shows all McDonald's items)
      const { data: chains } = await supabase
        .from("chain_restaurants")
        .select("id")
        .ilike("name", `%${searchQ}%`);
      const chainIds = (chains ?? []).map((c: { id: string }) => c.id);

      if (chainIds.length > 0) {
        query = query.or(`name.ilike.%${searchQ}%,chain_restaurant_id.in.(${chainIds.join(",")})`);
      } else {
        query = query.or(`name.ilike.%${searchQ}%,description.ilike.%${searchQ}%`);
      }
    }
    if (category)   query = query.eq("category", category);
    if (sourceType) query = query.eq("source_type", sourceType);
    if (calorieMin > 0) query = query.gte("calories", calorieMin);
    if (calorieMax > 0) query = query.lte("calories", calorieMax);
    if (proteinMin > 0) query = query.gte("protein", proteinMin);
    if (proteinMax > 0) query = query.lte("protein", proteinMax);
    if (fatMin > 0)     query = query.gte("fat", fatMin);
    if (fatMax > 0)     query = query.lte("fat", fatMax);
    if (priceMin > 0)   query = query.gte("price", priceMin);
    if (priceMax > 0)   query = query.lte("price", priceMax);

    if (sort === "calorie_asc")  query = query.order("calories", { ascending: true });
    else if (sort === "protein_desc") query = query.order("protein", { ascending: false });
    else if (sort === "price_asc")    query = query.order("price", { ascending: true });
    else query = query.order("protein", { ascending: false });

    const { data } = await query.range(0, page * 20 - 1);
    const fetched = (data as MenuItem[]) || [];
    setItems(fetched);
    setHasMore(fetched.length === page * 20);
    setLoading(false);
    setLoadingMore(false);
  }, [searchQ, category, sourceType, calorieMin, calorieMax, proteinMin, proteinMax, fatMin, fatMax, priceMin, priceMax, sort, page]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) { router.replace("/login"); return; }
      setUserId(data.user.id);
      try {
        const { data: favs } = await supabase
          .from("favorites").select("menu_item_id").eq("user_id", data.user.id);
        setFavoriteIds(new Set(favs?.map((f) => f.menu_item_id) || []));
      } catch { /* table may not exist */ }
      fetchItems();
    });
  }, [router, fetchItems]);

  const updateSort = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newSort === "recommended") params.delete("sort");
    else params.set("sort", newSort);
    router.push(`/search/results?${params.toString()}`);
  };

  const toggleFavorite = async (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    if (!userId) return;
    const supabase = createClient();
    if (favoriteIds.has(itemId)) {
      setFavoriteIds((prev) => { const s = new Set(prev); s.delete(itemId); return s; });
      await supabase.from("favorites").delete().eq("menu_item_id", itemId).eq("user_id", userId);
    } else {
      setFavoriteIds((prev) => new Set([...prev, itemId]));
      await supabase.from("favorites").insert({ user_id: userId, menu_item_id: itemId });
    }
  };

  const loadMore = () => {
    setLoadingMore(true);
    setPage((p) => p + 1);
  };

  const handleRecord = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    router.push(`/record?chain=${encodeURIComponent(item.chain_restaurants?.name || "")}&menu=${encodeURIComponent(item.name)}`);
  };

  const getLeftBorderClass = (sourceType: string | null) => {
    switch (sourceType) {
      case "convenience_store": return "border-l-4 border-l-sky-400";
      case "chain_restaurant":  return "border-l-4 border-l-orange-400";
      case "supermarket":       return "border-l-4 border-l-green-400";
      default:                  return "border-l-4 border-l-gray-200";
    }
  };

  const pageTitle = searchQ || category || (sourceType === "convenience_store" ? "コンビニ" : sourceType === "chain_restaurant" ? "外食チェーン" : "検索結果");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Sticky Header ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 px-4 py-3">
            <button onClick={() => router.back()}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-base font-bold text-gray-900 truncate flex-1">{pageTitle}</h1>
            <button
              onClick={() => router.push("/search")}
              className="shrink-0 px-3 py-1.5 bg-orange-50 text-orange-500 rounded-xl text-xs font-bold active:bg-orange-100 transition-colors">
              条件変更
            </button>
          </div>

          {/* Sort bar */}
          <div className="flex gap-1.5 px-4 pb-2.5 overflow-x-auto scrollbar-hide">
            {SORT_OPTIONS.map((opt) => (
              <button key={opt.value}
                onClick={() => updateSort(opt.value)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  sort === opt.value || (sort === "recommended" && opt.value === "recommended")
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-gray-100 text-gray-500"
                }`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-3 pb-32">

        {/* Results count */}
        {!loading && (
          <p className="text-xs text-gray-400 mb-3 font-medium">
            {items.length}件見つかりました
          </p>
        )}

        {/* Loading skeleton */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-28 animate-pulse shadow-sm" />
            ))}
          </div>

        ) : items.length > 0 ? (
          <div className="space-y-3">
            {items.map((item) => {
              const fitnessBadge = getFitnessBadge(item);
              const mapsUrl = item.chain_restaurants?.name
                ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.chain_restaurants.name)}`
                : null;

              return (
                <div
                  key={item.id}
                  onClick={() => router.push(`/items/${item.id}`)}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.985] active:shadow-none transition-all cursor-pointer ${getLeftBorderClass(item.source_type)}`}
                >
                  <div className="flex">
                    {/* Left panel: logo or gradient+emoji */}
                    <ChainLogoPanel item={item} fitnessBadge={fitnessBadge} />

                    {/* Right content */}
                    <div className="flex-1 min-w-0 p-3 flex flex-col justify-between">
                      {/* Top: store name + source type icon */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${getStoreBadgeStyle(item.chain_restaurants?.name, item.source_type)}`}>
                          {item.chain_restaurants?.name || "その他"}
                        </span>
                      </div>

                      {/* Item name */}
                      <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug mb-2">
                        {item.name}
                      </p>

                      {/* Nutrition pills */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.calories != null && (
                          <span className="text-[11px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                            {item.calories} kcal
                          </span>
                        )}
                        {item.protein != null && (
                          <span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                            P {item.protein}g
                          </span>
                        )}
                        {item.fat != null && (
                          <span className="text-[11px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">
                            F {item.fat}g
                          </span>
                        )}
                      </div>

                      {/* Bottom: price + actions */}
                      <div className="flex items-center">
                        {item.price != null && (
                          <span className="text-sm font-bold text-gray-800">¥{item.price}</span>
                        )}
                        <div className="flex items-center gap-3 ml-auto">
                          {mapsUrl && (
                            <a
                              href={mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-300 active:text-orange-400 transition-colors"
                            >
                              <MapPin className="w-4 h-4" />
                            </a>
                          )}
                          <button
                            onClick={(e) => toggleFavorite(e, item.id)}
                            className={`transition-colors ${favoriteIds.has(item.id) ? "text-red-500" : "text-gray-300"}`}
                          >
                            <Heart className={`w-4 h-4 ${favoriteIds.has(item.id) ? "fill-current" : ""}`} />
                          </button>
                          <button
                            onClick={(e) => handleRecord(e, item)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white active:bg-orange-600 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {hasMore && (
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="w-full py-3 mt-2 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 active:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {loadingMore ? "読み込み中..." : "もっと見る"}
              </button>
            )}
          </div>

        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-9 h-9 text-orange-300" />
            </div>
            <p className="text-base font-bold text-gray-700 mb-1">見つかりませんでした</p>
            <p className="text-sm text-gray-400 mb-6">条件を変えて再検索してみてください</p>
            <button
              onClick={() => router.push("/search")}
              className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold text-sm active:bg-orange-600 transition-colors shadow-md shadow-orange-200"
            >
              条件を変える
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-lg mx-auto px-4 pt-20 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-28 bg-white rounded-2xl animate-pulse shadow-sm" />
          ))}
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
