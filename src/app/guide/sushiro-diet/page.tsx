import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  CompareBar,
  ArticleImage,
  MenuPhoto,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure } from "@/components/guide/AffiliateComponents";
import { ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "スシローのカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/sushiro-diet" },
  description:
    "スシローのメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。スシローはPFC（タンパク質・脂質・炭水化物）を公開していないため、カロリー中心に解説します。",
  keywords: [
    "スシロー カロリー",
    "スシロー ダイエット",
    "スシロー カロリー一覧",
    "スシロー 低カロリー",
    "スシロー カロリー ランキング",
    "回転寿司 ダイエット",
  ],
  openGraph: {
    title:
      "スシローのカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方",
    description:
      "スシローのメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。",
    url: "https://www.tabenavi.jp/guide/sushiro-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "スシローのカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方",
  description:
    "スシローのメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/sushiro-diet",
};

const tocItems = [
  { id: "pfc-note", label: "スシローのカロリーの見方（PFCは非公開）" },
  { id: "low-cal-neta", label: "低カロリーなネタ・サイド" },
  { id: "calorie-ranking", label: "ネタ・サイドのカロリー比較" },
  { id: "high-cal", label: "高カロリーで注意したいメニュー" },
  { id: "how-to-eat", label: "太りにくい食べ方・組み合わせ" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "summary", label: "まとめ" },
];

export default function SushiroDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="スシローのカロリーガイド"
        subtitle="低カロリーなネタの選び方と太りにくい食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=400&fit=crop"
        breadcrumb="スシローのカロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="sushiro-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月25日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="スシローでダイエット中におすすめのネタは？低カロリーで何を選べばいい？"
          answer={
            <>
              カロリーを抑えたいなら<strong>「大えび」（43kcal）「上穴子」（54kcal）「水たこ」（66kcal）「甘えび」（70kcal）「いか」（70kcal）「厳選まぐろ赤身」（81kcal）</strong>といった、えび・いか・貝・白身・赤身系のにぎりが目安。<strong>味噌汁類（あおさと海苔の味噌汁48kcal、あさりの味噌汁57kcal）</strong>を1杯足しても合計を抑えやすいです。逆に注意したいのは<strong>どんぶりポテト（559kcal）やラーメン類（247〜399kcal）、うどん類（194〜315kcal）、揚げ物・サイド</strong>。寿司は1皿あたりは控えめでも、<strong>皿数が増えるほど合計カロリーは積み上がる</strong>点に注意しましょう。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          スシローは手頃な価格で本格的な寿司を楽しめる回転寿司チェーンとして人気ですが、選び方しだいで<Marker>ダイエット中でも比較的カロリーを抑えやすい</Marker>外食先です。えび・いか・貝・白身・赤身などのにぎりは、<Marker>1皿あたりおおむね40〜90kcal台</Marker>と控えめなものが多いのが理由です。
        </p>
        <p className="mb-4">
          ただし、回転寿司は<Marker color="blue">1皿が小さく、つい皿数が増えてカロリーが積み上がりやすい</Marker>のが落とし穴。サイドのラーメン・うどん・揚げ物・デザートを加えると、合計は一気に増えます。
        </p>
        <p className="mb-4">
          なお、<strong>スシローは公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説します。</strong>個々のメニューにタンパク質や糖質の具体的な数値（◯g）は付けず、カロリーの実データと一般的な栄養の考え方を分けて紹介します。
        </p>
        <p className="mb-8">
          この記事では、スシローの主要メニューを<strong>実データのカロリー順</strong>に整理し、ダイエット中の選び方・食べ方のコツをカロリー基準で詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: PFCは非公開 */}
        <SectionHeading id="pfc-note">
          スシローのカロリーの見方（PFCは非公開）
        </SectionHeading>

        <p className="mb-4">
          この記事を読むうえで、最初に前提を共有しておきます。
        </p>

        <NumberedList
          items={[
            {
              title: "スシローはPFCを公開していない",
              body: "スシローの公式栄養情報はカロリー（kcal）が中心で、タンパク質・脂質・炭水化物（PFC）の数値は公表されていません。そのため本記事では、個々のメニューに「タンパク質◯g」などの数値は付けず、カロリーを基準に解説します。",
            },
            {
              title: "数値はすべてカロリーの実データ",
              body: "この記事に出てくる数値は、たべなびDBに登録されたスシローのカロリー実データです。メニュー改定・店舗・時期により変わる場合があるため、最新は公式情報もあわせてご確認ください。",
            },
            {
              title: "栄養の考え方は「一般論」として補足",
              body: "「まぐろ赤身は一般に高タンパク・低脂質」「麺類やご飯ものは糖質が多くなりやすい」といった話は、あくまで一般的な栄養の考え方です。スシローの特定商品の成分値を示すものではありません。",
            },
          ]}
        />

        <TipBox title="この記事の数値の扱い">
          <p>
            スシローはPFCが非公開のため、<Marker>判断材料はカロリー</Marker>になります。「1皿あたりのカロリー × 食べた皿数」で、おおよその合計をイメージするのがいちばん実用的です。たとえば低カロリーなにぎりを中心に8皿食べても、1皿70kcal前後なら合計は約560kcal前後。皿数とサイドの選び方で、合計は大きく変わります。
          </p>
        </TipBox>

        <MenuPhoto id="sushiro-diet-sushi" genre="sushi" />

        {/* Section 2: 低カロリーなネタ・サイド */}
        <SectionHeading id="low-cal-neta">低カロリーなネタ・サイド</SectionHeading>

        <p className="mb-6">
          まずは、スシローの中でも<Marker>カロリーが控えめなにぎり・サイド</Marker>を、カロリーの低い順に紹介します。えび・いか・貝・白身・赤身系のにぎりは、1皿あたりが軽めのものが多いのが特徴です。
        </p>

        <RankingCard rank={1} title="大えび" subtitle="43kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            えび系のにぎりは<Marker>スシローの中でもとくに低カロリーな部類</Marker>。大えびは1皿43kcalと軽く、複数皿食べても合計を抑えやすいネタです。あっさりした口当たりで、最初の数皿に向いています。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="上穴子" subtitle="54kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            煮あなご（88kcal）より控えめな1皿54kcal。<Marker color="blue">満足感がありながらカロリーは軽め</Marker>で、白身・赤身系と組み合わせやすい一品です。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="水たこ・甘えび・いか" subtitle="66〜70kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            水たこ（66kcal）、甘えび（70kcal）、いか（70kcal）は、いずれも<Marker color="green">70kcal前後</Marker>の軽めネタ。タコ・イカ・貝・えびは一般に脂が少なくあっさりした食感で、皿数を重ねてもカロリーが急増しにくいのが利点です。
          </p>
        </RankingCard>

        <p className="mb-6">
          赤身・白身系も比較的軽めです。<Marker>厳選まぐろ赤身（81kcal）、厳選 天然本鮪赤身（83kcal）、一本釣りかつお（83kcal）、活〆桜鯛（88kcal）、サーモン（91kcal）</Marker>あたりが目安。まぐろ赤身やかつおは、一般に高タンパク・低脂質とされるネタの代表です（スシロー個別の数値は非公開のため、ここでは一般論として補足します）。
        </p>

        <TipBox title="味噌汁を1杯添えると満足感アップ">
          <p>
            <Marker>あおさと海苔の味噌汁（48kcal）やあさりの味噌汁（57kcal）</Marker>は、低カロリーで温かく、食事の満足感を高めやすいサイドです。揚げ物やラーメンを足すよりカロリーを抑えながら、食べ過ぎを防ぎたいときの一品としておすすめです。
          </p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop"
          alt="新鮮なネタが並ぶにぎり寿司のプレート"
        />

        {/* Section 3: カロリー比較 */}
        <SectionHeading id="calorie-ranking">
          ネタ・サイドのカロリー比較
        </SectionHeading>

        <p className="mb-4">
          スシローの代表的なネタ・サイドを<strong>カロリーの低い順</strong>に並べました。<Marker color="blue">にぎり系は40〜90kcal台、麺・揚げ物などのサイドは高め</Marker>という傾向がひと目でわかります。
        </p>

        <CompareBar
          title="スシロー 主要メニュー カロリー比較（低い順）"
          metric="calorie"
          unit="kcal"
          sort="asc"
          highlightTop={5}
          items={[
            { name: "大えび（にぎり）", value: 43 },
            { name: "上穴子（にぎり）", value: 54 },
            { name: "水たこ（にぎり）", value: 66 },
            { name: "甘えび（にぎり）", value: 70 },
            { name: "いか（にぎり）", value: 70 },
            { name: "厳選まぐろ赤身（にぎり）", value: 81 },
            { name: "一本釣りかつお（にぎり）", value: 83 },
            { name: "煮あなご（にぎり）", value: 88 },
            { name: "サーモン（にぎり）", value: 91 },
            { name: "うなぎの蒲焼き（にぎり）", value: 102 },
            { name: "たまご（にぎり）", value: 122 },
            { name: "鉄火巻", value: 169 },
            { name: "いなり", value: 169 },
            { name: "フライドポテト", value: 186 },
            { name: "かけうどん", value: 194 },
            { name: "スシロー 貝塩ラーメン", value: 247 },
            { name: "きつねうどん", value: 315 },
            { name: "豚骨醤油ラーメン", value: 394 },
            { name: "どんぶりポテト", value: 559 },
          ]}
          caption="数値はたべなび掲載の実データ（kcal）。●印は低カロリー上位5品。スシローはP/F/C（タンパク質・脂質・炭水化物）を公開していないため、カロリーのみで比較しています。価格・カロリーは店舗・時期により異なる場合があります。"
        />

        <p className="text-xs text-gray-400 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。スシローはタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説します。メニュー改定・店舗により異なる場合があります。
        </p>

        <TipBox title="カロリー比較の読み解き方">
          <p>
            注目すべきは<Marker>にぎり1皿（40〜90kcal台）と麺・揚げ物サイドの差</Marker>。にぎりは1皿が軽い一方、ラーメンやどんぶりポテトは1品でにぎり数皿ぶんのカロリーになります。寿司は皿数で、サイドは1品の重さで合計が決まる――この2つを意識すると、カロリーをコントロールしやすくなります。
          </p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="スシローのカロリーをサクッと検索"
          subtitle="たべなびなら回転寿司を含む外食メニューのカロリーをすぐに確認できます"
        />

        {/* Section 4: 高カロリーで注意 */}
        <SectionHeading id="high-cal">高カロリーで注意したいメニュー</SectionHeading>

        <p className="mb-4">
          にぎりは軽めでも、<Marker>サイドメニューや一部の巻物・揚げ物はカロリーが高め</Marker>。ダイエット中は数や組み合わせに注意したいメニューを整理しました。
        </p>

        <WarningBox title="ダイエット中は数・組み合わせに注意したいメニュー">
          <ul className="space-y-2">
            <li>
              <span className="font-bold">どんぶりポテト（559kcal）</span> ─ サイドの中でも特に高カロリー。1品でにぎり6〜7皿ぶんに相当します。シェアするか、頻度を抑えるのが無難です。
            </li>
            <li>
              <span className="font-bold">ラーメン類（247〜399kcal）</span> ─ 貝塩ラーメン247kcal、豚骨醤油ラーメン394kcal、まぐろ醤油ラーメン煮玉子付399kcalなど。麺類は一般に糖質が多くなりやすく、〆に頼むと合計が伸びやすい一品です。
            </li>
            <li>
              <span className="font-bold">うどん類（194〜315kcal）</span> ─ かけうどん194kcal、きつねうどん315kcalなど。寿司に加えるとご飯＋麺で炭水化物が重なりやすくなります。
            </li>
            <li>
              <span className="font-bold">揚げ物・天ぷら盛り（186〜306kcal）</span> ─ フライドポテト186kcal、おたマヨで食べるフライドポテト306kcal、天ぷら盛りなど。揚げ物は1品のカロリーが高めです。
            </li>
            <li>
              <span className="font-bold">デザート（166〜222kcal）</span> ─ カタラーナアイスブリュレ166kcal、ストロベリーバニラパフェ222kcalなど。〆の一品でも、皿数のうえに上乗せされます。
            </li>
          </ul>
        </WarningBox>

        <TipBox title="「皿数の積み上げ」に気づきにくいのが回転寿司">
          <p>
            1皿が軽いぶん、回転寿司は<Marker>気づかないうちに皿数が増える</Marker>のが落とし穴。たとえば1皿70kcal前後のにぎりでも、12皿食べれば約840kcal前後になります。サイドのラーメン・揚げ物・デザートを足せば、1食で1,000kcalを超えることも。「あと1皿」の前に、食べた皿数をざっと数える習慣がカロリー管理に効きます。
          </p>
        </TipBox>

        {/* Section 5: 太りにくい食べ方 */}
        <SectionHeading id="how-to-eat">太りにくい食べ方・組み合わせ</SectionHeading>

        <p className="mb-6">
          スシローでカロリーを抑えるコツは、<Marker>軽めのネタを中心に、皿数とサイドをコントロールする</Marker>こと。すぐ実践できる工夫をまとめました。
        </p>

        <CheckList
          items={[
            "えび・いか・貝・たこ・白身・赤身など、40〜90kcal台の軽めネタを中心にする",
            "最初に味噌汁（48〜57kcal）を頼み、温かい汁物で満足感を先に作る",
            "ラーメン・うどんなどの麺類は「寿司＋麺」で炭水化物が重なりやすいので、頼むなら皿数を減らす",
            "どんぶりポテト（559kcal）や揚げ物・パフェなどの高カロリーサイドは、頼むならシェアする",
            "食べた皿の枚数をざっと数え、合計カロリーをイメージしながら食べる",
          ]}
        />

        <SubSectionHeading>軽めネタ中心で組み立てる</SubSectionHeading>
        <p className="mb-6">
          えび・いか・貝・たこ・白身・赤身は、1皿が軽めのものが多いネタ。<Marker>大えび（43kcal）・上穴子（54kcal）・水たこ（66kcal）・厳選まぐろ赤身（81kcal）</Marker>などを軸にすれば、皿数を重ねても合計を抑えやすくなります。
        </p>

        <SubSectionHeading>サイドは「汁物」を味方に</SubSectionHeading>
        <p className="mb-6">
          揚げ物やラーメンの代わりに、<Marker color="blue">あおさと海苔の味噌汁（48kcal）やあさりの味噌汁（57kcal）</Marker>を選ぶと、温かい汁物で満足感を得つつカロリーを抑えられます。食事の最初に飲むと、食べ過ぎ防止にもつながります。
        </p>

        <SubSectionHeading>「〆の一品」を見直す</SubSectionHeading>
        <p className="mb-8">
          〆のラーメン・うどん・パフェは、寿司の皿数に上乗せされてカロリーが伸びる原因。<Marker color="green">どうしても食べたいときはシェアする・頻度を下げる</Marker>のが、無理なく続けるコツです。
        </p>

        <ComparisonTable
          headers={["食べ方の例", "構成", "カロリー目安"]}
          rows={[
            [
              "軽めネタ中心（8皿）",
              "大えび・上穴子・水たこ・甘えび・いか・厳選まぐろ赤身・かつお・サーモン",
              "約558 kcal",
            ],
            [
              "軽めネタ＋味噌汁",
              "上記8皿 ＋ あさりの味噌汁",
              "約615 kcal",
            ],
            [
              "サイド多め",
              "にぎり6皿（約450kcal）＋ 豚骨醤油ラーメン",
              "約844 kcal",
            ],
          ]}
          bestRowIndex={0}
        />
        <p className="text-xs text-gray-400 mt-2 mb-8">
          ※カロリーは掲載の実データを合算した目安です。実際の皿数・ネタにより変わります。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&h=400&fit=crop"
          alt="温かい味噌汁と寿司が並ぶ食卓"
        />

        {/* Section 6: 目的別の選び方 */}
        <SectionHeading id="by-goal">目的別の選び方</SectionHeading>

        <p className="mb-6">
          ダイエットの状況や、その日の食べたい気分に合わせた選び方を3パターン紹介します。いずれも<Marker>カロリーを基準</Marker>にした目安です。
        </p>

        <RankingCard rank={1} title="とにかくカロリーを抑えたい日" subtitle="軽めネタ＋味噌汁">
          <p className="text-sm text-gray-700 leading-relaxed">
            大えび（43kcal）・上穴子（54kcal）・水たこ（66kcal）などの<Marker>軽めネタを中心に、皿数を控えめ</Marker>に。サイドはあおさと海苔の味噌汁（48kcal）にして、揚げ物・麺類・デザートは見送りましょう。皿数を6〜8皿に抑えれば、合計をぐっと低くできます。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="しっかり食べたい日" subtitle="軽めネタ＋赤身・白身を多めに">
          <p className="text-sm text-gray-700 leading-relaxed">
            食べ応えを優先するなら、<Marker color="blue">厳選まぐろ赤身（81kcal）・かつお（83kcal）・サーモン（91kcal）</Marker>など、軽め〜中程度のネタを多めに。麺類や揚げ物などの高カロリーサイドは1品までにとどめると、合計をコントロールしやすくなります。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="麺やサイドも楽しみたい日" subtitle="サイドは1品、にぎりは控えめ">
          <p className="text-sm text-gray-700 leading-relaxed">
            ラーメンやうどんを楽しみたい日は、<Marker color="green">サイドを1品に絞り、にぎりの皿数を減らす</Marker>のがコツ。麺類はそれだけで200〜400kcal前後あるため、寿司の皿数を増やしすぎないことで、1食の合計を抑えられます。
          </p>
        </RankingCard>

        <TipBox title="他チェーンと迷ったら">
          <p>
            回転寿司同士でカロリーを比べたいときは、<Link href="/guide/kurasushi-diet" className="text-sky-600 hover:underline font-medium">くら寿司のカロリーガイド</Link>や<Link href="/guide/sushi-diet" className="text-sky-600 hover:underline font-medium">回転寿司ダイエットガイド</Link>もあわせてどうぞ。チェーンごとのネタのカロリー傾向を、実データで横並びに確認できます。
          </p>
        </TipBox>

        {/* ServiceOffers before FAQ */}
        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <ArticleSummary
          points={[
            "スシローはPFC（タンパク質・脂質・炭水化物）を公開していないため、判断材料はカロリー。本記事はカロリー基準で解説",
            "えび・いか・貝・白身・赤身などのにぎりは40〜90kcal台と軽め。大えび43kcal・上穴子54kcalなどが低カロリーの目安",
            "どんぶりポテト（559kcal）・ラーメン類（247〜399kcal）・うどん類（194〜315kcal）はカロリー高め。数と組み合わせに注意",
            "回転寿司は皿数が積み上がりやすい。味噌汁（48〜57kcal）で満足感を補い、食べた皿数を数える習慣がカロリー管理に効く",
            "麺・揚げ物・デザートなどの〆サイドは、シェアや頻度ダウンで無理なく抑える",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。スシローはタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説しています。メニュー改定・店舗により異なる場合があります。最新の情報は
          <a
            href="https://www.akindo-sushiro.co.jp/menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            スシロー公式サイト
          </a>
          でご確認ください。
        </p>

        {/* FAQ */}
        <FAQSection
          slug="sushiro-diet"
          items={[
            {
              q: "スシローで一番低カロリーなネタは？",
              a: "掲載データの中では「大えび」（43kcal）が筆頭です。続いて「上穴子」（54kcal）、「水たこ」（66kcal）、「甘えび」「いか」（各70kcal）など、えび・いか・貝・たこ系のにぎりが軽めです。これらを中心に組み立てると、皿数を重ねても合計カロリーを抑えやすくなります。",
            },
            {
              q: "スシローのタンパク質や糖質はどれくらい？",
              a: "スシローは公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、メニューごとの正確なタンパク質・糖質量はお伝えできません。本記事ではカロリーを基準に解説しています。一般論として、まぐろ赤身やかつおは高タンパク・低脂質とされ、ご飯ものや麺類は糖質が多くなりやすい傾向がありますが、これはスシロー個別の数値ではなく、あくまで一般的な栄養の考え方です。",
            },
            {
              q: "スシローでダイエット中に避けたほうがいいメニューは？",
              a: "カロリーが高めなのは、どんぶりポテト（559kcal）、ラーメン類（貝塩ラーメン247kcal〜まぐろ醤油ラーメン煮玉子付399kcal）、うどん類（かけうどん194kcal〜きつねうどん315kcal）、揚げ物・天ぷら盛り、パフェ類など。寿司に加えると合計が一気に伸びるため、頼むなら数を絞るかシェアするのがおすすめです。",
            },
            {
              q: "スシローで何皿までならダイエット中でも大丈夫？",
              a: "ネタによりますが、1皿70kcal前後の軽めネタなら、8皿で約560kcal、10皿で約700kcalが目安です。サイドを足さなければ、軽めネタ中心で8皿前後に抑えると1食のカロリーをコントロールしやすくなります。最終的には1日の総摂取カロリーとのバランスで判断しましょう。",
            },
            {
              q: "スシローの寿司は糖質制限中でも食べられる？",
              a: "寿司はシャリ（ご飯）を使うため、一般に糖質は少なくありません。スシローは糖質量を公開していないため具体的な数値は示せませんが、糖質を抑えたい場合は皿数を控えめにし、ご飯ものや麺類・デザートを重ねないのが基本の考え方です。詳しくは「糖質制限×外食ガイド」もあわせてご覧ください。",
            },
            {
              q: "スシローでカロリーを抑える食べ方のコツは？",
              a: "①えび・いか・貝・白身・赤身など40〜90kcal台の軽めネタを中心にする、②最初に味噌汁（48〜57kcal）で満足感を作る、③ラーメン・うどん・揚げ物・パフェなどの高カロリーサイドは1品までかシェアにする、④食べた皿数を数えて合計をイメージする――この4点を意識すると、無理なくカロリーを抑えられます。",
            },
          ]}
        />

        <CTABanner
          title="そのメニュー、何kcal？ たべなびで今すぐ検索"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Related internal links */}
        <section className="my-10 rounded-2xl border border-sky-100 bg-sky-50/40 p-5 sm:p-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            スシローをもっと詳しく
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/chains/sushiro"
                className="text-sky-600 hover:underline font-medium"
              >
                スシローのメニュー一覧・カロリーを見る
              </Link>
            </li>
            <li>
              <Link
                href="/chains/sushiro/low-calorie"
                className="text-sky-600 hover:underline font-medium"
              >
                スシローの低カロリーメニューを絞り込む
              </Link>
            </li>
            <li>
              <Link
                href="/chains/sushiro/diet"
                className="text-sky-600 hover:underline font-medium"
              >
                スシローのダイエット向けメニューを見る
              </Link>
            </li>
          </ul>
          <h3 className="text-sm font-bold text-gray-900 mt-5 mb-3">関連ガイド</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/guide/sushi-diet"
                className="text-sky-600 hover:underline font-medium"
              >
                回転寿司ダイエットガイド
              </Link>
            </li>
            <li>
              <Link
                href="/guide/eating-out-diet"
                className="text-sky-600 hover:underline font-medium"
              >
                外食ダイエット完全ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/guide/low-carb-eating-out"
                className="text-sky-600 hover:underline font-medium"
              >
                糖質制限×外食ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/guide/calorie-database"
                className="text-sky-600 hover:underline font-medium"
              >
                外食カロリーデータベース
              </Link>
            </li>
          </ul>
        </section>

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory entries={[{ date: "2026-06-25", note: "初稿公開" }]} />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="sushiro-diet" />

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
