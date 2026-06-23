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
  NumberedList,
  CheckList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/lawson-diet" },
  title:
    "【2026年最新】ローソンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング | たべなび",
  description:
    "ローソンでダイエット中に選びやすい低カロリー・高タンパク商品をランキング形式で紹介。NL ブランパンなど低糖質商品の活用法、朝昼晩のおすすめ組み合わせも解説。たべなびのDB実値（2026年6月）に基づく。",
  keywords: [
    "ローソン ダイエット",
    "ローソン 低カロリー",
    "ローソン 高タンパク",
    "ローソン ブランパン",
    "ローソン ダイエット おすすめ",
    "コンビニ ダイエット ローソン",
    "ローソン 糖質制限",
  ],
  openGraph: {
    title:
      "【2026年最新】ローソンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
    description:
      "ローソンの低カロリー・高タンパク商品を徹底解説。NL ブランパンなど低糖質商品の活用法、朝昼晩の組み合わせプランも紹介。",
    url: "https://www.tabenavi.jp/guide/lawson-diet",
    type: "article",
  },
};

/**
 * Static, trusted JSON-LD structured data for SEO.
 * All values below are hardcoded string literals authored by developers.
 * No user-generated or dynamic content is interpolated into this object.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ローソンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
  description:
    "ローソンでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。",
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split("T")[0],
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/lawson-diet",
};

const tocItems = [
  { id: "why-lawson", label: "ローソンがダイエットに最適な理由" },
  { id: "low-calorie", label: "低カロリー商品TOP10" },
  { id: "high-protein", label: "高タンパク商品TOP5" },
  { id: "meal-plans", label: "朝昼晩のおすすめ組み合わせ" },
  { id: "low-carb", label: "低糖質商品の活用法" },
  { id: "avoid", label: "避けるべき商品" },
  { id: "summary", label: "まとめ" },
];

export default function LawsonDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data — all values are static developer-authored strings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ローソンダイエット完全ガイド"
        subtitle="低カロリー＆高タンパク商品ランキング【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
        breadcrumb="ローソンダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="lawson-diet">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 11分
          </p>
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="ローソンでダイエット中におすすめは？低糖質パンと高タンパク商品の定番は？"
          answer={
            <>
              <strong>ローソンの強みは「NL（ナチュラルローソン）たんぱく質が摂れるブランパン」「たんぱく質が摂れるサラダシリーズ」「焼き鳥・グリルチキン系のホットスナック」</strong>。低糖質パン派なら<strong>NL たんぱく質が摂れるブランパン 2個入（66kcal/P6.1g/炭水化物6.1g）</strong>、高タンパク派なら<strong>たんぱく質が摂れる 国産鶏むね肉のサラダ（206kcal/P23.1g）</strong>や<strong>若鶏の砂肝にんにく（160kcal/P21.4g）</strong>が定番。1食300kcal台でP20g超の組み合わせが作りやすいのが特長です。416商品（2026年6月時点）のラインナップで選択肢が豊富です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          全国に多数の店舗を展開するローソン。実は<Marker>炭水化物を控えたい人に向いた商品が多いコンビニ</Marker>であることをご存知ですか？ナチュラルローソン（NL）の低糖質パンラインナップが、ローソンの強みのひとつです。
        </p>
        <p className="mb-4">
          NL たんぱく質が摂れるブランパンをはじめとするブランパンシリーズは<Marker color="blue">炭水化物を抑えた</Marker>商品。さらに「たんぱく質が摂れる」サラダや焼き鳥系のホットスナックも含めると、ダイエット中に選びやすい商品が揃っています。
        </p>
        <p className="mb-10">
          この記事では、ローソンで買える低カロリー商品TOP10と高タンパク商品TOP5をランキング形式で紹介し、朝昼晩の組み合わせプランや低糖質商品の活用法も詳しく解説します。掲載数値はたべなびのデータベース実値（416商品・2026年6月時点）に基づきます。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
          alt="コンビニの商品棚のイメージ写真"
        />

        {/* Section 1: ローソンがダイエットに最適な理由 */}
        <section className="mb-16">
          <SectionHeading id="why-lawson">
            ローソンがダイエットに最適な理由
          </SectionHeading>

          <NumberedList
            items={[
              {
                title: "「NL（ナチュラルローソン）」低糖質パンの品揃え",
                body: "ローソンは健康志向のPBブランド「ナチュラルローソン（NL）」で低糖質パンを多数展開。NL たんぱく質が摂れるブランパン 2個入は炭水化物6.1g・66kcal、NL たんぱく質が摂れるブラン入り食パン 4枚入は炭水化物16g・104kcalと、低糖質パンの選択肢が豊富です。",
              },
              {
                title: "「たんぱく質が摂れる」サラダシリーズ",
                body: "「たんぱく質が摂れる 国産鶏むね肉のサラダ」（206kcal/P23.1g）や「たんぱく質が摂れる 国産豚肉のサラダ」（284kcal/P16.8g）など、1品でタンパク質20g前後が摂れるサラダがラインナップ。野菜とタンパク質を同時に補給できます。",
              },
              {
                title: "全商品の栄養成分表示",
                body: "ローソンは全商品にカロリー・タンパク質・脂質・炭水化物を表示。たべなび上でも416商品分の数値を確認でき、商品選びがしやすいコンビニです。",
              },
              {
                title: "焼き鳥・グリルチキン系のホットスナック",
                body: "「若鶏の砂肝にんにく」（160kcal/P21.4g）や「グリルチキン串」（113kcal/P9.9g）、「直火焼鳥 もも塩＆やげん軟骨」（125kcal/P14g）など、温かいホットスナックで高タンパクが摂れる商品が揃っています。",
              },
            ]}
          />

          <TipBox title="ローソンアプリのお試し引換券を活用">
            <p>
              ローソンアプリの「お試し引換券」を使えば、<Marker color="green">Pontaポイントやdポイントで商品を格安交換</Marker>できることがあります。低糖質パンやホットスナックが対象になることもあるので、こまめにチェックしましょう。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリー商品TOP10 */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            ローソン低カロリー商品TOP10
          </SectionHeading>
          <p className="mb-6">
            ローソンで買える<Marker>200kcal以下の低カロリー商品</Marker>をランキング。ダイエット中のランチや間食に最適な商品を厳選しました。
          </p>

          <NutritionTable
            items={[
              { name: "1位: ローストチキンのサラダ", calories: 65, protein: 8.8, fat: 1.8, carbs: 4.3, highlight: true },
              { name: "2位: NL たんぱく質が摂れるブランパン 2個入", calories: 66, protein: 6.1, fat: 2.8, carbs: 6.1, highlight: true },
              { name: "3位: ガーリック香る砂肝焼", calories: 76, protein: 14.1, fat: 1.5, carbs: 1.6, highlight: true },
              { name: "4位: 煮たまご", calories: 78, protein: 6.5, fat: 5.5, carbs: 0.6 },
              { name: "5位: 子持ちししゃも", calories: 88, protein: 8.7, fat: 5.7, carbs: 0.5 },
              { name: "6位: 食物繊維が摂れる 豆腐とひじきの和風サラダ", calories: 95, protein: 5.4, fat: 4.4, carbs: 10.6 },
              { name: "7位: 縞ほっけの塩焼", calories: 106, protein: 12.5, fat: 6.2, carbs: 0 },
              { name: "8位: 銀鮭の西京焼", calories: 111, protein: 10.7, fat: 6.0, carbs: 3.7 },
              { name: "9位: 塩ゆで枝豆", calories: 111, protein: 9.0, fat: 5.3, carbs: 7.4 },
              { name: "10位: グリルチキン串", calories: 113, protein: 9.9, fat: 5.7, carbs: 5.8 },
            ]}
          />

          <TipBox title="NL ブランパンが低カロリーな理由">
            <p>
              NL たんぱく質が摂れるブランパンは小麦の外皮（ブラン/ふすま）を使用したパンで、<Marker>2個入で66kcal・炭水化物6.1g</Marker>と低カロリー・低炭水化物。1個あたりタンパク質も約3gと栄養価が高く、糖質を控えたい主食代替として活用できます。国産小麦のバターロール 4個入（95kcal/炭水化物14.8g）と比べても炭水化物が少なめです。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1606168094336-48f205276929?w=800&h=400&fit=crop"
          alt="高タンパクな鶏むね肉のグリル料理"
        />

        {/* Section 3: 高タンパク商品TOP5 */}
        <section className="mb-16">
          <SectionHeading id="high-protein">
            ローソン高タンパク商品TOP5
          </SectionHeading>
          <p className="mb-6">
            ダイエット中でも筋肉を落とさないために、<Marker>タンパク質15g以上の商品</Marker>を厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="鶏の炭火焼き3種盛り"
            subtitle="炭火焼の高タンパクおつまみ"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">303</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">27.2g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">15.3g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">15.1g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              ローソンの高タンパク商品の中でも<Marker>1品でタンパク質27.2g</Marker>とトップクラス。炭火焼の香ばしさで満足感も高く、しっかりタンパク質を補給したい日のメインになります。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="たんぱく質が摂れる 国産鶏むね肉のサラダ"
            subtitle="野菜も一緒に"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">206</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">23.1g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">11.0g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">4.9g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="green">タンパク質23.1gと野菜が同時に摂れる</Marker>のが最大の強み。炭水化物も4.9gと控えめで、ランチのメインとして優秀です。ドレッシングを別添えにすればカロリーコントロールもしやすくなります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="若鶏の砂肝にんにく"
            subtitle="低脂質・高タンパクのおつまみ"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">160</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">21.4g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">4.9g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">9.0g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="blue">160kcalでタンパク質21.4g・脂質4.9g</Marker>と、低脂質・高タンパクの優等生。コリコリした食感で満足感もあり、夜のおつまみやタンパク質の追加に向いています。
            </p>
          </RankingCard>

          <TipBox title="4~5位もチェック">
            <p className="mb-1">4位: よだれ鶏（P17.9g / 182kcal）- 低脂質でタンパク質をしっかり補給</p>
            <p>5位: パリパリチキン（P16.9g / 180kcal）- 皮目の香ばしさで満足感あり</p>
          </TipBox>

          <p className="mb-4">
            コンビニの高タンパク商品をもっと知りたい方は<Link href="/guide/conveni-protein" className="text-sky-600 hover:text-sky-700 underline">コンビニ高タンパク商品ガイド</Link>も参考にしてください。セブンイレブンの高タンパク商品との比較は<Link href="/guide/seven-eleven-diet" className="text-sky-600 hover:text-sky-700 underline">セブンイレブンダイエットガイド</Link>をどうぞ。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ローソン商品の栄養をサクッと検索"
          subtitle="たべなびならコンビニ商品の栄養成分をすぐに確認できます"
        />

        {/* Section 4: 朝昼晩のおすすめ組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="meal-plans">
            朝昼晩のおすすめ組み合わせ
          </SectionHeading>
          <p className="mb-6">
            ローソンだけで<Marker>1日1,200kcal前後・タンパク質80g以上・炭水化物100g以下</Marker>を目安にするプランを紹介します。低炭水化物とカロリー制限の両方を意識した組み合わせです。
          </p>

          <SubSectionHeading>朝食プラン（約235kcal / P17.5g / 炭水化物14.7g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              NL たんぱく質が摂れるブランパン 2個入 + 煮たまご + カフェラテ(M)
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 17.5g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                235 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                炭水化物 14.7g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              ブランパンの炭水化物は6.1g（2個分）。煮たまごでタンパク質を補い、カフェラテで満足感もプラスできます。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約397kcal / P28g / 炭水化物46.5g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる 国産鶏むね肉のサラダ + 塩昆布と沢庵おにぎり(国産もち麦入り) + 玉ねぎサラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 28.0g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                397 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                炭水化物 46.5g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼はもち麦入りおにぎりで炭水化物も摂取。もち麦は食物繊維が豊富です。鶏むね肉のサラダで高タンパクも確保できます。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約361kcal / P39.3g / 炭水化物19.6g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              若鶏の砂肝にんにく + 食物繊維が摂れる 豆腐とひじきの和風サラダ + 縞ほっけの塩焼
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 39.3g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                361 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                炭水化物 19.6g
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食は炭水化物を控えめに。豆腐とひじきのサラダで食物繊維を、砂肝とほっけの塩焼でタンパク質をしっかり確保。<Marker color="green">361kcalでタンパク質39.3gは優秀</Marker>。
            </p>
          </div>

          <TipBox title="1日トータル">
            <p>
              朝235kcal + 昼397kcal + 夕361kcal = <Marker>合計993kcal / タンパク質84.8g / 炭水化物80.8g</Marker>。間食に塩ゆで枝豆（111kcal）やローストチキンのサラダ（65kcal）を追加しても1,200kcal前後に収まります。低炭水化物もカロリー制限も両立しやすい構成です。
            </p>
          </TipBox>

          <p className="mb-4">
            1日1,500kcalプランの詳細は<Link href="/guide/daily-meal-plan" className="text-sky-600 hover:text-sky-700 underline">1日1500kcalプランガイド</Link>もご活用ください。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="彩り豊かな低糖質サラダプレート"
        />

        {/* Section 5: ロカボ商品の活用法 */}
        <section className="mb-16">
          <SectionHeading id="low-carb">
            低糖質商品の活用法
          </SectionHeading>

          <p className="mb-6">
            ローソンの低糖質（ロカボ）商品は<Marker>炭水化物を抑えたい人の味方</Marker>です。ここでは、カテゴリー別に低糖質商品の特徴と活用法を解説します。
          </p>

          <SubSectionHeading>NL ブランパンシリーズ（パン類）</SubSectionHeading>
          <p className="mb-4">
            ナチュラルローソン（NL）の看板低糖質商品。小麦ブラン（ふすま）を使用し、通常のパンと比べて<Marker color="blue">炭水化物を抑えています</Marker>。
          </p>

          <ComparisonTable
            headers={["商品名", "カロリー", "炭水化物", "タンパク質", "脂質"]}
            rows={[
              ["NL たんぱく質が摂れるブランパン 2個入", "66 kcal", "6.1g", "6.1g", "2.8g"],
              ["NL ブランのハム＆チーズパン 2個入", "78 kcal", "10.9g", "3.3g", "3.8g"],
              ["NL たんぱく質が摂れるブラン入り食パン 4枚入", "104 kcal", "16.0g", "7.2g", "2.1g"],
              ["NL ブランのチーズクリーム＆ダブルベリーパン 2個入", "113 kcal", "13.1g", "4.5g", "6.3g"],
              ["（参考）国産小麦のバターロール 4個入", "95 kcal", "14.8g", "3.0g", "2.8g"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>低カロリースイーツ・パン</SubSectionHeading>
          <p className="mb-4">
            ダイエット中でも甘いものが食べたい。そんなときは<Marker>カロリー控えめのパン・スイーツ</Marker>を選びましょう。1個あたりのカロリーが低い商品を集めました。
          </p>

          <NutritionTable
            items={[
              { name: "紅はるかのおいも蒸しパン 4個入", calories: 85, protein: 1.1, fat: 0.4, carbs: 19.6, highlight: true },
              { name: "もっちりとしたチョコパン 4個入", calories: 97, protein: 1.8, fat: 3.7, carbs: 14.6 },
              { name: "クリームパン 4個入", calories: 112, protein: 2.6, fat: 3.6, carbs: 17.6 },
              { name: "抹茶とホワイトチョコのスコーン 4個入", calories: 114, protein: 1.6, fat: 5.7, carbs: 14.3, highlight: true },
              { name: "フィナンシェ 4個入", calories: 146, protein: 1.6, fat: 8.8, carbs: 15.2 },
            ]}
          />

          <SubSectionHeading>お菓子・おつまみ</SubSectionHeading>
          <p className="mb-4">
            ローソンには、<Marker color="green">1品あたりのカロリーが控えめ</Marker>なお菓子・おつまみもあります。ダイエット中の間食やおつまみに選びやすい商品です。
          </p>

          <NumberedList
            items={[
              {
                title: "チョコチップスナック 6本入（82kcal / 炭水化物13.2g）",
                body: "1袋でも82kcalと控えめなスナック。小腹が空いた時の間食に。食べ過ぎには注意しましょう。",
              },
              {
                title: "塩ゆで枝豆（111kcal / P9.0g / 炭水化物7.4g）",
                body: "タンパク質9gが摂れる定番おつまみ。炭水化物も控えめで、おつまみの代替として優秀です。",
              },
              {
                title: "おつまみメンマ（36kcal / 炭水化物7.4g）",
                body: "36kcalと非常に低カロリー。コリコリした食感で満足感もあり、もう一品ほしいときに便利です。",
              },
            ]}
          />

          <TipBox title="低糖質（NL）商品の見分け方">
            <p>
              ローソンで低糖質パンを探すなら<Marker>「NL（ナチュラルローソン）」表記</Marker>が目印。NL たんぱく質が摂れるブランパンなど、炭水化物を抑えた商品が中心です。糖質制限ダイエットの基本は<Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:text-sky-700 underline">糖質制限x外食ガイド</Link>で詳しく解説しています。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 避けるべき商品 */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            ダイエット中に避けるべきローソン商品
          </SectionHeading>
          <p className="mb-6">
            ローソンにはダイエット向け商品が多い一方で、<Marker>高カロリー・高糖質の要注意商品</Marker>もあります。以下の商品はダイエット中は避けるか、頻度を減らしましょう。
          </p>

          <WarningBox title="ダイエット中は要注意の商品">
            <p className="mb-2">
              <strong>からあげクン ブラックペッパー味など:</strong> 255kcal・脂質18.7g。フレーバーによって脂質が高めなので量に注意。低脂質を狙うなら焼き鳥系のホットスナックへ切り替えを。
            </p>
            <p className="mb-2">
              <strong>Lチキ レギュラー:</strong> 255kcal・脂質16.6g。揚げ衣が厚くカロリー・脂質が高め。高タンパクを狙うなら焼き鳥やグリルチキン串が向いています。
            </p>
            <p className="mb-2">
              <strong>大盛ナポリタン・大盛ソース焼そば:</strong> 700kcal前後、炭水化物100g以上。1食でカロリー・炭水化物ともに大幅オーバー。
            </p>
            <p>
              <strong>ダブルホイップクロワッサン:</strong> 502kcal・脂質28.3g。美味しいですが、ダイエット中のスイーツは低カロリーのパンを選びましょう。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "からあげクン ブラックペッパー味", calories: 255, protein: 13.4, fat: 18.7, carbs: 8.5, highlight: true },
              { name: "Lチキ レギュラー", calories: 255, protein: 13.7, fat: 16.6, carbs: 12.8 },
              { name: "大盛ナポリタン", calories: 728, protein: 28.6, fat: 25.5, carbs: 101.9 },
              { name: "ダブルホイップクロワッサン", calories: 502, protein: 5.6, fat: 28.3, carbs: 57.0 },
            ]}
          />

          <ComparisonTable
            headers={["商品", "NG版", "OK版（代替品）", "カロリー差"]}
            rows={[
              ["ホットスナック", "Lチキ レギュラー(255kcal)", "グリルチキン串(113kcal)", "-142 kcal"],
              ["パン", "ゴロチョコ！メロンパン(407kcal)", "NL ブランパン2個(66kcal)", "-341 kcal"],
              ["スイーツ", "ダブルホイップクロワッサン(502kcal)", "紅はるかのおいも蒸しパン4個(85kcal)", "-417 kcal"],
              ["麺類", "大盛ナポリタン(728kcal)", "豆腐とひじきの和風サラダ(95kcal)", "-633 kcal"],
            ]}
            bestRowIndex={3}
          />
        </section>

        {/* CTA */}
        <CTABanner
          title="ローソンでのダイエット生活を始めよう"
          subtitle="たべなびで賢いメニュー選びをサポートします"
        />

        <AffiliateProductGrid
          title="ローソン通いを置き換える定期便セット"
          productIds={["salada-chicken-pack", "ultora-whey", "onebar-protein", "shaker-bottle"]}
        />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ローソンダイエットの要点を振り返りましょう。
          </p>

          <ArticleSummary
            points={[
              "ローソンはNL（ナチュラルローソン）の低糖質パンが充実",
              "NL たんぱく質が摂れるブランパン 2個入は66kcal・炭水化物6.1gと低糖質パンの定番",
              "たんぱく質が摂れる 国産鶏むね肉のサラダ（206kcal/P23.1g）は高タンパクの王道",
              "焼き鳥・グリルチキン系ホットスナックで温かい高タンパクが摂れる",
              "1食300kcal台でP20g超のプランがローソンだけで実現可能",
              "低カロリーのパン・スイーツも選べば間食も楽しめる",
              "Lチキ・大盛ナポリタン・ダブルホイップクロワッサンはダイエット中は控えめに",
              "お試し引換券で商品をお得に交換できることも",
            ]}
          />

          <p className="mb-4 mt-6">
            ローソンは<Marker>NLの低糖質パンと高タンパクサラダが充実したコンビニ</Marker>です。NL ブランパンシリーズと「たんぱく質が摂れる」サラダを組み合わせるだけで、低カロリー・低炭水化物・高タンパクを意識した食事が作りやすくなります。たべなびを活用して、ローソンでの賢い食事選びを始めましょう。
          </p>

          <p className="mb-4">
            他のコンビニとの比較も気になる方は、<Link href="/guide/seven-eleven-diet" className="text-sky-600 hover:text-sky-700 underline">セブンイレブンダイエットガイド</Link>もぜひチェックしてください。基礎代謝に合ったカロリー設定を知りたい方は<Link href="/guide/bmr-calculator" className="text-sky-600 hover:text-sky-700 underline">基礎代謝計算ガイド</Link>が参考になります。
          </p>

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。最新情報は<a href="https://www.lawson.co.jp/recommend/original/detail/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">ローソン公式オリジナル商品</a>でご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="lawson-diet"
          items={[
            {
              q: "ローソンで一番タンパク質が多い商品は？",
              a: "サラダ・おつまみ系では「たんぱく質が摂れる 国産鶏むね肉のサラダ」（206kcal/P23.1g）や「若鶏の砂肝にんにく」（160kcal/P21.4g）、「鶏の炭火焼き3種盛り」（303kcal/P27.2g）が高タンパク。お弁当・麺類まで含めると、おかズドン！トリプルメンチカツ弁当（P33.7g）や特盛！冷し肉そば（P35.2g）などP30g超の商品もあります。",
            },
            {
              q: "NL ブランパンは本当にダイエットに向く？",
              a: "NL たんぱく質が摂れるブランパン 2個入は66kcal・炭水化物6.1gと低カロリー・低炭水化物。1個あたりタンパク質も約3gと栄養価が高く、炭水化物を控えたい主食代替として活用しやすい商品です。鶏むね肉のサラダと合わせれば、低炭水化物で高タンパクな食事になります。",
            },
            {
              q: "ローソンのおにぎりでダイエット中向きは？",
              a: "手巻おにぎり 熟成紀州南高梅（169kcal/F1g）、だしおにぎり 日高昆布（182kcal/F0.8g）、味付海苔手巻おにぎり 追い鰹製法おかか（171kcal/F0.9g）など梅・昆布・おかか系が低カロリー＆低脂質。大きなおにぎり シーチキン®マヨネーズ（366kcal）など大盛り・マヨ系はカロリー高め。食物繊維を摂りたいなら「国産もち麦入り」シリーズもおすすめです。",
            },
            {
              q: "からあげクンとLチキ、どっちがダイエット向き？",
              a: "両者とも揚げ物ですが、Lチキ レギュラーは255kcal/P13.7g/F16.6g、からあげクン レギュラーは226kcal/P14.4g/F15.4g。からあげクンの方がやや低カロリーです。ただしどちらも脂質が高めなので、低脂質を狙うならグリルチキン串（113kcal/P9.9g/F5.7g）や焼き鳥系の方が向いています。",
            },
            {
              q: "ローソンの低カロリーなパン・スイーツは？",
              a: "紅はるかのおいも蒸しパン 4個入（85kcal）や抹茶とホワイトチョコのスコーン 4個入（114kcal）など、1個あたりのカロリーが控えめな商品が選びやすいです。逆にダブルホイップクロワッサン（502kcal）やゴロチョコ！メロンパン（407kcal）はカロリーが高いので注意。",
            },
            {
              q: "ローソンとセブン、どっちがダイエットに向いてる？",
              a: "目的次第です。低糖質パンを重視するならローソン（NL ブランパンが充実）、商品の選択肢の多さならセブン。最強は「両方使い分け」。たべなびで両店の商品を一括比較できます。",
            },
            {
              q: "ナチュラルローソン（NL）とは？",
              a: "ローソンの健康志向ブランド。一般のローソン店舗にも一部商品が並んでいます。NL たんぱく質が摂れるブランパンやブラン入り食パンなど、炭水化物を抑えた低糖質パンが中心。たべなび上でも「NL」表記の商品で栄養数値を確認できます。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "ローソン416商品のDB実値と全数値・商品名を突合。実在しない商品（サラダチキン・ブランパン2個入の旧表記・豆腐バー・こんにゃく麺サラダ・ゼロカロリーゼリー等）を実在商品へ差替え、ランキング・組み合わせプラン・FAQ・まとめを実値で再構成。糖質断定はDBに項目がないため炭水化物基準へ変更" },
            { date: "2026-05-13", note: "ローソン416商品の最新栄養データに更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-25", note: "初稿公開" },
          ]}
        />

        {/* Article Footer */}
        <ArticleFooter currentSlug="lawson-diet" />

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
