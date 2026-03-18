import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】 | たべなび",
  description:
    "セブンイレブン・ローソン・ファミリーマートの高タンパク商品をランキング形式で紹介。筋トレ後やダイエット中のタンパク質補給におすすめの商品を徹底比較。",
  keywords: [
    "コンビニ 高タンパク",
    "コンビニ タンパク質",
    "コンビニ 筋トレ",
    "セブンイレブン タンパク質",
    "ローソン 高タンパク",
    "ファミマ プロテイン",
  ],
  openGraph: {
    title:
      "コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】",
    description:
      "3大コンビニの高タンパク商品を徹底比較。筋トレ・ダイエット中のタンパク質補給に。",
    url: "https://tabenavi.jp/guide/conveni-protein",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】",
  description:
    "セブンイレブン・ローソン・ファミリーマートの高タンパク商品をランキング形式で紹介。",
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
  mainEntityOfPage: "https://tabenavi.jp/guide/conveni-protein",
};

const top10 = [
  { rank: 1, name: "筋肉食堂DELI 鶏の照り焼き", store: "ローソン", p: 32.5, cal: 285, price: 598 },
  { rank: 2, name: "プロテインボックス", store: "ファミリーマート", p: 28.5, cal: 320, price: 550 },
  { rank: 3, name: "サラダチキン（プレーン）", store: "セブンイレブン", p: 24.3, cal: 113, price: 238 },
  { rank: 4, name: "直火焼きサラダチキン", store: "ファミリーマート", p: 24.2, cal: 118, price: 258 },
  { rank: 5, name: "サラダチキン スパイシー", store: "ローソン", p: 21.8, cal: 125, price: 238 },
  { rank: 6, name: "7プレミアム サラダチキンバー", store: "セブンイレブン", p: 21.6, cal: 108, price: 198 },
  { rank: 7, name: "グリルチキン（黒胡椒）", store: "ローソン", p: 20.4, cal: 130, price: 248 },
  { rank: 8, name: "たんぱく質が摂れるチキン&スパイシーチリ", store: "セブンイレブン", p: 20.2, cal: 242, price: 430 },
  { rank: 9, name: "砂肝の黒胡椒焼き", store: "ファミリーマート", p: 18.6, cal: 98, price: 298 },
  { rank: 10, name: "味付き半熟ゆでたまご 2個", store: "セブンイレブン", p: 12.8, cal: 130, price: 162 },
];

const sevenItems = [
  { name: "サラダチキン（プレーン）", p: 24.3, cal: 113, f: 1.2, c: 0.5, price: 238 },
  { name: "7プレミアム サラダチキンバー", p: 21.6, cal: 108, f: 1.5, c: 1.8, price: 198 },
  { name: "たんぱく質が摂れるチキン&スパイシーチリ", p: 20.2, cal: 242, f: 8.5, c: 22.1, price: 430 },
  { name: "味付き半熟ゆでたまご 2個", p: 12.8, cal: 130, f: 8.8, c: 0.8, price: 162 },
  { name: "たんぱく質が摂れる鶏むね肉サラダ", p: 19.8, cal: 152, f: 5.2, c: 8.4, price: 430 },
  { name: "プロテインバー チョコレート", p: 15.2, cal: 183, f: 8.5, c: 12.8, price: 162 },
];

const lawsonItems = [
  { name: "筋肉食堂DELI 鶏の照り焼き", p: 32.5, cal: 285, f: 8.2, c: 15.3, price: 598 },
  { name: "サラダチキン スパイシー", p: 21.8, cal: 125, f: 2.1, c: 1.5, price: 238 },
  { name: "グリルチキン（黒胡椒）", p: 20.4, cal: 130, f: 3.5, c: 1.2, price: 248 },
  { name: "ブランパン 2個入", p: 10.6, cal: 130, f: 4.4, c: 12.2, price: 150 },
  { name: "たまごサラダ（タンパク質10g）", p: 10.2, cal: 148, f: 11.5, c: 2.8, price: 230 },
];

const familyMartItems = [
  { name: "直火焼きサラダチキン", p: 24.2, cal: 118, f: 1.8, c: 1.2, price: 258 },
  { name: "プロテインボックス", p: 28.5, cal: 320, f: 12.4, c: 18.5, price: 550 },
  { name: "砂肝の黒胡椒焼き", p: 18.6, cal: 98, f: 2.8, c: 0.5, price: 298 },
  { name: "グリルチキン（プレーン）", p: 19.5, cal: 112, f: 2.2, c: 0.8, price: 248 },
  { name: "RIZAP サラダチキンバー", p: 16.8, cal: 95, f: 1.5, c: 1.8, price: 178 },
];

const combos = [
  {
    title: "筋トレ後（タンパク質30g以上）",
    items: "サラダチキン + ゆでたまご2個 + おにぎり1個",
    totalP: 42.1,
    totalCal: 443,
    price: 600,
    description:
      "トレーニング後に必要なタンパク質30g以上を確保。おにぎりで炭水化物も補給し、筋合成に必要な栄養素をカバー。",
  },
  {
    title: "ダイエット中（500kcal以下で高タンパク）",
    items: "サラダチキンバー + ブランパン + サラダ",
    totalP: 34.2,
    totalCal: 298,
    price: 550,
    description:
      "300kcal以下でタンパク質34g以上。低糖質ブランパンで満腹感も得られ、ダイエット中のランチに最適。",
  },
  {
    title: "朝食（手軽に栄養バランス）",
    items: "ゆでたまご2個 + バナナ + プロテインバー",
    totalP: 30.0,
    totalCal: 399,
    price: 440,
    description:
      "忙しい朝でもサッと食べられる組み合わせ。バナナの炭水化物でエネルギー補給しつつ、タンパク質もしっかり摂取。",
  },
];

function StoreSection({
  storeName,
  storeColor,
  items,
}: {
  storeName: string;
  storeColor: string;
  items: typeof sevenItems;
}) {
  const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    green: { bg: "bg-green-50/50", border: "border-green-100", text: "text-green-800", badge: "bg-green-100 text-green-700" },
    blue: { bg: "bg-blue-50/50", border: "border-blue-100", text: "text-blue-800", badge: "bg-blue-100 text-blue-700" },
    cyan: { bg: "bg-cyan-50/50", border: "border-cyan-100", text: "text-cyan-800", badge: "bg-cyan-100 text-cyan-700" },
  };
  const c = colorClasses[storeColor] ?? colorClasses.green;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.name}
          className={`${c.bg} rounded-xl ${c.border} border p-4`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
            <span className="text-xs text-gray-500">¥{item.price}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.badge}`}>
              P {item.p}g
            </span>
            <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-medium border border-orange-100">
              {item.cal} kcal
            </span>
            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 border border-gray-200">
              F {item.f}g
            </span>
            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 border border-gray-200">
              C {item.c}g
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ConveniProteinPage() {
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
          コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】
        </h1>
        <p className="text-sm text-gray-400 mb-6">最終更新: 2026年3月</p>

        <p className="text-gray-600 leading-relaxed mb-10">
          筋トレやダイエット中のタンパク質補給に欠かせないコンビニ。
          セブンイレブン、ローソン、ファミリーマートの3大コンビニで買える高タンパク商品を徹底比較し、ランキング形式で紹介します。
          目的別のおすすめ組み合わせも解説するので、コンビニでの食事選びの参考にしてください。
        </p>

        {/* Section 1: 総合ランキング */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            コンビニ高タンパク商品 総合ランキングTOP10
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            3大コンビニの商品をタンパク質含有量順にランキング。手軽に買えてタンパク質がしっかり摂れる商品を厳選しました。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-center px-3 py-3 font-medium w-10">順位</th>
                  <th className="text-left px-3 py-3 font-medium">商品名</th>
                  <th className="text-left px-3 py-3 font-medium hidden sm:table-cell">コンビニ</th>
                  <th className="text-right px-3 py-3 font-medium">タンパク質</th>
                  <th className="text-right px-3 py-3 font-medium">カロリー</th>
                  <th className="text-right px-3 py-3 font-medium hidden sm:table-cell">価格</th>
                </tr>
              </thead>
              <tbody>
                {top10.map((item, i) => (
                  <tr
                    key={item.name}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="text-center px-3 py-2.5">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          i < 3
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-500"
                        }`}
                      >
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-gray-900 font-medium">
                      {item.name}
                      <span className="block sm:hidden text-xs text-gray-400">
                        {item.store}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-gray-500 text-xs hidden sm:table-cell">
                      {item.store}
                    </td>
                    <td className="text-right px-3 py-2.5 text-blue-600 font-bold">
                      {item.p}g
                    </td>
                    <td className="text-right px-3 py-2.5 text-gray-600">
                      {item.cal} kcal
                    </td>
                    <td className="text-right px-3 py-2.5 text-gray-600 hidden sm:table-cell">
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

        {/* Section 2: セブンイレブン */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            セブンイレブンの高タンパク商品
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            セブンイレブンは「たんぱく質が摂れる」シリーズが充実。サラダチキンのバリエーションも豊富で、飽きずに高タンパク生活を続けられます。
          </p>
          <StoreSection storeName="セブンイレブン" storeColor="green" items={sevenItems} />
        </section>

        {/* Section 3: ローソン */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            ローソンの高タンパク商品
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            ローソンは筋肉食堂DELIとのコラボ商品が目玉。タンパク質32.5gの鶏の照り焼きは、コンビニ高タンパク商品の中でもトップクラスです。低糖質ブランパンシリーズもダイエッターに人気。
          </p>
          <StoreSection storeName="ローソン" storeColor="blue" items={lawsonItems} />
        </section>

        {/* Section 4: ファミリーマート */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            ファミリーマートの高タンパク商品
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            ファミリーマートのプロテインボックスは、1パックでタンパク質28.5gと驚異的。RIZAPコラボ商品も豊富で、手軽にボディメイクをサポートしてくれます。
          </p>
          <StoreSection storeName="ファミリーマート" storeColor="cyan" items={familyMartItems} />
        </section>

        {/* Section 5: 目的別おすすめ組み合わせ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            目的別おすすめ組み合わせ
          </h2>

          <div className="space-y-6">
            {combos.map((combo) => (
              <div key={combo.title}>
                <h3 className="font-bold text-gray-900 mb-3">{combo.title}</h3>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-800 mb-2 font-medium">
                    {combo.items}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
                      P {combo.totalP}g
                    </span>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-orange-600 font-bold border border-orange-100">
                      {combo.totalCal} kcal
                    </span>
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 border border-gray-200">
                      約¥{combo.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {combo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 選ぶコツ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            コンビニで高タンパク食品を選ぶコツ
          </h2>
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "栄養成分表示を必ずチェック",
                body: "パッケージ裏の栄養成分表示でタンパク質量を確認。「高タンパク」と書いてあっても、実際には10g以下の商品もあるので注意が必要です。",
              },
              {
                num: 2,
                title: "タンパク質あたりのカロリーで比較",
                body: "同じタンパク質量でもカロリーが大きく異なる場合があります。サラダチキン（P24.3g/113kcal）はカロリー効率が非常に良い食品です。",
              },
              {
                num: 3,
                title: "「たんぱく質が摂れる」シリーズを活用",
                body: "セブンイレブンの「たんぱく質が摂れる」シリーズやローソンの筋肉食堂DELIなど、高タンパクを謳った商品は探しやすく、栄養設計もされています。",
              },
              {
                num: 4,
                title: "組み合わせでタンパク質30gを目指す",
                body: "1食あたり20〜30gのタンパク質摂取が理想。単品で足りない場合は、ゆでたまごやプロテインバーを追加してタンパク質を補いましょう。",
              },
              {
                num: 5,
                title: "定番商品をローテーションする",
                body: "サラダチキン、ゆでたまご、プロテインバーを軸に、週替わりで別の商品を組み合わせると飽きずに続けられます。",
              },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
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

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            まとめ
          </h2>
          <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              コンビニは高タンパク商品の宝庫です。押さえるべきポイントは以下の通り。
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">1.</span>
                <span>サラダチキンは全コンビニで高タンパク・低カロリーの王道商品</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">2.</span>
                <span>ローソン筋肉食堂DELI（P32.5g）やファミマプロテインボックス（P28.5g）が総合トップ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">3.</span>
                <span>目的に合わせて組み合わせることで、1食30g以上のタンパク質摂取が可能</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。
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
              href="/guide/conveni"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              コンビニ全商品栄養一覧
            </Link>
            <Link
              href="/guide/mcdonalds-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              マクドナルドダイエット
            </Link>
            <Link
              href="/guide/saizeriya-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              サイゼリヤダイエット
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
            コンビニ商品の栄養成分をサクッと検索
          </p>
          <p className="text-gray-500 mb-4 text-xs">
            たべなびならコンビニ商品の栄養成分をすぐに確認できます
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
