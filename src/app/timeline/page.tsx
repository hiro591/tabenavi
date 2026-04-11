"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import {
  Utensils, Clock, PenSquare, Trash2, Heart, MessageCircle,
  Search, X, Send, ChevronDown,
} from "lucide-react";
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
  display_name: string | null;
  like_count: number;
  comment_count: number;
  liked_by_me: boolean;
}

interface Comment {
  id: string;
  user_id: string;
  text: string;
  created_at: string;
  display_name: string | null;
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  // Comments
  const [openCommentPostId, setOpenCommentPostId] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [loadingComments, setLoadingComments] = useState(false);
  const [sendingComment, setSendingComment] = useState(false);
  const commentInputRef = useRef<HTMLInputElement>(null);

  // ─── Fetch posts with like/comment counts ─────────────────────────────────

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

    const { data } = await query;
    if (!data) { setLoading(false); return; }

    // Fetch display names
    const userIds = [...new Set(data.map((p: { user_id: string }) => p.user_id))];
    const { data: profilesData } = await supabase
      .from("profiles")
      .select("id, display_name")
      .in("id", userIds);
    const profileMap = new Map(
      (profilesData ?? []).map((p: { id: string; display_name: string | null }) => [p.id, p.display_name])
    );

    // Fetch like counts per post
    const postIds = data.map((p: { id: string }) => p.id);
    const { data: likesData } = await supabase
      .from("post_likes")
      .select("post_id")
      .in("post_id", postIds);

    const likeCounts = new Map<string, number>();
    (likesData ?? []).forEach((l: { post_id: string }) => {
      likeCounts.set(l.post_id, (likeCounts.get(l.post_id) ?? 0) + 1);
    });

    // Fetch my likes
    const { data: myLikes } = await supabase
      .from("post_likes")
      .select("post_id")
      .eq("user_id", user.id)
      .in("post_id", postIds);
    const myLikeSet = new Set((myLikes ?? []).map((l: { post_id: string }) => l.post_id));

    // Fetch comment counts
    const { data: commentsData } = await supabase
      .from("post_comments")
      .select("post_id")
      .in("post_id", postIds);

    const commentCounts = new Map<string, number>();
    (commentsData ?? []).forEach((c: { post_id: string }) => {
      commentCounts.set(c.post_id, (commentCounts.get(c.post_id) ?? 0) + 1);
    });

    const enrichedPosts: PublicPost[] = data.map((p: Record<string, unknown>) => ({
      ...p,
      display_name: profileMap.get(p.user_id as string) ?? null,
      like_count: likeCounts.get(p.id as string) ?? 0,
      comment_count: commentCounts.get(p.id as string) ?? 0,
      liked_by_me: myLikeSet.has(p.id as string),
    })) as PublicPost[];

    setPosts(enrichedPosts);
    setLoading(false);
  }, [supabase, router, tab]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  // ─── Like toggle ──────────────────────────────────────────────────────────

  const toggleLike = async (postId: string) => {
    if (!currentUserId) return;
    const post = posts.find((p) => p.id === postId);
    if (!post) return;

    // Optimistic update
    setPosts((prev) => prev.map((p) =>
      p.id === postId
        ? { ...p, liked_by_me: !p.liked_by_me, like_count: p.liked_by_me ? p.like_count - 1 : p.like_count + 1 }
        : p
    ));

    if (post.liked_by_me) {
      await supabase.from("post_likes").delete().eq("post_id", postId).eq("user_id", currentUserId);
    } else {
      await supabase.from("post_likes").insert({ post_id: postId, user_id: currentUserId });
    }
  };

  // ─── Comments ─────────────────────────────────────────────────────────────

  const openComments = async (postId: string) => {
    if (openCommentPostId === postId) {
      setOpenCommentPostId(null);
      return;
    }
    setOpenCommentPostId(postId);
    setLoadingComments(true);
    setCommentText("");

    const { data } = await supabase
      .from("post_comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (data && data.length > 0) {
      const userIds = [...new Set(data.map((c: { user_id: string }) => c.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, display_name")
        .in("id", userIds);
      const pMap = new Map(
        (profiles ?? []).map((p: { id: string; display_name: string | null }) => [p.id, p.display_name])
      );
      setComments(data.map((c: Record<string, unknown>) => ({
        ...c,
        display_name: pMap.get(c.user_id as string) ?? null,
      })) as Comment[]);
    } else {
      setComments([]);
    }
    setLoadingComments(false);
    setTimeout(() => commentInputRef.current?.focus(), 200);
  };

  const sendComment = async (postId: string) => {
    if (!commentText.trim() || !currentUserId || sendingComment) return;
    setSendingComment(true);

    const { data, error } = await supabase
      .from("post_comments")
      .insert({ post_id: postId, user_id: currentUserId, text: commentText.trim() })
      .select()
      .single();

    if (!error && data) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", currentUserId)
        .single();

      setComments((prev) => [...prev, { ...data, display_name: profile?.display_name ?? null }]);
      setPosts((prev) => prev.map((p) =>
        p.id === postId ? { ...p, comment_count: p.comment_count + 1 } : p
      ));
      setCommentText("");
    }
    setSendingComment(false);
  };

  const deleteComment = async (commentId: string, postId: string) => {
    await supabase.from("post_comments").delete().eq("id", commentId);
    setComments((prev) => prev.filter((c) => c.id !== commentId));
    setPosts((prev) => prev.map((p) =>
      p.id === postId ? { ...p, comment_count: Math.max(0, p.comment_count - 1) } : p
    ));
  };

  // ─── Delete post ──────────────────────────────────────────────────────────

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

  // ─── Search filter ────────────────────────────────────────────────────────

  const filteredPosts = searchQuery.trim()
    ? posts.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          (p.menu_name?.toLowerCase().includes(q)) ||
          (p.chain_name?.toLowerCase().includes(q)) ||
          (p.text?.toLowerCase().includes(q)) ||
          (p.display_name?.toLowerCase().includes(q))
        );
      })
    : posts;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 pt-3">
          {/* Search bar */}
          {searchOpen ? (
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="メニュー・チェーン店・ユーザーで検索"
                  className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none flex-1"
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-gray-400">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="text-sm text-gray-500 shrink-0">
                閉じる
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-bold text-gray-900">みんなの外食</h1>
              <button onClick={() => setSearchOpen(true)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
                <Search className="w-4.5 h-4.5" />
              </button>
            </div>
          )}

          {/* Tabs */}
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

        {/* Tags */}
        <div className="max-w-lg mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 py-2.5">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => { setSearchOpen(true); setSearchQuery(tag.replace("#", "")); }}
                className="shrink-0 text-xs text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 font-medium active:bg-sky-100 transition-colors"
              >
                {tag}
              </button>
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
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Utensils className="w-6 h-6 text-gray-300" />
            </div>
            {searchQuery ? (
              <>
                <p className="text-sm text-gray-500 font-medium">「{searchQuery}」の検索結果がありません</p>
                <button onClick={() => setSearchQuery("")} className="mt-3 text-sm text-sky-500 font-semibold">検索をクリア</button>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 font-medium">まだ投稿がありません</p>
                <p className="text-xs text-gray-400 mt-1">最初の投稿をしてみよう！</p>
                <Link href="/timeline/post" className="inline-block mt-4 text-sm text-sky-500 font-semibold">投稿する →</Link>
              </>
            )}
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {searchQuery && (
              <p className="text-xs text-gray-400 mb-1">「{searchQuery}」の検索結果: {filteredPosts.length}件</p>
            )}
            {filteredPosts.map((post) => {
              const logo = post.chain_name ? getChainLogo(post.chain_name) : null;
              const userName = post.display_name || "ユーザー";
              const avatarChar = userName.charAt(0);
              const avatarColor = getAvatarColor(post.user_id);
              const isOwn = post.user_id === currentUserId;
              const isCommentOpen = openCommentPostId === post.id;

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
                    {post.calories != null && post.calories > 0 && (
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
                  <div className="px-4 pb-2 flex items-center gap-5">
                    <button onClick={() => toggleLike(post.id)} className={`flex items-center gap-1.5 transition-colors ${post.liked_by_me ? "text-pink-500" : "text-gray-400"}`}>
                      <Heart className={`w-[18px] h-[18px] ${post.liked_by_me ? "fill-current" : ""}`} />
                      <span className="text-xs font-semibold tabular-nums">{post.like_count > 0 ? post.like_count : ""}</span>
                    </button>
                    <button onClick={() => openComments(post.id)} className={`flex items-center gap-1.5 transition-colors ${isCommentOpen ? "text-sky-500" : "text-gray-400"}`}>
                      <MessageCircle className="w-[18px] h-[18px]" />
                      <span className="text-xs font-semibold tabular-nums">{post.comment_count > 0 ? post.comment_count : ""}</span>
                    </button>
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

                  {/* Comments section */}
                  {isCommentOpen && (
                    <div className="border-t border-gray-100">
                      {loadingComments ? (
                        <div className="px-4 py-3 text-center">
                          <p className="text-xs text-gray-400">読み込み中...</p>
                        </div>
                      ) : (
                        <>
                          {comments.length > 0 && (
                            <div className="px-4 py-2 space-y-2 max-h-48 overflow-y-auto">
                              {comments.map((c) => (
                                <div key={c.id} className="flex items-start gap-2">
                                  <div className={`w-6 h-6 rounded-full ${getAvatarColor(c.user_id)} flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5`}>
                                    {(c.display_name || "U").charAt(0)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[11px]">
                                      <span className="font-bold text-gray-700">{c.display_name || "ユーザー"}</span>
                                      <span className="text-gray-500 ml-1.5">{c.text}</span>
                                    </p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <span className="text-[10px] text-gray-400">{timeAgo(c.created_at)}</span>
                                      {c.user_id === currentUserId && (
                                        <button onClick={() => deleteComment(c.id, post.id)} className="text-[10px] text-gray-400 hover:text-red-400">削除</button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {comments.length === 0 && (
                            <p className="px-4 py-2 text-xs text-gray-400">まだコメントはありません</p>
                          )}

                          {/* Comment input */}
                          <div className="px-4 py-2 flex items-center gap-2 border-t border-gray-50">
                            <input
                              ref={commentInputRef}
                              type="text"
                              value={commentText}
                              onChange={(e) => setCommentText(e.target.value)}
                              onKeyDown={(e) => { if (e.key === "Enter" && !e.nativeEvent.isComposing) sendComment(post.id); }}
                              placeholder="コメントを入力..."
                              maxLength={500}
                              className="flex-1 text-sm bg-gray-50 rounded-full px-3 py-1.5 outline-none text-gray-700 placeholder:text-gray-400"
                            />
                            <button
                              onClick={() => sendComment(post.id)}
                              disabled={!commentText.trim() || sendingComment}
                              className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white disabled:opacity-40 shrink-0"
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
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
