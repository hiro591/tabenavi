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
  alternates: { canonical: "https://www.tabenavi.jp/guide/yoshinoya-diet" },
  title:
    "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "吉野家のカロリー低い順ランキング、牛皿並盛などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。牛丼を食べながら痩せるコツがわかります。",
  keywords: [
    "吉野家 ダイエット",
    "吉野家 カロリー",
    "吉野家 低カロリー",
    "吉野家 牛皿",
    "吉野家 太らない",
  ],
  openGraph: {
    title: "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "吉野家のカロリー低い順ランキング、牛皿並盛などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
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
    "吉野家のカロリー低い順ランキング、牛皿並盛などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
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
              <strong>牛丼 並盛は633kcal（P19.6g/F23.6g/C88.2g）</strong>。ダイエット中なら<strong>牛皿 並盛（281kcal/P13.5g・糖質5.2g）</strong>や<strong>牛丼 小盛（474kcal）</strong>がおすすめです。タンパク質をしっかり摂りつつ脂質を抑えたいなら<strong>ほっけ定食（463kcal/P20.4g・脂質5.0g）</strong>も有力。サイドの生野菜サラダ（88kcal）やお新香（17kcal）を組み合わせると満足感を維持しながらカロリーを抑えられます。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中に牛丼は食べていいの？」――これは多くのダイエッターが抱える疑問です。結論から言えば、<Marker>メニューの選び方とサイズの工夫で吉野家は十分にダイエット向き</Marker>です。
        </p>
        <p className="mb-4">
          吉野家には<Marker color="blue">牛皿 並盛（281kcal/P13.5g・糖質5.2g）</Marker>という低カロリー・低糖質の優秀メニューがあり、牛丼のご飯を抜いた牛皿は糖質制限にも向きます。脂質を抑えたいなら<Marker color="blue">ほっけ定食（463kcal/脂質5.0g）</Marker>も選べます。一方で牛丼の特盛は1,006kcalと高カロリー。選び方次第で大きな差が出ます。
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
              { name: "ほっけ定食", calories: 463, protein: 20.4, fat: 5.0, carbs: 88.9, highlight: true },
              { name: "牛丼（小盛）", calories: 474, protein: 15.4, fat: 19.6, carbs: 60.9 },
              { name: "焼魚定食（鮭）", calories: 478, protein: 17.8, fat: 8.2, carbs: 84.8 },
              { name: "豚丼（並盛）", calories: 576, protein: 14.4, fat: 18.6, carbs: 88.1 },
              { name: "牛丼（並盛）", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2 },
              { name: "ねぎ塩牛丼", calories: 670, protein: 20.5, fat: 24.9, carbs: 93.9 },
              { name: "牛カルビ丼（並）", calories: 696, protein: 21.3, fat: 26.2, carbs: 96.4 },
              { name: "牛丼（大盛）", calories: 823, protein: 24.8, fat: 29.0, carbs: 119.5 },
              { name: "から揚げ丼（並盛）", calories: 943, protein: 31.9, fat: 44.0, carbs: 104.5 },
              { name: "牛丼（特盛）", calories: 1006, protein: 33.5, fat: 44.2, carbs: 122.3 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は吉野家公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="カロリーランキングのポイント">
            <p><Marker>牛皿 並盛（281kcal）とほっけ定食（463kcal）</Marker>がダイエット向きの2大メニュー。ご飯なしの牛皿はタンパク質13.5gを糖質5.2gの低カロリーで摂取でき、ほっけ定食は脂質5.0gと低脂質ながらタンパク質20.4g。この2つを覚えておけば、低糖質と低脂質の両方に対応できます。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーだけでなく<Marker>PFCバランス（タンパク質・脂質・炭水化物）</Marker>と満足感を考慮した、吉野家のダイエット向けおすすめメニューを紹介します。
          </p>

          <RankingCard rank={1} title="牛皿（並盛）" subtitle="281kcal / P13.5g / F22.9g / C5.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker>ご飯なしで281kcal、糖質わずか5.2g</Marker>。究極の低糖質メニューです。牛丼のご飯部分（ご飯 並盛は343kcal）をカットすることで大幅なカロリーダウンが可能。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              サラダやみそ汁と組み合わせれば、バランスの良い低糖質食の完成。糖質制限中の方には最もおすすめのメニューです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="ほっけ定食" subtitle="463kcal / P20.4g / F5.0g / C88.9g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">脂質わずか5.0gでタンパク質20.4g</Marker>。脂質を抑えながらしっかりタンパク質を摂りたい人に向いた、吉野家の低脂質メニューです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              焼き魚が主菜のため、牛丼系より脂質を大きく抑えられます。ご飯を少なめにすればさらにカロリーを調整しやすくなります。
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
            calories={17}
            protein={0.7}
            fat={0.5}
            carbs={2.5}
          />

          <p className="mb-4 mt-4">
            <Marker>わずか17kcal</Marker>のサイドメニュー。牛皿やほっけ定食と組み合わせて、満足感をプラスするのに最適です。
          </p>

          <NutritionCard
            name="みそ汁"
            chain="吉野家"
            calories={20}
            protein={1.3}
            fat={0.6}
            carbs={2.5}
          />

          <p className="mb-8 mt-4">
            20kcalで体を温めてくれるみそ汁は、食事の最初に飲むことで満腹感を高めやすくなります。牛皿+みそ汁で301kcalという低カロリーな組み合わせが可能です。
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
            吉野家の小盛は474kcalで、すき家のミニ（464kcal）とほぼ同等。さらに<Marker color="green">牛皿 並盛（281kcal）やほっけ定食（463kcal・脂質5.0g）</Marker>など、糖質や脂質を抑えやすいダイエット向けメニューの選択肢が豊富なのが吉野家の強みです。
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
              <li><span className="font-bold">牛丼 超特盛（1,159kcal）</span> ─ 1食で1日の摂取カロリーの半分以上。タンパク質40.8gに対して炭水化物124.6gと糖質が多くなります。</li>
              <li><span className="font-bold">牛丼 特盛（1,006kcal）</span> ─ タンパク質33.5gに対して炭水化物122.3gと糖質が多め。脂質も44.2gと高くなります。</li>
              <li><span className="font-bold">から揚げ丼 並盛（943kcal）</span> ─ 揚げ物が主菜で脂質44.0g。ボリュームはありますが脂質が高くなりがちです。</li>
              <li><span className="font-bold">牛丼 大盛（823kcal）</span> ─ 並盛の約1.3倍のカロリー。ご飯の量が増え、炭水化物119.5gに。</li>
              <li><span className="font-bold">牛カルビ丼 並盛（696kcal）</span> ─ カルビ肉は脂質が多く、脂質26.2gと牛丼並盛（23.6g）より高めです。</li>
            </ul>
          </WarningBox>

          <WarningBox title="高カロリーになりやすいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">タルタル南蛮から揚げ丼 並盛（1,230kcal）</span> ─ 揚げ物にタルタルが加わり脂質69.5g。脂質が非常に高くなります。</li>
              <li><span className="font-bold">スタミナ超特盛丼（2,031kcal）</span> ─ メニュー内でも最高クラスのカロリー。脂質111.3g・炭水化物196.7gと、ダイエット中は避けたい一品です。</li>
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
                body: "牛皿 並盛（281kcal）+みそ汁（20kcal）=合計301kcal。ご飯を完全にカットすることで、糖質をわずか7.7gに抑えられます。糖質制限ダイエット中の方に最もおすすめの注文法です。",
              },
              {
                title: "小盛を活用してご飯を減らす",
                body: "並盛（633kcal）から小盛（474kcal）にするだけで約159kcalカット。「ご飯少なめ」と口頭で伝えるよりも確実にカロリーを抑えられます。物足りなさは牛皿の追加で調整しましょう。",
              },
              {
                title: "脂質を抑えたいならほっけ定食",
                body: "ほっけ定食は463kcalでタンパク質20.4g、脂質はわずか5.0g。脂質を抑えながらタンパク質を確保したい時に向いています。ご飯を少なめにすればさらにカロリーを調整できます。",
              },
              {
                title: "紅生姜を活用",
                body: "紅生姜は26kcalと低カロリーで、味にアクセントを加えてくれます。少ない量のご飯でも満足感を得やすく、無料トッピングなので活用しやすい一品です。",
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
              ["低糖質", "牛皿 並盛 + みそ汁 + お新香", "318 kcal", "P 15.5g"],
              ["低脂質", "ほっけ定食 + みそ汁", "483 kcal", "P 21.7g"],
              ["満足型", "牛丼 小盛 + みそ汁", "494 kcal", "P 16.7g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            <Marker color="green">低脂質の「ほっけ定食+みそ汁」は483kcalでP21.7g・脂質5.6g</Marker>と、脂質を抑えたい昼食に向いています。タンパク質をしっかり確保しながら、午後のエネルギーも補給できます。
          </p>

          <SubSectionHeading>PFCバランスで見る吉野家メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットではカロリーだけでなく、<Marker>PFC（タンパク質・脂質・炭水化物）の比率</Marker>が重要です。目的別に最適なメニューを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "P/F/C比率", "ポイント"]}
            rows={[
              ["糖質制限", "牛皿（並盛）", "P19%/F73%/C8%", "糖質5.2gと超低糖質"],
              ["低脂質・高タンパク", "ほっけ定食", "P17%/F9%/C74%", "脂質5.0gでP20.4gを確保"],
              ["バランス型", "牛丼（小盛）", "P13%/F37%/C51%", "無理なく続けられる"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            糖質制限なら牛皿、脂質を抑えたいならほっけ定食、カロリー制限なら牛丼小盛と、<Marker color="blue">ダイエットの方針によって最適なメニューが変わります</Marker>。自分のダイエット方針に合ったメニューを選びましょう。
          </p>

          <TipBox title="1日の食事プランに組み込むコツ">
            <p>吉野家を昼食に利用する場合、牛皿 並盛（281kcal）+みそ汁（20kcal）の約300kcalにまとめれば、1日の総カロリー1,600kcalでも朝・夕食に十分なカロリーを残せます。<Marker>外食1食を400kcal以下に抑える</Marker>ことで、他の食事の自由度が格段に上がります。</p>
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
              "牛皿 並盛（281kcal/糖質5.2g）が低糖質ダイエットの大本命メニュー",
              "脂質を抑えるならほっけ定食（463kcal/脂質5.0g・P20.4g）が有力",
              "牛皿並盛（281kcal）+みそ汁（20kcal）で糖質制限にも対応可能",
              "牛丼は小盛（474kcal）を選ぶだけで並盛（633kcal）比159kcalカット",
              "サイズアップに注意。牛丼は特盛1,006kcal・超特盛1,159kcalと高カロリーに",
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
              a: "吉野家の牛丼 並盛は633kcal、タンパク質19.6g、脂質23.6g、炭水化物88.2gです（2026年6月時点の吉野家公式栄養成分情報）。同シリーズの小盛は474kcal、大盛は823kcal、特盛は1,006kcalです。",
            },
            {
              q: "吉野家でダイエット中におすすめのメニューは？",
              a: "牛皿 並盛（281kcal/P13.5g・糖質5.2g）が最も低糖質でダイエット向きです。みそ汁とお新香を組み合わせる「糖質オフセット」も実践しやすい食べ方です。脂質を抑えたいならほっけ定食（463kcal/P20.4g・脂質5.0g）、牛丼を食べたい場合は小盛（474kcal）を選びましょう。",
            },
            {
              q: "牛皿 並盛だけで本当に痩せますか？",
              a: "牛皿 並盛 単体で痩せるわけではありませんが、外食1食を281kcal・タンパク質13.5g・糖質5.2gに抑えられるのは非常に優秀です。1日の総摂取カロリーを管理しつつ、こうした低カロリーメニューを選ぶことで、ダイエットを続けやすくなります。",
            },
            {
              q: "牛丼と豚丼、ダイエットにはどっちがおすすめ？",
              a: "豚丼 並盛（576kcal）の方が牛丼 並盛（633kcal）より約57kcal低めです。脂質は豚丼18.6g・牛丼23.6gで豚丼の方がやや低め、糖質は両者ともほぼ同等（豚丼88.1g・牛丼88.2g）です。さらに低カロリーを目指すなら牛皿 並盛（281kcal）にご飯 小盛を合わせる方法もあります。",
            },
            {
              q: "吉野家の定食メニューはダイエットに向いていますか？",
              a: "ほっけ定食（463kcal/脂質5.0g）や焼魚定食（鮭）（478kcal/脂質8.2g）は脂質が低くタンパク質も確保でき、ダイエット向きです。納豆牛小鉢定食（612kcal）など、納豆や卵を組み合わせるとタンパク質を効率的に摂れます。みそ汁を残せばさらに減塩・低カロリーになります。",
            },
            {
              q: "つゆだく・つゆぬきはダイエットに影響しますか？",
              a: "つゆだくにするとご飯にしみ込むタレの分だけ糖質や塩分が増えやすくなります（具体的な追加量は公開されていません）。ダイエット中はつゆぬき or 通常で注文し、紅生姜（26kcal）で満足感を補うのがおすすめです。",
            },
            {
              q: "吉野家のサイドメニューで太らないのは？",
              a: "生野菜サラダ（88kcal）、お新香（17kcal）、みそ汁（20kcal）、紅生姜（26kcal）が低カロリーです。逆にから揚げ（単品・197kcal）など揚げ物系はカロリーが高くなりやすいので注意しましょう。",
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
            { date: "2026-06-22", note: "終売したライザップ牛サラダおよび実在しないメニュー（月見牛とじ丼等）を削除。牛皿並盛・ほっけ定食を軸に再構成し、牛カルビ丼 並盛などの数値を最新の公式栄養成分（DB実値）に修正。ランキング・比較表・FAQ・まとめを更新" },
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
