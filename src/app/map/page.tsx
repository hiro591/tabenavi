"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, MapPin, Utensils } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OverpassNode {
  type: "node";
  id: number;
  lat: number;
  lon: number;
  tags: {
    name?: string;
    amenity?: string;
    shop?: string;
    brand?: string;
  };
}

interface NearbyStore {
  id: number;
  name: string;
  lat: number;
  lon: number;
  type: "convenience_store" | "chain_restaurant" | "supermarket" | "other";
  chainKey: string | null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CHAIN_MAP: Record<string, { key: string; type: NearbyStore["type"]; color: string; emoji: string }> = {
  "セブンイレブン":     { key: "セブンイレブン",   type: "convenience_store",  color: "#007B40", emoji: "C" },
  "セブン-イレブン":    { key: "セブンイレブン",   type: "convenience_store",  color: "#007B40", emoji: "C" },
  "7-Eleven":           { key: "セブンイレブン",   type: "convenience_store",  color: "#007B40", emoji: "C" },
  "ローソン":           { key: "ローソン",          type: "convenience_store",  color: "#0068b7", emoji: "C" },
  "Lawson":             { key: "ローソン",          type: "convenience_store",  color: "#0068b7", emoji: "C" },
  "ファミリーマート":   { key: "ファミリーマート",  type: "convenience_store",  color: "#007bff", emoji: "C" },
  "FamilyMart":         { key: "ファミリーマート",  type: "convenience_store",  color: "#007bff", emoji: "C" },
  "マクドナルド":       { key: "マクドナルド",      type: "chain_restaurant",   color: "#ffc300", emoji: "R" },
  "McDonald's":         { key: "マクドナルド",      type: "chain_restaurant",   color: "#ffc300", emoji: "R" },
  "すき家":             { key: "すき家",            type: "chain_restaurant",   color: "#f97316", emoji: "R" },
  "吉野家":             { key: "吉野家",            type: "chain_restaurant",   color: "#ef4444", emoji: "R" },
  "松屋":               { key: "松屋",              type: "chain_restaurant",   color: "#d97706", emoji: "R" },
  "スターバックス":     { key: "スターバックス",    type: "chain_restaurant",   color: "#00704a", emoji: "R" },
  "Starbucks":          { key: "スターバックス",    type: "chain_restaurant",   color: "#00704a", emoji: "R" },
  "モスバーガー":       { key: "モスバーガー",      type: "chain_restaurant",   color: "#e63e3e", emoji: "R" },
  "ケンタッキー":       { key: "ケンタッキー",      type: "chain_restaurant",   color: "#c8102e", emoji: "R" },
  "KFC":                { key: "ケンタッキー",      type: "chain_restaurant",   color: "#c8102e", emoji: "R" },
  "サイゼリヤ":         { key: "サイゼリヤ",        type: "chain_restaurant",   color: "#16a34a", emoji: "R" },
  "ガスト":             { key: "ガスト",            type: "chain_restaurant",   color: "#f59e0b", emoji: "R" },
  "バーミヤン":         { key: "バーミヤン",        type: "chain_restaurant",   color: "#0ea5e9", emoji: "R" },
  "餃子の王将":         { key: "餃子の王将",        type: "chain_restaurant",   color: "#dc2626", emoji: "R" },
  "日高屋":             { key: "日高屋",            type: "chain_restaurant",   color: "#f97316", emoji: "R" },
  "イオン":             { key: "イオン",            type: "supermarket",        color: "#0ea5e9", emoji: "S" },
  "西友":               { key: "西友",              type: "supermarket",        color: "#e11d48", emoji: "S" },
};

function classifyStore(name: string): { key: string | null; type: NearbyStore["type"]; color: string; emoji: string } {
  for (const [k, v] of Object.entries(CHAIN_MAP)) {
    if (name.includes(k)) return { key: v.key, type: v.type, color: v.color, emoji: v.emoji };
  }
  return { key: null, type: "other", color: "#9ca3af", emoji: "?" };
}

function makeCircleIcon(color: string, label: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48">
      <circle cx="20" cy="20" r="18" fill="${color}" opacity="0.9"/>
      <circle cx="20" cy="20" r="14" fill="white" opacity="0.2"/>
      <text x="20" y="26" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="sans-serif">${label}</text>
      <polygon points="20,42 13,32 27,32" fill="${color}" opacity="0.9"/>
    </svg>
  `.trim();
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

const STORE_FILTERS = [
  { label: "すべて",      value: "all" },
  { label: "コンビニ",   value: "convenience_store" },
  { label: "外食",       value: "chain_restaurant" },
  { label: "スーパー",   value: "supermarket" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function MapPage() {
  const router = useRouter();
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<import("leaflet").Marker[]>([]);

  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState(false);
  const [stores, setStores] = useState<NearbyStore[]>([]);
  const [loadingStores, setLoadingStores] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<NearbyStore | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [storeError, setStoreError] = useState(false);

  // Auth
  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => {
      if (!data.user) router.replace("/login");
    });
  }, [router]);

  // Geolocation — show default immediately, then update when location is available
  useEffect(() => {
    // Show Tokyo Station immediately so the map loads right away
    setLocation({ lat: 35.6812, lng: 139.7671 });

    if (!navigator.geolocation) {
      setLocationError(true);
      return;
    }

    // Check permission first
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "denied") {
          setLocationError(true);
          return;
        }
        requestLocation();
      }).catch(() => {
        // permissions API not supported, try anyway
        requestLocation();
      });
    } else {
      requestLocation();
    }

    function requestLocation() {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLocationError(false);
          // Move existing map to new location
          if (leafletMap.current) {
            leafletMap.current.setView([pos.coords.latitude, pos.coords.longitude], 16);
          }
        },
        () => {
          setLocationError(true);
        },
        { timeout: 10000, enableHighAccuracy: false, maximumAge: 600000 }
      );
    }
  }, []);

  // Init map
  useEffect(() => {
    if (!location || !mapRef.current || leafletMap.current) return;

    import("leaflet").then((L) => {
      // Fix leaflet icon issue in Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [location.lat, location.lng],
        zoom: 16,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      // Current location marker
      L.circleMarker([location.lat, location.lng], {
        radius: 10,
        fillColor: "#3b82f6",
        color: "white",
        weight: 3,
        fillOpacity: 0.9,
      })
        .bindPopup("現在地")
        .addTo(map);

      leafletMap.current = map;
      setMapReady(true);
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Fetch nearby stores from Overpass API
  useEffect(() => {
    if (!location) return;

    const fetchStores = async () => {
      setLoadingStores(true);
      const { lat, lng } = location;
      const radius = 1000;

      const query = `
        [out:json][timeout:15];
        (
          node["amenity"="fast_food"](around:${radius},${lat},${lng});
          node["amenity"="restaurant"](around:${radius},${lat},${lng});
          node["amenity"="cafe"](around:${radius},${lat},${lng});
          node["shop"="convenience"](around:${radius},${lat},${lng});
          node["shop"="supermarket"](around:${radius},${lat},${lng});
        );
        out body;
      `;

      try {
        const res = await fetch("https://overpass-api.de/api/interpreter", {
          method: "POST",
          body: "data=" + encodeURIComponent(query),
        });
        const json = await res.json();
        const nodes: OverpassNode[] = json.elements || [];

        const nearby: NearbyStore[] = [];
        for (const node of nodes) {
          const rawName = node.tags.name || node.tags.brand || "";
          if (!rawName) continue;
          const info = classifyStore(rawName);
          // Only show known chains + conveni
          if (info.type === "other" && node.tags.shop !== "convenience") continue;
          nearby.push({
            id: node.id,
            name: rawName,
            lat: node.lat,
            lon: node.lon,
            type: info.type,
            chainKey: info.key,
          });
        }

        setStores(nearby);
      } catch {
        setStoreError(true);
      }
      setLoadingStores(false);
    };

    fetchStores();
  }, [location]);

  // Update markers when stores or filter changes
  useEffect(() => {
    if (!mapReady || !leafletMap.current) return;

    import("leaflet").then((L) => {
      // Clear old markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const filtered = filter === "all" ? stores : stores.filter((s) => s.type === filter);

      for (const store of filtered) {
        const info = classifyStore(store.name);
        const icon = L.icon({
          iconUrl: makeCircleIcon(info.color, info.emoji),
          iconSize: [40, 48],
          iconAnchor: [20, 48],
          popupAnchor: [0, -48],
        });

        const marker = L.marker([store.lat, store.lon], { icon })
          .addTo(leafletMap.current!)
          .on("click", () => {
            setSelected(store);
          });

        markersRef.current.push(marker);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores, filter, mapReady]);

  const filteredStores = filter === "all" ? stores : stores.filter((s) => s.type === filter);

  const handleViewMenu = (store: NearbyStore) => {
    if (store.chainKey) {
      router.push(`/search/results?q=${encodeURIComponent(store.chainKey)}`);
    } else if (store.type !== "other") {
      router.push(`/search/results?source_type=${store.type}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <div className="fixed inset-0 bg-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-gray-900 flex-1 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-orange-500" /> 近くのお店
          </h1>
          {loadingStores && (
            <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
          )}
          {!loadingStores && stores.length > 0 && (
            <span className="text-xs text-gray-400">{filteredStores.length}件</span>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 px-4 pb-2 overflow-x-auto scrollbar-hide">
          {STORE_FILTERS.map((f) => {
            const count =
              f.value === "all"
                ? stores.length
                : stores.filter((s) => s.type === f.value).length;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === f.value
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {f.label}{stores.length > 0 ? ` (${count})` : ""}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Location error */}
      {locationError && (
        <div className="absolute top-24 left-4 right-4 z-[1000] bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2">
          <p className="text-xs text-yellow-700">現在地を取得できませんでした。東京駅周辺を表示しています。</p>
        </div>
      )}

      {/* Manual location search fallback */}
      {locationError && (
        <div className="absolute top-32 left-4 right-4 z-[1000]">
          <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex gap-2">
            <input
              type="text"
              placeholder="場所を入力（例：渋谷駅）"
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const query = (e.target as HTMLInputElement).value;
                  if (query) {
                    fetch(
                      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=jp&limit=1`
                    )
                      .then((r) => r.json())
                      .then((results) => {
                        if (results[0]) {
                          const lat = parseFloat(results[0].lat);
                          const lng = parseFloat(results[0].lon);
                          setLocation({ lat, lng });
                        }
                      });
                  }
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Store fetch error */}
      {storeError && (
        <div className="absolute top-24 left-4 right-4 z-[1000] bg-red-50 border border-red-200 rounded-xl px-4 py-2">
          <p className="text-xs text-red-700">店舗情報の取得に失敗しました</p>
        </div>
      )}

      {/* No stores */}
      {!loadingStores && mapReady && stores.length === 0 && !storeError && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] bg-white rounded-2xl shadow-lg px-6 py-5 text-center max-w-xs">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <MapPin className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm font-medium text-gray-700">近くのお店が見つかりませんでした</p>
          <p className="text-xs text-gray-400 mt-1">OpenStreetMapにデータがない地域かもしれません</p>
        </div>
      )}

      {/* Selected store bottom sheet */}
      {selected && (
        <div
          className="absolute bottom-24 left-0 right-0 z-[1000] px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="px-5 py-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      selected.type === "convenience_store"
                        ? "bg-blue-100 text-blue-700"
                        : selected.type === "chain_restaurant"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {selected.type === "convenience_store" ? "コンビニ"
                        : selected.type === "chain_restaurant" ? "外食チェーン"
                        : selected.type === "supermarket" ? "スーパー" : "その他"}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{selected.name}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleViewMenu(selected)}
                  className="flex-1 py-3 bg-orange-500 text-white rounded-xl font-medium text-sm active:bg-orange-600 transition-colors"
                >
                  このお店のメニューを見る
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.name)}&near=${selected.lat},${selected.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 font-medium active:bg-gray-50 transition-colors"
                >
                  地図
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tap to dismiss */}
      {selected && (
        <div
          className="absolute inset-0 z-[999]"
          onClick={() => setSelected(null)}
        />
      )}
    </div>
  );
}
