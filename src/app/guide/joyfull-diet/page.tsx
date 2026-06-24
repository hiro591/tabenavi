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
import { AffiliateDisclosure } from "@/components/guide/AffiliateComponents";
import { ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "ジョイフルのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/joyfull-diet" },
  description:
    "ファミレス・ジョイフルでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。高タンパクなグリル・低カロリーなサラダや雑炊、避けたい高カロリー定食、太りにくい食べ方を公式栄養データで紹介します。",
  keywords: [
    "ジョイフル カロリー",
    "ジョイフル ダイエット",
    "ジョイフル 低カロリー",
    "ジョイフル 高タンパク",
    "ジョイフル 太りにくい",
    "ファミレス ダイエット",
  ],
  openGraph: {
    title: "ジョイフルのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方",
    description:
      "ファミレス・ジョイフルでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。高タンパク・低カロリーのおすすめ、避けたい高カロリーメニュー、太りにくい食べ方を紹介します。",
    url: "https://www.tabenavi.jp/guide/joyfull-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ジョイフルのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方",
  description:
    "ファミレス・ジョイフルでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。高タンパク・低カロリーのおすすめ、避けたい高カロリーメニュー、太りにくい食べ方を紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/joyfull-diet",
};

const tocItems = [
  { id: "conclusion", label: "結論：ジョイフルで太りにくい選び方" },
  { id: "calorie-overview", label: "カロリーの全体像と注意点" },
  { id: "high-protein", label: "高タンパクなおすすめメニュー" },
  { id: "low-calorie", label: "低カロリーで満足できるメニュー" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "purpose", label: "目的別の組み合わせ早見表" },
  { id: "summary", label: "まとめ" },
];

export default function JoyfullDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ジョイフルでダイエット"
        subtitle="ファミレスで太りにくいメニューの選び方とカロリーガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=400&fit=crop"
        breadcrumb="ジョイフルダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="joyfull-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question={"ジョイフルでダイエット中に選ぶべきメニューは？"}
          answer={
            <>
              ジョイフルは<strong>ハンバーグ・ステーキ・サラダ・定食・朝食まで幅広く揃うファミレス</strong>なので、選び方次第で1食のカロリーが大きく変わります。低カロリーで満足したいなら<strong>グリルチキンの冷製（212kcal／P14.3g）</strong>や<strong>彩りサラダ（112kcal）</strong>、温かい一品なら<strong>野菜たっぷりちゃんぽん（491kcal／P23.1g）</strong>が有力。タンパク質をしっかり摂りたいなら<strong>チーズたっぷりチキンイタリアンステーキ（565kcal／P38.1g）</strong>が高タンパク低糖質です。逆に倍盛りジョイフル塩唐揚げ定食（1,686kcal）など1,000kcal超の品は要注意です。
            </>
          }
        />

        {/* 導入 */}
        <p className="mb-4">
          ジョイフルは九州発の低価格ファミレスで、たべなびのデータベースには<Marker>217品</Marker>が登録されています。ハンバーグやステーキといったがっつり系から、サラダ・雑炊・朝食まで揃うため、<Marker color="blue">「ファミレス＝太る」とは限りません</Marker>。問題は、同じ店内に200kcal台の軽い一品と1,600kcal超の重量級が同居していることです。
        </p>
        <p className="mb-4">
          実際、最も軽い<Marker color="blue">彩りサラダ（112kcal）</Marker>と最も重い<Marker>倍盛りジョイフル塩唐揚げ定食（1,686kcal）</Marker>では、その差はおよそ<Marker>1,570kcal</Marker>。メニュー選びひとつで、成人女性の1日分に近いカロリーが上下します。だからこそ「何を選ぶか」を数字で知っておくことが、ジョイフルで太らないための近道です。
        </p>
        <p className="mb-8">
          この記事では、ジョイフルの公式栄養データ（たべなびDBで検証済み）をもとに、高タンパク・低カロリーのおすすめ、避けたい高カロリーメニュー、そして太りにくい食べ方のコツまでを具体的に解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="joyfull-diet-steak" genre="steak" />

        {/* Section 1: 結論 */}
        <section className="mb-16">
          <SectionHeading id="conclusion">結論：ジョイフルで太りにくいメニューの選び方</SectionHeading>

          <p className="mb-4">
            先に結論をまとめます。ジョイフルでダイエットを意識するなら、<Marker>目的に合わせて以下の3タイプから選ぶ</Marker>のが分かりやすい方法です。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "タンパク質"]}
            rows={[
              ["とにかく低カロリー", "彩りサラダ + 味噌汁", "約140 kcal", "P 3.9g"],
              ["低カロリー＋タンパク質", "グリルチキンの冷製", "212 kcal", "P 14.3g"],
              ["高タンパク・低糖質", "チーズたっぷりチキンイタリアンステーキ", "565 kcal", "P 38.1g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            ポイントは、<Marker color="blue">「サラダだけ」で済ませず、タンパク質を確保する</Marker>こと。グリルチキンの冷製（212kcal／P14.3g）は低カロリーながら鶏肉のタンパク質が摂れ、満足感と腹持ちのバランスに優れています。逆に、唐揚げ系・大盛りポテト・ハンバーグの大判メニューは脂質が非常に高く、ダイエット中は頻度を抑えたいゾーンです。
          </p>

          <TipBox title="ジョイフルならではの強み">
            <p>
              ジョイフルは<Marker>グリル（ステーキ）メニューと和定食・雑炊・サラダが充実</Marker>しているのが特徴。牛丼チェーンより「肉のタンパク質」「魚・卵のタンパク質」「野菜」を揃えやすく、外食でPFCを整えたい人に向いています。ライス（296kcal）の量を調整すれば、糖質コントロールもしやすいファミレスです。
            </p>
          </TipBox>
        </section>

        {/* Section 2: カロリーの全体像 */}
        <section className="mb-16">
          <SectionHeading id="calorie-overview">ジョイフルのカロリーの全体像と注意点</SectionHeading>

          <p className="mb-4">
            まずは「どのくらいの幅でカロリーが分布しているか」を把握しましょう。<Marker>標準的な単品・定食</Marker>を軽い順に並べると、200kcal台から1,600kcal超まで大きく開いています。
          </p>

          <NutritionTable
            caption="※標準サイズ（単品・並）で比較。倍盛り・大盛りなど極端な品は後述の章で別途注記しています。"
            items={[
              { name: "味噌汁（単品）", calories: 28, protein: 1.7, fat: 1.1, carbs: 2.9, highlight: true },
              { name: "彩りサラダ", calories: 112, protein: 2.2, fat: 5.7, carbs: 14.1, highlight: true },
              { name: "グリルチキンの冷製", calories: 212, protein: 14.3, fat: 14, carbs: 5.6, highlight: true },
              { name: "ライス（単品）", calories: 296, protein: 5.1, fat: 0.7, carbs: 64.3 },
              { name: "焼き鮭と椎茸の鰹節香る雑炊", calories: 408, protein: 23.8, fat: 8.7, carbs: 56.1, highlight: true },
              { name: "野菜たっぷりちゃんぽん（単品）", calories: 491, protein: 23.1, fat: 14.8, carbs: 68, highlight: true },
              { name: "プライムサイコロペッパーステーキ", calories: 513, protein: 29.1, fat: 32.4, carbs: 23 },
              { name: "ねぎトロ丼", calories: 526, protein: 23, fat: 12.3, carbs: 77.4 },
              { name: "チーズたっぷりチキンイタリアンステーキ", calories: 565, protein: 38.1, fat: 37, carbs: 16.6 },
              { name: "和風ハンバーグ", calories: 581, protein: 24.3, fat: 40.4, carbs: 26.3 },
              { name: "チーズハンバーグ", calories: 648, protein: 29.4, fat: 45.4, carbs: 26.8 },
              { name: "ジョイフル塩唐揚げ定食", calories: 1033, protein: 37.7, fat: 52.4, carbs: 96.4 },
            ]}
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            表からわかるのは、<Marker color="blue">タンパク質を取りやすいメニューほどカロリー差が読みにくい</Marker>ということ。たとえばグリルチキンの冷製（212kcal／P14.3g）とチーズハンバーグ（648kcal／P29.4g）は、どちらもタンパク源ですがカロリーは3倍以上違います。脂質（F）の差が大きく効いているためです。
          </p>

          <WarningBox title="カロリーが跳ね上がる3つのパターン">
            <ul className="space-y-2">
              <li><span className="font-bold">「定食」化</span> ─ 同じ唐揚げでも、ジョイフル塩唐揚げ（単品・700kcal）が定食になると1,033kcalに。ライス＋付け合わせで300kcal以上加算されます。</li>
              <li><span className="font-bold">「揚げ物」中心</span> ─ ポテトフライ（436kcal）、唐揚げ＆ソーセージ（926kcal）など、揚げ物はF（脂質）が高くカロリーが伸びます。</li>
              <li><span className="font-bold">「倍盛り・大盛り・ツイン」</span> ─ ツインハンバーグ（1,157kcal）、倍盛りジョイフル塩唐揚げ定食（1,686kcal）など、量を増やす系は別格の高カロリーです。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Mid CTA #1 */}
        <CTABanner
          title="ジョイフルのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 3: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクなおすすめメニュー</SectionHeading>

          <p className="mb-6">
            ダイエット中こそ<Marker>タンパク質をしっかり確保する</Marker>のが大切。筋肉量を保ち、満腹感も得やすくなります。ジョイフルはグリル（ステーキ）系を中心に高タンパクメニューが豊富です。タンパク質量の多い標準メニューを見てみましょう。
          </p>

          <NutritionTable
            highlightProtein
            caption="※標準サイズで比較。メガ盛り等の特大品は別記しています。"
            items={[
              { name: "チーズたっぷりチキンイタリアンステーキ", calories: 565, protein: 38.1, fat: 37, carbs: 16.6, highlight: true },
              { name: "熱を愛した秤金次の旨辛スープのスンドゥブチゲ（単品）", calories: 512, protein: 35.8, fat: 16.6, carbs: 56.1, highlight: true },
              { name: "ひとくちチキンステーキにんにく醤油", calories: 548, protein: 32.8, fat: 38.8, carbs: 14.4 },
              { name: "プライムサイコロペッパーステーキ", calories: 513, protein: 29.1, fat: 32.4, carbs: 23 },
              { name: "焼き鮭と椎茸の鰹節香る雑炊", calories: 408, protein: 23.8, fat: 8.7, carbs: 56.1, highlight: true },
              { name: "野菜たっぷりちゃんぽん（単品）", calories: 491, protein: 23.1, fat: 14.8, carbs: 68 },
              { name: "ねぎトロ丼", calories: 526, protein: 23, fat: 12.3, carbs: 77.4 },
            ]}
          />

          <p className="mb-6">
            この中から、<Marker color="green">カロリーとPFCバランスを両立した高タンパクメニュー</Marker>のベスト3を選びました。
          </p>

          <RankingCard
            rank={1}
            title="チーズたっぷりチキンイタリアンステーキ"
            subtitle="565kcal / P38.1g / F37.0g / C16.6g"
            calories={565}
            protein={38.1}
            fat={37}
            carbs={16.6}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="green">タンパク質38.1gは標準メニュー中トップクラス</Marker>。それでいて炭水化物は16.6gと低糖質で、糖質を抑えながら肉のタンパク質をしっかり摂りたい日に最適です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              脂質は37gとやや高めなので、ライスを少なめにしたり付け合わせを野菜中心にすると、よりダイエット向きの一皿になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="焼き鮭と椎茸の鰹節香る雑炊"
            subtitle="408kcal / P23.8g / F8.7g / C56.1g"
            calories={408}
            protein={23.8}
            fat={8.7}
            carbs={56.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">脂質わずか8.7gで、タンパク質23.8g</Marker>という優秀なバランス。408kcalと低めで、温かく満足感もあり、脂質を抑えたいローファット派にぴったりです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              鮭の良質なタンパク質が摂れ、雑炊なので胃にもやさしい。夜遅めの食事や、こってり系を避けたい日のメインとしておすすめです。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="野菜たっぷりちゃんぽん（単品）"
            subtitle="491kcal / P23.1g / F14.8g / C68.0g"
            calories={491}
            protein={23.1}
            fat={14.8}
            carbs={68}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>野菜が多く、1杯でタンパク質23.1g</Marker>。491kcalで野菜・タンパク質・温かい汁物を一度に摂れるため、満腹感が高くダイエット中の「物足りなさ」を解消しやすい一品です。ライスを追加せず、これ単品で完結させるのが太りにくい食べ方です。
            </p>
          </RankingCard>

          <MenuPhoto id="joyfull-diet-chicken" genre="grilled-chicken" />

          <TipBox title="さらにタンパク質を増やしたいとき">
            <p>
              ステーキやハンバーグに<Marker>トッピングメニューを足す</Marker>のも手。ひとくちチキンステーキ（2個・164kcal／P12.5g）やプライムサイコロステーキ（ハーフ・187kcal／P13.2g）は、比較的低カロリーでタンパク質を上乗せできます。単品の明太子（25kcal／P4.3g）や納豆（61kcal／P4.7g）も、低カロリーなタンパク補給に便利です。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで満足できるメニュー</SectionHeading>

          <p className="mb-6">
            「今日はとにかくカロリーを抑えたい」という日に頼れる、<Marker color="blue">300kcal前後で収まるメニュー</Marker>を紹介します。サラダ単体だと栄養もタンパク質も不足しがちなので、組み合わせ方も合わせて見ていきましょう。
          </p>

          <NutritionTable
            caption="※標準サイズで比較。"
            items={[
              { name: "味噌汁（単品）", calories: 28, protein: 1.7, fat: 1.1, carbs: 2.9 },
              { name: "明太子（単品）", calories: 25, protein: 4.3, fat: 0.8, carbs: 0.5, highlight: true },
              { name: "サウザンサラダ", calories: 62, protein: 1, fat: 4.3, carbs: 5.5 },
              { name: "目玉焼き（単品）", calories: 80, protein: 6.9, fat: 5.7, carbs: 0.2, highlight: true },
              { name: "彩りサラダ", calories: 112, protein: 2.2, fat: 5.7, carbs: 14.1 },
              { name: "イタリアンモッツァレラチーズのカプレーゼサラダ", calories: 187, protein: 8.6, fat: 12.2, carbs: 12.3 },
              { name: "グリルチキンの冷製", calories: 212, protein: 14.3, fat: 14, carbs: 5.6, highlight: true },
              { name: "豚汁（単品）", calories: 183, protein: 4.6, fat: 11.2, carbs: 16.2 },
            ]}
          />

          <p className="mb-4">
            最もおすすめは<Marker color="green">グリルチキンの冷製（212kcal／P14.3g）</Marker>。サラダ仕立てなのに鶏肉でしっかりタンパク質が摂れ、低カロリーと満足感を両立しています。「サラダだけだと午後にお腹が空く」という人に特に向いています。
          </p>

          <SubSectionHeading>低カロリーで組み立てる3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["超軽量", "彩りサラダ + 味噌汁", "約140 kcal", "P 3.9g"],
              ["低カロリー高タンパク", "グリルチキンの冷製 + 味噌汁", "約240 kcal", "P 16.0g"],
              ["朝食向き", "目玉焼き + 彩りサラダ + 味噌汁", "約220 kcal", "P 10.8g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            「超軽量」パターンは約140kcalまで抑えられますが、<Marker>タンパク質が3.9gと少ない</Marker>のが弱点。腹持ちと栄養を考えると、味噌汁＋グリルチキンの冷製で<Marker color="blue">約240kcal・P16g</Marker>に整える「低カロリー高タンパク」パターンが、ダイエット中の実用度はいちばん高い組み合わせです。
          </p>

          <TipBox title="味噌汁・サラダで満腹感を先取り">
            <p>
              食事の最初に<Marker>味噌汁（28kcal）や野菜サラダから食べる</Marker>と、満腹感を得やすく食べ過ぎ防止につながります。ジョイフルは彩りサラダ（112kcal）やサウザンサラダ（62kcal）など軽いサラダが揃うので、メインの前に1品入れるのがおすすめです。ドレッシングはかけすぎると脂質が増えるため、控えめにするのがコツです。
            </p>
          </TipBox>
        </section>

        {/* Section 5: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            ジョイフルには<Marker>1,000kcalを大きく超えるメニュー</Marker>が複数あります。知らずに注文すると、1食でダイエットの計画が崩れかねません。標準より極端に重い品を整理しました。
          </p>

          <NutritionTable
            caption="※倍盛り・ツイン・大盛りなど、量を増やした極端な品。日常使いには向きません。"
            items={[
              { name: "ツインハンバーグ", calories: 1157, protein: 52.6, fat: 81.6, carbs: 44.9 },
              { name: "どど～ん！っと大きなミックスグリル", calories: 1241, protein: 64, fat: 87.8, carbs: 39.8 },
              { name: "メガ盛りポテトフライ", calories: 1307, protein: 12.3, fat: 79.4, carbs: 135.3 },
              { name: "ロースかつの特選バラエティフライ定食", calories: 1327, protein: 43, fat: 72.2, carbs: 123.7 },
              { name: "肉増し！牛焼肉とおろし唐揚げ定食", calories: 1478, protein: 51.7, fat: 85.9, carbs: 113.3 },
              { name: "倍盛りジョイフル塩唐揚げ定食", calories: 1686, protein: 66.9, fat: 100.1, carbs: 119.2 },
            ]}
          />

          <WarningBox title="特に注意したい高カロリーメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">倍盛りジョイフル塩唐揚げ定食（1,686kcal）</span> ─ 脂質100.1g・炭水化物119.2gと突出。タンパク質は66.9g摂れますが、1食としてはカロリーオーバーになりやすい品です。</li>
              <li><span className="font-bold">メガ盛りポテトフライ（1,307kcal）</span> ─ 揚げ芋でタンパク質12.3gに対し脂質79.4g・炭水化物135.3g。栄養バランスがダイエット向きではありません。</li>
              <li><span className="font-bold">ツインハンバーグ（1,157kcal）</span> ─ ハンバーグ2枚で脂質81.6g。食べるなら和風ハンバーグ（581kcal）1枚に留めるのが無難です。</li>
              <li><span className="font-bold">唐揚げ＆ソーセージ（926kcal）・大盛りポテトフライ（871kcal）</span> ─ アペタイザーでも、揚げ物・加工肉系は脂質が高くカロリーが伸びます。シェア前提で。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらは「絶対にダメ」ではありませんが、<Marker color="blue">頻度を抑える・シェアする・ライスを抜く</Marker>といった工夫が前提です。どうしても食べたい場合は、その日の他の食事を軽めに調整しましょう。
          </p>

          <TipBox title="同じハンバーグでも選び方で約580kcal差">
            <p>
              ハンバーグ系で比べると、和風ハンバーグ（581kcal）に対しツインハンバーグは1,157kcal。<Marker>同じ「ハンバーグ」でも約580kcalの差</Marker>が生まれます。「ハンバーグを食べたい＝高カロリー確定」ではなく、サイズと枚数を選べば十分ダイエット中でも楽しめます。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">ジョイフルで太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            メニュー選びに加えて、<Marker>食べ方の工夫</Marker>でもカロリーや満足感は変わります。ジョイフルで実践しやすい5つのコツを紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "サラダ・味噌汁を先に食べる",
                body: "彩りサラダ（112kcal）や味噌汁（28kcal）を食事の最初に。野菜と汁物で満腹感を先取りすると、メインの食べ過ぎを防げます。ジョイフルはサラダの種類が豊富なので取り入れやすいです。",
              },
              {
                title: "メインは「グリル・魚・雑炊」から選ぶ",
                body: "揚げ物（唐揚げ・ポテト）より、グリルチキンの冷製（212kcal）や焼き鮭と椎茸の雑炊（408kcal）など脂質の低いメインを選ぶと、同じ満足感でもカロリーを大きく抑えられます。",
              },
              {
                title: "ライスは量を調整する",
                body: "ライス単品は296kcal・炭水化物64.3g。糖質を抑えたい日は、ライスを少なめにするかサラダに置き換えると炭水化物をカットできます。雑炊やちゃんぽんを選べば、ライス追加なしで完結します。",
              },
              {
                title: "揚げ物・大盛りはシェアする",
                body: "ポテトフライ（436kcal）や唐揚げ系は1人で食べ切らず、複数人でシェアを。量を増やす「倍盛り」「ツイン」「メガ盛り」は1人前としては多すぎるため避けるのが無難です。",
              },
              {
                title: "ドレッシング・ソースは控えめに",
                body: "タルタルソース（156kcal）など、ソース類は意外と高カロリー。サラダのドレッシングは半量にする、揚げ物のソースは別添えでつけながら食べるなどの工夫で、数十kcalの節約になります。",
              },
            ]}
          />

          <MenuPhoto id="joyfull-diet-salad" genre="salad" />

          <SubSectionHeading>ジョイフルで使える「組み合わせ」テクニック</SubSectionHeading>

          <p className="mb-4">
            ジョイフルは単品・トッピングが豊富なので、<Marker color="blue">「軽いメイン＋低カロリーなタンパク補給」</Marker>の組み合わせが作りやすいのが魅力です。たとえば彩りサラダ（112kcal）に目玉焼き（80kcal／P6.9g）や明太子（25kcal／P4.3g）を足せば、200kcal台でタンパク質をしっかり確保できます。
          </p>

          <CheckList
            items={[
              "メインは脂質の低いグリル・魚・雑炊を基本にする",
              "サラダ・味噌汁を先に食べて満腹感を先取りする",
              "ライスは少なめ、または雑炊・ちゃんぽんでライス追加を避ける",
              "明太子・目玉焼き・納豆など低カロリーな単品でタンパク質を補う",
              "倍盛り・ツイン・メガ盛りはシェア前提、または避ける",
            ]}
          />
        </section>

        {/* Section 7: 目的別 */}
        <section className="mb-16">
          <SectionHeading id="purpose">目的別の組み合わせ早見表</SectionHeading>

          <p className="mb-6">
            ダイエットの方針（糖質制限・ローファット・カロリー制限）によって、<Marker>ジョイフルで選ぶべきメニューは変わります</Marker>。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["カロリー制限", "グリルチキンの冷製", "212 kcal", "低カロリーでP14.3gも確保"],
              ["糖質制限", "チーズたっぷりチキンイタリアンステーキ", "565 kcal", "炭水化物16.6gでP38.1g"],
              ["ローファット", "焼き鮭と椎茸の鰹節香る雑炊", "408 kcal", "脂質8.7gでP23.8g"],
              ["高タンパク重視", "プライムサイコロペッパーステーキ", "513 kcal", "P29.1gの赤身ステーキ"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            糖質制限中なら<Marker color="blue">チーズたっぷりチキンイタリアンステーキ（C16.6g／P38.1g）</Marker>が優秀。ローファット派には脂質8.7gの焼き鮭雑炊が向いています。同じ「タンパク質を摂る」でも、糖質を削るのか脂質を削るのかで最適メニューが変わる点を押さえておきましょう。
          </p>

          <SubSectionHeading>ジョイフルのランキングをもっと見る</SubSectionHeading>

          <p className="mb-4">
            たべなびでは、ジョイフルの全メニューを目的別に並べ替えたランキングを公開しています。下記からチェックできます。
          </p>

          <CheckList
            items={[
              "高タンパク順で見たい → ジョイフルの高タンパクメニューランキング",
              "カロリーの低い順で見たい → ジョイフルの低カロリーメニューランキング",
              "ダイエット向きを厳選で見たい → ジョイフルのダイエットおすすめランキング",
            ]}
          />

          <p className="mb-4 mt-6">
            目的別ランキングは{" "}
            <Link href="/chains/joyfull/high-protein" className="text-sky-600 font-medium hover:underline">
              ジョイフルの高タンパクメニューランキング
            </Link>
            、
            <Link href="/chains/joyfull/low-calorie" className="text-sky-600 font-medium hover:underline">
              低カロリーメニューランキング
            </Link>
            、
            <Link href="/chains/joyfull/diet" className="text-sky-600 font-medium hover:underline">
              ダイエットおすすめランキング
            </Link>
            から確認できます。メニュー全体は{" "}
            <Link href="/chains/joyfull" className="text-sky-600 font-medium hover:underline">
              ジョイフルのメニュー一覧
            </Link>
            をご覧ください。
          </p>

          <p className="mb-4">
            ほかのファミレスと比べたい場合は{" "}
            <Link href="/guide/family-restaurant-diet" className="text-sky-600 font-medium hover:underline">
              ファミレスダイエット比較
            </Link>
            や、同じハンバーグ・朝食が強い{" "}
            <Link href="/guide/cocos-diet" className="text-sky-600 font-medium hover:underline">
              ココスのダイエットガイド
            </Link>
            が参考になります。外食ダイエットの基本は{" "}
            <Link href="/guide/eating-out-diet" className="text-sky-600 font-medium hover:underline">
              外食ダイエット完全ガイド
            </Link>
            、糖質を抑えたい人は{" "}
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 font-medium hover:underline">
              糖質制限×外食ガイド
            </Link>
            もあわせてどうぞ。
          </p>
        </section>

        {/* Summary */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ジョイフルは幅広いメニューが揃うからこそ、選び方でカロリーが大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "低カロリー＋タンパク質ならグリルチキンの冷製（212kcal／P14.3g）が万能",
              "高タンパク低糖質はチーズたっぷりチキンイタリアンステーキ（565kcal／P38.1g）が筆頭",
              "脂質を抑えたいなら焼き鮭と椎茸の雑炊（408kcal／F8.7g／P23.8g）",
              "倍盛り・ツイン・メガ盛りは1,000kcal超が多く、頻度を抑えるかシェアを",
              "サラダ・味噌汁を先に、ライスは量を調整して糖質をコントロール",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はジョイフル公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。健康効果を保証するものではなく、食事は全体のバランスを優先してください。
          </p>
        </section>

        {/* Service Offers before FAQ */}
        <ServiceOffers tag="diet" />

        <FAQSection
          slug="joyfull-diet"
          items={[
            {
              q: "ジョイフルでカロリーが最も低い食事メニューは何ですか？",
              a: "サラダ系では彩りサラダ（112kcal）やサウザンサラダ（62kcal）が低めです。タンパク質も摂りつつ低カロリーに抑えたいならグリルチキンの冷製（212kcal／P14.3g）がおすすめ。味噌汁（28kcal）を組み合わせると、満腹感を高めながらカロリーを抑えられます。",
            },
            {
              q: "ジョイフルで高タンパクなダイエット向きメニューは？",
              a: "チーズたっぷりチキンイタリアンステーキ（565kcal／P38.1g／C16.6g）は高タンパク・低糖質でおすすめです。脂質を抑えたいなら焼き鮭と椎茸の鰹節香る雑炊（408kcal／P23.8g／F8.7g）、温かい一品が欲しいなら野菜たっぷりちゃんぽん（491kcal／P23.1g）も高タンパクです。",
            },
            {
              q: "ジョイフルのハンバーグはダイエット中でも食べられますか？",
              a: "選び方次第で可能です。和風ハンバーグ（581kcal）やチーズハンバーグ（648kcal）に対し、ツインハンバーグは1,157kcalと約2倍。1枚タイプを選び、ライスを少なめにすればダイエット中でも楽しめます。脂質は40g前後と高めなので頻度には注意しましょう。",
            },
            {
              q: "ジョイフルでダイエット中に避けるべきメニューは何ですか？",
              a: "倍盛りジョイフル塩唐揚げ定食（1,686kcal）、肉増し！牛焼肉とおろし唐揚げ定食（1,478kcal）、メガ盛りポテトフライ（1,307kcal）、ツインハンバーグ（1,157kcal）など1,000kcalを大きく超える品は要注意です。揚げ物・大盛り・ツイン系は脂質が高くカロリーが伸びます。",
            },
            {
              q: "ジョイフルで糖質を抑えたいときは何を選べばいいですか？",
              a: "チーズたっぷりチキンイタリアンステーキ（C16.6g）やプライムサイコロペッパーステーキ（C23g）など、ステーキ系は炭水化物が低めです。ライス（296kcal／C64.3g）を抜く・少なめにすると、さらに糖質をカットできます。サラダや味噌汁を添えると満足感も保てます。",
            },
            {
              q: "ジョイフルのサラダだけだと栄養が足りませんか？",
              a: "彩りサラダ（112kcal／P2.2g）など軽いサラダはタンパク質が不足しがちです。目玉焼き（80kcal／P6.9g）や明太子（25kcal／P4.3g）、グリルチキンの冷製（212kcal／P14.3g）を加えると、低カロリーのままタンパク質を補えてバランスが整います。",
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
        <ArticleFooter currentSlug="joyfull-diet" />

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
