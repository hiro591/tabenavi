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
  ArticleImage,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

const HERO = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop";

export const metadata: Metadata = {
  title:
    "松のやのダイエット・カロリーガイド｜とんかつを太りにくく食べる選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/matsunoya-diet" },
  description:
    "とんかつ専門・松のやでダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ロースかつとささみかつの違い、ご飯・揚げ物量の調整、高タンパクで太りにくい選び方を紹介します。",
  keywords: [
    "松のや カロリー",
    "松のや ダイエット",
    "松のや 太らない",
    "松のや ロースかつ カロリー",
    "松のや ささみかつ カロリー",
    "松のや 低カロリー",
  ],
  openGraph: {
    title: "松のやのダイエット・カロリーガイド｜とんかつを太りにくく食べる選び方",
    description:
      "とんかつ専門・松のやでダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ロースかつとささみかつの違い、ご飯・揚げ物量の調整、高タンパクな選び方を紹介します。",
    url: "https://www.tabenavi.jp/guide/matsunoya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "松のやのダイエット・カロリーガイド｜とんかつを太りにくく食べる選び方",
  description:
    "とんかつ専門・松のやでダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ロースかつとささみかつの違い、ご飯・揚げ物量の調整、高タンパクな選び方を紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/matsunoya-diet",
};

const tocItems = [
  { id: "basics", label: "松のやで太りにくく食べる基本" },
  { id: "calorie-ranking", label: "カロリー・PFCランキング" },
  { id: "high-protein", label: "高タンパクな選び方" },
  { id: "low-calorie", label: "カロリーを抑える組み合わせ" },
  { id: "rosu-vs-sasami", label: "ロースかつ vs ささみかつ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function MatsunoyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="松のやでダイエット"
        subtitle="とんかつを太りにくく食べるカロリー・PFCの選び方【2026年最新】"
        imageUrl={HERO}
        breadcrumb="松のやダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="matsunoya-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          松のやは<Marker>とんかつ・揚げ物に特化した定食チェーン</Marker>です。ご飯と千切りキャベツが付く定食スタイルが基本で、揚げ物の脂質をどう抑えるかがダイエットの分かれ目になります。とんかつ＝太る、と諦めてしまいがちですが、メニューの選び方次第で同じ「かつ定食」でも数百kcalの差がつきます。
        </p>
        <p className="mb-4">
          カロリーと脂質を抑えたいなら、定番のロースかつ定食（830kcal・脂質31.8g）より、<Marker color="blue">ささみかつ定食（846kcal・脂質25.7g・タンパク質36.7g）</Marker>のほうが高タンパク・低脂質。さらにご飯を小盛に変える、千切りキャベツを先に食べるといった工夫で、満足感を保ちながらカロリーをコントロールできます。
        </p>
        <p className="mb-8">
          この記事では、松のやのメニューをカロリー・PFCの実データで比較し、太りにくい選び方と避けたい高カロリーメニューを具体的に解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src={HERO} alt="とんかつ・和食のイメージ" />

        {/* Section 1: 基本 */}
        <section className="mb-16">
          <QuickAnswer
            question={"松のやでダイエット向きのメニューはどれですか？"}
            answer={
              <>
                松のやは揚げ物専門ですが、<strong>ささみかつ</strong>を選べば太りにくく食べられます。単品ささみかつ（1枚）は196kcal・タンパク質14.1g・脂質9.1gと、ロースかつ（単品442kcal・脂質30.3g）より脂質が約3分の1。定食でも<strong>ささみかつ定食（846kcal・P36.7g・F25.7g）</strong>はロースかつ定食（830kcal・F31.8g）より高タンパク・低脂質です。脂質をさらに抑えるなら<strong>鬼おろしポン酢ささみかつ定食（812kcal・F19.8g）</strong>が松のやのかつ定食の中で最も低脂質（玉子かけごはん定食などの軽食を除く）。ご飯を小盛（234kcal）にすれば、並盛（343kcal）より約109kcal抑えられます。
              </>
            }
          />

          <SectionHeading id="basics">松のやで太りにくく食べる基本</SectionHeading>

          <p className="mb-4">
            松のやのカロリーは、大きく分けて<Marker>「揚げ物の種類」「ご飯の量」「ソース・トッピング」</Marker>の3つで決まります。とんかつ専門店だからこそ、この3点を押さえるだけで同じ満足感でもカロリー・脂質を大きく減らせます。
          </p>

          <NumberedList
            items={[
              {
                title: "揚げ物は「ささみかつ・唐揚げ」を軸に",
                body: "脂質はロースかつ(単品F30.3g)が突出して高く、ささみかつ(単品F9.1g)・本格唐揚げ(3個でF17g)は控えめ。タンパク質はしっかり摂れるため、脂質を抑えたい日はささみかつ、たんぱく量重視なら唐揚げが基本になります。",
              },
              {
                title: "ご飯は「小盛」を選べる",
                body: "ライスは小盛234kcal・並盛343kcal・大盛499kcal。小盛にするだけで並盛より約109kcal、糖質も約26gカットできます。定食のご飯量で総カロリーは大きく変わります。",
              },
              {
                title: "ソース・揚げ物トッピングを足しすぎない",
                body: "特製ソース(20g・25kcal)や中濃ソース(20g・23kcal)は控えめですが、タルタルソース(66kcal)やチーズ(159kcal・F13.4g)、コロッケ(157kcal)などの追加は脂質を一気に押し上げます。",
              },
            ]}
          />

          <TipBox title="松のやの定食は「キャベツ」が味方">
            <p>松のやの定食には<Marker>千切りキャベツ</Marker>が付きます。単品でも千切りキャベツ(17kcal)・ミニキャベツ(11kcal)が低カロリー。<Marker color="blue">ご飯やとんかつより先にキャベツを食べる</Marker>ことで食物繊維が血糖値の急上昇をゆるやかにし、満腹感も得やすくなります。ドレッシングはごまドレッシング(30g・26kcal)など低めのものを選ぶか、量を半分にするとさらにカロリーを抑えられます。</p>
          </TipBox>

          <p className="text-xs text-gray-400 mb-2">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>
        </section>

        {/* Section 2: ランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">松のや主要メニューのカロリー・PFCランキング</SectionHeading>

          <p className="mb-4">
            まずは松のやの<Marker>定食・丼を標準サイズ（並盛・単品）で比較</Marker>します。カロリーの低い順に並べました。とんかつ専門店のため全体に高カロリー帯ですが、その中でも脂質とタンパク質のバランスには大きな差があります。
          </p>

          <NutritionTable
            caption="※標準サイズ(定食・丼は並盛/ライス並盛込み、単品は1枚または記載個数)で比較。大盛・特盛・超厚切りなど極端な品は後述の章で別途注記。出典: 松のや公式栄養成分・たべなびDB(2026年6月時点)"
            items={[
              { name: "単品ささみかつ（1枚）", calories: 196, protein: 14.1, fat: 9.1, carbs: 15.1, highlight: true },
              { name: "単品本格唐揚げ（3個）", calories: 281, protein: 17.0, fat: 17.0, carbs: 15.9 },
              { name: "単品ロースかつ（1枚）", calories: 442, protein: 18.9, fat: 30.3, carbs: 23.9 },
              { name: "玉子かけごはん定食", calories: 445, protein: 13.1, fat: 6.2, carbs: 85.9, highlight: true },
              { name: "玉子丼 並盛", calories: 572, protein: 21.1, fat: 11.1, carbs: 96.9, highlight: true },
              { name: "鬼おろしポン酢ささみかつ定食", calories: 812, protein: 37.5, fat: 19.8, carbs: 126.3, highlight: true },
              { name: "ロースかつ定食", calories: 830, protein: 26.8, fat: 31.8, carbs: 113.4 },
              { name: "本格唐揚げ定食（5個）", calories: 855, protein: 36.3, fat: 29.9, carbs: 116.0 },
              { name: "ささみかつ定食", calories: 846, protein: 36.7, fat: 25.7, carbs: 122.1, highlight: true },
              { name: "ロースかつ丼 並盛", calories: 1011, protein: 39.8, fat: 41.4, carbs: 120.2 },
              { name: "うまトマロースかつ定食", calories: 1036, protein: 35.4, fat: 44.1, carbs: 126.7 },
            ]}
          />

          <p className="mb-4">
            注目すべきは脂質です。<Marker color="blue">ロースかつ定食（F31.8g）とささみかつ定食（F25.7g）は総カロリーがほぼ同じ</Marker>なのに、ささみかつのほうが脂質が約6g少なく、タンパク質は約10g多い。同じ「揚げ物定食」でも、選ぶ揚げ物でPFCバランスが大きく変わることがわかります。
          </p>

          <TipBox title="とんかつ専門店ならではの見方">
            <p>松のやのメニューは<Marker>ほとんどが揚げ物＋ご飯</Marker>の構成です。そのため牛丼チェーンのような「ご飯抜き」での大幅な低カロリー化は難しく、<Marker color="blue">揚げ物の種類とご飯量で調整する</Marker>のが基本戦略になります。揚げ物自体を変えられない場合は、ご飯を小盛にして総量を抑えましょう。</p>
          </TipBox>
        </section>

        <ArticleImage src={HERO} alt="とんかつ定食のイメージ" />

        {/* Section 3: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクに食べたいときの選び方</SectionHeading>

          <p className="mb-6">
            松のやは揚げ物専門だけあって、<Marker>タンパク質をしっかり摂れる</Marker>のが強み。脂質を抑えつつタンパク質を確保できる、高タンパクなメニューベスト3を紹介します。
          </p>

          <RankingCard
            rank={1}
            title="鬼おろしポン酢ささみかつ定食"
            subtitle="812kcal / P37.5g / F19.8g / C126.3g"
            calories={812}
            protein={37.5}
            fat={19.8}
            carbs={126.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              松のやのかつ定食の中で<Marker color="blue">最も脂質が低く（F19.8g）、タンパク質は37.5gと最高クラス</Marker>。鬼おろしポン酢でさっぱり食べられるため、こってりしたソースを使わない分も脂質を抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ロースかつ定食（F31.8g）と比べて脂質が約12g少なく、タンパク質は約11g多い。<Marker>脂質を抑えて高タンパクに食べたい日</Marker>はこれが松のやの最適解です。ご飯を小盛にすればさらに約109kcalカットできます。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="ささみかつ定食"
            subtitle="846kcal / P36.7g / F25.7g / C122.1g"
            calories={846}
            protein={36.7}
            fat={25.7}
            carbs={122.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              松のやの「とんかつ定食を食べたいけど太りたくない」に最も応えてくれる定番。<Marker color="green">タンパク質36.7gを確保しつつ脂質25.7g</Marker>と、ロースかつ定食（F31.8g）より約6g脂質が低い。ささみかつはむね肉系の部位で脂質が少なく、揚げ物でも比較的軽く食べられます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="本格唐揚げ定食（5個）"
            subtitle="855kcal / P36.3g / F29.9g / C116.0g"
            calories={855}
            protein={36.3}
            fat={29.9}
            carbs={116.0}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              唐揚げ5個でタンパク質36.3gとしっかり確保できる定食。脂質29.9gはロースかつ定食（F31.8g）よりわずかに低く、<Marker>炭水化物も116gと定食内では控えめ</Marker>。とんかつより唐揚げ派の人の高タンパク選択として有力です。
            </p>
          </RankingCard>

          <p className="mb-4">
            単品で見ると、<Marker color="blue">単品ささみかつ（1枚）は196kcalでタンパク質14.1g・脂質9.1g</Marker>。脂質あたりのタンパク質効率（P/F比 約1.55）が松のやのかつ類でトップクラスです。単品本格唐揚げ（3個）は281kcalでタンパク質17g。トッピングや単品で組むなら、この2つが脂質を抑えつつタンパク質を足せる選択肢になります。
          </p>

          <ComparisonTable
            headers={["単品メニュー", "カロリー", "タンパク質", "脂質", "P/F比"]}
            rows={[
              ["単品ささみかつ（1枚）", "196 kcal", "P 14.1g", "F 9.1g", "1.55"],
              ["単品本格唐揚げ（3個）", "281 kcal", "P 17.0g", "F 17.0g", "1.00"],
              ["単品ロースかつ（1枚）", "442 kcal", "P 18.9g", "F 30.3g", "0.62"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            P/F比（タンパク質÷脂質）が高いほど「脂質が少なくタンパク質が多い」優秀な揚げ物。<Marker color="blue">ささみかつ（1.55）は同じ揚げ物のロースかつ（0.62）の2倍以上効率が良い</Marker>のが数字でわかります。
          </p>
        </section>

        {/* Mid CTA */}
        <CTABanner
          title="松のやのカロリー・PFCをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・タンパク質・脂質で比較できます"
        />

        {/* Section 4: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">カロリーを抑えたいときの組み合わせ</SectionHeading>

          <p className="mb-4">
            とんかつ定食はどうしても800kcalを超えがちですが、<Marker>揚げ物を使わない選択肢やご飯量の調整</Marker>でカロリーを抑えることもできます。
          </p>

          <SubSectionHeading>揚げ物を控えたい日の選択肢</SubSectionHeading>

          <p className="mb-4">
            松のやには揚げ物以外のメニューも一部あります。<Marker color="blue">玉子かけごはん定食（445kcal・F6.2g）</Marker>は脂質がわずか6.2gで、松のやの食事系メニューの中でも特に軽め。タンパク質も13.1g摂れます。玉子丼 並盛（572kcal・P21.1g・F11.1g）も、揚げ物定食より約240kcal以上軽く、タンパク質はしっかり確保できる丼です。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "向いている人"]}
            rows={[
              ["玉子かけごはん定食", "445 kcal", "P 13.1g", "F 6.2g", "とにかく軽くしたい日"],
              ["玉子丼 並盛", "572 kcal", "P 21.1g", "F 11.1g", "軽め＋たんぱく確保"],
              ["鬼おろしポン酢ささみかつ定食", "812 kcal", "P 37.5g", "F 19.8g", "かつを食べたい高タンパク日"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>ご飯量で調整する</SubSectionHeading>

          <p className="mb-4">
            松のやのライスは<Marker>小盛234kcal・並盛343kcal・大盛499kcal・特盛624kcal</Marker>。定食でご飯を小盛にすれば、並盛から約109kcal・糖質約26gをカットできます。揚げ物自体を変えなくても、ご飯量だけで総カロリーを調整できるのが定食の利点です。
          </p>

          <ComparisonTable
            headers={["ライス", "カロリー", "タンパク質", "炭水化物", "並盛との差"]}
            rows={[
              ["小盛", "234 kcal", "P 3.8g", "C 55.7g", "−109 kcal"],
              ["並盛", "343 kcal", "P 5.5g", "C 81.6g", "基準"],
              ["大盛", "499 kcal", "P 8.0g", "C 118.7g", "+156 kcal"],
              ["特盛", "624 kcal", "P 10.0g", "C 148.4g", "+281 kcal"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="ご飯小盛 × ささみかつでさらに軽く">
            <p>ささみかつ定食(846kcal)のご飯を小盛にすると、概算で<Marker>約737kcal前後</Marker>まで下げられます(ライス並盛343kcal→小盛234kcalで約109kcal減)。<Marker color="blue">高タンパク(P36.7g)を保ったまま総カロリーを抑えられる</Marker>のが、定食でご飯量を調整する最大のメリットです。</p>
          </TipBox>
        </section>

        <ArticleImage src={HERO} alt="和食・揚げ物のイメージ" />

        {/* Section 5: ロース vs ささみ */}
        <section className="mb-16">
          <SectionHeading id="rosu-vs-sasami">ロースかつ vs ささみかつ：どちらがダイエット向き？</SectionHeading>

          <p className="mb-4">
            松のやの看板はロースかつですが、ダイエット視点では<Marker>ささみかつのほうが太りにくい</Marker>といえます。同じ「かつ定食」で比較すると、その差は明確です。
          </p>

          <ComparisonTable
            headers={["比較項目", "ロースかつ定食", "ささみかつ定食"]}
            rows={[
              ["カロリー", "830 kcal", "846 kcal"],
              ["タンパク質", "26.8g", "36.7g"],
              ["脂質", "31.8g", "25.7g"],
              ["炭水化物", "113.4g", "122.1g"],
              ["P/F比(高いほど低脂質高たんぱく)", "0.84", "1.43"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            総カロリーはほぼ同じ（差16kcal）ですが、<Marker color="blue">ささみかつ定食はタンパク質が約10g多く、脂質は約6g少ない</Marker>。P/F比はロースかつの0.84に対しささみかつは1.43と、明確にささみかつのほうが「太りにくい揚げ物」です。
          </p>

          <p className="mb-4">
            ロースかつは脂身を含む部位のため脂質が高め（単品でF30.3g）。一方ささみかつはむね肉系で脂質が少なく、揚げてもF9.1g（単品）に収まります。<Marker>とんかつの満足感は欲しいけれど脂質は抑えたい</Marker>──そんなときはささみかつを選ぶのが松のやでの賢い選択です。
          </p>

          <TipBox title="ロースかつを食べるなら">
            <p>どうしてもロースかつが食べたい日は、<Marker>ご飯を小盛にする・千切りキャベツを先に食べる・ソースを控えめにする</Marker>の3点でカロリーと血糖値の上昇を抑えましょう。さっぱり食べられる鬼おろしポン酢ロースかつ定食(861kcal)も選択肢ですが、脂質(F31.9g)はロースかつ定食とほぼ同等です。脂質まで抑えたいなら、やはりささみかつが有利です。</p>
          </TipBox>
        </section>

        {/* Section 6: 避けたい */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            松のやには<Marker>1,000kcalを大きく超えるメニュー</Marker>も少なくありません。ボリュームメニューやトッピング系は、1食で1日の摂取カロリーの大半を占めてしまうこともあります。
          </p>

          <WarningBox title="ダイエット中は頻度を抑えたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">ロースかつ丼 並盛（1011kcal・F41.4g）</span> ─ 揚げたロースかつを卵でとじた丼。脂質41.4gと高く、ご飯量も多め。</li>
              <li><span className="font-bold">うまトマロースかつ定食（1036kcal・F44.1g）</span> ─ ロースかつにチーズ・トマトソースが加わり脂質が大幅増。</li>
              <li><span className="font-bold">超厚切りロースかつ定食（1181kcal・F58.0g）</span> ─ 厚切り肉で脂質58gに到達。1食でかなりのカロリーオーバーに。</li>
              <li><span className="font-bold">ダブルロースかつ定食（1272kcal・F62.2g）</span> ─ ロースかつ2枚。脂質62gは1日の目安を大きく超えやすい。</li>
              <li><span className="font-bold">松のやのとんかつバーガー（986kcal・F68.7g）</span> ─ 名前はバーガーでも脂質68.7gと揚げ物定食以上に高脂質。</li>
            </ul>
          </WarningBox>

          <WarningBox title="トッピング・サイドの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">単品チーズ（159kcal・F13.4g）・タルタルソース（66kcal）</span> ─ 揚げ物に足すと脂質が一気に上乗せ。かけすぎ注意。</li>
              <li><span className="font-bold">ポテトフライ（329kcal）・倍盛りポテトフライ（658kcal）</span> ─ 揚げ物に揚げ物を重ねる組み合わせ。千切りキャベツ(17kcal)に置き換えを。</li>
              <li><span className="font-bold">ライス大盛（499kcal）・特盛（624kcal）</span> ─ 並盛から+156〜281kcal。糖質も大幅増になるため小盛・並盛が無難。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらは<Marker color="blue">「揚げ物 × 高脂質トッピング」または「揚げ物 × 大盛ご飯」</Marker>の組み合わせで高カロリーになっています。逆に言えば、揚げ物を1種に絞り、ご飯を小盛、トッピングを足さなければ、松のやでも800kcal前後に収めることは十分可能です。
          </p>
        </section>

        {/* Section 7: コツ */}
        <section className="mb-16">
          <SectionHeading id="tips">松のやで太りにくく食べるコツ</SectionHeading>

          <p className="mb-6">
            とんかつ専門店ならではの<Marker>「揚げ物・ご飯・キャベツ」の3点コントロール</Marker>を中心に、太りにくい食べ方をまとめます。
          </p>

          <NumberedList
            items={[
              {
                title: "まず千切りキャベツから食べる",
                body: "定食に付く千切りキャベツ(単品17kcal)を最初に食べると、食物繊維で血糖値の急上昇がゆるやかに。満腹感も先に得られ、ご飯やとんかつの食べ過ぎを防げます。ドレッシングは半量にするとさらにヘルシー。",
              },
              {
                title: "揚げ物は脂質の低いものを選ぶ",
                body: "ロースかつ(単品F30.3g)より、ささみかつ(単品F9.1g)や本格唐揚げ(3個F17g)を選ぶと脂質を大きく抑えられます。タンパク質はしっかり摂れるので、満足感は損なわれません。",
              },
              {
                title: "ご飯は小盛にする",
                body: "ライスを並盛(343kcal)から小盛(234kcal)にするだけで約109kcal・糖質約26gカット。揚げ物を変えられない日でも、ご飯量で総カロリーを調整できます。",
              },
              {
                title: "ソースは少なめ・別皿で",
                body: "特製ソースや中濃ソースは1回20gで20〜25kcal程度ですが、かけすぎると塩分・糖質も増えます。鬼おろしポン酢(32kcal)やレモンでさっぱり食べると、味変しながら脂質の追加を抑えられます。",
              },
              {
                title: "揚げ物トッピングを重ねない",
                body: "チーズ(159kcal)・コロッケ(157kcal)・タルタルソース(66kcal)・ポテトフライ(329kcal)などを足すと脂質が急増。追加するなら千切りキャベツ・お新香(17kcal)・冷奴(85kcal)など低脂質の小鉢を選びましょう。",
              },
            ]}
          />

          <ArticleImage src={HERO} alt="揚げ物を太りにくく食べるイメージ" />

          <SubSectionHeading>目的別・松のやのおすすめ組み合わせ</SubSectionHeading>

          <ComparisonTable
            headers={["目的", "おすすめ", "カロリー", "特徴"]}
            rows={[
              ["とにかく軽く", "玉子かけごはん定食", "445 kcal", "脂質6.2gで最軽量"],
              ["低脂質×高たんぱく", "鬼おろしポン酢ささみかつ定食", "812 kcal", "F19.8g/P37.5g"],
              ["かつ定食を太りにくく", "ささみかつ定食(ご飯小盛)", "約737 kcal", "P36.7g維持で約109kcal減"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            低脂質で高タンパクに食べたいなら、<Marker color="blue">鬼おろしポン酢ささみかつ定食（F19.8g・P37.5g）</Marker>が松のやのベストバランス。揚げ物定食でありながら脂質を20g未満に抑えられ、タンパク質はしっかり確保できます。
          </p>

          <SubSectionHeading>松のやを使いこなすチェックリスト</SubSectionHeading>

          <CheckList
            items={[
              "ロースかつより脂質が約6g低く高タンパクなささみかつ定食を基本にする",
              "脂質を抑えたい日は鬼おろしポン酢ささみかつ定食(F19.8g)が最適",
              "ご飯は小盛(234kcal)を選んで並盛より約109kcalカット",
              "千切りキャベツを最初に食べて血糖値の急上昇と食べ過ぎを抑える",
              "チーズ・タルタル・ポテトなど揚げ物系トッピングは足しすぎない",
            ]}
          />
        </section>

        <ServiceOffers tag="diet" />

        {/* Summary */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            松のやはとんかつ専門店ですが、揚げ物の種類とご飯量を選べばダイエット中でも楽しめます。記事のポイントを整理しました。
          </p>
          <ArticleSummary
            points={[
              "ロースかつ定食(830kcal・F31.8g)よりささみかつ定食(846kcal・F25.7g・P36.7g)が高タンパク・低脂質でダイエット向き",
              "脂質を最も抑えたいなら鬼おろしポン酢ささみかつ定食(812kcal・F19.8g・P37.5g)が松のやの定食でトップ",
              "揚げ物を控えたい日は玉子かけごはん定食(445kcal・F6.2g)や玉子丼 並盛(572kcal)が軽め",
              "ライスを小盛(234kcal)にすれば並盛(343kcal)より約109kcal・糖質約26gカットできる",
              "超厚切りロースかつ定食(1181kcal)やうまトマロースかつ定食(1036kcal)など高脂質メニューは頻度を抑える",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。一部の合計値は単品の栄養成分から算出した概算です。
          </p>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            松のやのメニューを目的別にもっと詳しく見たい方は、{" "}
            <Link href="/chains/matsunoya" className="text-sky-600 font-medium hover:underline">
              松のやのメニュー一覧・栄養データ
            </Link>{" "}
            から、{" "}
            <Link href="/chains/matsunoya/high-protein" className="text-sky-600 font-medium hover:underline">
              高タンパクランキング
            </Link>
            、{" "}
            <Link href="/chains/matsunoya/diet" className="text-sky-600 font-medium hover:underline">
              ダイエットおすすめ
            </Link>
            、{" "}
            <Link href="/chains/matsunoya/low-calorie" className="text-sky-600 font-medium hover:underline">
              低カロリーランキング
            </Link>{" "}
            をチェックできます。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            外食全般でダイエットを成功させたい方は{" "}
            <Link href="/guide/eating-out-diet" className="text-sky-600 font-medium hover:underline">
              外食ダイエットの基本ガイド
            </Link>
            、揚げ物の脂質が気になる方は{" "}
            <Link href="/guide/low-fat-eating-out" className="text-sky-600 font-medium hover:underline">
              低脂質な外食の選び方
            </Link>
            、筋トレ中の方は{" "}
            <Link href="/guide/muscle-eating-out" className="text-sky-600 font-medium hover:underline">
              高タンパクな外食メニュー
            </Link>{" "}
            もあわせてご覧ください。チェーン横断で数値を比べたいときは{" "}
            <Link href="/guide/calorie-database" className="text-sky-600 font-medium hover:underline">
              外食カロリーデータベース
            </Link>{" "}
            が便利です。
          </p>
        </section>

        <FAQSection
          slug="matsunoya-diet"
          items={[
            {
              q: "松のやでカロリーが低い食事メニューはどれですか？",
              a: "食事系で軽いのは玉子かけごはん定食(445kcal・脂質6.2g)と玉子丼 並盛(572kcal・タンパク質21.1g・脂質11.1g)です。かつ定食の中では鬼おろしポン酢ささみかつ定食(812kcal・脂質19.8g)が最も脂質が低くなります。単品ではささみかつ(1枚・196kcal)が手軽です。",
            },
            {
              q: "松のやのロースかつとささみかつ、ダイエットにはどちらが良いですか？",
              a: "ささみかつのほうがダイエット向きです。ロースかつ定食(830kcal・タンパク質26.8g・脂質31.8g)に対し、ささみかつ定食(846kcal・タンパク質36.7g・脂質25.7g)はタンパク質が約10g多く脂質は約6g少なめ。ささみかつはむね肉系で脂質が低く、単品でも196kcal・脂質9.1gとロースかつ(単品442kcal・脂質30.3g)より大幅に軽くなります。",
            },
            {
              q: "松のやで脂質を一番抑えられる定食は何ですか？",
              a: "鬼おろしポン酢ささみかつ定食です。脂質19.8gと松のやの揚げ物定食の中で最も低く、タンパク質は37.5gと高め。鬼おろしポン酢でさっぱり食べられ、こってりソースを使わない分も脂質を抑えられます。ロースかつ定食(脂質31.8g)より脂質が約12g少なくなります。",
            },
            {
              q: "松のやでダイエット中に避けたほうがよいメニューはありますか？",
              a: "超厚切りロースかつ定食(1181kcal・脂質58.0g)、ダブルロースかつ定食(1272kcal・脂質62.2g)、うまトマロースかつ定食(1036kcal・脂質44.1g)、松のやのとんかつバーガー(986kcal・脂質68.7g)などは高カロリー・高脂質です。揚げ物に高脂質トッピングや大盛ご飯を重ねると1,000kcalを超えやすいため頻度を抑えましょう。",
            },
            {
              q: "松のやでご飯の量は調整できますか？",
              a: "ライスは小盛(234kcal)・並盛(343kcal)・大盛(499kcal)・特盛(624kcal)から選べます。並盛を小盛にすると約109kcal・糖質約26gカットできます。揚げ物を変えられない日でも、ご飯を小盛にするだけで総カロリーを抑えられます。",
            },
            {
              q: "松のやで満腹感を保ちながらカロリーを抑えるコツは？",
              a: "定食に付く千切りキャベツ(単品17kcal)を最初に食べるのが有効です。食物繊維で血糖値の急上昇がゆるやかになり、満腹感も先に得られます。加えてご飯を小盛にし、チーズ・タルタル・ポテトなど揚げ物系トッピングを足さなければ、松のやでも800kcal前後に収められます。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリー・脂質を数字で選ぶ"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="matsunoya-diet" />

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
