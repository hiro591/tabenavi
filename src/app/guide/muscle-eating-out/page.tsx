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
  ArticleImage,
  CTABanner,
  RankingCard,
  CheckList,
  ArticleFooter,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductCard,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド | たべなび",
  description:
    "筋トレ中の外食で迷わない。大戸屋・やよい軒・サイゼリヤ・マクドナルドなど主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。1食でタンパク質30g超えのメニューが見つかる。",
  keywords:
    "筋トレ 外食,高タンパク 外食,筋トレ チェーン店,高タンパク メニュー,筋トレ 食事",
  openGraph: {
    title:
      "筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド",
    description:
      "主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "筋トレ中の外食はこれで決まり！高タンパクチェーン店メニュー完全ガイド",
  description:
    "筋トレ中の外食で迷わない。主要チェーン店の高タンパクメニューをPFCデータ付きで徹底解説。",
  datePublished: "2026-03-01",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/muscle-eating-out",
};

const tocItems = [
  { id: "is-it-ok", label: "筋トレ中に外食しても大丈夫？" },
  { id: "chain-ranking", label: "高タンパクチェーン店ランキングTOP5" },
  { id: "chain-best3", label: "ジャンル別 高タンパクメニューBEST3" },
  { id: "post-workout", label: "筋トレ後の外食で意識すべき3つのポイント" },
  { id: "tabenavi-cta", label: "たべなびで高タンパクメニューを探す" },
  { id: "summary", label: "まとめ" },
];

// Note: jsonLd is static trusted content defined above, safe for server-side rendering
export default function MuscleEatingOutPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <ArticleHero
        title="筋トレ中の外食はこれで決まり！"
        subtitle="高タンパクチェーン店メニュー完全ガイド"
        imageUrl="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=800&h=400&fit=crop"
        breadcrumb="筋トレ×外食"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="muscle-eating-out">
        {/* Authority Badge */}
        <div className="mb-4">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月 | 読了目安: 12分
          </p>
          <AffiliateDisclosure />
        </div>

        {/* Introduction */}
        <p className="mb-4">
          筋トレをしている人にとって、外食は悩みのタネ。「せっかくトレーニングしたのに、外食で台無しにしたくない」「高タンパクなメニューがどれかわからない」という声をよく聞きます。
        </p>
        <p className="mb-4">
          しかし、実はチェーン店には<Marker>1食でタンパク質30gを超えるメニューが意外と多く存在</Marker>します。この記事では、筋トレ民に本当におすすめできるチェーン店の高タンパクメニューを、具体的なPFCデータとともに紹介します。
        </p>
        <p className="mb-10">
          トレーニング後の外食で迷ったら、このガイドを見れば即決できます。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ─── Section 1: 筋トレ中に外食しても大丈夫？ ─── */}
        <section className="mb-14">
                  <QuickAnswer
          question={"筋トレ中に外食しても大丈夫ですか？"}
          answer={"筋トレ中の外食はまったく問題ありません。むしろ正しく選べば味方になります。大戸屋・やよい軒・サイゼリヤなど主要チェーン店には1食でタンパク質30g以上が摂れるメニューが豊富。体重70kg人なら1日112〜154gのタンパク質が推奨されており、外食でも達成可能です。"}
        />

        <SectionHeading id="is-it-ok">
            筋トレ中に外食しても大丈夫？
          </SectionHeading>
          <p className="mb-4">
            <Marker color="blue">結論：まったく問題ありません。</Marker>むしろ、正しく選べば外食は筋トレの味方になります。
          </p>
          <p className="mb-4">
            筋肥大に必要なのは、適切なトレーニング刺激と十分な栄養摂取。特にタンパク質は1日あたり体重1kgにつき1.6〜2.2gが推奨されています（国際スポーツ栄養学会の見解）。体重70kgの人なら、1日112〜154gのタンパク質が必要です。
          </p>
          <p className="mb-6">
            これを3食で割ると、1食あたり約37〜51g。自炊で毎食これを達成するのは大変ですが、チェーン店の定食やグリルメニューなら<Marker>1食で30g以上のタンパク質を摂ることが可能</Marker>です。
          </p>

          <TipBox title="筋トレ中の1食あたりの栄養目安">
            <ul className="space-y-1.5 list-none">
              <li>タンパク質: <strong>20〜40g</strong>（筋合成のゴールデンゾーン）</li>
              <li>カロリー: <strong>600〜900kcal</strong>（増量期）/ <strong>500〜700kcal</strong>（減量期）</li>
              <li>脂質: <strong>15〜25g以下</strong>を目安に</li>
              <li>炭水化物: トレーニング後は<strong>多めに摂ってOK</strong></li>
            </ul>
          </TipBox>
        </section>

        {/* Photo */}
        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="高タンパクな食事の写真"
        />

        {/* ─── Section 2: チェーン店ランキング ─── */}
        <section className="mb-14">
          <SectionHeading id="chain-ranking">
            高タンパクチェーン店ランキングTOP5
          </SectionHeading>
          <p className="mb-8">
            「タンパク質30g以上のメニューの数」「コスパ」「メニューの多様性」を総合的に評価した、<Marker>筋トレ民におすすめのチェーン店ランキング</Marker>です。
          </p>

          {/* Rank 1: 大戸屋 */}
          <RankingCard rank={1} title="大戸屋" subtitle="定食メニューでP30g超え多数。バランスの良さはNo.1">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              大戸屋は手作りの定食メニューが豊富で、ほぼすべてのメインメニューでタンパク質30g以上を摂取可能。白米を五穀米に変更できるのも嬉しいポイント。副菜・味噌汁・サラダ付きで栄養バランスが取りやすく、筋トレ民のランチに最適です。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "チキンかあさん煮定食", calories: 804, protein: 40.2, fat: 24.5, carbs: 102.3, highlight: true },
                { name: "しまほっけの炭火焼き定食", calories: 642, protein: 36.8, fat: 18.3, carbs: 78.5 },
                { name: "鶏と野菜の黒酢あん定食", calories: 752, protein: 32.5, fat: 22.1, carbs: 98.7 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/ootoya" className="text-sky-500 hover:text-sky-600 underline">大戸屋の全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 2: やよい軒 */}
          <RankingCard rank={2} title="やよい軒" subtitle="ご飯おかわり無料。増量期のコスパ最強">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              やよい軒最大の特徴はご飯おかわり無料。増量期の筋トレ民にはありがたすぎるシステムです。定食メニューはどれもタンパク質が豊富で、しょうが焼き定食は1食でP32gを摂取可能。値段も800〜1,000円台とコスパに優れています。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "しょうが焼定食", calories: 768, protein: 32.0, fat: 25.4, carbs: 98.5, highlight: true },
                { name: "チキン南蛮定食", calories: 912, protein: 35.6, fat: 35.2, carbs: 105.3 },
                { name: "サバの味噌煮定食", calories: 695, protein: 30.5, fat: 21.8, carbs: 85.2 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/yayoiken" className="text-sky-500 hover:text-sky-600 underline">やよい軒の全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 3: サイゼリヤ */}
          <RankingCard rank={3} title="サイゼリヤ" subtitle="500円以下で高タンパク。筋トレ民の味方">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              サイゼリヤはグリル系メニューの圧倒的コスパが魅力。若鶏のグリル（税込500円）で35.3gのタンパク質が摂れるのは驚異的です。ミックスグリル（P32.2g）も500円台で、毎日通っても財布に優しい。<Marker>筋トレ民のSNSでも「サイゼは筋トレ飯の聖地」と話題</Marker>です。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "若鶏のグリル", calories: 514, protein: 35.3, fat: 28.7, carbs: 26.6, highlight: true },
                { name: "ミックスグリル", calories: 478, protein: 32.2, fat: 30.5, carbs: 16.0, highlight: true },
                { name: "ディアボラ風ハンバーグ", calories: 542, protein: 27.5, fat: 34.1, carbs: 28.7 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/saizeriya" className="text-sky-500 hover:text-sky-600 underline">サイゼリヤの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 4: サブウェイ */}
          <RankingCard rank={4} title="サブウェイ" subtitle="カスタマイズ自在。野菜も摂れる高タンパクサンド">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              サブウェイは自分でカスタマイズできるのが強み。ローストチキン系のサンドを選び、野菜を多めにすれば高タンパク・低脂質の理想的な食事に。パンを全粒粉に変更すれば食物繊維もアップ。タンパク質は20g以上確保できます。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "ローストチキン", calories: 282, protein: 22.5, fat: 4.6, carbs: 38.5, highlight: true },
                { name: "チキンブレスト", calories: 305, protein: 25.0, fat: 5.2, carbs: 40.1 },
                { name: "ターキーブレスト", calories: 262, protein: 20.8, fat: 3.8, carbs: 37.5 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/subway" className="text-sky-500 hover:text-sky-600 underline">サブウェイの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 5: マクドナルド */}
          <RankingCard rank={5} title="マクドナルド" subtitle="意外にも高タンパク。ダブルチーズバーガーはP26.4g">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              マクドナルドは「ジャンクフード」のイメージが強いですが、実はバーガー類のタンパク質含有量は侮れません。ダブルチーズバーガー（P26.4g）やチキンフィレオ（P24.0g）なら、単品でも十分なタンパク質が摂れます。全国どこにでもあるのも筋トレ民には嬉しいポイント。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "ダブルチーズバーガー", calories: 457, protein: 26.4, fat: 25.0, carbs: 30.5, highlight: true },
                { name: "チキンフィレオ", calories: 465, protein: 24.0, fat: 21.6, carbs: 43.5 },
                { name: "ビッグマック", calories: 525, protein: 26.0, fat: 28.2, carbs: 41.8 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/mcdonalds" className="text-sky-500 hover:text-sky-600 underline">マクドナルドの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="外食の栄養管理、もっとラクにしませんか？"
          subtitle="たべなびなら3タップでPFCを記録完了"
        />

        {/* ─── Section 3: ジャンル別 高タンパクメニューBEST3 ─── */}
        <section className="mb-14">
          <SectionHeading id="chain-best3">
            ジャンル別 高タンパクメニューBEST3
          </SectionHeading>
          <p className="mb-8">
            ジャンル別に、筋トレ民に最もおすすめの高タンパクメニューを3つずつ厳選しました。
          </p>

          {/* 牛丼チェーン */}
          <div className="mb-10">
            <SubSectionHeading>牛丼チェーン（吉野家・松屋・すき家）</SubSectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              牛丼チェーンは安くて早くてタンパク質も摂れる、筋トレ民の強い味方。牛肉自体がタンパク質豊富なので、並盛でもP20g前後が確保できます。<Marker>定食メニューを選べばさらにタンパク質アップ</Marker>。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "松屋 牛焼肉定食", calories: 827, protein: 34.2, fat: 28.5, carbs: 105.3, highlight: true },
                { name: "すき家 まぐろたたき丼（並盛）", calories: 455, protein: 28.5, fat: 5.2, carbs: 78.3, highlight: true },
                { name: "吉野家 牛皿定食", calories: 680, protein: 28.0, fat: 22.5, carbs: 82.0, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm mt-2">
              <Link href="/guide/yoshinoya" className="text-sky-500 hover:text-sky-600 underline">吉野家</Link>
              <Link href="/guide/matsuya" className="text-sky-500 hover:text-sky-600 underline">松屋</Link>
              <Link href="/guide/sukiya" className="text-sky-500 hover:text-sky-600 underline">すき家</Link>
            </div>
          </div>

          {/* ファミレス */}
          <div className="mb-10">
            <SubSectionHeading>ファミレス（サイゼリヤ・ガスト・デニーズ）</SubSectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              ファミレスはメニューの種類が豊富で、グリル系やステーキなど高タンパクメニューが充実。サイドメニューでサラダやスープを追加してバランスを取れるのもメリットです。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "サイゼリヤ 若鶏のグリル", calories: 514, protein: 35.3, fat: 28.7, carbs: 26.6, highlight: true },
                { name: "ガスト チキテキ・ピリ辛スパイス焼き", calories: 645, protein: 33.5, fat: 30.2, carbs: 55.8, highlight: true },
                { name: "デニーズ All Beefハンバーグ", calories: 620, protein: 30.5, fat: 32.8, carbs: 48.2, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm mt-2">
              <Link href="/guide/saizeriya" className="text-sky-500 hover:text-sky-600 underline">サイゼリヤ</Link>
              <Link href="/guide/gusto" className="text-sky-500 hover:text-sky-600 underline">ガスト</Link>
              <Link href="/guide/dennys" className="text-sky-500 hover:text-sky-600 underline">デニーズ</Link>
            </div>
          </div>

          {/* Photo */}
          <ArticleImage
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
            alt="グリルチキンの写真"
          />

          {/* ファストフード */}
          <div className="mb-10">
            <SubSectionHeading>ファストフード（マクドナルド・モスバーガー・KFC）</SubSectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              ファストフードは脂質が高めですが、タンパク質も意外と豊富。時間がないときの筋トレ飯として活用できます。<Marker color="blue">ポイントはセットにせず単品で注文すること</Marker>。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "マクドナルド 倍ビッグマック", calories: 724, protein: 40.5, fat: 43.2, carbs: 42.0, highlight: true },
                { name: "モスバーガー スパイシーモスバーガー", calories: 370, protein: 18.5, fat: 17.8, carbs: 34.2 },
                { name: "KFC オリジナルチキン 2ピース", calories: 474, protein: 33.4, fat: 28.6, carbs: 17.8, highlight: true },
              ]}
            />
            <div className="flex gap-2 text-sm mt-2">
              <Link href="/guide/mcdonalds" className="text-sky-500 hover:text-sky-600 underline">マクドナルド</Link>
              <Link href="/guide/mos" className="text-sky-500 hover:text-sky-600 underline">モスバーガー</Link>
              <Link href="/guide/kfc" className="text-sky-500 hover:text-sky-600 underline">KFC</Link>
            </div>
          </div>

          {/* コンビニ */}
          <div className="mb-10">
            <SubSectionHeading>コンビニ（セブン・ローソン・ファミマ）</SubSectionHeading>
            <p className="text-gray-600 leading-relaxed mb-4">
              コンビニは24時間いつでもタンパク質を補給できる最強スポット。近年は「たんぱく質が摂れる」シリーズなど、筋トレ民向け商品が急増中。<Marker color="green">ジムの帰りにサッと買えるのが最大のメリット</Marker>です。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 1.0, highlight: true },
                { name: "たんぱく質が摂れるチキン＆スパイシーチリ", calories: 252, protein: 27.4, fat: 9.3, carbs: 15.7, highlight: true },
                { name: "ザバス MILK PROTEIN 200ml", calories: 102, protein: 15.0, fat: 0.0, carbs: 10.5, highlight: true },
              ]}
            />
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/conveni-protein" className="text-sky-500 hover:text-sky-600 underline">コンビニの高タンパク商品ランキングはこちら</Link>
            </p>
          </div>
        </section>

        {/* ─── Section 4: 筋トレ後の外食で意識すべきこと ─── */}
        <section className="mb-14">
          <SectionHeading id="post-workout">
            筋トレ後の外食で意識すべき3つのポイント
          </SectionHeading>
          <p className="mb-8">
            筋トレ後の食事は筋肥大において非常に重要です。以下の3つのポイントを押さえれば、外食でも筋トレ効果を最大化できます。
          </p>

          {/* Point 1 */}
          <TipBox title="1. タンパク質は1食あたり20〜40gを目標に">
            <p>
              筋タンパク質合成（MPS）を最大化するには、1食あたり20〜40gのタンパク質摂取が推奨されています。これ以下だと合成刺激が不十分、これ以上だと上乗せ効果が小さくなります。
            </p>
            <p className="mt-2">
              プロテインシェイカーを持ち歩かなくても、<Marker>大戸屋のチキンかあさん煮（P40.2g）</Marker>や<Marker>サイゼリヤの若鶏のグリル（P35.3g）</Marker>を食べれば十分です。
            </p>
          </TipBox>

          {/* Point 2 */}
          <TipBox title="2. 脂質は控えめに（特に減量期）">
            <p>
              脂質は1gあたり9kcalとカロリーが高く、摂りすぎると1日の総カロリーをオーバーしやすくなります。減量期は特に注意が必要です。<Marker color="blue">揚げ物よりグリル・焼き物・蒸し料理を選ぶ</Marker>のがポイント。
            </p>
            <p className="mt-2">
              ただし、脂質をゼロにする必要はありません。ホルモン生成や脂溶性ビタミンの吸収に必要なので、1日50〜70g程度は摂取しましょう。
            </p>
          </TipBox>

          {/* Point 3 */}
          <TipBox title="3. 炭水化物は筋トレ後なら多めでもOK">
            <p>
              筋トレ後は筋グリコーゲンが消耗しているため、炭水化物を摂取してもエネルギー補充に使われやすく、脂肪になりにくいタイミングです。
            </p>
            <p className="mt-2">
              <Marker color="green">やよい軒のご飯おかわり無料は、筋トレ後の増量期には神システム</Marker>。減量期でも筋トレ後の1食は炭水化物をしっかり摂ることで、次回のトレーニングパフォーマンスを維持できます。
            </p>
          </TipBox>

          <WarningBox title="注意：極端な脂質カットは逆効果">
            <p>
              脂質をゼロに近づけようとする人がいますが、これは逆効果です。テストステロンなどのホルモン生成に脂質は不可欠。1日の脂質摂取量を<strong>総カロリーの20〜25%</strong>を下回らないようにしましょう。
            </p>
          </WarningBox>

          <AffiliateProductCard productId="myprotein-impact" />
          <AffiliateProductGrid
            title="トレーニング効果を底上げするサプリ・補食"
            productIds={["myprotein-bcaa", "ultora-whey", "inbar-protein", "tuna-can"]}
          />
        </section>

        {/* ─── Section 5: たべなびで高タンパクメニューを探す ─── */}
        <section className="mb-14">
          <SectionHeading id="tabenavi-cta">
            たべなびで高タンパクメニューを探す
          </SectionHeading>
          <p className="mb-6">
            「今いる場所の近くで、タンパク質30g以上のメニューがあるチェーン店はどこ？」そんな筋トレ民の疑問に答えるのが<Marker>たべなび</Marker>です。
          </p>

          <CheckList
            items={[
              "20以上のチェーン店のPFCデータを完全網羅",
              "タンパク質順でメニューをソート・検索できる",
              "3タップで食事を記録。1日のPFC合計を自動計算",
              "筋トレの日もオフの日も、外食の栄養管理がラクに続く",
            ]}
          />
        </section>

        <CTABanner
          title="筋トレ×外食の最強パートナー"
          subtitle="ここまで読んでくれたあなたへ。20チェーン・500メニューの栄養データ、全部無料。"
        />

        {/* ─── Section 6: まとめ ─── */}
        <section className="mb-14">
          <SectionHeading id="summary">
            この記事のまとめ
          </SectionHeading>
          <CheckList
            items={[
              "筋トレ中の外食はまったく問題ない。正しく選べばむしろ味方になる",
              "高タンパクチェーン店TOP3は大戸屋・やよい軒・サイゼリヤ",
              "大戸屋 チキンかあさん煮（P40.2g）、サイゼリヤ 若鶏のグリル（P35.3g/¥500）がイチオシ",
              "1食あたりの目標: タンパク質20〜40g",
              "筋トレ後は炭水化物を多めに摂ってもOK。脂質は控えめに",
              "たべなびなら外食チェーンのPFCデータが一目でわかり、3タップで記録完了",
            ]}
          />
        </section>

        {/* Tag links */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "eating-out-diet", name: "外食ダイエットガイド" },
              { slug: "ootoya", name: "大戸屋" },
              { slug: "yayoiken", name: "やよい軒" },
              { slug: "saizeriya", name: "サイゼリヤ" },
              { slug: "mcdonalds", name: "マクドナルド" },
              { slug: "subway", name: "サブウェイ" },
              { slug: "kfc", name: "KFC" },
              { slug: "conveni-protein", name: "コンビニ高タンパク" },
            ].map((link) => (
              <Link
                key={link.slug}
                href={`/guide/${link.slug}`}
                className="text-sm px-3 py-1.5 border border-gray-200 text-gray-600 hover:border-sky-300 hover:text-sky-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <FAQSection
          slug="muscle-eating-out"
          items={[
            { q: "筋トレ中の1食あたりのタンパク質はどれくらい摂るべき？", a: "1食あたり20〜40gが筋タンパク質合成の「ゴールデンゾーン」です。これ以下では刺激が不十分、これ以上では上乗せ効果が小さくなります。体重70kg人の場合、1日112〜154g（1.6〜2.2g/kg）を3食で割ると約37〜51gの目安となります。" },
            { q: "筋トレ民におすすめのチェーン店はどこ？", a: "タンパク質30g以上のメニュー数・コスパ・多様性で評価すると、大戸屋が1位（定食メニュー全般）、やよい軒が2位（ご飯おかわり無料）、サイゼリヤが3位（若鶏グリル¥500でP35.3g）がTOP3です。牛丼チェーンやコンビニも活用できます。" },
            { q: "最も高コスパな高タンパクメニューは？", a: "サイゼリヤの若鶏のグリル（税込¥500でタンパク質35.3g、カロリー514kcal）が圧倒的コスパです。次点でミックスグリル（¥500台、P32.2g）。毎日通っても財布に優しく、筋トレ民SNSでも「聖地」と話題です。" },
            { q: "筋トレ後の外食で脂質と炭水化物はどう扱う？", a: "脂質は控えめに（減量期特に注意）。グリル・焼き物・蒸し料理を選び、総カロリーの20〜25%は下回らないこと。炭水化物は筋グリコーゲン消耗時期なので筋トレ後なら多めでもOK。やよい軒のご飯おかわり無料は増量期に活用価値が高いです。" },
            { q: "コンビニでも筋トレ向きの食事が見つかりますか？", a: "見つかります。サラダチキン（プレーン）でP24.1gなど、24時間いつでもタンパク質補給できるのが最大のメリット。近年は「たんぱく質が摂れる」シリーズなど筋トレ民向け商品が急増中。ジムの帰りに即購入できる最強スポットです。" },
          ]}
        />

        <ArticleFooter currentSlug="muscle-eating-out" />

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
