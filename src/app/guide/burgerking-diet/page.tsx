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
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  MenuPhoto,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "バーガーキングのダイエット・カロリーガイド｜太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/burgerking-diet" },
  description:
    "バーガーキングでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ワッパーなどバーガーのカロリー比較、サイドの選び方、低カロリー・高タンパクのおすすめを紹介します。",
  keywords: [
    "バーガーキング カロリー",
    "バーガーキング ダイエット",
    "ワッパー カロリー",
    "バーガーキング 太らない",
    "バーガーキング 高タンパク",
  ],
  openGraph: {
    title: "バーガーキングのダイエット・カロリーガイド｜太りにくいメニューの選び方",
    description:
      "バーガーキングでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ワッパーなどバーガーのカロリー比較、サイドの選び方、低カロリー・高タンパクのおすすめを紹介します。",
    url: "https://www.tabenavi.jp/guide/burgerking-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "バーガーキングのダイエット・カロリーガイド｜太りにくいメニューの選び方",
  description:
    "バーガーキングでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ワッパーなどバーガーのカロリー比較、サイドの選び方、低カロリー・高タンパクのおすすめを紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/burgerking-diet",
};

const tocItems = [
  { id: "quick", label: "結論：太りにくい選び方" },
  { id: "calorie-ranking", label: "バーガーのカロリー比較" },
  { id: "high-protein", label: "高タンパクなおすすめ" },
  { id: "low-calorie", label: "低カロリーのおすすめ" },
  { id: "side-drink", label: "サイド・ドリンクの選び方" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function BurgerKingDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="バーガーキングでダイエット"
        subtitle="ワッパーのカロリー比較と太りにくいメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
        breadcrumb="バーガーキングのダイエット・カロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="burgerking-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question={"バーガーキングでダイエット向きのメニューは何ですか？"}
          answer={
            <>
              バーガーキングは直火焼きの<strong>ワッパーが看板</strong>ですが、ワッパー（672kcal）やワッパーチーズ（750kcal）はダイエット中だとやや重め。カロリーを抑えるなら<strong>ハンバーガー（252kcal）</strong>や<strong>チーズバーガー（291kcal）</strong>が基本です。糖質を抑えつつタンパク質を摂りたいなら、<strong>アメリカンスモーキーチキン 4ピース（220kcal・P23.8g・C2.0g）</strong>が優秀。逆に大盛系のダブルワッパーチーズ（985kcal）やザ・ワンパウンダー（1,638kcal）は1食でカロリーオーバーになりやすいので注意しましょう。
            </>
          }
        />

        <p className="mb-4">
          バーガーキングといえば、肉を直火で焼き上げる<Marker>ワッパー（672kcal）</Marker>が代名詞。食べ応えは抜群ですが、ダイエット中の人にとっては「ワッパーって何kcalなの？」「太らない食べ方はある？」が気になるところです。
        </p>
        <p className="mb-4">
          結論から言うと、選ぶメニュー次第でカロリーは大きく変わります。最も軽い<Marker color="blue">ハンバーガー（252kcal）</Marker>と、最も重い<Marker color="blue">にんにく・ガーリック ザ・ワンパウンダー（1,638kcal）</Marker>では、その差はおよそ1,386kcal。同じ店でこれだけ開きがあるので、数字を知って選ぶだけで「食べても太りにくい」状態に近づけます。
        </p>
        <p className="mb-8">
          この記事では、バーガーキングのメニューを<Marker>たべなびの栄養データベースの実数値</Marker>でカロリー比較し、高タンパク・低カロリーのおすすめ、サイドやドリンクの選び方、太りにくい食べ方のコツまで具体的に解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="burgerking-diet-burger" genre="burger" priority />

        {/* Section 1: バーガーのカロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">バーガーキングのバーガー カロリー比較</SectionHeading>

          <p className="mb-4">
            まずはバーガーキングの主要バーガーを、標準サイズ（単品・1個）でカロリーの低い順に並べました。<Marker color="blue">同じ「バーガー」でも200kcal台から1,000kcal超えまで</Marker>幅があるのがよくわかります。
          </p>

          <NutritionTable
            items={[
              { name: "ハンバーガー", calories: 252, protein: 13.7, fat: 10.1, carbs: 27.0, highlight: true },
              { name: "チーズバーガー", calories: 291, protein: 15.9, fat: 13.3, carbs: 27.3, highlight: true },
              { name: "BBQレタスバーガー", calories: 332, protein: 13.4, fat: 17.9, carbs: 29.3 },
              { name: "ワッパージュニア", calories: 333, protein: 13.8, fat: 18.6, carbs: 27.9, highlight: true },
              { name: "スモーキーテリヤキバーガー", calories: 342, protein: 13.5, fat: 18.1, carbs: 31.4 },
              { name: "フィッシュバーガー", calories: 374, protein: 14.4, fat: 18.4, carbs: 37.9 },
              { name: "ダブルチーズバーガー", calories: 425, protein: 26.7, fat: 23.2, carbs: 27.6 },
              { name: "ベーコンダブルチーズバーガー", calories: 494, protein: 31.1, fat: 28.7, carbs: 27.9 },
              { name: "ワッパー", calories: 672, protein: 28.2, fat: 39.9, carbs: 50.8 },
              { name: "ワッパーチーズ", calories: 750, protein: 32.7, fat: 46.3, carbs: 51.4 },
              { name: "ダブルワッパーチーズ", calories: 985, protein: 51.2, fat: 64.1, carbs: 51.5 },
            ]}
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            ダイエットの基本は<Marker>「軽いバーガー単品」を選ぶこと</Marker>。ハンバーガー（252kcal）やチーズバーガー（291kcal）なら、サイドやドリンクを足しても1食500〜600kcal前後に収まります。一方、看板のワッパー（672kcal）は単品でもしっかり重く、チーズやダブルが付くと一気にカロリーが伸びます。
          </p>

          <TipBox title="バーガーキングならではのポイント">
            <p>
              ワッパーには小さめの<Marker>「ワッパージュニア（333kcal）」</Marker>があります。直火焼きパティの満足感は残しつつ、通常のワッパー（672kcal）より約339kcal軽い。「ワッパーの味は楽しみたいけどカロリーは抑えたい」という日は、ジュニアサイズが賢い選択です。
            </p>
          </TipBox>
        </section>

        {/* Mid CTA #1 */}
        <CTABanner
          title="バーガーキングのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 2: 高タンパクなおすすめ */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクなおすすめメニュー</SectionHeading>

          <p className="mb-6">
            ダイエット中は<Marker>タンパク質をしっかり確保</Marker>すると満腹感が続き、筋肉の維持にもつながります。バーガーキングはチキン系サイドや肉を重ねたバーガーが充実しており、実は高タンパクな選択肢が多いチェーンです。標準サイズで効率よくタンパク質が摂れるベスト3を紹介します。
          </p>

          <RankingCard
            rank={1}
            title="アメリカンスモーキーチキン 4ピース"
            subtitle="220kcal / P23.8g / F13.0g / C2.0g"
            calories={220}
            protein={23.8}
            fat={13.0}
            carbs={2.0}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="green">220kcalでタンパク質23.8g、しかも炭水化物はわずか2.0g</Marker>という、ダイエッターにとって理想的なバランス。チキンナゲット5ピース（228kcal・P11.2g・C15.2g）と比べてもタンパク質は2倍以上、糖質は約13g少ない優等生です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              バーガーを軽いものにして、このチキンでタンパク質を補う食べ方がおすすめ。糖質制限中でも合わせやすい一品です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="ベーコンダブルチーズバーガー"
            subtitle="494kcal / P31.1g / F28.7g / C27.9g"
            calories={494}
            protein={31.1}
            fat={28.7}
            carbs={27.9}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              「がっつり食べたいけどタンパク質も欲しい」日の主役。<Marker>494kcalでタンパク質31.1g</Marker>と、ワッパー（672kcal・P28.2g）よりカロリーが約178kcal低いのにタンパク質はむしろ多い、という逆転が起きます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              パティ2枚＋ベーコン＋チーズでP/F比も良好。炭水化物も27.9gとバンズ由来に収まっているため、ボリューム系の中では数字の優秀なバーガーです。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ダブルチーズバーガー"
            subtitle="425kcal / P26.7g / F23.2g / C27.6g"
            calories={425}
            protein={26.7}
            fat={23.2}
            carbs={27.6}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              パティ2枚で<Marker color="green">425kcal・タンパク質26.7g</Marker>。ベーコンが入らない分、ベーコンダブルチーズバーガーより約69kcal軽く、それでいてタンパク質は26.7gとしっかり確保できます。チーズバーガー（291kcal・P15.9g）からパティを1枚増やすイメージで、コスパ良くタンパク質を上乗せしたいときに。
            </p>
          </RankingCard>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "炭水化物", "100kcalあたりP"]}
            rows={[
              ["アメリカンスモーキーチキン 4ピース", "220 kcal", "P 23.8g", "C 2.0g", "10.8g"],
              ["ベーコンダブルチーズバーガー", "494 kcal", "P 31.1g", "C 27.9g", "6.3g"],
              ["ダブルチーズバーガー", "425 kcal", "P 26.7g", "C 27.6g", "6.3g"],
              ["ワッパー", "672 kcal", "P 28.2g", "C 50.8g", "4.2g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            「100kcalあたり何gタンパク質が摂れるか」で見ると、<Marker color="blue">アメリカンスモーキーチキン 4ピースが10.8gで圧勝</Marker>。同じカロリーを使うなら、チキン系を軸にした方がタンパク質効率は良くなります。看板のワッパーは満足感は高いものの、タンパク質効率では下位という結果です。
          </p>
        </section>

        {/* Section 3: 低カロリーのおすすめ */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーのおすすめメニュー</SectionHeading>

          <p className="mb-6">
            「とにかくカロリーを抑えたい」日に選びたい、バーガーキングの<Marker>300kcal前後で収まる軽量メニュー</Marker>を紹介します。
          </p>

          <NutritionTable
            items={[
              { name: "スナックチキン", calories: 137, protein: 8.0, fat: 7.6, carbs: 9.2, highlight: true },
              { name: "ハッシュブラウン", calories: 160, protein: 1.6, fat: 10.0, carbs: 15.4 },
              { name: "アップルパイ", calories: 203, protein: 1.9, fat: 10.7, carbs: 24.4 },
              { name: "フレンチフライ S", calories: 216, protein: 3.0, fat: 9.8, carbs: 29.0 },
              { name: "オニオンリング", calories: 218, protein: 2.5, fat: 10.9, carbs: 27.5 },
              { name: "アメリカンスモーキーチキン 4ピース", calories: 220, protein: 23.8, fat: 13.0, carbs: 2.0, highlight: true },
              { name: "チキンナゲット 5ピース", calories: 228, protein: 11.2, fat: 14.5, carbs: 15.2 },
              { name: "ハンバーガー", calories: 252, protein: 13.7, fat: 10.1, carbs: 27.0, highlight: true },
              { name: "チーズバーガー", calories: 291, protein: 15.9, fat: 13.3, carbs: 27.3 },
            ]}
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            メインを1品で済ませたいなら<Marker color="blue">ハンバーガー（252kcal）</Marker>が最軽量。タンパク質も13.7g摂れて、バーガー単体としてバランスが取れています。さらに軽くしたいときは、サイドの<Marker>スナックチキン（137kcal）</Marker>を主役にするのも手です。
          </p>

          <TipBox title="低糖質を狙うならサラダを活用">
            <p>
              炭水化物を抑えたい日は、<Marker>シーザーサラダ（ドレッシングなし・43kcal・C1.6g）</Marker>に、アメリカンスモーキーチキン 4ピース（220kcal・C2.0g）を合わせると、合計263kcal・糖質わずか約3.6gの超低糖質プレートが完成します。ドレッシングをかける場合は別添のシーザードレッシング（63kcal）が加算される点だけ覚えておきましょう。
            </p>
          </TipBox>
        </section>

        <MenuPhoto id="burgerking-diet-side" genre="side" />

        {/* Section 4: サイド・ドリンクの選び方 */}
        <section className="mb-16">
          <SectionHeading id="side-drink">サイドとドリンクの選び方</SectionHeading>

          <p className="mb-6">
            ダイエットの成否は、実は<Marker>「バーガー本体」より「サイドとドリンク」で決まる</Marker>ことが多いです。何気なく付けたポテトやコーラで、合計カロリーが数百kcal跳ね上がるからです。
          </p>

          <SubSectionHeading>サイドはサイズ選びが命</SubSectionHeading>

          <p className="mb-4">
            フレンチフライは<Marker color="blue">サイズで2倍以上の差</Marker>がつきます。
          </p>

          <ComparisonTable
            headers={["サイド", "カロリー", "脂質", "炭水化物"]}
            rows={[
              ["フレンチフライ S", "216 kcal", "F 9.8g", "C 29.0g"],
              ["フレンチフライ M", "306 kcal", "F 13.9g", "C 41.1g"],
              ["フレンチフライ L", "438 kcal", "F 19.9g", "C 58.8g"],
              ["オニオンリング", "218 kcal", "F 10.9g", "C 27.5g"],
              ["ハッシュブラウン", "160 kcal", "F 10.0g", "C 15.4g"],
            ]}
            bestRowIndex={4}
          />

          <p className="mb-4">
            ポテトを付けるなら<Marker>Sサイズ（216kcal）を選ぶだけでLサイズ（438kcal）より222kcalの節約</Marker>。揚げ物のサイドはどれも脂質が高めなので、糖質・脂質を抑えたい日はサイドをアメリカンスモーキーチキン 4ピース（220kcal・C2.0g）に置き換えると、同じカロリーでもタンパク質が大きく増え、糖質はぐっと減ります。
          </p>

          <SubSectionHeading>ドリンクは「ゼロカロリー」が正解</SubSectionHeading>

          <p className="mb-4">
            意外と見落としがちなのがドリンク。<Marker color="blue">コカ・コーラ（M・129kcal）をコカ・コーラゼロ（0kcal）に変える</Marker>だけで、129kcalまるごとカットできます。
          </p>

          <NutritionTable
            items={[
              { name: "コカ・コーラゼロ M", calories: 0, protein: 0, fat: 0, carbs: 0.3, highlight: true },
              { name: "「ファン」烏龍茶 M", calories: 0, protein: 0, fat: 0, carbs: 0.3, highlight: true },
              { name: "アイスティー M", calories: 2, protein: 0.2, fat: 0, carbs: 0.2, highlight: true },
              { name: "ブレンドコーヒー M", calories: 10, protein: 0.5, fat: 0, carbs: 1.7 },
              { name: "コカ・コーラ M", calories: 129, protein: 0, fat: 0, carbs: 32.4 },
              { name: "ファンタメロンソーダ M", calories: 144, protein: 0, fat: 0, carbs: 36.0 },
            ]}
          />

          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            炭酸の刺激が欲しい人はコカ・コーラゼロ、お茶系がよければ「ファン」烏龍茶（いずれも0kcal）が安心。砂糖入りの<Marker>ファンタメロンソーダ（M・144kcal）</Marker>などは、それだけでハンバーガー半分以上のカロリーになる点に注意しましょう。
          </p>

          <TipBox title="セットの組み立て方の目安">
            <p>
              「軽めセット」の一例：<Marker color="green">ハンバーガー（252kcal）＋フレンチフライS（216kcal）＋コカ・コーラゼロ（0kcal）＝合計468kcal</Marker>。さらに糖質を抑えたいなら、ポテトをアメリカンスモーキーチキン 4ピース（220kcal）に替えて「ハンバーガー＋チキン＋ゼロドリンク＝472kcal・タンパク質約37.5g」という高タンパク構成もおすすめです。
            </p>
          </TipBox>
        </section>

        {/* Section 5: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            バーガーキングには、肉やチーズを重ねた<Marker>1,000kcalを超える大型バーガー</Marker>が存在します。知らずに注文すると、1食で1日の摂取カロリーの半分以上に達することもあります。
          </p>

          <WarningBox title="ダイエット中は避けたい高カロリーメニュー">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">にんにく・ガーリック ザ・ワンパウンダー（1,638kcal）</span> ─ パティを大量に重ねた最重量級。脂質118.1g・タンパク質92.7gで、1食で完全にカロリーオーバーになります。
              </li>
              <li>
                <span className="font-bold">トリプルワッパーチーズ（1,219kcal）</span> ─ パティ3枚＋チーズ。脂質81.9gと非常に高く、ダイエット中は要回避。
              </li>
              <li>
                <span className="font-bold">ダブルマッシュルームワッパー（1,033kcal）</span> ─ ソースとパティ増量で脂質71.1g。ヘルシーな印象のキノコでも油断は禁物です。
              </li>
              <li>
                <span className="font-bold">ダブルワッパーチーズ（985kcal）</span> ─ ワッパー（672kcal）の倍近く。脂質64.1gで、これ単品でも重い一品です。
              </li>
              <li>
                <span className="font-bold">ワッパーチーズ（750kcal）</span> ─ 通常ワッパー＋チーズで+78kcal、脂質46.3g。看板メニューですが脂質はかなり高めです。
              </li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            ポイントは<Marker color="blue">「ダブル・トリプル」と名の付くバーガーはパティが増えるほど脂質が跳ね上がる</Marker>こと。タンパク質も増えますが、それ以上に脂質とカロリーが増えるため、減量期は1枚パティのバーガーかジュニアサイズに留めるのが無難です。
          </p>

          <WarningBox title="サイド・組み合わせの注意点">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">フレンチフライ L（438kcal）</span> ─ ポテト単体でバーガー2個分近いカロリー。サイズはSに。
              </li>
              <li>
                <span className="font-bold">チーズチキンナゲット 16ピース（811kcal）</span> ─ 大容量はシェア前提。一人で食べるとそれだけで1食分超えです。
              </li>
              <li>
                <span className="font-bold">ワッパーチーズ＋フライL＋コーラ</span> ─ この王道セットだと合計約1,317kcalに。バーガーを軽くするか、サイド・ドリンクで調整を。
              </li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 6: 太りにくい食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">バーガーキングで太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            メニュー選びに加えて、ちょっとした注文・食べ方の工夫で<Marker>同じメニューでも摂取カロリーを抑えられます</Marker>。今日から使える5つのコツを紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "バーガーは「1枚パティ」を基本にする",
                body: "ダブル・トリプルはパティが増えるほど脂質が増えます。ハンバーガー（252kcal）やチーズバーガー（291kcal）、ワッパージュニア（333kcal）など1枚パティを基本にするだけで、500kcal以上の差がつくことも。",
              },
              {
                title: "ポテトはSサイズ、できればチキンに置き換え",
                body: "フレンチフライはS（216kcal）→L（438kcal）でカロリーが倍増。サイドをアメリカンスモーキーチキン 4ピース（220kcal・P23.8g・C2.0g）に置き換えると、同じカロリーでタンパク質が増え糖質は激減します。",
              },
              {
                title: "ドリンクはゼロカロリーを選ぶ",
                body: "コカ・コーラ（M・129kcal）をコカ・コーラゼロ（0kcal）や「ファン」烏龍茶（0kcal）に変えるだけで、ノーカロリーで満足感を得られます。砂糖入り炭酸は1杯でバーガー半分以上のカロリーです。",
              },
              {
                title: "タンパク質を先に・しっかり食べる",
                body: "チキンやパティなどのタンパク質源を先に食べると満腹感が出やすく、バンズやポテトの食べ過ぎを防げます。アメリカンスモーキーチキンなど高タンパクなサイドを軸にすると満足度が上がります。",
              },
              {
                title: "デザートは情報を見て選ぶ",
                body: "アップルパイ（203kcal）やチョコレートサンデー（139kcal）は、サイズの割にカロリーがあります。食べるなら他で調整を。サンデー類（129〜139kcal）はパイより軽めで、甘いものが欲しい日の選択肢になります。",
              },
            ]}
          />

          <SubSectionHeading>目的別・おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["目的", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低カロリー", "ハンバーガー + ゼロドリンク", "約252 kcal", "P 13.7g"],
              ["バランス型", "ハンバーガー + フレンチフライS + ゼロドリンク", "約468 kcal", "P 16.7g"],
              ["高タンパク・低糖質", "ハンバーガー + アメリカンスモーキーチキン4P + ゼロドリンク", "約472 kcal", "P 37.5g"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            高タンパク・低糖質パターンの<Marker color="blue">「ハンバーガー＋アメリカンスモーキーチキン4P」なら約472kcalでタンパク質37.5g</Marker>。同じくらいのカロリーでもタンパク質量が大きく変わるため、筋トレ中の人や満腹感を重視したい人に向いた組み合わせです。
          </p>

          <SubSectionHeading>他のバーガーチェーンと比べてどう？</SubSectionHeading>

          <p className="mb-4">
            バーガーキングの強みは、肉の食べ応えと<Marker>高タンパクなチキン系サイドの充実</Marker>です。最軽量のハンバーガー（252kcal）はマクドナルドやモスバーガーと比べる価値があります。チェーンを横断して選びたい人は、以下の比較記事もあわせてどうぞ。
          </p>

          <CheckList
            items={[
              "バーガーの最軽量はハンバーガー（252kcal）／チーズバーガー（291kcal）",
              "高タンパク・低糖質ならアメリカンスモーキーチキン4P（220kcal・P23.8g・C2.0g）",
              "看板のワッパーは672kcal、チーズ付きで750kcal、ダブルで985kcalと一気に増える",
            ]}
          />

          <p className="mb-4">
            複数チェーンのバーガーをまとめて比較したい場合は{" "}
            <Link href="/guide/hamburger-comparison" className="text-sky-600 font-medium hover:underline">
              ハンバーガー5社カロリー比較
            </Link>{" "}
            が便利です。マクドナルド派・モスバーガー派の人は{" "}
            <Link href="/guide/mcdonalds-diet" className="text-sky-600 font-medium hover:underline">
              マクドナルドでダイエット
            </Link>
            や{" "}
            <Link href="/guide/mos-diet" className="text-sky-600 font-medium hover:underline">
              モスバーガーのダイエット・カロリーガイド
            </Link>
            も参考に。糖質を徹底的に抑えたい人は{" "}
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 font-medium hover:underline">
              糖質制限×外食ガイド
            </Link>{" "}
            で考え方を確認しておくと選び方がブレません。
          </p>

          <p className="mb-4">
            バーガーキングの全メニューの栄養成分は{" "}
            <Link href="/chains/burgerking" className="text-sky-600 font-medium hover:underline">
              バーガーキングのメニュー一覧
            </Link>
            から確認できます。目的別の絞り込みは{" "}
            <Link href="/chains/burgerking/high-protein" className="text-sky-600 font-medium hover:underline">
              高タンパクメニュー
            </Link>
            、{" "}
            <Link href="/chains/burgerking/diet" className="text-sky-600 font-medium hover:underline">
              ダイエット向けメニュー
            </Link>
            、{" "}
            <Link href="/chains/burgerking/low-calorie" className="text-sky-600 font-medium hover:underline">
              低カロリーメニュー
            </Link>{" "}
            のページが役立ちます。
          </p>
        </section>

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            バーガーキングは、メニュー選びとサイド・ドリンクの工夫でダイエット中でも十分に楽しめます。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "バーガーの最軽量はハンバーガー（252kcal・P13.7g）。チーズバーガー（291kcal）も軽量",
              "高タンパク・低糖質を狙うならアメリカンスモーキーチキン4ピース（220kcal・P23.8g・C2.0g）が最優秀",
              "看板のワッパーは672kcal、チーズ付き750kcal、ダブルワッパーチーズは985kcalと急増する",
              "サイドはフレンチフライSサイズ（216kcal）、ドリンクはコカ・コーラゼロ（0kcal）で大幅にカット可能",
              "ダブル・トリプル系やザ・ワンパウンダー（1,638kcal）など大型バーガーはダイエット中は避ける",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <ServiceOffers tag="diet" />

        <FAQSection
          slug="burgerking-diet"
          items={[
            {
              q: "バーガーキングでカロリーが最も低いメニューは何ですか？",
              a: "バーガーではハンバーガーが252kcalで最軽量、次いでチーズバーガーが291kcalです。サイドではスナックチキン137kcal、ハッシュブラウン160kcalなどが軽め。とにかくカロリーを抑えたいならハンバーガー単品＋ゼロカロリードリンクの組み合わせがおすすめです。",
            },
            {
              q: "ワッパーは何kcalありますか？ダイエット中でも食べられますか？",
              a: "ワッパーは672kcal（P28.2g・F39.9g・C50.8g）です。ワッパーチーズは750kcal、ダブルワッパーチーズは985kcalと増えます。ダイエット中に食べるなら、サイドをフレンチフライSやチキンにしてドリンクをゼロカロリーにし、1日全体のカロリー収支で調整しましょう。味を楽しみつつ軽くしたい場合はワッパージュニア（333kcal）も選べます。",
            },
            {
              q: "バーガーキングで高タンパクなメニューはどれですか？",
              a: "標準サイズで効率がよいのはアメリカンスモーキーチキン4ピース（220kcal・P23.8g・C2.0g）です。バーガーではベーコンダブルチーズバーガー（494kcal・P31.1g）やダブルチーズバーガー（425kcal・P26.7g）がタンパク質を多く摂れます。チキンを軸にすると糖質を抑えながら高タンパクにできます。",
            },
            {
              q: "ダイエット中に避けたほうがよいバーガーキングのメニューは？",
              a: "にんにく・ガーリック ザ・ワンパウンダー（1,638kcal）、トリプルワッパーチーズ（1,219kcal）、ダブルマッシュルームワッパー（1,033kcal）、ダブルワッパーチーズ（985kcal）など、パティを重ねた大型バーガーは脂質・カロリーが非常に高いので避けましょう。サイドではフレンチフライL（438kcal）も注意が必要です。",
            },
            {
              q: "糖質制限中にバーガーキングで選べるメニューはありますか？",
              a: "アメリカンスモーキーチキン4ピース（220kcal・炭水化物2.0g）とシーザーサラダ（ドレッシングなし・43kcal・炭水化物1.6g）を組み合わせると、合計263kcal・糖質約3.6gの低糖質プレートになります。ドリンクはコカ・コーラゼロや「ファン」烏龍茶（いずれも0kcal）を選びましょう。",
            },
            {
              q: "バーガーキングのポテトやドリンクはどう選べばよいですか？",
              a: "フレンチフライはS（216kcal）・M（306kcal）・L（438kcal）でカロリーが大きく違うため、ダイエット中はSを選ぶか、アメリカンスモーキーチキン4ピース（220kcal）に置き換えると糖質を抑えつつタンパク質を増やせます。ドリンクはコカ・コーラ（M・129kcal）をコカ・コーラゼロ（0kcal）に変えるだけで丸ごとカロリーカットできます。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="burgerking-diet" />

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
