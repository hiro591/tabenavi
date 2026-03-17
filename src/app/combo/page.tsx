"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Calculator, Flame, Dumbbell, Store, Package, ChevronLeft } from "lucide-react";
import type { ChainRestaurant } from "@/types/database";

// ─── Types ──────────────────────────────────────────────────────────────────

type ComboMenuItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  price: number | null;
  category: string | null;
  source_type: string | null;
  chain_restaurant_id: string;
};

type Combo = {
  items: ComboMenuItem[];
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
  totalPrice: number;
};

type StoreGroup = {
  label: string;
  stores: ChainRestaurant[];
};

type SortKey = "protein" | "calories" | "price";

// ─── Combo Generation ───────────────────────────────────────────────────────

function generateCombos(
  items: ComboMenuItem[],
  calorieTarget: number,
  proteinTarget: number
): Combo[] {
  const combos: Combo[] = [];

  const makeTotals = (selected: ComboMenuItem[]): Combo => ({
    items: selected,
    totalCalories: selected.reduce((s, i) => s + (i.calories || 0), 0),
    totalProtein: selected.reduce((s, i) => s + (i.protein || 0), 0),
    totalFat: selected.reduce((s, i) => s + (i.fat || 0), 0),
    totalCarbs: selected.reduce((s, i) => s + (i.carbs || 0), 0),
    totalPrice: selected.reduce((s, i) => s + (i.price || 0), 0),
  });

  // 2-item combos
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const combo = makeTotals([items[i], items[j]]);
      if (combo.totalCalories <= calorieTarget && combo.totalProtein >= proteinTarget) {
        combos.push(combo);
      }
    }
  }

  // 3-item combos (limit to top 20 items by protein to avoid combinatorial explosion)
  const topItems = [...items]
    .sort((a, b) => (b.protein || 0) - (a.protein || 0))
    .slice(0, 20);

  for (let i = 0; i < topItems.length; i++) {
    for (let j = i + 1; j < topItems.length; j++) {
      for (let k = j + 1; k < topItems.length; k++) {
        const combo = makeTotals([topItems[i], topItems[j], topItems[k]]);
        if (combo.totalCalories <= calorieTarget && combo.totalProtein >= proteinTarget) {
          combos.push(combo);
        }
      }
    }
  }

  // Deduplicate by item ID sets
  const seen = new Set<string>();
  const unique = combos.filter((c) => {
    const key = c.items
      .map((i) => i.id)
      .sort()
      .join(",");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort: protein DESC, then calories ASC
  return unique
    .sort((a, b) => b.totalProtein - a.totalProtein || a.totalCalories - b.totalCalories)
    .slice(0, 15);
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ComboPage() {
  const supabase = createClient();
  const router = useRouter();

  // Auth
  const [authChecked, setAuthChecked] = useState(false);

  // Settings
  const [calorieTarget, setCalorieTarget] = useState(600);
  const [proteinTarget, setProteinTarget] = useState(20);
  const [selectedStoreId, setSelectedStoreId] = useState<string | null>(null);

  // Store data
  const [storeGroups, setStoreGroups] = useState<StoreGroup[]>([]);
  const [allStores, setAllStores] = useState<ChainRestaurant[]>([]);

  // Results
  const [combos, setCombos] = useState<Combo[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("protein");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Init: auth check + fetch stores + load user's remaining calories
  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/login");
        return;
      }
      setAuthChecked(true);

      // Fetch stores
      const { data: stores } = await supabase
        .from("chain_restaurants")
        .select("*")
        .order("name");

      if (stores && stores.length > 0) {
        setAllStores(stores);

        // Group by source_type using menu_items
        const { data: sourceData } = await supabase
          .from("menu_items")
          .select("chain_restaurant_id, source_type")
          .not("source_type", "is", null);

        const storeSourceMap = new Map<string, string>();
        if (sourceData) {
          for (const row of sourceData) {
            if (row.chain_restaurant_id && row.source_type) {
              storeSourceMap.set(row.chain_restaurant_id, row.source_type);
            }
          }
        }

        const convenienceStores: ChainRestaurant[] = [];
        const chainRestaurants: ChainRestaurant[] = [];
        const otherStores: ChainRestaurant[] = [];

        for (const store of stores) {
          const sourceType = storeSourceMap.get(store.id);
          if (sourceType === "convenience_store") {
            convenienceStores.push(store);
          } else if (sourceType === "chain_restaurant") {
            chainRestaurants.push(store);
          } else {
            otherStores.push(store);
          }
        }

        const groups: StoreGroup[] = [];
        if (convenienceStores.length > 0) {
          groups.push({ label: "コンビニ", stores: convenienceStores });
        }
        if (chainRestaurants.length > 0) {
          groups.push({ label: "チェーン店", stores: chainRestaurants });
        }
        if (otherStores.length > 0) {
          groups.push({ label: "その他", stores: otherStores });
        }

        setStoreGroups(groups);

        // Default: first convenience store, or first store
        const defaultStore = convenienceStores[0] ?? stores[0];
        setSelectedStoreId(defaultStore.id);
      }

      // Try to load user's remaining calories
      try {
        const today = new Date().toISOString().split("T")[0];
        const [profileRes, logsRes] = await Promise.all([
          supabase.from("profiles").select("target_calories").eq("id", user.id).single(),
          supabase
            .from("food_logs")
            .select("calories")
            .eq("user_id", user.id)
            .gte("logged_at", `${today}T00:00:00`)
            .lte("logged_at", `${today}T23:59:59`),
        ]);

        const target = profileRes.data?.target_calories ?? 2000;
        const consumed =
          logsRes.data?.reduce((sum, l) => sum + (l.calories || 0), 0) ?? 0;
        const remaining = Math.max(0, target - consumed);
        if (remaining > 0) {
          setCalorieTarget(remaining);
        }
      } catch {
        // Default 600 is fine
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Search handler
  const handleSearch = useCallback(async () => {
    if (!selectedStoreId) return;
    setLoading(true);
    setSearched(true);
    setCombos([]);

    const { data: items } = await supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id")
      .eq("chain_restaurant_id", selectedStoreId)
      .not("calories", "is", null)
      .order("protein", { ascending: false });

    if (items && items.length > 0) {
      const results = generateCombos(
        items as ComboMenuItem[],
        calorieTarget,
        proteinTarget
      );
      setCombos(results);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStoreId, calorieTarget, proteinTarget]);

  // Sort combos
  const sortedCombos = [...combos].sort((a, b) => {
    if (sortKey === "protein") return b.totalProtein - a.totalProtein || a.totalCalories - b.totalCalories;
    if (sortKey === "calories") return a.totalCalories - b.totalCalories;
    return a.totalPrice - b.totalPrice;
  });

  // Rank badge
  const getRankBadge = (index: number) => {
    if (index === 0) return { rank: "1st", bg: "bg-yellow-50 border-yellow-300" };
    if (index === 1) return { rank: "2nd", bg: "bg-gray-50 border-gray-300" };
    if (index === 2) return { rank: "3rd", bg: "bg-orange-50 border-orange-300" };
    return null;
  };

  // Selected store name
  const selectedStore = allStores.find((s) => s.id === selectedStoreId);

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-lg mx-auto px-4 pt-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-40 bg-gray-200 rounded-2xl animate-pulse mb-4" />
          <div className="h-40 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="bg-white px-4 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-1">
            <Link
              href="/search"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-orange-500" />
              <h1 className="text-xl font-bold text-gray-900">
                組み合わせ提案
              </h1>
              <p className="text-xs text-gray-400">
                目標に合うセットを自動で提案
              </p>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-white mt-2 divide-y divide-gray-100">
          {/* Calorie Target */}
          <div className="px-4 py-4">
            <div className="flex items-center gap-1.5 mb-3">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">残りカロリー</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <button
                onClick={() => setCalorieTarget(Math.max(100, calorieTarget - 50))}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold text-lg flex items-center justify-center active:bg-gray-200 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={calorieTarget}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  if (!isNaN(v) && v > 0) setCalorieTarget(v);
                }}
                className="w-28 text-center text-3xl font-bold text-gray-900 bg-transparent focus:outline-none"
              />
              <span className="text-sm text-gray-400 font-medium">kcal</span>
              <button
                onClick={() => setCalorieTarget(calorieTarget + 50)}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold text-lg flex items-center justify-center active:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              {[400, 500, 600, 700, 800].map((v) => (
                <button
                  key={v}
                  onClick={() => setCalorieTarget(v)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    calorieTarget === v
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Protein Target */}
          <div className="px-4 py-4">
            <div className="flex items-center gap-1.5 mb-3">
              <Dumbbell className="w-3.5 h-3.5 text-blue-500" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">タンパク質 最低</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <button
                onClick={() => setProteinTarget(Math.max(0, proteinTarget - 5))}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold text-lg flex items-center justify-center active:bg-gray-200 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                value={proteinTarget}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  if (!isNaN(v) && v >= 0) setProteinTarget(v);
                }}
                className="w-20 text-center text-3xl font-bold text-gray-900 bg-transparent focus:outline-none"
              />
              <span className="text-sm text-gray-400 font-medium">g</span>
              <button
                onClick={() => setProteinTarget(proteinTarget + 5)}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 font-bold text-lg flex items-center justify-center active:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
            <div className="flex gap-2 justify-center">
              {[15, 20, 25, 30].map((v) => (
                <button
                  key={v}
                  onClick={() => setProteinTarget(v)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    proteinTarget === v
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {v}g
                </button>
              ))}
            </div>
          </div>

          {/* Store Selection */}
          <div className="px-4 py-4">
            <div className="flex items-center gap-1.5 mb-3">
              <Store className="w-3.5 h-3.5 text-gray-500" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">お店を選ぶ</p>
            </div>
            {storeGroups.map((group) => (
              <div key={group.label} className="mb-3">
                <p className="text-[10px] font-semibold text-gray-400 mb-2">
                  {group.label}
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {group.stores.map((store) => (
                    <button
                      key={store.id}
                      onClick={() => setSelectedStoreId(store.id)}
                      className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedStoreId === store.id
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {store.emoji && <span>{store.emoji}</span>}
                      <span>{store.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <div className="px-4 mt-4">
          <button
            onClick={handleSearch}
            disabled={!selectedStoreId || loading}
            className="w-full bg-orange-500 active:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 transition-colors text-base"
          >
            {loading ? "計算中..." : "この条件で提案する"}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="px-4 mt-6 text-center">
            <div className="w-10 h-10 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-500">
              最適な組み合わせを計算中...
            </p>
          </div>
        )}

        {/* Results */}
        {searched && !loading && (
          <div className="px-4 mt-6">
            {sortedCombos.length > 0 ? (
              <>
                {/* Results header */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-gray-700">
                    {sortedCombos.length}件の組み合わせが見つかりました
                  </p>
                  {selectedStore && (
                    <span className="text-xs text-gray-400">
                      {selectedStore.name}
                    </span>
                  )}
                </div>

                {/* Sort tabs */}
                <div className="flex gap-2 mb-4">
                  {(
                    [
                      { key: "protein", label: "タンパク質多い順" },
                      { key: "calories", label: "カロリー少ない順" },
                      { key: "price", label: "価格安い順" },
                    ] as { key: SortKey; label: string }[]
                  ).map((s) => (
                    <button
                      key={s.key}
                      onClick={() => setSortKey(s.key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        sortKey === s.key
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Combo Cards */}
                <div className="space-y-4">
                  {sortedCombos.map((combo, index) => {
                    const badge = getRankBadge(index);
                    const caloriePercent = Math.min(
                      100,
                      Math.round((combo.totalCalories / calorieTarget) * 100)
                    );
                    const remainingCal = calorieTarget - combo.totalCalories;

                    return (
                      <div
                        key={index}
                        className={`bg-white rounded-2xl shadow-sm overflow-hidden ${
                          badge ? `border ${badge.bg}` : ""
                        }`}
                      >
                        {/* Card Header */}
                        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-700">
                            {badge ? `${badge.rank} ` : ""}組み合わせ #{index + 1}
                          </span>
                          <span className="text-xs text-gray-400">
                            {combo.items.length}品
                          </span>
                        </div>

                        {/* Items */}
                        <div className="px-4 divide-y divide-gray-50">
                          {combo.items.map((item) => (
                            <Link
                              key={item.id}
                              href={`/items/${item.id}`}
                              className="flex items-center justify-between py-2.5 hover:bg-gray-50 -mx-4 px-4 transition-colors"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <Package className="w-4 h-4 text-gray-400 shrink-0" />
                                <p className="text-sm font-medium text-gray-800 truncate">
                                  {item.name}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 ml-2">
                                <span className="text-xs text-gray-500">
                                  {item.calories}kcal
                                </span>
                                <span className="text-xs text-blue-500 font-medium">
                                  P{item.protein}g
                                </span>
                                {item.price != null && (
                                  <span className="text-xs text-gray-400">
                                    &yen;{item.price}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Totals */}
                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-gray-800">
                              合計: {combo.totalCalories}kcal
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-blue-600">
                                P{combo.totalProtein}g
                              </span>
                              {combo.totalPrice > 0 && (
                                <span className="text-sm font-medium text-gray-500">
                                  &yen;{combo.totalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Calorie bar */}
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${
                                  caloriePercent > 90
                                    ? "bg-red-400"
                                    : caloriePercent > 70
                                      ? "bg-orange-400"
                                      : "bg-green-400"
                                }`}
                                style={{ width: `${caloriePercent}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 shrink-0">
                              残り{remainingCal}kcal
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <p className="text-4xl mb-4">🤔</p>
                <p className="text-sm font-bold text-gray-700 mb-2">
                  条件に合う組み合わせが見つかりませんでした
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  条件を変えてみてください。
                  <br />
                  カロリー上限を増やすか、タンパク質目標を下げると見つかりやすくなります。
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
