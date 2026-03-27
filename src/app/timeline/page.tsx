"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Heart, MessageCircle, Utensils, Clock, Search } from "lucide-react";
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

const MEAL_LABEL: Record<string, string> = {
  breakfast: "朝食",
  lunch: "昼食",
  dinner: "夕食",
  snack: "間食",
};

const MEAL_COLOR: Record<string, string> = {
  breakfast: "bg-amber-50 text-amber-600",
  lunch: "bg-sky-50 text-sky-600",
  dinner: "bg-violet-50 text-violet-600",
  snack: "bg-pink-50 text-pink-600",
};

const TAGS = [
  "#ダイエット", "#筋トレ", "#外食ダイエット", "#高タンパク",
  "#低カロリー", "#チェーン店", "#ランチ", "#ヘルシー",
];

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
  for (let i = 0; i < userId.length; i++) hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}（${dayLabels[d.getDay()]}）`;
}

export default function TimelinePage() {
  const router = useRouter();
  const supabase = createClient();

  const [posts, setPosts] = useState<TimelinePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"recommend" | "new" | "mine">("recommend");

  const fetchTimeline = useCallback(async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }

    let query = supabase
      .from("food_logs")
      .select("*, menu_items(id, name, chain_restaurants(name, emoji)), profiles(display_name)")
      .order("logged_at", { ascending: false })
      .limit(50);

    if (tab === "mine") {
      query = query.eq("user_id", user.id);
    }

    const { data } = await query;
    if (data) setPosts(data as TimelinePost[]);
    setLoading(false);
  }, [supabase, router, tab]);

  useEffect(() => { fetchTimeline(); }, [fetchTimeline]);

  // Group posts by date
  const grouped = posts.reduce<Record<string, TimelinePost[]>>((acc, post) => {
    const dateKey = post.logged_at.split("T")[0];
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(post);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 pt-3">
          {/* Search bar */}
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 mb-3">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="メニュー・ユーザーを検索"
              className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none flex-1"
              readOnly
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-0 -mx-4 px-4">
            {([
              { key: "recommend" as const, label: "おすすめ" },
              { key: "new" as const, label: "新着" },
              { key: "mine" as const, label: "自分" },
            ]).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 py-2.5 text-sm font-semibold text-center transition-colors relative ${
                  tab === t.key ? "text-sky-500" : "text-gray-400"
                }`}
              >
                {t.label}
                {tab === t.key && <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-sky-500 rounded-full" />}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="max-w-lg mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 py-2.5">
            {TAGS.map((tag) => (
              <span key={tag} className="shrink-0 text-xs text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        {loading ? (
          <div className="p-4 space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full animate-shimmer" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3.5 w-28 bg-gray-100 rounded animate-shimmer" />
                    <div className="h-2.5 w-20 bg-gray-100 rounded animate-shimmer" />
                  </div>
                  <div className="h-6 w-16 bg-gray-100 rounded-lg animate-shimmer" />
                </div>
                <div className="h-14 bg-gray-50 rounded-xl animate-shimmer" />
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Utensils className="w-6 h-6 text-gray-300" />
            </div>
            <p className="text-sm text-gray-500 font-medium">まだ投稿がありません</p>
            <p className="text-xs text-gray-400 mt-1">食事を記録すると、ここに表示されます</p>
            <Link href="/record" className="inline-block mt-4 text-sm text-sky-500 font-semibold">
              食事を記録する →
            </Link>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {Object.entries(grouped).map(([dateKey, datePosts]) => (
              <div key={dateKey}>
                {datePosts.map((post) => {
                  const chainName = post.menu_items?.chain_restaurants?.name ?? "";
                  const logo = chainName ? getChainLogo(chainName) : null;
                  const userName = post.profiles?.display_name || "ユーザー";
                  const menuName = post.menu_items?.name ?? post.custom_name ?? "不明なメニュー";
                  const avatarChar = userName.charAt(0);
                  const avatarColor = getAvatarColor(post.user_id);
                  const mealColor = MEAL_COLOR[post.meal_type] ?? MEAL_COLOR.snack;

                  return (
                    <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-3 overflow-hidden">
                      {/* Header */}
                      <div className="px-4 pt-3.5 pb-2 flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                          {avatarChar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-gray-800 truncate">{userName}</p>
                            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${mealColor}`}>
                              {MEAL_LABEL[post.meal_type] ?? "食事"}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatDate(post.logged_at)}
                            <span className="text-gray-300">·</span>
                            {timeAgo(post.logged_at)}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-lg font-bold text-gray-900 tabular-nums leading-none">{post.calories}</p>
                          <p className="text-[10px] text-gray-400">kcal</p>
                        </div>
                      </div>

                      {/* Menu card */}
                      <div className="px-4 pb-2">
                        <Link
                          href={post.menu_items?.id ? `/items/${post.menu_items.id}` : "#"}
                          className="block bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {logo ? (
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 shrink-0" style={{ backgroundColor: logo.bg }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={logo.url} alt={chainName} className="w-full h-full object-contain" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                <Utensils className="w-5 h-5 text-gray-400" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              {chainName && <p className="text-[11px] text-gray-400">{chainName}</p>}
                              <p className="text-sm font-semibold text-gray-800 truncate">{menuName}</p>
                            </div>
                            <div className="flex gap-2 shrink-0 text-[11px] tabular-nums">
                              <span className="text-blue-500 font-medium">P{post.protein.toFixed(0)}</span>
                              <span className="text-amber-500 font-medium">F{post.fat.toFixed(0)}</span>
                              <span className="text-emerald-500 font-medium">C{post.carbs.toFixed(0)}</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* Actions */}
                      <div className="px-4 pb-3 flex items-center gap-4">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-pink-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-[11px]">いいね</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-sky-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-[11px]">コメント</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
