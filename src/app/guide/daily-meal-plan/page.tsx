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
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
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
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
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
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月19日</p>
        <AffiliateDisclosure />

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

        <SubSectionHeading>朝食：セブンイレブン（約310kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 1.0, highlight: true },
            { name: "味付きゆで卵（2個）", calories: 128, protein: 12.4, fat: 8.6, carbs: 0.8 },
            { name: "野菜スティック", calories: 68, protein: 1.5, fat: 3.2, carbs: 8.4 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="朝食合計"
          chain="セブンイレブン"
          calories={310}
          protein={38.0}
          fat={13.0}
          carbs={10.2}
          price={650}
        />

        <SubSectionHeading>昼食：吉野家（約530kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "牛丼（並盛）", calories: 635, protein: 22.0, fat: 22.4, carbs: 89.0 },
            { name: "牛皿（並盛）＋ライスS", calories: 528, protein: 20.5, fat: 20.2, carbs: 62.8, highlight: true },
          ]}
          highlightProtein
        />

        <p className="mb-4">
          ポイントは<Marker>牛丼ではなく「牛皿 + ライスS」</Marker>を注文すること。ご飯の量を減らせるので約100kcalカットできます。
        </p>

        <NutritionCard
          name="昼食：牛皿（並）+ ライスS"
          chain="吉野家"
          calories={528}
          protein={20.5}
          fat={20.2}
          carbs={62.8}
          price={487}
        />

        <SubSectionHeading>夕食：サイゼリヤ（約618kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "若鶏のグリル（ディアボラ風）", calories: 480, protein: 35.2, fat: 30.5, carbs: 12.8, highlight: true },
            { name: "柔らか青豆の温サラダ", calories: 138, protein: 5.8, fat: 9.2, carbs: 8.5 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="夕食：若鶏のグリル + 青豆サラダ"
          chain="サイゼリヤ"
          calories={618}
          protein={41.0}
          fat={39.7}
          carbs={21.3}
          price={700}
          recommended
        />

        <SubSectionHeading>パターンAの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（コンビニ）", "310 kcal", "38.0g", "13.0g", "10.2g", "¥650"],
            ["昼食（吉野家）", "528 kcal", "20.5g", "20.2g", "62.8g", "¥487"],
            ["夕食（サイゼリヤ）", "618 kcal", "41.0g", "39.7g", "21.3g", "¥700"],
            ["1日合計", "1,456 kcal", "99.5g", "72.9g", "94.3g", "¥1,837"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="パターンAのポイント">
          <p><Marker>1日合計1,456kcal・タンパク質99.5g</Marker>で、予算は1,837円。朝のサラダチキンでタンパク質を稼ぎ、夜のサイゼリヤでさらに上乗せするのがコツ。50kcalほど余裕があるので、間食にプロテインバー（約100kcal）を追加しても1500kcal台に収まります。</p>
        </TipBox>

        {/* ─── Section 4: パターンB ─── */}
        <SectionHeading id="plan-b">パターンB：マクドナルド朝 + サブウェイ昼 + 大戸屋夜</SectionHeading>

        <p className="mb-6">
          マクドナルドの朝マックは実は低カロリー。<Marker>サブウェイの野菜たっぷりサンドイッチで昼を軽く</Marker>、大戸屋で和定食の夕食という組み合わせ。
        </p>

        <SubSectionHeading>朝食：マクドナルド 朝マック（約305kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "エッグマックマフィン", calories: 305, protein: 19.2, fat: 13.5, carbs: 27.0, highlight: true },
            { name: "ソーセージマフィン", calories: 393, protein: 15.5, fat: 24.8, carbs: 26.8 },
            { name: "ホットケーキ", calories: 322, protein: 7.5, fat: 8.8, carbs: 55.2 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="朝食：エッグマックマフィン"
          chain="マクドナルド"
          calories={305}
          protein={19.2}
          fat={13.5}
          carbs={27.0}
          price={200}
        />

        <p className="mb-6">
          朝マックの中でも<Marker>エッグマックマフィンは305kcal・P19.2gと優秀</Marker>。ソーセージマフィンは脂質24.8gと高いのでNG。飲み物はブラックコーヒー（6kcal）にしましょう。
        </p>

        <SubSectionHeading>昼食：サブウェイ（約310kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "ローストチキン（小麦）", calories: 282, protein: 22.0, fat: 4.0, carbs: 42.8, highlight: true },
            { name: "BLT（小麦）", calories: 318, protein: 15.5, fat: 9.8, carbs: 42.4 },
            { name: "えびアボカド（小麦）", calories: 330, protein: 13.5, fat: 10.2, carbs: 45.0 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="昼食：ローストチキン（レギュラー）"
          chain="サブウェイ"
          calories={282}
          protein={22.0}
          fat={4.0}
          carbs={42.8}
          price={490}
        />

        <p className="mb-6">
          サブウェイは<Marker color="blue">野菜たっぷりで脂質がわずか4.0g</Marker>と驚異的な低脂質。ドレッシングは「わさび醤油」や「オイル&ビネガー」を選ぶとカロリーを抑えられます。
        </p>

        <SubSectionHeading>夕食：大戸屋（約680kcal）</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "しまほっけの炭火焼き定食", calories: 602, protein: 38.5, fat: 18.2, carbs: 68.0 },
            { name: "鶏むね肉の塩麹漬け焼き定食", calories: 678, protein: 42.2, fat: 16.8, carbs: 72.5, highlight: true },
            { name: "大戸屋風チキン南蛮定食", calories: 892, protein: 32.5, fat: 38.2, carbs: 98.0 },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="夕食：鶏むね肉の塩麹漬け焼き定食"
          chain="大戸屋"
          calories={678}
          protein={42.2}
          fat={16.8}
          carbs={72.5}
          price={990}
          recommended
        />

        <SubSectionHeading>パターンBの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（マクドナルド）", "305 kcal", "19.2g", "13.5g", "27.0g", "¥200"],
            ["昼食（サブウェイ）", "282 kcal", "22.0g", "4.0g", "42.8g", "¥490"],
            ["夕食（大戸屋）", "678 kcal", "42.2g", "16.8g", "72.5g", "¥990"],
            ["1日合計", "1,265 kcal", "83.4g", "34.3g", "142.3g", "¥1,680"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="パターンBのポイント">
          <p><Marker>脂質わずか34.3gという超低脂質プラン</Marker>。1,265kcalと余裕があるので、間食にプロテインシェイク（約120kcal・P24g）を追加するのがおすすめ。タンパク質を100g以上に引き上げられます。大戸屋のチキン南蛮定食（892kcal）は揚げ物なので避けましょう。</p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
          alt="外食チェーンのヘルシーなランチプレート"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="外食メニューのカロリーをすぐ検索"
          subtitle="たべなびなら20チェーン・500メニューの栄養データが全部無料"
        />

        {/* ─── Section 5: パターンC ─── */}
        <SectionHeading id="plan-c">パターンC：コンビニ全食（忙しい日）</SectionHeading>

        <p className="mb-6">
          外食する時間すらない忙しい日でも、<Marker>コンビニだけで1500kcal・高タンパクな1日を組み立てられます</Marker>。冷蔵棚のタンパク質食品を活用するのがコツ。
        </p>

        <SubSectionHeading>朝食：コンビニ（約280kcal）</SubSectionHeading>

        <NutritionCard
          name="ギリシャヨーグルト + プロテインバー"
          chain="セブンイレブン"
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
          name="サラダチキン + ゆで卵2個 + プロテインドリンク"
          chain="セブンイレブン"
          calories={322}
          protein={48.5}
          fat={11.8}
          carbs={5.2}
          price={700}
          recommended
        />

        <NutritionTable
          items={[
            { name: "サラダチキン（ハーブ）", calories: 110, protein: 23.8, fat: 1.0, carbs: 1.2, highlight: true },
            { name: "味付きゆで卵（2個）", calories: 128, protein: 12.4, fat: 8.6, carbs: 0.8 },
            { name: "プロテインドリンク（ザバス）", calories: 84, protein: 12.3, fat: 2.2, carbs: 3.2, highlight: true },
          ]}
          highlightProtein
        />

        <SubSectionHeading>昼食：松屋（約520kcal）</SubSectionHeading>

        <NutritionCard
          name="鶏の甘辛味噌定食（ミニ盛）"
          chain="松屋"
          calories={518}
          protein={32.5}
          fat={14.2}
          carbs={58.8}
          price={650}
        />

        <SubSectionHeading>夕食：サイゼリヤ（約620kcal）</SubSectionHeading>

        <NutritionCard
          name="若鶏のグリル + 小エビのサラダ + 辛味チキン"
          chain="サイゼリヤ"
          calories={610}
          protein={59.8}
          fat={36.5}
          carbs={21.2}
          price={950}
          recommended
        />

        <NutritionTable
          items={[
            { name: "若鶏のグリル（ディアボラ風）", calories: 480, protein: 35.2, fat: 30.5, carbs: 12.8, highlight: true },
            { name: "辛味チキン（3本）", calories: 218, protein: 16.5, fat: 12.8, carbs: 9.2 },
            { name: "小エビのサラダ（ドレッシングなし）", calories: 82, protein: 8.1, fat: 3.2, carbs: 5.2 },
          ]}
          highlightProtein
        />

        <p className="mb-4">
          夕食の注目点は<Marker color="blue">サイゼリヤでタンパク質59.8gという驚異的な数値</Marker>。若鶏のグリルと辛味チキンのダブルチキンがカギです。
        </p>

        <SubSectionHeading>パターンDの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["朝食（コンビニ）", "322 kcal", "48.5g", "11.8g", "5.2g", "¥700"],
            ["昼食（松屋）", "518 kcal", "32.5g", "14.2g", "58.8g", "¥650"],
            ["夕食（サイゼリヤ）", "610 kcal", "59.8g", "36.5g", "21.2g", "¥950"],
            ["1日合計", "1,450 kcal", "140.8g", "62.5g", "85.2g", "¥2,300"],
          ]}
          bestRowIndex={3}
        />

        <TipBox title="筋トレ日のPFCバランス">
          <p><Marker>タンパク質140.8gで1,450kcal</Marker>。体重70kgの人なら体重1kgあたり2gのタンパク質を確保でき、筋肥大に最適なバランスです。炭水化物が85.2gとやや少なめなので、トレーニング前にバナナ（約90kcal・C22g）を追加するのも良いでしょう。</p>
        </TipBox>

        {/* ─── Section 7: パターンE ─── */}
        <SectionHeading id="plan-e">パターンE：週末リラックスプラン</SectionHeading>

        <p className="mb-6">
          「週末くらいは好きなもの食べたい」そんな気持ちに応える、<Marker>満足感重視だけど1500kcalに収まるプラン</Marker>です。
        </p>

        <SubSectionHeading>ブランチ：スターバックス（約380kcal）</SubSectionHeading>

        <NutritionCard
          name="ハム&エッグ ホットサンド + ドリップコーヒー"
          chain="スターバックス"
          calories={378}
          protein={16.2}
          fat={14.8}
          carbs={42.5}
          price={780}
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
            { name: "ポークカレー（普通盛・ライス200g）", calories: 548, protein: 15.2, fat: 14.5, carbs: 88.2 },
            { name: "手仕込チキンカツカレー（ライス200g）", calories: 782, protein: 28.5, fat: 28.2, carbs: 102.5 },
            { name: "ほうれん草カレー（ライス200g）", calories: 582, protein: 16.8, fat: 16.0, carbs: 90.5 },
            { name: "チキンにこみカレー（ライス200g）", calories: 672, protein: 32.0, fat: 18.5, carbs: 92.2, highlight: true },
          ]}
          highlightProtein
        />

        <NutritionCard
          name="夕食：チキンにこみカレー（ライス200g）"
          chain="CoCo壱番屋"
          calories={672}
          protein={32.0}
          fat={18.5}
          carbs={92.2}
          price={860}
          recommended
        />

        <p className="mb-4">
          CoCo壱番屋のポイントは<Marker color="blue">ライスを200gに減量すること</Marker>（通常300g）。これだけで約150kcalカット。チキンにこみカレーはP32gと高タンパクで満足感も抜群です。
        </p>

        <SubSectionHeading>パターンEの1日合計</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "カロリー", "P", "F", "C", "価格"]}
          rows={[
            ["ブランチ（スタバ）", "378 kcal", "16.2g", "14.8g", "42.5g", "¥780"],
            ["おやつ（コンビニ）", "148 kcal", "11.5g", "0.2g", "24.8g", "¥250"],
            ["夕食（CoCo壱）", "672 kcal", "32.0g", "18.5g", "92.2g", "¥860"],
            ["1日合計", "1,198 kcal", "59.7g", "33.5g", "159.5g", "¥1,890"],
          ]}
          bestRowIndex={3}
        />

        <WarningBox title="週末プランの注意点">
          <p>パターンEは<span className="font-bold">1,198kcalとやや低め</span>で、タンパク質も59.7gと不足気味。週末限定の「チートデイ寄りプラン」として使い、<span className="font-bold">間食にプロテインシェイク（120kcal・P24g）を追加</span>してタンパク質を80g以上に引き上げましょう。毎日このプランだと筋肉が落ちるリスクがあります。</p>
        </WarningBox>

        {/* ─── 5パターン比較まとめ ─── */}
        <SubSectionHeading>5パターン比較まとめ</SubSectionHeading>

        <ComparisonTable
          headers={["パターン", "カロリー", "P", "F", "C", "予算", "特徴"]}
          rows={[
            ["A（王道）", "1,456 kcal", "99.5g", "72.9g", "94.3g", "¥1,837", "バランス型"],
            ["B（低脂質）", "1,265 kcal", "83.4g", "34.3g", "142.3g", "¥1,680", "脂質最小"],
            ["C（コンビニ）", "1,478 kcal", "106.5g", "37.5g", "163.4g", "¥1,920", "手軽さ重視"],
            ["D（筋トレ）", "1,450 kcal", "140.8g", "62.5g", "85.2g", "¥2,300", "P最大"],
            ["E（週末）", "1,198 kcal", "59.7g", "33.5g", "159.5g", "¥1,890", "満足感重視"],
          ]}
          bestRowIndex={2}
        />

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
            "パターンA（王道）：1,456kcal / P99.5g / ¥1,837",
            "パターンC（コンビニ）：1,478kcal / P106.5g が最も手軽",
            "パターンD（筋トレ）：1,450kcal / P140.8g で筋肥大にも対応",
            "タンパク質は最低100g/日を目標に。サラダチキン・グリル系を活用",
            "朝食抜き・サラダだけ・ドリンクのカロリー無視はNG",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーン店の公式サイトでご確認ください。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびで今日の外食カロリーをチェック"
          subtitle="20チェーン・500メニューの栄養データを無料で検索"
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
