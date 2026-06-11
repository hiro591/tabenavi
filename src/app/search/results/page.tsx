"use client";

import { Suspense } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getChainLogo } from "@/lib/chain-logos";
import { ChevronLeft, Heart, Plus, Utensils, SlidersHorizontal, LocateFixed, RefreshCw } from "lucide-react";
import RestaurantRequest from "@/components/RestaurantRequest";
import ShareButton from "@/components/ShareButton";
import { toast } from "sonner";
import { trackEvent } from "@/lib/track";

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

// Snap positions (vh percentage from top)
const SNAP_FULL = 10;  // sheet covers 90% of screen
const SNAP_HALF = 50;  // map and list roughly 50/50
const SNAP_MINI = 80;  // sheet is minimized, mostly map

// ─── Main Content ────────────────────────────────────────────────────────────

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [fetchError, setFetchError] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const latestReq = useRef(0); // 後着の旧レスポンスがUIを上書きするのを防ぐ世代ガード
  const lastFilterKey = useRef<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapMoved, setMapMoved] = useState(false);
  const [searchingArea, setSearchingArea] = useState(false);

  // Sheet position: px from top of the map container
  const [sheetPx, setSheetPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartPx = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Initialize sheet position to SNAP_HALF on mount
  useEffect(() => {
    const h = containerRef.current?.clientHeight ?? window.innerHeight;
    setSheetPx(h * SNAP_HALF / 100);
  }, []);

  // ─── Sheet drag (px-based for reliable tracking) ────────────────────────────

  const snapTo = useCallback((position: number) => {
    const h = containerRef.current?.clientHeight ?? window.innerHeight;
    const target = h * position / 100;
    setSheetPx(target);
    setDragging(false);
    // Let map recalculate its size after animation
    setTimeout(() => leafletMap.current?.invalidateSize(), 350);
  }, []);

  const onDragStart = useCallback((clientY: number) => {
    setDragging(true);
    dragStartY.current = clientY;
    dragStartPx.current = sheetPx;
  }, [sheetPx]);

  const onDragMove = useCallback((clientY: number) => {
    if (!dragging) return;
    const h = containerRef.current?.clientHeight ?? window.innerHeight;
    const delta = clientY - dragStartY.current;
    const minPx = h * SNAP_FULL / 100;
    const maxPx = h * SNAP_MINI / 100;
    setSheetPx(Math.max(minPx, Math.min(maxPx, dragStartPx.current + delta)));
  }, [dragging]);

  const onDragEnd = useCallback(() => {
    if (!dragging) return;
    const h = containerRef.current?.clientHeight ?? window.innerHeight;
    const pct = (sheetPx / h) * 100;
    // Snap to closest
    const snaps = [SNAP_FULL, SNAP_HALF, SNAP_MINI];
    const closest = snaps.reduce((a, b) => Math.abs(b - pct) < Math.abs(a - pct) ? b : a);
    snapTo(closest);
  }, [dragging, sheetPx, snapTo]);

  // Global touch/mouse listeners for drag
  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      onDragMove(e.touches[0].clientY);
    };
    const onTouchEnd = () => onDragEnd();
    const onMouseMove = (e: MouseEvent) => onDragMove(e.clientY);
    const onMouseUp = () => onDragEnd();

    if (dragging) {
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onDragMove, onDragEnd]);

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

    // Load CSS
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
        zoom: 15,
        zoomControl: false,
      });

      // Google-style tiles from CartoDB (cleaner than default OSM)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      // User location blue dot with pulse
      L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 10, fillColor: "#3b82f6", fillOpacity: 1, color: "white", weight: 3,
      }).addTo(map);
      // Outer pulse ring
      L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 20, fillColor: "#3b82f6", fillOpacity: 0.15, color: "#3b82f6", weight: 1, opacity: 0.3,
      }).addTo(map);

      // Detect when user pans the map
      map.on("moveend", () => {
        if (!userLocation) return;
        const center = map.getCenter();
        const dist = Math.abs(center.lat - userLocation.lat) + Math.abs(center.lng - userLocation.lng);
        if (dist > 0.005) setMapMoved(true);
      });

      leafletMap.current = map;
      setMapReady(true);

      setTimeout(() => map.invalidateSize(), 100);
    });
  }, [userLocation]);

  // ─── Search stores in map area via Overpass ──────────────────────────────────

  const searchStoresInArea = useCallback(async (bounds?: { s: number; w: number; n: number; e: number }) => {
    if (!leafletMap.current || items.length === 0) return;

    const L = await import("leaflet");

    // Clear old markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Count menus per chain
    const chainCounts = new Map<string, number>();
    items.forEach((item) => {
      const name = item.chain_restaurants?.name;
      if (name) chainCounts.set(name, (chainCounts.get(name) ?? 0) + 1);
    });

    const chainNames = [...chainCounts.keys()];
    if (chainNames.length === 0) return;

    // Use provided bounds or compute from current map view
    let bbox: string;
    if (bounds) {
      bbox = `${bounds.s},${bounds.w},${bounds.n},${bounds.e}`;
    } else {
      const b = leafletMap.current.getBounds();
      bbox = `${b.getSouth()},${b.getWest()},${b.getNorth()},${b.getEast()}`;
    }

    // チェーン名の正規表現メタ文字をエスケープ(「(」や「+」を含む店名でクエリが壊れるのを防ぐ)
    const escapeRe = (v: string) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const nameRegex = chainNames.slice(0, 15).map(escapeRe).join("|");
    const overpassQuery = `[out:json][timeout:15];(
      node["amenity"="restaurant"]["name"~"${nameRegex}"](${bbox});
      node["amenity"="fast_food"]["name"~"${nameRegex}"](${bbox});
      node["amenity"="cafe"]["name"~"${nameRegex}"](${bbox});
      node["shop"="convenience"]["name"~"${nameRegex}"](${bbox});
    );out body;`;

    try {
      const res = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: `data=${encodeURIComponent(overpassQuery)}`,
      });
      const data = await res.json();
      if (!data.elements || !leafletMap.current) return;

      const addedPositions = new Set<string>();

      data.elements.forEach((el: { lat: number; lon: number; tags?: { name?: string } }) => {
        if (!el.tags?.name) return;
        const storeName = el.tags.name;

        const matchedChain = chainNames.find((cn) => storeName.includes(cn));
        if (!matchedChain) return;

        const posKey = `${el.lat.toFixed(4)},${el.lon.toFixed(4)}`;
        if (addedPositions.has(posKey)) return;
        addedPositions.add(posKey);

        const count = chainCounts.get(matchedChain) ?? 0;

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">
          <path d="M20 46 C20 46 4 28 4 18 C4 9.2 11.2 2 20 2 S36 9.2 36 18 C36 28 20 46 20 46Z" fill="#0ea5e9" stroke="white" stroke-width="2"/>
          <circle cx="20" cy="18" r="11" fill="white"/>
          <text x="20" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0ea5e9">${count}</text>
        </svg>`;

        const icon = L.icon({
          iconUrl: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg),
          iconSize: [40, 48],
          iconAnchor: [20, 48],
          popupAnchor: [0, -48],
        });

        const marker = L.marker([el.lat, el.lon], { icon })
          .bindPopup(
            `<div style="text-align:center;min-width:120px">` +
            `<b style="font-size:13px">${storeName}</b><br>` +
            `<span style="color:#0ea5e9;font-weight:bold;font-size:14px">${count}件</span>` +
            `<span style="color:#888;font-size:11px"> のメニューが該当</span>` +
            `</div>`
          )
          .addTo(leafletMap.current!);

        markersRef.current.push(marker);
      });
    } catch {
      toast("周辺店舗を取得できませんでした", { description: "時間をおいて再検索してください" });
    }
  }, [items]);

  // Auto-search on initial load
  useEffect(() => {
    if (!mapReady || items.length === 0 || !userLocation) return;
    const bounds = {
      s: userLocation.lat - 0.03, w: userLocation.lng - 0.04,
      n: userLocation.lat + 0.03, e: userLocation.lng + 0.04,
    };
    searchStoresInArea(bounds);
  }, [items, mapReady, userLocation, searchStoresInArea]);

  // "このエリアで再検索" handler
  const handleSearchThisArea = useCallback(async () => {
    setSearchingArea(true);
    await searchStoresInArea();
    setMapMoved(false);
    setSearchingArea(false);
  }, [searchStoresInArea]);

  // "現在地に戻る" handler
  const goToMyLocation = useCallback(() => {
    if (!leafletMap.current || !userLocation) return;
    leafletMap.current.flyTo([userLocation.lat, userLocation.lng], 15, { duration: 0.8 });
    setMapMoved(false);
  }, [userLocation]);

  // ─── Fetch items ────────────────────────────────────────────────────────────

  const filterKey = [searchQ, category, sourceType, calorieMin, calorieMax, proteinMin, proteinMax, fatMin, fatMax, priceMin, priceMax, sort].join("|");

  const fetchItems = useCallback(async () => {
    // フィルタが変わったらページを1に戻してから取得(古いpageで新フィルタを取らない)
    if (lastFilterKey.current !== filterKey && page !== 1) {
      lastFilterKey.current = filterKey;
      setPage(1);
      return;
    }
    lastFilterKey.current = filterKey;
    const reqId = ++latestReq.current;
    if (page === 1) setLoading(true);
    setFetchError(false);
    const supabase = createClient();
    let query = supabase
      .from("menu_items")
      .select("id, name, calories, protein, fat, carbs, price, category, source_type, image_url, description, chain_restaurants(name, emoji)", { count: "exact" });

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

    const from = (page - 1) * 20;
    const { data, error, count } = await query.range(from, from + 19);
    if (reqId !== latestReq.current) return; // 後着の旧レスポンスは破棄
    if (error) {
      setFetchError(true);
      setLoading(false);
      setLoadingMore(false);
      return;
    }
    const fetched = (data as unknown as MenuItem[]) || [];
    // 2ページ目以降は追記(毎回先頭から全再取得しない)
    setItems((prev) => (page === 1 ? fetched : [...prev, ...fetched]));
    setTotalCount(count ?? null);
    setHasMore(count != null ? from + fetched.length < count : fetched.length === 20);
    setLoading(false);
    setLoadingMore(false);
  }, [filterKey, searchQ, category, sourceType, calorieMin, calorieMax, proteinMin, proteinMax, fatMin, fatMax, priceMin, priceMax, sort, page]);

  // PUBLIC: works without account. Logged-in users get favorites; guests just browse.
  // 認証+お気に入り取得はマウント時1回(ソート変更のたびに再取得しない)。結果取得とは独立に走らせる
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (data.user) {
        setUserId(data.user.id);
        try {
          const { data: favs } = await supabase.from("favorites").select("menu_item_id").eq("user_id", data.user.id);
          setFavoriteIds(new Set(favs?.map((f) => f.menu_item_id) || []));
        } catch {}
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const updateSort = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newSort === "recommended") params.delete("sort");
    else params.set("sort", newSort);
    router.push(`/search/results?${params.toString()}`);
  };

  const toggleFavorite = async (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    // 匿名: 無言no-opにせず登録の価値を伝える(完了後はこの検索結果に復帰)
    if (!userId) {
      trackEvent("favorite_tap_anonymous", { item_id: itemId });
      toast("お気に入りは無料登録（30秒）で使えます", {
        description: "よく食べるメニューを保存して、すぐ呼び出せます",
        action: {
          label: "無料登録",
          onClick: () => router.push(`/signup?next=${encodeURIComponent(`/search/results?${searchParams.toString()}`)}`),
        },
      });
      return;
    }
    const supabase = createClient();
    const wasFavorite = favoriteIds.has(itemId);
    // 楽観更新
    setFavoriteIds((prev) => {
      const s = new Set(prev);
      if (wasFavorite) s.delete(itemId); else s.add(itemId);
      return s;
    });
    const { error } = wasFavorite
      ? await supabase.from("favorites").delete().eq("menu_item_id", itemId).eq("user_id", userId)
      : await supabase.from("favorites").insert({ user_id: userId, menu_item_id: itemId });
    if (error) {
      // 失敗時ロールバック
      setFavoriteIds((prev) => {
        const s = new Set(prev);
        if (wasFavorite) s.add(itemId); else s.delete(itemId);
        return s;
      });
      toast.error("お気に入りの更新に失敗しました。もう一度お試しください");
    }
  };

  const loadMore = () => { setLoadingMore(true); setPage((p) => p + 1); };

  const pageTitle = searchQ || category || (sourceType === "convenience_store" ? "コンビニ" : sourceType === "chain_restaurant" ? "外食チェーン" : "検索結果");

  return (
    <div className="fixed inset-0 flex flex-col bg-gray-50 overflow-hidden">
      {/* ─── Header ─── */}
      <div className="bg-white border-b border-gray-200 z-30 shrink-0">
        <div className="flex items-center gap-2 px-3 py-2">
          <button onClick={() => router.back()} aria-label="戻る" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-sm font-bold text-gray-900 truncate flex-1">{pageTitle}</h1>
          <span className="text-xs text-gray-400 shrink-0">{totalCount != null ? `全${totalCount}件` : `${items.length}件`}</span>
          <button onClick={() => router.push("/search")} className="shrink-0 px-3 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-bold">
            <SlidersHorizontal className="w-3.5 h-3.5 inline mr-1" />
            条件変更
          </button>
        </div>
      </div>

      {/* ─── Map + Sheet container ─── */}
      <div ref={containerRef} className="flex-1 relative overflow-hidden">
        {/* Map fills entire area behind the sheet */}
        <div ref={mapRef} className="absolute inset-0 z-0" />

        {/* ─── Map overlay buttons ─── */}
        {mapReady && (
          <>
            {/* "このエリアで再検索" button - shown when map is panned */}
            {mapMoved && (
              <button
                onClick={handleSearchThisArea}
                disabled={searchingArea}
                className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white text-sky-600 font-bold text-xs px-4 py-2 rounded-full shadow-lg border border-gray-200 flex items-center gap-1.5 disabled:opacity-60"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${searchingArea ? "animate-spin" : ""}`} />
                {searchingArea ? "検索中..." : "このエリアで再検索"}
              </button>
            )}

            {/* GPS: back to my location */}
            <button
              onClick={goToMyLocation}
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 active:bg-gray-50"
            >
              <LocateFixed className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Loading overlay */}
        {!mapReady && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-8 h-8 border-[3px] border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-xs text-gray-400">マップを読み込み中...</p>
            </div>
          </div>
        )}

        {/* ─── Bottom sheet ─── */}
        <div
          className="absolute left-0 right-0 bottom-0 z-20 bg-white rounded-t-2xl flex flex-col"
          style={{
            top: sheetPx > 0 ? `${sheetPx}px` : "50%",
            transition: dragging ? "none" : "top 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
            boxShadow: "0 -2px 20px rgba(0,0,0,0.12)",
          }}
        >
          {/* ─── Drag handle area (large touch target) ─── */}
          <div
            className="shrink-0 cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "none" }}
            onTouchStart={(e) => onDragStart(e.touches[0].clientY)}
            onMouseDown={(e) => { e.preventDefault(); onDragStart(e.clientY); }}
          >
            {/* Visual handle bar */}
            <div className="flex justify-center py-3">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* Sort pills (inside drag area so whole top region is draggable) */}
            <div
              className="flex gap-1.5 px-4 pb-3 overflow-x-auto"
              style={{ WebkitOverflowScrolling: "touch" }}
              onTouchStart={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {SORT_OPTIONS.map((opt) => (
                <button key={opt.value} onClick={() => updateSort(opt.value)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    sort === opt.value ? "bg-sky-500 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Results list ─── */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-3 pb-28">
            {loading ? (
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-50 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : fetchError ? (
              <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                <p className="text-sm font-bold text-gray-700 mb-1">読み込みに失敗しました</p>
                <p className="text-xs text-gray-400 mb-4">通信環境をご確認のうえ、もう一度お試しください</p>
                <button onClick={() => fetchItems()}
                  className="px-5 py-2.5 bg-sky-500 text-white rounded-full font-bold text-xs">
                  再試行
                </button>
              </div>
            ) : items.length > 0 ? (
              <div className="space-y-2">
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
                    className="w-full py-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 disabled:opacity-50">
                    {loadingMore ? "読み込み中..." : "もっと見る"}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center mb-3">
                  <Utensils className="w-6 h-6 text-sky-300" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">見つかりませんでした</p>
                <p className="text-xs text-gray-400 mb-4">条件を変えて再検索してみてください</p>
                <button onClick={() => router.push("/search")}
                  className="px-5 py-2.5 bg-sky-500 text-white rounded-full font-bold text-xs mb-6">
                  条件を変える
                </button>
                <div className="w-full">
                  <RestaurantRequest searchQuery={searchParams.get("q") || ""} />
                </div>
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
      {/* Logo */}
      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
        style={{ backgroundColor: showLogo ? logoInfo.bg : "#f3f4f6" }}>
        {item.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image_url} alt={item.name} loading="lazy" decoding="async" width={56} height={56} className="w-full h-full object-cover" />
        ) : showLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoInfo.url} alt="" loading="lazy" decoding="async" width={36} height={36} className="w-9 h-9 object-contain"
            onError={() => setLogoFailed(true)} />
        ) : (
          <Utensils className="w-6 h-6 text-gray-300" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400 leading-tight truncate">{item.chain_restaurants?.name ?? "その他"}</p>
        <p className="text-sm font-bold text-gray-900 truncate leading-snug">{item.name}</p>
        <div className="flex items-center gap-2 mt-1">
          {item.calories != null && <span className="text-xs font-bold text-sky-600">{item.calories} kcal</span>}
          {item.protein != null && <span className="text-[10px] text-blue-500 font-semibold">P {item.protein}g</span>}
          {item.fat != null && <span className="text-[10px] text-gray-400">F {item.fat}g</span>}
          {item.price != null && <span className="text-[10px] text-gray-500 font-semibold ml-auto">¥{item.price}</span>}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <button onClick={onFavorite} aria-label={isFavorite ? "お気に入りから削除" : "お気に入りに追加"} aria-pressed={isFavorite} className={`p-1.5 -m-0.5 ${isFavorite ? "text-red-500" : "text-gray-300"}`}>
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
        <div onClick={(e) => e.stopPropagation()}>
          <ShareButton item={item} />
        </div>
        <button onClick={onRecord} aria-label="この食事を記録" className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-500 text-white shadow-sm">
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
          <div className="w-8 h-8 border-[3px] border-sky-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <p className="text-sm text-gray-400">読み込み中...</p>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
