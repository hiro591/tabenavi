"use client";

import { Suspense } from "react";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  { label: "和食", value: "和食" },
  { label: "洋食", value: "洋食" },
  { label: "中華", value: "中華" },
  { label: "麺類", value: "麺類" },
  { label: "丼もの", value: "丼もの" },
  { label: "パン・サンドイッチ", value: "パン・サンドイッチ" },
  { label: "スイーツ", value: "スイーツ" },
  { label: "サラダ", value: "サラダ" },
  { label: "揚げ物", value: "揚げ物" },
  { label: "おにぎり", value: "おにぎり" },
  { label: "ドリンク", value: "ドリンク" },
  { label: "定食・セット", value: "定食・セット" },
];

const STORE_TYPES = [
  { label: "すべて", value: "" },
  { label: "外食チェーン", value: "chain_restaurant" },
  { label: "コンビニ", value: "convenience_store" },
  { label: "スーパー", value: "supermarket" },
];

const CALORIE_PRESETS = [
  { label: "〜300", value: 300 },
  { label: "〜500", value: 500 },
  { label: "〜700", value: 700 },
  { label: "〜1000", value: 1000 },
  { label: "制限なし", value: 0 },
];

const PROTEIN_PRESETS = [
  { label: "10g+", value: 10 },
  { label: "20g+", value: 20 },
  { label: "30g+", value: 30 },
  { label: "制限なし", value: 0 },
];

const PRICE_PRESETS = [
  { label: "〜300円", value: 300 },
  { label: "〜500円", value: 500 },
  { label: "〜1000円", value: 1000 },
  { label: "制限なし", value: 0 },
];

const SORT_OPTIONS = [
  { label: "おすすめ順", value: "recommended" },
  { label: "カロリー低い順", value: "calorie_asc" },
  { label: "タンパク質多い順", value: "protein_desc" },
  { label: "価格安い順", value: "price_asc" },
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

// ブランドカラーバッジ
function getStoreBadgeStyle(name: string | undefined, sourceType: string | null): string {
  const n = name ?? "";
  if (n.includes("セブン")) return "bg-green-100 text-green-700";
  if (n.includes("ローソン")) return "bg-blue-100 text-blue-700";
  if (n.includes("ファミリー") || n.includes("ファミマ")) return "bg-sky-100 text-sky-700";
  if (n.includes("マクドナルド")) return "bg-yellow-100 text-yellow-700";
  if (n.includes("すき家")) return "bg-orange-100 text-orange-700";
  if (n.includes("吉野家")) return "bg-red-100 text-red-700";
  if (n.includes("松屋")) return "bg-amber-100 text-amber-700";
  if (n.includes("スターバックス")) return "bg-green-100 text-green-800";
  if (sourceType === "convenience_store") return "bg-blue-50 text-blue-600";
  if (sourceType === "supermarket") return "bg-emerald-50 text-emerald-600";
  return "bg-orange-50 text-orange-600";
}

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  // Current filters from URL
  const searchQ = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sourceType = searchParams.get("source_type") || "";
  const calorieMin = Number(searchParams.get("calorie_min")) || 0;
  const calorieMax = Number(searchParams.get("calorie_max")) || 0;
  const proteinMin = Number(searchParams.get("protein_min")) || 0;
  const proteinMax = Number(searchParams.get("protein_max")) || 0;
  const fatMin = Number(searchParams.get("fat_min")) || 0;
  const fatMax = Number(searchParams.get("fat_max")) || 0;
  const priceMin = Number(searchParams.get("price_min")) || 0;
  const priceMax = Number(searchParams.get("price_max")) || 0;
  const sort = searchParams.get("sort") || "recommended";

  const [filterCategory, setFilterCategory] = useState(category);
  const [filterSourceType, setFilterSourceType] = useState(sourceType);

  useEffect(() => {
    setFilterCategory(category);
    setFilterSourceType(sourceType);
  }, [category, sourceType]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();

    let query = supabase
      .from("menu_items")
      .select("*, chain_restaurants(name, emoji)");

    if (searchQ) query = query.ilike("name", `%${searchQ}%`);
    if (category) query = query.eq("category", category);
    if (sourceType) query = query.eq("source_type", sourceType);
    if (calorieMin > 0) query = query.gte("calories", calorieMin);
    if (calorieMax > 0) query = query.lte("calories", calorieMax);
    if (proteinMin > 0) query = query.gte("protein", proteinMin);
    if (proteinMax > 0) query = query.lte("protein", proteinMax);
    if (fatMin > 0) query = query.gte("fat", fatMin);
    if (fatMax > 0) query = query.lte("fat", fatMax);
    if (priceMin > 0) query = query.gte("price", priceMin);
    if (priceMax > 0) query = query.lte("price", priceMax);

    if (sort === "calorie_asc") {
      query = query.order("calories", { ascending: true });
    } else if (sort === "protein_desc") {
      query = query.order("protein", { ascending: false });
    } else if (sort === "price_asc") {
      query = query.order("price", { ascending: true });
    } else {
      query = query.order("protein", { ascending: false });
    }

    const { data } = await query.limit(50);
    setItems((data as MenuItem[]) || []);
    setLoading(false);
  }, [searchQ, category, sourceType, calorieMin, calorieMax, proteinMin, proteinMax, fatMin, fatMax, priceMin, priceMax, sort]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      setUserId(data.user.id);
      try {
        const { data: favs } = await supabase
          .from("favorites")
          .select("menu_item_id")
          .eq("user_id", data.user.id);
        setFavoriteIds(new Set(favs?.map((f) => f.menu_item_id) || []));
      } catch {
        // favorites table may not exist yet
      }
      fetchItems();
    });
  }, [router, fetchItems]);

  const updateParams = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/search/results?${params.toString()}`);
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (searchQ) params.set("q", searchQ);
    if (filterCategory) params.set("category", filterCategory);
    if (filterSourceType) params.set("source_type", filterSourceType);
    if (sort !== "recommended") params.set("sort", sort);
    router.push(`/search/results?${params.toString()}`);
    setShowFilter(false);
  };

  const resetFilters = () => {
    setFilterCategory("");
    setFilterSourceType("");
  };

  const toggleFavorite = async (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    if (!userId) return;
    const supabase = createClient();
    const isFav = favoriteIds.has(itemId);
    if (isFav) {
      setFavoriteIds((prev) => {
        const s = new Set(prev);
        s.delete(itemId);
        return s;
      });
      await supabase
        .from("favorites")
        .delete()
        .eq("menu_item_id", itemId)
        .eq("user_id", userId);
    } else {
      setFavoriteIds((prev) => new Set([...prev, itemId]));
      await supabase
        .from("favorites")
        .insert({ user_id: userId, menu_item_id: itemId });
    }
  };

  const pageTitle = searchQ || category || "検索結果";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3">
            <button
              onClick={() => router.back()}
              className="text-gray-600 text-xl shrink-0"
            >
              ←
            </button>
            <h1 className="text-lg font-bold text-gray-900 truncate flex-1">
              {pageTitle}
            </h1>
            <button
              onClick={() => router.push("/search")}
              className="shrink-0 px-3 py-1.5 bg-orange-50 text-orange-500 rounded-lg text-sm font-medium active:bg-orange-100 transition-colors"
            >
              条件変更
            </button>
          </div>

          {/* Sort Bar */}
          <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateParams({ sort: opt.value === "recommended" ? "" : opt.value })}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  sort === opt.value || (sort === "recommended" && opt.value === "recommended")
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {!loading && (
          <div className="px-4 py-3">
            <p className="text-sm text-gray-500">
              {items.length}件見つかりました
            </p>
          </div>
        )}

        {/* Results */}
        <div className="px-4 pb-32">
          {loading ? (
            <div className="space-y-3 pt-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`/items/${item.id}`)}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm active:shadow-none active:scale-[0.99] transition-all cursor-pointer"
                >
                  <div className="flex">
                    {/* Photo placeholder */}
                    <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
                      {item.image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-4xl">{item.chain_restaurants?.emoji || "🍽"}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 p-3">
                      {/* Store badge */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${getStoreBadgeStyle(item.chain_restaurants?.name, item.source_type)}`}>
                          {item.chain_restaurants?.name || "その他"}
                        </span>
                        {item.source_type === "convenience_store" && (
                          <span className="text-xs text-gray-400">🏪</span>
                        )}
                        {item.source_type === "chain_restaurant" && (
                          <span className="text-xs text-gray-400">🍽</span>
                        )}
                      </div>

                      {/* Item name */}
                      <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                        {item.name}
                      </p>

                      {/* Nutrition row */}
                      <div className="flex items-center gap-2 mt-1.5 text-xs">
                        {item.calories != null && (
                          <span className="text-orange-500 font-semibold">{item.calories}kcal</span>
                        )}
                        {item.protein != null && (
                          <span className="text-blue-500">P {item.protein}g</span>
                        )}
                        {item.fat != null && (
                          <span className="text-yellow-600">F {item.fat}g</span>
                        )}
                        {item.price != null && (
                          <span className="ml-auto text-gray-700 font-bold">¥{item.price}</span>
                        )}
                        {item.chain_restaurants?.name && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.chain_restaurants.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 active:text-orange-500 transition-colors ml-1"
                            title="近くの店舗をGoogleマップで探す"
                          >
                            📍
                          </a>
                        )}
                        <button
                          onClick={(e) => toggleFavorite(e, item.id)}
                          className={`text-xl transition-colors ml-1 ${favoriteIds.has(item.id) ? "text-red-500" : "text-gray-300"}`}
                        >
                          {favoriteIds.has(item.id) ? "♥" : "♡"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">🍽</p>
              <p className="text-sm text-gray-500">
                条件に合うメニューが見つかりませんでした。
              </p>
              <p className="text-sm text-gray-400 mt-1">
                フィルターを変更してみてください。
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white">
          <div className="max-w-lg mx-auto px-4 pt-16">
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
