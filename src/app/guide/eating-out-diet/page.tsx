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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
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
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
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
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月 | 読了目安: 10分
          </p>
        </div>

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
                protein={13.2}
                fat={9.4}
                carbs={30.2}
                price={190}
                recommended
              />
              <NutritionCard
                name="エッグマックマフィン"
                chain="マクドナルド"
                calories={311}
                protein={19.2}
                fat={13.5}
                carbs={27.0}
                price={250}
                recommended
              />
              <NutritionCard
                name="チキンクリスプ"
                chain="マクドナルド"
                calories={345}
                protein={14.8}
                fat={15.5}
                carbs={36.6}
                price={180}
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
              です。牛丼は並盛（635kcal）と大盛（863kcal）で約230kcalもの差があります。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <NutritionCard
                name="ライザップ牛サラダ"
                chain="吉野家"
                calories={398}
                protein={28.0}
                fat={25.2}
                carbs={17.2}
                price={630}
                recommended
              />
              <NutritionCard
                name="牛皿（並盛）"
                chain="吉野家"
                calories={248}
                protein={14.8}
                fat={17.3}
                carbs={5.7}
                price={398}
                recommended
              />
              <NutritionCard
                name="牛丼（小盛）"
                chain="吉野家"
                calories={488}
                protein={15.9}
                fat={16.0}
                carbs={66.0}
                price={398}
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
              サイゼリヤはダイエッターにとって
              <strong className="text-gray-900">最強のファミレス</strong>
              です。500円以下で高タンパク・低カロリーなメニューが多数あり、コスパと栄養バランスの両立が可能です。
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <NutritionCard
                name="若鶏のグリル"
                chain="サイゼリヤ"
                calories={514}
                protein={35.3}
                fat={28.7}
                carbs={26.6}
                price={500}
                recommended
              />
              <NutritionCard
                name="ミックスグリル"
                chain="サイゼリヤ"
                calories={478}
                protein={32.2}
                fat={30.5}
                carbs={16.0}
                price={600}
                recommended
              />
              <NutritionCard
                name="小エビのサラダ"
                chain="サイゼリヤ"
                calories={125}
                protein={6.4}
                fat={7.5}
                carbs={8.3}
                price={350}
              />
            </div>
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
                name="サラダチキン（プレーン）"
                chain="コンビニ各社"
                calories={114}
                protein={24.1}
                fat={1.2}
                carbs={1.0}
                price={238}
                recommended
              />
              <NutritionCard
                name="たんぱく質が摂れるチキン＆チリ"
                chain="セブンイレブン"
                calories={252}
                protein={27.4}
                fat={9.3}
                carbs={15.7}
                price={321}
                recommended
              />
              <NutritionCard
                name="ゆで卵 2個入り"
                chain="コンビニ各社"
                calories={130}
                protein={11.0}
                fat={8.6}
                carbs={0.6}
                price={162}
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

        {/* ─── Section 5: まとめ ─── */}
        <section className="mb-12">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            外食＝太るというのは誤解です。チェーン店には300kcal台のメニューも多数あり、メニューの選び方と食べ方のコツさえ押さえれば、ダイエットは十分に可能です。
          </p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-6">
            <ul className="space-y-3">
              {[
                "外食でもダイエットは可能。1食500〜700kcalが目安",
                "マクドナルドはハンバーガー単品（259kcal）がベスト",
                "吉野家はライザップ牛サラダ（398kcal、P28g）が優秀",
                "サイゼリヤは若鶏のグリル（514kcal、P35.3g）が最強コスパ",
                "コンビニはサラダチキン＋おにぎりの組み合わせが便利",
                "PFCバランスはP30:F25:C45を目安に",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <CTABanner
          title="たべなびで、外食ダイエットを始めよう"
          subtitle="ここまで読んでくれたあなたへ。20チェーン・500メニューの栄養データ、全部無料。"
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
