"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const STORE_TYPES = [
  { key: "all", label: "すべて" },
  { key: "chain_restaurant", label: "🍽 外食チェーン" },
  { key: "convenience_store", label: "🏪 コンビニ" },
  { key: "supermarket", label: "🛒 スーパー" },
] as const;

const CATEGORIES = [
  { emoji: "🍱", label: "和食", value: "和食" },
  { emoji: "🍝", label: "洋食", value: "洋食" },
  { emoji: "🍜", label: "中華・アジア", value: "中華" },
  { emoji: "🍜", label: "麺類", value: "麺類" },
  { emoji: "🍚", label: "丼もの", value: "丼もの" },
  { emoji: "🥪", label: "パン・サンドイッチ", value: "パン・サンドイッチ" },
  { emoji: "🍰", label: "スイーツ", value: "スイーツ" },
  { emoji: "🥗", label: "サラダ・ヘルシー", value: "サラダ" },
  { emoji: "🍗", label: "揚げ物", value: "揚げ物" },
  { emoji: "🍙", label: "おにぎり・軽食", value: "おにぎり" },
  { emoji: "☕", label: "ドリンク", value: "ドリンク" },
  { emoji: "🍱", label: "定食・セット", value: "定食・セット" },
] as const;

const QUICK_FILTERS = [
  { label: "💪 高タンパク 20g+", params: "protein_min=20" },
  { label: "🔥 低カロリー 500kcal以下", params: "calorie_max=500" },
  { label: "🥗 低脂質 15g以下", params: "fat_max=15" },
  { label: "💰 500円以内", params: "price_max=500" },
] as const;

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

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStoreType, setActiveStoreType] = useState("all");
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      fetchFeaturedItems();
    });
  }, [router]);

  const fetchFeaturedItems = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("menu_items")
      .select("*, chain_restaurants(name, emoji)")
      .order("created_at", { ascending: false })
      .limit(8);
    setFeaturedItems((data as MenuItem[]) || []);
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/results?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams({ category });
    if (activeStoreType !== "all") {
      params.set("source_type", activeStoreType);
    }
    router.push(`/search/results?${params.toString()}`);
  };

  const handleQuickFilter = (filterParams: string) => {
    const params = new URLSearchParams(filterParams);
    if (activeStoreType !== "all") {
      params.set("source_type", activeStoreType);
    }
    router.push(`/search/results?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="px-4 pt-6 pb-3">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            🧭 たべなび
          </h1>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                🔍
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="チェーン店・コンビニから探す"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors"
              />
            </div>
          </form>
        </div>

        {/* Store Type Tabs */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100">
          <div className="px-4 flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {STORE_TYPES.map((type) => (
              <button
                key={type.key}
                onClick={() => setActiveStoreType(type.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeStoreType === type.key
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 active:bg-gray-200"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="px-4 pt-5 pb-3">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            カテゴリーから探す
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className="flex flex-col items-center gap-1.5 py-4 px-2 bg-gray-50 rounded-xl active:bg-orange-50 active:scale-95 transition-all"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="text-xs font-medium text-gray-700">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Nutrition Filters */}
        <div className="px-4 pt-4 pb-3">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            栄養で絞り込む
          </h2>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {QUICK_FILTERS.map((filter) => (
              <button
                key={filter.params}
                onClick={() => handleQuickFilter(filter.params)}
                className="shrink-0 px-4 py-2.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium active:bg-orange-100 transition-colors"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Items */}
        <div className="px-4 pt-4 pb-32">
          <h2 className="text-base font-bold text-gray-900 mb-3">
            今週の注目
          </h2>
          {loading ? (
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="shrink-0 w-44 h-32 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : featuredItems.length > 0 ? (
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {featuredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    item.category
                      ? handleCategoryClick(item.category)
                      : undefined
                  }
                  className="shrink-0 w-44 bg-gray-50 rounded-xl p-3 text-left active:bg-orange-50 transition-colors"
                >
                  <div className="text-2xl mb-1">
                    {item.chain_restaurants?.emoji || "🍽"}
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {item.chain_restaurants?.name || ""}
                  </p>
                  <p className="text-sm font-medium text-gray-900 line-clamp-2 mt-0.5">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    {item.calories != null && (
                      <span className="text-orange-500 font-medium">
                        🔥 {item.calories}kcal
                      </span>
                    )}
                    {item.price != null && (
                      <span>¥{item.price}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-8">
              まだメニューが登録されていません
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
