"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, Camera, Image, X } from "lucide-react";
import { Suspense } from "react";

function PostPageContent() {
  const router = useRouter();
  const params = useSearchParams();
  const supabase = createClient();

  const menuName = params.get("menu") ?? "";
  const chainName = params.get("chain") ?? "";
  const calories = params.get("cal") ?? "";
  const menuItemId = params.get("menu_item_id") ?? "";

  const [text, setText] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      // Limit to 500KB per image for DB storage
      if (file.size > 500000) {
        setError("画像は500KB以下にしてください");
        setTimeout(() => setError(""), 3000);
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPhotos((prev) => [...prev.slice(0, 2), ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!text && photos.length === 0 && !menuName) return;
    setPosting(true);
    setError("");

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const { error: insertError } = await supabase.from("public_posts").insert({
        user_id: user.id,
        text: text || null,
        menu_name: menuName || null,
        chain_name: chainName || null,
        calories: calories ? parseInt(calories, 10) : null,
        menu_item_id: menuItemId || null,
        photo_url: photos[0] || null,
      });

      if (insertError) throw insertError;
      setPosted(true);
    } catch {
      setError("投稿に失敗しました。もう一度お試しください。");
    } finally {
      setPosting(false);
    }
  };

  if (posted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-200">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">投稿しました！</h2>
          <p className="text-sm text-gray-400 mb-6">みんなの外食に公開されました</p>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/timeline")}
              className="flex-1 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-semibold py-3 rounded-xl text-sm"
            >
              タイムラインを見る
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl text-sm"
            >
              ホームに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => router.back()} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-sm font-bold text-gray-800">みんなの外食に投稿</h1>
          <button
            onClick={handlePost}
            disabled={posting || (!text && photos.length === 0 && !menuName)}
            className="text-sm font-bold text-sky-500 disabled:text-gray-300 transition-colors"
          >
            {posting ? "投稿中..." : "投稿"}
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 mb-4">
            <p className="text-xs text-red-600">{error}</p>
          </div>
        )}

        {/* Pre-filled menu info */}
        {menuName && (
          <div className="bg-sky-50 rounded-xl p-3.5 mb-4 border border-sky-100">
            <p className="text-[11px] text-sky-500 font-medium mb-0.5">記録したメニュー</p>
            <div className="flex items-center justify-between">
              <div>
                {chainName && <p className="text-[11px] text-gray-400">{chainName}</p>}
                <p className="text-sm font-bold text-gray-800">{menuName}</p>
              </div>
              {calories && (
                <p className="text-sm font-bold text-sky-500 tabular-nums">{calories} kcal</p>
              )}
            </div>
          </div>
        )}

        {/* Text input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"今日の外食はどうでしたか？\n感想やおすすめポイントを書いてみよう"}
          className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-sm text-gray-800 placeholder:text-gray-300 outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300/30 transition-colors resize-none shadow-sm"
          rows={5}
        />

        {/* Photos */}
        {photos.length > 0 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {photos.map((photo, i) => (
              <div key={i} className="relative shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt="" className="w-full h-full object-cover" />
                <button
                  onClick={() => removePhoto(i)}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Photo buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Image className="w-4 h-4 text-gray-400" />
            写真を追加
          </button>
          <button
            onClick={() => {
              const input = fileInputRef.current;
              if (input) {
                input.setAttribute("capture", "environment");
                input.click();
                input.removeAttribute("capture");
              }
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Camera className="w-4 h-4 text-gray-400" />
            カメラ
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoSelect}
        />

        <p className="text-[11px] text-gray-300 mt-4">写真は500KB以下・最大1枚</p>
      </div>
    </div>
  );
}

export default function PostPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" /></div>}>
      <PostPageContent />
    </Suspense>
  );
}
