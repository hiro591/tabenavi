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
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "ハンバーガーのカロリー比較｜マック・モス・バーキン・ケンタ・ゼッテリア5社の太らない選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/hamburger-comparison" },
  description:
    "ハンバーガーチェーン5社（マクドナルド・モスバーガー・バーガーキング・ケンタッキー・ゼッテリア）のカロリー・PFCを公式データで徹底比較。同じ「ハンバーガー」でも最大62kcal差。ダイエット向き・高タンパクの選び方がわかります。",
  keywords: [
    "ハンバーガー カロリー 比較",
    "マック モス カロリー",
    "バーガーキング カロリー",
    "ハンバーガー ダイエット",
    "ワッパー カロリー",
    "ハンバーガー 太らない",
  ],
  openGraph: {
    title: "ハンバーガーのカロリー比較｜5社の太らない選び方",
    description:
      "マック・モス・バーキン・ケンタ・ゼッテリアの5社を公式栄養データで徹底比較。同じ「ハンバーガー」でも最大62kcal差。",
    url: "https://www.tabenavi.jp/guide/hamburger-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ハンバーガーのカロリー比較｜マック・モス・バーキン・ケンタ・ゼッテリア5社の太らない選び方",
  description:
    "ハンバーガーチェーン5社のカロリー・PFCを公式データで徹底比較。ダイエット向き・高タンパクの選び方を解説。",
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/hamburger-comparison",
};

const tocItems = [
  { id: "plain-comparison", label: "同じ「ハンバーガー」4社対決" },
  { id: "flagship", label: "看板バーガー対決" },
  { id: "diet-ranking", label: "ダイエット向きランキング" },
  { id: "high-protein", label: "高タンパクで選ぶ（筋トレ向き）" },
  { id: "avoid", label: "避けるべき高カロリーバーガー" },
  { id: "tips", label: "太らない食べ方 5つのコツ" },
  { id: "summary", label: "まとめ" },
];

export default function HamburgerComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ハンバーガーチェーン5社カロリー比較"
        subtitle="マック・モス・バーキン・ケンタ・ゼッテリアの太らない選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop"
        breadcrumb="ハンバーガー比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="hamburger-comparison">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: 2026年6月11日
        </p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="ハンバーガーチェーンで一番カロリーが低いのは？ダイエット中はどこで何を選べばいい？"
          answer={
            <>
              <strong>最も低カロリーなのはバーガーキングのハンバーガー（252kcal）</strong>、次いでマクドナルド（259kcal）。同じ名前の「ハンバーガー」がある4社では252〜314kcalと<strong>最大62kcalの差</strong>（ケンタッキーはプレーンなハンバーガー自体がありません）。高タンパク低脂質で選ぶなら<strong>モスのテリヤキチキンバーガー（303kcal/P20.1g/F10.3g）</strong>、筋トレ向きなら<strong>ケンタッキーのチキンフィレ系（タンパク質24g超）</strong>が優秀。看板バーガーはモスバーガー372kcal〜ワッパー672kcalと約1.8倍の開きがあるため、選び方次第でどのチェーンでもカロリーコントロールは可能です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどハンバーガーが食べたい」——そんなとき、どのチェーンを選ぶかで結果は大きく変わります。実は、<Marker>同じ「ハンバーガー」という商品名でも、チェーンによってカロリーは最大62kcalも違います</Marker>。
        </p>
        <p className="mb-4">
          この記事では、マクドナルド・モスバーガー・バーガーキング・ケンタッキー・ゼッテリア（旧ロッテリア系）の<Marker color="blue">主要5チェーンの公式栄養データ</Marker>を横断比較。プレーンなハンバーガー同士、看板バーガー同士をそれぞれ比べ、ダイエット向き・筋トレ向きの「正解」を数字で示します。
        </p>
        <p className="mb-8">
          バーガーキングとゼッテリアまで含めた5社横断の比較は意外と少ないので、「マックとモスどっちにする？」で迷ったときの判断材料にしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop" alt="ジューシーなハンバーガーのクローズアップ写真" />

        {/* Section 1: 同名ハンバーガー対決 */}
        <section className="mb-16">
          <SectionHeading id="plain-comparison">同じ「ハンバーガー」4社対決</SectionHeading>

          <p className="mb-4">
            まずは条件をそろえて、各社の<Marker>プレーンな「ハンバーガー」</Marker>を比較します。バンズ＋パティ＋ソースという最小構成同士の勝負です。
          </p>

          <ComparisonTable
            headers={["チェーン", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["バーガーキング", "252 kcal", "13.7g", "10.1g", "27.0g"],
              ["マクドナルド", "259 kcal", "13.0g", "9.5g", "30.3g"],
              ["ゼッテリア", "313 kcal", "10.6g", "16.2g", "31.2g"],
              ["モスバーガー", "314 kcal", "13.7g", "13.2g", "35.2g"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※ケンタッキーにはプレーンな「ハンバーガー」がないため除外（最軽量は辛口チキンフィレバーガー384kcal）。栄養成分は各社公式サイトの情報をもとに記載。
          </p>

          <TipBox title="プレーン対決のポイント">
            <p>最軽量は<Marker>バーガーキング（252kcal）</Marker>で、マクドナルド（259kcal）と僅差の2強。一方ゼッテリア・モスは313〜314kcalと約60kcal高めです。<Marker color="blue">脂質が最も低いのはマクドナルド（9.5g）</Marker>なので、ローファット中はマックのハンバーガーが堅実な選択です。</p>
          </TipBox>
        </section>

        {/* Section 2: 看板バーガー対決 */}
        <section className="mb-16">
          <SectionHeading id="flagship">看板バーガー対決（モスバーガー vs ビッグマック vs ワッパー）</SectionHeading>

          <p className="mb-4">
            次は各社の「顔」となる看板バーガー同士の比較です。ここでは<Marker>最大で約1.8倍の開き</Marker>がつきます。
          </p>

          <ComparisonTable
            headers={["看板メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["モスバーガー（モス）", "372 kcal", "15.2g", "17.0g", "40.0g"],
              ["チキンフィレバーガー（ケンタ）", "398 kcal", "24.3g", "19.7g", "31.1g"],
              ["ビッグマック（マック）", "525 kcal", "26.1g", "28.0g", "42.1g"],
              ["絶品ビーフバーガー（ゼッテリア）", "550 kcal", "18.2g", "35.6g", "36.9g"],
              ["ワッパー（バーキン）", "672 kcal", "28.2g", "39.9g", "50.8g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            最軽量はモスバーガー（372kcal）、最重量はワッパー（672kcal）で<Marker>差は300kcal</Marker>。ただしワッパーはタンパク質28.2gと5つの中で最も多く、「悪者」ではありません。<Marker color="green">カロリーを抑えたい日はモス、しっかり食べたい日はワッパー</Marker>と、目的で使い分けるのが賢い選び方です。
          </p>

          <TipBox title="意外な優等生はチキンフィレバーガー">
            <p>ケンタッキーの<Marker color="blue">チキンフィレバーガーは398kcalでタンパク質24.3g</Marker>。看板バーガー5つの中でタンパク質効率（カロリーあたりのタンパク質）が最も高く、ダイエットと満足感を両立したい日の有力候補です。</p>
          </TipBox>
        </section>

        {/* Section 3: ダイエット向きランキング */}
        <section className="mb-16">
          <SectionHeading id="diet-ranking">ダイエット向きバーガーランキング（5社横断）</SectionHeading>

          <p className="mb-6">
            5社の全バーガーを横断し、カロリー・PFCバランスから「ダイエット中に選ぶ価値が高い」順に厳選しました。
          </p>

          <RankingCard rank={1} title="テリヤキチキンバーガー（モス）" subtitle="303kcal / P20.1g / F10.3g / C32.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              5社横断の<Marker>PFCバランス王者</Marker>。300kcal台前半でタンパク質20g超・脂質10.3gという数字はバーガーとして別格です。「バーガーを食べながら高タンパク低脂質」を実現したいなら、まずこれを覚えてください。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="ハンバーガー（マクドナルド）" subtitle="259kcal / P13.0g / F9.5g / C30.3g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">脂質9.5gは5社の全バーガー中でも最少クラス</Marker>。価格も190円と最安級で、「とにかくカロリーと脂質を抑えたい」日の定番です。物足りなければ2個食べても518kcalと、ビッグマック1個とほぼ同じに収まります。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ハンバーガー（バーガーキング）" subtitle="252kcal / P13.7g / F10.1g / C27.0g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">純粋なカロリー最少（252kcal）＆炭水化物も27gと最少</Marker>。直火焼きパティで満足感も高く、糖質をやや抑えたい日にも向きます。
            </p>
          </RankingCard>

          <SubSectionHeading>低カロリーバーガーTOP8（5社横断）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "ハンバーガー（バーキン）", calories: 252, protein: 13.7, fat: 10.1, carbs: 27.0, highlight: true },
              { name: "ハンバーガー（マック）", calories: 259, protein: 13.0, fat: 9.5, carbs: 30.3, highlight: true },
              { name: "チーズバーガー（バーキン）", calories: 291, protein: 15.9, fat: 13.3, carbs: 27.3 },
              { name: "ソイハンバーガー（モス）", calories: 293, protein: 11.4, fat: 10.5, carbs: 38.5 },
              { name: "テリヤキチキンバーガー（モス）", calories: 303, protein: 20.1, fat: 10.3, carbs: 32.4, highlight: true },
              { name: "チーズバーガー（マック）", calories: 310, protein: 15.9, fat: 13.5, carbs: 31.0 },
              { name: "エッグマックマフィン（マック）", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2 },
              { name: "ハンバーガー（ゼッテリア）", calories: 313, protein: 10.6, fat: 16.2, carbs: 31.2 },
            ]}
          />

          <TipBox title="「ソイ＝ヘルシー」は思い込みかも">
            <p>モスのソイハンバーガー（293kcal）と通常のハンバーガー（314kcal）の差は<Marker>わずか21kcal</Marker>。脂質も10.5g vs 13.2gで2.7g差です。大豆パティ＝大幅カロリーオフではないので、数字で選ぶならテリヤキチキンバーガーの方がダイエット向きです。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="5社のバーガーを栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの良い食事のイメージ" />

        {/* Section 4: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクで選ぶ（筋トレ向き）</SectionHeading>

          <p className="mb-4">
            トレーニング後にバーガーで済ませたい日は、<Marker>タンパク質量とその効率</Marker>で選びます。5社横断の高タンパクバーガーがこちら。
          </p>

          <NutritionTable
            items={[
              { name: "ダブルチキンフィレバーガー（ケンタ）", calories: 615, protein: 44.6, fat: 30.7, carbs: 40.0, highlight: true },
              { name: "ベーコンダブルチーズバーガー（バーキン）", calories: 494, protein: 31.1, fat: 28.7, carbs: 27.9 },
              { name: "倍エグチ（マック）", calories: 489, protein: 29.9, fat: 26.6, carbs: 31.2 },
              { name: "チーズダブルチーズバーガー（バーキン）", calories: 471, protein: 29.2, fat: 26.9, carbs: 28.1 },
              { name: "チーズチキンフィレバーガー（ケンタ）", calories: 468, protein: 26.8, fat: 25.8, carbs: 32.1 },
              { name: "ダブルチーズバーガー（バーキン）", calories: 425, protein: 26.7, fat: 23.2, carbs: 27.6, highlight: true },
              { name: "辛口チキンフィレバーガー（ケンタ）", calories: 384, protein: 24.4, fat: 17.8, carbs: 31.9, highlight: true },
              { name: "エグチ（マック）", calories: 390, protein: 22.4, fat: 19.0, carbs: 31.2 },
            ]}
          />

          <p className="mb-4">
            タンパク質の絶対量なら<Marker>ケンタッキーのダブルチキンフィレバーガー（44.6g）</Marker>が圧倒的。一方、400kcal以下に収めつつ高タンパクを狙うなら<Marker color="blue">辛口チキンフィレバーガー（384kcal/P24.4g）</Marker>が効率王です。コスパ重視ならマックのエグチ（200円でP22.4g）も覚えておいて損はありません。
          </p>
        </section>

        {/* Section 5: 避けるべき高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けるべき高カロリーバーガー</SectionHeading>

          <p className="mb-4">
            逆に、ダイエット中は<Marker>「ダブル」「トリプル」「倍」のつくメニュー</Marker>に注意。1個で1食分を大きく超えるものがあります。
          </p>

          <WarningBox title="ダイエット中は要注意のメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">トリプル絶品チーズバーガー（ゼッテリア・1,409kcal）</span> ─ 脂質105.4g。バーガー1個で成人の1日の脂質目標量（厚生労働省「日本人の食事摂取基準」: 総エネルギーの20〜30%）を超えうる数値です。</li>
              <li><span className="font-bold">ダブルマッシュルームワッパー（バーキン・1,033kcal）</span> ─ ワッパー系のダブルは軒並み1,000kcal級。</li>
              <li><span className="font-bold">ダブル絶品チーズバーガー（ゼッテリア・1,005kcal）</span> ─ チーズ＋ダブルパティの組み合わせは脂質73.2g。</li>
              <li><span className="font-bold">ダブルワッパーチーズ（バーキン・985kcal）</span> ─ 単品でほぼ1,000kcal。セットなら1,500kcal超えに。</li>
              <li><span className="font-bold">倍ビッグマック（マック・723kcal）</span> ─ 通常ビッグマック（525kcal）の+198kcal。</li>
            </ul>
          </WarningBox>

          <WarningBox title="本当の落とし穴は「セット」">
            <p>バーガー本体よりも怖いのがセットです。マクドナルドの場合、<Marker>ポテトM（409kcal）＋コーラM（145kcal）で+554kcal</Marker>。ハンバーガー単品259kcalがセットにした瞬間813kcalになります。ダイエット中は「単品＋サイドサラダ＋ゼロカロリードリンク」が鉄則です。</p>
          </WarningBox>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">太らない食べ方 5つのコツ</SectionHeading>

          <NumberedList
            items={[
              {
                title: "セットをやめて単品＋サイドサラダにする",
                body: "サイドサラダはマック10kcal、モス（こだわりサラダ）19kcal、バーキン（シーザーサラダ・ドレッシングなし）43kcal。ポテトMをサラダに変えるだけで約400kcalカットできます。",
              },
              {
                title: "ドリンクはゼロカロリー系を選ぶ",
                body: "コーラMは145kcal。黒烏龍茶（マック・5kcal）やゼロカロリー炭酸に変えるだけで、味の満足感を保ちながら約140kcalカット。飲み物のカロリーは満腹感に寄与しにくいため、最初に削るべきポイントです。",
              },
              {
                title: "迷ったらチキン系バーガーを選ぶ",
                body: "テリヤキチキンバーガー（モス・303kcal/P20.1g）、辛口チキンフィレバーガー（ケンタ・384kcal/P24.4g）など、チキン系はビーフ系よりタンパク質効率が良いものが多め。同カロリーでも満足感が続きやすくなります。",
              },
              {
                title: "「ダブル」「倍」は週1のごほうびに",
                body: "ダブル系は+100〜450kcal級の増量です。日常はシングル、トレーニング後や週1のごほうびにダブル、とメリハリをつけるとリバウンドしにくくなるとされています。",
              },
              {
                title: "食べたら記録する",
                body: "「思ったよりカロリーが高かった」を防ぐ最善策は記録です。本記事の数値は全て各社公式データに基づいているので、食べたバーガーをそのまま記録して1日の合計で調整しましょう。",
              },
            ]}
          />
        </section>

        {/* チェーン別ランキングへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>5社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。マクドナルドとケンタッキーは<Link href="/guide/mcdonalds-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">マクドナルドでダイエット</Link>・<Link href="/guide/kfc-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ケンタッキーダイエットガイド</Link>で太らない食べ方まで深掘りしています。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/mcdonalds" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 マクドナルド</Link>
            <Link href="/chains/mos" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 モスバーガー</Link>
            <Link href="/chains/burgerking" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 バーガーキング</Link>
            <Link href="/chains/kfc" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍗 ケンタッキー</Link>
            <Link href="/chains/zetteria" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 ゼッテリア</Link>
          </div>
        </section>

        <AffiliateProductGrid
          title="バーガーの前後で整えるタンパク質補給"
          productIds={["ultora-whey", "inbar-protein", "onebar-protein", "shaker-bottle"]}
        />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ハンバーガーは「チェーン選び」と「メニュー選び」の掛け算でカロリーが大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "プレーンな「ハンバーガー」最軽量はバーガーキング（252kcal）、次点マック（259kcal）",
              "看板バーガーはモス372kcal〜ワッパー672kcalで約1.8倍の開き",
              "PFCバランス王者はモスのテリヤキチキンバーガー（303kcal/P20.1g/F10.3g）",
              "筋トレ向きはケンタのチキンフィレ系（辛口384kcal/P24.4g、ダブル615kcal/P44.6g）",
              "最大の罠はセット（ポテトM+コーラMで+554kcal）。単品＋サラダ＋ゼロドリンクが鉄則",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="hamburger-comparison"
          items={[
            {
              q: "ハンバーガーチェーンで一番カロリーが低いのはどこですか？",
              a: "プレーンな「ハンバーガー」同士の比較では、バーガーキング（252kcal）が最も低く、マクドナルド（259kcal）、ゼッテリア（313kcal）、モスバーガー（314kcal）の順です。同じ商品名でも最大62kcalの差があります（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "ダイエット中におすすめのハンバーガーは？",
              a: "PFCバランスで選ぶならモスバーガーのテリヤキチキンバーガー（303kcal/タンパク質20.1g/脂質10.3g）が5社横断で最優秀です。脂質を最小にしたいならマクドナルドのハンバーガー（259kcal/脂質9.5g）、純粋にカロリー最少ならバーガーキングのハンバーガー（252kcal）が選択肢です。",
            },
            {
              q: "ビッグマックとワッパーはどちらが高カロリーですか？",
              a: "ワッパー（672kcal）の方がビッグマック（525kcal）より147kcal高カロリーです。ただしワッパーはタンパク質28.2gとビッグマック（26.1g）より多く、サイズも大きいため、単純な優劣ではなく食べる量と目的で選ぶのが適切です。",
            },
            {
              q: "筋トレ後に食べるなら、どのバーガーが高タンパクですか？",
              a: "ケンタッキーのダブルチキンフィレバーガーがタンパク質44.6g（615kcal）で最多です。カロリーを400kcal以下に抑えたい場合は、同じくケンタッキーの辛口チキンフィレバーガー（384kcal/タンパク質24.4g）が効率的。コスパ重視ならマクドナルドのエグチ（200円・390kcal/タンパク質22.4g）もおすすめです。",
            },
            {
              q: "モスのソイパティ（大豆ミート）はカロリーが低いですか？",
              a: "通常よりやや低い程度です。ソイハンバーガー293kcalに対し通常のハンバーガーは314kcalで、差は21kcal。脂質は10.5g vs 13.2gで2.7g差です。「ソイ＝大幅にヘルシー」ではないため、数値で選ぶならテリヤキチキンバーガー（303kcal/P20.1g）の方がダイエット向きです。",
            },
            {
              q: "セットにすると何kcal増えますか？",
              a: "マクドナルドの場合、ポテトM（409kcal）＋コーラM（145kcal）で+554kcalです。ハンバーガー単品259kcalがセットで813kcalになります。サイドサラダ（10kcal）＋黒烏龍茶（5kcal）に変えれば+15kcalに抑えられるため、ダイエット中は単品注文＋サイド変更が最も効果的です。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="バーガー5社をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-11", note: "初稿公開（5社の公式栄養データに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="hamburger-comparison" />

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
