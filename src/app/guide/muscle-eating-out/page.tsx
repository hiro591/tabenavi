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
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductCard,
  AffiliateProductGrid,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/muscle-eating-out" },
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
            最終更新: 2026年6月 | 読了目安: 12分
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
                { name: "しまほっけの炭火焼き定食", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
                { name: "鶏と野菜の黒酢あん定食", calories: 952, protein: 27.5, fat: 33.5, carbs: 135.3 },
                { name: "チキンかあさん煮定食", calories: 897, protein: 29.5, fat: 32.2, carbs: 118.8 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/ootoya" className="text-sky-500 hover:text-sky-600 underline">大戸屋の全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 2: やよい軒 */}
          <RankingCard rank={2} title="やよい軒" subtitle="ご飯おかわり無料。増量期のコスパ最強">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              やよい軒最大の特徴はご飯おかわり無料。増量期の筋トレ民にはありがたすぎるシステムです。定食メニューはどれもタンパク質が豊富で、サバの味噌煮定食は1食でP30gを摂取可能。値段も800〜1,000円台とコスパに優れています。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "サバの味噌煮定食", calories: 621, protein: 30.4, fat: 24.9, carbs: 71.4, highlight: true },
                { name: "チキン南蛮定食", calories: 843, protein: 27.6, fat: 37.7, carbs: 100.7 },
                { name: "しょうが焼定食", calories: 717, protein: 26.2, fat: 37.1, carbs: 72.9 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/yayoiken" className="text-sky-500 hover:text-sky-600 underline">やよい軒の全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 3: サイゼリヤ */}
          <RankingCard rank={3} title="サイゼリヤ" subtitle="500円台のグリル系が豊富。コスパで選ぶならここ">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              サイゼリヤはグリル系メニューの圧倒的コスパが魅力。若鶏のディアボラ風やディアボラ風ハンバーグが税込500円で食べられ、毎日通っても財布に優しい。肉のグリルを主菜に、サラダを追加すればバランスの良い1食になります。<Marker>筋トレ民のSNSでも「サイゼはコスパ最強」と話題</Marker>です。
            </p>
            <div className="overflow-hidden rounded-lg border border-gray-100 mb-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs">
                    <th className="text-left font-medium px-3 py-2">メニュー</th>
                    <th className="text-right font-medium px-3 py-2">カロリー</th>
                    <th className="text-right font-medium px-3 py-2">価格</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-3 py-2">若鶏のディアボラ風</td>
                    <td className="px-3 py-2 text-right">683kcal</td>
                    <td className="px-3 py-2 text-right">¥500</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">ミックスグリル</td>
                    <td className="px-3 py-2 text-right">702kcal</td>
                    <td className="px-3 py-2 text-right">¥650</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">ディアボラ風ハンバーグ</td>
                    <td className="px-3 py-2 text-right">654kcal</td>
                    <td className="px-3 py-2 text-right">¥500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mb-2">
              ※サイゼリヤは公式にタンパク質・脂質・炭水化物の数値を公開していないため、本記事ではカロリーと価格のみを掲載しています。
            </p>
            <p className="text-sm text-gray-500">
              <Link href="/guide/saizeriya" className="text-sky-500 hover:text-sky-600 underline">サイゼリヤの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 4: サブウェイ */}
          <RankingCard rank={4} title="サブウェイ" subtitle="カスタマイズ自在。野菜も摂れる高タンパクサンド">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              サブウェイは自分でカスタマイズできるのが強み。チリチキンなどのチキン系サンドを選び、野菜を多めにすれば高タンパク・低脂質の理想的な食事に。パンを全粒粉に変更すれば食物繊維もアップ。タンパク質は20g前後を確保できます。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "チリチキン", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7, highlight: true },
                { name: "てり焼きチキン", calories: 346, protein: 19.7, fat: 9.9, carbs: 45.5 },
                { name: "サラダチキン サラダ", calories: 93, protein: 14.7, fat: 0.8, carbs: 8.3 },
              ]}
            />
            <p className="text-sm text-gray-500">
              <Link href="/guide/subway" className="text-sky-500 hover:text-sky-600 underline">サブウェイの全メニュー栄養成分一覧はこちら</Link>
            </p>
          </RankingCard>

          {/* Rank 5: マクドナルド */}
          <RankingCard rank={5} title="マクドナルド" subtitle="意外にも高タンパク。ダブルチーズバーガーはP26.4g">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              マクドナルドは「ジャンクフード」のイメージが強いですが、実はバーガー類のタンパク質含有量は侮れません。ダブルチーズバーガー（P26.4g）やビッグマック（P26.1g）なら、単品でも十分なタンパク質が摂れます。全国どこにでもあるのも筋トレ民には嬉しいポイント。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "ダブルチーズバーガー", calories: 459, protein: 26.4, fat: 25.1, carbs: 31.8, highlight: true },
                { name: "ビッグマック", calories: 525, protein: 26.1, fat: 28.0, carbs: 42.1 },
                { name: "チキンフィレオ", calories: 479, protein: 19.9, fat: 23.8, carbs: 47.0 },
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
                { name: "すき家 山かけまぐろたたき丼（並盛）", calories: 639, protein: 30.2, fat: 10.1, carbs: 106.7, highlight: true },
                { name: "吉野家 牛皿定食（並盛）", calories: 719, protein: 26.4, fat: 29.3, carbs: 89.5, highlight: true },
                { name: "松屋 牛焼肉定食", calories: 806, protein: 23.3, fat: 41.3, carbs: 86.5 },
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
              ファミレスはメニューの種類が豊富で、グリル系やステーキなど高タンパクメニューが充実。サイドメニューでサラダやスープを追加してバランスを取れるのもメリットです。デニーズのAll Beefハンバーグ（おろしソース）はP22.7gと高タンパク。サイゼリヤ・ガストはタンパク質量を公式に非公開のため、下表ではカロリーのみを掲載しています。
            </p>
            <NutritionTable
              highlightProtein
              items={[
                { name: "デニーズ All Beefハンバーグ～おろしソース", calories: 444, protein: 22.7, fat: 30.1, carbs: 21.0, highlight: true },
              ]}
            />
            <div className="overflow-hidden rounded-lg border border-gray-100 mt-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs">
                    <th className="text-left font-medium px-3 py-2">メニュー（PFC非公開チェーン）</th>
                    <th className="text-right font-medium px-3 py-2">カロリー</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-3 py-2">サイゼリヤ 若鶏のディアボラ風</td>
                    <td className="px-3 py-2 text-right">683kcal</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">ガスト チキテキスパイス焼き</td>
                    <td className="px-3 py-2 text-right">695kcal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              ※サイゼリヤ・ガストはタンパク質・脂質・炭水化物の数値を公式に公開していないため、カロリーのみ掲載。
            </p>
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
                { name: "マクドナルド 倍ビッグマック", calories: 723, protein: 41.3, fat: 43.1, carbs: 42.1, highlight: true },
                { name: "KFC オリジナルチキン 2ピース", calories: 436, protein: 33.0, fat: 25.6, carbs: 18.2, highlight: true },
                { name: "モスバーガー スパイシーモスバーガー", calories: 375, protein: 15.3, fat: 17.1, carbs: 40.4 },
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
                { name: "ローソン たんぱく質が摂れる 国産鶏むね肉のサラダ", calories: 206, protein: 23.1, fat: 11.0, carbs: 4.9, highlight: true },
                { name: "ファミマ たんぱく質が摂れる！鶏むね肉とたまごのサラダ", calories: 169, protein: 23.0, fat: 7.2, carbs: 3.4, highlight: true },
                { name: "セブン たんぱく質が摂れる鶏むね肉サラダ", calories: 199, protein: 21.8, fat: 10.9, carbs: 4.4, highlight: true },
              ]}
            />
            <p className="text-sm text-gray-500 mt-2">
              <Link href="/guide/conveni-protein" className="text-sky-500 hover:text-sky-600 underline">コンビニの高タンパク商品ランキングはこちら</Link>
            </p>
          </div>
        </section>

        <ServiceOffers tag="protein" heading="高タンパクな食事管理を手軽に。宅配食という選択肢" />

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
              プロテインシェイカーを持ち歩かなくても、<Marker>大戸屋のしまほっけの炭火焼き定食（P45.5g）</Marker>や<Marker>やよい軒のサバの味噌煮定食（P30.4g）</Marker>を食べれば十分です。
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
          subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
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
              "大戸屋 しまほっけの炭火焼き定食（P45.5g）、やよい軒 サバの味噌煮定食（P30.4g）がイチオシ",
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

        <FAQSection
          slug="muscle-eating-out"
          items={[
            { q: "筋トレ中の1食あたりのタンパク質はどれくらい摂るべき？", a: "1食あたり20〜40gが筋タンパク質合成の「ゴールデンゾーン」です。これ以下では刺激が不十分、これ以上では上乗せ効果が小さくなります。体重70kg人の場合、1日112〜154g（1.6〜2.2g/kg）を3食で割ると約37〜51gの目安となります。" },
            { q: "筋トレ民におすすめのチェーン店はどこ？", a: "タンパク質30g以上のメニュー数・コスパ・多様性で評価すると、大戸屋が1位（しまほっけの炭火焼き定食でP45.5g）、やよい軒が2位（ご飯おかわり無料、サバの味噌煮定食でP30.4g）、サイゼリヤが3位（500円台のグリル系が豊富）がTOP3です。牛丼チェーンやコンビニも活用できます。" },
            { q: "最も高タンパクなチェーン店メニューは？", a: "大戸屋のしまほっけの炭火焼き定食（612kcalでタンパク質45.5g）が単品でも圧倒的です。やよい軒のサバの味噌煮定食（621kcal/P30.4g）も高タンパク。サイゼリヤはコスパ抜群ですがタンパク質量を公式に非公開のため、数値で比較するなら大戸屋・やよい軒の定食が確実です。" },
            { q: "筋トレ後の外食で脂質と炭水化物はどう扱う？", a: "脂質は控えめに（減量期特に注意）。グリル・焼き物・蒸し料理を選び、総カロリーの20〜25%は下回らないこと。炭水化物は筋グリコーゲン消耗時期なので筋トレ後なら多めでもOK。やよい軒のご飯おかわり無料は増量期に活用価値が高いです。" },
            { q: "コンビニでも筋トレ向きの食事が見つかりますか？", a: "見つかります。セブンの「たんぱく質が摂れる鶏むね肉サラダ」（199kcal/P21.8g）やローソンの「たんぱく質が摂れる 国産鶏むね肉のサラダ」（206kcal/P23.1g）など、24時間いつでもタンパク質補給できるのが最大のメリット。近年は「たんぱく質が摂れる」シリーズが各社で急増中。ジムの帰りに即購入できる最強スポットです。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
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
