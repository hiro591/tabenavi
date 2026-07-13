import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleHero,
  ArticleMeta,
  TableOfContents,
  SectionHeading,
  QuickAnswer,
  CompareBar,
  PFCBar,
  MenuPhoto,
  FAQSection,
  RankingCard,
  ComparisonTable,
  WarningBox,
  TipBox,
  NumberedList,
  Marker,
  CTABanner,
  SourceNote,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import { ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "高タンパクな外食メニューランキング｜32チェーンをコスパ・効率で比較【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/high-protein-chain-database" },
  description:
    "外食でタンパク質が多いメニューを、32チェーン6,000品のDBから検証。1gあたりの価格(コスパ)・100kcalあたりのタンパク質(効率)・チェーン別の品数の3軸でランキング化しました。",
  keywords: ["高タンパク 外食", "タンパク質 外食", "高タンパク 外食 チェーン", "高タンパク 外食 安い", "外食 タンパク質 ランキング"],
  openGraph: {
    title: "高タンパクな外食メニューランキング｜コスパ・効率で比較【2026年最新】",
    description:
      "外食でタンパク質が多いメニューを32チェーン6,000品のDBから検証。コスパ・効率・チェーン別品数の3軸でランキング。",
    url: "https://www.tabenavi.jp/guide/high-protein-chain-database",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "高タンパクな外食メニューランキング｜32チェーンをコスパ・効率で比較",
  description:
    "外食でタンパク質が多いメニューを32チェーン6,000品のDBから検証。コスパ・効率・チェーン別品数の3軸でランキング。",
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/high-protein-chain-database",
};

const tocItems = [
  { id: "by-chain", label: "チェーン別の高タンパク力ランキング" },
  { id: "cost", label: "コスパ(タンパク質1gあたりの価格)" },
  { id: "efficiency", label: "カロリー効率(100kcalあたりP)" },
  { id: "top3", label: "高タンパク外食ベスト3" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "avoid", label: "「高タンパク風」に注意" },
  { id: "tips", label: "効率よく摂るコツ" },
  { id: "summary", label: "まとめ" },
];

// チェーン別 1人前P≥30の品数(DB検証・複数人前除外後)
const CHAIN_COUNTS = [
  { name: "やよい軒", value: 99 },
  { name: "すき家", value: 85 },
  { name: "びっくりドンキー", value: 78 },
  { name: "松のや", value: 49 },
  { name: "大戸屋", value: 46 },
  { name: "松屋", value: 45 },
  { name: "ジョイフル", value: 45 },
  { name: "吉野家", value: 43 },
  { name: "デニーズ", value: 38 },
  { name: "ココス", value: 29 },
];

// コスパ: タンパク質1gあたりの価格(円/g・安い順・価格判明分・DB検証)
const COST = [
  { name: "マクドナルド エグチ", value: 8.9, note: "P22.4g/¥200" },
  { name: "マクドナルド ソーセージエッグマフィン", value: 11.9, note: "P21.9g" },
  { name: "ケンタッキー 骨なしケンタッキー", value: 13.3, note: "P20.3g" },
  { name: "ケンタッキー チキンフィレバーガー", value: 14.0, note: "P24.3g" },
  { name: "マクドナルド 倍ビッグマック", value: 14.5, note: "P41.3g" },
  { name: "サイゼリヤ ミラノ風ドリア", value: 16.7, note: "P18.0g" },
  { name: "すき家 ねぎ玉牛丼(並)", value: 17.0, note: "P29.4g" },
];

// 効率: 100kcalあたりのタンパク質(多い順・DB検証)
const EFFICIENCY = [
  { name: "セブン さんまの塩焼", value: 18.5, note: "P30g/162kcal" },
  { name: "ファミマ 鶏むね肉とたまごのサラダ", value: 13.6, note: "P23g/169kcal" },
  { name: "ローソン 若鶏の砂肝にんにく", value: 13.4, note: "P21.4g/160kcal" },
  { name: "ローソン 鶏むね肉のサラダ", value: 11.2, note: "P23.1g/206kcal" },
  { name: "セブン 鶏むね肉サラダ", value: 11.0, note: "P21.8g/199kcal" },
  { name: "ケンタッキー 骨なしケンタッキー", value: 10.6, note: "P20.3g/191kcal" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ArticleHero
        title="高タンパクな外食メニューランキング"
        subtitle="32チェーン6,000品をコスパ・効率で比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop"
        breadcrumb="高タンパク外食ランキング"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="high-protein-chain-database">
        <ArticleMeta published="2026年6月19日" updated="2026年6月19日" />

        <QuickAnswer
          question="外食でタンパク質が多い・効率的なメニューは？"
          answer={
            <>
              たべなびDBの6,000品中、1人前で<strong>タンパク質30g以上は618品</strong>あります。
              コスパ最強はマクドナルドの<strong>「エグチ」(タンパク質1gあたり約8.9円)</strong>、
              カロリー効率No.1はセブンイレブンの<strong>「さんまの塩焼」(162kcalでP30g)</strong>。
              チェーン別では<strong>やよい軒・すき家・びっくりドンキー</strong>に高タンパクメニューが特に多くあります。
            </>
          }
        />

        <p className="mb-4">
          「外食でタンパク質をしっかり摂りたい」——筋トレ中の方もダイエット中の方も悩むテーマです。
          このページでは、たべなびが収録する<Marker>32チェーン・約6,000品の栄養データ</Marker>から、
          外食の高タンパクメニューを<Marker color="blue">「チェーン別の品数」「コスパ(円/g)」「カロリー効率(P/100kcal)」の3軸</Marker>でランキング化しました。
        </p>
        <p className="mb-8">
          単なるカロリー表ではなく、<Marker>「どの店に行けば高タンパクが揃うか」「同じタンパク質量を最も安く・最も低カロリーで摂れるのはどれか」</Marker>が一目でわかります。
        </p>

        <TableOfContents items={tocItems} />

        {/* 1. チェーン別 */}
        <section id="by-chain" className="mb-16 scroll-mt-24">
          <SectionHeading id="by-chain">チェーン別の高タンパク力ランキング</SectionHeading>
          <p className="mb-4">
            まずは<Marker>「どの外食チェーンに行けば高タンパクメニューが多いか」</Marker>。
            1人前でタンパク質30g以上のメニュー数をチェーン別に数えました(複数人前・大盛りは除外)。
          </p>
          <CompareBar
            title="タンパク質30g以上のメニュー数（チェーン別・多い順）"
            metric="protein"
            unit="品"
            sort="desc"
            highlightTop={3}
            items={CHAIN_COUNTS}
          />
          <SourceNote asOf="2026年6月" />
          <p className="mb-4">
            定食チェーンの<Marker color="blue">やよい軒(99品)・大戸屋・松屋</Marker>、丼の<Marker color="blue">すき家(85品)・吉野家</Marker>、
            ハンバーグの<Marker color="blue">びっくりドンキー(78品)</Marker>が上位。
            「高タンパクな外食」を習慣にするなら、まずこれらのチェーンを選択肢に入れるのが近道です。
          </p>
          <TipBox title="コンビニも侮れない">
            <p>
              チェーン数では定食店が上位ですが、コンビニ(セブン・ローソン・ファミマ)は「たんぱく質が摂れる」シリーズが充実し、
              <Marker>低カロリーで効率的にタンパク質を摂れる</Marker>のが強み。後述のカロリー効率ランキングでは上位を独占します。
            </p>
          </TipBox>
        </section>

        {/* 2. コスパ */}
        <section id="cost" className="mb-16 scroll-mt-24">
          <SectionHeading id="cost">コスパ最強｜タンパク質1gあたりの価格</SectionHeading>
          <p className="mb-4">
            タンパク質を<Marker>「1gあたり何円で摂れるか」</Marker>で並べました(価格が判明しているメニューのみ)。
            数値が小さいほど高コスパです。
          </p>
          <CompareBar
            title="タンパク質1gあたりの価格（安い順）"
            metric="calorie"
            unit="円/g"
            sort="asc"
            highlightTop={1}
            items={COST}
            caption="価格はたべなびDB（2026年6月時点）。1gあたり=税込価格÷タンパク質量。"
          />
          <p className="mb-4">
            圧倒的No.1は<Marker>マクドナルドの「エグチ(エッグチーズバーガー)」で約¥8.9/g</Marker>。
            朝マックのソーセージエッグマフィンやケンタッキーのチキン系も優秀です。
            「とにかく安くタンパク質を確保したい」ならファストフードの卵・チキン系が鉄板です。
          </p>
          <p className="mb-2 text-sm text-gray-600">
            さらに細かいコスパ比較は
            <Link href="/guide/protein-cost-ranking" className="text-sky-600 hover:underline font-medium">タンパク質コスパランキング</Link>
            、コンビニ単品なら
            <Link href="/guide/conveni-protein" className="text-sky-600 hover:underline font-medium">コンビニ高タンパク商品</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 3. 効率 */}
        <section id="efficiency" className="mb-16 scroll-mt-24">
          <SectionHeading id="efficiency">カロリー効率｜100kcalあたりのタンパク質</SectionHeading>
          <p className="mb-4">
            ダイエット中に重要なのは<Marker color="blue">「少ないカロリーで多くのタンパク質を摂れるか」</Marker>。
            100kcalあたりのタンパク質量(数値が大きいほど効率的)で並べました。
          </p>
          <CompareBar
            title="100kcalあたりのタンパク質（多い順）"
            metric="protein"
            unit="g/100kcal"
            sort="desc"
            highlightTop={1}
            items={EFFICIENCY}
            caption="100kcalあたりP=タンパク質量÷カロリー×100。たべなびDB（2026年6月時点）。"
          />
          <p className="mb-4">
            効率No.1は<Marker>セブンイレブンの「さんまの塩焼」(162kcalでタンパク質30g)</Marker>。
            上位はコンビニの<Marker color="blue">焼き魚・鶏むね肉・砂肝</Marker>が独占しました。
            減量中は「高タンパク・低脂質・低カロリー」のこうした単品を、サラダや汁物と組み合わせるのがおすすめです。
          </p>
        </section>

        {/* 4. TOP3深掘り */}
        <section id="top3" className="mb-16 scroll-mt-24">
          <SectionHeading id="top3">高タンパク外食ベスト3（目的別の代表選手）</SectionHeading>
          <p className="mb-6">
            3軸それぞれの代表メニューを、PFCバランス付きで深掘りします。
          </p>

          <RankingCard rank={1} title="セブンイレブン さんまの塩焼" subtitle="162kcal / P30.0g / F4.6g / C0.4g｜カロリー効率No.1">
            <MenuPhoto id="seven-sanma-shioyaki" />
            <PFCBar protein={30} fat={4.6} carbs={0.4} compact />
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              <Marker>162kcalでタンパク質30g</Marker>という驚異の効率。脂質も4.6gと低く、糖質はほぼゼロ。
              そのままでもおかずにもなり、ダイエット・減量中の「タンパク質の土台」に最適な一品です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="マクドナルド エグチ（エッグチーズバーガー）" subtitle="390kcal / P22.4g / F19.0g / C31.2g｜コスパNo.1（約¥8.9/g）">
            <MenuPhoto id="mcdonalds-eguchi" />
            <PFCBar protein={22.4} fat={19} carbs={31.2} compact />
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              ¥200前後で<Marker color="blue">タンパク質22.4g</Marker>。1gあたり約8.9円は外食随一のコスパです。
              卵とチーズでタンパク質を底上げした構成で、「安く・手早く・しっかり」を全部満たします。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="やよい軒 しまほっけ定食" subtitle="631kcal / P50.7g / F21.3g / C61.4g｜タンパク質の絶対量">
            <MenuPhoto id="yayoiken-shimahokke" />
            <PFCBar protein={50.7} fat={21.3} carbs={61.4} compact />
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              1食で<Marker>タンパク質50g超</Marker>を、ご飯・味噌汁付きのバランス定食で摂れます。
              トレーニング後にしっかり食べたい日や、増量期の主食に。もち麦ごはんを選べば食物繊維もプラスできます。
            </p>
          </RankingCard>
        </section>

        <CTABanner
          title="あなたの近くの店で高タンパクメニューを検索"
          subtitle="たべなびなら32チェーン・6,000品以上をタンパク質・カロリー・価格で絞り込めます"
        />

        {/* 5. 目的別 */}
        <section id="by-goal" className="mb-16 scroll-mt-24">
          <SectionHeading id="by-goal">目的別・高タンパク外食の選び方</SectionHeading>
          <p className="mb-4">
            「何を優先するか」で最適なメニューは変わります。目的別の代表選手をまとめました。
          </p>
          <ComparisonTable
            headers={["目的", "おすすめメニュー", "タンパク質", "カロリー"]}
            rows={[
              ["コスパ重視", "マクドナルド エグチ", "22.4g", "390kcal"],
              ["効率(低カロ高P)", "セブン さんまの塩焼", "30.0g", "162kcal"],
              ["量をしっかり", "やよい軒 しまほっけ定食", "50.7g", "631kcal"],
              ["手軽さ(サラダ)", "ファミマ 鶏むね肉とたまごのサラダ", "23.0g", "169kcal"],
            ]}
            bestRowIndex={1}
          />
          <SourceNote asOf="2026年6月" />
        </section>

        <ServiceOffers tag="protein" heading="高タンパクな食事を手軽にしたい人へ（宅配食・プロテイン）" />

        {/* 6. 避けがち */}
        <section id="avoid" className="mb-16 scroll-mt-24">
          <SectionHeading id="avoid">「高タンパク風」メニューの落とし穴</SectionHeading>
          <p className="mb-4">
            タンパク質量が同じくらいでも、<Marker>カロリーは2倍以上違う</Marker>ことがあります。
            「高タンパク＝ヘルシー」と思い込むと、カロリーオーバーになりがちです。
          </p>
          <CompareBar
            title="タンパク質はほぼ同じ（約22〜24g）でもカロリーはこれだけ違う"
            metric="calorie"
            unit="kcal"
            sort="asc"
            highlightTop={1}
            items={[
              { name: "ファミマ 鶏むね肉とたまごのサラダ", value: 169, note: "P23g" },
              { name: "マクドナルド エグチ", value: 390, note: "P22.4g" },
              { name: "ケンタッキー チキンフィレバーガー", value: 398, note: "P24.3g" },
            ]}
            caption="同程度のタンパク質量で比較。たべなびDB（2026年6月時点）。"
          />
          <WarningBox title="減量中はカロリー効率を優先">
            <p>
              同じP〜23gでも、ファミマの鶏むね肉サラダ(169kcal)とケンタのチキンフィレバーガー(398kcal)では
              <Marker>約2.4倍のカロリー差</Marker>。減量中は「タンパク質量」だけでなく、
              先述の<Marker color="blue">カロリー効率(P/100kcal)</Marker>も見て選ぶのがコツです。
            </p>
          </WarningBox>
        </section>

        {/* 7. コツ */}
        <section id="tips" className="mb-16 scroll-mt-24">
          <SectionHeading id="tips">外食で効率よくタンパク質を摂る5つのコツ</SectionHeading>
          <NumberedList
            items={[
              { title: "卵・チキン・魚をトッピング/追加する", body: "牛丼に半熟卵、サラダにサラダチキン、定食に焼き魚を足すだけでタンパク質を10〜20g上乗せできます。" },
              { title: "コンビニの「たんぱく質が摂れる」シリーズを活用", body: "低カロリー・低脂質で効率的。サラダ・サラダチキン・ゆで卵は単品でもサイドでも優秀です。" },
              { title: "丼・ライスは量を調整して脂質・糖質を抑える", body: "高タンパクメニューでも、ご飯大盛りや揚げ物の衣でカロリーが跳ねます。ご飯少なめや焼き・蒸し調理を選びましょう。" },
              { title: "1食で20〜40gを目安に分けて摂る", body: "一度に大量より、毎食コンスタントに摂る方が効率的とされています。外食でも1食20g以上を意識しましょう。" },
              { title: "コスパと効率を使い分ける", body: "予算重視ならファストフードの卵・チキン系、減量重視ならコンビニの焼き魚・鶏むね肉、と目的で選び分けるのがおすすめです。" },
            ]}
          />
          <p className="mt-4 mb-2 text-sm text-gray-600">
            筋トレ・増量の文脈での選び方は
            <Link href="/guide/muscle-eating-out" className="text-sky-600 hover:underline font-medium">筋トレ中の外食ガイド</Link>
            、チェーン別の全メニュー栄養は
            <Link href="/chains" className="text-sky-600 hover:underline font-medium">チェーン別カロリー・PFC一覧</Link>
            から確認できます。
          </p>
        </section>

        {/* まとめ */}
        <section id="summary" className="mb-16 scroll-mt-24">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "1人前でタンパク質30g以上の外食メニューはDB上618品。やよい軒・すき家・びっくりドンキーに特に多い",
              "コスパ最強はマクドナルド「エグチ」(タンパク質1gあたり約8.9円)",
              "カロリー効率No.1はセブン「さんまの塩焼」(162kcalでP30g)。上位はコンビニの焼き魚・鶏むね肉が独占",
              "量をしっかり摂るならやよい軒「しまほっけ定食」(P50.7g)などの定食が有利",
              "タンパク質量が同じでもカロリーは2倍以上違う。減量中は効率(P/100kcal)も必ず見る",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分・価格は各チェーン公式サイトの情報をたべなびDBで検証して記載。メニュー改定・店舗・時期により異なる場合があります。
          </p>
        </section>

        <FAQSection
          slug="high-protein-chain-database"
          items={[
            { q: "外食でタンパク質を一番安く摂れるメニューは？", a: "たべなびDBで価格が判明しているメニューでは、マクドナルドの「エグチ(エッグチーズバーガー)」がタンパク質1gあたり約8.9円で最安クラスです。次いで朝マックのソーセージエッグマフィン、ケンタッキーのチキン系が高コスパです。" },
            { q: "ダイエット中に効率よくタンパク質が摂れる外食メニューは？", a: "100kcalあたりのタンパク質が最も多いのはセブンイレブンの「さんまの塩焼」(162kcalでP30g)。コンビニの焼き魚・鶏むね肉サラダ・砂肝などが、低カロリーで効率的にタンパク質を摂れます。" },
            { q: "高タンパクなメニューが多い外食チェーンはどこですか？", a: "1人前でタンパク質30g以上のメニュー数では、やよい軒(99品)、すき家(85品)、びっくりドンキー(78品)が上位です。定食・丼・ハンバーグ系のチェーンに高タンパクメニューが多い傾向があります。" },
            { q: "外食で1食にタンパク質はどれくらい摂ればいい？", a: "一般に1食20〜40gが目安とされています。外食なら、定食(P30〜50g)はそのままで十分、丼やバーガーには卵・チキン・サラダチキンを足すと20g以上に届きやすくなります。" },
            { q: "「高タンパク」でもカロリーに注意が必要なのはなぜ？", a: "タンパク質量が同じでもカロリーは大きく異なります。例えばP約23gでも、ファミマの鶏むね肉サラダは169kcal、ケンタのチキンフィレバーガーは398kcalと約2.4倍の差。減量中はタンパク質量だけでなくカロリー効率も見て選ぶのがおすすめです。" },
          ]}
        />

        <CTABanner
          title="高タンパクメニューを今すぐ検索"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料で絞り込み"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-19", note: "初稿公開（DB検証データで3軸ランキングを作成）" }]} />
        <ArticleFooter currentSlug="high-protein-chain-database" />
      </ArticleLayout>
    </div>
  );
}
