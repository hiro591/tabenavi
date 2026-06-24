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
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "カフェチェーンのカロリー比較｜スターバックス・ドトールで太りにくい選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/cafe-comparison" },
  description:
    "スターバックス・ドトールのドリンク・フードを、カロリー・タンパク質・糖質の実データで比較。ブラック・ラテ・フラペ系・サンド・スイーツの2社対決、低カロリー・低糖質なドリンクの選び方、カスタムでのカロリー削減術を紹介します。",
  keywords: [
    "カフェ カロリー 比較",
    "スタバ ドトール カロリー",
    "スタバ 低カロリー ドリンク",
    "ドトール ダイエット",
    "カフェ 糖質 比較",
    "カフェラテ カロリー 比較",
  ],
  openGraph: {
    title: "カフェチェーンのカロリー比較｜スターバックス・ドトールで太りにくい選び方",
    description:
      "スターバックス・ドトールのドリンク・フードを、カロリー・タンパク質・糖質の実データで比較。低カロリー・低糖質なドリンクの選び方、ダイエット中におすすめのメニューを紹介します。",
    url: "https://www.tabenavi.jp/guide/cafe-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "カフェチェーンのカロリー比較｜スターバックス・ドトールで太りにくい選び方",
  description:
    "スターバックス・ドトールのドリンク・フードを、カロリー・タンパク質・糖質の実データで比較。低カロリー・低糖質なドリンクの選び方、ダイエット中におすすめのメニューを紹介します。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/cafe-comparison",
};

const tocItems = [
  { id: "black-coffee", label: "ブラックコーヒー対決" },
  { id: "latte", label: "カフェラテ対決" },
  { id: "sweet-drink", label: "甘いドリンク（フラペ・モカ）対決" },
  { id: "food", label: "サンド・スイーツ対決" },
  { id: "low-cal-ranking", label: "低カロリードリンクTOP10" },
  { id: "purpose", label: "目的別おすすめの選び方" },
  { id: "custom", label: "カスタムでカロリーを削る" },
  { id: "summary", label: "まとめ" },
];

export default function CafeComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="カフェチェーン カロリー比較"
        subtitle="スターバックス・ドトールで太りにくい選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop"
        breadcrumb="カフェ比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="cafe-comparison">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="スターバックスとドトール、ダイエット中はどっちで何を選べばいい？太りにくいのはどっち？"
          answer={
            <>
              ブラックコーヒーで選ぶならどちらも<strong>10kcal前後でほぼ互角</strong>（スタバのブリュードコーヒー17kcal、ドトールのブレンドS 5kcal）。差がつくのは甘いドリンクで、ドトールの<strong>カフェ・ラテ（S・76kcal/糖質6.2g）</strong>はスタバ系のラテより一段軽め。一方スタバは<strong>カフェ アメリカーノ（11kcal）やカプチーノ（120kcal）</strong>など低カロリーの選択肢が豊富です。最も太りやすいのはフラペチーノ系で、<strong>ダブル チョコレート フラペチーノ®は497kcal・糖質72.1g</strong>とドトールのカフェ・モカS（191kcal）の約2.6倍。タンパク質を補いたいならスタバの<strong>ハム＆チーズ 石窯カンパーニュサンド（255kcal/P17.4g）</strong>が優秀です。結論、<strong>「ブラック＋軽食」ならどちらでも、甘いものを足すならカロリー差が大きいので数字で選ぶ</strong>のが正解です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどカフェで一息つきたい」——そんなとき、スターバックスとドトールでは選べるメニューの性格がかなり違います。実は、<Marker>同じ「カフェのドリンク」でも、ブラックコーヒーの十数kcalから、フラペチーノの500kcal近くまで約30〜40倍の幅</Marker>があります。
        </p>
        <p className="mb-4">
          この記事では、<Marker color="blue">スターバックスとドトールの公式栄養データ</Marker>を、ブラック・ラテ・甘いドリンク・サンド・スイーツのカテゴリーごとに横断比較します。比較は店舗で頼みやすい<Marker>標準サイズ（スタバ＝Tallまたは標準、ドトール＝S）と単品</Marker>でそろえ、サイズアップや増量の影響は別途注記します。
        </p>
        <p className="mb-8">
          「結局どっちが太りにくいの？」という疑問に、カロリーだけでなく糖質・タンパク質の数字まで踏み込んで答えます。「いつもの一杯」を変えるだけのカロリーオフ術も紹介するので、店に入る前の判断材料にしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="cafe-comparison-img" genre="cafe" />

        {/* Section 1: ブラックコーヒー対決 */}
        <section className="mb-16">
          <SectionHeading id="black-coffee">
            ブラックコーヒー対決（実はほぼ互角）
          </SectionHeading>

          <p className="mb-4">
            まずはカフェの基本、<Marker>砂糖・ミルクなしのブラックコーヒー</Marker>から。ここはどちらも一桁〜十数kcalで、ダイエット中の「最強の一杯」です。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "糖質(炭水化物)"]}
            rows={[
              ["ドトール ブレンドコーヒー S", "5 kcal", "0.1g", "0g", "1.1g"],
              ["スタバ カフェ アメリカーノ（ホット）", "11 kcal", "0.8g", "0g", "2.2g"],
              ["ドトール アメリカンコーヒー M", "7 kcal", "0.2g", "0g", "1.4g"],
              ["スタバ ブリュード コーヒー（ホット）", "17 kcal", "1.0g", "0g", "3.1g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            最も低いのは<Marker>ドトールのブレンドコーヒーS（5kcal）</Marker>ですが、スタバのブリュードコーヒー（17kcal）との差はわずか12kcal。<Marker color="blue">どちらを選んでも「飲み物のカロリーは実質ゼロ」</Marker>と考えて差し支えありません。アイスにしても各社10kcal前後で変わりません。
          </p>

          <TipBox title="ブラック対決のポイント">
            <p>ブラックの段階では<Marker>勝敗はつかず「どちらも正解」</Marker>。差がつくのはミルク・砂糖・シロップを足した瞬間です。ダイエットを徹底したい日は、迷わずブレンドコーヒーやカフェ アメリカーノをベースにしましょう。なおスタバの<Marker color="green">カフェ アメリカーノ（11kcal）はエスプレッソをお湯で割った一杯</Marker>で、コクが欲しいブラック派にも向きます。</p>
          </TipBox>
        </section>

        {/* Section 2: カフェラテ対決 */}
        <section className="mb-16">
          <SectionHeading id="latte">
            カフェラテ対決（ミルク系の定番）
          </SectionHeading>

          <p className="mb-4">
            ブラックは苦手、でも甘すぎるのも避けたい——そんな人の定番がミルク系です。各社の<Marker>標準的なミルクドリンク</Marker>を比べます。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "糖質(炭水化物)"]}
            rows={[
              ["ドトール カフェ・ラテ S", "76 kcal", "3.8g", "4.1g", "6.2g"],
              ["スタバ カプチーノ（ホット）", "120 kcal", "6.9g", "6.0g", "10.1g"],
              ["ドトール カフェ・ラテ M", "97 kcal", "4.9g", "5.2g", "8.0g"],
              ["スタバ カフェミスト", "134 kcal", "7.6g", "6.5g", "11.4g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            ミルク系で最軽量は<Marker>ドトールのカフェ・ラテS（76kcal）</Marker>。スタバはサイズが大きめなこともあり、最軽量のミルク系でもカプチーノ（120kcal）からとなります。ただしスタバの<Marker color="blue">カプチーノはタンパク質6.9gとカフェ・ラテSの約1.8倍</Marker>で、フォームミルクの満足感が高いのが持ち味。「少量でしっかり感」がほしい日はカプチーノが向きます。
          </p>

          <TipBox title="サイズをそろえて見ると">
            <p>スタバとドトールはサイズ基準が違うため、単純比較には注意が必要です。<Marker>ドトールのカフェ・ラテはS→M→Lで76→97→125kcal</Marker>と増え、Lでようやくスタバのカプチーノ並み。<Marker color="green">同じ「ラテ1杯」でもサイズで約50kcal動く</Marker>ので、量を抑えたい日は小さいサイズを選ぶのが基本です。</p>
          </TipBox>
        </section>

        {/* Section 3: 甘いドリンク対決 */}
        <section className="mb-16">
          <SectionHeading id="sweet-drink">
            甘いドリンク対決（フラペチーノ vs カフェ・モカ）
          </SectionHeading>

          <p className="mb-4">
            ここが最大の分かれ道です。スタバの看板フラペチーノ®と、ドトールの甘い定番カフェ・モカでは、<Marker>カロリー・糖質ともに2倍以上の開き</Marker>がつきます。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "糖質(炭水化物)"]}
            rows={[
              ["ドトール アイスカフェ・モカ S", "179 kcal", "2.9g", "10.7g", "17.9g"],
              ["ドトール カフェ・モカ S", "191 kcal", "3.1g", "11.2g", "19.4g"],
              ["スタバ ストロベリー フラペチーノ®", "357 kcal", "5.0g", "12.6g", "56.3g"],
              ["スタバ ダブル チョコレート フラペチーノ®", "497 kcal", "7.7g", "20.2g", "72.1g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            最重量は<Marker>スタバのダブル チョコレート フラペチーノ®（497kcal・糖質72.1g）</Marker>で、ドトールのカフェ・モカS（191kcal）の約2.6倍。<Marker color="blue">糖質72.1gは角砂糖に換算すると約18個分</Marker>に相当し、これ1杯で1食分のエネルギーに迫ります。「飲むスイーツ」と割り切るなら別ですが、ダイエット中の日常使いには重い選択です。
          </p>

          <WarningBox title="フラペチーノは「飲むケーキ」と考える">
            <p>スタバのフラペチーノ®はホイップやシロップを含むため、<Marker>多くがスイーツ並みのカロリー・糖質</Marker>です。たとえばイチゴ チョコレート フラペチーノ®（425kcal・糖質64.9g）など、ケーキ1個に匹敵します。同じ甘いものでも<Marker color="green">ドトールのカフェ・モカS（191kcal）なら半分以下</Marker>。「甘いドリンクが飲みたい日」はドトール側の方がカロリーコントロールしやすいと言えます。</p>
          </WarningBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="スタバ・ドトールの全ドリンクを糖質で並べ替え"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・糖質で比較できます"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=400&fit=crop"
          alt="カフェのサンドイッチとコーヒーのイメージ"
        />

        {/* Section 4: フード対決 */}
        <section className="mb-16">
          <SectionHeading id="food">
            サンド・スイーツ対決（タンパク質で選ぶ）
          </SectionHeading>

          <p className="mb-4">
            カフェで小腹を満たすなら、<Marker>サンドイッチはタンパク質、スイーツは糖質・脂質</Marker>に注目します。まずは食事代わりになるサンド系から。
          </p>

          <SubSectionHeading>フードサンド対決</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "糖質(炭水化物)"]}
            rows={[
              ["スタバ ハム＆チーズ 石窯カンパーニュサンド", "255 kcal", "17.4g", "13.8g", "15.9g"],
              ["ドトール ミックスサンド", "263 kcal", "9.4g", "11.6g", "30.5g"],
              ["ドトール チキンカツ＆レモンタルタルタマゴサンド", "287 kcal", "10.4g", "12.3g", "33.7g"],
              ["スタバ ポークカツ 石窯カンパーニュサンド", "414 kcal", "18.6g", "23.2g", "33.9g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            タンパク質効率で群を抜くのが<Marker>スタバのハム＆チーズ 石窯カンパーニュサンド（255kcal・P17.4g）</Marker>。糖質も15.9gと低めで、カフェで「軽く高タンパクに済ませたい」日の最有力候補です。一方ドトールのサンド系は<Marker color="blue">タンパク質が10g前後</Marker>でやや軽く、ランチがわりに頼むなら2品にするか、別途タンパク質を足したいところです。
          </p>

          <SubSectionHeading>スイーツ対決</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "糖質(炭水化物)"]}
            rows={[
              ["スタバ オレンジケーキ", "266 kcal", "1.6g", "16.6g", "28.3g"],
              ["ドトール 北海道十勝産小豆のあんぱん", "282 kcal", "7.8g", "2.8g", "56.7g"],
              ["ドトール シナモンロール", "288 kcal", "4.5g", "7.3g", "51.1g"],
              ["スタバ ブルーベリーレアチーズケーキ", "340 kcal", "4.3g", "19.7g", "37.3g"],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            スイーツは<Marker>スタバ＝脂質型、ドトール＝糖質型</Marker>という傾向が見えます。スタバのケーキ類は脂質が16〜20g台と高め、ドトールのあんぱん・シナモンロールは脂質が低い代わりに糖質50g超。<Marker color="green">脂質を抑えたい日はドトール、糖質を抑えたい日はスタバ</Marker>と、その日の制限に合わせて選ぶと管理しやすくなります。
          </p>

          <TipBox title="スイーツは「ブラック＋単品1つ」で">
            <p>スイーツを楽しむ日こそ、ドリンクはブラックに。たとえば<Marker>ドトールのブレンドコーヒーS（5kcal）＋あんぱん（282kcal）で287kcal</Marker>。これを甘いラテにすると+100kcal前後上乗せされます。「甘いものは1品まで、ドリンクはブラック」が、満足感とカロリーを両立する黄金ルールです。</p>
          </TipBox>
        </section>

        {/* Section 5: 低カロリードリンクランキング */}
        <section className="mb-16">
          <SectionHeading id="low-cal-ranking">
            低カロリードリンクTOP10（2社横断）
          </SectionHeading>

          <p className="mb-6">
            スタバ・ドトールのドリンクを横断し、<Marker>カロリーが低い順</Marker>に並べました。甘さやコクが欲しくても、この中から選べばカロリーは大きく外しません（フードを除くドリンク・標準サイズ）。
          </p>

          <RankingCard
            rank={1}
            title="ドトール ブレンドコーヒー S"
            subtitle="5kcal / P0.1g / F0g / C1.1g"
            calories={5}
            protein={0.1}
            fat={0}
            carbs={1.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>実質ゼロカロリーの王道</Marker>。Sサイズで350円とコスパも良く、ダイエット中の「とりあえずの一杯」として最も堅実です。Mサイズでも7kcalとほぼ変わりません。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="スタバ カフェ アメリカーノ（ホット）"
            subtitle="11kcal / P0.8g / F0g / C2.2g"
            calories={11}
            protein={0.8}
            fat={0}
            carbs={2.2}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              エスプレッソをお湯で割った<Marker color="blue">コクのあるブラック</Marker>。アイスも同じく11kcalで、「しっかりコーヒー感がほしいけどカロリーは抑えたい」日にぴったりです。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ドトール カフェ・ラテ S"
            subtitle="76kcal / P3.8g / F4.1g / C6.2g"
            calories={76}
            protein={3.8}
            fat={4.1}
            carbs={6.2}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">ミルク系で最軽量（76kcal）かつ糖質6.2g</Marker>。ブラックが苦手な人の「低カロリーなミルクドリンク」として、まず覚えておきたい一杯です。
            </p>
          </RankingCard>

          <SubSectionHeading>低カロリードリンクTOP10一覧</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "ブレンドコーヒー S（ドトール）", calories: 5, protein: 0.1, fat: 0, carbs: 1.1, highlight: true },
              { name: "アメリカンコーヒー M（ドトール）", calories: 7, protein: 0.2, fat: 0, carbs: 1.4 },
              { name: "カフェ アメリカーノ ホット（スタバ）", calories: 11, protein: 0.8, fat: 0, carbs: 2.2, highlight: true },
              { name: "ブリュード コーヒー ホット（スタバ）", calories: 17, protein: 1.0, fat: 0, carbs: 3.1 },
              { name: "アイス豆乳ラテ S（ドトール）", calories: 59, protein: 4.0, fat: 3.0, carbs: 4.1 },
              { name: "豆乳ラテ S（ドトール）", calories: 64, protein: 4.3, fat: 3.3, carbs: 4.4 },
              { name: "カフェ・ラテ S（ドトール）", calories: 76, protein: 3.8, fat: 4.1, carbs: 6.2, highlight: true },
              { name: "アーモンドミルク ラテ アイス（スタバ）", calories: 90, protein: 1.8, fat: 7.4, carbs: 5.5 },
              { name: "カプチーノ ホット（スタバ）", calories: 120, protein: 6.9, fat: 6.0, carbs: 10.1 },
              { name: "オーツミルク ラテ アイス（スタバ）", calories: 126, protein: 2.4, fat: 6.9, carbs: 14.1 },
            ]}
            caption="※スタバは標準サイズ、ドトールはS/M表記のとおり。栄養成分は各社公式サイトの情報をもとに記載。"
          />

          <TipBox title="「豆乳・アーモンドミルク＝低カロリー」は半分本当">
            <p>ドトールの<Marker>豆乳ラテS（64kcal）はカフェ・ラテS（76kcal）より12kcal低い</Marker>のは事実。一方スタバのアーモンドミルク ラテ（アイス・90kcal）は脂質7.4gとミルク系の中では脂質が高めです。<Marker color="blue">植物性ミルク＝必ず低カロリーではない</Marker>ので、置き換えの効果は数字で確認するのが確実です。</p>
          </TipBox>
        </section>

        {/* Section 6: 目的別おすすめ */}
        <section className="mb-16">
          <SectionHeading id="purpose">目的別おすすめの選び方</SectionHeading>

          <p className="mb-6">
            「何を優先したいか」で正解は変わります。代表的な4つの目的別に、2社のおすすめをまとめました。
          </p>

          <SubSectionHeading>① とにかくカロリーを抑えたい</SubSectionHeading>
          <p className="mb-4">
            迷わずブラック。<Marker>ドトールのブレンドコーヒーS（5kcal）、スタバのカフェ アメリカーノ（11kcal）</Marker>が二大候補です。アイスでもカロリーはほぼ変わりません。
          </p>

          <SubSectionHeading>② 糖質を抑えたい（ロカボ）</SubSectionHeading>
          <p className="mb-4">
            ブラック各種に加え、ミルク系なら<Marker color="blue">ドトールのカフェ・ラテS（糖質6.2g）やスタバのカプチーノ（糖質10.1g）</Marker>。砂糖・シロップ入りの甘いドリンクは糖質が一気に跳ね上がるので避け、フードもサンド系（糖質15〜30g）を、あんぱん・シナモンロール（糖質50g超）より優先します。
          </p>

          <SubSectionHeading>③ タンパク質を補いたい</SubSectionHeading>
          <p className="mb-4">
            ドリンクなら<Marker>スタバのカプチーノ（P6.9g）</Marker>、フードなら<Marker color="green">スタバのハム＆チーズ 石窯カンパーニュサンド（P17.4g）やポークカツサンド（P18.6g）</Marker>。ドトールならミックスサンド（P9.4g）に枝豆（111kcal・P9.1g）を足すとタンパク質を上乗せできます。
          </p>

          <SubSectionHeading>④ 甘いもので満足したい（でも抑えたい）</SubSectionHeading>
          <p className="mb-4">
            フラペチーノ®（357〜497kcal）は「ごほうび枠」に。日常で甘さがほしいなら<Marker>ドトールのカフェ・モカS（191kcal）</Marker>や、スタバなら<Marker color="blue">キャラメル マキアート アイス（181kcal）</Marker>が比較的軽め。スイーツは1品に絞り、ドリンクはブラックにするとトータルを抑えられます。
          </p>

          <ComparisonTable
            headers={["目的", "スタバのおすすめ", "ドトールのおすすめ"]}
            rows={[
              ["カロリー最小", "カフェ アメリカーノ 11kcal", "ブレンドコーヒー S 5kcal"],
              ["糖質オフ", "カプチーノ 糖質10.1g", "カフェ・ラテ S 糖質6.2g"],
              ["高タンパク", "ハム＆チーズサンド P17.4g", "ミックスサンド＋枝豆 P計18g台"],
              ["甘さ重視で軽め", "キャラメル マキアート アイス 181kcal", "カフェ・モカ S 191kcal"],
            ]}
          />
          <SourceNote asOf="2026年6月" />
        </section>

        {/* Section 7: カスタムでカロリーを削る */}
        <section className="mb-16">
          <SectionHeading id="custom">カスタム・選び方でカロリーを削る5つのコツ</SectionHeading>

          <NumberedList
            items={[
              {
                title: "ベースをブラックに寄せる",
                body: "ミルク・砂糖を足す前のブラックは各社10kcal前後。甘いラテ（120〜134kcal）を1杯ブラックに変えるだけで約100kcalカットできます。コーヒーそのものの香りで満足感を補うのがコツです。",
              },
              {
                title: "サイズを1つ下げる",
                body: "ドトールのカフェ・ラテはS76kcal→M97kcal→L125kcal。Lを1つ下げてMにするだけで約28kcal、Sなら約49kcalの削減に。スタバも同様で、サイズダウンは最も手軽なカロリーオフです。",
              },
              {
                title: "ミルクを低脂肪・無脂肪・植物性に変える",
                body: "ドトールでは豆乳ラテS（64kcal）がカフェ・ラテS（76kcal）より12kcal低め。スタバでもミルク変更でカロリーを調整できます。ただしアーモンドミルクは脂質がやや高い場合もあるので、置き換えの効果は数字で確認しましょう。",
              },
              {
                title: "シロップ・ホイップを減らす／なしにする",
                body: "甘いドリンクのカロリー源の多くはシロップとホイップです。フラペチーノ®がスイーツ並み（357〜497kcal）になるのもこのため。甘さ控えめ・ホイップなしの注文で、無理なく数十kcalを削れます。",
              },
              {
                title: "フードは「サンド優先・スイーツは1品」",
                body: "タンパク質が摂れるサンド系を主役にし、スイーツは1品まで。スタバのハム＆チーズサンド（255kcal/P17.4g）＋ブラックなら、糖質を抑えつつ満足感のある軽食になります。",
              },
            ]}
          />

          <TipBox title="同じ「カフェ時間」でも差はこれだけ出る">
            <p>たとえば<Marker>ダブル チョコレート フラペチーノ®（497kcal）＋ブルーベリーレアチーズケーキ（340kcal）で837kcal</Marker>。一方<Marker color="green">ブレンドコーヒーS（5kcal）＋ハム＆チーズサンド（255kcal）なら260kcal</Marker>。同じカフェ1回でも約577kcalの差がつきます。組み合わせを意識するだけで、カフェ習慣はダイエットの味方にできます。</p>
          </TipBox>
        </section>

        {/* チェーン別ランキングへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>2社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。スタバの低カロリーカスタム術は
            <Link href="/guide/starbucks-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">スタバダイエットガイド</Link>
            、ドトールの選び方は
            <Link href="/guide/doutor-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ドトールのダイエット・カロリーガイド</Link>
            で深掘りしています。朝に使うなら
            <Link href="/guide/morning-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">朝食ダイエットガイド</Link>
            、糖質を絞りたいなら
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">糖質制限×外食ガイド</Link>
            も合わせてどうぞ。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/starbucks" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">☕ スターバックス</Link>
            <Link href="/chains/doutor" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">☕ ドトール</Link>
          </div>
        </section>

        {/* ServiceOffers (FAQ直前) */}
        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            カフェのカロリーは「チェーン選び」より「メニュー選び」で大きく決まります。スタバ・ドトール比較のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "ブラックはどちらも実質ゼロカロリー（ドトール ブレンドS 5kcal、スタバ アメリカーノ 11kcal）でほぼ互角",
              "ミルク系の最軽量はドトールのカフェ・ラテS（76kcal/糖質6.2g）",
              "最も太りやすいのはフラペチーノ®。ダブル チョコレート フラペチーノ®は497kcal・糖質72.1g",
              "甘いドリンクで軽めならドトールのカフェ・モカS（191kcal）が選びやすい",
              "高タンパクならスタバのハム＆チーズ 石窯カンパーニュサンド（255kcal/P17.4g）が優秀",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗・サイズにより異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="cafe-comparison"
          items={[
            {
              q: "スターバックスとドトール、ダイエット中はどちらが向いていますか？",
              a: "どちらでも管理は可能ですが、性格が異なります。ドトールはカフェ・ラテSが76kcal/糖質6.2gと軽く、甘いドリンクもカフェ・モカS（191kcal）で抑えやすいのが強み。スタバはカフェ アメリカーノ（11kcal）など低カロリーのブラックや、ハム＆チーズサンド（255kcal/タンパク質17.4g）など高タンパクなフードが充実しています。甘いものを足すならカロリー差が大きいので、数字で選ぶのが確実です。",
            },
            {
              q: "カフェで一番カロリーが低いドリンクは何ですか？",
              a: "ブラックコーヒーです。ドトールのブレンドコーヒーS（5kcal）、スタバのカフェ アメリカーノ（11kcal）が代表で、いずれも実質ゼロカロリー。アイスにしても各社10kcal前後で変わりません（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "フラペチーノはどのくらいカロリーが高いですか？",
              a: "スターバックスのダブル チョコレート フラペチーノ®は497kcal・糖質72.1g、ストロベリー フラペチーノ®は357kcal・糖質56.3gです。ドトールのカフェ・モカS（191kcal）の約2〜2.6倍にあたり、ケーキ1個に匹敵します。甘さ控えめ・ホイップなしの注文や、ごほうび枠と割り切るのがおすすめです。",
            },
            {
              q: "カフェのカロリーを減らすカスタムのコツは？",
              a: "①ベースをブラックに寄せる（甘いラテをブラックに変えると約100kcalカット）、②サイズを1つ下げる（ドトールのカフェ・ラテはS→Mで約21kcal差）、③ミルクを豆乳・低脂肪に変える、④シロップ・ホイップを減らす、の4つが効果的です。",
            },
            {
              q: "豆乳ラテやアーモンドミルクに変えるとカロリーは下がりますか？",
              a: "下がる場合が多いですが幅は小さめです。ドトールの豆乳ラテS（64kcal）はカフェ・ラテS（76kcal）より12kcal低い程度。スタバのアーモンドミルク ラテ（アイス・90kcal）は脂質7.4gとやや高めなので、「植物性ミルク＝必ず低カロリー」ではありません。置き換え効果は数字で確認しましょう。",
            },
            {
              q: "カフェで高タンパクに済ませたいときのおすすめは？",
              a: "スターバックスのハム＆チーズ 石窯カンパーニュサンド（255kcal/タンパク質17.4g）が糖質も15.9gと低く最有力です。しっかり食べるならポークカツ 石窯カンパーニュサンド（414kcal/タンパク質18.6g）。ドトールならミックスサンド（タンパク質9.4g）に枝豆（111kcal/タンパク質9.1g）を足すとタンパク質を上乗せできます。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="スタバ・ドトールをまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-24", note: "初稿公開（スターバックス・ドトールの公式栄養データに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="cafe-comparison" />

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
