import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  ComparisonTable,
  RankingCard,
  TipBox,
  WarningBox,
  CheckList,
  Marker,
  CTABanner,
  ArticleImage,
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
  title: "てんやのダイエット・カロリーガイド｜天丼・天ぷらの太りにくい選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/tenya-diet" },
  description:
    "てんや（天丼・天ぷら）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。天丼のカロリー比較、ごはん小盛りやそばとの組み合わせ、揚げ物の脂質を抑える選び方を紹介します。",
  keywords: [
    "てんや カロリー",
    "てんや ダイエット",
    "てんや 栄養",
    "てんや 天丼 カロリー",
    "てんや 太らない",
    "てんや 低カロリー",
  ],
  openGraph: {
    title: "てんやのダイエット・カロリーガイド｜天丼・天ぷらの太りにくい選び方",
    description:
      "てんや（天丼・天ぷら）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。天丼のカロリー比較、定食やそばとの組み合わせ、揚げ物の脂質を抑える選び方を紹介します。",
    url: "https://www.tabenavi.jp/guide/tenya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "てんやのダイエット・カロリーガイド｜天丼・天ぷらの太りにくい選び方",
  description:
    "てんや（天丼・天ぷら）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。天丼のカロリー比較、定食やそばとの組み合わせ、揚げ物の脂質を抑える選び方を紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/tenya-diet",
};

const tocItems = [
  { id: "calorie-overview", label: "てんやのカロリーの基本" },
  { id: "low-calorie", label: "低カロリーで選べるメニュー" },
  { id: "tendon-compare", label: "天丼の種類別カロリー比較" },
  { id: "high-protein", label: "タンパク質で選ぶメニュー" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function TenyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="てんやでダイエット"
        subtitle="天丼・天ぷらの太りにくい選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="てんやダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="tenya-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question={"てんやでダイエット中でも食べられるメニューは？"}
          answer={
            <>
              てんやは天丼・天ぷらが中心のため<strong>揚げ物とごはんでカロリーが高め</strong>ですが、選び方しだいで負担を抑えられます。軽く済ませたいなら、天ぷら盛合わせ単品（355kcal）に藪そば（冷・小／169kcal）やごはん小盛り（218kcal）を合わせる方法がおすすめ。天丼で食べるなら最も軽い<strong>海老と野菜の上天丼（674kcal）</strong>を基準にすると、海かぜ天丼（912kcal）より約240kcal抑えられます。揚げ物が多いぶん脂質が高くなりやすいので、ごはんの量と天ぷらの品数で調整するのがポイントです。
            </>
          }
        />

        <p className="mb-4">
          てんやは<Marker>天丼・天ぷらを手頃に楽しめる</Marker>専門チェーンです。揚げ物とごはんが主役のため、メニューによっては1食で<Marker color="blue">700〜1,300kcal</Marker>に達することもあり、注文の仕方でカロリーに大きな差がつきます。
        </p>
        <p className="mb-4">
          一方で、天ぷら盛合わせ（355kcal）やそば・うどんの小サイズ（169〜200kcal）など、組み合わせ次第で<Marker>軽めにまとめられる選択肢</Marker>も用意されています。最も軽い海老と野菜の上天丼（674kcal）と、最も重い海かぜ天丼(温)(1人前)うどんセット（1,307kcal）では約630kcalもの差があります。
        </p>
        <p className="mb-8">
          この記事では、てんやのメニューをカロリー・タンパク質・脂質の実データで整理し、天丼の種類別比較や揚げ物の脂質を抑える食べ方を詳しく解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="天丼・和食のイメージ"
        />

        {/* Section 1: カロリーの基本 */}
        <section className="mb-16">
          <SectionHeading id="calorie-overview">てんやのカロリーの基本を知る</SectionHeading>

          <p className="mb-4">
            てんやのカロリーは大きく分けて<Marker>「天ぷら（揚げ物）」「ごはん」「そば・うどん」</Marker>の3要素で決まります。天丼は天ぷら＋たれの染みたごはんの組み合わせなので、脂質と糖質がどちらも高くなりやすいのが特徴です。
          </p>

          <p className="mb-4">
            ごはんはサイズによって大きく差が出ます。<Marker color="blue">小盛り218kcal・普通盛り328kcal・大盛り530kcal・特盛り702kcal</Marker>と、特盛りは小盛りの3倍以上。天丼を選ぶより、天ぷら単品とごはん小盛りを別々に頼んだ方がごはん量をコントロールしやすくなります。
          </p>

          <NutritionTable
            items={[
              { name: "みそ汁", calories: 22, protein: 1.4, fat: 0.7, carbs: 2.7, highlight: true },
              { name: "藪そば(冷)(小)", calories: 169, protein: 7.5, fat: 1.3, carbs: 32.1, highlight: true },
              { name: "うどん(冷)(小)", calories: 197, protein: 5.6, fat: 0.8, carbs: 42.1 },
              { name: "ごはん（小盛り）", calories: 218, protein: 3.5, fat: 0.4, carbs: 51.9, highlight: true },
              { name: "豚汁", calories: 225, protein: 5.9, fat: 17.8, carbs: 12.6 },
              { name: "ごはん（普通盛り）", calories: 328, protein: 5.3, fat: 0.6, carbs: 77.9 },
              { name: "ごはん（大盛り）", calories: 530, protein: 8.5, fat: 1.0, carbs: 126.1 },
              { name: "ごはん（特盛り）", calories: 702, protein: 11.3, fat: 1.4, carbs: 167.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="てんやでのカロリーの考え方">
            <p>
              てんやでカロリーを抑える基本は<Marker>「ごはんを盛りすぎない」「天ぷらの品数を絞る」</Marker>の2点です。天丼セットは見た目以上に糖質が多く、ごはん特盛り（702kcal・炭水化物167g）だけで一食ぶんの糖質に届いてしまいます。みそ汁（22kcal）を最初に飲んで満腹感を整えるのもおすすめです。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーで選べるメニュー */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選べるメニュー</SectionHeading>

          <p className="mb-6">
            カロリーを抑えたいときは、<Marker>天丼セットではなく単品の組み合わせ</Marker>で構成するのがコツ。てんやの軽めメニューを使ったダイエット向けの組み合わせベスト3を紹介します。
          </p>

          <RankingCard
            rank={1}
            title="天ぷら盛合わせ ＋ ごはん小盛り"
            subtitle="合計 約573kcal / P16.9g / F20.7g / C82.4g"
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">天ぷら盛合わせ（355kcal）にごはん小盛り（218kcal）</Marker>を合わせる構成。天丼にして食べるより、ごはん量を自分で調整できるのが利点です。たれをかけずに天つゆ少なめにすれば、塩分・糖質もさらに抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              最も軽い海老と野菜の上天丼（674kcal）より約100kcal低く、天ぷらの満足感はしっかり残せる組み合わせです。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="天ぷら盛合わせ ＋ 藪そば（冷・小）"
            subtitle="合計 約524kcal / P20.9g / F21.6g / C62.6g"
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ごはんの代わりに<Marker>藪そば（冷・小／169kcal）</Marker>を合わせると、炭水化物量を抑えつつタンパク質を約21gまで確保できます。そばは小サイズなら糖質もごはん普通盛りより控えめです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              温かいそば（小・172kcal）でもほぼ同等。冷温どちらでも軽めに収まります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="おこさま天丼（天丼のみ）"
            subtitle="357kcal / P7.7g / F5.8g / C71.2g"
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              量を控えたい日には<Marker color="green">おこさま天丼（357kcal）</Marker>という選択肢も。脂質はわずか5.8gと天丼の中では極めて低く、軽く済ませたいときに向いています。物足りなければみそ汁（22kcal）やほうれん草のおひたし（11kcal）を添えても大きくカロリーは増えません。
            </p>
          </RankingCard>

          <p className="text-xs text-gray-400 mb-4">
            ※組み合わせの合計値はDB実値の単品カロリーを合算した目安です。栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <ArticleImage
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
            alt="天ぷら・和食のイメージ"
          />
        </section>

        {/* Section 3: 天丼の種類別カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="tendon-compare">天丼の種類別カロリー比較</SectionHeading>

          <p className="mb-6">
            天丼で食べるなら、種類によるカロリー差を知っておくことが大切です。<Marker>同じ「天丼（みそ汁付き）」でも674〜912kcalと約240kcalの開き</Marker>があります。
          </p>

          <NutritionTable
            items={[
              { name: "海老と野菜の上天丼", calories: 674, protein: 15.6, fat: 21.1, carbs: 109.8, highlight: true },
              { name: "初夏ご馳走天丼", calories: 695, protein: 21.7, fat: 19.6, carbs: 110.9, highlight: true },
              { name: "てんやの天丼", calories: 715, protein: 20.0, fat: 21.6, carbs: 113.9 },
              { name: "鶏と舞茸の天丼", calories: 757, protein: 17.3, fat: 28.5, carbs: 111.6 },
              { name: "野菜天丼", calories: 792, protein: 10.6, fat: 30.6, carbs: 123.8 },
              { name: "オールスター天丼", calories: 796, protein: 23.7, fat: 26.7, carbs: 119.3 },
              { name: "たれづけあじわい天丼", calories: 810, protein: 24.8, fat: 30.3, carbs: 113.1 },
              { name: "いろどり天丼", calories: 826, protein: 25.7, fat: 28.5, carbs: 120.3 },
              { name: "海鮮かき揚げ天丼", calories: 883, protein: 23.3, fat: 39.7, carbs: 110.6 },
              { name: "海かぜ天丼", calories: 912, protein: 22.3, fat: 40.3, carbs: 120.0 },
            ]}
            caption="いずれもみそ汁付き。栄養成分は各チェーン公式情報をもとに記載。"
          />

          <p className="mb-4">
            最も軽いのは<Marker color="blue">海老と野菜の上天丼（674kcal）</Marker>。一方で海鮮かき揚げ天丼（883kcal）と海かぜ天丼（912kcal）は、かき揚げの油吸収量が多く脂質が約40gと突出しています。カロリーを優先するなら上位の軽い天丼を、タンパク質も欲しいなら初夏ご馳走天丼（P21.7g）やオールスター天丼（P23.7g）が選択肢になります。
          </p>

          <SubSectionHeading>同じ天丼でも「脂質」で差がつく</SubSectionHeading>

          <p className="mb-4">
            天丼選びでは<Marker>カロリーだけでなく脂質に注目</Marker>すると、ローファットダイエット中の選び方が変わります。
          </p>

          <ComparisonTable
            headers={["天丼メニュー", "カロリー", "タンパク質", "脂質", "P/F比"]}
            rows={[
              ["初夏ご馳走天丼", "695 kcal", "P 21.7g", "F 19.6g", "1.11"],
              ["海老と野菜の上天丼", "674 kcal", "P 15.6g", "F 21.1g", "0.74"],
              ["海かぜ天丼", "912 kcal", "P 22.3g", "F 40.3g", "0.55"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            P/F比（タンパク質÷脂質）が最も高いのは初夏ご馳走天丼。<Marker color="blue">カロリーを抑えつつタンパク質をしっかり摂りたい</Marker>なら有力です。逆に海かぜ天丼は脂質40.3gとカロリーの大半が脂質由来で、同じ天丼でも約630kcalの差を生みます。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="てんやの天丼カロリーをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: タンパク質で選ぶ */}
        <section className="mb-16">
          <SectionHeading id="high-protein">タンパク質で選ぶてんやメニュー</SectionHeading>

          <p className="mb-6">
            揚げ物中心のてんやでも、海老・いか・鶏天などの具材を選べば<Marker>タンパク質をしっかり摂れる</Marker>メニューがあります。タンパク質量の多い主な品を整理しました。
          </p>

          <NutritionTable
            items={[
              { name: "いろどり天ぷらと(温)藪そば", calories: 812, protein: 34.3, fat: 29.9, carbs: 102.9, highlight: true },
              { name: "あじわい天ぷらと(温)(1人前)藪そば", calories: 796, protein: 33.3, fat: 31.7, carbs: 95.7, highlight: true },
              { name: "オールスター天ぷらと(温)藪そば", calories: 783, protein: 32.3, fat: 28.1, carbs: 101.9 },
              { name: "海かぜ天丼", calories: 912, protein: 22.3, fat: 40.3, carbs: 120.0 },
              { name: "オールスター天丼", calories: 796, protein: 23.7, fat: 26.7, carbs: 119.3 },
              { name: "初夏ご馳走天丼", calories: 695, protein: 21.7, fat: 19.6, carbs: 110.9 },
            ]}
            highlightProtein
            caption="タンパク質量の多い順。栄養成分は各チェーン公式情報をもとに記載。"
          />

          <p className="mb-4">
            天ぷら＋そばの組み合わせは、<Marker color="green">そばのタンパク質が加わってP30g超え</Marker>になる品が多くあります。中でも、いろどり天ぷらと藪そば（温）はP34.3gと最も高タンパク。ただしカロリー・脂質も高めなので、トレーニング後や活動量の多い日のメインに向いています。
          </p>

          <TipBox title="タンパク質を効率よく摂るなら">
            <p>
              天丼単体ではタンパク質が15〜25g前後にとどまることが多いため、<Marker>そば（小）やみそ汁、冷奴（96kcal・P8.1g）を添える</Marker>とタンパク質の底上げができます。冷奴は脂質も低めで、揚げ物中心の食事のバランスを整えるのに役立ちます。
            </p>
          </TipBox>
        </section>

        {/* Section 5: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            てんやには<Marker>1,000kcalを超えるセットメニュー</Marker>が多数あります。天丼にそば・うどんを足したセットは特にカロリーが膨らみやすいので注意しましょう。
          </p>

          <WarningBox title="ダイエット中は控えたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">海かぜ天丼(温)(1人前)うどんセット（1,307kcal）</span> ─ てんやの中で最も高カロリー。脂質41.8g・炭水化物203.9gと一食で大幅オーバーになりがち。</li>
              <li><span className="font-bold">海鮮かき揚げ天丼（883kcal・脂質39.7g）</span> ─ かき揚げは油の吸収量が多く、天丼の中でも脂質が突出。</li>
              <li><span className="font-bold">海かぜ天丼（912kcal・脂質40.3g）</span> ─ 単品でも900kcal超え。脂質を抑えたいなら初夏ご馳走天丼（F19.6g）の方が向いています。</li>
              <li><span className="font-bold">ごはん（特盛り）（702kcal・炭水化物167g）</span> ─ ごはんだけで一食ぶんの糖質に到達。盛り増しは避けて小盛り（218kcal）が無難。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイド・追加の注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">天丼に「(1人前)そば・うどんセット」を追加</span> ─ 多くが1,000〜1,300kcal台に。麺を足すなら小サイズ（藪そば小169kcal）を選ぶか単品にとどめましょう。</li>
              <li><span className="font-bold">豚汁（225kcal・脂質17.8g）</span> ─ 具だくさんで満足感は高い反面、みそ汁（22kcal）と比べ脂質が多め。揚げ物中心の日はみそ汁の方が脂質を抑えられます。</li>
              <li><span className="font-bold">海鮮かき揚げ（502kcal・脂質38.3g）の単品追加</span> ─ 天丼に足すと脂質が一気に跳ね上がります。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 6: 太りにくい食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">てんやで太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            揚げ物中心のてんやでも、<Marker>ごはん量・天ぷらの品数・組み合わせ</Marker>を工夫すれば負担を抑えられます。実践しやすいコツを整理しました。
          </p>

          <CheckList
            items={[
              "天丼ではなく「天ぷら単品＋ごはん小盛り（218kcal）」で構成し、ごはん量を自分で調整する",
              "ごはんは特盛り（702kcal）・大盛り（530kcal）を避け、小盛り（218kcal）を基本にする",
              "麺を足すなら（1人前）セットより藪そば（小・169kcal）など小サイズを選ぶ",
              "脂質を抑えたいときは、かき揚げ系（海かぜ・海鮮かき揚げ）より海老や野菜の天ぷらを選ぶ",
              "みそ汁（22kcal）やほうれん草のおひたし（11kcal）を先に食べて満腹感を整える",
            ]}
          />

          <SubSectionHeading>目的別のおすすめ組み合わせ</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（カロリー制限・ローファット・高タンパク）によって、<Marker>てんやで選ぶべき構成は変わります</Marker>。目的別の目安を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ構成", "カロリー", "特徴"]}
            rows={[
              ["カロリー制限", "天ぷら盛合わせ ＋ 藪そば（冷・小）", "約524 kcal", "P約21gを確保しつつ軽め"],
              ["ローファット", "初夏ご馳走天丼", "695 kcal", "脂質19.6g・P21.7gで天丼内では低脂質"],
              ["高タンパク", "いろどり天ぷらと(温)藪そば", "812 kcal", "P34.3gでしっかりタンパク質補給"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            カロリーを最優先するなら<Marker color="blue">天ぷら盛合わせ＋藪そば（冷・小）で約524kcal</Marker>。脂質を抑えたい日は初夏ご馳走天丼が天丼内で最もP/F比が高く、ローファット志向に向いています。揚げ物の量を活動量に合わせて選ぶのがポイントです。
          </p>

          <ArticleImage
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
            alt="和食・天丼のイメージ"
          />

          <SubSectionHeading>関連チェーン・記事もチェック</SubSectionHeading>

          <p className="mb-4">
            てんやの全メニューや高タンパク・低カロリー一覧は{" "}
            <Link href="/chains/tenya" className="text-sky-600 font-medium hover:underline">てんやのメニュー一覧</Link>
            から確認できます。目的別では{" "}
            <Link href="/chains/tenya/high-protein" className="text-sky-600 font-medium hover:underline">高タンパクメニュー</Link>
            、{" "}
            <Link href="/chains/tenya/diet" className="text-sky-600 font-medium hover:underline">ダイエット向けメニュー</Link>
            、{" "}
            <Link href="/chains/tenya/low-calorie" className="text-sky-600 font-medium hover:underline">低カロリーメニュー</Link>
            のページが便利です。
          </p>

          <p className="mb-4">
            外食全体でのダイエットの考え方は{" "}
            <Link href="/guide/eating-out-diet" className="text-sky-600 font-medium hover:underline">外食ダイエットの基本ガイド</Link>
            、揚げ物の脂質対策は{" "}
            <Link href="/guide/low-fat-eating-out" className="text-sky-600 font-medium hover:underline">外食で脂質を抑えるコツ</Link>
            、昼食選びは{" "}
            <Link href="/guide/diet-lunch" className="text-sky-600 font-medium hover:underline">ダイエット向けランチガイド</Link>
            、各チェーンの数値比較は{" "}
            <Link href="/guide/calorie-database" className="text-sky-600 font-medium hover:underline">外食カロリーデータベース</Link>
            も参考にしてください。
          </p>
        </section>

        <ServiceOffers
          tag="diet"
          heading="揚げ物が続く外食を、家の食事でリセットしたい人へ"
        />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            てんやは天丼・天ぷら中心でカロリーが高めですが、ごはん量と天ぷらの選び方しだいでダイエット中でも楽しめます。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "天丼で食べるなら最も軽い海老と野菜の上天丼（674kcal）が基準。海かぜ天丼（912kcal）とは約240kcal差",
              "天丼セットより「天ぷら盛合わせ（355kcal）＋ごはん小盛り（218kcal）」の単品構成の方がごはん量を調整しやすい",
              "脂質を抑えたいなら、かき揚げ系（脂質約40g）より初夏ご馳走天丼（F19.6g）など海老・野菜中心を選ぶ",
              "タンパク質重視なら天ぷら＋そばの組み合わせ（いろどり天ぷらと藪そばでP34.3g）が有力",
              "ごはん特盛り（702kcal）や天丼＋（1人前）麺セット（1,000kcal超）は避け、小サイズで調整する",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="tenya-diet"
          items={[
            {
              q: "てんやで一番カロリーの低い天丼はどれですか？",
              a: "みそ汁付きの天丼の中では海老と野菜の上天丼が674kcalで最も低めです。次いで初夏ご馳走天丼が695kcal、てんやの天丼が715kcalと続きます。最も重い海かぜ天丼（912kcal）とは約240kcalの差があります。量を控えたい場合はおこさま天丼（天丼のみ・357kcal）という選択肢もあります。",
            },
            {
              q: "てんやでダイエット中におすすめの食べ方は？",
              a: "天丼セットではなく、天ぷら盛合わせ（355kcal）にごはん小盛り（218kcal）や藪そば（冷・小／169kcal）を合わせる単品構成がおすすめです。ごはん量を自分で調整でき、天ぷら＋そばなら約524kcalでタンパク質も約21g確保できます。みそ汁（22kcal）を先に飲んで満腹感を整えるのも有効です。",
            },
            {
              q: "てんやの天ぷらで脂質が高いメニューは？",
              a: "かき揚げ系の脂質が突出しています。海かぜ天丼は脂質40.3g・912kcal、海鮮かき揚げ天丼は脂質39.7g・883kcalです。脂質を抑えたい場合は、初夏ご馳走天丼（脂質19.6g・695kcal）など海老や野菜中心の天丼を選ぶと約20gの差がつきます。",
            },
            {
              q: "てんやでタンパク質を多く摂れるメニューは？",
              a: "天ぷらとそばの組み合わせがタンパク質を稼げます。いろどり天ぷらと藪そば（温）はP34.3g、あじわい天ぷらと藪そば（温・1人前）はP33.3gと高めです。天丼単体ではオールスター天丼がP23.7g、初夏ご馳走天丼がP21.7gと比較的多めです。",
            },
            {
              q: "てんやでごはんの量は調整できますか？",
              a: "ごはんは小盛り（218kcal）・普通盛り（328kcal）・大盛り（530kcal）・特盛り（702kcal）から選べます。小盛りと特盛りでは約480kcalもの差があるため、ダイエット中は小盛りを基本にするとカロリーと糖質を大きく抑えられます。",
            },
            {
              q: "てんやでダイエット中に避けたほうがいいメニューは？",
              a: "天丼に（1人前）のそば・うどんを足したセットは1,000〜1,300kcal台になりやすく、最も重い海かぜ天丼(温)(1人前)うどんセットは1,307kcalです。また、ごはん特盛り（702kcal・炭水化物167g）も糖質が多いため、いずれもダイエット中は控えめが無難です。",
            },
          ]}
        />

        <CTABanner
          title="外食のカロリーをまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="tenya-diet" />

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
