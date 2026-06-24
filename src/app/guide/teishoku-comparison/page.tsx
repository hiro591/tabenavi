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
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "定食チェーン高タンパク比較｜やよい軒・大戸屋・松屋のタンパク質・カロリー【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/teishoku-comparison" },
  description:
    "やよい軒・大戸屋・松屋の定食を、タンパク質・カロリー・PFC・価格の実データで徹底比較。高タンパクな定食ランキングと、ダイエット中におすすめの選び方を外食減量の視点で解説します。",
  keywords: [
    "定食 タンパク質 比較",
    "やよい軒 大戸屋 松屋",
    "定食 高タンパク",
    "定食 カロリー 比較",
    "やよい軒 しまほっけ タンパク質",
    "定食 ダイエット",
  ],
  openGraph: {
    title: "定食チェーン高タンパク比較｜やよい軒・大戸屋・松屋のタンパク質・カロリー",
    description:
      "やよい軒・大戸屋・松屋の定食を、タンパク質・カロリー・PFC・価格の実データで徹底比較。高タンパクな定食ランキングと、ダイエット中におすすめの選び方を外食減量の視点で解説します。",
    url: "https://www.tabenavi.jp/guide/teishoku-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "定食チェーン高タンパク比較｜やよい軒・大戸屋・松屋のタンパク質・カロリー",
  description:
    "やよい軒・大戸屋・松屋の定食を、タンパク質・カロリー・PFC・価格の実データで徹底比較。高タンパクな定食ランキングと、ダイエット中におすすめの選び方を外食減量の視点で解説します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/teishoku-comparison",
};

const tocItems = [
  { id: "why-teishoku", label: "なぜ「定食」は減量・筋トレ向きなのか" },
  { id: "fish-comparison", label: "焼き魚定食 3社対決（しまほっけ・鮭・さば）" },
  { id: "meat-comparison", label: "肉おかず定食 3社対決（生姜焼き・チキン）" },
  { id: "high-protein-ranking", label: "高タンパク定食ランキング（3社横断）" },
  { id: "low-calorie", label: "低カロリーで選ぶ（ダイエット向き）" },
  { id: "low-fat", label: "低脂質で選ぶ（ローファット向き）" },
  { id: "how-to-choose", label: "目的別・3社の選び分けと注意点" },
  { id: "summary", label: "まとめ" },
];

export default function TeishokuComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="定食チェーン高タンパク比較｜やよい軒・大戸屋・松屋"
        subtitle="タンパク質・カロリー・PFC・価格を実データで徹底比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="定食チェーン比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="teishoku-comparison">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="やよい軒・大戸屋・松屋の定食で一番高タンパクなのは？ダイエット中はどれを選べばいい？"
          answer={
            <>
              標準サイズ（並盛・白米）の定番定食で<strong>タンパク質が最も多いのはやよい軒のしまほっけ定食（631kcal/タンパク質50.7g）</strong>。次いで<strong>大戸屋のしまほっけの炭火焼き（612kcal/タンパク質45.5g）</strong>と、しまほっけ系の焼き魚定食が頭一つ抜けています。<strong>低脂質を狙うなら大戸屋の豚ヒレの冷しゃぶ（627kcal/脂質8.0g）</strong>が別格。コスパ重視の松屋は牛めし（並）687kcal/タンパク質17.1gと、丼ベースのため定食系よりタンパク質は控えめです。減量中は「焼き魚定食＋ご飯の量で調整」が3社共通の正解です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「外食でしっかりタンパク質を摂りたいなら定食」——これは多くの減量者・トレーニーが行き着く結論です。実際、ご飯・主菜・汁物・小鉢で構成される定食は、<Marker>外食カテゴリの中でも高タンパクなメニューが揃う形式</Marker>。中でも全国に店舗があるやよい軒・大戸屋・松屋は、迷ったときの定番3社です。
        </p>
        <p className="mb-4">
          ただし、同じ「定食チェーン」でも中身はかなり違います。<Marker color="blue">焼き魚に強いやよい軒・大戸屋と、牛めし（丼）が主役の松屋</Marker>では、得意なPFCバランスも価格帯も別物。この記事では3社それぞれの公式栄養データをたべなびDBで照合し、<Marker color="green">標準サイズ（並盛・白米・単品）に条件をそろえて</Marker>横断比較します。
        </p>
        <p className="mb-8">
          大盛・特盛・超特盛は数値が大きく変わるため、本文では原則「標準」で比較し、極端な品は別途注記します。「結局どこで何を頼めば、何kcal・タンパク質何gになるのか」を数字で示すので、その日の目的に合わせて選んでください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="定食のイメージ（焼き魚・ご飯・味噌汁）"
        />

        {/* Section 1: なぜ定食 */}
        <section className="mb-16">
          <SectionHeading id="why-teishoku">
            なぜ「定食」は減量・筋トレ向きなのか
          </SectionHeading>

          <p className="mb-4">
            定食が減量・筋トレと相性が良い理由は3つあります。1つ目は<Marker>主菜で20〜50gのタンパク質を一度に確保できること</Marker>。2つ目はご飯の量を自分で調整できること。3つ目は揚げ物以外（焼き魚・炭火焼き・生姜焼きなど）を選べば脂質をコントロールしやすいことです。
          </p>
          <p className="mb-4">
            たとえば、やよい軒の<Marker color="blue">しまほっけ定食は631kcalでタンパク質50.7g</Marker>。これは外食の単品で50gのタンパク質に届く稀なメニューで、ご飯（白米）込みでこの数字というのが定食の強みです。一方、松屋のように丼が主役のチェーンは手軽さと価格で優れますが、ご飯比率が高くなりやすい点は意識しておきたいところです。
          </p>

          <TipBox title="「標準サイズで比べる」が公平比較のカギ">
            <p>
              各社とも大盛・特盛・超特盛が用意されています。たとえばやよい軒のしまほっけ定食は白米631kcal→もち麦大盛785kcalと、ご飯だけで150kcal以上動きます。本記事は<Marker>白米・並盛・単品（おかずのみ除く）</Marker>に統一して比較し、増量サイズは別途注記します。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 焼き魚定食 3社対決 */}
        <section className="mb-16">
          <SectionHeading id="fish-comparison">
            焼き魚定食 3社対決（しまほっけ・鮭・さば）
          </SectionHeading>

          <p className="mb-4">
            まずは3社が共通して持つ<Marker>焼き魚系の定食</Marker>で勝負します。高タンパク低脂質の代表格で、減量者の鉄板です。最初に「しまほっけ」をそろえて比べます（松屋にしまほっけ定食はないため、近い焼き魚の炙り焼鮭定食で比較）。
          </p>

          <ComparisonTable
            headers={["メニュー（標準・白米）", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["やよい軒 しまほっけ定食", "631 kcal", "50.7g", "21.3g", "61.4g"],
              ["大戸屋 しまほっけの炭火焼き", "612 kcal", "45.5g", "13.1g", "79.3g"],
              ["やよい軒 銀鮭の塩焼定食", "499 kcal", "30.0g", "16.8g", "62.9g"],
              ["松屋 炙り焼鮭定食", "698 kcal", "25.7g", "24.0g", "91.0g"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※松屋にしまほっけ定食はないため、焼き魚の炙り焼鮭定食で比較。栄養成分は各社公式サイトの情報をもとに記載。
          </p>

          <p className="mb-4">
            しまほっけ対決は、<Marker>タンパク質ならやよい軒（50.7g）、低脂質なら大戸屋（13.1g）</Marker>。やよい軒の方がタンパク質も脂質も高く、大戸屋の方が脂質が約8g低い一方ご飯量が多くて炭水化物は多めです。「とにかくタンパク質」ならやよい軒、「脂質を抑えたい」なら大戸屋、という棲み分けになります。
          </p>

          <TipBox title="鮭で軽く済ませたいならやよい軒">
            <p>
              500kcalを切りたい日は、やよい軒の<Marker>銀鮭の塩焼定食（499kcal/タンパク質30.0g）</Marker>が優秀。500kcal以内でタンパク質30gを確保できる定食はそう多くありません。松屋の炙り焼鮭定食は698kcalとご飯量が多めなので、軽さ重視ならやよい軒の鮭が一歩リードです。
            </p>
          </TipBox>

          <SubSectionHeading>さばの味噌煮・味噌系で比べると</SubSectionHeading>
          <p className="mb-4">
            脂ののったさば系も人気です。やよい軒と大戸屋でほぼ同名のメニューがあるので並べてみます。
          </p>
          <ComparisonTable
            headers={["メニュー（標準・白米）", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["やよい軒 サバの味噌煮定食", "621 kcal", "30.4g", "24.9g", "71.4g"],
              ["大戸屋 さばの味噌煮", "739 kcal", "36.9g", "26.9g", "85.1g"],
            ]}
            bestRowIndex={0}
          />
          <p className="mb-2">
            さばの味噌煮は<Marker color="blue">カロリーを抑えるならやよい軒（621kcal）、タンパク質を取るなら大戸屋（36.9g）</Marker>。なお同じさばでも、やよい軒の「サバの塩焼定食（白米）」は686kcal/P32.9/F35.1と脂質が一気に上がるので、脂質を気にする日は塩焼より味噌煮、味噌煮よりしまほっけ・鮭が安全です。
          </p>
        </section>

        {/* Section 3: 肉おかず定食 3社対決 */}
        <section className="mb-16">
          <SectionHeading id="meat-comparison">
            肉おかず定食 3社対決（生姜焼き・チキン・牛）
          </SectionHeading>

          <p className="mb-4">
            魚が苦手な日や、しっかり食べたい日の肉おかず定食。ここでは<Marker>各社の看板的な肉メニュー</Marker>を標準サイズで横断します。松屋は定食系の牛焼肉定食と、丼の代表である牛めし（並）の両方を載せました。
          </p>

          <ComparisonTable
            headers={["メニュー（標準・白米）", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["松屋 牛めし（並）", "687 kcal", "17.1g", "28.9g", "85.5g"],
              ["やよい軒 しょうが焼定食", "717 kcal", "26.2g", "37.1g", "72.9g"],
              ["松屋 牛焼肉定食", "806 kcal", "23.3g", "41.3g", "86.5g"],
              ["大戸屋 もろみチキンの炭火焼き", "802 kcal", "42.3g", "30.9g", "82.3g"],
              ["やよい軒 から揚げ定食", "844 kcal", "39.7g", "43.4g", "78.6g"],
            ]}
            bestRowIndex={3}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※松屋の牛めしは丼（定食ではない）だが、肉おかずの定番として参考掲載。栄養成分は各社公式サイトの情報をもとに記載。
          </p>

          <p className="mb-4">
            肉おかずは全体に脂質が上がります。その中で光るのが大戸屋の<Marker>もろみチキンの炭火焼き（802kcal/タンパク質42.3g/脂質30.9g）</Marker>。炭火焼きで揚げていない分、から揚げ定食（やよい軒・脂質43.4g）より脂質を約12g抑えつつタンパク質42.3gを確保できます。「肉で高タンパクを取りたいが揚げ物は避けたい」日の最適解です。
          </p>

          <TipBox title="松屋の牛めしは「速さと安さ」、定食は他2社">
            <p>
              松屋の牛めし（並）は<Marker color="green">687kcal・タンパク質17.1gで¥430</Marker>と、価格と提供スピードでは圧倒的。ただし丼ベースのためタンパク質は控えめで脂質28.9gと多めです。タンパク質効率（カロリーあたりのタンパク質）を重視するなら、同じ松屋でも豚ロースグリル定食（810kcal/P31.9）の方が向いています。
            </p>
          </TipBox>
        </section>

        {/* Mid CTA */}
        <CTABanner
          title="3社の定食を栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: 高タンパクランキング */}
        <section className="mb-16">
          <SectionHeading id="high-protein-ranking">
            高タンパク定食ランキング（3社横断）
          </SectionHeading>

          <p className="mb-6">
            ここからは3社の標準サイズ定食を横断し、目的別にランキング化します。まずは
            <Marker>「とにかくタンパク質を取りたい」筋トレ向き</Marker>の順位です。揚げ物以外で高タンパクな品を中心に厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="しまほっけ定食（やよい軒）"
            subtitle="標準・白米"
            calories={631}
            protein={50.7}
            fat={21.3}
            carbs={61.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              3社横断の<Marker>タンパク質チャンピオン（50.7g）</Marker>。白米込み631kcalでこの数字は、外食定食として別格です。脂質21.3gは焼き魚としてはやや高めですが、揚げ物系の肉定食より低く、コスパよく高タンパクを狙えます。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="しまほっけの炭火焼き（大戸屋）"
            subtitle="定食・白米"
            calories={612}
            protein={45.5}
            fat={13.1}
            carbs={79.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              タンパク質45.5gに対し<Marker color="blue">脂質はわずか13.1g</Marker>。やよい軒のしまほっけと比べ脂質を約8g抑えられるのが魅力です。高タンパクと低脂質を高いレベルで両立した、減量者にとっての理想形に近い一皿です。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="もろみチキンの炭火焼き（大戸屋）"
            subtitle="定食・白米"
            calories={802}
            protein={42.3}
            fat={30.9}
            carbs={82.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              鶏むね系を炭火焼きにした高タンパクメニュー。<Marker color="green">タンパク質42.3g</Marker>を、から揚げ定食より低い脂質で確保できます。魚が続いて飽きたときの「肉で高タンパク」の第一候補です。
            </p>
          </RankingCard>

          <SubSectionHeading>高タンパク定食 TOP8（3社横断・標準サイズ）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "しまほっけ定食（やよい軒）", calories: 631, protein: 50.7, fat: 21.3, carbs: 61.4, highlight: true },
              { name: "しまほっけの炭火焼き（大戸屋）", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
              { name: "豚ヒレの冷しゃぶ おろし柚香だれ（大戸屋）", calories: 627, protein: 42.3, fat: 8.0, carbs: 97.7, highlight: true },
              { name: "もろみチキンの炭火焼き（大戸屋）", calories: 802, protein: 42.3, fat: 30.9, carbs: 82.3 },
              { name: "鰆の西京焼き（大戸屋）", calories: 699, protein: 40.5, fat: 17.8, carbs: 94.5 },
              { name: "から揚げ定食（やよい軒）", calories: 844, protein: 39.7, fat: 43.4, carbs: 78.6 },
              { name: "さばの味噌煮（大戸屋）", calories: 739, protein: 36.9, fat: 26.9, carbs: 85.1 },
              { name: "デミグラスソースハンバーグ定食（松屋）", calories: 955, protein: 33.2, fat: 38.0, carbs: 112.6 },
            ]}
            highlightProtein
          />

          <p className="mb-4">
            タンパク質40g超の上位は、やよい軒と大戸屋の焼き魚・炭火焼きがほぼ独占。<Marker>松屋は丼・定食ともご飯比率が高く</Marker>、定食系の最上位はデミグラスソースハンバーグ定食（33.2g）です。純粋なタンパク質量で攻めるなら、やよい軒・大戸屋の焼き魚を選ぶのが王道といえます。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="バランスの良い和定食のイメージ"
        />

        {/* Section 5: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            低カロリーで選ぶ（ダイエット向き）
          </SectionHeading>

          <p className="mb-4">
            カロリー優先でも、タンパク質を犠牲にしては意味がありません。<Marker>標準サイズで500〜650kcal前後に収まりつつタンパク質が確保できる</Marker>定食を、低い順に並べました。
          </p>

          <NutritionTable
            items={[
              { name: "銀鮭の塩焼定食（やよい軒）", calories: 499, protein: 30.0, fat: 16.8, carbs: 62.9, highlight: true },
              { name: "鶏そぼろ玉子丼（並盛・松屋）", calories: 540, protein: 21.2, fat: 9.4, carbs: 87.5 },
              { name: "しまほっけの炭火焼き（大戸屋）", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
              { name: "サバの味噌煮定食（やよい軒）", calories: 621, protein: 30.4, fat: 24.9, carbs: 71.4 },
              { name: "豚ヒレの冷しゃぶ おろし柚香だれ（大戸屋）", calories: 627, protein: 42.3, fat: 8.0, carbs: 97.7, highlight: true },
              { name: "しまほっけ定食（やよい軒）", calories: 631, protein: 50.7, fat: 21.3, carbs: 61.4 },
              { name: "炙り焼鮭定食（松屋）", calories: 698, protein: 25.7, fat: 24.0, carbs: 91.0 },
            ]}
          />

          <p className="mb-4">
            カロリー最少は、やよい軒の<Marker color="blue">銀鮭の塩焼定食（499kcal/タンパク質30.0g）</Marker>。500kcalを切りつつタンパク質30gはダイエット中の理想ラインです。「カロリーは抑えたいがタンパク質も妥協したくない」なら、ここから大戸屋のしまほっけ（612kcal/45.5g）・豚ヒレ冷しゃぶ（627kcal/42.3g）へと、わずかなカロリー増でタンパク質を大きく伸ばせます。
          </p>

          <TipBox title="ご飯を「少なめ」にするとさらに下がる">
            <p>
              大戸屋はご飯量を選べます。ご飯 普通盛り(180g)は302kcal、<Marker>少なめ(100g)なら168kcal</Marker>で約134kcalカット。やよい軒・松屋もご飯減量に対応する店舗が多く、主菜のタンパク質はそのままにご飯だけ削れば、どの定食も100kcal以上は下げられます。減量中の最も簡単な調整がこれです。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 低脂質 */}
        <section className="mb-16">
          <SectionHeading id="low-fat">
            低脂質で選ぶ（ローファット向き）
          </SectionHeading>

          <p className="mb-4">
            脂質を絞りたいローファット期は、<Marker>調理法が勝負</Marker>。揚げ物・炒め物を避け、蒸し・冷しゃぶ・炭火焼きを選ぶと脂質が大きく下がります。標準サイズで脂質の低い定食を並べました。
          </p>

          <ComparisonTable
            headers={["メニュー（標準・白米）", "脂質", "タンパク質", "カロリー", "炭水化物"]}
            rows={[
              ["大戸屋 豚ヒレの冷しゃぶ おろし柚香だれ", "8.0g", "42.3g", "627 kcal", "97.7g"],
              ["大戸屋 しまほっけの炭火焼き", "13.1g", "45.5g", "612 kcal", "79.3g"],
              ["やよい軒 銀鮭の塩焼定食", "16.8g", "30.0g", "499 kcal", "62.9g"],
              ["大戸屋 鰆の西京焼き", "17.8g", "40.5g", "699 kcal", "94.5g"],
              ["やよい軒 しまほっけ定食", "21.3g", "50.7g", "631 kcal", "61.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            ローファットの王者は大戸屋の<Marker>豚ヒレの冷しゃぶ おろし柚香だれ（脂質8.0g/タンパク質42.3g）</Marker>。脂質一桁でタンパク質40g超という数字は、外食定食では極めて稀です。続く大戸屋のしまほっけ炭火焼き（脂質13.1g）と合わせ、低脂質×高タンパクの2枚看板は大戸屋が握っています。
          </p>

          <WarningBox title="同じ魚でも『揚げ・炒め』は脂質が跳ね上がる">
            <p>
              低脂質を狙うなら<Marker>調理法の表示</Marker>を必ずチェック。たとえば大戸屋でも、バジルとチーズのアジフライは脂質63.3g、大戸屋風チキン南蛮は脂質70.8gと、揚げ物・チーズ系は一気に脂質が跳ね上がります。やよい軒のチキン南蛮定食も脂質37.7g。「魚＝低脂質」ではなく「焼き・蒸し＝低脂質」と覚えてください。
            </p>
          </WarningBox>
        </section>

        {/* Section 7: 目的別の選び分け */}
        <section className="mb-16">
          <SectionHeading id="how-to-choose">
            目的別・3社の選び分けと注意点
          </SectionHeading>

          <p className="mb-6">
            ここまでの数字を、実際の「その日どうするか」に落とし込みます。目的が決まれば、3社のどこで何を頼むかは自動的に決まります。
          </p>

          <NumberedList
            items={[
              {
                title: "タンパク質を最大化したい日 → やよい軒のしまほっけ定食",
                body: "白米込み631kcalでタンパク質50.7g。3社横断のタンパク質No.1。トレーニング後など、とにかくタンパク質を確保したい日はこれ一択です。",
              },
              {
                title: "脂質を絞りたい日（ローファット）→ 大戸屋の豚ヒレ冷しゃぶ or しまほっけ炭火焼き",
                body: "豚ヒレ冷しゃぶは脂質8.0g/タンパク質42.3g、しまほっけ炭火焼きは脂質13.1g/タンパク質45.5g。低脂質×高タンパクの両立は大戸屋が最強です。",
              },
              {
                title: "カロリーを抑えたい日 → やよい軒の銀鮭の塩焼定食",
                body: "499kcalでタンパク質30.0g。500kcalを切りつつ30gを確保できる、ダイエット中の鉄板。ご飯を少なめにすればさらに下げられます。",
              },
              {
                title: "速く・安く済ませたい日 → 松屋の牛めし（並）",
                body: "687kcal・タンパク質17.1gで¥430。提供の速さと価格は圧倒的。タンパク質を足したいなら半熟玉子（¥80・P5.8g）や冷やっこ（P7.3g）を小鉢で追加すると効率が上がります。",
              },
              {
                title: "揚げ物の気分だが抑えたい日 → 大戸屋のもろみチキン炭火焼きに『置き換える』",
                body: "から揚げ定食（やよい軒・脂質43.4g）の代わりに、もろみチキン炭火焼き（大戸屋・脂質30.9g/タンパク質42.3g）にすると、満足感を保ちつつ脂質を約12g削減できます。",
              },
            ]}
          />

          <TipBox title="増量サイズは『別物』として扱う">
            <p>
              大盛・特盛・超特盛はカロリー・炭水化物が大きく増えます。たとえばやよい軒のしまほっけ定食はもち麦大盛で785kcal、松屋の牛めしは特盛で1,237kcal。<Marker>増量サイズは「同じメニューの別物」</Marker>と考え、増量期やハードな練習日に限定して使うのが安全です。本記事のランキングはすべて標準サイズが前提です。
            </p>
          </TipBox>

          {/* 内部リンク導線 */}
          <SubSectionHeading>3社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低脂質ランキングは、こちらから全メニューを確認できます。やよい軒と松屋は、定食と丼の選び方まで踏み込んだ
            <Link href="/guide/yayoiken-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">やよい軒の高タンパク・ダイエットガイド</Link>
            ・
            <Link href="/guide/matsuya-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">松屋ダイエットガイド</Link>
            でさらに深掘りしています。3社にこだわらず「定食チェーン全体で高タンパクを探す」なら
            <Link href="/guide/high-protein-chain-database" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食高タンパクメニューのデータベース</Link>
            、筋肉づくりの食べ方は
            <Link href="/guide/muscle-eating-out" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食で筋肉をつける食べ方ガイド</Link>
            もどうぞ。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/yayoiken" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍱 やよい軒</Link>
            <Link href="/chains/ootoya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍱 大戸屋</Link>
            <Link href="/chains/matsuya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🥩 松屋</Link>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            定食は「チェーン選び」と「メニュー選び」で、同じカロリー帯でもタンパク質・脂質が大きく変わります。3社の標準サイズで比べたポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "タンパク質No.1はやよい軒のしまほっけ定食（631kcal/P50.7g）。外食でタンパク質50gに届く稀な一皿",
              "低脂質×高タンパクは大戸屋が最強（豚ヒレ冷しゃぶ627kcal/P42.3g/F8.0g、しまほっけ炭火焼き612kcal/P45.5g/F13.1g）",
              "カロリー最少クラスはやよい軒の銀鮭の塩焼定食（499kcal/P30.0g）。500kcal以内でP30g",
              "松屋は牛めし（並）687kcal/P17.1g・¥430で速さと安さが魅力。丼ベースのためタンパク質は控えめ",
              "大盛・特盛は別物として扱い、ご飯少なめ・揚げ物回避が3社共通のダイエット鉄則",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        {/* ServiceOffers（FAQ直前） */}
        <ServiceOffers tag="protein" />

        {/* FAQ */}
        <FAQSection
          slug="teishoku-comparison"
          items={[
            {
              q: "やよい軒・大戸屋・松屋の定食で一番タンパク質が多いのはどれですか？",
              a: "標準サイズ（並盛・白米）の定番定食では、やよい軒のしまほっけ定食がタンパク質50.7g（631kcal）で最多です。次いで大戸屋のしまほっけの炭火焼き（612kcal/タンパク質45.5g）、大戸屋の豚ヒレの冷しゃぶ おろし柚香だれ（627kcal/タンパク質42.3g）と続きます（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "ダイエット中におすすめの定食はどれですか？",
              a: "カロリーを抑えつつタンパク質も確保するなら、やよい軒の銀鮭の塩焼定食（499kcal/タンパク質30.0g）が低カロリーで優秀です。脂質まで絞りたいローファット期は大戸屋の豚ヒレの冷しゃぶ（627kcal/タンパク質42.3g/脂質8.0g）が別格。いずれもご飯を少なめにすればさらにカロリーを下げられます。",
            },
            {
              q: "脂質が一番低い定食はどこのチェーンですか？",
              a: "大戸屋の豚ヒレの冷しゃぶ おろし柚香だれが脂質8.0g（タンパク質42.3g）で、3社横断でも突出して低脂質です。同じく大戸屋のしまほっけの炭火焼き（脂質13.1g）も低く、低脂質×高タンパクの両立は大戸屋が得意です。焼き・蒸し・炭火焼きを選ぶのが低脂質のコツです。",
            },
            {
              q: "松屋は定食チェーンとして高タンパクですか？",
              a: "松屋は牛めし（丼）が主役のため、定食系のやよい軒・大戸屋に比べるとタンパク質は控えめです。牛めし（並）は687kcal/タンパク質17.1g、牛焼肉定食で806kcal/タンパク質23.3g。タンパク質を増やしたい場合は、半熟玉子（¥80・タンパク質5.8g）や冷やっこ（タンパク質7.3g）などの小鉢を追加すると効率が上がります。価格と提供スピードは3社で最も優れています。",
            },
            {
              q: "大盛や特盛にするとどれくらいカロリーが増えますか？",
              a: "ご飯の増量で大きく変わります。やよい軒のしまほっけ定食は白米631kcal→もち麦大盛785kcal。松屋の牛めしは並687kcal→特盛1,237kcalです。本記事の比較はすべて標準サイズ（並盛・白米）が前提で、大盛・特盛は別物として扱うことをおすすめします。",
            },
            {
              q: "ご飯を減らすとどれくらいカロリーを下げられますか？",
              a: "大戸屋を例にすると、ご飯 普通盛り(180g)は302kcal、少なめ(100g)なら168kcalで約134kcalのカットになります。主菜のタンパク質はそのままにご飯だけを減らせるため、どの定食でも100kcal以上は下げられます。減量中の最も手軽な調整方法です。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="定食3社をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />

        <UpdateHistory
          entries={[
            { date: "2026-06-24", note: "初稿公開（やよい軒・大戸屋・松屋の公式栄養データに基づく標準サイズ横断比較）" },
          ]}
        />

        <ArticleFooter currentSlug="teishoku-comparison" />

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
