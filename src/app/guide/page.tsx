import Link from "next/link";
import type { Metadata } from "next";
import {
  Utensils,
  BookOpen,
  TrendingDown,
  Dumbbell,
  ChevronRight,
  Flame,
  Search,
  BarChart3,
  LayoutGrid,
} from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";
import { ARTICLE_CATEGORIES, RELATED_ARTICLES, type ArticleCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "外食栄養ガイド｜チェーン店のカロリー・PFC一覧 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide" },
  description:
    "マクドナルド、吉野家、サイゼリヤなど32チェーンの栄養成分データ。ダイエット・筋トレ・糖質制限中の外食メニュー選びに。40本以上の専門ガイド記事も。",
  openGraph: {
    title: "外食栄養ガイド｜チェーン店のカロリー・PFC一覧",
    description:
      "32チェーンの栄養データ + 40本以上の専門ガイド記事。",
    type: "website",
  },
};

// ─── 特集記事（SEO記事） ─────────────────────────────────────────────────────

const featuredArticles = [
  {
    slug: "eating-out-nutrition-report",
    title: "外食6,097品を全部調べた統計レポート",
    description: "32チェーンの公式データで判明「ダイエット向きは10.8%だけ」",
    icon: BarChart3,
    color: "from-violet-400 to-fuchsia-400",
  },
  {
    slug: "eating-out-diet",
    title: "外食ダイエット完全ガイド",
    description: "チェーン店別おすすめメニューと太らない食べ方",
    icon: TrendingDown,
    color: "from-sky-400 to-cyan-400",
  },
  {
    slug: "muscle-eating-out",
    title: "筋トレ中の外食ガイド",
    description: "高タンパクチェーン店メニューをPFCデータ付きで紹介",
    icon: Dumbbell,
    color: "from-blue-400 to-indigo-400",
  },
  {
    slug: "calorie-database",
    title: "外食カロリーDB【全6,000品】",
    description: "主要チェーン店のカロリー・PFCを完全網羅",
    icon: BarChart3,
    color: "from-emerald-400 to-teal-400",
  },
];

const guideArticles = [
  {
    slug: "low-carb-eating-out",
    title: "糖質制限×外食ガイド",
    description: "チェーン店の低糖質メニューを完全解説",
    tag: "糖質制限",
  },
  {
    slug: "diet-lunch",
    title: "ダイエット中のランチガイド",
    description: "500kcal以下のおすすめランチメニュー",
    tag: "ランチ",
  },
  {
    slug: "family-restaurant-diet",
    title: "ファミレスダイエット比較",
    description: "サイゼリヤ・ガスト・デニーズを徹底比較",
    tag: "ファミレス",
  },
  {
    slug: "drinking-party-diet",
    title: "飲み会で太らないガイド",
    description: "お酒のカロリーとおつまみの選び方",
    tag: "飲み会",
  },
  {
    slug: "daily-meal-plan",
    title: "1日1500kcalプラン",
    description: "外食だけで達成する食事プランを5パターン紹介",
    tag: "食事プラン",
  },
  {
    slug: "protein-cost-ranking",
    title: "タンパク質コスパランキング",
    description: "1gあたりの価格で外食メニューを比較",
    tag: "コスパ",
  },
  {
    slug: "mcdonalds-diet",
    title: "マクドナルドでダイエット",
    description: "低カロリーランキングと太らない食べ方",
    tag: "マクドナルド",
  },
  {
    slug: "saizeriya-diet",
    title: "サイゼリヤでダイエット",
    description: "500円以下の神注文法と高タンパクメニュー",
    tag: "サイゼリヤ",
  },
  {
    slug: "conveni-protein",
    title: "コンビニ高タンパク商品",
    description: "セブン・ローソン・ファミマを徹底比較",
    tag: "コンビニ",
  },
  {
    slug: "gyudon-comparison",
    title: "牛丼3社カロリー比較",
    description: "吉野家・松屋・すき家を徹底比較",
    tag: "牛丼",
  },
  {
    slug: "hamburger-comparison",
    title: "ハンバーガー5社カロリー比較",
    description: "マック・モス・バーキン・ケンタ・ゼッテリアを比較",
    tag: "バーガー",
  },
  {
    slug: "low-fat-eating-out",
    title: "低脂質な外食メニューガイド",
    description: "脂質を抑えたい人向けの外食選び",
    tag: "低脂質",
  },
  {
    slug: "morning-diet",
    title: "ダイエット中の朝食ガイド",
    description: "朝マック・コンビニ・チェーン店の朝食メニュー",
    tag: "朝食",
  },
  {
    slug: "ramen-diet",
    title: "ラーメンは食べていい？",
    description: "カロリー比較と太らない食べ方",
    tag: "ラーメン",
  },
  {
    slug: "curry-diet",
    title: "カレーのカロリーと太らない食べ方",
    description: "CoCo壱・松屋・ガストのカレー比較",
    tag: "カレー",
  },
  {
    slug: "sushi-diet",
    title: "回転寿司ダイエットガイド",
    description: "スシロー・くら寿司のカロリーと食べ方",
    tag: "寿司",
  },
  {
    slug: "pfc-guide",
    title: "PFCバランス入門ガイド",
    description: "計算方法と外食での実践ガイド",
    tag: "PFC",
  },
  {
    slug: "recording-diet",
    title: "レコーディングダイエット",
    description: "記録するだけで痩せる科学的な理由",
    tag: "食事記録",
  },
  {
    slug: "late-night-eating",
    title: "夜食で太らない方法",
    description: "深夜の外食・コンビニメニューガイド",
    tag: "夜食",
  },
  {
    slug: "eating-order",
    title: "太らない食べ方・食べ順ガイド",
    description: "外食で実践できる5つのテクニック",
    tag: "食べ方",
  },
  {
    slug: "seven-eleven-diet",
    title: "セブンイレブンダイエット",
    description: "低カロリー＆高タンパク商品ランキング",
    tag: "セブン",
  },
  {
    slug: "bulkup-eating-out",
    title: "増量期の外食ガイド",
    description: "バルクアップに最適なチェーン店メニュー",
    tag: "増量期",
  },
  {
    slug: "cheat-day",
    title: "チートデイ完全ガイド",
    description: "正しいやり方・頻度・おすすめメニュー",
    tag: "チートデイ",
  },
  {
    slug: "no-exercise-diet",
    title: "運動なしで痩せる食事術",
    description: "食事だけで確実に体重を落とす方法",
    tag: "運動なし",
  },
  {
    slug: "diet-plateau",
    title: "ダイエット停滞期の乗り越え方",
    description: "体重が減らない時の5つの対策",
    tag: "停滞期",
  },
  {
    slug: "rebound-prevention",
    title: "リバウンドしない方法",
    description: "ダイエット後に体重を維持する科学的アプローチ",
    tag: "リバウンド",
  },
  {
    slug: "bmr-calculator",
    title: "基礎代謝の計算方法と上げ方",
    description: "痩せやすい体を作る完全ガイド",
    tag: "基礎代謝",
  },
  {
    slug: "lawson-diet",
    title: "ローソンダイエットガイド",
    description: "低カロリー＆高タンパク商品ランキング",
    tag: "ローソン",
  },
  {
    slug: "familymart-diet",
    title: "ファミマダイエットガイド",
    description: "RIZAP商品＆低カロリーランキング",
    tag: "ファミマ",
  },
  {
    slug: "eat-and-lose",
    title: "食べて痩せるダイエット",
    description: "我慢しないで確実に体重を落とす方法",
    tag: "食べ痩せ",
  },
  {
    slug: "metabolism-boost-foods",
    title: "代謝を上げる食べ物ランキング",
    description: "痩せやすい体を食事で作る",
    tag: "代謝UP",
  },
  {
    slug: "diet-mistakes",
    title: "ダイエットでやってはいけないこと",
    description: "失敗する人の共通点10選",
    tag: "NG集",
  },
  {
    slug: "yoshinoya-diet",
    title: "吉野家ダイエットガイド",
    description: "低カロリーランキングとおすすめの食べ方",
    tag: "吉野家",
  },
  {
    slug: "matsuya-diet",
    title: "松屋ダイエットガイド",
    description: "定食vs丼の比較と低カロリーメニュー",
    tag: "松屋",
  },
  {
    slug: "sukiya-diet",
    title: "すき家ダイエットガイド",
    description: "牛丼ライト352kcalで糖質オフ",
    tag: "すき家",
  },
  {
    slug: "kfc-diet",
    title: "ケンタッキーダイエットガイド",
    description: "意外と高タンパクなメニューの選び方",
    tag: "KFC",
  },
  {
    slug: "gusto-diet",
    title: "ガストダイエットガイド",
    description: "低カロリーランキングと注文テクニック",
    tag: "ガスト",
  },
  {
    slug: "subway-diet",
    title: "サブウェイダイエットガイド",
    description: "低カロリー＆高タンパクサンドの選び方",
    tag: "サブウェイ",
  },
  {
    slug: "ootoya-diet",
    title: "大戸屋ダイエットガイド",
    description: "定食の選び方とおすすめ低カロリーメニュー",
    tag: "大戸屋",
  },
  {
    slug: "dennys-diet",
    title: "デニーズダイエットガイド",
    description: "低カロリーメニューとソース別比較",
    tag: "デニーズ",
  },
  {
    slug: "starbucks-diet",
    title: "スタバダイエットガイド",
    description: "低カロリードリンクと太らないカスタマイズ術",
    tag: "スタバ",
  },
  {
    slug: "marugame-diet",
    title: "丸亀製麺ダイエットガイド",
    description: "うどんは太る？低カロリーメニューの選び方",
    tag: "丸亀製麺",
  },
];

// ─── チェーン店記事 ──────────────────────────────────────────────────────────

const chainCategories = [
  {
    name: "ファストフード",
    chains: [
      { slug: "mcdonalds", chain: "マクドナルド" },
      { slug: "kfc", chain: "ケンタッキー" },
      { slug: "mos", chain: "モスバーガー" },
      { slug: "subway", chain: "サブウェイ" },
    ],
  },
  {
    name: "牛丼・定食",
    chains: [
      { slug: "yoshinoya", chain: "吉野家" },
      { slug: "matsuya", chain: "松屋" },
      { slug: "sukiya", chain: "すき家" },
      { slug: "ootoya", chain: "大戸屋" },
      { slug: "yayoiken", chain: "やよい軒" },
    ],
  },
  {
    name: "ファミレス",
    chains: [
      { slug: "saizeriya", chain: "サイゼリヤ" },
      { slug: "gusto", chain: "ガスト" },
      { slug: "bamiyan", chain: "バーミヤン" },
      { slug: "dennys", chain: "デニーズ" },
    ],
  },
  {
    name: "麺・中華・寿司",
    chains: [
      { slug: "ohsho", chain: "餃子の王将" },
      { slug: "hidakaya", chain: "日高屋" },
      { slug: "marugame", chain: "丸亀製麺" },
      { slug: "kurasushi", chain: "くら寿司" },
      { slug: "sushiro", chain: "スシロー" },
    ],
  },
  {
    name: "カフェ・コンビニ",
    chains: [
      { slug: "starbucks", chain: "スターバックス" },
      { slug: "doutor", chain: "ドトール" },
      { slug: "conveni", chain: "セブンイレブン" },
    ],
  },
];

// ─── コンポーネント ──────────────────────────────────────────────────────────

function ChainCard({
  slug,
  chain,
}: {
  slug: string;
  chain: string;
}) {
  const logo = getChainLogo(chain);

  return (
    <Link
      href={`/guide/${slug}`}
      className="group flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 hover:shadow-md hover:border-sky-200 transition-all"
    >
      {logo ? (
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: logo.bg }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.url} alt={chain} className="w-6 h-6" />
        </div>
      ) : (
        <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
          <Utensils className="w-5 h-5 text-sky-400" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors truncate">
          {chain}
        </p>
        <p className="text-[11px] text-gray-400">カロリー・PFC一覧</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-sky-400 transition-colors flex-shrink-0" />
    </Link>
  );
}

// ─── メインページ ────────────────────────────────────────────────────────────

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#f8fafb]">
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fafb] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            全46記事 + 32チェーン栄養データ
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            外食栄養ガイド
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ダイエット・筋トレ・糖質制限 —
            目的に合った外食メニューが見つかります
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ─── 特集記事 TOP3 ─── */}
        <section className="mb-14">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Flame className="w-5 h-5 text-sky-500" />
            注目のガイド記事
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredArticles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/guide/${article.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all"
                >
                  <div
                    className={`bg-gradient-to-br ${article.color} p-6 sm:p-7 h-full`}
                  >
                    <Icon className="w-8 h-8 text-white/80 mb-4" />
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90 mt-4 group-hover:gap-2 transition-all">
                      読む
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ─── カテゴリで探す ─── */}
        <section className="mb-14">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-sky-500" />
            カテゴリで探す
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(ARTICLE_CATEGORIES) as ArticleCategory[])
              .filter((c) => c !== "overview")
              .map((c) => {
                const meta = ARTICLE_CATEGORIES[c];
                const count = RELATED_ARTICLES.filter((a) => a.category === c).length;
                return (
                  <Link
                    key={c}
                    href={`/guide/category/${c}`}
                    className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`bg-gradient-to-br ${meta.color} p-4 sm:p-5 h-full`}>
                      <p className="text-sm sm:text-base font-bold text-white leading-tight">
                        {meta.label}
                      </p>
                      <p className="text-[11px] text-white/80 mt-1">{count}本の記事</p>
                      <ChevronRight className="absolute bottom-3 right-3 w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>

        {/* ─── ガイド記事一覧 ─── */}
        <section className="mb-14">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Search className="w-5 h-5 text-sky-500" />
            目的別ガイド記事
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guideArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/guide/${article.slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-sky-200 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[11px] font-medium text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-sky-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 flex-1 leading-relaxed">
                  {article.description}
                </p>
                <span className="text-xs font-medium text-sky-500 mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  読む
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── チェーン店別 栄養データ ─── */}
        <section className="mb-14">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-sky-500" />
            チェーン店別 栄養データ
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            カロリー・タンパク質・脂質・炭水化物の一覧を確認できます
          </p>

          {/* 目的別ランキングハブへの導線(高タンパク/低カロリー/ダイエット等) */}
          <Link
            href="/chains"
            className="flex items-center justify-between gap-3 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 rounded-xl px-5 py-4 mb-6 hover:shadow-md transition-all"
          >
            <div>
              <p className="text-sm font-bold text-gray-900">目的別ランキングから探す</p>
              <p className="text-xs text-gray-500 mt-0.5">32チェーン × 高タンパク・低カロリー・ダイエット・低糖質ほか</p>
            </div>
            <ChevronRight className="w-5 h-5 text-sky-400 flex-shrink-0" />
          </Link>

          <div className="space-y-8">
            {chainCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-bold text-gray-600 mb-3 pb-2 border-b border-gray-100">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.chains.map((chain) => (
                    <ChainCard
                      key={chain.slug}
                      slug={chain.slug}
                      chain={chain.chain}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-gradient-to-r from-sky-400 to-cyan-400 rounded-2xl p-8 sm:p-10 text-center shadow-lg shadow-sky-200/30 mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            外食の栄養管理を、もっとラクに。
          </h2>
          <p className="text-sky-100 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            32チェーン・6,000品以上の栄養データ。3タップで記録完了。
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            無料で始める
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      </div>

      {/* ─── Footer ─── */}
      <div className="text-center pb-12">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-sky-500 transition-colors"
        >
          &larr; トップに戻る
        </Link>
      </div>
    </div>
  );
}
