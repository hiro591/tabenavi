"use client";

import { useState } from "react";
import { getChainLogo } from "@/lib/chain-logos";
import { Utensils } from "lucide-react";

const chains = [
  "マクドナルド", "吉野家", "松屋", "すき家", "サイゼリヤ",
  "ガスト", "大戸屋", "やよい軒", "CoCo壱番屋", "丸亀製麺",
  "スターバックス", "モスバーガー", "スシロー", "くら寿司",
  "日高屋", "てんや", "餃子の王将", "バーミヤン", "ケンタッキー", "ドトール",
];

function ChainCard({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const logo = getChainLogo(name);
  const showLogo = logo && !failed;

  return (
    <div className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default group">
      <div className="w-12 h-12 mx-auto mb-2.5 flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105" style={showLogo ? { backgroundColor: logo.bg } : undefined}>
        {showLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo.url} alt={name} className="w-full h-full object-contain p-1.5" onError={() => setFailed(true)} />
        ) : (
          <div className="w-full h-full bg-orange-50 flex items-center justify-center rounded-xl">
            <Utensils className="w-5 h-5 text-orange-400" />
          </div>
        )}
      </div>
      <div className="text-xs font-medium text-gray-700">{name}</div>
    </div>
  );
}

export default function Chains() {
  return (
    <section id="chains" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            対応チェーン
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よく行くお店、全部対応
          </h2>
          <p className="text-lg text-gray-500 mb-3">
            主要チェーン20社の公式栄養データを収録
          </p>
          <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold border border-orange-100">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            順次拡大中
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {chains.map((name) => (
            <ChainCard key={name} name={name} />
          ))}
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          + 個人店はユーザー投稿で随時追加
        </div>
      </div>
    </section>
  );
}
