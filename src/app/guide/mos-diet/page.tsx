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
  ComparisonTable,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "モスバーガーのダイエット・カロリーガイド｜太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/mos-diet" },
  description:
    "モスバーガーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。菜摘（なつみ）など低糖質メニュー、バーガーのカロリー比較、高タンパクな選び方、避けたい高カロリーメニューを紹介します。",
  keywords: [
    "モスバーガー カロリー",
    "モスバーガー ダイエット",
    "モスバーガー 栄養",
    "モスバーガー 菜摘 カロリー",
    "モスバーガー 低糖質",
    "モスバーガー 高タンパク",
  ],
  openGraph: {
    title: "モスバーガーのダイエット・カロリーガイド｜太りにくいメニューの選び方",
    description:
      "モスバーガーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。菜摘など低糖質メニュー、バーガーのカロリー比較、サイドの選び方を紹介します。",
    url: "https://www.tabenavi.jp/guide/mos-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "モスバーガーのダイエット・カロリーガイド｜太りにくいメニューの選び方",
  description:
    "モスバーガーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。菜摘など低糖質メニュー、バーガーのカロリー比較、サイドの選び方を紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/mos-diet",
};

const tocItems = [
  { id: "natsumi", label: "菜摘シリーズ（低糖質の主役）" },
  { id: "low-calorie", label: "低カロリーメニューランキング" },
  { id: "high-protein", label: "高タンパクなメニュー" },
  { id: "burger-comparison", label: "定番バーガーのカロリー比較" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function MosDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="モスバーガーでダイエット"
        subtitle="菜摘・低カロリー・高タンパクで選ぶ太りにくいメニュー【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
        breadcrumb="モスバーガーダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="mos-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question={"モスバーガーでダイエット向きのメニューは何ですか？"}
          answer={
            "モスバーガーは、バンズの代わりにレタスで包む「菜摘（なつみ）」シリーズがダイエットの主役です。最も軽いモスの菜摘 テリヤキチキンは186kcal・タンパク質15.1g・炭水化物わずか7.7gと、低カロリー・低糖質・高タンパクの三拍子がそろいます。普通のバンズで食べたい場合は、定番のハンバーガー（314kcal）が最も軽く、モスバーガー（372kcal）より約58kcal抑えられます。サイドはこだわりサラダ（19kcal）が圧倒的に低カロリーです。"
          }
        />

        <p className="mb-4">
          モスバーガーは、注文を受けてから作る「アフターオーダー方式」と野菜の多さが特徴のバーガーチェーンです。実はダイエット視点で見ると、
          <Marker>バンズをレタスに置き換えた「菜摘（なつみ）」シリーズ</Marker>
          という、他チェーンにはない強力な低糖質メニューがそろっています。
        </p>
        <p className="mb-4">
          カロリーと糖質を抑えたいなら、最軽量の
          <Marker color="blue">モスの菜摘 テリヤキチキン（186kcal・炭水化物7.7g）</Marker>
          がおすすめ。一方で、トリプルモスチーズバーガーは733kcal、ぜいたくモスチーズバーガーは697kcalとハイカロリーで、サイドのオニオンフライデーパックに至っては1,096kcalにもなります。
          <Marker>同じモスでもメニュー選び次第で500kcal以上の差</Marker>
          がつくため、正しい知識が大切です。
        </p>
        <p className="mb-8">
          この記事では、モスバーガーのメニューをたべなびの栄養データベースの実値にもとづいて整理し、菜摘シリーズの使い方、低カロリーランキング、高タンパクな選び方、避けたいメニューまで詳しく解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="mos-diet-burger" genre="burger" priority />

        {/* Section 1: 菜摘シリーズ */}
        <section className="mb-16">
          <SectionHeading id="natsumi">菜摘（なつみ）シリーズ：低糖質ダイエットの主役</SectionHeading>

          <p className="mb-4">
            モスバーガーのダイエットを語るうえで欠かせないのが
            <Marker>「モスの菜摘（なつみ）」シリーズ</Marker>
            です。バンズの代わりに新鮮なレタスでパティや具材を包んだメニューで、
            <Marker color="blue">炭水化物（糖質）を大きくカットできる</Marker>
            のが最大の特徴。糖質制限ダイエット中の方に特に向いています。
          </p>

          <NutritionTable
            items={[
              { name: "モスの菜摘 テリヤキチキン", calories: 186, protein: 15.1, fat: 10.7, carbs: 7.7, highlight: true },
              { name: "モスの菜摘ソイモス野菜", calories: 202, protein: 6.8, fat: 13.8, carbs: 13.7 },
              { name: "モスの菜摘 モス野菜", calories: 223, protein: 9.1, fat: 16.5, carbs: 10.4, highlight: true },
              { name: "モスの菜摘フィッシュ", calories: 238, protein: 11.1, fat: 16.5, carbs: 11.5 },
              { name: "モスの菜摘チキン", calories: 243, protein: 9.9, fat: 16.3, carbs: 14.6 },
              { name: "モスの菜摘海老カツ", calories: 254, protein: 9.4, fat: 17.0, carbs: 16.7 },
              { name: "モスの菜摘ロースカツ", calories: 265, protein: 11.3, fat: 14.0, carbs: 23.6 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はモスバーガー公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <p className="mb-4">
            注目すべきは
            <Marker color="green">モスの菜摘 テリヤキチキンで、186kcal・タンパク質15.1g・炭水化物7.7g</Marker>
            という優秀なバランス。同じ具材のテリヤキチキンバーガー（303kcal・炭水化物32.4g）とくらべると、約117kcal・糖質は約25gも抑えられます。バンズをレタスに替えるだけでこれだけの差が出るのは、菜摘シリーズならではのメリットです。
          </p>

          <TipBox title="菜摘ならではのポイント">
            <p>
              菜摘シリーズは
              <Marker>炭水化物がおおむね7〜24g</Marker>
              に収まり、通常バンズのバーガー（炭水化物35〜50g前後）と比べて糖質をしっかり抑えられます。タンパク質も摂れるテリヤキチキンやモス野菜を選べば、糖質制限とタンパク質補給を両立しやすくなります。レタス包みなので食べごたえもあり、満足感を得やすいのも嬉しいポイントです。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">モスバーガーの低カロリーメニューランキング</SectionHeading>

          <p className="mb-4">
            菜摘シリーズ以外も含めた、モスバーガーの主要メニューをカロリーの低い順に整理しました。
            <Marker color="blue">菜摘・サラダ・定番ハンバーガー</Marker>
            が低カロリーゾーンの中心になります。
          </p>

          <NutritionTable
            items={[
              { name: "こだわりサラダ", calories: 19, protein: 1.0, fat: 0.0, carbs: 4.3, highlight: true },
              { name: "フレンチフライポテト S", calories: 170, protein: 2.2, fat: 7.0, carbs: 24.8 },
              { name: "モスの菜摘 テリヤキチキン", calories: 186, protein: 15.1, fat: 10.7, carbs: 7.7, highlight: true },
              { name: "オニポテ", calories: 189, protein: 2.6, fat: 8.7, carbs: 25.3 },
              { name: "チキンナゲット 5コ入り", calories: 195, protein: 14.8, fat: 10.2, carbs: 10.9 },
              { name: "香る醤油のローストチキン（鹿児島県産）", calories: 208, protein: 20.3, fat: 12.9, carbs: 2.6, highlight: true },
              { name: "モスの菜摘 モス野菜", calories: 223, protein: 9.1, fat: 16.5, carbs: 10.4 },
              { name: "モスチキン", calories: 269, protein: 15.3, fat: 16.6, carbs: 14.7 },
              { name: "テリヤキチキンバーガー", calories: 303, protein: 20.1, fat: 10.3, carbs: 32.4 },
              { name: "ハンバーガー", calories: 314, protein: 13.7, fat: 13.2, carbs: 35.2, highlight: true },
              { name: "モスバーガー", calories: 372, protein: 15.2, fat: 17.0, carbs: 40.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はモスバーガー公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <p className="mb-4">
            サイドでは
            <Marker>こだわりサラダ（19kcal）</Marker>
            が圧倒的に軽く、ポテト系の代わりに付ければカロリーを大きく節約できます。バーガーの中では、定番のハンバーガー（314kcal）が最も軽く、看板メニューのモスバーガー（372kcal）より約58kcal低めです。
          </p>

          <TipBox title="サイドの置き換えでカロリーカット">
            <p>
              フレンチフライポテト S（170kcal）やオニポテ（189kcal）の代わりに
              <Marker>こだわりサラダ（19kcal）</Marker>
              を選ぶだけで、150kcal以上のカット。さらにサラダは食物繊維やビタミンも摂れるため、栄養バランスの面でも有利です。最初にサラダを食べることで、食べ過ぎ防止にもつながります。
            </p>
          </TipBox>
        </section>

        {/* Section 3: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクで満足度の高いメニュー</SectionHeading>

          <p className="mb-6">
            ダイエット中はカロリーだけでなく
            <Marker>タンパク質をしっかり摂ること</Marker>
            も大切です。筋肉量を維持しながら減量するために、モスバーガーで高タンパクなメニューをカロリー効率の良い順に紹介します。
          </p>

          <RankingCard
            rank={1}
            title="香る醤油のローストチキン（鹿児島県産）"
            subtitle="208kcal / P20.3g / F12.9g / C2.6g"
            calories={208}
            protein={20.3}
            fat={12.9}
            carbs={2.6}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="green">208kcalでタンパク質20.3g、炭水化物わずか2.6g</Marker>
              という、モスの中でもトップクラスの高タンパク・低糖質メニュー。揚げ物のモスチキンと違い、ローストなので脂質と糖質を抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              菜摘シリーズに追加したり、サラダと合わせたりして
              <Marker color="blue">「主菜」として活用する</Marker>
              のがおすすめ。糖質制限中のタンパク源として優秀です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="モスの菜摘 テリヤキチキン"
            subtitle="186kcal / P15.1g / F10.7g / C7.7g"
            calories={186}
            protein={15.1}
            fat={10.7}
            carbs={7.7}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker>レタス包みで186kcal・タンパク質15.1g・糖質7.7g</Marker>
              。低カロリー・低糖質・高タンパクをすべて満たす、ダイエット中の主役メニューです。これ1つでバーガー感を味わいつつ、糖質を大きく抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              物足りなければ香る醤油のローストチキン（208kcal）を追加しても合計約394kcal・タンパク質約35g。満足度の高い高タンパク食になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="テリヤキチキンバーガー"
            subtitle="303kcal / P20.1g / F10.3g / C32.4g"
            calories={303}
            protein={20.1}
            fat={10.3}
            carbs={32.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              通常バンズで食べたい人向けの高タンパク選択。
              <Marker color="green">タンパク質20.1gに対して脂質は10.3gと控えめ</Marker>
              で、同じカロリー帯のチーズバーガー（367kcal/P16.7g/F17.6g）より脂質が約7g少なくタンパク質も多めです。バンズありでしっかり食べたい日に向いた、バランスの良いバーガーです。
            </p>
          </RankingCard>

          <MenuPhoto id="mos-diet-chicken" genre="burger" />
        </section>

        {/* Section 4: 定番バーガー比較 */}
        <section className="mb-16">
          <SectionHeading id="burger-comparison">定番バーガーのカロリー比較</SectionHeading>

          <p className="mb-6">
            モスの定番バーガーを比べると、
            <Marker>シンプルなものほどカロリーが低く、チーズやダブルになるほど高くなる</Marker>
            傾向があります。代表的なバーガーを並べてみましょう。
          </p>

          <ComparisonTable
            headers={["バーガー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["ハンバーガー", "314 kcal", "P 13.7g", "F 13.2g", "C 35.2g"],
              ["モスバーガー", "372 kcal", "P 15.2g", "F 17.0g", "C 40.0g"],
              ["スパイシーモスバーガー", "375 kcal", "P 15.3g", "F 17.1g", "C 40.4g"],
              ["テリヤキバーガー", "385 kcal", "P 14.3g", "F 18.2g", "C 41.2g"],
              ["モスチーズバーガー", "425 kcal", "P 18.2g", "F 21.4g", "C 40.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            最も軽いのは定番の
            <Marker color="blue">ハンバーガー（314kcal）</Marker>
            。看板のモスバーガー（372kcal）より約58kcal低く、チーズが加わるモスチーズバーガー（425kcal）とは約111kcalの差があります。同じ「モス」でもチーズの有無で100kcal以上変わるため、カロリーを抑えたい日はチーズなしを選ぶのが基本です。
          </p>

          <SubSectionHeading>ダブル・ぜいたく系は一気にハイカロリー</SubSectionHeading>

          <p className="mb-4">
            パティを増やしたダブル系・ぜいたく系は、タンパク質は増えますが
            <Marker>カロリーと脂質が大幅に上乗せ</Marker>
            されます。たとえばダブルモスチーズバーガーは585kcal（P26.7g/F32.8g）、ぜいたくモスチーズバーガーは697kcal（P30.9g/F40.6g）。タンパク質目的でも脂質が30g超になるため、ダイエット中は頻度を抑えたいゾーンです。
          </p>

          <TipBox title="バーガー選びのコツ">
            <p>
              カロリーを抑えたいなら
              <Marker>「チーズなし・パティ1枚」を基本</Marker>
              に。どうしてもボリュームが欲しい日は、ダブル系ではなく
              <Marker color="blue">菜摘 テリヤキチキン（186kcal）＋香る醤油のローストチキン（208kcal）</Marker>
              のように、糖質を抑えつつタンパク質で満足感を高める組み合わせがおすすめです。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="モスバーガーのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 5: 避けたいメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            モスバーガーにも
            <Marker>700kcalを超えるバーガーや1,000kcalを超えるサイド</Marker>
            が存在します。知らずに注文すると、1食でカロリーオーバーになりかねません。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">トリプルモスチーズバーガー（733kcal）</span> ─ パティ3枚＋チーズで脂質43.7g。タンパク質は多いが脂質が突出します。</li>
              <li><span className="font-bold">ダブルとびきりチーズ 〜北海道チーズ〜（706kcal）</span> ─ チーズ増量でカロリー・脂質ともに高め。</li>
              <li><span className="font-bold">ぜいたくモスチーズバーガー（697kcal）</span> ─ 具だくさんでボリュームがある分、脂質40.6gと高水準。</li>
              <li><span className="font-bold">ダブルモスチーズバーガー（585kcal）</span> ─ パティ＆チーズが各2枚分。脂質32.8gで単品でも重め。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイド・シェア系パックの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">オニオンフライデーパック（1,096kcal）</span> ─ シェア用の大容量サイド。1人で食べると一気にカロリーオーバーです。</li>
              <li><span className="font-bold">モスチキンパック（1,345kcal）</span> ─ 高タンパク（P76.5g）ですが脂質83gと総カロリーが極端に高い大容量商品です。</li>
              <li><span className="font-bold">フレンチフライポテトＬ（409kcal）</span> ─ ポテトのLサイズは単品でバーガー1個分。Sサイズ（170kcal）かサラダ（19kcal）に。</li>
              <li><span className="font-bold">ホットドッグ（358kcal）・チリドッグ（373kcal）</span> ─ ソーセージ系は脂質が23〜24gと高め。サイド感覚で追加すると脂質オーバーに。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらは「絶対に食べてはいけない」ものではありませんが、
            <Marker color="blue">頻度を抑える・シェアする</Marker>
            のが基本です。特にシェア用パックは1人前として食べない工夫が大切です。
          </p>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">モスで太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            モスバーガーならではの
            <Marker>菜摘シリーズ・サラダ・選べるサイド</Marker>
            を活用した、太りにくい食べ方を紹介します。目的別のおすすめ組み合わせも整理しました。
          </p>

          <CheckList
            items={[
              "糖質を抑えたい日は菜摘シリーズを選ぶ（バンズをレタスに置き換えて糖質を大幅カット）",
              "サイドはポテト系よりこだわりサラダ（19kcal）を優先する",
              "チーズなし・パティ1枚の定番バーガーを基本サイズにする",
              "タンパク質は香る醤油のローストチキン（208kcal/P20.3g）で補う",
              "ダブル系・ぜいたく系・大容量パックは頻度を抑える",
            ]}
          />

          <SubSectionHeading>目的別おすすめの組み合わせ</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（糖質制限・高タンパク・カロリー制限）によって、
            <Marker>モスで選ぶべき組み合わせは変わります</Marker>
            。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめの組み合わせ", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "菜摘 テリヤキチキン + こだわりサラダ", "約205 kcal", "約 P16.1g"],
              ["高タンパク", "菜摘 テリヤキチキン + 香る醤油のローストチキン", "約394 kcal", "約 P35.4g"],
              ["カロリー制限", "ハンバーガー + こだわりサラダ", "約333 kcal", "約 P14.7g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの
            <Marker color="blue">「菜摘 テリヤキチキン＋こだわりサラダ」なら合計約205kcal・タンパク質約16g・糖質約12g</Marker>
            。糖質制限中でもバーガー感を楽しめる、モスならではの組み合わせです。
          </p>

          <MenuPhoto id="mos-diet-salad" genre="burger" />

          <SubSectionHeading>モスならではのダイエット上の強み</SubSectionHeading>

          <p className="mb-4">
            数あるバーガーチェーンの中で、モスバーガーのダイエット上の強みは以下の3点です。
          </p>

          <CheckList
            items={[
              "菜摘（レタス包み）シリーズ ─ バンズなしで糖質を大幅カットできる独自メニュー",
              "野菜が多い ─ トマト・レタスなど生野菜をしっかり使用",
              "高タンパクな単品が選べる ─ 香る醤油のローストチキンなどでタンパク質を補える",
            ]}
          />

          <TipBox title="モスを週間プランに組み込む">
            <p>
              モスを週3回利用する場合のおすすめローテーション：月曜＝菜摘 テリヤキチキン＋サラダ（約205kcal）、水曜＝ハンバーガー＋サラダ（約333kcal）、金曜＝菜摘 モス野菜＋香る醤油のローストチキン（約431kcal・高タンパク）。
              <Marker>同じチェーンでも注文を変えることで飽きを防ぎ、栄養バランスも整います</Marker>
              。
            </p>
          </TipBox>
        </section>

        <ServiceOffers tag="diet" />

        {/* 内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>モスバーガーのメニューをもっと詳しく見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            たべなびでは、モスバーガーの全メニューを目的別に絞り込めます。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chains/mos" className="text-sky-600 hover:underline font-medium">
                モスバーガーのメニュー一覧（カロリー・PFC）
              </Link>
            </li>
            <li>
              <Link href="/chains/mos/high-protein" className="text-sky-600 hover:underline font-medium">
                モスバーガーの高タンパクメニュー
              </Link>
            </li>
            <li>
              <Link href="/chains/mos/diet" className="text-sky-600 hover:underline font-medium">
                モスバーガーのダイエット向けメニュー
              </Link>
            </li>
            <li>
              <Link href="/chains/mos/low-calorie" className="text-sky-600 hover:underline font-medium">
                モスバーガーの低カロリーメニュー
              </Link>
            </li>
          </ul>
          <p className="mt-6 mb-4 text-sm text-gray-700 leading-relaxed">
            ほかのチェーンや食べ方とくらべたい方は、こちらの記事もどうぞ。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/hamburger-comparison" className="text-sky-600 hover:underline font-medium">
                ハンバーガーチェーンのカロリー比較
              </Link>
            </li>
            <li>
              <Link href="/guide/mcdonalds-diet" className="text-sky-600 hover:underline font-medium">
                マクドナルドのダイエット・カロリーガイド
              </Link>
            </li>
            <li>
              <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline font-medium">
                外食ダイエットの基本ガイド
              </Link>
            </li>
            <li>
              <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">
                外食で低糖質に食べるコツ
              </Link>
            </li>
          </ul>
        </section>

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "菜摘（なつみ）シリーズはバンズをレタスに置き換えた独自メニュー。最軽量はモスの菜摘 テリヤキチキン（186kcal・糖質7.7g）",
              "サイドはこだわりサラダ（19kcal）が圧倒的に低カロリー。ポテト系の置き換えで150kcal以上カット",
              "高タンパクなら香る醤油のローストチキン（208kcal/P20.3g/糖質2.6g）が優秀",
              "定番バーガーで最も軽いのはハンバーガー（314kcal）。モスバーガー（372kcal）より約58kcal低い",
              "トリプルモスチーズバーガー（733kcal）やシェア用パック（1,000kcal超）は頻度を抑える",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="mos-diet"
          items={[
            {
              q: "モスバーガーでカロリーが最も低いメニューは何ですか？",
              a: "サイドのこだわりサラダが19kcalと最も低く、バーガー類ではモスの菜摘 テリヤキチキンが186kcalで最軽量です。通常バンズのバーガーでは定番のハンバーガーが314kcalで最も低くなります。",
            },
            {
              q: "モスの菜摘（なつみ）シリーズはダイエットに向いていますか？",
              a: "向いています。菜摘はバンズの代わりにレタスで包むため炭水化物を大きくカットでき、最軽量のモスの菜摘 テリヤキチキンは186kcal・タンパク質15.1g・炭水化物わずか7.7gです。糖質制限ダイエット中の方に特におすすめです。",
            },
            {
              q: "モスバーガーで高タンパクなメニューはどれですか？",
              a: "香る醤油のローストチキン（鹿児島県産）が208kcalでタンパク質20.3g・炭水化物2.6gと優秀です。バンズありではテリヤキチキンバーガー（303kcal/P20.1g/F10.3g）が、脂質を抑えつつタンパク質を摂れる選択です。",
            },
            {
              q: "ダイエット中に避けるべきモスのメニューは何ですか？",
              a: "トリプルモスチーズバーガー（733kcal）、ダブルとびきりチーズ（706kcal）、ぜいたくモスチーズバーガー（697kcal）など、ダブル・ぜいたく系は高カロリー・高脂質です。またオニオンフライデーパック（1,096kcal）やモスチキンパック（1,345kcal）など大容量パックは1人前として食べないようにしましょう。",
            },
            {
              q: "モスバーガーとモスチーズバーガーはどれくらいカロリーが違いますか？",
              a: "モスバーガーは372kcal、モスチーズバーガーは425kcalで、チーズの有無で約53kcalの差があります。カロリーを抑えたい日はチーズなしを選ぶのが基本です。",
            },
            {
              q: "モスでサイドを選ぶなら何がおすすめですか？",
              a: "こだわりサラダ（19kcal）が圧倒的に低カロリーでおすすめです。フレンチフライポテト S（170kcal）やオニポテ（189kcal）の代わりにサラダを選ぶだけで150kcal以上カットでき、食物繊維も摂れます。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="mos-diet" />

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
