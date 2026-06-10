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
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/gusto-diet" },
  title:
    "【2026年最新】ガストダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "ガストのカロリーランキング、ダイエット中におすすめの低カロリーメニュー、注文テクニックを徹底解説。チキテキ645kcal・P33.5g、ベジ塩タンメン460kcalなど具体的な栄養データで紹介。",
  keywords: [
    "ガスト ダイエット",
    "ガスト カロリー",
    "ガスト 低カロリー",
    "ガスト タンパク質",
    "ガスト 筋トレ",
  ],
  openGraph: {
    title: "【2026年最新】ガストダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "ガストのカロリーランキング、ダイエット中におすすめの低カロリーメニュー、注文テクニックを徹底解説。",
    url: "https://www.tabenavi.jp/guide/gusto-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ガストダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "ガストのカロリーランキング、ダイエット中におすすめの低カロリーメニュー、注文テクニックを徹底解説。",
  datePublished: "2026-03-19",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/gusto-diet",
};

const tocItems = [
  { id: "why-gusto", label: "ガストがダイエットに向いてる理由" },
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめメニュー" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "order-tips", label: "注文テクニック" },
  { id: "summary", label: "まとめ" },
];

export default function GustoDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data for SEO - uses only static trusted content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ガストダイエットガイド"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop"
        breadcrumb="ガストダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="gusto-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          ガストは全国に約1,300店舗を展開するファミリーレストランチェーンです。メニューの幅広さとリーズナブルな価格が魅力ですが、実は<Marker>ダイエット中の外食先としても非常に優秀</Marker>。サラダ・グリル・麺類まで、低カロリーな選択肢が豊富に揃っています。
        </p>
        <p className="mb-4">
          特に注目は<Marker color="blue">チキテキ・ピリ辛スパイス焼き（645kcal / P33.5g）</Marker>。ファミレスの定食メニューとしてはトップクラスの高タンパクで、筋トレ中の方にも人気があります。
        </p>
        <p className="mb-8">
          この記事では、ガストのメニューをカロリー順にランキングし、ダイエット中におすすめのメニューと注文テクニックをPFCデータとともに徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: ガストがダイエットに向いてる理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ガストのダイエット向きメニューはどれですか？"}
          answer={"ガストのダイエット向きメニューは、チキテキ・ピリ辛スパイス焼き（645kcal/タンパク質33.5g）、1日分の野菜のベジ塩タンメン（460kcal）、若鶏のグリル大葉おろし（478kcal/タンパク質30.2g）が上位3つです。特にタンパク質とカロリーのバランスが優れており、ライスを抜いたり単品を組み合わせることで、さらにカロリーをコントロールできます。"}
        />

        <SectionHeading id="why-gusto">ガストがダイエットに向いてる理由</SectionHeading>

          <p className="mb-4">
            数あるファミレスの中でも、ガストがダイエットに向いている理由は主に3つあります。
          </p>

          <NumberedList
            items={[
              {
                title: "メニュー数が圧倒的に多い",
                body: "和食・洋食・中華・サラダとジャンルが豊富。気分に合わせて低カロリーメニューを選べるため、飽きずに続けやすいのが最大の強みです。",
              },
              {
                title: "タッチパネルでカロリー確認可能",
                body: "ガストのタッチパネル注文画面ではカロリー表示が確認できます。注文前に数値をチェックできるため、衝動的な高カロリー注文を防げます。",
              },
              {
                title: "ライス量の調整が簡単",
                body: "ライスの大盛り・普通・小盛りが無料で選べ、さらにライス抜きも可能。炭水化物の量を細かくコントロールできるのはダイエットの強い味方です。",
              },
            ]}
          />

          <TipBox title="ガスト vs 他ファミレスのダイエット比較">
            <p>ガストは<Marker>サイゼリヤと並んでダイエット向きファミレスの双璧</Marker>。サイゼリヤはコスパ重視、ガストはメニューの幅広さが強み。デニーズやジョナサンよりも低価格帯のメニューが多く、財布にも優しいのが特徴です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop" alt="レストランのテーブルに並ぶ彩り豊かな料理" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">ガスト カロリーランキング</SectionHeading>

          <p className="mb-4">
            ガストの主要メニューをカロリーの低い順にランキングしました。<Marker color="blue">サラダ系は100〜200kcal台、メイン料理は400〜700kcal台</Marker>と幅広く分布しています。
          </p>

          <NutritionTable
            items={[
              { name: "シーザーサラダ", calories: 176, protein: 4.8, fat: 14.2, carbs: 7.5, highlight: true },
              { name: "山盛りポテトフライ", calories: 358, protein: 4.2, fat: 18.5, carbs: 42.8 },
              { name: "1日分の野菜のベジ塩タンメン", calories: 460, protein: 15.2, fat: 12.8, carbs: 68.5, highlight: true },
              { name: "海老と山芋オクラのねばとろサラダうどん", calories: 418, protein: 18.5, fat: 8.2, carbs: 65.8, highlight: true },
              { name: "若鶏のグリル（大葉おろし）", calories: 478, protein: 30.2, fat: 28.5, carbs: 18.4 },
              { name: "チキテキ・ピリ辛スパイス焼き", calories: 645, protein: 33.5, fat: 38.2, carbs: 35.8 },
              { name: "ハンバーグステーキ", calories: 572, protein: 22.8, fat: 35.2, carbs: 38.5 },
              { name: "マルゲリータピザ", calories: 538, protein: 18.5, fat: 22.4, carbs: 62.8 },
              { name: "ミックスグリル", calories: 698, protein: 35.8, fat: 42.5, carbs: 38.2 },
              { name: "チーズINハンバーグ", calories: 712, protein: 28.5, fat: 45.2, carbs: 42.8 },
              { name: "ビーフシチューハンバーグ", calories: 758, protein: 26.2, fat: 42.8, carbs: 58.5 },
              { name: "からあげ定食", calories: 842, protein: 28.8, fat: 38.5, carbs: 88.2 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は公式情報を基に作成。セットメニューはライス・味噌汁込みの数値。おすすめマークはダイエット向きメニューに表示。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p><Marker>400kcal台のメニューが「ダイエット合格ライン」</Marker>。ベジ塩タンメン（460kcal）やサラダうどん（418kcal）は野菜もしっかり摂れて満足感が高い。逆にハンバーグ系は600〜750kcalと高めなので、ライス抜き or サラダセットに変更するなどの工夫が必要です。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめメニュー</SectionHeading>

          <p className="mb-6">
            ガストでダイエット中に積極的に選びたいメニューをランキング形式で紹介します。<Marker>カロリーとタンパク質のバランスが優れたメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="チキテキ・ピリ辛スパイス焼き" subtitle="645kcal / P33.5g / F38.2g / C35.8g / ¥879">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ガストの<Marker>タンパク質No.1メニュー</Marker>。ピリ辛スパイスで味付けされた大きなチキンステーキは、P33.5gと非常に高タンパク。ライス抜きで注文すれば約500kcal・C10g程度まで抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              脂質38.2gとやや高めですが、チキンの脂質は良質な不飽和脂肪酸を含むため、トレーニング後の栄養補給にも適しています。ガスト筋トレ飯の定番です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="1日分の野菜のベジ塩タンメン" subtitle="460kcal / P15.2g / F12.8g / C68.5g / ¥769">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">460kcalで1日分の野菜350gが摂れる</Marker>という驚異的な栄養バランス。キャベツ・もやし・にんじん・コーンなどの野菜がたっぷりで、食物繊維も豊富。ダイエット中に不足しがちなビタミン・ミネラルも補給できます。タンパク質は15.2gとやや控えめなので、追加でサイドメニューを組み合わせるのがベスト。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="若鶏のグリル（大葉おろし）" subtitle="478kcal / P30.2g / F28.5g / C18.4g / ¥769">
            <p className="text-sm text-gray-700 leading-relaxed">
              大葉おろしのさっぱりした味わいが人気の鶏グリル。<Marker color="green">478kcalでP30.2g、炭水化物わずか18.4g</Marker>と、低糖質ダイエットに最適なバランス。ライスなしでも十分満足できる味付けです。
            </p>
          </RankingCard>

          <SubSectionHeading>番外編：海老と山芋オクラのねばとろサラダうどん</SubSectionHeading>

          <NutritionCard
            name="海老と山芋オクラのねばとろサラダうどん"
            chain="ガスト"
            calories={418}
            protein={18.5}
            fat={8.2}
            carbs={65.8}
            price={769}
            recommended
          />

          <p className="mb-4 mt-4">
            <Marker>418kcalで脂質わずか8.2g</Marker>というガスト随一の低脂質メニュー。ネバネバ食材で食物繊維も豊富。脂質制限ダイエットをしている方には特におすすめです。夏場の食欲がない日にもさっぱり食べられます。
          </p>

          <SubSectionHeading>目的別おすすめ組み合わせ</SubSectionHeading>

          <ComparisonTable
            headers={["目的", "組み合わせ", "カロリー", "タンパク質"]}
            rows={[
              ["低カロリー重視", "ベジ塩タンメン単品", "460 kcal", "15.2g"],
              ["高タンパク重視", "チキテキ（ライスなし）+ サラダ", "571 kcal", "38.3g"],
              ["バランス重視", "若鶏グリル + ライス小盛り", "598 kcal", "32.5g"],
              ["低脂質重視", "サラダうどん単品", "418 kcal", "18.5g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-8">
            <Marker color="green">目的に合わせて組み合わせを変えるのがガストダイエットの上級者</Marker>。トレーニングした日は高タンパク、休息日は低カロリー、と使い分けることで無理なくダイエットを継続できます。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="新鮮な野菜がたっぷり入ったヘルシーな料理" />

          <CTABanner
            title="ガストのカロリーをサクッと検索"
            subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
          />
        </section>

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            ガストのメニューの中には、<Marker>1食で800kcalを超える高カロリーメニュー</Marker>も存在します。ダイエット中はこれらを避けるか、食べ方を工夫しましょう。
          </p>

          <WarningBox title="ダイエット中は要注意なメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">からあげ定食（842kcal）</span> ─ ライス込みで842kcal、炭水化物88.2g。揚げ物 + 白米の組み合わせはダイエットの大敵。</li>
              <li><span className="font-bold">ビーフシチューハンバーグ（758kcal）</span> ─ シチューソースが高脂質で脂質42.8g。炭水化物58.5gもありカロリーオーバーしやすい。</li>
              <li><span className="font-bold">チーズINハンバーグ（712kcal）</span> ─ チーズ追加で脂質45.2g。同じハンバーグなら通常のハンバーグステーキの方が140kcal低い。</li>
              <li><span className="font-bold">山盛りポテトフライ（358kcal）</span> ─ タンパク質わずか4.2gで炭水化物42.8g。サイドメニューとして最も避けるべき一品。</li>
              <li><span className="font-bold">マルゲリータピザ（538kcal）</span> ─ 炭水化物62.8gとほぼ糖質の塊。シェアして食べるなら許容範囲ですが、1人で1枚は避けましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["若鶏のグリル（大葉おろし）", "478 kcal", "30.2g", "28.5g"],
              ["チーズINハンバーグ", "712 kcal", "28.5g", "45.2g"],
              ["からあげ定食", "842 kcal", "28.8g", "38.5g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6 text-sm text-gray-700">
            タンパク質はほぼ同じ（28〜30g台）なのに、<Marker>カロリーは478kcal vs 842kcalと約1.8倍の差</Marker>。同じ「お肉メニュー」でも選択次第で大きく変わります。
          </p>

          <TipBox title="ハンバーグ好きのための妥協案">
            <p>どうしてもハンバーグが食べたい場合は、<Marker>通常のハンバーグステーキ（572kcal）をライスなしで注文</Marker>しましょう。約322kcal / P22.8gまでカットできます。チーズIN（712kcal）やビーフシチュー（758kcal）よりも150〜200kcal低く、ハンバーグの満足感を得つつダイエットを維持できます。</p>
          </TipBox>
        </section>

        {/* Section 5: 注文テクニック */}
        <section className="mb-16">
          <SectionHeading id="order-tips">ガストで使える注文テクニック</SectionHeading>

          <p className="mb-6">
            ガストでダイエット効果を最大化するための注文テクニックを紹介します。<Marker>メニュー選びだけでなく「注文の仕方」で大きくカロリーが変わります</Marker>。
          </p>

          <SubSectionHeading>テクニック1：ライスをカットする</SubSectionHeading>
          <p className="mb-6">
            ガストのライス（普通盛り）は約250kcal / C55g。<Marker color="blue">ライスを抜くだけでメインのカロリーを大幅にカット</Marker>できます。例えばチキテキ・ピリ辛スパイス焼きはライス抜きで約395kcalに。どうしても炭水化物が欲しい場合は小盛り（約170kcal）を選びましょう。
          </p>

          <SubSectionHeading>テクニック2：セットをサラダセットに変更</SubSectionHeading>
          <p className="mb-6">
            定食セットのライス＋味噌汁を、<Marker color="green">サラダセットに変更するとカロリーを150〜200kcalカット</Marker>可能。シーザーサラダ（176kcal）に変更すれば野菜も摂れて一石二鳥です。タッチパネルから簡単に変更できます。
          </p>

          <SubSectionHeading>テクニック3：ドリンクバーの活用法</SubSectionHeading>
          <p className="mb-6">
            ガストのドリンクバーは約220円。<Marker>ブラックコーヒーや無糖の紅茶を中心に飲むことで、ゼロカロリーで水分補給</Marker>が可能。食前にコーヒーを飲むと食欲を抑える効果も期待できます。ジュースやカフェオレなどの甘い飲み物は1杯50〜80kcalあるので要注意。
          </p>

          <SubSectionHeading>テクニック4：単品の組み合わせで攻める</SubSectionHeading>
          <p className="mb-4">
            セットメニューではなく、単品を組み合わせるのがガストダイエットの上級テクニック。<Marker>「シーザーサラダ＋チキテキ（ライスなし）」なら合計約571kcal / P38.3g</Marker>と高タンパク低カロリーな食事が完成します。
          </p>

          <NutritionCard
            name="シーザーサラダ + チキテキ（ライスなし）"
            chain="ガスト"
            calories={571}
            protein={38.3}
            fat={52.4}
            carbs={43.3}
            price={1098}
            recommended
          />

          <p className="mb-4 mt-4">
            もう一つのおすすめパターンも紹介します。
          </p>

          <NutritionCard
            name="若鶏のグリル（ライスなし）+ ミニサラダ"
            chain="ガスト"
            calories={378}
            protein={31.5}
            fat={24.2}
            carbs={12.8}
            price={869}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker color="blue">378kcalでP31.5g、炭水化物わずか12.8g</Marker>。低糖質ダイエットをしている方にはこちらがベストな組み合わせです。価格も900円以下と手頃で、平日のランチにも使いやすいメニューです。
          </p>

          <WarningBox title="デザートの誘惑に注意">
            <p>ガストのデザートメニューは低価格で魅力的ですが、<Marker>パンケーキ（約580kcal）やパフェ（約450kcal）</Marker>を追加すると、せっかくの低カロリーメニュー選びが台無しに。どうしてもデザートが欲しい場合は、ソフトクリーム（約150kcal）に留めましょう。</p>
          </WarningBox>

          <TipBox title="お得なクーポンでさらにコスパUP">
            <p>ガストの公式アプリでは定期的にクーポンが配信されています。<Marker>チキテキやサラダのクーポンが出ていれば、通常より50〜100円安く</Marker>ダイエット食を楽しめます。毎回注文前にアプリをチェックする習慣をつけましょう。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスの良い食事のイメージ" />

          <CTABanner
            title="たべなびで栄養管理を始めよう"
            subtitle="32チェーン・6,000品以上の栄養データ、全部無料"
          />
        </section>

        <AffiliateProductGrid
          title="ファミレス常連の家計と栄養を救う4点"
          productIds={["ultora-whey", "low-carb-noodle", "tanita-scale", "miso-soup-pack"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ガストはメニューの選択肢が多く、ダイエット中の外食先として非常に優秀なファミレスです。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "チキテキ・ピリ辛スパイス焼き（645kcal / P33.5g）がタンパク質No.1メニュー",
              "ベジ塩タンメン（460kcal）は1日分の野菜が摂れる低カロリーメニュー",
              "若鶏のグリル大葉おろし（478kcal / P30.2g）は低糖質ダイエットに最適",
              "ライスを抜くだけで約250kcalカット。小盛りでも80kcal節約",
              "からあげ定食（842kcal）やチーズINハンバーグ（712kcal）は避ける",
              "サラダ + グリル系の単品組み合わせが最強のダイエット注文法",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はガスト公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="gusto-diet"
          items={[
            { q: "ガストでカロリーが最も低いメニューは？", a: "シーザーサラダの176kcalが最も低カロリーです。次いでベジ塩タンメン460kcal、サラダうどん418kcalと、サラダと麺類が低カロリー帯。ただしタンパク質量も重要なので、目的に応じた選択が大切です。" },
            { q: "ガストでタンパク質が多いメニューは何ですか？", a: "チキテキ・ピリ辛スパイス焼きが33.5gでNo.1。次点は若鶏のグリル大葉おろし30.2g。ライス抜きやサラダとの組み合わせで、500kcal台でタンパク質38g以上も達成可能です。" },
            { q: "ガストで避けるべきメニューは？", a: "からあげ定食842kcal、ビーフシチューハンバーグ758kcal、チーズINハンバーグ712kcalが高カロリーメニュー。同じお肉料理でも選択で大きく変わり、若鶏グリル478kcalとは最大約360kcalの差があります。" },
            { q: "ガストのライス抜き注文でどれくらいカロリーカット？", a: "ガストのライス普通盛りは約250kcal。ライス抜きで250kcal、小盛りで約80kcal節約できます。チキテキはライス抜きで約395kcalまで低減。炭水化物制限中も無料で選択可能です。" },
            { q: "ガストで最も低脂質のメニューは？", a: "海老と山芋オクラのねばとろサラダうどんが脂質8.2gで最も低い。418kcalで脂質が控えめ、かつ食物繊維も豊富。脂質制限ダイエット中に特におすすめです。" },
          ]}
        />

        <ArticleFooter currentSlug="gusto-diet" />

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
