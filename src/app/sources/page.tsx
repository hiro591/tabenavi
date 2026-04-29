import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "栄養成分データの出典 | たべなび",
  description:
    "たべなびで提供する栄養成分データは、各外食チェーン公式サイトの公開情報を基に作成しています。出典一覧と最終更新日を記載しています。",
};

type Chain = {
  name: string;
  url: string;
  category: string;
};

const CHAINS: Chain[] = [
  // コンビニ
  { name: "セブンイレブン", url: "https://www.sej.co.jp/", category: "コンビニ" },
  { name: "ファミリーマート", url: "https://www.family.co.jp/", category: "コンビニ" },
  { name: "ローソン", url: "https://www.lawson.co.jp/", category: "コンビニ" },

  // ファストフード
  { name: "マクドナルド", url: "https://www.mcdonalds.co.jp/", category: "ファストフード" },
  { name: "スターバックス", url: "https://www.starbucks.co.jp/", category: "ファストフード" },
  { name: "ケンタッキーフライドチキン", url: "https://www.kfc.co.jp/", category: "ファストフード" },
  { name: "モスバーガー", url: "https://www.mos.jp/", category: "ファストフード" },
  { name: "バーガーキング", url: "https://burgerkingjapan.co.jp/", category: "ファストフード" },
  { name: "サブウェイ", url: "https://www.subway.co.jp/", category: "ファストフード" },

  // 牛丼・定食
  { name: "吉野家", url: "https://www.yoshinoya.com/", category: "牛丼・定食" },
  { name: "松屋", url: "https://www.matsuyafoods.co.jp/", category: "牛丼・定食" },
  { name: "すき家", url: "https://www.sukiya.jp/", category: "牛丼・定食" },
  { name: "なか卯", url: "https://www.nakau.co.jp/", category: "牛丼・定食" },
  { name: "大戸屋", url: "https://www.ootoya.com/", category: "牛丼・定食" },
  { name: "やよい軒", url: "https://www.yayoiken.com/", category: "牛丼・定食" },

  // ファミレス
  { name: "サイゼリヤ", url: "https://www.saizeriya.co.jp/", category: "ファミレス" },
  { name: "ガスト", url: "https://www.skylark.co.jp/gusto/", category: "ファミレス" },
  { name: "ジョナサン", url: "https://www.skylark.co.jp/jonathan/", category: "ファミレス" },
  { name: "バーミヤン", url: "https://www.skylark.co.jp/bamiyan/", category: "ファミレス" },
  { name: "デニーズ", url: "https://www.dennys.jp/", category: "ファミレス" },

  // 中華・ラーメン
  { name: "餃子の王将", url: "https://www.ohsho.co.jp/", category: "中華・ラーメン" },
  { name: "日高屋", url: "https://hiday.co.jp/", category: "中華・ラーメン" },
  { name: "幸楽苑", url: "https://www.kourakuen.co.jp/", category: "中華・ラーメン" },

  // カフェ・ベーカリー
  { name: "コメダ珈琲店", url: "https://www.komeda.co.jp/", category: "カフェ・ベーカリー" },
  { name: "ドトールコーヒー", url: "https://www.doutor.co.jp/", category: "カフェ・ベーカリー" },
  { name: "ミスタードーナツ", url: "https://www.misterdonut.jp/", category: "カフェ・ベーカリー" },

  // 回転寿司
  { name: "くら寿司", url: "https://www.kurasushi.co.jp/", category: "回転寿司" },
  { name: "はま寿司", url: "https://www.hamazushi.com/", category: "回転寿司" },
  { name: "スシロー", url: "https://www.akindo-sushiro.co.jp/", category: "回転寿司" },
  { name: "かっぱ寿司", url: "https://www.kappasushi.jp/", category: "回転寿司" },

  // 麺類
  { name: "丸亀製麺", url: "https://www.marugame-seimen.com/", category: "麺類" },

  // 天丼
  { name: "天丼てんや", url: "https://www.tenya.co.jp/", category: "天丼" },

  // ピザ
  { name: "ドミノ・ピザ", url: "https://www.dominos.jp/", category: "ピザ" },
  { name: "ピザハット", url: "https://pizzahut.jp/", category: "ピザ" },
];

const CATEGORIES = [
  "コンビニ",
  "ファストフード",
  "牛丼・定食",
  "ファミレス",
  "中華・ラーメン",
  "カフェ・ベーカリー",
  "回転寿司",
  "麺類",
  "天丼",
  "ピザ",
];

export default function SourcesPage() {
  const lastUpdated = "2026-04-29";

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/profile"
            className="w-9 h-9 -ml-2 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="戻る"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <h1 className="text-base font-bold text-gray-900">栄養成分データの出典</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Intro */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            たべなびで表示する栄養成分データ (kcal・タンパク質・脂質・炭水化物) は、
            以下の各外食チェーン公式サイトで公開されている情報を基に作成しています。
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            最終データ更新: {lastUpdated}
          </p>
        </section>

        {/* Chains by category */}
        {CATEGORIES.map((category) => {
          const chainsInCategory = CHAINS.filter((c) => c.category === category);
          if (chainsInCategory.length === 0) return null;

          return (
            <section key={category} className="mb-5">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">
                {category}
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {chainsInCategory.map((chain, idx) => (
                  <a
                    key={chain.name}
                    href={chain.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between px-4 py-3.5 active:bg-gray-50 transition-colors ${
                      idx !== chainsInCategory.length - 1 ? "border-b border-gray-50" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-800">{chain.name}</span>
                    <div className="flex items-center gap-1.5 text-xs text-sky-500">
                      <span>公式サイト</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {/* Disclaimer */}
        <section className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mt-6">
          <h3 className="text-sm font-bold text-amber-900 mb-2">利用上の注意</h3>
          <ul className="text-xs text-amber-800 leading-relaxed space-y-2">
            <li>
              ・本アプリの栄養成分データは、各チェーン店公式サイトの公開データを基に作成していますが、
              店舗・時期・季節限定メニュー・地域限定商品などにより実際の値と異なる場合があります。
            </li>
            <li>
              ・最新の正確な栄養成分情報は、必ず各チェーン店の公式サイトまたは店頭でご確認ください。
            </li>
            <li>
              ・本アプリの情報は栄養学の基礎理論に基づきますが、医学的アドバイスを提供するものではありません。
              持病をお持ちの方、医師から食事指導を受けている方は主治医にご相談ください。
            </li>
            <li>
              ・データの誤りや不足を発見された場合は、{" "}
              <Link href="/contact" className="text-sky-600 underline">
                お問い合わせ
              </Link>{" "}
              よりご報告ください。順次修正対応いたします。
            </li>
          </ul>
        </section>

        {/* Back to profile */}
        <Link
          href="/profile"
          className="block text-center text-sm text-gray-500 mt-8 underline"
        >
          マイページに戻る
        </Link>
      </div>
    </main>
  );
}
