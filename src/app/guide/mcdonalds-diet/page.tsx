import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方【2026年最新】 | たべなび",
  description:
    "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。マック太らないメニューの選び方がわかります。",
  keywords: [
    "マクドナルド ダイエット",
    "マック カロリー 低い順",
    "マック 太らない",
    "マクドナルド カロリー",
    "マック ダイエット おすすめ",
  ],
  openGraph: {
    title: "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方",
    description:
      "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://tabenavi.jp/guide/mcdonalds-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方",
  description:
    "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。",
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
  mainEntityOfPage: "https://tabenavi.jp/guide/mcdonalds-diet",
};

const calorieRanking = [
  { name: "ハンバーガー", cal: 259, p: 13.2, f: 9.5, c: 30.5, price: 170 },
  { name: "チーズバーガー", cal: 310, p: 15.9, f: 13.3, c: 31.2, price: 200 },
  { name: "エッグマックマフィン", cal: 310, p: 18.9, f: 13.3, c: 27.0, price: 250 },
  { name: "フィレオフィッシュ", cal: 338, p: 14.6, f: 14.1, c: 37.6, price: 370 },
  { name: "ベーコンレタスバーガー", cal: 362, p: 17.4, f: 18.2, c: 31.8, price: 400 },
  { name: "マックチキン", cal: 383, p: 14.8, f: 17.2, c: 41.1, price: 180 },
  { name: "エグチ（エッグチーズバーガー）", cal: 390, p: 21.4, f: 18.9, c: 32.4, price: 240 },
  { name: "チキンフィレオ", cal: 460, p: 19.3, f: 21.8, c: 46.2, price: 400 },
  { name: "てりやきマックバーガー", cal: 478, p: 15.2, f: 27.2, c: 41.4, price: 370 },
  { name: "ビッグマック", cal: 530, p: 26.0, f: 28.3, c: 42.2, price: 450 },
  { name: "ダブルチーズバーガー", cal: 459, p: 26.4, f: 25.3, c: 31.8, price: 400 },
  { name: "倍ビッグマック", cal: 740, p: 42.1, f: 43.9, c: 42.7, price: 600 },
];

const recommendedMenus = [
  {
    name: "ハンバーガー",
    cal: 259,
    p: 13.2,
    f: 9.5,
    c: 30.5,
    price: 170,
    reason:
      "マクドナルドで最もカロリーが低いバーガー。脂質もわずか9.5gと控えめで、ダイエット中の外食に最適。価格も170円とお財布にも優しい。",
  },
  {
    name: "エッグマックマフィン",
    cal: 310,
    p: 18.9,
    f: 13.3,
    c: 27.0,
    price: 250,
    reason:
      "朝マック限定メニュー。310kcalでタンパク質18.9gと高タンパク。PFCバランスが良く、ダイエット中の朝食として優秀。",
  },
  {
    name: "チーズバーガー",
    cal: 310,
    p: 15.9,
    f: 13.3,
    c: 31.2,
    price: 200,
    reason:
      "ハンバーガーにチーズを追加しても310kcal。チーズの分だけタンパク質も増え、満足感もアップ。",
  },
  {
    name: "エグチ（エッグチーズバーガー）",
    cal: 390,
    p: 21.4,
    f: 18.9,
    c: 32.4,
    price: 240,
    reason:
      "卵とチーズで高タンパク21.4g。朝マックでなくても注文でき、390kcalでタンパク質を効率良く摂取できる。",
  },
  {
    name: "フィレオフィッシュ",
    cal: 338,
    p: 14.6,
    f: 14.1,
    c: 37.6,
    price: 370,
    reason:
      "魚を使ったバーガーで338kcal。ビーフやチキンとは異なる栄養バランスで、魚の良質な脂質が含まれる。",
  },
];

const avoidMenus = [
  { name: "倍ビッグマック", cal: 740, p: 42.1, f: 43.9, c: 42.7 },
  { name: "マックフライポテト（L）", cal: 515, p: 6.7, f: 25.4, c: 64.3 },
  { name: "ビッグマック", cal: 530, p: 26.0, f: 28.3, c: 42.2 },
  { name: "てりやきマックバーガー", cal: 478, p: 15.2, f: 27.2, c: 41.4 },
  { name: "マックフルーリー オレオ", cal: 236, p: 5.2, f: 7.8, c: 36.3 },
];

const combos = [
  {
    title: "ダイエット向けセット",
    items: "ハンバーガー + サイドサラダ + 爽健美茶",
    totalCal: 269,
    totalP: 13.8,
    description:
      "最もカロリーを抑えたい日に。サラダのドレッシングは低カロリーを選択。",
  },
  {
    title: "高タンパクセット",
    items: "ダブルチーズバーガー + サイドサラダ + ブラックコーヒー",
    totalCal: 469,
    totalP: 27.9,
    description:
      "筋トレ後のタンパク質補給に。ダブチのP26.4gでしっかりタンパク質を摂取。",
  },
  {
    title: "朝マックおすすめ",
    items: "エッグマックマフィン + ブラックコーヒー",
    totalCal: 315,
    totalP: 18.9,
    description:
      "朝マックで最も栄養バランスが良い組み合わせ。310kcalで高タンパク。",
  },
];

export default function McDonaldsDietPage() {
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
          マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方
        </h1>
        <p className="text-sm text-gray-400 mb-6">最終更新: 2026年3月</p>

        <p className="text-gray-600 leading-relaxed mb-10">
          「ダイエット中だけどマクドナルドが食べたい」——そんな時でも、メニューの選び方次第で十分にカロリーコントロールが可能です。
          この記事では、マクドナルドの全メニューをカロリー低い順にランキングし、ダイエット中のおすすめメニューやPFCバランスを考えた食べ方を詳しく解説します。
        </p>

        {/* Section 1: カロリーランキング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            マクドナルドのカロリー低い順ランキング
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            マクドナルドの主要バーガーメニューをカロリーの低い順に並べました。ダイエット中は上位のメニューから選ぶのがポイントです。
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

        {/* Section 2: おすすめメニュー5選 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            ダイエット中のおすすめメニュー5選
          </h2>
          <div className="space-y-4">
            {recommendedMenus.map((item, i) => (
              <div
                key={item.name}
                className="bg-green-50/50 rounded-xl border border-green-100 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-medium border border-orange-100">
                        {item.cal} kcal
                      </span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-blue-600 font-medium border border-blue-100">
                        P {item.p}g
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

        {/* Section 3: 避けるべきメニュー */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            避けるべき高カロリーメニュー
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            ダイエット中は以下のメニューに注意。特にセットメニューのポテトLはバーガーと合わせると1,000kcalを超えることも。
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
        </section>

        {/* Section 4: 5つのコツ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            ダイエット中のマクドナルドの食べ方 5つのコツ
          </h2>
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "セットではなく単品で注文",
                body: "バリューセットにするとポテト（M: 410kcal）とドリンクが追加され、簡単に800kcalを超えます。バーガー単品で注文するのがダイエットの基本です。",
              },
              {
                num: 2,
                title: "ポテトをサイドサラダに変更",
                body: "どうしてもセットで注文したい場合は、ポテトをサイドサラダ（10kcal）に変更しましょう。約400kcalのカロリーカットになります。",
              },
              {
                num: 3,
                title: "ドリンクはお茶・ブラックコーヒー",
                body: "コカ・コーラMサイズは約140kcal。爽健美茶やブラックコーヒー（約6kcal）に変えるだけで大幅にカロリーダウンできます。",
              },
              {
                num: 4,
                title: "バーガーはチキン系がおすすめ",
                body: "チキン系バーガーはビーフ系に比べて脂質が低い傾向があります。ただし、チキンフィレオは揚げ物なので460kcalと高め。マックチキン（383kcal）の方がおすすめです。",
              },
              {
                num: 5,
                title: "朝マックは意外と低カロリー",
                body: "エッグマックマフィン（310kcal）やソーセージマフィン（359kcal）など、朝マックメニューは通常メニューより低カロリーなものが多い。朝食をマクドナルドで済ませるのも一つの手です。",
              },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                  {tip.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: PFCバランス */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            PFCバランスで選ぶマクドナルドのメニュー
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                タンパク質重視なら
              </h3>
              <p className="text-lg font-bold text-gray-900 mb-1">
                ダブルチーズバーガー
              </p>
              <div className="flex gap-2 mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  P 26.4g
                </span>
                <span className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                  459 kcal
                </span>
              </div>
              <p className="text-sm text-gray-600">
                パティ2枚でタンパク質26.4g。筋トレ後の食事として優秀。1食あたりのタンパク質摂取量としても十分です。
              </p>
            </div>
            <div className="bg-green-50/50 rounded-xl border border-green-100 p-5">
              <h3 className="font-bold text-green-800 mb-2">
                脂質控えめなら
              </h3>
              <p className="text-lg font-bold text-gray-900 mb-1">ハンバーガー</p>
              <div className="flex gap-2 mb-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  F 9.5g
                </span>
                <span className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                  259 kcal
                </span>
              </div>
              <p className="text-sm text-gray-600">
                脂質わずか9.5gはマクドナルドのバーガーで最少。脂質制限中の方に最適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: おすすめ組み合わせ */}
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
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-bold border border-orange-100">
                    合計 {combo.totalCal} kcal
                  </span>
                  <span className="text-xs bg-white px-2 py-1 rounded-full text-blue-600 font-bold border border-blue-100">
                    P {combo.totalP}g
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
              マクドナルドはダイエット中でも工夫次第で十分に楽しめます。ポイントは以下の3つです。
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">1.</span>
                <span>ハンバーガー（259kcal）やエッグマックマフィン（310kcal）など低カロリーメニューを選ぶ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">2.</span>
                <span>セットではなく単品注文、ドリンクはお茶かブラックコーヒーに</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">3.</span>
                <span>PFCバランスを意識して、目的に合ったメニューを選択する</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              ※価格・栄養成分は店舗により異なる場合があります。最新の情報はマクドナルド公式サイトでご確認ください。
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
              href="/guide/mcdonalds"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              マクドナルド全メニュー栄養一覧
            </Link>
            <Link
              href="/guide/eating-out-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              外食ダイエット完全ガイド
            </Link>
            <Link
              href="/guide/saizeriya-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              サイゼリヤダイエット
            </Link>
            <Link
              href="/guide/conveni-protein"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              コンビニ高タンパク商品
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-2 text-sm">
            マクドナルドのカロリー・PFCをサクッと検索
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
