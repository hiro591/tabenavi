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
  ComparisonTable,
  CalorieBar,
  ProteinBar,
  MenuPhoto,
  SourceNote,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "カレーチェーン カロリー・栄養比較｜CoCo壱・すき家・松屋のカレーを徹底比較【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/curry-comparison" },
  description:
    "CoCo壱番屋・すき家・松屋のカレーを、カロリー・タンパク質・PFC・価格の実データで徹底比較。標準サイズで比べると最も低カロリーはすき家、高タンパクは松屋。ライス量やトッピングでカロリーを抑えるコツも紹介します。",
  keywords: [
    "カレー カロリー 比較",
    "ココイチ カロリー",
    "すき家 カレー カロリー",
    "松屋 カレー カロリー",
    "カレー ダイエット",
    "カレーチェーン 太らない",
  ],
  openGraph: {
    title: "カレーチェーン カロリー・栄養比較｜CoCo壱・すき家・松屋のカレーを徹底比較",
    description:
      "CoCo壱番屋・すき家・松屋のカレーを、カロリー・タンパク質・PFC・価格の実データで徹底比較。太りにくいカレーの選び方、ライス量やトッピングでカロリーを抑えるコツを紹介します。",
    url: "https://www.tabenavi.jp/guide/curry-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "カレーチェーン カロリー・栄養比較｜CoCo壱・すき家・松屋のカレーを徹底比較",
  description:
    "CoCo壱番屋・すき家・松屋のカレーを、カロリー・タンパク質・PFC・価格の実データで徹底比較。太りにくいカレーの選び方、ライス量やトッピングでカロリーを抑えるコツを紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/curry-comparison",
};

const tocItems = [
  { id: "standard-comparison", label: "標準サイズ3社対決（ポーク・並・創業ビーフ）" },
  { id: "calorie-ranking", label: "低カロリーで選ぶランキング" },
  { id: "protein-ranking", label: "高タンパクで選ぶランキング" },
  { id: "pfc", label: "PFCバランスで読み解く3社の違い" },
  { id: "rice", label: "ライス量で変わるカロリー（CoCo壱の調整術）" },
  { id: "purpose", label: "目的別おすすめの選び方" },
  { id: "avoid", label: "避けたい高カロリーカレー" },
  { id: "summary", label: "まとめ" },
];

export default function CurryComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="カレーチェーン3社カロリー比較"
        subtitle="CoCo壱・すき家・松屋のカレーを栄養データで徹底比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&h=400&fit=crop"
        breadcrumb="カレー比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="curry-comparison">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="カレーチェーンで一番カロリーが低いのは？高タンパクなのはどこ？"
          answer={
            <>
              標準サイズ（CoCo壱番屋のポークカレー＝ライス300g／すき家のカレー並盛／松屋の創業ビーフカレー）で比べると、
              <strong>最も低カロリーなのはすき家のカレー並盛（653kcal）</strong>、次いでCoCo壱番屋のポークカレー（701kcal）、松屋の創業ビーフカレー（769kcal）の順です。一方
              <strong>タンパク質が最も多いのは松屋の創業ビーフカレー（17.9g）</strong>。脂質を最も抑えやすいのは
              <strong>すき家のカレー並盛（15.7g）</strong>です。ただしCoCo壱番屋はライスを300gから200gへ減らすと約156kcalオフできるなど、
              <strong>「同じチェーンでも食べ方次第でカロリーは大きく変わる」</strong>のがカレーの特徴。チェーンとサイズ・トッピングの組み合わせで選ぶのがコツです。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「カレーが食べたいけれど太りそう」——多くの人が抱く悩みですが、外食のカレーは
          <Marker>チェーン・サイズ・トッピングの組み合わせ次第でカロリーが大きく変わります</Marker>。
          実際、標準サイズ同士で比べても、すき家のカレー並盛（653kcal）と松屋の創業ビーフカレー（769kcal）には約116kcalの差があります。
        </p>
        <p className="mb-4">
          この記事では、カレーチェーンの代表格である
          <Marker color="blue">CoCo壱番屋・すき家・松屋の3社</Marker>
          を、各社公式の栄養データ（たべなびDBで検証済み）で横断比較します。標準サイズでの公平な対決、低カロリー／高タンパクのランキング、PFCバランスの違い、そしてCoCo壱番屋ならではの「ライス量でカロリーを調整する」テクニックまで、数字で具体的に解説します。
        </p>
        <p className="mb-8">
          「どのチェーンの、どのカレーを、どう食べるか」を数字で選べるようになると、カレーは罪悪感なく楽しめます。3社で迷ったときの判断材料にしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="curry-comparison-curry" genre="curry" priority />

        {/* Section 1: 標準サイズ3社対決 */}
        <section className="mb-16">
          <SectionHeading id="standard-comparison">
            標準サイズ3社対決（ポーク・並・創業ビーフ）
          </SectionHeading>

          <p className="mb-4">
            まずは条件をそろえ、各社の
            <Marker>「定番カレー・標準サイズ」</Marker>
            で比較します。CoCo壱番屋はポークカレー（ライス300g）、すき家はカレー並盛、松屋は創業ビーフカレーが、それぞれの基準となる1人前です。
          </p>

          <ComparisonTable
            headers={["チェーン（標準カレー）", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["すき家 カレー 並盛", "653 kcal", "12.8g", "15.7g", "115.2g"],
              ["CoCo壱番屋 ポークカレー（ライス300g）", "701 kcal", "11.0g", "18.3g", "126.9g"],
              ["松屋 創業ビーフカレー", "769 kcal", "17.9g", "28.8g", "102.8g"],
            ]}
            bestRowIndex={0}
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            最も軽いのは
            <Marker color="green">すき家のカレー並盛（653kcal）</Marker>
            。脂質も15.7gと3社で最少で、「とにかくカロリーと脂質を抑えたい」日の堅実な選択です。一方、松屋の創業ビーフカレーは769kcalと最も高カロリーですが、
            <Marker>タンパク質17.9g・最少の炭水化物102.8g</Marker>
            と栄養バランスは独特。ビーフベースのソースでタンパク質と脂質が高め、ごはん量は控えめという構成です。
          </p>

          <CalorieBar
            title="標準カレーのカロリー比較（少ない順）"
            items={[
              { name: "すき家 カレー 並盛", value: 653 },
              { name: "CoCo壱 ポークカレー（300g）", value: 701 },
              { name: "松屋 創業ビーフカレー", value: 769 },
            ]}
            caption="出典: 各チェーン公式栄養成分（2026年6月時点）／たべなびDBで検証済み"
          />

          <TipBox title="標準対決のポイント">
            <p>
              3社の差は最大116kcal。
              <Marker>カロリー最少はすき家、高タンパクは松屋</Marker>
              とキャラクターがはっきり分かれます。CoCo壱番屋はちょうど中間ですが、後述するように
              <Marker color="blue">ライス量を自由に変えられる</Marker>
              のが最大の武器。標準では中位でも、調整次第で3社で最も軽くも重くもできます。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">低カロリーで選ぶランキング</SectionHeading>

          <p className="mb-6">
            3社の定番カレーを横断し、「カロリーを抑えたい日に選ぶ価値が高い」順に厳選しました。小サイズ・並サイズまで含めて比較します。
          </p>

          <RankingCard
            rank={1}
            title="すき家 カレー ミニ"
            subtitle="390kcal / P7.5g / F8.1g / C72.0g"
            calories={390}
            protein={7.5}
            fat={8.1}
            carbs={72.0}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              3社の標準系カレーで
              <Marker>最も低カロリー（390kcal）</Marker>
              。脂質も8.1gと軽く、「軽めに済ませたい」「夜遅い時間に食べる」日に向きます。並盛（653kcal）が多いと感じる人は、まずミニから試すのがおすすめです。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="すき家 カレー 並盛"
            subtitle="653kcal / P12.8g / F15.7g / C115.2g"
            calories={653}
            protein={12.8}
            fat={15.7}
            carbs={115.2}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              標準サイズ3社対決の
              <Marker color="green">カロリー・脂質ともに最少</Marker>
              。価格も500円と手頃で、「普通の一杯をなるべく軽く」というニーズにそのまま応えます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="CoCo壱番屋 ポークカレー（ライス200gに変更）"
            subtitle="約545kcal / ライス300g版701kcal − 100g分156kcal"
            calories={545}
            protein={8.5}
            fat={18.0}
            carbs={89.8}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              CoCo壱番屋はライス量を100g単位で減らせます。公式のポークカレー（ライス300g・701kcal）から
              <Marker color="blue">ライスを200gに減らすと約156kcal減の約545kcal</Marker>
              に。標準サイズではすき家・松屋に並ばれますが、ライス調整を使えば最軽量クラスまで持っていけます（※ライス100gあたり156kcal・公式値からの差し引き計算）。
            </p>
          </RankingCard>

          <SubSectionHeading>標準系カレーの低カロリー順（3社横断）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "すき家 カレー ミニ", calories: 390, protein: 7.5, fat: 8.1, carbs: 72.0, highlight: true },
              { name: "ほうれん草カレー ミニ（すき家）", calories: 401, protein: 9.1, fat: 8.1, carbs: 73.5 },
              { name: "CoCo壱 ポークカレー（ライス200g・推計）", calories: 545, protein: 8.5, fat: 18.0, carbs: 89.8, highlight: true },
              { name: "すき家 カレー 並盛", calories: 653, protein: 12.8, fat: 15.7, carbs: 115.2, highlight: true },
              { name: "ほうれん草カレー 並盛（すき家）", calories: 663, protein: 14.4, fat: 15.7, carbs: 116.8 },
              { name: "CoCo壱 甘口ポークカレー（ライス300g）", calories: 681, protein: 10.8, fat: 17.0, carbs: 124.7 },
              { name: "CoCo壱 ポークカレー（ライス300g）", calories: 701, protein: 11.0, fat: 18.3, carbs: 126.9 },
              { name: "CoCo壱 ほうれん草カレー（ライス300g）", calories: 712, protein: 12.5, fat: 18.5, carbs: 128.6 },
              { name: "松屋 創業ビーフカレー", calories: 769, protein: 17.9, fat: 28.8, carbs: 102.8 },
            ]}
            caption="CoCo壱のライス200g版は公式300g値からライス100g分(156kcal/P2.5/F0.3/C37.1)を差し引いた推計。出典: 各社公式（2026年6月時点）"
          />

          <TipBox title="「ほうれん草カレー」は隠れた優等生">
            <p>
              野菜系の中でも
              <Marker>ほうれん草カレーはすき家・CoCo壱ともにベースのポーク系とほぼ同カロリー</Marker>
              （すき家ミニ401kcal、CoCo壱300g712kcal）。栄養を足しつつカロリー増を抑えたいなら、揚げ物トッピングより野菜系の追加が賢明です。
            </p>
          </TipBox>
        </section>

        {/* Section 3: 高タンパクランキング */}
        <section className="mb-16">
          <SectionHeading id="protein-ranking">高タンパクで選ぶランキング</SectionHeading>

          <p className="mb-4">
            トレーニング後やしっかり食べたい日は、
            <Marker>タンパク質量</Marker>
            で選びます。標準系カレーで高タンパクなものを3社横断でまとめました。
          </p>

          <ProteinBar
            title="標準カレーのタンパク質比較（多い順）"
            items={[
              { name: "松屋 創業ビーフカレー", value: 17.9 },
              { name: "すき家 カレー 並盛", value: 12.8 },
              { name: "CoCo壱 ポークカレー（300g）", value: 11.0 },
            ]}
            caption="出典: 各チェーン公式栄養成分（2026年6月時点）／たべなびDBで検証済み"
          />

          <p className="mb-4">
            標準カレーでタンパク質が最も多いのは
            <Marker>松屋の創業ビーフカレー（17.9g）</Marker>
            。ビーフベースのソースが効いており、CoCo壱のポークカレー（11.0g）より約7g多く摂れます。さらにタンパク質を上乗せしたいなら、各社の高タンパクトッピングを活用するのが効率的です。
          </p>

          <SubSectionHeading>高タンパクカレー・トッピング（3社横断）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "松屋 創業ビーフカレギュウ", calories: 1003, protein: 25.6, fat: 49.9, carbs: 106.3, highlight: true },
              { name: "CoCo壱 チキンカツカレー（300g）", calories: 1115, protein: 32.3, fat: 43.7, carbs: 151.6 },
              { name: "CoCo壱 チキンにこみカレー（300g）", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7, highlight: true },
              { name: "松屋 創業ビーフカレー", calories: 769, protein: 17.9, fat: 28.8, carbs: 102.8, highlight: true },
              { name: "CoCo壱 海の幸カレー（300g）", calories: 826, protein: 28.8, fat: 22.7, carbs: 132.2 },
              { name: "すき家 おんたまカレー 並盛", calories: 737, protein: 19.6, fat: 21.5, carbs: 115.4 },
              { name: "CoCo壱 エビにこみカレー（300g）", calories: 745, protein: 21.4, fat: 18.7, carbs: 127.1 },
            ]}
            highlightProtein
            caption="出典: 各チェーン公式栄養成分（2026年6月時点）／たべなびDBで検証済み"
          />

          <TipBox title="脂質を抑えて高タンパクなら「煮込み系トッピング」">
            <p>
              CoCo壱番屋の
              <Marker color="blue">チキンにこみカレー（769kcal/P24.4g/F19.7g）</Marker>
              は、カツ系より脂質を抑えつつタンパク質を24g台まで伸ばせる優秀な選択。揚げ物のチキンカツカレー（1,115kcal/F43.7g）と比べると、同じ「鶏のせ」でもカロリー・脂質が大きく違います。高タンパク低脂質を狙うなら「カツより煮込み」が合言葉です。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="3社のカレーを栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <MenuPhoto id="curry-comparison-rice" genre="curry" />

        {/* Section 4: PFCバランス */}
        <section className="mb-16">
          <SectionHeading id="pfc">PFCバランスで読み解く3社の違い</SectionHeading>

          <p className="mb-4">
            同じ「カレー」でも、3社は
            <Marker>栄養バランス（PFC）の性格がはっきり異なります</Marker>
            。標準カレーのPFCを並べると、選び方のヒントが見えてきます。
          </p>

          <ComparisonTable
            headers={["標準カレー", "炭水化物", "脂質", "タンパク質", "特徴"]}
            rows={[
              ["すき家 カレー 並盛", "115.2g", "15.7g", "12.8g", "脂質ひかえめ"],
              ["CoCo壱 ポークカレー（300g）", "126.9g", "18.3g", "11.0g", "ごはん多め・糖質最多"],
              ["松屋 創業ビーフカレー", "102.8g", "28.8g", "17.9g", "高タンパク・高脂質"],
            ]}
            bestRowIndex={0}
          />

          <SourceNote asOf="2026年6月" />

          <NumberedList
            items={[
              {
                title: "すき家＝バランス型・脂質ひかえめ",
                body: "カレー並盛は脂質15.7gと3社で最少。標準サイズのカロリーも最少で、「悪目立ちする栄養素がない」優等生タイプ。脂質を抑えたい日に向きます。",
              },
              {
                title: "CoCo壱番屋＝糖質（ごはん）が主役・調整自在",
                body: "ポークカレー（300g）は炭水化物126.9gと3社で最多。ただしこれはライス300gが標準だから。ライス量を200g・150gと減らせば糖質もカロリーも下げられ、PFCを自分で設計できるのが強みです。",
              },
              {
                title: "松屋＝高タンパク・高脂質のしっかり型",
                body: "創業ビーフカレーはタンパク質17.9g・脂質28.8gと、3社で最も「食べごたえ」のある構成。炭水化物は102.8gと最少なので、糖質より脂質・タンパク質で満足感を得たい人に合います。",
              },
            ]}
          />

          <TipBox title="PFCで選ぶなら">
            <p>
              <Marker>糖質を抑えたい→松屋</Marker>
              （炭水化物102.8gで3社最少）、
              <Marker color="blue">脂質を抑えたい→すき家</Marker>
              （脂質15.7gで3社最少）、
              <Marker color="green">量で調整したい→CoCo壱番屋</Marker>
              （ライス量で自在）。同じカレーでも、削りたい栄養素で最適なチェーンが変わります。
            </p>
          </TipBox>
        </section>

        {/* Section 5: ライス量 */}
        <section className="mb-16">
          <SectionHeading id="rice">
            ライス量で変わるカロリー（CoCo壱の調整術）
          </SectionHeading>

          <p className="mb-4">
            CoCo壱番屋の最大の特徴は、
            <Marker>ライス量を100g単位で無料・有料で調整できる</Marker>
            こと。標準は300gですが、ここを減らすだけでカロリーは大きく変わります。公式のライス単体データ（100gあたり156kcal）を使えば、計算で見通せます。
          </p>

          <ComparisonTable
            headers={["ライス量", "ポークカレー カロリー（推計）", "標準300gとの差"]}
            rows={[
              ["ライス150g", "約468 kcal", "−233 kcal"],
              ["ライス200g", "約545 kcal", "−156 kcal"],
              ["ライス300g（標準）", "701 kcal", "±0 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※ポークカレー（ライス300g・公式701kcal）から、ライス100gあたり156kcal（CoCo壱公式「ライス小100g」値）を差し引いた推計値です。実際の提供値は店舗・改定により異なる場合があります。
          </p>

          <CalorieBar
            title="CoCo壱 ポークカレー：ライス量別カロリー"
            items={[
              { name: "ライス150g", value: 468, note: "推計" },
              { name: "ライス200g", value: 545, note: "推計" },
              { name: "ライス300g（標準）", value: 701 },
            ]}
            sort="asc"
            caption="ポークカレー300g(701kcal)からライス100g=156kcalを差し引いた推計。出典: CoCo壱番屋公式（2026年6月時点）"
          />

          <p className="mb-4">
            ライスを300gから200gに減らすだけで
            <Marker>すき家のカレー並盛（653kcal）より軽い約545kcal</Marker>
            に。150gまで減らせば約468kcalと、3社の標準カレーの中で最軽量クラスになります。
            <Marker color="blue">「カレーが食べたいけれどカロリーが気になる」日は、CoCo壱でライスを減らす</Marker>
            のが最も自由度の高い手段です。
          </p>

          <TipBox title="ごはんを減らした分はトッピングで満足感を補う">
            <p>
              ライスを減らすと物足りなさが出やすいので、低カロリーな野菜・タンパク質トッピングで補うのがコツ。
              <Marker>ハーフほうれん草（6kcal）やハーフきのこ（5kcal）</Marker>
              はほぼノーカロリーでかさ増しでき、エビにこみ（44kcal/P10.4g）や半熟タマゴ（67kcal/P5.4g）を足せば満足感とタンパク質を両立できます。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 目的別おすすめ */}
        <section className="mb-16">
          <SectionHeading id="purpose">目的別おすすめの選び方</SectionHeading>

          <p className="mb-6">
            「結局どれを選べばいい？」に答えるため、よくある3つの目的別に最適な組み合わせを整理しました。
          </p>

          <SubSectionHeading>① カロリーを抑えたいダイエット中</SubSectionHeading>
          <p className="mb-4">
            最優先は
            <Marker color="green">すき家のカレー ミニ（390kcal）</Marker>
            。並盛でも653kcalと3社最少です。CoCo壱派なら
            <Marker>ポークカレーのライスを200g・150gに減らす</Marker>
            （約545〜468kcal）のが効果的。トッピングは揚げ物を避け、野菜系を選びましょう。
          </p>

          <SubSectionHeading>② 高タンパクで満足感も欲しい筋トレ中</SubSectionHeading>
          <p className="mb-4">
            標準で高タンパクなのは
            <Marker>松屋の創業ビーフカレー（P17.9g）</Marker>
            。さらに伸ばすなら、CoCo壱の
            <Marker color="blue">チキンにこみカレー（P24.4g/F19.7g）やエビにこみカレー（P21.4g/F18.7g）</Marker>
            が、脂質を抑えつつタンパク質を24g前後まで上げられて優秀です。
          </p>

          <SubSectionHeading>③ コスパよくお腹いっぱい食べたい</SubSectionHeading>
          <p className="mb-4">
            価格と満足感のバランスなら、
            <Marker>すき家のカレー並盛（500円・653kcal）</Marker>
            やCoCo壱のポークカレー（520円・701kcal）が定番。しっかり食べたい日はCoCo壱でライス量を増やす、軽い日は減らす、と1チェーンで幅広く調整できるのもポイントです。
          </p>

          <ServiceOffers tag="diet" />
        </section>

        {/* Section 7: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けたい高カロリーカレー</SectionHeading>

          <p className="mb-4">
            一方、ダイエット中は
            <Marker>揚げ物トッピング・大盛・チーズ系</Marker>
            に注意。同じカレーでも1,000kcalを超えるものが少なくありません。
          </p>

          <WarningBox title="ダイエット中は要注意のメニュー">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">CoCo壱 手仕込とんかつカレー（1,272kcal）</span>{" "}
                ─ 脂質63.4g。標準のポークカレー（701kcal）の約1.8倍で、揚げカツ系の中でも最重量級です。
              </li>
              <li>
                <span className="font-bold">CoCo壱 ロースカツカレー（1,116kcal）／チキンカツカレー（1,115kcal）</span>{" "}
                ─ 定番のカツカレーでも1,100kcal超。脂質40g台に乗ります。
              </li>
              <li>
                <span className="font-bold">すき家 とろ〜りチーズカレー 大盛（1,143kcal）</span>{" "}
                ─ チーズ＋大盛の組み合わせで1,100kcal超。並盛（829kcal）でも高めです。
              </li>
              <li>
                <span className="font-bold">松屋 創業ビーフロースかつカレー（1,211kcal）</span>{" "}
                ─ ロースかつ追加で1,200kcal超。脂質59.2gに達します。
              </li>
              <li>
                <span className="font-bold">すき家 カレー 大盛（967kcal）</span>{" "}
                ─ トッピングなしでも大盛にするだけで並盛（653kcal）から+314kcal。
              </li>
            </ul>
          </WarningBox>

          <WarningBox title="本当の落とし穴は「揚げ物トッピング＋大盛」の重ねがけ">
            <p>
              カレー本体よりも増えやすいのが、揚げ物トッピングと大盛の組み合わせです。CoCo壱番屋の場合、
              <Marker>ポークカレー（701kcal）にロースカツ（+415kcal）を足すと1,116kcal</Marker>
              。さらにライス大盛にすると一気に1,300kcal超になります。「揚げ物は1種まで」「大盛は揚げ物なしの日に」と決めておくと、カレーでも管理しやすくなります。
            </p>
          </WarningBox>
        </section>

        {/* チェーン別ランキングへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>3社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。CoCo壱番屋の太らない食べ方は
            <Link href="/guide/ichibanya-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">CoCo壱番屋ダイエットガイド</Link>
            、カレー全般の選び方は
            <Link href="/guide/curry-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">カレーで太らない食べ方</Link>
            で深掘りしています。糖質が気になる人は
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食の低糖質メニュー</Link>
            、外食ダイエット全般は
            <Link href="/guide/eating-out-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食ダイエットの基本</Link>
            もあわせてどうぞ。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/ichibanya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍛 CoCo壱番屋</Link>
            <Link href="/chains/sukiya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍛 すき家</Link>
            <Link href="/chains/matsuya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍛 松屋</Link>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            カレーは「チェーン選び」と「サイズ・トッピング選び」の掛け算でカロリーが大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "標準サイズ対決の最軽量はすき家のカレー並盛（653kcal）、次いでCoCo壱ポーク（701kcal）、松屋創業ビーフ（769kcal）",
              "標準で最も高タンパクは松屋の創業ビーフカレー（P17.9g）。脂質最少はすき家（F15.7g）",
              "PFCは三者三様：糖質を抑えるなら松屋、脂質を抑えるならすき家、量で調整するならCoCo壱番屋",
              "CoCo壱番屋はライスを300g→200gで約156kcal、150gで約233kcalオフでき、最軽量クラスにできる",
              "避けたいのは揚げ物トッピング＋大盛の重ねがけ（とんかつカレーは1,272kcal、カツ系は1,100kcal超）",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。CoCo壱番屋のライス量別カロリーは公式値からの差し引きによる推計です。価格は変動する場合があります。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="curry-comparison"
          items={[
            {
              q: "カレーチェーンで一番カロリーが低いのはどこですか？",
              a: "標準サイズ（CoCo壱番屋ポークカレー＝ライス300g／すき家カレー並盛／松屋創業ビーフカレー）の比較では、すき家のカレー並盛（653kcal）が最も低く、CoCo壱番屋ポークカレー（701kcal）、松屋創業ビーフカレー（769kcal）の順です。小サイズまで含めると、すき家のカレーミニ（390kcal）が最軽量です（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "ダイエット中におすすめのカレーは？",
              a: "カロリーで選ぶなら、すき家のカレーミニ（390kcal）または並盛（653kcal・脂質15.7gで3社最少）がおすすめです。CoCo壱番屋派の場合は、ポークカレーのライスを300gから200gに減らすと約545kcal、150gで約468kcalまで抑えられます。トッピングは揚げ物を避け、ほうれん草やきのこなどの野菜系を選ぶのがコツです。",
            },
            {
              q: "高タンパクなカレーはどれですか？",
              a: "標準カレーで最も高タンパクなのは松屋の創業ビーフカレー（タンパク質17.9g）です。さらに増やしたい場合は、CoCo壱番屋のチキンにこみカレー（24.4g/脂質19.7g）やエビにこみカレー（21.4g/脂質18.7g）が、カツ系より脂質を抑えつつ高タンパクを実現できておすすめです。",
            },
            {
              q: "CoCo壱番屋でライスを減らすとどれくらいカロリーが下がりますか？",
              a: "CoCo壱番屋のライスは100gあたり約156kcalです。標準のポークカレー（ライス300g・701kcal）からライスを200gに減らすと約545kcal（−156kcal）、150gに減らすと約468kcal（−233kcal）になります。これは公式のライス単体データからの差し引き計算による推計値で、実際の提供値は店舗・改定により異なる場合があります。",
            },
            {
              q: "松屋の創業ビーフカレーはカロリーが高いですか？",
              a: "標準サイズ3社の中では最も高い769kcalですが、タンパク質17.9gは3社で最多、炭水化物102.8gは3社で最少です。脂質は28.8gとやや高めなので、「糖質を抑えたい・タンパク質をしっかり摂りたい」人には合いますが、脂質を抑えたい日はすき家のカレー（脂質15.7g）の方が向いています。",
            },
            {
              q: "カツカレーはどれくらいカロリーが高くなりますか？",
              a: "CoCo壱番屋のロースカツカレー（1,116kcal）・チキンカツカレー（1,115kcal）、手仕込とんかつカレー（1,272kcal）など、カツ系は1,100kcal超が中心です。標準のポークカレー（701kcal）の約1.6〜1.8倍になります。高タンパクを狙うなら、揚げカツより脂質の低い煮込み系トッピング（チキンにこみ等）を選ぶとカロリーを抑えられます。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="カレー3社をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-24", note: "初稿公開（CoCo壱番屋・すき家・松屋の公式栄養データに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="curry-comparison" />

        {/* Back link */}
        <div className="text-center pt-8 pb-4">
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
