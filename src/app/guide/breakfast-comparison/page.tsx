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
  NumberedList,
  ComparisonTable,
  CalorieBar,
  ProteinBar,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "外食モーニング カロリー比較｜マック・すき家・松屋・やよい軒の朝食を徹底比較【2026年最新】 | たべなび",
  alternates: {
    canonical: "https://www.tabenavi.jp/guide/breakfast-comparison",
  },
  description:
    "マクドナルド・すき家・松屋・やよい軒の朝食メニューを、カロリー・タンパク質・PFCの実データで比較。高タンパクならやよい軒のしゃけの塩焼朝食(378kcal/P26.2g)、低カロリーならすき家のまぜのっけ朝食(393kcal)。ダイエット中・筋トレ中におすすめの朝食の選び方を紹介します。",
  keywords: [
    "外食 朝食 カロリー 比較",
    "モーニング カロリー",
    "朝マック カロリー",
    "やよい軒 朝食 カロリー",
    "すき家 朝食 カロリー",
    "朝食 高タンパク 外食",
  ],
  openGraph: {
    title:
      "外食モーニング カロリー比較｜マック・すき家・松屋・やよい軒の朝食を徹底比較",
    description:
      "マクドナルド・すき家・松屋・やよい軒の朝食を、カロリー・タンパク質・PFCの実データで横断比較。高タンパク・低カロリーな朝食の選び方がわかります。",
    url: "https://www.tabenavi.jp/guide/breakfast-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食モーニング カロリー比較｜マック・すき家・松屋・やよい軒の朝食を徹底比較",
  description:
    "マクドナルド・すき家・松屋・やよい軒の朝食メニューを、カロリー・タンパク質・PFCの実データで横断比較。高タンパク・低カロリーな朝食の選び方を解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/breakfast-comparison",
};

const tocItems = [
  { id: "conclusion", label: "結論：目的別おすすめ朝食" },
  { id: "calorie-comparison", label: "4社の定番朝食カロリー比較" },
  { id: "high-protein", label: "高タンパクで選ぶ朝食ランキング" },
  { id: "low-calorie", label: "低カロリーで選ぶ朝食ランキング" },
  { id: "by-goal", label: "目的別おすすめ（ダイエット・筋トレ・時短）" },
  { id: "how-to-choose", label: "外食モーニングの選び方5つのコツ" },
  { id: "avoid", label: "避けたい高カロリーな朝食" },
  { id: "summary", label: "まとめ" },
];

export default function BreakfastComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食モーニング4社カロリー比較"
        subtitle="マック・すき家・松屋・やよい軒の朝食を栄養データで徹底比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="外食モーニング比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="breakfast-comparison">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="外食の朝食（モーニング）で一番ヘルシーなのは？高タンパク・低カロリーな朝食はどれ？"
          answer={
            <>
              <strong>
                高タンパクで選ぶならやよい軒のしゃけの塩焼朝食（378kcal／タンパク質26.2g）
              </strong>
              が4社で頭ひとつ抜けています。
              <strong>純粋に低カロリーならすき家のまぜのっけ朝食ミニ（393kcal）</strong>
              、低脂質を重視するなら松屋のたまごかけ朝定食（451kcal／脂質6.8g）やすき家の朝食（脂質8g台）が優秀。
              ボリュームと満足感を求めるなら朝マックのエッグマックマフィン（310kcal／P18.6g）が手軽です。
              同じ「朝食」でも、定食系（やよい軒・松屋・すき家）は高タンパク低脂質、マフィン系（朝マック）は手軽だが脂質が高め、と方向性が分かれます。
              ※朝マックは平日の提供時間（一般に午前10時30分まで）に注意が必要です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「朝は外で済ませることが多いけど、どこのモーニングが一番ヘルシーなんだろう？」——出社前のマック、すき家、松屋、やよい軒。どれを選ぶかで、午前中に入れるカロリーとタンパク質は大きく変わります。実際、
          <Marker>
            4社の代表的な朝食を並べると、最軽量310kcalから松屋の朝定食600kcal超まで、約2倍の開き
          </Marker>
          があります。
        </p>
        <p className="mb-4">
          この記事では、マクドナルド・すき家・松屋・やよい軒の
          <Marker color="blue">朝食メニューの公式栄養データ</Marker>
          を横断比較します。比較は条件をそろえるため
          <strong>「標準サイズ（並盛／ミニ朝食／単品／白米ごはん）」</strong>
          を基準にし、大盛やもち麦ごはんは別途注記します。高タンパク・低カロリーそれぞれのランキングと、ダイエット・筋トレ・時短という目的別のおすすめまで、すべて数字で示します。
        </p>
        <p className="mb-8">
          「朝マックは太る？」「定食系って実は高タンパク？」といった疑問に、データで答えていきます。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="朝食のイメージ"
        />

        {/* Section 1: 結論 */}
        <section className="mb-16">
          <SectionHeading id="conclusion">
            結論：目的別おすすめ朝食（4社横断）
          </SectionHeading>

          <p className="mb-4">
            先に結論からお伝えします。4社の朝食を栄養データで横断比較した「目的別の正解」は次のとおりです。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ", "カロリー", "ポイント"]}
            rows={[
              [
                "高タンパク",
                "しゃけの塩焼朝食（やよい軒）",
                "378 kcal",
                "P26.2g・脂質8.2gと別格",
              ],
              [
                "低カロリー",
                "まぜのっけ朝食ミニ（すき家）",
                "393 kcal",
                "脂質8.1g・たまご＋とろろの和朝食",
              ],
              [
                "低脂質",
                "たまごかけ朝定食（松屋）",
                "451 kcal",
                "脂質6.8gと4社で最少クラス",
              ],
              [
                "手軽・時短",
                "エッグマックマフィン（朝マック）",
                "310 kcal",
                "片手で食べられP18.6g",
              ],
            ]}
            bestRowIndex={0}
          />
          <SourceNote asOf="2026年6月" />

          <p className="mb-4">
            ざっくり言えば、
            <Marker>
              「がっつり食べてもヘルシーにしたいなら定食系（やよい軒・すき家・松屋）」、「時間がなく片手で済ませたいなら朝マック」
            </Marker>
            という住み分けです。とくに
            <Marker color="green">
              やよい軒のしゃけの塩焼朝食は378kcalでタンパク質26.2g
            </Marker>
            と、外食の朝食としては理想的なPFCバランスを持っています。
          </p>

          <TipBox title="この記事の比較ルール">
            <p>
              チェーンによって「朝食」の標準サイズは異なります。本記事では公平性のため、すき家は
              <strong>ミニ朝食</strong>、やよい軒・松屋は
              <strong>白米（普通盛）の定食</strong>、朝マックは
              <strong>単品マフィン</strong>を基準に揃えました。大盛・もち麦ごはん・サイド追加などは別途注記しています。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 定番朝食カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="calorie-comparison">
            4社の定番朝食カロリー比較
          </SectionHeading>

          <p className="mb-4">
            まずは各社の「看板モーニング」を1品ずつ並べて比較します。朝マックは定番のエッグマックマフィン、すき家は人気のまぜのっけ朝食、松屋はたまごかけ朝定食、やよい軒は納豆朝食を選びました。
          </p>

          <ComparisonTable
            headers={["朝食メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["エッグマックマフィン（マック・単品）", "310 kcal", "18.6g", "13.6g", "27.2g"],
              ["納豆朝食（やよい軒・白米）", "370 kcal", "15.8g", "7.0g", "62.9g"],
              ["まぜのっけ朝食ミニ（すき家）", "393 kcal", "14.8g", "8.1g", "65.4g"],
              ["たまごかけ朝定食（松屋）", "451 kcal", "12.7g", "6.8g", "79.9g"],
            ]}
            bestRowIndex={0}
          />
          <p className="text-xs text-gray-400 mb-6">
            ※すき家はミニ朝食、やよい軒・松屋は白米（普通盛）の定食、マックは単品マフィンを基準に比較。栄養成分は各社公式サイトの情報をもとに記載。
          </p>

          <p className="mb-4">
            数字だけ見ると朝マックのエッグマックマフィン（310kcal）が最軽量ですが、ここには
            <Marker>カロリーの「中身」</Marker>
            の違いが隠れています。マフィン系は脂質が13.6gと高め、定食系は脂質が一桁（6.8〜8.1g）でその分ごはんの糖質が多い、という構造です。
          </p>

          <SubSectionHeading>カロリーを「長さ」で見る</SubSectionHeading>
          <CalorieBar
            title="4社の定番朝食 カロリー比較（標準サイズ）"
            items={[
              { name: "エッグマックマフィン（マック）", value: 310 },
              { name: "納豆朝食（やよい軒・白米）", value: 370 },
              { name: "まぜのっけ朝食ミニ（すき家）", value: 393 },
              { name: "たまごかけ朝定食（松屋）", value: 451 },
            ]}
            highlightTop={1}
            caption="※標準サイズ同士の比較。各社公式栄養データに基づく（2026年6月時点）。"
          />

          <TipBox title="マフィン1個 vs 定食、満足感はどっち？">
            <p>
              朝マックのマフィン単品は310kcalと軽い一方、ごはん・みそ汁・小鉢がそろう定食系は370〜451kcal。
              <Marker color="blue">
                カロリー差は最大140kcalほどですが、定食はタンパク質・食物繊維・水分（みそ汁）が多く、腹持ちで勝りやすい
              </Marker>
              のが特徴です。「マフィン1個では昼前にお腹が空く」という人は、+60〜140kcalで満足感の高い定食系を選ぶ手もあります。
            </p>
          </TipBox>
        </section>

        {/* Section 3: 高タンパクランキング */}
        <section className="mb-16">
          <SectionHeading id="high-protein">
            高タンパクで選ぶ朝食ランキング（4社横断）
          </SectionHeading>

          <p className="mb-6">
            朝にしっかりタンパク質を摂りたい人向けに、4社の標準サイズ朝食をタンパク質量で並べました。朝のタンパク質補給は、1日のタンパク質配分を整えるうえで取り入れやすいタイミングとされています。
          </p>

          <RankingCard
            rank={1}
            title="しゃけの塩焼朝食（やよい軒・白米）"
            subtitle="378kcal / P26.2g / F8.2g / C59.7g"
            calories={378}
            protein={26.2}
            fat={8.2}
            carbs={59.7}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              4社横断の
              <Marker>高タンパク朝食ナンバーワン</Marker>
              。378kcalという軽さでタンパク質26.2g・脂質8.2gは、外食モーニングとして突出した数字です。鮭の良質なタンパク質に、ごはん・みそ汁が付く王道の和定食。「朝から高タンパク低脂質を一食で完結したい」なら、まずこれを覚えてください。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="焼鮭朝食ミニ（すき家）"
            subtitle="480kcal / P22.2g / F13.4g / C69.5g"
            calories={480}
            protein={22.2}
            fat={13.4}
            carbs={69.5}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              すき家のミニ朝食の中でタンパク質トップクラス。
              <Marker color="blue">タンパク質22.2gを480kcalで確保</Marker>
              でき、焼鮭・たまご・ごはんのバランスも良好。同じすき家でも、たまかけ系（P15g前後）より魚系の朝食がタンパク質効率に優れます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="焼鮭定食（松屋）"
            subtitle="596kcal / P20.5g / F15.3g / C90.3g"
            calories={596}
            protein={20.5}
            fat={15.3}
            carbs={90.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              松屋の朝定食でタンパク質を狙うなら焼鮭定食。
              <Marker color="green">タンパク質20.5g</Marker>
              を確保できますが、ごはんが多めで炭水化物90.3gと高め。糖質を抑えたい日はライス小盛への変更で調整しやすいのが松屋の強みです。
            </p>
          </RankingCard>

          <SubSectionHeading>高タンパク朝食ランキング（標準サイズ）</SubSectionHeading>

          <NutritionTable
            highlightProtein
            items={[
              { name: "しゃけの塩焼朝食（やよい軒・白米）", calories: 378, protein: 26.2, fat: 8.2, carbs: 59.7, highlight: true },
              { name: "サバの塩焼朝食（やよい軒・白米）", calories: 495, protein: 21.7, fat: 19.3, carbs: 60.4 },
              { name: "エッグ&ウインナー朝食（やよい軒・白米）", calories: 538, protein: 21.5, fat: 23.0, carbs: 63.2 },
              { name: "焼鮭朝食ミニ（すき家）", calories: 480, protein: 22.2, fat: 13.4, carbs: 69.5, highlight: true },
              { name: "ミニすき焼き朝食（やよい軒・白米）", calories: 525, protein: 20.7, fat: 19.8, carbs: 68.2 },
              { name: "焼鮭定食（松屋）", calories: 596, protein: 20.5, fat: 15.3, carbs: 90.3 },
              { name: "エッグマックマフィン（マック・単品）", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2, highlight: true },
              { name: "しらすおろし朝食（やよい軒・白米）", calories: 381, protein: 17.2, fat: 8.4, carbs: 60.0 },
            ]}
            caption="※標準サイズ（ミニ朝食／白米普通盛／単品）で比較。各社公式栄養データに基づく。"
          />

          <ProteinBar
            title="朝食タンパク質量 比較（標準サイズ）"
            items={[
              { name: "しゃけの塩焼朝食（やよい軒）", value: 26.2 },
              { name: "焼鮭朝食ミニ（すき家）", value: 22.2 },
              { name: "サバの塩焼朝食（やよい軒）", value: 21.7 },
              { name: "焼鮭定食（松屋）", value: 20.5 },
              { name: "エッグマックマフィン（マック）", value: 18.6 },
            ]}
            highlightTop={1}
            caption="※タンパク質グラム数の比較。各社公式栄養データに基づく（2026年6月時点）。"
          />

          <TipBox title="魚系の朝食がタンパク質効率で優秀">
            <p>
              ランキング上位はやよい軒・すき家の
              <Marker>魚（鮭・サバ）系の朝食</Marker>
              が占めました。とくにやよい軒のしゃけの塩焼朝食は、カロリーあたりのタンパク質量（タンパク質効率）が4社で最も高い一品。
              <Marker color="blue">
                「タンパク質を摂りたいが脂質は抑えたい」なら魚系の和定食が最適解
              </Marker>
              です。マフィン系で高タンパクを狙うなら、後述のソーセージエッグマフィン（P21.9g）も選択肢になります。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="4社の朝食を栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="和定食の朝食のイメージ"
        />

        {/* Section 4: 低カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            低カロリーで選ぶ朝食ランキング（4社横断）
          </SectionHeading>

          <p className="mb-6">
            ダイエット中で「とにかくカロリーを抑えたい」人向けに、4社の標準サイズ朝食を低カロリー順に並べました。
          </p>

          <NutritionTable
            items={[
              { name: "エッグマックマフィン（マック・単品）", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2, highlight: true },
              { name: "納豆朝食（やよい軒・白米）", calories: 370, protein: 15.8, fat: 7.0, carbs: 62.9 },
              { name: "しゃけの塩焼朝食（やよい軒・白米）", calories: 378, protein: 26.2, fat: 8.2, carbs: 59.7, highlight: true },
              { name: "しらすおろし朝食（やよい軒・白米）", calories: 381, protein: 17.2, fat: 8.4, carbs: 60.0 },
              { name: "まぜのっけ朝食ミニ（すき家）", calories: 393, protein: 14.8, fat: 8.1, carbs: 65.4, highlight: true },
              { name: "たまかけ朝食ミニ（すき家）", calories: 411, protein: 15.1, fat: 8.6, carbs: 69.0 },
              { name: "納豆まぜのっけ朝食ミニ（すき家）", calories: 430, protein: 18.0, fat: 9.6, carbs: 67.9 },
              { name: "たまごかけ朝定食（松屋）", calories: 451, protein: 12.7, fat: 6.8, carbs: 79.9 },
            ]}
            caption="※標準サイズ（ミニ朝食／白米普通盛／単品）で比較。各社公式栄養データに基づく。"
          />

          <p className="mb-4">
            標準サイズの朝食で最軽量は朝マックの
            <Marker>エッグマックマフィン（310kcal）</Marker>
            。次いでやよい軒の納豆朝食（370kcal）、しゃけの塩焼朝食（378kcal）と続きます。
            <Marker color="blue">
              300〜400kcal前半で収まる朝食は、ダイエット中の朝食として無理のない範囲
            </Marker>
            です。
          </p>

          <TipBox title="マフィン単品が最軽量でも「脂質」に注目">
            <p>
              エッグマックマフィンは310kcalで最軽量ですが、
              <Marker>脂質13.6g</Marker>
              と定食系（6.8〜8.4g）の約2倍。一方やよい軒・松屋・すき家の和朝食は、カロリーがやや高くても脂質が一桁で、ごはん由来の炭水化物が中心です。
              <Marker color="green">
                ローファット（低脂質）中なら、数字上の総カロリーより「脂質の少なさ」で和定食を選ぶ
              </Marker>
              のが理にかなっています。
            </p>
          </TipBox>
        </section>

        {/* Section 5: 目的別おすすめ */}
        <section className="mb-16">
          <SectionHeading id="by-goal">
            目的別おすすめ（ダイエット・筋トレ・時短）
          </SectionHeading>

          <p className="mb-6">
            ここまでの数字を、3つの目的に整理しました。自分の朝に合うものを選んでください。
          </p>

          <SubSectionHeading>① ダイエット中の朝食</SubSectionHeading>
          <p className="mb-4">
            総カロリーと脂質の両方を抑えたいダイエット中は、
            <Marker>やよい軒の納豆朝食（370kcal／脂質7.0g）</Marker>
            や
            <Marker>しゃけの塩焼朝食（378kcal／脂質8.2g）</Marker>
            が筆頭候補。すき家のまぜのっけ朝食ミニ（393kcal／脂質8.1g）も、たまご・とろろ・おくらが乗った低脂質の和朝食でおすすめです。詳しい朝食ダイエットの考え方は
            <Link
              href="/guide/morning-diet"
              className="text-sky-600 underline decoration-sky-300 hover:text-sky-700"
            >
              朝食ダイエットガイド
            </Link>
            でも解説しています。
          </p>

          <SubSectionHeading>② 筋トレ・増量中の朝食</SubSectionHeading>
          <p className="mb-4">
            トレーニングをしていて朝からタンパク質を確保したいなら、
            <Marker color="blue">
              やよい軒のしゃけの塩焼朝食（P26.2g）やすき家の焼鮭朝食ミニ（P22.2g）
            </Marker>
            。さらにタンパク質を増やしたいなら、やよい軒のごはんを「もち麦ごはん」に変更したり、すき家の朝食に「納豆」「たまご」などのサイドを追加する方法もあります。マフィン系で攻めるなら、朝マックのソーセージエッグマフィン（477kcal／P21.9g）が高タンパクです。外食での増量・筋トレ食の組み立ては
            <Link
              href="/guide/eating-out-diet"
              className="text-sky-600 underline decoration-sky-300 hover:text-sky-700"
            >
              外食ダイエット完全ガイド
            </Link>
            も参考にしてください。
          </p>

          <SubSectionHeading>③ 時短・片手で済ませたい朝食</SubSectionHeading>
          <p className="mb-4">
            出社前に時間がない日は、片手で食べられる
            <Marker color="green">
              朝マックのエッグマックマフィン（310kcal／P18.6g）
            </Marker>
            が便利。ベーコンエッグマックサンド（294kcal／P16.3g）はさらに軽量です。
            <strong>
              ただし朝マックの提供時間（一般に開店〜午前10時30分まで／店舗により異なる）に注意
            </strong>
            。糖質を抑えたい人は、ハッシュポテト（157kcal／C14.8g）やホットケーキ（323kcal／C53.5g）など炭水化物の多いサイドの追加を控えめにするのがコツです。
          </p>

          <TipBox title="サイド1品で朝食は化ける">
            <p>
              定食系もマフィン系も、サイドの足し引きで栄養バランスを調整できます。例えばすき家の「納豆」（3kcal表記／たんぱく質補給）や松屋の「半熟玉子」（71kcal／P5.8g）を足せば手軽にタンパク質を上乗せ可能。逆に、朝マックでハッシュポテト（157kcal）やホットケーキを足すとカロリー・脂質が一気に増えるため、ダイエット中は単品+ブラックコーヒーがおすすめです。
            </p>
          </TipBox>
        </section>

        {/* Section 6: 選び方のコツ */}
        <section className="mb-16">
          <SectionHeading id="how-to-choose">
            外食モーニングの選び方5つのコツ
          </SectionHeading>

          <NumberedList
            items={[
              {
                title: "タンパク質20g以上を目安にする",
                body: "朝食でタンパク質をある程度確保すると、1日のタンパク質配分を整えやすくなります。やよい軒のしゃけの塩焼朝食（P26.2g）、すき家の焼鮭朝食ミニ（P22.2g）、朝マックのソーセージエッグマフィン（P21.9g）などが20g超えの候補です。",
              },
              {
                title: "脂質を抑えたい日は「魚系の和定食」を選ぶ",
                body: "やよい軒・すき家・松屋の魚系朝食は脂質が一桁（6.8〜8.4g）。マフィン系（脂質13.6g〜）より脂質が少なく、ローファット中の朝食に向きます。同じカロリーでも脂質の少なさで選ぶのがポイントです。",
              },
              {
                title: "糖質を抑えたい日はごはんを小盛・抜きに",
                body: "定食系はごはん由来の炭水化物が多め（松屋のたまごかけ朝定食でC79.9g）。松屋ならライス小盛、すき家なら牛丼ライト系、やよい軒は白米普通盛を基準にするなど、ごはん量で糖質を調整できます。低糖質の外食術は『糖質制限×外食ガイド』も参考に。",
              },
              {
                title: "ドリンクはブラックコーヒー・お茶を選ぶ",
                body: "朝マックのプレミアムローストコーヒー（S・7kcal）や、和定食のみそ汁・お茶はほぼゼロカロリー。甘いラテやジュースを足すと+80〜150kcalになりやすいので、ダイエット中は無糖ドリンクが鉄則です。",
              },
              {
                title: "食べたら記録して1日で調整する",
                body: "本記事の数値はすべて各社公式データに基づいています。朝に何を食べたかを記録しておけば、昼・夜のカロリーを調整しやすくなります。たべなびなら4社の朝食をそのまま記録・比較できます。",
              },
            ]}
          />
        </section>

        {/* Section 7: 避けたい高カロリー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けたい高カロリーな朝食</SectionHeading>

          <p className="mb-4">
            逆に、ダイエット中は次のような朝食・サイドに注意。「朝食」と名前が付いていても、1食で600〜700kcalを超えるものがあります。
          </p>

          <WarningBox title="ダイエット中は要注意のモーニング">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">
                  メガマフィン（マック・693kcal）
                </span>{" "}
                ─ 脂質49.3gと朝食としては突出。タンパク質30gは魅力ですが、脂質が多く、ダイエット中は頻度に注意です。
              </li>
              <li>
                <span className="font-bold">
                  豚汁朝定食（松屋・朝・682kcal）
                </span>{" "}
                ─ ごはん＋豚汁でボリュームは満点ですが、炭水化物102.9gと糖質が多め。ライス小盛で調整を。
              </li>
              <li>
                <span className="font-bold">
                  ソーセージエッグ定食（松屋・朝・639kcal）
                </span>{" "}
                ─ 脂質19.7g。洋風の朝定食は脂質・カロリーともに高めになりがちです。
              </li>
              <li>
                <span className="font-bold">
                  マックグリドル ソーセージエッグ（マック・545kcal）
                </span>{" "}
                ─ 甘いグリドル＋ソーセージで脂質32.9g。マフィン系の中でも高カロリーです。
              </li>
              <li>
                <span className="font-bold">
                  得朝牛皿定食（松屋・568kcal）／さば定食ミニ（すき家・551kcal）
                </span>{" "}
                ─ 朝定食でも肉・脂の多い構成は600kcal前後まで上がります。
              </li>
            </ul>
          </WarningBox>

          <WarningBox title="本当の落とし穴は「サイドの足し算」">
            <p>
              朝マックの場合、エッグマックマフィン単品（310kcal）に
              <Marker>
                ハッシュポテト（157kcal）＋ホットケーキ（323kcal）を足すと790kcal
              </Marker>
              。手軽な分つい足してしまいがちです。定食系も、もち麦ごはん大盛やサイド追加でカロリーは大きく変わります。ダイエット中は「単品（または定食）＋無糖ドリンク」を基本に、足し算を控えめにするのが効果的です。
            </p>
          </WarningBox>

          <p className="text-xs text-gray-400 mb-2">
            ※朝マック（マクドナルドのモーニングメニュー）は提供時間が限られます（一般に開店〜午前10時30分まで／店舗により異なる）。
          </p>
        </section>

        {/* チェーン別ランキングへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>4社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの朝食以外も含めた低カロリー・高タンパク・低糖質ランキングは、こちらから全メニューを確認できます。コンビニの朝食と組み合わせたい人は
            <Link
              href="/guide/conveni-protein"
              className="text-sky-600 underline decoration-sky-300 hover:text-sky-700"
            >
              コンビニ高タンパク商品
            </Link>
            、糖質を抑えたい人は
            <Link
              href="/guide/low-carb-eating-out"
              className="text-sky-600 underline decoration-sky-300 hover:text-sky-700"
            >
              糖質制限×外食ガイド
            </Link>
            も合わせてどうぞ。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link
              href="/chains/mcdonalds"
              className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors"
            >
              🍔 マクドナルド
            </Link>
            <Link
              href="/chains/sukiya"
              className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors"
            >
              🍚 すき家
            </Link>
            <Link
              href="/chains/matsuya"
              className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors"
            >
              🍚 松屋
            </Link>
            <Link
              href="/chains/yayoiken"
              className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors"
            >
              🍱 やよい軒
            </Link>
          </div>
        </section>

        {/* ServiceOffers (FAQ直前) */}
        <ServiceOffers tag="diet" />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            外食のモーニングは「チェーン選び」と「メニュー選び」で、午前中に入るカロリー・タンパク質が大きく変わります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "高タンパク朝食ナンバーワンはやよい軒のしゃけの塩焼朝食（378kcal／タンパク質26.2g／脂質8.2g）",
              "純粋に低カロリーな標準サイズ朝食は朝マックのエッグマックマフィン（310kcal）、次いでやよい軒の納豆朝食（370kcal）",
              "低脂質を狙うなら松屋のたまごかけ朝定食（脂質6.8g）やすき家・やよい軒の魚系和朝食（脂質一桁）",
              "時短・片手で済ませるなら朝マックのマフィン系。ただし提供時間（一般に午前10時30分まで）に注意",
              "高カロリーになりやすいのはメガマフィン（693kcal）や松屋の朝定食＋ライス。サイドの足し算を控えめに",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格・提供時間は変動する場合があります。
          </p>
        </section>

        {/* FAQ Section */}
        <FAQSection
          slug="breakfast-comparison"
          items={[
            {
              q: "外食の朝食で一番カロリーが低いのはどこですか？",
              a: "標準サイズで比較すると、朝マックのエッグマックマフィン（単品・310kcal）が最も低く、次いでやよい軒の納豆朝食（白米・370kcal）、しゃけの塩焼朝食（378kcal）、すき家のまぜのっけ朝食ミニ（393kcal）の順です。ただしマフィン系は脂質13.6gと高め、和定食系は脂質が一桁という違いがあります（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "朝食で一番タンパク質が摂れる外食メニューは？",
              a: "やよい軒のしゃけの塩焼朝食（378kcal／タンパク質26.2g）が4社横断で最多かつタンパク質効率も最良です。次いですき家の焼鮭朝食ミニ（480kcal／22.2g）、やよい軒のサバの塩焼朝食（495kcal／21.7g）、松屋の焼鮭定食（596kcal／20.5g）。マフィン系で高タンパクを狙うなら朝マックのソーセージエッグマフィン（477kcal／21.9g）が候補です。",
            },
            {
              q: "ダイエット中の朝食はどれを選べばいいですか？",
              a: "総カロリーと脂質を両方抑えたいなら、やよい軒の納豆朝食（370kcal／脂質7.0g）やしゃけの塩焼朝食（378kcal／脂質8.2g）、すき家のまぜのっけ朝食ミニ（393kcal／脂質8.1g）がおすすめです。和定食系は脂質が一桁で、ごはん由来の炭水化物が中心。糖質を抑えたい日はごはんを小盛にして調整しましょう。",
            },
            {
              q: "朝マックは太りますか？",
              a: "単品なら太りやすいとは言い切れません。エッグマックマフィンは310kcal、ベーコンエッグマックサンドは294kcalと軽量です。ただし脂質はマフィン系で13.6g前後と和定食の約2倍。ハッシュポテト（157kcal）やホットケーキ（323kcal）、甘いラテを足すと一気に高カロリーになります。ダイエット中は単品＋ブラックコーヒーが基本です。",
            },
            {
              q: "朝マックは何時まで食べられますか？",
              a: "一般に開店から午前10時30分まで提供されることが多いですが、店舗や時期により異なります。それ以降は通常メニューに切り替わり、エッグマックマフィンなどの朝マック限定商品は注文できなくなる場合があります。最新の提供時間は各店舗の公式情報をご確認ください。",
            },
            {
              q: "定食系（やよい軒・松屋・すき家）とマフィン系（マック）はどちらがヘルシーですか？",
              a: "目的によります。脂質を抑えたい・しっかり食べて満足感を得たいなら、タンパク質が多く脂質が一桁の和定食系（やよい軒のしゃけの塩焼朝食など）が有利です。総カロリーを最小にしたい・時短したいなら、片手で食べられる朝マックのマフィン単品が有利。どちらも単品（定食）＋無糖ドリンクを基本にすれば、朝食でのカロリーコントロールは可能です。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="4社の朝食をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            {
              date: "2026-06-24",
              note: "初稿公開（マック・すき家・松屋・やよい軒の公式栄養データに基づく朝食横断比較）",
            },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="breakfast-comparison" />

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
