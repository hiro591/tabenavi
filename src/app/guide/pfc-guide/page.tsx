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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新版】【初心者向け】PFCバランスとは？計算方法と外食での実践ガイド | たべなび",
  description:
    "PFCバランス（タンパク質・脂質・炭水化物）の基本から計算方法まで初心者向けに解説。ダイエット・筋トレ・維持の3パターン別PFC比率と、外食で実践するコツを紹介します。",
  keywords: [
    "PFC バランス",
    "PFC 計算",
    "マクロ管理 やり方",
    "タンパク質 脂質 炭水化物",
    "PFCバランス ダイエット",
  ],
  openGraph: {
    title: "【初心者向け】PFCバランスとは？計算方法と外食での実践ガイド",
    description:
      "PFCバランスの基本から計算方法、外食での実践テクニックまで初心者向けに徹底解説。",
    url: "https://www.tabenavi.jp/guide/pfc-guide",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【初心者向け】PFCバランスとは？計算方法と外食での実践ガイド",
  description:
    "PFCバランスの基本から計算方法、ダイエット・筋トレ・維持の3パターン別PFC比率、外食での実践方法を解説。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/pfc-guide",
};

const tocItems = [
  { id: "what-is-pfc", label: "PFCバランスとは" },
  { id: "how-to-calculate", label: "1日の目安量の計算方法" },
  { id: "three-patterns", label: "目的別PFC比率3パターン" },
  { id: "eating-out", label: "外食でPFCを実践する方法" },
  { id: "mistakes", label: "よくある間違い5つ" },
  { id: "summary", label: "まとめ" },
];

export default function PfcGuidePage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="PFCバランスとは？"
        subtitle="計算方法と外食での実践ガイド【初心者向け】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="PFCバランスガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="pfc-guide">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月23日</p>

        {/* Introduction */}
        <p className="mb-4">
          ダイエットや筋トレを始めると必ず目にする「PFCバランス」。しかし、<Marker>実際に何をどれくらい食べればいいのか</Marker>がわからず挫折してしまう人が多いのが現実です。
        </p>
        <p className="mb-4">
          PFCバランスとは、P（タンパク質）・F（脂質）・C（炭水化物）の3つの栄養素の摂取比率のこと。この3つのバランスを意識するだけで、<Marker>同じカロリーでも体の変化が大きく変わります</Marker>。
        </p>
        <p className="mb-8">
          この記事では、PFCバランスの基本から計算方法、目的別の最適比率、そして外食で実践するための具体的なテクニックまで、初心者にもわかりやすく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ── Section 1: PFCバランスとは ── */}
        <section className="mb-16">
                  <QuickAnswer
          question={"PFCバランスとは何ですか？ダイエットに役立つのはなぜ？"}
          answer={"PFCバランスとは、P（タンパク質）・F（脂質）・C（炭水化物）の3大栄養素の摂取比率のこと。同じカロリーでもこのバランスを意識すると、体の変化が大きく変わります。特にダイエット中はタンパク質を30～35%確保することで、筋肉維持と食事誘発性熱産生の向上が期待でき、基礎代謝の低下を最小限に抑えられます。"}
        />

        <SectionHeading id="what-is-pfc">PFCバランスとは？3大栄養素の基本</SectionHeading>

          <p className="mb-4">
            PFCとは、<Marker>P = Protein（タンパク質）、F = Fat（脂質）、C = Carbohydrate（炭水化物）</Marker>の頭文字をとった略語です。これら3つは「三大栄養素（マクロ栄養素）」と呼ばれ、体のエネルギー源として欠かせない栄養素です。
          </p>

          <SubSectionHeading>P（Protein）= タンパク質</SubSectionHeading>
          <p className="mb-4">
            筋肉、皮膚、髪、臓器などの材料となる栄養素。<Marker color="blue">1gあたり4kcal</Marker>。ダイエット中でも筋肉を維持するために最も重要な栄養素です。肉、魚、卵、大豆製品に多く含まれます。
          </p>

          <SubSectionHeading>F（Fat）= 脂質</SubSectionHeading>
          <p className="mb-4">
            ホルモンの材料や細胞膜の構成要素。<Marker color="blue">1gあたり9kcal</Marker>と最もカロリーが高い栄養素です。摂りすぎると太る一方で、極端に減らすとホルモンバランスが崩れるため、適切な量の摂取が必要です。
          </p>

          <SubSectionHeading>C（Carbohydrate）= 炭水化物</SubSectionHeading>
          <p className="mb-6">
            脳や筋肉のエネルギー源。<Marker color="blue">1gあたり4kcal</Marker>。ご飯、パン、麺、果物に多く含まれます。不足すると集中力が低下し、過剰だと脂肪として蓄えられます。
          </p>

          <TipBox title="なぜカロリーだけでなくPFCを見るべきなのか">
            <p>同じ500kcalでも、おにぎり2個（C中心）とサラダチキン2個（P中心）では<Marker>体への影響がまったく違います</Marker>。タンパク質は筋肉の維持に使われ、食事誘発性熱産生（食べるだけで消費するカロリー）も高い。PFCバランスを意識することで、同じカロリーでも「痩せやすい食事」が実現できます。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
            alt="バランスの良い食事プレートのイメージ"
          />
        </section>

        {/* ── Section 2: 計算方法 ── */}
        <section className="mb-16">
          <SectionHeading id="how-to-calculate">1日の目安量の計算方法</SectionHeading>

          <p className="mb-4">
            PFCバランスの計算は、<Marker>体重をベースに係数を掛ける</Marker>だけのシンプルな方法です。以下の3ステップで自分の目安量を計算してみましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "Step 1：1日の目標カロリーを決める",
                body: "ダイエットなら「体重 x 25〜30kcal」、維持なら「体重 x 30〜35kcal」、増量なら「体重 x 35〜40kcal」が目安。例：体重60kgでダイエットなら、60 x 25 = 1,500kcal/日。",
              },
              {
                title: "Step 2：タンパク質（P）の量を決める",
                body: "ダイエット中は「体重 x 1.5〜2g」が目安。例：体重60kgなら90〜120g。タンパク質は1g = 4kcalなので、120g x 4 = 480kcal。",
              },
              {
                title: "Step 3：脂質（F）と炭水化物（C）を配分する",
                body: "残りのカロリーをF:C = 25%:残りで配分。例：1,500kcal - 480kcal(P) = 1,020kcal。脂質 = 1,500 x 0.25 = 375kcal = 約42g。炭水化物 = 1,020 - 375 = 645kcal = 約161g。",
              },
            ]}
          />

          <SubSectionHeading>体重60kgの計算例</SubSectionHeading>

          <ComparisonTable
            headers={["項目", "計算式", "結果"]}
            rows={[
              ["目標カロリー", "60kg x 25kcal", "1,500 kcal"],
              ["タンパク質（P）", "60kg x 2g = 120g", "480 kcal（32%）"],
              ["脂質（F）", "1,500 x 25% / 9", "42g / 375 kcal"],
              ["炭水化物（C）", "残り / 4", "161g / 645 kcal（43%）"],
            ]}
          />

          <TipBox title="計算が面倒な人向けのざっくり目安">
            <p>細かい計算が苦手な方は、<Marker>「毎食タンパク質を手のひら1枚分」「脂質は親指1本分」「炭水化物は拳1つ分」</Marker>と覚えておけばOK。完璧な計算より、大まかな意識を続けることの方がはるかに重要です。</p>
          </TipBox>
        </section>

        {/* ── Section 3: 3パターン別PFC比率 ── */}
        <section className="mb-16">
          <SectionHeading id="three-patterns">目的別PFC比率3パターン</SectionHeading>

          <p className="mb-4">
            PFCバランスの最適比率は、<Marker>ダイエット・筋トレ・維持の目的によって異なります</Marker>。以下の3パターンを参考に、自分の目的に合った比率を選びましょう。
          </p>

          <ComparisonTable
            headers={["目的", "P（タンパク質）", "F（脂質）", "C（炭水化物）", "カロリー目安"]}
            rows={[
              ["ダイエット", "30〜35%", "20〜25%", "40〜50%", "体重 x 25"],
              ["筋トレ（増量）", "25〜30%", "20〜25%", "45〜55%", "体重 x 35〜40"],
              ["体重維持", "20〜25%", "25〜30%", "50〜55%", "体重 x 30〜35"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>Pattern 1：ダイエット（減量）</SubSectionHeading>
          <p className="mb-4">
            ダイエットでは<Marker>タンパク質を多め（30〜35%）に設定</Marker>するのがポイント。タンパク質は食事誘発性熱産生が約30%と高く、食べるだけでカロリーを消費します。また、筋肉の分解を防ぐことで基礎代謝の低下を最小限に抑えられます。
          </p>

          <SubSectionHeading>Pattern 2：筋トレ（増量）</SubSectionHeading>
          <p className="mb-4">
            筋肉を増やしたい場合は<Marker color="blue">カロリーを多めに設定しつつ、タンパク質を体重 x 2g確保</Marker>。炭水化物を十分に摂ることでトレーニングのパフォーマンスが上がり、筋肥大に必要なエネルギーが確保できます。
          </p>

          <SubSectionHeading>Pattern 3：体重維持</SubSectionHeading>
          <p className="mb-6">
            体重を維持したい場合は、<Marker color="green">バランスの良い比率で無理なく続けること</Marker>が大切。極端な制限をせず、3大栄養素を満遍なく摂取する「王道の食事」が理想です。
          </p>

          <WarningBox title="極端なPFC比率は避けよう">
            <p>「脂質ゼロ」「炭水化物カット」などの極端な食事法は、<span className="font-bold">ホルモンバランスの乱れ、エネルギー不足、リバウンド</span>の原因になります。どのパターンでも、3つの栄養素をゼロにしないことが重要です。最低でも脂質は体重 x 0.5g以上は摂取しましょう。</p>
          </WarningBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop"
            alt="タンパク質豊富な食材が並ぶキッチンのテーブル"
          />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="外食のPFCバランスをサクッと確認"
          subtitle="たべなびなら20チェーン・500メニューの栄養成分をすぐに検索できます"
        />

        {/* ── Section 4: 外食でPFCを実践する方法 ── */}
        <section className="mb-16">
          <SectionHeading id="eating-out">外食でPFCを実践する方法</SectionHeading>

          <p className="mb-4">
            「PFCバランスを意識するのは自炊じゃないと無理」と思われがちですが、実は<Marker>チェーン店は栄養成分データが公開されているため、むしろ管理しやすい</Marker>のです。
          </p>

          <SubSectionHeading>チェーン店が管理しやすい3つの理由</SubSectionHeading>

          <NumberedList
            items={[
              {
                title: "栄養成分が公式に公開されている",
                body: "マクドナルド、すき家、サイゼリヤなど主要チェーンは全メニューのカロリー・PFC値を公開。自炊で食材を計量するよりも正確にPFCを把握できます。",
              },
              {
                title: "メニューが固定で再現性が高い",
                body: "チェーン店のメニューは全国どこでも同じ栄養成分。一度「この店ではこれを頼む」と決めれば、毎回同じPFCで食事ができます。",
              },
              {
                title: "カスタマイズで微調整が可能",
                body: "ご飯の量を減らす、ドレッシングを別添えにする、サイドメニューをサラダに変更するなど、チェーン店はカスタマイズ対応が充実しています。",
              },
            ]}
          />

          <SubSectionHeading>外食PFC管理の実践テクニック</SubSectionHeading>

          <p className="mb-4">
            以下のテクニックを使えば、外食中心の生活でもPFCバランスをコントロールできます。
          </p>

          <NumberedList
            items={[
              {
                title: "「タンパク質ファースト」で店を選ぶ",
                body: "まずタンパク質が確保できる店を選ぶのが基本。焼き鳥屋、定食屋、サブウェイなどは高タンパクメニューが豊富です。",
              },
              {
                title: "ご飯の量で炭水化物を調整",
                body: "多くのチェーン店はご飯の大盛り・並盛り・少なめが選べます。ご飯1膳（150g）は約250kcal・C55g。半分にするだけで125kcal・C27gカット。",
              },
              {
                title: "「見えない脂質」に注意する",
                body: "ドレッシング、マヨネーズ、揚げ油は「見えない脂質」の代表格。サラダでもシーザードレッシングをかけると脂質が15g以上増えることも。ノンオイルドレッシングを選ぶだけで大幅に脂質カットできます。",
              },
              {
                title: "たべなびで事前にPFCを確認",
                body: "外食する前にたべなびでメニューのPFCを確認する習慣をつけましょう。「何を食べるか」を事前に決めておくと、現場での誘惑に負けにくくなります。",
              },
            ]}
          />

          <TipBox title="外食PFC管理のおすすめチェーン">
            <p><Marker>サブウェイ（高P・低F）、大戸屋（バランス型定食）、すき家（牛丼ライトで低C）</Marker>は外食PFC管理がしやすいチェーンの代表格。たべなびではこれらのチェーンの全メニュー栄養成分を検索できます。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
            alt="栄養バランスの取れた定食スタイルの食事"
          />
        </section>

        {/* ── Section 5: よくある間違い5つ ── */}
        <section className="mb-16">
          <SectionHeading id="mistakes">PFCバランスでよくある間違い5つ</SectionHeading>

          <p className="mb-6">
            PFCバランスを始めたばかりの初心者が陥りやすい間違いを5つ紹介します。<Marker>これらを避けるだけで、PFC管理の効果が大きく変わります</Marker>。
          </p>

          <NumberedList
            items={[
              {
                title: "カロリーだけ見てPFCを無視する",
                body: "「1,500kcal以内に収めれば何を食べてもOK」は間違い。同じ1,500kcalでも、タンパク質不足だと筋肉が落ちて基礎代謝が下がり、リバウンドしやすい体になります。",
              },
              {
                title: "タンパク質を摂りすぎて脂質過多になる",
                body: "「タンパク質が大事」と聞いて肉を大量に食べると、一緒に脂質も大量に摂取してしまいます。鶏もも肉より鶏むね肉、豚バラより豚ロースなど、脂質の少ない部位を選ぶことが重要です。",
              },
              {
                title: "脂質を極端にカットする",
                body: "脂質は1g = 9kcalと高カロリーなので減らしたくなりますが、極端なカットはNG。ホルモン分泌に必要な栄養素であり、最低でも体重 x 0.5g（体重60kgなら30g）は摂取しましょう。",
              },
              {
                title: "毎食完璧なPFCを目指す",
                body: "1食ごとに完璧なPFCを計算するのは現実的ではありません。大切なのは「1日トータル」でバランスを取ること。昼にタンパク質が少なければ夜で補う、という柔軟な考え方が長続きのコツです。",
              },
              {
                title: "サプリに頼りすぎる",
                body: "プロテインはあくまで「補助」。食事から摂るタンパク質の方が吸収効率が良く、他の栄養素も一緒に摂れます。まずは食事でPFCを整え、足りない分だけサプリで補うのが正しい使い方です。",
              },
            ]}
          />

          <WarningBox title="最も危険な間違い：炭水化物の完全カット">
            <p>炭水化物を完全にカットすると、<span className="font-bold">脳のエネルギー不足、筋肉の分解、集中力の低下、イライラ</span>が起こります。短期的に体重は落ちますが、それは水分と筋肉の減少。長期的にはリバウンドのリスクが大幅に上がります。最低でも1日100gの炭水化物は摂取しましょう。</p>
          </WarningBox>

          <SubSectionHeading>間違いを防ぐチェックリスト</SubSectionHeading>

          <p className="mb-4">
            PFCバランスを正しく実践できているか、以下のチェックリストで確認してみましょう。<Marker>3つ以上当てはまる場合は、上記の間違いに陥っている可能性</Marker>があります。
          </p>

          <CheckList
            items={[
              "毎食の栄養バランスにこだわりすぎてストレスを感じている",
              "タンパク質源として脂身の多い肉ばかり食べている",
              "脂質を1日20g以下に抑えようとしている",
              "炭水化物をほぼゼロにしている日がある",
              "食事よりプロテインでタンパク質を摂ることが多い",
            ]}
          />

          <TipBox title="PFC管理は「ゆるく長く」が最強">
            <p><Marker>厳密に管理して1ヶ月で挫折するよりも、ざっくり管理して1年続ける方が圧倒的に効果的</Marker>です。目安値の前後10%程度のブレは気にせず、「大きく外れていないか」だけを確認する習慣をつけましょう。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
            alt="健康的な食材と計量ツールが並ぶテーブル"
          />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="たべなびでPFC管理を始めよう"
          subtitle="外食メニューのPFCバランスが一目でわかる、無料の栄養管理ツール"
        />

        {/* ── Section 6: まとめ ── */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ：PFCバランスを味方につけよう</SectionHeading>

          <p className="mb-6">
            PFCバランスは、ダイエットや筋トレの成果を左右する最も重要な基本知識です。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "PFC = タンパク質（P）・脂質（F）・炭水化物（C）の摂取比率",
              "タンパク質は体重 x 1.5〜2g、脂質は総カロリーの20〜25%が目安",
              "ダイエット・筋トレ・維持で最適なPFC比率は異なる",
              "チェーン店は栄養データが公開されているのでPFC管理がしやすい",
              "カロリーだけでなくPFCの内訳を意識することが成功の鍵",
              "極端な制限を避け、1日トータルでバランスを取ることが長続きのコツ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※PFC比率の目安は一般的な数値です。持病がある方や医師の指導を受けている方は、専門家のアドバイスに従ってください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="pfc-guide"
          items={[
            { q: "タンパク質・脂質・炭水化物の1gあたりのカロリーは？", a: "タンパク質と炭水化物は各1gあたり4kcal、脂質は1gあたり9kcalです。脂質は最もカロリーが高いですが、ホルモンと細胞膜の構成要素として最低でも体重×0.5g以上の摂取が必要です。" },
            { q: "体重60kgでダイエット中の1日のPFC目安量は？", a: "目標カロリーは60×25=1,500kcal。タンパク質60×2g=120g（480kcal）、脂質1,500×25%÷9≒42g、炭水化物約161gが目安。毎食「タンパク質手のひら1枚分、脂質親指1本分、炭水化物拳1つ分」で大まかに管理できます。" },
            { q: "ダイエット・筋トレ・体重維持で最適なPFC比率は異なる？", a: "はい、異なります。ダイエットはP30～35%・F20～25%・C40～50%、筋トレはP25～30%・F20～25%・C45～55%、維持はP20～25%・F25～30%・C50～55%が目安です。目的に合わせた調整が成功の鍵です。" },
            { q: "外食でPFCバランスを管理するコツは何ですか？", a: "チェーン店は栄養データが公開されているため管理しやすいです。タンパク質ファーストで店を選ぶ、ご飯の量で炭水化物調整、ノンオイルドレッシング選択、事前にメニュー確認が効果的。サブウェイ・大戸屋・すき家などが実践しやすいチェーンです。" },
            { q: "PFCバランス管理で避けるべき間違いは？", a: "カロリーだけを見てPFCを無視する、脂質を極端にカット、毎食完璧なPFCを目指す、炭水化物の完全カットが危険です。1日トータルでバランスを取る柔軟な考え方と、「ゆるく長く」続けることが成功につながります。" },
          ]}
        />

        <ArticleFooter currentSlug="pfc-guide" />

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
