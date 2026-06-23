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
  CompareBar,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/starbucks-diet" },
  title:
    "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術 | たべなび",
  description:
    "スタバのドリンクをカロリー順にランキング。コーヒー系・ティー系の低カロリーメニュー、ラテやフラペチーノのカロリー、フードの選び方まで実データで徹底解説。スタバで太らない選び方がわかります。",
  keywords: [
    "スタバ ダイエット",
    "スタバ カロリー",
    "スタバ 低カロリー",
    "スターバックス カロリー",
    "スタバ フラペチーノ カロリー",
  ],
  openGraph: {
    title: "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術",
    description:
      "スタバのドリンクをカロリー順にランキング。低カロリーメニューの選び方とフラペチーノのカロリーを実データで徹底解説。",
    url: "https://www.tabenavi.jp/guide/starbucks-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術",
  description:
    "スタバのドリンクをカロリー順にランキング。低カロリーメニューの選び方とフラペチーノのカロリーを実データで徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/starbucks-diet",
};

const tocItems = [
  { id: "calorie-facts", label: "スタバドリンクのカロリー事情" },
  { id: "low-cal-ranking", label: "低カロリードリンクランキング" },
  { id: "customize", label: "カスタマイズでカロリーを抑える方法" },
  { id: "food-menu", label: "フードメニューの選び方" },
  { id: "avoid", label: "避けるべきドリンク" },
  { id: "summary", label: "まとめ" },
];

export default function StarbucksDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="スタバダイエットガイド"
        subtitle="低カロリードリンクランキングと太らない注文術【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=400&fit=crop"
        breadcrumb="スタバダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="starbucks-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          スターバックスはダイエット中に「行くべきではない場所」と思われがちですが、実は<Marker>メニューの選び方次第でカロリーを大きく抑えられる</Marker>のをご存じでしょうか。ブリュード コーヒーはわずか11〜17kcal、ティー系にいたっては0〜5kcalと、ほぼゼロカロリーで楽しめるドリンクが揃っています。
        </p>
        <p className="mb-4">
          一方で、<Marker>フラペチーノ系は240〜500kcalとケーキ並みのカロリー</Marker>。何も知らずに注文すると、1杯で1食分近いカロリーを摂取してしまうことも。知識があるかないかで大きな差が出るのがスタバです。
        </p>
        <p className="mb-8">
          この記事では、たべなび収録のスタバドリンクをカロリー順にランキングし、ダイエット中でも安心して選べるメニューと、注意したい高カロリードリンクを実データで解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: スタバドリンクのカロリー事情 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"スタバでカロリーの低いドリンクは何ですか？"}
          answer={"コールドブリュー コーヒー（10kcal）やブリュード コーヒー（アイス11kcal／ホット17kcal）、カフェ アメリカーノ（11kcal）が最も低カロリーで、ダイエット中の最有力候補です。さらにティー系（カモミール0kcal、アール グレイ2kcalなど）はほぼゼロカロリー。ラテが飲みたい場合はカプチーノ（ホット120kcal）が比較的カロリーを抑えられます。"}
        />

        <SectionHeading id="calorie-facts">スタバドリンクのカロリー事情</SectionHeading>

          <p className="mb-4">
            スタバドリンクのカロリーは、<Marker>ベースが「コーヒー・ティーだけ」か「ミルクが入るか」「フラペチーノか」</Marker>でカテゴリごとに大きく変わります。まずはカテゴリごとのカロリー帯を把握しましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "コーヒー・ティー系はほぼゼロカロリー",
                body: "ブリュード コーヒー（アイス11kcal／ホット17kcal）、カフェ アメリカーノ（11kcal）、コールドブリュー コーヒー（10kcal）はほぼゼロカロリー。ティー（カモミール）は0kcal、アール グレイは2kcalと、ストレートのティー系も極めて低カロリーです。",
              },
              {
                title: "ミルクが入るラテ系は120〜230kcal前後",
                body: "カプチーノ（ホット120kcal／アイス146kcal）、カフェミスト（134kcal）、キャラメル マキアート（アイス181kcal／ホット223kcal）、抹茶 ティー ラテ（アイス214kcal／ホット231kcal）など。ミルクが入るぶんカロリーが上がります。",
              },
              {
                title: "フラペチーノ・甘いドリンクは240〜500kcal",
                body: "THE フラペチーノ® of コーヒー ジェリー（243kcal）からダブル チョコレート フラペチーノ（497kcal）まで、フラペチーノ系はケーキ並みのカロリー。クリーム・ソース・トッピングが重なるほど高くなります。",
              },
            ]}
          />

          <CompareBar
            title="低カロリードリンクの比較（カロリーが低い順）"
            items={[
              { name: "ティー（カモミール）", value: 0 },
              { name: "アイスティー（ブラック）", value: 4 },
              { name: "コールドブリュー コーヒー", value: 10 },
              { name: "カフェ アメリカーノ", value: 11 },
              { name: "ブリュード コーヒー（ホット）", value: 17 },
              { name: "カプチーノ（ホット）", value: 120 },
            ]}
            metric="calorie"
            sort="asc"
            highlightTop={2}
            caption="出典：たべなび収録のスターバックス栄養成分データ（2026年6月時点）"
          />

          <ArticleImage src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=400&fit=crop" alt="スタバ風のラテアートが美しいコーヒー" />
        </section>

        {/* Section 2: 低カロリードリンクランキング */}
        <section className="mb-16">
          <SectionHeading id="low-cal-ranking">低カロリードリンクランキング</SectionHeading>

          <p className="mb-4">
            スタバの定番ドリンクをカロリーの低い順にランキング。<Marker color="blue">コーヒー系・ティー系は20kcal以下</Marker>で、ミルクの入るラテ系は120kcal前後から、フラペチーノ系はさらに高くなります。
          </p>

          <NutritionTable
            items={[
              { name: "コールドブリュー コーヒー", calories: 10, protein: 0.4, fat: 0.0, carbs: 2.3, highlight: true },
              { name: "カフェ アメリカーノ（アイス）", calories: 11, protein: 0.8, fat: 0.0, carbs: 2.2, highlight: true },
              { name: "ブリュード コーヒー（ホット）", calories: 17, protein: 1.0, fat: 0.0, carbs: 3.1, highlight: true },
              { name: "カプチーノ（ホット）", calories: 120, protein: 6.9, fat: 6.0, carbs: 10.1 },
              { name: "カフェミスト", calories: 134, protein: 7.6, fat: 6.5, carbs: 11.4 },
              { name: "カプチーノ（アイス）", calories: 146, protein: 10.5, fat: 4.5, carbs: 16.1 },
              { name: "キャラメル マキアート（アイス）", calories: 181, protein: 8.0, fat: 4.7, carbs: 26.8 },
              { name: "抹茶 ティー ラテ（アイス）", calories: 214, protein: 7.7, fat: 6.4, carbs: 32.2 },
              { name: "カフェ モカ（アイス）", calories: 262, protein: 7.5, fat: 8.1, carbs: 41.4 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-4">
            ※たべなび収録のスターバックス栄養成分データ（2026年6月時点）に基づく値です。
          </p>

          <RankingCard rank={1} title="コールドブリュー / アメリカーノ / ブリュード コーヒー" subtitle="10〜17kcal / ほぼゼロカロリー">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>ダイエット中のスタバはブラック系一択</Marker>。コールドブリュー コーヒーは10kcal、カフェ アメリカーノ（アイス）は11kcal、ブリュード コーヒー（ホット）は17kcalと実質ゼロカロリー。カフェインの覚醒作用も期待でき、トレーニング前のドリンクとしても向いています。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="ティー各種（ストレート）" subtitle="0〜5kcal / カロリーほぼゼロ">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">ティー（カモミール）は0kcal、アール グレイは2kcal、イングリッシュ ブレックファストは5kcal</Marker>と、ストレートのティー系はほぼゼロカロリー。カフェインを控えたい方はカモミールなどのハーブティーも選べます。午後の気分転換に最適です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="カプチーノ（ホット）" subtitle="120kcal / P6.9g / F6.0g / C10.1g">
            <p className="text-sm text-gray-700 leading-relaxed">
              ブラックが苦手でミルク系が飲みたい方には<Marker color="blue">カプチーノ（ホット）</Marker>。120kcalとミルク系の中では比較的カロリーが低く、タンパク質も6.9gと牛乳の栄養が摂れます。同じカプチーノでもアイス（146kcal）よりホットの方がやや低カロリーです。
            </p>
          </RankingCard>

          <TipBox title="同じドリンクでもホット/アイスで差が出る">
            <p>スタバはホットとアイスでカロリーが異なるドリンクがあります。たとえば<Marker>カプチーノはホット120kcalに対しアイス146kcal、キャラメル マキアートはアイス181kcalに対しホット223kcal</Marker>。ドリンクごとに低い方を選ぶと、無理なくカロリーを抑えられます。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="スタバのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 3: カスタマイズでカロリーを抑える方法 */}
        <section className="mb-16">
          <SectionHeading id="customize">カスタマイズでカロリーを抑える方法</SectionHeading>

          <p className="mb-6">
            スタバの強みは豊富なカスタマイズオプション。<Marker>ミルク変更・シロップ減量・ホイップ抜きの3つを組み合わせる</Marker>ことで、甘いドリンクのカロリーを抑えやすくなります。具体的な削減量は店舗やレシピで変わりますが、考え方を押さえておくと選びやすくなります。
          </p>

          <SubSectionHeading>カスタマイズ1：無脂肪・低脂肪ミルクに変更（無料）</SubSectionHeading>
          <p className="mb-6">
            <Marker color="blue">ミルクの変更は無料</Marker>で、手軽なカロリーカット法です。通常ミルクから無脂肪ミルクに変えると脂質が減るぶんカロリーが下がる傾向があります。「ノンファットミルクでお願いします」と一言伝えるだけで完了。脂質を抑えたい方に向いた選び方です。
          </p>

          <SubSectionHeading>カスタマイズ2：シロップ減量・なし</SubSectionHeading>
          <p className="mb-6">
            シロップは甘いドリンクのカロリーと糖質の大きな要因。「シロップ少なめ」や「シロップなし」にすると、そのぶんカロリーを抑えられます。<Marker>甘いラテ系やフラペチーノはシロップ量の調整が効きやすい</Marker>のがポイント。甘さは少し減りますが、コーヒーや茶葉の風味がより感じられます。
          </p>

          <SubSectionHeading>カスタマイズ3：ホイップクリーム抜き</SubSectionHeading>
          <p className="mb-6">
            <Marker color="green">ホイップは脂質が高い</Marker>ため、抜くだけでカロリー削減につながります。カフェ モカやフラペチーノのホイップを抜くのは、手軽で効果が出やすいカスタマイズ。ダイエット中は「ホイップなしで」と伝えるのがおすすめです。
          </p>

          <SubSectionHeading>そもそも低カロリーなドリンクを選ぶ</SubSectionHeading>
          <p className="mb-6">
            カスタマイズ以前に、<Marker>ベースから低カロリーなドリンクを選ぶ</Marker>のが最も確実です。下の比較のように、同じ「コーヒー系」でもブラックとフラペチーノでは大きな差があります。
          </p>

          <CompareBar
            title="同じコーヒー系でもこれだけ違う（カロリー比較）"
            items={[
              { name: "カフェ アメリカーノ（アイス）", value: 11 },
              { name: "カプチーノ（ホット）", value: 120 },
              { name: "カフェ モカ（アイス）", value: 262 },
              { name: "THE フラペチーノ® of コーヒー ジェリー", value: 243 },
              { name: "ダブル チョコレート フラペチーノ", value: 497 },
            ]}
            metric="calorie"
            sort="asc"
            highlightTop={1}
            caption="出典：たべなび収録のスターバックス栄養成分データ（2026年6月時点）"
          />

          <TipBox title="「シロップ少なめ」で甘さとカロリーのバランスを取る">
            <p>甘さを完全になくすのは寂しいけれど、カロリーは抑えたい。そんなときは<Marker>「シロップ少なめで」</Marker>と伝えるのが手軽です。甘いラテやフラペチーノほど効果が出やすいので、まずは1段階減らしてみるのがおすすめです。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=400&fit=crop" alt="カスタマイズされたスタバドリンクのイメージ" />
        </section>

        {/* Section 4: フードメニューの選び方 */}
        <section className="mb-16">
          <SectionHeading id="food-menu">フードメニューの選び方</SectionHeading>

          <p className="mb-6">
            スタバのフードメニューはドリンクと合わせると高カロリーになりがち。<Marker>ダイエット中に選ぶべきフードと避けるべきフード</Marker>を把握しましょう。
          </p>

          <SubSectionHeading>おすすめフードメニュー</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <NutritionCard
              name="アサイーベリー ヨーグルト＆グラノーラ"
              chain="スターバックス"
              calories={171}
              protein={11.0}
              fat={4.0}
              carbs={22.6}
              recommended
            />
            <NutritionCard
              name="ヨーグルト＆バナナグラノーラ"
              chain="スターバックス"
              calories={179}
              protein={11.5}
              fat={5.5}
              carbs={20.9}
              recommended
            />
            <NutritionCard
              name="ハム＆チーズ 石窯カンパーニュサンド"
              chain="スターバックス"
              calories={255}
              protein={17.4}
              fat={13.8}
              carbs={15.9}
              recommended
            />
            <NutritionCard
              name="バジルポーク ホットトルティーヤ"
              chain="スターバックス"
              calories={352}
              protein={16.2}
              fat={23.8}
              carbs={18.4}
            />
          </div>

          <WarningBox title="避けるべきフードメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">チョコレートテリーヌ（393kcal）</span> ─ 脂質31.8gと高め。濃厚なチョコレートスイーツで、おやつとしてはカロリー過多になりやすい。</li>
              <li><span className="font-bold">クリームシフォンケーキ（374kcal）</span> ─ 脂質23.7g。ふんわり軽く見えても、生クリーム由来の脂質が多めです。</li>
              <li><span className="font-bold">アールグレイ バスクチーズケーキ（368kcal）</span> ─ 脂質25.7gと高脂質。フラペチーノ + ケーキのコンボは800kcal超えになることも。</li>
            </ul>
          </WarningBox>

          <TipBox title="フードを食べるならドリンクはブラック系で">
            <p>フードメニューを注文する場合は、<Marker>ドリンクをブリュード コーヒー（11〜17kcal）かカフェ アメリカーノ（11kcal）にする</Marker>のがおすすめ。ハム＆チーズ 石窯カンパーニュサンド（255kcal）+ カフェ アメリカーノ（11kcal）= 約266kcalなら、軽めのランチとしても十分です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop" alt="コーヒーとサンドイッチの軽食" />
        </section>

        {/* Section 5: 避けるべきドリンク */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきドリンク</SectionHeading>

          <p className="mb-4">
            スタバで最も注意すべきは<Marker>フラペチーノ系・チョコレート系ドリンク</Marker>。クリーム・ソース・トッピングが重なり、1杯で340〜500kcalに達するものもあります。
          </p>

          <NutritionTable
            items={[
              { name: "和三蜜 アーモンドミルク フラペチーノ®", calories: 342, protein: 6.8, fat: 17.4, carbs: 40.3 },
              { name: "スターバックス ストロベリー フラペチーノ®", calories: 357, protein: 5.0, fat: 12.6, carbs: 56.3 },
              { name: "THE フラペチーノ® of チャンキー クッキー", calories: 366, protein: 6.6, fat: 17.7, carbs: 45.6 },
              { name: "ホワイト モカ（ホット）", calories: 413, protein: 13.4, fat: 18.4, carbs: 49.0 },
              { name: "イチゴ チョコレート フラペチーノ®", calories: 425, protein: 5.7, fat: 16.0, carbs: 64.9 },
              { name: "ダブル チョコレート フラペチーノ", calories: 497, protein: 7.7, fat: 20.2, carbs: 72.1 },
            ]}
          />

          <WarningBox title="フラペチーノ1杯＝ケーキと同等">
            <ul className="space-y-2">
              <li><span className="font-bold">ダブル チョコレート フラペチーノ（497kcal）</span> ─ 炭水化物72.1g、脂質20.2gと、たべなび収録のスタバドリンクで最も高カロリー。1杯でほぼ1食分のカロリーです。</li>
              <li><span className="font-bold">イチゴ チョコレート フラペチーノ®（425kcal）</span> ─ 炭水化物64.9gはご飯1杯分を大きく超える量。「たまのご褒美」にとどめましょう。</li>
              <li><span className="font-bold">ホワイト モカ（ホット・413kcal）</span> ─ ホワイトチョコレートソースで脂質18.4g。「モカ」系は総じてカロリーが高めです。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["ドリンク", "カロリー", "炭水化物", "脂質"]}
            rows={[
              ["カフェ アメリカーノ（アイス）", "11 kcal", "2.2g", "0g"],
              ["カプチーノ（ホット）", "120 kcal", "10.1g", "6.0g"],
              ["キャラメル マキアート（アイス）", "181 kcal", "26.8g", "4.7g"],
              ["カフェ モカ（アイス）", "262 kcal", "41.4g", "8.1g"],
              ["ダブル チョコレート フラペチーノ", "497 kcal", "72.1g", "20.2g"],
            ]}
            bestRowIndex={0}
          />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="そのメニュー、何kcal？ たべなびで今すぐ検索"
          subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
        />

        <AffiliateProductGrid
          title="スタバ作業のお供にバッグへ忍ばせる高タンパク"
          productIds={["onebar-protein", "inbar-protein", "base-food-bread", "ultora-whey"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            スタバはカスタマイズ次第でダイエットの味方にも敵にもなります。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "コールドブリュー（10kcal）・カフェ アメリカーノ（11kcal）・ブリュード コーヒー（11〜17kcal）が最強の低カロリードリンク",
              "ティー系（カモミール0kcal、アール グレイ2kcalなど）はほぼゼロカロリー",
              "ミルク系を選ぶならカプチーノ（ホット120kcal）が比較的低カロリー",
              "ミルク変更・シロップ少なめ・ホイップ抜きで甘いドリンクのカロリーを抑えられる",
              "フラペチーノ・チョコレート系（340〜500kcal）はケーキ並み。たまのご褒美に",
              "フードを食べるならドリンクはブラック系に。アサイーベリー ヨーグルト＆グラノーラ（171kcal）やハム＆チーズ 石窯カンパーニュサンド（255kcal）がおすすめ",
              "同じドリンクでもホット/アイスでカロリーが違うことがある（例：カプチーノはホット120kcal／アイス146kcal）",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※カロリー・栄養成分は2026年6月時点でたべなびに収録された情報です。季節メニューや店舗、レシピ改定により異なる場合があります。最新の情報はスターバックス公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="starbucks-diet"
          items={[
            { q: "スタバでカロリーが最も低いドリンクは何ですか？", a: "コールドブリュー コーヒー（10kcal）、カフェ アメリカーノ（アイス11kcal）、ブリュード コーヒー（アイス11kcal／ホット17kcal）がほぼゼロカロリーで最も低カロリーです。ティー系はさらに低く、ティー（カモミール）0kcal、アール グレイ2kcalなど、ストレートの茶葉系はほぼゼロカロリーで楽しめます。" },
            { q: "スタバのラテをカロリーカットしたい場合、どうすればいいですか？", a: "ミルクの無脂肪・低脂肪への変更（無料）、シロップ少なめ、ホイップなしの3つを組み合わせるとカロリーを抑えやすくなります。削減量は店舗やレシピで変わります。ミルク系の中ではカプチーノ（ホット120kcal）が比較的低カロリーです。" },
            { q: "スタバのフラペチーノはダイエット中に飲めますか？", a: "フラペチーノ・チョコレート系は340～500kcalとケーキ並みのカロリーがあり、ダイエット中は控えめにしたいメニューです。たとえばダブル チョコレート フラペチーノは497kcal。どうしても飲みたい場合は、ホイップなしやシロップ少なめで注文し、カロリーを抑えましょう。" },
            { q: "スタバのフードメニューで低カロリーなものは？", a: "アサイーベリー ヨーグルト＆グラノーラ（171kcal）やヨーグルト＆バナナグラノーラ（179kcal）、ハム＆チーズ 石窯カンパーニュサンド（255kcal）が比較的低カロリーです。フードを選ぶ場合は、ドリンクをカフェ アメリカーノ（11kcal）などブラック系にすることで、全体のカロリーを抑えられます。" },
            { q: "スタバで避けるべき（高カロリーな）ドリンクは何ですか？", a: "ダブル チョコレート フラペチーノ（497kcal、炭水化物72.1g）、イチゴ チョコレート フラペチーノ®（425kcal）、ホワイト モカ（ホット413kcal）などが高カロリーです。フラペチーノやチョコレート系はカロリー・糖質ともに高くなりやすいので注意しましょう。" },
            { q: "スタバで避けるべき（高カロリーな）フードは何ですか？", a: "チョコレートテリーヌ（393kcal、脂質31.8g）、クリームシフォンケーキ（374kcal、脂質23.7g）、アールグレイ バスクチーズケーキ（368kcal、脂質25.7g）は特に高カロリー・高脂質のため注意が必要です。" },
          ]}
        />

        <UpdateHistory
          entries={[
            {
              date: "2026-06-22",
              note: "全ドリンク・フードのカロリーとPFCをたべなび収録の最新メニューデータで再検証。実在しないメニュー（ドリップコーヒー／カフェラテ無脂肪・低脂肪・通常／ソイラテ／バニラクリーム・キャラメル・抹茶クリーム・ダークモカチップ各フラペチーノ／季節限定フラペチーノ／ヨーグルト&グラノーラ／サラダラップ／あらびきソーセージパイ／石窯フィローネ／チョコレートチャンクスコーン／シナモンロール／ニューヨークチーズケーキ）を実在メニューへ差し替え。出典のないミルク種別・シロップ・サイズ別のカロリー断定値を削除し、実データに基づくカロリー・PFCへ修正。ランキング・比較表・QuickAnswer・FAQ・まとめも実値に統一。",
            },
            {
              date: "2026-03-19",
              note: "記事公開。",
            },
          ]}
        />

        <ArticleFooter currentSlug="starbucks-diet" />

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
