import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  SourceNote,
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "餃子の王将のダイエットメニュー｜高タンパク・低カロリーの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/ohsho-diet" },
  description:
    "餃子の王将で太りにくいメニューの選び方を、カロリー・タンパク質・PFCの実データで解説。唐揚げ・レバニラ・餃子など主要メニューを高タンパク／低カロリー順に整理し、ダイエット中でも王将を楽しむコツを紹介します。",
  keywords: [
    "餃子の王将 カロリー",
    "餃子の王将 ダイエット",
    "餃子の王将 タンパク質",
    "餃子の王将 低カロリー",
    "餃子の王将 太らない",
    "餃子の王将 高タンパク",
  ],
  openGraph: {
    title: "餃子の王将のダイエットメニュー｜高タンパク・低カロリーの選び方",
    description:
      "餃子の王将で太りにくいメニューの選び方を、カロリー・タンパク質・PFCの実データで解説。唐揚げ・レバニラ・餃子など主要メニューを高タンパク／低カロリー順に整理し、ダイエット中でも王将を楽しむコツを紹介します。",
    url: "https://www.tabenavi.jp/guide/ohsho-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "餃子の王将のダイエットメニュー｜高タンパク・低カロリーの選び方",
  description:
    "餃子の王将で太りにくいメニューの選び方を、カロリー・タンパク質・PFCの実データで解説。唐揚げ・レバニラ・餃子など主要メニューを高タンパク／低カロリー順に整理し、ダイエット中でも王将を楽しむコツを紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/ohsho-diet",
};

const tocItems = [
  { id: "high-protein", label: "高タンパクメニューランキング" },
  { id: "low-calorie", label: "低カロリーで選ぶ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "how-to-eat", label: "太りにくい食べ方・組み合わせ" },
  { id: "tips", label: "王将でダイエットを成功させるコツ" },
  { id: "summary", label: "まとめ" },
];

export default function OhshoDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="餃子の王将でダイエット"
        subtitle="高タンパク・低カロリーメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop"
        breadcrumb="餃子の王将ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="ohsho-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question={"餃子の王将でダイエット中に選ぶならどのメニューがいい？"}
          answer={
            <>
              タンパク質をしっかり摂りたいなら<strong>ニラレバ炒め定食（685kcal／P30g）</strong>や<strong>鶏の唐揚げ（425kcal／P25g）</strong>、おかず単品なら<strong>レバニラ炒め（385kcal／P22g）</strong>が高タンパクです。カロリーを抑えたいなら<strong>春巻（265kcal）・餃子6個（276kcal）・エビのチリソース（325kcal）</strong>が軽め。一方で<strong>チャーハン（668kcal）や餃子定食（745kcal）</strong>は高カロリーなので、おかず単品＋ご飯少なめに置き換えると1食で300kcal以上の差がつきます。
            </>
          }
        />

        {/* 導入文 */}
        <p className="mb-4">
          餃子の王将は中華の定番がそろう人気チェーンですが、<Marker>炒飯や天津飯などのご飯ものは1品で600kcalを超える</Marker>ため、選び方を間違えるとカロリーが一気に膨らみます。一方で、レバニラや唐揚げなどの<Marker color="green">おかず系は高タンパクで腹持ちもよい</Marker>のが特徴です。
        </p>
        <p className="mb-4">
          ポイントは「ご飯もの1品」で完結させず、<Marker color="blue">高タンパクのおかず＋ご飯少なめ</Marker>に組み替えること。たとえばチャーハン（668kcal／P18g）を、レバニラ炒め（385kcal／P22g）＋ご飯少なめに置き換えるだけで、カロリーを抑えつつタンパク質を増やせます。
        </p>
        <p className="mb-8">
          この記事では、餃子の王将の主要メニューをカロリー・タンパク質・PFCの実データで整理し、ダイエット中でも満足できる選び方と組み合わせを解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="ohsho-gyoza" genre="chinese" />

        {/* Section 1: 高タンパクランキング */}
        <section className="mb-16">
          <SectionHeading id="high-protein">餃子の王将 高タンパクメニューランキング</SectionHeading>

          <p className="mb-4">
            餃子の王将は中華チェーンの中でも<Marker>レバーや鶏肉を使った高タンパクメニュー</Marker>が選びやすいのが強み。タンパク質量の多い順にベスト3を紹介します。
          </p>

          <RankingCard
            rank={1}
            title="ニラレバ炒め定食"
            subtitle="685kcal / P30.0g / F25.0g / C78.0g"
            calories={685}
            protein={30}
            fat={25}
            carbs={78}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              王将メニューの中で<Marker color="green">タンパク質30gと最多</Marker>。レバーは鉄分も豊富で、しっかり食べたい日のメインに向いています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              定食なのでカロリーは685kcalと高めですが、ご飯を少なめにすればカロリーと糖質を抑えつつ高タンパクをキープできます。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="鶏の唐揚げ"
            subtitle="425kcal / P25.0g / F28.0g / C15.0g"
            calories={425}
            protein={25}
            fat={28}
            carbs={15}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              揚げ物ながら<Marker>炭水化物15gと低糖質</Marker>で、タンパク質は25g。脂質は28gと高めなので、量を欲張らず単品＋ご飯少なめでまとめるのがコツです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              「揚げ物が食べたいけど糖質は抑えたい」日に、ご飯もの単品より相性のよい一皿です。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="レバニラ炒め"
            subtitle="385kcal / P22.0g / F20.0g / C22.0g"
            calories={385}
            protein={22}
            fat={20}
            carbs={22}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">385kcalでタンパク質22g</Marker>と、カロリーあたりのタンパク質効率が優秀。野菜（ニラ・もやし）も摂れてビタミン・食物繊維も補えます。おかず単品の中ではダイエット時の主役にしやすい一品です。
            </p>
          </RankingCard>

          <p className="mb-4">
            上位3品に続くのが餃子定食（745kcal／P28g）、麻婆豆腐（398kcal／P18g）、酢豚（498kcal／P18g）。<Marker color="blue">定食は高タンパクですがカロリーも高い</Marker>ため、ご飯量の調整が前提になります。
          </p>

          <SourceNote asOf="2026年6月" />

          <TipBox title="王将の高タンパクを活かすコツ">
            <p>
              レバニラ炒め（385kcal／P22g）や鶏の唐揚げ（425kcal／P25g）など<Marker>おかず単品はタンパク質効率がよい</Marker>のが王将の強み。ご飯ものを軽くする分、おかずでタンパク質を確保すると満足感を保ったままカロリーを抑えられます。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーで選ぶ */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選ぶ餃子の王将メニュー</SectionHeading>

          <p className="mb-4">
            カロリーを最優先で抑えたいときの選択肢を、低い順に整理しました。<Marker color="blue">単品メニューを組み合わせる</Marker>と、量を調整しながらカロリーをコントロールできます。
          </p>

          <NutritionTable
            items={[
              { name: "春巻（3本）", calories: 265, protein: 8, fat: 15, carbs: 24, highlight: true },
              { name: "餃子（6個）", calories: 276, protein: 12, fat: 13, carbs: 28, highlight: true },
              { name: "エビのチリソース", calories: 325, protein: 16, fat: 15, carbs: 28, highlight: true },
              { name: "レバニラ炒め", calories: 385, protein: 22, fat: 20, carbs: 22, highlight: true },
              { name: "麻婆豆腐", calories: 398, protein: 18, fat: 25, carbs: 20 },
              { name: "回鍋肉", calories: 410, protein: 15, fat: 28, carbs: 18 },
              { name: "鶏の唐揚げ", calories: 425, protein: 25, fat: 28, carbs: 15 },
              { name: "酢豚", calories: 498, protein: 18, fat: 28, carbs: 38 },
              { name: "天津飯", calories: 582, protein: 16, fat: 18, carbs: 84 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は餃子の王将公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <p className="mb-4">
            最も軽いのは<Marker>春巻（3本・265kcal）</Marker>と<Marker>餃子6個（276kcal）</Marker>。餃子は1品でタンパク質12gが摂れるため、王将らしさを残しながらカロリーを抑えたい人に向いています。タンパク質も同時に重視するなら、エビのチリソース（325kcal／P16g）やレバニラ炒め（385kcal／P22g）が効率的です。
          </p>

          <TipBox title="単品の組み合わせで300〜400kcalにまとめる">
            <p>
              ご飯もの1品ではなく、<Marker color="blue">餃子6個（276kcal）＋ご飯少なめ</Marker>や<Marker color="blue">レバニラ炒め（385kcal）単品</Marker>のように軽い単品を主役にすると、1食を300〜400kcal台に収めやすくなります。野菜系のおかずを足せば満足感も補えます。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop"
          alt="餃子のイメージ"
        />

        {/* Section 3: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            餃子の王将で注意したいのは、<Marker>ご飯と油を多く使うメニュー</Marker>。気づかないうちに1食で600〜700kcalを超えます。
          </p>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["餃子定食", "745 kcal", "P 28.0g", "F 32.0g", "C 82.0g"],
              ["チャーハン", "668 kcal", "P 18.0g", "F 24.0g", "C 90.0g"],
              ["炒飯", "658 kcal", "P 18.0g", "F 22.0g", "C 92.0g"],
              ["天津飯", "585 kcal", "P 16.0g", "F 15.0g", "C 90.0g"],
            ]}
          />

          <p className="mb-4">
            最も高カロリーなのは<Marker>餃子定食（745kcal）</Marker>。チャーハン・炒飯は炭水化物が90g前後と多く、タンパク質は18gほどにとどまります。<Marker color="blue">「ご飯もの単品で完結」がカロリー過多の主因</Marker>になりやすいので注意しましょう。
          </p>

          <WarningBox title="ダイエット中は注文に気をつけたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">餃子定食（745kcal）</span> ─ 餃子＋ご飯のセットで炭水化物82g・脂質32gと高め。ご飯少なめにするか、餃子単品（276kcal）に置き換えを検討。</li>
              <li><span className="font-bold">チャーハン（668kcal）・炒飯（658kcal）</span> ─ 炭水化物90g前後でタンパク質は18g。ご飯もの単品はカロリーが高くなりがち。</li>
              <li><span className="font-bold">天津飯（585kcal）</span> ─ あんとご飯で炭水化物が多め。レバニラ炒め（385kcal）などのおかず系に比べてタンパク質効率は低めです。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            これらを避けるのではなく、<Marker color="green">高タンパクのおかず＋ご飯少なめに組み替える</Marker>のがコツ。たとえばチャーハン（668kcal）をレバニラ炒め（385kcal）＋ご飯少なめにすると、カロリーを抑えつつタンパク質を増やせます。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="餃子の王将のカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: 太りにくい食べ方・組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="how-to-eat">太りにくい食べ方・組み合わせ</SectionHeading>

          <p className="mb-6">
            餃子の王将は<Marker>単品メニューが豊富</Marker>なので、組み合わせ次第でカロリーとPFCを自由に設計できます。目的別のおすすめ組み合わせを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ組み合わせ", "カロリー目安", "タンパク質"]}
            rows={[
              ["低カロリー", "餃子（6個）＋ご飯少なめ", "約400 kcal前後", "P 12g+"],
              ["高タンパク", "レバニラ炒め ＋ ご飯少なめ", "約500 kcal前後", "P 22g+"],
              ["がっつり", "ニラレバ炒め定食（ご飯少なめ）", "685 kcal以下", "P 30g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            最もバランスがよいのは<Marker color="green">レバニラ炒め（385kcal／P22g）＋ご飯少なめ</Marker>。おかずでタンパク質と野菜を確保しつつ、ご飯量で総カロリーを調整できます。チャーハン1品（668kcal／P18g）と比べても、カロリーを抑えながらタンパク質を増やせるのが強みです。
          </p>

          <SubSectionHeading>食べる順番と組み合わせの工夫</SubSectionHeading>

          <NumberedList
            items={[
              {
                title: "おかず（タンパク質・野菜）から食べる",
                body: "レバニラ炒めや回鍋肉など、野菜とタンパク質を含むおかずから食べ始めると満腹感が得やすく、ご飯の食べ過ぎを防げます。最初にご飯を口に入れないのがコツです。",
              },
              {
                title: "ご飯は「少なめ」を基本にする",
                body: "炒飯・天津飯などご飯もの1品で完結させず、おかず＋ご飯少なめに分けると糖質と総カロリーを抑えられます。ご飯ものを選ぶ日もご飯少なめが可能か確認しましょう。",
              },
              {
                title: "高タンパクおかずを1品は入れる",
                body: "レバニラ炒め（P22g）・鶏の唐揚げ（P25g）・エビのチリソース（P16g）など、タンパク質源を1品入れると腹持ちがよくなり、間食を防ぎやすくなります。",
              },
              {
                title: "揚げ物・あん・タレは量を意識する",
                body: "唐揚げや酢豚、天津飯のあんは脂質や糖質が乗りやすい部分。食べる量を欲張らず、軽いおかずと組み合わせてバランスを取りましょう。",
              },
            ]}
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
            alt="栄養バランスの良い食事のイメージ"
          />

          <SubSectionHeading>PFCバランスで見る王将メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（カロリー制限・高タンパク・低糖質）によって、<Marker>王将で選ぶべきメニューは変わります</Marker>。目的別の選び方を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["カロリー制限", "春巻（3本）", "265 kcal", "最も軽い単品"],
              ["高タンパク", "ニラレバ炒め定食", "685 kcal", "P30gで王将最多"],
              ["タンパク効率", "レバニラ炒め", "385 kcal", "低カロリーでP22g"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            タンパク質効率（カロリーあたりのタンパク質）で見ると、<Marker color="blue">レバニラ炒め（385kcal／P22g）</Marker>が優秀。低カロリーながらしっかりタンパク質を確保できるため、減量中のおかず選びの基準にしやすい一品です。
          </p>
        </section>

        {/* Section 5: コツ */}
        <section className="mb-16">
          <SectionHeading id="tips">王将でダイエットを成功させるコツ</SectionHeading>

          <p className="mb-6">
            餃子の王将ならではの<Marker>単品メニューの組み合わせ</Marker>を活かした、ダイエット時のチェックポイントをまとめました。
          </p>

          <CheckList
            items={[
              "ご飯もの1品で完結させず、高タンパクおかず＋ご飯少なめに組み替える",
              "おかず単品はレバニラ炒め（P22g）・鶏の唐揚げ（P25g）など高タンパクを優先",
              "最も軽い春巻（265kcal）・餃子6個（276kcal）で量を調整する",
              "炒飯・天津飯などご飯ものは炭水化物が多いので頻度と量に注意",
              "野菜・タンパク質のおかずから食べ始め、満腹感を先に得る",
            ]}
          />

          <TipBox title="王将を週に取り入れるなら">
            <p>
              週に複数回利用する場合は注文を変えて飽きを防ぐのがおすすめ。例：低カロリー日＝餃子6個（276kcal）＋ご飯少なめ、高タンパク日＝レバニラ炒め（385kcal／P22g）、がっつり日＝ニラレバ炒め定食（685kcal／P30g、ご飯少なめ）。<Marker>同じチェーンでも組み合わせを変えることで、栄養バランスを整えやすくなります</Marker>。
            </p>
          </TipBox>

          <p className="mb-4">
            餃子の王将は単品が豊富なぶん、選び方次第で<Marker color="blue">1食300kcal台にも700kcal超にもなる</Marker>チェーンです。数字を知って組み合わせれば、ダイエット中でも無理なく楽しめます。さらに細かく比較したい場合は、たべなびで王将のメニューをカロリー・PFC順に並べ替えて確認できます。
          </p>

          <p className="mb-4 text-sm text-gray-600">
            関連：
            <Link href="/chains/ohsho" className="text-sky-600 hover:underline mx-1">餃子の王将のメニュー栄養一覧</Link>
            ／
            <Link href="/chains/ohsho/high-protein" className="text-sky-600 hover:underline mx-1">高タンパクメニュー</Link>
            ／
            <Link href="/chains/ohsho/diet" className="text-sky-600 hover:underline mx-1">ダイエット向けメニュー</Link>
            ／
            <Link href="/chains/ohsho/low-calorie" className="text-sky-600 hover:underline mx-1">低カロリーメニュー</Link>
          </p>

          <p className="mb-4 text-sm text-gray-600">
            あわせて読みたい：
            <Link href="/guide/high-protein-chain-database" className="text-sky-600 hover:underline mx-1">高タンパクチェーン横断データベース</Link>
            ／
            <Link href="/guide/protein-cost-ranking" className="text-sky-600 hover:underline mx-1">タンパク質コスパランキング</Link>
            ／
            <Link href="/guide/muscle-eating-out" className="text-sky-600 hover:underline mx-1">外食で筋肉を増やす食べ方</Link>
            ／
            <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline mx-1">外食ダイエットの基本</Link>
          </p>
        </section>

        <ServiceOffers tag="protein" />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "高タンパクはニラレバ炒め定食（685kcal／P30g）・鶏の唐揚げ（425kcal／P25g）・レバニラ炒め（385kcal／P22g）が上位",
              "低カロリーは春巻（265kcal）・餃子6個（276kcal）・エビのチリソース（325kcal）が軽め",
              "避けたい高カロリーは餃子定食（745kcal）・チャーハン（668kcal）・炒飯（658kcal）",
              "ご飯もの1品で完結させず、高タンパクおかず＋ご飯少なめに組み替えるのがコツ",
              "レバニラ炒め＋ご飯少なめがカロリーとタンパク質のバランスに優れる",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は餃子の王将公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="ohsho-diet"
          items={[
            {
              q: "餃子の王将で一番カロリーが低いメニューは何ですか？",
              a: "主要メニューでは春巻（3本・265kcal）が最も軽く、次いで餃子6個（276kcal）、エビのチリソース（325kcal）と続きます。タンパク質も摂りたい場合は、餃子6個（P12g）やエビのチリソース（P16g）、レバニラ炒め（385kcal／P22g）がおすすめです。",
            },
            {
              q: "餃子の王将で高タンパクなメニューはどれですか？",
              a: "ニラレバ炒め定食がタンパク質30gで最多、次いで餃子定食（P28g）、鶏の唐揚げ（425kcal／P25g）、レバニラ炒め（385kcal／P22g）の順です。低カロリーで効率よくタンパク質を摂るならレバニラ炒め、しっかり食べたい日はニラレバ炒め定食が向いています。",
            },
            {
              q: "ダイエット中に避けたほうがいい王将のメニューは？",
              a: "餃子定食（745kcal）、チャーハン（668kcal）、炒飯（658kcal）、天津飯（585kcal）はカロリーや炭水化物が高めです。これらを避けるよりも、レバニラ炒め（385kcal／P22g）などの高タンパクおかず＋ご飯少なめに組み替えると、満足感を保ちつつカロリーを抑えられます。",
            },
            {
              q: "餃子はダイエット中に食べても大丈夫ですか？",
              a: "餃子6個は276kcal・タンパク質12gで、ご飯もの1品（600kcal超）に比べると軽めです。タレを控えめにし、ご飯を少なめにすれば、王将らしさを残しながらカロリーをコントロールできます。量を欲張らないことがポイントです。",
            },
            {
              q: "炒飯やチャーハンが食べたいときはどうすればいい？",
              a: "炒飯（658kcal）・チャーハン（668kcal）は炭水化物が90g前後と多めです。どうしても食べたい日は、揚げ物や追加のご飯ものを重ねず、レバニラ炒めなど野菜・タンパク質のおかずを先に食べて全体量を調整しましょう。",
            },
            {
              q: "王将でPFCバランスを整えるにはどう注文すればいい？",
              a: "ご飯もの1品で完結させず、高タンパクおかず（レバニラ炒めP22g・鶏の唐揚げP25gなど）＋ご飯少なめに分けるのが基本です。おかずでタンパク質と野菜を確保し、ご飯量で糖質と総カロリーを調整すると、目的に合わせてバランスを設計できます。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="ohsho-diet" />

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
