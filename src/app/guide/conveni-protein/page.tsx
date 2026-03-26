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
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月19日 | 読了目安: 8分
          </p>
        </div>

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
            title="筋肉食堂DELI 鶏の照り焼き"
            subtitle="ローソン ・ ¥598"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">285</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">32.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">8.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">15.3g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              コンビニ高タンパク商品の中でも<Marker>タンパク質32.5gはトップクラス</Marker>。筋肉食堂とのコラボならではの栄養設計で、筋トレ後のリカバリーに最適です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="プロテインボックス"
            subtitle="ファミリーマート ・ ¥550"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">320</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">28.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">12.4g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">18.5g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              1パックで<Marker>タンパク質28.5g</Marker>と驚異的な含有量。鶏むね肉、ゆでたまご、枝豆などがバランスよく入り、そのまま食べられる手軽さも魅力。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="サラダチキン（プレーン）"
            subtitle="セブンイレブン ・ ¥238"
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
                <p className="text-amber-600 font-bold text-sm">1.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.5g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              全コンビニで買える定番中の定番。<Marker color="green">カロリーわずか113kcalでタンパク質24.3g</Marker>という圧倒的なカロリー効率が最大の強み。¥238と価格も手頃。
            </p>
          </RankingCard>

          <TipBox title="4位以下のランキング">
            <p className="mb-1">4位: 直火焼きサラダチキン（ファミマ） P24.2g / 118kcal / ¥258</p>
            <p className="mb-1">5位: サラダチキン スパイシー（ローソン） P21.8g / 125kcal / ¥238</p>
            <p className="mb-1">6位: 7プレミアム サラダチキンバー（セブン） P21.6g / 108kcal / ¥198</p>
            <p className="mb-1">7位: グリルチキン 黒胡椒（ローソン） P20.4g / 130kcal / ¥248</p>
            <p className="mb-1">8位: たんぱく質が摂れるチキン&スパイシーチリ（セブン） P20.2g / 242kcal / ¥430</p>
            <p className="mb-1">9位: 砂肝の黒胡椒焼き（ファミマ） P18.6g / 98kcal / ¥298</p>
            <p>10位: 味付き半熟ゆでたまご 2個（セブン） P12.8g / 130kcal / ¥162</p>
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
