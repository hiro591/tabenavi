"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/client";
import { Utensils, MapPin, Star, CheckCircle } from "lucide-react";
import type { MenuItem, ChainRestaurant } from "@/types/database";
import type { NearbyPlace } from "./MapComponent";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

type CategoryTag = "ぴったり" | "軽め" | "ちょうどいい";

type RecommendedItem = MenuItem & {
  chain_restaurants: ChainRestaurant;
  tag: CategoryTag;
};

type Tab = "map" | "calorie";
type CalorieFilter = "all" | "pittari" | "karume" | "chain";

const CHAIN_NAMES = [
  "マクドナルド",
  "モスバーガー",
  "ケンタッキー",
  "すき家",
  "吉野家",
  "松屋",
  "なか卯",
  "丸亀製麺",
  "サイゼリヤ",
  "ガスト",
  "デニーズ",
  "ロイヤルホスト",
  "スターバックス",
  "ドトール",
  "コメダ珈琲",
  "セブンイレブン",
  "ローソン",
  "ファミリーマート",
  "大戸屋",
  "やよい軒",
];

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function RecommendPage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [items, setItems] = useState<RecommendedItem[]>([]);
  const [chains, setChains] = useState<ChainRestaurant[]>([]);
  const [allMenuItems, setAllMenuItems] = useState<
    (MenuItem & { chain_restaurants: ChainRestaurant })[]
  >([]);

  // Tab state
  const [activeTab, setActiveTab] = useState<Tab>("map");
  const [calorieFilter, setCalorieFilter] = useState<CalorieFilter>("all");
  const [activeChain, setActiveChain] = useState<string | null>(null);

  // Map state
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [nearbyPlaces, setNearbyPlaces] = useState<NearbyPlace[]>([]);
  const [overpassLoading, setOverpassLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<NearbyPlace | null>(null);

  const fetchData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const [profileRes, logsRes, menuRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single(),
      supabase
        .from("food_logs")
        .select("calories")
        .eq("user_id", user.id)
        .gte("logged_at", `${today}T00:00:00`)
        .lte("logged_at", `${today}T23:59:59`),
      supabase
        .from("menu_items")
        .select("*, chain_restaurants(*)")
        .order("calories", { ascending: true }),
    ]);

    const target = profileRes.data?.target_calories ?? 2000;
    const consumed =
      logsRes.data?.reduce((sum, l) => sum + (l.calories || 0), 0) ?? 0;
    const remaining = target - consumed;
    setRemainingCalories(remaining);

    if (menuRes.data) {
      const chainMap = new Map<string, ChainRestaurant>();
      const recommended: RecommendedItem[] = [];
      const allItems: (MenuItem & { chain_restaurants: ChainRestaurant })[] = [];

      for (const item of menuRes.data as (MenuItem & {
        chain_restaurants: ChainRestaurant;
      })[]) {
        if (!item.chain_restaurants) continue;
        chainMap.set(item.chain_restaurants.id, item.chain_restaurants);
        allItems.push(item);

        if (remaining <= 0 || item.calories > remaining) continue;

        let tag: CategoryTag;
        if (Math.abs(item.calories - remaining) <= 50) {
          tag = "ぴったり";
        } else if (item.calories < remaining * 0.5) {
          tag = "軽め";
        } else {
          tag = "ちょうどいい";
        }

        recommended.push({ ...item, tag });
      }

      setChains(Array.from(chainMap.values()));
      setItems(recommended);
      setAllMenuItems(allItems);
    }

    setLoading(false);
  }, [supabase, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Request geolocation
  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("このブラウザは位置情報に対応していません");
      return;
    }
    setLocationLoading(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLat(pos.coords.latitude);
        setUserLng(pos.coords.longitude);
        setLocationLoading(false);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setLocationError("位置情報の許可が必要です");
        } else {
          setLocationError("位置情報を取得できませんでした");
        }
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  // Auto-request location on mount
  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  // Fetch nearby restaurants from Overpass when location is available
  useEffect(() => {
    if (userLat === null || userLng === null || allMenuItems.length === 0) return;

    const fetchNearby = async () => {
      setOverpassLoading(true);
      try {
        const query = `
[out:json][timeout:10];
(
  node["amenity"~"fast_food|restaurant|cafe"](around:1000,${userLat},${userLng});
);
out center 50;
`;
        const response = await fetch(
          "https://overpass-api.de/api/interpreter",
          { method: "POST", body: query }
        );
        const data = await response.json();

        const places: NearbyPlace[] = [];
        const seen = new Set<string>();

        for (const el of data.elements ?? []) {
          const name: string = el.tags?.name ?? "";
          if (!name) continue;

          // Match against our chain list
          const matchedChainName = CHAIN_NAMES.find((cn) => name.includes(cn));
          if (!matchedChainName) continue;

          // Deduplicate by chain name
          if (seen.has(matchedChainName)) continue;
          seen.add(matchedChainName);

          const matchedChain = chains.find((c) => c.name === matchedChainName);
          const menus = matchedChain
            ? allMenuItems.filter(
                (m) => m.chain_restaurant_id === matchedChain.id
              )
            : [];

          places.push({
            id: el.id,
            name: name,
            lat: el.lat,
            lon: el.lon,
            distance: calculateDistance(userLat, userLng, el.lat, el.lon),
            chainRestaurant: matchedChain,
            menuItems: menus,
          });
        }

        places.sort((a, b) => a.distance - b.distance);
        setNearbyPlaces(places);
      } catch {
        // Silently fail - user can still use calorie tab
      } finally {
        setOverpassLoading(false);
      }
    };

    fetchNearby();
  }, [userLat, userLng, chains, allMenuItems]);

  const remainingColor =
    remainingCalories > 500
      ? "text-green-600"
      : remainingCalories >= 200
        ? "text-orange-500"
        : "text-red-500";

  const remainingBgColor =
    remainingCalories > 500
      ? "bg-green-50 text-green-700"
      : remainingCalories >= 200
        ? "bg-orange-50 text-orange-600"
        : "bg-red-50 text-red-600";

  // Calorie tab filtering
  const filteredItems = (() => {
    let result = items;
    if (calorieFilter === "pittari") {
      result = items.filter((i) => i.tag === "ぴったり");
    } else if (calorieFilter === "karume") {
      result = items.filter((i) => i.tag === "軽め");
    } else if (calorieFilter === "chain" && activeChain) {
      result = items.filter((i) => i.chain_restaurant_id === activeChain);
    }
    return result;
  })();

  const tagStyle: Record<CategoryTag, string> = {
    ぴったり: "bg-green-100 text-green-700",
    軽め: "bg-blue-100 text-blue-700",
    ちょうどいい: "bg-orange-100 text-orange-700",
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-lg mx-auto px-4 pt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="flex-1">
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-56 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex gap-2 mb-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-10 flex-1 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
          <div className="h-[300px] bg-gray-200 rounded-2xl animate-pulse mb-4" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm mb-3 animate-pulse"
            >
              <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
              <div className="h-5 w-48 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ←
            </Link>
            <h1 className="text-xl font-bold text-gray-800">
              おすすめを探す
            </h1>
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${remainingBgColor}`}
          >
            残り{remainingCalories}kcal
          </span>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setActiveTab("map")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              activeTab === "map"
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-gray-500 shadow-sm"
            }`}
          >
            周辺マップ
          </button>
          <button
            onClick={() => setActiveTab("calorie")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
              activeTab === "calorie"
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-gray-500 shadow-sm"
            }`}
          >
            カロリー別
          </button>
        </div>

        {/* ===================== MAP TAB ===================== */}
        {activeTab === "map" && (
          <div>
            {/* Location header */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-gray-800 mb-1">
                現在地周辺のチェーン店を探す
              </h2>
              {userLat !== null && userLng !== null && (
                <p className="text-xs text-gray-400">
                  半径1km以内のチェーン店を表示中
                </p>
              )}
            </div>

            {/* Location states */}
            {locationLoading && (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center mb-4">
                <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  現在地を取得しています...
                </p>
              </div>
            )}

            {locationError && (
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center mb-4">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-7 h-7 text-orange-300" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">
                  {locationError}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  位置情報を許可すると周辺のチェーン店を地図で確認できます
                </p>
                <button
                  onClick={requestLocation}
                  className="bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors"
                >
                  現在地を取得
                </button>
              </div>
            )}

            {/* Map */}
            {userLat !== null && userLng !== null && !locationLoading && (
              <>
                <div className="mb-4 shadow-sm rounded-2xl overflow-hidden">
                  <MapComponent
                    userLat={userLat}
                    userLng={userLng}
                    nearbyPlaces={nearbyPlaces}
                    onPlaceSelect={setSelectedPlace}
                  />
                </div>

                {overpassLoading && (
                  <div className="flex items-center gap-2 justify-center py-4">
                    <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs text-gray-400">
                      周辺のチェーン店を検索中...
                    </p>
                  </div>
                )}

                {/* Nearby chain cards */}
                {!overpassLoading && nearbyPlaces.length === 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <p className="text-sm text-gray-400">
                      周辺にチェーン店が見つかりませんでした
                    </p>
                  </div>
                )}

                {!overpassLoading && nearbyPlaces.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-500">
                      周辺のチェーン店 ({nearbyPlaces.length}件)
                    </p>
                    {nearbyPlaces.map((place) => (
                      <div key={place.id}>
                        <button
                          onClick={() =>
                            setSelectedPlace(
                              selectedPlace?.id === place.id ? null : place
                            )
                          }
                          className={`w-full bg-white rounded-2xl p-4 shadow-sm text-left transition-colors ${
                            selectedPlace?.id === place.id
                              ? "ring-2 ring-orange-400"
                              : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">
                                <Utensils className="w-5 h-5 text-orange-400" />
                              </span>
                              <div>
                                <p className="text-sm font-bold text-gray-800">
                                  {place.chainRestaurant?.name ?? place.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {place.distance}m
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {place.menuItems &&
                                place.menuItems.filter(
                                  (m) => m.calories <= remainingCalories
                                ).length > 0 && (
                                  <span className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                                    {
                                      place.menuItems.filter(
                                        (m) => m.calories <= remainingCalories
                                      ).length
                                    }
                                    品OK
                                  </span>
                                )}
                              <span className="text-gray-300 text-sm">
                                {selectedPlace?.id === place.id ? "▲" : "▼"}
                              </span>
                            </div>
                          </div>
                        </button>

                        {/* Expanded menu list */}
                        {selectedPlace?.id === place.id &&
                          place.menuItems &&
                          place.menuItems.length > 0 && (
                            <div className="mt-2 space-y-2 pl-2">
                              {place.menuItems
                                .filter((m) => m.calories <= remainingCalories)
                                .slice(0, 10)
                                .map((menuItem) => (
                                  <div
                                    key={menuItem.id}
                                    className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                                  >
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                      <p className="text-sm font-bold text-gray-800">
                                        {menuItem.name}
                                      </p>
                                      <p className="text-sm font-bold text-orange-500 shrink-0">
                                        {menuItem.calories}kcal
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex gap-1.5">
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">
                                          P {menuItem.protein}g
                                        </span>
                                        <span className="text-[10px] bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded-full">
                                          F {menuItem.fat}g
                                        </span>
                                        <span className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded-full">
                                          C {menuItem.carbs}g
                                        </span>
                                      </div>
                                      <Link
                                        href={`/record?menu_id=${menuItem.id}`}
                                        className="text-xs bg-orange-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors"
                                      >
                                        記録する
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              {place.menuItems.filter(
                                (m) => m.calories <= remainingCalories
                              ).length === 0 && (
                                <p className="text-xs text-gray-400 text-center py-3">
                                  残りカロリー内のメニューがありません
                                </p>
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Fallback: show all chains when location is denied */}
            {locationError && !locationLoading && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 mb-3">
                  すべてのチェーン店
                </p>
                <div className="space-y-3">
                  {chains.map((chain) => {
                    const menus = allMenuItems.filter(
                      (m) => m.chain_restaurant_id === chain.id
                    );
                    const okCount = menus.filter(
                      (m) => m.calories <= remainingCalories
                    ).length;
                    return (
                      <button
                        key={chain.id}
                        onClick={() => {
                          const place: NearbyPlace = {
                            id: parseInt(chain.id, 10) || Math.random() * 1e9,
                            name: chain.name,
                            lat: 0,
                            lon: 0,
                            distance: 0,
                            chainRestaurant: chain,
                            menuItems: menus,
                          };
                          setSelectedPlace(
                            selectedPlace?.chainRestaurant?.id === chain.id
                              ? null
                              : place
                          );
                        }}
                        className="w-full bg-white rounded-2xl p-4 shadow-sm text-left"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">
                              <Utensils className="w-5 h-5 text-orange-400" />
                            </span>
                            <p className="text-sm font-bold text-gray-800">
                              {chain.name}
                            </p>
                          </div>
                          {okCount > 0 && (
                            <span className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                              {okCount}品OK
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== CALORIE TAB ===================== */}
        {activeTab === "calorie" && (
          <div>
            {/* Remaining calories display */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 text-center">
              <p className="text-xs text-gray-400 mb-1">今日の残りカロリー</p>
              <p className={`text-3xl font-bold ${remainingColor}`}>
                {remainingCalories}
                <span className="text-base font-semibold ml-1">kcal</span>
              </p>
            </div>

            {remainingCalories <= 0 ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-lg font-bold text-gray-800 mb-2">
                  今日のカロリーは達成済みです！
                </p>
                <p className="text-sm text-gray-500">明日も頑張りましょう</p>
              </div>
            ) : (
              <>
                {/* Filter tabs */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                  {(
                    [
                      { key: "all", label: "全て" },
                      { key: "pittari", label: "ぴったり" },
                      { key: "karume", label: "軽め" },
                      { key: "chain", label: "チェーン別" },
                    ] as { key: CalorieFilter; label: string }[]
                  ).map((f) => (
                    <button
                      key={f.key}
                      onClick={() => {
                        setCalorieFilter(f.key);
                        if (f.key !== "chain") setActiveChain(null);
                      }}
                      className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        calorieFilter === f.key
                          ? "bg-orange-500 text-white"
                          : "bg-white text-gray-600 shadow-sm"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Chain sub-filter */}
                {calorieFilter === "chain" && (
                  <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                    {chains.map((chain) => (
                      <button
                        key={chain.id}
                        onClick={() => setActiveChain(chain.id)}
                        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          activeChain === chain.id
                            ? "bg-orange-500 text-white"
                            : "bg-white text-gray-600 shadow-sm"
                        }`}
                      >
                        {chain.emoji ? `${chain.emoji} ` : ""}
                        {chain.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* Menu cards */}
                {filteredItems.length === 0 ? (
                  <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                    <p className="text-gray-400 text-sm">
                      条件に合うメニューが見つかりませんでした
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-4 shadow-sm"
                      >
                        <p className="text-[11px] text-gray-400 mb-1">
                          {item.chain_restaurants.emoji}{" "}
                          {item.chain_restaurants.name}
                        </p>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="text-sm font-bold text-gray-800">
                            {item.name}
                          </p>
                          <span
                            className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyle[item.tag]}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-orange-500 mb-2">
                          {item.calories}
                          <span className="text-sm font-medium ml-0.5">
                            kcal
                          </span>
                        </p>
                        <div className="flex gap-2 mb-3">
                          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                            タンパク質 {item.protein}g
                          </span>
                          <span className="text-[10px] bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full">
                            脂質 {item.fat}g
                          </span>
                          <span className="text-[10px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
                            炭水化物 {item.carbs}g
                          </span>
                        </div>
                        <Link
                          href={`/record?menu_id=${item.id}`}
                          className="block w-full text-center bg-orange-500 text-white text-sm font-semibold py-2 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all"
                        >
                          記録する
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
