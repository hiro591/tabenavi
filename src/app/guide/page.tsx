import Link from "next/link";
import { Utensils } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

export const metadata = {
  title: "外食栄養ガイド | たべなび",
  description:
    "チェーン店の栄養データ・ダイエットのコツをまとめました。マクドナルド・吉野家・松屋など人気チェーンのカロリー・PFC一覧。",
};

const articles = [
  {
    slug: "mcdonalds",
    chain: "マクドナルド",
    title: "マクドナルド カロリー・栄養成分一覧【2026年最新】",
    description:
      "全メニューのカロリー・タンパク質・脂質・炭水化物を完全網羅。ダイエット中のおすすめメニューも紹介。",
  },
  {
    slug: "yoshinoya",
    chain: "吉野家",
    title: "吉野家 全メニュー カロリー・PFC一覧表",
    description:
      "牛丼からサイドメニューまで、全サイズの栄養成分を徹底解説。",
  },
  {
    slug: "matsuya",
    chain: "松屋",
    title: "松屋 カロリーランキング｜ダイエット中のおすすめ",
    description:
      "牛めし・定食の栄養成分を比較。低カロリー順ランキング付き。",
  },
  {
    slug: "sukiya",
    chain: "すき家",
    title: "すき家 高タンパクメニューTOP10",
    description:
      "筋トレ民必見。すき家で最もタンパク質が摂れるメニューを紹介。",
  },
  {
    slug: "saizeriya",
    chain: "サイゼリヤ",
    title: "サイゼリヤ 500円以下で高タンパク｜筋トレ民のベスト注文",
    description:
      "コスパ最強のサイゼで、栄養バランスを考えた注文術を解説。",
  },
  {
    slug: "conveni",
    chain: "セブンイレブン",
    title: "コンビニ 高タンパク商品ランキング【セブン・ローソン・ファミマ】",
    description: "3大コンビニの高タンパク商品を徹底比較。",
  },
  {
    slug: "starbucks",
    chain: "スターバックス",
    title: "スターバックス カロリー一覧｜ダイエット中に飲めるドリンク",
    description:
      "フラペチーノからラテまで、全ドリンクのカロリーを紹介。",
  },
  {
    slug: "eating-out-diet",
    chain: "",
    title: "外食ダイエット完全ガイド｜チェーン店別おすすめメニュー",
    description:
      "外食しながら痩せるための完全ガイド。チェーン店別のおすすめメニューを紹介。",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            外食栄養ガイド
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            チェーン店の栄養データ・ダイエットのコツをまとめました
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => {
            const logo = article.chain
              ? getChainLogo(article.chain)
              : null;

            return (
              <Link
                key={article.slug}
                href={`/guide/${article.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 flex flex-col"
              >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  {logo ? (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: logo.bg }}
                    >
                      <img
                        src={logo.url}
                        alt={article.chain}
                        className="w-8 h-8"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
                      <Utensils className="w-7 h-7 text-orange-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                  {article.description}
                </p>
                <span className="text-xs font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                  読む &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center pb-12">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
        >
          &larr; トップに戻る
        </Link>
      </div>
    </div>
  );
}
