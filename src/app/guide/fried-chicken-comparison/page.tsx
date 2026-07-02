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
  CompareBar,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  MenuPhoto,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "フライドチキンのカロリー比較｜ケンタッキー・マック・コンビニチキンを徹底比較【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/fried-chicken-comparison" },
  description:
    "ケンタッキー・マクドナルド・モスバーガー・バーガーキングとコンビニ3社（ファミチキ・からあげクン・スパイスチキン）のフライドチキンをカロリー・PFCの実データで横断比較。標準サイズで最大67kcal差、タンパク質は約1.9倍差。太りにくいチキンの選び方がわかります。",
  keywords: [
    "フライドチキン カロリー 比較",
    "ファミチキ カロリー",
    "からあげクン カロリー",
    "ケンタッキー オリジナルチキン カロリー",
    "コンビニチキン 高タンパク",
    "フライドチキン タンパク質",
  ],
  openGraph: {
    title: "フライドチキンのカロリー比較｜ケンタッキー・マック・コンビニチキンを徹底比較",
    description:
      "ケンタッキー・マック・モス・バーキンとコンビニ3社のチキンをPFC実データで横断比較。標準サイズで最大67kcal差、タンパク質は約1.9倍差。",
    url: "https://www.tabenavi.jp/guide/fried-chicken-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "フライドチキンのカロリー比較｜ケンタッキー・マック・コンビニチキンを徹底比較",
  description:
    "ケンタッキー・マクドナルド・モスバーガー・バーガーキングとコンビニ3社のフライドチキンをカロリー・PFCの実データで横断比較。太りにくいチキンの選び方を解説。",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/fried-chicken-comparison",
};

const tocItems = [
  { id: "standard-comparison", label: "7チェーンの代表チキンを横断比較" },
  { id: "protein-efficiency", label: "タンパク質効率ランキング（100kcalあたり）" },
  { id: "fast-food", label: "ファストフード4社のチキンを深掘り" },
  { id: "conveni", label: "コンビニ3社ホットスナック対決" },
  { id: "diet-ranking", label: "ダイエット向きチキンランキング" },
  { id: "high-protein", label: "筋トレ向き・高タンパクチキン" },
  { id: "fat-trap", label: "脂質の落とし穴と太りにくい食べ方" },
  { id: "summary", label: "まとめ" },
];

export default function FriedChickenComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="フライドチキン7チェーン カロリー比較"
        subtitle="ケンタッキー・マック・モス・バーキン＋コンビニ3社のPFC実データで太りにくいチキンがわかる【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=400&fit=crop"
        breadcrumb="フライドチキン比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="fried-chicken-comparison">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年7月2日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="フライドチキンで一番カロリーが低いのは？高タンパクなのはどれ？"
          answer={
            <>
              各社の代表チキン（標準サイズ・単品）では、<strong>最も低カロリーなのはモスバーガーのチキンナゲット 5コ入り（195kcal）</strong>、次いでセブンイレブンのスパイスチキン（200kcal）。最重量のマクドナルドのチキンマックナゲット 5ピース（262kcal）とは<strong>最大67kcalの差</strong>があります。高タンパクで選ぶなら<strong>バーガーキングのアメリカンスモーキーチキン 4ピース（220kcal/P23.8g）</strong>が7チェーン中トップ。カロリー100kcalあたりのタンパク質効率でも10.8gで首位、僅差の2位が<strong>ケンタッキーの骨なしケンタッキー（191kcal/P20.3g/F8.5g）</strong>です。一方、ファミチキ（252kcal/P12.7g）やからあげクン（226kcal/P14.4g）は脂質がカロリーの5〜6割を占めるため、頻度と組み合わせの工夫がポイントになります。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどフライドチキンが食べたい」——そんなとき、どこで買うかで数字は大きく変わります。実は、各社の代表チキンを標準サイズ（単品）でそろえて比べると、<Marker>カロリーは195〜262kcalで最大67kcal差、タンパク質は12.7〜23.8gと約1.9倍もの開き</Marker>があります。
        </p>
        <p className="mb-4">
          この記事では、ケンタッキー・マクドナルド・モスバーガー・バーガーキングのファストフード4社と、セブンイレブン・ローソン・ファミリーマートのコンビニ3社、<Marker color="blue">計7チェーンの公式栄養データ</Marker>を横断比較。単純なカロリーだけでなく、「100kcalあたりのタンパク質効率」という軸でダイエット向き・筋トレ向きの「正解」を数字で示します。
        </p>
        <p className="mb-8">
          ファストフードとコンビニホットスナックを同じ土俵で比べた記事は意外と少ないので、「ファミチキとオリジナルチキン、どっちにする？」で迷ったときの判断材料にしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="fried-chicken-comparison-fried-chicken" genre="fried-chicken" />

        {/* Section 1: 7チェーン横断比較 */}
        <section className="mb-16">
          <SectionHeading id="standard-comparison">7チェーンの代表チキンを横断比較（標準サイズ・単品）</SectionHeading>

          <p className="mb-4">
            まずは各チェーンの「顔」となるフライドチキンを、<Marker>標準サイズ・単品</Marker>でそろえて比較します。ナゲット類とからあげクンは5個入り、アメリカンスモーキーチキンは4ピース、その他は1個（1ピース）あたりの数値です。
          </p>

          <ComparisonTable
            headers={["チェーン・商品", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["チキンナゲット 5コ入り（モス）", "195 kcal", "14.8g", "10.2g", "10.9g"],
              ["スパイスチキン（セブン）", "200 kcal", "14.2g", "11.0g", "11.2g"],
              ["オリジナルチキン（ケンタッキー）", "218 kcal", "16.5g", "12.8g", "9.1g"],
              ["アメリカンスモーキーチキン 4ピース（バーキン）", "220 kcal", "23.8g", "13.0g", "2.0g"],
              ["からあげクン レギュラー（ローソン）", "226 kcal", "14.4g", "15.4g", "7.8g"],
              ["ファミチキ 骨なし（ファミマ）", "252 kcal", "12.7g", "15.7g", "14.8g"],
              ["チキンマックナゲット 5ピース（マック）", "262 kcal", "15.3g", "15.9g", "14.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※大盛・BOX・パック（ナゲット15ピース、モスチキンパック、からあげクンBOX等）は標準サイズと分けて後述します。栄養成分は各社公式サイトの情報をもとに記載。
          </p>

          <p className="mb-4">
            カロリー最少は<Marker>モスのチキンナゲット 5コ入り（195kcal）</Marker>で、セブンのスパイスチキン（200kcal）が僅差の2位。一方、タンパク質に注目すると景色が変わり、<Marker color="blue">バーガーキングのアメリカンスモーキーチキン 4ピースが23.8gで圧倒的トップ</Marker>。炭水化物もわずか2.0gで、7チェーンの代表チキンの中では別格の数値です。
          </p>

          <TipBox title="「低カロリー」と「太りにくい」は別物">
            <p>フライドチキンは総じて脂質が高く、同じ200kcal台でも中身は大きく違います。たとえば<Marker>からあげクンは脂質15.4g（カロリーの約6割が脂質由来）</Marker>、対してオリジナルチキンは脂質12.8g・タンパク質16.5g。カロリーの数字だけでなく、<Marker color="blue">タンパク質と脂質のバランス</Marker>まで見るのがフライドチキン選びのコツです。</p>
          </TipBox>
        </section>

        {/* Section 2: タンパク質効率 */}
        <section className="mb-16">
          <SectionHeading id="protein-efficiency">タンパク質効率ランキング（100kcalあたりのタンパク質）</SectionHeading>

          <p className="mb-4">
            ダイエットや筋トレでは「同じカロリーでどれだけタンパク質が摂れるか」が重要です。そこで、<Marker>100kcalあたりのタンパク質量（g）</Marker>で7チェーンの主要チキンを並べ替えました。
          </p>

          <CompareBar
            title="100kcalあたりのタンパク質量（多いほど効率的）"
            metric="protein"
            unit="g"
            sort="desc"
            highlightTop={2}
            items={[
              { name: "アメリカンスモーキーチキン 4ピース（バーキン）", value: 10.8 },
              { name: "骨なしケンタッキー（ケンタッキー）", value: 10.6 },
              { name: "パリパリチキン（ローソン）", value: 9.4 },
              { name: "ファミマプレミアムチキン 骨付き（ファミマ）", value: 8.6 },
              { name: "オリジナルチキン（ケンタッキー）", value: 7.6 },
              { name: "チキンナゲット 5コ入り（モス）", value: 7.6 },
              { name: "スパイスチキン（セブン）", value: 7.1 },
              { name: "からあげクン レギュラー（ローソン）", value: 6.4 },
              { name: "チキンマックナゲット 5ピース（マック）", value: 5.8 },
              { name: "ファミチキ 骨なし（ファミマ）", value: 5.0 },
            ]}
            caption="※各商品の公式栄養成分（タンパク質g÷カロリー×100）から算出。小数第2位を四捨五入。"
          />

          <p className="mb-4">
            効率トップは<Marker>バーガーキングのアメリカンスモーキーチキン 4ピース（10.8g/100kcal）</Marker>、僅差の2位が<Marker color="blue">ケンタッキーの骨なしケンタッキー（10.6g/100kcal）</Marker>。この2つは、揚げ物としては例外的な高効率です。逆にファミチキ（5.0g/100kcal）やチキンマックナゲット（5.8g/100kcal）は、同じカロリーで摂れるタンパク質が首位の約半分。<Marker color="green">どれを選ぶかで「体づくりへの貢献度」が2倍以上変わる</Marker>ということです。
          </p>

          <SourceNote asOf="2026年7月" />
        </section>

        {/* Section 3: ファストフード4社 */}
        <section className="mb-16">
          <SectionHeading id="fast-food">ファストフード4社のチキンを深掘り（ケンタ・マック・モス・バーキン）</SectionHeading>

          <p className="mb-6">
            ここからはチェーン別に主要チキンメニューを見ていきます。チキン系バーガーの比較は<Link href="/guide/hamburger-comparison" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ハンバーガー5社カロリー比較</Link>で詳しく扱っているので、本記事では「チキンそのもの」を中心に比較します。
          </p>

          <SubSectionHeading>ケンタッキー：骨なしケンタッキーが隠れた優等生</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "カーネルクリスピー", calories: 119, protein: 6.8, fat: 6.6, carbs: 8.2 },
              { name: "骨なしケンタッキー", calories: 191, protein: 20.3, fat: 8.5, carbs: 8.3, highlight: true },
              { name: "オリジナルチキン", calories: 218, protein: 16.5, fat: 12.8, carbs: 9.1 },
              { name: "ナゲット 5ピース", calories: 222, protein: 13.3, fat: 13.4, carbs: 11.8 },
              { name: "レッドホットチキン", calories: 271, protein: 20.9, fat: 16.7, carbs: 9.3 },
            ]}
            caption="※1個（1ピース）あたり。ナゲットは5ピースあたり。"
          />
          <p className="mb-6">
            看板のオリジナルチキン（218kcal/P16.5g）も十分優秀ですが、注目は<Marker>骨なしケンタッキー（191kcal/P20.3g/F8.5g）</Marker>。脂質由来カロリーが全体の約40%と、フライドチキンとしては突出して低脂質です。ケンタッキーで痩せたい人向けの食べ方は<Link href="/guide/kfc-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">ケンタッキーダイエットガイド</Link>で深掘りしています。
          </p>

          <SubSectionHeading>マクドナルド：ナゲットは5ピースまでが無難</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "チキンマックナゲット 5ピース", calories: 262, protein: 15.3, fat: 15.9, carbs: 14.4 },
              { name: "チキンタツタ", calories: 373, protein: 17.6, fat: 16.2, carbs: 39.9 },
              { name: "チキンマックナゲット 15ピース", calories: 786, protein: 46.0, fat: 47.8, carbs: 43.2 },
            ]}
            caption="※チキンタツタはバーガー（参考）。"
          />
          <p className="mb-6">
            チキンマックナゲット 5ピースは262kcalで、今回の7チェーン代表対決では最重量。15ピースになると786kcal・脂質47.8gと、<Marker>1食の適正量を大きく超えがち</Marker>です。シェア前提のサイズと割り切りましょう。
          </p>

          <SubSectionHeading>モスバーガー：ナゲットが7社最軽量</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "モスの菜摘 テリヤキチキン", calories: 186, protein: 15.1, fat: 10.7, carbs: 7.7 },
              { name: "チキンナゲット 5コ入り", calories: 195, protein: 14.8, fat: 10.2, carbs: 10.9, highlight: true },
              { name: "モスチキン", calories: 269, protein: 15.3, fat: 16.6, carbs: 14.7 },
            ]}
            caption="※菜摘はレタスで挟んだ揚げないメニュー（参考）。"
          />
          <p className="mb-6">
            チキンナゲット 5コ入り（195kcal/F10.2g）は<Marker>7チェーンの代表チキンで最軽量かつ最も低脂質</Marker>。骨付きのモスチキン（269kcal）とは74kcal差があるので、カロリーを抑えたい日はナゲット一択です。揚げ物自体を避けたい日は菜摘 テリヤキチキン（186kcal/P15.1g）という逃げ道もあります。
          </p>

          <SubSectionHeading>バーガーキング：スモーキーチキンがタンパク質の王者</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "スナックチキン", calories: 137, protein: 8.0, fat: 7.6, carbs: 9.2 },
              { name: "アメリカンスモーキーチキン 4ピース", calories: 220, protein: 23.8, fat: 13.0, carbs: 2.0, highlight: true },
              { name: "チキンナゲット 5ピース", calories: 228, protein: 11.2, fat: 14.5, carbs: 15.2 },
              { name: "チーズチキンナゲット 5ピース", calories: 253, protein: 13.5, fat: 14.1, carbs: 18.1 },
            ]}
          />
          <p className="mb-4">
            アメリカンスモーキーチキン 4ピースは<Marker>220kcalでタンパク質23.8g・炭水化物2.0g</Marker>。今回比較した全チキンの中で唯一「高タンパク×低糖質」を両立しており、糖質を抑えたい日の最有力です。同じバーキンでもナゲット系はP11〜13g台なので、選ぶなら断然スモーキーチキンです。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="7チェーンのチキンを栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: コンビニ3社 */}
        <section className="mb-16">
          <SectionHeading id="conveni">コンビニ3社ホットスナック対決（セブン・ローソン・ファミマ）</SectionHeading>

          <p className="mb-4">
            レジ横のホットスナックは「ついで買い」しやすいぶん、数字を知らないと無自覚にカロリーが積み上がります。3社の主要チキンを一覧で比較しました。
          </p>

          <NutritionTable
            items={[
              { name: "パリパリチキン（ローソン）", calories: 180, protein: 16.9, fat: 11.3, carbs: 2.8, highlight: true },
              { name: "クリスピーチキン プレーン（ファミマ）", calories: 183, protein: 12.2, fat: 9.6, carbs: 11.9 },
              { name: "スパイスチキン（セブン）", calories: 200, protein: 14.2, fat: 11.0, carbs: 11.2, highlight: true },
              { name: "スパイスチキンレッド（セブン）", calories: 225, protein: 14.4, fat: 13.5, carbs: 11.6 },
              { name: "からあげクン レギュラー（ローソン）", calories: 226, protein: 14.4, fat: 15.4, carbs: 7.8 },
              { name: "ファミマプレミアムチキン 骨付き（ファミマ）", calories: 242, protein: 20.7, fat: 12.4, carbs: 11.9, highlight: true },
              { name: "黄金チキン 骨つき（ローソン）", calories: 248, protein: 13.6, fat: 14.2, carbs: 17.0 },
              { name: "ファミチキ 骨なし（ファミマ）", calories: 252, protein: 12.7, fat: 15.7, carbs: 14.8 },
              { name: "ファミチキ レッド（ファミマ）", calories: 253, protein: 14.9, fat: 14.7, carbs: 15.5 },
              { name: "Lチキ レギュラー（ローソン）", calories: 255, protein: 13.7, fat: 16.6, carbs: 12.8 },
              { name: "若鶏のからあげ もも 5個入り（セブン）", calories: 291, protein: 18.5, fat: 15.8, carbs: 18.9 },
            ]}
            caption="※からあげクン・若鶏のからあげは5個入り、その他は1個あたり。各社公式栄養成分より。"
          />

          <p className="mb-4">
            コンビニ最軽量は<Marker>ローソンのパリパリチキン（180kcal/P16.9g/C2.8g）</Marker>で、低糖質さも際立ちます。タンパク質の絶対量なら<Marker color="blue">ファミマプレミアムチキン 骨付き（242kcal/P20.7g）</Marker>が3社トップ。定番のファミチキ（252kcal/P12.7g）は、実はコンビニチキンの中では高カロリー寄り・低タンパク寄りという立ち位置です。
          </p>

          <TipBox title="セブンで選ぶならスパイスチキン">
            <p>セブンイレブンのフライドチキン系では<Marker>スパイスチキン（200kcal/P14.2g/F11.0g）</Marker>が軽さとタンパク質のバランスで優秀。同じ「チキンを買う」でも、からあげクンやファミチキから置き換えるだけで脂質を3〜5g減らせます。コンビニで高タンパクな食品を体系的に探すなら<Link href="/guide/conveni-protein" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">コンビニ高タンパク質ガイド</Link>もあわせてどうぞ。</p>
          </TipBox>
        </section>

        {/* Section 5: ダイエット向きランキング */}
        <section className="mb-16">
          <SectionHeading id="diet-ranking">ダイエット向きフライドチキンランキング（7社横断）</SectionHeading>

          <p className="mb-6">
            カロリー・タンパク質・脂質のバランスから、「ダイエット中に選ぶ価値が高い」チキンを7チェーン横断で厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="骨なしケンタッキー（ケンタッキー）"
            subtitle="脂質8.5gはフライドチキンとして別格の低さ"
            calories={191}
            protein={20.3}
            fat={8.5}
            carbs={8.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              191kcalでタンパク質20.3g・脂質8.5gという、<Marker>7社横断のPFCバランス王者</Marker>。脂質由来カロリーは全体の約40%と、揚げ物でありながらバランスが取れています。価格も270円と手頃で、「フライドチキンを食べながらカロリーコントロールしたい」日の第一候補です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="アメリカンスモーキーチキン 4ピース（バーガーキング）"
            subtitle="タンパク質23.8g・炭水化物2.0gの高タンパク低糖質"
            calories={220}
            protein={23.8}
            fat={13.0}
            carbs={2.0}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">タンパク質量・タンパク質効率ともに7社トップ</Marker>。炭水化物2.0gなので糖質を抑えたい日にも使えます。4ピース入りで食べごたえがあり、「量を食べたいけど数字は守りたい」を両立できる稀有な選択肢です。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="パリパリチキン（ローソン）"
            subtitle="コンビニ最軽量180kcal・炭水化物2.8g"
            calories={180}
            protein={16.9}
            fat={11.3}
            carbs={2.8}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">今回比較した主要チキンの中で最軽量（180kcal）</Marker>ながらタンパク質16.9g。レジ横で買える手軽さを考えると、日常使いのしやすさはナンバーワンです。小腹満たしをポテトチップスからこれに置き換えるだけでも、タンパク質摂取の底上げが期待できます。
            </p>
          </RankingCard>

          <p className="mb-4">
            次点は<Marker>モスのチキンナゲット 5コ入り（195kcal/F10.2g）</Marker>と<Marker>セブンのスパイスチキン（200kcal/P14.2g）</Marker>。どちらも200kcal以下・脂質11g以下に収まっており、立地や気分で使い分ければ十分「当たり」の選択です。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&h=400&fit=crop"
          alt="トレーニングする人のイメージ"
        />

        {/* Section 6: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">筋トレ向き・高タンパクチキンの選び方</SectionHeading>

          <p className="mb-4">
            トレーニング後にしっかりタンパク質を摂りたい日は、<Marker>絶対量と効率の両方</Marker>で選びます。7チェーン横断の高タンパクチキンがこちら。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "チキンマックナゲット 15ピース（マック）", calories: 786, protein: 46.0, fat: 47.8, carbs: 43.2 },
              { name: "ダブルチキンフィレバーガー（ケンタ）", calories: 615, protein: 44.6, fat: 30.7, carbs: 40.0 },
              { name: "アメリカンスモーキーチキン 4ピース（バーキン）", calories: 220, protein: 23.8, fat: 13.0, carbs: 2.0, highlight: true },
              { name: "レッドホットチキン（ケンタ）", calories: 271, protein: 20.9, fat: 16.7, carbs: 9.3 },
              { name: "ファミマプレミアムチキン 骨付き（ファミマ）", calories: 242, protein: 20.7, fat: 12.4, carbs: 11.9, highlight: true },
              { name: "骨なしケンタッキー（ケンタ）", calories: 191, protein: 20.3, fat: 8.5, carbs: 8.3, highlight: true },
              { name: "若鶏のからあげ もも 5個入り（セブン）", calories: 291, protein: 18.5, fat: 15.8, carbs: 18.9 },
              { name: "パリパリチキン（ローソン）", calories: 180, protein: 16.9, fat: 11.3, carbs: 2.8, highlight: true },
            ]}
            caption="※タンパク質の多い順。ダブルチキンフィレバーガーはバーガー、ナゲット15ピースはシェアサイズ（参考）。"
          />

          <p className="mb-4">
            絶対量ならマックのナゲット 15ピース（P46.0g）やケンタのダブルチキンフィレバーガー（P44.6g）が目を引きますが、脂質も30〜48gと重量級。<Marker color="blue">「220kcal前後でタンパク質20g超」のスモーキーチキン・プレミアムチキン・骨なしケンタッキーの3つ</Marker>を基本の選択肢にして、量が欲しい日だけ大物を選ぶのが現実的です。
          </p>
          <p className="mb-4">
            なお、外食チェーン全体から「タンパク質20g以上×500kcal以下」のメニューを探すなら、<Link href="/guide/high-protein-chain-database" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">高タンパク外食チェーンデータベース</Link>に7チェーン以外も含めた一覧をまとめています。
          </p>
        </section>

        {/* Section 7: 脂質の落とし穴 */}
        <section className="mb-16">
          <SectionHeading id="fat-trap">フライドチキンの脂質の落とし穴と太りにくい食べ方</SectionHeading>

          <p className="mb-4">
            フライドチキンの弱点はやはり脂質です。脂質は1gあたり9kcalとタンパク質・炭水化物（各4kcal）の2倍以上あるため、<Marker>「そこそこのカロリー」に見えても中身の大半が脂質</Marker>というケースが少なくありません。
          </p>

          <WarningBox title="脂質がカロリーの5割を超える定番チキン">
            <ul className="space-y-2">
              <li><span className="font-bold">からあげクン レギュラー（ローソン）</span> ─ 脂質15.4g×9kcal＝約139kcalで、226kcal中<span className="font-bold">約6割が脂質由来</span>。</li>
              <li><span className="font-bold">ファミチキ 骨なし（ファミマ）</span> ─ 脂質15.7g。252kcalの約56%が脂質由来です。</li>
              <li><span className="font-bold">チキンマックナゲット 5ピース（マック）</span> ─ 脂質15.9g。ソースを付ける前の時点で約55%が脂質由来。</li>
              <li><span className="font-bold">チキン系のお弁当</span> ─ セブンのやみつきジューシー唐揚げ弁当は707kcal、ローソンの醤油が効いた鶏竜田揚げ弁当は802kcal、たっぷりタルタルのチキン南蛮弁当は951kcal。<span className="font-bold">「チキン単品」と「チキン弁当」はまったく別物</span>です。</li>
            </ul>
          </WarningBox>

          <p className="mb-6">
            とはいえ、フライドチキンを我慢し続ける必要はありません。次の5つを押さえるだけで、数字はかなりコントロールしやすくなります。
          </p>

          <NumberedList
            items={[
              {
                title: "「単品＋ゼロカロリードリンク」で完結させる",
                body: "太る原因の多くはチキン本体ではなく組み合わせです。菓子パンや麺類を足すと一気に800kcal超えも。単品＋お茶やゼロカロリー炭酸なら、ファミチキでも252kcalで収まります。",
              },
              {
                title: "迷ったら「骨なしケンタッキー型」を選ぶ",
                body: "骨なしケンタッキー（191kcal/P20.3g/F8.5g）、アメリカンスモーキーチキン（220kcal/P23.8g）、パリパリチキン（180kcal/P16.9g）のような高タンパク・低脂質寄りの選択肢を「定番」にすると、同じ満足感でも脂質を1食あたり最大7g前後減らせます（例: ファミチキ15.7g→骨なしケンタッキー8.5g）。",
              },
              {
                title: "揚げ物は1日1回までを目安にする",
                body: "フライドチキンは1個で脂質10〜16g前後。厚生労働省「日本人の食事摂取基準」では脂質の目標は総エネルギーの20〜30%とされており、揚げ物が1日2回になると超過しやすくなります。",
              },
              {
                title: "ソース・マヨネーズを「足さない」",
                body: "チキン本体の数値は把握していても、ソース類は見落としがち。ケチャップは少量でも糖質が加わり、マヨネーズ系ソースは脂質がさらに上乗せされます。まずはそのまま食べてみるのがおすすめです。",
              },
              {
                title: "食べたら記録して1日全体で調整する",
                body: "「思ったより脂質が多かった」を防ぐ最善策は記録です。本記事の数値は各社公式データに基づいているので、食べたチキンをそのまま記録し、他の食事でタンパク質を足しつつ脂質を抑えれば帳尻を合わせやすくなります。",
              },
            ]}
          />
        </section>

        {/* チェーン別ハブへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>7チェーンの全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/kfc" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍗 ケンタッキー</Link>
            <Link href="/chains/mcdonalds" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 マクドナルド</Link>
            <Link href="/chains/mos" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 モスバーガー</Link>
            <Link href="/chains/burgerking" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍔 バーガーキング</Link>
            <Link href="/chains/seven-eleven" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 セブンイレブン</Link>
            <Link href="/chains/lawson" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 ローソン</Link>
            <Link href="/chains/familymart" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 ファミリーマート</Link>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            フライドチキンは「どのチェーンで、どれを選ぶか」で数字が大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "代表チキン（標準サイズ・単品）の最低カロリーはモスのチキンナゲット 5コ入り（195kcal）、次点セブンのスパイスチキン（200kcal）",
              "高タンパク王はバーキンのアメリカンスモーキーチキン 4ピース（220kcal/P23.8g/C2.0g）",
              "タンパク質効率（100kcalあたり）はスモーキーチキン10.8gと骨なしケンタッキー10.6gの2強。ファミチキ（5.0g）とは2倍以上の差",
              "コンビニ最軽量はローソンのパリパリチキン（180kcal/P16.9g/C2.8g）。ファミチキ（252kcal/P12.7g）は実は高カロリー寄り",
              "からあげクン・ファミチキ等は脂質がカロリーの5〜6割。単品＋ゼロカロリードリンクで完結させ、1日全体で脂質を調整するのが太りにくい食べ方",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <ServiceOffers tag="protein" />

        {/* FAQ Section */}
        <FAQSection
          slug="fried-chicken-comparison"
          items={[
            {
              q: "フライドチキンで一番カロリーが低いのはどれですか？",
              a: "7チェーンの代表チキン（標準サイズ・単品）では、モスバーガーのチキンナゲット 5コ入り（195kcal）が最も低く、セブンイレブンのスパイスチキン（200kcal）、ケンタッキーのオリジナルチキン（218kcal）と続きます。主要チキン全体ではローソンのパリパリチキン（180kcal）が最軽量です（2026年7月時点・各社公式栄養データ）。",
            },
            {
              q: "一番高タンパクなフライドチキンはどれですか？",
              a: "標準サイズではバーガーキングのアメリカンスモーキーチキン 4ピース（タンパク質23.8g/220kcal）がトップです。絶対量ではチキンマックナゲット 15ピース（46.0g/786kcal）やケンタッキーのダブルチキンフィレバーガー（44.6g/615kcal）が上回りますが、脂質も30g超と重いため、日常的にはスモーキーチキンや骨なしケンタッキー（20.3g/191kcal）が現実的な選択肢です。",
            },
            {
              q: "ケンタッキーのオリジナルチキンは太りますか？",
              a: "オリジナルチキンは1ピース218kcal・タンパク質16.5g・脂質12.8gで、フライドチキンとしては標準的な数値です。1〜2ピースを単品で食べる分には1食のカロリー内に収めやすく、食べる量と1日全体のバランス次第でカロリーコントロールは十分可能です。さらに数字を抑えたい場合は骨なしケンタッキー（191kcal/脂質8.5g）が選択肢になります。",
            },
            {
              q: "ファミチキとからあげクンはどちらがダイエット向きですか？",
              a: "数値上はからあげクン レギュラー（226kcal/タンパク質14.4g/炭水化物7.8g）の方が、ファミチキ 骨なし（252kcal/タンパク質12.7g/炭水化物14.8g）よりカロリーが26kcal低く、タンパク質も多めです。ただしどちらも脂質15g台でカロリーの5〜6割が脂質由来のため、より数字を重視するならローソンのパリパリチキン（180kcal/タンパク質16.9g）が有力です。",
            },
            {
              q: "コンビニチキンで最も高タンパクなのはどれですか？",
              a: "ファミリーマートのファミマプレミアムチキン 骨付き（タンパク質20.7g/242kcal）がコンビニ3社の主要チキンでトップです。タンパク質効率まで含めるとローソンのパリパリチキン（16.9g/180kcal・100kcalあたり9.4g）も優秀です。セブンイレブンではスパイスチキン（14.2g/200kcal）がバランスの良い選択肢です。",
            },
            {
              q: "ダイエット中にフライドチキンを食べても大丈夫ですか？",
              a: "選び方と頻度次第で取り入れやすくなります。骨なしケンタッキー（191kcal/脂質8.5g）やアメリカンスモーキーチキン（220kcal/炭水化物2.0g）のような高タンパク寄りの商品を単品で選び、ドリンクをゼロカロリーにすれば1食の枠内に収めやすくなります。一方、揚げ物は脂質が多いため1日1回までを目安にし、チキン弁当（700〜950kcal級）との混同には注意が必要です。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="フライドチキン7社をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-07-02", note: "初稿公開（7チェーンの公式栄養データに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="fried-chicken-comparison" />

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
