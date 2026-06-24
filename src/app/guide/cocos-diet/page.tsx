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
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "ココスのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/cocos-diet" },
  description:
    "ファミレス・ココスでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ステーキやハンバーグ、サラダ・スープの選び方、高タンパク・低カロリーのおすすめと避けたい高カロリーメニューを紹介します。",
  keywords: [
    "ココス カロリー",
    "ココス ダイエット",
    "ココス 栄養",
    "ココス 高タンパク",
    "ココス 低カロリー",
    "ココス 太らない",
  ],
  openGraph: {
    title: "ココスのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方",
    description:
      "ファミレス・ココスでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ステーキやハンバーグ、サラダ・スープの選び方、高タンパク・低カロリーのおすすめを紹介します。",
    url: "https://www.tabenavi.jp/guide/cocos-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ココスのダイエット・カロリーガイド｜ファミレスで太りにくいメニューの選び方",
  description:
    "ファミレス・ココスでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ステーキやハンバーグ、サラダ・スープの選び方、高タンパク・低カロリーのおすすめを紹介します。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/cocos-diet",
};

const tocItems = [
  { id: "quick", label: "結論：ココスで太りにくい選び方" },
  { id: "high-protein", label: "高タンパクなおすすめメニュー" },
  { id: "low-calorie", label: "低カロリーなサイド・スープ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "compare", label: "ステーキ vs ハンバーグ比較" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function CocosDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ココスでダイエット"
        subtitle="ファミレスで太りにくいメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=400&fit=crop"
        breadcrumb="ココスダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="cocos-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          ココスはハンバーグ・ステーキを中心に、サラダ・スープ・和食まで幅広くそろうファミレスです。メニュー数が多いぶん、選び方しだいで<Marker>1食100kcal台から900kcal超まで</Marker>大きく差が出ます。実は「肉＝太る」とは限らず、ステーキ系はタンパク質が高く脂質コントロールしやすいメニューも多いのが特徴です。
        </p>
        <p className="mb-4">
          高タンパクを狙うなら、ご飯抜きの<Marker color="blue">カットステーキ 130g（249kcal／P26.8g）</Marker>が優秀。逆に<Marker>濃厚ビーフシチューの包み焼きハンバーグ系やジャンバラヤ類は900kcal超</Marker>になるものもあり、選び方ひとつでカロリー差は600kcal以上にもなります。
        </p>
        <p className="mb-8">
          この記事では、ココスのメニューをDBの実数値（カロリー・PFC）にもとづいて整理し、高タンパク・低カロリーのおすすめと、避けたい高カロリーメニュー、太りにくい食べ方のコツを解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="cocos-diet-steak" genre="steak" priority />

        {/* Section 1: QuickAnswer + 結論 */}
        <section className="mb-16">
          <QuickAnswer
            question={"ココスでダイエット中におすすめのメニューは何ですか？"}
            answer={
              "ココスでカロリーとタンパク質のバランスを重視するなら、ご飯抜きの「カットステーキ 130g」（249kcal／P26.8g）がおすすめです。しっかり食べたい日は「チキンステーキ」（461kcal／P33.6g）が高タンパク。サイドは「彩り野菜のグリーンサラダ」（10kcal）や「とん汁」（96kcal）、「カリカリチェダーのシーザーサラダ」（146kcal）で野菜と満腹感を補えます。逆に濃厚ビーフシチューの包み焼きハンバーグ系やジャンバラヤ類は900kcalを超えるため、頻度には注意しましょう。"
            }
          />

          <SectionHeading id="quick">結論：ココスで太りにくい選び方</SectionHeading>

          <p className="mb-4">
            ココスでのダイエットの基本は<Marker>「ステーキ系で高タンパクを取り、サラダ・スープでかさ増し、ご飯は控えめ」</Marker>です。まずは目的別のおすすめを一覧で確認しましょう。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "タンパク質"]}
            rows={[
              ["高タンパク・低脂質", "カットステーキ 130g（ご飯抜き）", "249 kcal", "P 26.8g"],
              ["がっつり高タンパク", "チキンステーキ", "461 kcal", "P 33.6g"],
              ["とにかく低カロリー", "彩り野菜のグリーンサラダ", "10 kcal", "P 0.5g"],
              ["満腹感を足す", "とん汁", "96 kcal", "P 5.7g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            ファミレスは「セットで頼むとつい食べ過ぎる」のが難点。<Marker color="blue">単品ステーキ＋サラダ＋スープ</Marker>のように組み立てると、満足感を保ちながらカロリーを抑えやすくなります。
          </p>
        </section>

        {/* Mid CTA 1 */}
        <CTABanner
          title="ココスのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 2: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクなおすすめメニュー</SectionHeading>

          <p className="mb-4">
            筋トレ中やタンパク質をしっかり摂りたい方に向けて、ココスの<Marker>高タンパクメニュー</Marker>を整理しました。ステーキ系はタンパク質が多く、脂質も比較的コントロールしやすいのが魅力です。
          </p>

          <NutritionTable
            highlightProtein
            items={[
              { name: "カットステーキお肉2倍 260g", calories: 466, protein: 52.4, fat: 23.1, carbs: 7.9, highlight: true },
              { name: "ビーフハンバーグステーキダブル", calories: 982, protein: 50.6, fat: 78.8, carbs: 8.3 },
              { name: "厚切り!!サーロインステーキ", calories: 932, protein: 44.3, fat: 65.9, carbs: 33.0 },
              { name: "ココスのハンバーグダブル", calories: 626, protein: 34.3, fat: 40.2, carbs: 27.8 },
              { name: "チキンステーキ", calories: 461, protein: 33.6, fat: 29.0, carbs: 13.6, highlight: true },
              { name: "カットステーキランチ", calories: 499, protein: 30.8, fat: 12.3, carbs: 66.5, highlight: true },
              { name: "カットステーキ 130g", calories: 249, protein: 26.8, fat: 11.8, carbs: 7.1, highlight: true },
              { name: "ココスのハンバーグ", calories: 350, protein: 19.8, fat: 22.5, carbs: 14.7 },
            ]}
            caption="※栄養成分はココス公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。"
          />

          <RankingCard
            rank={1}
            title="カットステーキ 130g（ご飯抜き）"
            subtitle="249kcal / P26.8g / F11.8g / C7.1g"
            calories={249}
            protein={26.8}
            fat={11.8}
            carbs={7.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">タンパク質26.8gで脂質11.8g・糖質7.1g</Marker>と、PFCバランスが非常に優秀。これ単品なら糖質制限中でも安心して選べます。物足りなければサラダやスープを足して満足感を補いましょう。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ご飯やパンを付けるとカロリーは大きく上がります（ライスは250kcal）。糖質を抑えたい日は<Marker>単品＋野菜</Marker>の構成がおすすめです。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="チキンステーキ"
            subtitle="461kcal / P33.6g / F29.0g / C13.6g"
            calories={461}
            protein={33.6}
            fat={29.0}
            carbs={13.6}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">タンパク質33.6gとメニュー中でもトップクラスの高タンパク</Marker>。糖質は13.6gと控えめで、しっかり食べたい日のメインに向いています。脂質は29gとやや高めなので、ご飯を控えめにするとバランスが整います。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="カットステーキお肉2倍 260g"
            subtitle="466kcal / P52.4g / F23.1g / C7.9g"
            calories={466}
            protein={52.4}
            fat={23.1}
            carbs={7.9}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              なんと<Marker color="blue">タンパク質52.4g</Marker>。それでいて466kcal・糖質7.9gに収まる、たんぱく質効率がずば抜けたメニューです。トレーニング後やしっかりタンパク質を補給したい日にうってつけ。脂質23.1gも肉量のわりに控えめです。
            </p>
          </RankingCard>

          <TipBox title="ステーキ系が高タンパクの理由">
            <p>ココスのステーキ系は<Marker>赤身肉を中心に、ご飯やソースの量が少ない</Marker>ためタンパク質比率が高くなります。とくにカットステーキ系はカロリーあたりのタンパク質量が多く、ダイエット中の「肉でしっかり満足したい」というニーズに合います。脂質が気になる場合は、付け合わせのソースやバターを控えめにするとさらに抑えられます。</p>
          </TipBox>

          <MenuPhoto id="cocos-diet-hamburg" genre="grilled-chicken" />
        </section>

        {/* Section 3: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーなサイド・スープ</SectionHeading>

          <p className="mb-4">
            ココスはサラダ・スープのバリエーションが豊富です。<Marker>メインの前に低カロリーの一品</Marker>を足すことで、満腹感を高めながら全体のカロリーを抑えられます。
          </p>

          <NutritionTable
            items={[
              { name: "彩り野菜のグリーンサラダ", calories: 10, protein: 0.5, fat: 0.1, carbs: 2.1, highlight: true },
              { name: "みそ汁", calories: 34, protein: 2.4, fat: 0.9, carbs: 4.3, highlight: true },
              { name: "ココスのフルーツサラダ", calories: 68, protein: 0.9, fat: 2.9, carbs: 11.1 },
              { name: "とん汁", calories: 96, protein: 5.7, fat: 3.7, carbs: 9.9, highlight: true },
              { name: "コーンスープ", calories: 121, protein: 3.4, fat: 4.5, carbs: 16.2 },
              { name: "カリカリチェダーのシーザーサラダ", calories: 146, protein: 5.7, fat: 12.2, carbs: 3.3, highlight: true },
              { name: "オニオングラタンスープのココット焼き", calories: 146, protein: 10.4, fat: 5.3, carbs: 13.5, highlight: true },
            ]}
            caption="※栄養成分はココス公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。"
          />

          <p className="mb-4">
            とくに<Marker color="blue">彩り野菜のグリーンサラダ（10kcal）</Marker>は、ほぼカロリーを気にせず野菜をプラスできる優秀な一品。<Marker>オニオングラタンスープのココット焼き（146kcal）はタンパク質10.4g</Marker>と、スープながらタンパク質も摂れるのがうれしいポイントです。
          </p>

          <TipBox title="サラダのドレッシングに注意">
            <p>低カロリーなサラダでも、ドレッシングのかけ過ぎでカロリーが上がります。たとえば<Marker>カリカリチェダーのシーザーサラダ（146kcal）</Marker>は脂質12.2gとチーズ由来の脂質がやや高め。野菜の量を取りたいだけなら、まずは彩り野菜のグリーンサラダ（10kcal）から選ぶのがおすすめです。</p>
          </TipBox>

          <MenuPhoto id="cocos-diet-salad" genre="salad" />
        </section>

        {/* Section 4: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            ファミレスには<Marker>900kcalを超える高カロリーメニュー</Marker>も少なくありません。とくにチーズ・ビーフシチュー・ジャンバラヤ系は脂質・糖質がともに高くなりがちです。
          </p>

          <WarningBox title="頻度に注意したい高カロリーメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">チーズソースの濃厚ビーフシチュー包み焼きハンバーグ 145g ランチ（990kcal）</span> ─ チーズ＋ビーフシチュー＋ご飯で糖質106.3g・脂質46.1gと高め。</li>
              <li><span className="font-bold">ビーフハンバーグステーキダブル（982kcal）</span> ─ タンパク質50.6gは取れるが脂質78.8gと非常に高い。脂質を抑えたい日には不向き。</li>
              <li><span className="font-bold">カリブチキンジャンバラヤ（970kcal）</span> ─ 味付きご飯がベースで糖質77.6g・脂質49.7g。</li>
              <li><span className="font-bold">ココスのハンバーグボロネーゼ（942kcal）</span> ─ ハンバーグ＋パスタで糖質86.9g。炭水化物が重なるメニューは要注意。</li>
              <li><span className="font-bold">厚切り!!サーロインステーキ（932kcal）</span> ─ タンパク質44.3gだが脂質65.9gとサシの多い部位で高脂質。</li>
            </ul>
          </WarningBox>

          <WarningBox title="デザート・サイドの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">メイプルココッシュ（613kcal）</span> ─ デザート単品で600kcal超。糖質86.9gと一食分に匹敵。</li>
              <li><span className="font-bold">ココスのチョコパフェ（547kcal）</span> ─ 脂質30.6g・糖質59.4g。食後に追加すると一気にカロリーオーバー。</li>
              <li><span className="font-bold">カリカリポテト（466kcal）</span> ─ 揚げ物サイドは脂質33.7gと高い。野菜サラダへの置き換えがおすすめ。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらを完全に禁止する必要はありませんが、<Marker>食べる日は他をシンプルにする・シェアする</Marker>などで1食の総量を調整しましょう。
          </p>
        </section>

        {/* Section 5: ステーキ vs ハンバーグ比較 */}
        <section className="mb-16">
          <SectionHeading id="compare">ステーキ vs ハンバーグ：どちらがダイエット向き？</SectionHeading>

          <p className="mb-4">
            ココスの看板はハンバーグとステーキ。<Marker>同じ「肉」でもPFCバランスは大きく異なります</Marker>。代表的なメニューで比較してみましょう。
          </p>

          <ComparisonTable
            headers={["比較項目", "カットステーキ 130g", "ココスのハンバーグ"]}
            rows={[
              ["カロリー", "249 kcal", "350 kcal"],
              ["タンパク質", "26.8g", "19.8g"],
              ["脂質", "11.8g", "22.5g"],
              ["炭水化物", "7.1g", "14.7g"],
              ["タイプ", "赤身肉・低脂質", "ひき肉・脂質多め"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            カットステーキ 130gは<Marker color="blue">ハンバーグよりカロリーが約100kcal低く、タンパク質は約7g多い</Marker>うえに脂質は約半分。ダイエット中に「肉でしっかり食べたい」なら、まずはステーキ系が有力です。
          </p>

          <SubSectionHeading>ハンバーグを食べたいときの選び方</SubSectionHeading>

          <p className="mb-4">
            ハンバーグが食べたい日は、<Marker>ソースとトッピングでカロリーが大きく変わる</Marker>点に注目しましょう。シンプルなものほど低カロリーに収まります。
          </p>

          <ComparisonTable
            headers={["ハンバーグメニュー", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["ココスのハンバーグ", "350 kcal", "P 19.8g", "F 22.5g"],
              ["山盛り!!鬼おろしハンバーグ", "399 kcal", "P 21.7g", "F 22.6g"],
              ["チーズインハンバーグ", "530 kcal", "P 29.2g", "F 35.8g"],
              ["ビーフハンバーグステーキ チェダーチーズ", "552 kcal", "P 28.8g", "F 43.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            チーズやビーフシチューが加わると脂質が一気に上がります。<Marker color="green">大根おろし系（鬼おろしハンバーグ）はソースが軽く</Marker>、カロリーを抑えながらさっぱり食べられるのでダイエット向きです。
          </p>

          <TipBox title="サイズと組み合わせで調整">
            <p>ココスはハンバーグの「ダブル」やプレートのご飯量で総カロリーが大きく変わります。<Marker>ご飯を少なめにする・ダブルを避ける</Marker>だけで数百kcalの節約に。タンパク質を増やしたいときは温泉玉子（83kcal／P6.8g）や追加目玉焼き（81kcal／P6.3g）のトッピングが効率的です。</p>
          </TipBox>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">ココスダイエットの太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            ファミレスならではの<Marker>サイドの自由度を活かした</Marker>、太りにくい食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "まずサラダ・スープから食べる",
                body: "彩り野菜のグリーンサラダ（10kcal）やとん汁（96kcal）を最初に食べることで、血糖値の急上昇をゆるやかにしつつ満腹感を得やすくなります。メインの食べ過ぎ防止にも有効です。",
              },
              {
                title: "メインはステーキ系を選ぶ",
                body: "カットステーキ 130g（249kcal／P26.8g）やチキンステーキ（461kcal／P33.6g）など、赤身・鶏肉のステーキ系は高タンパク・脂質控えめ。ハンバーグより太りにくい構成にしやすいです。",
              },
              {
                title: "ご飯・パンは控えめにする",
                body: "ライスは250kcal、石窯パンは221kcal。糖質を抑えたい日は単品＋野菜の構成にしたり、ご飯を少なめにするだけで総カロリーを下げられます。",
              },
              {
                title: "ソース・トッピングを軽くする",
                body: "チーズ・ビーフシチュー・ホイップ系のトッピングは脂質・糖質を大きく上乗せします。さっぱり系のおろし・ポン酢（追加おろしポン酢35kcal）に寄せるとカロリーを抑えやすくなります。",
              },
              {
                title: "デザートはシェア・低カロリーを選ぶ",
                body: "どうしても食べたいときは、トッピングフルーツ（44kcal）やマンゴーの杏仁豆腐（107kcal）など軽めを選ぶか、パフェ系は誰かとシェアして量を半分にしましょう。",
              },
            ]}
          />

          <MenuPhoto id="cocos-diet-soup" genre="grilled-fish" />

          <SubSectionHeading>目的別おすすめの組み合わせ</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針別に、ココスでの組み合わせ例をまとめました。<Marker>単品を組み合わせる</Marker>ことで、セットより柔軟にカロリーを調整できます。
          </p>

          <ComparisonTable
            headers={["目的", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "カットステーキ 130g + 彩り野菜のグリーンサラダ", "約259 kcal", "P 約27.3g"],
              ["バランス型", "チキンステーキ + とん汁", "約557 kcal", "P 約39.3g"],
              ["がっつり高タンパク", "カットステーキお肉2倍 260g + みそ汁", "約500 kcal", "P 約54.8g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker>「カットステーキ 130g＋グリーンサラダ」なら約259kcalでP約27g、糖質は約9g</Marker>。糖質制限ダイエット中でも安心して選べる構成です。
          </p>

          <SubSectionHeading>ココスでダイエットしやすい3つの理由</SubSectionHeading>

          <CheckList
            items={[
              "高タンパクなステーキ系が豊富 ─ カットステーキ系は脂質控えめで筋トレ中にも向く",
              "サラダ・スープの選択肢が多い ─ 彩り野菜のグリーンサラダ（10kcal）でかさ増しできる",
              "単品注文で量を調整しやすい ─ ご飯・トッピングを自分でコントロールできる",
            ]}
          />
        </section>

        <ServiceOffers tag="diet" />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <ArticleSummary
            points={[
              "高タンパク・低脂質を狙うならカットステーキ 130g（249kcal／P26.8g）が筆頭候補",
              "しっかり食べたい日はチキンステーキ（461kcal／P33.6g）が高タンパクでおすすめ",
              "彩り野菜のグリーンサラダ（10kcal）やとん汁（96kcal）でかさ増しして満腹感を確保",
              "濃厚ビーフシチュー包み焼きハンバーグ系やジャンバラヤ類は900kcal超になるので頻度に注意",
              "ステーキ系はハンバーグより脂質が少なく、ご飯を控えめにすると太りにくい構成になる",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はココス公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>

          <p className="mb-4 text-sm text-gray-600">
            ココスの全メニューの栄養データは{" "}
            <Link href="/chains/cocos" className="text-sky-600 hover:underline font-medium">
              ココスのメニュー一覧
            </Link>{" "}
            から確認できます。目的別に絞り込みたい方は{" "}
            <Link href="/chains/cocos/high-protein" className="text-sky-600 hover:underline font-medium">
              高タンパクメニュー
            </Link>
            ・
            <Link href="/chains/cocos/diet" className="text-sky-600 hover:underline font-medium">
              ダイエット向けメニュー
            </Link>
            ・
            <Link href="/chains/cocos/low-calorie" className="text-sky-600 hover:underline font-medium">
              低カロリーメニュー
            </Link>{" "}
            のページもどうぞ。
          </p>

          <p className="mb-4 text-sm text-gray-600">
            ほかのジャンルでの外食ダイエットは{" "}
            <Link href="/guide/family-restaurant-diet" className="text-sky-600 hover:underline font-medium">
              ファミレスでダイエットする方法
            </Link>
            、
            <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline font-medium">
              外食ダイエットの基本
            </Link>
            、
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">
              外食で低糖質を実践するコツ
            </Link>
            、
            <Link href="/guide/calorie-database" className="text-sky-600 hover:underline font-medium">
              外食カロリーデータベース
            </Link>{" "}
            もあわせてご覧ください。
          </p>
        </section>

        <FAQSection
          slug="cocos-diet"
          items={[
            {
              q: "ココスでカロリーが最も低いメニューは何ですか？",
              a: "サイド系では彩り野菜のグリーンサラダが10kcal、みそ汁が34kcal、とん汁が96kcalと低めです。メインとして食べるなら、ご飯抜きのカットステーキ 130g（249kcal／P26.8g）が低カロリーかつ高タンパクでおすすめです。",
            },
            {
              q: "ココスで高タンパクなメニューはどれですか？",
              a: "カットステーキお肉2倍 260gがタンパク質52.4g（466kcal）と最も高く、チキンステーキ（461kcal／P33.6g）、カットステーキ 130g（249kcal／P26.8g）も高タンパクです。ステーキ系は脂質も比較的控えめで、タンパク質を効率よく摂りたい方に向いています。",
            },
            {
              q: "ダイエット中に避けたほうがよいココスのメニューは？",
              a: "チーズソースの濃厚ビーフシチュー包み焼きハンバーグ 145g ランチ（990kcal）、ビーフハンバーグステーキダブル（982kcal・脂質78.8g）、カリブチキンジャンバラヤ（970kcal）、ココスのハンバーグボロネーゼ（942kcal）などは高カロリー・高脂質です。デザートではメイプルココッシュ（613kcal）も食べ過ぎに注意しましょう。",
            },
            {
              q: "ココスでステーキとハンバーグはどちらがダイエット向きですか？",
              a: "ステーキ系のほうが向いています。カットステーキ 130gは249kcal・タンパク質26.8g・脂質11.8gに対し、ココスのハンバーグは350kcal・タンパク質19.8g・脂質22.5g。ステーキのほうがカロリーが低く、タンパク質が多く、脂質は約半分です。",
            },
            {
              q: "ココスで糖質を抑えるにはどうすればよいですか？",
              a: "ご飯やパン（ライス250kcal）を控え、単品のステーキ＋サラダで組み立てるのがおすすめです。カットステーキ 130g＋彩り野菜のグリーンサラダなら約259kcal・糖質約9gに収まります。ソースはおろしポン酢などさっぱり系を選ぶとさらに糖質を抑えられます。",
            },
            {
              q: "ココスで満腹感を高めながらカロリーを抑えるコツは？",
              a: "食事の最初に彩り野菜のグリーンサラダ（10kcal）やとん汁（96kcal）を食べると、満腹感が得やすくメインの食べ過ぎを防げます。オニオングラタンスープのココット焼き（146kcal）はタンパク質10.4gも摂れるため、満足感を高めたいときに便利です。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="cocos-diet" />

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
