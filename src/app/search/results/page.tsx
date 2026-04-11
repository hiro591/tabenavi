"use client";

import { Suspense } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getChainLogo } from "@/lib/chain-logos";
import { ChevronLeft, Heart, MapPin, Plus, Utensils, List, Map as MapIcon, ChevronUp } from "lucide-react";

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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ChainLogoPanel({ item, fitnessBadge }: { item: MenuItem; fitnessBadge: { label: string; style: string } | null }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logoInfo = getChainLogo(item.chain_restaurants?.name || "");
  const showLogo = logoInfo && !logoFailed;

  return (
    <div className="w-28 shrink-0 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: showLogo ? logoInfo.bg : undefined }}>
      {item.image_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
      ) : showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoInfo.url} alt={item.chain_restaurants?.name || ""} className="w-full h-full object-contain p-4"
          onError={() => setLogoFailed(true)} />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getCardGradient(item)}`}>
          <Utensils className="w-10 h-10 text-sky-300" />
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

function getCardGradient(item: MenuItem): string {
  const n = item.chain_restaurants?.name ?? "";
  if (n.includes("セブン")) return "from-green-100 to-emerald-50";
  if (n.includes("ローソン")) return "from-blue-100 to-sky-50";
  if (n.includes("ファミリー") || n.includes("ファミマ")) return "from-sky-100 to-cyan-50";
  if (n.includes("マクドナルド")) return "from-yellow-100 to-amber-50";
  if (n.includes("すき家")) return "from-sky-100 to-cyan-50";
  if (n.includes("吉野家")) return "from-red-100 to-rose-50";
  if (n.includes("松屋")) return "from-amber-100 to-yellow-50";
  if (n.includes("スターバックス")) return "from-green-100 to-teal-50";
  if (n.includes("モスバーガー")) return "from-red-100 to-sky-50";
  if (item.source_type === "convenience_store") return "from-blue-50 to-indigo-50";
  if (item.source_type === "chain_restaurant") return "from-sky-50 to-cyan-50";
  if (item.source_type === "supermarket") return "from-emerald-50 to-green-50";
  return "from-gray-100 to-gray-50";
}

function getStoreBadgeStyle(name: string | undefined, sourceType: string | null): string {
  const n = name ?? "";
  if (n.includes("セブン")) return "bg-green-100 text-green-700";
  if (n.includes("ローソン")) return "bg-blue-100 text-blue-700";
  if (n.includes("ファミリー") || n.includes("ファミマ")) return "bg-sky-100 text-sky-700";
  if (n.includes("マクドナルド")) return "bg-yellow-100 text-yellow-700";
  if (n.includes("すき家")) return "bg-sky-100 text-sky-700";
  if (n.includes("吉野家")) return "bg-red-100 text-red-700";
  if (n.includes("松屋")) return "bg-amber-100 text-amber-700";
  if (n.includes("スターバックス")) return "bg-green-100 text-green-800";
  if (sourceType === "convenience_store") return "bg-blue-50 text-blue-600";
  if (sourceType === "supermarket") return "bg-emerald-50 text-emerald-600";
  return "bg-sky-50 text-sky-600";
}

function getFitnessBadge(item: MenuItem): { label: string; style: string } | null {
  if (item.protein != null && item.protein >= 25) return { label: "高タンパク", style: "bg-blue-500 text-white" };
  if (item.calories != null && item.calories <= 300) return { label: "低カロリー", style: "bg-green-500 text-white" };
  return null;
}

function getLeftBorderClass(sourceType: string | null) {
  switch (sourceType) {
    case "convenience_store": return "border-l-4 border-l-sky-400";
    case "chain_restaurant": return "border-l-4 border-l-sky-400";
    case "supermarket": return "border-l-4 border-l-green-400";
    default: return "border-l-4 border-l-gray-200";
  }
}

// ─── Main Content ────────────────────────────────────────────────────────────

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
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [sheetHeight, setSheetHeight] = useState<"half" | "full" | "mini">("half");
  const [mapReady, setMapReady] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<import("leaflet").Marker[]>([]);

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

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setUserLocation({ lat: 35.6812, lng: 139.7671 }),
        { timeout: 10000, enableHighAccuracy: false, maximumAge: 600000 }
      );
    } else {
      setUserLocation({ lat: 35.6812, lng: 139.7671 });
    }
  }, []);

  // Init map
  useEffect(() => {
    if (!userLocation || !mapRef.current || leafletMap.current) return;

    import("leaflet").then((L) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, { center: [userLocation.lat, userLocation.lng], zoom: 14, zoomControl: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a>',
      }).addTo(map);

      // User location marker
      L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 8, fillColor: "#3b82f6", fillOpacity: 1, color: "white", weight: 3,
      }).addTo(map);

      leafletMap.current = map;
      setMapReady(true);

      // Import CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    });
  }, [userLocation]);

  // Add store markers based on search results
  useEffect(() => {
    if (!mapReady || !leafletMap.current || items.length === 0) return;

    import("leaflet").then((L) => {
      // Clear old markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      // Group items by chain
      const chainGroups = new Map<string, { name: string; count: number }>();
      items.forEach((item) => {
        const name = item.chain_restaurants?.name;
        if (name && !chainGroups.has(name)) {
          chainGroups.set(name, { name, count: 0 });
        }
        if (name) chainGroups.get(name)!.count++;
      });

      // Fetch nearby stores via Overpass for each chain
      if (!userLocation) return;
      const radius = 3000;
      const chainNames = [...chainGroups.keys()];
      const nameFilter = chainNames.map((n) => `["name"~"${n}"]`).join("");

      if (!nameFilter) return;

      const query = `[out:json][timeout:10];(node["amenity"~"restaurant|fast_food|cafe"]${nameFilter.length > 200 ? "" : nameFilter}(${userLocation.lat - 0.03},${userLocation.lng - 0.04},${userLocation.lat + 0.03},${userLocation.lng + 0.04}););out body;`;

      fetch("https://overpass-api.de/api/interpreter", { method: "POST", body: `data=${encodeURIComponent(query)}` })
        .then((r) => r.json())
        .then((data) => {
          if (!data.elements) return;

          data.elements.forEach((el: { lat: number; lon: number; tags?: { name?: string } }) => {
            if (!el.tags?.name) return;
            const name = el.tags.name;

            // Check if this chain has matching menu items
            const hasMatch = chainNames.some((cn) => name.includes(cn));
            if (!hasMatch) return;

            const matchCount = chainGroups.get(chainNames.find((cn) => name.includes(cn)) || "")?.count ?? 0;

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
              <circle cx="16" cy="16" r="14" fill="#0ea5e9" opacity="0.9"/>
              <text x="16" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="white">${matchCount}</text>
              <polygon points="16,36 10,26 22,26" fill="#0ea5e9" opacity="0.9"/>
            </svg>`;

            const icon = L.icon({
              iconUrl: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg),
              iconSize: [32, 40], iconAnchor: [16, 40],
            });

            const marker = L.marker([el.lat, el.lon], { icon })
              .bindPopup(`<b>${name}</b><br>${matchCount}件のメニューが条件に合います`)
              .addTo(leafletMap.current!);

            markersRef.current.push(marker);
          });
        })
        .catch(() => {});
    });
  }, [items, mapReady, userLocation]);

  const fetchItems = useCallback(async () => {
    if (page === 1) setLoading(true);
    const supabase = createClient();
    let query = supabase.from("menu_items").select("*, chain_restaurants(name, emoji)");

    if (searchQ) {
      const { data: chains } = await supabase.from("chain_restaurants").select("id").ilike("name", `%${searchQ}%`);
      const chainIds = (chains ?? []).map((c: { id: string }) => c.id);
      if (chainIds.length > 0) {
        query = query.or(`name.ilike.%${searchQ}%,chain_restaurant_id.in.(${chainIds.join(",")})`);
      } else {
        query = query.or(`name.ilike.%${searchQ}%,description.ilike.%${searchQ}%`);
      }
    }
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

    if (sort === "calorie_asc") query = query.order("calories", { ascending: true });
    else if (sort === "protein_desc") query = query.order("protein", { ascending: false });
    else if (sort === "price_asc") query = query.order("price", { ascending: true });
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
        const { data: favs } = await supabase.from("favorites").select("menu_item_id").eq("user_id", data.user.id);
        setFavoriteIds(new Set(favs?.map((f) => f.menu_item_id) || []));
      } catch {}
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

  const loadMore = () => { setLoadingMore(true); setPage((p) => p + 1); };

  const pageTitle = searchQ || category || (sourceType === "convenience_store" ? "コンビニ" : sourceType === "chain_restaurant" ? "外食チェーン" : "検索結果");

  const sheetHeightClass = sheetHeight === "full" ? "h-[85vh]" : sheetHeight === "half" ? "h-[50vh]" : "h-[25vh]";

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 z-20">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 px-4 py-2.5">
            <button onClick={() => router.back()} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-sm font-bold text-gray-900 truncate flex-1">{pageTitle}</h1>
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
              <button onClick={() => setViewMode("map")} className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${viewMode === "map" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}>
                <MapIcon className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setViewMode("list")} className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${viewMode === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}>
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
            <button onClick={() => router.push("/search")} className="shrink-0 px-2.5 py-1.5 bg-sky-50 text-sky-500 rounded-lg text-xs font-bold">
              条件変更
            </button>
          </div>
          <div className="flex gap-1.5 px-4 pb-2 overflow-x-auto scrollbar-hide">
            {SORT_OPTIONS.map((opt) => (
              <button key={opt.value} onClick={() => updateSort(opt.value)}
                className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  sort === opt.value ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map + List */}
      {viewMode === "map" ? (
        <div className="flex-1 relative">
          {/* Map */}
          <div ref={mapRef} className="absolute inset-0" />

          {/* Bottom Sheet */}
          <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-10 transition-all duration-300 ${sheetHeightClass}`}>
            {/* Drag handle */}
            <div className="flex justify-center py-2 cursor-pointer" onClick={() => setSheetHeight(sheetHeight === "full" ? "half" : sheetHeight === "half" ? "mini" : "full")}>
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Sheet header */}
            <div className="flex items-center justify-between px-4 pb-2">
              <p className="text-sm font-bold text-gray-900">{items.length}件のメニュー</p>
              <button onClick={() => setSheetHeight(sheetHeight === "full" ? "half" : "full")} className="text-gray-400">
                <ChevronUp className={`w-4 h-4 transition-transform ${sheetHeight === "full" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Results list */}
            <div className="overflow-y-auto px-4 pb-24" style={{ height: "calc(100% - 56px)" }}>
              {loading ? (
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />)}
                </div>
              ) : (
                <div className="space-y-2">
                  {items.map((item) => (
                    <CompactMenuItem key={item.id} item={item} favoriteIds={favoriteIds}
                      onTap={() => router.push(`/items/${item.id}`)}
                      onFavorite={(e) => toggleFavorite(e, item.id)} />
                  ))}
                  {hasMore && (
                    <button onClick={loadMore} disabled={loadingMore}
                      className="w-full py-2.5 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 disabled:opacity-50">
                      {loadingMore ? "読み込み中..." : "もっと見る"}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* List view */
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-lg mx-auto px-4 py-3 pb-24">
            {!loading && (
              <p className="text-xs text-gray-400 mb-2">{items.length}件見つかりました</p>
            )}
            {loading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => <div key={i} className="bg-white rounded-2xl h-28 animate-pulse shadow-sm" />)}
              </div>
            ) : items.length > 0 ? (
              <div className="space-y-3">
                {items.map((item) => {
                  const fitnessBadge = getFitnessBadge(item);
                  return (
                    <div key={item.id} onClick={() => router.push(`/items/${item.id}`)}
                      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.985] transition-all cursor-pointer ${getLeftBorderClass(item.source_type)}`}>
                      <div className="flex">
                        <ChainLogoPanel item={item} fitnessBadge={fitnessBadge} />
                        <div className="flex-1 min-w-0 p-3 flex flex-col justify-between">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${getStoreBadgeStyle(item.chain_restaurants?.name, item.source_type)}`}>
                              {item.chain_restaurants?.name || "その他"}
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug mb-2">{item.name}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.calories != null && <span className="text-[11px] bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full font-semibold">{item.calories} kcal</span>}
                            {item.protein != null && <span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">P {item.protein}g</span>}
                            {item.fat != null && <span className="text-[11px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">F {item.fat}g</span>}
                          </div>
                          <div className="flex items-center">
                            {item.price != null && <span className="text-sm font-bold text-gray-800">¥{item.price}</span>}
                            <div className="flex items-center gap-3 ml-auto">
                              <button onClick={(e) => toggleFavorite(e, item.id)}
                                className={`transition-colors ${favoriteIds.has(item.id) ? "text-red-500" : "text-gray-300"}`}>
                                <Heart className={`w-4 h-4 ${favoriteIds.has(item.id) ? "fill-current" : ""}`} />
                              </button>
                              <button onClick={(e) => { e.stopPropagation(); router.push(`/record?menu_id=${item.id}`); }}
                                className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-500 text-white">
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
                  <button onClick={loadMore} disabled={loadingMore}
                    className="w-full py-3 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 disabled:opacity-50">
                    {loadingMore ? "読み込み中..." : "もっと見る"}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="w-7 h-7 text-sky-300" />
                </div>
                <p className="text-base font-bold text-gray-700 mb-1">見つかりませんでした</p>
                <p className="text-sm text-gray-400 mb-6">条件を変えて再検索してみてください</p>
                <button onClick={() => router.push("/search")}
                  className="px-6 py-3 bg-sky-500 text-white rounded-xl font-bold text-sm">
                  条件を変える
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Compact menu item for map sheet ─────────────────────────────────────────

function CompactMenuItem({ item, favoriteIds, onTap, onFavorite }: {
  item: MenuItem; favoriteIds: Set<string>;
  onTap: () => void; onFavorite: (e: React.MouseEvent) => void;
}) {
  const logoInfo = getChainLogo(item.chain_restaurants?.name || "");

  return (
    <div onClick={onTap} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 active:scale-[0.98] transition-all cursor-pointer">
      {logoInfo ? (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 shrink-0" style={{ backgroundColor: logoInfo.bg }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoInfo.url} alt="" className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
          <Utensils className="w-5 h-5 text-gray-400" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400">{item.chain_restaurants?.name}</p>
        <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs font-bold text-sky-500">{item.calories} kcal</span>
          {item.protein != null && <span className="text-[10px] text-gray-400">P{item.protein}g</span>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button onClick={onFavorite} className={`${favoriteIds.has(item.id) ? "text-red-500" : "text-gray-300"}`}>
          <Heart className={`w-4 h-4 ${favoriteIds.has(item.id) ? "fill-current" : ""}`} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); }} className="w-6 h-6 flex items-center justify-center rounded-full bg-sky-500 text-white">
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-lg mx-auto px-4 pt-20 space-y-3">
          {[...Array(5)].map((_, i) => <div key={i} className="h-28 bg-white rounded-2xl animate-pulse shadow-sm" />)}
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
