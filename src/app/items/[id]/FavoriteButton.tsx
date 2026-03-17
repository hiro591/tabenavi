"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function FavoriteButton({ itemId }: { itemId: string }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        setLoading(false);
        return;
      }
      setUserId(data.user.id);
      try {
        const { data: favs } = await supabase
          .from("favorites")
          .select("id")
          .eq("user_id", data.user.id)
          .eq("menu_item_id", itemId);
        setIsFavorited((favs?.length ?? 0) > 0);
      } catch {
        // favorites table may not exist yet
      }
      setLoading(false);
    });
  }, [itemId]);

  const toggleFavorite = async () => {
    if (!userId) return;
    const supabase = createClient();

    if (isFavorited) {
      setIsFavorited(false);
      await supabase
        .from("favorites")
        .delete()
        .eq("menu_item_id", itemId)
        .eq("user_id", userId);
    } else {
      setIsFavorited(true);
      await supabase
        .from("favorites")
        .insert({ user_id: userId, menu_item_id: itemId });
    }
  };

  if (loading) {
    return (
      <button className="flex items-center justify-center gap-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-300 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className="text-sm font-medium">お気に入り</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center justify-center gap-1 px-4 py-3 border rounded-xl transition-colors ${
        isFavorited
          ? "border-red-200 bg-red-50 text-red-500"
          : "border-gray-200 text-gray-500 hover:bg-gray-50"
      }`}
    >
      <svg
        className="w-5 h-5"
        fill={isFavorited ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <span className="text-sm font-medium">
        {isFavorited ? "お気に入り済み" : "お気に入り"}
      </span>
    </button>
  );
}
