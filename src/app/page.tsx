import Link from "next/link";
import { redirect } from "next/navigation";
import { ChevronRight, Search, MapPin, Sparkles, Utensils, ArrowRight, Smartphone } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";
import { createClient } from "@/lib/supabase/server";
import { ClientAuthRedirect } from "@/components/ClientAuthRedirect";
import { SessionDebugBadge } from "@/components/SessionDebugBadge";

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

// Static trusted JSON-LD data for SEO structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "たべなび",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://www.tabenavi.jp",
  description: "外食専門の栄養管理アプリ。カロリー・PFCで外食先を絞り込み、マップで近くの高タンパクメニューを発見。20チェーン・500メニュー対応。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "32",
    bestRating: "5",
  },
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
};

export default async function Home() {
  // Redirect logged-in users to dashboard
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) redirect("/dashboard");
  } catch {}

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              className="bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:from-sky-500 hover:to-cyan-600 transition-all shadow-md shadow-sky-200 animate-pulse-glow"
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
                className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-sky-200 active:scale-[0.98] flex items-center justify-center gap-2 text-base"
              >
                無料で始める — 30秒で登録
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center lg:text-left">クレジットカード不要 · いつでも無料</p>
          </div>

          {/* Phone Mockup */}
          <div className="flex-shrink-0 w-[260px] sm:w-[280px]">
            <PhoneMockup>
              <div className="p-5 pt-9 space-y-4 bg-white" style={{ minHeight: 440 }}>
                {/* Header bar */}
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-bold text-gray-800">今日のサマリー</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[9px] text-emerald-500 font-medium">記録中</span>
                  </div>
                </div>

                {/* Calorie ring */}
                <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-5 flex flex-col items-center">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="46" fill="none" stroke="#E0F2FE" strokeWidth="10" />
                    <circle cx="60" cy="60" r="46" fill="none" stroke="url(#hero-ring)" strokeWidth="10"
                      strokeDasharray={2 * Math.PI * 46} strokeDashoffset={2 * Math.PI * 46 * 0.35}
                      strokeLinecap="round" transform="rotate(-90 60 60)" />
                    <defs><linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#38BDF8" /><stop offset="1" stopColor="#06B6D4" /></linearGradient></defs>
                    <text x="60" y="54" textAnchor="middle" fill="#0F172A" fontSize="22" fontWeight="bold">1,170</text>
                    <text x="60" y="70" textAnchor="middle" fill="#94A3B8" fontSize="10">/ 1,800 kcal</text>
                  </svg>
                </div>

                {/* PFC bars */}
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-gray-500">タンパク質</span>
                      <span className="font-semibold text-gray-700">42.5 / 68g</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-400 rounded-full" style={{ width: "62%" }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-gray-500">脂質</span>
                      <span className="font-semibold text-gray-700">28.0 / 50g</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{ width: "56%" }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-gray-500">炭水化物</span>
                      <span className="font-semibold text-gray-700">95.2 / 248g</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-400 rounded-full" style={{ width: "38%" }} /></div>
                  </div>
                </div>

                {/* Food log */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100/80">
                    <div className="w-1 h-8 rounded-full bg-sky-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] text-gray-400">昼食 · サイゼリヤ</p>
                      <p className="text-[11px] font-semibold text-gray-700 truncate">若鶏のグリル</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold text-sky-500">514</p>
                      <p className="text-[8px] text-gray-400">kcal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100/80">
                    <div className="w-1 h-8 rounded-full bg-amber-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] text-gray-400">朝食 · セブンイレブン</p>
                      <p className="text-[11px] font-semibold text-gray-700 truncate">サラダチキン + おにぎり</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-bold text-sky-500">350</p>
                      <p className="text-[8px] text-gray-400">kcal</p>
                    </div>
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
                  <div className="p-5 pt-9 bg-white" style={{ minHeight: 310 }}>
                    <p className="text-[11px] font-bold text-gray-700 mb-4">絞り込み条件</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] mb-1.5">
                          <span className="text-sky-500 font-medium">カロリー</span>
                          <span className="text-gray-500">200 – 600 kcal</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-3/5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" /></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] mb-1.5">
                          <span className="text-blue-500 font-medium">タンパク質</span>
                          <span className="text-gray-500">20g 以上</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full"><div className="h-full w-2/5 bg-blue-400 rounded-full" /></div>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 mb-2">ジャンル</p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-[9px] bg-sky-50 text-sky-600 px-2.5 py-1 rounded-lg border border-sky-200 font-medium">牛丼</span>
                          <span className="text-[9px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-lg border border-gray-100">ファミレス</span>
                          <span className="text-[9px] bg-sky-50 text-sky-600 px-2.5 py-1 rounded-lg border border-sky-200 font-medium">定食</span>
                          <span className="text-[9px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-lg border border-gray-100">カフェ</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-[10px] font-bold py-2.5 rounded-xl text-center shadow-sm shadow-sky-200">
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
                  <div className="p-5 pt-9 bg-white" style={{ minHeight: 310 }}>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[11px] font-bold text-gray-700">検索結果</p>
                      <span className="text-[9px] text-gray-400">3件</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { store: "サイゼリヤ", name: "若鶏のグリル", cal: 514, p: 35.3, f: 28.7, color: "bg-emerald-400" },
                        { store: "吉野家", name: "ライザップ牛サラダ", cal: 398, p: 28.0, f: 25.2, color: "bg-sky-400" },
                        { store: "すき家", name: "牛丼ライト", cal: 352, p: 20.0, f: 12.5, color: "bg-violet-400" },
                      ].map((item) => (
                        <div key={item.name} className="bg-gray-50 rounded-xl px-3.5 py-3 border border-gray-100/80">
                          <div className="flex items-start gap-2.5">
                            <div className={`w-1 h-10 rounded-full ${item.color} mt-0.5`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-[9px] text-gray-400">{item.store}</p>
                              <p className="text-[11px] font-semibold text-gray-700 truncate">{item.name}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-[9px] text-sky-500 font-bold">{item.cal} kcal</span>
                                <span className="text-[8px] text-blue-400">P{item.p}g</span>
                                <span className="text-[8px] text-amber-400">F{item.f}g</span>
                              </div>
                            </div>
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
                  <div className="p-5 pt-9 flex flex-col items-center justify-center bg-white" style={{ minHeight: 310 }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-[13px] font-bold text-gray-800 mb-1">記録完了！</p>
                    <p className="text-[10px] text-gray-400 mb-5">若鶏のグリルを昼食に記録しました</p>
                    <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-4 w-full">
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div>
                          <p className="text-[13px] font-bold text-sky-500">514</p>
                          <p className="text-[8px] text-gray-400 mt-0.5">kcal</p>
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-blue-500">35.3</p>
                          <p className="text-[8px] text-gray-400 mt-0.5">P (g)</p>
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-amber-500">28.7</p>
                          <p className="text-[8px] text-gray-400 mt-0.5">F (g)</p>
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-emerald-500">26.6</p>
                          <p className="text-[8px] text-gray-400 mt-0.5">C (g)</p>
                        </div>
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
                      className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5"
                      style={{ backgroundColor: logo.bg }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.url} alt={chain} className="w-full h-full object-contain" />
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

      {/* ─── User Voices ─── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-sky-500 uppercase tracking-widest mb-3 font-semibold">User voices</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-900">
            ユーザーの声
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                「PFCで検索できるのが神。筋トレ後にタンパク質30g以上で近くの店を探せるのは、たべなびだけ。」
              </p>
              <p className="text-xs text-gray-400">20代男性 · 筋トレ歴2年</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                「週5で外食の生活でも、カロリー管理が続けられた。チェーン店のデータが正確なのが信頼できる。」
              </p>
              <p className="text-xs text-gray-400">30代男性 · 会社員</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                「マップで近くのヘルシーメニューを探せるのが便利。ランチ選びが毎日楽しくなった。」
              </p>
              <p className="text-xs text-gray-400">20代女性 · ダイエット中</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── iOS App Coming Soon ─── */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-2xl shadow-sky-500/30">
                <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                App Store で公開中
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                ホーム画面から、<br className="sm:hidden" />ワンタップで開く。
              </h2>
              <p className="text-sky-100/80 text-sm sm:text-base mb-6 leading-relaxed">
                iOS アプリ版が App Store で公開されました。<br className="hidden sm:block" />
                App Store から無料でダウンロードしてご利用いただけます。
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <a
                  href="https://apps.apple.com/jp/app/id6764268638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all hover:bg-sky-50 active:scale-[0.98] text-sm shadow-lg"
                >
                  App Store からダウンロード
                  <ChevronRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-sky-200/60">Web 版でも全機能ご利用いただけます</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
            外食しながら、カラダづくり。
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            登録は30秒。クレジットカードも不要。完全無料。
          </p>
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-sky-200 active:scale-[0.98] text-base"
          >
            無料で始める — 30秒で登録
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-gray-100 py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-8">
            <a
              href="https://apps.apple.com/jp/app/id6764268638"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-colors"
              aria-label="App Store からダウンロード"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none opacity-80">Download on the</div>
                <div className="text-base font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </div>
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
