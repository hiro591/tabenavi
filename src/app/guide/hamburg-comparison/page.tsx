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
  ArticleImage,
  MenuPhoto,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  SourceNote,
  CalorieBar,
  ProteinBar,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "ファミレスのハンバーグ カロリー比較｜びっくりドンキー・ココス・デニーズ・ジョイフル4社【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/hamburg-comparison" },
  description:
    "びっくりドンキー・ココス・デニーズ・ジョイフルのハンバーグを、カロリー・タンパク質・PFCの公式データで横断比較。標準サイズの単品で公平に並べ、高タンパク・低カロリー・低脂質で選ぶ正解と、ライス・サイドの調整法を数字で解説します。",
  keywords: [
    "ハンバーグ カロリー 比較",
    "びっくりドンキー カロリー",
    "ファミレス ハンバーグ ダイエット",
    "ココス ハンバーグ カロリー",
    "デニーズ ハンバーグ カロリー",
    "ハンバーグ 高タンパク",
  ],
  openGraph: {
    title:
      "ファミレスのハンバーグ カロリー比較｜びっくりドンキー・ココス・デニーズ・ジョイフル",
    description:
      "ファミレス4社のハンバーグをカロリー・PFCの公式データで横断比較。標準サイズの単品で公平比較し、高タンパク・低カロリーの選び方を数字で解説。",
    url: "https://www.tabenavi.jp/guide/hamburg-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ファミレスのハンバーグ カロリー比較｜びっくりドンキー・ココス・デニーズ・ジョイフル",
  description:
    "ファミレス4社のハンバーグをカロリー・タンパク質・PFCの公式データで横断比較。標準サイズの単品で公平比較し、高タンパク・低カロリー・低脂質の選び方を解説。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/hamburg-comparison",
};

const tocItems = [
  { id: "plain-comparison", label: "標準ハンバーグ単品4社対決" },
  { id: "why-different", label: "なぜ同じハンバーグでカロリーが違う？" },
  { id: "calorie-ranking", label: "低カロリーランキング" },
  { id: "protein-ranking", label: "高タンパクで選ぶ（筋トレ向き）" },
  { id: "rice-side", label: "ライス・サイドで変わる総カロリー" },
  { id: "by-purpose", label: "目的別おすすめ早見表" },
  { id: "avoid", label: "避けたい高カロリーハンバーグ" },
  { id: "summary", label: "まとめ" },
];

export default function HamburgComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ファミレスのハンバーグ カロリー比較"
        subtitle="びっくりドンキー・ココス・デニーズ・ジョイフル 4社の太らない選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=400&fit=crop"
        breadcrumb="ファミレスのハンバーグ比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="hamburg-comparison">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="ファミレスのハンバーグで一番低カロリー・高タンパクなのはどこ？ダイエット中はどれを選ぶ？"
          answer={
            <>
              標準サイズの単品で比べると、<strong>最も低カロリーなのはびっくりドンキーのハンバーグ（Sサイズ262kcal）</strong>、次いでデニーズのおろしハンバーグ（304kcal）、ココスのハンバーグ（350kcal）の順です。<strong>タンパク質効率（カロリーあたりのタンパク質）が最も高いのもびっくりドンキー（262kcal/P20.3g）</strong>で、ダイエットと筋トレの両方で第一候補になります。ジョイフルはプレーンな単品ハンバーグがなく、和風・ペッパー系で580kcal前後とソース込みで高めのため、低カロリーを狙うならグリルチキンの冷製（212kcal/P14.3g）への切り替えも選択肢です。ただしハンバーグは<strong>ライスとサイドの量で総カロリーが大きく動く</strong>ため、単品＋小盛ライス＋サラダの組み合わせが太りにくい食べ方です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ファミレスでハンバーグが食べたいけど、どこのチェーンが太りにくい？」——ハンバーグは挽き肉とソース、付け合わせのライスで構成されるため、<Marker>同じ「ハンバーグ」でもチェーンによってカロリーは大きく変わります</Marker>。
        </p>
        <p className="mb-4">
          この記事では、ハンバーグの代表チェーン4社——<Marker color="blue">びっくりドンキー・ココス・デニーズ・ジョイフルの公式栄養データ</Marker>を横断比較します。比較は公平を期すため、原則として<Marker>「標準サイズ・単品（ソース込みのハンバーグ本体）」</Marker>でそろえ、大盛りやライス・サイドは別途分けて解説します。
        </p>
        <p className="mb-8">
          なお、この記事で扱う「ハンバーグ」は挽き肉を成形して焼いた料理です。マクドナルドやモスなどの「ハンバーガー（サンドイッチ）」の比較は、<Link href="/guide/hamburger-comparison" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ハンバーガーチェーン5社カロリー比較</Link>で別途まとめています。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="hamburg-comparison-steak" genre="steak" />

        {/* Section 1: 標準ハンバーグ単品4社対決 */}
        <section className="mb-16">
          <SectionHeading id="plain-comparison">
            標準ハンバーグ単品 4社対決
          </SectionHeading>

          <p className="mb-4">
            まずは条件をそろえて、各社の<Marker>標準的なハンバーグ単品</Marker>を比較します。各社の「看板の挽き肉ハンバーグ」を、最も基本に近い単品の数値で並べました。
          </p>

          <ComparisonTable
            headers={["チェーン（メニュー）", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["びっくりドンキー（Sハンバーグ）", "262 kcal", "20.3g", "14.7g", "12.1g"],
              ["デニーズ（おろしハンバーグ）", "304 kcal", "22.1g", "17.9g", "13.8g"],
              ["ココス（ココスのハンバーグ）", "350 kcal", "19.8g", "22.5g", "14.7g"],
              ["ジョイフル（和風ハンバーグ）", "581 kcal", "24.3g", "40.4g", "26.3g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            最軽量は<Marker>びっくりドンキーのSハンバーグ（262kcal）</Marker>。デニーズのおろしハンバーグ（304kcal）が続き、ココスのハンバーグ（350kcal）まではいずれも350kcal前後に収まります。一方、<Marker color="blue">ジョイフルはプレーンな単品ハンバーグがメニューになく</Marker>、最も軽い和風ハンバーグでも581kcal（脂質40.4g）と、3社から大きく離れます。
          </p>

          <CalorieBar
            title="標準ハンバーグ単品 カロリー比較（kcal・少ない順）"
            items={[
              { name: "びっくりドンキー Sハンバーグ", value: 262 },
              { name: "デニーズ おろしハンバーグ", value: 304 },
              { name: "ココス ハンバーグ", value: 350 },
              { name: "ジョイフル 和風ハンバーグ", value: 581 },
            ]}
            highlightTop={1}
            caption="※標準サイズ・単品（ソース込みのハンバーグ本体）。ライス・サイドは含まない。各社公式栄養データ（2026年6月時点）。"
          />

          <TipBox title="標準単品対決のポイント">
            <p>
              びっくりドンキーのSハンバーグは<Marker>262kcalでタンパク質20.3g</Marker>と、低カロリーと高タンパクを同時に満たす優等生です。デニーズのおろしハンバーグはおろしソースで脂質を抑えつつP22.1gと最多クラス。<Marker color="green">「数字で選ぶなら、まずびっくりドンキーかデニーズ」</Marker>が結論です。びっくりドンキーの太らない食べ方は<Link href="/guide/bikkuri-donkey-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">びっくりドンキーでダイエットする方法</Link>で深掘りしています。
            </p>
          </TipBox>
        </section>

        {/* Section 2: なぜカロリーが違う */}
        <section className="mb-16">
          <SectionHeading id="why-different">
            なぜ同じ「ハンバーグ」でカロリーが違うのか
          </SectionHeading>

          <p className="mb-4">
            同じハンバーグでも262kcal〜581kcalと2倍以上の差がつく理由は、主に次の3つです。数字の「なぜ」を理解すると、店頭でメニューを選ぶときの判断が一気に楽になります。
          </p>

          <NumberedList
            items={[
              {
                title: "パティのサイズと脂質量",
                body: "ハンバーグのカロリーを最も左右するのが脂質です。びっくりドンキーSは脂質14.7g、ココスは22.5g、ジョイフル和風は40.4g。脂質は1gあたり9kcalと、タンパク質・炭水化物（各4kcal）の2倍以上のため、同じ重量でも脂の多いパティほどカロリーが跳ね上がります。",
              },
              {
                title: "ソースとトッピング",
                body: "デミグラス・チーズ・クリーム系のソースは脂質と糖質を上乗せします。実際、ココスのハンバーグ（350kcal）に対し、チーズインハンバーグは530kcal。同じ店でもソースとチーズで+180kcalです。逆におろし・和風のさっぱり系ソースはカロリーを抑えやすい傾向があります。",
              },
              {
                title: "ライス・サイドの有無",
                body: "「ハンバーグ単品」か「ライス・スープ付きのセット」かで総カロリーは大きく変わります。各社のライス単品はびっくりドンキー336kcal、デニーズ302kcal、ココス250kcal前後。ハンバーグと同じくらいのカロリーがライスだけで加算される点に注意が必要です（詳しくは後述）。",
              },
            ]}
          />

          <TipBox title="表示の前提を必ずそろえる">
            <p>
              ファミレスの公式栄養成分表は、<Marker>「ハンバーグ本体だけ」の数値か「ライス・スープ込みのセット」の数値か</Marker>が混在しています。本記事の4社対決は、できる限り「ハンバーグ本体（ソース込み・ライスなし）」でそろえています。セット表記の数値と比べると差が出るのはこのためです。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="4社のハンバーグを栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=400&fit=crop"
          alt="鉄板で焼かれるハンバーグのイメージ"
        />

        {/* Section 3: 低カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">
            低カロリーハンバーグランキング（4社横断）
          </SectionHeading>

          <p className="mb-6">
            4社のハンバーグメニューを横断し、カロリー・PFCバランスから「ダイエット中に選ぶ価値が高い」順に厳選しました。いずれもハンバーグ本体（単品）の数値です。
          </p>

          <RankingCard
            rank={1}
            title="Sハンバーグ（びっくりドンキー）"
            subtitle="262kcal / P20.3g / F14.7g / C12.1g"
            calories={262}
            protein={20.3}
            fat={14.7}
            carbs={12.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              4社横断の<Marker>低カロリー＆高タンパク王者</Marker>。262kcalでタンパク質20.3g、炭水化物も12.1gと最少クラスです。「ハンバーグを食べながらカロリーを抑えたい」なら、まずこれを覚えてください。さらに軽いおろしそバーグ（S・269kcal/P20.5g）も同等です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="おろしハンバーグ（デニーズ）"
            subtitle="304kcal / P22.1g / F17.9g / C13.8g"
            calories={304}
            protein={22.1}
            fat={17.9}
            carbs={13.8}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">タンパク質22.1gは4社の標準ハンバーグで最多</Marker>。おろしソースのおかげで300kcal台前半に収まり、高タンパク・低糖質の両立度が高い一品です。デニーズの選べるおかずとして単品で頼める点も使い勝手が良好です。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ココスのハンバーグ（ココス）"
            subtitle="350kcal / P19.8g / F22.5g / C14.7g"
            calories={350}
            protein={19.8}
            fat={22.5}
            carbs={14.7}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">350kcalでタンパク質約20g</Marker>と、定番ハンバーグとしてバランス良好。脂質はやや高めですが、チーズインや包み焼き系（500〜600kcal台）を避けてプレーンを選べば十分ダイエット向きです。ココスの太らない食べ方は<Link href="/guide/cocos-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ココスでダイエットする方法</Link>を参照してください。
            </p>
          </RankingCard>

          <SubSectionHeading>低カロリーハンバーグTOP6（4社横断・単品）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "Sハンバーグ（びっくりドンキー）", calories: 262, protein: 20.3, fat: 14.7, carbs: 12.1, highlight: true },
              { name: "Sおろしそバーグ（びっくりドンキー）", calories: 269, protein: 20.5, fat: 14.8, carbs: 13.8 },
              { name: "おろしハンバーグ（デニーズ）", calories: 304, protein: 22.1, fat: 17.9, carbs: 13.8, highlight: true },
              { name: "Sパインバーグ（びっくりドンキー）", calories: 317, protein: 20.5, fat: 14.7, carbs: 25.7 },
              { name: "ココスのハンバーグ（ココス）", calories: 350, protein: 19.8, fat: 22.5, carbs: 14.7, highlight: true },
              { name: "山盛り鬼おろしハンバーグ（ココス）", calories: 399, protein: 21.7, fat: 22.6, carbs: 25.0 },
            ]}
            caption="※標準サイズ・ハンバーグ本体（ソース込み・ライスなし）。各社公式栄養データ（2026年6月時点）。たべなびDBで検証済み。"
          />

          <TipBox title="ジョイフルで低カロリーを狙うなら">
            <p>
              ジョイフルにはプレーンな単品ハンバーグがなく、和風ハンバーグ（581kcal）が最軽量です。<Marker>ジョイフルでカロリーを抑えたい日</Marker>は、ハンバーグにこだわらずグリルチキンの冷製（212kcal/P14.3g）やひとくちチキンステーキ2個（164kcal/P12.5g）に切り替えるのが現実的。ファミレス全体の戦略は<Link href="/guide/family-restaurant-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ファミレスでダイエットする方法</Link>でまとめています。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="protein-ranking">
            高タンパクで選ぶ（筋トレ向き）
          </SectionHeading>

          <p className="mb-4">
            トレーニング後にしっかりタンパク質を摂りたい日は、<Marker>タンパク質量とその効率</Marker>で選びます。4社横断の高タンパクハンバーグ（およびハンバーグ系）がこちら。
          </p>

          <NutritionTable
            items={[
              { name: "ハンバーグM（びっくりドンキー）", calories: 403, protein: 30.2, fat: 20.9, carbs: 24.3, highlight: true },
              { name: "ベーコンチーズハンバーグ（デニーズ）", calories: 563, protein: 29.2, fat: 39.5, carbs: 22.1 },
              { name: "チーズインハンバーグ（ココス）", calories: 530, protein: 29.2, fat: 35.8, carbs: 19.1 },
              { name: "ビーフハンバーグステーキ（ココス）", calories: 504, protein: 25.9, fat: 39.6, carbs: 6.4 },
              { name: "和風ハンバーグ（ジョイフル）", calories: 581, protein: 24.3, fat: 40.4, carbs: 26.3 },
              { name: "おろしハンバーグ（デニーズ）", calories: 304, protein: 22.1, fat: 17.9, carbs: 13.8, highlight: true },
              { name: "Sハンバーグ（びっくりドンキー）", calories: 262, protein: 20.3, fat: 14.7, carbs: 12.1, highlight: true },
            ]}
            highlightProtein
            caption="※ハンバーグ本体（ソース込み・ライスなし）。各社公式栄養データ（2026年6月時点）。"
          />

          <p className="mb-4">
            タンパク質の絶対量なら<Marker>びっくりドンキーのハンバーグM（30.2g）</Marker>が4社のハンバーグで最多。しかも403kcalと脂質を抑えつつ高タンパクを実現しています。一方、<Marker color="blue">カロリーあたりのタンパク質効率で見ると、Sハンバーグ（262kcal/P20.3g）とデニーズおろしハンバーグ（304kcal/P22.1g）が圧倒的</Marker>。チーズイン系は29g前後のタンパク質を摂れますが、脂質が35〜40gと跳ね上がるため、減量期はおろし・和風のさっぱり系を選ぶのが効率的です。
          </p>

          <ProteinBar
            title="ハンバーグ単品 タンパク質比較（g・多い順）"
            items={[
              { name: "びっくりドンキー ハンバーグM", value: 30.2, note: "403kcal" },
              { name: "デニーズ おろしハンバーグ", value: 22.1, note: "304kcal" },
              { name: "びっくりドンキー Sハンバーグ", value: 20.3, note: "262kcal" },
              { name: "ココス ハンバーグ", value: 19.8, note: "350kcal" },
            ]}
            highlightTop={1}
            caption="※標準〜Mサイズのハンバーグ本体。各社公式栄養データ（2026年6月時点）。"
          />
        </section>

        {/* Section 5: ライス・サイド */}
        <section className="mb-16">
          <SectionHeading id="rice-side">
            ライス・サイドで変わる総カロリー
          </SectionHeading>

          <p className="mb-4">
            ハンバーグ選びで意外と見落としがちなのが<Marker>ライスとサイドのカロリー</Marker>です。ハンバーグ本体が262kcalでも、ライスを足すと総カロリーが2倍近くになることもあります。各社のライス（単品）の実数値を見てみましょう。
          </p>

          <ComparisonTable
            headers={["チェーン", "ライス（並）", "小盛ライス", "サラダ・スープの軽い選択肢"]}
            rows={[
              ["びっくりドンキー", "336 kcal", "252 kcal（小ライス）", "彩り野菜系・みそ汁43kcal"],
              ["デニーズ", "302 kcal", "168 kcal（ライス少なめ）", "みそ汁25kcal"],
              ["ココス", "250 kcal", "—", "彩り野菜のグリーンサラダ10kcal"],
              ["ジョイフル", "296 kcal", "—", "味噌汁28kcal・彩りサラダ112kcal"],
            ]}
            bestRowIndex={2}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            ライスは並で<Marker>250〜336kcal</Marker>。びっくりドンキーのSハンバーグ262kcalに並ライス336kcalを足すと598kcalになり、ハンバーグ本体より付け合わせの方が重くなります。<Marker color="blue">ライスを小盛り（デニーズなら少なめ168kcal）にするだけで100kcal以上カット</Marker>できるため、減量中はまず「ライスを小盛りに」が最も効果的な一手です。
          </p>

          <TipBox title="太りにくい組み立ての黄金比">
            <p>
              「<Marker>低カロリーなハンバーグ単品＋小盛りライス＋サラダ（またはみそ汁）</Marker>」が鉄板の組み立て。たとえばデニーズのおろしハンバーグ304kcal＋ライス少なめ168kcal＋みそ汁25kcalで合計497kcal。同じデニーズでも昼デニ系のセット（700〜870kcal）と比べて200〜370kcalも軽く、タンパク質はしっかり22g以上確保できます。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 目的別おすすめ */}
        <section className="mb-16">
          <SectionHeading id="by-purpose">目的別おすすめ早見表</SectionHeading>

          <p className="mb-6">
            「結局どれを選べばいい？」を目的別に整理しました。いずれもハンバーグ本体の数値で比較しています。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ", "数値の根拠"]}
            rows={[
              ["とにかく低カロリー", "びっくりドンキー Sハンバーグ", "262kcal（4社最少）"],
              ["高タンパク低脂質", "デニーズ おろしハンバーグ", "304kcal / P22.1g / F17.9g"],
              ["タンパク質を最大化", "びっくりドンキー ハンバーグM", "403kcal / P30.2g"],
              ["低糖質を意識", "びっくりドンキー Sハンバーグ", "C12.1g（4社最少）"],
              ["定番のバランス重視", "ココス ハンバーグ", "350kcal / P19.8g"],
              ["ハンバーグ以外で軽く", "ジョイフル グリルチキンの冷製", "212kcal / P14.3g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4 mt-6">
            総合的には、<Marker>低カロリー・高タンパク・低糖質のすべてでびっくりドンキーが強い</Marker>結果になりました。タンパク質量をさらに伸ばしたい筋トレ後はハンバーグMへ、おろしソースでさっぱり食べたい日はデニーズへ、と使い分けるのが賢い選び方です。
          </p>

          <SubSectionHeading>各チェーンの全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/bikkuri-donkey" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍴 びっくりドンキー</Link>
            <Link href="/chains/cocos" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍴 ココス</Link>
            <Link href="/chains/dennys" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍴 デニーズ</Link>
            <Link href="/chains/joyfull" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍴 ジョイフル</Link>
          </div>
        </section>

        {/* Section 7: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けたい高カロリーハンバーグ</SectionHeading>

          <p className="mb-4">
            逆に、ダイエット中は<Marker>「チーズ」「包み焼き」「ダブル」「定食・膳」のつくメニュー</Marker>に注意。1食で1日の半分近いカロリーになるものがあります。
          </p>

          <WarningBox title="ダイエット中は要注意のメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">ココス ビーフハンバーグステーキダブル（982kcal）</span> ─ 脂質78.8g。ハンバーグ1皿で成人の1日の脂質目標量（厚生労働省「日本人の食事摂取基準」：総エネルギーの20〜30%）に迫る数値です。</li>
              <li><span className="font-bold">ジョイフル どど〜ん！っと大きなミックスグリル（1,241kcal）</span> ─ 脂質87.8g。単品で1食の上限を大きく超えます。</li>
              <li><span className="font-bold">ジョイフル ツインハンバーグ（1,157kcal）</span> ─ パティ2枚で脂質81.6g。</li>
              <li><span className="font-bold">ココス ハンバーグボロネーゼ（942kcal）</span> ─ パスタとの組み合わせで糖質・脂質が大幅増。</li>
              <li><span className="font-bold">デニーズ ハンバーグカレードリア（805kcal）</span> ─ ドリア化でライス・チーズが上乗せ。</li>
            </ul>
          </WarningBox>

          <WarningBox title="本当の落とし穴は「定食・膳・セット」">
            <p>
              ハンバーグ本体よりも怖いのが、ライス・みそ汁・小鉢がセットになった定食です。デニーズの<Marker>おろしハンバーグとヒレカツ定食は930kcal</Marker>、昼デニ系のハンバーグセットも744〜871kcal。ハンバーグ単品なら300kcal前後で済むところが、セットにした瞬間2〜3倍になります。ダイエット中は「単品＋小盛りライス＋サラダ」を基本に、セットや定食は週末のごほうびにとどめるのが鉄則です。
            </p>
          </WarningBox>
        </section>

        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ファミレスのハンバーグは「チェーン選び」と「サイド選び」の掛け算でカロリーが大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "標準ハンバーグ単品で最も低カロリーはびっくりドンキーSハンバーグ（262kcal/P20.3g）",
              "高タンパク低脂質ならデニーズおろしハンバーグ（304kcal/P22.1g/F17.9g）が優秀",
              "タンパク質を最大化するならびっくりドンキー ハンバーグM（403kcal/P30.2g）",
              "ジョイフルはプレーン単品がなく和風ハンバーグでも581kcal。軽くするならチキン系へ",
              "総カロリーはライスとサイドで激変。単品＋小盛りライス＋サラダが太りにくい組み立て",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。本記事は栄養成分の比較情報であり、特定の健康効果を保証するものではありません。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="hamburg-comparison"
          items={[
            {
              q: "ファミレスのハンバーグで一番カロリーが低いのはどこですか？",
              a: "標準サイズの単品で比べると、びっくりドンキーのSハンバーグ（262kcal）が最も低く、次いでデニーズのおろしハンバーグ（304kcal）、ココスのハンバーグ（350kcal）の順です。ジョイフルはプレーンな単品ハンバーグがなく、最軽量の和風ハンバーグでも581kcalと高めです（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "ダイエット中におすすめのハンバーグは？",
              a: "高タンパク低脂質で選ぶならデニーズのおろしハンバーグ（304kcal/タンパク質22.1g/脂質17.9g）、純粋にカロリーを抑えたいならびっくりドンキーのSハンバーグ（262kcal）がおすすめです。いずれもチーズ・包み焼き・ダブル系を避け、ライスを小盛りにすることで総カロリーをさらに抑えられます。",
            },
            {
              q: "筋トレ後に食べるなら、どのハンバーグが高タンパクですか？",
              a: "タンパク質の絶対量ではびっくりドンキーのハンバーグM（403kcal/タンパク質30.2g）が4社のハンバーグで最多です。カロリーを抑えつつ高タンパクを狙うなら、Sハンバーグ（262kcal/P20.3g）やデニーズのおろしハンバーグ（304kcal/P22.1g）がタンパク質効率に優れます。",
            },
            {
              q: "ジョイフルにはなぜ低カロリーのハンバーグがないのですか？",
              a: "ジョイフルのハンバーグはソース込みの一品料理が中心で、最軽量の和風ハンバーグでも581kcal（脂質40.4g）です。ジョイフルでカロリーを抑えたい場合は、ハンバーグにこだわらずグリルチキンの冷製（212kcal/タンパク質14.3g）やひとくちチキンステーキ2個（164kcal/タンパク質12.5g）を選ぶのが現実的です。",
            },
            {
              q: "ハンバーグにライスをつけると何kcal増えますか？",
              a: "各社のライス（並）はびっくりドンキー336kcal、デニーズ302kcal、ジョイフル296kcal、ココス250kcal前後です。ライス少なめ・小盛りにすると、デニーズなら168kcalまで下がり100kcal以上カットできます。ハンバーグ本体と同じくらいのカロリーがライスで加算されるため、減量中はまずライスの量を調整するのが効果的です。",
            },
            {
              q: "チーズインハンバーグはどのくらいカロリーが上がりますか？",
              a: "ココスの場合、プレーンのハンバーグ（350kcal）に対しチーズインハンバーグは530kcalで、チーズの分だけ約180kcal・脂質も13g以上増えます。チーズ系・包み焼き系・デミグラス系はおいしい反面カロリーが大きく上がるため、ダイエット中はおろし・和風などのさっぱり系ソースを選ぶのがおすすめです。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="ファミレス4社のハンバーグをまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-24", note: "初稿公開（ファミレス4社の公式栄養データに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="hamburg-comparison" />

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
