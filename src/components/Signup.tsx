"use client";

import { Star, Users, Shield, ArrowRight } from "lucide-react";

export default function Signup() {
  return (
    <section id="signup" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-orange-500/20">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          ベータ版先行登録受付中
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          外食をもっと楽しもう
        </h2>
        <p className="text-lg text-gray-400 mb-4 leading-relaxed">
          今すぐ登録して、外食専門の食事管理を体験してください。
          ベータ版ユーザーは<span className="text-orange-400 font-semibold">プレミアム機能を3ヶ月無料</span>でご利用いただけます。
        </p>

        {/* Urgency element */}
        <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-5 py-2 rounded-full text-sm font-semibold mb-10">
          <Users className="w-4 h-4" />
          先着500名限定 -- 残り247名
        </div>

        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <a
            href="/signup"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25 text-center"
          >
            無料で始める
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/login"
            className="flex-1 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all text-center"
          >
            ログイン
          </a>
        </div>

        <p className="text-gray-600 text-xs mt-4">
          スパムメールは送りません。いつでも登録解除できます。
        </p>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />)}</span>
            <span>ベータ版ユーザー満足度 4.8</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            クレジットカード不要
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div>いつでも解約可能</div>
        </div>
      </div>
    </section>
  );
}
