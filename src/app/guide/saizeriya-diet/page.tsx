import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド【2026年最新】 | たべなび",
  description:
    "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。サイゼで太らない食べ方がわかります。",
  keywords: [
    "サイゼリヤ ダイエット",
    "サイゼリヤ 筋トレ",
    "サイゼ 低カロリー",
    "サイゼリヤ カロリー",
    "サイゼリヤ タンパク質",
  ],
  openGraph: {
    title: "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド",
    description:
      "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。",
    url: "https://tabenavi.jp/guide/saizeriya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド",
  description:
    "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/saizeriya-diet",
};

const calorieRanking = [
  { name: "わかめサラダ", cal: 68, p: 1.2, f: 4.5, c: 5.8, price: 300 },
  { name: "小エビのサラダ", cal: 112, p: 8.5, f: 5.2, c: 8.4, price: 350 },
  { name: "柔らか青豆の温サラダ", cal: 138, p: 5.8, f: 9.2, c: 8.5, price: 200 },
  { name: "ほうれん草のソテー", cal: 148, p: 3.5, f: 12.8, c: 4.2, price: 200 },
  { name: "辛味チキン（3本）", cal: 218, p: 16.5, f: 12.8, c: 9.2, price: 300 },
  { name: "若鶏のグリル（ディアボラ風）", cal: 480, p: 35.2, f: 30.5, c: 12.8, price: 500 },
  { name: "ミックスグリル", cal: 542, p: 32.0, f: 38.5, c: 14.2, price: 500 },
  { name: "ハンバーグステーキ", cal: 458, p: 22.5, f: 32.4, c: 18.2, price: 400 },
  { name: "リブステーキ", cal: 502, p: 28.8, f: 35.2, c: 12.5, price: 1000 },
  { name: "ペペロンチーノ", cal: 528, p: 14.2, f: 12.5, c: 88.4, price: 350 },
  { name: "ミラノ風ドリア", cal: 548, p: 15.8, f: 22.4, c: 68.5, price: 300 },
  { name: "パルマ風スパゲッティ", cal: 612, p: 18.5, f: 18.2, c: 86.5, price: 400 },
  { name: "マルゲリータピザ", cal: 568, p: 22.4, f: 18.5, c: 72.8, price: 400 },
  { name: "カルボナーラ", cal: 768, p: 24.2, f: 32.5, c: 86.2, price: 500 },
];

const highProteinMenus = [
  {
    name: "若鶏のグリル（ディアボラ風）",
    cal: 480,
    p: 35.2,
    f: 30.5,
    c: 12.8,
    price: 500,
    reason:
      "サイゼリヤのタンパク質No.1メニュー。鶏もも肉のグリルでP35.2g。500円で高タンパクが摂れるコスパ最強メニュー。筋トレ民に大人気。",
  },
  {
    name: "ミックスグリル",
    cal: 542,
    p: 32.0,
    f: 38.5,
    c: 14.2,
    price: 500,
    reason:
      "ハンバーグ・チキン・ソーセージの3種盛り。P32gで500円。いろいろなお肉を楽しみながらタンパク質を摂りたい方に。",
  },
  {
    name: "リブステーキ",
    cal: 502,
    p: 28.8,
    f: 35.2,
    c: 12.5,
    price: 1000,
    reason:
      "牛肉でP28.8g。価格は高めだが、ステーキとしてのクオリティが高く、特別な日の高タンパク食として。",
  },
  {
    name: "辛味チキン（3本）",
    cal: 218,
    p: 16.5,
    f: 12.8,
    c: 9.2,
    price: 300,
    reason:
      "おつまみ感覚でP16.5g。218kcalと低カロリーで、サイドメニューとしてタンパク質を追加するのに最適。",
  },
  {
    name: "ハンバーグステーキ",
    cal: 458,
    p: 22.5,
    f: 32.4,
    c: 18.2,
    price: 400,
    reason:
      "400円でP22.5g。脂質はやや高めだが、タンパク質コスパは優秀。ライスなしで注文すれば糖質も抑えられる。",
  },
];

const under500yen = [
  {
    title: "辛味チキン + 柔らか青豆の温サラダ",
    price: 500,
    totalCal: 356,
    totalP: 22.3,
    description:
      "辛味チキンでタンパク質を摂りつつ、温サラダで野菜も補給。500円ぴったりで栄養バランスも良好。",
  },
  {
    title: "若鶏のグリル（ディアボラ風）単品",
    price: 500,
    totalCal: 480,
    totalP: 35.2,
    description:
      "500円でP35.2gはサイゼリヤ最強のタンパク質コスパ。これ1品で十分な高タンパク食事に。",
  },
  {
    title: "小エビのサラダ + ほうれん草のソテー + 辛味チキン1本分",
    price: 490,
    totalCal: 333,
    totalP: 17.5,
    description:
      "低カロリーかつ野菜中心。ダイエット重視の方におすすめの組み合わせ。",
  },
];

const avoidMenus = [
  { name: "カルボナーラ", cal: 768, p: 24.2, f: 32.5, c: 86.2 },
  { name: "パルマ風スパゲッティ", cal: 612, p: 18.5, f: 18.2, c: 86.5 },
  { name: "マルゲリータピザ", cal: 568, p: 22.4, f: 18.5, c: 72.8 },
  { name: "ミラノ風ドリア", cal: 548, p: 15.8, f: 22.4, c: 68.5 },
  { name: "ペペロンチーノ", cal: 528, p: 14.2, f: 12.5, c: 88.4 },
];

const combos = [
  {
    title: "ダイエット向けセット",
    items: "小エビのサラダ + 辛味チキン（3本）",
    totalCal: 330,
    totalP: 25.0,
    totalPrice: 650,
    description:
      "330kcalでP25g。サラダで食物繊維も摂れる、ダイエット中に最適な組み合わせ。",
  },
  {
    title: "筋トレ向け高タンパクセット",
    items: "若鶏のグリル（ディアボラ風） + 柔らか青豆の温サラダ",
    totalCal: 618,
    totalP: 41.0,
    totalPrice: 700,
    description:
      "P41gで700円。筋トレ後のタンパク質補給に。鶏肉と豆で良質なタンパク質を効率よく摂取。",
  },
  {
    title: "バランス重視セット",
    items: "ハンバーグステーキ + わかめサラダ + ライスS",
    totalCal: 702,
    totalP: 27.2,
    totalPrice: 849,
    description:
      "タンパク質・炭水化物・野菜をバランスよく。通常の食事として満足感のある組み合わせ。",
  },
];

export default function SaizeriyaDietPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">ガイド一覧</span>
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド
        </h1>
        <p className="text-sm text-gray-400 mb-6">最終更新: 2026年3月</p>

        <p className="text-gray-600 leading-relaxed mb-10">
          サイゼリヤはコスパ最強の外食チェーンとして知られていますが、実はダイエットや筋トレ中の食事としても非常に優秀です。
          低カロリーなサラダから高タンパクなグリルメニューまで、栄養バランスの良いメニューが揃っています。
          この記事では、サイゼリヤのメニューをカロリー順にランキングし、ダイエット・筋トレ中のおすすめの食べ方を詳しく解説します。
        </p>

        {/* Section 1: カロリーランキング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            サイゼリヤ カロリーランキング（低い順）
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            サイゼリヤの主要メニューをカロリーの低い順に並べました。サラダやサイドメニューは100〜200kcal台と低カロリーです。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-center px-3 py-3 font-medium w-10">順位</th>
                  <th className="text-left px-3 py-3 font-medium">メニュー</th>
                  <th className="text-right px-3 py-3 font-medium">カロリー</th>
                  <th className="text-right px-3 py-3 font-medium hidden sm:table-cell">P</th>
                  <th className="text-right px-3 py-3 font-medium hidden sm:table-cell">F</th>
                  <th className="text-right px-3 py-3 font-medium hidden sm:table-cell">C</th>
                  <th className="text-right px-3 py-3 font-medium">価格</th>
                </tr>
              </thead>
              <tbody>
                {[...calorieRanking]
                  .sort((a, b) => a.cal - b.cal)
                  .map((item, i) => (
                    <tr
                      key={item.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="text-center px-3 py-2.5 text-gray-500 font-medium">
                        {i + 1}
                      </td>
                      <td className="px-3 py-2.5 text-gray-900 font-medium">
                        {item.name}
                      </td>
                      <td className="text-right px-3 py-2.5 text-orange-600 font-bold">
                        {item.cal} kcal
                      </td>
                      <td className="text-right px-3 py-2.5 text-gray-600 hidden sm:table-cell">
                        {item.p}g
                      </td>
                      <td className="text-right px-3 py-2.5 text-gray-600 hidden sm:table-cell">
                        {item.f}g
                      </td>
                      <td className="text-right px-3 py-2.5 text-gray-600 hidden sm:table-cell">
                        {item.c}g
                      </td>
                      <td className="text-right px-3 py-2.5 text-gray-700">
                        ¥{item.price}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            ※価格・栄養成分は店舗により異なる場合があります。
          </p>
        </section>

        {/* Section 2: 筋トレ民におすすめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            筋トレ民におすすめの高タンパクメニュー
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            サイゼリヤはグリル系メニューが高タンパクでコスパ抜群。特に若鶏のグリル（P35.2g/¥500）はサイゼの筋トレ飯として有名です。
          </p>
          <div className="space-y-4">
            {highProteinMenus.map((item, i) => (
              <div
                key={item.name}
                className="bg-blue-50/50 rounded-xl border border-blue-100 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-blue-100 px-2 py-1 rounded-full text-blue-700 font-medium">
                        P {item.p}g
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-medium border border-orange-100">
                        {item.cal} kcal
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-medium border border-gray-200">
                        F {item.f}g
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-medium border border-gray-200">
                        C {item.c}g
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-medium border border-gray-200">
                        ¥{item.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 500円以下 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            500円以下で高タンパク！サイゼの神注文法
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            サイゼリヤの最大の魅力はコスパ。500円以下でも高タンパクな食事が可能です。
          </p>
          <div className="space-y-4">
            {under500yen.map((combo) => (
              <div
                key={combo.title}
                className="bg-green-50/50 rounded-xl border border-green-100 p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2">{combo.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">
                    ¥{combo.price}
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-blue-600 font-bold border border-blue-100">
                    P {combo.totalP}g
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-bold border border-orange-100">
                    {combo.totalCal} kcal
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {combo.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            避けるべき高カロリーメニュー
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            パスタ・ドリア・ピザは炭水化物が多くカロリーが高め。ダイエット中は避けるか、シェアして量を減らしましょう。
          </p>
          <div className="space-y-3">
            {avoidMenus.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between bg-red-50/50 rounded-xl border border-red-100 px-5 py-3"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    P{item.p}g / F{item.f}g / C{item.c}g
                  </p>
                </div>
                <span className="text-red-600 font-bold text-sm">
                  {item.cal} kcal
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            特にカルボナーラ（768kcal）は脂質・炭水化物ともに高く、ダイエット中は要注意です。ミラノ風ドリアは300円と安いですが、548kcalあるので注意が必要。
          </p>
        </section>

        {/* Section 5: おすすめ組み合わせ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            おすすめの組み合わせ3パターン
          </h2>
          <div className="space-y-4">
            {combos.map((combo, i) => (
              <div
                key={combo.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-medium">
                    Pattern {i + 1}
                  </span>
                  <h3 className="font-bold text-gray-900">{combo.title}</h3>
                </div>
                <p className="text-sm text-gray-800 mb-2 font-medium">
                  {combo.items}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-bold border border-orange-100">
                    合計 {combo.totalCal} kcal
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-blue-600 font-bold border border-blue-100">
                    P {combo.totalP}g
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-bold border border-gray-200">
                    ¥{combo.totalPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{combo.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            まとめ
          </h2>
          <div className="bg-orange-50/50 rounded-xl border border-orange-100 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              サイゼリヤはダイエット・筋トレ中の外食先として最適なチェーンの一つです。
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">1.</span>
                <span>若鶏のグリル（P35.2g/¥500）がタンパク質コスパ最強</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">2.</span>
                <span>パスタ・ドリアを避け、グリル系 + サラダを中心に注文</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">3.</span>
                <span>500円以下でもP20g以上の高タンパク食事が可能</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              ※価格・栄養成分は店舗により異なる場合があります。最新の情報はサイゼリヤ公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            関連する記事
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guide/saizeriya"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              サイゼリヤ全メニュー栄養一覧
            </Link>
            <Link
              href="/guide/mcdonalds-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              マクドナルドダイエット
            </Link>
            <Link
              href="/guide/conveni-protein"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              コンビニ高タンパク商品
            </Link>
            <Link
              href="/guide/eating-out-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              外食ダイエット完全ガイド
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-2 text-sm">
            サイゼリヤのカロリー・PFCをサクッと検索
          </p>
          <p className="text-gray-500 mb-4 text-xs">
            たべなびなら外食メニューの栄養成分をすぐに確認できます
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            たべなびで栄養管理を始める（無料）
          </Link>
        </section>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
