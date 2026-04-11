"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Utensils, Clock, PenSquare, Trash2 } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

interface PublicPost {
  id: string;
  user_id: string;
  text: string | null;
  menu_name: string | null;
  chain_name: string | null;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  menu_item_id: string | null;
  photo_url: string | null;
  created_at: string;
  profiles: {
    display_name: string | null;
  } | null;
}

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
  const colors = ["bg-sky-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400", "bg-pink-400", "bg-cyan-400", "bg-indigo-400", "bg-rose-400"];
  let hash = 0;
  for (let i = 0; i < userId.length; i++) hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export default function TimelinePage() {
  const router = useRouter();
  const supabase = createClient();

  const [posts, setPosts] = useState<PublicPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [tab, setTab] = useState<"all" | "mine">("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }
    setCurrentUserId(user.id);

    let query = supabase
      .from("public_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (tab === "mine") {
      query = query.eq("user_id", user.id);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Timeline fetch error:", error);
    }
    if (data) {
      // Fetch display names separately
      const userIds = [...new Set(data.map((p: { user_id: string }) => p.user_id))];
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("id, display_name")
        .in("id", userIds);

      const profileMap = new Map(
        (profilesData ?? []).map((p: { id: string; display_name: string | null }) => [p.id, p.display_name])
      );

      const postsWithNames = data.map((p: Record<string, unknown>) => ({
        ...p,
        profiles: { display_name: profileMap.get(p.user_id as string) ?? null },
      }));

      setPosts(postsWithNames as PublicPost[]);
    }
    setLoading(false);
  }, [supabase, router, tab]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const handleDelete = async (postId: string) => {
    if (!confirm("この投稿を削除しますか？")) return;
    setDeletingId(postId);
    try {
      const { error } = await supabase.from("public_posts").delete().eq("id", postId);
      if (error) throw error;
      setPosts((prev) => prev.filter((p) => p.id !== postId));
    } catch {
      alert("削除に失敗しました。もう一度お試しください。");
    }
    setDeletingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 pt-3">
          <div className="flex gap-0 -mx-4 px-4">
            {([
              { key: "all" as const, label: "みんな" },
              { key: "mine" as const, label: "自分の投稿" },
            ]).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 py-2.5 text-sm font-semibold text-center transition-colors relative ${tab === t.key ? "text-sky-500" : "text-gray-400"}`}
              >
                {t.label}
                {tab === t.key && <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-sky-500 rounded-full" />}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-lg mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 py-2.5">
            {TAGS.map((tag) => (
              <span key={tag} className="shrink-0 text-xs text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 font-medium">{tag}</span>
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
            <p className="text-xs text-gray-400 mt-1">最初の投稿をしてみよう！</p>
            <Link href="/timeline/post" className="inline-block mt-4 text-sm text-sky-500 font-semibold">
              投稿する →
            </Link>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {posts.map((post) => {
              const logo = post.chain_name ? getChainLogo(post.chain_name) : null;
              const userName = post.profiles?.display_name || "ユーザー";
              const avatarChar = userName.charAt(0);
              const avatarColor = getAvatarColor(post.user_id);
              const isOwn = post.user_id === currentUserId;

              return (
                <div key={post.id} className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all ${deletingId === post.id ? "opacity-40 scale-95" : ""}`}>
                  {/* Header */}
                  <div className="px-4 pt-3.5 pb-2 flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {avatarChar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate">{userName}</p>
                      <p className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {timeAgo(post.created_at)}
                      </p>
                    </div>
                    {post.calories && (
                      <div className="text-right shrink-0">
                        <p className="text-lg font-bold text-gray-900 tabular-nums leading-none">{post.calories}</p>
                        <p className="text-[10px] text-gray-400">kcal</p>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  {post.text && (
                    <div className="px-4 pb-2">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{post.text}</p>
                    </div>
                  )}

                  {/* Photo */}
                  {post.photo_url && (
                    <div className="px-4 pb-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.photo_url} alt="" className="w-full rounded-xl object-cover max-h-64" />
                    </div>
                  )}

                  {/* Menu card */}
                  {post.menu_name && (
                    <div className="px-4 pb-2">
                      <Link
                        href={post.menu_item_id ? `/items/${post.menu_item_id}` : "#"}
                        className="block bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {logo ? (
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 shrink-0" style={{ backgroundColor: logo.bg }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={logo.url} alt={post.chain_name ?? ""} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                              <Utensils className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            {post.chain_name && <p className="text-[11px] text-gray-400">{post.chain_name}</p>}
                            <p className="text-sm font-semibold text-gray-800 truncate">{post.menu_name}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="px-4 pb-3 flex items-center gap-4">
                    {isOwn && (
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="flex items-center gap-1 text-gray-300 hover:text-red-400 transition-colors ml-auto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="text-[11px]">削除</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FAB */}
      <Link
        href="/timeline/post"
        className="fixed bottom-20 right-4 z-40 w-14 h-14 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full shadow-lg shadow-sky-200 flex items-center justify-center text-white active:scale-95 transition-transform"
      >
        <PenSquare className="w-5 h-5" />
      </Link>
    </div>
  );
}
