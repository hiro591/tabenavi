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
  ArticleFooter,
  MenuPhoto,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "くら寿司のカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/kurasushi-diet" },
  description:
    "くら寿司のメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。",
  keywords: [
    "くら寿司 カロリー",
    "くら寿司 ダイエット",
    "くら寿司 カロリー一覧",
    "くら寿司 低カロリー",
    "くら寿司 カロリー ネタ",
    "回転寿司 ダイエット",
  ],
  openGraph: {
    title:
      "くら寿司のカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方",
    description:
      "くら寿司のメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。",
    url: "https://www.tabenavi.jp/guide/kurasushi-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "くら寿司のカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方",
  description:
    "くら寿司のメニューをカロリーの実データで解説。低カロリーなネタ・高カロリーに注意したいネタ、回転寿司で太りにくい食べ方のコツを、ダイエットの視点で紹介します。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/kurasushi-diet",
};

const tocItems = [
  { id: "pfc-note", label: "くら寿司はカロリー中心で考える" },
  { id: "low-calorie-neta", label: "低カロリーなネタ（1皿あたり）" },
  { id: "high-calorie", label: "カロリーが高めで注意したいメニュー" },
  { id: "eat-smart", label: "太りにくい食べ方・組み合わせ" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "sample-set", label: "カロリーを抑えるおすすめ皿構成" },
  { id: "summary", label: "まとめ" },
];

export default function KurasushiDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="くら寿司のカロリーガイド｜低カロリーなネタの選び方と太りにくい食べ方"
        subtitle="低カロリーなネタの選び方と回転寿司で太りにくい食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=400&fit=crop"
        breadcrumb="くら寿司カロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="kurasushi-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月25日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="くら寿司でダイエット中におすすめの低カロリーなネタは？何を選べばいい？"
          answer={
            <>
              カロリーを抑えたいなら、白身・赤身・いか・たこ・貝類など<strong>あっさり系のにぎりが基本</strong>。たとえば<strong>熟成ふぐ（39kcal）・赤えび（46kcal）・生サーモン（49kcal）・いか（73kcal）・真たこ（76kcal）・特上まぐろ（64kcal）</strong>はいずれも1皿（一貫）100kcal以下です。逆に注意したいのは<strong>マヨ系（えびマヨ182kcal）・天丼やうどん・うな丼（シャリ）625kcal・特上うな丼（シャリ）815kcal・デザート類</strong>。サイドの丼・麺・揚げ物は1品でにぎり数皿ぶんのカロリーになります。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          くら寿司は1皿ずつ好きなネタを選べるため、選び方しだいで<Marker>1食のカロリーを大きくコントロールできる</Marker>外食です。あっさりした白身・赤身・いか・たこを中心にすれば、にぎり10皿前後でも合計700〜900kcal程度に収めやすいのが回転寿司の強みです。
        </p>
        <p className="mb-4">
          ポイントは、同じ「寿司」でも<Marker color="blue">ネタやサイドメニューによってカロリーが数倍違う</Marker>こと。多くのにぎりは1皿（一貫）あたり40〜120kcal程度ですが、丼・麺・揚げ物などのサイドは1品で<Marker color="green">400〜800kcal台</Marker>に達するものもあります。
        </p>
        <p className="mb-6">
          なお、<strong>くら寿司は公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説します。</strong>「まぐろ赤身・いか・たこはあっさり系」「サーモン・はまちは脂がのっている」といった食材一般の傾向は参考として触れますが、くら寿司の個別メニューにタンパク質や脂質のグラム数を当てはめることはしていません。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="kurasushi-diet-sushi" genre="sushi" priority />

        {/* Section 1: PFC非公開・カロリー中心 */}
        <SectionHeading id="pfc-note">くら寿司はカロリー中心で考える</SectionHeading>

        <p className="mb-4">
          くら寿司の栄養情報で公開されているのは<Marker>カロリー（kcal）</Marker>が中心です。タンパク質・脂質・炭水化物（PFC）の数値は公式に公表されていないため、本記事では<strong>カロリーを基準に、ダイエット中の選び方</strong>を整理します。
        </p>

        <NumberedList
          items={[
            {
              title: "にぎりは1皿あたりのカロリーがわかりやすい",
              body: "くら寿司は1皿（一貫または二貫）単位で注文するため、何皿食べたかでおおよその合計カロリーを把握しやすいのが特徴です。あっさり系のにぎりは1皿40〜120kcal程度に収まるものが多くあります。",
            },
            {
              title: "ネタによってカロリー差が大きい",
              body: "白身・赤身・いか・たこ・貝類は控えめ、マヨ系・天ぷら系・脂ののったネタは高めになりやすい傾向があります。皿数だけでなく「何を選ぶか」でカロリーが変わります。",
            },
            {
              title: "サイドの丼・麺・揚げ物・デザートは要注意",
              body: "うどん・らーめん・天丼・うな丼・コロッケ・パフェなどのサイドメニューは、1品でにぎり数皿ぶんのカロリーになることがあります。締めや追加で頼むときはカロリーを意識しましょう。",
            },
          ]}
        />

        <TipBox title="一般的な食材の傾向（参考）">
          <p>あくまで一般論として、<Marker>まぐろ赤身・いか・たこ・白身魚はあっさり系</Marker>、<Marker color="blue">サーモン・はまち・中とろ・大とろは脂がのっている</Marker>傾向があります。また、寿司はシャリ（酢飯）にごはんの糖質が含まれるため、皿数が増えるほどカロリーは積み上がります。ただし、くら寿司の個別メニューのタンパク質・脂質・炭水化物のグラム数は公式に公開されていないため、本記事では数値での断定はしていません。</p>
        </TipBox>

        {/* Section 2: 低カロリーなネタ */}
        <SectionHeading id="low-calorie-neta">低カロリーなネタ（1皿あたり）</SectionHeading>

        <p className="mb-4">
          くら寿司の定番にぎりを<strong>実データのカロリーが低い順</strong>に並べました。<Marker color="blue">白身・赤身・いか・たこ・貝類・えび系は1皿100kcal以下</Marker>に収まるものが多く、ダイエット中の主役にしやすいネタです。
        </p>

        <CompareBar
          title="くら寿司 低カロリーなネタ カロリー比較（低い順・1皿あたり）"
          metric="calorie"
          unit="kcal"
          sort="asc"
          highlightTop={5}
          items={[
            { name: "熟成ふぐ（一貫）", value: 39 },
            { name: "赤えび（一貫）", value: 46 },
            { name: "海鮮うに手巻き（一貫）", value: 47 },
            { name: "生サーモン（一貫）", value: 49 },
            { name: "大粒貝柱（一貫）", value: 51 },
            { name: "大切りゆず塩サーモン（一貫）", value: 59 },
            { name: "特上まぐろ（一貫）", value: 64 },
            { name: "特大切り活〆穴子（一貫）", value: 64 },
            { name: "つぶ貝", value: 69 },
            { name: "いか", value: 73 },
            { name: "えび", value: 74 },
            { name: "真たこ", value: 76 },
            { name: "甘えび", value: 77 },
            { name: "あじ", value: 85 },
            { name: "サーモン", value: 93 },
          ]}
          caption="数値はたべなび掲載のカロリー実データ（kcal、1皿あたり）。●印は低カロリー上位5品。くら寿司はP/F/C（タンパク質・脂質・炭水化物）を公開していないためカロリーのみで比較しています。メニュー改定・店舗により異なる場合があります。"
        />

        <p className="text-xs text-gray-400 mb-8">
          ※くら寿司は公式にタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説しています。
        </p>

        <TipBox title="低カロリーなネタの選び方">
          <p>注目したいのは<Marker>白身（ふぐ・真鯛など）・赤身（まぐろ）・いか・たこ・貝類・えび系</Marker>。これらは1皿40〜90kcal台が中心で、皿数を重ねてもカロリーが膨らみにくいのが特徴です。一般論として、まぐろ赤身・いか・たこはあっさり系で食べ応えのわりに軽め。「とにかくカロリーを抑えたい日」は、これらのあっさり系ネタを軸にすると組み立てやすくなります。</p>
        </TipBox>

        <SubSectionHeading>あっさり系（白身・赤身・いか・たこ・貝）</SubSectionHeading>
        <p className="mb-6">
          熟成ふぐ（39kcal）、特上まぐろ（64kcal）、いか（73kcal）、真たこ（76kcal）、つぶ貝（69kcal）など。<Marker>1皿100kcal以下のものが多く</Marker>、カロリーを抑えながら品数を楽しみたいときに向いています。
        </p>

        <SubSectionHeading>えび・サーモン系</SubSectionHeading>
        <p className="mb-8">
          赤えび（46kcal）、えび（74kcal）、甘えび（77kcal）、生サーモン（49kcal）、サーモン（93kcal）など。<Marker color="blue">えび系は控えめ</Marker>、サーモンは脂がのっている分やや高めですが、それでも1皿100kcal前後に収まります。
        </p>

        {/* Section 3: 高カロリーで注意 */}
        <SectionHeading id="high-calorie">カロリーが高めで注意したいメニュー</SectionHeading>

        <p className="mb-4">
          くら寿司でカロリーが膨らみやすいのは、<Marker>マヨ系のにぎり・揚げ物・丼・麺・デザート</Marker>です。とくにサイドの丼・麺は1品でにぎり数皿ぶんのカロリーになります。
        </p>

        <CompareBar
          title="くら寿司 カロリーが高めのメニュー（高い順）"
          metric="calorie"
          unit="kcal"
          sort="desc"
          highlightTop={5}
          items={[
            { name: "特上うな丼（シャリ）", value: 815 },
            { name: "藤原系 禁断のにんにくMAXまぜそば", value: 778 },
            { name: "海鮮かき揚げうどん", value: 757 },
            { name: "えび天と季節の天丼（シャリ）", value: 730 },
            { name: "うな丼（シャリ）", value: 625 },
            { name: "旬の海鮮丼", value: 462 },
            { name: "胡麻香る担々麺", value: 423 },
            { name: "くらポテト", value: 396 },
            { name: "絞りたてモンブラン（栗）", value: 332 },
            { name: "えびマヨ", value: 182 },
          ]}
          caption="数値はたべなび掲載のカロリー実データ（kcal）。●印は上位5品。サイドの丼・麺・揚げ物・デザートはカロリーが高くなりやすい点に注意。"
        />

        <WarningBox title="ダイエット中は量に注意したいメニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">特上うな丼（シャリ）（815kcal）・うな丼（シャリ）（625kcal）</span> ─ サイドの丼の中でも特に高カロリー。締めに頼むとそれだけで1食ぶんを超えることもあります。</li>
            <li><span className="font-bold">藤原系 禁断のにんにくMAXまぜそば（778kcal）・海鮮かき揚げうどん（757kcal）</span> ─ 麺・揚げ物系は1品で高カロリー。にぎりと併せると合計が一気に増えます。</li>
            <li><span className="font-bold">えび天と季節の天丼（シャリ）（730kcal）</span> ─ 天ぷら＋ごはんの丼ものは高カロリーになりやすい代表格です。</li>
            <li><span className="font-bold">くらポテト（396kcal）・各種コロッケ（180〜258kcal）</span> ─ 揚げ物サイドは皿数が少なくてもカロリーがかさみます。</li>
            <li><span className="font-bold">えびマヨ（182kcal）などマヨ系にぎり</span> ─ 同じネタでもマヨをまとうとカロリーが上がります。あっさり系のにぎりと比べると2〜4倍になることもあります。</li>
          </ul>
        </WarningBox>

        <TipBox title="「締めの一杯」の誘惑に注意">
          <p>くら寿司はうどん・らーめん・天丼・うな丼など、締めに頼みたくなるサイドが充実しています。ただし<Marker>うな丼（シャリ）625kcalや天丼（シャリ）730kcal</Marker>などは、にぎり数皿ぶんのカロリー。締めまで頼むなら、にぎりの皿数を減らす、シェアするなどの調整がおすすめです。デザートも絞りたてモンブラン（332kcal）など高めのものがあるので、軽めのもの（チョコアイス42kcal・カットパイン43kcalなど）を選ぶと抑えやすくなります。</p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="くら寿司のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューのカロリーをすぐに確認できます"
        />

        {/* Section 4: 太りにくい食べ方 */}
        <SectionHeading id="eat-smart">太りにくい食べ方・組み合わせ</SectionHeading>

        <p className="mb-4">
          くら寿司でカロリーを抑えるコツは、<Marker>「何を」「どの順で」「どれだけ」食べるか</Marker>を少し意識すること。難しいことはなく、次のポイントを押さえるだけでも合計カロリーは大きく変わります。
        </p>

        <NumberedList
          items={[
            {
              title: "あっさり系のにぎりを軸にする",
              body: "白身・赤身・いか・たこ・貝・えび系を中心にすれば、1皿40〜100kcal前後。皿数を楽しみつつカロリーを抑えやすくなります。",
            },
            {
              title: "マヨ系・天ぷら系・丼・麺は「1品まで」に",
              body: "えびマヨ（182kcal）などのマヨ系や、丼・麺・揚げ物のサイドは高カロリー。食べるなら1品にとどめ、にぎりの皿数を少し減らすとバランスが取れます。",
            },
            {
              title: "味噌汁・サラダ・健康ミニカップを先に",
              body: "純味噌汁（32kcal）や海藻サラダ（8kcal）など低カロリーの汁物・野菜を先に入れると、満足感を得やすく食べ過ぎを防ぎやすくなります。",
            },
            {
              title: "デザートは軽いものを選ぶ",
              body: "どうしても甘いものが欲しいときは、チョコアイス（42kcal）やカットパイン（43kcal）、巨峰シャーベット（53kcal）など軽めを。モンブランやパフェ系は高カロリーなので量に注意します。",
            },
          ]}
        />

        <TipBox title="味噌汁・サラダ・健康ミニカップを活用する">
          <p>くら寿司には<Marker>純味噌汁（32kcal）・あさり入り味噌汁（42kcal）・海藻サラダ（8kcal）・優しいトマト（10kcal）</Marker>など、ひと桁〜数十kcalの汁物・小鉢が揃っています。これらを最初に食べておくと満足感が出て、にぎりやサイドの食べ過ぎを抑えやすくなります。低カロリーで「もう一品」を足したいときにも便利です。</p>
        </TipBox>

        <MenuPhoto id="kurasushi-diet-side" genre="japanese" />

        {/* Section 5: 目的別の選び方 */}
        <SectionHeading id="by-goal">目的別の選び方</SectionHeading>

        <p className="mb-6">
          同じくら寿司でも、その日の目的によって選ぶネタやサイドは変わります。<Marker>目的別のおすすめ</Marker>をカロリー基準で整理しました。
        </p>

        <RankingCard rank={1} title="とにかくカロリーを抑えたい日" subtitle="あっさり系にぎり中心">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <Marker>熟成ふぐ（39kcal）・特上まぐろ（64kcal）・いか（73kcal）・真たこ（76kcal）</Marker>など、1皿100kcal以下のあっさり系を中心に。汁物（純味噌汁32kcal）やサラダ（海藻サラダ8kcal）を添えれば、満足感を保ちつつカロリーを抑えられます。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            マヨ系・天ぷら・丼・麺・デザートは控えめにし、にぎりの皿数で満足感を調整するのがおすすめです。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="満足感もしっかり欲しい日" subtitle="あっさり系＋1品の高カロリー">
          <p className="text-sm text-gray-700 leading-relaxed">
            あっさり系のにぎりを軸にしつつ、<Marker color="blue">えびマヨ（182kcal）や軽めの揚げ物を1品だけ</Marker>足すスタイル。食べ応えのあるサイドを入れる場合は、にぎりの皿数を少し減らして全体のカロリーを調整します。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="締めまで楽しみたい日" subtitle="丼・麺は1品・量に注意">
          <p className="text-sm text-gray-700 leading-relaxed">
            締めにうどん・らーめん・丼を頼むなら、<Marker color="green">うな丼（シャリ）625kcalや天丼（シャリ）730kcal</Marker>は高カロリーである点を意識。シェアする、にぎりを軽めにするなどで合計を抑えると、満足感とカロリーのバランスが取りやすくなります。
          </p>
        </RankingCard>

        {/* Section 6: おすすめ皿構成 */}
        <SectionHeading id="sample-set">カロリーを抑えるおすすめ皿構成</SectionHeading>

        <p className="mb-6">
          くら寿司の魅力は1皿ずつ自由に組み立てられること。<Marker>カロリーを抑えつつ満足感のある皿構成</Marker>を、目的別に3パターン紹介します（カロリーはたべなび掲載の実データの合算）。
        </p>

        <ComparisonTable
          headers={["パターン", "皿構成", "合計カロリー"]}
          rows={[
            [
              "とことん低カロリー",
              "熟成ふぐ + 特上まぐろ + いか + 真たこ + 純味噌汁",
              "約284 kcal",
            ],
            [
              "あっさり満足セット",
              "生サーモン + えび + 特上まぐろ + あじ + 海藻サラダ",
              "約280 kcal",
            ],
            [
              "しっかり食べたい日",
              "あっさり系にぎり6皿（約450kcal） + えびマヨ",
              "約632 kcal",
            ],
          ]}
          bestRowIndex={0}
        />

        <SubSectionHeading>Pattern 1：とことん低カロリーセット（約284kcal）</SubSectionHeading>
        <p className="mb-6">
          熟成ふぐ（39kcal）＋特上まぐろ（64kcal）＋いか（73kcal）＋真たこ（76kcal）＋純味噌汁（32kcal）。<Marker>合計でも約284kcal</Marker>と、あっさり系にぎり中心でまとめた一番ヘルシーな構成です。汁物で満足感を補えます。
        </p>

        <SubSectionHeading>Pattern 2：あっさり満足セット（約280kcal）</SubSectionHeading>
        <p className="mb-6">
          生サーモン（49kcal）＋えび（74kcal）＋特上まぐろ（64kcal）＋あじ（85kcal）＋海藻サラダ（8kcal）。<Marker color="blue">約280kcal</Marker>。サーモンやえびも入れて満足感を出しつつ、海藻サラダでボリュームを足した構成です。
        </p>

        <SubSectionHeading>Pattern 3：しっかり食べたい日セット（約632kcal）</SubSectionHeading>
        <p className="mb-8">
          あっさり系にぎりを6皿（合計約450kcal前後）軸にしつつ、えびマヨ（182kcal）を1品追加。<Marker color="green">約632kcal</Marker>と単品の丼・麺を頼むより抑えやすく、満足感とカロリーのバランスが取れる構成です。
        </p>

        <MenuPhoto id="kurasushi-diet-plate" genre="sushi" />

        {/* ServiceOffers before FAQ */}
        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          くら寿司は、ネタとサイドの選び方しだいでカロリーを大きくコントロールできる外食です。この記事のポイントを整理しました。
        </p>

        <ArticleSummary
          points={[
            "くら寿司はPFC（タンパク質・脂質・炭水化物）を公開していないため、カロリーを基準に選ぶのが基本",
            "白身・赤身・いか・たこ・貝・えび系のにぎりは1皿40〜100kcal前後と控えめ（熟成ふぐ39kcal・特上まぐろ64kcalなど）",
            "マヨ系（えびマヨ182kcal）・天丼・うな丼・うどん・らーめんなどサイドは高カロリー。うな丼（シャリ）625kcal、天丼（シャリ）730kcalに注意",
            "味噌汁（32kcal）・サラダ・健康ミニカップを先に食べると食べ過ぎを防ぎやすい",
            "あっさり系にぎり中心なら、汁物込みでも300kcal前後の構成も可能",
          ]}
        />

        <CheckList
          items={[
            "あっさり系のにぎり（白身・赤身・いか・たこ・貝・えび）を軸にする",
            "マヨ系・天ぷら・丼・麺は1品までにとどめる",
            "純味噌汁（32kcal）・海藻サラダ（8kcal）など低カロリーの汁物・野菜を先に",
            "デザートはチョコアイス（42kcal）など軽めを選ぶ",
            "締めの丼・麺（625〜815kcal）はシェアか、にぎりを軽めに",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。くら寿司はタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説しています。最新の情報は
          <a
            href="https://www.kurasushi.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            くら寿司公式サイト
          </a>
          でご確認ください。
        </p>

        <p className="mb-4 text-sm text-gray-600">
          くら寿司の全メニューのカロリーは{" "}
          <Link href="/chains/kurasushi" className="text-sky-600 hover:underline font-medium">
            くら寿司のメニュー一覧
          </Link>{" "}
          から確認できます。目的別に絞り込みたい方は{" "}
          <Link href="/chains/kurasushi/low-calorie" className="text-sky-600 hover:underline font-medium">
            低カロリーメニュー
          </Link>
          ・
          <Link href="/chains/kurasushi/diet" className="text-sky-600 hover:underline font-medium">
            ダイエット向けメニュー
          </Link>{" "}
          のページもどうぞ。
        </p>

        <p className="mb-8 text-sm text-gray-600">
          回転寿司全般での食べ方は{" "}
          <Link href="/guide/sushi-diet" className="text-sky-600 hover:underline font-medium">
            回転寿司ダイエットガイド
          </Link>
          、外食全般のコツは{" "}
          <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline font-medium">
            外食ダイエット完全ガイド
          </Link>
          ・
          <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">
            外食で糖質を抑える方法
          </Link>
          をどうぞ。チェーン横断でカロリーを調べるなら{" "}
          <Link href="/guide/calorie-database" className="text-sky-600 hover:underline font-medium">
            外食カロリーデータベース
          </Link>
          も便利です。
        </p>

        {/* FAQ */}
        <FAQSection
          slug="kurasushi-diet"
          items={[
            {
              q: "くら寿司で一番低カロリーなネタは？",
              a: "定番にぎりの中では「熟成ふぐ（一貫）」が39kcalと低めです。続いて赤えび（46kcal）、生サーモン（49kcal）、大粒貝柱（51kcal）、特上まぐろ（64kcal）など、白身・赤身・いか・たこ・貝・えび系は1皿100kcal以下のものが多くあります。あっさり系を軸にすると、皿数を楽しみながらカロリーを抑えやすくなります。",
            },
            {
              q: "くら寿司でダイエット中に避けたほうがいいメニューは？",
              a: "サイドの丼・麺・揚げ物・デザートは高カロリーになりがちです。特上うな丼（シャリ）815kcal、藤原系 禁断のにんにくMAXまぜそば778kcal、海鮮かき揚げうどん757kcal、えび天と季節の天丼（シャリ）730kcal、うな丼（シャリ）625kcalなどは、にぎり数皿ぶんのカロリーになります。マヨ系にぎり（えびマヨ182kcalなど）や揚げ物（くらポテト396kcal）も量に注意しましょう。",
            },
            {
              q: "くら寿司はPFC（タンパク質・脂質・炭水化物）がわかりますか？",
              a: "くら寿司は公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説しています。一般論として、まぐろ赤身・いか・たこはあっさり系、サーモン・はまち・中とろ・大とろは脂がのっている傾向がありますが、個別メニューのグラム数までは公表されていません。",
            },
            {
              q: "くら寿司で太りにくい食べ方のコツは？",
              a: "①白身・赤身・いか・たこ・貝・えび系のあっさり系にぎりを軸にする、②マヨ系・天ぷら・丼・麺は1品までにとどめる、③純味噌汁（32kcal）や海藻サラダ（8kcal）など低カロリーの汁物・野菜を先に食べる、④デザートはチョコアイス（42kcal）など軽めを選ぶ、の4点が基本です。汁物やサラダで満足感を出すと食べ過ぎを防ぎやすくなります。",
            },
            {
              q: "くら寿司でカロリーを抑えるおすすめの皿構成は？",
              a: "あっさり系を中心にすると、たとえば「熟成ふぐ（39kcal）+ 特上まぐろ（64kcal）+ いか（73kcal）+ 真たこ（76kcal）+ 純味噌汁（32kcal）」で合計約284kcal。「生サーモン（49kcal）+ えび（74kcal）+ 特上まぐろ（64kcal）+ あじ（85kcal）+ 海藻サラダ（8kcal）」なら約280kcalにまとまります。汁物やサラダを足しても300kcal前後で1セットが組めます。",
            },
            {
              q: "くら寿司の締めにうどんや丼を食べても大丈夫？",
              a: "食べても問題ありませんが、カロリーは意識しましょう。うどん・らーめん・丼は1品で高カロリーになりやすく、うな丼（シャリ）625kcal、えび天と季節の天丼（シャリ）730kcal、特上うな丼（シャリ）815kcalなど、にぎり数皿ぶんに相当します。締めまで楽しむなら、にぎりの皿数を減らす・シェアするなどで合計を調整するのがおすすめです。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory entries={[{ date: "2026-06-25", note: "初稿公開" }]} />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="kurasushi-diet" />

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
