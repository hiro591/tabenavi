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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】ローソンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング | たべなび",
  description:
    "ローソンでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。ロカボシリーズの活用法、朝昼晩のおすすめ組み合わせも解説。ローソンの強みを活かした賢いダイエット法。",
  keywords: [
    "ローソン ダイエット",
    "ローソン 低カロリー",
    "ローソン 高タンパク",
    "ローソン ロカボ",
    "ローソン ダイエット おすすめ",
    "コンビニ ダイエット ローソン",
    "ローソン 糖質制限",
  ],
  openGraph: {
    title:
      "【2026年最新】ローソンダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
    description:
      "ローソンの低カロリー・高タンパク商品を徹底解説。ロカボシリーズの活用法、朝昼晩の組み合わせプランも紹介。",
    url: "https://tabenavi.jp/guide/lawson-diet",
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
  dateModified: "2026-03-25",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/lawson-diet",
};

const tocItems = [
  { id: "why-lawson", label: "ローソンがダイエットに最適な理由" },
  { id: "low-calorie", label: "低カロリー商品TOP10" },
  { id: "high-protein", label: "高タンパク商品TOP5" },
  { id: "meal-plans", label: "朝昼晩のおすすめ組み合わせ" },
  { id: "low-carb", label: "ロカボ商品の活用法" },
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
            最終更新: 2026年3月25日 | 読了目安: 11分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          全国に約14,600店舗を展開するローソン。実は<Marker>糖質制限ダイエッターにとって最強のコンビニ</Marker>であることをご存知ですか？他のコンビニにはない独自の「ロカボ（低糖質）」商品ラインナップが、ローソン最大の武器です。
        </p>
        <p className="mb-4">
          ブランパンをはじめとするロカボシリーズは<Marker color="blue">糖質が通常商品の半分以下</Marker>でありながら、味もしっかり美味しい。さらにナチュラルローソンのヘルシー食品も含めると、ダイエット向け商品の充実度はコンビニNo.1と言えます。
        </p>
        <p className="mb-10">
          この記事では、ローソンで買える低カロリー商品TOP10と高タンパク商品TOP5をランキング形式で紹介し、朝昼晩の最適な組み合わせプランやロカボ商品の活用法も詳しく解説します。
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
                title: "「ロカボ」シリーズの圧倒的な品揃え",
                body: "ローソンは2012年からロカボ商品の開発に注力しており、現在ではパン・スイーツ・麺類など100品目以上のロカボ商品を展開。特にブランパンシリーズは糖質2.2gからと、糖質制限ダイエットの強い味方です。セブンイレブンやファミリーマートにはないローソン独自の強みです。",
              },
              {
                title: "ナチュラルローソン商品の充実",
                body: "健康志向のPBブランド「ナチュラルローソン」は、食物繊維たっぷりのお菓子やオーガニック食品を展開。ダイエット中の間食に最適な低糖質スナックやプロテインバーが豊富に揃っています。",
              },
              {
                title: "全商品の栄養成分表示+糖質量表示",
                body: "ローソンは全商品にカロリー・タンパク質・脂質・炭水化物だけでなく、糖質量と食物繊維量も個別に表示。糖質制限中の方にとって、商品選びが格段にしやすいコンビニです。",
              },
              {
                title: "「からあげクン」に高タンパク版が登場",
                body: "2025年からラインナップに加わった「たんぱく質がとれるからあげクン」は、1パック168kcalでタンパク質19g。ホットスナックで高タンパクが摂れるのはローソンならでは。",
              },
            ]}
          />

          <TipBox title="ローソンアプリのお試し引換券を活用">
            <p>
              ローソンアプリの「お試し引換券」を使えば、<Marker color="green">Pontaポイントやdポイントでダイエット商品を格安ゲット</Marker>できます。サラダチキンやブランパンが30~50%オフで手に入ることも多いので、こまめにチェックしましょう。
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
              { name: "1位: ブランパン 2個入", calories: 120, protein: 6.5, fat: 3.4, carbs: 14.4, highlight: true },
              { name: "2位: 味付き半熟たまご 2個入", calories: 130, protein: 12.8, fat: 8.8, carbs: 0.8, highlight: true },
              { name: "3位: 国産サラダチキン（プレーン）", calories: 114, protein: 24.0, fat: 1.4, carbs: 0.6, highlight: true },
              { name: "4位: NL ブランのチーズ蒸しケーキ", calories: 105, protein: 4.3, fat: 5.8, carbs: 15.5 },
              { name: "5位: 海藻と大根のサラダ", calories: 28, protein: 1.5, fat: 0.3, carbs: 5.2 },
              { name: "6位: もち麦入りおにぎり（枝豆と塩昆布）", calories: 175, protein: 4.2, fat: 1.5, carbs: 36.8 },
              { name: "7位: こんにゃく麺サラダ", calories: 85, protein: 3.8, fat: 3.2, carbs: 12.5 },
              { name: "8位: 豆腐バー（バジル）", calories: 108, protein: 11.2, fat: 5.8, carbs: 2.5 },
              { name: "9位: ゼロキロカロリーゼリー", calories: 0, protein: 0, fat: 0, carbs: 0, highlight: true },
              { name: "10位: NL 素焼きミックスナッツ 35g", calories: 194, protein: 5.2, fat: 17.5, carbs: 4.8 },
            ]}
          />

          <TipBox title="ブランパンが低カロリーな理由">
            <p>
              ブランパンは小麦の外皮（ブラン/ふすま）を使用したパンで、通常のロールパンが約95kcal/個のところ、<Marker>ブランパンは約60kcal/個</Marker>。さらに糖質はわずか2.2g（通常のロールパンは約14g）。食物繊維も5.4gと豊富で、腹持ちも良好です。
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
            title="国産サラダチキン（プレーン）"
            subtitle="¥225 ・ 低脂質の王者"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">114</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">24.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.4g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.6g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              ローソンのサラダチキンは<Marker>国産鶏むね肉100%使用</Marker>で品質も安心。プレーン以外にもハーブ・スモーク・レモン・タンドリーなどフレーバーが豊富。1パックでタンパク質24gは驚異的です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="たんぱく質がとれるからあげクン"
            subtitle="¥248 ・ ホットスナック系"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">168</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">19.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">7.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">5.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              からあげクンの高タンパク版。<Marker color="blue">168kcalでタンパク質19g</Marker>は揚げ物としては驚異的な数値。サラダチキンに飽きた時の救世主として活用できます。温かいホットスナックなので満足感も高いです。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="たんぱく質が摂れる鶏むね肉のサラダ"
            subtitle="¥420 ・ 野菜も一緒に"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">162</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">20.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">6.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">7.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="green">タンパク質20.5gと野菜が同時に摂れる</Marker>のが最大の強み。ドレッシングを別添えにしてカロリーコントロールもしやすい。ランチのメインとして優秀です。
            </p>
          </RankingCard>

          <TipBox title="4~5位もチェック">
            <p className="mb-1">4位: 豆腐バー（バジル）（P11.2g / 108kcal / ¥148）- 手軽に食べられるバータイプ</p>
            <p>5位: たんぱく質が摂れるチキンステーキ弁当（P32.5g / 462kcal / ¥598）- しっかり食べたい日に</p>
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
            ローソンだけで<Marker>1日1,400kcal以下・タンパク質80g以上・糖質100g以下</Marker>を達成するプランを紹介します。糖質制限とカロリー制限の両方に対応した組み合わせです。
          </p>

          <SubSectionHeading>朝食プラン（約320kcal / P20g / 糖質15g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              ブランパン2個 + 味付き半熟たまご1個 + カフェラテ（無糖）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 19.8g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                318 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                糖質 14.8g
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥380
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              ブランパンの糖質はわずか4.4g（2個分）。卵でタンパク質を補い、カフェラテのカフェインで代謝アップも狙えます。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約450kcal / P35g / 糖質30g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              サラダチキン（プレーン）+ もち麦入りおにぎり + 海藻と大根のサラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 29.7g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                317 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                糖質 38.2g
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥580
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼はもち麦おにぎりで炭水化物も摂取。もち麦は通常の白米より食物繊維が豊富で血糖値の上昇が緩やか。サラダチキンで高タンパクも確保。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約350kcal / P25g / 糖質20g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる鶏むね肉のサラダ + 豆腐バー + こんにゃく麺サラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 35.5g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                355 kcal
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                糖質 22.8g
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥680
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食は糖質を控えめに。こんにゃく麺で満腹感を出しつつ、鶏むね肉サラダと豆腐バーでタンパク質をしっかり確保。<Marker color="green">355kcalでタンパク質35.5gは驚異的</Marker>。
            </p>
          </div>

          <TipBox title="1日トータル">
            <p>
              朝318kcal + 昼317kcal + 夕355kcal = <Marker>合計990kcal / タンパク質85g / 糖質75.8g</Marker>。間食にナッツ35g（194kcal）やゼロカロリーゼリーを追加しても1,200kcal以内に収まります。糖質制限もカロリー制限も両立可能です。
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
            ロカボ商品の活用法
          </SectionHeading>

          <p className="mb-6">
            ローソンのロカボ商品は<Marker>糖質制限ダイエットの最強の味方</Marker>です。ここでは、カテゴリー別にロカボ商品の特徴と活用法を解説します。
          </p>

          <SubSectionHeading>ブランパンシリーズ（パン類）</SubSectionHeading>
          <p className="mb-4">
            ローソンの看板ロカボ商品。小麦ブラン（ふすま）を使用し、通常のパンと比べて<Marker color="blue">糖質を60~80%カット</Marker>しています。
          </p>

          <ComparisonTable
            headers={["商品名", "カロリー", "糖質", "食物繊維", "タンパク質"]}
            rows={[
              ["ブランパン 2個入", "120 kcal", "4.4g", "10.8g", "6.5g"],
              ["ブランの焼きカレーパン", "135 kcal", "7.5g", "8.2g", "5.8g"],
              ["ブランのスイートチョコロール", "142 kcal", "9.8g", "6.5g", "4.2g"],
              ["ブランのハムチーズパン", "155 kcal", "6.2g", "7.8g", "8.5g"],
              ["（参考）通常のロールパン 2個", "190 kcal", "28.0g", "1.2g", "5.0g"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>ロカボスイーツ</SubSectionHeading>
          <p className="mb-4">
            ダイエット中でも甘いものが食べたい。そんな願いを叶えてくれるのがローソンのロカボスイーツです。<Marker>糖質10g以下で本格的な味わい</Marker>のスイーツが揃っています。
          </p>

          <NutritionTable
            items={[
              { name: "NL ブランのチーズ蒸しケーキ", calories: 105, protein: 4.3, fat: 5.8, carbs: 15.5, highlight: true },
              { name: "NL アーモンドケーキ", calories: 185, protein: 3.5, fat: 12.5, carbs: 16.8 },
              { name: "NL バスチー（糖質オフ）", calories: 175, protein: 4.8, fat: 12.0, carbs: 12.5, highlight: true },
              { name: "ゼロキロカロリーゼリー（各種）", calories: 0, protein: 0, fat: 0, carbs: 0, highlight: true },
              { name: "NL くるみとココナッツのキャラメリゼ", calories: 165, protein: 2.5, fat: 12.0, carbs: 13.5 },
            ]}
          />

          <SubSectionHeading>ロカボお菓子・おつまみ</SubSectionHeading>
          <p className="mb-4">
            ナチュラルローソンブランドのお菓子は、<Marker color="green">糖質10g以下で食物繊維が豊富</Marker>な商品が多数。ダイエット中の間食やおつまみに最適です。
          </p>

          <NumberedList
            items={[
              {
                title: "素焼きミックスナッツ 35g（194kcal / 糖質4.0g）",
                body: "アーモンド・カシューナッツ・くるみをミックス。良質な脂質とビタミンEが豊富で、小腹が空いた時に最適。ただし食べ過ぎ注意（1袋をしっかり守る）。",
              },
              {
                title: "パリパリ食感の枝豆チップス（132kcal / 糖質11.2g）",
                body: "枝豆の風味が楽しめるチップス。通常のポテトチップスの半分以下のカロリーで、食物繊維も4.2g。おつまみの代替として優秀。",
              },
              {
                title: "堅焼きおっとっと（125kcal / 糖質15.8g）",
                body: "小麦全粒粉を使用し、食物繊維が3.5g。低カロリーながら満足感のあるお菓子。糖質はやや高めなので量に注意。",
              },
            ]}
          />

          <TipBox title="ロカボ商品の見分け方">
            <p>
              ローソンのロカボ商品には<Marker>緑色の「ロカボ」マーク</Marker>が目印。糖質量も大きく表示されているので、店頭で迷ったらまずこのマークを探しましょう。「NL」表記はナチュラルローソンブランドの商品です。糖質制限ダイエットの基本は<Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:text-sky-700 underline">糖質制限x外食ガイド</Link>で詳しく解説しています。
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
              <strong>からあげクン（通常版）:</strong> レギュラー味で220kcal、脂質14g。高タンパク版ではない通常版は脂質が高いため注意。
            </p>
            <p className="mb-2">
              <strong>Lチキ（各種）:</strong> 約300kcal、脂質18g以上。揚げ衣が厚くカロリーが高い。Lチキを買うなら「たんぱく質がとれるからあげクン」に切り替えを。
            </p>
            <p className="mb-2">
              <strong>大盛りパスタ・焼きそば:</strong> 約650~800kcal、糖質80g以上。1食でカロリー・糖質ともに大幅オーバー。
            </p>
            <p>
              <strong>プレミアムロールケーキ:</strong> 約210kcal、糖質14g。美味しいですが、ダイエット中のスイーツはロカボ版を選びましょう。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "からあげクン（レギュラー）", calories: 220, protein: 14.0, fat: 14.0, carbs: 8.0, highlight: true },
              { name: "Lチキ", calories: 302, protein: 15.8, fat: 18.5, carbs: 16.2 },
              { name: "大盛りナポリタン", calories: 685, protein: 17.5, fat: 20.0, carbs: 102.5 },
              { name: "プレミアムロールケーキ", calories: 210, protein: 3.5, fat: 13.5, carbs: 18.2 },
            ]}
          />

          <ComparisonTable
            headers={["商品", "NG版", "OK版（代替品）", "カロリー差"]}
            rows={[
              ["からあげ", "からあげクン通常(220kcal)", "高タンパクからあげクン(168kcal)", "-52 kcal"],
              ["パン", "メロンパン(380kcal)", "ブランパン2個(120kcal)", "-260 kcal"],
              ["スイーツ", "ロールケーキ(210kcal)", "ブランチーズ蒸しケーキ(105kcal)", "-105 kcal"],
              ["麺類", "大盛りパスタ(685kcal)", "こんにゃく麺サラダ(85kcal)", "-600 kcal"],
            ]}
            bestRowIndex={3}
          />
        </section>

        {/* CTA */}
        <CTABanner
          title="ローソンでのダイエット生活を始めよう"
          subtitle="たべなびで賢いメニュー選びをサポートします"
        />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ローソンダイエットの要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "ローソンはロカボ商品100品目以上でコンビニNo.1の低糖質ラインナップ",
              "ブランパンは2個で120kcal・糖質4.4gとダイエットの神商品",
              "国産サラダチキン（114kcal / P24g）は低カロリー＆高タンパクの王道",
              "たんぱく質がとれるからあげクンは揚げ物なのにP19gの新定番",
              "1日990kcal・P85g・糖質75gのプランがローソンだけで実現可能",
              "ロカボスイーツで糖質10g以下のスイーツが楽しめる",
              "Lチキ・大盛りパスタ・プレミアムロールケーキはダイエット中NG",
              "お試し引換券でダイエット商品をお得にゲット",
            ]}
          />

          <p className="mb-4 mt-6">
            ローソンは<Marker>「糖質制限ダイエット」をするなら最もおすすめのコンビニ</Marker>です。ブランパンシリーズとサラダチキンを組み合わせるだけで、簡単に低カロリー・低糖質・高タンパクの食事が完成します。たべなびを活用して、ローソンでの賢い食事選びを始めましょう。
          </p>

          <p className="mb-4">
            他のコンビニとの比較も気になる方は、<Link href="/guide/seven-eleven-diet" className="text-sky-600 hover:text-sky-700 underline">セブンイレブンダイエットガイド</Link>もぜひチェックしてください。基礎代謝に合ったカロリー設定を知りたい方は<Link href="/guide/bmr-calculator" className="text-sky-600 hover:text-sky-700 underline">基礎代謝計算ガイド</Link>が参考になります。
          </p>

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗により異なる場合があります。商品は予告なく変更・終了する場合があります。
          </p>
        </section>

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
