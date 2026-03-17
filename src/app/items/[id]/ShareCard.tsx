"use client";

import { useState, useEffect } from "react";
import { Share2, Copy, Check, X } from "lucide-react";

interface ShareCardProps {
  item: {
    id: string;
    name: string;
    calories: number | null;
    protein: number | null;
    fat: number | null;
    carbs: number | null;
    price: number | null;
    source_type: string | null;
    chain_restaurants: { name: string; emoji: string } | null;
  };
  variant?: "default" | "header";
}

function getCardStyle(sourceType: string | null) {
  switch (sourceType) {
    case "convenience_store":
      return {
        gradient: "from-blue-50 to-indigo-50",
        accent: "text-blue-600",
        badgeBg: "bg-blue-100 text-blue-700",
        label: "コンビニ",
      };
    case "chain_restaurant":
      return {
        gradient: "from-orange-50 to-amber-50",
        accent: "text-orange-600",
        badgeBg: "bg-orange-100 text-orange-700",
        label: "外食チェーン",
      };
    default:
      return {
        gradient: "from-gray-50 to-slate-50",
        accent: "text-gray-600",
        badgeBg: "bg-gray-100 text-gray-700",
        label: "その他",
      };
  }
}

export default function ShareCard({ item, variant = "default" }: ShareCardProps) {
  const [showCard, setShowCard] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canWebShare, setCanWebShare] = useState(false);

  useEffect(() => {
    setCanWebShare(!!navigator.share);
  }, []);

  const storeName = item.chain_restaurants?.name ?? "";
  const cardStyle = getCardStyle(item.source_type);

  const shareUrl = `https://tabenavi.jp/items/${item.id}`;
  const shareText = `【${storeName}】${item.name}\n${item.calories ?? "-"}kcal / タンパク質${item.protein ?? "-"}g\n\n#筋トレ飯 #マクロ管理 #たべなび`;

  async function handleWebShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${storeName} ${item.name} - たべなび`,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // User cancelled share
      }
    }
  }

  function handleLineShare() {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleTwitterShare() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* Share trigger button */}
      <button
        onClick={() => setShowCard(true)}
        className={
          variant === "header"
            ? "p-2 text-gray-400 hover:text-gray-600 transition-colors"
            : "flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
        }
        aria-label="シェアする"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {/* Modal overlay */}
      {showCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowCard(false);
          }}
        >
          <div className="w-full max-w-sm">
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowCard(false)}
                className="p-1.5 rounded-full bg-white/90 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="閉じる"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Share Card */}
            <div
              id="share-card"
              className={`w-80 mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b ${cardStyle.gradient}`}
            >
              {/* Header bar */}
              <div className="bg-orange-500 px-4 py-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm tracking-wide">
                  たべなび
                </span>
                <span className="text-white/80 text-xs">tabenavi.jp</span>
              </div>

              {/* Store badge */}
              <div className="px-5 pt-5 pb-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${cardStyle.badgeBg}`}
                >
                  {storeName || cardStyle.label}
                </span>
              </div>

              {/* Item name */}
              <div className="px-5 pb-4">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.name}
                </h2>
              </div>

              {/* Nutrition grid */}
              <div className="px-5 pb-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white/80 rounded-xl p-3 text-center">
                    <p className="text-xs font-bold text-orange-500 mb-0.5">CAL</p>
                    <p className="text-2xl font-bold text-gray-900 leading-none">
                      {item.calories ?? "-"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">kcal</p>
                    <p className="text-[10px] text-gray-400">カロリー</p>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 text-center">
                    <p className="text-xs font-bold text-blue-500 mb-0.5">P</p>
                    <p className="text-2xl font-bold text-blue-600 leading-none">
                      {item.protein != null
                        ? Number.isInteger(item.protein)
                          ? item.protein
                          : item.protein.toFixed(1)
                        : "-"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">g</p>
                    <p className="text-[10px] text-gray-400">タンパク質</p>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 text-center">
                    <p className="text-xs font-bold text-yellow-600 mb-0.5">F</p>
                    <p className="text-2xl font-bold text-yellow-600 leading-none">
                      {item.fat != null
                        ? Number.isInteger(item.fat)
                          ? item.fat
                          : item.fat.toFixed(1)
                        : "-"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">g</p>
                    <p className="text-[10px] text-gray-400">脂質</p>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 text-center">
                    <p className="text-xs font-bold text-green-600 mb-0.5">C</p>
                    <p className="text-2xl font-bold text-green-600 leading-none">
                      {item.carbs != null
                        ? Number.isInteger(item.carbs)
                          ? item.carbs
                          : item.carbs.toFixed(1)
                        : "-"}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">g</p>
                    <p className="text-[10px] text-gray-400">炭水化物</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              {item.price != null && (
                <div className="px-5 pb-3">
                  <p className="text-lg font-bold text-gray-700">
                    &yen;{item.price.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Hashtags */}
              <div className="px-5 pb-5">
                <p className="text-xs text-gray-400">
                  #筋トレ飯 #マクロ管理 #ダイエット飯 #たべなび
                </p>
              </div>
            </div>

            {/* Share buttons */}
            <div className="mt-4 space-y-2">
              {/* Web Share API button (mobile) */}
              {canWebShare && (
                <button
                  onClick={handleWebShare}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  シェアする
                </button>
              )}

              {/* Platform share buttons */}
              <div className="flex gap-2">
                {/* LINE */}
                <button
                  onClick={handleLineShare}
                  className="flex-1 py-3 bg-[#06C755] text-white font-medium rounded-xl hover:bg-[#05b34c] transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-xs font-bold">LINE</span>
                </button>

                {/* X (Twitter) */}
                <button
                  onClick={handleTwitterShare}
                  className="flex-1 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-xs font-bold">X</span>
                </button>

                {/* Copy link */}
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600">コピー済</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">コピー</span>
                    </>
                  )}
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowCard(false)}
                className="w-full py-3 bg-white/90 text-gray-600 font-medium rounded-xl hover:bg-white transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
