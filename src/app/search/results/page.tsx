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
  chain_restaurants: { name: string; emoji: string } | null;
}

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  // Current filters from URL
  const searchQ = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sourceType = searchParams.get("source_type") || "";
  const calorieMax = Number(searchParams.get("calorie_max")) || 0;
  const proteinMin = Number(searchParams.get("protein_min")) || 0;
  const fatMax = Number(searchParams.get("fat_max")) || 0;
  const priceMax = Number(searchParams.get("price_max")) || 0;
  const sort = searchParams.get("sort") || "recommended";

  // Local filter state (for filter panel before applying)
  const [filterCategory, setFilterCategory] = useState(category);
  const [filterSourceType, setFilterSourceType] = useState(sourceType);
  const [filterCalorieMax, setFilterCalorieMax] = useState(calorieMax);
  const [filterProteinMin, setFilterProteinMin] = useState(proteinMin);
  const [filterFatMax, setFilterFatMax] = useState(fatMax);
  const [filterPriceMax, setFilterPriceMax] = useState(priceMax);

  // Sync local filter state when URL params change
  useEffect(() => {
    setFilterCategory(category);
    setFilterSourceType(sourceType);
    setFilterCalorieMax(calorieMax);
    setFilterProteinMin(proteinMin);
    setFilterFatMax(fatMax);
    setFilterPriceMax(priceMax);
  }, [category, sourceType, calorieMax, proteinMin, fatMax, priceMax]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();

    let query = supabase
      .from("menu_items")
      .select("*, chain_restaurants(name, emoji)");

    if (searchQ) query = query.ilike("name", `%${searchQ}%`);
    if (category) query = query.eq("category", category);
    if (sourceType) query = query.eq("source_type", sourceType);
    if (calorieMax > 0) query = query.lte("calories", calorieMax);
    if (proteinMin > 0) query = query.gte("protein", proteinMin);
    if (fatMax > 0) query = query.lte("fat", fatMax);
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
  }, [searchQ, category, sourceType, calorieMax, proteinMin, fatMax, priceMax, sort]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
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
    if (filterCalorieMax > 0) params.set("calorie_max", String(filterCalorieMax));
    if (filterProteinMin > 0) params.set("protein_min", String(filterProteinMin));
    if (filterFatMax > 0) params.set("fat_max", String(filterFatMax));
    if (filterPriceMax > 0) params.set("price_max", String(filterPriceMax));
    if (sort !== "recommended") params.set("sort", sort);
    router.push(`/search/results?${params.toString()}`);
    setShowFilter(false);
  };

  const resetFilters = () => {
    setFilterCategory("");
    setFilterSourceType("");
    setFilterCalorieMax(0);
    setFilterProteinMin(0);
    setFilterFatMax(0);
    setFilterPriceMax(0);
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
              onClick={() => setShowFilter(true)}
              className="shrink-0 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-600 active:bg-gray-200 transition-colors"
            >
              絞り込み
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
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <span>{item.chain_restaurants?.emoji || "🍽"}</span>
                        <span className="truncate">
                          {item.chain_restaurants?.name || ""}
                        </span>
                      </p>
                      <p className="text-base font-bold text-gray-900 mt-1 line-clamp-2">
                        {item.name}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs">
                        {item.calories != null && (
                          <span className="text-orange-500 font-medium">
                            🔥 {item.calories}kcal
                          </span>
                        )}
                        {item.protein != null && (
                          <span className="text-blue-500 font-medium">
                            💪 {item.protein}g
                          </span>
                        )}
                        {item.fat != null && (
                          <span className="text-yellow-500 font-medium">
                            💧 {item.fat}g
                          </span>
                        )}
                        {item.carbs != null && (
                          <span className="text-green-500 font-medium">
                            🌾 {item.carbs}g
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-3">
                      {item.price != null && (
                        <span className="text-sm font-bold text-gray-700">
                          ¥{item.price}
                        </span>
                      )}
                      <button className="text-gray-300 text-xl active:text-red-400 transition-colors">
                        ♡
                      </button>
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

        {/* Filter Panel (slide up) */}
        {showFilter && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowFilter(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto animate-slide-up">
              <div className="max-w-lg mx-auto p-5">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-gray-900">
                    絞り込み
                  </h2>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="text-gray-400 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Category */}
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    カテゴリー
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() =>
                          setFilterCategory(
                            filterCategory === cat.value ? "" : cat.value
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          filterCategory === cat.value
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Store Type */}
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    お店のタイプ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {STORE_TYPES.map((st) => (
                      <button
                        key={st.value}
                        onClick={() => setFilterSourceType(st.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          filterSourceType === st.value
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calories */}
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    カロリー
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CALORIE_PRESETS.map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setFilterCalorieMax(p.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          filterCalorieMax === p.value
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Protein */}
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    タンパク質
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {PROTEIN_PRESETS.map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setFilterProteinMin(p.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          filterProteinMin === p.value
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-700 mb-2">
                    価格
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_PRESETS.map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setFilterPriceMax(p.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          filterPriceMax === p.value
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-500 underline"
                  >
                    リセット
                  </button>
                  <button
                    onClick={applyFilters}
                    className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-xl active:bg-orange-600 transition-colors"
                  >
                    絞り込む
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
