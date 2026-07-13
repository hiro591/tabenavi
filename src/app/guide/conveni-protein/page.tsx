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
  alternates: { canonical: "https://www.tabenavi.jp/guide/conveni-protein" },
  title:
    "【2026年最新版】コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】 | たべなび",
  description:
    "セブンイレブン・ローソン・ファミリーマートの高タンパク商品をランキング形式で紹介。さんまの塩焼P30g、サラダチキンロールP25.2gなど、筋トレ後やダイエット中のタンパク質補給におすすめの商品を実測値で徹底比較。",
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
    url: "https://www.tabenavi.jp/guide/conveni-protein",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/conveni-protein",
};

const tocItems = [
  { id: "ranking", label: "高タンパク商品 総合ランキングTOP3" },
  { id: "seven", label: "セブンイレブンの高タンパク商品" },
  { id: "lawson", label: "ローソンの高タンパク商品" },
  { id: "familymart", label: "ファミリーマートの高タンパク商品" },
  { id: "combos", label: "目的別おすすめ組み合わせ" },
  { id: "tips", label: "高タンパク食品を選ぶ5つのコツ" },
  { id: "summary", label: "まとめ" },
];

export default function ConveniProteinPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data (static trusted content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="コンビニで買える高タンパク商品ランキング"
        subtitle="セブン・ローソン・ファミマ3大コンビニを徹底比較"
        imageUrl="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
        breadcrumb="コンビニ高タンパク商品"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="conveni-protein">
        {/* Authority Badge & Date */}
        <div className="mb-4">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 8分
          </p>
          <AffiliateDisclosure />
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="コンビニで一番タンパク質が摂れる商品は？セブン・ローソン・ファミマで違いは？"
          answer={
            <>
              実測値で見ると、単品で最強なのは<strong>セブンの「7プレミアム さんまの塩焼」（162kcal / タンパク質30.0g）</strong>。糖質ほぼゼロで、カロリー効率が群を抜いています。チキン系では<strong>ファミマ「たんぱく質が摂れる！サラダチキンロール」（324kcal / P25.2g）</strong>や<strong>ローソン「たんぱく質が摂れる 国産鶏むね肉のサラダ」（206kcal / P23.1g）</strong>が高水準。チェーン別の特徴は、<strong>セブン: 「たんぱく質が摂れる」シリーズと魚惣菜が強い / ローソン: NLブランパンや砂肝など低糖質系が豊富 / ファミマ: 「たんぱく質が摂れる」サラダ・ロールのラインが充実</strong>。組み合わせ次第で1食P30g以上も無理なく狙えます。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          筋トレやダイエット中のタンパク質補給に欠かせないコンビニ。セブンイレブン、ローソン、ファミリーマートの3大コンビニで買える高タンパク商品を徹底比較し、ランキング形式で紹介します。
        </p>
        <p className="mb-10">
          <Marker>目的別のおすすめ組み合わせ</Marker>も解説するので、コンビニでの食事選びの参考にしてください。1食あたり<Marker color="blue">タンパク質30g以上</Marker>の摂取も、コンビニなら手軽に実現できます。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop" alt="コンビニの商品棚に並ぶ食品ディスプレイ" />

        {/* Section 1: 総合ランキングTOP3 */}
        <section className="mb-12">
          <SectionHeading id="ranking">
            コンビニ高タンパク商品 総合ランキングTOP3
          </SectionHeading>
          <p className="mb-6">
            3大コンビニの商品をタンパク質含有量順にランキング。手軽に買えてタンパク質がしっかり摂れる商品を厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="7プレミアム さんまの塩焼"
            subtitle="セブンイレブン"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">162</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">30.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">4.6g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.4g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker>カロリー162kcalでタンパク質30g</Marker>という驚異的なカロリー効率。さんま由来のオメガ3脂肪酸も豊富で、ローファットダイエッターの新定番。糖質ほぼゼロも嬉しいポイント。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="たんぱく質が摂れる！サラダチキンロール"
            subtitle="ファミリーマート"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">324</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">25.2g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">13.3g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">28.1g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              1本で<Marker>タンパク質25.2g・主食まで完結</Marker>。サラダチキンを生地で巻いた手軽さで、追加のサイドメニューなしでも満足できる。ランチや筋トレ後の補給にぴったり。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="たんぱく質が摂れる 国産鶏むね肉のサラダ"
            subtitle="ローソン"
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
              ローソン「たんぱく質が摂れる」シリーズの主力。<Marker color="green">206kcalでタンパク質23.1g</Marker>、糖質も4.9gと低め。野菜も一緒に摂れるので、これ1品でダイエット中のランチがまとまる。
            </p>
          </RankingCard>

          <TipBox title="4位以下のランキング（2026年6月時点・DB実測値）">
            <p className="mb-1">4位: たんぱく質が摂れる！鶏むね肉とたまごのサラダ（ファミマ） P23.0g / 169kcal</p>
            <p className="mb-1">5位: たんぱく質が摂れる鶏むね肉サラダ（セブン） P21.8g / 199kcal</p>
            <p className="mb-1">6位: 若鶏の砂肝にんにく（ローソン） P21.4g / 160kcal</p>
            <p className="mb-1">7位: ファミマプレミアムチキン（骨付き）（ファミマ） P20.7g / 242kcal</p>
            <p className="mb-1">8位: よだれ鶏（ローソン） P17.9g / 182kcal</p>
            <p className="mb-1">9位: パリパリチキン（ローソン） P16.9g / 180kcal</p>
            <p>10位: ガーリック香る砂肝焼（ローソン） P14.1g / わずか76kcal</p>
          </TipBox>
        </section>

        {/* Section 2: セブンイレブン */}
        <section className="mb-12">
          <SectionHeading id="seven">
            セブンイレブンの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            セブンイレブンは<Marker>魚惣菜と「たんぱく質が摂れる」シリーズが強み</Marker>。さんまの塩焼はタンパク質30g・糖質ほぼゼロと、コンビニ単品では随一のカロリー効率です。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "7プレミアム さんまの塩焼", calories: 162, protein: 30.0, fat: 4.6, carbs: 0.4, highlight: true },
              { name: "たんぱく質が摂れる鶏むね肉サラダ", calories: 199, protein: 21.8, fat: 10.9, carbs: 4.4 },
              { name: "スパイスチキン", calories: 200, protein: 14.2, fat: 11.0, carbs: 11.2 },
              { name: "7プレミアム 塩ゆで枝豆", calories: 158, protein: 12.9, fat: 7.5, carbs: 10.5 },
              { name: "炭火焼き鳥（タレ）", calories: 73, protein: 10.1, fat: 3.2, carbs: 0.9 },
              { name: "7プレミアム たまごサラダ", calories: 211, protein: 7.6, fat: 19.1, carbs: 2.3 },
            ]}
          />

          <TipBox title="セブンイレブンの攻略ポイント">
            <p>
              さんまの塩焼（P30.0g / 162kcal）と炭火焼き鳥タレ（P10.1g / 73kcal）の組み合わせで、<Marker color="blue">合計タンパク質40.1g / 235kcal</Marker>。糖質をほとんど増やさずに、1食分のタンパク質をまかなえます。
            </p>
          </TipBox>
        </section>

        {/* Section 3: ローソン */}
        <section className="mb-12">
          <SectionHeading id="lawson">
            ローソンの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            ローソンは<Marker>「たんぱく質が摂れる」シリーズとNLブランパンが目玉</Marker>。砂肝や鶏ハツなど低カロリー高タンパクなおつまみ系も豊富で、糖質を抑えたい人に向いています。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "たんぱく質が摂れる 国産鶏むね肉のサラダ", calories: 206, protein: 23.1, fat: 11.0, carbs: 4.9, highlight: true },
              { name: "若鶏の砂肝にんにく", calories: 160, protein: 21.4, fat: 4.9, carbs: 9.0 },
              { name: "よだれ鶏", calories: 182, protein: 17.9, fat: 4.6, carbs: 17.5 },
              { name: "ガーリック香る砂肝焼", calories: 76, protein: 14.1, fat: 1.5, carbs: 1.6 },
              { name: "ごま油香る鶏ハツ焼", calories: 81, protein: 11.1, fat: 3.6, carbs: 1.3 },
              { name: "NL たんぱく質が摂れるブランパン 2個入", calories: 66, protein: 6.1, fat: 2.8, carbs: 6.1 },
            ]}
          />

          <TipBox title="ローソンの攻略ポイント">
            <p>
              ローソンの強みは<Marker color="green">低糖質なおつまみ系</Marker>。ガーリック香る砂肝焼（P14.1g / 76kcal）＋若鶏の砂肝にんにく（P21.4g / 160kcal）で、糖質を抑えつつタンパク質35.5gを236kcalで確保できます。
            </p>
          </TipBox>
        </section>

        {/* Section 4: ファミリーマート */}
        <section className="mb-12">
          <SectionHeading id="familymart">
            ファミリーマートの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            ファミリーマートは<Marker>「たんぱく質が摂れる」サラダ・ロールのラインが充実</Marker>。鶏むね肉とたまごのサラダは169kcalでタンパク質23gと、低カロリー高タンパクの優等生です。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "たんぱく質が摂れる！サラダチキンロール", calories: 324, protein: 25.2, fat: 13.3, carbs: 28.1, highlight: true },
              { name: "たんぱく質が摂れる！鶏むね肉とたまごのサラダ", calories: 169, protein: 23.0, fat: 7.2, carbs: 3.4 },
              { name: "ファミマプレミアムチキン（骨付き）", calories: 242, protein: 20.7, fat: 12.4, carbs: 11.9 },
              { name: "たんぱく質が摂れる！しそ入り鶏つくねのサラダ", calories: 238, protein: 16.3, fat: 11.3, carbs: 19.2 },
              { name: "特製ダレの味付けたまご", calories: 179, protein: 13.1, fat: 13.0, carbs: 2.6 },
              { name: "たんぱく質が摂れる！豚しゃぶのサラダ", calories: 140, protein: 13.2, fat: 7.4, carbs: 5.7 },
            ]}
          />

          <TipBox title="ファミマの攻略ポイント">
            <p>
              たんぱく質が摂れる！鶏むね肉とたまごのサラダ（P23.0g / <Marker color="green">169kcal・糖質3.4g</Marker>）は隠れた名品。糖質を抑えつつタンパク質をしっかり摂りたいダイエット中のランチに最適です。
            </p>
          </TipBox>
        </section>

        <ArticleImage src="https://images.unsplash.com/photo-1606168094336-48f205276929?w=800&h=400&fit=crop" alt="高タンパクな鶏むね肉のグリル料理" />

        {/* Mid-article CTA */}
        <CTABanner
          title="コンビニ商品の栄養をサクッと検索"
          subtitle="たべなびならコンビニ商品の栄養成分をすぐに確認できます"
        />

        <AffiliateProductGrid
          title="コンビニ通いを月3000円減らせるまとめ買い"
          productIds={["salada-chicken-pack", "tuna-can", "inbar-protein", "onebar-protein"]}
        />

        {/* Section 5: 目的別おすすめ組み合わせ */}
        <section className="mb-12">
          <SectionHeading id="combos">
            目的別おすすめ組み合わせ
          </SectionHeading>
          <p className="mb-6">
            単品だけでなく、<Marker>目的に合わせた組み合わせ</Marker>で効率よくタンパク質を摂取しましょう。
          </p>

          <SubSectionHeading>筋トレ後（タンパク質30g以上）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる鶏むね肉サラダ + 塩ゆで枝豆 + 炭火焼き鳥（タレ）（セブン）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 44.8g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                430 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              トレーニング後に必要なタンパク質30g以上を、500kcal以下で確保。枝豆の炭水化物でエネルギーも補給でき、筋合成に向けた栄養素をカバーします。
            </p>
          </div>

          <SubSectionHeading>ダイエット中（500kcal以下で高タンパク）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              若鶏の砂肝にんにく + NL たんぱく質が摂れるブランパン2個入 + ローストチキンのサラダ（ローソン）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 36.3g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                291 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Marker color="green">350kcal以下でタンパク質34g以上</Marker>。低糖質なNLブランパンと砂肝で満腹感も得られ、ダイエット中のランチに向いています。
            </p>
          </div>

          <SubSectionHeading>朝食（手軽に栄養バランス）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              特製ダレの味付けたまご + たんぱく質が摂れる！豚しゃぶのサラダ + 手巻 真昆布（ファミマ）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 29.5g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                502 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              忙しい朝でもサッと食べられる組み合わせ。おにぎりの炭水化物でエネルギー補給しつつ、たまごと豚しゃぶでタンパク質もしっかり摂取できます。
            </p>
          </div>
        </section>

        <ServiceOffers tag="protein" heading="コンビニ以上に手軽な高タンパク宅配食という選択肢" />

        {/* Section 6: 選ぶコツ */}
        <section className="mb-12">
          <SectionHeading id="tips">
            コンビニで高タンパク食品を選ぶ5つのコツ
          </SectionHeading>

          <NumberedList
            items={[
              {
                title: "栄養成分表示を必ずチェック",
                body: "パッケージ裏の栄養成分表示でタンパク質量を確認。「高タンパク」と書いてあっても、実際には10g以下の商品もあるので注意が必要です。",
              },
              {
                title: "タンパク質あたりのカロリーで比較",
                body: "同じタンパク質量でもカロリーが大きく異なる場合があります。セブンのさんまの塩焼（P30.0g/162kcal）やローソンのガーリック香る砂肝焼（P14.1g/76kcal）はカロリー効率が非常に良い食品です。",
              },
              {
                title: "「たんぱく質が摂れる」シリーズを活用",
                body: "セブン・ローソン・ファミマがそれぞれ展開する「たんぱく質が摂れる」シリーズは、高タンパクを謳った商品で探しやすく、栄養設計もされています。",
              },
              {
                title: "組み合わせでタンパク質30gを目指す",
                body: "1食あたり20〜30gのタンパク質摂取が理想。単品で足りない場合は、味付けたまごや砂肝・焼き鳥などのおつまみ系を追加してタンパク質を補いましょう。",
              },
              {
                title: "定番商品をローテーションする",
                body: "「たんぱく質が摂れる」シリーズのサラダ、味付けたまご、砂肝・焼き鳥を軸に、週替わりで別の商品を組み合わせると飽きずに続けられます。",
              },
            ]}
          />

          <WarningBox title="よくある落とし穴">
            <p>
              「高タンパク」と表記されたスムージーやドリンク系は、糖質も多い場合があります。必ず栄養成分表示を確認し、<Marker>タンパク質あたりのカロリー</Marker>で判断しましょう。
            </p>
          </WarningBox>

          <AffiliateProductGrid
            title="まとめ買いするとコンビニより安い高タンパクアイテム"
            productIds={["inbar-protein", "onebar-protein", "tuna-can", "salada-chicken-pack"]}
          />
        </section>

        <ArticleImage src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop" alt="ジムでトレーニングをしているフィットネスの様子" />

        {/* Section 7: まとめ */}
        <section className="mb-12">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            コンビニは高タンパク商品の宝庫です。押さえるべきポイントは以下の通り。
          </p>

          <CheckList
            items={[
              "セブンのさんまの塩焼（162kcal/P30.0g）が単品でのカロリー効率No.1",
              "ファミマのサラダチキンロール（P25.2g）やローソンの国産鶏むね肉のサラダ（P23.1g）が総合上位",
              "目的に合わせて組み合わせることで、1食30g以上のタンパク質摂取が可能",
              "栄養成分表示のチェックとカロリー効率の比較が賢い選び方のカギ",
              "「たんぱく質が摂れる」シリーズや砂肝・焼き鳥のローテーションで飽きずに継続",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="conveni-protein"
          items={[
            {
              q: "コンビニで一番タンパク質が摂れる商品は？",
              a: "実測値では、セブンの「7プレミアム さんまの塩焼」（162kcal / P30.0g）が単品で最高水準。チキン系ではファミマの「たんぱく質が摂れる！サラダチキンロール」（324kcal / P25.2g）、ローソンの「たんぱく質が摂れる 国産鶏むね肉のサラダ」（206kcal / P23.1g）、ファミマの「たんぱく質が摂れる！鶏むね肉とたまごのサラダ」（169kcal / P23.0g）が続きます。",
            },
            {
              q: "コンビニのチキン系商品、毎日食べても大丈夫？",
              a: "栄養面では問題ない範囲とされますが、惣菜やサラダは商品によって塩分が含まれるため、1日2食以上食べる場合は他の食事の塩分を控えめにするとよいでしょう。味付きのもの（タレ・スパイス等）は糖質や脂質が増えるので、栄養成分表示を見ながらローテーションで楽しむのがおすすめです。",
            },
            {
              q: "コンビニで朝食を高タンパクにするコツは？",
              a: "①味付けたまご＋チキン系サラダ＋おにぎり、②さんまの塩焼＋おにぎり、③砂肝・焼き鳥＋おにぎりなど、主菜＋主食の組み合わせが手軽。いずれも300〜500kcalでP25〜30gを狙えます。時間がない朝でもコンビニなら1分で揃えられます。",
            },
            {
              q: "おつまみ系の砂肝・焼き鳥は高タンパクって本当？",
              a: "本当です。ローソンの「ガーリック香る砂肝焼」はわずか76kcalでP14.1g、「若鶏の砂肝にんにく」は160kcalでP21.4gと、カロリー効率が非常に高い商品です。セブンの「炭火焼き鳥（タレ）」も73kcalでP10.1g。おつまみコーナーは見落としがちですが、低カロリー高タンパクの宝庫です。",
            },
            {
              q: "「たんぱく質が摂れる」シリーズの特徴は？",
              a: "セブン・ローソン・ファミマがそれぞれ展開するシリーズで、商品名にタンパク質量の狙いが反映されています。例えばローソン「たんぱく質が摂れる 国産鶏むね肉のサラダ」は206kcal/P23.1g、ファミマ「たんぱく質が摂れる！鶏むね肉とたまごのサラダ」は169kcal/P23.0gと、低〜中カロリーで20g前後のタンパク質を確保できる設計です。",
            },
            {
              q: "コンビニでカロリー控えめなおにぎりの選び方は？",
              a: "おにぎりは1個150〜180kcalで、ご飯とタンパク質源（鮭、ツナ、納豆、明太子）が摂れる優秀な主食。具材は「鮭」「ツナマヨ抜き」「納豆」「梅」が低カロリー＆高タンパク。逆に「焼肉」「チャーハン系」「天むす」はカロリー高め（200kcal超）です。",
            },
            {
              q: "コンビニ夜食でカロリー控えめな選択肢は？",
              a: "21時以降は炭水化物を控えめに。ローソンの「ガーリック香る砂肝焼」（76kcal/P14.1g）＋「冷やっこセット」（129kcal/P11.6g）の組み合わせなら、合計205kcalでP25.7gを確保できます。ファミマの「炭火焼きとりもも塩」（83kcal/P8.1g）など焼き鳥単品も低カロリー。深夜のラーメンと比べて数百kcalの差が出ます。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全商品の栄養成分・商品名をたべなびデータベースの実測値に照合して全面改訂。実在しない商品を実在品へ差し替え、ランキング・組み合わせ・FAQの数値を再計算" },
            { date: "2026-05-12", note: "QuickAnswer・FAQ・著者情報を追加。最新コンビニ商品ラインナップに対応" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* Article Footer */}
        <ArticleFooter currentSlug="conveni-protein" />

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
