import Link from "next/link";
import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/guide/AffiliateComponents";
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
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/subway-diet" },
  title:
    "サブウェイ ダイエット｜低カロリー＆高タンパクサンドの選び方【2026年最新】 | たべなび",
  description:
    "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。チリチキン273kcal・P20.5g、ベジーデライト215kcalなど実データで紹介。",
  keywords: [
    "サブウェイ ダイエット",
    "サブウェイ カロリー",
    "サブウェイ 低カロリー",
    "サブウェイ タンパク質",
    "SUBWAY ダイエット",
  ],
  openGraph: {
    title: "サブウェイ ダイエット｜低カロリー＆高タンパクサンドの選び方【2026年最新】",
    description:
      "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。",
    url: "https://www.tabenavi.jp/guide/subway-diet",
    type: "article",
  },
};

// Static JSON-LD for SEO structured data - contains only hardcoded trusted content
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "サブウェイ ダイエット｜低カロリー＆高タンパクサンドの選び方【2026年最新】",
  description:
    "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。",
  datePublished: "2026-03-19",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/subway-diet",
};

const tocItems = [
  { id: "why-subway", label: "サブウェイがダイエットに最適な理由" },
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめサンド" },
  { id: "customize", label: "カスタマイズ術" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "summary", label: "まとめ" },
];

export default function SubwayDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="サブウェイダイエットガイド"
        subtitle="低カロリー＆高タンパクサンドの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=400&fit=crop"
        breadcrumb="サブウェイダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="subway-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月22日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          サブウェイは「ダイエットに向いた外食チェーン」として知られています。その理由は、<Marker>野菜たっぷり・高タンパク・カスタマイズ自在</Marker>という3つの強みがダイエットの継続に役立つからです。
        </p>
        <p className="mb-4">
          特に<Marker color="blue">チリチキン（273kcal / P20.5g）</Marker>は、300kcal以下で20g以上のタンパク質を摂れる効率の良いメニュー。<Marker>サラダチキン（ハニーマスタードソース）（281kcal / P21.2g / 脂質わずか2.8g）</Marker>も高タンパク・低脂質で、カロリーコントロールを助けてくれます。
        </p>
        <p className="mb-8">
          この記事では、サブウェイのメニューをカロリー順にランキングし、カスタマイズの考え方までPFCデータとともに解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: サブウェイがダイエットに最適な理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"サブウェイはダイエット向けですか？おすすめメニューを教えてください。"}
          answer={"サブウェイはダイエット中でも選びやすい外食チェーンです。チリチキン（273kcal・タンパク質20.5g・脂質4.1g）やサラダチキン（ハニーマスタードソース）（281kcal・タンパク質21.2g・脂質2.8g）など、300kcal以下で高タンパク・低脂質なメニューがあります。野菜は無料で増量でき、パンの種類を選べるため、カスタマイズで栄養バランスを整えやすいのが強みです。"}
        />

        <SectionHeading id="why-subway">サブウェイがダイエットに最適な理由</SectionHeading>

          <p className="mb-4">
            数あるファストフードチェーンの中でも、<Marker>サブウェイがダイエット中に選びやすい</Marker>理由は大きく3つあります。
          </p>

          <NumberedList
            items={[
              {
                title: "野菜が無料で増量できる",
                body: "レタス・トマト・ピーマン・オニオン・オリーブなど、野菜を無料で増量可能。野菜を「上限まで」増やせば、食物繊維とビタミンを少ない追加カロリーで補いやすくなります。",
              },
              {
                title: "300kcal前後のサンドが選べる",
                body: "ベジーデライト（215kcal）、ハムサンド（260kcal）、チリチキン（273kcal）など、300kcal前後のメニューがあります。他チェーンのバーガーが400〜600kcal台であることを考えると、低めに抑えやすいのが特徴です。",
              },
              {
                title: "パン・野菜・トッピングを選べる",
                body: "パンの種類でカロリーが変わり、トッピングを抑えれば脂質も調整しやすい。自分に合わせてカスタマイズできるのがサブウェイの強みです。",
              },
            ]}
          />

          <TipBox title="サブウェイ vs マクドナルド カロリー比較">
            <p>サブウェイのチリチキン（273kcal / P20.5g）は、マクドナルドのチキンフィレオ（479kcal / P19.9g）と比べて<Marker>206kcal低く、タンパク質は0.6g多い</Marker>。同じ「チキン系」でもこれだけの差が生まれます。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&h=400&fit=crop" alt="新鮮な野菜がたっぷり挟まれたサブウェイ風サンドイッチ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">サブウェイ カロリーランキング</SectionHeading>

          <p className="mb-4">
            サブウェイのサンドイッチをカロリーの低い順にランキングしました。<Marker color="blue">多くのメニューが200〜400kcal台</Marker>と、ファストフードとしては低めに収まっています。
          </p>

          <NutritionTable
            items={[
              { name: "ベジーデライト", calories: 215, protein: 7.2, fat: 4.4, carbs: 38.0 },
              { name: "ハムサンド", calories: 260, protein: 12.4, fat: 6.4, carbs: 40.0 },
              { name: "チリチキン", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7, highlight: true },
              { name: "アボカドベジー", calories: 295, protein: 8.4, fat: 9.8, carbs: 44.8 },
              { name: "ローストビーフ", calories: 309, protein: 16.2, fat: 9.5, carbs: 40.0 },
              { name: "たまごサンド", calories: 318, protein: 11.7, fat: 13.0, carbs: 39.6 },
              { name: "えびアボカド", calories: 319, protein: 11.9, fat: 12.2, carbs: 41.1 },
              { name: "チーズサラダチキン", calories: 331, protein: 22.7, fat: 8.8, carbs: 41.8 },
              { name: "BLT", calories: 335, protein: 11.3, fat: 14.2, carbs: 41.9 },
              { name: "てり焼きチキン", calories: 346, protein: 19.7, fat: 9.9, carbs: 45.5 },
              { name: "アメリカンクラブハウス", calories: 349, protein: 21.0, fat: 11.3, carbs: 42.8 },
              { name: "アボカドチキン", calories: 373, protein: 21.7, fat: 12.6, carbs: 44.3 },
              { name: "スパイシークラブハウス", calories: 396, protein: 25.4, fat: 12.6, carbs: 46.6 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※サンドイッチの数値（公式栄養データ／レギュラーサイズ）。おすすめマークは300kcal以下で高タンパクなメニューに表示。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>サブウェイの特徴は<Marker>サンドイッチの多くが400kcal以下</Marker>に収まっていること。差がつくのはタンパク質と脂質です。たとえばチリチキンはP20.5gで脂質4.1g、対してBLTはP11.3gで脂質14.2g。<Marker color="blue">同じカロリー帯でも中身で栄養バランスが大きく変わる</Marker>ため、チキン系（P20g前後）を選ぶとタンパク質を確保しやすくなります。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめサンド */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめサンド</SectionHeading>

          <p className="mb-6">
            サブウェイでダイエット中に選びやすいサンドをランキング形式で紹介します。<Marker>カロリー・タンパク質・脂質のバランスが良いメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="チリチキン" subtitle="273kcal / P20.5g / F4.1g / C39.7g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              サブウェイの<Marker>PFCバランス上位メニュー</Marker>。273kcalでP20.5g、さらに脂質わずか4.1gと、サンドイッチの中でも高タンパク・低脂質が際立ちます。タンパク質1gあたりのカロリーは約13.3kcalと効率的です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ピリ辛の味付けで満足感も得やすく、野菜多めのカスタマイズと相性のよい一品。タンパク質を確保しながらカロリーを抑えたいときの選択肢です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="サラダチキン（ハニーマスタードソース）" subtitle="281kcal / P21.2g / F2.8g / C44.1g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">脂質わずか2.8gという低脂質の代表格</Marker>。281kcalでP21.2gと、タンパク質をしっかり摂りつつ脂質を最小限に抑えたい人に向いています。ハニーマスタードの甘みで食べやすく、さっぱりした味わいです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ローストビーフ" subtitle="309kcal / P16.2g / F9.5g / C40.0g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">赤身肉の旨味を楽しみながら309kcal・P16.2g</Marker>。牛肉には鶏肉にはない鉄分や亜鉛が含まれており、ダイエット中に不足しがちなミネラルの補給にも役立ちます。脂質9.5gと中程度で、満足感の高いサンドです。
            </p>
          </RankingCard>

          <SubSectionHeading>おすすめの組み合わせセット</SubSectionHeading>

          <NutritionCard
            name="チリチキン + ゴロゴロ野菜のトマト＆クラムスープ"
            chain="サブウェイ"
            calories={335}
            protein={23.7}
            fat={5.2}
            carbs={49.5}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker>合計335kcalでP23.7g、脂質わずか5.2g</Marker>という栄養効率の良いランチ。ゴロゴロ野菜のトマト＆クラムスープ（62kcal / P3.2g）で温かい一品を足しても低カロリーに収まり、満足感も得やすい組み合わせです。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1540914124281-342587941389?w=800&h=400&fit=crop" alt="カラフルな野菜が詰まったヘルシーなサンドイッチ" />

          <CTABanner
            title="サブウェイのカロリーをサクッと検索"
            subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
          />
        </section>

        {/* Section 4: カスタマイズ術 */}
        <section className="mb-16">
          <SectionHeading id="customize">ダイエット効果を最大化するカスタマイズ術</SectionHeading>

          <p className="mb-6">
            サブウェイの強みはカスタマイズにあります。<Marker>パンや野菜、トッピングの選び方で同じサンドでも栄養バランスが変わる</Marker>ため、無理なく調整しやすいのが特徴です。ダイエット中のカスタマイズの考え方を紹介します。
          </p>

          <SubSectionHeading>パンの選び方</SubSectionHeading>
          <p className="mb-4">
            サブウェイのパンは種類によってカロリーが異なります（パン単体の数値）。
          </p>

          <ComparisonTable
            headers={["パンの種類", "カロリー", "特徴"]}
            rows={[
              ["ホワイト", "179 kcal", "定番のホワイトブレッド"],
              ["ウィート", "180 kcal", "全粒粉入りで食物繊維が多い"],
              ["ハニーオーツ", "190 kcal", "はちみつ＋オーツ麦"],
              ["セサミ", "196 kcal", "ゴマの風味が特徴"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6">
            <Marker>カロリーで選ぶならホワイト（179kcal）かウィート（180kcal）</Marker>。差はわずか1kcalなので、食物繊維を重視するなら全粒粉入りのウィートがおすすめです。ハニーオーツやセサミは風味が良い反面、ホワイトより10〜17kcal高くなる点を覚えておくと選びやすくなります。
          </p>

          <SubSectionHeading>野菜の増量テクニック</SubSectionHeading>
          <p className="mb-6">
            サブウェイでは<Marker color="blue">全ての野菜が無料で増量可能</Marker>。「野菜全部多めで」と伝えるだけでOKです。特におすすめの増量野菜は、レタス（食物繊維）、トマト（リコピン）、ピーマン（ビタミンC）の3つ。カロリーをほとんど増やさずに満足感と栄養価を大幅にアップできます。
          </p>

          <SubSectionHeading>ドレッシングの選び方</SubSectionHeading>
          <p className="mb-6">
            ドレッシングはサンド全体のカロリー・脂質を左右するポイントです。<Marker color="green">マヨネーズ系などオイルの多いドレッシングは脂質が増えやすい</Marker>ため、ダイエット中はノンオイル系やお酢ベースのあっさりした選択肢を選ぶと、余分な脂質を抑えやすくなります。「ドレッシング少なめ」「別添え」と伝えて自分で量を調整するのも有効です。
          </p>

          <SubSectionHeading>低脂質を重視したいときの選び方</SubSectionHeading>
          <p className="mb-4">
            脂質を抑えつつタンパク質を確保したいなら、<Marker>サラダチキン（ハニーマスタードソース）が有力な選択肢</Marker>。281kcal・P21.2g・脂質わずか2.8gと、サンドイッチ・サラダ系の中でも低脂質が際立ちます。
          </p>

          <NutritionCard
            name="サラダチキン（ハニーマスタードソース）"
            chain="サブウェイ"
            calories={281}
            protein={21.2}
            fat={2.8}
            carbs={44.1}
            recommended
          />

          <p className="mb-4 mt-4">
            タンパク質を最優先したいときは、チーズサラダチキンも候補です。
          </p>

          <NutritionCard
            name="チーズサラダチキン"
            chain="サブウェイ"
            calories={331}
            protein={22.7}
            fat={8.8}
            carbs={41.8}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker color="blue">331kcalでP22.7g</Marker>と、サンドイッチの中でもトップクラスのタンパク質量。チーズが入る分だけ脂質はやや上がりますが、しっかり食べたい日のタンパク源として頼りになります。
          </p>

          <SubSectionHeading>トッピングと野菜の活用</SubSectionHeading>
          <p className="mb-6">
            サブウェイではチーズやベーコンなどのトッピングも選べますが、ダイエット中は脂質の増加に注意。<Marker color="green">脂質を抑えたいときは野菜の増量を中心に</Marker>し、ベーコンやチーズの追加は控えめにすると、カロリーと脂質をコントロールしやすくなります。野菜は無料で増量できるため、満足感を上げる手段として活用しましょう。
          </p>

          <TipBox title="「サラダ」メニューの活用">
            <p>サブウェイではサンドの中身をパンなしの「サラダ」として注文することも可能です。たとえばサラダチキン サラダは<Marker>93kcal・P14.7g・脂質0.8g</Marker>と、パンのカロリー（約180kcal）を抑えながら高タンパクな一品になります。糖質を控えたいときの選択肢として覚えておくと便利です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="色鮮やかな野菜サラダのイメージ" />
        </section>

        {/* Section 5: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            サブウェイは全体的に低カロリーですが、<Marker>選び方やカスタマイズ次第でカロリーが跳ね上がるケース</Marker>があります。以下のポイントに注意しましょう。
          </p>

          <WarningBox title="ダイエット中に注意したいポイント">
            <ul className="space-y-2">
              <li><span className="font-bold">BLT（335kcal / P11.3g / F14.2g）</span> ─ ベーコンの脂質が効いて脂質14.2g。タンパク質はチリチキン（P20.5g）より約9g少ないため、タンパク質重視ならチキン系が有利です。</li>
              <li><span className="font-bold">たまごサンド（318kcal / P11.7g / F13.0g）</span> ─ 脂質13.0gとやや高め。同じ300kcal台ならチーズサラダチキン（P22.7g）の方がタンパク質を多く摂れます。</li>
              <li><span className="font-bold">マヨネーズ系ドレッシング</span> ─ オイルの多いドレッシングは脂質を押し上げやすい。脂質を抑えたいときはノンオイル系を選び、量は控えめにしましょう。</li>
              <li><span className="font-bold">クッキー（チョコチップ208kcal・ホワイトマカダミア219kcal）</span> ─ タンパク質はほぼ得られず、脂質と糖質が中心。デザートを足すなら頻度を抑えるのが無難です。</li>
              <li><span className="font-bold">コロコロポテト オリジナル（M）280kcal</span> ─ サイドのポテトはMサイズで280kcal。サイドを足すなら、ゴロゴロ野菜のトマト＆クラムスープ（62kcal）など軽めのスープが選択肢です。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["注文パターン", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["チリチキン + 野菜多め", "273 kcal", "20.5g", "4.1g"],
              ["たまごサンド + ポテト（M）", "598 kcal", "15.9g", "23.6g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6 text-sm text-gray-700">
            同じサブウェイでも、<Marker>注文の仕方で273kcal vs 598kcalと約2.2倍の差</Marker>が生まれます。「サブウェイだから安心」と油断せず、メニューとサイドの選択が大切です。
          </p>

          <TipBox title="BLT（335kcal）は意外と脂質高め">
            <p>BLTは「ベーコン・レタス・トマト」のシンプルな構成で健康的に見えますが、<Marker>ベーコンの脂質14.2gが全体を引き上げて335kcal</Marker>に。タンパク質も11.3gとチリチキン（P20.5g）より約9g少なめです。タンパク質を確保したいときはチキン系を選ぶと効率的です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop" alt="新鮮なサラダとヘルシーなランチのイメージ" />

          <CTABanner
            title="そのメニュー、何kcal？ たべなびで今すぐ検索"
            subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
          />
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            サブウェイはダイエット中の外食先として選びやすいチェーンの一つです。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "チリチキン（273kcal / P20.5g / F4.1g）が高タンパク・低脂質でバランス良好",
              "サラダチキン（ハニーマスタードソース）（281kcal / P21.2g / F2.8g）は脂質を最小に抑えたいとき向き",
              "タンパク質を最優先するならチーズサラダチキン（331kcal / P22.7g）やスパイシークラブハウス（396kcal / P25.4g）",
              "野菜は無料で増量可能。「野菜全部多め」で満足感と栄養価をアップ",
              "パンはカロリー重視ならホワイト（179kcal）かウィート（180kcal）。食物繊維ならウィート",
              "脂質が高めのBLT（335kcal / F14.2g）やサイドのポテト・クッキーは頻度に注意",
            ]}
          />

          <CheckList
            items={[
              "高タンパク・低脂質ならチリチキン or サラダチキン（ハニーマスタードソース）",
              "野菜は全て無料で増量可能。「野菜全部多め」で栄養価UP",
              "パンはホワイト（179kcal）かウィート（180kcal）を選ぶ",
              "ドレッシングはオイルの多いものを避け、量は控えめに",
              "サイドを足すなら軽めのスープ（ゴロゴロ野菜のトマト＆クラムスープ62kcalなど）",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗・時期により異なる場合があります。最新の情報はサブウェイ公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="subway-diet"
          items={[
            { q: "サブウェイのカロリーが低めな理由は何ですか？", a: "野菜が無料で増量できる、300kcal前後のサンドが選べる、パンや野菜・トッピングをカスタマイズできるという3つの理由があります。たとえばチリチキン（273kcal / P20.5g）はマクドナルドのチキンフィレオ（479kcal / P19.9g）と比べて206kcal低く、タンパク質は0.6g多いです（2026年6月時点・各社公式栄養データ）。" },
            { q: "ダイエット中はどのパンを選ぶべきですか？", a: "カロリーで選ぶならホワイト（179kcal）かウィート（180kcal）。差はわずか1kcalなので、食物繊維を重視するなら全粒粉入りのウィートがおすすめです。ハニーオーツ（190kcal）やセサミ（196kcal）は風味が良い反面、ホワイトより10〜17kcal高くなります。" },
            { q: "高タンパク・低脂質のおすすめメニューは？", a: "チリチキン（273kcal / P20.5g / 脂質4.1g）と、サラダチキン（ハニーマスタードソース）（281kcal / P21.2g / 脂質2.8g）が高タンパク・低脂質でおすすめ。タンパク質を最優先するならチーズサラダチキン（331kcal / P22.7g）も選択肢です。" },
            { q: "たまごサンドはダイエットに向いていますか？", a: "脂質がやや高めのメニューです。たまごサンド（318kcal / 脂質13.0g / P11.7g）は、同じ300kcal台のチーズサラダチキン（脂質8.8g / P22.7g）と比べてタンパク質が約11g少なめ。タンパク質を確保したいときはチキン系が効率的です。" },
            { q: "サブウェイをサラダで注文する方法もありますか？", a: "はい。サンドの中身をパンなしの「サラダ」として注文できます。たとえばサラダチキン サラダは93kcal・タンパク質14.7g・脂質0.8gと、パンのカロリー（約180kcal）を抑えながら高タンパクな一品に。糖質を控えたいときの選択肢になります。" },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-03-19", note: "初稿公開" },
            { date: "2026-06-22", note: "全栄養数値をたべなびDB（公式栄養データ）の実値に再検証。実在しないメニュー（ローストチキン・ターキーブレスト等）を実在品へ差し替え、カロリー・PFC・ランキング・FAQ・まとめを実データに修正。価格非掲載の品の価格表記を削除。" },
          ]}
        />

        <ArticleFooter currentSlug="subway-diet" />

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
