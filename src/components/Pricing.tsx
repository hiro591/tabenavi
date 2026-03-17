"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const freeFeatures = [
  "1日3食までの食事記録",
  "カロリー・PFC表示",
  "主要チェーン20社のメニュー",
  "日別の食事履歴",
  "月間サマリーレポート（簡易版）",
];

const premiumFeatures = [
  "無制限の食事記録",
  "全チェーン＋個人店メニュー",
  "AIによるパーソナライズ推薦",
  "詳細な栄養素分析（ビタミン・ミネラルなど）",
  "週次・月次の詳細レポート",
  "目標設定＆アラート機能",
  "広告非表示",
  "写真からのメニュー認識（AI）",
];

const comparisonFeatures = [
  { name: "食事記録", free: "3食/日", premium: "無制限" },
  { name: "カロリー・PFC表示", free: true, premium: true },
  { name: "対応チェーン数", free: "20社", premium: "全チェーン＋個人店" },
  { name: "AI写真認識", free: false, premium: true },
  { name: "AIレコメンド", free: false, premium: true },
  { name: "詳細栄養素分析", free: false, premium: true },
  { name: "週次・月次レポート", free: "簡易版", premium: "詳細版" },
  { name: "目標設定＆アラート", free: false, premium: true },
  { name: "広告非表示", free: false, premium: true },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 text-green-500 mx-auto" />
    ) : (
      <span className="text-gray-300">--</span>
    );
  }
  return <span>{value}</span>;
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = isAnnual ? "¥332" : "¥480";
  const billingLabel = isAnnual ? "/月（年払い）" : "/月";

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            料金プラン
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            まずは無料で始めよう
          </h2>
          <p className="text-lg text-gray-500">
            クレジットカード不要。いつでもアップグレード・解約できます。
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>月払い</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 shadow-inner ${isAnnual ? "bg-orange-500" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? "translate-x-8" : "translate-x-0"}`}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>
            年払い
          </span>
          {isAnnual && (
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
              2ヶ月無料
            </span>
          )}
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
          {/* Free plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div className="mb-8">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">無料プラン</div>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold text-gray-900">¥0</span>
                <span className="text-gray-400 mb-2 text-sm">/月</span>
              </div>
              <div className="text-sm text-gray-400 mt-2">ずっと無料</div>
            </div>

            <a
              href="/signup"
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 rounded-2xl font-semibold transition-colors mb-8"
            >
              無料で始める
            </a>

            <ul className="space-y-3.5">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium plan */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-[1.75rem] opacity-20 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <div className="text-sm font-semibold text-orange-200 uppercase tracking-wider">プレミアムプラン</div>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">{monthlyPrice}</span>
                  <span className="text-orange-200 mb-2 text-sm">{billingLabel}</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-orange-200 mb-6">年額 ¥3,984（月払いより¥1,776おトク）</div>
                )}
                {!isAnnual && (
                  <div className="text-sm text-orange-200 mb-6">年払いで月¥332（2ヶ月無料）</div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    一番人気
                  </div>
                  <div className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                    1ヶ月無料トライアル
                  </div>
                </div>

                <a
                  href="/signup"
                  className="block w-full text-center bg-white hover:bg-orange-50 text-orange-600 py-3.5 rounded-2xl font-bold transition-colors mb-8 shadow-lg"
                >
                  1ヶ月無料で試す
                </a>

                <ul className="space-y-3.5">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/90">
                      <Check className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          クレジットカード不要 / いつでも解約可能 / 1ヶ月間の返金保証
        </p>

        {/* Comparison table */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">プラン比較表</h3>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">機能</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">無料</th>
                  <th className="text-center py-4 px-4 font-semibold text-orange-600">プレミアム</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-6 text-gray-700">{row.name}</td>
                    <td className="py-3.5 px-4 text-center text-gray-400">
                      <ComparisonCell value={row.free} />
                    </td>
                    <td className="py-3.5 px-4 text-center text-orange-600 font-medium">
                      <ComparisonCell value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise link */}
        <p className="text-center text-sm mt-8">
          <a href="mailto:tabenavi.app@gmail.com?subject=法人プランについて" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
            法人・チームプランはこちら →
          </a>
        </p>
      </div>
    </section>
  );
}
