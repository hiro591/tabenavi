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
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。牛丼を食べながら痩せるコツがわかります。",
  keywords: [
    "吉野家 ダイエット",
    "吉野家 カロリー",
    "吉野家 低カロリー",
    "ライザップ牛サラダ",
    "吉野家 太らない",
  ],
  openGraph: {
    title: "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/yoshinoya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/yoshinoya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "size-comparison", label: "サイズ別カロリー比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function YoshinoyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="吉野家でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="吉野家ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="yoshinoya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* QuickAnswer */}
        <QuickAnswer
          question="吉野家でダイエット中におすすめのメニューは？牛丼並盛のカロリーは？"
          answer={
            <>
              <strong>牛丼 並盛は633kcal（P19.6g/F23.6g/C88.2g）</strong>。ダイエット中なら<strong>小盛（474kcal）または牛皿並盛（281kcal/P13.5g）</strong>がおすすめです。最も低カロリー＆高タンパクなのは<strong>ライザップ牛サラダ（398kcal/P28g）</strong>。サイドメニューでは生野菜サラダ（88kcal）やキムチ（10kcal）を組み合わせると満足感を維持しながらカロリーを抑えられます。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中に牛丼は食べていいの？」――これは多くのダイエッターが抱える疑問です。結論から言えば、<Marker>メニューの選び方とサイズの工夫で吉野家は十分にダイエット向き</Marker>です。
        </p>
        <p className="mb-4">
          吉野家には<Marker color="blue">ライザップ牛サラダ（398kcal/P28g）</Marker>という低カロリー高タンパクの優秀メニューがあり、牛丼のご飯を抜いた牛皿（281kcal）も活用できます。一方で牛丼の特盛は1,006kcalと高カロリー。選び方次第で大きな差が出ます。
        </p>
        <p className="mb-8">
          この記事では、吉野家の全メニューをカロリー低い順にランキングし、ダイエットに最適なメニューやサイズ選びのコツを詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="美味しそうな牛丼のイメージ写真" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">吉野家メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            吉野家の主要メニューをカロリーの低い順に並べました。ダイエット中は<Marker color="blue">400kcal以下のメニュー</Marker>を中心に選ぶのがポイントです。
          </p>

          <NutritionTable
            items={[
              { name: "牛皿（並盛）", calories: 281, protein: 13.5, fat: 22.9, carbs: 5.2, highlight: true },
              { name: "ライザップ牛サラダ", calories: 398, protein: 28.0, fat: 24.5, carbs: 17.2, highlight: true },
              { name: "牛丼（小盛）", calories: 474, protein: 15.4, fat: 19.6, carbs: 60.9 },
              { name: "豚丼（並盛）", calories: 576, protein: 14.4, fat: 18.6, carbs: 88.1 },
              { name: "牛丼（並盛）", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2 },
              { name: "ねぎ塩牛丼", calories: 670, protein: 20.5, fat: 24.9, carbs: 93.9 },
              { name: "牛丼（大盛）", calories: 823, protein: 24.8, fat: 29.0, carbs: 119.5 },
              { name: "から揚げ丼（並盛）", calories: 943, protein: 31.9, fat: 44.0, carbs: 104.5 },
              { name: "牛丼（特盛）", calories: 1006, protein: 33.5, fat: 44.2, carbs: 122.3 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は吉野家公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="カロリーランキングのポイント">
            <p><Marker>牛皿（281kcal）とライザップ牛サラダ（398kcal）</Marker>がダイエット向きの2大メニュー。ご飯なしの牛皿はタンパク質13.5gを低カロリーで摂取でき、ライザップ牛サラダは野菜もたっぷり。この2つを覚えておけば安心です。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーだけでなく<Marker>PFCバランス（タンパク質・脂質・炭水化物）</Marker>と満足感を考慮した、吉野家のダイエット向けおすすめメニューを紹介します。
          </p>

          <RankingCard rank={1} title="ライザップ牛サラダ" subtitle="398kcal / P28.0g / F24.5g / C17.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              吉野家のダイエットメニューの大本命。RIZAPとのコラボ商品で、<Marker>398kcalながらタンパク質28g、糖質わずか17.2g</Marker>という驚異的な栄養バランスを実現しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              牛肉・半熟卵・ブロッコリー・キャベツが入っており、糖質制限ダイエットにも最適。ドレッシングはノンオイルを選ぶとさらにカロリーカットできます。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="牛皿（並盛）" subtitle="281kcal / P13.5g / F22.9g / C5.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">ご飯なしで281kcal、糖質わずか5.2g</Marker>。究極の低糖質メニューです。牛丼のご飯部分（約350kcal）をカットすることで大幅なカロリーダウンが可能。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              サラダやみそ汁と組み合わせれば、バランスの良い低糖質食の完成。糖質制限中の方には最もおすすめです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="牛丼（小盛）" subtitle="474kcal / P15.4g / F19.6g / C60.9g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「やっぱり牛丼が食べたい」という方におすすめなのが小盛。並盛（633kcal）から<Marker color="green">約159kcalのカロリーダウン</Marker>で、しっかり牛丼の満足感を得られます。ご飯もお肉も楽しみたい方に最適なサイズ感です。
            </p>
          </RankingCard>

          <SubSectionHeading>その他のおすすめメニュー</SubSectionHeading>

          <NutritionCard
            name="お新香"
            chain="吉野家"
            calories={15}
            protein={0.5}
            fat={0.1}
            carbs={3.2}
          />

          <p className="mb-4 mt-4">
            <Marker>わずか15kcal</Marker>のサイドメニュー。牛皿やライザップ牛サラダと組み合わせて、満足感をプラスするのに最適です。
          </p>

          <NutritionCard
            name="みそ汁"
            chain="吉野家"
            calories={27}
            protein={1.8}
            fat={1.0}
            carbs={2.5}
          />

          <p className="mb-8 mt-4">
            27kcalで体を温めてくれるみそ汁は、食事の最初に飲むことで満腹感を高める効果があります。牛皿+みそ汁で308kcalという低カロリーな組み合わせが可能です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop" alt="ヘルシーなサラダボウルのイメージ" />
        </section>

        {/* Section 3: サイズ別カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="size-comparison">牛丼のサイズ別カロリー比較</SectionHeading>

          <p className="mb-6">
            吉野家の牛丼はサイズによってカロリーが大きく異なります。<Marker>サイズ選びがそのままカロリー管理に直結する</Marker>ため、違いをしっかり把握しておきましょう。
          </p>

          <ComparisonTable
            headers={["サイズ", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["小盛", "474 kcal", "P 15.4g", "F 19.6g", "C 60.9g"],
              ["並盛", "633 kcal", "P 19.6g", "F 23.6g", "C 88.2g"],
              ["アタマの大盛", "725 kcal", "P 23.0g", "F 28.8g", "C 96.6g"],
              ["大盛", "823 kcal", "P 24.8g", "F 29.0g", "C 119.5g"],
              ["特盛", "1,006 kcal", "P 33.5g", "F 44.2g", "C 122.3g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="サイズ選びのコツ">
            <p>並盛から小盛に変えるだけで<Marker>約159kcalのカロリーカット</Marker>。物足りないと感じる場合は、牛皿を追加する「牛皿＋ミニ牛丼」方式にすると、タンパク質を増やしつつカロリーの総量を調整しやすくなります。</p>
          </TipBox>

          <p className="mb-4">
            また、<Marker color="blue">「アタマの大盛」はお肉多め・ご飯は並盛</Marker>というサイズ。ご飯の量を抑えつつ肉を増量できるため、タンパク質重視の方には並盛より賢い選択肢です。
          </p>

          <SubSectionHeading>吉野家 vs 他チェーンのサイズ比較</SubSectionHeading>

          <ComparisonTable
            headers={["チェーン", "最小サイズ", "カロリー", "タンパク質"]}
            rows={[
              ["吉野家（小盛）", "小盛", "474 kcal", "P 15.4g"],
              ["松屋（小盛）", "小盛", "507 kcal", "P 13.1g"],
              ["すき家（ミニ）", "ミニ", "464 kcal", "P 14.8g"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            吉野家の小盛は474kcalで、すき家のミニ（464kcal）とほぼ同等。さらに<Marker color="green">ライザップ牛サラダ（398kcal）や牛皿（281kcal）</Marker>など、ご飯を使わないダイエットメニューの選択肢が豊富なのが吉野家の強みです。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="吉野家のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            吉野家には高カロリーなメニューも多く存在します。<Marker>特にトッピングの追加やサイズアップは要注意</Marker>です。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛丼特盛（1,006kcal）</span> ─ 1食で1日の摂取カロリーの半分近く。タンパク質33.5gに対して炭水化物122gと糖質過多。</li>
              <li><span className="font-bold">ねぎ塩牛丼（670kcal）</span> ─ 並盛にねぎ塩だれが加わり脂質24.9g。トッピングでカロリーが加わります。</li>
              <li><span className="font-bold">牛丼大盛（823kcal）</span> ─ 並盛の約1.3倍のカロリー。ご飯の量が大幅に増え、炭水化物119.5gに。</li>
              <li><span className="font-bold">牛カルビ丼・並盛（827kcal）</span> ─ カルビ肉は脂質が非常に多く、脂質35.2gとトップクラス。</li>
              <li><span className="font-bold">月見牛とじ丼（780kcal）</span> ─ 卵とじで見た目はヘルシーですが、卵2個分と甘辛だしでカロリーが高め。</li>
            </ul>
          </WarningBox>

          <WarningBox title="トッピングの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">チーズ追加（+約80kcal）</span> ─ 脂質が大幅に増加。牛丼との相性は良いが、ダイエット中は控えましょう。</li>
              <li><span className="font-bold">キムチ追加（+約20kcal）</span> ─ カロリーは低めなので、追加するならこちらが安全。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">吉野家ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            メニュー選びに加えて、<Marker>注文の仕方や食べ方の工夫</Marker>でさらにカロリーを抑えることができます。
          </p>

          <NumberedList
            items={[
              {
                title: "牛皿+みそ汁で低糖質セットに",
                body: "牛皿（281kcal）+みそ汁（27kcal）=合計308kcal。ご飯を完全にカットすることで、糖質をわずか7.7gに抑えられます。糖質制限ダイエット中の方に最もおすすめの注文法です。",
              },
              {
                title: "小盛を活用してご飯を減らす",
                body: "並盛から小盛にするだけで約159kcalカット。「ご飯少なめ」と口頭で伝えるよりも確実にカロリーを抑えられます。物足りなさは牛皿の追加で調整しましょう。",
              },
              {
                title: "ライザップ牛サラダを活用する",
                body: "398kcalでタンパク質28g、糖質17.2gという理想的な栄養バランス。ランチで糖質を控えたい時にぴったりです。ドレッシングは別添えにして量を調節するのがコツ。",
              },
              {
                title: "紅生姜をたっぷり活用",
                body: "紅生姜はほぼ0kcalで味にアクセントを加えてくれます。少ない量のご飯でも満足感が得られる上、生姜の成分が代謝アップにも貢献。無料トッピングなので積極的に使いましょう。",
              },
              {
                title: "つゆだくは避ける",
                body: "つゆだくにするとご飯がつゆを吸って実質的にカロリーアップ。また、塩分も増えてむくみの原因に。「つゆ少なめ」がダイエット的にはベストです。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの取れた食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛皿 + みそ汁 + お新香", "323 kcal", "P 15.8g"],
              ["バランス型", "ライザップ牛サラダ + みそ汁", "425 kcal", "P 29.8g"],
              ["満足型", "牛丼小盛 + みそ汁", "501 kcal", "P 17.2g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            <Marker color="green">バランス型の「ライザップ牛サラダ+みそ汁」は425kcalでP29.8g</Marker>と、ダイエット中の昼食として理想的。野菜も牛肉もしっかり摂れて、午後のエネルギーも十分に補給できます。
          </p>

          <SubSectionHeading>PFCバランスで見る吉野家メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットではカロリーだけでなく、<Marker>PFC（タンパク質・脂質・炭水化物）の比率</Marker>が重要です。目的別に最適なメニューを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "P/F/C比率", "ポイント"]}
            rows={[
              ["糖質制限", "牛皿（並盛）", "P19%/F73%/C8%", "糖質5.2gと超低糖質"],
              ["高タンパク", "ライザップ牛サラダ", "P28%/F55%/C17%", "野菜と高タンパクを両立"],
              ["バランス型", "牛丼（小盛）", "P13%/F37%/C51%", "無理なく続けられる"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            糖質制限なら牛皿、高タンパクならライザップ牛サラダ、カロリー制限なら牛丼小盛と、<Marker color="blue">ダイエットの方針によって最適なメニューが変わります</Marker>。自分のダイエット方針に合ったメニューを選びましょう。
          </p>

          <TipBox title="1日の食事プランに組み込むコツ">
            <p>吉野家を昼食に利用する場合、ライザップ牛サラダ（398kcal）を選べば、1日の総カロリー1,600kcalの場合でも朝・夕食に各600kcal使えます。<Marker>外食1食を400kcal以下に抑える</Marker>ことで、他の食事の自由度が格段に上がります。</p>
          </TipBox>
        </section>

        <AffiliateProductGrid
          title="吉野家の前後で整える高タンパク補給"
          productIds={["ultora-whey", "inbar-protein", "tuna-can", "konjac-rice"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            吉野家はメニュー選びを工夫するだけで、ダイエット中でも安心して利用できます。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "ライザップ牛サラダがダイエットの大本命メニュー（吉野家公式栄養成分を確認してください）",
              "牛皿並盛（281kcal）+みそ汁で糖質制限にも対応可能",
              "牛丼は小盛（474kcal）を選ぶだけで並盛比159kcalカット",
              "トッピング追加やサイズアップに注意。超特盛は1,000kcal超に",
              "紅生姜を活用し、つゆだくは避けるのがダイエットのコツ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は<a href="https://www.yoshinoya.com/menu/info/allergy.html" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">吉野家公式サイトの栄養成分情報</a>をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="yoshinoya-diet"
          items={[
            {
              q: "吉野家の牛丼並盛のカロリーは？",
              a: "吉野家の牛丼 並盛は633kcal、タンパク質19.6g、脂質23.6g、炭水化物88.2gです（2026年5月時点の吉野家公式栄養成分情報）。同シリーズの小盛は474kcal、大盛は823kcalです。",
            },
            {
              q: "吉野家でダイエット中におすすめのメニューは？",
              a: "ライザップ牛サラダ（398kcal/P28g）が最もダイエット向きです。低糖質で高タンパク。また、牛皿並盛（281kcal/P13.5g）にみそ汁とお新香を組み合わせる「糖質オフセット」も人気です。牛丼を食べたい場合は小盛（474kcal）を選びましょう。",
            },
            {
              q: "ライザップ牛サラダは本当に痩せますか？",
              a: "ライザップ牛サラダ単体で痩せるわけではありませんが、外食1食で398kcal・タンパク質28gを摂れるのは非常に優秀です。1日の総摂取カロリーを管理しつつ、このメニューを活用することで継続的なダイエットが可能になります。",
            },
            {
              q: "牛丼と豚丼、ダイエットにはどっちがおすすめ？",
              a: "豚丼 並盛（576kcal）の方が牛丼 並盛（633kcal）より約60kcal低めです。ただし脂質量はほぼ同じ。糖質量も両者大差ないため、好みで選んでOKです。さらに低カロリーを目指すなら牛皿並盛（281kcal）+ご飯小盛にカスタムする方法も。",
            },
            {
              q: "吉野家の朝食メニューはダイエットに向いていますか？",
              a: "朝牛セット（約500kcal）や納豆牛小鉢定食（約450kcal）など、朝定食メニューは栄養バランスが良くダイエット向きです。特に納豆や生卵などを組み合わせることで、タンパク質を効率的に摂取できます。みそ汁を残せばさらに減塩・低カロリーに。",
            },
            {
              q: "つゆだく・つゆぬきはダイエットに影響しますか？",
              a: "つゆだくにすると糖質と塩分が増加します（具体的な数値非公開ですが、ご飯にしみ込む量で約10〜30kcal増）。ダイエット中はつゆぬき or 通常で注文し、紅生姜をたっぷり乗せて満足感を補うのがおすすめです。",
            },
            {
              q: "吉野家のサイドメニューで太らないのは？",
              a: "生野菜サラダ（88kcal）、キムチ（10kcal）、お新香（17kcal）、わかめみそ汁（24kcal）、3点盛り野菜セット（約60kcal）が低カロリーです。逆にから揚げや唐辛子サラダなど揚げ物系は200kcal超なので注意。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-05-12", note: "全メニュー栄養データを2026年5月時点の公式情報で更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="yoshinoya-diet" />

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
