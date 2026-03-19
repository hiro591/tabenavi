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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】丸亀製麺ダイエットガイド｜うどんは太る？低カロリーメニューの選び方 | たべなび",
  description:
    "丸亀製麺のカロリー・PFC一覧、ダイエット中のおすすめメニュー、天ぷらの落とし穴を徹底解説。うどんは実は低脂質でダイエット向き。太らない食べ方がわかります。",
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
    url: "https://tabenavi.jp/guide/marugame-diet",
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
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/marugame-diet",
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中にうどんなんて食べていいの？」そう思っている方は多いはず。しかし、実は<Marker>うどんは外食メニューの中でもトップクラスに低脂質な食品</Marker>です。かけうどん（並）はわずか305kcal・脂質1.5gと、牛丼やハンバーガーとは比較にならないほどクリーンな栄養バランスを持っています。
        </p>
        <p className="mb-4">
          ただし、丸亀製麺には大きな落とし穴があります。それが<Marker color="blue">天ぷら</Marker>です。うどん本体が低カロリーでも、天ぷらを2〜3個トッピングするだけで一気に600〜800kcal超え。「うどんだからヘルシー」と油断するのが最も危険なパターンです。
        </p>
        <p className="mb-8">
          この記事では、丸亀製麺のメニューをカロリー順にランキングし、ダイエット中でも安心して注文できるメニューの選び方と天ぷらの賢い付き合い方を徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: うどんはダイエットに向いてる？ */}
        <section className="mb-16">
          <SectionHeading id="udon-diet">うどんはダイエットに向いてる？（実は低脂質）</SectionHeading>

          <p className="mb-4">
            うどんは「炭水化物の塊だから太る」と思われがちですが、栄養データを見ると印象が一変します。<Marker>丸亀製麺のかけうどん（並）は305kcal・脂質わずか1.5g</Marker>。これは外食チェーンの中でも驚異的な低脂質です。
          </p>

          <NumberedList
            items={[
              {
                title: "脂質がほぼゼロに近い",
                body: "かけうどん（並）の脂質はたった1.5g。牛丼並盛り（脂質約25g）やビッグマック（脂質約30g）と比較すると、うどんの脂質の低さは圧倒的です。脂質制限ダイエットとの相性が抜群。",
              },
              {
                title: "カロリー自体も低い",
                body: "並盛りで305kcal。ご飯一膳（約250kcal）にだし汁をかけた程度のカロリーです。外食で300kcal台に収まるメインメニューは非常に少なく、これだけでも丸亀製麺の優位性がわかります。",
              },
              {
                title: "問題は「トッピング次第」",
                body: "うどん本体は優秀ですが、天ぷらやかき揚げを追加した瞬間にカロリーが倍増します。丸亀製麺でダイエットするなら「何を乗せるか」が最重要ポイントです。",
              },
            ]}
          />

          <ComparisonTable
            headers={["メニュー", "カロリー", "脂質", "タンパク質"]}
            rows={[
              ["丸亀 かけうどん（並）", "305 kcal", "1.5g", "8.5g"],
              ["すき家 牛丼（並）", "733 kcal", "25.0g", "22.0g"],
              ["マクドナルド ビッグマック", "525 kcal", "28.3g", "26.0g"],
              ["サイゼリヤ ミラノ風ドリア", "548 kcal", "22.4g", "15.8g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="低脂質 = 脂質制限ダイエットに最適">
            <p>ダイエットの方法は大きく「糖質制限」と「脂質制限」の2つに分かれます。うどんは糖質制限には不向きですが、<Marker>脂質制限（ローファットダイエット）なら最高の選択肢</Marker>。脂質1.5gのかけうどんは、1日の脂質目標40g以内に余裕で収まります。</p>
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
            丸亀製麺の主要うどんメニューをカロリーの低い順にランキングしました。<Marker color="blue">シンプルなうどんほど低カロリー</Marker>で、カレーうどんや肉系は高めの傾向があります。すべて並盛りでの比較です。
          </p>

          <NutritionTable
            items={[
              { name: "かけうどん（並）", calories: 305, protein: 8.5, fat: 1.5, carbs: 63.5, highlight: true },
              { name: "ぶっかけうどん（冷・並）", calories: 303, protein: 8.2, fat: 1.8, carbs: 62.8, highlight: true },
              { name: "釜揚げうどん（並）", calories: 310, protein: 8.8, fat: 1.6, carbs: 64.0, highlight: true },
              { name: "ざるうどん（並）", calories: 303, protein: 8.0, fat: 1.4, carbs: 63.2, highlight: true },
              { name: "とろ玉うどん（並）", calories: 378, protein: 14.5, fat: 5.8, carbs: 65.2 },
              { name: "明太釜玉うどん（並）", calories: 412, protein: 16.2, fat: 7.5, carbs: 66.8 },
              { name: "肉うどん（並）", calories: 465, protein: 18.5, fat: 12.8, carbs: 66.5 },
              { name: "肉ぶっかけうどん（並）", calories: 478, protein: 19.2, fat: 13.5, carbs: 65.8 },
              { name: "カレーうどん（並）", calories: 498, protein: 14.8, fat: 10.5, carbs: 82.4 },
              { name: "かけうどん＋野菜かき揚げ", calories: 555, protein: 11.2, fat: 15.5, carbs: 85.5 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は目安値です。店舗や時期により異なる場合があります。おすすめマークは350kcal以下のメニューに表示。
          </p>

          <TipBox title="並盛り vs 大盛りのカロリー差">
            <p>丸亀製麺の大盛りは並盛りの約1.5倍の麺量。<Marker>かけうどんの場合、並305kcalに対して大は約460kcal</Marker>。150kcalの差は、おにぎり1個分に相当します。ダイエット中はまず並盛りで注文し、物足りなければ薬味やトッピングで満足感を補うのが賢い選択です。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめメニュー</SectionHeading>

          <p className="mb-6">
            丸亀製麺でダイエット中におすすめのメニューを厳選しました。基本の考え方は「<Marker>シンプルなうどん + 低カロリートッピング</Marker>」です。
          </p>

          <SubSectionHeading>第1位：かけうどん（並）</SubSectionHeading>

          <NutritionCard
            name="かけうどん（並）"
            chain="丸亀製麺"
            calories={305}
            protein={8.5}
            fat={1.5}
            carbs={63.5}
            price={390}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker>丸亀製麺のダイエット最強メニュー</Marker>。脂質わずか1.5gで305kcalという驚異的な数値。出汁の旨みだけで十分に美味しく、シンプルイズベストを体現したメニューです。ここに温泉たまご（約70kcal）を追加しても375kcalに収まります。
          </p>

          <SubSectionHeading>第2位：ぶっかけうどん（冷・並）</SubSectionHeading>

          <NutritionCard
            name="ぶっかけうどん（冷・並）"
            chain="丸亀製麺"
            calories={303}
            protein={8.2}
            fat={1.8}
            carbs={62.8}
            price={390}
            recommended
          />

          <p className="mb-8 mt-4">
            かけうどんとほぼ同カロリーですが、冷たいうどんには嬉しいメリットが。<Marker color="blue">冷やすことでレジスタントスターチ（難消化性でんぷん）が増加</Marker>し、糖の吸収が穏やかになるとされています。夏場はもちろん、年間を通してダイエット向きな一杯です。
          </p>

          <SubSectionHeading>第3位：釜揚げうどん（並）</SubSectionHeading>

          <NutritionCard
            name="釜揚げうどん（並）"
            chain="丸亀製麺"
            calories={310}
            protein={8.8}
            fat={1.6}
            carbs={64.0}
            price={390}
            recommended
          />

          <p className="mb-8 mt-4">
            丸亀製麺の看板メニュー。釜から直接あげたもちもちの麺をつけ汁でいただくスタイル。<Marker color="green">310kcalで脂質1.6g</Marker>とダイエット向き。つけ汁を全部飲み干さなければ、塩分も控えめにできます。
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
            丸亀製麺のダイエットで<Marker>最も注意すべきなのが天ぷら</Marker>です。うどん本体がいくら低カロリーでも、天ぷらを何個もトッピングすれば簡単に600〜800kcalを超えてしまいます。
          </p>

          <NutritionTable
            items={[
              { name: "ちくわ磯辺天", calories: 95, protein: 3.8, fat: 5.2, carbs: 8.5, highlight: true },
              { name: "えび天", calories: 110, protein: 5.5, fat: 6.2, carbs: 8.0, highlight: true },
              { name: "かしわ天", calories: 140, protein: 10.5, fat: 7.8, carbs: 6.5 },
              { name: "さつまいも天", calories: 160, protein: 1.2, fat: 7.5, carbs: 22.0 },
              { name: "れんこん天", calories: 115, protein: 1.5, fat: 6.8, carbs: 12.5 },
              { name: "かぼちゃ天", calories: 125, protein: 1.5, fat: 6.0, carbs: 16.5 },
              { name: "野菜かき揚げ", calories: 250, protein: 2.8, fat: 14.0, carbs: 28.5 },
              { name: "大海老天", calories: 180, protein: 7.5, fat: 10.5, carbs: 14.0 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※おすすめマークは120kcal以下の天ぷらに表示。
          </p>

          <WarningBox title="天ぷら2〜3個でカロリー倍増の危険">
            <ul className="space-y-2">
              <li><span className="font-bold">野菜かき揚げ（250kcal）</span> ─ 最も危険な天ぷら。1個でかけうどんの約80%のカロリーを追加。脂質14gも一気に加算されます。</li>
              <li><span className="font-bold">かけうどん + かき揚げ + かしわ天 = 695kcal</span> ─ 「うどんだからヘルシー」のはずが、天ぷら2個でほぼ700kcal。脂質も23.3gに跳ね上がります。</li>
              <li><span className="font-bold">さつまいも天（160kcal）</span> ─ 野菜だからヘルシーと思いがちですが、炭水化物22gと糖質も高め。うどんの糖質に上乗せされるので要注意。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["組み合わせ", "カロリー", "脂質", "判定"]}
            rows={[
              ["かけうどん（並）のみ", "305 kcal", "1.5g", "最適"],
              ["かけうどん + ちくわ磯辺天", "400 kcal", "6.7g", "OK"],
              ["かけうどん + かしわ天", "445 kcal", "9.3g", "ギリOK"],
              ["かけうどん + 野菜かき揚げ", "555 kcal", "15.5g", "注意"],
              ["かけうどん + かき揚げ + かしわ天", "695 kcal", "23.3g", "NG"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="天ぷらを食べるなら「1個まで」ルール">
            <p>どうしても天ぷらを食べたい場合は、<Marker>「天ぷらは1個まで」をルール化</Marker>しましょう。おすすめはかしわ天（140kcal / P10.5g）。タンパク質が最も多く、うどんに不足しがちなタンパク質を補えます。逆に、野菜かき揚げ（250kcal）だけは絶対に避けてください。</p>
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
                title: "温泉たまご（約70kcal / P6.2g）",
                body: "うどんに最も追加してほしいトッピング。タンパク質6.2gを補いつつ、70kcalと低カロリー。とろりとした黄身がうどんに絡んで満足感もアップします。",
              },
              {
                title: "とろろ（約30kcal）",
                body: "ほぼカロリーゼロに近いトッピング。食物繊維が豊富で消化を助け、ねばねば食感が満腹感を高めてくれます。ぶっかけうどんとの相性が抜群。",
              },
              {
                title: "ネギ・生姜・天かす控えめ",
                body: "薬味コーナーのネギと生姜はカロリーほぼゼロ。生姜は体を温め代謝を上げる効果も。ただし天かすはスプーン1杯で約25kcal、脂質2gなので要注意。",
              },
            ]}
          />

          <WarningBox title="天かすの盛りすぎに注意">
            <p>丸亀製麺の薬味コーナーにある天かすは「無料だから」とつい大盛りにしがち。しかし<Marker>天かすをたっぷり入れると50〜80kcal、脂質4〜6gが加算</Marker>されます。せっかく低脂質のうどんを選んでも、天かすで台無しになるケースは非常に多いです。</p>
          </WarningBox>

          <SubSectionHeading>タンパク質を補う工夫</SubSectionHeading>

          <p className="mb-4">
            うどんの弱点は<Marker color="blue">タンパク質の少なさ</Marker>です。かけうどん（並）のタンパク質はわずか8.5g。1食あたり20g以上を目標にするなら、追加トッピングで補う必要があります。
          </p>

          <ComparisonTable
            headers={["組み合わせ", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["かけうどん + 温泉たまご", "375 kcal", "P 14.7g", "6.3g"],
              ["かけうどん + かしわ天", "445 kcal", "P 19.0g", "9.3g"],
              ["かけうどん + 温泉たまご + かしわ天", "515 kcal", "P 25.2g", "14.5g"],
              ["ぶっかけ + とろろ + 温泉たまご", "403 kcal", "P 14.4g", "6.6g"],
            ]}
            bestRowIndex={2}
          />

          <TipBox title="前後の食事でタンパク質を補うのもアリ">
            <p>丸亀製麺でタンパク質を無理に追加しようとすると、天ぷらのカロリーが増えてしまいます。<Marker color="green">「丸亀は低カロリー・低脂質の食事」と割り切って、タンパク質は前後の食事やプロテインで補う</Marker>のも賢い戦略。昼に丸亀で305kcalに抑えれば、夜に少し多めにタンパク質を摂る余裕が生まれます。</p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="外食チェーンのカロリーを一括比較"
          subtitle="たべなびで丸亀製麺と他チェーンの栄養成分を比較してみましょう"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            丸亀製麺はダイエット中の外食先として非常に優秀です。ただし、天ぷらの選び方次第で低カロリーにも高カロリーにもなる「両刃の剣」。このポイントを押さえれば安心です。
          </p>

          <CheckList
            items={[
              "かけうどん（並）305kcal・脂質1.5gが最強のダイエットメニュー",
              "うどんは低脂質が最大の強み。脂質制限ダイエットに最適",
              "天ぷらは「1個まで」。選ぶならかしわ天（P10.5g）でタンパク質補給",
              "野菜かき揚げ（250kcal）は絶対に避ける。見た目ヘルシーでもNG",
              "天かすの盛りすぎに注意。無料でもカロリーはゼロではない",
              "タンパク質不足は温泉たまごや前後の食事で補う",
              "冷たいうどん（ぶっかけ冷）はレジスタントスターチの面でも有利",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は丸亀製麺公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
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
