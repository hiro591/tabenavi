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
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/conveni-protein" },
  title:
    "【2026年最新版】コンビニで買える高タンパク商品ランキング【セブン・ローソン・ファミマ徹底比較】 | たべなび",
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
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
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
              <strong>サラダチキン（プレーン）が王道</strong>で、3社とも約25g前後のタンパク質を100〜120kcalで摂取できます。最強コンビは<strong>サラダチキン+おにぎり1個+ゆで卵</strong>で約350kcal/P35g（理想的なPFCバランス）。チェーン別の特徴は、<strong>セブン: 種類が豊富 / ローソン: たんぱく質シリーズで幅広い選択肢 / ファミマ: RIZAP共同開発商品が秀逸</strong>。プロテインバーやプロテイン飲料も併用すれば、間食でも気軽にP10〜20g摂れます。
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
            title="サラダチキンと野菜の弁当"
            subtitle="セブンイレブン"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">448</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">28.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">12.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">55.5g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              1パックで<Marker>タンパク質28.5g・1食完結</Marker>。サラダチキンと野菜のバランスが良く、追加のサイドメニューを買わなくても満足できる。ダイエット中のランチに最適。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="サラダチキン (プレーン)"
            subtitle="セブンイレブン / ローソン / ファミマ"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">113</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">24.3g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              全コンビニで買える定番中の定番。<Marker color="green">カロリーわずか113kcalでタンパク質24.3g</Marker>という圧倒的なカロリー効率が最大の強み。糖質ゼロで脂質1.5gは外食では再現不可能なレベル。
            </p>
          </RankingCard>

          <TipBox title="4位以下のランキング（2026年5月時点）">
            <p className="mb-1">4位: 直火焼きサラダチキン プレーン（ファミマ） P24.2g / 112kcal</p>
            <p className="mb-1">5位: たんぱく質が摂れるサラダチキン プレーン（ローソン） P23.5g / 110kcal</p>
            <p className="mb-1">6位: 直火焼きサラダチキン バジル（ファミマ） P23.8g / 110kcal</p>
            <p className="mb-1">7位: 7プレミアム サラダチキン スモーク（セブン） P22.6g / 105kcal</p>
            <p className="mb-1">8位: 7プレミアム サラダチキンバー スモーク（セブン） P21.6g / 98kcal</p>
            <p className="mb-1">9位: たんぱく質が摂れるサラダチキンロール（ローソン） P25.2g / 324kcal</p>
            <p>10位: 味付き半熟ゆでたまご（セブン） P6.4g / 65kcal × 5個でP32g</p>
          </TipBox>
        </section>

        {/* Section 2: セブンイレブン */}
        <section className="mb-12">
          <SectionHeading id="seven">
            セブンイレブンの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            セブンイレブンは<Marker>「たんぱく質が摂れる」シリーズが充実</Marker>。サラダチキンのバリエーションも豊富で、飽きずに高タンパク生活を続けられます。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "サラダチキン（プレーン）", calories: 113, protein: 24.3, fat: 1.2, carbs: 0.5, highlight: true },
              { name: "7プレミアム サラダチキンバー", calories: 108, protein: 21.6, fat: 1.5, carbs: 1.8 },
              { name: "たんぱく質が摂れるチキン&スパイシーチリ", calories: 242, protein: 20.2, fat: 8.5, carbs: 22.1 },
              { name: "たんぱく質が摂れる鶏むね肉サラダ", calories: 152, protein: 19.8, fat: 5.2, carbs: 8.4 },
              { name: "プロテインバー チョコレート", calories: 183, protein: 15.2, fat: 8.5, carbs: 12.8 },
              { name: "味付き半熟ゆでたまご 2個", calories: 130, protein: 12.8, fat: 8.8, carbs: 0.8 },
            ]}
          />

          <TipBox title="セブンイレブンの攻略ポイント">
            <p>
              サラダチキン（P24.3g）とゆでたまご2個（P12.8g）の組み合わせで、<Marker color="blue">合計タンパク質37.1g / 243kcal / ¥400</Marker>。コスパ・カロリー効率ともに最強の組み合わせです。
            </p>
          </TipBox>
        </section>

        {/* Section 3: ローソン */}
        <section className="mb-12">
          <SectionHeading id="lawson">
            ローソンの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            ローソンは<Marker>筋肉食堂DELIとのコラボ商品が目玉</Marker>。タンパク質32.5gの鶏の照り焼きは、コンビニ高タンパク商品の中でもトップクラスです。低糖質ブランパンシリーズもダイエッターに人気。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "筋肉食堂DELI 鶏の照り焼き", calories: 285, protein: 32.5, fat: 8.2, carbs: 15.3, highlight: true },
              { name: "サラダチキン スパイシー", calories: 125, protein: 21.8, fat: 2.1, carbs: 1.5 },
              { name: "グリルチキン（黒胡椒）", calories: 130, protein: 20.4, fat: 3.5, carbs: 1.2 },
              { name: "ブランパン 2個入", calories: 130, protein: 10.6, fat: 4.4, carbs: 12.2 },
              { name: "たまごサラダ（タンパク質10g）", calories: 148, protein: 10.2, fat: 11.5, carbs: 2.8 },
            ]}
          />

          <TipBox title="ローソンの攻略ポイント">
            <p>
              ローソンの強みは<Marker color="green">低糖質ブランパン</Marker>。ブランパン2個（P10.6g）＋グリルチキン（P20.4g）で、糖質を抑えつつタンパク質31gを確保できます。ダイエット中のランチに最適。
            </p>
          </TipBox>
        </section>

        {/* Section 4: ファミリーマート */}
        <section className="mb-12">
          <SectionHeading id="familymart">
            ファミリーマートの高タンパク商品
          </SectionHeading>
          <p className="mb-4">
            ファミリーマートの<Marker>プロテインボックスは1パックでタンパク質28.5g</Marker>と驚異的。RIZAPコラボ商品も豊富で、手軽にボディメイクをサポートしてくれます。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "プロテインボックス", calories: 320, protein: 28.5, fat: 12.4, carbs: 18.5, highlight: true },
              { name: "直火焼きサラダチキン", calories: 118, protein: 24.2, fat: 1.8, carbs: 1.2 },
              { name: "グリルチキン（プレーン）", calories: 112, protein: 19.5, fat: 2.2, carbs: 0.8 },
              { name: "砂肝の黒胡椒焼き", calories: 98, protein: 18.6, fat: 2.8, carbs: 0.5 },
              { name: "RIZAP サラダチキンバー", calories: 95, protein: 16.8, fat: 1.5, carbs: 1.8 },
            ]}
          />

          <TipBox title="ファミマの攻略ポイント">
            <p>
              砂肝の黒胡椒焼き（P18.6g / <Marker color="green">わずか98kcal</Marker>）は隠れた名品。おつまみコーナーにあるので見落としがちですが、カロリー効率はサラダチキン以上です。
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
              サラダチキン + ゆでたまご2個 + おにぎり1個
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 42.1g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                443 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥600
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              トレーニング後に必要なタンパク質30g以上を確保。おにぎりで炭水化物も補給し、筋合成に必要な栄養素をカバー。
            </p>
          </div>

          <SubSectionHeading>ダイエット中（500kcal以下で高タンパク）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              サラダチキンバー + ブランパン + サラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 34.2g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                298 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥550
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Marker color="green">300kcal以下でタンパク質34g以上</Marker>。低糖質ブランパンで満腹感も得られ、ダイエット中のランチに最適。
            </p>
          </div>

          <SubSectionHeading>朝食（手軽に栄養バランス）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              ゆでたまご2個 + バナナ + プロテインバー
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 30.0g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                399 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥440
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              忙しい朝でもサッと食べられる組み合わせ。バナナの炭水化物でエネルギー補給しつつ、タンパク質もしっかり摂取。
            </p>
          </div>
        </section>

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
                body: "同じタンパク質量でもカロリーが大きく異なる場合があります。サラダチキン（P24.3g/113kcal）はカロリー効率が非常に良い食品です。",
              },
              {
                title: "「たんぱく質が摂れる」シリーズを活用",
                body: "セブンイレブンの「たんぱく質が摂れる」シリーズやローソンの筋肉食堂DELIなど、高タンパクを謳った商品は探しやすく、栄養設計もされています。",
              },
              {
                title: "組み合わせでタンパク質30gを目指す",
                body: "1食あたり20〜30gのタンパク質摂取が理想。単品で足りない場合は、ゆでたまごやプロテインバーを追加してタンパク質を補いましょう。",
              },
              {
                title: "定番商品をローテーションする",
                body: "サラダチキン、ゆでたまご、プロテインバーを軸に、週替わりで別の商品を組み合わせると飽きずに続けられます。",
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
              "サラダチキンは全コンビニで高タンパク・低カロリーの王道商品",
              "ローソン筋肉食堂DELI（P32.5g）やファミマプロテインボックス（P28.5g）が総合トップ",
              "目的に合わせて組み合わせることで、1食30g以上のタンパク質摂取が可能",
              "栄養成分表示のチェックとカロリー効率の比較が賢い選び方のカギ",
              "定番商品のローテーションで飽きずに高タンパク生活を継続",
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
              a: "ローソンの「鶏むね肉のサラダチキン プレーン」が約25g前後で最高水準。次いでセブンの「サラダチキン プレーン」が約24g、ファミマの「RIZAP サラダチキン」が約23g。プロテインバーでは「inバー プロテイン Granola」が約15g、ザバスミルクプロテインが15gで手軽です。",
            },
            {
              q: "コンビニのサラダチキン、毎日食べても大丈夫？",
              a: "栄養面では問題ありませんが、塩分が1食あたり1.5〜2g含まれるため、1日2食以上食べる場合は他の食事の塩分を控えめに。また、プレーン以外（ハーブ・スモーク等）は香料・添加物が多いので、無理せずローテーションで楽しむのがおすすめです。",
            },
            {
              q: "コンビニで朝食を高タンパクにするコツは？",
              a: "①ゆで卵+サラダチキン+おにぎり、②ギリシャヨーグルト（ハイ・プロテイン系）+プロテインバー、③SAVAS等のプロテイン飲料+おにぎり。3パターンとも300〜400kcalでP25〜30g摂取可能。時間がない朝でもコンビニなら1分で買えます。",
            },
            {
              q: "プロテインバーとプロテイン飲料、どっちがいい？",
              a: "目的次第。間食・小腹満たしならプロテインバー（150〜200kcal）、運動後の素早い吸収ならプロテイン飲料（100〜150kcal）が最適。糖質量に注意：菓子系プロテインバー（チョコ、グラノーラ）は糖質15g以上含むことが多いので、ダイエット中は無糖タイプを選びましょう。",
            },
            {
              q: "ファミマのRIZAPシリーズの特徴は？",
              a: "RIZAP監修商品はカロリー・糖質ともに通常商品より控えめに設計されており、ダイエット向き。例えばRIZAPサラダチキンは125kcal/P22g、RIZAPプロテインバーは200kcal/P10g。これらを毎食活用すれば、自然と低カロリー高タンパクな食事が継続できます。",
            },
            {
              q: "コンビニでカロリー控えめなおにぎりの選び方は？",
              a: "おにぎりは1個150〜180kcalで、ご飯とタンパク質源（鮭、ツナ、納豆、明太子）が摂れる優秀な主食。具材は「鮭」「ツナマヨ抜き」「納豆」「梅」が低カロリー＆高タンパク。逆に「焼肉」「チャーハン系」「天むす」はカロリー高め（200kcal超）です。",
            },
            {
              q: "コンビニ夜食でカロリー控えめな選択肢は？",
              a: "21時以降は炭水化物を控えめに。サラダチキン（110kcal）+ あおさみそ汁（30kcal）+ 豆腐（80kcal）の組み合わせで合計220kcal/P30g。または、ヨーグルト+ゆで卵+ナッツ少々で200kcal以下。深夜にラーメンは300kcal以上の差が出ます。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
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
