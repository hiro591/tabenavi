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
  NumberedList,
  CheckList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/bmr-calculator" },
  title:
    "【2026年最新】基礎代謝の計算方法と上げ方｜痩せやすい体を作る完全ガイド | たべなび",
  description:
    "基礎代謝（BMR）の計算方法をハリス-ベネディクト式で解説。年齢別・性別の平均値一覧、基礎代謝を上げる7つの方法、1日の摂取カロリーの計算方法まで完全網羅。外食でのカロリー管理にも活用できます。",
  keywords: [
    "基礎代謝 計算",
    "基礎代謝 上げる",
    "代謝 上げる 方法",
    "BMR 計算",
    "基礎代謝量 平均",
    "基礎代謝 年齢別",
    "ハリスベネディクト 計算",
    "1日 消費カロリー 計算",
  ],
  openGraph: {
    title:
      "【2026年最新】基礎代謝の計算方法と上げ方｜痩せやすい体を作る完全ガイド",
    description:
      "基礎代謝の計算方法（ハリス-ベネディクト式）、年齢・性別の平均値、代謝を上げる7つの方法を徹底解説。",
    url: "https://www.tabenavi.jp/guide/bmr-calculator",
    type: "article",
  },
};

/**
 * Static, trusted JSON-LD structured data for SEO.
 * All values are hardcoded string literals — no user input is included.
 * This is the standard pattern used across all /guide/ pages in this project.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】基礎代謝の計算方法と上げ方｜痩せやすい体を作る完全ガイド",
  description:
    "基礎代謝（BMR）の計算方法をハリス-ベネディクト式で解説。年齢別・性別の平均値、基礎代謝を上げる7つの方法まで。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/bmr-calculator",
};

const tocItems = [
  { id: "what-is-bmr", label: "基礎代謝とは" },
  { id: "calculation", label: "基礎代謝の計算方法" },
  { id: "average-values", label: "年齢別・性別の平均値" },
  { id: "seven-methods", label: "基礎代謝を上げる7つの方法" },
  { id: "daily-calories", label: "1日の摂取カロリーを計算する方法" },
  { id: "eating-out", label: "外食での実践" },
  { id: "summary", label: "まとめ" },
];

export default function BmrCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data — all values are static trusted strings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="基礎代謝の計算方法と上げ方"
        subtitle="痩せやすい体を作る完全ガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=400&fit=crop"
        breadcrumb="基礎代謝計算ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="bmr-calculator">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 14分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエットしているのに痩せない」「同じ食事量なのに太る人と太らない人がいる」。その答えの鍵を握るのが<Marker>基礎代謝（BMR: Basal Metabolic Rate）</Marker>です。
        </p>
        <p className="mb-4">
          基礎代謝は1日の消費カロリーの約60~70%を占める、最も大きなエネルギー消費源です。基礎代謝を正しく理解し、高く保つことが、<Marker color="blue">「食べても太りにくい体」を作る最も確実な方法</Marker>です。
        </p>
        <p className="mb-10">
          この記事では、基礎代謝の計算方法（ハリス-ベネディクト式）から、年齢別・性別の平均値、基礎代謝を上げる7つの方法、さらに基礎代謝から1日の適切な摂取カロリーを計算する方法まで、具体的な数値とともに徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=400&fit=crop"
          alt="トレーニングと健康的な生活をイメージした写真"
        />

        {/* Section 1: 基礎代謝とは */}
        <section className="mb-16">
                  <QuickAnswer
          question={"基礎代謝（BMR）とはどのように計算しますか？"}
          answer={"基礎代謝はハリス-ベネディクト式で計算できます。男性は「BMR = 88.362 + (13.397 × 体重kg) + (4.799 × 身長cm) - (5.677 × 年齢)」、女性は「BMR = 447.593 + (9.247 × 体重kg) + (3.098 × 身長cm) - (4.330 × 年齢)」です。例えば30歳男性170cm/70kgの場合、基礎代謝は約1,672kcal/日となり、これが1日の消費カロリーの60~70%を占めます。"}
        />

        <SectionHeading id="what-is-bmr">
            基礎代謝とは
          </SectionHeading>

          <p className="mb-4">
            基礎代謝とは、<Marker>生命を維持するために最低限必要なエネルギー量</Marker>のことです。何もせずに横になっている状態でも、心臓を動かしたり、呼吸をしたり、体温を維持したりするためにカロリーが消費されています。
          </p>

          <p className="mb-4">
            1日の総消費カロリー（TDEE: Total Daily Energy Expenditure）は、主に3つの要素で構成されています。
          </p>

          <ComparisonTable
            headers={["要素", "割合", "内容"]}
            rows={[
              ["基礎代謝（BMR）", "約60~70%", "生命維持に必要な最低限のエネルギー"],
              ["活動代謝（EAT）", "約20~30%", "日常動作・運動によるエネルギー消費"],
              ["食事誘発性熱産生（DIT）", "約10%", "食事の消化・吸収に使われるエネルギー"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            つまり、<Marker color="blue">1日に消費するカロリーの大部分は基礎代謝</Marker>です。運動で消費するカロリーよりもはるかに多いため、基礎代謝を高く保つことがダイエットにおいて最も重要な戦略と言えます。
          </p>

          <TipBox title="基礎代謝が高い人の特徴">
            <p className="mb-2">基礎代謝が高い人には以下の共通点があります:</p>
            <p className="mb-1">- <Marker color="green">筋肉量が多い</Marker>（最大の決定要因）</p>
            <p className="mb-1">- 年齢が若い（10代~20代がピーク）</p>
            <p className="mb-1">- 男性である（女性より平均200~300kcal高い）</p>
            <p className="mb-1">- 体表面積が大きい（身長が高い・体格が大きい）</p>
            <p>- 甲状腺機能が正常</p>
          </TipBox>
        </section>

        {/* Section 2: 計算方法 */}
        <section className="mb-16">
          <SectionHeading id="calculation">
            基礎代謝の計算方法（ハリス-ベネディクト式）
          </SectionHeading>

          <p className="mb-4">
            基礎代謝の計算で最も広く使われているのが<Marker>ハリス-ベネディクト式（Harris-Benedict Equation）</Marker>です。1919年に発表され、1984年に改良版（Revised Harris-Benedict）が提案されました。ここでは改良版を紹介します。
          </p>

          <SubSectionHeading>改良版ハリス-ベネディクト式</SubSectionHeading>

          <div className="bg-white rounded-lg border-2 border-sky-200 p-6 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3 text-lg">男性の基礎代謝（kcal/日）</p>
            <div className="bg-sky-50 rounded-lg p-4 mb-4">
              <p className="font-mono text-sky-800 font-bold text-sm sm:text-base">
                BMR = 88.362 + (13.397 x 体重kg) + (4.799 x 身長cm) - (5.677 x 年齢)
              </p>
            </div>
            <p className="font-bold text-gray-900 mb-3 text-lg">女性の基礎代謝（kcal/日）</p>
            <div className="bg-pink-50 rounded-lg p-4">
              <p className="font-mono text-pink-800 font-bold text-sm sm:text-base">
                BMR = 447.593 + (9.247 x 体重kg) + (3.098 x 身長cm) - (4.330 x 年齢)
              </p>
            </div>
          </div>

          <SubSectionHeading>計算例1: 30歳男性（170cm / 70kg）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              BMR = 88.362 + (13.397 x 70) + (4.799 x 170) - (5.677 x 30)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              BMR = 88.362 + 937.79 + 815.83 - 170.31
            </p>
            <p className="font-bold text-gray-900 text-lg">
              BMR = <Marker>約1,672 kcal/日</Marker>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              この男性は何もしなくても1日に1,672kcalを消費します。
            </p>
          </div>

          <SubSectionHeading>計算例2: 25歳女性（158cm / 55kg）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              BMR = 447.593 + (9.247 x 55) + (3.098 x 158) - (4.330 x 25)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              BMR = 447.593 + 508.585 + 489.484 - 108.25
            </p>
            <p className="font-bold text-gray-900 text-lg">
              BMR = <Marker>約1,337 kcal/日</Marker>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              この女性は何もしなくても1日に1,337kcalを消費します。
            </p>
          </div>

          <SubSectionHeading>計算例3: 40歳男性（175cm / 80kg）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              BMR = 88.362 + (13.397 x 80) + (4.799 x 175) - (5.677 x 40)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              BMR = 88.362 + 1,071.76 + 839.825 - 227.08
            </p>
            <p className="font-bold text-gray-900 text-lg">
              BMR = <Marker>約1,773 kcal/日</Marker>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              この男性は何もしなくても1日に1,773kcalを消費します。
            </p>
          </div>

          <SubSectionHeading>もう一つの計算式: 国立健康・栄養研究所の式</SubSectionHeading>
          <p className="mb-4">
            日本人向けには、国立健康・栄養研究所が提案する式もあります。日本人のデータに基づいているため、<Marker color="green">日本人にはこちらの方が正確</Marker>という意見もあります。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">国立健康・栄養研究所の式</p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>男性:</strong> BMR = (0.0481 x 体重kg + 0.0234 x 身長cm - 0.0138 x 年齢 - 0.4235) x 1000 / 4.186
            </p>
            <p className="text-sm text-gray-700">
              <strong>女性:</strong> BMR = (0.0481 x 体重kg + 0.0234 x 身長cm - 0.0138 x 年齢 - 0.9708) x 1000 / 4.186
            </p>
          </div>

          <WarningBox title="計算式はあくまで推定値">
            <p>
              どの計算式も推定値であり、<Marker>実際の基礎代謝とは10~15%程度の誤差がある</Marker>ことを理解しておきましょう。正確な基礎代謝を知りたい場合は、医療機関やスポーツジムの間接熱量測定（呼気ガス分析）がおすすめです。
            </p>
          </WarningBox>
        </section>

        {/* Section 3: 年齢別・性別の平均値 */}
        <section className="mb-16">
          <SectionHeading id="average-values">
            年齢別・性別の基礎代謝平均値
          </SectionHeading>

          <p className="mb-6">
            厚生労働省「日本人の食事摂取基準（2025年版）」に基づく、年齢別・性別の基礎代謝量の目安です。<Marker>自分の年齢・性別の平均値と比較して、高いか低いかを確認</Marker>しましょう。
          </p>

          <SubSectionHeading>男性の基礎代謝平均値</SubSectionHeading>
          <ComparisonTable
            headers={["年齢", "基準体重(kg)", "基礎代謝基準値(kcal/kg/日)", "基礎代謝量(kcal/日)"]}
            rows={[
              ["15~17歳", "59.7", "27.0", "1,610"],
              ["18~29歳", "64.5", "23.7", "1,530"],
              ["30~49歳", "68.1", "22.5", "1,530"],
              ["50~64歳", "68.0", "21.8", "1,480"],
              ["65~74歳", "65.0", "21.6", "1,400"],
              ["75歳以上", "59.6", "21.5", "1,280"],
            ]}
          />

          <SubSectionHeading>女性の基礎代謝平均値</SubSectionHeading>
          <ComparisonTable
            headers={["年齢", "基準体重(kg)", "基礎代謝基準値(kcal/kg/日)", "基礎代謝量(kcal/日)"]}
            rows={[
              ["15~17歳", "51.9", "25.3", "1,310"],
              ["18~29歳", "50.3", "22.1", "1,110"],
              ["30~49歳", "53.0", "21.9", "1,160"],
              ["50~64歳", "53.8", "20.7", "1,110"],
              ["65~74歳", "52.1", "20.7", "1,080"],
              ["75歳以上", "48.8", "20.7", "1,010"],
            ]}
          />

          <TipBox title="基礎代謝が平均より低い場合">
            <p>
              自分の基礎代謝が同年代の平均より低い場合、<Marker color="green">筋肉量が少ない可能性</Marker>があります。後述する「基礎代謝を上げる7つの方法」を実践することで改善できます。特に筋トレの習慣がない方は、筋肉量を増やすことで大きな改善が期待できます。
            </p>
          </TipBox>

          <p className="mb-4">
            なお、基礎代謝は<Marker>10代後半をピークに年齢とともに低下</Marker>していきます。30代以降は10年ごとに約2~3%ずつ低下し、これが「年齢とともに太りやすくなる」主な原因です。ただし、筋肉量を維持すれば、この低下を大幅に抑えることが可能です。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop"
          alt="筋力トレーニングで基礎代謝を上げるイメージ"
        />

        {/* Section 4: 基礎代謝を上げる7つの方法 */}
        <section className="mb-16">
          <SectionHeading id="seven-methods">
            基礎代謝を上げる7つの方法
          </SectionHeading>

          <p className="mb-6">
            基礎代謝を高く保つことは、<Marker>ダイエットの成功率を劇的に上げる</Marker>最も効果的な戦略です。科学的根拠のある7つの方法を解説します。
          </p>

          <SubSectionHeading>1. 筋肉量を増やす（最重要）</SubSectionHeading>
          <p className="mb-4">
            基礎代謝を上げる最も効果的な方法は<Marker>筋肉量を増やすこと</Marker>です。筋肉は安静時でもエネルギーを消費する「代謝が活発な組織」であり、筋肉1kgあたり約13kcal/日を消費します。
          </p>
          <p className="mb-4">
            「たった13kcal？」と思うかもしれませんが、筋トレで筋肉量を3kg増やすと年間で14,000kcal（脂肪約2kg分）の消費増加になります。さらに、筋肉量が多い人は<Marker color="blue">運動後の代謝亢進（EPOC）も大きくなる</Marker>ため、実際の効果はさらに大きくなります。
          </p>

          <ComparisonTable
            headers={["筋肉量の変化", "基礎代謝の変化", "年間の消費カロリー差", "脂肪換算"]}
            rows={[
              ["+1kg", "+13 kcal/日", "+4,745 kcal", "約0.7kg"],
              ["+3kg", "+39 kcal/日", "+14,235 kcal", "約2.0kg"],
              ["+5kg", "+65 kcal/日", "+23,725 kcal", "約3.3kg"],
              ["+10kg", "+130 kcal/日", "+47,450 kcal", "約6.6kg"],
            ]}
          />

          <TipBox title="筋トレ初心者におすすめのメニュー">
            <p className="mb-2">
              大きな筋肉群を鍛えるのが効率的です:
            </p>
            <p className="mb-1">- <strong>スクワット:</strong> 大腿四頭筋・ハムストリングス・大臀筋</p>
            <p className="mb-1">- <strong>ベンチプレス/腕立て伏せ:</strong> 大胸筋・三角筋・上腕三頭筋</p>
            <p>- <strong>デッドリフト/懸垂:</strong> 広背筋・脊柱起立筋・僧帽筋</p>
          </TipBox>

          <SubSectionHeading>2. タンパク質を十分に摂取する</SubSectionHeading>
          <p className="mb-4">
            タンパク質は<Marker>食事誘発性熱産生（DIT）が最も高い栄養素</Marker>です。摂取カロリーの20~30%が消化・吸収の過程で消費されます（炭水化物は5~10%、脂質は0~3%）。
          </p>
          <p className="mb-4">
            例えば、1日2,000kcal摂取する場合:
          </p>

          <ComparisonTable
            headers={["食事内容", "DIT消費カロリー", "差分"]}
            rows={[
              ["タンパク質30% / 脂質30% / 炭水化物40%", "約190 kcal", "+60 kcal"],
              ["タンパク質20% / 脂質35% / 炭水化物45%", "約150 kcal", "+20 kcal"],
              ["タンパク質15% / 脂質35% / 炭水化物50%", "約130 kcal", "基準"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            <Marker color="blue">タンパク質の割合を増やすだけで、1日60kcal多く消費</Marker>できます。年間で21,900kcal、脂肪約3kgの差になります。タンパク質の詳しい摂り方は<Link href="/guide/pfc-guide" className="text-sky-600 hover:text-sky-700 underline">PFCバランス入門ガイド</Link>をご確認ください。
          </p>

          <SubSectionHeading>3. 水分を十分に摂取する</SubSectionHeading>
          <p className="mb-4">
            水を飲むだけで代謝が上がることが研究で確認されています。500mlの水を飲むと<Marker>代謝が一時的に上昇する</Marker>ことが報告されています（Boschmann et al., 2003）。ただしその程度には個人差があります。
          </p>
          <p className="mb-4">
            1日に2リットルの水を飲む習慣があれば、それだけで約100kcal/日の追加消費が見込めます。特に<Marker color="green">冷たい水よりも常温~やや温かい水が効果的</Marker>です。
          </p>

          <SubSectionHeading>4. 十分な睡眠を取る</SubSectionHeading>
          <p className="mb-4">
            睡眠不足は基礎代謝を低下させます。シカゴ大学の研究では、<Marker>睡眠不足は脂肪の減少を妨げることが研究で示されていますが、その程度は研究条件や個人差によって異なります</Marker>ことが報告されています。
          </p>
          <p className="mb-4">
            また、睡眠不足はグレリン（空腹ホルモン）を増加させ、レプチン（満腹ホルモン）を減少させるため、食欲のコントロールも難しくなります。<Marker color="blue">最低7時間、理想は7.5~8時間の睡眠</Marker>を確保しましょう。
          </p>

          <SubSectionHeading>5. 温活で体温を上げる</SubSectionHeading>
          <p className="mb-4">
            体温の上昇は基礎代謝に影響を与えることが報告されていますが、その程度は個人差があります。日本人の平均体温は過去50年間で約0.7度低下しており、これが現代人の代謝低下の一因です。
          </p>

          <CheckList
            items={[
              "朝一番に白湯を飲む（内臓を温めて代謝スイッチON）",
              "入浴はシャワーだけでなく湯船に浸かる（38~40度で15分以上）",
              "生姜・唐辛子・シナモンなど体を温める食材を積極的に摂取",
              "冷たい飲み物を避け、常温~温かい飲み物を選ぶ",
              "腹巻きやレッグウォーマーで体幹部・下肢を保温",
            ]}
          />

          <SubSectionHeading>6. カフェインを活用する</SubSectionHeading>
          <p className="mb-4">
            カフェインには代謝を<Marker>上昇させる効果</Marker>があることが複数の研究で確認されていますが、その程度は摂取量や個人の体質によって異なります。
          </p>

          <WarningBox title="カフェインの注意点">
            <p className="mb-2">
              <strong>摂取上限:</strong> 1日400mg以下（コーヒー約4~5杯）が推奨上限です。
            </p>
            <p className="mb-2">
              <strong>摂取タイミング:</strong> 午後3時以降のカフェインは睡眠に影響するため避けましょう。睡眠の質が下がると逆効果です。
            </p>
            <p>
              <strong>耐性:</strong> 毎日飲んでいると効果が低下します。週に1~2日カフェインを抜く日を作ると効果が持続します。
            </p>
          </WarningBox>

          <SubSectionHeading>7. NEAT（非運動性活動熱産生）を増やす</SubSectionHeading>
          <p className="mb-4">
            NEATとは、運動以外の日常動作で消費されるカロリーのことです。<Marker>立ち仕事・歩行・家事・そわそわした動きなど</Marker>が含まれます。実はNEATには個人差がかなり大きいことが示唆されています。
          </p>

          <NumberedList
            items={[
              {
                title: "通勤時に1駅分歩く",
                body: "片道15分の歩行で約50kcal消費。往復で100kcal/日、月間で約3,000kcalの差になります。",
              },
              {
                title: "エレベーターより階段を使う",
                body: "1階分の階段昇降で約3kcal消費。1日に10階分登れば30kcal、月間900kcalの追加消費。",
              },
              {
                title: "デスクワーク中に30分ごとに立つ",
                body: "立っているだけで座位より約0.7kcal/分多く消費します。1日に2時間多く立つだけで約84kcalの差です。",
              },
              {
                title: "家事を積極的にこなす",
                body: "掃除機がけ30分で約90kcal、料理30分で約70kcal。日々の家事をサボらないだけでNEATは大幅に増えます。",
              },
            ]}
          />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="基礎代謝に合った外食メニューを探そう"
          subtitle="たべなびなら自分のカロリー目標に合ったメニューがすぐ見つかります"
        />

        {/* Section 5: 1日の摂取カロリーを計算する方法 */}
        <section className="mb-16">
          <SectionHeading id="daily-calories">
            基礎代謝から1日の摂取カロリーを計算する方法
          </SectionHeading>

          <p className="mb-4">
            基礎代謝が分かったら、次は<Marker>1日の総消費カロリー（TDEE）</Marker>を計算しましょう。TDEEは基礎代謝に「活動係数」を掛けて算出します。
          </p>

          <SubSectionHeading>STEP 1: 活動係数を選ぶ</SubSectionHeading>
          <ComparisonTable
            headers={["活動レベル", "活動係数", "具体例"]}
            rows={[
              ["ほぼ運動しない", "1.2", "デスクワーク中心、運動習慣なし"],
              ["軽い運動（週1~3回）", "1.375", "週1~2回のジム、通勤で歩く程度"],
              ["中程度の運動（週3~5回）", "1.55", "週3~4回のジム、スポーツ習慣あり"],
              ["激しい運動（週6~7回）", "1.725", "毎日の筋トレ、競技スポーツ"],
              ["非常に激しい運動", "1.9", "肉体労働+毎日の激しい運動"],
            ]}
          />

          <SubSectionHeading>STEP 2: TDEEを計算する</SubSectionHeading>
          <div className="bg-white rounded-lg border-2 border-sky-200 p-6 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3 text-lg">TDEE = 基礎代謝 x 活動係数</p>
          </div>

          <SubSectionHeading>計算例: 30歳男性（基礎代謝1,672kcal）・週3回ジム通い</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              TDEE = 1,672 x 1.55 = <Marker>約2,592 kcal/日</Marker>
            </p>
            <p className="text-sm text-gray-700 mb-4">
              この男性が体重を維持するには、1日約2,592kcalの食事が必要です。
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-800 mb-2">目的別の摂取カロリー目安:</p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>減量（月2kg減）:</strong> 2,592 - 500 = <Marker color="blue">約2,092 kcal/日</Marker>
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>維持:</strong> <Marker color="green">約2,592 kcal/日</Marker>
              </p>
              <p className="text-sm text-gray-700">
                <strong>増量（筋肥大）:</strong> 2,592 + 300 = 約2,892 kcal/日
              </p>
            </div>
          </div>

          <SubSectionHeading>計算例: 25歳女性（基礎代謝1,337kcal）・軽い運動</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              TDEE = 1,337 x 1.375 = <Marker>約1,838 kcal/日</Marker>
            </p>
            <p className="text-sm text-gray-700 mb-4">
              この女性が体重を維持するには、1日約1,838kcalの食事が必要です。
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-bold text-gray-800 mb-2">目的別の摂取カロリー目安:</p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>減量（月2kg減）:</strong> 1,838 - 500 = <Marker color="blue">約1,338 kcal/日</Marker>
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>維持:</strong> <Marker color="green">約1,838 kcal/日</Marker>
              </p>
              <p className="text-sm text-gray-700">
                <strong>増量（筋肥大）:</strong> 1,838 + 200 = 約2,038 kcal/日
              </p>
            </div>
          </div>

          <WarningBox title="減量時の最低ライン">
            <p>
              どんなに早く痩せたくても、<Marker>摂取カロリーを基礎代謝以下にしてはいけません</Marker>。基礎代謝以下の食事は筋肉の大幅な減少、代謝の急激な低下、ホルモンバランスの乱れを引き起こし、リバウンドのリスクが大幅に高まります。詳しくは<Link href="/guide/rebound-prevention" className="text-sky-600 hover:text-sky-700 underline">リバウンド防止ガイド</Link>をご覧ください。
            </p>
          </WarningBox>

          <TipBox title="PFCバランスの計算">
            <p>
              TDEEが分かったら、次はPFC（タンパク質・脂質・炭水化物）のバランスを決めましょう。ダイエット中の推奨PFC比率は<Marker color="green">P30% : F25% : C45%</Marker>です。詳しい計算方法は<Link href="/guide/pfc-guide" className="text-sky-600 hover:text-sky-700 underline">PFCバランス入門ガイド</Link>で解説しています。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
          alt="栄養バランスの整った食事プレート"
        />

        {/* Section 6: 外食での実践 */}
        <section className="mb-16">
          <SectionHeading id="eating-out">
            外食での実践（チェーン店でカロリー管理）
          </SectionHeading>

          <p className="mb-6">
            基礎代謝とTDEEが分かっても、「外食中心の生活ではカロリー管理が難しい」と感じる方も多いでしょう。しかし、大手チェーン店のメニューは栄養情報が公開されているため、<Marker>計画的に選べば外食でも正確なカロリー管理が可能</Marker>です。
          </p>

          <SubSectionHeading>TDEE 2,000kcalの方の外食プラン例</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">1日の目標: 1,500kcal（減量中）/ P120g</p>
            <p className="font-bold text-gray-900 mb-2">
              朝: セブンイレブン / ゆでたまご2個 + ギリシャヨーグルト（230kcal / P22g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              昼: サブウェイ / ローストチキンSUB（310kcal / P22g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              夜: 大戸屋 / 鶏むね肉と野菜の黒酢あん定食（680kcal / P35g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              間食: サラダチキンバー（108kcal / P21.6g）
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                合計 1,328 kcal
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 100.6g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                目標内でクリア
              </span>
            </div>
          </div>

          <SubSectionHeading>TDEE別おすすめチェーン店メニュー</SubSectionHeading>
          <p className="mb-4">
            TDEEに応じたおすすめメニューの組み合わせです。
          </p>

          <NutritionTable
            items={[
              { name: "サブウェイ ローストチキン", calories: 310, protein: 22.5, fat: 4.5, carbs: 42.0, highlight: true },
              { name: "大戸屋 しまほっけ定食", calories: 520, protein: 38.0, fat: 15.0, carbs: 55.0, highlight: true },
              { name: "ガスト 若鶏のグリル", calories: 350, protein: 32.0, fat: 12.5, carbs: 22.0, highlight: true },
              { name: "吉野家 牛丼並盛", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2 },
              { name: "すき家 牛丼ライト", calories: 425, protein: 26.5, fat: 22.0, carbs: 24.0 },
              { name: "松屋 定食（焼き魚）", calories: 550, protein: 35.0, fat: 12.0, carbs: 70.0 },
            ]}
          />

          <p className="mb-4">
            各チェーンの詳細なダイエットメニューは以下のガイドを参照してください:
          </p>

          <CheckList
            items={[
              "サブウェイのダイエットメニューは /guide/subway-diet で解説",
              "大戸屋のカロリー管理は /guide/ootoya-diet で解説",
              "ガストのダイエット対応メニューは /guide/gusto-diet で解説",
              "外食ダイエットの総合ガイドは /guide/eating-out-diet で解説",
            ]}
          />
        </section>

        {/* CTA */}
        <CTABanner
          title="基礎代謝に合った食事管理を始めよう"
          subtitle="たべなびで外食メニューのカロリーをサクッと検索"
        />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            基礎代謝に関する重要ポイントを振り返りましょう。
          </p>

          <CheckList
            items={[
              "基礎代謝は1日の消費カロリーの60~70%を占める最重要要素",
              "ハリス-ベネディクト式で自分の基礎代謝を計算できる",
              "30歳男性170cm/70kgの場合、基礎代謝は約1,672kcal",
              "25歳女性158cm/55kgの場合、基礎代謝は約1,337kcal",
              "TDEE = 基礎代謝 x 活動係数で1日の消費カロリーを算出",
              "基礎代謝を上げる最大の方法は筋肉量の増加",
              "タンパク質を多く摂るとDIT（食事誘発性熱産生）が上がる",
              "水分摂取・睡眠・温活・カフェイン・NEATも代謝向上に有効",
              "減量時でも摂取カロリーは基礎代謝以下にしない",
              "外食でもチェーン店の栄養情報を活用すれば正確なカロリー管理が可能",
            ]}
          />

          <p className="mb-4 mt-6">
            基礎代謝を理解し、高く保つことは<Marker>一生太らない体づくりの基本</Marker>です。まずは自分の基礎代謝を計算し、TDEEに基づいた適切な食事量を把握することから始めましょう。たべなびを活用すれば、外食中心の生活でも基礎代謝に合った栄養管理が簡単にできます。
          </p>

          <p className="text-xs text-gray-400 mt-4">
            ※計算式による基礎代謝は推定値です。正確な測定には医療機関での間接熱量測定が必要です。持病のある方や極端な食事制限を検討中の方は、必ず医師にご相談ください。
          </p>
        </section>

        {/* Article Footer */}
        <FAQSection
          slug="bmr-calculator"
          items={[
            { q: "基礎代謝を上げる最も効果的な方法は何ですか？", a: "筋肉量を増やすことが最重要です。筋肉1kgあたり約13kcal/日を消費するため、筋トレで筋肉量を3kg増やすと年間で約14,235kcal、脂肪約2kg分の消費増加につながります。スクワット・ベンチプレス・デッドリフトなど大きな筋肉群を鍛えるのが効率的です。" },
            { q: "基礎代謝と1日の摂取カロリーの関係は？", a: "1日の消費カロリー（TDEE）は「基礎代謝×活動係数」で求めます。例えば基礎代謝1,672kcalで週3回ジム通い（係数1.55）の場合、TDEE=約2,592kcal/日。減量は月2kg目安で500kcal減（約2,092kcal）、維持は2,592kcalが目安です。摂取カロリーを基礎代謝以下にすると筋肉減少とリバウンドリスクが高まります。" },
            { q: "タンパク質を多く摂ると代謝が上がるのはなぜですか？", a: "タンパク質は食事誘発性熱産生（DIT）が最も高く、摂取カロリーの20~30%が消化・吸収で消費されます。炭水化物は5~10%、脂質は0~3%なため、タンパク質の割合を増やすだけで1日60kcal多く消費でき、年間21,900kcal、脂肪約3kgの差につながります。" },
            { q: "年齢とともに基礎代謝が低下する理由は？", a: "基礎代謝は10代後半をピークに低下し、30代以降は10年ごとに約2~3%ずつ減少します。これが「年齢とともに太りやすくなる」主原因です。ただし筋肉量を維持すればこの低下を大幅に抑制可能。30~49歳男性の平均は約1,530kcal、50~64歳は約1,480kcalです。" },
            { q: "外食でカロリー管理をするコツは何ですか？", a: "大手チェーン店は栄養情報が公開されているため計画的に選べます。例えば減量中1,500kcal目標なら、朝セブン・イレブン（230kcal）、昼サブウェイローストチキン（310kcal）、夜大戸屋定食（680kcal）で目標内に収まります。サブウェイ・大戸屋・ガストなど高タンパクメニューを活用するのが効果的です。" },
          ]}
        />

        <ArticleFooter currentSlug="bmr-calculator" />

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
