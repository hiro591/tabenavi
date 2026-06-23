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
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/dennys-diet" },
  title:
    "【2026年最新】デニーズダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "デニーズの低カロリーメニューランキング、ハンバーグの選び方、ダイエット中のおすすめ注文テクニックを徹底解説。和風ハンバーグ488kcalなど実測の栄養成分でファミレスで太らない食べ方がわかります。",
  keywords: [
    "デニーズ ダイエット",
    "デニーズ カロリー",
    "デニーズ 低カロリー",
    "デニーズ ハンバーグ カロリー",
    "デニーズ ヘルシー",
  ],
  openGraph: {
    title: "【2026年最新】デニーズダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "デニーズの低カロリーメニューランキング、ハンバーグの選び方、ダイエット中のおすすめ注文テクニックを徹底解説。",
    url: "https://www.tabenavi.jp/guide/dennys-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】デニーズダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "デニーズの低カロリーメニューランキング、ハンバーグの選び方、ダイエット中のおすすめ注文テクニックを徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/dennys-diet",
};

const tocItems = [
  { id: "why-dennys", label: "デニーズがダイエットに使える理由" },
  { id: "calorie-ranking", label: "カロリーランキング（低い順）" },
  { id: "recommended", label: "おすすめメニュー" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "order-tips", label: "注文テクニック" },
  { id: "summary", label: "まとめ" },
];

export default function DennysDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="デニーズダイエットガイド"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop"
        breadcrumb="デニーズダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="dennys-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          デニーズはファミリーレストランの中でも<Marker>メニューの幅広さとヘルシー志向のメニュー開発</Marker>に定評があるチェーンです。和食から洋食、サラダまでバリエーション豊富なため、ダイエット中でも食事に飽きることなく通い続けられます。
        </p>
        <p className="mb-4">
          特に<Marker>和風ハンバーグ（488kcal/P25.2g）</Marker>は、ハンバーグの中ではカロリー控えめで高タンパクなメニュー。デザートの誘惑さえ乗り越えれば、デニーズはダイエットの強い味方になります。
        </p>
        <p className="mb-4">
          この記事では、デニーズのメニューをカロリー順にランキングし、ダイエット中の注文テクニックを徹底解説します。
        </p>
        <p className="mb-8">
          ファミレスでの食事が多い方は、ぜひこの記事の内容を実践してみてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: デニーズがダイエットに使える理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"デニーズでダイエット中に選ぶべきメニューは何ですか？"}
          answer={"All Beef ハンバーグ～おろしソース（444kcal・タンパク質22.7g）やデミ煮込みハンバーグ（475kcal・脂質28.6g）、和風ハンバーグ（488kcal・タンパク質25.2g）がハンバーグ系では比較的カロリー・脂質を抑えやすい選択です。チーズ系（ベーコンチーズハンバーグ等）は脂質が高くなるため、おろし・煮込み系を選ぶのがおすすめ。メインの前にシーザーサラダなどの野菜を食べてベジファーストを実践しましょう。"}
        />

        <SectionHeading id="why-dennys">デニーズがダイエットに使える理由</SectionHeading>

          <p className="mb-4">
            ファミレスチェーンの中でも、デニーズがダイエットに向いている理由を解説します。
          </p>

          <NumberedList
            items={[
              {
                title: "和食メニューが充実している",
                body: "デニーズは洋食のイメージが強いですが、実は和食メニューも豊富。焼き魚定食やお蕎麦、和風ドレッシングのサラダなど、低カロリーな選択肢が多く用意されています。",
              },
              {
                title: "ライスの量を調整しやすい",
                body: "ライスの量を「少なめ」に変更可能。通常のライス（302kcal）から「ライス少なめ」（168kcal）に変えるだけで約130kcal・炭水化物約30gカットできます。セットメニューではパンに変更する選択肢もあります。",
              },
              {
                title: "単品サラダの種類が豊富",
                body: "シーザーサラダやCOBBサラダ、ローストビーフのパワーサラダなど、メインの前に野菜を摂れるメニューが充実。ベジファーストを実践しやすいのがデニーズの強みです。",
              },
            ]}
          />

          <TipBox title="デニーズのカロリー表示に注目">
            <p>デニーズは<Marker>メニューブックにカロリーを明記</Marker>しています。注文前にカロリーを確認できるため、ダイエット中の判断がしやすいのは大きなメリット。アレルギー情報も詳しく記載されています。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop" alt="ファミリーレストランの明るい店内イメージ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">デニーズ カロリーランキング（低い順）</SectionHeading>

          <p className="mb-4">
            デニーズの主要メニューをカロリーの低い順にランキング。<Marker color="blue">サラダ・焼鮭などの単品は150〜180kcal台と低カロリー</Marker>で、ハンバーグ系も選び方次第で500kcal以下に抑えられます。
          </p>

          <NutritionTable
            items={[
              { name: "シーザーサラダ～４種チーズ使用", calories: 149, protein: 4.8, fat: 11.5, carbs: 6.2, highlight: true },
              { name: "焼鮭", calories: 170, protein: 16.0, fat: 10.0, carbs: 1.9, highlight: true },
              { name: "ローストビーフのパワーサラダ（ドレッシング除く）", calories: 180, protein: 10.4, fat: 7.1, carbs: 20.7, highlight: true },
              { name: "All Beef ハンバーグ～おろしソース", calories: 444, protein: 22.7, fat: 30.1, carbs: 21.0 },
              { name: "デミ煮込みハンバーグ", calories: 475, protein: 26.0, fat: 28.6, carbs: 29.2 },
              { name: "和風ハンバーグ", calories: 488, protein: 25.2, fat: 32.8, carbs: 23.6 },
              { name: "ベーコンチーズハンバーグ", calories: 563, protein: 29.2, fat: 39.5, carbs: 22.1 },
              { name: "トロけるお肉のビーフシチュー", calories: 651, protein: 37.1, fat: 48.3, carbs: 17.3 },
              { name: "とろ～り卵とチーズのオムライス", calories: 755, protein: 29.6, fat: 39.7, carbs: 67.5 },
              { name: "ハンバーグカレードリア", calories: 805, protein: 34.2, fat: 35.2, carbs: 85.0 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はデニーズ公式の栄養成分表に基づく単品の値です。ライスやソースを追加・除外すると数値は変わります。
          </p>

          <TipBox title="ハンバーグの選び方がカギ">
            <p>デニーズの看板はハンバーグですが、<Marker>ソースやチーズの有無で100kcal前後の差が出ます</Marker>。脂質を抑えたいならデミ煮込みハンバーグ（475kcal・脂質28.6g）やAll Beef ハンバーグ～おろしソース（444kcal・脂質30.1g）が選びやすく、ベーコンチーズハンバーグ（563kcal・脂質39.5g）と比べてカロリー・脂質ともに抑えられます。チーズ系を避けるのが基本です。</p>
          </TipBox>

          <SubSectionHeading>PFCバランスで見るデニーズメニューの特徴</SubSectionHeading>
          <p className="mb-4">
            デニーズのハンバーグ系メニューは<Marker color="green">タンパク質22〜37gの範囲に集中</Marker>しており、いずれもタンパク質源としては優秀です。差が出るのは脂質。チーズやクリームを使ったメニューは脂質が39g超になる一方、デミ煮込みハンバーグ（脂質28.6g）やAll Beef ハンバーグ～おろしソース（脂質30.1g）なら抑えられます。
          </p>
          <p className="mb-8">
            また、デニーズには焼鮭（170kcal・タンパク質16g）のように<Marker>高タンパクで低カロリーな単品メニュー</Marker>もあります。ハンバーグに飽きたら焼鮭朝食などの和食系メニューも活用しましょう。
          </p>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中におすすめのデニーズメニュー</SectionHeading>

          <p className="mb-6">
            デニーズのメニューから、<Marker>ダイエット中でも安心して注文できるメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="和風ハンバーグ" subtitle="488kcal / P25.2g / F32.8g / C23.6g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ハンバーグの中ではカロリー控えめ（488kcal）で、<Marker>タンパク質25.2gをしっかり確保</Marker>できる一品。和風おろしソースでさっぱりと食べられ、大根おろしのさっぱり感が食べ過ぎを防いでくれます。脂質を最優先で抑えたい日は、デミ煮込みハンバーグ（脂質28.6g）も候補に。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ライスを少なめにすれば、ベーコンチーズハンバーグ（563kcal）より大幅にカロリーを抑えられます。デニーズでハンバーグを食べたいなら、まずこれを選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="All Beef ハンバーグ～おろしソース" subtitle="444kcal / P22.7g / F30.1g / C21.0g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">100%ビーフで作られたジューシーなハンバーグ</Marker>。ハンバーグ系では444kcalと最もカロリーが低く、タンパク質22.7gも確保できます。牛肉由来の鉄分やビタミンB12も期待でき、ビーフの旨みで満足感が高いためデザートへの誘惑を断ち切りやすいメニューです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="焼鮭" subtitle="170kcal / P16.0g / F10.0g / C1.9g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">170kcalで炭水化物わずか1.9g</Marker>という高タンパク・低糖質の単品メニュー。タンパク質16gをしっかり摂れて、青魚に含まれるEPA・DHAも期待できます。焼鮭朝食として組み合わせれば、和食でしっかり満足できる選択肢になります。
            </p>
          </RankingCard>

          <SubSectionHeading>サイドメニューのおすすめ</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <NutritionCard
              name="シーザーサラダ～４種チーズ使用"
              chain="デニーズ"
              calories={149}
              protein={4.8}
              fat={11.5}
              carbs={6.2}
              recommended
            />
            <NutritionCard
              name="ローストビーフのパワーサラダ"
              chain="デニーズ"
              calories={180}
              protein={10.4}
              fat={7.1}
              carbs={20.7}
              recommended
            />
          </div>

          <p className="mb-4">
            シーザーサラダ～４種チーズ使用は<Marker>149kcalで野菜をしっかり摂取</Marker>できるサイドメニュー。メインの前に注文して先に食べることで、ベジファーストを実践できます。
          </p>

          <p className="mb-8">
            ローストビーフのパワーサラダ（ドレッシング除く）は<Marker color="blue">タンパク質10.4gとサラダとしては高タンパク</Marker>。ローストビーフから良質なタンパク質を摂取でき、メインのハンバーグと合わせれば合計タンパク質30g以上も可能です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop" alt="ジューシーなハンバーグのイメージ" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="デニーズのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            デニーズには美味しい誘惑がたくさんありますが、<Marker>カロリーの高いメニューを知っておけば回避できます</Marker>。特にソースが濃厚なメニューとデザートに要注意です。
          </p>

          <WarningBox title="ダイエット中は要注意なメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">ハンバーグカレードリア（805kcal）</span> ─ ハンバーグ+カレー+ドリアの三重奏。炭水化物85gと糖質が多めです。</li>
              <li><span className="font-bold">とろ～り卵とチーズのオムライス（755kcal）</span> ─ 卵+チーズ+ライスで炭水化物67.5g。脂質も39.7gと高カロリーの代表格です。</li>
              <li><span className="font-bold">トロけるお肉のビーフシチュー（651kcal）</span> ─ 脂質48.3gと高め。タンパク質37.1gは豊富ですが、脂質量に注意したいメニューです。</li>
              <li><span className="font-bold">ベーコンチーズハンバーグ（563kcal）</span> ─ ベーコンとチーズが脂質を押し上げ、F39.5g。和風ハンバーグとの差は約75kcalです。</li>
              <li><span className="font-bold">パンケーキ・サンデー系デザート</span> ─ パンケーキ（Tallサイズ3枚）488kcal、とちおとめのザ・サンデー575kcalなど、デザートはメイン1食分相当のカロリー。食後のデザートは要注意です。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "判定"]}
            rows={[
              ["All Beef ハンバーグ～おろしソース", "444 kcal", "22.7g", "30.1g", "◎"],
              ["デミ煮込みハンバーグ", "475 kcal", "26.0g", "28.6g", "◎"],
              ["和風ハンバーグ", "488 kcal", "25.2g", "32.8g", "○"],
              ["ベーコンチーズハンバーグ", "563 kcal", "29.2g", "39.5g", "×"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="ハンバーグはソース・チーズの有無で選ぶ">
            <p>デニーズのハンバーグは<Marker>ソースやチーズの有無で脂質・カロリーが変わります</Marker>。All Beef ハンバーグ～おろしソース（444kcal・脂質30.1g）やデミ煮込みハンバーグ（脂質28.6g）はベーコンチーズハンバーグ（563kcal・脂質39.5g）より脂質・カロリーともに低め。ファミレスでハンバーグを食べたいなら、おろし・煮込み系が選びやすい選択です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop" alt="ヘルシーなプレートランチのイメージ" />
        </section>

        {/* Section 5: 注文テクニック */}
        <section className="mb-16">
          <SectionHeading id="order-tips">デニーズで痩せるための注文テクニック</SectionHeading>

          <p className="mb-6">
            デニーズの注文時に実践できる<Marker>カロリーカットテクニック</Marker>を紹介します。少しの工夫で大きな差が出ます。
          </p>

          <SubSectionHeading>テクニック1：サラダをセットに追加する</SubSectionHeading>
          <p className="mb-6">
            メインの前にシーザーサラダ（149kcal）を注文し、先に食べましょう。<Marker>食物繊維を最初に摂ることで血糖値の急上昇を防ぎやすくなり</Marker>、食べ過ぎの抑制も期待できます。
          </p>

          <SubSectionHeading>テクニック2：ライスは少なめ or パンに変更</SubSectionHeading>
          <p className="mb-6">
            ライスを「少なめ」（168kcal）に変更すると、通常ライス（302kcal）から<Marker color="blue">約130kcal・炭水化物約30gカット</Marker>。パンに変更すると、バターを使わなければさらにカロリーを抑えられます。主食のカロリーを調整するのが最も手軽なダイエットテクニックです。
          </p>

          <SubSectionHeading>テクニック3：ソース・チーズの有無で選ぶ</SubSectionHeading>
          <p className="mb-6">
            ハンバーグは<Marker color="green">和風・おろし系がベスト</Marker>。ベーコンチーズやデミ煮込み系は脂質が高めなので、脂質を抑えたいときは避けましょう。同じハンバーグでもチーズやソースの違いで100kcal前後の差が生まれます。
          </p>

          <SubSectionHeading>テクニック4：ドリンクバーでは無糖を選ぶ</SubSectionHeading>
          <p className="mb-6">
            デニーズのドリンクバーは甘い飲み物の誘惑が多いですが、<Marker>ブラックコーヒー・無糖紅茶・緑茶</Marker>を選べば0kcal。ジュース1杯で100kcal以上摂ってしまうと、せっかくのメニュー選びが台無しになります。
          </p>

          <SubSectionHeading>テクニック5：おすすめの組み合わせパターン</SubSectionHeading>
          <p className="mb-4">
            デニーズでダイエット中におすすめの注文パターンを目的別にまとめました。
          </p>

          <ComparisonTable
            headers={["目的", "注文内容", "合計カロリー", "タンパク質"]}
            rows={[
              ["最小カロリー", "All Beef ハンバーグ～おろしソース + シーザーサラダ", "593 kcal", "27.5g"],
              ["高タンパク", "和風ハンバーグ + ローストビーフのパワーサラダ", "668 kcal", "35.6g"],
              ["バランス重視", "和風ハンバーグ + シーザーサラダ", "637 kcal", "30.0g"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-8">
            <Marker>サラダを先に食べてからメインに取りかかる</Marker>のが共通のルール。血糖値の急上昇を防ぎやすくなり、食べ過ぎの抑制も期待できます。
          </p>

          <TipBox title="デザートの誘惑を乗り越える方法">
            <p>デニーズのデザートメニューは非常に魅力的ですが、いちごのフレンチトーストで約418kcal、とちおとめのザ・サンデーで約575kcalあります。<Marker>どうしてもデザートが食べたい場合は、比較的軽めのいちごのゼリー仕立て（79kcal）を選ぶ</Marker>か、友人とシェアして量を半分にしましょう。</p>
          </TipBox>

          <WarningBox title="セットメニューの落とし穴に注意">
            <p>デニーズのセットメニュー（ハンバーグ+ドリンクバー+デザート）はお得感がありますが、<Marker>ドリンクバーで甘い飲み物2〜3杯（コーラ約89kcal/杯など）+ デザート（300〜500kcal）で合計500kcal以上の追加</Marker>になりがち。セットを頼むなら、ドリンクは無糖飲料のみ、デザートはスキップが無難です。</p>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="色鮮やかなサラダのイメージ" />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="そのメニュー、何kcal？ たべなびで今すぐ検索"
          subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
        />

        {/* Extra Image */}
        <ArticleImage src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop" alt="ヘルシーな食事を楽しむイメージ" />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-4">
            デニーズはメニューの選び方と注文テクニック次第でダイエットの味方になります。ハンバーグ系でもソースの選択で大きくカロリーが変わること、サラダやドリンクバーの活用法を覚えておけば安心です。
          </p>
          <p className="mb-6">
            この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "和風ハンバーグ（488kcal/P25.2g）は高タンパク、デミ煮込みハンバーグ（脂質28.6g）は脂質控えめでどちらも選びやすい",
              "All Beef ハンバーグ～おろしソース（444kcal/P22.7g）ならハンバーグ系で最もカロリーが低い",
              "ハンバーグはチーズやソースの有無で選び、ベーコンチーズ系は脂質が高め",
              "ライスを少なめにすると約130kcalカット。手軽にカロリー調整できる",
              "メインの前にシーザーサラダ（149kcal）でベジファースト",
              "デザートとドリンクバーの甘い飲み物は要注意。無糖飲料を選ぶ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はデニーズ公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="dennys-diet"
          items={[
            { q: "デニーズの最も低カロリーなメニューは？", a: "サラダ・単品ではシーザーサラダ～４種チーズ使用（149kcal）や焼鮭（170kcal）が低カロリーです。ハンバーグなどのメインを選ぶなら、All Beef ハンバーグ～おろしソース（444kcal）がハンバーグ系で最もカロリーが低く、タンパク質22.7gも確保できます。" },
            { q: "デニーズで700kcal超のメニューにはどんなものがある？", a: "とろ～り卵とチーズのオムライス（755kcal）、ハンバーグカレードリア（805kcal）、ミックスフライ定食（821kcal）、チキン南蛮定食（836kcal）など。これらは炭水化物や脂質が多いため、ダイエット中は頻度を抑えたいメニューです。" },
            { q: "デニーズのハンバーグを食べるときのカロリーカット方法は？", a: "ライスを少なめにして約130kcalカット、ハンバーグは和風・おろし系を選んでベーコンチーズ系より約75kcalカット、というのが手軽な方法です。メインの前にサラダを食べるベジファーストで血糖値の急上昇も防ぎやすくなります。" },
            { q: "デニーズでダイエット向きのハンバーグは？", a: "All Beef ハンバーグ～おろしソース（444kcal）はハンバーグ系で最もカロリーが低く、デミ煮込みハンバーグ（475kcal・脂質28.6g）は脂質を抑えやすい選択です。和風ハンバーグ（488kcal・タンパク質25.2g）も高タンパクでおすすめ。ベーコンチーズハンバーグ（563kcal・脂質39.5g）などチーズ入りは脂質が高めになります。" },
            { q: "デニーズのデザートはダイエット中に選べるものがある？", a: "いちごのフレンチトーストは約418kcal、とちおとめのザ・サンデーは約575kcalと高めです。比較的軽めのいちごのゼリー仕立て（79kcal）なら選びやすいですが、基本的にはデザートはスキップするか友人とシェアする工夫がおすすめです。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全メニューのカロリー・PFC・メニュー名を最新DB実データに再照合。架空メニュー（グリーンサラダ・海鮮サラダ・豆腐ハンバーグ・チーズインハンバーグ・デミグラスハンバーグ・ビーフシチューセット）を実在メニュー（シーザーサラダ・ローストビーフのパワーサラダ・焼鮭・All Beef ハンバーグ～おろしソース・ベーコンチーズハンバーグ・デミ煮込みハンバーグ・トロけるお肉のビーフシチュー）へ差し替え。和風ハンバーグ等の栄養値を実測値に修正し、ランキング・比較表・QuickAnswer・FAQ・まとめの依存記述も全て書き換え" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="dennys-diet" />

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
