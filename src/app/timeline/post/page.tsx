"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, Camera, Image, X } from "lucide-react";
import { Suspense } from "react";

function PostPageContent() {
  const router = useRouter();
  const params = useSearchParams();

  const menuName = params.get("menu") ?? "";
  const chainName = params.get("chain") ?? "";
  const calories = params.get("cal") ?? "";

  const [text, setText] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPhotos((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    setPosting(true);
    // TODO: Save to Supabase public_posts table
    // For now, simulate posting
    await new Promise((r) => setTimeout(r, 800));
    setPosted(true);
    setPosting(false);
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
            disabled={posting || (!text && photos.length === 0)}
            className="text-sm font-bold text-sky-500 disabled:text-gray-300 transition-colors"
          >
            {posting ? "投稿中..." : "投稿"}
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-4">
        {/* Pre-filled menu info (if coming from record) */}
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
          placeholder="今日の外食はどうでしたか？&#10;感想やおすすめポイントを書いてみよう"
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
          multiple
          className="hidden"
          onChange={handlePhotoSelect}
        />

        {/* Tips */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 mb-2">投稿のコツ</p>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>📸 食事の写真を追加すると反応がもらいやすい</li>
            <li>💬 味の感想やおすすめポイントを書くと参考になる</li>
            <li>🏷 チェーン店名やメニュー名を含めると見つかりやすい</li>
          </ul>
        </div>
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
