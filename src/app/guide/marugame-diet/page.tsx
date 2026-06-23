import Link from "next/link";
import type { Metadata } from "next";
import {
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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
  CalorieBar,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/marugame-diet" },
  title:
    "【2026年最新】丸亀製麺ダイエットガイド｜うどんは太る？低カロリーメニューの選び方 | たべなび",
  description:
    "丸亀製麺のカロリー・PFC一覧、ダイエット中のおすすめメニュー、天ぷらの落とし穴を徹底解説。かけうどん並は299kcal・脂質1.3gと低脂質でダイエット向き。太らない食べ方がわかります。",
  keywords: [
    "丸亀製麺 ダイエット",
    "丸亀製麺 カロリー",
    "うどん ダイエット",
    "丸亀製麺 低カロリー",
    "丸亀製麺 太る",
  ],
  openGraph: {
    title:
      "【2026年最新】丸亀製麺ダイエットガイド｜うどんは太る？低カロリーメニューの選び方",
    description:
      "丸亀製麺のカロリー・PFC一覧、ダイエット中のおすすめメニュー、天ぷらの落とし穴を徹底解説。",
    url: "https://www.tabenavi.jp/guide/marugame-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】丸亀製麺ダイエットガイド｜うどんは太る？低カロリーメニューの選び方",
  description:
    "丸亀製麺のカロリー・PFC一覧、ダイエット中のおすすめメニュー、天ぷらの落とし穴を徹底解説。うどんは実は低脂質でダイエット向き。",
  datePublished: "2026-03-19",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/marugame-diet",
};

const tocItems = [
  { id: "udon-diet", label: "うどんはダイエットに向いてる？" },
  { id: "calorie-ranking", label: "カロリーランキング（低い順）" },
  { id: "recommended", label: "ダイエット中のおすすめメニュー" },
  { id: "tempura-trap", label: "天ぷらの落とし穴" },
  { id: "topping", label: "トッピング・薬味の賢い選び方" },
  { id: "summary", label: "まとめ" },
];

export default function MarugameDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static content only, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="丸亀製麺ダイエットガイド"
        subtitle="うどんは太る？低カロリーメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1618889482923-38250401a84e?w=800&h=400&fit=crop"
        breadcrumb="丸亀製麺ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="marugame-diet">
        {/* Date */}
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中にうどんなんて食べていいの？」そう思っている方は多いはず。しかし、実は<Marker>うどんは外食メニューの中でもトップクラスに低脂質な食品</Marker>です。かけうどん（並・温）はわずか299kcal・脂質1.3gと、牛丼やハンバーガーとは比較にならないほどクリーンな栄養バランスを持っています。
        </p>
        <p className="mb-4">
          ただし、丸亀製麺には大きな落とし穴があります。それが<Marker color="blue">天ぷら</Marker>です。うどん本体が低カロリーでも、天ぷらを2〜3個トッピングするだけで一気に600〜800kcal超え。「うどんだからヘルシー」と油断するのが最も危険なパターンです。
        </p>
        <p className="mb-8">
          この記事では、丸亀製麺のメニューをカロリー順にランキングし、ダイエット中でも安心して注文できるメニューの選び方と天ぷらの賢い付き合い方を徹底解説します。
        </p>

        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全メニューの栄養成分（カロリー・PFC）を最新の実データに更新。架空メニューを実在品へ修正し、ランキング・比較・FAQの数値をすべて再検算。" },
            { date: "2026-03-19", note: "初版公開。" },
          ]}
        />

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: うどんはダイエットに向いてる？ */}
        <section className="mb-16">
                  <QuickAnswer
          question={"丸亀製麺のうどんはダイエット向き？低カロリーメニューの選び方は？"}
          answer={"丸亀製麺のかけうどん(並・温)は299kcal・脂質1.3gと低脂質で、脂質制限ダイエットに最適です。ただし天ぷらを付けると500kcal超に。ダイエット中のおすすめは、シンプルなうどん + 天ぷらは1個まで(かしわ天推奨) + 温泉玉子でタンパク質補給です。"}
        />

        <SectionHeading id="udon-diet">うどんはダイエットに向いてる？（実は低脂質）</SectionHeading>

          <p className="mb-4">
            うどんは「炭水化物の塊だから太る」と思われがちですが、栄養データを見ると印象が一変します。<Marker>丸亀製麺のかけうどん（並・温）は299kcal・脂質わずか1.3g</Marker>。これは外食チェーンの中でも驚異的な低脂質です。
          </p>

          <NumberedList
            items={[
              {
                title: "脂質がほぼゼロに近い",
                body: "かけうどん（並・温）の脂質はたった1.3g。牛丼並盛り（脂質約23g）やビッグマック（脂質約28g）と比較すると、うどんの脂質の低さは圧倒的です。脂質制限ダイエットとの相性が抜群。",
              },
              {
                title: "カロリー自体も低い",
                body: "並盛りで299kcal。ご飯一膳（約250kcal）にだし汁をかけた程度のカロリーです。外食で300kcal前後に収まるメインメニューは非常に少なく、これだけでも丸亀製麺の優位性がわかります。",
              },
              {
                title: "問題は「トッピング次第」",
                body: "うどん本体は優秀ですが、天ぷらやかき揚げを追加した瞬間にカロリーが大きく増えます。丸亀製麺でダイエットするなら「何を乗せるか」が最重要ポイントです。",
              },
            ]}
          />

          <ComparisonTable
            headers={["メニュー", "カロリー", "脂質", "タンパク質"]}
            rows={[
              ["丸亀 かけうどん（並・温）", "299 kcal", "1.3g", "9.5g"],
              ["すき家 牛丼（並）", "695 kcal", "23.4g", "21.7g"],
              ["マクドナルド ビッグマック", "525 kcal", "28.0g", "26.1g"],
              ["サイゼリヤ ミラノ風ドリア", "560 kcal", "21.0g", "18.0g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="低脂質 = 脂質制限ダイエットに最適">
            <p>ダイエットの方法は大きく「糖質制限」と「脂質制限」の2つに分かれます。うどんは糖質制限には不向きですが、<Marker>脂質制限（ローファットダイエット）なら最高の選択肢</Marker>。脂質1.3gのかけうどんは、1日の脂質目標40g以内に余裕で収まります。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop"
            alt="湯気が立ち上る出来たてのうどん"
          />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">丸亀製麺カロリーランキング（低い順）</SectionHeading>

          <p className="mb-4">
            丸亀製麺の主要うどんメニューをカロリーの低い順にランキングしました。<Marker color="blue">シンプルなうどんほど低カロリー</Marker>で、カレーうどんや肉系は高めの傾向があります。すべて並盛りでの比較です（温・冷は記載のもの）。
          </p>

          <NutritionTable
            items={[
              { name: "かけうどん（並・温）", calories: 299, protein: 9.5, fat: 1.3, carbs: 62.3, highlight: true },
              { name: "ざるうどん（並・冷）", calories: 305, protein: 9.3, fat: 1.3, carbs: 63.8, highlight: true },
              { name: "冷かけうどん（並・冷）", calories: 314, protein: 9.3, fat: 1.3, carbs: 64.5, highlight: true },
              { name: "ぶっかけうどん（並・温）", calories: 317, protein: 9.6, fat: 1.3, carbs: 65.6, highlight: true },
              { name: "ぶっかけうどん（並・冷）", calories: 320, protein: 9.6, fat: 1.3, carbs: 66.4, highlight: true },
              { name: "釜揚げうどん（並・温）", calories: 338, protein: 10.4, fat: 1.5, carbs: 70.7, highlight: true },
              { name: "釜玉うどん（並・温）", calories: 372, protein: 15.4, fat: 7.0, carbs: 60.7 },
              { name: "明太釜玉うどん（並・温）", calories: 391, protein: 17.4, fat: 7.4, carbs: 62.8 },
              { name: "とろ玉うどん（並・温）", calories: 407, protein: 16.7, fat: 7.0, carbs: 68.1 },
              { name: "きつねうどん（並・温）", calories: 434, protein: 15.4, fat: 9.6, carbs: 71.2 },
              { name: "明太クリームうどん（並・温）", calories: 507, protein: 13.0, fat: 20.6, carbs: 67.6 },
              { name: "焼きたて肉うどん（並・温）", calories: 693, protein: 23.6, fat: 29.9, carbs: 82.1 },
              { name: "トマたまカレーうどん（並・温）", calories: 702, protein: 15.3, fat: 23.7, carbs: 107.1 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は目安値です。店舗や時期により異なる場合があります。おすすめマークは350kcal以下のメニューに表示。
          </p>

          <CalorieBar
            title="丸亀製麺 主要うどんのカロリー比較（並盛・低い順）"
            items={[
              { name: "かけうどん（温）", value: 299 },
              { name: "ぶっかけうどん（冷）", value: 320 },
              { name: "釜揚げうどん（温）", value: 338 },
              { name: "釜玉うどん（温）", value: 372 },
              { name: "とろ玉うどん（温）", value: 407 },
              { name: "きつねうどん（温）", value: 434 },
              { name: "明太クリームうどん（温）", value: 507 },
              { name: "焼きたて肉うどん（温）", value: 693 },
              { name: "トマたまカレーうどん（温）", value: 702 },
            ]}
            caption="シンプルなうどんほど低カロリー。クリーム系・肉系・カレー系は500kcalを大きく超える。"
          />

          <TipBox title="並盛り vs 大盛りのカロリー差">
            <p>丸亀製麺の大盛りは並盛りより麺量が多めです。<Marker>かけうどんの場合、並（温）299kcalに対して大（温）は445kcal</Marker>。約146kcalの差は、おにぎり1個分に相当します。ダイエット中はまず並盛りで注文し、物足りなければ薬味やトッピングで満足感を補うのが賢い選択です。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめメニュー</SectionHeading>

          <p className="mb-6">
            丸亀製麺でダイエット中におすすめのメニューを厳選しました。基本の考え方は「<Marker>シンプルなうどん + 低カロリートッピング</Marker>」です。
          </p>

          <SubSectionHeading>第1位：かけうどん（並・温）</SubSectionHeading>

          <NutritionCard
            name="かけうどん（並・温）"
            chain="丸亀製麺"
            calories={299}
            protein={9.5}
            fat={1.3}
            carbs={62.3}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker>丸亀製麺のダイエット最強メニュー</Marker>。脂質わずか1.3gで299kcalという驚異的な数値。出汁の旨みだけで十分に美味しく、シンプルイズベストを体現したメニューです。ここに温泉玉子（73kcal）を追加しても372kcalに収まります。
          </p>

          <SubSectionHeading>第2位：ぶっかけうどん（冷・並）</SubSectionHeading>

          <NutritionCard
            name="ぶっかけうどん（冷・並）"
            chain="丸亀製麺"
            calories={320}
            protein={9.6}
            fat={1.3}
            carbs={66.4}
            recommended
          />

          <p className="mb-8 mt-4">
            かけうどんに近い低脂質のまま、冷たいうどんには嬉しいメリットが。<Marker color="blue">冷やすことでレジスタントスターチ（難消化性でんぷん）が増加する可能性があります</Marker>が、その効果の程度や個人差については科学的エビデンスが限定的です。夏場はもちろん、年間を通してダイエット向きな一杯です。
          </p>

          <SubSectionHeading>第3位：釜揚げうどん（並・温）</SubSectionHeading>

          <NutritionCard
            name="釜揚げうどん（並・温）"
            chain="丸亀製麺"
            calories={338}
            protein={10.4}
            fat={1.5}
            carbs={70.7}
            recommended
          />

          <p className="mb-8 mt-4">
            丸亀製麺の看板メニュー。釜から直接あげたもちもちの麺をつけ汁でいただくスタイル。<Marker color="green">338kcalで脂質1.5g</Marker>とダイエット向き。つけ汁を全部飲み干さなければ、塩分も控えめにできます。
          </p>

          <ArticleImage
            src="https://images.unsplash.com/photo-1552611052-33e04de1b100?w=800&h=400&fit=crop"
            alt="つやつやの讃岐うどんのアップ"
          />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="丸亀製麺のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 天ぷらの落とし穴 */}
        <section className="mb-16">
          <SectionHeading id="tempura-trap">天ぷらの落とし穴（カロリー比較）</SectionHeading>

          <p className="mb-4">
            丸亀製麺のダイエットで<Marker>最も注意すべきなのが天ぷら</Marker>です。うどん本体がいくら低カロリーでも、天ぷらを何個もトッピングすれば簡単に500〜600kcalを超えてしまいます。
          </p>

          <NutritionTable
            items={[
              { name: "ちくわ磯辺天", calories: 87, protein: 2.7, fat: 4.9, carbs: 8.0, highlight: true },
              { name: "海老天", calories: 110, protein: 6.0, fat: 6.4, carbs: 7.3, highlight: true },
              { name: "れんこん天", calories: 126, protein: 1.2, fat: 7.5, carbs: 13.6 },
              { name: "かしわ天", calories: 140, protein: 9.7, fat: 7.8, carbs: 7.9 },
              { name: "半熟玉子天", calories: 140, protein: 6.9, fat: 10.5, carbs: 3.1 },
              { name: "かぼちゃ天", calories: 151, protein: 1.3, fat: 9.1, carbs: 16.1 },
              { name: "さつまいも天", calories: 159, protein: 2.1, fat: 6.6, carbs: 23.0 },
              { name: "野菜かき揚げ", calories: 180, protein: 3.0, fat: 11.5, carbs: 14.7 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※おすすめマークは120kcal以下の天ぷらに表示。
          </p>

          <WarningBox title="天ぷらを重ねるとカロリーが一気に増える">
            <ul className="space-y-2">
              <li><span className="font-bold">野菜かき揚げ（180kcal）</span> ─ 天ぷらの中で最も高カロリー。1個でかけうどんの約60%のカロリーを追加し、脂質11.5gも一気に加算されます。</li>
              <li><span className="font-bold">かけうどん + かき揚げ + かしわ天 = 619kcal</span> ─ 「うどんだからヘルシー」のはずが、天ぷら2個で600kcal超。脂質も20.6gに跳ね上がります。</li>
              <li><span className="font-bold">さつまいも天（159kcal）</span> ─ 野菜だからヘルシーと思いがちですが、炭水化物23gと糖質も高め。うどんの糖質に上乗せされるので要注意。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["組み合わせ", "カロリー", "脂質", "判定"]}
            rows={[
              ["かけうどん（並・温）のみ", "299 kcal", "1.3g", "最適"],
              ["かけうどん + ちくわ磯辺天", "386 kcal", "6.2g", "OK"],
              ["かけうどん + かしわ天", "439 kcal", "9.1g", "ギリOK"],
              ["かけうどん + 野菜かき揚げ", "479 kcal", "12.8g", "注意"],
              ["かけうどん + かき揚げ + かしわ天", "619 kcal", "20.6g", "NG"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="天ぷらを食べるなら「1個まで」ルール">
            <p>どうしても天ぷらを食べたい場合は、<Marker>「天ぷらは1個まで」をルール化</Marker>しましょう。おすすめはかしわ天（140kcal / P9.7g）。タンパク質が最も多く、うどんに不足しがちなタンパク質を補えます。逆に、野菜かき揚げ（180kcal）は脂質が最も高いので避けたい一品です。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=800&h=400&fit=crop"
            alt="サクサクの天ぷら盛り合わせ"
          />
        </section>

        {/* Section 5: トッピング選び */}
        <section className="mb-16">
          <SectionHeading id="topping">トッピング・薬味の賢い選び方</SectionHeading>

          <p className="mb-6">
            丸亀製麺には天ぷら以外にもトッピングや薬味があります。<Marker>低カロリーで満足感を高めるトッピング</Marker>を知っておくと、ダイエットが格段に楽になります。
          </p>

          <SubSectionHeading>おすすめのトッピング</SubSectionHeading>

          <NumberedList
            items={[
              {
                title: "温泉玉子（73kcal / P6.2g）",
                body: "うどんに最も追加してほしいトッピング。タンパク質6.2gを補いつつ、73kcalと低カロリー。とろりとした黄身がうどんに絡んで満足感もアップします。",
              },
              {
                title: "とろろ（33kcal）",
                body: "カロリーが低いトッピング。ねばねば食感が満腹感を高めてくれます。ぶっかけうどんとの相性が抜群。",
              },
              {
                title: "ネギ・おろししょうが・天かす控えめ",
                body: "薬味コーナーの青ねぎ（6kcal）やおろししょうが（2kcal）はほぼカロリーゼロ。しょうがには体を温めるとされる作用がありますが、ダイエットに有意な代謝上昇をもたらすかは個人差が大きいです。ただし天かすは1人前で約69kcal、脂質5.9gなので要注意。",
              },
            ]}
          />

          <WarningBox title="天かすの盛りすぎに注意">
            <p>丸亀製麺の薬味コーナーにある天かすは「無料だから」とつい大盛りにしがち。しかし<Marker>天かすは1人前で約69kcal、脂質5.9gが加算</Marker>されます。せっかく低脂質のうどんを選んでも、天かすで台無しになるケースは非常に多いです。スプーン1杯程度に抑えましょう。</p>
          </WarningBox>

          <SubSectionHeading>タンパク質を補う工夫</SubSectionHeading>

          <p className="mb-4">
            うどんの弱点は<Marker color="blue">タンパク質の少なさ</Marker>です。かけうどん（並・温）のタンパク質はわずか9.5g。1食あたり20g以上を目標にするなら、追加トッピングで補う必要があります。
          </p>

          <ComparisonTable
            headers={["組み合わせ", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["かけうどん + 温泉玉子", "372 kcal", "P 15.7g", "7.2g"],
              ["かけうどん + かしわ天", "439 kcal", "P 19.2g", "9.1g"],
              ["かけうどん + 温泉玉子 + かしわ天", "512 kcal", "P 25.4g", "15.0g"],
              ["ぶっかけ（冷） + とろろ + 温泉玉子", "426 kcal", "P 16.9g", "7.4g"],
            ]}
            bestRowIndex={2}
          />

          <TipBox title="前後の食事でタンパク質を補うのもアリ">
            <p>丸亀製麺でタンパク質を無理に追加しようとすると、天ぷらのカロリーが増えてしまいます。<Marker color="green">「丸亀は低カロリー・低脂質の食事」と割り切って、タンパク質は前後の食事やプロテインで補う</Marker>のも賢い戦略。昼に丸亀で299kcalに抑えれば、夜に少し多めにタンパク質を摂る余裕が生まれます。</p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="外食チェーンのカロリーを一括比較"
          subtitle="たべなびで丸亀製麺と他チェーンの栄養成分を比較してみましょう"
        />

        <AffiliateProductGrid
          title="うどん欲を罪悪感なく満たす家ストック"
          productIds={["konjac-rice", "low-carb-noodle", "tuna-can", "miso-soup-pack"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            丸亀製麺はダイエット中の外食先として非常に優秀です。ただし、天ぷらの選び方次第で低カロリーにも高カロリーにもなる「両刃の剣」。このポイントを押さえれば安心です。
          </p>

          <CheckList
            items={[
              "かけうどん（並・温）299kcal・脂質1.3gが最強のダイエットメニュー",
              "うどんは低脂質が最大の強み。脂質制限ダイエットに最適",
              "天ぷらは「1個まで」。選ぶならかしわ天（P9.7g）でタンパク質補給",
              "野菜かき揚げ（180kcal・脂質11.5g）は天ぷらの中で最も高脂質。避けたい",
              "天かすの盛りすぎに注意。無料でもカロリーはゼロではない（約69kcal）",
              "タンパク質不足は温泉玉子や前後の食事で補う",
              "冷たいうどん（ぶっかけ冷）はレジスタントスターチの面でも有利な可能性",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は丸亀製麺公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="marugame-diet"
          items={[
            { q: "丸亀製麺で一番低カロリーなうどんメニューは？", a: "かけうどん(並・温)の299kcalが最も低く、次点がざるうどん(並・冷)305kcal、冷かけうどん(並・冷)314kcal。いずれも脂質1.3g前後と圧倒的に低脂質です。冷たいうどんは冷やすことでレジスタントスターチが増加する可能性があるとされますが、効果の程度には個人差があります。" },
            { q: "うどんにトッピングする天ぷらで避けるべきメニューは？", a: "野菜かき揚げ(180kcal・脂質11.5g)は天ぷらの中で最も高カロリー・高脂質。さつまいも天(159kcal)も炭水化物23gと糖質が高めです。かけうどんとの組み合わせなら、ちくわ磯辺天(87kcal)か海老天(110kcal)に限定するか、かしわ天(140kcal)でタンパク質を補いましょう。" },
            { q: "丸亀製麺のうどんで、天ぷら2個を追加するとカロリーはどうなる？", a: "かけうどん(299kcal) + 野菜かき揚げ(180kcal) + かしわ天(140kcal)で619kcal、脂質20.6gに跳ね上がります。「うどんはヘルシー」と油断して複数の天ぷらを追加すると、簡単に600kcal超になるため注意が必要です。" },
            { q: "丸亀製麺のうどんに温泉玉子を追加するとカロリーはいくら？", a: "かけうどん(並・温・299kcal) + 温泉玉子(73kcal)で合計372kcal。タンパク質が9.5gから15.7gに増加し、うどんの栄養バランスを改善できます。低カロリーでタンパク質補給できる最もおすすめのトッピングです。" },
            { q: "無料の天かす・ネギ・しょうがをたくさんかけると太る？", a: "青ねぎ(6kcal)やおろししょうが(2kcal)はほぼカロリーゼロで安全。しかし天かすは見落としやすく、1人前で約69kcal・脂質5.9gが加算されます。無料だからと大盛りにすると、低脂質の利点が台無しになるため、スプーン1杯程度に抑えましょう。" },
          ]}
        />

        <ArticleFooter currentSlug="marugame-diet" />

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
