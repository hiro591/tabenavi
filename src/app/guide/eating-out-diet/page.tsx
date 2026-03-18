import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "【2026年最新】外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方 | たべなび",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。PFCバランスの基本も解説。",
  keywords:
    "外食 ダイエット,外食 痩せる,チェーン店 ダイエット,外食 カロリー,ダイエット 外食 おすすめ",
  openGraph: {
    title:
      "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
    description:
      "外食しながら痩せたい人のための完全ガイド。チェーン店別おすすめメニューと太らない食べ方を紹介。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。",
  datePublished: "2026-03-01",
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
  mainEntityOfPage: "https://tabenavi.jp/guide/eating-out-diet",
};

const tocItems = [
  { id: "is-it-possible", label: "外食でダイエットは可能？" },
  { id: "chain-menus", label: "チェーン店別 ダイエットおすすめメニュー" },
  { id: "five-rules", label: "外食で太らないための5つのルール" },
  { id: "pfc-basics", label: "PFCバランスの基本" },
  { id: "tabenavi-cta", label: "たべなびで外食の栄養管理を簡単に" },
  { id: "summary", label: "まとめ" },
];

function NutritionTable({
  items,
}: {
  items: { name: string; calories: number; protein: number; fat: number; carbs: number; price?: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-gray-600">
            <th className="text-left px-4 py-3 font-medium">メニュー</th>
            <th className="text-right px-4 py-3 font-medium">カロリー</th>
            <th className="text-right px-4 py-3 font-medium">P</th>
            <th className="text-right px-4 py-3 font-medium">F</th>
            <th className="text-right px-4 py-3 font-medium">C</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="px-4 py-2.5 text-gray-900 font-medium">{item.name}</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.calories} kcal</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.protein.toFixed(1)}g</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.fat.toFixed(1)}g</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.carbs.toFixed(1)}g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EatingOutDietPage() {
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
        {/* H1 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方
        </h1>
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

        {/* Introduction */}
        <p className="text-gray-600 leading-relaxed mb-8">
          「ダイエット中だけど、外食をやめられない...」そんな悩みを持つ方は多いのではないでしょうか。実は、外食＝太るというのは大きな誤解です。メニューの選び方と食べ方のコツさえ押さえれば、マクドナルドでも吉野家でもダイエットは十分に可能です。この記事では、主要チェーン店のダイエット向きメニューを具体的なカロリー・PFCデータとともに紹介し、外食でも確実に痩せるための実践的なルールを解説します。忙しくて自炊ができない方、付き合いで外食が多い方にこそ読んでほしい完全ガイドです。
        </p>

        {/* Table of Contents */}
        <nav className="bg-orange-50/50 rounded-xl border border-orange-100 p-6 mb-10">
          <h2 className="text-sm font-bold text-gray-900 mb-3">この記事の目次</h2>
          <ol className="space-y-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-orange-600 hover:text-orange-800 transition-colors"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Section 1: 外食でダイエットは可能？ */}
        <section id="is-it-possible" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            外食でダイエットは可能？
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            結論から言えば、<strong className="text-gray-900">外食でもダイエットは十分に可能</strong>です。ダイエットの大原則は「消費カロリー ＞ 摂取カロリー」というシンプルな方程式。これは自炊でも外食でも変わりません。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            多くの人が「外食＝太る」と思い込んでいるのは、外食時に高カロリーなメニューを無意識に選んでしまうから。実際にはチェーン店のメニューには300kcal台のものも多数あり、選び方次第でダイエット食になります。
          </p>

          <div className="bg-blue-50 rounded-xl p-5 mb-4">
            <h3 className="text-sm font-bold text-blue-900 mb-2">カロリー管理の基本</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>- 成人男性の1日の消費カロリー目安: 約2,200〜2,600kcal</li>
              <li>- 成人女性の1日の消費カロリー目安: 約1,700〜2,000kcal</li>
              <li>- ダイエット中の1食あたりの目安: 500〜700kcal</li>
              <li>- 月に1kg痩せるには: 1日あたり約240kcalの赤字が必要</li>
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed">
            つまり、1食を500〜700kcalに抑えれば、外食しても十分にダイエットできます。チェーン店は栄養成分が公開されているので、むしろ個人経営のレストランより管理しやすいとも言えます。
          </p>
        </section>

        {/* Section 2: チェーン店別 ダイエットおすすめメニュー */}
        <section id="chain-menus" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            チェーン店別 ダイエットおすすめメニュー
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ここからは、主要チェーン店ごとにダイエット中でも食べられるメニューを具体的なカロリー・PFCデータとともに紹介します。すべてのデータは各社公式サイトの公開情報に基づいています。
          </p>

          {/* マクドナルド */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">M</span>
              マクドナルドのダイエットメニュー
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              意外かもしれませんが、マクドナルドにはダイエット向きのメニューが複数あります。ポイントは<strong className="text-gray-900">バーガー単品で注文し、セットのポテトとドリンクを避ける</strong>こと。ポテトM（410kcal）とコーラM（140kcal）を追加するだけで550kcalも上乗せされます。
            </p>
            <NutritionTable
              items={[
                { name: "ハンバーガー", calories: 259, protein: 13.2, fat: 9.4, carbs: 30.2 },
                { name: "チキンクリスプ", calories: 345, protein: 14.8, fat: 15.5, carbs: 36.6 },
                { name: "エッグマックマフィン", calories: 311, protein: 19.2, fat: 13.5, carbs: 27.0 },
                { name: "フィレオフィッシュ", calories: 341, protein: 14.7, fat: 14.1, carbs: 38.2 },
                { name: "チキンマックナゲット 5ピース", calories: 263, protein: 16.0, fat: 15.3, carbs: 15.1 },
              ]}
            />
            <p className="text-sm text-gray-500">
              特におすすめは<strong className="text-gray-700">ハンバーガー単品（259kcal）</strong>。たんぱく質13.2gも摂れてワンコイン以下。朝マックならエッグマックマフィン（311kcal、P19.2g）がベストです。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/mcdonalds" className="text-orange-500 hover:text-orange-600 underline">マクドナルドの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </div>

          {/* 吉野家 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">吉</span>
              吉野家のダイエットメニュー
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              吉野家でダイエット中に最も重要なのは<strong className="text-gray-900">サイズ選び</strong>です。牛丼は並盛（635kcal）と大盛（863kcal）で約230kcalもの差があります。また、ライザップとのコラボ商品や、ご飯を豆腐に変更できるメニューが糖質制限中に活躍します。
            </p>
            <NutritionTable
              items={[
                { name: "牛丼（並盛）", calories: 635, protein: 20.0, fat: 20.4, carbs: 89.0 },
                { name: "牛丼（小盛）", calories: 488, protein: 15.9, fat: 16.0, carbs: 66.0 },
                { name: "牛皿（並盛）", calories: 248, protein: 14.8, fat: 17.3, carbs: 5.7 },
                { name: "ライザップ牛サラダ", calories: 398, protein: 28.0, fat: 25.2, carbs: 17.2 },
                { name: "サラシア牛丼（並盛）", calories: 630, protein: 19.5, fat: 20.4, carbs: 88.0 },
              ]}
            />
            <p className="text-sm text-gray-500">
              一番のおすすめは<strong className="text-gray-700">ライザップ牛サラダ（398kcal、P28.0g）</strong>。ご飯なしで牛肉の旨味と野菜がしっかり摂れます。糖質制限中の方には牛皿（248kcal）単品もおすすめです。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/yoshinoya" className="text-orange-500 hover:text-orange-600 underline">吉野家の全メニュー栄養成分一覧はこちら</Link>
            </p>
          </div>

          {/* サイゼリヤ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">S</span>
              サイゼリヤのダイエットメニュー
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              サイゼリヤはダイエッターにとって最強のファミレスです。<strong className="text-gray-900">500円以下で高タンパク・低カロリーなメニュー</strong>が多数あり、コスパと栄養バランスの両立が可能。特にグリル系メニューとサラダの組み合わせが優秀です。
            </p>
            <NutritionTable
              items={[
                { name: "柔らか青豆の温サラダ", calories: 166, protein: 9.1, fat: 8.7, carbs: 12.6 },
                { name: "ディアボラ風ハンバーグ", calories: 542, protein: 27.5, fat: 34.1, carbs: 28.7 },
                { name: "若鶏のグリル", calories: 514, protein: 35.3, fat: 28.7, carbs: 26.6 },
                { name: "ミックスグリル", calories: 478, protein: 32.2, fat: 30.5, carbs: 16.0 },
                { name: "小エビのサラダ", calories: 125, protein: 6.4, fat: 7.5, carbs: 8.3 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">若鶏のグリル（514kcal、P35.3g）</strong>がイチオシ。税込500円でタンパク質35gは驚異的。サラダと組み合わせても800円以下に収まります。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/saizeriya" className="text-orange-500 hover:text-orange-600 underline">サイゼリヤの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </div>

          {/* コンビニ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">C</span>
              コンビニのダイエットメニュー
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              コンビニは<strong className="text-gray-900">栄養表示が全商品に記載</strong>されているため、カロリー管理が最もしやすい外食先です。サラダチキンに代表される高タンパク商品も年々充実しています。
            </p>
            <NutritionTable
              items={[
                { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 1.0 },
                { name: "ゆで卵 2個入り", calories: 130, protein: 11.0, fat: 8.6, carbs: 0.6 },
                { name: "もち麦おにぎり（枝豆と塩昆布）", calories: 178, protein: 4.2, fat: 2.1, carbs: 36.5 },
                { name: "たんぱく質が摂れるチキン＆スパイシーチリ", calories: 252, protein: 27.4, fat: 9.3, carbs: 15.7 },
                { name: "ブランパン 2個入り", calories: 130, protein: 6.6, fat: 3.4, carbs: 14.6 },
              ]}
            />
            <p className="text-sm text-gray-500">
              鉄板は<strong className="text-gray-700">サラダチキン（114kcal、P24.1g）</strong>。味のバリエーションも豊富で飽きにくいです。時間がないときはサラダチキン＋おにぎり1個（合計約400kcal、P28g超）が黄金コンビ。
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/conveni" className="text-orange-500 hover:text-orange-600 underline">コンビニの高タンパク商品ランキングはこちら</Link>
            </p>
          </div>
        </section>

        {/* Section 3: 外食で太らないための5つのルール */}
        <section id="five-rules" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            外食で太らないための5つのルール
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            どのチェーン店に行くかより、<strong className="text-gray-900">どう選ぶか</strong>が重要です。以下の5つのルールを習慣にすれば、どんな外食先でもダイエットを続けられます。
          </p>

          {/* Rule 1 */}
          <div className="mb-6 bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              <span className="text-orange-500 mr-2">1.</span>
              メニューのカロリーを事前チェック
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              お店に入る前に、公式サイトやたべなびでカロリーを確認しましょう。空腹の状態でメニューを見ると高カロリーなものに目が行きがちです。事前に「これを食べる」と決めておくことで、衝動的な注文を防げます。大手チェーン店のほとんどが栄養成分を公開しているので、確認は数十秒で完了します。
            </p>
          </div>

          {/* Rule 2 */}
          <div className="mb-6 bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              <span className="text-orange-500 mr-2">2.</span>
              タンパク質を意識して選ぶ
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ダイエット中に最も不足しやすいのがタンパク質です。タンパク質が足りないと筋肉が減り、基礎代謝が下がり、リバウンドしやすい体になります。1食あたり20g以上のタンパク質を目安にメニューを選びましょう。肉・魚・卵を使ったメニューを優先し、サイドメニューで補うのも有効です。
            </p>
          </div>

          {/* Rule 3 */}
          <div className="mb-6 bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              <span className="text-orange-500 mr-2">3.</span>
              ドリンクのカロリーに注意
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              見落としがちなのがドリンクのカロリーです。コーラMサイズ（140kcal）、カフェラテ（約200kcal）、シェイク（約350kcal）と、飲み物だけで軽い食事分のカロリーを摂ってしまうことも。ダイエット中は水・お茶・ブラックコーヒー・ゼロカロリー飲料を選びましょう。
            </p>
          </div>

          {/* Rule 4 */}
          <div className="mb-6 bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              <span className="text-orange-500 mr-2">4.</span>
              セットよりも単品
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              セットメニューは一見お得ですが、必要ないサイドメニューやドリンクがついてカロリーが大幅に増えます。例えばマクドナルドではバリューセットにするだけで500kcal以上追加されることも。「単品＋水」を基本にし、本当に必要なものだけを追加注文するクセをつけましょう。
            </p>
          </div>

          {/* Rule 5 */}
          <div className="mb-6 bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              <span className="text-orange-500 mr-2">5.</span>
              記録する習慣をつける
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              食べたものを記録するだけで、意識が変わりダイエット効果が上がることが研究でも証明されています。問題は「面倒で続かない」こと。たべなびなら外食チェーンのメニューを3タップで記録でき、カロリーとPFCバランスを自動で集計。面倒な計算なしで食事管理が続けられます。
            </p>
          </div>
        </section>

        {/* Section 4: PFCバランスの基本 */}
        <section id="pfc-basics" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            PFCバランスの基本
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PFCとは、三大栄養素であるProtein（タンパク質）、Fat（脂質）、Carbohydrate（炭水化物）の頭文字です。ダイエットではカロリーの「総量」だけでなく、この3つの<strong className="text-gray-900">バランス</strong>も重要になります。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600 mb-1">P</p>
              <p className="text-sm font-bold text-gray-900 mb-1">タンパク質</p>
              <p className="text-xs text-gray-600">筋肉・肌・髪の材料。1gあたり4kcal。ダイエット中は体重1kgあたり1.5〜2g摂取が目安。</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600 mb-1">F</p>
              <p className="text-sm font-bold text-gray-900 mb-1">脂質</p>
              <p className="text-xs text-gray-600">ホルモンや細胞膜の材料。1gあたり9kcal。摂りすぎ注意だが、ゼロはNG。</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-green-600 mb-1">C</p>
              <p className="text-sm font-bold text-gray-900 mb-1">炭水化物</p>
              <p className="text-xs text-gray-600">脳と体のエネルギー源。1gあたり4kcal。過剰分が脂肪として蓄積される。</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3">ダイエット中のPFC目安比率</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">タンパク質</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: "30%" }} />
                </div>
                <span className="text-sm font-bold text-gray-700 w-12">30%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">脂質</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "25%" }} />
                </div>
                <span className="text-sm font-bold text-gray-700 w-12">25%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-20">炭水化物</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: "45%" }} />
                </div>
                <span className="text-sm font-bold text-gray-700 w-12">45%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              ※ これは一般的なダイエット向けの目安です。体重・運動量・目標によって最適な比率は異なります。
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            例えば1日1,800kcalを目標にする場合、P（タンパク質）は540kcal分＝約135g、F（脂質）は450kcal分＝約50g、C（炭水化物）は810kcal分＝約203gが目安。外食で高タンパクメニューを選ぶことが、PFCバランスを整える最も簡単な方法です。
          </p>
        </section>

        {/* Section 5: たべなびで外食の栄養管理を簡単に */}
        <section id="tabenavi-cta" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            たべなびで外食の栄養管理を簡単に
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            「カロリーやPFCが大事なのはわかったけど、毎回調べるのは面倒...」という方にこそ使ってほしいのが<strong className="text-gray-900">たべなび</strong>です。
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
            <h3 className="text-base font-bold text-gray-900 mb-3">たべなびの特徴</h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                20以上のチェーン店の全メニュー栄養データを収録
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                3タップで食事を記録。面倒な手入力は不要
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                1日のカロリー・PFCバランスを自動で集計
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                外食中心の食生活でも簡単に栄養管理が続く
              </li>
            </ul>
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
              >
                たべなびを無料で始める
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: まとめ */}
        <section id="summary" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-200">
            この記事のまとめ
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span><strong className="text-gray-900">外食＝太るは誤解。</strong>メニューの選び方次第でダイエットは十分可能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span>1食の目安は<strong className="text-gray-900">500〜700kcal</strong>。チェーン店には300kcal台のメニューも多数</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span>マクドナルドのハンバーガー（259kcal）、吉野家のライザップ牛サラダ（398kcal）、サイゼリヤの若鶏のグリル（514kcal、P35.3g）などがおすすめ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span>「事前チェック」「タンパク質重視」「ドリンク注意」「単品注文」「記録」の<strong className="text-gray-900">5つのルール</strong>を習慣に</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span>PFCバランスは<strong className="text-gray-900">P30:F25:C45</strong>を目安に</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">-</span>
                <span>たべなびなら外食チェーンのメニューを3タップで記録、栄養管理が簡単に</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Related guide links */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            関連するガイド記事
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "mcdonalds", name: "マクドナルド" },
              { slug: "yoshinoya", name: "吉野家" },
              { slug: "saizeriya", name: "サイゼリヤ" },
              { slug: "matsuya", name: "松屋" },
              { slug: "sukiya", name: "すき家" },
              { slug: "conveni", name: "コンビニ" },
              { slug: "muscle-eating-out", name: "筋トレ×外食ガイド" },
            ].map((link) => (
              <Link
                key={link.slug}
                href={`/guide/${link.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-4 text-sm">
            栄養管理をもっと簡単に。
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
