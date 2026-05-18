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
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】セブンイレブンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング | たべなび",
  description:
    "セブンイレブンでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。朝昼晩のおすすめ組み合わせも解説。セブンのPB商品を活用した賢いダイエット法。",
  keywords: [
    "セブンイレブン ダイエット",
    "セブン 低カロリー",
    "コンビニ ダイエット セブン",
    "セブンイレブン 高タンパク",
    "セブン ダイエット おすすめ",
    "7プレミアム ダイエット",
  ],
  openGraph: {
    title:
      "【2026年最新】セブンイレブンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
    description:
      "セブンイレブンの低カロリー・高タンパク商品を徹底解説。朝昼晩の組み合わせプランも紹介。",
    url: "https://www.tabenavi.jp/guide/seven-eleven-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】セブンイレブンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
  description:
    "セブンイレブンでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/seven-eleven-diet",
};

const tocItems = [
  { id: "why-seven", label: "セブンがダイエットに最適な理由" },
  { id: "low-calorie", label: "低カロリー商品TOP10" },
  { id: "high-protein", label: "高タンパク商品TOP5" },
  { id: "meal-plans", label: "朝昼晩のおすすめ組み合わせ" },
  { id: "avoid", label: "避けるべき商品" },
  { id: "summary", label: "まとめ" },
];

export default function SevenElevenDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="セブンイレブンダイエット完全ガイド"
        subtitle="低カロリー＆高タンパク商品ランキング【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
        breadcrumb="セブンイレブンダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="seven-eleven-diet">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 9分
          </p>
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="セブンイレブンでダイエット中におすすめの商品は？高タンパク低カロリーの定番は？"
          answer={
            <>
              <strong>サラダチキン プレーン（113kcal/P24.3g）</strong>と<strong>7プレミアム さんまの塩焼（162kcal/P30g）</strong>がツートップ。低カロリーランキング1位は<strong>味付き半熟ゆでたまご（65kcal/P6.4g）</strong>。1食300〜400kcalで組むなら「サラダチキン+おにぎり1個+ゆで卵」がP35gの理想バランス。お弁当系なら<strong>サラダチキンと野菜の弁当（448kcal/P28.5g）</strong>が単品完結で優秀です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          日本全国に約21,000店舗を展開するセブンイレブン。実は<Marker>ダイエッターにとって最強のコンビニ</Marker>であることをご存知ですか？7プレミアムの充実したPB商品、全商品に記載された栄養成分表示、そして「たんぱく質が摂れる」シリーズの豊富なラインナップ。
        </p>
        <p className="mb-10">
          この記事では、セブンイレブンで買える<Marker color="blue">低カロリー商品TOP10と高タンパク商品TOP5</Marker>をランキング形式で紹介し、朝昼晩の最適な組み合わせプランも解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
          alt="セブンイレブンの商品が並ぶ棚のイメージ"
        />

        {/* Section 1: セブンがダイエットに最適な理由 */}
        <section className="mb-16">
          <SectionHeading id="why-seven">
            セブンイレブンがダイエットに最適な理由
          </SectionHeading>

          <NumberedList
            items={[
              {
                title: "7プレミアム（PB商品）の圧倒的な充実度",
                body: "セブンイレブンのPBブランド「7プレミアム」は約4,000品目。ダイエット向け商品も豊富で、サラダチキンだけでもプレーン・ハーブ・スモーク・タンドリーなど10種類以上のバリエーションがあります。",
              },
              {
                title: "全商品に栄養成分表示",
                body: "セブンイレブンは全ての商品にカロリー・タンパク質・脂質・炭水化物の栄養成分を表示。ダイエット中のカロリー管理が非常にしやすい環境です。",
              },
              {
                title: "「たんぱく質が摂れる」シリーズ",
                body: "2024年からさらに拡充された「たんぱく質が摂れる」シリーズ。サラダ、サンドイッチ、おにぎり、スープなど、高タンパク商品がひと目で分かるパッケージデザインで、商品選びに迷いません。",
              },
              {
                title: "店舗数No.1で続けやすい",
                body: "全国約21,000店舗はコンビニ最多。自宅・職場の近くにセブンイレブンがある方が多く、ダイエットを継続しやすい最大の強みです。",
              },
            ]}
          />

          <TipBox title="セブンイレブンのダイエット向けアプリ活用">
            <p>
              セブンイレブンアプリでクーポンを活用すると、ダイエット商品がお得に買えることも。<Marker color="green">サラダチキンやゆでたまごの割引クーポン</Marker>が定期的に配信されるので、チェックしておきましょう。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリー商品TOP10 */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            セブンイレブン低カロリー商品TOP10
          </SectionHeading>
          <p className="mb-6">
            セブンイレブンで買える<Marker>200kcal以下の低カロリー商品</Marker>をランキング。ダイエット中のランチやおやつに最適です。
          </p>

          <NutritionTable
            items={[
              { name: "1位: 味付き半熟ゆでたまご", calories: 65, protein: 6.4, fat: 4.4, carbs: 0.4, highlight: true },
              { name: "2位: 7プレミアム さんまの塩焼", calories: 162, protein: 30.0, fat: 4.6, carbs: 0.4, highlight: true },
              { name: "3位: 7プレミアム サラダチキン スモーク", calories: 105, protein: 22.6, fat: 1.1, carbs: 0.5, highlight: true },
              { name: "4位: サラダチキン (プレーン)", calories: 113, protein: 24.3, fat: 1.5, carbs: 0 },
              { name: "5位: 7プレミアム 寄せ豆腐", calories: 58, protein: 5.5, fat: 3.5, carbs: 1.5 },
              { name: "6位: ほうれん草の胡麻和え", calories: 72, protein: 3.2, fat: 3.5, carbs: 6.8 },
              { name: "7位: ひじきの煮物", calories: 85, protein: 3.8, fat: 2.5, carbs: 11.2 },
              { name: "8位: 蒸し鶏のサラダ", calories: 128, protein: 14.2, fat: 5.8, carbs: 5.5 },
              { name: "9位: ゼロキロカロリー寒天ゼリー", calories: 0, protein: 0, fat: 0, carbs: 0, highlight: true },
              { name: "10位: 7プレミアム もずく酢", calories: 18, protein: 0.5, fat: 0.1, carbs: 3.8 },
            ]}
          />

          <TipBox title="ゼロカロリー商品の活用法">
            <p>
              セブンの<Marker>ゼロキロカロリー寒天ゼリー</Marker>は、食後のデザート欲を満たすのに最適。甘いものが食べたくなった時の救世主です。ぶどう味やみかん味など種類も豊富で、罪悪感ゼロで楽しめます。
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
            セブンイレブン高タンパク商品TOP5
          </SectionHeading>
          <p className="mb-6">
            ダイエット中でも筋肉を落とさないために、<Marker>タンパク質20g以上の商品</Marker>を厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="サラダチキン（プレーン）"
            subtitle="¥238 ・ コスパ最強"
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
              不動の王者。<Marker>タンパク質1gあたり約10円</Marker>というコスパの良さも魅力。味のバリエーションが豊富なので飽きずに続けられます。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="たんぱく質が摂れるチキン&スパイシーチリ"
            subtitle="¥430 ・ おかず系"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">242</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">20.2g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">8.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">22.1g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              サラダチキンに飽きた方におすすめ。<Marker color="blue">スパイシーな味付けで満足感が高く</Marker>、ランチのメインおかずとしても優秀です。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="7プレミアム サラダチキンバー"
            subtitle="¥198 ・ 手軽さNo.1"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">108</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">21.6g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">1.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              片手で食べられるバータイプ。<Marker color="green">108kcalでタンパク質21.6g</Marker>と効率抜群。忙しい日のタンパク質補給に最適です。
            </p>
          </RankingCard>

          <TipBox title="4〜5位もチェック">
            <p className="mb-1">4位: たんぱく質が摂れる鶏むね肉サラダ（P19.8g / 152kcal / ¥430）</p>
            <p>5位: たんぱく質が摂れるチキン&たまごサンド（P22.5g / 285kcal / ¥350）</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="セブン商品の栄養をサクッと検索"
          subtitle="たべなびならコンビニ商品の栄養成分をすぐに確認できます"
        />

        {/* Section 4: 朝昼晩のおすすめ組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="meal-plans">
            朝昼晩のおすすめ組み合わせ
          </SectionHeading>
          <p className="mb-6">
            セブンイレブンだけで<Marker>1日1,500kcal以下・タンパク質80g以上</Marker>を達成するプランを紹介します。
          </p>

          <SubSectionHeading>朝食プラン（約350kcal / P25g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              ゆでたまご2個 + ギリシャヨーグルト + バナナ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 25.2g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                345 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥450
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝はタンパク質と果物でエネルギーチャージ。ギリシャヨーグルトはタンパク質10g以上で腸内環境にも良い。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約500kcal / P35g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              サラダチキン + おにぎり（鮭）+ 味噌汁
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 34.8g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                485 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥550
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼は炭水化物もしっかり摂って午後のエネルギーを確保。味噌汁で温かさと満足感をプラス。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約400kcal / P30g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる鶏むね肉サラダ + 茶碗蒸し + もずく酢
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 27.5g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                260 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥600
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食は低カロリーに抑えつつタンパク質をしっかり摂取。<Marker color="green">260kcalなのでダイエット中でも安心</Marker>。
            </p>
          </div>

          <TipBox title="1日トータル">
            <p>
              朝345kcal + 昼485kcal + 夕260kcal = <Marker>合計1,090kcal / タンパク質87.5g</Marker>。間食にゼロカロリーゼリーやプロテインバーを追加しても1,300kcal以内に収まります。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="ヘルシーな食事が並ぶテーブル"
        />

        {/* Section 5: 避けるべき商品 */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            ダイエット中に避けるべきセブン商品
          </SectionHeading>
          <p className="mb-6">
            セブンイレブンにはダイエットに不向きな高カロリー商品もあります。以下の商品は<Marker>カロリー・脂質が非常に高い</Marker>ため注意しましょう。
          </p>

          <WarningBox title="ダイエット中は要注意の商品">
            <p className="mb-2">
              <strong>揚げ鶏（からあげ棒）:</strong> 約250kcal、脂質15g以上。手軽に買えるだけに危険。
            </p>
            <p className="mb-2">
              <strong>メロンパン:</strong> 約380kcal、糖質58g。甘いパンは血糖値スパイクの原因。
            </p>
            <p className="mb-2">
              <strong>焼きそばパン:</strong> 約420kcal、脂質18g。炭水化物x炭水化物の組み合わせ。
            </p>
            <p>
              <strong>大盛りパスタ:</strong> 約700kcal以上。1食で1日の目標カロリーの半分に。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "揚げ鶏", calories: 252, protein: 14.5, fat: 15.8, carbs: 12.5, highlight: true },
              { name: "メロンパン", calories: 380, protein: 6.8, fat: 12.5, carbs: 58.2 },
              { name: "焼きそばパン", calories: 420, protein: 8.2, fat: 18.0, carbs: 55.8 },
              { name: "大盛りナポリタン", calories: 720, protein: 18.5, fat: 22.0, carbs: 105.0 },
            ]}
          />
        </section>

        {/* CTA */}
        <CTABanner
          title="セブンでのダイエット生活を始めよう"
          subtitle="たべなびで賢いメニュー選びをサポートします"
        />

        <AffiliateProductGrid
          title="セブン通いを月3000円減らすまとめ買い"
          productIds={["salada-chicken-pack", "tuna-can", "ultora-whey", "inbar-protein"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            セブンイレブンダイエットの要点を振り返りましょう。
          </p>

          <ArticleSummary
            points={[
              "セブンは7プレミアム・栄養表示・店舗数でダイエッターに最適なコンビニ",
              "サラダチキン（113kcal/P24.3g）は低カロリー＆高タンパクの王道",
              "7プレミアム さんまの塩焼（162kcal/P30g）は隠れた高タンパク王",
              "1食300〜400kcal/P30g台の食事プランがセブンだけで実現可能",
              "揚げ鶏・菓子パン・大盛りパスタはダイエット中NG",
              "アプリのクーポンを活用してお得にダイエット食品をゲット",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。最新は<a href="https://www.sej.co.jp/products/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">セブンイレブン公式商品ページ</a>でご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="seven-eleven-diet"
          items={[
            {
              q: "セブンイレブンで一番タンパク質が多い商品は？",
              a: "「7プレミアム さんまの塩焼」が162kcal/P30gで圧倒的に優秀です。次いで「サラダチキン プレーン」（113kcal/P24.3g）、「サラダチキンスモーク」（105kcal/P22.6g）、「サラダチキンと野菜の弁当」（448kcal/P28.5g）など。タンパク質効率を重視するなら、これらの商品を中心に選びましょう。",
            },
            {
              q: "セブンの200kcal以下のおすすめ商品は？",
              a: "味付き半熟ゆでたまご（65kcal）、寄せ豆腐（58kcal）、サラダチキン プレーン（113kcal）、サラダチキンスモーク（105kcal）、おでん各種（55〜80kcal）が代表格。複数組み合わせれば300kcal以下で1食完結も可能です。",
            },
            {
              q: "セブンの朝食にダイエット向きなのは？",
              a: "「サラダチキン+おにぎり1個（手巻きおにぎり 紀州南高梅 166kcal/P2.9g等）+ゆで卵」で約350kcal/P30g。または「7プレミアム ヨーグルト+ゆで卵+カフェオレ」で約250kcal/P15g。朝に高タンパクを摂ることで、午前中の代謝をアップできます。",
            },
            {
              q: "セブンのお弁当でダイエット向きはどれ？",
              a: "「サラダチキンと野菜の弁当」（448kcal/P28.5g）が単品完結で最強。「炭火焼きチキン弁当」（548kcal/P28.5g）、「肉めし 炙り焼豚ロース弁当（麦飯）」（659kcal/P27.7g）も低脂質高タンパクで優秀。逆に「ロースかつ丼」（843kcal）は高カロリーなので注意。",
            },
            {
              q: "セブンの夜食で太らないものは？",
              a: "おでん（牛もつ串64kcal、牛すじハラミ串66kcal、なんこつつくね串66kcal）、寄せ豆腐（58kcal）、サラダチキン（105〜113kcal）、もずく酢（18kcal）が定番。3〜4品組み合わせても300kcal以下で済みます。",
            },
            {
              q: "セブンのスイーツでダイエット中OKなのは？",
              a: "「ゼロキロカロリー寒天ゼリー」（0kcal）、「7プレミアム もずく酢」（18kcal）が罪悪感ゼロ。アイスなら「7プレミアム 北海道バニラバーマルチ」（67kcal/個）が比較的低カロリーです。和菓子は意外と高カロリーなので、寒天系・低糖質スイーツを選びましょう。",
            },
            {
              q: "セブンとローソン・ファミマ、ダイエット向きの違いは？",
              a: "セブンは「商品ラインナップの豊富さ＆店舗数」、ローソンは「たんぱく質シリーズの本気度」、ファミマは「RIZAP共同開発商品」が強み。タンパク質量で比較するとローソンのプレミアムロースサラダチキン（120kcal/P25g）も同等レベル。3社使い分けもおすすめです。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-05-13", note: "セブン234商品の最新栄養データに更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-23", note: "初稿公開" },
          ]}
        />

        {/* Article Footer */}
        <ArticleFooter currentSlug="seven-eleven-diet" />

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
