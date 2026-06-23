import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/bulkup-eating-out" },
  title:
    "【2026年最新】増量期の外食完全ガイド｜バルクアップに最適なチェーン店メニュー | たべなび",
  description:
    "増量期・バルクアップ中の外食メニューを徹底解説。やよい軒・すき家・松屋など主要チェーン店の高カロリー高タンパクメニューと、1日3000kcalを外食で達成するプランを紹介。",
  keywords: [
    "増量期 外食",
    "バルクアップ 食事",
    "筋トレ 増量 外食",
    "バルクアップ チェーン店",
    "増量期 メニュー",
    "筋トレ 外食 おすすめ",
  ],
  openGraph: {
    title:
      "【2026年最新】増量期の外食完全ガイド｜バルクアップに最適なチェーン店メニュー",
    description:
      "増量期に使えるチェーン店メニューを徹底解説。1日3000kcalの外食プランも紹介。",
    url: "https://www.tabenavi.jp/guide/bulkup-eating-out",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】増量期の外食完全ガイド｜バルクアップに最適なチェーン店メニュー",
  description:
    "増量期・バルクアップ中の外食メニューを徹底解説。チェーン店別おすすめメニューと3000kcalプランを紹介。",
  datePublished: "2026-03-23",
  dateModified: "2026-06-23",
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/bulkup-eating-out",
};

const tocItems = [
  { id: "pfc", label: "増量期に必要なカロリーとPFC" },
  { id: "chain-menus", label: "チェーン店別おすすめメニュー" },
  { id: "3000kcal", label: "1日3000kcalを外食で達成するプラン" },
  { id: "avoid", label: "増量期でも避けるべきメニュー" },
  { id: "summary", label: "まとめ" },
];

export default function BulkupEatingOutPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="増量期の外食完全ガイド"
        subtitle="バルクアップに最適なチェーン店メニュー【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1432139509613-5c4255a1d185?w=800&h=400&fit=crop"
        breadcrumb="増量期の外食ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="bulkup-eating-out">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年6月23日 | 読了目安: 9分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          筋トレで筋肉を大きくするには、トレーニングだけでなく<Marker>十分なカロリーとタンパク質の摂取が不可欠</Marker>です。しかし、増量期に毎日自炊で3,000kcal以上を確保するのは大変。外食チェーンを上手に活用すれば、手軽に増量期の栄養摂取をクリアできます。
        </p>
        <p className="mb-10">
          この記事では、<Marker color="blue">増量期に必要な栄養素の計算方法から、チェーン店別のおすすめ高カロリー高タンパクメニュー</Marker>、そして1日3,000kcalを外食だけで達成するプランまで徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1432139509613-5c4255a1d185?w=800&h=400&fit=crop"
          alt="高タンパクな食事のイメージ"
        />

        {/* Section 1: 増量期に必要なカロリーとPFC */}
        <section className="mb-16">
                  <QuickAnswer
          question={"バルクアップ中に外食で1日3000kcalを達成するにはどうすればいい？"}
          answer={"やよい軒（ご飯おかわり無料）・すき家・びっくりドンキーなどチェーン店を活用すれば実現可能。朝食762kcal、昼食約1131kcal、夕食約1196kcal（計約3089kcal・タンパク質150g以上）のプランを参考に、各自の体重と目標に合わせて調整してください。"}
        />

        <SectionHeading id="pfc">
            増量期に必要なカロリーとPFC
          </SectionHeading>

          <SubSectionHeading>増量期のカロリー計算</SubSectionHeading>
          <p className="mb-4">
            増量期の目標カロリーは<Marker>体重(kg) x 40〜45kcal</Marker>が目安です。例えば体重70kgの場合、1日2,800〜3,150kcalが必要になります。
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">体重別の目標カロリー</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-sky-50 rounded-lg py-3 px-4 text-center">
                <p className="text-sky-600 font-bold text-lg">2,400-2,700</p>
                <p className="text-sky-600 text-xs">kcal（60kg）</p>
              </div>
              <div className="bg-sky-50 rounded-lg py-3 px-4 text-center">
                <p className="text-sky-600 font-bold text-lg">2,800-3,150</p>
                <p className="text-sky-600 text-xs">kcal（70kg）</p>
              </div>
              <div className="bg-sky-50 rounded-lg py-3 px-4 text-center">
                <p className="text-sky-600 font-bold text-lg">3,200-3,600</p>
                <p className="text-sky-600 text-xs">kcal（80kg）</p>
              </div>
            </div>
          </div>

          <SubSectionHeading>PFCバランスの目安</SubSectionHeading>
          <p className="mb-4">
            増量期のPFC（タンパク質・脂質・炭水化物）バランスは以下が推奨されます。
          </p>

          <NumberedList
            items={[
              {
                title: "タンパク質（P）: 体重 x 2.0〜2.5g",
                body: "70kgの場合、1日140〜175gのタンパク質が必要。筋合成を最大化するために、3〜4時間おきに30〜40gずつ摂取するのが理想です。",
              },
              {
                title: "脂質（F）: 総カロリーの20〜25%",
                body: "3,000kcalの場合、脂質は67〜83g。ホルモン分泌に必要なため極端に減らさないこと。良質な脂質（魚、ナッツ、アボカド）を意識しましょう。",
              },
              {
                title: "炭水化物（C）: 残りのカロリー全て",
                body: "増量期のエネルギー源の中心。3,000kcalの場合、炭水化物は約400〜450g。白米なら1日5〜6杯分に相当します。",
              },
            ]}
          />

          <TipBox title="クリーンバルク vs ダーティバルク">
            <p>
              <Marker color="green">クリーンバルク</Marker>は良質な食材で増量する方法。脂肪がつきにくいが食事量が多くなり大変。<strong>ダーティバルク</strong>はジャンクフードも含めてとにかくカロリーを稼ぐ方法。楽だが脂肪も多くつく。おすすめは両者の中間で、基本はクリーンバルク、カロリーが足りない時だけ高カロリー食品を追加する方法です。
            </p>
          </TipBox>
        </section>

        {/* Section 2: チェーン店別おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="chain-menus">
            チェーン店別おすすめ高カロリー高タンパクメニュー
          </SectionHeading>
          <p className="mb-6">
            増量期に使えるチェーン店メニューを厳選。<Marker>カロリーとタンパク質のバランスが良いメニュー</Marker>を中心に紹介します。
          </p>

          <SubSectionHeading>やよい軒（ご飯おかわり無料！）</SubSectionHeading>
          <p className="mb-4">
            増量期最強のチェーン店が<Marker>やよい軒</Marker>です。なぜなら<Marker color="blue">ご飯おかわり無料</Marker>だから。白米を2杯おかわりすれば、それだけで約500kcal・炭水化物110gを追加できます。
          </p>

          <NutritionTable
            items={[
              { name: "しまほっけ定食 + ご飯2杯", calories: 1131, protein: 58.7, fat: 21.3, carbs: 171.4, highlight: true },
              { name: "味噌かつ煮定食 + ご飯2杯", calories: 1345, protein: 48.6, fat: 33.2, carbs: 210.2 },
              { name: "しょうが焼定食 + ご飯2杯", calories: 1217, protein: 34.2, fat: 37.1, carbs: 182.9 },
              { name: "チキン南蛮定食 + ご飯2杯", calories: 1343, protein: 35.6, fat: 37.7, carbs: 210.7 },
            ]}
          />
          <p className="text-xs text-gray-400 mb-6">
            ※定食はやよい軒公式の白米・普通盛の数値。「ご飯2杯」は普通盛のおかわり2杯分（1杯あたり約250kcal・炭水化物約55g）を加算した概算です。
          </p>

          <TipBox title="やよい軒の増量テクニック">
            <p>
              しまほっけ定食がおすすめの理由は<Marker>高タンパク・低脂質</Marker>だから。定食単体でタンパク質50.7g（白米普通盛込み）と魚のタンパク質が豊富で、ご飯のおかわりで炭水化物をガッツリ追加できます。合計約1,131kcal / P58.7gは増量期の昼食として理想的です。
            </p>
          </TipBox>

          <SubSectionHeading>すき家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛丼 メガ", calories: 1365, protein: 50.8, fat: 66.3, carbs: 141.6, highlight: true },
              { name: "旨だしとりそぼろ丼 特盛 + 牛皿(並)", calories: 1268, protein: 62.9, fat: 43.3, carbs: 155.0 },
              { name: "牛まぜのっけ朝食 大盛", calories: 762, protein: 24.6, fat: 17.1, carbs: 127.7 },
            ]}
          />

          <SubSectionHeading>松屋</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛焼肉W定食", calories: 1209, protein: 38.4, fat: 80.5, carbs: 88.1, highlight: true },
              { name: "牛めし 特盛", calories: 1237, protein: 31.0, fat: 56.3, carbs: 145.1 },
              { name: "カルビ焼肉生野菜セット", calories: 573, protein: 19.9, fat: 45.4, carbs: 16.2 },
            ]}
          />

          <SubSectionHeading>吉野家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "から揚げ定食 並盛", calories: 1168, protein: 42.2, fat: 59.0, carbs: 115.9, highlight: true },
              { name: "鰻重牛小鉢セット 二枚盛", calories: 1210, protein: 66.2, fat: 59.4, carbs: 110.3 },
              { name: "牛丼 特盛", calories: 1006, protein: 33.5, fat: 44.2, carbs: 122.3 },
            ]}
          />

          <SubSectionHeading>その他のおすすめチェーン</SubSectionHeading>

          <RankingCard
            rank={1}
            title="びっくりドンキー ガーリックチキン＆ハンバーグステーキL"
            subtitle="高タンパク増量メニューの王道"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">860</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">70.6g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">47.7g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">37.9g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker>1食でタンパク質70.6g</Marker>は圧倒的。チキンとハンバーグのダブルで、ライス（336kcal）を追加すれば約1,200kcal・タンパク質75g超え。増量期のディナーに最適です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="CoCo壱番屋 チキンカツカレー"
            subtitle="炭水化物ガッツリ増量メニュー"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">1115</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">32.3g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">43.7g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">151.6g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="blue">1食1,115kcalで炭水化物151.6g</Marker>。トレーニング後の糖質補給に最適。ライス量は標準300gから増量でき、増量ペースに合わせて調整可能です。
            </p>
          </RankingCard>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop"
          alt="ジムでトレーニングをしているフィットネスの様子"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="増量期のメニュー選びをもっと簡単に"
          subtitle="たべなびなら外食チェーンの栄養成分をワンタップで確認できます"
        />

        {/* Section 3: 1日3000kcalプラン */}
        <section className="mb-16">
          <SectionHeading id="3000kcal">
            1日3,000kcalを外食で達成するプラン
          </SectionHeading>
          <p className="mb-6">
            体重70kgの方を想定した、<Marker>1日3,000kcal・タンパク質150g以上</Marker>の外食プランを紹介します。
          </p>

          <SubSectionHeading>朝食: すき家 牛まぜのっけ朝食 大盛（762kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 24.6g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                762 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 17.1g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 127.7g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝から炭水化物をしっかり摂取。牛肉・たまご・とろろのタンパク質でバランスも良好。すき家は朝5時から営業なので早朝トレーニング後にも対応。
            </p>
          </div>

          <SubSectionHeading>昼食: やよい軒 しまほっけ定食 + ご飯2杯（約1,131kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 58.7g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                約1,131 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 21.3g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 171.4g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Marker>ご飯おかわり無料</Marker>のやよい軒は増量期の昼食に最適。ほっけは高タンパク低脂質で、ご飯2杯（普通盛の概算）と合わせてクリーンバルクが可能。
            </p>
          </div>

          <SubSectionHeading>夕食: びっくりドンキー ガーリックチキン＆ハンバーグステーキL + ライス（約1,196kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 75.6g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                約1,196 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 48.3g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 112.1g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              チキンとハンバーグのダブルで<Marker color="blue">タンパク質70gを一気に摂取</Marker>。トレーニング後のディナーに最適。ライス（336kcal）を追加して炭水化物も確保。
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-6 mb-6 border border-sky-100">
            <p className="font-bold text-sky-900 mb-2 text-lg">1日トータル</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-sky-600 font-bold text-xl">約3,089</p>
                <p className="text-sky-600 text-xs">kcal</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-blue-600 font-bold text-xl">158.9g</p>
                <p className="text-blue-600 text-xs">タンパク質</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-amber-600 font-bold text-xl">86.7g</p>
                <p className="text-amber-600 text-xs">脂質</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-green-600 font-bold text-xl">411.2g</p>
                <p className="text-green-600 text-xs">炭水化物</p>
              </div>
            </div>
          </div>

          <TipBox title="間食でさらにカロリーアップ">
            <p>
              3,000kcalで足りない場合は、間食にコンビニのおにぎり2個（約360kcal）やプロテインバー（約200kcal）を追加。<Marker color="green">3,500kcal以上も外食＋コンビニで十分達成可能</Marker>です。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            増量期でも避けるべきメニュー
          </SectionHeading>
          <p className="mb-4">
            増量期だからといって何でも食べていいわけではありません。<Marker>脂質が多すぎるメニューは脂肪ばかりが増える原因</Marker>になります。
          </p>

          <WarningBox title="増量期NGメニュー">
            <p className="mb-2">
              <strong>こってり系ラーメン（背脂・豚骨系の大盛り）:</strong> 麺・スープ・トッピングで脂質が非常に多くなりやすく、過剰な脂肪摂取は脂肪蓄積につながりやすい。増量期でも脂質は1食30g以内が理想です。
            </p>
            <p className="mb-2">
              <strong>大盛りポテトフライ（マックフライポテトLで515kcal / F25g）:</strong> ほぼ脂質と炭水化物だけでタンパク質がほとんどない。増量期のカロリー源としては非効率。
            </p>
            <p className="mb-2">
              <strong>甘いスイーツ・ドーナツ:</strong> 砂糖と脂質の同時摂取は、脂肪蓄積を加速させやすいという研究がある。血糖値スパイクも起こしやすく、体脂肪の蓄積を加速させます。
            </p>
            <p>
              <strong>アルコール:</strong> 筋合成を抑制し、テストステロン分泌を低下させます。増量期のトレーニング効果を大幅に減少させるので、できるだけ控えましょう。
            </p>
          </WarningBox>

          <SubSectionHeading>良い増量 vs 悪い増量</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "やよい軒 しまほっけ定食+ご飯2杯", calories: 1131, protein: 58.7, fat: 21.3, carbs: 171.4, highlight: true },
              { name: "松屋 牛焼肉W定食", calories: 1209, protein: 38.4, fat: 80.5, carbs: 88.1 },
              { name: "マクドナルド ビッグマックセット", calories: 1079, protein: 31.6, fat: 47.8, carbs: 131.0 },
            ]}
          />

          <TipBox title="脂質の目安">
            <p>
              ほぼ同じカロリーでも、しまほっけ定食+ご飯2杯は脂質21.3gに対し、松屋の牛焼肉W定食は脂質80.5g。<Marker>脂質の差が体脂肪の蓄積量を左右</Marker>します。カロリーだけでなくPFCバランスを意識しましょう。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop"
          alt="ボリュームのある定食メニュー"
        />

        {/* CTA */}
        <CTABanner
          title="増量期の栄養管理をサポート"
          subtitle="たべなびで外食メニューのPFCバランスを簡単チェック"
        />

        {/* Section 5: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            増量期の外食ガイドの要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "増量期のカロリー目標は体重(kg) x 40〜45kcal",
              "タンパク質は体重 x 2.0〜2.5g、3〜4時間おきに摂取が理想",
              "やよい軒のご飯おかわり無料は増量期最強のシステム",
              "1日3,000kcal・P150gは外食チェーン3食で達成可能",
              "脂質が多すぎるメニュー（こってり系ラーメン、大盛りポテト等）は脂肪増加の原因",
              "クリーンバルクを基本に、必要に応じて高カロリー食品を追加",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※栄養成分は一般的な数値であり、店舗や時期により異なる場合があります。増量期の食事は個人の体格・トレーニング量によって調整してください。
          </p>
        </section>

        {/* Article Footer */}
        <FAQSection
          slug="bulkup-eating-out"
          items={[
            { q: "増量期に必要なカロリーの計算方法は？", a: "体重(kg)×40～45kcalが目安。例えば体重70kgなら1日2800～3150kcal。個人差があるため、実際の体重変化を見ながら調整してください。" },
            { q: "増量期のタンパク質摂取量はどのくらい必要？", a: "体重×2.0～2.5gが推奨。70kgなら1日140～175g。3～4時間おきに30～40gずつ摂取して、筋合成を最大化することが理想です。" },
            { q: "増量期に最適なチェーン店メニューは？", a: "やよい軒のしまほっけ定食（定食単体で631kcal・タンパク質50.7g、ご飯2杯のおかわりで約1131kcal）、びっくりドンキーのガーリックチキン＆ハンバーグステーキL（860kcal・タンパク質70.6g）がおすすめ。高タンパクがポイントです。" },
            { q: "クリーンバルクとダーティバルクの違いは？", a: "クリーンバルクは良質な食材で増量し脂肪を最小限に。ダーティバルクはジャンクフードも含め手軽にカロリーを稼ぎます。おすすめは両者の中間で、基本はクリーンバルク、足りない時だけ高カロリー食を追加する方法。" },
            { q: "増量期に避けるべきメニューは？", a: "こってり系ラーメンや大盛りポテト、松屋の牛焼肉W定食（脂質80.5g）など脂質が過多なメニューは避けるべき。脂質が多すぎると脂肪ばかり増えます。1食で脂質30g前後を目安に選びましょう。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-06-08", note: "32チェーン・6,000品以上に対応拡大。栄養数値を公式データで再検証" },
            { date: "2026-03-23", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="bulkup-eating-out" />

        {/* Back link */}
        <div className="text-center py-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-sky-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </ArticleLayout>
    </div>
  );
}
