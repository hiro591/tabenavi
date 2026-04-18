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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド【2026年最新】 | たべなび",
  description:
    "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。サイゼで太らない食べ方がわかります。",
  keywords: [
    "サイゼリヤ ダイエット",
    "サイゼリヤ 筋トレ",
    "サイゼ 低カロリー",
    "サイゼリヤ カロリー",
    "サイゼリヤ タンパク質",
  ],
  openGraph: {
    title: "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド",
    description:
      "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。",
    url: "https://www.tabenavi.jp/guide/saizeriya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "サイゼリヤでダイエット｜低カロリー＆高タンパクメニュー完全ガイド",
  description:
    "サイゼリヤのカロリーランキング、筋トレ民におすすめの高タンパクメニュー、500円以下の神注文法を徹底解説。",
  datePublished: "2026-03-18",
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/saizeriya-diet",
};

const tocItems = [
  { id: "why-saizeriya", label: "なぜサイゼリヤはダイエットに最適か" },
  { id: "calorie-ranking", label: "カロリーランキング（低い順）" },
  { id: "high-protein", label: "筋トレ民におすすめの高タンパクメニュー" },
  { id: "under-500", label: "500円以下の神注文法" },
  { id: "avoid", label: "避けるべき高カロリーメニュー" },
  { id: "combos", label: "おすすめの組み合わせ3パターン" },
  { id: "summary", label: "まとめ" },
];

export default function SaizeriyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="サイゼリヤでダイエット"
        subtitle="低カロリー＆高タンパクメニュー完全ガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop"
        breadcrumb="サイゼリヤダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="saizeriya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月19日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          サイゼリヤはコスパ最強の外食チェーンとして知られていますが、実は<Marker>ダイエットや筋トレ中の食事としても非常に優秀</Marker>です。その理由は、低カロリーなサラダから高タンパクなグリルメニューまで、栄養バランスの良いメニューが豊富に揃っている点にあります。
        </p>
        <p className="mb-4">
          特筆すべきは価格の安さ。<Marker>若鶏のグリル（ディアボラ風）はタンパク質35.2gでわずか500円</Marker>。プロテインドリンク1杯分の価格で、本格的なグリルチキンが食べられるのはサイゼリヤならではです。
        </p>
        <p className="mb-8">
          この記事では、サイゼリヤのメニューをカロリー順にランキングし、ダイエット・筋トレ中のおすすめの食べ方を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: なぜサイゼリヤはダイエットに最適か */}
        <SectionHeading id="why-saizeriya">なぜサイゼリヤはダイエットに最適か</SectionHeading>

        <p className="mb-4">
          外食チェーンの中でも、サイゼリヤがダイエットに向いている理由は大きく3つあります。
        </p>

        <NumberedList
          items={[
            {
              title: "圧倒的なコスパ",
              body: "タンパク質1gあたりの価格で比較すると、若鶏のグリルは約14円/g。コンビニのサラダチキン（約20円/g）よりも安く、しかも温かい料理が食べられます。",
            },
            {
              title: "グリル系メニューが充実",
              body: "揚げ物ではなくグリル（焼き）メニューが豊富なのがサイゼリヤの強み。鶏肉・牛肉のグリルは脂質を抑えつつ高タンパクを実現できます。",
            },
            {
              title: "サイドメニューの組み合わせ自由度",
              body: "サラダ・スープ・グリルをそれぞれ単品で注文できるため、自分だけの「ダイエットセット」を自由に組み立てられます。",
            },
          ]}
        />

        <TipBox title="サイゼリヤ vs 他チェーン店のタンパク質コスパ">
          <p><Marker>サイゼリヤの若鶏のグリル（P35.2g/¥500）</Marker>は、マクドナルドのダブルチーズバーガー（P26.4g/¥400）やすき家の牛丼並（P22g/¥430）と比較しても、タンパク質あたりのコスパが圧倒的に優れています。</p>
        </TipBox>

        <ArticleImage src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop" alt="香ばしく焼かれたイタリアン風グリルチキンのプレート" />

        {/* Section 2: カロリーランキング */}
        <SectionHeading id="calorie-ranking">サイゼリヤ カロリーランキング（低い順）</SectionHeading>

        <p className="mb-4">
          サイゼリヤの主要メニューをカロリーの低い順に並べました。<Marker color="blue">サラダやサイドメニューは100〜200kcal台と低カロリー</Marker>で、グリル系も単品なら500kcal前後に収まります。
        </p>

        <NutritionTable
          items={[
            { name: "わかめサラダ", calories: 68, protein: 1.2, fat: 4.5, carbs: 5.8, highlight: true },
            { name: "小エビのサラダ", calories: 112, protein: 8.5, fat: 5.2, carbs: 8.4, highlight: true },
            { name: "柔らか青豆の温サラダ", calories: 138, protein: 5.8, fat: 9.2, carbs: 8.5, highlight: true },
            { name: "ほうれん草のソテー", calories: 148, protein: 3.5, fat: 12.8, carbs: 4.2 },
            { name: "辛味チキン（3本）", calories: 218, protein: 16.5, fat: 12.8, carbs: 9.2 },
            { name: "ハンバーグステーキ", calories: 458, protein: 22.5, fat: 32.4, carbs: 18.2 },
            { name: "若鶏のグリル（ディアボラ風）", calories: 480, protein: 35.2, fat: 30.5, carbs: 12.8 },
            { name: "リブステーキ", calories: 502, protein: 28.8, fat: 35.2, carbs: 12.5 },
            { name: "ペペロンチーノ", calories: 528, protein: 14.2, fat: 12.5, carbs: 88.4 },
            { name: "ミックスグリル", calories: 542, protein: 32.0, fat: 38.5, carbs: 14.2 },
            { name: "ミラノ風ドリア", calories: 548, protein: 15.8, fat: 22.4, carbs: 68.5 },
            { name: "マルゲリータピザ", calories: 568, protein: 22.4, fat: 18.5, carbs: 72.8 },
            { name: "パルマ風スパゲッティ", calories: 612, protein: 18.5, fat: 18.2, carbs: 86.5 },
            { name: "カルボナーラ", calories: 768, protein: 24.2, fat: 32.5, carbs: 86.2 },
          ]}
          highlightProtein
        />

        <p className="text-xs text-gray-400 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。おすすめマークは200kcal以下のメニューに表示。
        </p>

        <TipBox title="カロリーランキングの読み解き方">
          <p>注目すべきは<Marker>サラダ系（68〜138kcal）とグリル系（458〜542kcal）の間に大きな差がある</Marker>点。サラダ + グリルの組み合わせなら600kcal前後で高タンパクな食事が実現できます。一方、パスタ・ドリア・ピザは炭水化物（C）が60g以上と非常に高い点に要注意。</p>
        </TipBox>

        {/* Section 3: 筋トレ民におすすめ */}
        <SectionHeading id="high-protein">筋トレ民におすすめの高タンパクメニュー</SectionHeading>

        <p className="mb-6">
          サイゼリヤはグリル系メニューが高タンパクでコスパ抜群。特に<Marker>若鶏のグリル（P35.2g/¥500）はサイゼの筋トレ飯として有名</Marker>で、SNSでも多くのトレーニーに支持されています。
        </p>

        <RankingCard rank={1} title="若鶏のグリル（ディアボラ風）" subtitle="480kcal / P35.2g / F30.5g / C12.8g / ¥500">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            サイゼリヤの<Marker>タンパク質No.1メニュー</Marker>。鶏もも肉のグリルにスパイシーなディアボラソースがかかった一品。500円で高タンパク35.2gが摂れるコスパ最強メニューです。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            炭水化物がわずか12.8gと非常に低いのも特徴。糖質制限ダイエット中の方にも最適です。ライスを追加しなければ、低糖質・高タンパクの理想的な食事になります。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="ミックスグリル" subtitle="542kcal / P32.0g / F38.5g / C14.2g / ¥500">
          <p className="text-sm text-gray-700 leading-relaxed">
            ハンバーグ・チキン・ソーセージの3種盛り。<Marker color="blue">P32gで500円</Marker>という優れたコスパに加え、いろいろなお肉を楽しめるので満足感が高い。脂質38.5gとやや高めですが、タンパク質をしっかり摂りたい日におすすめです。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="辛味チキン（3本）" subtitle="218kcal / P16.5g / F12.8g / C9.2g / ¥300">
          <p className="text-sm text-gray-700 leading-relaxed">
            おつまみ感覚で<Marker color="green">P16.5gをたった218kcalで摂取</Marker>できる優秀メニュー。サイドメニューとしてタンパク質を追加するのに最適です。サラダと組み合わせれば、低カロリー・高タンパクな食事が完成します。
          </p>
        </RankingCard>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">4</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">リブステーキ</h3>
              <p className="text-xs text-gray-500">502kcal / P28.8g / F35.2g / C12.5g / ¥1,000</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              牛肉で<Marker color="blue">P28.8g</Marker>。価格は1,000円と高めですが、ファミレスでステーキが食べられるのはサイゼリヤの魅力。特別な日の高タンパク食として、またダイエットのご褒美メニューとしておすすめです。
            </p>
          </div>
        </div>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">5</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">ハンバーグステーキ</h3>
              <p className="text-xs text-gray-500">458kcal / P22.5g / F32.4g / C18.2g / ¥400</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              400円で<Marker color="green">P22.5g</Marker>。脂質はやや高めですが、タンパク質コスパは優秀。ライスなしで注文すれば糖質も抑えられます。ディアボラ風よりもあっさりした味が好みの方に。
            </p>
          </div>
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop" alt="彩り豊かなヘルシーフードプレート" />

        {/* Mid-article CTA */}
        <CTABanner
          title="サイゼリヤのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 500円以下 */}
        <SectionHeading id="under-500">500円以下で高タンパク！サイゼの神注文法</SectionHeading>

        <p className="mb-6">
          サイゼリヤの最大の魅力はコスパ。<Marker>500円以下でも高タンパクな食事が可能</Marker>です。以下の3つの注文パターンを覚えておけば、お財布にも体にも優しい食事ができます。
        </p>

        <ComparisonTable
          headers={["注文パターン", "価格", "カロリー", "タンパク質"]}
          rows={[
            ["辛味チキン + 青豆の温サラダ", "¥500", "356 kcal", "P 22.3g"],
            ["若鶏のグリル（単品）", "¥500", "480 kcal", "P 35.2g"],
            ["小エビのサラダ + ほうれん草のソテー", "¥490 (税込目安)", "333 kcal", "P 17.5g"],
          ]}
          bestRowIndex={1}
        />

        <SubSectionHeading>辛味チキン + 柔らか青豆の温サラダ（¥500 / 356kcal）</SubSectionHeading>
        <p className="mb-6">
          辛味チキンでタンパク質を摂りつつ、温サラダで野菜も補給。<Marker>500円ぴったりでP22.3g</Marker>、栄養バランスも良好です。「がっつり食べたい気分じゃないけど、タンパク質はしっかり摂りたい」という日に最適。
        </p>

        <SubSectionHeading>若鶏のグリル（ディアボラ風）単品（¥500 / 480kcal）</SubSectionHeading>
        <p className="mb-6">
          <Marker color="blue">500円でP35.2gはサイゼリヤ最強のタンパク質コスパ</Marker>。これ1品で十分な高タンパク食事になります。筋トレ後の栄養補給に最適で、多くのトレーニーが「サイゼのディアボラ」を定番メニューにしています。
        </p>

        <SubSectionHeading>小エビのサラダ + ほうれん草のソテー（約¥490 / 333kcal）</SubSectionHeading>
        <p className="mb-8">
          低カロリーかつ野菜中心の組み合わせ。<Marker color="green">333kcalでP17.5g</Marker>と、ダイエット重視の方におすすめ。食物繊維やビタミンも摂れるので、栄養バランスの偏りが気になる方に。
        </p>

        <TipBox title="ライスを追加するかどうか">
          <p>サイゼリヤのライスS（196kcal / C43g）を追加すると、それだけで約200kcal増。糖質も一気に跳ね上がります。ダイエット中は<Marker>ライスなしでグリル + サラダ</Marker>の組み合わせがベストです。どうしても炭水化物が欲しい場合は、パン（1個約80kcal）を選びましょう。</p>
        </TipBox>

        {/* Section 5: 避けるべきメニュー */}
        <SectionHeading id="avoid">避けるべき高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          パスタ・ドリア・ピザは炭水化物が多くカロリーが高め。<Marker>ダイエット中は避けるか、シェアして量を減らしましょう</Marker>。
        </p>

        <WarningBox title="ダイエット中は要注意なメニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">カルボナーラ（768kcal）</span> ─ 脂質32.5g + 炭水化物86.2gのダブルパンチ。サイゼリヤで最も高カロリーなメニューの一つ。</li>
            <li><span className="font-bold">パルマ風スパゲッティ（612kcal）</span> ─ 炭水化物86.5gとほぼ糖質の塊。タンパク質18.5gに対してカロリーが高すぎます。</li>
            <li><span className="font-bold">マルゲリータピザ（568kcal）</span> ─ チーズのタンパク質22.4gは魅力的だが、炭水化物72.8gが難点。</li>
            <li><span className="font-bold">ミラノ風ドリア（548kcal）</span> ─ 300円と安いのでつい頼みがちですが、548kcalで炭水化物68.5g。コスパの良さに釣られないよう注意。</li>
            <li><span className="font-bold">ペペロンチーノ（528kcal）</span> ─ 一見シンプルで低カロリーに見えますが、炭水化物88.4gと最も糖質が高い。</li>
          </ul>
        </WarningBox>

        <TipBox title="「ミラノ風ドリア」の誘惑に注意">
          <p>300円という圧倒的な安さで有名なミラノ風ドリアですが、<Marker>548kcal・C68.5g</Marker>とダイエットには不向き。同じ500円台なら、若鶏のグリル（480kcal・P35.2g・C12.8g）の方が圧倒的に良い選択です。「安いから」で選ばず、栄養成分で選びましょう。</p>
        </TipBox>

        {/* Section 6: おすすめ組み合わせ */}
        <SectionHeading id="combos">おすすめの組み合わせ3パターン</SectionHeading>

        <p className="mb-6">
          サイゼリヤの強みは単品を自由に組み合わせられること。目的別に<Marker>最適な組み合わせ</Marker>を3パターン紹介します。
        </p>

        <ComparisonTable
          headers={["パターン", "メニュー構成", "価格", "カロリー", "P"]}
          rows={[
            ["ダイエット向け", "小エビのサラダ + 辛味チキン", "¥650", "330 kcal", "25.0g"],
            ["筋トレ向け", "若鶏のグリル + 青豆の温サラダ", "¥700", "618 kcal", "41.0g"],
            ["バランス重視", "ハンバーグ + わかめサラダ + ライスS", "¥849", "702 kcal", "27.2g"],
          ]}
          bestRowIndex={1}
        />

        <SubSectionHeading>Pattern 1：ダイエット向けセット（¥650 / 330kcal）</SubSectionHeading>

        <NutritionCard
          name="小エビのサラダ + 辛味チキン（3本）"
          chain="サイゼリヤ"
          calories={330}
          protein={25.0}
          fat={18.0}
          carbs={17.6}
          price={650}
          recommended
        />

        <p className="mb-8 mt-4">
          <Marker>330kcalでP25g</Marker>。サラダで食物繊維も摂れる、ダイエット中に最適な組み合わせです。低カロリーでありながら満足感もあり、ランチにもディナーにも使えます。
        </p>

        <SubSectionHeading>Pattern 2：筋トレ向け高タンパクセット（¥700 / 618kcal）</SubSectionHeading>

        <NutritionCard
          name="若鶏のグリル + 柔らか青豆の温サラダ"
          chain="サイゼリヤ"
          calories={618}
          protein={41.0}
          fat={39.7}
          carbs={21.3}
          price={700}
          recommended
        />

        <p className="mb-8 mt-4">
          <Marker color="blue">P41gで700円</Marker>。筋トレ後のタンパク質補給に最適です。鶏肉と豆で良質なタンパク質を効率よく摂取でき、炭水化物も21.3gと控えめ。筋トレ民の「サイゼ定食」として定番の組み合わせです。
        </p>

        <SubSectionHeading>Pattern 3：バランス重視セット（¥849 / 702kcal）</SubSectionHeading>

        <NutritionCard
          name="ハンバーグステーキ + わかめサラダ + ライスS"
          chain="サイゼリヤ"
          calories={702}
          protein={27.2}
          fat={36.9}
          carbs={67.0}
          price={849}
        />

        <p className="mb-8 mt-4">
          タンパク質・炭水化物・野菜をバランスよく摂れるセット。通常の食事として<Marker color="green">満足感のある組み合わせ</Marker>です。ダイエットの維持期や、軽い運動をした日の食事におすすめ。
        </p>

        <ArticleImage src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop" alt="レストランで楽しく食事をする人々の様子" />

        <AffiliateProductGrid
          title="サイゼリヤと組み合わせたい高タンパクアイテム"
          productIds={["myprotein-impact", "ultora-whey", "inbar-protein", "tanita-scale"]}
        />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          サイゼリヤはダイエット・筋トレ中の外食先として最適なチェーンの一つです。この記事のポイントを整理しました。
        </p>

        <CheckList
          items={[
            "若鶏のグリル（P35.2g/¥500）がタンパク質コスパ最強",
            "パスタ・ドリア・ピザを避け、グリル系 + サラダを中心に注文",
            "500円以下でもP20g以上の高タンパク食事が可能",
            "ミラノ風ドリア（300円）は安いが548kcal。コスパの罠に注意",
            "ライスを抜くだけで約200kcal・糖質43gをカットできる",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。最新の情報はサイゼリヤ公式サイトでご確認ください。
        </p>

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="saizeriya-diet" />

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
