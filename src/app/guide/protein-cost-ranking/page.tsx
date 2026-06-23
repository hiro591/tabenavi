import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  ArticleImage,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductCard,
  AffiliateProductGrid,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/protein-cost-ranking" },
  title:
    "【2026年最新】外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較 | たべなび",
  description:
    "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。マクドナルド・ケンタッキー・牛丼チェーンなど価格と栄養が公開されている20メニューをランキング形式で紹介。月間コストのシミュレーションも。",
  keywords: [
    "高タンパク 外食 コスパ",
    "タンパク質 コスパ ランキング",
    "タンパク質 安い 外食",
    "タンパク質 1g 価格",
    "プロテイン コスパ 外食",
    "高タンパク 安い チェーン",
  ],
  openGraph: {
    title:
      "【2026年最新】外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較",
    description:
      "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。20メニューをランキング形式で紹介。",
    url: "https://www.tabenavi.jp/guide/protein-cost-ranking",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較",
  description:
    "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。20メニューをランキング形式で紹介。",
  datePublished: "2026-03-19",
  dateModified: "2026-06-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/protein-cost-ranking",
};

const tocItems = [
  { id: "why-cost", label: "なぜタンパク質のコスパが重要か" },
  { id: "ranking-top20", label: "タンパク質1gあたり価格ランキングTOP20" },
  { id: "chain-comparison", label: "チェーン店カテゴリ別コスパ比較" },
  { id: "maximize-tips", label: "コスパを最大化するテクニック5選" },
  { id: "monthly-simulation", label: "月間タンパク質費用シミュレーション" },
  { id: "summary", label: "まとめ" },
];

export default function ProteinCostRankingPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食タンパク質コスパ最強ランキング"
        subtitle="1gあたりの価格で徹底比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop"
        breadcrumb="タンパク質コスパランキング"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="protein-cost-ranking">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月23日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          筋トレやダイエットで最も重要な栄養素、タンパク質。しかし外食でタンパク質を摂ろうとすると、<Marker>「高タンパク＝高価格」になりがち</Marker>で、月々の食費が膨れ上がってしまうのが悩みの種です。
        </p>
        <p className="mb-4">
          そこでこの記事では、外食チェーンのメニューを<Marker color="blue">「タンパク質1gあたりの価格」</Marker>で徹底比較。計算式は至ってシンプルです。
        </p>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 text-center mb-6">
          <p className="text-lg font-bold text-sky-700">
            タンパク質コスパ = 価格（円） &divide; タンパク質（g） = ○○円/g
          </p>
          <p className="text-sm text-gray-500 mt-2">数値が低いほどコスパが良い</p>
        </div>
        <p className="mb-8">
          この指標で20メニューをランキング化。さらにチェーン店カテゴリ別の比較や、月間費用のシミュレーションもお見せします。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ─── Section 1: なぜコスパが重要か ─── */}
                <QuickAnswer
          question={"外食でタンパク質を最もコスパよく摂るにはどのメニューを選べばいいですか?"}
          answer={"公式に価格と栄養を公開しているメニューで比較すると、マクドナルドのエグチ(エッグチーズバーガー)が1食200円・タンパク質22.4gで1gあたり8.9円と最強クラス。次いでソーセージエッグマフィン(11.9円/g)、ケンタッキーの骨なしケンタッキー(13.3円/g)が続きます。牛丼チェーンならすき家の牛丼(並)が17.5円/gで割安です。"}
        />

        <SectionHeading id="why-cost">なぜタンパク質のコスパが重要か</SectionHeading>

        <p className="mb-4">
          厚生労働省が推奨する1日のタンパク質摂取量は、成人男性で<Marker>65g</Marker>、成人女性で<Marker>50g</Marker>。しかし筋トレをしている人なら体重1kgあたり1.6〜2.2gが目安とされ、<Marker color="blue">体重70kgの男性なら112〜154g/日</Marker>が必要です。
        </p>

        <ComparisonTable
          headers={["対象者", "体重", "1日のP目標", "1食あたり目安"]}
          rows={[
            ["一般成人（男性）", "70kg", "65g", "約22g"],
            ["一般成人（女性）", "55kg", "50g", "約17g"],
            ["筋トレ中（男性）", "70kg", "112〜154g", "約37〜51g"],
            ["筋トレ中（女性）", "55kg", "88〜121g", "約29〜40g"],
            ["ダイエット中", "体重×1.5g", "体重に依存", "体重÷2g"],
          ]}
        />

        <p className="mb-4">
          仮にタンパク質1gあたり20円のメニューで120g/日を確保しようとすると、<Marker>1日2,400円、月に72,000円</Marker>。一方、1gあたり10円なら月36,000円と、<Marker color="green">コスパの差だけで月3万円以上の節約</Marker>になります。
        </p>

        <NumberedList
          items={[
            {
              title: "継続可能性に直結する",
              body: "タンパク質摂取は毎日のこと。コスパが悪いと食費が圧迫され、結局続けられなくなります。「安くて高タンパク」な選択肢を知っておくことは長期的な成功の鍵。",
            },
            {
              title: "同じ予算でより多くのタンパク質が摂れる",
              body: "1日の食費を2,000円と固定した場合、コスパの良いメニューを選ぶだけでタンパク質摂取量は2倍以上変わります。",
            },
            {
              title: "「高い＝高タンパク」ではない",
              body: "意外にも、高級レストランよりもコンビニのサラダチキンや牛丼チェーンの方がタンパク質コスパに優れていることが多いのです。",
            },
          ]}
        />

        <TipBox title="プロテインパウダーとの比較">
          <p>参考までに、プロテインパウダー（マイプロテイン等）のコスパは<Marker>約3〜5円/g</Marker>（製品・セール時期により変動）。外食で10円/g以下を達成できれば、「固形食としてはトップクラス」と言えます。ただし外食には満足感・栄養バランス・味のバリエーションというメリットがあるため、プロテインと併用するのがベストです。</p>
        </TipBox>

        <AffiliateProductCard productId="myprotein-impact" />

        {/* ─── Section 2: ランキングTOP20 ─── */}
        <SectionHeading id="ranking-top20">タンパク質1gあたり価格ランキングTOP20</SectionHeading>

        <p className="mb-6">
          外食チェーンの主要メニューを<Marker>タンパク質1gあたりの価格</Marker>で比較し、コスパの良い順にランキングしました。
        </p>

        {/* TOP 3 with RankingCard */}
        <RankingCard rank={1} title="マクドナルド エグチ（エッグチーズバーガー）" subtitle="¥200 / P22.4g = ¥8.9/g">
          <NutritionCard
            name="エグチ（エッグチーズバーガー）"
            chain="マクドナルド"
            calories={390}
            protein={22.4}
            fat={19.0}
            carbs={31.2}
            price={200}
            recommended
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>タンパク質1gあたり8.9円</Marker>で堂々の1位。1食200円でタンパク質22.4gが摂れるコスパは外食でも屈指。卵とチーズ、ビーフパティでタンパク源が3層になっているのがポイントです。脂質は19.0gとやや高めなので、ポテト等は付けず単品で攻めるのがコツ。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="マクドナルド ソーセージエッグマフィン" subtitle="¥260 / P21.9g = ¥11.9/g">
          <NutritionCard
            name="ソーセージエッグマフィン"
            chain="マクドナルド"
            calories={477}
            protein={21.9}
            fat={30.6}
            carbs={27.3}
            price={260}
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>1gあたり11.9円でP21.9g</Marker>。朝マック時間帯（〜10:30）に買えるコスパ怪物。卵・ソーセージ・イングリッシュマフィンで満足感も高い。脂質30.6gと高めなので、夜の食事を軽くするなど1日のトータルで調整しましょう。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="ケンタッキー 骨なしケンタッキー" subtitle="¥270 / P20.3g = ¥13.3/g">
          <NutritionCard
            name="骨なしケンタッキー"
            chain="ケンタッキー"
            calories={191}
            protein={20.3}
            fat={8.5}
            carbs={8.3}
            price={270}
            recommended
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>1gあたり13.3円でP20.3g</Marker>。1個191kcal・脂質8.5gと、KFCのチキンの中では群を抜いて低脂質高タンパク。骨がないので食べやすく、単品で頼めばコスパも良好。揚げ物の中ではPFCバランスに優れた一品です。
          </p>
        </RankingCard>

        <ArticleImage
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=400&fit=crop"
          alt="高タンパクな外食メニューのイメージ"
        />

        {/* 4位〜20位のテーブル */}
        <SubSectionHeading>4位〜20位 一覧</SubSectionHeading>

        <ComparisonTable
          headers={["順位", "メニュー", "チェーン", "価格", "P", "円/g"]}
          rows={[
            ["4", "チキンフィレバーガー", "ケンタッキー", "¥340", "24.3g", "¥14.0"],
            ["5", "倍ビッグマック", "マクドナルド", "¥600", "41.3g", "¥14.5"],
            ["6", "チキンマックナゲット5P", "マクドナルド", "¥230", "15.3g", "¥15.0"],
            ["7", "エッグマックマフィン", "マクドナルド", "¥290", "18.6g", "¥15.6"],
            ["8", "チキンカツカレー", "CoCo壱", "¥520", "32.3g", "¥16.1"],
            ["9", "牛丼（メガ）", "すき家", "¥850", "50.8g", "¥16.7"],
            ["10", "ねぎ玉牛丼（並盛）", "すき家", "¥500", "29.4g", "¥17.0"],
            ["11", "牛丼（並盛）", "すき家", "¥380", "21.7g", "¥17.5"],
            ["12", "ダブルチーズバーガー", "マクドナルド", "¥480", "26.4g", "¥18.2"],
            ["13", "オリジナルチキン", "ケンタッキー", "¥310", "16.5g", "¥18.8"],
            ["14", "牛丼ライト（並盛）", "すき家", "¥430", "22.8g", "¥18.9"],
            ["15", "ビッグマック", "マクドナルド", "¥500", "26.1g", "¥19.2"],
            ["16", "牛丼（並盛）", "吉野家", "¥380", "19.6g", "¥19.4"],
            ["17", "チキンフィレオ", "マクドナルド", "¥440", "19.9g", "¥22.1"],
            ["18", "牛めし（並盛）", "松屋", "¥430", "17.1g", "¥25.1"],
            ["19", "モスの菜摘 テリヤキチキン", "モスバーガー", "¥390", "15.1g", "¥25.8"],
            ["20", "牛皿（並盛）", "吉野家", "¥368", "13.5g", "¥27.3"],
          ]}
          bestRowIndex={0}
        />

        <TipBox title="ランキングの読み方">
          <p><Marker>マクドナルドのエグチ（¥8.9/g）が圧倒的トップ</Marker>。2位以降は12〜27円/gの範囲に分布。全体の傾向として、(1) マクドナルドの卵入りバーガー系が安い、(2) ケンタッキーのチキンも健闘、(3) 牛丼チェーンは並盛で17〜19円/g前後、という傾向が見えます。なお本ランキングは<Marker color="blue">各チェーンが価格と栄養成分の両方を公式に公開しているメニューのみ</Marker>を対象にしています（価格非公開のコンビニ・サブウェイ・定食チェーン等は別途参考扱い）。</p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="メニューのタンパク質量を今すぐチェック"
          subtitle="たべなびで外食チェーンの栄養データを無料検索"
        />

        <AffiliateProductGrid
          title="外食コスパに勝つ「家プロテイン」3点"
          productIds={["myprotein-impact", "ultora-whey", "shaker-bottle"]}
        />

        {/* ─── Section 3: チェーン店カテゴリ別比較 ─── */}
        <SectionHeading id="chain-comparison">チェーン店カテゴリ別コスパ比較</SectionHeading>

        <p className="mb-6">
          チェーン店をカテゴリ別に分けて、タンパク質コスパの傾向を比較します。<Marker>どのカテゴリが最もコスパが良いのか</Marker>、一目でわかります。
        </p>

        <SubSectionHeading>カテゴリ別 平均タンパク質コスパ</SubSectionHeading>

        <ComparisonTable
          headers={["カテゴリ", "平均円/g", "代表メニュー", "メリット", "デメリット"]}
          rows={[
            ["ファストフード", "¥16.4/g", "マック エグチ", "安い・どこにでもある", "揚げ物・脂質が高め"],
            ["牛丼チェーン", "¥20.7/g", "すき家 牛丼（並）", "安い・早い", "炭水化物が多め"],
            ["コンビニ", "公式価格は要確認", "サラダチキン", "手軽・低脂質", "価格が公表されず変動"],
            ["定食チェーン", "公式価格は要確認", "大戸屋ランチ", "バランス良い", "価格が公表されず割高"],
          ]}
          bestRowIndex={0}
        />

        <p className="mb-6 text-sm text-gray-600">
          ※平均円/gは、各チェーンが価格と栄養成分の両方を公式に公開しているメニューの実測値から算出しています。コンビニ・サブウェイ・定食チェーンなど標準価格を公表していないカテゴリは、栄養面の参考情報として掲載します。
        </p>

        <SubSectionHeading>ファストフード（平均¥16.4/g）</SubSectionHeading>

        <p className="mb-4">
          <Marker color="blue">ファストフードはタンパク質コスパの主力</Marker>。揚げ物が多く脂質が高い傾向はありますが、メニュー選び次第でコスパ上位を独占します。特にマクドナルドの卵入りバーガー系が安いです。
        </p>

        <ComparisonTable
          headers={["チェーン", "メニュー", "価格", "P", "F", "円/g"]}
          rows={[
            ["マクドナルド", "エグチ（エッグチーズバーガー）", "¥200", "22.4g", "19.0g", "¥8.9"],
            ["マクドナルド", "倍ビッグマック", "¥600", "41.3g", "43.1g", "¥14.5"],
            ["マクドナルド", "ダブルチーズバーガー", "¥480", "26.4g", "25.1g", "¥18.2"],
            ["ケンタッキー", "骨なしケンタッキー", "¥270", "20.3g", "8.5g", "¥13.3"],
            ["ケンタッキー", "チキンフィレバーガー", "¥340", "24.3g", "19.7g", "¥14.0"],
          ]}
          bestRowIndex={0}
        />

        <p className="mb-6">
          <Marker color="blue">ケンタッキーの骨なしケンタッキーは脂質8.5g</Marker>と、揚げ物系の中では低脂質。P20.3gを270円で摂れるため、PFCバランスとコスパを両立したいときの選択肢になります。
        </p>

        <SubSectionHeading>牛丼チェーン（平均¥20.7/g）</SubSectionHeading>

        <p className="mb-4">
          牛丼チェーンは「安い」イメージがありますが、タンパク質コスパでは意外にも中間的なポジション。理由は<Marker>1杯あたりのタンパク質が並盛で17〜22gと少なめ</Marker>だからです。
        </p>

        <ComparisonTable
          headers={["チェーン", "メニュー", "価格", "P", "円/g"]}
          rows={[
            ["すき家", "牛丼（並）", "¥380", "21.7g", "¥17.5"],
            ["吉野家", "牛丼（並）", "¥380", "19.6g", "¥19.4"],
            ["松屋", "牛めし（並）", "¥430", "17.1g", "¥25.1"],
          ]}
          bestRowIndex={0}
        />

        <TipBox title="牛丼チェーンでコスパを上げる裏技">
          <p><Marker>「特盛・メガ盛り」にするとタンパク質コスパが向上</Marker>します。すき家の牛丼（メガ）は¥850でP50.8g（¥16.7/g）と、並盛より割安にタンパク質を確保できます。さらに<Marker color="blue">すき家の「ねぎ玉牛丼（並）」は¥500でP29.4g（¥17.0/g）</Marker>と、卵入りでコスパ良好。松屋では牛めしに半熟玉子（+80円・P5.8g）を足すのもおすすめです。</p>
        </TipBox>

        <SubSectionHeading>コンビニ・サブウェイ・定食チェーン（価格非公表のため参考）</SubSectionHeading>

        <p className="mb-4">
          コンビニのサラダチキンやサブウェイ、大戸屋・やよい軒などの定食チェーンは、<Marker>店舗・時期で価格が変わる</Marker>ため公式に標準価格を公表していません。そのため本ランキングの円/g比較には含めず、栄養面の参考として紹介します。価格はご自身で店頭・公式アプリでご確認ください。
        </p>

        <NutritionTable
          items={[
            { name: "サブウェイ サラダチキン サラダ", calories: 93, protein: 14.7, fat: 0.8, carbs: 8.3, highlight: true },
            { name: "サブウェイ チリチキン", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7 },
            { name: "大戸屋 しまほっけの炭火焼き(定食)", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
            { name: "やよい軒 から揚げ(5個)", calories: 477, protein: 30.4, fat: 33.5, carbs: 15.5 },
            { name: "CoCo壱 チキンにこみカレー", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7 },
          ]}
          highlightProtein
        />

        <p className="mb-6">
          栄養面では、<Marker color="blue">大戸屋のしまほっけの炭火焼き（定食）はP45.5g・脂質13.1g</Marker>と高タンパク低脂質で優秀。サブウェイのサラダチキン サラダは脂質0.8gと突出した低脂質です。価格が公開されれば円/gでも上位に入る可能性があります。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="バランスの良い外食定食のイメージ"
        />

        {/* ─── Section 4: コスパ最大化テクニック ─── */}
        <SectionHeading id="maximize-tips">コスパを最大化するテクニック5選</SectionHeading>

        <p className="mb-6">
          ランキングを知った上で、さらに<Marker>タンパク質コスパを引き上げる実践テクニック</Marker>を5つ紹介します。
        </p>

        <NumberedList
          items={[
            {
              title: "マクドナルドの卵入りバーガーを「ベース」にする",
              body: "1日のうち1食をマックのエグチ（¥200・P22.4g＝¥8.9/g）やソーセージエッグマフィン（¥260・P21.9g＝¥11.9/g）にするだけで、1日のタンパク質コスパが大幅に改善。卵が入る分タンパク質が底上げされます。",
            },
            {
              title: "ケンタッキーのチキンを活用する",
              body: "ファストフードでコスパ上位に入るケンタッキー。骨なしケンタッキー（¥270・P20.3g＝¥13.3/g）は脂質8.5gと低脂質。チキンフィレバーガー（¥340・P24.3g＝¥14.0g）も高タンパクでおすすめです。",
            },
            {
              title: "牛丼チェーンでは「卵・大盛り」を活用する",
              body: "すき家の牛丼（メガ）は¥850でP50.8g（¥16.7/g）と、まとめて摂るほど割安に。卵入りのねぎ玉牛丼（並）も¥500でP29.4g（¥17.0/g）と優秀。松屋では牛めしに半熟玉子（+80円・P5.8g）を足すとタンパク質を底上げできます。",
            },
            {
              title: "ファストフードは「単品注文」で攻める",
              body: "セットメニューのポテトやドリンクはタンパク質がほぼゼロ。ダブルチーズバーガー単品（¥480・P26.4g）を頼む方が、ポテト・ドリンク込みのセットよりタンパク質コスパは良くなります。",
            },
            {
              title: "プロテインパウダーと外食を組み合わせる",
              body: "朝のプロテインシェイク（約¥60・P24g = ¥2.5/g・製品により変動）で1日のベースを作り、昼と夜を外食にすれば、1日の平均コスパを¥10/g台に抑えられます。最もコスパの良いハイブリッド戦略です。",
            },
          ]}
        />

        <TipBox title="アプリ・クーポンの活用も忘れずに">
          <p>マクドナルドのアプリクーポン、松屋のモバイルオーダー割引など、<Marker>各チェーンのアプリを活用すれば実質コスパがさらに向上</Marker>します。特にマクドナルドはクーポンで50〜100円引きになることが多く、ダブルチーズバーガー（通常¥480・P26.4g）が¥350で買えれば、コスパは¥13.3/gとトップ3級まで上がります。</p>
        </TipBox>

        <AffiliateProductGrid
          title="外食の合間に常備したい高タンパクアイテム"
          productIds={["inbar-protein", "onebar-protein", "tuna-can", "salada-chicken-pack"]}
        />

        {/* ─── Section 5: 月間シミュレーション ─── */}
        <SectionHeading id="monthly-simulation">月間タンパク質費用シミュレーション</SectionHeading>

        <p className="mb-4">
          筋トレ中の男性（体重70kg）が、<Marker>1日120gのタンパク質を外食で摂取する場合</Marker>、月間費用はどのくらいになるのでしょうか。3つのパターンでシミュレーションします。
        </p>

        <SubSectionHeading>パターン1：コスパ最優先プラン</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "マック エグチ + ソーセージエッグマフィン", "44.3g", "¥10.4", "¥460"],
            ["昼食", "すき家 牛丼（メガ）", "50.8g", "¥16.7", "¥850"],
            ["夕食", "ケンタッキー 骨なしケンタッキー×2", "40.6g", "¥13.3", "¥540"],
            ["1日合計", "", "135.7g", "¥13.6", "¥1,850"],
          ]}
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-green-700 text-center">
            月間費用：¥1,850 &times; 30日 = <Marker color="green">¥55,500</Marker>
          </p>
          <p className="text-sm text-green-600 text-center mt-1">平均¥13.6/g &middot; 1日135.7g</p>
        </div>

        <SubSectionHeading>パターン2：バランス重視プラン</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "マクドナルド エッグマックマフィン", "18.6g", "¥15.6", "¥290"],
            ["昼食", "すき家 ねぎ玉牛丼（並）", "29.4g", "¥17.0", "¥500"],
            ["夕食", "CoCo壱 チキンカツカレー", "32.3g", "¥16.1", "¥520"],
            ["間食", "ケンタッキー チキンフィレバーガー + 骨なし", "44.6g", "¥13.7", "¥610"],
            ["1日合計", "", "124.9g", "¥15.4", "¥1,920"],
          ]}
        />

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-sky-700 text-center">
            月間費用：¥1,920 &times; 30日 = <Marker>¥57,600</Marker>
          </p>
          <p className="text-sm text-sky-600 text-center mt-1">平均¥15.4/g &middot; 1日124.9g</p>
        </div>

        <SubSectionHeading>パターン3：コスパ無視プラン（参考）</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "モス 菜摘 テリヤキチキン", "15.1g", "¥25.8", "¥390"],
            ["昼食", "松屋 牛焼肉定食", "23.3g", "¥31.3", "¥730"],
            ["夕食", "吉野家 牛丼（並）+ 牛皿（並）", "33.1g", "¥22.6", "¥748"],
            ["間食", "モス ダブルモスバーガー", "23.7g", "¥27.8", "¥660"],
            ["1日合計", "", "95.2g", "¥26.6", "¥2,528"],
          ]}
        />

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-red-700 text-center">
            月間費用：¥2,528 &times; 30日 = <span className="font-bold">¥75,840</span>
          </p>
          <p className="text-sm text-red-600 text-center mt-1">平均¥26.6/g &middot; 1日95.2g</p>
        </div>

        <ComparisonTable
          headers={["プラン", "月間費用", "1日のP", "平均円/g", "年間費用"]}
          rows={[
            ["コスパ最優先", "¥55,500", "135.7g", "¥13.6", "¥666,000"],
            ["バランス重視", "¥57,600", "124.9g", "¥15.4", "¥691,200"],
            ["コスパ無視", "¥75,840", "95.2g", "¥26.6", "¥910,080"],
          ]}
          bestRowIndex={0}
        />

        <WarningBox title="コスパ無視プランとの差額に注目">
          <p>コスパ最優先プランとコスパ無視プランの差は<span className="font-bold">月間約2万円、年間約24万円</span>。しかもコスパ最優先プランの方がタンパク質摂取量は約40g多い。つまり<span className="font-bold">「安くてタンパク質も多い」が実現できる</span>のです。メニュー選びの知識があるだけで、年間20万円以上の節約になります。</p>
        </WarningBox>

        <TipBox title="最強のハイブリッド戦略">
          <p>月間費用をさらに抑えたいなら、<Marker>朝食をプロテインパウダー（約¥60・P24g・製品により変動）に置き換える</Marker>のが効果的。朝食費が1日¥400台→¥60に下がり、月間で約1万円の節約。それだけで月間費用は¥45,000台に近づき、<Marker color="blue">年間で約55万円</Marker>で120g/日のタンパク質を確保できます。</p>
        </TipBox>

        <AffiliateProductCard productId="ultora-whey" />

        {/* ─── Section 6: まとめ ─── */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          外食のタンパク質コスパは、メニューの選び方次第で<Marker>3倍以上の差</Marker>が出ます。この記事のポイントを整理します。
        </p>

        <CheckList
          items={[
            "タンパク質コスパ1位：マクドナルド エグチ（¥8.9/g）",
            "次点：ソーセージエッグマフィン（¥11.9/g）・ケンタッキー 骨なしケンタッキー（¥13.3/g）",
            "牛丼チェーンはすき家 牛丼・並（¥17.5/g）がベスト。卵入りや大盛りでさらにコスパUP",
            "カテゴリ別ではファストフード（¥16.4/g）が牛丼チェーン（¥20.7/g）より割安",
            "コンビニ・サブウェイ・定食チェーンは公式価格が非公表のため円/g比較からは除外（栄養面は参考）",
            "コスパ最優先プランなら月55,500円で1日135gのタンパク質を確保可能",
            "コスパ無視との差は年間約24万円。メニュー選びの知識が大きな節約に",
            "プロテインパウダーとの併用が最強のハイブリッド戦略",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーン店の公式サイトでご確認ください。タンパク質1gあたりの価格は小数点第2位を四捨五入しています。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびでタンパク質量をサクッと検索"
          subtitle="32チェーン・6,000品以上の栄養データを無料で比較"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="protein-cost-ranking"
          items={[
            { q: "筋トレ中に必要なタンパク質量は1日どのくらいですか?", a: "体重1kgあたり1.6~2.2gが目安。体重70kgの男性なら112~154g/日が必要。一般成人の推奨量(男性65g)の2倍近くです。継続的に確保するにはコスパが重要になります。" },
            { q: "ファストフードと牛丼チェーンではどちらがタンパク質コスパが良いですか?", a: "公式に価格と栄養を公開しているメニューで比較すると、ファストフードが平均16.4円/gで牛丼チェーン(並盛で平均20.7円/g)より割安です。特にマクドナルドの卵入りバーガーやケンタッキーのチキンがコスパに優れます。" },
            { q: "牛丼チェーンでコスパを上げるコツは何ですか?", a: "すき家の牛丼はメガ盛り(¥850・P50.8g＝16.7円/g)にするとまとめて割安にタンパク質を摂れます。卵入りのねぎ玉牛丼・並(¥500・P29.4g＝17.0円/g)もおすすめ。松屋では牛めしに半熟玉子(+80円・P5.8g)を足すと底上げできます。" },
            { q: "月間でタンパク質コスパ最優先ならいくら必要ですか?", a: "体重70kg男性が1日135gを確保する場合、月55,500円(1食平均13.6円/g)で実現可能。コスパ無視の場合は月75,840円で、年間約24万円の差が出ます。" },
            { q: "ファストフードでタンパク質コスパが良いメニューはありますか?", a: "マクドナルドのエグチ(エッグチーズバーガー)が8.9円/gで最強クラス。ソーセージエッグマフィン(11.9円/g)も優秀です。低脂質重視ならケンタッキーの骨なしケンタッキー(13.3円/g・脂質8.5g)が最適です。" },
          ]}
        />

        <ServiceOffers tag="protein" heading="高タンパクな食事を手軽に続けたい人へ（宅配食・プロテイン）" />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="protein-cost-ranking" />

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
