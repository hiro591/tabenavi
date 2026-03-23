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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
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
    url: "https://tabenavi.jp/guide/bulkup-eating-out",
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
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/bulkup-eating-out",
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
            最終更新: 2026年3月23日 | 読了目安: 9分
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
            増量期最強のチェーン店が<Marker>やよい軒</Marker>です。なぜなら<Marker color="blue">ご飯おかわり無料</Marker>だから。白米を3杯おかわりすれば、それだけで約750kcal・タンパク質15gを追加できます。
          </p>

          <NutritionTable
            items={[
              { name: "しまほっけ定食 + ご飯3杯", calories: 1150, protein: 52.0, fat: 18.5, carbs: 168.0, highlight: true },
              { name: "チキン南蛮定食 + ご飯2杯", calories: 1280, protein: 45.0, fat: 38.5, carbs: 165.0 },
              { name: "すき焼き定食 + ご飯2杯", calories: 1100, protein: 48.0, fat: 28.0, carbs: 145.0 },
              { name: "味噌かつ煮定食 + ご飯2杯", calories: 1320, protein: 42.0, fat: 42.0, carbs: 172.0 },
            ]}
          />

          <TipBox title="やよい軒の増量テクニック">
            <p>
              しまほっけ定食がおすすめの理由は<Marker>高タンパク・低脂質</Marker>だから。魚のタンパク質に加え、ご飯3杯で炭水化物をガッツリ摂取。合計1,150kcal / P52gは増量期の昼食として理想的です。
            </p>
          </TipBox>

          <SubSectionHeading>すき家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛丼 メガ盛り", calories: 1168, protein: 38.5, fat: 52.5, carbs: 128.5, highlight: true },
              { name: "とりそぼろ丼 特盛 + 牛皿", calories: 985, protein: 42.0, fat: 28.0, carbs: 132.0 },
              { name: "まぜのっけごはん朝食 特盛", calories: 820, protein: 28.5, fat: 18.0, carbs: 128.0 },
            ]}
          />

          <SubSectionHeading>松屋</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛焼肉定食 W（ダブル）", calories: 1085, protein: 45.0, fat: 35.0, carbs: 138.0, highlight: true },
              { name: "カルビ焼肉定食", calories: 862, protein: 32.0, fat: 32.5, carbs: 108.0 },
              { name: "牛めし 特盛", calories: 932, protein: 26.5, fat: 32.0, carbs: 125.0 },
            ]}
          />

          <SubSectionHeading>吉野家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛丼 特盛", calories: 1030, protein: 28.0, fat: 38.5, carbs: 135.0, highlight: true },
              { name: "から揚げ定食（4個）", calories: 885, protein: 35.0, fat: 30.0, carbs: 112.0 },
              { name: "鰻重 二枚盛", calories: 910, protein: 38.0, fat: 22.0, carbs: 132.0 },
            ]}
          />

          <SubSectionHeading>その他のおすすめチェーン</SubSectionHeading>

          <RankingCard
            rank={1}
            title="いきなり！ステーキ ワイルドステーキ300g"
            subtitle="高タンパク増量メニューの王道"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">810</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">65.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">45.0g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">35.0g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker>1食でタンパク質65g</Marker>は圧倒的。ライスを追加すれば1,000kcal超え。増量期のディナーに最適です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="CoCo壱 手仕込みチキンカツカレー 400g"
            subtitle="炭水化物ガッツリ増量メニュー"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">1125</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">32.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">38.0g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">155.0g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="blue">1食1,125kcalで炭水化物155g</Marker>。トレーニング後の糖質補給に最適。ライス量は300g〜1,300gまで選べるので増量ペースに合わせて調整可能。
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

          <SubSectionHeading>朝食: すき家 まぜのっけごはん朝食 特盛（820kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 28.5g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                820 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 18.0g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 128.0g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝から炭水化物をしっかり摂取。たまご・納豆・しらすのタンパク質でバランスも良好。すき家は朝5時から営業なので早朝トレーニング後にも対応。
            </p>
          </div>

          <SubSectionHeading>昼食: やよい軒 しまほっけ定食 + ご飯3杯（1,150kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 52.0g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                1,150 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 18.5g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 168.0g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Marker>ご飯おかわり無料</Marker>のやよい軒は増量期の昼食に最適。ほっけは高タンパク低脂質で、ご飯3杯と合わせてクリーンバルクが可能。
            </p>
          </div>

          <SubSectionHeading>夕食: いきなり！ステーキ ワイルドステーキ300g + ライス（1,060kcal）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 70.0g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                1,060 kcal
              </span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                F 48.0g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                C 92.0g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              ステーキ300gで<Marker color="blue">タンパク質70gを一気に摂取</Marker>。トレーニング後のディナーに最適。ライスを追加して炭水化物も確保。
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-6 mb-6 border border-sky-100">
            <p className="font-bold text-sky-900 mb-2 text-lg">1日トータル</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-sky-600 font-bold text-xl">3,030</p>
                <p className="text-sky-600 text-xs">kcal</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-blue-600 font-bold text-xl">150.5g</p>
                <p className="text-blue-600 text-xs">タンパク質</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-amber-600 font-bold text-xl">84.5g</p>
                <p className="text-amber-600 text-xs">脂質</p>
              </div>
              <div className="bg-white rounded-lg py-3 px-4 text-center shadow-sm">
                <p className="text-green-600 font-bold text-xl">388.0g</p>
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
              <strong>ラーメン二郎系（約1,500kcal / F80g）:</strong> 脂質が多すぎて、摂取カロリーの大半が脂肪として蓄積されます。増量期でも脂質は1食30g以内が理想。
            </p>
            <p className="mb-2">
              <strong>大盛りポテトフライ（約500kcal / F25g）:</strong> ほぼ脂質と炭水化物だけでタンパク質がほとんどない。増量期のカロリー源としては非効率。
            </p>
            <p className="mb-2">
              <strong>甘いスイーツ・ドーナツ:</strong> 砂糖と脂質の組み合わせは最も脂肪になりやすい。血糖値スパイクも起こしやすく、体脂肪の蓄積を加速させます。
            </p>
            <p>
              <strong>アルコール:</strong> 筋合成を抑制し、テストステロン分泌を低下させます。増量期のトレーニング効果を大幅に減少させるので、できるだけ控えましょう。
            </p>
          </WarningBox>

          <SubSectionHeading>良い増量 vs 悪い増量</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "やよい軒 しまほっけ定食+ご飯3杯", calories: 1150, protein: 52.0, fat: 18.5, carbs: 168.0, highlight: true },
              { name: "ラーメン二郎 大（脂マシ）", calories: 1520, protein: 55.0, fat: 80.0, carbs: 145.0 },
              { name: "マクドナルド ビッグマックセット", calories: 1085, protein: 28.0, fat: 48.0, carbs: 132.0 },
            ]}
          />

          <TipBox title="脂質の目安">
            <p>
              同じ1,150kcalでも、しまほっけ定食は脂質18.5gに対し、ビッグマックセットは脂質48g。<Marker>脂質の差が体脂肪の蓄積量を左右</Marker>します。カロリーだけでなくPFCバランスを意識しましょう。
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
              "脂質が多すぎるメニュー（ラーメン二郎系、ポテト等）は脂肪増加の原因",
              "クリーンバルクを基本に、必要に応じて高カロリー食品を追加",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※栄養成分は一般的な数値であり、店舗や時期により異なる場合があります。増量期の食事は個人の体格・トレーニング量によって調整してください。
          </p>
        </section>

        {/* Article Footer */}
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
