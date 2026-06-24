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
  MenuPhoto,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "びっくりドンキーのダイエット・カロリーガイド｜太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/bikkuri-donkey-diet" },
  description: "びっくりドンキーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ハンバーグディッシュのカロリー比較、ライス量やサイドの選び方、高タンパク・低カロリーのおすすめを紹介します。",
  keywords: [
    "びっくりドンキー カロリー",
    "びっくりドンキー ダイエット",
    "びっくりドンキー タンパク質",
    "びっくりドンキー 低カロリー",
    "びっくりドンキー 太りにくい",
    "ハンバーグ カロリー",
  ],
  openGraph: {
    title: "びっくりドンキーのダイエット・カロリーガイド｜太りにくいメニューの選び方",
    description: "びっくりドンキーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ハンバーグディッシュのカロリー比較、ライス量やサイドの選び方、高タンパク・低カロリーのおすすめを紹介します。",
    url: "https://www.tabenavi.jp/guide/bikkuri-donkey-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "びっくりドンキーのダイエット・カロリーガイド｜太りにくいメニューの選び方",
  description: "びっくりドンキーでダイエット中でも楽しむための、カロリー・タンパク質・PFCの実データ解説。ハンバーグディッシュのカロリー比較、ライス量やサイドの選び方、高タンパク・低カロリーのおすすめを紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/bikkuri-donkey-diet",
};

const tocItems = [
  { id: "dish-ranking", label: "ディッシュのカロリーランキング" },
  { id: "rice-size", label: "ライス量とサイズ調整でカロリーを削る" },
  { id: "high-protein", label: "高タンパクで選ぶおすすめ" },
  { id: "low-calorie", label: "低カロリーで選ぶおすすめ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方・組み合わせ" },
  { id: "summary", label: "まとめ" },
];

export default function BikkuriDonkeyDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="びっくりドンキーでダイエット"
        subtitle="太りにくいメニューの選び方とハンバーグのカロリー比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
        breadcrumb="びっくりドンキーダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="bikkuri-donkey-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question={"びっくりドンキーでダイエット向きのメニューはどれですか？"}
          answer={
            <>
              びっくりドンキーは、<strong>ハンバーグ単品（ライスなし）を選ぶ</strong>のがダイエットの基本です。ライス付きの「レギュラーハンバーグディッシュ」は723kcalですが、<strong>Ｓ ハンバーグ（262kcal／P20.3g）やレギュラーバーグステーキ（316kcal／P23.2g）</strong>ならライスを足さない分カロリーを大きく抑えられます。高タンパクを狙うなら<strong>ガーリックチキンステーキ（457kcal／P42.1g）</strong>が優秀。ライスは小盛（252kcal）に替えるか、カリフラワーライス（42kcal）に置き換えると糖質も削れます。
            </>
          }
        />

        <p className="mb-4">
          びっくりドンキーは「ハンバーグディッシュ」が看板メニューですが、実は<Marker>同じハンバーグでもライスの有無とサイズでカロリーが大きく変わります</Marker>。たとえばライス付きのレギュラーハンバーグディッシュは723kcalなのに対し、ハンバーグ単品のＳ ハンバーグは262kcalです。
        </p>
        <p className="mb-4">
          高カロリーに見えるチェーンですが、<Marker color="blue">ハンバーグ自体は高タンパクな肉料理</Marker>。レギュラーバーグステーキ（316kcal）はタンパク質23.2gとしっかり摂れます。一方でディッシュのＬサイズやチーズ・カリー系を選ぶと1,000kcalを超えるものもあり、メニュー選びで600kcal以上の差がつきます。
        </p>
        <p className="mb-8">
          この記事では、びっくりドンキーのメニューを実データでランキングし、<Marker color="green">ライスの調整・サイズ選び・サイド選び</Marker>で太りにくくする方法を解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="bikkuri-donkey-hamburg" genre="burger" />

        {/* Section 1: ディッシュのカロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="dish-ranking">びっくりドンキーのハンバーグ・ディッシュのカロリーランキング</SectionHeading>

          <p className="mb-4">
            びっくりドンキーの主要なハンバーグメニューをカロリーの低い順に並べました。<Marker color="blue">「ハンバーグ単品」と「ディッシュ（ライス付き）」でカロリー帯がまったく違う</Marker>のがポイントです。
          </p>

          <NutritionTable
            items={[
              { name: "Ｓ ハンバーグ（単品）", calories: 262, protein: 20.3, fat: 14.7, carbs: 12.1, highlight: true },
              { name: "ハンバーグ Ｓ（単品）", calories: 312, protein: 23.1, fat: 15.7, carbs: 20.4, highlight: true },
              { name: "レギュラーバーグステーキ", calories: 316, protein: 23.2, fat: 15.7, carbs: 21.3, highlight: true },
              { name: "ハンバーグ Ｍ（単品）", calories: 403, protein: 30.2, fat: 20.9, carbs: 24.3 },
              { name: "ガーリックチキンステーキ", calories: 457, protein: 42.1, fat: 25.8, carbs: 14.8, highlight: true },
              { name: "コロコロステーキ", calories: 468, protein: 32.5, fat: 28.1, carbs: 17.7 },
              { name: "エッグハンバーグ Ｍ（単品）", calories: 486, protein: 37.0, fat: 26.6, carbs: 24.5 },
              { name: "チーズハンバーグ Ｍ（単品）", calories: 544, protein: 38.6, fat: 32.5, carbs: 25.0 },
              { name: "レギュラーハンバーグディッシュ", calories: 723, protein: 26.1, fat: 26.9, carbs: 91.1 },
              { name: "黒デミバーグディッシュ", calories: 773, protein: 28.5, fat: 29.1, carbs: 95.7 },
              { name: "チーズバーグディッシュ", calories: 863, protein: 34.5, fat: 38.4, carbs: 91.8 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はびっくりドンキー公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="ディッシュとハンバーグ単品の違い">
            <p>びっくりドンキーの「ディッシュ」は<Marker>ハンバーグ＋ライスがセット</Marker>になったメニューです。レギュラーハンバーグディッシュ（723kcal）のうち、ライスの炭水化物だけで90g以上。ハンバーグ単品で頼んでライス量を自分で調整すれば、カロリーを大幅にコントロールできます。</p>
          </TipBox>
        </section>

        {/* Section 2: ライス量とサイズ調整 */}
        <section className="mb-16">
          <SectionHeading id="rice-size">ライス量とハンバーグサイズでカロリーを削る</SectionHeading>

          <p className="mb-4">
            びっくりドンキーで太りにくくする最大のコツは、<Marker>ライスの量とハンバーグのサイズを意識的に選ぶ</Marker>ことです。まずはライス単体のカロリーを比較してみましょう。
          </p>

          <ComparisonTable
            headers={["ライスの種類", "カロリー", "炭水化物"]}
            rows={[
              ["カリフラワーライス", "42 kcal", "8.2g"],
              ["小盛ライス", "252 kcal", "55.7g"],
              ["ライス（並）", "336 kcal", "74.2g"],
              ["大盛ライス", "554 kcal", "122.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            ライスを並から小盛に替えるだけで<Marker color="blue">約84kcalカット</Marker>、大盛との差は約300kcalにもなります。<Marker color="green">カリフラワーライス（42kcal）に置き換えれば、ライス（並）比で約290kcal・糖質66gをカット</Marker>でき、糖質制限中の方に向いています。
          </p>

          <SubSectionHeading>ハンバーグのサイズでも差が出る</SubSectionHeading>

          <p className="mb-4">
            びっくりドンキーのハンバーグはS・M・Lのサイズが選べます。同じレギュラーハンバーグでも、サイズが上がるほどカロリーとタンパク質が増えます。
          </p>

          <ComparisonTable
            headers={["ハンバーグ（単品）", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["ハンバーグ Ｓ", "312 kcal", "P 23.1g", "F 15.7g"],
              ["ハンバーグ Ｍ", "403 kcal", "P 30.2g", "F 20.9g"],
              ["ハンバーグ Ｌ", "578 kcal", "P 44.0g", "F 31.0g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            ダイエット中なら<Marker>Sサイズを基本にしてライスを小盛にする</Marker>のが王道です。しっかりタンパク質を摂りたい日はMサイズ（P30.2g）にして、ライスはカリフラワーライスに置き換えると、高タンパク・低糖質な一皿になります。
          </p>

          <TipBox title="ライスは「少なめ」も頼める">
            <p>びっくりドンキーではディッシュのライスを「小盛」に変更できる店舗が多く、カリフラワーライスへの置き換えも可能です。<Marker>同じハンバーグでもライスの選び方でカロリーが100〜300kcal変わる</Marker>ので、注文時に必ず確認しましょう。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="びっくりドンキーのカロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&h=400&fit=crop"
          alt="ハンバーグと付け合わせのイメージ"
        />

        {/* Section 3: 高タンパク */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクで選ぶおすすめメニュー</SectionHeading>

          <p className="mb-6">
            ハンバーグや鶏肉は<Marker>良質なタンパク源</Marker>。筋トレ中・ボディメイク中の方に向いた、タンパク質が多くて脂質を抑えやすいメニューを紹介します。
          </p>

          <RankingCard
            rank={1}
            title="ガーリックチキンステーキ"
            subtitle="457kcal / P42.1g / F25.8g / C14.8g"
            calories={457}
            protein={42.1}
            fat={25.8}
            carbs={14.8}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="green">タンパク質42.1gは単品メニュー随一</Marker>。鶏肉ベースで炭水化物14.8gと低糖質なのもうれしいポイント。500kcal以下に収まりながら、1食分のタンパク質をしっかり確保できます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ライスを小盛やカリフラワーライスにすれば、高タンパク・低糖質のお手本のような一皿に。筋トレ後の食事に向いています。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="エッグハンバーグ Ｍ（単品）"
            subtitle="486kcal / P37.0g / F26.6g / C24.5g"
            calories={486}
            protein={37.0}
            fat={26.6}
            carbs={24.5}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              ハンバーグに卵をのせた一品。<Marker>タンパク質37.0gと卵分が上乗せ</Marker>され、ハンバーグＭ（P30.2g）よりさらに高タンパクになります。500kcal弱で満足感も高く、ライスを控えめにすればダイエット中でも取り入れやすいメニューです。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ハンバーグ Ｍ（単品）"
            subtitle="403kcal / P30.2g / F20.9g / C24.3g"
            calories={403}
            protein={30.2}
            fat={20.9}
            carbs={24.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              シンプルなハンバーグのMサイズ。<Marker color="blue">400kcal台でタンパク質30g超</Marker>とバランスがよく、トッピングなしなので脂質も抑えめ。基本のメニューでしっかりタンパク質を摂りたいときの定番です。ライスを小盛にすればさらに調整できます。
            </p>
          </RankingCard>

          <p className="mb-4">
            さらにがっつりタンパク質を摂りたい日は、<Marker>ガーリックチキン＆ハンバーグM（667kcal／P56.2g）</Marker>という選択肢もあります。カロリーは上がりますが、タンパク質56.2gは1食で十分すぎる量。ライスを最小限にすれば高タンパク食として成立します。
          </p>

          <CheckList
            items={[
              "ガーリックチキンステーキ（457kcal／P42.1g）─ 低糖質で高タンパクの優等生",
              "エッグハンバーグ Ｍ（486kcal／P37.0g）─ 卵でタンパク質を上乗せ",
              "ハンバーグ Ｍ（403kcal／P30.2g）─ トッピングなしで脂質控えめ",
            ]}
          />
        </section>

        {/* Section 4: 低カロリー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選ぶおすすめメニュー</SectionHeading>

          <p className="mb-6">
            「とにかくカロリーを抑えたい」日に向いた、<Marker>300kcal前後で食べられる</Marker>びっくりドンキーのメニューを紹介します。
          </p>

          <RankingCard
            rank={1}
            title="Ｓ ハンバーグ（単品）"
            subtitle="262kcal / P20.3g / F14.7g / C12.1g"
            calories={262}
            protein={20.3}
            fat={14.7}
            carbs={12.1}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              びっくりドンキーで<Marker color="blue">最も軽いハンバーグ単品</Marker>。262kcalながらタンパク質20.3g、炭水化物はわずか12.1gと低糖質。ライスを足さずにこれ＋みそ汁（43kcal）やサラダにすれば、300kcal台前半でタンパク質もしっかり摂れる軽食になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="ハンバーグ Ｓ（単品）"
            subtitle="312kcal / P23.1g / F15.7g / C20.4g"
            calories={312}
            protein={23.1}
            fat={15.7}
            carbs={20.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              レギュラーハンバーグのSサイズ。<Marker>312kcalでタンパク質23.1g</Marker>と、カロリーあたりのタンパク質効率が高い一品。レギュラーバーグステーキ（316kcal／P23.2g）もほぼ同等で、どちらもライス抜きで頼めば軽めの一食になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="ハンバーグ Ｍ（単品）＋カリフラワーライス"
            subtitle="合計 約445kcal / P34.5g / F21.1g / C32.5g"
            calories={445}
            protein={34.5}
            fat={21.1}
            carbs={32.5}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              ハンバーグＭ（403kcal）に<Marker color="green">カリフラワーライス（42kcal）</Marker>を合わせた組み合わせ。ライス（並）の代わりにカリフラワーライスにすることで、ディッシュ（723kcal）より約280kcal軽く、糖質も大幅に抑えられます。満足感を保ちながら低カロリーに収めたい人向けです。
            </p>
          </RankingCard>

          <TipBox title="サイドは低カロリーなものを選ぶ">
            <p>サイドを足すなら<Marker>みそ汁（43kcal）・ビーフコンソメスープ（19kcal）・ネギ塩サラダS（77kcal）</Marker>などが低カロリー。一方でびっくりフライドポテト（685kcal）やマカロニ＆チーズ（381kcal）は高カロリーなので、ダイエット中はスープや軽めのサラダを選びましょう。</p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="ヘルシーなサラダとスープのイメージ"
        />

        {/* Section 5: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            びっくりドンキーには<Marker>1,000kcalを超える</Marker>ボリューミーなメニューも多くあります。サイズが大きいディッシュやチーズ・カリー系、揚げ物の組み合わせは要注意です。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">オムデミチーズバーグディッシュ Ｌ（1,222kcal）</span> ─ オムレツ・デミ・チーズ・大盛ライスが重なり、1皿で1日の半分以上のカロリーに。脂質58.4gと高め。</li>
              <li><span className="font-bold">チーズバーグディッシュ Ｌ（1,114kcal）</span> ─ チーズ＋Lサイズ＋ライスで脂質51.1g。Mサイズ（939kcal）でも高カロリーです。</li>
              <li><span className="font-bold">びっくりエビフライ＆ハンバーグL（1,057kcal）</span> ─ エビフライの揚げ物で脂質71.3gと突出。揚げ物の追加はカロリーが跳ね上がります。</li>
              <li><span className="font-bold">カリーバーグディッシュ（954kcal）</span> ─ カレーソースは糖質・脂質が高く、ディッシュと合わせると900kcal超え。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイドメニューの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">びっくりフライドポテト（685kcal）・スパイシーポテト（687kcal）</span> ─ 揚げ物のポテトは脂質34.9gと高め。追加するとカロリーが大きく上振れします。</li>
              <li><span className="font-bold">大盛ライス（554kcal）</span> ─ 並（336kcal）から+218kcal。炭水化物は122.4gに。ライスは小盛かカリフラワーライスへ。</li>
              <li><span className="font-bold">ブロッコリーの箱舟（512kcal・F48.7g）</span> ─ 野菜系でも調理・ソースで脂質が高いことがあるので、サラダはドレッシング控えめに。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            「チーズ」「カリー」「エビフライ」「Lサイズ」「大盛ライス」が重なるほどカロリーは上がります。<Marker color="blue">トッピングとサイズはどれか1つに絞る</Marker>のが、太りにくくするコツです。
          </p>
        </section>

        {/* Section 6: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">びっくりドンキーで太りにくい食べ方・組み合わせ</SectionHeading>

          <p className="mb-6">
            びっくりドンキーならではの<Marker>ライス調整とハンバーグ単品の活用</Marker>を軸にした、太りにくい食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "ハンバーグは単品で頼んでライスを自分で選ぶ",
                body: "ディッシュ（ライスセット）ではなくハンバーグ単品で注文し、ライスは小盛（252kcal）かカリフラワーライス（42kcal）を選ぶと、ライス由来のカロリー・糖質を自分でコントロールできます。",
              },
              {
                title: "サイズはまずSから試す",
                body: "ハンバーグ S（312kcal）はタンパク質23.1gとしっかり摂れます。物足りなければMに上げる、という順で選ぶと食べ過ぎを防げます。",
              },
              {
                title: "サイドはスープや軽めサラダに",
                body: "みそ汁（43kcal）やビーフコンソメスープ（19kcal）を先に飲むと満腹感が出ます。サラダはネギ塩サラダS（77kcal）など低カロリーなものを。揚げ物ポテトは避けましょう。",
              },
              {
                title: "チーズ・カリー・エビフライは重ねない",
                body: "高カロリーになりやすいトッピングは1食につき1つまで。チーズもカリーもエビフライも…と重ねると一気に1,000kcal超えになります。",
              },
              {
                title: "ドリンクは無糖を選ぶ",
                body: "ウーロン茶（0kcal）やホットコーヒー（5kcal、無糖）を選べばドリンク分のカロリーはほぼゼロ。びっくりコーラ（190kcal）などの甘い飲料は糖質が高いので控えめに。",
              },
            ]}
          />

          <SubSectionHeading>目的別のおすすめ組み合わせ</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（カロリー制限・糖質制限・高タンパク）によって、<Marker>選ぶべき組み合わせは変わります</Marker>。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "組み合わせ", "カロリー", "タンパク質"]}
            rows={[
              ["カロリー制限", "Ｓ ハンバーグ + みそ汁", "約305 kcal", "P 22.8g"],
              ["糖質制限", "ガーリックチキンステーキ + カリフラワーライス", "約499 kcal", "P 46.4g"],
              ["高タンパク", "ハンバーグ Ｍ + カリフラワーライス", "約445 kcal", "P 34.5g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            糖質制限を狙うなら<Marker color="green">ガーリックチキンステーキ＋カリフラワーライスで約499kcal・タンパク質46.4g・糖質は約23g</Marker>に収まります。高タンパク・低糖質を両立したい人に最もおすすめの組み合わせです。
          </p>

          <TipBox title="チェーン横断で考えるなら">
            <p>ファミレスやハンバーガーチェーンと比べてどうか気になる人は、<Marker>たべなびで他チェーンのハンバーグ系メニューと横断比較</Marker>できます。同じ「ハンバーグ」でもチェーンによってカロリー・PFCは大きく異なるので、外食先を選ぶ段階から数字で比較するのがおすすめです。</p>
          </TipBox>
        </section>

        <ServiceOffers tag="diet" />

        {/* Internal links */}
        <section className="mb-16">
          <SubSectionHeading>びっくりドンキーのメニューをもっと詳しく</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            目的別のランキングは、たべなびのチェーンページで全メニューを並べ替えて確認できます。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chains/bikkuri-donkey" className="text-sky-600 font-medium hover:underline">
                びっくりドンキーの全メニュー栄養データ
              </Link>
              {" "}─ カロリー・PFC・価格でまとめて比較
            </li>
            <li>
              <Link href="/chains/bikkuri-donkey/high-protein" className="text-sky-600 font-medium hover:underline">
                びっくりドンキーの高タンパクメニューランキング
              </Link>
            </li>
            <li>
              <Link href="/chains/bikkuri-donkey/diet" className="text-sky-600 font-medium hover:underline">
                びっくりドンキーのダイエット向きメニュー
              </Link>
            </li>
            <li>
              <Link href="/chains/bikkuri-donkey/low-calorie" className="text-sky-600 font-medium hover:underline">
                びっくりドンキーの低カロリーメニューランキング
              </Link>
            </li>
          </ul>

          <p className="mb-4 mt-6 text-sm text-gray-700 leading-relaxed">
            外食ダイエットの関連記事もあわせてどうぞ。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/hamburger-comparison" className="text-sky-600 font-medium hover:underline">
                ハンバーガー・ハンバーグのカロリー比較
              </Link>
            </li>
            <li>
              <Link href="/guide/family-restaurant-diet" className="text-sky-600 font-medium hover:underline">
                ファミレスのダイエットガイド
              </Link>
            </li>
            <li>
              <Link href="/guide/eating-out-diet" className="text-sky-600 font-medium hover:underline">
                外食ダイエットの基本
              </Link>
            </li>
            <li>
              <Link href="/guide/low-carb-eating-out" className="text-sky-600 font-medium hover:underline">
                低糖質で選ぶ外食メニュー
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="bikkuri-donkey-diet"
          items={[
            { q: "びっくりドンキーで一番カロリーが低いハンバーグはどれですか？", a: "ハンバーグ単品ではＳ ハンバーグが262kcal（P20.3g／C12.1g）で最も軽くなります。ハンバーグ Ｓ（312kcal）やレギュラーバーグステーキ（316kcal）も低カロリーです。ライス付きのレギュラーハンバーグディッシュは723kcalなので、カロリーを抑えたいなら単品でライスを別途調整するのがおすすめです。" },
            { q: "びっくりドンキーで高タンパクなメニューは何ですか？", a: "ガーリックチキンステーキが457kcalでタンパク質42.1gと、単品では最も高タンパクです。さらに多く摂りたい場合はガーリックチキン＆ハンバーグM（667kcal／P56.2g）も選べます。脂質を抑えたいならハンバーグ Ｍ（403kcal／P30.2g）が手頃でおすすめです。" },
            { q: "びっくりドンキーでライスのカロリーを減らす方法はありますか？", a: "ライスは並（336kcal）から小盛（252kcal）に変更すると約84kcalカットできます。カリフラワーライス（42kcal）に置き換えれば、ライス（並）比で約290kcal・糖質約66gをカットでき、糖質制限中の方に向いています。" },
            { q: "ダイエット中に避けるべきびっくりドンキーのメニューは何ですか？", a: "オムデミチーズバーグディッシュ Ｌ（1,222kcal）、チーズバーグディッシュ Ｌ（1,114kcal）、びっくりエビフライ＆ハンバーグL（1,057kcal・脂質71.3g）は高カロリー・高脂質です。びっくりフライドポテト（685kcal）や大盛ライス（554kcal）の追加も避けましょう。" },
            { q: "びっくりドンキーで糖質制限中のおすすめの食べ方は？", a: "ガーリックチキンステーキ（457kcal／C14.8g）にカリフラワーライス（42kcal／C8.2g）を合わせると、約499kcal・タンパク質46.4g・糖質約23gに収まります。ハンバーグ単品を選び、ライスをカリフラワーライスに置き換えるのが基本です。" },
            { q: "びっくりドンキーで満腹感を高めるコツは何ですか？", a: "みそ汁（43kcal）やビーフコンソメスープ（19kcal）を食事の最初に飲むと満腹感が出やすくなります。ハンバーグはタンパク質が多く腹持ちが良いので、ライスを控えめにしてもしっかり満足できます。" },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Summary */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "ハンバーグは単品で頼み、ライスを小盛（252kcal）かカリフラワーライス（42kcal）にしてカロリーを自分で調整",
              "最軽量はＳ ハンバーグ（262kcal／P20.3g）。ハンバーグ Ｓ（312kcal）やレギュラーバーグステーキ（316kcal）も低カロリー",
              "高タンパクならガーリックチキンステーキ（457kcal／P42.1g）が優秀。糖質制限にも向く",
              "ディッシュのＬサイズ・チーズ・カリー・エビフライ・大盛ライスは1,000kcal超になりやすいので避ける",
              "サイドはみそ汁やスープ・軽めサラダを選び、ドリンクは無糖に",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はびっくりドンキー公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="bikkuri-donkey-diet" />

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
