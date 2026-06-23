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
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "外食6,097品を全部調べてわかった「外食ダイエットの真実」｜32チェーン栄養データ統計【2026年最新】 | たべなび",
  description:
    "32チェーン・6,097品の公式栄養データを全数検証。外食の平均カロリー、500kcal以下の割合、高タンパクメニューの希少性、コスパ最強メニューまで、実データで外食ダイエットの真実を解説します。",
  keywords: [
    "外食 カロリー 統計",
    "外食 ダイエット データ",
    "外食 平均カロリー",
    "外食 高タンパク メニュー",
    "外食 痩せる",
  ],
  openGraph: {
    title: "外食6,097品を全部調べてわかった「外食ダイエットの真実」｜32チェーン栄養データ統計",
    description:
      "32チェーン・6,097品の公式栄養データを全数検証。実データで外食ダイエットの真実を解説。",
    url: "https://www.tabenavi.jp/guide/eating-out-nutrition-report",
    type: "article",
  },
  alternates: { canonical: "https://www.tabenavi.jp/guide/eating-out-nutrition-report" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食6,097品を全部調べてわかった「外食ダイエットの真実」｜32チェーン栄養データ統計",
  description:
    "32チェーン・6,097品の公式栄養データを全数検証。外食の平均カロリー、500kcal以下の割合、高タンパクメニューの希少性、コスパ最強メニューを実データで解説。",
  datePublished: "2026-06-05",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Person",
    name: "ヒロ（たべなび開発者）",
    description: "外食で86→73kg(13kg減)を達成し、外食専門の栄養管理アプリ『たべなび』を個人開発・運営。",
  },
  publisher: { "@type": "Organization", name: "たべなび", url: "https://www.tabenavi.jp" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/eating-out-nutrition-report",
};

const tocItems = [
  { id: "overview", label: "調査概要：32チェーン6,097品を全数検証" },
  { id: "average", label: "外食の平均カロリーは442kcal" },
  { id: "rarity", label: "ダイエット向きは9品に1品の希少さ" },
  { id: "top-protein", label: "高タンパク低カロリーTOP10" },
  { id: "cost", label: "タンパク質コスパ最強メニュー" },
  { id: "gyudon", label: "牛丼3社、データで比較" },
  { id: "trap", label: "高カロリーの罠：定食・丼系" },
  { id: "summary", label: "まとめ：選べば痩せる" },
];

export default function EatingOutNutritionReportPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食6,097品を全部調べてわかった「外食ダイエットの真実」"
        subtitle="32チェーン栄養データ統計【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="外食栄養データ統計"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="eating-out-nutrition-report">
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long" })} | 読了目安: 8分
          </p>
        </div>

        <QuickAnswer
          question="外食で本当に痩せられる？データ上、どれくらいのメニューがダイエット向き？"
          answer={
            <>
              32チェーン・6,097品を全数検証した結果、<strong>500kcal以下が63.3%、高タンパク（タンパク質20g以上）が28.5%</strong>。
              ただし「600kcal以下かつタンパク質15g以上」の<strong>本当にダイエット向きなメニューは10.8%（約9品に1品）</strong>と希少でした。
              つまり外食は<strong>「選べば痩せる、選ばないと太る」</strong>。この記事では実データで"選び方"を示します。
            </>
          }
        />

        <p className="mb-4">
          「外食はカロリーが高くて太る」――そう思っていませんか？私たちは<Marker>32チェーン・6,097品すべての公式栄養データを手作業で集計</Marker>し、外食の実態を統計で検証しました。結果は、多くの人のイメージとは少し違うものでした。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="さまざまな外食メニューが並ぶ様子" />

        {/* §1 */}
        <SectionHeading id="overview">調査概要：32チェーン6,097品を全数検証</SectionHeading>
        <p className="mb-4">
          本記事のデータは、たべなびが収録する<Marker color="blue">外食・コンビニ32チェーン・6,097メニュー</Marker>を母集団としています。すべて各チェーンの公式サイトから取得・検証した数値で、AIによる推定値は含みません（
          <Link href="/sources" className="text-sky-600 underline">データ出典・編集方針</Link>
          ）。
        </p>
        <TipBox title="調査の前提">
          <ul className="space-y-1">
            <li>母集団：たべなび収録の32チェーン・6,097品（2026年6月時点）</li>
            <li>カロリー・PFC（タンパク質/脂質/炭水化物）の収録率：100%</li>
            <li>出典：各チェーン公式サイトの栄養成分・アレルゲン情報</li>
            <li>「高タンパク」=タンパク質20g以上、「低カロリー」=500kcal以下 と定義</li>
          </ul>
        </TipBox>

        {/* §2 */}
        <SectionHeading id="average">外食の平均カロリーは442kcal</SectionHeading>
        <p className="mb-4">
          まず意外な事実から。6,097品の<Marker>平均カロリーは442kcal</Marker>。そして<Marker color="green">63.3%（3,858品）が500kcal以下</Marker>でした。「外食＝高カロリー」というイメージほど、全体は高くありません。
        </p>
        <ComparisonTable
          headers={["カロリー帯", "該当メニュー数", "全体に占める割合"]}
          rows={[
            ["400kcal以下", "3,442品", "56.5%"],
            ["500kcal以下", "3,858品", "63.3%"],
            ["800kcal超（高カロリー）", "1,152品", "18.9%"],
          ]}
          bestRowIndex={1}
        />
        <p className="mb-4 mt-4">
          一方で<Marker>5品に1品（18.9%）は800kcalを超える</Marker>のも事実。外食が太るかどうかは、平均ではなく「どの1品を選ぶか」で決まります。低カロリー帯が6割を占める以上、<strong>選択肢は十分にある</strong>のです。
        </p>

        {/* §3 */}
        <SectionHeading id="rarity">「本当にダイエット向き」は9品に1品の希少さ</SectionHeading>
        <p className="mb-4">
          カロリーが低いだけでは不十分です。ダイエット中は<Marker>「低カロリー × 高タンパク」</Marker>の両立が理想。この条件で絞ると、選択肢は一気に狭まります。
        </p>
        <ComparisonTable
          headers={["条件", "該当数", "割合"]}
          rows={[
            ["高タンパク（タンパク質20g以上）", "1,739品", "28.5%"],
            ["タンパク質30g以上", "961品", "15.8%"],
            ["ダイエット向き（600kcal以下 かつ P15g以上）", "660品", "10.8%"],
            ["500kcal以下 かつ タンパク質20g以上", "168品", "2.8%"],
          ]}
          bestRowIndex={3}
        />
        <WarningBox title="ここがポイント">
          <p>
            高タンパクメニューは約3.5品に1品（28.5%）ある一方、<Marker>「低カロリー かつ 高タンパク」を満たす理想のメニューは全体のわずか2.8%（168品）</Marker>。だからこそ、その希少な"当たり"を知っているかどうかで結果が変わります。次章で具体名を公開します。
          </p>
        </WarningBox>

        {/* §4 */}
        <SectionHeading id="top-protein">高タンパク低カロリーTOP10（コンビニが席巻）</SectionHeading>
        <p className="mb-4">
          タンパク質20g以上を満たすメニューを、カロリーが低い順にランキング。<Marker color="blue">上位はコンビニ勢が席巻</Marker>しました。外食チェーンより、コンビニの方が「低カロリー高タンパク」を狙いやすいことがデータで裏付けられています。
        </p>
        <NutritionTable
          items={[
            { name: "1位 ローソン 若鶏の砂肝にんにく", calories: 160, protein: 21.4, fat: 4.9, carbs: 9.0, highlight: true },
            { name: "2位 セブン 7プレミアム さんまの塩焼", calories: 162, protein: 30.0, fat: 4.6, carbs: 0.4, highlight: true },
            { name: "3位 ファミマ 鶏むね肉とたまごのサラダ", calories: 169, protein: 23.0, fat: 7.2, carbs: 3.4, highlight: true },
            { name: "4位 ケンタッキー 骨なしケンタッキー", calories: 191, protein: 20.3, fat: 8.5, carbs: 8.3 },
            { name: "5位 セブン たんぱく質が摂れる鶏むね肉サラダ", calories: 199, protein: 21.8, fat: 10.9, carbs: 4.4 },
            { name: "6位 ローソン 国産鶏むね肉のサラダ", calories: 206, protein: 23.1, fat: 11.0, carbs: 4.9 },
            { name: "7位 モスバーガー 香る醤油のローストチキン", calories: 208, protein: 20.3, fat: 12.9, carbs: 2.6 },
            { name: "8位 バーガーキング アメリカンスモーキーチキン4P", calories: 220, protein: 23.8, fat: 13.0, carbs: 2.0 },
            { name: "9位 ローソン 鶏肉のガーリックトマト煮", calories: 240, protein: 20.2, fat: 11.8, carbs: 14.2 },
            { name: "10位 ファミマ プレミアムチキン（骨付き）", calories: 242, protein: 20.7, fat: 12.4, carbs: 11.9 },
          ]}
        />
        <p className="text-xs text-gray-400 mb-6 mt-2">
          ※タンパク質20g以上をカロリー低い順に並べたもの。脂質・炭水化物は概数を含みます。最新値は各メニューページでご確認ください。
        </p>
        <TipBox title="コンビニが強い理由">
          <p>コンビニ各社は近年「たんぱく質が摂れる」シリーズに注力しており、200kcal前後でタンパク質20g超えの商品が豊富。<Marker color="green">サラダチキン・鶏むね系サラダ・焼き魚</Marker>が鉄板の"当たり"です。</p>
        </TipBox>
        <p className="text-sm text-gray-600 mb-6">
          各チェーンの高タンパクメニューは、目的別ランキングで一覧できます：
          <Link href="/chains/lawson/high-protein" className="text-sky-600 underline">ローソン</Link>・
          <Link href="/chains/seven-eleven/high-protein" className="text-sky-600 underline">セブンイレブン</Link>・
          <Link href="/chains/familymart/high-protein" className="text-sky-600 underline">ファミリーマート</Link>・
          <Link href="/chains/kfc/high-protein" className="text-sky-600 underline">ケンタッキー</Link>
          の高タンパクランキングをチェック。
        </p>

        {/* §5 */}
        <SectionHeading id="cost">タンパク質コスパ最強メニュー</SectionHeading>
        <p className="mb-4">
          「安く・効率よくタンパク質を摂りたい」筋トレ・ダイエット民へ。価格データのあるメニューで<Marker>100円あたりのタンパク質量</Marker>を計算しました。
        </p>
        <ComparisonTable
          headers={["メニュー", "タンパク質 / 価格", "100円あたりP"]}
          rows={[
            ["マクドナルド エグチ", "22.4g / ¥200", "11.2g"],
            ["マクドナルド ソーセージエッグマフィン", "21.9g / ¥260", "8.4g"],
            ["ケンタッキー 骨なしケンタッキー", "20.3g / ¥270", "7.5g"],
            ["すき家 牛丼（大盛）", "28.4g / ¥380", "7.5g"],
            ["ケンタッキー チキンフィレバーガー", "24.3g / ¥340", "7.1g"],
          ]}
          bestRowIndex={0}
        />
        <p className="mb-4 mt-4">
          コスパ王者は<Marker color="blue">マクドナルドのエグチ（エッグチーズバーガー）。¥200でタンパク質22.4g＝100円あたり11.2g</Marker>と圧倒的。プロテイン飲料に匹敵する効率です。
          チェーン別のコスパは
          <Link href="/chains/mcdonalds/protein-cost" className="text-sky-600 underline">マクドナルド</Link>・
          <Link href="/chains/sukiya/protein-cost" className="text-sky-600 underline">すき家</Link>
          のタンパク質コスパランキングで確認できます。
        </p>

        {/* §6 */}
        <SectionHeading id="gyudon">牛丼3社、データで比較</SectionHeading>
        <p className="mb-4">
          定番の牛丼（並盛）を3社で比較。<Marker>カロリー最小は吉野家、最もタンパク質が多いのはすき家</Marker>でした。
        </p>
        <NutritionTable
          items={[
            { name: "吉野家 牛丼（並）", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2, highlight: true },
            { name: "松屋 牛めし（並盛）", calories: 687, protein: 17.1, fat: 28.9, carbs: 85.5 },
            { name: "すき家 牛丼（並盛）", calories: 695, protein: 21.7, fat: 23.4, carbs: 99.8 },
          ]}
        />
        <p className="mb-4 mt-2">
          差は最大62kcal。毎日1杯置き換えるだけでも1ヶ月で約1,860kcal（脂肪換算で約0.25kg）の差が積み重なります。より詳しくは
          <Link href="/guide/gyudon-comparison" className="text-sky-600 underline">牛丼チェーン3社カロリー比較</Link>
          で解説しています。
        </p>

        {/* §7 */}
        <SectionHeading id="trap">高カロリーの罠：定食・丼・カレー系</SectionHeading>
        <p className="mb-4">
          逆に「うっかり高カロリー」になりやすいのはどのジャンルか。カテゴリ別の平均カロリーを集計すると、<Marker>定食・丼・カレー系が平均880〜1,116kcal</Marker>と突出していました。
        </p>
        <ComparisonTable
          headers={["カテゴリ", "平均カロリー"]}
          rows={[
            ["定食・丼・カレー系（複合）", "約1,116kcal"],
            ["ランチメニュー", "約991kcal"],
            ["丼・定食", "約879kcal"],
            ["カレーメニュー", "約879kcal"],
            ["ハンバーグディッシュ", "約877kcal"],
          ]}
        />
        <p className="mb-4 mt-4">
          これらは「ご飯・揚げ物・ソース」が重なりやすいジャンル。食べるなら<Marker>ご飯少なめ・サイドをサラダや汁物に</Marker>するだけで数百kcalの調整が効きます。
        </p>

        <CTABanner
          title="あなたの外食メニューのカロリーを今すぐ検索"
          subtitle="32チェーン・6,097品を登録不要・無料で検索できます"
        />

        {/* §8 */}
        <SectionHeading id="summary">まとめ：外食は「選べば痩せる」</SectionHeading>
        <ArticleSummary
          points={[
            "外食6,097品の平均カロリーは442kcal。63.3%が500kcal以下で、イメージほど全体は高くない",
            "ただし5品に1品（18.9%）は800kcal超。太るかは「どの1品を選ぶか」で決まる",
            "高タンパクは28.5%あるが、低カロリー×高タンパクの理想は2.8%（168品）と希少",
            "高タンパク低カロリーの上位はコンビニ勢が席巻（サラダチキン・焼き魚系）",
            "タンパク質コスパ王はマクドナルドのエグチ（¥200でタンパク質22.4g＝100円あたり11.2g）",
            "高カロリーの罠は定食・丼・カレー系（平均880〜1,116kcal）。ご飯少なめで調整可能",
          ]}
        />

        <FAQSection
          slug="eating-out-nutrition-report"
          items={[
            {
              q: "外食の平均カロリーはどれくらいですか？",
              a: "たべなびが収録する32チェーン6,097品の平均は442kcalです。500kcal以下が全体の63.3%を占め、外食全体が極端に高カロリーというわけではありません。ただし800kcalを超えるメニューも18.9%あり、選び方で大きく差が出ます。",
            },
            {
              q: "外食でダイエット向きのメニューはどれくらいありますか？",
              a: "「600kcal以下かつタンパク質15g以上」を満たすメニューは全体の10.8%（約9品に1品）でした。さらに厳しい「500kcal以下かつタンパク質20g以上」は2.8%（168品）と希少です。条件を知って選ぶことが重要です。",
            },
            {
              q: "外食で高タンパク低カロリーなメニューは何がおすすめ？",
              a: "データ上の上位はコンビニ勢です。ローソン『若鶏の砂肝にんにく』（160kcal/P21.4g）、セブン『さんまの塩焼』（162kcal/P30g）、ファミマ『鶏むね肉とたまごのサラダ』（169kcal/P23g）など、200kcal前後でタンパク質20g超えの商品が狙い目です。",
            },
            {
              q: "外食で一番タンパク質コスパが良いメニューは？",
              a: "マクドナルドのエグチ（エッグチーズバーガー）です。¥200でタンパク質22.4g、100円あたり11.2gと、外食では破格のコスパです。",
            },
            {
              q: "外食で高カロリーになりやすいメニューは？",
              a: "定食・丼・カレー系が平均880〜1,116kcalと突出しています。ご飯・揚げ物・ソースが重なりやすいためで、ご飯少なめ・サイドをサラダや汁物に変えることで数百kcalの調整が可能です。",
            },
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※本記事の統計は2026年6月時点でたべなびに収録された32チェーン・6,097品を母集団としています。栄養成分は各チェーン公式情報に基づき、店舗・時期により変動する場合があります。データの引用は出典明記のうえ歓迎します（
          <Link href="/sources" className="text-sky-600 underline">引用について</Link>
          ）。
        </p>

        <AuthorBio />

        <UpdateHistory
          entries={[
            { date: "2026-06-05", note: "初版公開。32チェーン6,097品の全数集計に基づく統計記事" },
          ]}
        />

        <ArticleFooter currentSlug="eating-out-nutrition-report" />

        <div className="text-center py-8">
          <Link href="/guide" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </ArticleLayout>
    </div>
  );
}
