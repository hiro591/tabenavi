"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  { emoji: "🍱", label: "和食", value: "和食" },
  { emoji: "🍝", label: "洋食", value: "洋食" },
  { emoji: "🥢", label: "中華・アジア", value: "中華・アジア" },
  { emoji: "🍜", label: "麺類", value: "麺類" },
  { emoji: "🍚", label: "丼もの", value: "丼もの" },
  { emoji: "🥪", label: "パン・サンド", value: "パン・サンドイッチ" },
  { emoji: "🍰", label: "スイーツ", value: "スイーツ" },
  { emoji: "🥗", label: "サラダ・ヘルシー", value: "サラダ・ヘルシー" },
  { emoji: "🍗", label: "揚げ物", value: "揚げ物" },
  { emoji: "🍙", label: "おにぎり・軽食", value: "おにぎり・軽食" },
  { emoji: "☕", label: "ドリンク", value: "ドリンク" },
  { emoji: "🍱", label: "定食・セット", value: "定食・セット" },
];

const STORE_TYPES = [
  { label: "すべて", value: "" },
  { label: "🍽 外食チェーン", value: "chain_restaurant" },
  { label: "🏪 コンビニ", value: "convenience_store" },
  { label: "🛒 スーパー", value: "supermarket" },
];

const CALORIE_OPTIONS = [
  { label: "〜300kcal", value: "300" },
  { label: "〜500kcal", value: "500" },
  { label: "〜700kcal", value: "700" },
  { label: "〜1000kcal", value: "1000" },
  { label: "上限なし", value: "" },
];

const PROTEIN_OPTIONS = [
  { label: "10g以上", value: "10" },
  { label: "20g以上", value: "20" },
  { label: "30g以上", value: "30" },
  { label: "指定なし", value: "" },
];

const PRICE_OPTIONS = [
  { label: "〜300円", value: "300" },
  { label: "〜500円", value: "500" },
  { label: "〜800円", value: "800" },
  { label: "〜1000円", value: "1000" },
  { label: "上限なし", value: "" },
];

const SORT_OPTIONS = [
  { label: "おすすめ順", value: "" },
  { label: "カロリー低い順", value: "calorie_asc" },
  { label: "タンパク質多い順", value: "protein_desc" },
  { label: "価格安い順", value: "price_asc" },
];

export default function SearchPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [storeType, setStoreType] = useState("");
  const [calorieMax, setCalorieMax] = useState("");
  const [proteinMin, setProteinMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.replace("/login");
    });
  }, [router]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (category) params.set("category", category);
    if (storeType) params.set("source_type", storeType);
    if (calorieMax) params.set("calorie_max", calorieMax);
    if (proteinMin) params.set("protein_min", proteinMin);
    if (priceMax) params.set("price_max", priceMax);
    if (sort) params.set("sort", sort);
    router.push(`/search/results?${params.toString()}`);
  };

  const hasFilters = category || storeType || calorieMax || proteinMin || priceMax;

  const resetAll = () => {
    setKeyword("");
    setCategory("");
    setStoreType("");
    setCalorieMax("");
    setProteinMin("");
    setPriceMax("");
    setSort("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="bg-white px-4 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">🧭 たべなび</h1>
            {hasFilters && (
              <button onClick={resetAll} className="text-sm text-orange-500 font-medium">
                リセット
              </button>
            )}
          </div>

          {/* Search bar */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="メニュー名・商品名で検索"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white mt-2 divide-y divide-gray-100">

          {/* カテゴリー */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">カテゴリー</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(category === c.value ? "" : c.value)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === c.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* お店のタイプ */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">お店のタイプ</p>
            <div className="flex flex-wrap gap-2">
              {STORE_TYPES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStoreType(s.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    storeType === s.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* カロリー */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">🔥 カロリー上限</p>
            <div className="flex flex-wrap gap-2">
              {CALORIE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setCalorieMax(calorieMax === o.value ? "" : o.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    calorieMax === o.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* タンパク質 */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">💪 タンパク質（最低量）</p>
            <div className="flex flex-wrap gap-2">
              {PROTEIN_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setProteinMin(proteinMin === o.value ? "" : o.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    proteinMin === o.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* 価格 */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">💰 価格上限</p>
            <div className="flex flex-wrap gap-2">
              {PRICE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setPriceMax(priceMax === o.value ? "" : o.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    priceMax === o.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* 並び順 */}
          <div className="px-4 py-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">並び順</p>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setSort(o.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    sort === o.value
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-700 active:bg-gray-200"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search button - sticky bottom */}
        <div className="fixed bottom-20 left-0 right-0 px-4 z-10 max-w-lg mx-auto">
          <button
            onClick={handleSearch}
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 transition-colors text-base"
          >
            🔍 この条件で検索する
          </button>
        </div>

        <div className="h-36" />
      </div>
    </div>
  );
}
