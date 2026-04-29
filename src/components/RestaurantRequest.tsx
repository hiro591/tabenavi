"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Send, Check, Bell } from "lucide-react";

type Props = {
  searchQuery?: string;
  onRequested?: () => void;
};

export default function RestaurantRequest({ searchQuery, onRequested }: Props) {
  const supabase = createClient();
  const [name, setName] = useState(searchQuery || "");
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    setLoading(true);

    const anonId =
      localStorage.getItem("tabenavi_anon_id") ||
      (() => {
        const id = crypto.randomUUID();
        localStorage.setItem("tabenavi_anon_id", id);
        return id;
      })();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("restaurant_requests").insert({
      restaurant_name: name.trim(),
      anon_id: anonId,
      user_id: user?.id || null,
      notify_email: email.trim() || null,
    });

    setSubmitted(true);
    setLoading(false);
    onRequested?.();
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Check className="w-5 h-5 text-emerald-600" />
        </div>
        <p className="text-sm font-semibold text-emerald-800 mb-1">
          リクエストを送信しました！
        </p>
        <p className="text-xs text-emerald-600">
          リクエストが多いお店から順に追加していきます
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <p className="text-sm font-bold text-gray-900 mb-1">
        お探しのお店が見つかりませんでした
      </p>
      <p className="text-xs text-gray-500 mb-4">
        リクエストしていただければ、優先的に追加します
      </p>

      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="チェーン店名（例: リンガーハット）"
          className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30"
        />
        <button
          onClick={handleSubmit}
          disabled={!name.trim() || loading}
          className="px-4 py-2.5 bg-gradient-to-r from-sky-400 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-sm active:scale-95 transition-transform disabled:opacity-40"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>

      {!showEmail ? (
        <button
          onClick={() => setShowEmail(true)}
          className="flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-600"
        >
          <Bell className="w-3 h-3" />
          追加されたら通知を受け取る
        </button>
      ) : (
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス（任意）"
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-sky-400"
        />
      )}
    </div>
  );
}
