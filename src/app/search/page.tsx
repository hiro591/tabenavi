"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Store, Utensils, ShoppingCart, Dumbbell, Flame, Leaf, Zap, Tag } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// ─── DualRangeSlider ─────────────────────────────────────────────────────────

function DualRangeSlider({
  min, max, step, valueMin, valueMax, onChange, unit, formatValue,
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
    if (dragging.current === "min") onChange(Math.min(val, valueMax - step), valueMax);
    else onChange(valueMin, Math.max(val, valueMin + step));
  };
  const onPointerUp = () => { dragging.current = null; };

  const minPct = ((valueMin - min) / (max - min)) * 100;
  const maxPct = ((valueMax - min) / (max - min)) * 100;
  const isDefault = valueMin === min && valueMax === max;

  return (
    <div>
      <div className="flex justify-end mb-3">
        <span className={`text-sm font-bold px-3 py-1 rounded-full ${isDefault ? "bg-gray-100 text-gray-400" : "bg-orange-100 text-orange-600"}`}>
          {isDefault ? "指定なし" : `${fmt(valueMin)}${unit} 〜 ${fmt(valueMax)}${unit}`}
        </span>
      </div>
      <div ref={trackRef} className="relative h-10 flex items-center cursor-pointer select-none"
        onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
        <div className="absolute left-0 right-0 h-1.5 bg-gray-200 rounded-full" />
        <div className="absolute h-1.5 bg-orange-400 rounded-full"
          style={{ left: `${minPct}%`, width: `${maxPct - minPct}%` }} />
        <div className="absolute w-7 h-7 bg-white border-2 border-orange-500 rounded-full shadow-md cursor-grab active:scale-110 transition-transform z-10 touch-none"
          style={{ left: `calc(${minPct}% - 14px)` }} onPointerDown={onPointerDown("min")} />
        <div className="absolute w-7 h-7 bg-orange-500 rounded-full shadow-md cursor-grab active:scale-110 transition-transform z-10 touch-none"
          style={{ left: `calc(${maxPct}% - 14px)` }} onPointerDown={onPointerDown("max")} />
        <div className="absolute left-0 top-9 text-xs text-gray-400">{fmt(min)}{unit}</div>
        <div className="absolute right-0 top-9 text-xs text-gray-400">{fmt(max)}{unit}</div>
      </div>
      <div className="h-6" />
    </div>
  );
}

// ─── Constants ───────────────────────────────────────────────────────────────

const QUICK_FILTERS: { label: string; icon: React.ComponentType<{ className?: string }>; color: string; params: Record<string, string> }[] = [
  { label: "高タンパク", icon: Dumbbell, color: "text-blue-500",   params: { protein_min: "20" } },
  { label: "低カロリー", icon: Flame,    color: "text-orange-500", params: { calorie_max: "400" } },
  { label: "ダイエット", icon: Leaf,     color: "text-green-500",  params: { calorie_max: "500", fat_max: "15" } },
  { label: "筋トレ飯",  icon: Zap,      color: "text-amber-500",  params: { protein_min: "30" } },
  { label: "〜500円",   icon: Tag,      color: "text-purple-500", params: { price_max: "500" } },
  { label: "コンビニ",  icon: Store,    color: "text-sky-500",    params: { source_type: "convenience_store" } },
  { label: "外食",      icon: Utensils, color: "text-rose-500",   params: { source_type: "chain_restaurant" } },
];

const CATEGORIES = [
  { label: "和食",       value: "和食",           hint: "定食・お弁当",       photo: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop&q=80", fallback: "from-amber-400 to-orange-500" },
  { label: "洋食",       value: "洋食",           hint: "パスタ・ハンバーグ", photo: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop&q=80", fallback: "from-violet-400 to-purple-500" },
  { label: "中華",       value: "中華・アジア",   hint: "餃子・炒め物",       photo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop&q=80", fallback: "from-red-400 to-rose-500" },
  { label: "麺類",       value: "麺類",           hint: "ラーメン・うどん",   photo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80", fallback: "from-yellow-400 to-amber-500" },
  { label: "丼もの",     value: "丼もの",         hint: "牛丼・親子丼",       photo: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80", fallback: "from-orange-400 to-red-400" },
  { label: "パン・サンド", value: "パン・サンドイッチ", hint: "サンドイッチ・パン", photo: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&q=80", fallback: "from-yellow-300 to-amber-400" },
  { label: "サラダ",     value: "サラダ・ヘルシー", hint: "低カロリー・ヘルシー", photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80", fallback: "from-green-400 to-emerald-500" },
  { label: "揚げ物",     value: "揚げ物",         hint: "から揚げ・フライ",   photo: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&q=80", fallback: "from-yellow-500 to-orange-600" },
  { label: "おにぎり",   value: "おにぎり・軽食", hint: "軽食・スナック",     photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80", fallback: "from-slate-400 to-gray-600" },
  { label: "スイーツ",   value: "スイーツ",       hint: "デザート・お菓子",   photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop&q=80", fallback: "from-pink-400 to-rose-500" },
  { label: "ドリンク",   value: "ドリンク",       hint: "コーヒー・ジュース", photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&q=80", fallback: "from-amber-600 to-stone-600" },
  { label: "定食",       value: "定食・セット",   hint: "セットメニュー",     photo: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&q=80", fallback: "from-teal-400 to-cyan-600" },
];

const STORE_TYPES: { label: string; value: string; Icon?: React.ComponentType<{ className?: string }>; iconColor?: string }[] = [
  { label: "すべて",    value: "" },
  { label: "コンビニ", value: "convenience_store", Icon: Store,        iconColor: "text-sky-500" },
  { label: "外食",     value: "chain_restaurant",  Icon: Utensils,     iconColor: "text-orange-500" },
  { label: "スーパー", value: "supermarket",        Icon: ShoppingCart, iconColor: "text-green-500" },
];

const SORT_OPTIONS = [
  { label: "おすすめ順",       value: "" },
  { label: "カロリー低い順",   value: "calorie_asc" },
  { label: "タンパク質多い順", value: "protein_desc" },
  { label: "価格安い順",       value: "price_asc" },
];

const CAL_MIN = 0;  const CAL_MAX = 1500; const CAL_STEP = 50;
const PRO_MIN = 0;  const PRO_MAX = 60;   const PRO_STEP = 1;
const FAT_MIN = 0;  const FAT_MAX = 80;   const FAT_STEP = 1;
const PRC_MIN = 0;  const PRC_MAX = 2000; const PRC_STEP = 50;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SearchPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [storeType, setStoreType] = useState("");
  const [showSheet, setShowSheet] = useState(false);

  // Advanced filter state (bottom sheet)
  const [sort, setSort] = useState("");
  const [calorieRange, setCalorieRange] = useState([CAL_MIN, CAL_MAX]);
  const [proteinRange, setProteinRange] = useState([PRO_MIN, PRO_MAX]);
  const [fatRange, setFatRange] = useState([FAT_MIN, FAT_MAX]);
  const [priceRange, setPriceRange] = useState([PRC_MIN, PRC_MAX]);

  const hasAdvancedFilters =
    calorieRange[0] > CAL_MIN || calorieRange[1] < CAL_MAX ||
    proteinRange[0] > PRO_MIN || proteinRange[1] < PRO_MAX ||
    fatRange[0] > FAT_MIN || fatRange[1] < FAT_MAX ||
    priceRange[0] > PRC_MIN || priceRange[1] < PRC_MAX ||
    !!sort;

  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => {
      if (!data.user) router.replace("/login");
    });
  }, [router]);

  const buildParams = (overrides: Record<string, string> = {}) => {
    const p = new URLSearchParams();
    if (keyword.trim()) p.set("q", keyword.trim());
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
    Object.entries(overrides).forEach(([k, v]) => v ? p.set(k, v) : p.delete(k));
    return p.toString();
  };

  const handleSearch = () => {
    router.push(`/search/results?${buildParams()}`);
    setShowSheet(false);
  };

  const handleCategoryTap = (catValue: string) => {
    const p = new URLSearchParams();
    p.set("category", catValue);
    if (storeType) p.set("source_type", storeType);
    router.push(`/search/results?${p.toString()}`);
  };

  const handleQuickFilter = (params: Record<string, string>) => {
    const p = new URLSearchParams(params);
    router.push(`/search/results?${p.toString()}`);
  };

  const resetAdvanced = () => {
    setSort("");
    setCalorieRange([CAL_MIN, CAL_MAX]);
    setProteinRange([PRO_MIN, PRO_MAX]);
    setFatRange([FAT_MIN, FAT_MAX]);
    setPriceRange([PRC_MIN, PRC_MAX]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">

      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <div className="relative bg-white px-4 pt-12 pb-6 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/4 opacity-60" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 rounded-full translate-y-1/2 -translate-x-1/4 opacity-80" />

        <div className="max-w-lg mx-auto relative">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <Utensils className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="text-orange-500 text-sm font-bold tracking-wide">たべなび</p>
          </div>
          <h1 className="text-gray-900 text-2xl font-bold mb-4">今日、何食べる？</h1>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="メニュー名・商品名で検索"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-colors"
            />
            {keyword && (
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl"
              >
                検索
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">

        {/* ── Quick Filters ──────────────────────────────────────────────── */}
        <div className="px-4 pt-4 pb-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">クイック検索</p>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {QUICK_FILTERS.map((f) => (
              <button
                key={f.label}
                onClick={() => handleQuickFilter(f.params)}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 active:bg-orange-50 active:border-orange-300 active:text-orange-600 transition-colors shadow-sm"
              >
                <f.icon className={`w-3.5 h-3.5 ${f.color}`} />
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Store Type Tabs ─────────────────────────────────────────────── */}
        <div className="px-4 pt-4">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl">
            {STORE_TYPES.map((s) => (
              <button
                key={s.value}
                onClick={() => setStoreType(s.value)}
                className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  storeType === s.value
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {s.Icon && <s.Icon className={`w-3 h-3 ${storeType === s.value ? "" : s.iconColor}`} />}
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Advanced Filter Button ──────────────────────────────────────── */}
        <div className="px-4 pt-4 pb-2">
          <button
            onClick={() => setShowSheet(true)}
            className="w-full flex items-center justify-between px-5 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-orange-500 shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-gray-800">詳細フィルター</p>
                <p className="text-xs text-gray-400">カロリー・タンパク質・価格で絞り込む</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {hasAdvancedFilters && (
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
              )}
              <span className="text-gray-400 text-lg">›</span>
            </div>
          </button>
        </div>

        {/* ── Category Grid ───────────────────────────────────────────────── */}
        <div className="px-4 pt-4 pb-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">カテゴリーから探す</p>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryTap(cat.value)}
                className="relative rounded-2xl h-28 overflow-hidden active:scale-95 transition-transform shadow-md text-left"
              >
                {/* Photo background */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.photo}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Fallback gradient (shown if image fails) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.fallback}`} style={{ zIndex: -1 }} />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-white font-bold text-base leading-tight drop-shadow">{cat.label}</p>
                  <p className="text-white/75 text-xs mt-0.5 drop-shadow">{cat.hint}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── Advanced Filter Bottom Sheet ─────────────────────────────────── */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${showSheet ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowSheet(false)}
        />
        {/* Sheet */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[92vh] overflow-y-auto transition-transform duration-300 ease-out ${showSheet ? "translate-y-0" : "translate-y-full"}`}>
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-gray-200 rounded-full" />
          </div>

          <div className="max-w-lg mx-auto px-4 pb-8">
            <div className="flex items-center justify-between py-4">
              <h2 className="text-lg font-bold text-gray-900">詳細フィルター</h2>
              {hasAdvancedFilters && (
                <button onClick={resetAdvanced} className="text-sm text-orange-500 font-medium">
                  リセット
                </button>
              )}
            </div>

            <div className="divide-y divide-gray-100 space-y-0">
              <div className="py-5">
                <div className="flex items-center gap-1.5 mb-4">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <p className="text-sm font-bold text-gray-700">カロリー</p>
                </div>
                <DualRangeSlider min={CAL_MIN} max={CAL_MAX} step={CAL_STEP}
                  valueMin={calorieRange[0]} valueMax={calorieRange[1]}
                  onChange={(a, b) => setCalorieRange([a, b])} unit="kcal" />
              </div>
              <div className="py-5">
                <div className="flex items-center gap-1.5 mb-4">
                  <Dumbbell className="w-4 h-4 text-blue-500" />
                  <p className="text-sm font-bold text-gray-700">タンパク質</p>
                </div>
                <DualRangeSlider min={PRO_MIN} max={PRO_MAX} step={PRO_STEP}
                  valueMin={proteinRange[0]} valueMax={proteinRange[1]}
                  onChange={(a, b) => setProteinRange([a, b])} unit="g" />
              </div>
              <div className="py-5">
                <p className="text-sm font-bold text-gray-700 mb-4">脂質</p>
                <DualRangeSlider min={FAT_MIN} max={FAT_MAX} step={FAT_STEP}
                  valueMin={fatRange[0]} valueMax={fatRange[1]}
                  onChange={(a, b) => setFatRange([a, b])} unit="g" />
              </div>
              <div className="py-5">
                <p className="text-sm font-bold text-gray-700 mb-4">価格</p>
                <DualRangeSlider min={PRC_MIN} max={PRC_MAX} step={PRC_STEP}
                  valueMin={priceRange[0]} valueMax={priceRange[1]}
                  onChange={(a, b) => setPriceRange([a, b])} unit="円" />
              </div>
              <div className="py-5">
                <p className="text-sm font-bold text-gray-700 mb-3">並び順</p>
                <div className="flex flex-wrap gap-2">
                  {SORT_OPTIONS.map((o) => (
                    <button key={o.value} onClick={() => setSort(o.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        sort === o.value ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
                      }`}>
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-orange-500 active:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 mt-2 text-base"
            >
              この条件で検索する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
