import Link from "next/link";
import { ChevronRight, Search, MapPin, Sparkles, Utensils, ArrowRight } from "lucide-react";
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

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto">
      <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl shadow-gray-300/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10" />
        <div className="bg-gray-50 rounded-[1.5rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-bold text-base text-gray-900">たべなび</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors hidden sm:block">
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
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 px-4 bg-gradient-to-b from-sky-50/70 to-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-xs font-medium px-3 py-1 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              20チェーン・500メニュー対応
            </div>

            <h1 className="text-[30px] sm:text-[42px] font-bold leading-tight mb-5 text-gray-900">
              栄養で外食先を探せる、
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">唯一のアプリ。</span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              カロリー・タンパク質・脂質で絞り込んで、
              今いる場所の近くからベストな外食先を見つけよう。
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sky-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                無料で始める
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/guide"
                className="w-full sm:w-auto text-gray-500 hover:text-gray-700 font-medium px-6 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all text-center"
              >
                ガイド記事を読む
              </Link>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-shrink-0 w-[260px] sm:w-[280px]">
            <PhoneMockup>
              <div className="p-4 pt-8 space-y-3 bg-white" style={{ minHeight: 420 }}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[11px] text-gray-400">こんにちは</p>
                    <p className="text-sm font-bold text-gray-800">ヒロさん</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sky-100" />
                </div>
                <div className="bg-sky-50 rounded-2xl p-4 flex flex-col items-center">
                  <svg width="110" height="110" viewBox="0 0 110 110">
                    <circle cx="55" cy="55" r="42" fill="none" stroke="#E0F2FE" strokeWidth="8" />
                    <circle cx="55" cy="55" r="42" fill="none" stroke="url(#hero-ring)" strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 42} strokeDashoffset={2 * Math.PI * 42 * 0.35}
                      strokeLinecap="round" transform="rotate(-90 55 55)" />
                    <defs><linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#38BDF8" /><stop offset="1" stopColor="#06B6D4" /></linearGradient></defs>
                    <text x="55" y="50" textAnchor="middle" fill="#1E293B" fontSize="20" fontWeight="bold">1,170</text>
                    <text x="55" y="65" textAnchor="middle" fill="#94A3B8" fontSize="9">/ 1,800 kcal</text>
                  </svg>
                  <p className="text-[11px] text-gray-500 mt-1">残り <span className="text-gray-800 font-semibold">630</span> kcal</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-blue-500 font-medium">P 42.5g</span>
                    <span className="text-amber-500 font-medium">F 28.0g</span>
                    <span className="text-emerald-500 font-medium">C 95.2g</span>
                  </div>
                  <div className="flex gap-1 h-1.5 rounded-full overflow-hidden bg-gray-100">
                    <div className="bg-blue-400 rounded-full" style={{ width: "35%" }} />
                    <div className="bg-amber-400 rounded-full" style={{ width: "25%" }} />
                    <div className="bg-emerald-400 rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                  <p className="text-[10px] text-gray-400 font-semibold">今日の記録</p>
                  <div className="flex items-center justify-between bg-white rounded-lg px-2.5 py-2 border border-gray-100">
                    <div>
                      <p className="text-[9px] text-gray-400">吉野家</p>
                      <p className="text-[11px] font-medium text-gray-700">ライザップ牛サラダ</p>
                    </div>
                    <span className="text-[11px] font-bold text-sky-500">398 kcal</span>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg px-2.5 py-2 border border-gray-100">
                    <div>
                      <p className="text-[9px] text-gray-400">サイゼリヤ</p>
                      <p className="text-[11px] font-medium text-gray-700">若鶏のグリル</p>
                    </div>
                    <span className="text-[11px] font-bold text-sky-500">514 kcal</span>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-sky-500 uppercase tracking-widest mb-3 font-semibold">Features</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12 text-gray-900">
            たべなびだけの機能
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-sky-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">PFCで絞り込み検索</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                カロリー・タンパク質・脂質の範囲を指定して、条件に合うメニューだけを一覧表示。ダイエット中でも筋トレ中でも、最適なメニューがすぐ見つかる。
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">マップで近くから探す</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                現在地の周辺にあるチェーン店をマップ上に表示。「今いる場所の近くで高タンパクメニューがある店」がすぐにわかる。
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all">
              <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-violet-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">組み合わせを提案</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                今日の残りカロリーに合わせて、最適なメニューの組み合わせを提案。何を食べるか迷ったら、たべなびに聞くだけ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-sky-500 uppercase tracking-widest mb-2 font-semibold">使い方</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-14 text-gray-900">
            3ステップで完了
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-200">1</div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Step</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">条件を決める</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  カロリーやタンパク質の範囲、チェーン店のジャンルを選ぶ。目的に合わせて自由に絞り込める。
                </p>
              </div>
              <div className="w-[220px] flex-shrink-0">
                <PhoneMockup>
                  <div className="p-4 pt-8 bg-white" style={{ minHeight: 300 }}>
                    <p className="text-xs font-bold text-gray-700 mb-3">絞り込み条件</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] text-sky-500 font-medium mb-1">カロリー</p>
                        <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full w-3/5 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full" /></div>
                        <div className="flex justify-between text-[9px] text-gray-400 mt-0.5"><span>200</span><span>600 kcal</span></div>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-500 font-medium mb-1">タンパク質</p>
                        <div className="h-1.5 bg-gray-100 rounded-full"><div className="h-full w-2/5 bg-blue-400 rounded-full" /></div>
                        <div className="flex justify-between text-[9px] text-gray-400 mt-0.5"><span>20g</span><span>以上</span></div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="text-[9px] bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full border border-sky-200">牛丼</span>
                        <span className="text-[9px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-200">ファミレス</span>
                        <span className="text-[9px] bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full border border-sky-200">定食</span>
                        <span className="text-[9px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-200">ファスト</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-[10px] font-bold py-2 rounded-lg text-center">
                      この条件で検索
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-200">2</div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Step</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">メニューを見つける</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  条件に合うメニューが一覧で表示。栄養データ付きで比較もかんたん。マップで近くの店も探せる。
                </p>
              </div>
              <div className="w-[220px] flex-shrink-0">
                <PhoneMockup>
                  <div className="p-4 pt-8 bg-white" style={{ minHeight: 300 }}>
                    <p className="text-xs font-bold text-gray-700 mb-3">検索結果</p>
                    <div className="space-y-2">
                      {[
                        { store: "サイゼリヤ", name: "若鶏のグリル", cal: 514, p: "35.3g" },
                        { store: "吉野家", name: "ライザップ牛サラダ", cal: 398, p: "28.0g" },
                        { store: "すき家", name: "牛丼ライト", cal: 352, p: "20.0g" },
                      ].map((item) => (
                        <div key={item.name} className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
                          <p className="text-[9px] text-gray-400">{item.store}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] font-medium text-gray-700">{item.name}</p>
                            <span className="text-[11px] font-bold text-sky-500">{item.cal}</span>
                          </div>
                          <div className="flex gap-2 mt-1">
                            <span className="text-[8px] text-blue-500">P {item.p}</span>
                            <span className="text-[8px] text-gray-400">{item.cal}kcal</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-200">3</div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Step</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">タップで記録</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  食べたメニューをタップするだけ。カロリー・PFCが自動で記録される。毎日の積み重ねが見える化される。
                </p>
              </div>
              <div className="w-[220px] flex-shrink-0">
                <PhoneMockup>
                  <div className="p-4 pt-8 flex flex-col items-center justify-center bg-white" style={{ minHeight: 300 }}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-3 shadow-lg shadow-emerald-200">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-sm font-bold text-gray-800 mb-1">記録完了！</p>
                    <p className="text-[10px] text-gray-400 mb-4 text-center">若鶏のグリルを昼食に記録しました</p>
                    <div className="bg-gray-50 rounded-xl p-3 w-full border border-gray-100">
                      <div className="grid grid-cols-4 gap-1 text-center">
                        <div><p className="text-[10px] font-bold text-sky-500">514</p><p className="text-[8px] text-gray-400">kcal</p></div>
                        <div><p className="text-[10px] font-bold text-blue-500">35.3g</p><p className="text-[8px] text-gray-400">P</p></div>
                        <div><p className="text-[10px] font-bold text-amber-500">28.7g</p><p className="text-[8px] text-gray-400">F</p></div>
                        <div><p className="text-[10px] font-bold text-emerald-500">26.6g</p><p className="text-[8px] text-gray-400">C</p></div>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Supported Chains ─── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-sky-500 uppercase tracking-widest mb-3 font-semibold">Supported chains</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            主要チェーン20社に対応
          </h2>
          <p className="text-center text-sm text-gray-400 mb-10">
            公式の栄養データに基づく正確な情報
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {CHAINS.map((chain) => {
              const logo = getChainLogo(chain);
              return (
                <div
                  key={chain}
                  className="bg-white rounded-xl border border-gray-100 p-3 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
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
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                  <span className="text-[11px] text-gray-500 text-center leading-tight">{chain}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            外食しながら、カラダづくり。
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            登録は無料。クレジットカードも不要です。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-sky-200 active:scale-[0.98]"
            >
              無料で始める
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-gray-500 hover:text-gray-700 font-medium px-6 py-4 transition-colors"
            >
              ガイド記事を読む
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-gray-100 py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <LogoIcon size={24} />
              <span className="font-bold text-sm text-gray-800">たべなび</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <Link href="/guide" className="hover:text-gray-600 transition-colors">ガイド</Link>
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">プライバシー</Link>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">利用規約</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">お問い合わせ</Link>
            </div>
          </div>
          <p className="text-center text-[11px] text-gray-300 mt-8">
            © 2026 たべなび. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
