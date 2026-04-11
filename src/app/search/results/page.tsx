"use client";

import { Suspense } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getChainLogo } from "@/lib/chain-logos";
import { ChevronLeft, Heart, Plus, Utensils, SlidersHorizontal } from "lucide-react";

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
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapReady, setMapReady] = useState(false);

  // Sheet drag state
  const [sheetTop, setSheetTop] = useState(55); // percentage from top (55% = map takes ~55%)
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartTop = useRef(55);
  const sheetRef = useRef<HTMLDivElement>(null);

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

  // ─── Sheet drag handlers ────────────────────────────────────────────────────

  const handleDragStart = useCallback((clientY: number) => {
    isDragging.current = true;
    dragStartY.current = clientY;
    dragStartTop.current = sheetTop;
  }, [sheetTop]);

  const handleDragMove = useCallback((clientY: number) => {
    if (!isDragging.current) return;
    const delta = clientY - dragStartY.current;
    const vh = window.innerHeight;
    const deltaPercent = (delta / vh) * 100;
    const newTop = Math.max(10, Math.min(85, dragStartTop.current + deltaPercent));
    setSheetTop(newTop);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Snap to nearest position: 10% (full), 55% (half), 85% (mini)
    const snapPoints = [10, 55, 85];
    const closest = snapPoints.reduce((a, b) =>
      Math.abs(b - sheetTop) < Math.abs(a - sheetTop) ? b : a
    );
    setSheetTop(closest);

    // Resize map when sheet position changes
    if (leafletMap.current) {
      setTimeout(() => leafletMap.current?.invalidateSize(), 350);
    }
  }, [sheetTop]);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        e.preventDefault();
        handleDragMove(e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => handleDragEnd();
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientY);
    const handleMouseUp = () => handleDragEnd();

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleDragMove, handleDragEnd]);

  // ─── Get user location ──────────────────────────────────────────────────────

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

  // ─── Init map ───────────────────────────────────────────────────────────────

  useEffect(() => {
    if (!userLocation || !mapRef.current || leafletMap.current) return;

    // Load CSS first
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [userLocation.lat, userLocation.lng],
        zoom: 14,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a>',
      }).addTo(map);

      // User location blue dot
      L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 8, fillColor: "#3b82f6", fillOpacity: 1, color: "white", weight: 3,
      }).addTo(map);

      leafletMap.current = map;
      setMapReady(true);
    });
  }, [userLocation]);

  // ─── Add store markers ──────────────────────────────────────────────────────

  useEffect(() => {
    if (!mapReady || !leafletMap.current || items.length === 0 || !userLocation) return;

    import("leaflet").then((L) => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const chainGroups = new Map<string, number>();
      items.forEach((item) => {
        const name = item.chain_restaurants?.name;
        if (name) chainGroups.set(name, (chainGroups.get(name) ?? 0) + 1);
      });

      const chainNames = [...chainGroups.keys()];
      if (chainNames.length === 0) return;

      // Build Overpass query for nearby stores
      const nameFilter = chainNames.slice(0, 10).map((n) => `["name"~"${n}"]`).join("");
      const bounds = {
        s: userLocation.lat - 0.025,
        w: userLocation.lng - 0.035,
        n: userLocation.lat + 0.025,
        e: userLocation.lng + 0.035,
      };
      const query = `[out:json][timeout:10];(node["amenity"~"restaurant|fast_food|cafe"]${nameFilter}(${bounds.s},${bounds.w},${bounds.n},${bounds.e}););out body;`;

      fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: `data=${encodeURIComponent(query)}`,
      })
        .then((r) => r.json())
        .then((data) => {
          if (!data.elements) return;

          data.elements.forEach((el: { lat: number; lon: number; tags?: { name?: string } }) => {
            if (!el.tags?.name) return;
            const storeName = el.tags.name;

            const matchedChain = chainNames.find((cn) => storeName.includes(cn));
            if (!matchedChain) return;

            const count = chainGroups.get(matchedChain) ?? 0;

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="#0ea5e9" stroke="white" stroke-width="2"/>
              <text x="18" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="white">${count}</text>
            </svg>`;

            const icon = L.icon({
              iconUrl: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg),
              iconSize: [36, 36],
              iconAnchor: [18, 18],
            });

            const marker = L.marker([el.lat, el.lon], { icon })
              .bindPopup(`<b>${storeName}</b><br><span style="color:#0ea5e9;font-weight:bold">${count}件</span>のメニューが条件に合います`)
              .addTo(leafletMap.current!);

            markersRef.current.push(marker);
          });
        })
        .catch(() => {});
    });
  }, [items, mapReady, userLocation]);

  // ─── Fetch items ────────────────────────────────────────────────────────────

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

  return (
    <div className="fixed inset-0 flex flex-col bg-gray-50 overflow-hidden">
      {/* ─── Header ─── */}
      <div className="bg-white border-b border-gray-200 z-30 shrink-0">
        <div className="flex items-center gap-2 px-3 py-2">
          <button onClick={() => router.back()} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-sm font-bold text-gray-900 truncate flex-1">{pageTitle}</h1>
          <span className="text-xs text-gray-400">{items.length}件</span>
          <button onClick={() => router.push("/search")} className="shrink-0 px-3 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-bold">
            <SlidersHorizontal className="w-3.5 h-3.5 inline mr-1" />
            条件変更
          </button>
        </div>
      </div>

      {/* ─── Map area (fills behind sheet) ─── */}
      <div className="flex-1 relative">
        <div ref={mapRef} className="absolute inset-0 z-0" />

        {/* Loading overlay on map */}
        {!mapReady && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-8 h-8 border-3 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-xs text-gray-400">マップを読み込み中...</p>
            </div>
          </div>
        )}

        {/* ─── Draggable bottom sheet ─── */}
        <div
          ref={sheetRef}
          className="absolute left-0 right-0 bottom-0 z-20 bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex flex-col"
          style={{
            top: `${sheetTop}%`,
            transition: isDragging.current ? "none" : "top 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* Drag handle */}
          <div
            className="flex justify-center pt-2 pb-1 cursor-grab active:cursor-grabbing touch-none"
            onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
            onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientY); }}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Sort pills */}
          <div className="flex gap-1.5 px-4 py-2 overflow-x-auto shrink-0" style={{ WebkitOverflowScrolling: "touch" }}>
            {SORT_OPTIONS.map((opt) => (
              <button key={opt.value} onClick={() => updateSort(opt.value)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  sort === opt.value ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                {opt.label}
              </button>
            ))}
          </div>

          {/* Results list (scrollable) */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-24">
            {loading ? (
              <div className="space-y-2 pt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-50 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : items.length > 0 ? (
              <div className="space-y-2 pt-1">
                {items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    isFavorite={favoriteIds.has(item.id)}
                    onTap={() => router.push(`/items/${item.id}`)}
                    onFavorite={(e) => toggleFavorite(e, item.id)}
                    onRecord={(e) => { e.stopPropagation(); router.push(`/record?menu_id=${item.id}`); }}
                  />
                ))}
                {hasMore && (
                  <button onClick={loadMore} disabled={loadingMore}
                    className="w-full py-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 disabled:opacity-50 mt-1">
                    {loadingMore ? "読み込み中..." : "もっと見る"}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center mb-3">
                  <Utensils className="w-6 h-6 text-sky-300" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">見つかりませんでした</p>
                <p className="text-xs text-gray-400 mb-4">条件を変えて再検索してみてください</p>
                <button onClick={() => router.push("/search")}
                  className="px-5 py-2.5 bg-sky-500 text-white rounded-full font-bold text-xs">
                  条件を変える
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Menu item card ──────────────────────────────────────────────────────────

function MenuItemCard({ item, isFavorite, onTap, onFavorite, onRecord }: {
  item: MenuItem;
  isFavorite: boolean;
  onTap: () => void;
  onFavorite: (e: React.MouseEvent) => void;
  onRecord: (e: React.MouseEvent) => void;
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logoInfo = getChainLogo(item.chain_restaurants?.name || "");
  const showLogo = logoInfo && !logoFailed;

  return (
    <div onClick={onTap} className="flex items-center gap-3 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm active:bg-gray-50 transition-colors cursor-pointer">
      {/* Logo / image */}
      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
        style={{ backgroundColor: showLogo ? logoInfo.bg : "#f3f4f6" }}>
        {item.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
        ) : showLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoInfo.url} alt="" className="w-9 h-9 object-contain"
            onError={() => setLogoFailed(true)} />
        ) : (
          <Utensils className="w-6 h-6 text-gray-300" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400 leading-tight">{item.chain_restaurants?.name ?? "その他"}</p>
        <p className="text-sm font-bold text-gray-900 truncate leading-snug">{item.name}</p>
        <div className="flex items-center gap-2 mt-1">
          {item.calories != null && (
            <span className="text-xs font-bold text-sky-600">{item.calories} kcal</span>
          )}
          {item.protein != null && (
            <span className="text-[10px] text-blue-500 font-semibold">P {item.protein}g</span>
          )}
          {item.fat != null && (
            <span className="text-[10px] text-gray-400">F {item.fat}g</span>
          )}
          {item.price != null && (
            <span className="text-[10px] text-gray-500 font-semibold ml-auto">¥{item.price}</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <button onClick={onFavorite} className={`p-1 ${isFavorite ? "text-red-500" : "text-gray-300"}`}>
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
        <button onClick={onRecord} className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-500 text-white shadow-sm">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-3 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-sm text-gray-400">読み込み中...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
