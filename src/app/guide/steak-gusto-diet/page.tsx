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
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "ステーキガストのカロリーガイド｜太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/steak-gusto-diet" },
  description:
    "ステーキガストのメニューをカロリーの実データで解説。ステーキやサラダバーの活用法、低カロリーな選び方、ダイエット中に注意したい高カロリーメニューを紹介します。",
  keywords: [
    "ステーキガスト カロリー",
    "ステーキガスト ダイエット",
    "ステーキガスト カロリー一覧",
    "ステーキガスト 低カロリー",
    "ステーキガスト メニュー カロリー",
    "ステーキガスト サラダバー",
  ],
  openGraph: {
    title: "ステーキガストのカロリーガイド｜太りにくいメニューの選び方",
    description:
      "ステーキガストのメニューをカロリーの実データで解説。ステーキやサラダバーの活用法、低カロリーな選び方、ダイエット中に注意したい高カロリーメニューを紹介します。",
    url: "https://www.tabenavi.jp/guide/steak-gusto-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ステーキガストのカロリーガイド｜太りにくいメニューの選び方",
  description:
    "ステーキガストのメニューをカロリーの実データで解説。ステーキやサラダバーの活用法、低カロリーな選び方、ダイエット中に注意したい高カロリーメニューを紹介します。",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/steak-gusto-diet",
};

const tocItems = [
  { id: "no-pfc", label: "はじめに：ステーキガストはカロリー中心で見る" },
  { id: "low-cal", label: "低カロリーで選ぶならこのメニュー" },
  { id: "calorie-ranking", label: "主要メニュー カロリー比較" },
  { id: "high-cal", label: "ダイエット中に注意したい高カロリーメニュー" },
  { id: "how-to-eat", label: "太りにくい食べ方・組み合わせ" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "summary", label: "まとめ" },
];

export default function SteakGustoDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ステーキガストのカロリーガイド"
        subtitle="太りにくいメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=400&fit=crop"
        breadcrumb="ステーキガストのカロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="steak-gusto-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月25日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="ステーキガストでダイエット中におすすめのメニューは？低カロリーで何を選べばいい？"
          answer={
            <>
              カロリーを抑えたいなら<strong>「ヒレステーキ（約100g）」（247kcal）「ラウンドステーキ（約120g）」（298kcal）「やわらかカットステーキ（約120g）」（352kcal）</strong>といった、量が控えめなステーキ単品が選びやすいです。ライス（単品ライス330kcal）を抜き、サラダバーの野菜を中心に組み立てるのがコツ。逆に避けたいのは<strong>プライムサーロインステーキ（約200g）（1067kcal）やチーズINハンバーグミックスグリル（1070kcal）、超粗びきステーキバーグ×４キング（1255kcal）</strong>といった、単品で1,000kcal前後になる大盛り・複数盛りメニューです。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          ステーキガストは、ステーキやハンバーグをサラダバー付きで楽しめるファミリーレストランです。「肉＝太る」というイメージがありますが、<Marker>量とライス・サラダバーの使い方を意識すれば、ダイエット中でも選びやすいチェーン</Marker>です。
        </p>
        <p className="mb-4">
          まず大事な前提があります。<Marker color="blue">ステーキガストは公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説します。</Marker>当サイトのデータベースにもステーキガストはカロリーのみが収録されており、特定メニューのタンパク質量などは数字で断定できません。そのため、ここでは「どのメニューが何kcalか」という実データをもとに、太りにくい選び方を整理します。
        </p>
        <p className="mb-8">
          目安として、<Marker>ランチのステーキ単品は約100〜120gのものなら247〜396kcal前後</Marker>。一方で大盛り・複数盛り・コンボ系は700〜1,255kcalまで幅があります。この記事では、その差をカロリーの実データで見ていきます。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: はじめに（PFC非公開の扱い） */}
        <SectionHeading id="no-pfc">
          はじめに：ステーキガストはカロリー中心で見る
        </SectionHeading>

        <p className="mb-4">
          一般論として、赤身のステーキは肉なのでタンパク質源になり、ご飯やパン・麺類に比べて糖質は多くなりにくい食べ物です。ダイエット中に「肉を食べたい」というときの選択肢として、ステーキ専門のファミレスは使いやすい部類に入ります。
        </p>
        <p className="mb-4">
          ただし、<Marker>ステーキガストはメニューごとのタンパク質・脂質・炭水化物（PFC）を公式に公開していません</Marker>。そのため本記事では、各メニューに「タンパク質◯g」といった数値を付けることはせず、<strong>公開されているカロリーの実データだけ</strong>を根拠に解説します。「赤身ステーキは一般に高タンパク」といった一般論は紹介しますが、特定の商品にグラム数を紐付けることはしません。
        </p>

        <TipBox title="この記事の読み方">
          <p>
            ステーキガストは<Marker>カロリーのみが公開データ</Marker>です。だからこそ、「ライスを足すか」「大盛り・複数盛りを選ぶか」「サラダバーで何を取るか」といった、カロリーをコントロールしやすいポイントに絞って判断するのが現実的です。タンパク質の正確な量を知りたい場合は、PFCがそろっている他チェーンと比較するのが安全です。
          </p>
        </TipBox>

        <NumberedList
          items={[
            {
              title: "ステーキ単品は量で選ぶ",
              body: "約100gのヒレステーキは247kcal、約120gのラウンドステーキは298kcal。グラム数が少ないほどカロリーは抑えやすく、量の見極めがそのままカロリーの差になります。",
            },
            {
              title: "ライスは抜く・小さくする",
              body: "単品ライスは330kcal、大盛ライスは494kcal。ライスを抜くだけで300kcal以上カットできます。サラダバーで満足感を補うのがおすすめです。",
            },
            {
              title: "複数盛り・大盛り・コンボは別物",
              body: "2種・3種盛りやMEGA盛り、コンボランチは700〜1,255kcalと一気に跳ね上がります。ダイエット中は単品＋サラダバーが基本です。",
            },
          ]}
        />

        <MenuPhoto id="steak-gusto-diet-steak" genre="steak" />

        {/* Section 2: 低カロリーメニュー */}
        <SectionHeading id="low-cal">低カロリーで選ぶならこのメニュー</SectionHeading>

        <p className="mb-6">
          ステーキガストの中でも、<Marker>量が控えめなステーキ単品はカロリーを抑えやすい</Marker>です。ここでは、ライス・トッピングを足さない状態でカロリーが低い順に、選びやすいメニューを紹介します。
        </p>

        <RankingCard rank={1} title="ヒレステーキ（約100g）" subtitle="247kcal" calories={247}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            ステーキガストのランチステーキの中でも<Marker>とびきりカロリーが低い一品</Marker>。約100gと量は控えめですが、サラダバーの野菜やスープで満足感を補えば、軽めの1食としてまとまります。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            「ヒレカットステーキ（約100g）」も同じく247kcal。赤身は一般に脂が少なめなので、カロリーを抑えたい日に選びやすい部位です。ライスを足さなければ、この247kcal前後を起点に組み立てられます。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="ラウンドステーキ（約120g）" subtitle="298kcal" calories={298}>
          <p className="text-sm text-gray-700 leading-relaxed">
            約120gで<Marker color="blue">298kcal</Marker>。ヒレより少しボリュームがありながら300kcal以内に収まる、コスパ良くカロリーを抑えられるステーキです。ライスなしでサラダバー中心に組むと、1食を抑えやすくなります。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="やわらかカットステーキ（約120g）" subtitle="352kcal" calories={352}>
          <p className="text-sm text-gray-700 leading-relaxed">
            約120gで<Marker color="green">352kcal</Marker>。食べ応えのあるカットステーキで、肉をしっかり噛みたい日の選択肢。「肩ロースステーキ（約120g）」は366kcal、「乱切りステーキ（約120g）」は396kcalと、120gクラスのステーキは概ね300〜400kcal台に収まります。
          </p>
        </RankingCard>

        <p className="mb-4">
          ハンバーグ系で軽めに済ませたいなら、<Marker>「超粗びきステーキバーグ（ライト）」が388kcal</Marker>、「ハンバーグ」が410kcalと、こちらも400kcal前後で選べます。いずれもライスを足さない単品での数値です。
        </p>

        <TipBox title="低カロリーに抑えるなら「量」を見る">
          <p>
            ステーキガストはステーキのグラム数がそのままカロリーに効きます。<Marker>約100gのヒレ（247kcal）→約120gのラウンド（298kcal）→約120gのやわらかカット（352kcal）</Marker>と、量が増えるほどカロリーも上がるので、まずは少なめのグラム数を選ぶのが基本です。
          </p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&h=400&fit=crop"
          alt="サラダバーの新鮮な野菜とサラダのイメージ"
        />

        {/* Section 3: カロリー比較 */}
        <SectionHeading id="calorie-ranking">
          ステーキガスト 主要メニュー カロリー比較
        </SectionHeading>

        <p className="mb-4">
          ステーキガストの主要メニューを<strong>実データのカロリーが低い順</strong>に並べました。<Marker color="blue">量の少ないステーキ単品は247〜400kcal台</Marker>、大盛り・複数盛り・コンボ系は700kcalを大きく超えるものが多く、選び方でカロリーが大きく変わります。
        </p>

        <CompareBar
          title="ステーキガスト 主要メニュー カロリー比較（低い順）"
          metric="calorie"
          unit="kcal"
          sort="asc"
          highlightTop={5}
          items={[
            { name: "ヒレステーキ(約100g)", value: 247 },
            { name: "ラウンドステーキ(約120g)", value: 298 },
            { name: "単品ライス", value: 330 },
            { name: "やわらかカットステーキ(約120g)", value: 352 },
            { name: "肩ロースステーキ(約120g)", value: 366 },
            { name: "超粗びきステーキバーグ(ライト)", value: 388 },
            { name: "乱切りステーキ(約120g)", value: 396 },
            { name: "ハンバーグ", value: 410 },
            { name: "みすじステーキ(約100g)", value: 457 },
            { name: "単品大盛ライス", value: 494 },
            { name: "チーズINハンバーグ", value: 610 },
            { name: "炭焼き風チキンステーキ", value: 671 },
            { name: "ミックスグリル", value: 870 },
            { name: "MEGA盛りやわらかカットステーキ(約400g)", value: 941 },
            { name: "プライムサーロインステーキ(約200g)", value: 1067 },
            { name: "チーズINハンバーグミックスグリル", value: 1070 },
            { name: "超粗びきステーキバーグ×4(キング)", value: 1255 },
          ]}
          caption="数値はたべなび掲載の実データ（kcal）。●印は低カロリー上位5品。カロリーは店舗・時期により異なる場合があります。ステーキガストはPFC（タンパク質・脂質・炭水化物）を公開していないため、本表ではカロリーのみを掲載しています。"
        />

        <p className="text-xs text-gray-400 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。ステーキガストはタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説します。
        </p>

        <TipBox title="カロリー比較の読み解き方">
          <p>
            注目すべきは<Marker>量の少ないステーキ単品（247〜400kcal台）と、大盛り・複数盛り・コンボ系（870〜1,255kcal）の間にある大きな差</Marker>です。ステーキガストでカロリーを抑える最大のコツは「量を選ぶこと」と「ライス・複数盛りを足さないこと」。同じ"ステーキ"でも、選び方で2〜4倍ものカロリー差が生まれます。
          </p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="ステーキガストのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューのカロリーをすぐに確認できます"
        />

        {/* Section 4: 高カロリーメニュー */}
        <SectionHeading id="high-cal">
          ダイエット中に注意したい高カロリーメニュー
        </SectionHeading>

        <p className="mb-4">
          ステーキガストには、ボリューム重視の大盛り・複数盛りメニューが豊富です。<Marker>ダイエット中はこれらを避けるか、シェアして量を減らすのが安全</Marker>です。
        </p>

        <WarningBox title="ダイエット中は要注意な高カロリーメニュー">
          <ul className="space-y-2">
            <li>
              <span className="font-bold">超粗びきステーキバーグ×４（キング）（1255kcal）</span> ─ ステーキガストの主要メニューの中でも最も高カロリーな部類。4枚重ねのため単品で1,000kcalを大きく超えます。
            </li>
            <li>
              <span className="font-bold">チーズINハンバーグミックスグリル（1070kcal）</span> ─ チーズ入りハンバーグにグリルを合わせた一皿。ライスを足さなくても1,000kcal超えです。
            </li>
            <li>
              <span className="font-bold">プライムサーロインステーキ（約200g）（1067kcal）</span> ─ サーロインは脂が乗った部位で、約200gと量も多め。同じステーキでも、量と部位でカロリーは大きく変わります。
            </li>
            <li>
              <span className="font-bold">MEGA盛りやわらかカットステーキ（約400g）（941kcal）</span> ─ 約400gの大盛り。ガッツリ食べたい日向けで、ダイエット中は量に注意です。
            </li>
            <li>
              <span className="font-bold">ミックスグリル（870kcal）</span> ─ 複数の肉を盛り合わせるためボリューム満点。単品でも900kcal近くになります。
            </li>
          </ul>
        </WarningBox>

        <p className="mb-4">
          ランチのコンボ系も高カロリーになりがちです。「はらぺこチキン竜田ランチ」は味付けにより<Marker>839〜876kcal</Marker>、日替わりの「満腹コンボランチ」は680〜874kcal、「チキンコンボランチ」は761〜882kcalと、いずれも単品ステーキより大きくカロリーが上がります。
        </p>

        <TipBox title="「ライス食べ放題」「カレー」「パン」の落とし穴">
          <p>
            ステーキガストはライス・カレー・パン・スイーツなどをサラダバーやセットで楽しめますが、ここがカロリーの増えどころです。<Marker>単品ライスだけで330kcal、大盛ライスは494kcal</Marker>。おかわりや、カレー・パン・スイーツの食べすぎは、ステーキ本体より大きくカロリーを押し上げます。サラダバーは野菜やスープを中心に組み立てるのがおすすめです。
          </p>
        </TipBox>

        {/* Section 5: 太りにくい食べ方 */}
        <SectionHeading id="how-to-eat">太りにくい食べ方・組み合わせ</SectionHeading>

        <p className="mb-6">
          ステーキガストでカロリーを抑えるコツは、<Marker>「量の少ないステーキ単品」＋「サラダバーの野菜・スープ」＋「ライスは抜く」</Marker>の3点。具体的な組み合わせを見てみましょう。
        </p>

        <ComparisonTable
          headers={["注文パターン", "カロリー"]}
          rows={[
            ["ヒレステーキ(約100g) ＋ サラダバー(野菜中心)", "約247 kcal〜"],
            ["ラウンドステーキ(約120g) ＋ サラダバー(野菜中心)", "約298 kcal〜"],
            ["やわらかカットステーキ(約120g) ＋ サラダバー(野菜中心)", "約352 kcal〜"],
            ["ラウンドステーキ(約120g) ＋ 単品ライス", "約628 kcal"],
          ]}
          bestRowIndex={0}
        />

        <p className="text-xs text-gray-400 mb-6">
          ※サラダバーで取る量・内容によりカロリーは変動します。上記はステーキ単品のカロリーを起点とした目安です。
        </p>

        <SubSectionHeading>1. ステーキは量の少ないものを選ぶ</SubSectionHeading>
        <p className="mb-6">
          まずはグラム数。<Marker>約100gのヒレ（247kcal）や約120gのラウンド（298kcal）</Marker>を選べば、ステーキ本体のカロリーを300kcal前後に抑えられます。同じメニューでも約150g・約180g・複数盛りになるとカロリーは上がるので、「一番小さいサイズ」を起点に考えるのがコツです。
        </p>

        <SubSectionHeading>2. ライスは抜く、足すなら少なめに</SubSectionHeading>
        <p className="mb-6">
          <Marker color="blue">単品ライス330kcal、大盛ライス494kcal</Marker>。ライスを抜くだけで300kcal以上カットできます。どうしても主食が欲しい日は、大盛りを避けて通常サイズにとどめましょう。
        </p>

        <SubSectionHeading>3. サラダバーは野菜・スープ中心に</SubSectionHeading>
        <p className="mb-8">
          サラダバーは満足感を補う強い味方ですが、<Marker color="green">カレー・パン・スイーツ・ドレッシングのかけすぎはカロリーが増えやすい</Marker>ポイント。野菜やスープを中心に、よく噛んでゆっくり食べることで、ステーキ少なめでも満足しやすくなります。
        </p>

        <TipBox title="トッピングのカロリーも意識する">
          <p>
            ステーキに足すトッピングもカロリーに影響します。たとえば<Marker>「特製ガーリックバター」は84kcal、「マヨネーズ」は209kcal、「チェダーチーズ」は44kcal</Marker>。ソースやバター・チーズを重ねるほどカロリーは上がります。カロリーを抑えたい日は、トッピングは控えめにするか「大葉おろし（58kcal）」のようなさっぱり系を選ぶとよいでしょう。
          </p>
        </TipBox>

        {/* Section 6: 目的別 */}
        <SectionHeading id="by-goal">目的別の選び方</SectionHeading>

        <p className="mb-6">
          「とにかく軽く」「肉はしっかり食べたい」など、目的によっておすすめは変わります。カロリーを基準に、3つのケース別に整理しました。
        </p>

        <ComparisonTable
          headers={["目的", "おすすめの選び方", "カロリー目安"]}
          rows={[
            ["とことん軽く", "ヒレステーキ(約100g) ＋ サラダバー(野菜中心)・ライスなし", "約247 kcal〜"],
            ["肉をしっかり", "やわらかカットステーキ(約120g)・ライスなし", "約352 kcal"],
            ["満足感重視", "ラウンドステーキ(約120g) ＋ 単品ライス", "約628 kcal"],
          ]}
          bestRowIndex={0}
        />

        <SubSectionHeading>とことん軽くしたい日</SubSectionHeading>
        <p className="mb-6">
          カロリー最優先なら<Marker>「ヒレステーキ（約100g）」（247kcal）＋サラダバーの野菜中心</Marker>。ライスを抜けば、ステーキ本体は247kcalから。赤身は一般にあっさりした部位なので、軽く済ませたい日や夜遅めの食事に向いています。
        </p>

        <SubSectionHeading>肉をしっかり食べたい日</SubSectionHeading>
        <p className="mb-6">
          食べ応え重視なら<Marker color="blue">「やわらかカットステーキ（約120g）」（352kcal）</Marker>や「肩ロースステーキ（約120g）」（366kcal）。ライスを足さなければ350〜400kcal前後に収まり、肉の満足感を確保しつつカロリーも抑えられます。
        </p>

        <SubSectionHeading>満足感もカロリーもバランスよく</SubSectionHeading>
        <p className="mb-8">
          主食ありで満足したい日は<Marker color="green">「ラウンドステーキ（約120g）」（298kcal）＋単品ライス（330kcal）で約628kcal</Marker>。ライスを通常サイズにとどめれば、しっかり食べてもこの範囲。運動した日や、昼にしっかり食べたいときに向いています。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop"
          alt="鉄板で焼かれたステーキのイメージ"
        />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          ステーキガストは、選び方を意識すればダイエット中でも使いやすいチェーンです。ポイントを整理しました。
        </p>

        <ArticleSummary
          points={[
            "ステーキガストはPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事はカロリー中心で解説",
            "カロリーを抑えるなら量の少ないステーキ単品（ヒレ約100g 247kcal、ラウンド約120g 298kcal）が選びやすい",
            "ライス（単品330kcal・大盛494kcal）を抜くだけで300kcal以上カットできる",
            "大盛り・複数盛り・コンボ系は870〜1255kcalと高カロリー。ダイエット中は単品＋サラダバーが基本",
            "サラダバーは野菜・スープ中心に。カレー・パン・スイーツ・トッピングの足しすぎに注意",
          ]}
        />

        <CheckList
          items={[
            "ステーキは一番小さいグラム数から選ぶ（量がそのままカロリーに効く）",
            "ライスは抜く、足すなら通常サイズにとどめる",
            "サラダバーは野菜・スープ中心、ドレッシングは控えめに",
            "プライムサーロイン・MEGA盛り・複数盛り・コンボは高カロリーなので量に注意",
            "トッピングはマヨネーズ(209kcal)よりさっぱり系を選ぶとカロリーを抑えやすい",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。最新の情報は
          <a
            href="https://www.skylark.co.jp/steakgusto/menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            ステーキガスト公式サイト
          </a>
          でご確認ください。
        </p>

        {/* 内部リンク（孤児ページ防止） */}
        <TipBox title="ステーキガストのメニューをもっと詳しく">
          <p className="mb-2">
            ステーキガストの全メニューのカロリー一覧は
            <Link href="/chains/steak-gusto" className="text-sky-600 font-bold hover:underline">
              ステーキガストのチェーンページ
            </Link>
            で確認できます。目的別では
            <Link href="/chains/steak-gusto/low-calorie" className="text-sky-600 font-bold hover:underline">
              低カロリーメニュー
            </Link>
            ・
            <Link href="/chains/steak-gusto/diet" className="text-sky-600 font-bold hover:underline">
              ダイエット向けメニュー
            </Link>
            の絞り込みが便利です。
          </p>
          <p>
            他チェーンと比べたい方は
            <Link href="/guide/family-restaurant-diet" className="text-sky-600 font-bold hover:underline">
              ファミレスダイエット比較
            </Link>
            、タンパク質量で選びたい方は（PFCがそろっているチェーンで）
            <Link href="/guide/high-protein-chain-database" className="text-sky-600 font-bold hover:underline">
              高タンパク外食ランキング
            </Link>
            、外食全般のコツは
            <Link href="/guide/eating-out-diet" className="text-sky-600 font-bold hover:underline">
              外食ダイエット完全ガイド
            </Link>
            ・
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 font-bold hover:underline">
              糖質制限×外食ガイド
            </Link>
            もあわせてご覧ください。
          </p>
        </TipBox>

        <ServiceOffers tag="diet" />

        {/* FAQ */}
        <FAQSection
          slug="steak-gusto-diet"
          items={[
            {
              q: "ステーキガストで一番カロリーが低いメニューは？",
              a: "ランチステーキでは「ヒレステーキ（約100g）」と「ヒレカットステーキ（約100g）」がともに247kcalで、量の少ないステーキ単品が最も低カロリーです。次いで「ラウンドステーキ（約120g）」が298kcal。ライスを足さず、サラダバーの野菜を中心に組み立てると1食を抑えやすくなります。",
            },
            {
              q: "ステーキガストのタンパク質（PFC）はどれくらい？",
              a: "ステーキガストはメニューごとのタンパク質・脂質・炭水化物（PFC）を公式に公開していないため、当サイトでも数値での断定は行っていません。一般論として赤身のステーキはタンパク質源になりやすい食べ物ですが、正確なグラム数を知りたい場合は、PFCがそろっている他チェーンと比較するのが安全です。本記事ではカロリーを基準に解説しています。",
            },
            {
              q: "ステーキガストでダイエット中に避けたいメニューは？",
              a: "大盛り・複数盛り・コンボ系が高カロリーです。「超粗びきステーキバーグ×４（キング）」1255kcal、「チーズINハンバーグミックスグリル」1070kcal、「プライムサーロインステーキ（約200g）」1067kcal、「MEGA盛りやわらかカットステーキ（約400g）」941kcal、「ミックスグリル」870kcalなどは単品でも高カロリーです。",
            },
            {
              q: "ステーキガストのライスはどれくらいのカロリー？",
              a: "単品ライスが330kcal、単品大盛ライスが494kcalです。ライスを抜くだけで300kcal以上カットできるため、カロリーを抑えたい日はライスなしでサラダバーの野菜・スープを中心にするのがおすすめです。",
            },
            {
              q: "ステーキガストで肉をしっかり食べつつカロリーを抑えるには？",
              a: "「やわらかカットステーキ（約120g）」352kcalや「肩ロースステーキ（約120g）」366kcalなど、約120gクラスのステーキ単品を選び、ライスを足さないのがコツです。約120gのステーキは概ね300〜400kcal台に収まるので、肉の満足感を確保しながらカロリーを抑えられます。",
            },
            {
              q: "ステーキガストのサラダバーはダイエット中に使える？",
              a: "野菜・スープ中心に取れば、満足感を補える強い味方です。ただしカレー・パン・スイーツ、ドレッシングのかけすぎはカロリーが増えやすいので、野菜とスープを中心に組み立てるのがおすすめです。具体的なカロリーは取る量・内容により変わります。",
            },
          ]}
        />

        {/* 末尾CTA */}
        <CTABanner
          title="ステーキガストのカロリーを無料でチェック"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory entries={[{ date: "2026-06-25", note: "初稿公開" }]} />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="steak-gusto-diet" />

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
