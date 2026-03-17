"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

// ─── Dual Range Slider ──────────────────────────────────────────────────────

function DualRangeSlider({
  min, max, step,
  valueMin, valueMax,
  onChange,
  unit,
  formatValue,
}: {
  min: number; max: number; step: number;
  valueMin: number; valueMax: number;
  onChange: (min: number, max: number) => void;
  unit: string;
  formatValue?: (v: number) => string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<"min" | "max" | null>(null);
  const fmt = formatValue ?? ((v: number) => `${v}`);

  const clamp = (v: number) => Math.round(Math.max(min, Math.min(max, v)) / step) * step;

  const getValueFromX = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const { left, width } = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - left) / width));
    return clamp(min + pct * (max - min));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max, step]);

  const onPointerDown = (handle: "min" | "max") => (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = handle;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const val = getValueFromX(e.clientX);
    if (dragging.current === "min") {
      onChange(Math.min(val, valueMax - step), valueMax);
    } else {
      onChange(valueMin, Math.max(val, valueMin + step));
    }
  };

  const onPointerUp = () => { dragging.current = null; };

  const minPct = ((valueMin - min) / (max - min)) * 100;
  const maxPct = ((valueMax - min) / (max - min)) * 100;
  const isDefault = valueMin === min && valueMax === max;

  return (
    <div>
      {/* Value label */}
      <div className="flex justify-end mb-3">
        <span className={`text-sm font-bold px-3 py-1 rounded-full ${isDefault ? "bg-gray-100 text-gray-400" : "bg-orange-100 text-orange-600"}`}>
          {isDefault ? `指定なし` : `${fmt(valueMin)}${unit} 〜 ${fmt(valueMax)}${unit}`}
        </span>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-10 flex items-center cursor-pointer select-none"
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Background track */}
        <div className="absolute left-0 right-0 h-1.5 bg-gray-200 rounded-full" />
        {/* Active fill */}
        <div
          className="absolute h-1.5 bg-orange-400 rounded-full"
          style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }}
        />
        {/* Min thumb */}
        <div
          className="absolute w-6 h-6 bg-white border-2 border-orange-500 rounded-full shadow-md cursor-grab active:cursor-grabbing active:scale-110 transition-transform z-10"
          style={{ left: `calc(${minPct}% - 12px)` }}
          onPointerDown={onPointerDown("min")}
        />
        {/* Max thumb */}
        <div
          className="absolute w-6 h-6 bg-orange-500 rounded-full shadow-md cursor-grab active:cursor-grabbing active:scale-110 transition-transform z-10"
          style={{ left: `calc(${maxPct}% - 12px)` }}
          onPointerDown={onPointerDown("max")}
        />
        {/* Min tick labels */}
        <div className="absolute left-0 top-8 text-xs text-gray-400">{fmt(min)}{unit}</div>
        <div className="absolute right-0 top-8 text-xs text-gray-400">{fmt(max)}{unit}</div>
      </div>
      <div className="h-5" />
    </div>
  );
}

// ─── Constants ──────────────────────────────────────────────────────────────

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

const SORT_OPTIONS = [
  { label: "おすすめ順", value: "" },
  { label: "カロリー低い順", value: "calorie_asc" },
  { label: "タンパク質多い順", value: "protein_desc" },
  { label: "価格安い順", value: "price_asc" },
];

const CAL_MIN = 0; const CAL_MAX = 1500; const CAL_STEP = 50;
const PRO_MIN = 0; const PRO_MAX = 60;  const PRO_STEP = 1;
const FAT_MIN = 0; const FAT_MAX = 80;  const FAT_STEP = 1;
const PRC_MIN = 0; const PRC_MAX = 2000; const PRC_STEP = 50;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SearchPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [storeType, setStoreType] = useState("");
  const [sort, setSort] = useState("");

  // Range states [min, max]
  const [calorieRange, setCalorieRange] = useState([CAL_MIN, CAL_MAX]);
  const [proteinRange, setProteinRange] = useState([PRO_MIN, PRO_MAX]);
  const [fatRange, setFatRange] = useState([FAT_MIN, FAT_MAX]);
  const [priceRange, setPriceRange] = useState([PRC_MIN, PRC_MAX]);

  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => {
      if (!data.user) router.replace("/login");
    });
  }, [router]);

  const isDefault =
    calorieRange[0] === CAL_MIN && calorieRange[1] === CAL_MAX &&
    proteinRange[0] === PRO_MIN && proteinRange[1] === PRO_MAX &&
    fatRange[0] === FAT_MIN && fatRange[1] === FAT_MAX &&
    priceRange[0] === PRC_MIN && priceRange[1] === PRC_MAX &&
    !category && !storeType;

  const resetAll = () => {
    setKeyword(""); setCategory(""); setStoreType(""); setSort("");
    setCalorieRange([CAL_MIN, CAL_MAX]);
    setProteinRange([PRO_MIN, PRO_MAX]);
    setFatRange([FAT_MIN, FAT_MAX]);
    setPriceRange([PRC_MIN, PRC_MAX]);
  };

  const handleSearch = () => {
    const p = new URLSearchParams();
    if (keyword.trim()) p.set("q", keyword.trim());
    if (category) p.set("category", category);
    if (storeType) p.set("source_type", storeType);
    if (calorieRange[0] > CAL_MIN) p.set("calorie_min", String(calorieRange[0]));
    if (calorieRange[1] < CAL_MAX) p.set("calorie_max", String(calorieRange[1]));
    if (proteinRange[0] > PRO_MIN) p.set("protein_min", String(proteinRange[0]));
    if (proteinRange[1] < PRO_MAX) p.set("protein_max", String(proteinRange[1]));
    if (fatRange[0] > FAT_MIN) p.set("fat_min", String(fatRange[0]));
    if (fatRange[1] < FAT_MAX) p.set("fat_max", String(fatRange[1]));
    if (priceRange[0] > PRC_MIN) p.set("price_min", String(priceRange[0]));
    if (priceRange[1] < PRC_MAX) p.set("price_max", String(priceRange[1]));
    if (sort) p.set("sort", sort);
    router.push(`/search/results?${p.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      <div className="max-w-lg mx-auto">

        {/* Combo Banner */}
        <Link href="/combo">
          <div className="mx-4 mt-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 shadow-md active:scale-[0.98] transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-base">🧮 組み合わせ提案</p>
                <p className="text-orange-100 text-xs mt-0.5">残りカロリーに合うセットを自動提案</p>
              </div>
              <span className="text-white text-xl">→</span>
            </div>
          </div>
        </Link>

        {/* Header */}
        <div className="bg-white px-4 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">🧭 たべなび</h1>
            {!isDefault && (
              <button onClick={resetAll} className="text-sm text-orange-500 font-medium">
                リセット
              </button>
            )}
          </div>
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
                      : "bg-gray-100 text-gray-700"
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
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* カロリー */}
          <div className="px-4 py-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">🔥 カロリー</p>
            <DualRangeSlider
              min={CAL_MIN} max={CAL_MAX} step={CAL_STEP}
              valueMin={calorieRange[0]} valueMax={calorieRange[1]}
              onChange={(a, b) => setCalorieRange([a, b])}
              unit="kcal"
            />
          </div>

          {/* タンパク質 */}
          <div className="px-4 py-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">💪 タンパク質</p>
            <DualRangeSlider
              min={PRO_MIN} max={PRO_MAX} step={PRO_STEP}
              valueMin={proteinRange[0]} valueMax={proteinRange[1]}
              onChange={(a, b) => setProteinRange([a, b])}
              unit="g"
            />
          </div>

          {/* 脂質 */}
          <div className="px-4 py-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">🧈 脂質</p>
            <DualRangeSlider
              min={FAT_MIN} max={FAT_MAX} step={FAT_STEP}
              valueMin={fatRange[0]} valueMax={fatRange[1]}
              onChange={(a, b) => setFatRange([a, b])}
              unit="g"
            />
          </div>

          {/* 価格 */}
          <div className="px-4 py-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">💰 価格</p>
            <DualRangeSlider
              min={PRC_MIN} max={PRC_MAX} step={PRC_STEP}
              valueMin={priceRange[0]} valueMax={priceRange[1]}
              onChange={(a, b) => setPriceRange([a, b])}
              unit="円"
            />
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
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky search button */}
      <div className="fixed bottom-20 left-0 right-0 z-10 px-4">
        <div className="max-w-lg mx-auto">
          <button
            onClick={handleSearch}
            className="w-full bg-orange-500 active:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 transition-colors text-base"
          >
            🔍 この条件で検索する
          </button>
        </div>
      </div>
    </div>
  );
}
