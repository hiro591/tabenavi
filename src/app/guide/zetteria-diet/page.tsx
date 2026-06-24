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
  ComparisonTable,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  MenuPhoto,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "ゼッテリアのダイエット・カロリーガイド｜太りにくいバーガーの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/zetteria-diet" },
  description:
    "ゼッテリア（ロッテリアの新業態）でダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。バーガーのカロリー低い順比較、高タンパクの選び方、避けたい高カロリーメニュー、太りにくい食べ方まで紹介します。",
  keywords: [
    "ゼッテリア カロリー",
    "ゼッテリア ダイエット",
    "ゼッテリア 低カロリー",
    "ゼッテリア 高タンパク",
    "ゼッテリア 絶品チーズバーガー カロリー",
    "ゼッテリア 太らない",
  ],
  openGraph: {
    title:
      "ゼッテリアのダイエット・カロリーガイド｜太りにくいバーガーの選び方【2026年最新】",
    description:
      "ゼッテリア（ロッテリアの新業態）でダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。バーガーのカロリー低い順比較、高タンパクの選び方、避けたい高カロリーメニューを紹介します。",
    url: "https://www.tabenavi.jp/guide/zetteria-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ゼッテリアのダイエット・カロリーガイド｜太りにくいバーガーの選び方【2026年最新】",
  description:
    "ゼッテリア（ロッテリアの新業態）でダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。バーガーのカロリー低い順比較、高タンパクの選び方、避けたい高カロリーメニューを紹介します。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/zetteria-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "バーガーのカロリー低い順ランキング" },
  { id: "high-protein", label: "高タンパクで選ぶおすすめメニュー" },
  { id: "low-calorie", label: "低カロリーで満足する組み合わせ" },
  { id: "avoid", label: "ダイエット中に避けたい高カロリーメニュー" },
  { id: "side-drink", label: "サイド・ドリンクの選び方" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function ZetteriaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ゼッテリアでダイエット"
        subtitle="太りにくいバーガーの選び方とカロリー実データ【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
        breadcrumb="ゼッテリアダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="zetteria-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question={"ゼッテリアでダイエット中に選ぶならどのバーガーがいい？"}
          answer={
            "ゼッテリア（ロッテリアの新業態）でカロリーを抑えたいなら、最も軽いハンバーガー（313kcal）やチーズバーガー（364kcal）が基本。看板の絶品チーズバーガーは637kcal・タンパク質23.3gと、タンパク質はしっかり摂れる反面カロリーは高めです。サイドはフレンチフライポテト（357kcal）よりチーズスティック（167kcal）やハッシュポテト（178kcal）を、ドリンクはペプシコーラ（114kcal）よりまろやか緑茶（0kcal）やペプシゼロ（3kcal）を選ぶと、1食で200〜400kcalの差がつきます。"
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          ゼッテリアは、<Marker>ロッテリアブランドを引き継いだバーガーチェーンの新業態</Marker>です。看板商品の「絶品チーズバーガー」をはじめ、てりやき・えび・チキンなど定番のラインナップが揃っています。バーガー＝高カロリーというイメージがありますが、選び方次第でダイエット中でも十分に楽しめます。
        </p>
        <p className="mb-4">
          たとえば、最も軽い<Marker color="blue">ハンバーガー（313kcal）</Marker>と看板の<Marker color="blue">絶品チーズバーガー（637kcal）</Marker>では同じ1個でも約320kcalの差。さらにサイドのフレンチフライポテト（357kcal）やドリンクのペプシコーラ（114kcal）を足すかどうかで、合計は大きく変わります。
        </p>
        <p className="mb-8">
          この記事では、ゼッテリアのバーガー・サイド・ドリンクをすべてDBの実データに基づいてカロリー順に整理し、「高タンパクで選ぶ」「低カロリーで満足する」「避けたい高カロリー」の3つの軸で、太りにくい注文法を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="zetteria-diet-burger" genre="burger" priority />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">
            ゼッテリアのバーガーをカロリー低い順にランキング
          </SectionHeading>

          <p className="mb-4">
            ゼッテリアの主要なバーガー・サンドメニューを、<Marker color="blue">標準サイズ（単品1個）でカロリーの低い順</Marker>に並べました。トッピングやチーズが増えるほどカロリーが上がる、という関係が一目でわかります。
          </p>

          <NutritionTable
            items={[
              { name: "BLTサンド", calories: 256, protein: 6.4, fat: 13.7, carbs: 26.8, highlight: true },
              { name: "ハンバーガー", calories: 313, protein: 10.6, fat: 16.2, carbs: 31.2, highlight: true },
              { name: "BLTエッグサンド", calories: 332, protein: 12.6, fat: 18.9, carbs: 27.2 },
              { name: "スタジアムドック スパイシー", calories: 352, protein: 12.7, fat: 16.5, carbs: 37.4 },
              { name: "チーズバーガー", calories: 364, protein: 13.8, fat: 20.3, carbs: 31.7, highlight: true },
              { name: "えびバーガー", calories: 396, protein: 10.6, fat: 21.2, carbs: 40.2 },
              { name: "スタジアムドック チーズ", calories: 404, protein: 15.1, fat: 21.3, carbs: 37.5 },
              { name: "てりやきビーフバーガー", calories: 429, protein: 13.0, fat: 25.4, carbs: 35.3 },
              { name: "４種のチーズバーガー", calories: 448, protein: 17.1, fat: 29.6, carbs: 26.5 },
              { name: "てりやきチキンバーガー", calories: 471, protein: 15.9, fat: 30.0, carbs: 34.3 },
              { name: "お好み焼きバーガー", calories: 481, protein: 20.9, fat: 32.3, carbs: 24.6 },
              { name: "小島和哉のローストビーフバーガー", calories: 538, protein: 21.6, fat: 35.8, carbs: 30.4 },
              { name: "絶品ビーフバーガー", calories: 550, protein: 18.2, fat: 35.6, carbs: 36.9 },
              { name: "絶品チーズバーガー", calories: 637, protein: 23.3, fat: 43.3, carbs: 35.9 },
            ]}
            caption="標準サイズ（単品1個）で比較。ダブル・トリプルなどの増量バーガーは別途「避けたいメニュー」章で扱います。"
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            最も軽いのは<Marker>BLTサンド（256kcal）</Marker>とシンプルな<Marker>ハンバーガー（313kcal）</Marker>。一方、看板の<Marker color="blue">絶品チーズバーガー（637kcal）</Marker>は、チーズと厚いパティで脂質43.3gとカロリーが高め。同じ「バーガー1個」でも400kcal近い差がつくため、何を選ぶかがダイエットの分かれ目です。
          </p>

          <TipBox title="ゼッテリアのバーガー選びの基本">
            <p>
              カロリーを抑えたいなら、まず<Marker>「絶品」が付かないシンプル系</Marker>（ハンバーガー313kcal・チーズバーガー364kcal）を軸にしましょう。これらでも脂質は16〜20g台と、絶品チーズバーガー（F43.3g）の半分以下。物足りなければサイドやドリンクで調整する方が、合計カロリーをコントロールしやすくなります。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">
            高タンパクで選ぶゼッテリアのおすすめメニュー
          </SectionHeading>

          <p className="mb-6">
            ダイエット中でも<Marker>タンパク質はしっかり確保したい</Marker>もの。ゼッテリアのメニューをタンパク質量の多い順に見て、カロリーとのバランスが良いものを厳選しました。
          </p>

          <NutritionTable
            items={[
              { name: "絶品チーズバーガー", calories: 637, protein: 23.3, fat: 43.3, carbs: 35.9 },
              { name: "ソーセージエッグマフィン（モーニング）", calories: 449, protein: 21.8, fat: 26.4, carbs: 28.5 },
              { name: "小島和哉のローストビーフバーガー", calories: 538, protein: 21.6, fat: 35.8, carbs: 30.4 },
              { name: "お好み焼きバーガー", calories: 481, protein: 20.9, fat: 32.3, carbs: 24.6 },
              { name: "モーニングエッグマフィン", calories: 432, protein: 19.4, fat: 24.9, carbs: 30.5 },
              { name: "からあげ レギュラー", calories: 377, protein: 19.0, fat: 28.5, carbs: 11.1, highlight: true },
              { name: "絶品ビーフバーガー", calories: 550, protein: 18.2, fat: 35.6, carbs: 36.9 },
              { name: "４種のチーズバーガー", calories: 448, protein: 17.1, fat: 29.6, carbs: 26.5 },
            ]}
            highlightProtein
            caption="タンパク質量の多い順。各値はDB実値（標準サイズ・単品）。"
          />

          <p className="mb-6">
            この中から、<Marker color="blue">P/F比（タンパク質/脂質）や糖質の低さ</Marker>を加味して、ダイエット向きの高タンパクメニューをランキングしました。
          </p>

          <RankingCard
            rank={1}
            title="からあげ レギュラー"
            subtitle="377kcal / P19.0g / F28.5g / C11.1g"
            calories={377}
            protein={19.0}
            fat={28.5}
            carbs={11.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              からあげ レギュラーは<Marker color="green">糖質11.1gと低く、タンパク質19.0gをしっかり摂れる</Marker>のが最大の強み。バンズがない分、糖質はバーガー1個の3分の1ほどに抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              糖質制限ダイエット中の方には、これとサラダ（ドレッシングを除く25kcal）の組み合わせが好相性。脂質は28.5gと揚げ物らしく高めなので、ドリンクはまろやか緑茶（0kcal）など無糖を選ぶとバランスが整います。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="絶品チーズバーガー"
            subtitle="637kcal / P23.3g / F43.3g / C35.9g"
            calories={637}
            protein={23.3}
            fat={43.3}
            carbs={35.9}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ゼッテリアの看板。<Marker>1個でタンパク質23.3gと、メニュー中で最多クラス</Marker>。しっかり食べたい日のメインに向いています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ただし脂質43.3gと高めなので、これを選ぶ日はサイドを付けない、ドリンクを0kcalにするなど、合計カロリーで調整するのが鉄則。単品なら637kcalで収まります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="お好み焼きバーガー"
            subtitle="481kcal / P20.9g / F32.3g / C24.6g"
            calories={481}
            protein={20.9}
            fat={32.3}
            carbs={24.6}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              タンパク質20.9gに対し<Marker color="blue">炭水化物が24.6gと、バーガー類の中では低糖質</Marker>。同じくらいのカロリー帯のてりやきチキンバーガー（471kcal/C34.3g）より糖質が約10g少なく、タンパク質も多めです。糖質を抑えつつ満足感が欲しいときの選択肢になります。
            </p>
          </RankingCard>

          <MenuPhoto id="zetteria-diet-protein" genre="burger" />

          <TipBox title="タンパク質を底上げするなら">
            <p>
              バーガー単品では物足りない場合、<Marker>からあげ レギュラー（377kcal/P19.0g）を1品足す</Marker>とタンパク質を一気に底上げできます。たとえばチーズバーガー（364kcal/P13.8g）＋からあげ レギュラーで、合計約741kcal・タンパク質約33gに。脂質は高くなるので、ドリンクは無糖で合わせましょう。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ゼッテリアのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 3: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            低カロリーで満足するゼッテリアの組み合わせ
          </SectionHeading>

          <p className="mb-6">
            「バーガー＋サイド＋ドリンク」のセットでも、選び方次第で<Marker>合計400kcal前後に収める</Marker>ことができます。目的別の組み合わせを3パターン紹介します。
          </p>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["最軽量セット", "ハンバーガー + まろやか緑茶", "313 kcal", "P 10.6g"],
              ["低糖質寄り", "からあげ レギュラー + サラダ + ペプシゼロ", "約405 kcal", "P 20.2g"],
              ["バランス型", "チーズバーガー + ペプシゼロ", "367 kcal", "P 13.8g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            最軽量セットの<Marker color="blue">「ハンバーガー＋まろやか緑茶（0kcal）」なら313kcal</Marker>。一般的なファストフードのセット（バーガー＋ポテトＭ＋コーラ）が軽く800kcalを超えることを考えると、半分以下に抑えられます。
          </p>

          <p className="mb-4">
            糖質を抑えたい日は、バンズのない<Marker>からあげ レギュラー（P19.0g/C11.1g）にサラダ（25kcal）</Marker>を合わせるのがおすすめ。タンパク質を確保しながら糖質は約16gに収まります。
          </p>

          <SubSectionHeading>「絶品」と「シンプル系」のカロリー差を知る</SubSectionHeading>

          <p className="mb-4">
            同じバーガーでも、「絶品」が付くかどうかでカロリーは大きく変わります。具体的に比較してみましょう。
          </p>

          <ComparisonTable
            headers={["比較項目", "チーズバーガー", "絶品チーズバーガー"]}
            rows={[
              ["カロリー", "364 kcal", "637 kcal"],
              ["タンパク質", "13.8g", "23.3g"],
              ["脂質", "20.3g", "43.3g"],
              ["炭水化物", "31.7g", "35.9g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            絶品チーズバーガーはタンパク質が約1.7倍と魅力的ですが、<Marker>カロリーは273kcal、脂質は23g上乗せ</Marker>。「とにかくカロリーを抑えたい日」はチーズバーガー、「しっかりタンパク質を摂りたい日」は絶品チーズバーガー、と日によって使い分けるのが賢い選び方です。
          </p>

          <TipBox title="セットより単品＋無糖ドリンクが軽い">
            <p>
              ゼッテリアでカロリーを抑える基本は、<Marker>ポテトを外して無糖ドリンクにする</Marker>こと。フレンチフライポテト（357kcal）をまろやか緑茶（0kcal）やペプシゼロ（3kcal）に替えるだけで、約350kcalの節約になります。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 避けるべき */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            ダイエット中に避けたい高カロリーメニュー
          </SectionHeading>

          <p className="mb-4">
            ゼッテリアには<Marker>1,000kcalを超えるメニュー</Marker>も存在します。多くは「ダブル」「トリプル」「バケツ」といった増量系。知らずに注文すると1食でカロリーオーバーになりかねません。
          </p>

          <WarningBox title="ダイエット中は避けたいバーガー">
            <ul className="space-y-2">
              <li><span className="font-bold">トリプル絶品チーズバーガー（1409kcal）</span> ─ パティ3枚＋チーズで脂質105.4g。1個で1日の脂質目安を大きく超えます。</li>
              <li><span className="font-bold">トリプル絶品ビーフバーガー（1041kcal）</span> ─ こちらも脂質74.5gと高い。タンパク質44.1gは多いものの、カロリーが重すぎます。</li>
              <li><span className="font-bold">ダブル絶品チーズバーガー（1005kcal）</span> ─ 単品のチーズバーガー（364kcal）の約2.8倍。脂質73.2gは要注意。</li>
              <li><span className="font-bold">スタジアムＷチーズバーガー（796kcal）</span> ─ 脂質59.2gと、見た目以上に高脂質。</li>
              <li><span className="font-bold">ダブル絶品ビーフバーガー（795kcal）</span> ─ タンパク質31.1gは取れるが脂質55gと高め。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイド・デザートの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">バケツポテト（ナチュラルポテト）（1520kcal）</span> ─ 名前の通り大容量。脂質100.3g・炭水化物139.3gと、サイド1品で桁違いのカロリーです。</li>
              <li><span className="font-bold">バケツポテからあげ（ナチュラルポテト）（1374kcal）</span> ─ ポテトとからあげのシェア向け大盛り。1人で食べきると確実にオーバーします。</li>
              <li><span className="font-bold">バケツポテト（1020kcal）</span> ─ 通常のバケツでも1,000kcal超え。シェア前提のメニューです。</li>
              <li><span className="font-bold">フレンチフライポテト（357kcal）・ふるポテ各種（367〜368kcal）</span> ─ 単品サイズでも揚げ物で脂質22g台。付けるなら頻度を抑えて。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            ポイントは、<Marker color="blue">「ダブル・トリプル・バケツ」が付くものは原則シェア向け</Marker>と考えること。1人でダイエット中に食べるなら、シングルのバーガー＋無糖ドリンクが基本です。
          </p>
        </section>

        {/* Section 5: サイド・ドリンク */}
        <section className="mb-16">
          <SectionHeading id="side-drink">
            サイドとドリンクの選び方でカロリーを抑える
          </SectionHeading>

          <p className="mb-6">
            ゼッテリアでは<Marker>バーガー本体よりもサイドとドリンクで差がつく</Marker>ことが少なくありません。賢い選び方を整理します。
          </p>

          <SubSectionHeading>サイドはチーズスティック・ハッシュポテトが軽い</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "チーズスティック", calories: 167, protein: 7.2, fat: 10.8, carbs: 10.4, highlight: true },
              { name: "ハッシュポテト", calories: 178, protein: 1.2, fat: 12.7, carbs: 14.6, highlight: true },
              { name: "フレンチフライポテト", calories: 357, protein: 3.4, fat: 22.3, carbs: 36.8 },
              { name: "ふるポテ（バター醤油風味）", calories: 367, protein: 4.0, fat: 22.4, carbs: 38.3 },
              { name: "ふるポテ（明太子風味）", calories: 368, protein: 3.9, fat: 22.4, carbs: 38.8 },
              { name: "からあげ レギュラー", calories: 377, protein: 19.0, fat: 28.5, carbs: 11.1 },
            ]}
            caption="サイドメニューのカロリー比較（DB実値・単品）。"
          />

          <p className="mb-4">
            サイドを付けるなら、<Marker color="green">チーズスティック（167kcal）やハッシュポテト（178kcal）</Marker>がフレンチフライポテト（357kcal）の半分程度。タンパク質を稼ぎたいなら、糖質の低いからあげ レギュラー（377kcal/P19.0g/C11.1g）も選択肢になります。
          </p>

          <SubSectionHeading>ドリンクは無糖を選ぶだけで100kcal以上の節約</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "まろやか緑茶", calories: 0, protein: 0.1, fat: 0, carbs: 0.2, highlight: true },
              { name: "ホットティー", calories: 0, protein: 0, fat: 0, carbs: 0, highlight: true },
              { name: "ペプシゼロ", calories: 3, protein: 0.1, fat: 0, carbs: 0.6, highlight: true },
              { name: "アイスティー", calories: 7, protein: 0.2, fat: 0, carbs: 1.5 },
              { name: "ペプシコーラ", calories: 114, protein: 0.1, fat: 0, carbs: 28.4 },
              { name: "メロンソーダ", calories: 114, protein: 0, fat: 0, carbs: 28.6 },
            ]}
            caption="ドリンクのカロリー比較（DB実値）。"
          />

          <p className="mb-4">
            ペプシコーラやメロンソーダはどちらも<Marker>114kcal・糖質28g台</Marker>。これを<Marker color="blue">まろやか緑茶（0kcal）やペプシゼロ（3kcal）</Marker>に替えるだけで、ほぼまるごとカロリーをカットできます。甘い炭酸が欲しい人にはペプシゼロが近い選択肢です。
          </p>

          <WarningBox title="デザートとアルコールの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">杏仁マンゴーパフェシェーキ（350kcal）・コーヒーゼリーシェーキ（243kcal）</span> ─ シェーク系は糖質が高め。食後に足すと一気にカロリーが増えます。</li>
              <li><span className="font-bold">生ビール（217kcal）・アサヒスーパードライ（210kcal）</span> ─ アルコールもカロリー源。飲むならハイボール（168kcal）の方がやや軽めです。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">
            ゼッテリアで太りにくい食べ方のコツ
          </SectionHeading>

          <p className="mb-6">
            メニュー選びに加えて、<Marker>注文の組み立て方や食べる順番</Marker>でもカロリーコントロールは変わります。今日から使えるコツをまとめました。
          </p>

          <NumberedList
            items={[
              {
                title: "バーガーは「絶品が付かないシンプル系」を軸にする",
                body: "ハンバーガー（313kcal）やチーズバーガー（364kcal）は脂質16〜20g台。絶品チーズバーガー（637kcal/F43.3g）と比べて脂質が半分以下に収まります。まずはシンプル系を基本に考えましょう。",
              },
              {
                title: "ポテトを外して無糖ドリンクにする",
                body: "フレンチフライポテト（357kcal）をやめ、ペプシコーラ（114kcal）をまろやか緑茶（0kcal）に替えるだけで、合計で約470kcalの節約に。サイドが欲しければチーズスティック（167kcal）やハッシュポテト（178kcal）を。",
              },
              {
                title: "糖質を抑えたい日はバンズなしのからあげを活用",
                body: "からあげ レギュラー（377kcal/P19.0g/C11.1g）はバンズがない分、糖質がバーガーの3分の1ほど。サラダ（ドレッシングを除く25kcal）と合わせれば、糖質制限中でもタンパク質をしっかり摂れます。",
              },
              {
                title: "タンパク質が足りない日はからあげを1品足す",
                body: "バーガー単品ではタンパク質が10〜14g台にとどまることも。からあげ レギュラー（P19.0g）を足すと、合計30g前後まで底上げできます。脂質は上がるので無糖ドリンクで調整を。",
              },
              {
                title: "増量バーガー・バケツ系はシェア前提と心得る",
                body: "ダブル・トリプル・バケツが付くメニューは1,000kcal超えが珍しくありません。1人で食べきると確実にオーバーするので、複数人でシェアするか避けるのが無難です。",
              },
            ]}
          />

          <MenuPhoto id="zetteria-diet-set" genre="burger" />

          <SubSectionHeading>目的別・ゼッテリアの最適な選び方</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（糖質制限・ローファット・カロリー制限）によって、<Marker>選ぶべきメニューは変わります</Marker>。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "からあげ レギュラー + サラダ", "約402 kcal", "糖質約16gでP19g台"],
              ["カロリー制限", "ハンバーガー + まろやか緑茶", "313 kcal", "最軽量セット"],
              ["高タンパク", "絶品チーズバーガー", "637 kcal", "1個でP23.3g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            カロリー制限を最優先するなら<Marker color="blue">ハンバーガー＋無糖ドリンクで313kcal</Marker>。糖質を抑えたいならバンズのないからあげ＋サラダ。しっかりタンパク質を摂りたい日は絶品チーズバーガー、と目的に合わせて選び分けるのがコツです。
          </p>

          <SubSectionHeading>ゼッテリアでダイエットするための3つの心得</SubSectionHeading>

          <CheckList
            items={[
              "「絶品」「ダブル」「トリプル」「バケツ」が付くものはカロリーが高いと覚えておく",
              "サイドはポテトより軽いチーズスティック（167kcal）・ハッシュポテト（178kcal）、または高タンパクなからあげを選ぶ",
              "ドリンクはまろやか緑茶（0kcal）・ペプシゼロ（3kcal）など無糖を基本にする",
            ]}
          />
        </section>

        {/* ServiceOffers before FAQ */}
        <ServiceOffers tag="diet" />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ゼッテリアは、バーガー本体・サイド・ドリンクの選び方を工夫すれば、ダイエット中でも十分に楽しめます。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "最も軽いのはBLTサンド（256kcal）とハンバーガー（313kcal）。看板の絶品チーズバーガー（637kcal）とはハンバーガーで約320kcal、BLTサンドなら約380kcalの差がつく",
              "高タンパクで選ぶなら、糖質の低いからあげ レギュラー（377kcal/P19.0g/C11.1g）や、1個でP23.3gの絶品チーズバーガーが有力",
              "サイドはフレンチフライポテト（357kcal）よりチーズスティック（167kcal）・ハッシュポテト（178kcal）が軽い",
              "ドリンクはペプシコーラ（114kcal）をまろやか緑茶（0kcal）やペプシゼロ（3kcal）に替えるだけで丸ごとカロリーカット",
              "ダブル・トリプル・バケツ系（1,000kcal超えも）は原則シェア向け。1人のダイエット中は避けるのが無難",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。本記事は一般的な情報提供を目的としたもので、特定の効果を保証するものではありません。
          </p>
        </section>

        {/* Internal links block */}
        <section className="mb-12 rounded-2xl border border-sky-100 bg-sky-50/40 p-5 sm:p-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            ゼッテリアの栄養データをもっと見る
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chains/zetteria" className="text-sky-600 hover:underline">
                ゼッテリアのメニュー一覧・栄養成分（全89品）
              </Link>
            </li>
            <li>
              <Link href="/chains/zetteria/high-protein" className="text-sky-600 hover:underline">
                ゼッテリアの高タンパクメニューランキング
              </Link>
            </li>
            <li>
              <Link href="/chains/zetteria/diet" className="text-sky-600 hover:underline">
                ゼッテリアのダイエット向けメニュー
              </Link>
            </li>
            <li>
              <Link href="/chains/zetteria/low-calorie" className="text-sky-600 hover:underline">
                ゼッテリアの低カロリーメニュー
              </Link>
            </li>
          </ul>
          <h3 className="text-sm font-bold text-gray-900 mt-5 mb-3">関連ガイド記事</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/hamburger-comparison" className="text-sky-600 hover:underline">
                ハンバーガー5社カロリー比較（マック・モス・バーキン・ケンタ・ゼッテリア）
              </Link>
            </li>
            <li>
              <Link href="/guide/mos-diet" className="text-sky-600 hover:underline">
                モスバーガーのダイエット・カロリーガイド
              </Link>
            </li>
            <li>
              <Link href="/guide/mcdonalds-diet" className="text-sky-600 hover:underline">
                マクドナルドでダイエット｜低カロリーメニュー解説
              </Link>
            </li>
            <li>
              <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline">
                糖質制限×外食ガイド｜チェーン店の低糖質メニュー
              </Link>
            </li>
          </ul>
        </section>

        <FAQSection
          slug="zetteria-diet"
          items={[
            {
              q: "ゼッテリアでカロリーが最も低いバーガーは何ですか？",
              a: "バーガー・サンド類ではBLTサンドが256kcalで最も低く、次いでシンプルなハンバーガーが313kcal、BLTエッグサンドが332kcal、チーズバーガーが364kcalと続きます。カロリーを抑えたいなら、まずこれらのシンプル系を軸に選ぶのがおすすめです。",
            },
            {
              q: "ゼッテリアの絶品チーズバーガーは何kcalですか？ダイエット中でも食べられますか？",
              a: "絶品チーズバーガーは637kcal・タンパク質23.3g・脂質43.3g・炭水化物35.9gです。脂質が高めですが、タンパク質はメニュー中で最多クラス。食べる日はサイドを付けず、ドリンクをまろやか緑茶（0kcal）やペプシゼロ（3kcal）にして単品の637kcalに収めれば、ダイエット中でも選択肢になります。",
            },
            {
              q: "ゼッテリアで高タンパクなメニューはどれですか？",
              a: "1個あたりのタンパク質が多いのは、絶品チーズバーガー（P23.3g）、ソーセージエッグマフィン（P21.8g）、小島和哉のローストビーフバーガー（P21.6g）、お好み焼きバーガー（P20.9g）など。糖質を抑えつつタンパク質を摂りたいなら、バンズのないからあげ レギュラー（377kcal/P19.0g/C11.1g）が好相性です。",
            },
            {
              q: "ゼッテリアでダイエット中に避けるべきメニューはありますか？",
              a: "トリプル絶品チーズバーガー（1409kcal）、トリプル絶品ビーフバーガー（1041kcal）、ダブル絶品チーズバーガー（1005kcal）など増量系バーガーは高カロリー・高脂質です。サイドではバケツポテト（ナチュラルポテト）（1520kcal）やバケツポテからあげ（ナチュラルポテト）（1374kcal）などバケツ系が桁違い。これらは原則シェア向けと考えましょう。",
            },
            {
              q: "ゼッテリアのサイドはどれが低カロリーですか？",
              a: "チーズスティックが167kcal、ハッシュポテトが178kcalと、フレンチフライポテト（357kcal）やふるポテ各種（367〜368kcal）の半分程度です。タンパク質を稼ぎたい場合は、糖質の低いからあげ レギュラー（377kcal/P19.0g/C11.1g）も選択肢になります。",
            },
            {
              q: "ゼッテリアのドリンクで太りにくいものはどれですか？",
              a: "まろやか緑茶（0kcal）やホットティー（0kcal）、ペプシゼロ（3kcal）、アイスティー（7kcal）が低カロリーです。ペプシコーラやメロンソーダはどちらも114kcal・糖質28g台あるため、これらを無糖ドリンクに替えるだけで1杯あたり約110kcalを節約できます。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />

        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />

        <ArticleFooter currentSlug="zetteria-diet" />

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
