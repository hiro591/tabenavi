"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Share2, Check, MessageCircle } from "lucide-react";
import type { MenuItem, ChainRestaurant } from "@/types/database";

type Props = {
  item: MenuItem & { chain_restaurants?: ChainRestaurant };
  variant?: "icon" | "full";
};

export default function ShareButton({ item, variant = "icon" }: Props) {
  const supabase = createClient();
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const chainName = item.chain_restaurants?.name || "";
  const shareText = `${chainName} ${item.name}\n${item.calories}kcal｜P${item.protein.toFixed(1)}g F${item.fat.toFixed(1)}g C${item.carbs.toFixed(1)}g`;
  const shareUrl = `https://www.tabenavi.jp/items/${item.id}?utm_source=share&utm_medium=social`;

  const logShare = async (platform: string) => {
    await supabase.from("share_events").insert({
      menu_item_id: item.id,
      platform,
      utm_content: item.id,
    }).then(() => {});
  };

  const shareLine = () => {
    const encoded = encodeURIComponent(`${shareText}\n\nたべなびで栄養検索 👉 ${shareUrl}`);
    window.open(`https://line.me/R/share?text=${encoded}`, "_blank");
    logShare("line");
    setShowMenu(false);
  };

  const shareX = () => {
    const encoded = encodeURIComponent(`${shareText}\n\n#たべなび #外食ダイエット\n${shareUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, "_blank");
    logShare("x");
    setShowMenu(false);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopied(true);
    logShare("copy");
    setTimeout(() => setCopied(false), 2000);
    setShowMenu(false);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${chainName} ${item.name}`,
          text: shareText,
          url: shareUrl,
        });
        logShare("native");
      } catch {}
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={nativeShare}
        className={
          variant === "full"
            ? "flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors"
            : "p-1.5 text-gray-400 hover:text-sky-500 transition-colors"
        }
        title="共有"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-500" />
        ) : (
          <Share2 className="w-4 h-4" />
        )}
        {variant === "full" && <span>共有</span>}
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute right-0 bottom-full mb-2 z-50 bg-white border border-gray-200 rounded-xl shadow-lg p-2 min-w-[140px]">
            <button
              onClick={shareLine}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              LINE
            </button>
            <button
              onClick={shareX}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span className="w-4 h-4 text-center font-bold text-black">𝕏</span>
              X (Twitter)
            </button>
            <button
              onClick={copyLink}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Share2 className="w-4 h-4 text-gray-500" />
              リンクをコピー
            </button>
          </div>
        </>
      )}
    </div>
  );
}
