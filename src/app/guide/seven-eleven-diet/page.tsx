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
  dateModified: "2026-03-23",
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
            最終更新: 2026年3月23日 | 読了目安: 9分
          </p>
        </div>

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
              { name: "2位: 茶碗蒸し", calories: 90, protein: 7.5, fat: 4.2, carbs: 5.8 },
              { name: "3位: サラダチキンバー（プレーン）", calories: 108, protein: 21.6, fat: 1.5, carbs: 1.8, highlight: true },
              { name: "4位: サラダチキン（プレーン）", calories: 113, protein: 24.3, fat: 1.2, carbs: 0.5 },
              { name: "5位: 7プレミアム 寄せ豆腐", calories: 118, protein: 10.5, fat: 6.8, carbs: 3.2 },
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

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            セブンイレブンダイエットの要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "セブンは7プレミアム・栄養表示・店舗数でダイエッターに最適なコンビニ",
              "サラダチキン（113kcal / P24.3g）は低カロリー＆高タンパクの王道",
              "ゼロカロリー寒天ゼリーは甘いもの欲求の救世主",
              "1日1,090kcal・P87.5gの食事プランがセブンだけで実現可能",
              "揚げ鶏・菓子パン・大盛りパスタはダイエット中NG",
              "アプリのクーポンを活用してお得にダイエット食品をゲット",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。
          </p>
        </section>

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
