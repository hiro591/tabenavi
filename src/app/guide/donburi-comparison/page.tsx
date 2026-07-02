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
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "丼もののカロリー比較｜牛丼・カツ丼・天丼で太りにくいのはどれ？【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/donburi-comparison" },
  description: "牛丼(吉野家・すき家・松屋)・カツ丼(松のや)・天丼(てんや)を、カロリー・タンパク質・PFCの実データで徹底比較。同じ並盛でも牛丼633kcal〜カツ丼1,168kcalと約535kcalの差。太りにくい丼の選び方を紹介します。",
  keywords: [
    "丼 カロリー 比較",
    "牛丼 カツ丼 天丼 カロリー",
    "牛丼 カロリー 比較",
    "カツ丼 カロリー",
    "天丼 カロリー",
    "丼 ダイエット",
  ],
  openGraph: {
    title: "丼もののカロリー比較｜牛丼・カツ丼・天丼で太りにくいのはどれ？",
    description: "牛丼(吉野家・すき家・松屋)・カツ丼(松のや)・天丼(てんや)を、カロリー・タンパク質・PFCの実データで徹底比較。同じ並盛でも牛丼633kcal〜カツ丼1,168kcalと約535kcalの差。",
    url: "https://www.tabenavi.jp/guide/donburi-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "丼もののカロリー比較｜牛丼・カツ丼・天丼で太りにくいのはどれ？",
  description: "牛丼(吉野家・すき家・松屋)・カツ丼(松のや)・天丼(てんや)を、カロリー・タンパク質・PFCの実データで徹底比較。太りにくい丼の選び方、ご飯量の調整やサイドの組み合わせ方を紹介します。",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/donburi-comparison",
};

const tocItems = [
  { id: "genre-overview", label: "結論: 丼ジャンル別カロリー早見表" },
  { id: "gyudon-battle", label: "牛丼3社(吉野家・すき家・松屋)対決" },
  { id: "katsudon-tendon", label: "カツ丼と天丼はなぜ重い？(松のや・てんや)" },
  { id: "low-calorie-ranking", label: "低カロリー丼おすすめ10選" },
  { id: "high-protein", label: "高タンパク丼おすすめ(筋トレ向き)" },
  { id: "size-comparison", label: "サイズでどれだけ変わる？" },
  { id: "tips", label: "太りにくい丼の食べ方 5つのコツ" },
  { id: "summary", label: "まとめ" },
];

export default function DonburiComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="丼もののカロリー比較"
        subtitle="牛丼・カツ丼・天丼で太りにくいのはどれ？吉野家・すき家・松屋・松のや・てんや5社横断【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="丼ものカロリー比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="donburi-comparison">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年7月2日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="牛丼・カツ丼・天丼で一番太りにくいのはどれ？丼ものはどう選べばいい？"
          answer={
            <>
              並盛どうしの比較では<strong>牛丼が最も低カロリーで、吉野家の牛丼(並)633kcalが牛丼3社の最軽量</strong>(松屋687kcal・すき家695kcal)。天丼は674〜912kcal(てんや・みそ汁付き表記)、カツ丼は913〜1,362kcal(松のや)と、<strong>牛丼＜天丼＜カツ丼の順で重くなる</strong>のが基本傾向です。同じ吉野家でも牛丼(並)633kcalに対しかつ丼(並盛)は1,168kcalと<strong>約535kcalの差</strong>。さらに5社横断の最軽量丼は<strong>松屋の鶏そぼろ玉子丼(並盛)540kcal</strong>、高タンパクで選ぶなら<strong>松のやの親子ささみかつ丼(タンパク質49.2g)</strong>や<strong>すき家のまぐろユッケ丼(699kcal/タンパク質36.3g)</strong>が優秀です。
            </>
          }
        />

        {/* 導入 */}
        <p className="mb-4">
          「丼ものは太る」とひとくくりにされがちですが、実際は<Marker>どの丼を選ぶかでカロリーは最大2倍以上変わります</Marker>。同じチェーンの並盛どうしでも、吉野家の牛丼は633kcal、かつ丼は1,168kcalと約535kcalの開きがあります。
        </p>
        <p className="mb-4">
          この記事では、吉野家・すき家・松屋・松のや・てんやの<Marker color="blue">主要5チェーンの公式栄養データ(並盛・単品基準)</Marker>を横断比較。「丼の種類でどう変わるか」と「同じ牛丼でもチェーンでどう違うか」の2つの軸で、太りにくい丼の正解を数字で示します。
        </p>
        <p className="mb-8">
          牛丼・カツ丼・天丼を同じ土俵で比べた記事は意外と少ないので、「今日はどの丼にするか」で迷ったときの判断材料にしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="丼もののイメージ" />

        {/* Section 1: ジャンル別早見表 */}
        <section className="mb-16">
          <SectionHeading id="genre-overview">結論: 丼ジャンル別カロリー早見表</SectionHeading>

          <p className="mb-4">
            まずは結論から。5チェーンの丼を並盛(単品)でジャンル別に整理すると、<Marker>玉子丼系＜牛丼＜天丼＜カツ丼</Marker>という序列がはっきり見えます。
          </p>

          <ComparisonTable
            headers={["丼の種類", "並盛カロリーの目安", "代表例(DB実値)"]}
            rows={[
              ["玉子丼・そぼろ系", "540〜572kcal", "松屋 鶏そぼろ玉子丼540kcal / 松のや 玉子丼572kcal"],
              ["牛丼", "633〜695kcal", "吉野家633kcal / 松屋687kcal / すき家695kcal"],
              ["天丼(みそ汁付き表記)", "674〜912kcal", "てんや 海老と野菜の上天丼674kcal〜海かぜ天丼912kcal"],
              ["カツ丼", "913〜1,362kcal", "松のや 味噌ロースかつ丼913kcal / 吉野家 かつ丼1,168kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※てんやの天丼は公式表記が「みそ汁付き」の数値(みそ汁は22kcal)。他チェーンは丼単品の数値。栄養成分は各チェーン公式情報をもとに記載。
          </p>

          <p className="mb-4">
            差がつく最大の理由は<Marker color="blue">「揚げ油と衣」</Marker>です。牛丼(並)の脂質が23〜29g程度なのに対し、カツ丼は松のや味噌ロースかつ丼で34.2g、吉野家かつ丼で55.3g。衣が吸った油のぶんだけ脂質が増え、カロリーが跳ね上がります。天丼はその中間で、具材(海老・野菜中心か、かき揚げ中心か)によって幅が出ます。
          </p>

          <TipBox title="ジャンル選びのポイント">
            <p>カロリーを抑えたい日は<Marker>牛丼か玉子丼系(540〜695kcal)</Marker>が基本線。天丼なら海老・野菜中心の丼、カツ丼はタンパク質が多い(28.5〜56.9g)ぶん「しっかり食べたい日・トレーニングした日」に回す、と使い分けるとカロリーコントロールがしやすくなります。</p>
          </TipBox>
        </section>

        {/* Section 2: 牛丼3社対決 */}
        <section className="mb-16">
          <SectionHeading id="gyudon-battle">牛丼3社(吉野家・すき家・松屋)対決</SectionHeading>

          <p className="mb-4">
            次に「同じ牛丼」をチェーン間で比較します。<Link href="/chains/yoshinoya" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">吉野家</Link>・<Link href="/chains/sukiya" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">すき家</Link>・<Link href="/chains/matsuya" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">松屋</Link>の並盛を並べると、<Marker>同じ「牛丼(牛めし)」でも最大62kcalの差</Marker>があります。
          </p>

          <ComparisonTable
            headers={["チェーン", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["吉野家 牛丼(並)", "633 kcal", "19.6g", "23.6g", "88.2g"],
              ["松屋 牛めし(並)", "687 kcal", "17.1g", "28.9g", "85.5g"],
              ["すき家 牛丼(並)", "695 kcal", "21.7g", "23.4g", "99.8g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            カロリー最軽量は<Marker>吉野家(633kcal)</Marker>。一方、タンパク質が最も多いのは<Marker color="blue">すき家(21.7g)</Marker>、脂質最少もすき家(23.4g)で、炭水化物が最も少ないのは松屋(85.5g)と、指標ごとに勝者が変わります。「カロリー優先なら吉野家、タンパク質と脂質のバランス優先ならすき家」が数字上の整理です。
          </p>

          <TipBox title="糖質を大きく抑えたい日は「牛丼ライト」">
            <p>すき家にはご飯の代わりに豆腐を使った<Marker>牛丼ライト(並盛397kcal/タンパク質22.8g/炭水化物16.8g)</Marker>があります。厳密には丼ご飯ではありませんが、牛丼(並)695kcalから約300kcalカットしつつタンパク質はほぼ同等。糖質を調整したい日の有力な代替です。</p>
          </TipBox>

          <p className="mb-4">
            牛丼3社は変わり種メニューの差も大きく、すき家のねぎ玉牛丼(並盛802kcal/タンパク質29.4g)、松屋のネギたっぷり旨辛ネギたま牛めし(並盛818kcal)など、トッピング入りは並盛でも800kcal台に乗ります。3社のより詳しい比較は<Link href="/guide/gyudon-comparison" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">牛丼チェーン栄養比較</Link>で深掘りしています。
          </p>
        </section>

        {/* Section 3: カツ丼・天丼 */}
        <section className="mb-16">
          <SectionHeading id="katsudon-tendon">カツ丼と天丼はなぜ重い？(松のや・てんや)</SectionHeading>

          <SubSectionHeading>松のや: カツ丼は913kcal〜、ただしタンパク質は圧倒的</SubSectionHeading>

          <p className="mb-4">
            とんかつ専門の<Link href="/chains/matsunoya" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">松のや</Link>の丼(並盛)を見ると、同じチェーン内でも<Marker>玉子丼572kcal〜超厚切りロースかつ丼1,362kcalと2.4倍近い開き</Marker>があります。
          </p>

          <NutritionTable
            items={[
              { name: "玉子丼", calories: 572, protein: 21.1, fat: 11.1, carbs: 96.9, highlight: true },
              { name: "味噌ロースかつ丼", calories: 913, protein: 28.5, fat: 34.2, carbs: 124.8 },
              { name: "親子ささみかつ丼", calories: 962, protein: 49.2, fat: 29.2, carbs: 126.5, highlight: true },
              { name: "ロースかつ丼", calories: 1011, protein: 39.8, fat: 41.4, carbs: 120.2 },
              { name: "国産雪国育ちロースかつ丼", calories: 1144, protein: 46.8, fat: 51.6, carbs: 123.4 },
              { name: "超厚切りロースかつ丼", calories: 1362, protein: 56.9, fat: 67.6, carbs: 126.4 },
            ]}
            caption="松のやの丼(並盛・DB実値)"
          />

          <p className="mb-4">
            カツ丼が重い理由は脂質です。ロースかつ丼の脂質41.4gは、吉野家牛丼(並)の23.6gの約1.8倍。一方で<Marker color="blue">親子ささみかつ丼はタンパク質49.2gと非常に多く</Marker>、脂質はロースかつ丼より12g以上低い29.2g。カツ丼を食べるなら「ロースよりささみ」が数字上の賢い選択です。松のや全体の攻略は<Link href="/guide/matsunoya-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">松のやダイエットガイド</Link>にまとめています。
          </p>

          <SubSectionHeading>てんや: 天丼は「具材」でカロリーが変わる</SubSectionHeading>

          <p className="mb-4">
            <Link href="/chains/tenya" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">てんや</Link>の天丼はいずれも公式表記が「みそ汁付き」(みそ汁は22kcal)。その前提で並べると674〜912kcalと、牛丼とカツ丼の中間に位置します。
          </p>

          <NutritionTable
            items={[
              { name: "海老と野菜の上天丼", calories: 674, protein: 15.6, fat: 21.1, carbs: 109.8, highlight: true },
              { name: "てんやの天丼", calories: 715, protein: 20.0, fat: 21.6, carbs: 113.9 },
              { name: "鶏と舞茸の天丼", calories: 757, protein: 17.3, fat: 28.5, carbs: 111.6 },
              { name: "野菜天丼", calories: 792, protein: 10.6, fat: 30.6, carbs: 123.8 },
              { name: "オールスター天丼", calories: 796, protein: 23.7, fat: 26.7, carbs: 119.3 },
              { name: "いろどり天丼", calories: 826, protein: 25.7, fat: 28.5, carbs: 120.3 },
              { name: "海鮮かき揚げ天丼", calories: 883, protein: 23.3, fat: 39.7, carbs: 110.6 },
              { name: "海かぜ天丼", calories: 912, protein: 22.3, fat: 40.3, carbs: 120.0 },
            ]}
            caption="てんやの天丼(みそ汁付き表記・DB実値)"
          />

          <WarningBox title="「野菜天丼＝ヘルシー」ではない">
            <p>野菜天丼は792kcalで、海老と野菜の上天丼(674kcal)より118kcal高く、タンパク質はわずか10.6gと今回の比較で最少クラス。<Marker>野菜は衣が油を吸いやすく、脂質は30.6gに達します</Marker>。天丼で選ぶなら海老中心の丼の方がカロリーもPFCバランスも有利です。かき揚げ系(海鮮かき揚げ883kcal・海かぜ912kcal)も脂質約40gと重量級なので注意。てんやの詳しい攻略は<Link href="/guide/tenya-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">てんやダイエットガイド</Link>へ。</p>
          </WarningBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="5社の丼を栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: 低カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="low-calorie-ranking">低カロリー丼おすすめ10選(5社横断・並盛)</SectionHeading>

          <p className="mb-6">
            5チェーンの定番丼(並盛・単品)を中心に、カロリーの低い順で10品選びました(期間限定・変わり種の丼は除く)。<Marker>上位は玉子系・牛丼・海鮮系が占め、揚げ物系はほぼ入りません</Marker>。
          </p>

          <NutritionTable
            items={[
              { name: "鶏そぼろ玉子丼(松屋)", calories: 540, protein: 21.2, fat: 9.4, carbs: 87.5, highlight: true },
              { name: "玉子丼(松のや)", calories: 572, protein: 21.1, fat: 11.1, carbs: 96.9, highlight: true },
              { name: "豚丼(吉野家)", calories: 576, protein: 14.4, fat: 18.6, carbs: 88.1 },
              { name: "牛麦とろ丼(吉野家)", calories: 587, protein: 18.8, fat: 16.6, carbs: 95.9 },
              { name: "牛丼(吉野家)", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2, highlight: true },
              { name: "山かけまぐろたたき丼(すき家)", calories: 639, protein: 30.2, fat: 10.1, carbs: 106.7, highlight: true },
              { name: "うな丼(すき家)", calories: 662, protein: 22.8, fat: 18.7, carbs: 100.2 },
              { name: "旨だしとりそぼろ丼(すき家)", calories: 673, protein: 30.6, fat: 14.4, carbs: 104.8 },
              { name: "海老と野菜の上天丼(てんや・みそ汁付き)", calories: 674, protein: 15.6, fat: 21.1, carbs: 109.8 },
              { name: "牛めし(松屋)", calories: 687, protein: 17.1, fat: 28.9, carbs: 85.5 },
            ]}
            caption="5社横断・低カロリー丼おすすめ10選(並盛・DB実値・定番丼中心)"
          />

          <TipBox title="ダイエット中の第一候補は「玉子系」と「海鮮系」">
            <p>最軽量の<Marker>松屋・鶏そぼろ玉子丼(540kcal)は脂質9.4gと今回の全丼で最少</Marker>。さらに、すき家の山かけまぐろたたき丼(639kcal)は脂質10.1gでタンパク質30.2gと、低脂質高タンパクの優等生です。「丼＝揚げ物か肉」という思い込みを外すと、選択肢は一気に広がります。</p>
          </TipBox>
        </section>

        <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの良い丼もののイメージ" />

        {/* Section 5: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパク丼ランキング(筋トレ向き)</SectionHeading>

          <p className="mb-6">
            トレーニング後にしっかり食べたい日は、タンパク質の量と効率(カロリーあたりのタンパク質)で選びます。5社横断のおすすめがこちら。
          </p>

          <RankingCard rank={1} title="まぐろユッケ丼(すき家)" subtitle="並盛 699kcal / P36.3g / F16.8g / C100.4g" calories={699} protein={36.3} fat={16.8} carbs={100.4}>
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>100kcalあたりタンパク質約5.2gと、今回比較した並盛丼で効率トップ</Marker>。700kcal未満でタンパク質36.3g・脂質16.8gという数字は、丼ものとしては別格のバランスです。「カロリーを抑えつつタンパク質を確保したい」ならまずこれ。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="親子ささみかつ丼(松のや)" subtitle="並盛 962kcal / P49.2g / F29.2g / C126.5g" calories={962} protein={49.2} fat={29.2} carbs={126.5}>
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">タンパク質49.2gと並盛丼でも最高クラス</Marker>。ささみを使うことで、ロースかつ丼(1,011kcal/F41.4g)よりカロリーも脂質も抑えながらタンパク質は約10g多いという逆転現象が起きています。ハードに動いた日の「ごほうび兼補給」に。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="旨だしとりそぼろ丼(すき家)" subtitle="並盛 673kcal / P30.6g / F14.4g / C104.8g" calories={673} protein={30.6} fat={14.4} carbs={104.8}>
            <p className="text-sm text-gray-700 leading-relaxed">
              700kcal未満・タンパク質30g超・<Marker color="green">脂質14.4g</Marker>と三拍子そろった鶏そぼろ系。低脂質を維持したい減量期でも取り入れやすい構成です。
            </p>
          </RankingCard>

          <SubSectionHeading>高タンパク丼おすすめ8選(5社横断・並盛)</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "親子ささみかつ丼(松のや)", calories: 962, protein: 49.2, fat: 29.2, carbs: 126.5, highlight: true },
              { name: "かつ丼(吉野家)", calories: 1168, protein: 47.0, fat: 55.3, carbs: 122.6 },
              { name: "ロースかつ丼(松のや)", calories: 1011, protein: 39.8, fat: 41.4, carbs: 120.2 },
              { name: "まぐろユッケ丼(すき家)", calories: 699, protein: 36.3, fat: 16.8, carbs: 100.4, highlight: true },
              { name: "おろしロースかつ丼(吉野家)", calories: 978, protein: 34.1, fat: 44.9, carbs: 113.9 },
              { name: "ネギ塩丼(松屋)", calories: 856, protein: 32.5, fat: 37.2, carbs: 88.4 },
              { name: "旨だしとりそぼろ丼(すき家)", calories: 673, protein: 30.6, fat: 14.4, carbs: 104.8, highlight: true },
              { name: "山かけまぐろたたき丼(すき家)", calories: 639, protein: 30.2, fat: 10.1, carbs: 106.7, highlight: true },
            ]}
            highlightProtein
            caption="高タンパク丼おすすめ8選(並盛・DB実値・定番丼中心。超厚切りロースかつ丼P56.9gなどさらに高タンパクな丼もあり)"
          />

          <p className="mb-4">
            絶対量ならカツ系(47〜49.2g)が上位を占めますが、カロリーは1,000kcal前後。<Marker color="blue">減量中は700kcal未満でタンパク質30g超の「まぐろ系・鶏そぼろ系」</Marker>、増量期やしっかり食べたい日はカツ系、と目的で使い分けるのが数字上の最適解です。
          </p>
        </section>

        {/* Section 6: サイズ比較 */}
        <section className="mb-16">
          <SectionHeading id="size-comparison">サイズでどれだけ変わる？(小盛〜メガ)</SectionHeading>

          <p className="mb-4">
            同じ牛丼でも、サイズ選びでカロリーは大きく変わります。<Marker>すき家はミニ464kcal〜メガ1,365kcalで約2.9倍</Marker>、吉野家も小盛474kcal〜超特盛1,159kcalで約2.4倍の開きがあります。
          </p>

          <ComparisonTable
            headers={["サイズ", "吉野家 牛丼", "すき家 牛丼", "松屋 牛めし"]}
            rows={[
              ["小盛/ミニ", "474 kcal", "464 kcal", "507 kcal"],
              ["並盛", "633 kcal", "695 kcal", "687 kcal"],
              ["中間サイズ", "725 kcal(アタマの大盛)", "752 kcal(中盛)", "765 kcal(あたま大盛)"],
              ["大盛", "823 kcal", "908 kcal", "933 kcal"],
              ["特盛", "1,006 kcal", "1,100 kcal", "1,237 kcal"],
              ["超特盛/メガ", "1,159 kcal", "1,365 kcal", "—"],
            ]}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※「—」は当サイトのデータベースに記載のないサイズ。カツ丼も同様にサイズで増え、松のや味噌ロースかつ丼は並盛913kcal→大盛1,069kcal(+156kcal)、ロースかつ丼は並盛1,011kcal→大盛1,190kcal(+179kcal)です。
          </p>

          <p className="mb-4">
            注目したいのは<Marker>「並盛→小盛」のカット幅</Marker>です。吉野家は633→474kcalで-159kcal、すき家は695→464kcalで-231kcal。ご飯の量が減るぶん炭水化物が大きく下がる(吉野家並88.2g→小盛60.9g)ため、糖質を調整したい日にも有効です。逆に「大盛以上」はご飯由来の炭水化物が120〜140g台に達するので、活動量の多い日以外は慎重に。
          </p>

          <TipBox title="迷ったら「並盛以下＋タンパク質トッピング」">
            <p>物足りなさが心配なら、サイズを上げるより<Marker color="blue">玉子(すき家84kcal/P6.9g・吉野家の半熟玉子76kcal/P6.2g)や牛皿ではなくサラダ・小鉢を足す</Marker>方がカロリーの増え方が緩やかです。大盛化(+190〜246kcal)に比べ、玉子1個は約80kcalで満足感を底上げできます。</p>
          </TipBox>
        </section>

        {/* Section 7: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">太りにくい丼の食べ方 5つのコツ</SectionHeading>

          <NumberedList
            items={[
              {
                title: "ジャンルは「牛丼・玉子系まで」を基本線にする",
                body: "並盛で540〜695kcalに収まる玉子丼系・牛丼を平日の基本にし、913kcal〜のカツ丼は週1回やトレーニング日のごほうびに。ジャンル選びだけで1食300〜500kcal前後の差がつきます。",
              },
              {
                title: "汁物はみそ汁を選ぶ(豚汁は+100〜200kcal級)",
                body: "みそ汁は吉野家20kcal・松屋35kcal・すき家37kcalと軽い一方、豚汁・とん汁は吉野家143kcal・松屋243kcal・すき家249kcal。汁物の選択だけで200kcal以上変わることがあります。",
              },
              {
                title: "サラダ・小鉢を先に足す",
                body: "松屋の生野菜24kcal、すき家のサラダ(ドレッシング除く)37kcal、吉野家の生野菜サラダ88kcal、てんやのほうれん草のおひたし11kcalなど、100kcal未満の野菜サイドが各社にあります。丼単品より満足感が続きやすく、食べ過ぎ防止が期待できます。",
              },
              {
                title: "サイズは「小盛/ミニ」から検討する",
                body: "吉野家の小盛(474kcal)は並盛-159kcal、すき家のミニ(464kcal)は並盛-231kcal。「大盛にしない」だけでなく「小盛にできないか」から考えると、無理なく調整できます。",
              },
              {
                title: "食べたら記録して1日で調整する",
                body: "丼ものは1品で完結するぶん、1食の数値がそのまま把握しやすいのが利点です。本記事の数値は全て公式データに基づいているので、食べた丼をそのまま記録し、残りの食事でPFCを整えましょう。",
              },
            ]}
          />

          <p className="mb-4 text-sm text-gray-600">
            外食全体でのカロリーコントロールの考え方は<Link href="/guide/eating-out-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食ダイエット完全ガイド</Link>で体系的にまとめています。
          </p>
        </section>

        {/* チェーン別ハブへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>5社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/yoshinoya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🥩 吉野家</Link>
            <Link href="/chains/sukiya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🥩 すき家</Link>
            <Link href="/chains/matsuya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🥩 松屋</Link>
            <Link href="/chains/matsunoya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍴 松のや</Link>
            <Link href="/chains/tenya" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍤 てんや</Link>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            丼ものは「ジャンル選び×チェーン選び×サイズ選び」の掛け算でカロリーが決まります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "並盛の序列は玉子丼系(540〜572kcal)＜牛丼(633〜695kcal)＜天丼(674〜912kcal)＜カツ丼(913〜1,362kcal)",
              "牛丼3社の最軽量は吉野家(633kcal)。タンパク質と脂質のバランスならすき家(695kcal/P21.7g/F23.4g)",
              "5社横断の最軽量丼は松屋の鶏そぼろ玉子丼(540kcal/F9.4g)",
              "高タンパクの効率王はすき家のまぐろユッケ丼(699kcal/P36.3g)、絶対量なら松のやのかつ丼系(親子ささみかつ丼P49.2g・超厚切りロースかつ丼P56.9gなど)",
              "汁物(みそ汁20〜37kcal vs 豚汁143〜249kcal)とサイズ(小盛で-159〜231kcal)の選択が隠れた分かれ目",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <ServiceOffers tag="diet" />

        {/* FAQ */}
        <FAQSection
          slug="donburi-comparison"
          items={[
            {
              q: "牛丼・カツ丼・天丼で一番太りにくいのはどれですか？",
              a: "並盛どうしの比較では牛丼が最も低カロリーです。牛丼は633〜695kcal(吉野家・松屋・すき家)、天丼は674〜912kcal(てんや・みそ汁付き表記)、カツ丼は913〜1,362kcal(松のや)が目安。カツ丼は衣が吸う揚げ油で脂質が34〜68gに達するため、カロリーを抑えたい日は牛丼か玉子丼系が有利です(2026年7月時点・各社公式栄養データ)。",
            },
            {
              q: "牛丼チェーン3社で一番低カロリーなのはどこですか？",
              a: "並盛の比較では吉野家の牛丼(633kcal)が最軽量で、松屋の牛めし(687kcal)、すき家の牛丼(695kcal)の順です。ただしタンパク質はすき家(21.7g)が最も多く、脂質もすき家(23.4g)が最少。カロリー優先なら吉野家、PFCバランス優先ならすき家という整理になります。",
            },
            {
              q: "ダイエット中でも食べやすい丼はありますか？",
              a: "5社横断では松屋の鶏そぼろ玉子丼(並盛540kcal/脂質9.4g)、松のやの玉子丼(並盛572kcal/脂質11.1g)、すき家の山かけまぐろたたき丼(並盛639kcal/タンパク質30.2g/脂質10.1g)が低カロリーかつ低脂質です。600kcal前後・脂質15g未満の丼を選ぶと、1日の摂取カロリーの調整がしやすくなります。",
            },
            {
              q: "筋トレ後におすすめの高タンパクな丼はどれですか？",
              a: "タンパク質の絶対量なら松のやの超厚切りロースかつ丼(並盛1,362kcal/タンパク質56.9g)や親子ささみかつ丼(並盛962kcal/タンパク質49.2g)が多めです。カロリーを抑えつつタンパク質を確保したい場合は、すき家のまぐろユッケ丼(並盛699kcal/タンパク質36.3g)や旨だしとりそぼろ丼(並盛673kcal/タンパク質30.6g/脂質14.4g)が効率的です。",
            },
            {
              q: "カツ丼はなぜ牛丼よりカロリーが高いのですか？",
              a: "主な要因は衣が吸う揚げ油による脂質の増加です。吉野家の牛丼(並)の脂質23.6gに対し、松のやのロースかつ丼(並盛)は41.4g、吉野家のかつ丼(並盛)は55.3g。脂質は1gあたり約9kcalと糖質・タンパク質(約4kcal)の2倍以上のエネルギーがあるため、脂質の差がそのままカロリー差(牛丼633kcal vs かつ丼1,168kcal)につながります。",
            },
            {
              q: "てんやの天丼のカロリー表記で注意することはありますか？",
              a: "てんやの天丼のカロリーは公式情報が「みそ汁付き」の数値です(みそ汁は22kcal)。例えば「てんやの天丼」715kcal、「海老と野菜の上天丼」674kcalにはみそ汁分が含まれています。他チェーンの丼単品と比較する際は、この表記の違いを踏まえて見てください。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="丼もの5社をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory
          entries={[
            { date: "2026-07-02", note: "初稿公開(5社の公式栄養データに基づく横断比較)" },
          ]}
        />
        <ArticleFooter currentSlug="donburi-comparison" />

        {/* Back link */}
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
