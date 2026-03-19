import Link from "next/link";
import { Utensils } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

export const metadata = {
  title: "外食栄養ガイド｜チェーン店のカロリー・PFC一覧 | たべなび",
  description:
    "マクドナルド、吉野家、サイゼリヤなど20以上のチェーン店の栄養成分データ。ダイエット・筋トレ中の外食メニュー選びに。",
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
    slug: "kfc",
    chain: "ケンタッキー",
    title: "ケンタッキー カロリー・栄養成分一覧【2026年最新】",
    description:
      "オリジナルチキンからサンドまで、全メニューのカロリー・PFCを網羅。",
  },
  {
    slug: "mos",
    chain: "モスバーガー",
    title: "モスバーガー カロリー・栄養成分一覧【2026年最新】",
    description:
      "バーガーからサイドメニューまで、全メニューの栄養成分を紹介。",
  },
  {
    slug: "gusto",
    chain: "ガスト",
    title: "ガスト カロリー・栄養成分一覧【2026年最新】",
    description:
      "ハンバーグから日替わりランチまで、全メニューのカロリー・PFCを紹介。",
  },
  {
    slug: "bamiyan",
    chain: "バーミヤン",
    title: "バーミヤン カロリー・栄養成分一覧【2026年最新】",
    description:
      "中華料理メニューのカロリー・タンパク質・脂質・炭水化物を完全網羅。",
  },
  {
    slug: "ohsho",
    chain: "餃子の王将",
    title: "餃子の王将 カロリー・栄養成分一覧【2026年最新】",
    description:
      "餃子から定食まで、全メニューの栄養成分を徹底解説。",
  },
  {
    slug: "hidakaya",
    chain: "日高屋",
    title: "日高屋 カロリー・栄養成分一覧【2026年最新】",
    description:
      "ラーメンから定食まで、全メニューのカロリー・PFCを網羅。",
  },
  {
    slug: "marugame",
    chain: "丸亀製麺",
    title: "丸亀製麺 カロリー・栄養成分一覧【2026年最新】",
    description:
      "うどんから天ぷらまで、全メニューの栄養成分を紹介。",
  },
  {
    slug: "kurasushi",
    chain: "くら寿司",
    title: "くら寿司 カロリー・栄養成分一覧【2026年最新】",
    description:
      "全ネタのカロリー・タンパク質・脂質・炭水化物を完全網羅。",
  },
  {
    slug: "sushiro",
    chain: "スシロー",
    title: "スシロー カロリー・栄養成分一覧【2026年最新】",
    description:
      "お寿司からサイドメニューまで、全メニューの栄養成分を紹介。",
  },
  {
    slug: "dennys",
    chain: "デニーズ",
    title: "デニーズ カロリー・栄養成分一覧【2026年最新】",
    description:
      "ハンバーグからデザートまで、全メニューのカロリー・PFCを網羅。",
  },
  {
    slug: "doutor",
    chain: "ドトール",
    title: "ドトール カロリー・栄養成分一覧【2026年最新】",
    description:
      "コーヒーからフードまで、全メニューの栄養成分を紹介。",
  },
  {
    slug: "subway",
    chain: "サブウェイ",
    title: "サブウェイ カロリー・栄養成分一覧【2026年最新】",
    description:
      "全サンドイッチのカロリー・タンパク質・脂質・炭水化物を完全網羅。",
  },
  {
    slug: "nakau",
    chain: "なか卯",
    title: "なか卯 カロリー・栄養成分一覧【2026年最新】",
    description:
      "親子丼からうどんまで、全メニューの栄養成分を徹底解説。",
  },
  {
    slug: "ootoya",
    chain: "大戸屋",
    title: "大戸屋 カロリー・栄養成分一覧【2026年最新】",
    description:
      "手作り定食メニューのカロリー・PFCを網羅。ダイエット中のおすすめも紹介。",
  },
  {
    slug: "yayoiken",
    chain: "やよい軒",
    title: "やよい軒 カロリー・栄養成分一覧【2026年最新】",
    description:
      "定食メニューの栄養成分を徹底比較。高タンパクメニューも紹介。",
  },
  {
    slug: "eating-out-diet",
    chain: "",
    title: "外食ダイエット完全ガイド｜チェーン店別おすすめメニュー",
    description:
      "外食しながら痩せるための完全ガイド。チェーン店別のおすすめメニューを紹介。",
  },
  {
    slug: "muscle-eating-out",
    chain: "",
    title: "筋トレ中の外食完全ガイド｜高タンパクチェーン店メニュー",
    description:
      "筋トレ中の外食で迷わない。高タンパクメニューをPFCデータ付きで紹介。",
  },
  {
    slug: "gyudon-comparison",
    chain: "",
    title: "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家",
    description:
      "吉野家・松屋・すき家の牛丼を徹底比較。ダイエットに最適なチェーンはどこ？",
  },
  {
    slug: "low-fat-eating-out",
    chain: "",
    title: "外食で低脂質メニューを選ぶ完全ガイド",
    description:
      "脂質制限中でも安心の外食メニューをチェーン店別に紹介。選び方のコツも解説。",
  },
  {
    slug: "calorie-database",
    chain: "",
    title: "外食チェーン店カロリー一覧【全20社・完全版】",
    description:
      "主要チェーン店のカロリー・PFCを完全網羅。ダイエット中の外食選びに。",
  },
  {
    slug: "mcdonalds-diet",
    chain: "マクドナルド",
    title: "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方",
    description:
      "カロリー低い順ランキング、おすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。",
  },
  {
    slug: "conveni-protein",
    chain: "セブンイレブン",
    title: "コンビニ高タンパク商品ランキング【セブン・ローソン・ファミマ比較】",
    description:
      "3大コンビニの高タンパク商品を徹底比較。筋トレ・ダイエット中のタンパク質補給に。",
  },
  {
    slug: "saizeriya-diet",
    chain: "サイゼリヤ",
    title: "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド",
    description:
      "カロリーランキング、500円以下の神注文法、筋トレ民おすすめメニューを徹底解説。",
  },
  {
    slug: "low-carb-eating-out",
    chain: "",
    title: "糖質制限中でも外食OK！低糖質メニュー完全ガイド",
    description:
      "チェーン店別の低糖質メニューを徹底解説。1食の糖質20〜40gに抑える食べ方を紹介。",
  },
  {
    slug: "diet-lunch",
    chain: "",
    title: "ダイエット中のランチ完全ガイド｜500kcal以下のおすすめメニュー",
    description:
      "外食チェーン店で500kcal以下のランチメニューを厳選。目的別おすすめも紹介。",
  },
  {
    slug: "family-restaurant-diet",
    chain: "",
    title: "ファミレスダイエット完全ガイド｜サイゼリヤ・ガスト・デニーズ比較",
    description:
      "3大ファミレスのカロリーを徹底比較。ダイエット中のおすすめメニューを紹介。",
  },
  {
    slug: "drinking-party-diet",
    chain: "",
    title: "飲み会で太らない完全ガイド｜居酒屋メニューの選び方",
    description:
      "お酒のカロリー比較、太らないおつまみBEST10、飲み会前後のテクニックを解説。",
  },
  {
    slug: "daily-meal-plan",
    chain: "",
    title: "外食だけで1日1500kcal！ダイエット食事プラン完全ガイド",
    description:
      "チェーン店だけで達成する1日1500kcalの食事プランを5パターン紹介。",
  },
  {
    slug: "protein-cost-ranking",
    chain: "",
    title: "外食タンパク質コスパ最強ランキング｜1gあたりの価格で比較",
    description:
      "タンパク質1gあたりの価格で外食メニューを徹底比較。コスパ最強はどれ？",
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
                    <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center">
                      <Utensils className="w-7 h-7 text-sky-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                  {article.description}
                </p>
                <span className="text-xs font-medium text-sky-500 group-hover:text-sky-600 transition-colors">
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
          className="text-sm text-gray-400 hover:text-sky-500 transition-colors"
        >
          &larr; トップに戻る
        </Link>
      </div>
    </div>
  );
}
