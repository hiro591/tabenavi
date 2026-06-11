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
  alternates: { canonical: "https://www.tabenavi.jp/guide/mcdonalds-diet" },
  title:
    "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方【2026年最新】 | たべなび",
  description:
    "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。マック太らないメニューの選び方がわかります。",
  keywords: [
    "マクドナルド ダイエット",
    "マック カロリー 低い順",
    "マック 太らない",
    "マクドナルド カロリー",
    "マック ダイエット おすすめ",
  ],
  openGraph: {
    title: "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方",
    description:
      "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/mcdonalds-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "マクドナルドでダイエット｜低カロリーメニューランキングと太らない食べ方",
  description:
    "マクドナルドのカロリー低い順ランキング、ダイエット中のおすすめメニュー5選、PFCバランスで選ぶ食べ方を徹底解説。",
  datePublished: "2026-03-18",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/mcdonalds-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリー低い順ランキング" },
  { id: "recommended", label: "ダイエット中のおすすめメニュー5選" },
  { id: "avoid", label: "避けるべき高カロリーメニュー" },
  { id: "tips", label: "太らない食べ方 5つのコツ" },
  { id: "pfc", label: "PFCバランスで選ぶメニュー" },
  { id: "combos", label: "おすすめの組み合わせ3パターン" },
  { id: "summary", label: "まとめ" },
];

export default function McDonaldsDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="マクドナルドでダイエット"
        subtitle="低カロリーメニューランキングと太らない食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
        breadcrumb="マクドナルドダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="mcdonalds-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="マクドナルドで一番低カロリーなバーガーは？ダイエット中におすすめのメニューは？"
          answer={
            <>
              <strong>最も低カロリーなのはハンバーガー単品（259kcal）</strong>。次いでチーズバーガー・エッグマックマフィン（共に310kcal）、フィレオフィッシュ（338kcal）の順です。ダイエット中は<strong>400kcal以下のメニュー＋単品注文</strong>が基本。セットにすると約550kcal上乗せされるため、ポテトをサイドサラダに変更しドリンクはお茶かブラックコーヒーを選ぶことで、満足感を保ちつつカロリーを大幅にカットできます。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどマクドナルドが食べたい」――そんな悩みを持つ方は多いのではないでしょうか。実は、メニューの選び方次第で<Marker>マクドナルドでも十分にカロリーコントロールが可能</Marker>です。
        </p>
        <p className="mb-4">
          マクドナルドのバーガーの中で最もカロリーが低いのは<Marker>ハンバーガー単品でわずか259kcal</Marker>。これはコンビニのおにぎり2個分とほぼ同じカロリーです。一方で、倍ビッグマックは723kcalと約2.8倍。同じマクドナルドでも、何を選ぶかで大きな差が出ます。
        </p>
        <p className="mb-8">
          この記事では、マクドナルドの全メニューをカロリー低い順にランキングし、ダイエット中のおすすめメニューやPFCバランスを考えた食べ方を、<Marker color="blue">2026年5月時点の公式栄養データ</Marker>に基づいて詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop" alt="ジューシーなハンバーガーのクローズアップ写真" />

        {/* Section 1: カロリーランキング */}
        <SectionHeading id="calorie-ranking">マクドナルドのカロリー低い順ランキング</SectionHeading>

        <p className="mb-4">
          マクドナルドの主要バーガーメニューをカロリーの低い順に並べました。ダイエット中は<Marker color="blue">上位5つのメニュー（400kcal以下）</Marker>から選ぶのがポイントです。
        </p>

        <NutritionTable
          items={[
            { name: "ハンバーガー", calories: 259, protein: 13.0, fat: 9.5, carbs: 30.3, highlight: true },
            { name: "チーズバーガー", calories: 310, protein: 15.9, fat: 13.5, carbs: 31.0, highlight: true },
            { name: "エッグマックマフィン", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2, highlight: true },
            { name: "フィレオフィッシュ®", calories: 338, protein: 15.0, fat: 14.2, carbs: 37.4 },
            { name: "倍ハンバーガー", calories: 358, protein: 20.6, fat: 17.1, carbs: 30.3 },
            { name: "ベーコンレタスバーガー", calories: 362, protein: 17.4, fat: 19.4, carbs: 30.1 },
            { name: "チキンタツタ®", calories: 373, protein: 17.6, fat: 16.2, carbs: 39.9 },
            { name: "マックチキン®", calories: 383, protein: 13.5, fat: 19.2, carbs: 39.5 },
            { name: "エグチ（エッグチーズバーガー）", calories: 390, protein: 22.4, fat: 19.0, carbs: 31.2 },
            { name: "マックポーク", calories: 401, protein: 15.1, fat: 22.7, carbs: 34.3 },
            { name: "えびフィレオ®", calories: 408, protein: 11.4, fat: 18.6, carbs: 49.5 },
            { name: "ダブルチーズバーガー", calories: 459, protein: 26.4, fat: 25.1, carbs: 31.8 },
            { name: "てりやきマックバーガー", calories: 477, protein: 14.5, fat: 30.2, carbs: 37.5 },
            { name: "チキンフィレオ", calories: 479, protein: 19.9, fat: 23.8, carbs: 47.0 },
            { name: "ビッグマック®", calories: 525, protein: 26.1, fat: 28.0, carbs: 42.1 },
            { name: "倍ビッグマック", calories: 723, protein: 41.3, fat: 43.1, carbs: 42.1 },
          ]}
        />

        <p className="text-xs text-gray-400 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。おすすめマークは400kcal以下のメニューに表示。
        </p>

        <TipBox title="カロリーランキングの見方">
          <p>上位3メニュー（ハンバーガー・チーズバーガー・エッグマックマフィン）は<Marker>いずれも310kcal以下</Marker>。この3つを覚えておけば、迷ったときに安心して注文できます。特にエッグマックマフィンはタンパク質18.9gと栄養バランスにも優れています。</p>
        </TipBox>

        {/* Section 2: おすすめメニュー5選 */}
        <SectionHeading id="recommended">ダイエット中のおすすめメニュー5選</SectionHeading>

        <p className="mb-6">
          カロリーだけでなく、<Marker>PFCバランス（タンパク質・脂質・炭水化物）</Marker>やコスパも考慮したおすすめメニューを5つ厳選しました。それぞれ「なぜおすすめなのか」を詳しく解説します。
        </p>

        <RankingCard rank={1} title="ハンバーガー" subtitle="259kcal / P13.0g / F9.5g / C30.3g / ¥190">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            マクドナルドで<Marker>最もカロリーが低いバーガー</Marker>です。脂質もわずか9.5gと控えめで、ダイエット中の外食に最適。価格も190円とお財布にも優しく、「今日はカロリーを抑えたい」という日にぴったりです。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            脂質9.5gはマクドナルドのバーガーの中で最少。脂質制限（ローファット）ダイエットをしている方には特におすすめです。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="エッグマックマフィン" subtitle="310kcal / P18.6g / F13.6g / C27.2g / ¥290">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            朝マック限定メニューですが、<Marker color="blue">310kcalでタンパク質18.6gと高タンパク</Marker>。PFCバランスが非常に良く、ダイエット中の朝食として優秀です。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            卵とカナディアンベーコンの組み合わせでタンパク質をしっかり摂取できるため、朝から体に必要な栄養を補給できます。朝マックが利用できる時間帯（開店〜10:30）に行ける方はぜひ活用しましょう。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="チーズバーガー" subtitle="310kcal / P15.9g / F13.5g / C31.0g / ¥240">
          <p className="text-sm text-gray-700 leading-relaxed">
            ハンバーガーにチーズを追加しても310kcal。チーズの分だけ<Marker color="green">タンパク質が15.9gに増え</Marker>、満足感もアップします。240円という手頃な価格も魅力で、ハンバーガーだと物足りないけどカロリーは抑えたいという方におすすめです。
          </p>
        </RankingCard>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">4</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">エグチ（エッグチーズバーガー）</h3>
              <p className="text-xs text-gray-500">390kcal / P22.4g / F19.0g / C31.2g / ¥280</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              卵とチーズで<Marker color="blue">高タンパク22.4g</Marker>を実現。朝マックでなくてもいつでも注文できるのが強みです。390kcalでタンパク質を効率よく摂取でき、筋トレ中の方にもおすすめ。1個あたりのタンパク質コスパ（P/円）では非常に優秀です。
            </p>
          </div>
        </div>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">5</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">フィレオフィッシュ®</h3>
              <p className="text-xs text-gray-500">338kcal / P15.0g / F14.2g / C37.4g / ¥410</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              魚を使ったバーガーで338kcal。ビーフやチキンとは異なる栄養バランスで、<Marker color="green">魚の良質な脂質（オメガ3脂肪酸）</Marker>が含まれます。肉ばかりになりがちなダイエット中の食事に変化をつけるのにも良い選択肢です。
            </p>
          </div>
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="新鮮な野菜たっぷりのヘルシーなサラダプレート" />

        {/* Section 3: 避けるべきメニュー */}
        <SectionHeading id="avoid">避けるべき高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          ダイエット中に注意すべきメニューを紹介します。特に<Marker>セットメニューのポテトLはバーガーと合わせると1,000kcalを超える</Marker>こともあるので要注意です。
        </p>

        <WarningBox title="ダイエット中は避けたいメニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">倍ビッグマック（723kcal）</span> ─ パティ4枚で脂質43.1g。1食分のカロリーの大半を占めてしまいます。</li>
            <li><span className="font-bold">マックフライポテト L（517kcal）</span> ─ タンパク質わずか7.0gなのに脂質25.1g。栄養バランスが非常に悪い。</li>
            <li><span className="font-bold">ビッグマック®（525kcal）</span> ─ 脂質28.0gと高め。ボリュームの割にタンパク質は26gとそこまで多くない。</li>
            <li><span className="font-bold">てりやきマックバーガー（477kcal）</span> ─ 甘辛ソースに砂糖が多く、脂質30.2gも高い。見た目以上に高カロリー。</li>
            <li><span className="font-bold">マックフルーリー® オレオ®（236kcal）</span> ─ カロリーは控えめに見えるが、糖質はほぼすべて。デザートは極力控えましょう。</li>
          </ul>
        </WarningBox>

        <TipBox title="「セット」の罠に注意">
          <p>バリューセットにすると、ポテトM（409kcal）+ コーラM（145kcal）で<Marker>+554kcal</Marker>。ハンバーガー単品259kcalでも、セットにすると合計813kcalに跳ね上がります。単品注文がダイエットの鉄則です。</p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="マクドナルドのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 5つのコツ */}
        <SectionHeading id="tips">ダイエット中のマクドナルドの食べ方 5つのコツ</SectionHeading>

        <p className="mb-6">
          メニュー選びだけでなく、注文の仕方やサイドメニューの選択でもカロリーは大きく変わります。以下の5つのコツを押さえておきましょう。
        </p>

        <NumberedList
          items={[
            {
              title: "セットではなく単品で注文",
              body: "バリューセットにするとポテト（M: 409kcal）とドリンクが追加され、簡単に800kcalを超えます。バーガー単品で注文するのがダイエットの基本です。どうしてもサイドが欲しい場合は、サイドサラダ（10kcal）に変更しましょう。",
            },
            {
              title: "ポテトをサイドサラダに変更",
              body: "どうしてもセットで注文したい場合は、ポテトをサイドサラダ（10kcal）に変更しましょう。約400kcalのカロリーカットになります。ドレッシングは低カロリータイプを選ぶのがポイント。",
            },
            {
              title: "ドリンクはお茶・ブラックコーヒー",
              body: "コカ・コーラMサイズは145kcal。爽健美茶やブラックコーヒー（約6kcal）に変えるだけで大幅にカロリーダウンできます。「飲み物で太る」のは最もムダなカロリー摂取です。",
            },
            {
              title: "チキン系バーガーを活用",
              body: "チキン系バーガーはビーフ系に比べて脂質が低い傾向があります。ただし、チキンフィレオは揚げ物なので479kcalと高め。マックチキン®（383kcal）の方がおすすめです。",
            },
            {
              title: "朝マックは意外と低カロリー",
              body: "エッグマックマフィン（310kcal）やソーセージエッグマフィン（401kcal）など、朝マックメニューはタンパク質も豊富で栄養バランスが良好。朝食をマクドナルドで済ませるのも賢い選択です。",
            },
          ]}
        />

        {/* Section 5: PFCバランス */}
        <SectionHeading id="pfc">PFCバランスで選ぶマクドナルドのメニュー</SectionHeading>

        <p className="mb-6">
          カロリーだけでなく、<Marker>PFC（タンパク質・脂質・炭水化物）のバランス</Marker>を意識すると、より効果的なダイエットが可能です。目的別に最適なメニューを紹介します。
        </p>

        <SubSectionHeading>タンパク質重視なら：ダブルチーズバーガー</SubSectionHeading>

        <NutritionCard
          name="ダブルチーズバーガー"
          chain="マクドナルド"
          calories={459}
          protein={26.4}
          fat={25.1}
          carbs={31.8}
          price={480}
          recommended
        />

        <p className="mb-8 mt-4">
          パティ2枚で<Marker color="blue">タンパク質26.4g</Marker>。筋トレ後の食事として優秀です。459kcalとカロリーはやや高めですが、1食あたりのタンパク質摂取量としては十分。タンパク質1gあたり約18円というコスパの良さも魅力です。
        </p>

        <SubSectionHeading>脂質控えめなら：ハンバーガー</SubSectionHeading>

        <NutritionCard
          name="ハンバーガー"
          chain="マクドナルド"
          calories={259}
          protein={13.0}
          fat={9.5}
          carbs={30.3}
          price={190}
          recommended
        />

        <p className="mb-8 mt-4">
          <Marker color="green">脂質わずか9.5gはマクドナルドのバーガーで最少</Marker>。ローファットダイエット中の方に最適です。190円という価格の安さも、日常的に利用しやすいポイントです。
        </p>

        {/* Section 6: おすすめ組み合わせ */}
        <SectionHeading id="combos">おすすめの組み合わせ3パターン</SectionHeading>

        <p className="mb-6">
          バーガー単品では満足できないという方のために、<Marker>カロリーを抑えつつ満足感のある組み合わせ</Marker>を3パターン紹介します。
        </p>

        <ComparisonTable
          headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
          rows={[
            ["ダイエット向け", "ハンバーガー + サイドサラダ + 爽健美茶", "269 kcal", "P 13.6g"],
            ["高タンパク", "ダブチ + サイドサラダ + ブラックコーヒー", "475 kcal", "P 27.9g"],
            ["朝マック", "エッグマックマフィン + ブラックコーヒー", "315 kcal", "P 18.6g"],
          ]}
          bestRowIndex={0}
        />

        <SubSectionHeading>Pattern 1：ダイエット向けセット（269kcal）</SubSectionHeading>
        <p className="mb-6">
          ハンバーガー + サイドサラダ + 爽健美茶の組み合わせ。<Marker>合計わずか269kcal</Marker>で、最もカロリーを抑えたい日に最適。サラダのドレッシングは低カロリータイプを選びましょう。価格も400円以下で収まります。
        </p>

        <SubSectionHeading>Pattern 2：高タンパクセット（469kcal）</SubSectionHeading>
        <p className="mb-6">
          ダブルチーズバーガー + サイドサラダ + ブラックコーヒー。筋トレ後のタンパク質補給に最適で、<Marker color="blue">P27.9gでしっかりタンパク質を摂取</Marker>できます。469kcalなので、1日のカロリー管理もしやすい範囲です。
        </p>

        <SubSectionHeading>Pattern 3：朝マックおすすめ（315kcal）</SubSectionHeading>
        <p className="mb-8">
          エッグマックマフィン + ブラックコーヒーのシンプルな組み合わせ。朝マックで最も栄養バランスが良く、<Marker color="green">315kcalで高タンパク18.6g</Marker>。忙しい朝でも手軽に栄養を摂れるのが嬉しいポイントです。
        </p>

        <ArticleImage src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop" alt="スマートフォンで食事の栄養情報を確認している様子" />

        <AffiliateProductGrid
          title="ダイエットの土台を作るおすすめアイテム"
          productIds={["tanita-scale", "ultora-whey", "base-food-bread", "myprotein-impact"]}
        />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          マクドナルドはダイエット中でも工夫次第で十分に楽しめます。最後にこの記事のポイントを整理しました。
        </p>

        <ArticleSummary
          points={[
            "最も低カロリーなバーガーはハンバーガー単品の259kcal。ダイエット中は400kcal以下のメニューを選ぼう",
            "セットにすると約550kcal上乗せされる。単品注文＋お茶/ブラックコーヒーがダイエットの鉄則",
            "ポテトをサイドサラダ（10kcal）に変更するだけで約400kcalカット可能",
            "エグチ（22.4g）やダブルチーズバーガー（26.4g）など、タンパク質20g以上のメニューも豊富",
            "朝マックのエッグマックマフィンは310kcal × P18.6gで栄養バランスがマクドナルドで最も優秀",
          ]}
        />

        {/* FAQ Section (People Also Ask 対策 + FAQPage JSON-LD) */}
        <FAQSection
          slug="mcdonalds-diet"
          items={[
            {
              q: "マクドナルドで一番カロリーが低いメニューは何ですか？",
              a: "バーガー類で最も低カロリーなのはハンバーガー単品（259kcal、P13.0g/F9.5g/C30.3g）です。次いでチーズバーガーとエッグマックマフィンが310kcalで並びます。サイドメニューを含めるとサイドサラダ（10kcal）が最低カロリーです。",
            },
            {
              q: "マックでダイエット中におすすめのセットは？",
              a: "ハンバーガー単品 + サイドサラダ + 爽健美茶の組み合わせで合計269kcalに抑えられます。タンパク質を多く摂りたい場合はダブルチーズバーガー + サイドサラダ + ブラックコーヒーで469kcal・P27.9gが理想的です。",
            },
            {
              q: "ビッグマックのカロリーとPFCを教えてください",
              a: "ビッグマック®のカロリーは525kcal、タンパク質26.1g、脂質28.0g、炭水化物42.1gです（2026年5月時点のマクドナルド公式栄養情報）。脂質が高めなので、ダイエット中は週1〜2回までに留めるのがおすすめです。",
            },
            {
              q: "朝マックはダイエット中に食べていいですか？",
              a: "朝マックはむしろ積極的に活用すべきです。エッグマックマフィン（310kcal、P18.6g）は通常メニューよりPFCバランスが良く、ダイエット中の朝食として優秀。ベーコンエッグマックサンド（370kcal）やソーセージエッグマフィン（401kcal）もタンパク質が豊富です。",
            },
            {
              q: "マックフライポテトはダイエット中NGですか？",
              a: "ポテトM（409kcal）はタンパク質わずか5.5gに対し脂質19.8gと栄養バランスが悪く、ダイエット中は避けたい代表メニューです。どうしても食べたい場合はSサイズ（224kcal）に留め、その分バーガーをハンバーガー単品に変更してトータルでカロリーを抑えましょう。",
            },
            {
              q: "マックのドリンクで一番太らないのは？",
              a: "ブラックコーヒー（約6kcal）と爽健美茶（0kcal）がほぼゼロカロリーで最もおすすめです。コカ・コーラMサイズ（145kcal）の代わりにこれらを選ぶだけで、1食あたり約145kcalのカットになります。シェイクやマックフィズなどの甘いドリンクは300kcal前後あるため要注意。",
            },
            {
              q: "チキン系バーガーとビーフ系バーガーはどちらが低カロリー？",
              a: "一概には言えませんが、マックチキン®（383kcal）はビーフ系のダブルチーズバーガー（459kcal）より低カロリーです。ただしチキンフィレオは揚げ物で479kcalと高め。揚げているか焼いているかが重要です。",
            },
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。最新の情報は<a href="https://www.mcdonalds.co.jp/quality/allergy_Nutrition/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">マクドナルド公式サイト</a>でご確認ください。
        </p>

        {/* Author Bio (E-E-A-T) */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-05-12", note: "全メニュー栄養データを2026年5月時点の公式情報で更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="mcdonalds-diet" />

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
