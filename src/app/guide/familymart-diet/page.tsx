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
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ProteinBar,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/familymart-diet" },
  title:
    "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング | たべなび",
  description:
    "ファミリーマートでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。「たんぱく質が摂れる」シリーズやサラダチキンのサラダを活用した朝昼晩の組み合わせプランも解説します。",
  keywords: [
    "ファミマ ダイエット",
    "ファミリーマート 低カロリー",
    "ファミマ 高タンパク",
    "ファミマ サラダチキン",
    "ファミマ たんぱく質が摂れる",
    "コンビニ ダイエット ファミマ",
  ],
  openGraph: {
    title:
      "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
    description:
      "ファミリーマートの低カロリー・高タンパク商品を徹底解説。「たんぱく質が摂れる」シリーズや炭火焼きとりの活用法も紹介。",
    url: "https://www.tabenavi.jp/guide/familymart-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
  description:
    "ファミリーマートでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。「たんぱく質が摂れる」シリーズの活用法も。",
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split("T")[0],
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/familymart-diet",
};

const tocItems = [
  { id: "why-familymart", label: "ファミマがダイエットに使える理由" },
  { id: "low-calorie", label: "低カロリー商品TOP10" },
  { id: "high-protein", label: "高タンパク商品TOP5" },
  { id: "meal-plans", label: "朝昼晩の組み合わせプラン" },
  { id: "avoid", label: "避けるべき商品" },
  { id: "summary", label: "まとめ" },
];

export default function FamilyMartDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ファミマダイエット完全ガイド"
        subtitle="低カロリー＆高タンパク商品ランキング【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
        breadcrumb="ファミマダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="familymart-diet">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 10分
          </p>
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="ファミマでダイエット中におすすめは？高タンパクの本命は？"
          answer={
            <>
              <strong>ファミマの強みは「たんぱく質が摂れる」シリーズとサラダチキン系</strong>。<strong>鶏むね肉とたまごのサラダ（169kcal/P23g）</strong>は1品でタンパク質23gを確保できる本命。手軽さなら<strong>サラダチキンのサラダ（60kcal/P9.4g）</strong>や<strong>炭火焼きとりもも塩（83kcal/P8.1g）</strong>が低カロリーで優秀です。弁当系では<strong>サラダチキンとたまごのサンド（268kcal/P19.1g）</strong>が単品完結で使えます。1食300kcal/P30g台の組み合わせがしやすく、<strong>ダイエット初心者にも使いやすいコンビニ</strong>です（220商品ラインナップ・2026年6月時点）。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          全国約16,500店舗を展開するファミリーマート。実は<Marker>ダイエッターにとって非常に優秀なコンビニ</Marker>であることをご存知ですか？「たんぱく質が摂れる」シリーズ、レジ横の炭火焼きとり、そして低カロリーなサラダ・スープ群。ダイエット食の宝庫と言っても過言ではありません。
        </p>
        <p className="mb-4">
          厚生労働省の「国民健康・栄養調査（令和5年）」によると、日本人の約30%がBMI25以上の肥満に該当します。忙しい現代人にとって、<Marker color="blue">コンビニを賢く活用するダイエット</Marker>は最も現実的な選択肢のひとつです。
        </p>
        <p className="mb-10">
          この記事では、ファミマで買える低カロリー商品TOP10と高タンパク商品TOP5をランキング形式で紹介し、朝昼晩の最適な組み合わせプランも徹底解説します。実在の高タンパク商品を活用した「コンビニで痩せる」戦略を完全網羅しました。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="コンビニの商品棚のイメージ"
        />

        {/* Section 1: ファミマがダイエットに使える理由 */}
        <section className="mb-16">
          <SectionHeading id="why-familymart">
            ファミリーマートがダイエットに使える理由
          </SectionHeading>

          <p className="mb-6">
            ファミマがダイエットに使えるのは単なる印象ではなく、<Marker>明確な4つの理由</Marker>があります。他のコンビニにはない独自の強みを理解して、賢く活用しましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "「たんぱく質が摂れる」シリーズが優秀",
                body: "ファミマには「たんぱく質が摂れる！」を冠したサラダ・サンド・パスタサラダが複数あります。鶏むね肉とたまごのサラダ（169kcal/P23g）、サラダチキンロール（324kcal/P25.2g）、ローストチキンのパスタサラダ（248kcal/P15.6g）など、低〜中カロリーでタンパク質をまとめて摂れる構成。ダイエット中の主役に据えやすいのが強みです。",
              },
              {
                title: "低カロリーなサラダ・スープ・副菜が豊富",
                body: "トマトとわかめのサラダ（40kcal）、フレッシュ野菜サラダ（40kcal）、オクラのネバネバサラダ（58kcal）など、50kcal前後の野菜系が充実。さらにゆず香る！旨塩スープ（71kcal）や参鶏湯風スープ（110kcal/P13.8g）など、温かい低カロリースープで満足感を上げられます。",
              },
              {
                title: "全商品に栄養成分表示があり管理しやすい",
                body: "ファミマの商品にはカロリー・タンパク質・脂質・炭水化物が表示されています。たべなびのようなアプリと併用すれば、購入前にPFCを確認して選べるため、ダイエット中の栄養管理が格段にしやすくなります。",
              },
              {
                title: "レジ横の炭火焼きとりが高タンパク低カロリー",
                body: "炭火焼きとりもも塩（83kcal/P8.1g）、ももタレ（77kcal/P7.7g）はおやつ感覚でタンパク質を補給できる定番。ファミから（塩）1個（94kcal/P7.6g）やファミからむね（あごだし塩味）（104kcal/P10.4g）など、ホットスナックにも比較的軽めの選択肢があります。",
              },
            ]}
          />

          <TipBox title="ファミペイアプリでお得にダイエット食を購入">
            <p>
              ファミペイアプリでは<Marker color="green">対象商品のクーポンやポイント還元</Marker>が配信されることがあります。サラダチキンや惣菜が対象になることもあり、継続利用で節約につながります。ポイント還元も積み重なるので、よく使う人ほどメリットが大きくなります。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリー商品TOP10 */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            ファミマ低カロリー商品TOP10
          </SectionHeading>
          <p className="mb-6">
            ファミリーマートで買える<Marker>200kcal以下の低カロリー商品</Marker>を厳選ランキング。毎日の食事に取り入れやすい商品ばかりです。カロリーの低さだけでなく、タンパク質量や満足感も考慮して順位を決定しました。
          </p>

          <NutritionTable
            items={[
              { name: "1位: トマトとわかめのサラダ", calories: 40, protein: 2.8, fat: 1.5, carbs: 5.1 },
              { name: "2位: オクラのネバネバサラダ", calories: 58, protein: 2.9, fat: 1.1, carbs: 11.7 },
              { name: "3位: サラダチキンのサラダ", calories: 60, protein: 9.4, fat: 1.3, carbs: 3.6, highlight: true },
              { name: "4位: ゆず香る！旨塩スープ", calories: 71, protein: 6.2, fat: 3.0, carbs: 6.0 },
              { name: "5位: 1/3日分の野菜サラダ", calories: 72, protein: 6.7, fat: 2.5, carbs: 7.2 },
              { name: "6位: 蒸し鶏と塩昆布のやみつきキャベツ", calories: 76, protein: 5.7, fat: 3.7, carbs: 5.9 },
              { name: "7位: 炭火焼きとりもも塩", calories: 83, protein: 8.1, fat: 5.0, carbs: 1.6, highlight: true },
              { name: "8位: ファミからむね（あごだし塩味）", calories: 104, protein: 10.4, fat: 4.9, carbs: 4.8 },
              { name: "9位: 鶏の旨み広がる参鶏湯風スープ", calories: 110, protein: 13.8, fat: 2.8, carbs: 8.2, highlight: true },
              { name: "10位: たんぱく質が摂れる！鶏むね肉とたまごのサラダ", calories: 169, protein: 23.0, fat: 7.2, carbs: 3.4, highlight: true },
            ]}
          />

          <TipBox title="低カロリーサラダ＋スープの組み合わせテク">
            <p>
              トマトとわかめのサラダ（<Marker>わずか40kcal</Marker>）のような野菜系だけでは満足感もタンパク質も不足しがち。参鶏湯風スープ（110kcal/P13.8g）やサラダチキンのサラダ（60kcal/P9.4g）を合わせると、低カロリーのままタンパク質と満腹感を両立できます。温かいスープを加えるだけで食事の満足度が大きく上がります。
            </p>
          </TipBox>

          <WarningBox title="低カロリー商品でも注意が必要なケース">
            <p>
              低カロリー商品ばかりを選ぶと、1日の総摂取カロリーが基礎代謝を下回る危険があります。<Marker>女性なら最低1,200kcal、男性なら最低1,500kcal</Marker>は確保しましょう。低カロリー商品はあくまで組み合わせの一部として活用するのが正しい使い方です。
            </p>
          </WarningBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop"
          alt="高タンパクなサラダチキンと鶏むね肉のイメージ"
        />

        {/* Section 3: 高タンパク商品TOP5 */}
        <section className="mb-16">
          <SectionHeading id="high-protein">
            ファミマ高タンパク商品TOP5
          </SectionHeading>
          <p className="mb-6">
            ダイエット中に筋肉を維持するためには、<Marker>体重1kgあたり1.2〜1.6gのタンパク質</Marker>が必要です（国際スポーツ栄養学会推奨）。体重60kgなら1日72〜96g。ファミマの高タンパク商品を上手に組み合わせれば、この目標は十分に達成できます。
          </p>

          <RankingCard
            rank={1}
            title="たんぱく質が摂れる！鶏むね肉とたまごのサラダ"
            subtitle="高タンパク・低カロリーの王道"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">169</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">23.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">7.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">3.4g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker>169kcalでタンパク質23g</Marker>という、ファミマでも屈指のタンパク質効率を誇る一品。鶏むね肉とたまごでタンパク質源が2種入り、糖質はわずか3.4gと低糖質。これ1品でダイエット中の1食のタンパク質をほぼ確保できます。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="たんぱく質が摂れる！サラダチキンロール"
            subtitle="ボリューム重視ならこれ"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">324</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">25.2g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">13.3g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">28.1g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker color="blue">タンパク質25.2gで主食も一緒に摂れる</Marker>ロールタイプ。炭水化物も含むので、運動後や昼食にしっかり食べたい時に便利。1品でタンパク質・炭水化物の両方をカバーでき、忙しい日のランチに重宝します。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ファミマプレミアムチキン（骨付き）"
            subtitle="おかず系で食べ応え十分"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">242</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">20.7g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">12.4g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">11.9g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              レジ横で買える<Marker color="green">タンパク質20.7gのおかずチキン</Marker>。骨付きで食べ応えがあり、満足感が高いのがポイント。脂質はやや高めなので、サラダやスープと組み合わせて全体のバランスを取るのがおすすめです。
            </p>
          </RankingCard>

          <TipBox title="4〜5位もチェック">
            <p className="mb-1">4位: たんぱく質が摂れる！ローストチキンのパスタサラダ（P15.6g / 248kcal）</p>
            <p className="mb-1">5位: サラダチキンとたまごのサンド（P19.1g / 268kcal）</p>
            <p className="mt-2 text-xs text-gray-500">
              ローストチキンのパスタサラダは主食もまとめて摂れるタイプ。サンドは片手で食べられて忙しい朝にも便利です。
            </p>
          </TipBox>

          <ProteinBar
            title="高タンパク商品TOP5 タンパク質量の比較（g）"
            items={[
              { name: "鶏むね肉とたまごのサラダ", value: 23.0, note: "169kcal" },
              { name: "サラダチキンロール", value: 25.2, note: "324kcal" },
              { name: "プレミアムチキン（骨付き）", value: 20.7, note: "242kcal" },
              { name: "ローストチキンのパスタサラダ", value: 15.6, note: "248kcal" },
              { name: "サラダチキンとたまごのサンド", value: 19.1, note: "268kcal" },
            ]}
            caption="出典: たべなび収録のファミリーマート栄養成分データ（2026年6月時点）"
          />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ファミマ商品の栄養をサクッと検索"
          subtitle="たべなびならコンビニ商品のカロリー・PFCをすぐに確認できます"
        />

        {/* Section 4: 朝昼晩の組み合わせプラン */}
        <section className="mb-16">
          <SectionHeading id="meal-plans">
            朝昼晩のおすすめ組み合わせプラン
          </SectionHeading>
          <p className="mb-6">
            ファミマだけで<Marker>1日1,300kcal以下・タンパク質90g以上</Marker>を達成する組み合わせプランを紹介します。「たんぱく質が摂れる」シリーズと低カロリーサラダ・スープを組み合わせた、栄養バランス重視のプランです。
          </p>

          <SubSectionHeading>朝食プラン（約317kcal / P18.2g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              サラダチキンのサラダ + 塩おむすび + ゆず香る！旨塩スープ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 18.2g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                317 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝はタンパク質と適量の糖質でエネルギーをチャージ。サラダチキンのサラダで手軽にタンパク質を摂りつつ、塩おむすびで午前のエネルギーを確保。温かいスープを加えると満足感が上がり、食べ過ぎ防止にもつながります。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約473kcal / P42.4g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる！鶏むね肉とたまごのサラダ + サーモン寿司 + 参鶏湯風スープ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 42.4g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                473 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼は炭水化物もしっかり摂って午後のパフォーマンスを維持。鶏むね肉とたまごのサラダと参鶏湯風スープでタンパク質を厚めに確保し、サーモン寿司で糖質と満足感を補います。1食でタンパク質42gを摂れる充実プランです。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約364kcal / P28.0g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              たんぱく質が摂れる！サラダチキンロール + トマトとわかめのサラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 28.0g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                364 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食は<Marker color="green">サラダチキンロールでタンパク質と主食をまとめて確保</Marker>。低カロリーなトマトとわかめのサラダを添えて野菜とミネラルを補給します。これだけ食べてわずか364kcalに収まります。
            </p>
          </div>

          <SubSectionHeading>間食プラン（約87kcal / P8.1g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              炭火焼きとりもも塩 + ブラックコーヒー
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 8.1g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                87 kcal
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              午後の小腹対策に。炭火焼きとりもも塩は83kcalでタンパク質8.1gを補給でき、間食でもタンパク質を積み増せます。ブラックコーヒーはほぼ0kcalで満足感の底上げに役立ちます。
            </p>
          </div>

          <TipBox title="1日トータルの栄養バランス">
            <p>
              朝317kcal + 昼473kcal + 夕364kcal + 間食87kcal = <Marker>合計1,241kcal / タンパク質96.7g</Marker>。PFCバランスはP30.4% / F26.2% / C43.4%。1,500kcal目標の方は、おむすびをもう1個追加してもOKです。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="バランスの取れた健康的な食事"
        />

        {/* Section 5: 避けるべき商品 */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            ダイエット中に避けるべきファミマ商品
          </SectionHeading>
          <p className="mb-6">
            ファミマにはダイエットに優れた商品が多い反面、<Marker>高カロリー・高脂質でダイエットを台無しにする商品</Marker>も存在します。特にレジ横のホットスナックと、大盛りの弁当・麺類には注意が必要です。
          </p>

          <WarningBox title="ダイエット中は避けたい要注意商品">
            <p className="mb-2">
              <strong>ファミチキ（骨なし）:</strong> 252kcal、脂質15.7g。ファミマの看板商品ですが、衣に油がたっぷり。脂質が高めなので、どうしても食べたい場合は頻度を抑えましょう。
            </p>
            <p className="mb-2">
              <strong>内容量700gオーバー！カレー&ミートパスタ:</strong> 1,088kcal、脂質34.1g、炭水化物163.8g。炭水化物と脂質の塊で、1食で1日のカロリー目標の大半を消費してしまいます。
            </p>
            <p className="mb-2">
              <strong>ラーメン荘 歴史を刻め監修 豚ラーメン:</strong> 933kcal、脂質51.1g。脂質が非常に多く、ダイエット中は要注意の一杯です。
            </p>
            <p>
              <strong>ジャンボフランク:</strong> 256kcal、脂質20.5g。脂質の割合が非常に高く、満足感の割にカロリーが高い典型的なNG食品です。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "ファミチキ（骨なし）", calories: 252, protein: 12.7, fat: 15.7, carbs: 14.8, highlight: true },
              { name: "ジャンボフランク", calories: 256, protein: 11.5, fat: 20.5, carbs: 6.4 },
              { name: "甘辛鶏から揚げ海苔弁当", calories: 914, protein: 25.9, fat: 32.7, carbs: 130.9 },
              { name: "ラーメン荘 歴史を刻め監修 豚ラーメン", calories: 933, protein: 30.2, fat: 51.1, carbs: 91.1, highlight: true },
              { name: "内容量700gオーバー！カレー&ミートパスタ", calories: 1088, protein: 36.3, fat: 34.1, carbs: 163.8, highlight: true },
            ]}
          />

          <TipBox title="レジ横の誘惑対策">
            <p>
              ファミチキやジャンボフランクなどのホットスナックは、<Marker>レジに並んでいるときに衝動的に追加購入</Marker>しがちです。対策として、買うものを事前にリストアップしてから入店する習慣をつけましょう。たべなびで事前にカロリーを確認しておくと、衝動買いを抑えやすくなります。
            </p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="ファミマでのダイエット生活を始めよう"
          subtitle="たべなびで賢いコンビニメニュー選びをサポートします"
        />

        <AffiliateProductGrid
          title="ファミマ常連卒業のまとめ買い4点"
          productIds={["salada-chicken-pack", "tuna-can", "inbar-protein", "ultora-whey"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ファミマダイエットの要点を振り返りましょう。「たんぱく質が摂れる」シリーズと低カロリーサラダ・スープを活用すれば、<Marker>コンビニだけで本格的なダイエット</Marker>が可能です。
          </p>

          <ArticleSummary
            points={[
              "たんぱく質が摂れる！鶏むね肉とたまごのサラダ（169kcal/P23g）は高タンパク低カロリーの本命",
              "トマトとわかめのサラダ（40kcal）など50kcal前後の野菜系サラダが豊富",
              "参鶏湯風スープ（110kcal/P13.8g）など低カロリーで高タンパクなスープが優秀",
              "炭火焼きとりもも塩（83kcal/P8.1g）はおやつ感覚でタンパク質補給に使える",
              "サラダチキンとたまごのサンド（268kcal/P19.1g）など完結型の弁当・サンドが充実",
              "ファミチキ（252kcal）・大盛り弁当・脂多めの麺類はダイエット中は要注意",
              "購入前にたべなびでカロリー・PFCを確認すると衝動買いを防ぎやすい",
            ]}
          />

          <div className="mt-8 p-5 bg-sky-50 rounded-lg border border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ファミマダイエットをさらに効果的にするなら、他のコンビニやチェーン店との使い分けもおすすめです。以下の関連記事もぜひチェックしてください。
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guide/seven-eleven-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  セブンイレブンダイエット完全ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/conveni-protein" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  コンビニ高タンパク商品ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/eating-out-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  外食ダイエット完全ガイド
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            ※栄養成分は店舗や時期により異なる場合があります。商品は予告なく変更・終了する場合があり、地域限定商品は一部店舗で取り扱いがない場合があります。最新情報は<a href="https://www.family.co.jp/goods/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">ファミマ公式商品情報</a>でご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="familymart-diet"
          items={[
            {
              q: "ファミマでダイエット中におすすめの定番商品は？",
              a: "①たんぱく質が摂れる！鶏むね肉とたまごのサラダ（169kcal/P23g）、②サラダチキンのサラダ（60kcal/P9.4g）、③サラダチキンとたまごのサンド（268kcal/P19.1g）、④参鶏湯風スープ（110kcal/P13.8g）、⑤炭火焼きとりもも塩（83kcal/P8.1g）。これらを組み合わせれば1食300〜400kcalで高タンパクな食事になります。",
            },
            {
              q: "「たんぱく質が摂れる」シリーズは本当にダイエット向き？",
              a: "「たんぱく質が摂れる」シリーズは、カロリーを抑えつつタンパク質をしっかり確保できる設計が魅力です。例えば鶏むね肉とたまごのサラダは169kcalでP23gと栄養密度が高め。ただし「これを食べれば痩せる」わけではなく、1日の総カロリー管理＋運動の補助として活用すると効果が期待できます。",
            },
            {
              q: "ファミチキはダイエット中NG？",
              a: "ファミチキ（骨なし）1個は252kcal/P12.7g/F15.7g。タンパク質は摂れますが脂質が高めなので、ダイエット中は頻度を抑えるのが目安。「サラダ＋スープと組み合わせる」など工夫すれば、たまの楽しみとして取り入れられます。",
            },
            {
              q: "ファミマの朝食でダイエット向きは？",
              a: "「サラダチキンのサラダ（60kcal/P9.4g）+塩おむすび（186kcal）+ゆず香る！旨塩スープ（71kcal/P6.2g）」で約317kcal/P18.2g。朝の高タンパクは1日の代謝の立ち上げに役立ちます。",
            },
            {
              q: "ファミマのお弁当・主食系でダイエット向きは？",
              a: "鶏のうまみ！鶏そぼろ弁当（359kcal/P11.3g）や、たんぱく質が摂れる！サラダチキンロール（324kcal/P25.2g）が比較的低カロリーで高タンパク。逆に内容量700gオーバー！カレー&ミートパスタ（1,088kcal）、甘辛鶏から揚げ海苔弁当（914kcal）は注意が必要です。",
            },
            {
              q: "ファミマで低カロリーなサラダ・スープは？",
              a: "サラダなら、トマトとわかめのサラダ（40kcal）、フレッシュ野菜サラダ（40kcal）、オクラのネバネバサラダ（58kcal）。スープなら、ゆず香る！旨塩スープ（71kcal/P6.2g）、参鶏湯風スープ（110kcal/P13.8g）。低カロリーで満足感を上げたいときに役立ちます。",
            },
            {
              q: "セブン・ローソンとの違いは？",
              a: "セブン: 商品ラインナップが豊富 / ローソン: ロカボ商品が充実 / ファミマ: 「たんぱく質が摂れる」シリーズや炭火焼きとりが特徴。単品で高タンパクを確保しやすいのがファミマの強みです。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全メニュー・栄養数値をたべなび収録の実データ（220商品）と照合。実在しない商品をすべて実在品へ差し替え、ランキング・組み合わせプラン・FAQ・まとめの数値を最新の実値に再構成" },
            { date: "2026-05-13", note: "ファミマ220商品の最新栄養データに更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-25", note: "初稿公開" },
          ]}
        />

        {/* Article Footer */}
        <ArticleFooter currentSlug="familymart-diet" />

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
