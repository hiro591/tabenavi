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
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  CompareBar,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/gusto-diet" },
  title:
    "【2026年最新】ガストダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "ガストのカロリーランキング、ダイエット中におすすめの低カロリーメニュー、注文テクニックを徹底解説。蒸し鶏と彩り野菜のサラダ38kcal、ねばとろサラダうどん393kcal、チキテキスパイス焼き695kcalなど実カロリーデータで紹介。",
  keywords: [
    "ガスト ダイエット",
    "ガスト カロリー",
    "ガスト 低カロリー",
    "ガスト メニュー",
    "ガスト サラダ",
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
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          ガストは全国に約1,300店舗を展開するファミリーレストランチェーンです。メニューの幅広さとリーズナブルな価格が魅力ですが、実は<Marker>ダイエット中の外食先としても非常に優秀</Marker>。サラダ・グリル・麺類まで、低カロリーな選択肢が豊富に揃っています。
        </p>
        <p className="mb-4">
          特に注目は<Marker color="blue">蒸し鶏と彩り野菜のサラダ（S・38kcal）</Marker>や<Marker color="blue">ねばとろサラダうどん（393kcal）</Marker>。野菜やさっぱり系の選択肢が多く、メイン料理を選ぶ際もカロリーで比較しやすいのが強みです。
        </p>
        <p className="mb-8">
          この記事では、ガストのメニューをカロリー順にランキングし、ダイエット中におすすめのメニューと注文テクニックを実カロリーデータとともに解説します。
        </p>

        <TipBox title="この記事の数値について">
          <p>本記事のカロリーは、たべなびが収録するガストの公開メニューデータに基づきます。ガストはタンパク質・脂質・炭水化物（PFC）の公式値が公開されていないため、<Marker>本記事ではPFCの断定値は使わず、カロリーを基準に</Marker>メニューを比較しています。栄養成分は店舗・時期により変わる場合があるため、最新情報は公式でご確認ください。</p>
        </TipBox>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: ガストがダイエットに向いてる理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ガストのダイエット向きメニューはどれですか？"}
          answer={"カロリーで見ると、蒸し鶏と彩り野菜のサラダ（S・38kcal）や海老アボカドと彩り野菜のサラダ（S・74kcal）といったサラダ系が最も低カロリーです。食事として満足感のある一品なら、ねばとろサラダうどん（393kcal）や赤身ビーフステーキ約100g（423kcal）が選びやすい候補。ライスを少なめライス（165kcal）にしたり、サラダを組み合わせることでカロリーをコントロールできます。"}
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
            ガストの代表的なメニューをカロリーの低い順に並べました。<Marker color="blue">サラダ系は数十kcal、定食・グリル系のメインは400〜900kcal台</Marker>と幅広く分布しています。
          </p>

          <CompareBar
            title="ガスト 主要メニュー カロリー比較（低い順）"
            items={[
              { name: "蒸し鶏と彩り野菜のサラダ（S）", value: 38 },
              { name: "海老アボカドと彩り野菜のサラダ（S）", value: 74 },
              { name: "ねばとろサラダうどん", value: 393 },
              { name: "赤身ビーフステーキ 約100g", value: 423 },
              { name: "ミートドリア", value: 459 },
              { name: "若鶏の唐揚げ（5コ）", value: 483 },
              { name: "THE職人ビーフハンバーグ", value: 593 },
              { name: "ジューシー若鶏グリル大葉おろし", value: 660 },
              { name: "チキテキスパイス焼き", value: 695 },
              { name: "鉄板ハンバーグミックスグリル", value: 729 },
              { name: "マルゲリータピザ", value: 892 },
            ]}
            unit="kcal"
            metric="calorie"
            sort="asc"
            highlightTop={2}
            caption="※カロリーはたべなび収録データに基づく。定食・ランチセットはライス等を含む数値。ガストはPFC公式値が非公開のため本記事はカロリー基準で比較しています。"
          />

          <TipBox title="カロリーランキングの読み解き方">
            <p><Marker>400kcal前後のメニューが「ダイエット合格ライン」</Marker>。ねばとろサラダうどん（393kcal）や赤身ビーフステーキ約100g（423kcal）は満足感が高め。一方でマルゲリータピザ（892kcal）や鉄板ハンバーグミックスグリル（729kcal）は高めなので、サラダを足して分け合う、ライスを少なめにするなどの工夫が役立ちます。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめメニュー</SectionHeading>

          <p className="mb-6">
            ガストでダイエット中に積極的に選びたいメニューをランキング形式で紹介します。<Marker>カロリーを抑えつつ満足感が得られるメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="ねばとろサラダうどん" subtitle="393kcal">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              食事としてしっかり満足できるのに<Marker>393kcalに収まる</Marker>のが魅力。ネバネバ食材や野菜が入っており、さっぱり食べられます。夏場の食欲がない日にもおすすめの一品です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              さらにカロリーを抑えたい日はサラダ単品を、しっかり食べたい日は麺1.5倍（503kcal）を、と気分や目的で調整しやすいのもポイントです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="赤身ビーフステーキ 約100g" subtitle="423kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">423kcalと、ステーキながら抑えめのカロリー</Marker>。脂の少ない赤身肉で食べ応えがあり、ライスを少なめライス（165kcal）にすれば全体で600kcal前後にまとめられます。ボリュームを確保したい日に向いた選択肢です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ミートドリア" subtitle="459kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              ガストの定番ドリアでも<Marker color="green">459kcal</Marker>と比較的おさえめ。1品で満足感があり、サイドにサラダ（蒸し鶏と彩り野菜のサラダS・38kcalなど）を足しても合計500kcal前後に収まります。
            </p>
          </RankingCard>

          <SubSectionHeading>番外編：サラダ系の低カロリー候補</SubSectionHeading>

          <CompareBar
            title="ガスト 低カロリーなサラダ（カロリー目安）"
            items={[
              { name: "ゴロゴロ野菜サラダ", value: 24 },
              { name: "トマトのグリーンサラダ", value: 39 },
              { name: "蒸し鶏と彩り野菜のサラダ（S）", value: 38 },
              { name: "海老アボカドと彩り野菜のサラダ（S）", value: 74 },
              { name: "蒸し鶏と彩り野菜のサラダ（L）", value: 76 },
            ]}
            unit="kcal"
            metric="calorie"
            sort="asc"
            highlightTop={1}
          />

          <p className="mb-4 mt-4">
            <Marker>数十kcal台</Marker>のサラダがそろっています。メインに付け合わせる、あるいはセットのライスと置き換える形で使うと、全体のカロリーを大きく抑えられます。
          </p>

          <SubSectionHeading>目的別おすすめ組み合わせ（カロリー目安）</SubSectionHeading>

          <ComparisonTable
            headers={["目的", "組み合わせ", "カロリー目安"]}
            rows={[
              ["とにかく低カロリー", "蒸し鶏と彩り野菜のサラダ（S）単品", "約 38 kcal"],
              ["さっぱり1品で", "ねばとろサラダうどん単品", "約 393 kcal"],
              ["ボリューム重視", "赤身ビーフステーキ約100g + 少なめライス", "約 588 kcal"],
              ["メイン+野菜を足す", "ミートドリア + 蒸し鶏サラダ（S）", "約 497 kcal"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-8">
            <Marker color="green">目的に合わせて組み合わせを変えるのがガストダイエットの上級者</Marker>。しっかり食べたい日はステーキやドリア、軽く済ませたい日はサラダやサラダうどん、と使い分けることで無理なく継続できます。
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
              <li><span className="font-bold">マルゲリータピザ（892kcal）</span> ─ ガストでも高カロリーな一品。1人で1枚は避け、シェアして食べるのが無難です。</li>
              <li><span className="font-bold">おろしから揚げ定食 3個（857kcal）</span> ─ 揚げ物 + 白米の組み合わせで高カロリー。から好し定食3個（813kcal）も同様に高めです。</li>
              <li><span className="font-bold">鉄板ハンバーグミックスグリル（729kcal）</span> ─ 複数のお肉が乗る分カロリーが上がります。ハンバーグ単品より高めです。</li>
              <li><span className="font-bold">チキテキスパイス焼きランチ（ライス付き・942kcal）</span> ─ ランチセットはライス込みで900kcal超。単品のチキテキ（695kcal）とは別物なので注意。</li>
              <li><span className="font-bold">山盛りポテトフライ（570kcal）</span> ─ サイドメニューながら高カロリー。少量で済ませたいならちょい盛りポテトフライ（195kcal）が無難です。</li>
            </ul>
          </WarningBox>

          <CompareBar
            title="「お肉メイン」のカロリー差を見る"
            items={[
              { name: "赤身ビーフステーキ 約100g", value: 423 },
              { name: "若鶏の唐揚げ（5コ）", value: 483 },
              { name: "チーズINハンバーグ", value: 591 },
              { name: "鉄板ハンバーグミックスグリル", value: 729 },
              { name: "おろしから揚げ定食 3個", value: 857 },
            ]}
            unit="kcal"
            metric="calorie"
            sort="asc"
            highlightTop={1}
          />

          <p className="mb-6 text-sm text-gray-700">
            同じ「お肉メニュー」でも、<Marker>赤身ビーフステーキ約100g（423kcal）とおろしから揚げ定食3個（857kcal）では約2倍の差</Marker>。選択次第でカロリーは大きく変わります。
          </p>

          <TipBox title="ハンバーグ好きのための妥協案">
            <p>どうしてもハンバーグが食べたい場合は、<Marker>チーズINハンバーグ（591kcal）よりTHE職人ビーフハンバーグ（593kcal）など単品を選び、ライスを少なめライス（165kcal）にする</Marker>のがおすすめ。鉄板ハンバーグミックスグリル（729kcal）よりカロリーを抑えつつ、ハンバーグの満足感を得られます。</p>
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
            ガストのライス（普通盛り）は247kcal。<Marker color="blue">ライスを少なめにするだけでカロリーをカット</Marker>できます。少なめライスは165kcalなので、普通盛りから約80kcalの節約に。逆に大ライスは412kcalと一気に増えるので、ダイエット中は普通盛り以下を選びましょう。
          </p>

          <SubSectionHeading>テクニック2：ライスをサラダに置き換える</SubSectionHeading>
          <p className="mb-6">
            定食セットのライスを、<Marker color="green">低カロリーなサラダに置き換えるとカロリーを抑えられます</Marker>。蒸し鶏と彩り野菜のサラダ（S・38kcal）に置き換えれば、ライス247kcalとの差で約200kcalカットでき、野菜も摂れて一石二鳥です。タッチパネルから簡単に変更できます。
          </p>

          <SubSectionHeading>テクニック3：ドリンクバーの活用法</SubSectionHeading>
          <p className="mb-6">
            ガストのドリンクバーは約220円。<Marker>ブラックコーヒーや無糖の紅茶を中心に飲むことで、ゼロカロリーで水分補給</Marker>が可能。食前にコーヒーを飲むと食欲を抑える効果も期待できます。ジュースやカフェオレなどの甘い飲み物は1杯50〜80kcalあるので要注意。
          </p>

          <SubSectionHeading>テクニック4：単品の組み合わせで攻める</SubSectionHeading>
          <p className="mb-4">
            セットメニューではなく、単品を組み合わせるのがガストダイエットの上級テクニック。<Marker>「赤身ビーフステーキ約100g＋蒸し鶏と彩り野菜のサラダ（S）」なら合計約461kcal</Marker>と、しっかり食べられて低カロリーな食事が完成します。
          </p>

          <CompareBar
            title="単品組み合わせのカロリー目安"
            items={[
              { name: "蒸し鶏サラダ（S）+ ねばとろサラダうどん", value: 431, note: "38+393" },
              { name: "赤身ステーキ約100g + 蒸し鶏サラダ（S）", value: 461, note: "423+38" },
              { name: "ミートドリア + 蒸し鶏サラダ（S）", value: 497, note: "459+38" },
              { name: "ジューシー若鶏グリル大葉おろし 単品", value: 660 },
            ]}
            unit="kcal"
            metric="calorie"
            sort="asc"
            highlightTop={1}
          />

          <p className="mb-8 mt-4">
            <Marker color="blue">サラダ系は数十kcalなので、メインに足してもカロリーをほとんど押し上げません</Marker>。ボリュームが欲しい日はステーキやドリアに、軽く済ませたい日はサラダうどん中心に、と組み合わせを変えるのがコツです。
          </p>

          <WarningBox title="デザートの誘惑に注意">
            <p>ガストのデザートメニューは低価格で魅力的ですが、<Marker>パンケーキ（536kcal）やフルーツパンケーキ（564kcal）</Marker>を追加すると、せっかくの低カロリーメニュー選びが台無しに。どうしてもデザートが欲しい場合は、ソフトクリーム（160kcal）やガストプリン（156kcal）に留めましょう。</p>
          </WarningBox>

          <TipBox title="お得なクーポンでさらにコスパUP">
            <p>ガストの公式アプリでは定期的にクーポンが配信されています。<Marker>チキテキやサラダのクーポンが出ていれば、通常より50〜100円安く</Marker>ダイエット食を楽しめます。毎回注文前にアプリをチェックする習慣をつけましょう。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスの良い食事のイメージ" />

          <CTABanner
            title="そのメニュー、何kcal？ たべなびで今すぐ検索"
            subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
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
              "サラダ系（蒸し鶏と彩り野菜のサラダS・38kcalなど）はカロリーが数十kcal台で最強の低カロリー枠",
              "ねばとろサラダうどん（393kcal）はさっぱり1品で満足できる低カロリーメニュー",
              "赤身ビーフステーキ約100g（423kcal）はボリュームの割にカロリー控えめ",
              "ライスは少なめライス（165kcal）で普通盛り（247kcal）より約80kcal節約",
              "マルゲリータピザ（892kcal）やおろしから揚げ定食3個（857kcal）は高カロリーなので注意",
              "メイン + 低カロリーサラダの単品組み合わせがダイエット向きの注文法",
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
            { q: "ガストでカロリーが最も低いメニューは？", a: "サラダ系がもっとも低カロリーで、ゴロゴロ野菜サラダは24kcal、蒸し鶏と彩り野菜のサラダ（S）は38kcal、トマトのグリーンサラダは39kcalです。食事として満足感のある一品では、ねばとろサラダうどん（393kcal）が低カロリー帯の候補になります。" },
            { q: "ガストで食事として満足感がありつつ低カロリーなメニューは？", a: "ねばとろサラダうどん（393kcal）、赤身ビーフステーキ約100g（423kcal）、ミートドリア（459kcal）あたりが、ボリュームの割にカロリーを抑えやすい候補です。サラダを足してもカロリーがほとんど増えないので、組み合わせもしやすいです。" },
            { q: "ガストで避けるべき（高カロリーな）メニューは？", a: "マルゲリータピザ（892kcal）、おろしから揚げ定食3個（857kcal）、鉄板ハンバーグミックスグリル（729kcal）などが高カロリーです。同じお肉料理でも、赤身ビーフステーキ約100g（423kcal）とおろしから揚げ定食3個（857kcal）では約2倍の差があります。" },
            { q: "ガストのライスを少なめにするとどれくらいカロリーカット？", a: "ガストのライス普通盛りは247kcal、少なめライスは165kcalなので、約80kcalの節約になります。さらにライスを蒸し鶏と彩り野菜のサラダ（S・38kcal）に置き換えれば、約200kcalのカットも可能です。" },
            { q: "ガストはタンパク質などのPFCを公式で確認できますか？", a: "ガストはカロリーは公開していますが、タンパク質・脂質・炭水化物（PFC）の公式値は公開されていません。そのため本記事ではPFCの断定を避け、カロリーを基準にメニューを比較しています。最新のカロリーは公式サイトやタッチパネルでご確認ください。" },
          ]}
        />

        <UpdateHistory
          entries={[
            {
              date: "2026-06-22",
              note: "全カロリーをたべなび収録の最新メニューデータで再検証。架空メニュー（ベジ塩タンメン・シーザーサラダ・からあげ定食・海老と山芋オクラのねばとろサラダうどん）を実在メニューへ差し替え、マルゲリータピザ等のカロリー誤差を修正。ガストはPFC公式値が非公開のため、タンパク質・脂質・炭水化物の断定値を削除しカロリー基準に統一。",
            },
            {
              date: "2026-03-19",
              note: "記事公開。",
            },
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
