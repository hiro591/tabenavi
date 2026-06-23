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
  alternates: { canonical: "https://www.tabenavi.jp/guide/seven-eleven-diet" },
  title:
    "セブンイレブン ダイエット｜低カロリー＆高タンパク商品ランキング【2026年最新】 | たべなび",
  description:
    "セブンイレブンでダイエット向きの低カロリー・高タンパク商品をDB実値でランキング。さんまの塩焼162kcal/P30g、鶏むね肉サラダ199kcal/P21.8g、おでん各種を朝昼晩の組み合わせで解説。",
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
      "セブンイレブン ダイエット｜低カロリー＆高タンパク商品ランキング【2026年最新】",
    description:
      "セブンイレブンの低カロリー・高タンパク商品をDB実値で徹底解説。さんまの塩焼やおでんを使った朝昼晩の組み合わせプランも紹介。",
    url: "https://www.tabenavi.jp/guide/seven-eleven-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "セブンイレブン ダイエット｜低カロリー＆高タンパク商品ランキング【2026年最新】",
  description:
    "セブンイレブンでダイエット向きの低カロリー・高タンパク商品をDB実値でランキング形式で紹介。",
  datePublished: "2026-03-23",
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
              <strong>7プレミアム さんまの塩焼（162kcal/P30g）</strong>と<strong>たんぱく質が摂れる鶏むね肉サラダ（199kcal/P21.8g）</strong>がツートップ。低カロリーで高タンパクなら<strong>炭火焼き鳥 塩（66kcal/P9.6g）</strong>や<strong>おでんのなんこつ入り鶏つくね串（66kcal/P7g）</strong>も優秀。1食300〜400kcalで組むなら「さんまの塩焼＋手巻おにぎり（紀州南高梅 166kcal）＋おでん」でP35g前後が狙えます。
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
                body: "セブンイレブンのPBブランド「7プレミアム」は約4,000品目。ダイエット向けの惣菜・サラダ・おでんも豊富で、さんまの塩焼や塩ゆで枝豆など、低脂質・高タンパクの選択肢が揃っています。",
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
              セブンイレブンアプリでクーポンを活用すると、対象商品がお得に買えることも。<Marker color="green">おでんや惣菜の割引クーポン</Marker>が配信されることがあるので、チェックしておきましょう。
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
              { name: "1位: おでん 牛すじ串", calories: 26, protein: 3.8, fat: 1.1, carbs: 0.3, highlight: true },
              { name: "2位: おでん 味しみ絹厚揚げ", calories: 55, protein: 4.0, fat: 3.7, carbs: 1.8 },
              { name: "3位: 炭火焼き鳥（塩）", calories: 66, protein: 9.6, fat: 3.0, carbs: 0.3, highlight: true },
              { name: "4位: おでん なんこつ入り鶏つくね串", calories: 66, protein: 7.0, fat: 4.0, carbs: 0.7 },
              { name: "5位: 炭火焼き鳥（タレ）", calories: 73, protein: 10.1, fat: 3.2, carbs: 0.9, highlight: true },
              { name: "6位: おでん 味しみたまご", calories: 77, protein: 6.7, fat: 4.9, carbs: 1.4 },
              { name: "7位: 7プレミアム 塩味そら豆", calories: 93, protein: 8.3, fat: 0.5, carbs: 15.4 },
              { name: "8位: 枝豆", calories: 94, protein: 8.0, fat: 4.1, carbs: 8.4 },
              { name: "9位: 国産大豆使用 冷奴セット", calories: 116, protein: 10.1, fat: 6.9, carbs: 3.7 },
              { name: "10位: 7プレミアム 塩ゆで枝豆", calories: 158, protein: 12.9, fat: 7.5, carbs: 10.5 },
            ]}
          />

          <TipBox title="おでんの低カロリー活用法">
            <p>
              セブンの<Marker>おでんは1品20〜80kcal台</Marker>と低カロリーで、温かさで満腹感も得やすいのが魅力。牛すじ串・絹厚揚げ・鶏つくね串などを2〜3品組み合わせても200kcal前後に収まります。寒い時期の小腹満たしに便利です。
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
            title="7プレミアム さんまの塩焼"
            subtitle="低脂質・高タンパクの隠れ王"
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
              タンパク質量はセブンのメニュー中トップクラス。<Marker>162kcalでP30g・脂質4.6g・炭水化物0.4g</Marker>という低脂質・低糖質バランスで、青魚の脂を含みつつカロリーを抑えやすい一品です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="こく旨キムチ鍋"
            subtitle="鍋系で満足感とタンパク質を両立"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">247</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">22.3g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">12.8g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">13.7g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              温かい鍋でタンパク質22.3gを確保。<Marker color="blue">247kcalで満腹感が得やすく</Marker>、寒い時期の夕食メインとしても向いています。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="たんぱく質が摂れる鶏むね肉サラダ"
            subtitle="野菜も摂れる高タンパクサラダ"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">199</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">21.8g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">10.9g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">4.4g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              鶏むね肉と野菜を一度に摂れるサラダ。<Marker color="green">199kcalでタンパク質21.8g</Marker>。炭水化物4.4gと低糖質で、糖質を控えたいランチに向いています。
            </p>
          </RankingCard>

          <TipBox title="4〜5位もチェック">
            <p className="mb-1">4位: 若鶏のからあげ（もも）5個入り（P18.5g / 291kcal / F15.8g）</p>
            <p>5位: スパイスチキン（P14.2g / 200kcal / F11.0g）</p>
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

          <SubSectionHeading>朝食プラン（約329kcal / P22g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              おでん 味しみたまご2個 + 枝豆 + 7プレミアム ブルーベリー
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 22.2g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                329 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝はたまごと枝豆でタンパク質を確保しつつ、果物で軽くエネルギーをチャージ。おでんのたまごは1個77kcalで腹持ちも良好です。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約547kcal / P33g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる鶏むね肉サラダ + 手巻おにぎり 紀州南高梅 + コクと旨味の豚汁
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 32.6g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                547 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼は炭水化物もしっかり摂って午後のエネルギーを確保。豚汁で温かさと満足感をプラスできます。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約304kcal / P44g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              7プレミアム さんまの塩焼 + 国産大豆使用 冷奴セット + おでん 牛すじ串
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 43.9g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                304 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食はカロリーを抑えつつタンパク質をしっかり摂取。<Marker color="green">304kcalでP44gと高タンパク低カロリー</Marker>のバランスです。
            </p>
          </div>

          <TipBox title="1日トータル">
            <p>
              朝329kcal + 昼547kcal + 夕304kcal = <Marker>合計1,180kcal / タンパク質98.7g</Marker>。間食におでんや枝豆を追加しても1,300〜1,400kcal程度に収まります（数値はDB実値の単純合算）。
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
              <strong>7プレミアム 濃厚G系ラーメン:</strong> 1,595kcal・脂質102.1g。1食で1日の目標カロリーを超えることも。
            </p>
            <p className="mb-2">
              <strong>やみつきガーリック 大盛ペペロンチーノ:</strong> 863kcal・脂質41.2g。大盛り＋油の組み合わせは高カロリー。
            </p>
            <p className="mb-2">
              <strong>味しみロースかつ丼:</strong> 843kcal・炭水化物117.2g。揚げ物＋ご飯で糖質・脂質ともに高め。
            </p>
            <p>
              <strong>ケチャップソースの大盛ナポリタン:</strong> 621kcal・炭水化物100.7g。麺の大盛りは糖質が多くなりがち。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "7プレミアム 濃厚G系ラーメン", calories: 1595, protein: 46.2, fat: 102.1, carbs: 128.8, highlight: true },
              { name: "やみつきガーリック 大盛ペペロンチーノ", calories: 863, protein: 34.3, fat: 41.2, carbs: 92.6 },
              { name: "味しみロースかつ丼", calories: 843, protein: 31.6, fat: 28.9, carbs: 117.2 },
              { name: "ケチャップソースの大盛ナポリタン", calories: 621, protein: 24.8, fat: 15.2, carbs: 100.7 },
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
              "セブンは7プレミアム・栄養表示・店舗数でダイエッターに使いやすいコンビニ",
              "7プレミアム さんまの塩焼（162kcal/P30g）はメニュー中トップクラスの高タンパク",
              "たんぱく質が摂れる鶏むね肉サラダ（199kcal/P21.8g）は低糖質ランチに最適",
              "おでんや炭火焼き鳥は1品20〜80kcal台で低カロリーの強い味方",
              "朝329+昼547+夕304kcal＝1,180kcal/P98.7gがセブンだけで実現可能",
              "濃厚G系ラーメン・大盛ペペロンチーノ・かつ丼など大盛り・揚げ物系は高カロリー",
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
              a: "「7プレミアム さんまの塩焼」が162kcal/P30gで、扱いやすいサイズの商品ではトップクラスです。次いで「こく旨キムチ鍋」（247kcal/P22.3g）、「たんぱく質が摂れる鶏むね肉サラダ」（199kcal/P21.8g）、「若鶏のからあげ（もも）5個入り」（291kcal/P18.5g）など。タンパク質効率を重視するなら、これらの商品を中心に選びましょう。",
            },
            {
              q: "セブンの200kcal以下のおすすめ商品は？",
              a: "炭火焼き鳥 塩（66kcal/P9.6g）、炭火焼き鳥 タレ（73kcal/P10.1g）、おでん 味しみたまご（77kcal/P6.7g）、7プレミアム 塩味そら豆（93kcal/P8.3g）、枝豆（94kcal/P8g）、国産大豆使用 冷奴セット（116kcal/P10.1g）が代表格。おでんは1品20〜80kcal台なので、複数組み合わせても300kcal以下で1食完結が可能です。",
            },
            {
              q: "セブンの朝食にダイエット向きなのは？",
              a: "「おでん 味しみたまご2個（154kcal/P13.4g）+枝豆（94kcal/P8g）+7プレミアム ブルーベリー（81kcal）」で約329kcal/P22g。または「炭火焼き鳥 塩+国産大豆使用 冷奴セット」で約182kcal/P19.7g。朝に高タンパクを摂ることで、満足感を得やすくなります。",
            },
            {
              q: "セブンのお弁当・ご飯ものでダイエット向きはどれ？",
              a: "「肉めし 炙り焼豚ロース弁当（麦飯）」（659kcal/P27.7g）は脂質7.5gと比較的低脂質で高タンパク。軽めにしたい場合は「和風ツナマヨネーズ御飯」（458kcal/P17.9g）も選択肢。逆に「味しみロースかつ丼」（843kcal/炭水化物117.2g）は高カロリーなので、頻度を抑えるのがおすすめです。",
            },
            {
              q: "セブンの夜食で太りにくいものは？",
              a: "おでん（牛すじ串26kcal/P3.8g、絹厚揚げ55kcal/P4g、牛もつ串64kcal/P4.1g、なんこつ入り鶏つくね串66kcal/P7g、絶品！牛すじハラミ串66kcal/P7.4g）、国産大豆使用 冷奴セット（116kcal/P10.1g）、炭火焼き鳥 塩（66kcal/P9.6g）が定番。3〜4品組み合わせても300kcal以下で済みます。",
            },
            {
              q: "セブンのデザート・アイスでカロリーが低めなのは？",
              a: "アイスなら「7プレミアム 北海道バニラバーマルチ」（67kcal/個）、「7プレミアム 白桃バーマルチ」（76kcal/個）が比較的低カロリー。フルーツでは7プレミアムパイナップル（54kcal）や7プレミアム ブルーベリー（81kcal）も選択肢です。ドーナツや大型のケーキ系は高カロリーになりやすいので、量と頻度に注意しましょう。",
            },
            {
              q: "セブンとローソン・ファミマ、ダイエット向きの違いは？",
              a: "セブンは「商品ラインナップの豊富さ＆店舗数」、ローソンは「たんぱく質シリーズの充実」、ファミマは「RIZAP共同開発商品」がそれぞれ知られています。セブンはさんまの塩焼やおでん、鶏むね肉サラダなど低脂質・高タンパクの選択肢が多いのが強み。気分や近くの店舗に合わせて3社を使い分けるのもおすすめです。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "DB実在しない商品（サラダチキン プレーン/スモーク/バー、味付き半熟ゆでたまご、寄せ豆腐、ゼロカロリー寒天ゼリー等）を全て削除し、さんまの塩焼・鶏むね肉サラダ・おでん・炭火焼き鳥など実在商品へ全面差し替え。ランキング・組み合わせプラン・FAQ・まとめの数値をDB実値で再検算" },
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
