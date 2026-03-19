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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】デニーズダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "デニーズの低カロリーメニューランキング、ハンバーグの選び方、ダイエット中のおすすめ注文テクニックを徹底解説。ファミレスで太らない食べ方がわかります。",
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
    url: "https://tabenavi.jp/guide/dennys-diet",
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
  mainEntityOfPage: "https://tabenavi.jp/guide/dennys-diet",
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          デニーズはファミリーレストランの中でも<Marker>メニューの幅広さとヘルシー志向のメニュー開発</Marker>に定評があるチェーンです。和食から洋食、サラダまでバリエーション豊富なため、ダイエット中でも食事に飽きることなく通い続けられます。
        </p>
        <p className="mb-4">
          特に<Marker>和風ハンバーグ（535kcal/P28g）</Marker>は、ハンバーグでありながらカロリーを抑えた優秀メニュー。デザートの誘惑さえ乗り越えれば、デニーズはダイエットの強い味方になります。
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
                body: "ライスの量を「小盛り」に変更可能。通常のライスから小盛りに変えるだけで約80kcalカットできます。セットメニューではパンに変更する選択肢もあります。",
              },
              {
                title: "単品サラダの種類が豊富",
                body: "サイドサラダやシーザーサラダなど、メインの前に野菜を摂れるメニューが充実。ベジファーストを実践しやすいのがデニーズの強みです。",
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
            デニーズの主要メニューをカロリーの低い順にランキング。<Marker color="blue">サラダ・和食系は300〜500kcal台と低カロリー</Marker>で、ハンバーグ系も選び方次第で600kcal以下に抑えられます。
          </p>

          <NutritionTable
            items={[
              { name: "グリーンサラダ", calories: 82, protein: 2.5, fat: 5.2, carbs: 6.8, highlight: true },
              { name: "海鮮サラダ", calories: 245, protein: 18.5, fat: 12.8, carbs: 14.2, highlight: true },
              { name: "豆腐ハンバーグ", calories: 385, protein: 22.5, fat: 18.2, carbs: 32.4, highlight: true },
              { name: "和風ハンバーグ", calories: 535, protein: 28.0, fat: 28.5, carbs: 42.2 },
              { name: "All Beefハンバーグ", calories: 620, protein: 30.5, fat: 35.8, carbs: 38.4 },
              { name: "デミグラスハンバーグ", calories: 698, protein: 29.5, fat: 38.2, carbs: 48.5 },
              { name: "ハンバーグカレードリア", calories: 742, protein: 24.8, fat: 32.5, carbs: 82.6 },
              { name: "チーズインハンバーグ", calories: 785, protein: 32.2, fat: 42.5, carbs: 52.4 },
              { name: "とろ〜り卵とチーズのオムライス", calories: 824, protein: 26.8, fat: 35.2, carbs: 92.5 },
              { name: "ビーフシチューセット", calories: 865, protein: 32.5, fat: 38.8, carbs: 82.4 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はセットメニュー（ライス含む）の場合の概算値です。単品注文時はライス分のカロリーが異なります。
          </p>

          <TipBox title="ハンバーグの選び方がカギ">
            <p>デニーズの看板はハンバーグですが、<Marker>ソースの種類で100〜200kcalの差が出ます</Marker>。和風ソース（535kcal）が最も低カロリーで、チーズインやデミグラスは脂質が跳ね上がります。ハンバーグを食べたいなら和風一択です。</p>
          </TipBox>

          <SubSectionHeading>PFCバランスで見るデニーズメニューの特徴</SubSectionHeading>
          <p className="mb-4">
            デニーズのハンバーグ系メニューは<Marker color="green">タンパク質22〜32gの範囲に集中</Marker>しており、いずれもタンパク質源としては優秀です。差が出るのは脂質と炭水化物。ソースにチーズやクリームを使ったメニューは脂質が40g超になる一方、和風ソースやポン酢系なら28g程度に抑えられます。
          </p>
          <p className="mb-8">
            また、デニーズの和食メニュー（焼き魚定食・そば等）は<Marker>カロリーが400〜550kcal台と非常に低い</Marker>のも見逃せないポイント。ハンバーグに飽きたら和食メニューも積極的に活用しましょう。
          </p>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中におすすめのデニーズメニュー</SectionHeading>

          <p className="mb-6">
            デニーズのメニューから、<Marker>ダイエット中でも安心して注文できるメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="和風ハンバーグ" subtitle="535kcal / P28.0g / F28.5g / C42.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              デニーズハンバーグの中で<Marker>最もダイエット向き</Marker>な一品。和風おろしソースでさっぱりと食べられ、タンパク質28gをしっかり確保。脂質28.5gはハンバーグとしては控えめで、大根おろしのさっぱり感が食べ過ぎを防いでくれます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ライスを小盛りにすれば約455kcalまで抑えられます。デニーズでハンバーグを食べたいなら、まずこれを選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="All Beefハンバーグ" subtitle="620kcal / P30.5g / F35.8g / C38.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">100%ビーフで作られたジューシーなハンバーグ</Marker>。タンパク質30.5gと高タンパクで、牛肉由来の鉄分やビタミンB12も摂取できます。脂質は35.8gとやや高めですが、ビーフの旨みで満足感が高く、デザートへの誘惑を断ち切りやすいメニューです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="豆腐ハンバーグ" subtitle="385kcal / P22.5g / F18.2g / C32.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">385kcalはハンバーグ系で最もカロリーが低い</Marker>メニュー。豆腐を使うことで脂質を18.2gまで抑えつつ、タンパク質は22.5gをキープ。大豆イソフラボンも摂れるため、女性のダイエットにも最適です。
            </p>
          </RankingCard>

          <SubSectionHeading>サイドメニューのおすすめ</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <NutritionCard
              name="グリーンサラダ"
              chain="デニーズ"
              calories={82}
              protein={2.5}
              fat={5.2}
              carbs={6.8}
              recommended
            />
            <NutritionCard
              name="海鮮サラダ"
              chain="デニーズ"
              calories={245}
              protein={18.5}
              fat={12.8}
              carbs={14.2}
              recommended
            />
          </div>

          <p className="mb-4">
            グリーンサラダは<Marker>わずか82kcalで食物繊維をしっかり摂取</Marker>できる優秀なサイドメニュー。メインの前に注文して先に食べることで、ベジファーストを実践できます。ドレッシングは和風を選ぶと、シーザー系より約30kcalカットできます。
          </p>

          <p className="mb-8">
            海鮮サラダは<Marker color="blue">タンパク質18.5gとサラダとしては高タンパク</Marker>。エビやイカから良質なタンパク質を摂取でき、メインのハンバーグと合わせれば合計タンパク質40g以上も可能です。
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
              <li><span className="font-bold">とろ〜り卵とチーズのオムライス（824kcal）</span> ─ 卵+チーズ+ライスで炭水化物92.5g。脂質も35.2gと高カロリーの代表格です。</li>
              <li><span className="font-bold">ビーフシチューセット（865kcal）</span> ─ ルーの脂質が高く、パンやライスと合わせると900kcal近くに。特別な日以外は避けましょう。</li>
              <li><span className="font-bold">チーズインハンバーグ（785kcal）</span> ─ 中からとろけるチーズが脂質を一気に押し上げ、F42.5g。和風ハンバーグとの差は250kcal。</li>
              <li><span className="font-bold">ハンバーグカレードリア（742kcal）</span> ─ ハンバーグ+カレー+ドリアの三重奏。炭水化物82.6gと糖質過多です。</li>
              <li><span className="font-bold">パンケーキ・パフェ系デザート</span> ─ 300〜500kcal台のデザートはメイン1食分のカロリー。食後のデザートは最大の敵です。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "判定"]}
            rows={[
              ["豆腐ハンバーグ", "385 kcal", "22.5g", "18.2g", "◎"],
              ["和風ハンバーグ", "535 kcal", "28.0g", "28.5g", "○"],
              ["All Beefハンバーグ", "620 kcal", "30.5g", "35.8g", "○"],
              ["チーズインハンバーグ", "785 kcal", "32.2g", "42.5g", "×"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="他ファミレスとのカロリー比較">
            <p>デニーズの和風ハンバーグ（535kcal）は、<Marker>ガストのチーズINハンバーグ（約750kcal）やロイヤルホストの黒×黒ハンバーグ（約820kcal）と比較しても低カロリー</Marker>。ファミレスでハンバーグを食べたいなら、デニーズの和風が最も賢い選択です。</p>
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
            メインの前にグリーンサラダ（82kcal）を注文し、先に食べましょう。<Marker>食物繊維を最初に摂ることで血糖値の急上昇を防ぎ</Marker>、脂肪の蓄積を抑えられます。ドレッシングは和風を選ぶとさらにカロリーダウン。
          </p>

          <SubSectionHeading>テクニック2：ライスは小盛り or パンに変更</SubSectionHeading>
          <p className="mb-6">
            ライスの小盛り変更で<Marker color="blue">約80kcal・炭水化物約20gカット</Marker>。パンに変更すると、バターを使わなければさらにカロリーを抑えられます。主食のカロリーを調整するのが最も手軽なダイエットテクニックです。
          </p>

          <SubSectionHeading>テクニック3：ソースはあっさり系を選ぶ</SubSectionHeading>
          <p className="mb-6">
            ハンバーグのソースは<Marker color="green">和風おろし・ポン酢系がベスト</Marker>。デミグラス、チーズ、クリーム系のソースは脂質が高いため避けましょう。同じハンバーグでもソースの選択で100〜200kcalの差が生まれます。
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
              ["最小カロリー", "豆腐ハンバーグ + グリーンサラダ", "467 kcal", "25.0g"],
              ["高タンパク", "All Beefハンバーグ + 海鮮サラダ", "865 kcal", "49.0g"],
              ["バランス重視", "和風ハンバーグ + グリーンサラダ（ライス小盛り）", "537 kcal", "30.5g"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-8">
            <Marker>サラダを先に食べてからメインに取りかかる</Marker>のが共通のルール。血糖値の急上昇を防ぎ、食べ過ぎも防止できます。
          </p>

          <TipBox title="デザートの誘惑を乗り越える方法">
            <p>デニーズのデザートメニューは非常に魅力的ですが、パンケーキ1皿で約450kcal。<Marker>どうしてもデザートが食べたい場合は、低カロリーのゼリー系（約80kcal）を選ぶ</Marker>か、友人とシェアして量を半分にしましょう。</p>
          </TipBox>

          <WarningBox title="セットメニューの落とし穴に注意">
            <p>デニーズのセットメニュー（ハンバーグ+ドリンクバー+デザート）はお得感がありますが、<Marker>ドリンクバーで甘い飲み物2〜3杯（200〜300kcal）+ デザート（300〜450kcal）で合計500〜750kcalの追加</Marker>に。セットを頼むなら、ドリンクは無糖飲料のみ、デザートはスキップが鉄則です。</p>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="色鮮やかなサラダのイメージ" />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="たべなびで外食の栄養管理を始めよう"
          subtitle="20チェーン・500メニューの栄養データ、全部無料"
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
              "和風ハンバーグ（535kcal/P28g）がハンバーグ系で最もダイエット向き",
              "豆腐ハンバーグ（385kcal/P22.5g）なら400kcal以下で満足感も十分",
              "ソースは和風おろし・ポン酢系を選び、チーズ・クリーム系は避ける",
              "ライス小盛りで約80kcalカット。五穀米がなくてもカロリー調整は可能",
              "メインの前にグリーンサラダ（82kcal）でベジファースト",
              "デザートとドリンクバーの甘い飲み物は最大の敵。無糖飲料を選ぶ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はデニーズ公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
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
