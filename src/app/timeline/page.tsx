"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Heart, MessageCircle, MapPin, Utensils, Clock } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

interface TimelinePost {
  id: string;
  user_id: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  meal_type: string;
  logged_at: string;
  custom_name: string | null;
  menu_items: {
    id: string;
    name: string;
    chain_restaurants: {
      name: string;
      emoji: string;
    } | null;
  } | null;
  profiles: {
    display_name: string | null;
  } | null;
}

const MEAL_EMOJI: Record<string, string> = {
  breakfast: "🌅",
  lunch: "☀️",
  dinner: "🌙",
  snack: "🍪",
};

const MEAL_LABEL: Record<string, string> = {
  breakfast: "朝食",
  lunch: "昼食",
  dinner: "夕食",
  snack: "間食",
};

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return "たった今";
  if (diff < 3600) return `${Math.floor(diff / 60)}分前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}時間前`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}日前`;
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function getAvatarColor(userId: string): string {
  const colors = [
    "bg-sky-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400",
    "bg-pink-400", "bg-cyan-400", "bg-indigo-400", "bg-rose-400",
  ];
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function TimelinePage() {
  const router = useRouter();
  const supabase = createClient();

  const [posts, setPosts] = useState<TimelinePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"all" | "following">("all");

  const fetchTimeline = useCallback(async () => {
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    // Fetch recent food logs from all users (public timeline)
    const { data } = await supabase
      .from("food_logs")
      .select("*, menu_items(id, name, chain_restaurants(name, emoji)), profiles(display_name)")
      .order("logged_at", { ascending: false })
      .limit(50);

    if (data) {
      setPosts(data as TimelinePost[]);
    }

    setLoading(false);
  }, [supabase, router]);

  useEffect(() => {
    fetchTimeline();
  }, [fetchTimeline]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 pt-4 pb-0">
          <h1 className="text-lg font-bold text-gray-900 mb-3">みんなの外食</h1>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-100 -mx-4 px-4">
            <button
              onClick={() => setTab("all")}
              className={`flex-1 py-2.5 text-sm font-semibold text-center transition-colors relative ${
                tab === "all" ? "text-sky-500" : "text-gray-400"
              }`}
            >
              みんな
              {tab === "all" && <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-sky-500 rounded-full" />}
            </button>
            <button
              onClick={() => setTab("following")}
              className={`flex-1 py-2.5 text-sm font-semibold text-center transition-colors relative ${
                tab === "following" ? "text-sky-500" : "text-gray-400"
              }`}
            >
              おすすめ
              {tab === "following" && <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-sky-500 rounded-full" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        {loading ? (
          <div className="p-4 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full animate-shimmer" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3.5 w-24 bg-gray-100 rounded animate-shimmer" />
                    <div className="h-2.5 w-16 bg-gray-100 rounded animate-shimmer" />
                  </div>
                </div>
                <div className="h-16 bg-gray-50 rounded-xl animate-shimmer" />
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Utensils className="w-6 h-6 text-gray-300" />
            </div>
            <p className="text-sm text-gray-400">まだ投稿がありません</p>
            <p className="text-xs text-gray-300 mt-1">食事を記録すると、ここに表示されます</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {posts.map((post) => {
              const chainName = post.menu_items?.chain_restaurants?.name ?? "";
              const logo = chainName ? getChainLogo(chainName) : null;
              const userName = post.profiles?.display_name || "ユーザー";
              const menuName = post.menu_items?.name ?? post.custom_name ?? "不明なメニュー";
              const avatarChar = userName.charAt(0).toUpperCase();
              const avatarColor = getAvatarColor(post.user_id);

              return (
                <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* User info */}
                  <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
                      {avatarChar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
                      <p className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {timeAgo(post.logged_at)}
                        <span className="mx-0.5">·</span>
                        {MEAL_EMOJI[post.meal_type]} {MEAL_LABEL[post.meal_type] ?? "食事"}
                      </p>
                    </div>
                  </div>

                  {/* Menu content */}
                  <div className="px-4 pb-3">
                    <div className="bg-gray-50 rounded-xl p-3.5">
                      <div className="flex items-start gap-3">
                        {logo ? (
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0" style={{ backgroundColor: logo.bg }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={logo.url} alt={chainName} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <Utensils className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          {chainName && <p className="text-[11px] text-gray-400">{chainName}</p>}
                          <p className="text-sm font-semibold text-gray-800 truncate">{menuName}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-sm font-bold text-sky-500 tabular-nums">{post.calories} kcal</span>
                            <span className="text-[11px] text-gray-400 tabular-nums">P{post.protein.toFixed(0)}g</span>
                            <span className="text-[11px] text-gray-400 tabular-nums">F{post.fat.toFixed(0)}g</span>
                            <span className="text-[11px] text-gray-400 tabular-nums">C{post.carbs.toFixed(0)}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-4 pb-3 flex items-center gap-5">
                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">いいね</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-sky-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">コメント</span>
                    </button>
                    {post.menu_items?.id && (
                      <Link
                        href={`/items/${post.menu_items.id}`}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-emerald-500 transition-colors ml-auto"
                      >
                        <span className="text-xs">メニュー詳細 →</span>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
