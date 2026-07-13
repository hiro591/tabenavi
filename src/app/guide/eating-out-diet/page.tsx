import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
  TipBox,
  WarningBox,
  ArticleImage,
  CTABanner,
  ComparisonTable,
  NumberedList,
  ArticleFooter,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/eating-out-diet" },
  title:
    "【2026年最新】外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方 | たべなび",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。PFCバランスの基本も解説。",
  keywords:
    "外食 ダイエット,外食 痩せる,チェーン店 ダイエット,外食 カロリー,ダイエット 外食 おすすめ",
  openGraph: {
    title:
      "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
    description:
      "外食しながら痩せたい人のための完全ガイド。チェーン店別おすすめメニューと太らない食べ方を紹介。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。",
  datePublished: "2026-03-01",
  dateModified: "2026-06-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/eating-out-diet",
};

const tocItems = [
  { id: "is-it-possible", label: "外食でダイエットは可能？" },
  { id: "chain-menus", label: "チェーン店別おすすめメニュー" },
  { id: "five-rules", label: "太らないための5つのルール" },
  { id: "pfc-basics", label: "PFCバランスの基本" },
  { id: "summary", label: "まとめ" },
];

export default function EatingOutDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <ArticleHero
        title="外食ダイエット完全ガイド"
        subtitle="チェーン店別おすすめメニューと太らない食べ方"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="外食ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="eating-out-diet">
        {/* Authority Badge */}
        <div className="mb-4">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 10分
          </p>
          <AffiliateDisclosure />
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="外食しながら本当に痩せられますか？どんなメニューを選べばいい？"
          answer={
            <>
              <strong>結論: 外食でも工夫次第で十分にダイエット可能</strong>です。鍵となるのは「①1食あたり500kcal以下を意識」「②高タンパク・低脂質メニューを優先」「③セットではなく単品＋サイドサラダ」の3点。例えばマクドナルドのハンバーガー単品（259kcal）、吉野家の牛皿 並盛（281kcal/P13.5g）、サイゼリヤの辛味チキン（295kcal）など、各チェーンに「ダイエット向き神メニュー」が存在します。
            </>
          }
        />

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけど、外食をやめられない...」そんな悩みを持つ方は多いのではないでしょうか。実は、
          <strong className="text-gray-900">
            外食＝太るというのは大きな誤解
          </strong>
          です。メニューの選び方と食べ方のコツさえ押さえれば、マクドナルドでも吉野家でもダイエットは十分に可能です。
        </p>
        <p className="mb-10">
          この記事では、主要チェーン店のダイエット向きメニューを
          <strong className="text-gray-900">
            具体的なカロリー・PFCデータ
          </strong>
          とともに紹介し、外食でも確実に痩せるための実践的なルールを解説します。
        </p>
        <p className="mb-10 text-sm text-gray-500">
          ※本記事の前提となるデータ根拠は
          <Link href="/guide/eating-out-nutrition-report" className="text-sky-600 underline">
            外食6,097品を全数集計した統計レポート
          </Link>
          にまとめています。
        </p>

        {/* Table of Contents — desktop uses sidebar */}

        {/* ─── Section 1: 外食でダイエットは可能？ ─── */}
        <section className="mb-12">
          <SectionHeading id="is-it-possible">
            外食でダイエットは可能？
          </SectionHeading>
          <p className="mb-4">
            結論から言えば、
            <strong className="text-gray-900">
              外食でもダイエットは十分に可能
            </strong>
            です。ダイエットの大原則は「消費カロリー &gt; 摂取カロリー」というシンプルな方程式。これは自炊でも外食でも変わりません。
          </p>
          <p className="mb-6">
            多くの人が「外食＝太る」と思い込んでいるのは、外食時に高カロリーなメニューを無意識に選んでしまうから。実際にはチェーン店のメニューには
            <strong className="text-gray-900">300kcal台のものも多数</strong>
            あり、選び方次第でダイエット食になります。
          </p>

          <TipBox title="カロリー管理の基本数値">
            <ul className="space-y-1.5 list-none">
              <li>成人男性の1日の消費カロリー目安: <strong>約2,200〜2,600kcal</strong></li>
              <li>成人女性の1日の消費カロリー目安: <strong>約1,700〜2,000kcal</strong></li>
              <li>ダイエット中の1食あたりの目安: <strong>500〜700kcal</strong></li>
              <li>月に1kg痩せるには: 1日あたり<strong>約240kcalの赤字</strong>が必要</li>
            </ul>
          </TipBox>

          <p>
            つまり、1食を500〜700kcalに抑えれば、外食しても十分にダイエットできます。チェーン店は栄養成分が公開されているので、むしろ個人経営のレストランより管理しやすいとも言えます。
          </p>
        </section>

        {/* Photo: Salad */}
        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="ヘルシーなサラダの写真"
        />

        {/* ─── Section 2: チェーン店別おすすめメニュー ─── */}
        <section className="mb-12">
          <SectionHeading id="chain-menus">
            チェーン店別おすすめメニュー
          </SectionHeading>
          <p className="mb-8">
            ここからは、主要チェーン店ごとにダイエット中でも食べられるメニューを具体的なカロリー・PFCデータとともに紹介します。すべてのデータは各社公式サイトの公開情報に基づいています。
          </p>

          {/* マクドナルド */}
          <div className="mb-12">
            <SubSectionHeading>マクドナルドのダイエットメニュー</SubSectionHeading>
            <p className="mb-4">
              意外かもしれませんが、マクドナルドにはダイエット向きのメニューが複数あります。ポイントは
              <strong className="text-gray-900">
                バーガー単品で注文し、セットのポテトとドリンクを避ける
              </strong>
              こと。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <NutritionCard
                name="ハンバーガー"
                chain="マクドナルド"
                calories={259}
                protein={13.0}
                fat={9.5}
                carbs={30.3}
                price={190}
                recommended
              />
              <NutritionCard
                name="エッグマックマフィン"
                chain="マクドナルド"
                calories={310}
                protein={18.6}
                fat={13.6}
                carbs={27.2}
                price={290}
                recommended
              />
              <NutritionCard
                name="マックチキン®"
                chain="マクドナルド"
                calories={383}
                protein={13.5}
                fat={19.2}
                carbs={39.5}
              />
            </div>
          </div>

          {/* Photo: Hamburger */}
          <ArticleImage
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
            alt="ハンバーガーの写真"
          />

          {/* 吉野家 */}
          <div className="mb-12">
            <SubSectionHeading>吉野家のダイエットメニュー</SubSectionHeading>
            <p className="mb-4">
              吉野家でダイエット中に最も重要なのは
              <strong className="text-gray-900">サイズ選び</strong>
              です。牛丼は並盛（633kcal）と大盛（823kcal）で約190kcalもの差があります。ご飯なしの「牛皿」を選べばさらに低カロリーに抑えられます。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <NutritionCard
                name="牛皿 並盛"
                chain="吉野家"
                calories={281}
                protein={13.5}
                fat={22.9}
                carbs={5.2}
                price={368}
                recommended
              />
              <NutritionCard
                name="牛丼（小盛）"
                chain="吉野家"
                calories={474}
                protein={15.4}
                fat={19.6}
                carbs={60.9}
                price={398}
                recommended
              />
              <NutritionCard
                name="牛丼（並盛）"
                chain="吉野家"
                calories={633}
                protein={19.6}
                fat={23.6}
                carbs={88.2}
                price={380}
              />
            </div>
          </div>

          {/* Photo: Gyudon */}
          <ArticleImage
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=400&fit=crop"
            alt="牛丼の写真"
          />

          {/* Mid-article CTA */}
          <CTABanner
            title="外食の栄養管理、もっとラクにしませんか？"
            subtitle="たべなびなら3タップで記録完了"
          />

          {/* サイゼリヤ */}
          <div className="mb-12">
            <SubSectionHeading>サイゼリヤのダイエットメニュー</SubSectionHeading>
            <p className="mb-4">
              サイゼリヤはコストパフォーマンスが高く、
              <strong className="text-gray-900">比較的カロリーが低めのメニューも揃っています</strong>。
              ただし、サイゼリヤは公式にPFC（タンパク質・脂質・炭水化物）を非公開としているため、カロリーと価格のみを掲載します。
            </p>
            <ComparisonTable
              headers={["メニュー", "カロリー", "価格"]}
              rows={[
                ["辛味チキン", "295 kcal", "¥300"],
                ["若鶏のディアボラ風", "683 kcal", "¥500"],
                ["ミックスグリル", "702 kcal", "¥650"],
                ["小エビのサラダ", "198 kcal", "¥350"],
              ]}
              bestRowIndex={0}
            />
            <p className="text-xs text-gray-500 mt-2">
              ※サイゼリヤはPFCを公式非公開のため、カロリー・価格のみ掲載。たんぱく質量の断定はできません。
            </p>
          </div>

          {/* コンビニ */}
          <div className="mb-12">
            <SubSectionHeading>コンビニのダイエットメニュー</SubSectionHeading>
            <p className="mb-4">
              コンビニは
              <strong className="text-gray-900">
                栄養表示が全商品に記載
              </strong>
              されているため、カロリー管理が最もしやすい外食先です。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <NutritionCard
                name="たんぱく質が摂れる！鶏むね肉とたまごのサラダ"
                chain="ファミリーマート"
                calories={169}
                protein={23.0}
                fat={7.2}
                carbs={3.4}
                recommended
              />
              <NutritionCard
                name="スパイスチキン"
                chain="セブンイレブン"
                calories={200}
                protein={14.2}
                fat={11.0}
                carbs={11.2}
                recommended
              />
              <NutritionCard
                name="たんぱく質が摂れる鶏むね肉サラダ"
                chain="セブンイレブン"
                calories={199}
                protein={21.8}
                fat={10.9}
                carbs={4.4}
              />
            </div>
          </div>

          {/* Photo: Convenience store */}
          <ArticleImage
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=400&fit=crop"
            alt="コンビニ食品の写真"
          />
        </section>

        {/* ─── Section 3: 5つのルール ─── */}
        <section className="mb-12">
          <SectionHeading id="five-rules">
            太らないための5つのルール
          </SectionHeading>
          <p className="mb-8">
            どのチェーン店に行くかより、
            <strong className="text-gray-900">どう選ぶか</strong>
            が重要です。以下の5つのルールを習慣にすれば、どんな外食先でもダイエットを続けられます。
          </p>

          <NumberedList
            items={[
              {
                title: "メニューのカロリーを事前チェック",
                body: "お店に入る前に、公式サイトやたべなびでカロリーを確認しましょう。空腹の状態でメニューを見ると高カロリーなものに目が行きがちです。事前に決めておくことで衝動的な注文を防げます。",
              },
              {
                title: "タンパク質を意識して選ぶ",
                body: "ダイエット中に最も不足しやすいのがタンパク質です。1食あたり20g以上のタンパク質を目安にメニューを選びましょう。肉・魚・卵を使ったメニューを優先するのがコツです。",
              },
              {
                title: "ドリンクのカロリーに注意",
                body: "見落としがちなのがドリンクのカロリー。コーラMサイズ（140kcal）、カフェラテ（約200kcal）と、飲み物だけで軽い食事分のカロリーに。水・お茶・ブラックコーヒーを選びましょう。",
              },
              {
                title: "セットよりも単品",
                body: "セットメニューは一見お得ですが、不要なサイドメニューやドリンクでカロリーが大幅に増えます。「単品＋水」を基本にしましょう。",
              },
              {
                title: "記録する習慣をつける",
                body: "食べたものを記録するだけで、意識が変わりダイエット効果が上がることが研究でも証明されています。たべなびなら外食チェーンのメニューを3タップで記録できます。",
              },
            ]}
          />
        </section>

        <TipBox title="5つのルールのまとめ">
          <p>
            最も大切なのは<strong>「事前にメニューを決めておく」</strong>こと。空腹の状態でお店に入ると、どうしても高カロリーなメニューに目が行ってしまいます。たべなびでカロリーを事前チェックする習慣をつけましょう。
          </p>
        </TipBox>

        <ServiceOffers tag="diet" heading="外食が続く人へ。栄養を整える宅配食という選択肢" />

        {/* ─── Section 4: PFCバランスの基本 ─── */}
        <section className="mb-12">
          <SectionHeading id="pfc-basics">
            PFCバランスの基本
          </SectionHeading>
          <p className="mb-6">
            PFCとは、三大栄養素である
            <strong className="text-gray-900">
              Protein（タンパク質）、Fat（脂質）、Carbohydrate（炭水化物）
            </strong>
            の頭文字です。ダイエットではカロリーの「総量」だけでなく、この3つのバランスも重要になります。
          </p>

          <ComparisonTable
            headers={["栄養素", "役割", "1gあたり", "ダイエット目安比率"]}
            rows={[
              ["タンパク質（P）", "筋肉・肌・髪の材料", "4kcal", "30%"],
              ["脂質（F）", "ホルモン・細胞膜の材料", "9kcal", "25%"],
              ["炭水化物（C）", "脳と体のエネルギー源", "4kcal", "45%"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="具体的な計算例">
            <p>
              例えば1日<strong>1,800kcal</strong>を目標にする場合:
            </p>
            <ul className="mt-2 space-y-1 list-none">
              <li>P（タンパク質）: 540kcal分 = <strong>約135g</strong></li>
              <li>F（脂質）: 450kcal分 = <strong>約50g</strong></li>
              <li>C（炭水化物）: 810kcal分 = <strong>約203g</strong></li>
            </ul>
            <p className="mt-2">
              外食で高タンパクメニューを選ぶことが、PFCバランスを整える最も簡単な方法です。
            </p>
          </TipBox>
        </section>

        {/* Warning box */}
        <WarningBox>
          <p>
            ダイエットのためとはいえ、<strong>極端なカロリー制限は逆効果</strong>です。1日1,200kcal以下の食事を続けると筋肉量が落ち、基礎代謝が低下してリバウンドしやすい体になります。1食あたり最低でも400kcalは摂取するようにしましょう。
          </p>
        </WarningBox>

        <AffiliateProductGrid
          title="外食ダイエットを支える定番アイテム"
          productIds={["myprotein-impact", "tanita-scale", "base-food-bread", "ultora-whey"]}
        />

        {/* ─── Section 5: まとめ ─── */}
        <section className="mb-12">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            外食＝太るというのは誤解です。チェーン店には300kcal台のメニューも多数あり、メニューの選び方と食べ方のコツさえ押さえれば、ダイエットは十分に可能です。
          </p>
          <ArticleSummary
            points={[
              "外食でもダイエットは可能。1食500〜700kcalが目安",
              "マクドナルドはハンバーガー単品（259kcal/P13g）がベスト",
              "吉野家は牛皿 並盛（281kcal/P13.5g）がご飯なしで低カロリー",
              "サイゼリヤはPFC非公開。辛味チキン（295kcal）がカロリー控えめ",
              "コンビニはサラダチキン＋おにぎりの組み合わせが便利",
              "PFCバランスはP30:F25:C45を目安に",
            ]}
          />
        </section>

        {/* FAQ */}
        <FAQSection
          slug="eating-out-diet"
          items={[
            {
              q: "外食ばかりでも本当に痩せられますか？",
              a: "はい、可能です。重要なのは「1食あたりの摂取カロリー」と「PFCバランス」を意識すること。例えば1日1,800kcalを目安にする場合、外食3食でも1食600kcalずつに収めれば達成できます。マクドナルドのハンバーガー単品（259kcal/P13g）+サイドサラダ、吉野家の牛皿 並盛（281kcal/P13.5g）など、低カロリーなメニューはどのチェーンにも存在します。",
            },
            {
              q: "ダイエット中の外食、1食何kcalが目安？",
              a: "1日の総摂取カロリー目安の3分の1〜4分の1が良い目安です。一般的な成人女性（1,800kcal目安）なら1食450〜600kcal、成人男性（2,200kcal目安）なら1食550〜700kcalです。ただし、運動量が多い日は外食でしっかり食べてもOK。重要なのは1日トータルでのカロリーバランスです。",
            },
            {
              q: "コンビニとファストフード、ダイエットにはどっちがいい？",
              a: "コンビニの方が選択肢が豊富で柔軟性が高いです。鶏むね肉系のサラダやおにぎりを組み合わせれば、300〜400kcal台・タンパク質20g以上という理想的な1食が実現できます。一方ファストフードは栄養バランスを取りにくいですが、マクドナルドのハンバーガー単品（259kcal）等は活用できます。",
            },
            {
              q: "外食でPFCバランスを整えるコツは？",
              a: "①メインは高タンパク（鶏肉、魚、卵、豆腐）を選ぶ、②脂質が高い揚げ物・チーズ・マヨネーズを避ける、③炭水化物はご飯小盛にする、④野菜を必ず追加する。これら4つを意識するだけで、外食でもP30:F25:C45のバランスに近づきます。",
            },
            {
              q: "週何回までなら外食OK？",
              a: "ダイエット中でも週5〜7回の外食は可能です。ただし「全てラーメン+チャーハン」のような偏った選択は太る原因。和食（定食系）・洋食（グリル系）・サラダ系をバランスよく選びましょう。週1〜2回はチートデイとして好きなものを食べてもOK。",
            },
            {
              q: "夜に外食する時、太らないコツは？",
              a: "①炭水化物を控えめにする（ご飯小盛 or 抜き）、②脂質を抑える（揚げ物より焼き物・蒸し物）、③お酒を飲むなら糖質ゼロのハイボールや焼酎を選ぶ、④締めのラーメン・スイーツは避ける。夜は活動量が減るため、消費しきれないカロリーが脂肪に。21時以降は特に注意です。",
            },
            {
              q: "外食ダイエットを長く続けるコツは？",
              a: "「我慢」より「選び方を覚える」ことが継続の鍵。チェーン別に「自分の鉄板メニュー3つ」を覚えておけば、迷いません。たべなびでは32チェーン・6,000品以上の栄養データを公開しているので、お気に入りを見つけて記録するのがおすすめです。",
            },
          ]}
        />

        {/* Final CTA */}
        <CTABanner
          title="そのメニュー、何kcal？ たべなびで今すぐ検索"
          subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー（ライザップ牛サラダ等）・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-05-12", note: "全チェーンの栄養データを最新版に更新、QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-01", note: "初稿公開" },
          ]}
        />

        {/* Related Articles */}
        <ArticleFooter currentSlug="eating-out-diet" />

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
