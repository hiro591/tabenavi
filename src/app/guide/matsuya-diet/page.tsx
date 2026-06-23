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
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/matsuya-diet" },
  title:
    "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較、PFCバランスで選ぶ食べ方を徹底解説。松屋で太らない注文法がわかります。",
  keywords: [
    "松屋 ダイエット",
    "松屋 カロリー",
    "松屋 低カロリー",
    "松屋 太らない",
    "松屋 定食 カロリー",
  ],
  openGraph: {
    title: "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較を徹底解説。",
    url: "https://www.tabenavi.jp/guide/matsuya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較を徹底解説。",
  datePublished: "2026-03-19",
  dateModified: "2026-06-22",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/matsuya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "teishoku-vs-don", label: "定食 vs 丼の比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function MatsuyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="松屋でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=400&fit=crop"
        breadcrumb="松屋ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="matsuya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          松屋は牛丼チェーンの中でも<Marker>定食メニューが充実している</Marker>のが特徴です。みそ汁が無料で付いてくるのも嬉しいポイント。実は定食スタイルを活用することで、ダイエット中でも栄養バランスの良い食事が可能です。
        </p>
        <p className="mb-4">
          カロリーを抑えたいなら、ご飯を外した<Marker color="blue">牛皿（並）（299kcal）</Marker>や、丼の中で最も軽い<Marker color="blue">牛めし（小盛）（507kcal）</Marker>がおすすめ。一方で牛焼肉定食は806kcal、牛めし大盛は933kcalとハイカロリーです。メニュー選びで600kcal以上の差がつくため、正しい知識が大切です。
        </p>
        <p className="mb-8">
          この記事では、松屋のメニューをカロリー低い順にランキングし、定食と丼の賢い使い分け方を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=400&fit=crop" alt="和食の定食イメージ" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
                  <QuickAnswer
          question={"松屋でダイエット向きのメニューは何ですか？"}
          answer={"松屋は無料みそ汁と定食メニューが充実しており、ダイエット向きです。カロリーを抑えたいなら、ご飯を外した牛皿（並）（299kcal）がおすすめ。牛皿+みそ汁+生野菜でも約358kcal、糖質は約14gと低糖質に収まります。丼で食べるなら最も軽い牛めし（小盛）（507kcal）を基本サイズにすると、並盛（687kcal）より約180kcal抑えられます。"}
        />

        <SectionHeading id="calorie-ranking">松屋メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            松屋の主要メニューをカロリーの低い順に並べました。<Marker color="blue">小盛や牛皿（ご飯抜き）を活用する</Marker>のがカロリーコントロールの鍵です。
          </p>

          <NutritionTable
            items={[
              { name: "ミニ牛皿", calories: 160, protein: 5.3, fat: 14.3, carbs: 2.6, highlight: true },
              { name: "豚汁", calories: 243, protein: 9.2, fat: 14.9, carbs: 17.6, highlight: true },
              { name: "牛皿（並）", calories: 299, protein: 9.8, fat: 26.9, carbs: 4.3, highlight: true },
              { name: "牛皿（大盛）", calories: 377, protein: 12.4, fat: 33.7, carbs: 6.0 },
              { name: "牛めし（小盛）", calories: 507, protein: 13.1, fat: 22.8, carbs: 59.6, highlight: true },
              { name: "牛めし（並）", calories: 687, protein: 17.1, fat: 28.9, carbs: 85.5 },
              { name: "創業ビーフカレー", calories: 769, protein: 17.9, fat: 28.8, carbs: 102.8 },
              { name: "牛焼肉定食", calories: 806, protein: 23.3, fat: 41.3, carbs: 86.5 },
              { name: "豚ロースグリル定食", calories: 810, protein: 31.9, fat: 32.5, carbs: 89.4 },
              { name: "ネギたっぷり旨辛ネギたま牛めし（並盛）", calories: 818, protein: 24.7, fat: 36.2, carbs: 94.1 },
              { name: "牛めし（大盛）", calories: 933, protein: 22.3, fat: 35.9, carbs: 124.3 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は松屋公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="松屋ならではのポイント">
            <p>松屋は<Marker>みそ汁（35kcal）が無料</Marker>で付いてきます。みそ汁を食事の最初に飲むことで満腹感が得やすくなり、食べ過ぎを防止できます。また、具だくさんの豚汁（243kcal）への変更も可能で、満足感が高くおすすめです。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーと<Marker>PFCバランス</Marker>を考慮した、松屋のダイエット向けメニューベスト3を紹介します。
          </p>

          <RankingCard rank={1} title="牛皿（並）+ みそ汁" subtitle="合計 約334kcal / P11.6g / F28.2g / C8.0g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">ご飯を完全にカットして牛皿単品+無料みそ汁</Marker>という組み合わせ。糖質制限中の方にはこれがベスト。糖質わずか約8gで、しっかりとしたおかずを楽しめます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              物足りなさを感じたら生野菜（24kcal）を追加しても約358kcal。脂質はやや高めですが、糖質を抑えたい日に向いた組み合わせです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="牛めし（小盛）" subtitle="507kcal / P13.1g / F22.8g / C59.6g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              丼で食べたいなら<Marker>最も軽い小盛を選ぶのが鉄則</Marker>。並盛（687kcal）から約180kcalカットでき、ご飯の量が控えめになることで炭水化物も削減できます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              価格も並盛より安く、お財布にも優しい選択。みそ汁無料と合わせて、コスパの良いダイエット食になります。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="豚ロースグリル定食" subtitle="810kcal / P31.9g / F32.5g / C89.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「がっつり食べたい日」はこの定食。カロリーは810kcalと高めですが、<Marker color="green">タンパク質31.9gと高タンパク</Marker>。同じくらいのカロリー帯の牛焼肉定食（P23.3g/F41.3g）より脂質が約9g少なくタンパク質も多いため、筋トレ後の食事や1日のメインにするなら有力な選択です。定食なので野菜も摂れます。
            </p>
          </RankingCard>

          <ArticleImage src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop" alt="ヘルシーな和食プレート" />
        </section>

        {/* Section 3: 定食 vs 丼の比較 */}
        <section className="mb-16">
          <SectionHeading id="teishoku-vs-don">定食 vs 丼：どちらがダイエット向き？</SectionHeading>

          <p className="mb-6">
            松屋の強みは定食メニューの充実度。<Marker>同じ肉量でも「丼」と「定食」で栄養バランスが大きく変わります</Marker>。
          </p>

          <ComparisonTable
            headers={["比較項目", "牛めし（丼）並", "牛焼肉定食"]}
            rows={[
              ["カロリー", "687 kcal", "806 kcal"],
              ["タンパク質", "17.1g", "23.3g"],
              ["脂質", "28.9g", "41.3g"],
              ["炭水化物", "85.5g", "86.5g"],
              ["野菜", "少ない", "生野菜付き"],
              ["みそ汁", "無料付き", "無料付き"],
            ]}
          />

          <p className="mb-4">
            カロリーだけで見ると牛めし並の方が低いですが、<Marker color="blue">定食はタンパク質が約1.4倍</Marker>。定食には生野菜が付くため、食物繊維やビタミンも摂取できます。ただし牛焼肉定食は脂質41.3gと高めなので、脂質を抑えたい場合は豚ロースグリル定食（F32.5g）の方が向いています。
          </p>

          <TipBox title="定食の賢い活用法">
            <p>定食のご飯を<Marker>「ミニ盛」に変更</Marker>することで、カロリーを抑えられます。タンパク質はそのままで糖質だけをカットできるため、ダイエット中こそ定食+ご飯ミニ盛がおすすめの組み合わせです。</p>
          </TipBox>

          <SubSectionHeading>松屋で使える裏技：「ご飯少なめ」</SubSectionHeading>

          <p className="mb-4">
            松屋では券売機で牛めしの「小盛」を選べるほか、口頭で「ご飯少なめ」とお願いすることも可能です。<Marker color="green">ご飯の量を減らすことでカロリーをカットできます</Marker>。定食メニューでも活用できるので積極的に使いましょう。
          </p>

          <SubSectionHeading>定食メニューの詳細比較</SubSectionHeading>

          <p className="mb-4">
            松屋の定食メニューをPFCバランスの観点から比較しました。<Marker>脂質とタンパク質のバランスに注目</Marker>して選ぶと、より効果的なダイエットが可能です。
          </p>

          <ComparisonTable
            headers={["定食メニュー", "カロリー", "タンパク質", "脂質", "P/F比"]}
            rows={[
              ["豚ロースグリル定食", "810 kcal", "P 31.9g", "F 32.5g", "0.98"],
              ["トンテキ定食", "899 kcal", "P 33.6g", "F 35.3g", "0.95"],
              ["牛焼肉定食", "806 kcal", "P 23.3g", "F 41.3g", "0.56"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            P/F比（タンパク質/脂質）が最も高いのは豚ロースグリル定食。<Marker color="blue">脂質を抑えながらタンパク質をしっかり摂取</Marker>できるため、筋トレ中の方やローファットダイエット中の方に最もおすすめの定食です。
          </p>

          <p className="mb-4">
            逆に、牛焼肉定食はP/F比が0.56と脂質がタンパク質を大きく上回ります。同じくらいのカロリーでも<Marker>豚ロースグリル定食を選ぶだけで脂質を約9g抑え、タンパク質を約8g増やせます</Marker>。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="松屋のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            松屋にも<Marker>800kcalを超える高カロリーメニュー</Marker>が存在します。知らずに注文すると1食でカロリーオーバーになりかねません。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛めし（大盛）（933kcal）</span> ─ 並（687kcal）から+246kcal。ご飯の量が大幅に増え、炭水化物124.3gに。</li>
              <li><span className="font-bold">ネギたっぷり旨辛ネギたま牛めし（並盛）（818kcal）</span> ─ トッピングの卵とソースでカロリーが上乗せ。名前の印象ほどヘルシーではありません。</li>
              <li><span className="font-bold">牛焼肉定食（806kcal）</span> ─ タンパク質23.3gは取れるが脂質が41.3gと高い。脂質を抑えたいなら豚ロースグリル定食（F32.5g）の方がまし。</li>
              <li><span className="font-bold">チーズ創業ビーフカレー（938kcal）</span> ─ カレーはルウに脂質と糖質が凝縮。チーズが加わると900kcal超えに。</li>
              <li><span className="font-bold">うまトマハンバーグ定食（986kcal）</span> ─ ハンバーグ＋ソースで脂質39.7g・炭水化物112.5gと高め。食べるなら頻度を抑えて。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイドメニューの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">炙りチーズポテト（128kcal）・ポテサラ（92kcal）</span> ─ 揚げ物・芋系サイドは脂質が高め。生野菜（24kcal）に変更を。</li>
              <li><span className="font-bold">創業ビーフカレー（769kcal）に牛皿を追加</span> ─ 牛皿（並・299kcal）を足すと1,000kcal超え。お得に見えてもカロリー的には大損です。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">松屋ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            松屋ならではの<Marker>無料みそ汁や定食システムを活用</Marker>した、ダイエット向きの食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "まずみそ汁から飲む",
                body: "松屋の無料みそ汁（35kcal）を食事の最初に飲むことで、胃が温まり満腹感を感じやすくなります。これだけで自然と食べ過ぎを防止。豚汁（243kcal）に変更すれば具材で満足感もアップします。",
              },
              {
                title: "丼は小盛を基本にする",
                body: "牛めしは小盛（507kcal）を基本サイズに。並（687kcal）より約180kcal低く、物足りなければ生野菜（24kcal）を追加しても合計約531kcalに収まります。",
              },
              {
                title: "定食のご飯を「少なめ」に",
                body: "定食メニューを注文する際、ご飯を少なめにお願いしましょう。タンパク質量はそのままで、炭水化物と総カロリーだけをカットできる賢い方法です。",
              },
              {
                title: "丼より定食スタイルを選ぶ",
                body: "定食はおかずとご飯が分かれているため、ご飯の量を調整しやすい。また野菜サラダが付くので栄養バランスも優れています。丼はご飯量のコントロールが難しいのがデメリット。",
              },
              {
                title: "ドレッシングとソースは控えめに",
                body: "サラダのドレッシングや焼肉のタレは意外とカロリーが高い。ドレッシングは半量にする、タレは別皿にしてつけながら食べるなどの工夫で、50〜100kcal程度の節約が可能です。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスの良い食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛皿（並） + 無料みそ汁 + 生野菜", "約358 kcal", "P 12.8g"],
              ["バランス型", "牛めし（小盛） + 生野菜", "約531 kcal", "P 14.3g"],
              ["高タンパク", "豚ロースグリル定食", "810 kcal", "P 31.9g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker>「牛皿（並）+みそ汁+生野菜」なら約358kcalでP約13g、糖質は約14g</Marker>。糖質制限ダイエット中の方に向いた組み合わせです。みそ汁が無料なのは松屋ならではのメリットです。
          </p>

          <SubSectionHeading>PFCバランスで見る松屋メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（糖質制限・ローファット・カロリー制限）によって、<Marker>松屋で選ぶべきメニューは変わります</Marker>。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "牛皿（並） + みそ汁", "約334 kcal", "糖質約8gの低糖質"],
              ["ローファット", "豚ロースグリル定食", "810 kcal", "P31.9gで定食内では脂質控えめ"],
              ["カロリー制限", "牛皿（並）", "299 kcal", "手軽に300kcal前後"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            松屋は定食メニューが充実しているため、<Marker color="blue">高タンパク食との相性が良い</Marker>のが特徴です。豚ロースグリル定食は同カロリー帯の牛焼肉定食より脂質が控えめで、ご飯を少なめにすればさらに糖質を抑えつつ高タンパクな食事に近づけられます。
          </p>

          <TipBox title="松屋を週間プランに組み込む">
            <p>松屋を週3回利用する場合のおすすめローテーション：月曜＝牛めし（小盛）（507kcal）、水曜＝牛皿（並）+みそ汁（約334kcal）、金曜＝豚ロースグリル定食（810kcal、ご飯少なめでさらに低減）。<Marker>同じチェーンでも注文を変えることで飽きを防ぎ、栄養バランスも整います</Marker>。</p>
          </TipBox>

          <SubSectionHeading>松屋 vs 他チェーンの比較</SubSectionHeading>

          <p className="mb-4">
            牛丼3大チェーン（吉野家・松屋・すき家）の中で、松屋のダイエット上の強みは以下の3点です。
          </p>

          <CheckList
            items={[
              "みそ汁無料 ─ 食事の最初に飲んで満腹感を高められる（他チェーンは有料）",
              "定食メニューが充実 ─ 野菜サラダ付きで栄養バランスが良い",
              "券売機でミニ盛を選択 ─ 口頭で伝える必要がなく確実にカロリーカット",
            ]}
          />
        </section>

        <AffiliateProductGrid
          title="松屋通いに加えたい家のタンパク補給"
          productIds={["myprotein-impact", "tuna-can", "salada-chicken-pack", "shaker-bottle"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            松屋は無料みそ汁と定食メニューを活用することで、ダイエット中でもバランスの良い食事ができます。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "牛めし（小盛）（507kcal）を基本サイズにするだけで並（687kcal）より約180kcalカット",
              "牛皿（並）+みそ汁+生野菜で約358kcal・糖質約14gの低糖質セットが完成",
              "定食はご飯を「少なめ」にしてタンパク質を維持しつつ糖質カット",
              "丼より定食スタイルの方が栄養バランスに優れている",
              "まずみそ汁から飲んで満腹感を高め、食べ過ぎを防止",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は松屋公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="matsuya-diet"
          items={[
            { q: "松屋のカロリーが最も低い食事メニューは何ですか？", a: "牛皿系ではミニ牛皿が160kcal、豚汁が243kcal、牛皿（並）が299kcalと低めです。丼では牛めし（小盛）が507kcalで最も軽くなります。豚汁は具が多く満足感も高いため、単品やメイン前の一品としておすすめです。" },
            { q: "松屋の牛めし（並）と定食メニューの違いは何ですか？", a: "牛めし（並）は687kcal・タンパク質17.1gに対し、牛焼肉定食は806kcalでタンパク質23.3gと約1.4倍。定食には生野菜も付き栄養バランスが優れています。ただし牛焼肉定食は脂質41.3gと高めなので、脂質を抑えたい場合は豚ロースグリル定食（810kcal/F32.5g/P31.9g）が向いています。" },
            { q: "ダイエット中に避けるべき松屋のメニューは何ですか？", a: "牛めし（大盛）（933kcal）、ネギたっぷり旨辛ネギたま牛めし（並盛）（818kcal）、牛焼肉定食（806kcal・脂質41.3g）は高カロリー・高脂質です。また、創業ビーフカレー（769kcal）に牛皿を追加すると1,000kcal超えになるため避けましょう。" },
            { q: "松屋でご飯の量を調整する方法はありますか？", a: "牛めしは券売機で「小盛」を選ぶか、口頭で「ご飯少なめ」と注文できます。牛めしを並（687kcal）から小盛（507kcal）にすると約180kcalカットになり、定食系でもご飯少なめが可能でおすすめです。" },
            { q: "松屋ダイエットで満腹感を高めるコツは何ですか？", a: "無料のみそ汁（35kcal）を食事の最初に飲むことが重要。胃が温まり満腹感を感じやすくなります。豚汁（243kcal）に変更すれば具材で更に満足感が高まります。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "実在しない数値・メニュー（牛めしミニ盛380kcal、豚肩ロース焼肉定食710kcal、カルビ焼肉定食756kcal、カレー大盛920kcal、フライドポテト320kcal等）を全面修正。牛皿（並）299kcal・牛めし（小盛）507kcal・牛めし（並）687kcal・牛焼肉定食806kcal・豚ロースグリル定食810kcal・豚汁243kcal・みそ汁35kcalなど、最新の公式栄養成分（DB実値）に統一。ランキング・比較表・QuickAnswer・FAQ・まとめを更新" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="matsuya-diet" />

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
