import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/daily-meal-plan" },
  title:
    "【2026年最新】外食だけで1日1500kcal！ダイエット食事プラン完全ガイド | たべなび",
  description:
    "外食だけで1日1500kcalに収める具体的な食事プランを5パターン紹介。コンビニ・吉野家・サイゼリヤ・マクドナルドなど、実際のメニュー名とPFC付きで完全解説。",
  keywords: [
    "1500kcal 食事プラン",
    "ダイエット 食事プラン 外食",
    "1日の食事 ダイエット",
    "1500kcal メニュー",
    "外食 ダイエット 1日",
    "カロリー制限 外食",
  ],
  openGraph: {
    title:
      "【2026年最新】外食だけで1日1500kcal！ダイエット食事プラン完全ガイド",
    description:
      "外食だけで1日1500kcalに収める具体的な食事プランを5パターン紹介。実際のメニュー名とPFC付きで完全解説。",
    url: "https://www.tabenavi.jp/guide/daily-meal-plan",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食だけで1日1500kcal！ダイエット食事プラン完全ガイド",
  description:
    "外食だけで1日1500kcalに収める具体的な食事プランを5パターン紹介。実際のメニュー名とPFC付きで完全解説。",
  datePublished: "2026-03-19",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/daily-meal-plan",
};

const tocItems = [
  { id: "why-1500", label: "なぜ1500kcal？男女別の目安と減量ペース" },
  { id: "calorie-split", label: "1食あたりのカロリー配分テクニック" },
  { id: "plan-a", label: "パターンA：コンビニ朝 + 吉野家昼 + サイゼリヤ夜" },
  { id: "plan-b", label: "パターンB：マクドナルド朝 + サブウェイ昼 + 大戸屋夜" },
  { id: "plan-c", label: "パターンC：コンビニ全食（忙しい日）" },
  { id: "plan-d", label: "パターンD：筋トレ日プラン（高タンパク重視）" },
  { id: "plan-e", label: "パターンE：週末リラックスプラン" },
  { id: "ng-patterns", label: "避けるべきNGパターン" },
  { id: "summary", label: "まとめ" },
];

export default function DailyMealPlanPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食だけで1日1500kcal！"
        subtitle="ダイエット食事プラン完全ガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="1日1500kcal食事プラン"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="daily-meal-plan">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="外食だけで1日1,500kcalダイエットは可能？具体的なメニュー例は？"
          answer={
            <>
              <strong>結論: 可能です</strong>。1食あたり<strong>朝350kcal、昼500kcal、夜650kcal</strong>を目安にメニューを選べばOK。例えば<strong>朝: コンビニのおにぎり+ゆで卵+サラダ（350kcal）→ 昼: 吉野家の牛皿（並）+ご飯少なめ（約500kcal）→ 夜: サイゼリヤの若鶏のディアボラ風+サラダ（カロリー控えめに）</strong>。タンパク質は1日100g以上、脂質40g以下を意識。本記事では用途別に5つの具体プランを紹介します。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中でも外食しかできない...」そんな悩みを抱えている方は多いはず。自炊できない環境でも、<Marker>メニュー選びさえ間違えなければ1日1500kcalは十分実現可能</Marker>です。
        </p>
        <p className="mb-4">
          この記事では、コンビニ・牛丼チェーン・ファミレス・ファストフードなど<Marker color="blue">実在する店舗の具体的なメニュー名</Marker>を使って、1日1500kcalの食事プランを5パターン紹介します。すべてのプランにPFC（タンパク質・脂質・炭水化物）の内訳つき。
        </p>
        <p className="mb-8">
          明日からすぐに実践できる、外食ダイエッターのための完全ガイドです。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ─── Section 1: なぜ1500kcal ─── */}
        <SectionHeading id="why-1500">なぜ1500kcal？男女別の目安と減量ペース</SectionHeading>

        <p className="mb-4">
          ダイエットの基本は「消費カロリー &gt; 摂取カロリー」。では、なぜ1500kcalが一つの目安になるのでしょうか。
        </p>

        <SubSectionHeading>男女別の基礎代謝と消費カロリー</SubSectionHeading>

        <ComparisonTable
          headers={["", "男性（30代・70kg）", "女性（30代・55kg）"]}
          rows={[
            ["基礎代謝", "約1,530 kcal", "約1,180 kcal"],
            ["1日の消費カロリー（デスクワーク）", "約2,100 kcal", "約1,650 kcal"],
            ["1日の消費カロリー（活動的）", "約2,500 kcal", "約1,950 kcal"],
            ["1500kcal摂取時の不足分", "600〜1,000 kcal", "150〜450 kcal"],
          ]}
        />

        <p className="mb-4">
          脂肪1kgを減らすには約<Marker>7,200kcalの赤字</Marker>が必要です。1日600kcalの赤字を作れば、約12日で1kg減。<Marker color="blue">月に約2〜2.5kgの減量ペース</Marker>が実現できます。
        </p>

        <NumberedList
          items={[
            {
              title: "男性の場合：月2〜2.5kg減が目安",
              body: "デスクワーク中心でも消費カロリーは約2,100kcal。1500kcalに抑えれば1日600kcalの赤字。月に約2.5kgのペースで脂肪が落ちます。",
            },
            {
              title: "女性の場合：月1〜1.5kg減が目安",
              body: "消費カロリーは約1,650kcal。1500kcalでは赤字が150kcalと小さいため、軽い運動を組み合わせると効果的。月1〜1.5kgペースが現実的です。",
            },
            {
              title: "1500kcal未満はリスクあり",
              body: "基礎代謝以下のカロリー制限は筋肉の分解を招きリバウンドの原因に。特に女性は1200kcal未満は避けましょう。",
            },
          ]}
        />

        <WarningBox title="極端なカロリー制限に注意">
          <p>1500kcalは多くの方にとって安全なラインですが、<span className="font-bold">身長が低い女性</span>の場合は基礎代謝に近い値になることも。体重が減らなくなったら1400kcalに下げるのではなく、<span className="font-bold">運動量を増やす</span>方向で調整しましょう。</p>
        </WarningBox>

        {/* ─── Section 2: カロリー配分テクニック ─── */}
        <SectionHeading id="calorie-split">1食あたりのカロリー配分テクニック</SectionHeading>

        <p className="mb-4">
          1日1500kcalを3食に振り分ける場合、いくつかのパターンがあります。自分のライフスタイルに合った配分を選びましょう。
        </p>

        <ComparisonTable
          headers={["配分パターン", "朝食", "昼食", "夕食", "向いている人"]}
          rows={[
            ["均等配分", "500 kcal", "500 kcal", "500 kcal", "規則正しい生活の方"],
            ["夕食重視", "300 kcal", "500 kcal", "700 kcal", "夕食を楽しみたい方"],
            ["昼食重視", "300 kcal", "700 kcal", "500 kcal", "ランチ会食が多い方"],
            ["朝軽め", "200 kcal", "600 kcal", "700 kcal", "朝が忙しい方"],
          ]}
          bestRowIndex={1}
        />

        <TipBox title="おすすめは「夕食重視型」">
          <p><Marker>朝300kcal：昼500kcal：夜700kcal</Marker>の配分が最も続けやすいパターンです。理由は3つ。(1) 朝はコンビニで手軽に済ませられる、(2) 昼は外食チェーンの定食で十分収まる、(3) 夜は友人との食事にも対応しやすい。この記事のプランもこの配分をベースにしています。</p>
        </TipBox>

        <SubSectionHeading>PFC（タンパク質・脂質・炭水化物）の目安</SubSectionHeading>

        <p className="mb-4">
          1500kcalの場合、<Marker color="blue">理想的なPFCバランス</Marker>は以下の通りです。
        </p>

        <ComparisonTable
          headers={["栄養素", "割合", "グラム", "1食あたり目安"]}
          rows={[
            ["タンパク質（P）", "30%", "113g", "約37g"],
            ["脂質（F）", "25%", "42g", "約14g"],
            ["炭水化物（C）", "45%", "169g", "約56g"],
          ]}
        />

        <p className="mb-8">
          特に重要なのは<Marker>タンパク質を最低100g以上</Marker>確保すること。ダイエット中は筋肉の分解を防ぐため、体重1kgあたり1.5〜2gのタンパク質が必要です。以下のプランではすべてP100g以上を確保しています。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=400&fit=crop"
          alt="サラダチキンやゆで卵など栄養バランスの良い朝食メニュー"
        />

        <AffiliateProductGrid
          title="計画と計測を支える3点セット"
          productIds={["tanita-scale", "ultora-whey", "shaker-bottle"]}
        />

        {/* ─── Section 3: パターンA ─── */}
        <SectionHeading id="plan-a">パターンA：コンビニ朝 + 吉野家昼 + サイゼリヤ夜</SectionHeading>

        <p className="mb-6">
          最もバランスが良く、初心者におすすめの王道パターン。<Marker>朝はコンビニで手軽に、昼は吉野家でガッツリ、夜はサイゼリヤでヘルシー</Marker>に。
        </p>

        <SubSectionHeading>朝食：セブンイレブン（約327kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "たんぱく質が摂れる鶏むね肉サラダ", calories: 199, protein: 21.8, fat: 10.9, carbs: 4.4, highlight: true },
            { name: "味付きゆで卵（2個・コンビニ各社）", calories: 128, protein: 12.4, fat: 8.6, carbs: 0.8 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="朝食合計"
          chain="セブンイレブン"
          calories={327}
          protein={34.2}
          fat={19.5}
          carbs={5.2}
          price={500}
        />

        <SubSectionHeading>昼食：吉野家（約474kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "牛丼（並）", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2 },
            { name: "牛丼（小盛）", calories: 474, protein: 15.4, fat: 19.6, carbs: 60.9, highlight: true },
          ]}
          highlightProtein
        />

        <p className="mb-4">
          ポイントは<Marker>並盛ではなく「小盛」</Marker>を選ぶこと。ご飯の量が減るので約160kcalカットできます。
        </p>

        <NutritionCard
          name="昼食：牛丼（小盛）"
          chain="吉野家"
          calories={474}
          protein={15.4}
          fat={19.6}
          carbs={60.9}
          price={398}
        />

        <SubSectionHeading>夕食：サイゼリヤ（約889kcal）</SubSectionHeading>

        <ComparisonTable
          headers={["メニュー", "カロリー", "価格"]}
          rows={[
            ["若鶏のディアボラ風", "683 kcal", "¥500"],
            ["柔らか青豆の温サラダ", "206 kcal", "¥200"],
            ["夕食合計", "889 kcal", "¥700"],
          ]}
          bestRowIndex={2}
        />

        <WarningBox title="サイゼリヤのPFCについて">
          <p>サイゼリヤは公式にタンパク質・脂質・炭水化物（PFC）の数値を公開していないため、本記事では<span className="font-bold">カロリーのみ</span>を掲載しています。若鶏のディアボラ風は鶏もも肉のグリルで高タンパクが期待できますが、油も使われるため<span className="font-bold">カロリーは683kcalと高め</span>。夜に選ぶ場合はご飯やパンを足さず、サラダと組み合わせるのがおすすめです。</p>
        </WarningBox>

        <SubSectionHeading>パターンAの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（コンビニ）", "327 kcal", "34.2g", "19.5g", "5.2g", "¥500"],
            ["昼食（吉野家）", "474 kcal", "15.4g", "19.6g", "60.9g", "¥398"],
            ["夕食（サイゼリヤ）", "889 kcal", "—", "—", "—", "¥700"],
            ["1日合計", "1,690 kcal", "—", "—", "—", "¥1,598"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="パターンAのポイント">
          <p><Marker>1日合計は約1,690kcal</Marker>で、予算は1,598円。朝のコンビニ高タンパクサラダとゆで卵だけでタンパク質を約34g確保できます。サイゼリヤはPFC非公開のため夕食のP/F/Cは表記していませんが、若鶏のディアボラ風は683kcalと高めなので、<span className="font-bold">夕食のサラダはドレッシング控えめ、昼の牛丼は小盛</span>でカロリーを調整するのがコツです。</p>
        </TipBox>

        {/* ─── Section 4: パターンB ─── */}
        <SectionHeading id="plan-b">パターンB：マクドナルド朝 + サブウェイ昼 + 大戸屋夜</SectionHeading>

        <p className="mb-6">
          マクドナルドの朝マックは実は低カロリー。<Marker>サブウェイの野菜たっぷりサンドイッチで昼を軽く</Marker>、大戸屋で和定食の夕食という組み合わせ。
        </p>

        <SubSectionHeading>朝食：マクドナルド 朝マック（約310kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "エッグマックマフィン", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2, highlight: true },
            { name: "ソーセージマフィン", calories: 397, protein: 15.5, fat: 25.1, carbs: 27.1 },
            { name: "ホットケーキ", calories: 323, protein: 8.3, fat: 9.3, carbs: 53.5 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="朝食：エッグマックマフィン"
          chain="マクドナルド"
          calories={310}
          protein={18.6}
          fat={13.6}
          carbs={27.2}
          price={290}
        />

        <p className="mb-6">
          朝マックの中でも<Marker>エッグマックマフィンは310kcal・P18.6gと優秀</Marker>。ソーセージマフィンは脂質25.1gと高いのでNG。飲み物はブラックコーヒー（数kcal）にしましょう。
        </p>

        <SubSectionHeading>昼食：サブウェイ（約273kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "チリチキン", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7, highlight: true },
            { name: "BLT", calories: 335, protein: 11.3, fat: 14.2, carbs: 41.9 },
            { name: "えびアボカド", calories: 319, protein: 11.9, fat: 12.2, carbs: 41.1 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="昼食：チリチキン（レギュラー）"
          chain="サブウェイ"
          calories={273}
          protein={20.5}
          fat={4.1}
          carbs={39.7}
        />

        <p className="mb-6">
          サブウェイのチリチキンは<Marker color="blue">P20.5gで脂質わずか4.1g</Marker>という驚異的な高タンパク低脂質。ドレッシングは「わさび醤油」や「オイル&ビネガー」を選ぶとカロリーを抑えられます。
        </p>

        <SubSectionHeading>夕食：大戸屋（約612kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "しまほっけの炭火焼き", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
            { name: "もろみチキンの炭火焼き", calories: 802, protein: 42.3, fat: 30.9, carbs: 82.3 },
            { name: "大戸屋風チキン南蛮", calories: 1283, protein: 44.1, fat: 70.8, carbs: 109.6 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="夕食：しまほっけの炭火焼き"
          chain="大戸屋"
          calories={612}
          protein={45.5}
          fat={13.1}
          carbs={79.3}
          recommended
        />

        <SubSectionHeading>パターンBの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（マクドナルド）", "310 kcal", "18.6g", "13.6g", "27.2g", "¥290"],
            ["昼食（サブウェイ）", "273 kcal", "20.5g", "4.1g", "39.7g", "—"],
            ["夕食（大戸屋）", "612 kcal", "45.5g", "13.1g", "79.3g", "—"],
            ["1日合計", "1,195 kcal", "84.6g", "30.8g", "146.2g", "—"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="パターンBのポイント">
          <p><Marker>脂質わずか30.8gという超低脂質プラン</Marker>。1,195kcalと余裕があるので、間食にプロテインシェイク（約120kcal・P24g）を追加するのがおすすめ。タンパク質を100g以上に引き上げられます。大戸屋風チキン南蛮（1,283kcal）は揚げ物で脂質も70g超なので避けましょう。なおサブウェイ・大戸屋は公式に価格を一律で公開していないため、価格は店舗でご確認ください。</p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
          alt="外食チェーンのヘルシーなランチプレート"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="外食メニューのカロリーをすぐ検索"
          subtitle="たべなびなら32チェーン・6,000品以上の栄養データが全部無料"
        />

        {/* ─── Section 5: パターンC ─── */}
        <SectionHeading id="plan-c">パターンC：コンビニ全食（忙しい日）</SectionHeading>

        <p className="mb-6">
          外食する時間すらない忙しい日でも、<Marker>コンビニだけで1500kcal・高タンパクな1日を組み立てられます</Marker>。冷蔵棚のタンパク質食品を活用するのがコツ。
        </p>

        <SubSectionHeading>朝食：コンビニ（約280kcal）</SubSectionHeading>

        <NutritionCard
          name="ギリシャヨーグルト + プロテインバー"
          chain="コンビニ各社"
          calories={278}
          protein={28.5}
          fat={8.2}
          carbs={22.8}
          price={450}
        />

        <NutritionTable
          items={[
            { name: "ギリシャヨーグルト（脂質ゼロ）", calories: 68, protein: 12.0, fat: 0.0, carbs: 5.8, highlight: true },
            { name: "プロテインバー（チョコ）", calories: 210, protein: 16.5, fat: 8.2, carbs: 17.0 },
          ]}
          highlightProtein
        />

        <SubSectionHeading>昼食：コンビニ（約520kcal）</SubSectionHeading>

        <NutritionCard
          name="サラダチキン + おにぎり1個 + サラダ"
          chain="コンビニ各社"
          calories={518}
          protein={35.2}
          fat={6.8}
          carbs={72.4}
          price={620}
        />

        <NutritionTable
          items={[
            { name: "サラダチキン（スモーク）", calories: 118, protein: 25.2, fat: 1.5, carbs: 1.2, highlight: true },
            { name: "おにぎり（鮭）", calories: 182, protein: 5.0, fat: 1.8, carbs: 38.2 },
            { name: "10品目のサラダ", calories: 98, protein: 3.0, fat: 2.5, carbs: 15.0 },
            { name: "ドレッシング（ノンオイル）", calories: 20, protein: 0.0, fat: 0.0, carbs: 5.0 },
            { name: "インスタント味噌汁", calories: 32, protein: 2.0, fat: 1.0, carbs: 4.0 },
          ]}
          highlightProtein
        />

        <SubSectionHeading>夕食：コンビニ（約680kcal）</SubSectionHeading>

        <NutritionCard
          name="サバの塩焼き + 雑穀おにぎり + 豆腐バー + 味噌汁"
          chain="コンビニ各社"
          calories={682}
          protein={42.8}
          fat={22.5}
          carbs={68.2}
          price={850}
          recommended
        />

        <NutritionTable
          items={[
            { name: "サバの塩焼き", calories: 248, protein: 18.5, fat: 18.0, carbs: 2.2, highlight: true },
            { name: "雑穀米おにぎり（わかめ）", calories: 168, protein: 3.8, fat: 1.2, carbs: 35.0 },
            { name: "豆腐バー（枝豆味）", calories: 148, protein: 13.5, fat: 8.8, carbs: 3.5 },
            { name: "カップ味噌汁（しじみ）", calories: 28, protein: 2.0, fat: 0.5, carbs: 3.5 },
            { name: "ほうれん草の胡麻和え", calories: 90, protein: 5.0, fat: 4.0, carbs: 8.0 },
          ]}
          highlightProtein
        />

        <SubSectionHeading>パターンCの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（コンビニ）", "278 kcal", "28.5g", "8.2g", "22.8g", "¥450"],
            ["昼食（コンビニ）", "518 kcal", "35.2g", "6.8g", "72.4g", "¥620"],
            ["夕食（コンビニ）", "682 kcal", "42.8g", "22.5g", "68.2g", "¥850"],
            ["1日合計", "1,478 kcal", "106.5g", "37.5g", "163.4g", "¥1,920"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="コンビニ全食のメリット">
          <p><Marker>タンパク質106.5gを全てコンビニで達成</Marker>できるのは驚異的。サラダチキン・豆腐バー・ギリシャヨーグルトなど、コンビニの高タンパク商品は年々充実しています。脂質37.5gと低脂質なのもポイント。忙しい日の「コンビニ完結プラン」として覚えておきましょう。</p>
        </TipBox>

        <AffiliateProductGrid
          title="コンビニで足りない時の補完アイテム"
          productIds={["inbar-protein", "salada-chicken-pack", "tuna-can", "onebar-protein"]}
        />

        {/* ─── Section 6: パターンD ─── */}
        <SectionHeading id="plan-d">パターンD：筋トレ日プラン（高タンパク重視）</SectionHeading>

        <p className="mb-6">
          筋トレをした日は<Marker>タンパク質を120g以上</Marker>確保したいところ。1500kcalの中で最大限タンパク質を積み上げるプランです。
        </p>

        <SubSectionHeading>朝食：コンビニ（約320kcal）</SubSectionHeading>

        <NutritionCard
          name="鶏むね肉サラダ + ゆで卵2個 + プロテインドリンク"
          chain="コンビニ各社"
          calories={411}
          protein={46.5}
          fat={21.7}
          carbs={12.8}
          price={700}
          recommended
        />

        <NutritionTable
          items={[
            { name: "たんぱく質が摂れる鶏むね肉サラダ（セブン）", calories: 199, protein: 21.8, fat: 10.9, carbs: 4.4, highlight: true },
            { name: "味付きゆで卵（2個・コンビニ各社）", calories: 128, protein: 12.4, fat: 8.6, carbs: 0.8 },
            { name: "プロテインドリンク（コンビニ各社）", calories: 84, protein: 12.3, fat: 2.2, carbs: 3.2, highlight: true },
          ]}
          highlightProtein
        />

        <SubSectionHeading>昼食：松屋（約430kcal）</SubSectionHeading>

        <NutritionCard
          name="鶏そぼろ玉子丼（小盛）"
          chain="松屋"
          calories={430}
          protein={19.6}
          fat={9.2}
          carbs={63.4}
        />

        <SubSectionHeading>夕食：サイゼリヤ（約881kcal）</SubSectionHeading>

        <ComparisonTable
          headers={["メニュー", "カロリー", "価格"]}
          rows={[
            ["若鶏のディアボラ風", "683 kcal", "¥500"],
            ["小エビのサラダ", "198 kcal", "¥350"],
            ["夕食合計", "881 kcal", "¥850"],
          ]}
          bestRowIndex={2}
        />

        <p className="mb-4">
          夕食はサイゼリヤの<Marker color="blue">若鶏のディアボラ風（鶏もも肉のグリル）</Marker>でしっかりタンパク質を確保。ただし<span className="font-bold">サイゼリヤは公式にPFC値を公開していない</span>ため、本記事ではカロリーのみを掲載しています。さらにチキンを足したい場合は辛味チキン（295kcal）を追加できますが、その分カロリーが増える点に注意しましょう。
        </p>

        <SubSectionHeading>パターンDの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（コンビニ）", "411 kcal", "46.5g", "21.7g", "12.8g", "¥700"],
            ["昼食（松屋）", "430 kcal", "19.6g", "9.2g", "63.4g", "—"],
            ["夕食（サイゼリヤ）", "881 kcal", "—", "—", "—", "¥850"],
            ["1日合計", "1,722 kcal", "—", "—", "—", "—"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="筋トレ日のPFCバランス">
          <p>朝食と昼食だけで<Marker>タンパク質は約66g</Marker>を確保。朝のコンビニ高タンパク食材でしっかり積み上げるのがコツです。夕食のサイゼリヤはPFC非公開のためP/F/Cは表記していませんが、若鶏のディアボラ風（鶏もも肉）で追加のタンパク質を補えます。合計は約1,722kcalとやや多めなので、減量中はサラダのドレッシングや昼の丼サイズで微調整しましょう。</p>
        </TipBox>

        {/* ─── Section 7: パターンE ─── */}
        <SectionHeading id="plan-e">パターンE：週末リラックスプラン</SectionHeading>

        <p className="mb-6">
          「週末くらいは好きなもの食べたい」そんな気持ちに応える、<Marker>満足感重視だけど1500kcalに収まるプラン</Marker>です。
        </p>

        <SubSectionHeading>ブランチ：スターバックス（約272kcal）</SubSectionHeading>

        <NutritionCard
          name="ハム＆チーズ 石窯カンパーニュサンド + ブリュードコーヒー"
          chain="スターバックス"
          calories={272}
          protein={18.4}
          fat={13.8}
          carbs={19.0}
        />

        <SubSectionHeading>おやつ：コンビニ（約150kcal）</SubSectionHeading>

        <NutritionCard
          name="ギリシャヨーグルト（ブルーベリー）"
          chain="コンビニ"
          calories={148}
          protein={11.5}
          fat={0.2}
          carbs={24.8}
          price={250}
        />

        <SubSectionHeading>夕食：CoCo壱番屋（約680kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "ポークカレー（ライス200g）", calories: 545, protein: 8.5, fat: 18.0, carbs: 89.8 },
            { name: "チキンカツカレー（ライス200g）", calories: 959, protein: 29.8, fat: 43.4, carbs: 114.5 },
            { name: "ほうれん草カレー（ライス200g）", calories: 556, protein: 10.0, fat: 18.2, carbs: 91.5 },
            { name: "チキンにこみカレー（ライス200g）", calories: 613, protein: 21.9, fat: 19.4, carbs: 91.6, highlight: true },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="夕食：チキンにこみカレー（ライス200g）"
          chain="CoCo壱番屋"
          calories={613}
          protein={21.9}
          fat={19.4}
          carbs={91.6}
          price={520}
          recommended
        />

        <p className="mb-4">
          CoCo壱番屋のポイントは<Marker color="blue">ライスを200gに減量すること</Marker>（標準300g）。これだけでご飯1杯分の約156kcalをカットできます。チキンにこみカレーはP約22gと高タンパクで満足感も抜群です（数値は標準300gの公式値からライス100g分を差し引いて算出）。
        </p>

        <SubSectionHeading>パターンEの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["ブランチ（スタバ）", "272 kcal", "18.4g", "13.8g", "19.0g", "—"],
            ["おやつ（コンビニ）", "148 kcal", "11.5g", "0.2g", "24.8g", "¥250"],
            ["夕食（CoCo壱）", "613 kcal", "21.9g", "19.4g", "91.6g", "¥520"],
            ["1日合計", "1,033 kcal", "51.8g", "33.4g", "135.4g", "—"],
          ]}
          bestRowIndex={3}
        />

        <WarningBox title="週末プランの注意点">
          <p>パターンEは<span className="font-bold">1,033kcalとやや低め</span>で、タンパク質も51.8gと不足気味。週末限定の「リラックス寄りプラン」として使い、<span className="font-bold">間食にプロテインシェイク（120kcal・P24g）を追加</span>してタンパク質を80g以上に引き上げましょう。毎日このプランだと筋肉が落ちるリスクがあります。</p>
        </WarningBox>

        {/* ─── 5パターン比較まとめ ─── */}
        <SubSectionHeading>5パターン比較まとめ</SubSectionHeading>

        <ComparisonTable
          headers={["パターン", "カロリー", "P", "F", "C", "予算", "特徴"]}
          rows={[
            ["A（王道）", "1,690 kcal", "—", "—", "—", "¥1,598", "バランス型※"],
            ["B（低脂質）", "1,195 kcal", "84.6g", "30.8g", "146.2g", "—", "脂質最小"],
            ["C（コンビニ）", "1,478 kcal", "106.5g", "37.5g", "163.4g", "¥1,920", "手軽さ重視"],
            ["D（筋トレ）", "1,722 kcal", "—", "—", "—", "—", "高タンパク※"],
            ["E（週末）", "1,033 kcal", "51.8g", "33.4g", "135.4g", "—", "満足感重視"],
          ]}
          bestRowIndex={2}
        />

        <p className="text-xs text-gray-400 mt-2 mb-6">
          ※サイゼリヤを含むパターンA・Dは、サイゼリヤが公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、PFC合計を「—」としています。価格が「—」のパターンは、サブウェイ・大戸屋・松屋・スターバックスなど一部チェーンが価格を一律公開していないため合計を出していません。
        </p>

        {/* ─── Section 8: NGパターン ─── */}
        <SectionHeading id="ng-patterns">避けるべきNGパターン</SectionHeading>

        <p className="mb-4">
          1500kcalダイエットでよくある失敗パターンを紹介します。<Marker>これらを避けるだけで成功率が大幅にアップ</Marker>します。
        </p>

        <WarningBox title="NG1：朝食抜き + ドカ食いパターン">
          <p>朝食を抜いて昼・夜に集中すると、1食あたりの量が増えて血糖値が急上昇。<span className="font-bold">脂肪が蓄積されやすい体質</span>になります。朝は200〜300kcalでいいので必ず食べましょう。コンビニのゆで卵1個（64kcal）だけでもOK。</p>
        </WarningBox>

        <WarningBox title="NG2：サラダだけ生活">
          <p><span className="font-bold">「サラダなら低カロリーだから安心」は危険</span>。サラダだけではタンパク質が決定的に不足し、筋肉が落ちて基礎代謝が低下。結果的にリバウンドしやすい体になります。必ずタンパク質源（肉・魚・卵・豆腐）をセットで。</p>
        </WarningBox>

        <WarningBox title="NG3：ドリンクのカロリーを無視">
          <p>カフェラテL（約200kcal）、ミルクティー（約180kcal）、フラペチーノ（約400kcal）。<span className="font-bold">飲み物だけで1食分のカロリー</span>を摂取してしまうことも。ダイエット中の飲み物は<span className="font-bold">ブラックコーヒー、お茶、水</span>が基本です。</p>
        </WarningBox>

        <WarningBox title="NG4：「ヘルシーそう」な高カロリー食品">
          <p><span className="font-bold">グラノーラ（1食約220kcal）、アサイーボウル（約400kcal）、スムージー（約300kcal）</span>など、健康的なイメージの食品が実は高カロリーなケースは多い。必ず栄養成分表示を確認する習慣をつけましょう。</p>
        </WarningBox>

        <NumberedList
          items={[
            {
              title: "毎日同じメニューにしない",
              body: "栄養の偏りだけでなく、飽きてドカ食いのリスクが高まります。5パターンをローテーションで回すのがベスト。",
            },
            {
              title: "週1回は体重を測定する",
              body: "毎日の体重変動に一喜一憂するのではなく、週1回の朝一番の体重で判断。2週間で変化がなければプランを見直しましょう。",
            },
            {
              title: "無理な制限は3ヶ月が限度",
              body: "1500kcalダイエットの目安期間は2〜3ヶ月。目標体重に達したら1800〜2000kcalの維持期に移行しましょう。",
            },
          ]}
        />

        <TipBox title="成功のカギは「計画」">
          <p>1500kcalダイエットの成功率を最も高めるのは、<Marker>前日の夜に翌日の3食を決めておくこと</Marker>。「明日の朝はコンビニでサラダチキン、昼は吉野家の牛皿、夜はサイゼのディアボラ」とメモしておくだけで、衝動的な高カロリー食の誘惑に負けにくくなります。</p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="栄養バランスの取れた彩り豊かなディナープレート"
        />

        <AffiliateProductGrid
          title="1日1500kcalプランをラクにするアイテム"
          productIds={["base-food-bread", "ultora-whey", "tanita-scale", "low-carb-noodle"]}
        />

        {/* ─── Section 9: まとめ ─── */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          外食だけでも1日1500kcalのダイエットは十分に実現可能です。この記事のポイントを整理します。
        </p>

        <CheckList
          items={[
            "1500kcalで月2kg減のペース。男性は600kcal/日の赤字、女性は運動を組み合わせると効果的",
            "おすすめの配分は「朝300：昼500：夜700」の夕食重視型",
            "5パターンをローテーションすれば飽きずに継続できる",
            "パターンC（コンビニ）：1,478kcal / P106.5g が最も手軽で高タンパク",
            "パターンB（低脂質）：1,195kcal / P84.6g / 脂質30.8gと低脂質",
            "サイゼリヤなどPFC非公開チェーンはカロリーで管理。グリル系を高タンパク源に活用",
            "タンパク質は最低100g/日を目標に。コンビニの高タンパクサラダ・グリル系を活用",
            "朝食抜き・サラダだけ・ドリンクのカロリー無視はNG",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーン店の公式サイトでご確認ください。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびで今日の外食カロリーをチェック"
          subtitle="32チェーン・6,000品以上の栄養データを無料で検索"
        />

        {/* FAQ */}
        <ServiceOffers tag="diet" heading="献立を考えるのが面倒な日に。宅配食という選択肢" />

        <FAQSection
          slug="daily-meal-plan"
          items={[
            {
              q: "外食だけで本当に1,500kcalダイエットできる？",
              a: "可能です。重要なのは「メニュー選び」と「組み合わせ」の2点。例えば朝にコンビニ朝食（350kcal）、昼に吉野家の牛丼（小盛・474kcal）、夜はサブウェイのチリチキン（273kcal）など低脂質サンドにすれば合計約1,100kcal。さらに間食用にプロテインバー（150kcal）を加えても1,500kcal以下に収まります。サイゼリヤの若鶏のディアボラ風（683kcal）のように、カロリー高めのメニューを選んだ日は他の2食を軽くして調整しましょう。",
            },
            {
              q: "1日1,500kcalは少なすぎませんか？",
              a: "成人女性（運動量低め）の場合、減量期の摂取目安は1,400〜1,600kcal、男性は1,800〜2,000kcal。1,500kcalは「軽めのカロリー赤字」で、無理なく月1〜2kg減量を目指すのに適切なレベルです。極端な低カロリー（1,200kcal以下）は基礎代謝低下を招くので避けましょう。",
            },
            {
              q: "プランの中で一番続けやすいのはどれ？",
              a: "「コンビニ中心プラン」が圧倒的に続けやすいです。理由は①セブン・ローソン・ファミマどこでも実行可能、②30秒で買えて時短、③同じメニューを週3〜4回食べても飽きにくい組み合わせ豊富。最初の1週間はこのプランから始めるのがおすすめです。",
            },
            {
              q: "外食ダイエット中の朝食はどうすべき？",
              a: "朝は「タンパク質+少量の炭水化物」が理想。おすすめは①コンビニ：おにぎり+ゆで卵+高タンパクサラダ（350kcal/P20g前後）、②吉野家：ミニ牛丼（352kcal）、③マクドナルド：エッグマックマフィン+ブラックコーヒー（310kcal/P18.6g）。朝食を抜くより必ず食べる方がリバウンド防止になります。",
            },
            {
              q: "間食やおやつは1,500kcalプランに含めていい？",
              a: "含めて構いませんが、150kcal以下を目安に。プロテインバー（150kcal/P10g）、ゆで卵（80kcal/P6g）、無糖ヨーグルト（100kcal/P10g）、ナッツ少量（150kcal）が優秀。逆に菓子パン（300kcal）、ポテチ1袋（300kcal以上）は1食分のカロリーに匹敵するのでNG。",
            },
            {
              q: "外食でPFCバランスを整えるコツは？",
              a: "①メインは高タンパク（鶏肉、魚、卵、豆腐）を選ぶ、②脂質高めの揚げ物・チーズ・マヨネーズを控えめに、③炭水化物はご飯小盛にする、④野菜を必ず追加する。これら4つを意識するだけで、外食でもP30:F25:C45のバランスに近づきます。",
            },
            {
              q: "週末や外食できない日はどうする？",
              a: "週末は週内の平均でカロリー調整するのがおすすめ。例：平日5日を1,400kcalに抑えれば、週末2日は1,750kcal摂っても週平均1,500kcal。完全な禁欲より「週単位での平均化」の方が継続しやすく、リバウンド防止にも有効です。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-06-08", note: "32チェーン・6,000品以上に対応拡大。栄養数値を公式データで再検証" },
            { date: "2026-05-12", note: "QuickAnswer・FAQ・著者情報を追加。22チェーン2,500メニュー対応" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="daily-meal-plan" />

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
