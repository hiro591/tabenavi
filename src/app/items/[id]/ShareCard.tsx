"use client";

import { useState } from "react";

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

export default function ShareCard({ item }: ShareCardProps) {
  const [showCard, setShowCard] = useState(false);
  const [copied, setCopied] = useState(false);

  const storeName = item.chain_restaurants?.name ?? "";
  const storeEmoji = item.chain_restaurants?.emoji ?? "";
  const cardStyle = getCardStyle(item.source_type);

  const shareText = `【${storeName}】${item.name}\n🔥${item.calories ?? "-"}kcal 💪${item.protein ?? "-"}g\n\n#筋トレ飯 #マクロ管理 #たべなび\nhttps://tabenavi.jp/items/${item.id}`;

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          text: shareText,
        });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <>
      {/* Share button in sticky bar */}
      <button
        onClick={() => setShowCard(true)}
        className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
        aria-label="シェアする"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      {/* Modal overlay */}
      {showCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm">
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

            {/* Action buttons */}
            <div className="mt-4 space-y-2">
              <button
                onClick={handleShare}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
              >
                {copied ? "コピーしました！" : "シェアする"}
              </button>
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
