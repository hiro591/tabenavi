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
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  SourceNote,
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "日高屋のカロリーガイド｜太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/hidakaya-diet" },
  description:
    "中華食堂・日高屋のメニューをカロリーの実データで解説。低カロリーなメニューや、麺・揚げ物・チャーハンのカロリーに注意した選び方、ダイエット中の食べ方のコツを紹介します。",
  keywords: [
    "日高屋 カロリー",
    "日高屋 ダイエット",
    "日高屋 カロリー一覧",
    "日高屋 低カロリー",
    "日高屋 太らない",
    "日高屋 メニュー カロリー",
  ],
  openGraph: {
    title: "日高屋のカロリーガイド｜太りにくいメニューの選び方",
    description:
      "中華食堂・日高屋のメニューをカロリーの実データで解説。低カロリーなメニューや、麺・揚げ物・チャーハンのカロリーに注意した選び方、ダイエット中の食べ方のコツを紹介します。",
    url: "https://www.tabenavi.jp/guide/hidakaya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "日高屋のカロリーガイド｜太りにくいメニューの選び方",
  description:
    "中華食堂・日高屋のメニューをカロリーの実データで解説。低カロリーなメニューや、麺・揚げ物・チャーハンのカロリーに注意した選び方、ダイエット中の食べ方のコツを紹介します。",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/hidakaya-diet",
};

const tocItems = [
  { id: "calorie-note", label: "日高屋のカロリーの読み方" },
  { id: "low-calorie", label: "低カロリーで選ぶメニュー" },
  { id: "ramen-calorie", label: "麺類のカロリーに注意" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "how-to-eat", label: "太りにくい食べ方・組み合わせ" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "summary", label: "まとめ" },
];

export default function HidakayaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="日高屋のカロリーガイド"
        subtitle="太りにくいメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=400&fit=crop"
        breadcrumb="日高屋のカロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="hidakaya-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月25日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question={"日高屋でダイエット中にカロリーを抑えたいなら、何を選べばいい？"}
          answer={
            <>
              カロリーを抑えたいなら<strong>冷奴（75kcal）・白菜キムチ（92kcal）・枝豆（111kcal）</strong>などのおつまみや、<strong>半ラーメン（324kcal）・野菜炒め単品（365kcal）・やきとり丼（391kcal）</strong>といった軽めの一品が選びやすいです。逆に高カロリーなのは<strong>チャーハン（726kcal）・味噌ラーメン（940kcal）・各種定食（940〜1011kcal）・天津飯（1008kcal）</strong>など。ラーメン＋半チャーハンや餃子を重ねるセットは1,000kcalを超えることが多いので、単品中心に組み立てると差がつきます。
            </>
          }
        />

        {/* 導入文 */}
        <p className="mb-4">
          日高屋は中華そばや餃子、定食がそろう身近な中華食堂チェーンです。ただし<Marker>味噌ラーメンは940kcal、チャーハンは726kcal、定食は940〜1,011kcal</Marker>と、メニューによってカロリーの幅がとても大きいのが特徴。選び方を間違えると、1食で1,000kcalを超えることも珍しくありません。
        </p>
        <p className="mb-4">
          一方で、<Marker color="green">半ラーメン（324kcal）や野菜炒め単品（365kcal）、おつまみ系の小皿</Marker>など、カロリーを抑えやすいメニューも用意されています。ポイントは「麺＋ご飯もの＋餃子」を重ねず、単品を中心に組み立てること。たとえばラーメンと半チャーハンのセット（味噌＋半チャーハンで約1,253kcal）を、半ラーメン＋野菜炒め単品に置き換えるだけで、大きくカロリーを抑えられます。
        </p>
        <p className="mb-4">
          なお、<Marker color="blue">日高屋は公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説します。</Marker>「まぐろ赤身は一般に高タンパク」「麺類は糖質が多くなりやすい」といった一般的な栄養の話には触れますが、日高屋の特定メニューにタンパク質◯gといった数値は付けません。
        </p>
        <p className="mb-8">
          この記事では、日高屋の主要メニューをカロリーの実データで整理し、ダイエット中でも満足できる選び方と組み合わせを解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="hidakaya-diet-ramen" genre="ramen" />

        {/* Section 1: カロリーの読み方 */}
        <section className="mb-16">
          <SectionHeading id="calorie-note">日高屋のカロリーの読み方</SectionHeading>

          <p className="mb-4">
            日高屋のメニューは、カロリーの差が非常に大きいのが特徴です。<Marker>軽いおつまみは数十kcal、麺類や定食は900kcal前後</Marker>と、同じ店内でも10倍以上の開きがあります。まずは大まかなカロリー帯をつかんでおくと、注文の判断がしやすくなります。
          </p>

          <NumberedList
            items={[
              {
                title: "おつまみ・小皿は低カロリー帯（30〜200kcal台）",
                body: "冷奴（75kcal）、白菜キムチ（92kcal）、枝豆（111kcal）など、サイドに添えやすい小皿は低カロリー。野菜・豆腐系は一般にカロリーが控えめになりやすく、量の調整役として便利です。",
              },
              {
                title: "麺類・ご飯ものは中〜高カロリー帯（600〜1,000kcal超）",
                body: "中華そば（636kcal）、チャーハン（726kcal）、味噌ラーメン（940kcal）、天津飯（1,008kcal）など。麺類は一般に糖質・脂質が多くなりやすく、ご飯ものも量が出やすいため、1品で1食分のカロリーになりがちです。",
              },
              {
                title: "定食・セットは最も高カロリー帯（940〜1,600kcal台）",
                body: "ラーメンや炒め物にライスが付く定食、麺＋半チャーハン＋餃子のセットは1,000kcalを超えるものが多数。ボリューム重視の日でも、組み合わせ次第でカロリーは大きく変わります。",
              },
            ]}
          />

          <p className="mb-4 mt-6">
            なお、繰り返しになりますが<Marker color="blue">日高屋は公式にタンパク質・脂質・炭水化物（PFC）の数値を公開していません</Marker>。そのため本記事では、各メニューに付けられるのは<strong>カロリーのみ</strong>です。PFCで細かく管理したい場合は、栄養成分が公開されている他チェーンと組み合わせて考えるとよいでしょう。
          </p>

          <SourceNote asOf="2026年6月" />

          <TipBox title="カロリー帯を意識して組み立てる">
            <p>
              日高屋は<Marker>「麺類・ご飯もの・定食」のどれを軸にするか</Marker>で、1食のカロリーがほぼ決まります。軽くしたい日は半ラーメン（324kcal）や野菜炒め単品（365kcal）を主役にし、おつまみ系の小皿で量を足すと、1食を400〜600kcal台に収めやすくなります。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーで選ぶ */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選ぶ日高屋メニュー</SectionHeading>

          <p className="mb-4">
            カロリーを最優先で抑えたいときの選択肢を、低い順に整理しました。<Marker color="blue">おつまみの小皿と軽めの一品を組み合わせる</Marker>と、量を調整しながらカロリーをコントロールできます。
          </p>

          <CompareBar
            title="日高屋 低カロリーメニュー カロリー比較（低い順）"
            metric="calorie"
            unit="kcal"
            sort="asc"
            highlightTop={5}
            items={[
              { name: "スープ", value: 38 },
              { name: "冷奴", value: 75 },
              { name: "白菜キムチ", value: 92 },
              { name: "枝豆", value: 111 },
              { name: "餃子（3個）", value: 161 },
              { name: "おつまみ唐揚げ", value: 209 },
              { name: "半ライス", value: 252 },
              { name: "半チャーハン", value: 313 },
              { name: "半ラーメン", value: 324 },
              { name: "野菜炒め単品", value: 365 },
              { name: "やきとり丼", value: 391 },
              { name: "ライス", value: 420 },
              { name: "ニラレバ炒め単品", value: 482 },
              { name: "肉野菜炒め単品", value: 515 },
            ]}
            caption="数値はたべなび掲載の実データ（kcal）。●印は低カロリー上位5品。カロリーは店舗・時期により異なる場合があります。"
          />

          <p className="text-xs text-gray-400 mb-8">
            ※カロリーは日高屋公式サイトの情報をもとに記載。日高屋はタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説します。メニュー改定・店舗により異なる場合があります。
          </p>

          <p className="mb-4">
            最も軽いのは<Marker>スープ（38kcal）や冷奴（75kcal）、白菜キムチ（92kcal）</Marker>といった小皿。これらは量の調整役として優秀で、メインに添えてもカロリーをほとんど増やしません。一品で軽い食事にしたいなら<Marker color="green">半ラーメン（324kcal）や野菜炒め単品（365kcal）、やきとり丼（391kcal）</Marker>が選びやすい範囲です。
          </p>

          <TipBox title="小皿で「かさ増し」しながらカロリーを抑える">
            <p>
              半ラーメン（324kcal）や野菜炒め単品（365kcal）を主役に、冷奴（75kcal）や白菜キムチ（92kcal）といった<Marker color="blue">低カロリーの小皿を足す</Marker>と、満足感を保ちつつ1食を400〜500kcal前後にまとめやすくなります。一般論として、野菜や豆腐などかさのある食材を先に食べると満腹感を得やすいとされています。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1547928576-b822bc410bdf?w=800&h=400&fit=crop"
          alt="中華食堂の野菜炒めのイメージ"
        />

        {/* Section 3: 麺類のカロリーに注意 */}
        <section className="mb-16">
          <SectionHeading id="ramen-calorie">麺類のカロリーに注意</SectionHeading>

          <p className="mb-4">
            日高屋の主役といえばラーメン類ですが、<Marker>麺類は一般に糖質・脂質が多くなりやすく、カロリーも高めになりがち</Marker>です。同じ麺類でも、種類によってカロリーには大きな差があります。
          </p>

          <CompareBar
            title="日高屋 麺類 カロリー比較（低い順）"
            metric="calorie"
            unit="kcal"
            sort="asc"
            highlightTop={3}
            items={[
              { name: "半ラーメン", value: 324 },
              { name: "中華そば", value: 636 },
              { name: "野菜たっぷりタンメン（麺少なめ）", value: 639 },
              { name: "とんこつラーメン", value: 670 },
              { name: "野菜たっぷりタンメン", value: 826 },
              { name: "味噌ラーメン", value: 940 },
              { name: "五目あんかけラーメン", value: 907 },
              { name: "秘伝の辛味噌ラーメン", value: 1034 },
              { name: "味噌チャーシューメン", value: 1119 },
            ]}
            caption="数値はたべなび掲載の実データ（kcal）。●印はこの中の低カロリー上位3品。カロリーは店舗・時期により異なる場合があります。"
          />

          <p className="mb-4">
            最も軽いのは<Marker>半ラーメン（324kcal）</Marker>。フルサイズの麺類では中華そば（636kcal）が比較的控えめで、味噌系（味噌ラーメン940kcal、味噌チャーシューメン1,119kcal）はカロリーが大きく上がります。<Marker color="blue">「野菜たっぷりタンメン」は野菜が多いものの826kcal</Marker>あり、麺少なめ（639kcal）にするとカロリーを抑えられます。
          </p>

          <TipBox title="麺類を選ぶときのコツ">
            <p>
              軽くしたい日は<Marker>半ラーメン（324kcal）や中華そば（636kcal）</Marker>を基準にし、味噌系・チャーシュー系・あんかけ系などこってり寄りの麺は900kcal超になりやすい点を意識しましょう。麺の量を「少なめ」にできるメニューなら、それだけでカロリーを抑えられます。一般論として、麺類は糖質が中心になりやすいため、野菜の小皿を添えるとバランスを取りやすくなります。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            日高屋で注意したいのは、<Marker>麺・ご飯・揚げ物が重なるメニューやセット</Marker>。気づかないうちに1食で900kcal〜1,000kcalを超えます。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー"]}
            rows={[
              ["味噌ラーメン＋やきとり丼＋餃子6個セット", "1,662 kcal"],
              ["味噌ラーメン＋半チャーハン＋餃子6個セット", "1,584 kcal"],
              ["天津飯", "1,008 kcal"],
              ["生姜焼き定食", "983 kcal"],
              ["唐揚げ定食", "949 kcal"],
              ["味噌ラーメン", "940 kcal"],
              ["野菜炒め定食", "826 kcal"],
              ["唐揚げ単品", "743 kcal"],
              ["チャーハン", "726 kcal"],
            ]}
            bestRowIndex={8}
          />

          <p className="mb-4">
            最も高カロリーなのは<Marker>麺＋ご飯もの＋餃子を重ねるセット（1,500〜1,662kcal）</Marker>。単品でも味噌ラーメン（940kcal）、天津飯（1,008kcal）、各種定食（949〜1,011kcal）は高めです。<Marker color="blue">「麺＋ご飯もの＋餃子」を1食でそろえると、それだけで1,000kcalを超えやすい</Marker>ので注意しましょう。
          </p>

          <WarningBox title="ダイエット中は注文に気をつけたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">麺＋半チャーハン／やきとり丼＋餃子のセット（1,250〜1,662kcal）</span> ─ 麺・ご飯・餃子が重なり、1食で1,000kcalを大きく超えます。セットより単品中心がおすすめ。</li>
              <li><span className="font-bold">各種定食（940〜1,011kcal）</span> ─ 炒め物や揚げ物にライスが付く定食はボリューム十分なぶん高カロリー。ライスを控えるか、おかず単品＋小皿に置き換えを検討。</li>
              <li><span className="font-bold">味噌ラーメン（940kcal）・天津飯（1,008kcal）</span> ─ 単品でも高カロリー。こってり系の麺やあんかけのご飯ものは、頻度と量に注意したいメニューです。</li>
              <li><span className="font-bold">チャーハン（726kcal）・唐揚げ単品（743kcal）</span> ─ ご飯ものや揚げ物は単品でも高め。重ね頼みを避けるだけでもカロリーを抑えられます。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらを完全に避ける必要はありません。<Marker color="green">セットを単品に分け、麺・ご飯・揚げ物のどれか1つに絞る</Marker>のがコツ。たとえば味噌ラーメン＋半チャーハンセット（約1,253kcal）を、半ラーメン（324kcal）＋野菜炒め単品（365kcal）に置き換えると、1食で500kcal以上の差がつきます。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="日高屋のカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 5: 太りにくい食べ方・組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="how-to-eat">太りにくい食べ方・組み合わせ</SectionHeading>

          <p className="mb-6">
            日高屋は<Marker>単品メニューが豊富</Marker>なので、組み合わせ次第でカロリーを自由に設計できます。目的別のおすすめ組み合わせを、カロリーの実データで整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ組み合わせ", "カロリー目安"]}
            rows={[
              ["とことん軽め", "半ラーメン ＋ 冷奴", "約399 kcal"],
              ["野菜も摂りたい", "野菜炒め単品 ＋ 白菜キムチ", "約457 kcal"],
              ["しっかり食べる", "中華そば ＋ 枝豆", "約747 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            最も軽いのは<Marker color="green">半ラーメン（324kcal）＋冷奴（75kcal）で約399kcal</Marker>。あっさり食べたい日や夜遅い時間に向いています。野菜も摂りたいなら野菜炒め単品（365kcal）＋白菜キムチ（92kcal）で約457kcal。しっかり食べたい日でも、中華そば（636kcal）＋枝豆（111kcal）なら約747kcalに収まります。
          </p>

          <SubSectionHeading>食べる順番と組み合わせの工夫</SubSectionHeading>

          <NumberedList
            items={[
              {
                title: "野菜・小皿から食べ始める",
                body: "白菜キムチ（92kcal）や野菜炒めなど、野菜系の小皿やおかずから食べ始めると満腹感を得やすく、麺やご飯の食べ過ぎを防げます。最初に麺・ご飯をかき込まないのがコツです。",
              },
              {
                title: "「麺＋ご飯もの＋餃子」を重ねない",
                body: "ラーメンに半チャーハンや餃子を足すと一気に1,000kcalを超えます。ご飯ものや餃子を足したい日は、麺を半ラーメン（324kcal）にするなど、どこかを軽くして調整しましょう。",
              },
              {
                title: "ライス・チャーハンは「半分」を選ぶ",
                body: "ライス（420kcal）を半ライス（252kcal）に、チャーハンを半チャーハン（313kcal）にするだけで、ご飯ものだけで150〜400kcalほど抑えられます。主食を欲張らないことが効きます。",
              },
              {
                title: "こってり麺・揚げ物は頻度を調整する",
                body: "味噌系の麺（940kcal〜）や唐揚げ単品（743kcal）は単品でも高カロリー。毎回ではなく、軽い日とメリハリをつけると1週間単位でのカロリーを管理しやすくなります。",
              },
            ]}
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
            alt="バランスの良い食事のイメージ"
          />
        </section>

        {/* Section 6: 目的別の選び方 */}
        <section className="mb-16">
          <SectionHeading id="by-goal">目的別の選び方</SectionHeading>

          <p className="mb-6">
            「どれくらい軽くしたいか」によって、日高屋で選ぶべきメニューは変わります。カロリーの目安で、目的別の選び方を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "ひとこと"]}
            rows={[
              ["とにかく軽く", "半ラーメン", "324 kcal", "麺類で最も軽い"],
              ["野菜を摂りたい", "野菜炒め単品", "365 kcal", "軽めで野菜も補える"],
              ["定番を軽く", "中華そば", "636 kcal", "麺類では控えめ"],
              ["しっかり食べる", "野菜たっぷりタンメン（麺少なめ）", "639 kcal", "野菜多めで麺は控えめ"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            カロリーをとことん抑えたいなら<Marker color="blue">半ラーメン（324kcal）や野菜炒め単品（365kcal）</Marker>。定番のラーメンを楽しみたい日は、麺類では控えめな中華そば（636kcal）が選びやすい範囲です。「野菜たっぷりタンメン」は通常826kcalですが、<Marker>麺少なめ（639kcal）にすると野菜を多く摂りつつカロリーを抑えられます</Marker>。
          </p>

          <RankingCard rank={1} title="半ラーメン" subtitle="324kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              麺類の中で<Marker color="green">最も軽い324kcal</Marker>。あっさり食べたい日や、小皿を足して量を調整したい日のベースに最適です。冷奴（75kcal）や白菜キムチ（92kcal）を添えても、合計400〜500kcal前後に収まります。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="野菜炒め単品" subtitle="365kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>365kcal</Marker>で野菜をしっかり摂れる一品。ご飯ものや麺を重ねず、これを軸に小皿を足すとカロリーを抑えやすくなります。野菜系は一般にカロリーが控えめになりやすく、かさがあるため満足感も得やすいのが利点です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="中華そば" subtitle="636kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              日高屋の定番。<Marker color="blue">636kcal</Marker>と、フルサイズの麺類の中では比較的控えめです。こってり系の味噌ラーメン（940kcal）と比べると約300kcalの差があるため、ラーメンを食べたい日の「軽め寄りの選択肢」になります。
            </p>
          </RankingCard>

          <p className="mb-4 text-sm text-gray-600">
            関連：
            <Link href="/chains/hidakaya" className="text-sky-600 hover:underline mx-1">日高屋のメニュー栄養一覧</Link>
            ／
            <Link href="/chains/hidakaya/low-calorie" className="text-sky-600 hover:underline mx-1">低カロリーメニュー</Link>
            ／
            <Link href="/chains/hidakaya/diet" className="text-sky-600 hover:underline mx-1">ダイエット向けメニュー</Link>
          </p>

          <p className="mb-4 text-sm text-gray-600">
            あわせて読みたい：
            <Link href="/guide/ramen-diet" className="text-sky-600 hover:underline mx-1">ラーメンで太らない食べ方</Link>
            ／
            <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline mx-1">外食ダイエットの基本</Link>
            ／
            <Link href="/guide/low-fat-eating-out" className="text-sky-600 hover:underline mx-1">外食で脂質を抑える選び方</Link>
            ／
            <Link href="/guide/calorie-database" className="text-sky-600 hover:underline mx-1">外食カロリー横断データベース</Link>
          </p>
        </section>

        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "日高屋は公式にPFC（タンパク質・脂質・炭水化物）を公開しておらず、本記事はカロリー中心で解説",
              "低カロリーは冷奴（75kcal）・白菜キムチ（92kcal）・半ラーメン（324kcal）・野菜炒め単品（365kcal）が選びやすい",
              "麺類は味噌ラーメン（940kcal）などこってり系で高くなりやすく、中華そば（636kcal）や半ラーメンが控えめ",
              "高カロリーは天津飯（1,008kcal）・各種定食（940〜1,011kcal）・麺＋ご飯＋餃子セット（最大1,662kcal）",
              "「麺＋ご飯もの＋餃子」を重ねず、単品中心＋小皿でかさ増しするのが太りにくい食べ方",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※カロリーは日高屋公式サイトの情報をもとに記載。日高屋はタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に解説しています。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="hidakaya-diet"
          items={[
            {
              q: "日高屋で一番カロリーが低いメニューは何ですか？",
              a: "おつまみ・小皿ではスープ（38kcal）、冷奴（75kcal）、白菜キムチ（92kcal）、枝豆（111kcal）が低カロリーです。一品で軽い食事にしたい場合は、半ラーメン（324kcal）や野菜炒め単品（365kcal）、やきとり丼（391kcal）が選びやすい範囲です。",
            },
            {
              q: "日高屋のラーメンでカロリーが低いのはどれですか？",
              a: "半ラーメンが324kcalと最も軽く、フルサイズでは中華そば（636kcal）が比較的控えめです。味噌ラーメン（940kcal）や味噌チャーシューメン（1,119kcal）などこってり系はカロリーが高めなので、軽くしたい日は中華そばや半ラーメンがおすすめです。",
            },
            {
              q: "日高屋のタンパク質・PFCはどこで見られますか？",
              a: "日高屋は公式にタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事を含めPFCの数値はご案内できません。日高屋についてはカロリーを基準に選び、PFCで細かく管理したい場合は、栄養成分を公開している他チェーンと組み合わせて考えるのがおすすめです。",
            },
            {
              q: "ダイエット中に避けたほうがいい日高屋のメニューは？",
              a: "天津飯（1,008kcal）、各種定食（949〜1,011kcal）、味噌ラーメン（940kcal）、チャーハン（726kcal）などは高カロリーです。特に「麺＋半チャーハン＋餃子」のセットは1,500kcalを超えるものもあります。これらは単品に分け、麺・ご飯・揚げ物のどれか1つに絞るとカロリーを抑えられます。",
            },
            {
              q: "餃子はダイエット中に食べても大丈夫ですか？",
              a: "餃子（3個）は161kcalと、小皿としては軽めです。麺やご飯ものに重ねると合計カロリーが上がるため、餃子を食べたい日は麺を半ラーメン（324kcal）にするなど、どこかを軽くして調整するのがおすすめです。量を欲張らないことがポイントです。",
            },
            {
              q: "日高屋でカロリーを抑えたいときの組み合わせは？",
              a: "①半ラーメン（324kcal）＋冷奴（75kcal）で約399kcal、②野菜炒め単品（365kcal）＋白菜キムチ（92kcal）で約457kcal、③中華そば（636kcal）＋枝豆（111kcal）で約747kcal。とにかく軽くしたいなら①が最もカロリーを抑えられます。麺＋ご飯もの＋餃子を重ねないことが基本です。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-25", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="hidakaya-diet" />

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
