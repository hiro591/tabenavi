"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, Heart, Utensils } from "lucide-react";

interface FavoriteItem {
  id: string;
  menu_item_id: string;
  menu_items: {
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
  };
}

function getStoreBadgeStyle(
  name: string | undefined,
  sourceType: string | null
): string {
  const n = name ?? "";
  if (n.includes("セブン")) return "bg-green-100 text-green-700";
  if (n.includes("ローソン")) return "bg-blue-100 text-blue-700";
  if (n.includes("ファミリー") || n.includes("ファミマ"))
    return "bg-sky-100 text-sky-700";
  if (n.includes("マクドナルド")) return "bg-yellow-100 text-yellow-700";
  if (n.includes("すき家")) return "bg-orange-100 text-orange-700";
  if (n.includes("吉野家")) return "bg-red-100 text-red-700";
  if (n.includes("松屋")) return "bg-amber-100 text-amber-700";
  if (n.includes("スターバックス")) return "bg-green-100 text-green-800";
  if (sourceType === "convenience_store") return "bg-blue-50 text-blue-600";
  return "bg-orange-50 text-orange-600";
}

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      try {
        const { data: favs } = await supabase
          .from("favorites")
          .select(
            "id, menu_item_id, menu_items(id, name, calories, protein, fat, carbs, price, category, source_type, image_url, chain_restaurants(name, emoji))"
          )
          .eq("user_id", data.user.id)
          .order("created_at", { ascending: false });
        setFavorites((favs as unknown as FavoriteItem[]) || []);
      } catch {
        // favorites table may not exist yet
      }
      setLoading(false);
    });
  }, [router]);

  const removeFavorite = async (favoriteId: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== favoriteId));
    const supabase = createClient();
    await supabase.from("favorites").delete().eq("id", favoriteId);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3">
            <button
              onClick={() => router.back()}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-gray-900 flex-1">
              お気に入り
            </h1>
            {!loading && favorites.length > 0 && (
              <span className="text-sm text-gray-400 font-medium">
                {favorites.length}件
              </span>
            )}
          </div>
        </div>

        <div className="px-4 pb-32">
          {loading ? (
            <div className="space-y-3 pt-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-28 bg-gray-100 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : favorites.length > 0 ? (
            <div className="space-y-3 pt-4">
              {favorites.map((fav) => {
                const item = fav.menu_items;
                return (
                  <div
                    key={fav.id}
                    onClick={() => router.push(`/items/${fav.menu_item_id}`)}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm active:shadow-none active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <div className="flex">
                      {/* Photo placeholder */}
                      <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
                        {item.image_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Utensils className="w-9 h-9 text-orange-300" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 p-3">
                        {/* Store badge */}
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${getStoreBadgeStyle(item.chain_restaurants?.name, item.source_type)}`}
                          >
                            {item.chain_restaurants?.name || "その他"}
                          </span>
                        </div>

                        {/* Item name */}
                        <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                          {item.name}
                        </p>

                        {/* Nutrition row */}
                        <div className="flex items-center gap-2 mt-1.5 text-xs">
                          {item.calories != null && (
                            <span className="text-orange-500 font-semibold">
                              {item.calories}kcal
                            </span>
                          )}
                          {item.protein != null && (
                            <span className="text-blue-500">
                              P {item.protein}g
                            </span>
                          )}
                          {item.price != null && (
                            <span className="ml-auto text-gray-700 font-bold">
                              &yen;{item.price}
                            </span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFavorite(fav.id);
                            }}
                            className="text-red-500 transition-colors ml-1"
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-9 h-9 text-red-300" />
              </div>
              <p className="text-base font-medium text-gray-700 mb-2">
                お気に入りがまだありません
              </p>
              <p className="text-sm text-gray-400 mb-6">
                検索結果のハートをタップして保存しましょう
              </p>
              <button
                onClick={() => router.push("/search")}
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
              >
                メニューを探す
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
