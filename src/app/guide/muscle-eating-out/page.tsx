import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "【2026年最新】筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド | たべなび",
  description:
    "筋トレ中の外食で迷わない。大戸屋・やよい軒・サイゼリヤ・マクドナルドなど主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。1食でタンパク質30g超えのメニューが見つかる。",
  keywords:
    "筋トレ 外食,高タンパク 外食,筋トレ チェーン店,高タンパク メニュー,筋トレ 食事",
  openGraph: {
    title:
      "筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド",
    description:
      "主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド",
  description:
    "筋トレ中の外食で迷わない。主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。",
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
  mainEntityOfPage: "https://tabenavi.jp/guide/muscle-eating-out",
};

const tocItems = [
  { id: "is-it-ok", label: "筋トレ中に外食しても大丈夫？" },
  { id: "chain-ranking", label: "高タンパクメニューが充実しているチェーン店ランキング" },
  { id: "chain-best3", label: "チェーン店別 高タンパクメニューBEST3" },
  { id: "post-workout", label: "筋トレ後の外食で意識すべきこと" },
  { id: "tabenavi-cta", label: "たべなびで高タンパクメニューを探す" },
  { id: "summary", label: "まとめ" },
];

function NutritionTable({
  items,
}: {
  items: { name: string; calories: number; protein: number; fat: number; carbs: number; highlight?: boolean }[];
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
            <tr
              key={item.name}
              className={
                item.highlight
                  ? "bg-blue-50/50"
                  : i % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50/50"
              }
            >
              <td className="px-4 py-2.5 text-gray-900 font-medium">
                {item.name}
                {item.highlight && (
                  <span className="ml-2 text-xs text-blue-600 font-bold">おすすめ</span>
                )}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.calories} kcal</td>
              <td className="text-right px-4 py-2.5 font-bold text-blue-600">{item.protein.toFixed(1)}g</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.fat.toFixed(1)}g</td>
              <td className="text-right px-4 py-2.5 text-gray-700">{item.carbs.toFixed(1)}g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MuscleEatingOutPage() {
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
          筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド
        </h1>
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

        {/* Introduction */}
        <p className="text-gray-600 leading-relaxed mb-8">
          筋トレをしている人にとって、外食は悩みのタネ。「せっかくトレーニングしたのに、外食で台無しにしたくない」「高タンパクなメニューがどれかわからない」という声をよく聞きます。しかし、実はチェーン店には1食でタンパク質30gを超えるメニューが意外と多く存在します。この記事では、筋トレ民に本当におすすめできるチェーン店の高タンパクメニューを、具体的なPFCデータとともに紹介します。トレーニング後の外食で迷ったら、このガイドを見れば即決できます。
        </p>

        {/* Table of Contents */}
        <nav className="bg-blue-50/50 rounded-xl border border-blue-100 p-6 mb-10">
          <h2 className="text-sm font-bold text-gray-900 mb-3">この記事の目次</h2>
          <ol className="space-y-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Section 1: 筋トレ中に外食しても大丈夫？ */}
        <section id="is-it-ok" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            筋トレ中に外食しても大丈夫？
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong className="text-gray-900">結論：まったく問題ありません。</strong>むしろ、正しく選べば外食は筋トレの味方になります。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            筋肥大に必要なのは、適切なトレーニング刺激と十分な栄養摂取。特にタンパク質は1日あたり体重1kgにつき1.6〜2.2gが推奨されています（国際スポーツ栄養学会の見解）。体重70kgの人なら、1日112〜154gのタンパク質が必要です。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            これを3食で割ると、1食あたり約37〜51g。自炊で毎食これを達成するのは大変ですが、チェーン店の定食やグリルメニューなら1食で30g以上のタンパク質を摂ることが可能です。
          </p>

          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="text-sm font-bold text-blue-900 mb-2">筋トレ中の1食あたりの栄養目安</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>- タンパク質: 20〜40g（筋合成のゴールデンゾーン）</li>
              <li>- カロリー: 600〜900kcal（増量期）/ 500〜700kcal（減量期）</li>
              <li>- 脂質: 15〜25g以下を目安に</li>
              <li>- 炭水化物: トレーニング後は多めに摂ってOK</li>
            </ul>
          </div>
        </section>

        {/* Section 2: 高タンパクメニューが充実しているチェーン店ランキング */}
        <section id="chain-ranking" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            高タンパクメニューが充実しているチェーン店ランキング
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            「タンパク質30g以上のメニューの数」「コスパ」「メニューの多様性」を総合的に評価した、筋トレ民におすすめのチェーン店ランキングです。
          </p>

          {/* Rank 1: 大戸屋 */}
          <div className="mb-8 border border-gray-100 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-lg">1</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">大戸屋</h3>
                <p className="text-xs text-gray-500">定食メニューでP30g超え多数。バランスの良さはNo.1</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                大戸屋は手作りの定食メニューが豊富で、ほぼすべてのメインメニューでタンパク質30g以上を摂取可能。白米を五穀米に変更できるのも嬉しいポイント。副菜・味噌汁・サラダ付きで栄養バランスが取りやすく、筋トレ民のランチに最適です。
              </p>
              <NutritionTable
                items={[
                  { name: "チキンかあさん煮定食", calories: 804, protein: 40.2, fat: 24.5, carbs: 102.3, highlight: true },
                  { name: "しまほっけの炭火焼き定食", calories: 642, protein: 36.8, fat: 18.3, carbs: 78.5 },
                  { name: "鶏と野菜の黒酢あん定食", calories: 752, protein: 32.5, fat: 22.1, carbs: 98.7 },
                ]}
              />
              <p className="text-sm text-gray-500">
                <Link href="/guide/ootoya" className="text-orange-500 hover:text-orange-600 underline">大戸屋の全メニュー栄養成分一覧はこちら</Link>
              </p>
            </div>
          </div>

          {/* Rank 2: やよい軒 */}
          <div className="mb-8 border border-gray-100 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-lg">2</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">やよい軒</h3>
                <p className="text-xs text-gray-500">ご飯おかわり無料。増量期のコスパ最強</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                やよい軒最大の特徴はご飯おかわり無料。増量期の筋トレ民にはありがたすぎるシステムです。定食メニューはどれもタンパク質が豊富で、しょうが焼き定食は1食でP32gを摂取可能。値段も800〜1,000円台とコスパに優れています。
              </p>
              <NutritionTable
                items={[
                  { name: "しょうが焼定食", calories: 768, protein: 32.0, fat: 25.4, carbs: 98.5, highlight: true },
                  { name: "チキン南蛮定食", calories: 912, protein: 35.6, fat: 35.2, carbs: 105.3 },
                  { name: "サバの味噌煮定食", calories: 695, protein: 30.5, fat: 21.8, carbs: 85.2 },
                ]}
              />
              <p className="text-sm text-gray-500">
                <Link href="/guide/yayoiken" className="text-orange-500 hover:text-orange-600 underline">やよい軒の全メニュー栄養成分一覧はこちら</Link>
              </p>
            </div>
          </div>

          {/* Rank 3: サイゼリヤ */}
          <div className="mb-8 border border-gray-100 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg">3</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">サイゼリヤ</h3>
                <p className="text-xs text-gray-500">500円以下で高タンパク。筋トレ民の味方</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                サイゼリヤはグリル系メニューの圧倒的コスパが魅力。若鶏のグリル（税込500円）で35.3gのタンパク質が摂れるのは驚異的です。ミックスグリル（P32.2g）も500円台で、毎日通っても財布に優しい。筋トレ民のSNSでも「サイゼは筋トレ飯の聖地」と話題です。
              </p>
              <NutritionTable
                items={[
                  { name: "若鶏のグリル", calories: 514, protein: 35.3, fat: 28.7, carbs: 26.6, highlight: true },
                  { name: "ミックスグリル", calories: 478, protein: 32.2, fat: 30.5, carbs: 16.0, highlight: true },
                  { name: "ディアボラ風ハンバーグ", calories: 542, protein: 27.5, fat: 34.1, carbs: 28.7 },
                ]}
              />
              <p className="text-sm text-gray-500">
                <Link href="/guide/saizeriya" className="text-orange-500 hover:text-orange-600 underline">サイゼリヤの全メニュー栄養成分一覧はこちら</Link>
              </p>
            </div>
          </div>

          {/* Rank 4: サブウェイ */}
          <div className="mb-8 border border-gray-100 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">4</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">サブウェイ</h3>
                <p className="text-xs text-gray-500">カスタマイズ自在。野菜も摂れる高タンパクサンド</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                サブウェイは自分でカスタマイズできるのが強み。ローストチキン系のサンドを選び、野菜を多めにすれば高タンパク・低脂質の理想的な食事に。パンを全粒粉に変更すれば食物繊維もアップ。タンパク質は20g以上確保できます。
              </p>
              <NutritionTable
                items={[
                  { name: "ローストチキン", calories: 282, protein: 22.5, fat: 4.6, carbs: 38.5, highlight: true },
                  { name: "チキンブレスト", calories: 305, protein: 25.0, fat: 5.2, carbs: 40.1 },
                  { name: "ターキーブレスト", calories: 262, protein: 20.8, fat: 3.8, carbs: 37.5 },
                ]}
              />
              <p className="text-sm text-gray-500">
                <Link href="/guide/subway" className="text-orange-500 hover:text-orange-600 underline">サブウェイの全メニュー栄養成分一覧はこちら</Link>
              </p>
            </div>
          </div>

          {/* Rank 5: マクドナルド */}
          <div className="mb-8 border border-gray-100 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">5</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">マクドナルド</h3>
                <p className="text-xs text-gray-500">意外にも高タンパク。ダブルチーズバーガーはP26.4g</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                マクドナルドは「ジャンクフード」のイメージが強いですが、実はバーガー類のタンパク質含有量は侮れません。ダブルチーズバーガー（P26.4g）やチキンフィレオ（P24.0g）なら、単品でも十分なタンパク質が摂れます。全国どこにでもあるのも筋トレ民には嬉しいポイント。
              </p>
              <NutritionTable
                items={[
                  { name: "ダブルチーズバーガー", calories: 457, protein: 26.4, fat: 25.0, carbs: 30.5, highlight: true },
                  { name: "チキンフィレオ", calories: 465, protein: 24.0, fat: 21.6, carbs: 43.5 },
                  { name: "ビッグマック", calories: 525, protein: 26.0, fat: 28.2, carbs: 41.8 },
                ]}
              />
              <p className="text-sm text-gray-500">
                <Link href="/guide/mcdonalds" className="text-orange-500 hover:text-orange-600 underline">マクドナルドの全メニュー栄養成分一覧はこちら</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: チェーン店別 高タンパクメニューBEST3 */}
        <section id="chain-best3" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            チェーン店別 高タンパクメニューBEST3
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ジャンル別に、筋トレ民に最もおすすめの高タンパクメニューを3つずつ厳選しました。
          </p>

          {/* 牛丼チェーン */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-400 rounded-full" />
              牛丼チェーン（吉野家・松屋・すき家）
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              牛丼チェーンは安くて早くてタンパク質も摂れる、筋トレ民の強い味方。牛肉自体がタンパク質豊富なので、並盛でもP20g前後が確保できます。定食メニューを選べばさらにタンパク質アップ。
            </p>
            <NutritionTable
              items={[
                { name: "松屋 牛焼肉定食", calories: 827, protein: 34.2, fat: 28.5, carbs: 105.3, highlight: true },
                { name: "すき家 まぐろたたき丼（並盛）", calories: 455, protein: 28.5, fat: 5.2, carbs: 78.3, highlight: true },
                { name: "吉野家 牛皿定食", calories: 680, protein: 28.0, fat: 22.5, carbs: 82.0, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm">
              <Link href="/guide/yoshinoya" className="text-orange-500 hover:text-orange-600 underline">吉野家</Link>
              <Link href="/guide/matsuya" className="text-orange-500 hover:text-orange-600 underline">松屋</Link>
              <Link href="/guide/sukiya" className="text-orange-500 hover:text-orange-600 underline">すき家</Link>
            </div>
          </div>

          {/* ファミレス */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-400 rounded-full" />
              ファミレス（サイゼリヤ・ガスト・デニーズ）
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ファミレスはメニューの種類が豊富で、グリル系やステーキなど高タンパクメニューが充実。サイドメニューでサラダやスープを追加してバランスを取れるのもメリットです。
            </p>
            <NutritionTable
              items={[
                { name: "サイゼリヤ 若鶏のグリル", calories: 514, protein: 35.3, fat: 28.7, carbs: 26.6, highlight: true },
                { name: "ガスト チキテキ・ピリ辛スパイス焼き", calories: 645, protein: 33.5, fat: 30.2, carbs: 55.8, highlight: true },
                { name: "デニーズ All Beefハンバーグ", calories: 620, protein: 30.5, fat: 32.8, carbs: 48.2, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm">
              <Link href="/guide/saizeriya" className="text-orange-500 hover:text-orange-600 underline">サイゼリヤ</Link>
              <Link href="/guide/gusto" className="text-orange-500 hover:text-orange-600 underline">ガスト</Link>
              <Link href="/guide/dennys" className="text-orange-500 hover:text-orange-600 underline">デニーズ</Link>
            </div>
          </div>

          {/* ファストフード */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-400 rounded-full" />
              ファストフード（マクドナルド・モスバーガー・KFC）
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ファストフードは脂質が高めですが、タンパク質も意外と豊富。時間がないときの筋トレ飯として活用できます。ポイントはセットにせず単品で注文すること。
            </p>
            <NutritionTable
              items={[
                { name: "マクドナルド 倍ビッグマック", calories: 724, protein: 40.5, fat: 43.2, carbs: 42.0, highlight: true },
                { name: "モスバーガー スパイシーモスバーガー", calories: 370, protein: 18.5, fat: 17.8, carbs: 34.2 },
                { name: "KFC オリジナルチキン 2ピース", calories: 474, protein: 33.4, fat: 28.6, carbs: 17.8, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm">
              <Link href="/guide/mcdonalds" className="text-orange-500 hover:text-orange-600 underline">マクドナルド</Link>
              <Link href="/guide/mos" className="text-orange-500 hover:text-orange-600 underline">モスバーガー</Link>
              <Link href="/guide/kfc" className="text-orange-500 hover:text-orange-600 underline">KFC</Link>
            </div>
          </div>

          {/* コンビニ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-400 rounded-full" />
              コンビニ（セブン・ローソン・ファミマ）
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              コンビニは24時間いつでもタンパク質を補給できる最強スポット。近年は「たんぱく質が摂れる」シリーズなど、筋トレ民向け商品が急増中。ジムの帰りにサッと買えるのが最大のメリットです。
            </p>
            <NutritionTable
              items={[
                { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 1.0, highlight: true },
                { name: "たんぱく質が摂れるチキン＆スパイシーチリ", calories: 252, protein: 27.4, fat: 9.3, carbs: 15.7, highlight: true },
                { name: "ザバス MILK PROTEIN 200ml", calories: 102, protein: 15.0, fat: 0.0, carbs: 10.5, highlight: true },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/conveni" className="text-orange-500 hover:text-orange-600 underline">コンビニの高タンパク商品ランキングはこちら</Link>
            </p>
          </div>
        </section>

        {/* Section 4: 筋トレ後の外食で意識すべきこと */}
        <section id="post-workout" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            筋トレ後の外食で意識すべきこと
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            筋トレ後の食事は筋肥大において非常に重要です。以下の3つのポイントを押さえれば、外食でも筋トレ効果を最大化できます。
          </p>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                <span className="text-blue-500 mr-2">1.</span>
                タンパク質は1食あたり20〜40gを目標に
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                筋タンパク質合成（MPS）を最大化するには、1食あたり20〜40gのタンパク質摂取が推奨されています。これ以下だと合成刺激が不十分、これ以上だと上乗せ効果が小さくなります。チェーン店の定食メニューなら、ほとんどがこの範囲をカバーできます。プロテインシェイカーを持ち歩かなくても、大戸屋のチキンかあさん煮（P40.2g）やサイゼリヤの若鶏のグリル（P35.3g）を食べれば十分です。
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                <span className="text-blue-500 mr-2">2.</span>
                脂質は控えめに（特に減量期）
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                脂質は1gあたり9kcalとカロリーが高く、摂りすぎると1日の総カロリーをオーバーしやすくなります。減量期は特に注意が必要です。揚げ物よりグリル・焼き物・蒸し料理を選ぶのがポイント。サイゼリヤの若鶏のグリルやサブウェイのローストチキンなど、焼き・蒸し系のメニューは脂質が控えめで高タンパクです。ただし、脂質をゼロにする必要はありません。ホルモン生成や脂溶性ビタミンの吸収に必要なので、1日50〜70g程度は摂取しましょう。
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                <span className="text-blue-500 mr-2">3.</span>
                炭水化物は筋トレ後なら多めでもOK
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                筋トレ後は筋グリコーゲンが消耗しているため、炭水化物を摂取してもエネルギー補充に使われやすく、脂肪になりにくいタイミングです。増量期であれば白米大盛りでも問題ありません。やよい軒のご飯おかわり無料は、筋トレ後の増量期には神システム。減量期でも筋トレ後の1食は炭水化物をしっかり摂ることで、次回のトレーニングパフォーマンスを維持できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: たべなびで高タンパクメニューを探す */}
        <section id="tabenavi-cta" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            たべなびで高タンパクメニューを探す
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            「今いる場所の近くで、タンパク質30g以上のメニューがあるチェーン店はどこ？」そんな筋トレ民の疑問に答えるのが<strong className="text-gray-900">たべなび</strong>です。
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-base font-bold text-gray-900 mb-3">筋トレ民にたべなびが選ばれる理由</h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                20以上のチェーン店のPFCデータを完全網羅
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                タンパク質順でメニューをソート・検索できる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                3タップで食事を記録。1日のPFC合計を自動計算
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                筋トレの日もオフの日も、外食の栄養管理がラクに続く
              </li>
            </ul>
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-200"
              >
                たべなびを無料で始める
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: まとめ */}
        <section id="summary" className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
            この記事のまとめ
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span><strong className="text-gray-900">筋トレ中の外食はまったく問題ない。</strong>正しく選べばむしろ味方になる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span>高タンパクチェーン店TOP3は<strong className="text-gray-900">大戸屋・やよい軒・サイゼリヤ</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span>大戸屋 チキンかあさん煮（P40.2g）、サイゼリヤ 若鶏のグリル（P35.3g/¥500）がイチオシ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span>1食あたりの目標: <strong className="text-gray-900">タンパク質20〜40g</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span>筋トレ後は<strong className="text-gray-900">炭水化物を多めに摂ってもOK</strong>。脂質は控えめに</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">-</span>
                <span>たべなびなら外食チェーンのPFCデータが一目でわかり、3タップで記録完了</span>
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
              { slug: "eating-out-diet", name: "外食ダイエットガイド" },
              { slug: "ootoya", name: "大戸屋" },
              { slug: "yayoiken", name: "やよい軒" },
              { slug: "saizeriya", name: "サイゼリヤ" },
              { slug: "mcdonalds", name: "マクドナルド" },
              { slug: "subway", name: "サブウェイ" },
              { slug: "kfc", name: "KFC" },
              { slug: "conveni", name: "コンビニ" },
            ].map((link) => (
              <Link
                key={link.slug}
                href={`/guide/${link.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500 transition-colors"
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
