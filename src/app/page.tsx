import Link from "next/link";
import { ChevronRight, Search, MapPin, Sparkles, Utensils } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

const CHAINS = [
  "マクドナルド", "吉野家", "松屋", "すき家", "サイゼリヤ",
  "ガスト", "大戸屋", "やよい軒", "丸亀製麺", "スターバックス",
  "モスバーガー", "スシロー", "くら寿司", "日高屋", "餃子の王将",
  "バーミヤン", "ケンタッキー", "ドトール", "サブウェイ", "デニーズ",
];

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <defs>
        <linearGradient id="lp-logo" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" /><stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill="url(#lp-logo)" />
      <g fill="white">
        <rect x="168" y="80" width="13" height="100" rx="6.5" />
        <rect x="193" y="80" width="13" height="100" rx="6.5" />
        <rect x="218" y="80" width="13" height="100" rx="6.5" />
        <path d="M164 176 Q164 206 200 206 Q236 206 236 176" />
        <rect x="188" y="200" width="24" height="232" rx="12" />
      </g>
      <g fill="white" opacity="0.92">
        <path d="M278 80 Q314 84 314 160 L314 188 Q314 204 300 204 L290 204 Q276 204 276 188 L276 80 Z" />
        <rect x="283" y="198" width="24" height="234" rx="12" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A2235] text-slate-100">

      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A2235]/90 backdrop-blur-xl border-b border-[#334155]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-bold text-base">たべなび</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-slate-400 hover:text-slate-200 transition-colors hidden sm:block">
              ログイン
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:from-sky-500 hover:to-cyan-600 transition-all"
            >
              無料で始める
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            20チェーン・500メニュー対応
          </div>

          <h1 className="text-[32px] sm:text-[44px] font-bold leading-tight mb-5">
            栄養で外食先を探せる、
            <br />
            <span className="text-gradient">唯一のアプリ。</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            カロリー・タンパク質・脂質で絞り込んで、
            <br className="hidden sm:block" />
            今いる場所の近くからベストな外食先を見つけよう。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              無料で始める
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/guide"
              className="w-full sm:w-auto text-slate-400 hover:text-slate-200 font-medium px-6 py-3.5 rounded-xl border border-[#334155] hover:bg-[#243044] transition-all text-center"
            >
              ガイド記事を読む
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3 Features ─── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12">
            普通のグルメアプリにはできないこと
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#243044] rounded-2xl border border-[#334155]/30 p-6">
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">PFCで絞り込み検索</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                カロリー・タンパク質・脂質の範囲を指定して、条件に合うメニューだけを一覧表示。ダイエット中でも筋トレ中でも、最適なメニューがすぐ見つかる。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#243044] rounded-2xl border border-[#334155]/30 p-6">
              <div className="w-11 h-11 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">マップで近くから探す</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                現在地の周辺にあるチェーン店をマップ上に表示。「今いる場所の近くで高タンパクメニューがある店」がすぐにわかる。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#243044] rounded-2xl border border-[#334155]/30 p-6">
              <div className="w-11 h-11 rounded-xl bg-violet-400/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">組み合わせを提案</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                今日の残りカロリーに合わせて、最適なメニューの組み合わせを提案。何を食べるか迷ったら、たべなびに聞くだけ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works (Simplified) ─── */}
      <section className="py-16 px-4 bg-[#1E2A3A]">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12">
            3ステップで完了
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-cyan-500/20">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">条件を決める</h3>
                <p className="text-sm text-slate-400">カロリーやタンパク質の範囲、チェーン店のジャンルを選ぶ。</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-cyan-500/20">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">メニューを見つける</h3>
                <p className="text-sm text-slate-400">条件に合うメニューが一覧で表示。マップで近くの店も探せる。</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg shadow-cyan-500/20">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">タップで記録</h3>
                <p className="text-sm text-slate-400">食べたメニューをタップするだけ。カロリー・PFCが自動で記録される。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Supported Chains ─── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-3">Supported chains</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-4">
            主要チェーン20社に対応
          </h2>
          <p className="text-center text-sm text-slate-500 mb-10">
            公式の栄養データに基づく正確な情報
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {CHAINS.map((chain) => {
              const logo = getChainLogo(chain);
              return (
                <div
                  key={chain}
                  className="bg-[#243044] rounded-xl border border-[#334155]/30 p-3 flex flex-col items-center gap-2"
                >
                  {logo ? (
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: logo.bg }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.url} alt={chain} className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-[#2D3B50] flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-slate-500" />
                    </div>
                  )}
                  <span className="text-[11px] text-slate-400 text-center leading-tight">{chain}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            外食しながら、カラダづくり。
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8">
            登録は無料。クレジットカードも不要です。
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
          >
            無料で始める
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#334155]/30 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <LogoIcon size={24} />
              <span className="font-bold text-sm">たべなび</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <Link href="/guide" className="hover:text-slate-300 transition-colors">ガイド</Link>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">プライバシー</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">利用規約</Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-center text-[11px] text-slate-600 mt-8">
            © 2026 たべなび. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
