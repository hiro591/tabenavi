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
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/late-night-eating" },
  title:
    "【2026年最新】夜食で太らない方法｜深夜の外食・コンビニメニューおすすめガイド | たべなび",
  description:
    "夜食で太らないための食べ方・メニュー選びを徹底解説。深夜の外食やコンビニで太りにくいメニューをランキング形式で紹介。BMAL1や消化の仕組みから科学的に解説します。",
  keywords: [
    "夜食 太らない",
    "深夜 外食",
    "夜 食べても太らない",
    "夜食 おすすめ",
    "深夜 コンビニ ダイエット",
    "夜食 ヘルシー",
  ],
  openGraph: {
    title:
      "【2026年最新】夜食で太らない方法｜深夜の外食・コンビニメニューおすすめガイド",
    description:
      "深夜に食べても太りにくいメニューを科学的根拠とともに紹介。コンビニ・外食チェーンの夜食おすすめを徹底解説。",
    url: "https://www.tabenavi.jp/guide/late-night-eating",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】夜食で太らない方法｜深夜の外食・コンビニメニューおすすめガイド",
  description:
    "夜食で太らないための食べ方・メニュー選びを徹底解説。深夜の外食やコンビニで太りにくいメニューを紹介。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/late-night-eating",
};

const tocItems = [
  { id: "why-fat", label: "夜食が太ると言われる理由" },
  { id: "conditions", label: "太りにくい夜食の3つの条件" },
  { id: "conveni", label: "コンビニの夜食おすすめ5選" },
  { id: "chain", label: "チェーン店の夜食メニュー" },
  { id: "avoid", label: "避けるべき深夜メニュー" },
  { id: "summary", label: "まとめ" },
];

export default function LateNightEatingPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="夜食で太らない方法"
        subtitle="深夜の外食・コンビニメニューおすすめガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="夜食で太らない方法"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="late-night-eating">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月23日 | 読了目安: 8分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          仕事や勉強で遅くなり、深夜にお腹が空いてしまう。でも「夜食は太る」と聞くから我慢している方も多いのではないでしょうか。実は、<Marker>メニューの選び方と食べ方次第で、夜食でも太りにくくすることは十分可能</Marker>です。
        </p>
        <p className="mb-10">
          この記事では、夜食が太ると言われる科学的な理由から、深夜でも安心して食べられるコンビニ商品やチェーン店メニューまで、<Marker color="blue">太らない夜食の全て</Marker>を徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
          alt="深夜のヘルシーな食事のイメージ"
        />

        {/* Section 1: 夜食が太ると言われる理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"深夜に食べても太りにくいメニューはどのように選べばよいですか?"}
          answer={"低脂質(10g以下)・高タンパク(15g以上)・消化が良い の3条件を満たすメニューを選びましょう。コンビニならサラダチキン(113kcal、タンパク24.3g)やゆでたまご(130kcal)がおすすめ。夜食は200~300kcal以内に抑えることが目安です。"}
        />

        <SectionHeading id="why-fat">
            夜食が太ると言われる理由
          </SectionHeading>
          <p className="mb-4">
            「夜食は太る」と言われる背景には、科学的な根拠があります。主な理由は2つです。
          </p>

          <SubSectionHeading>BMAL1（ビーマルワン）の影響</SubSectionHeading>
          <p className="mb-4">
            BMAL1は体内時計を司るタンパク質で、<Marker>脂肪の蓄積を促進する働き</Marker>があります。BMAL1の分泌量は時間帯によって大きく変動し、最も多いのが<Marker color="blue">午後10時〜午前2時</Marker>。この時間帯は昼間の約20倍のBMAL1が分泌されており、同じカロリーでも脂肪として蓄積されやすくなります。
          </p>

          <SubSectionHeading>消化機能の低下</SubSectionHeading>
          <p className="mb-4">
            夜間は副交感神経が優位になり、消化管の動きが鈍くなります。食べ物が胃に長時間滞留することで、<Marker>消化不良や胃もたれ</Marker>を引き起こしやすくなります。また、消化に時間がかかると睡眠の質も低下し、翌日の代謝にも悪影響を及ぼします。
          </p>

          <TipBox title="ポイント: 夜食＝必ず太るわけではない">
            <p>
              BMAL1の影響はあるものの、1日のトータルカロリーが消費カロリーを超えなければ太りません。<Marker color="green">夜食で太る最大の原因は「メニュー選びの失敗」</Marker>です。高脂質・高糖質のメニューを避ければ、夜食のリスクは大幅に下がります。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 太りにくい夜食の条件 */}
        <section className="mb-16">
          <SectionHeading id="conditions">
            太りにくい夜食の3つの条件
          </SectionHeading>
          <p className="mb-6">
            深夜に食べても太りにくい食事には、共通する3つの条件があります。
          </p>

          <NumberedList
            items={[
              {
                title: "低脂質であること（脂質10g以下が目安）",
                body: "脂質は1gあたり9kcalと最もカロリーが高い栄養素。深夜の食事では脂質10g以下のメニューを選ぶことで、カロリーを大幅にカットできます。揚げ物やクリーム系は避けましょう。",
              },
              {
                title: "高タンパクであること（タンパク質15g以上）",
                body: "タンパク質は食事誘発性熱産生（DIT）が高く、摂取カロリーの約30%が消化吸収に使われます。つまり、タンパク質中心の食事は実質的なカロリーが低くなります。",
              },
              {
                title: "消化が良いこと（温かいもの・柔らかいもの）",
                body: "深夜は消化機能が低下しているため、スープ系や温かい食べ物を選ぶと胃への負担を軽減できます。食物繊維が多すぎるものも消化に時間がかかるので注意。",
              },
            ]}
          />

          <WarningBox title="カロリーの目安">
            <p>
              夜食の総カロリーは<Marker>200〜300kcal以内</Marker>に抑えるのが理想。これを超えると1日の摂取カロリーがオーバーしやすくなります。どうしてもお腹が空いた場合でも、400kcal以内に収めましょう。
            </p>
          </WarningBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="深夜メニューのカロリーをサクッと検索"
          subtitle="たべなびなら外食チェーンやコンビニの栄養成分をすぐに確認できます"
        />

        {/* Section 3: コンビニの夜食おすすめ5選 */}
        <section className="mb-16">
          <SectionHeading id="conveni">
            コンビニの夜食おすすめ5選
          </SectionHeading>
          <p className="mb-6">
            24時間営業のコンビニは深夜の夜食調達に最適。<Marker>低カロリー・高タンパク・消化が良い</Marker>の3条件を満たす商品を厳選しました。
          </p>

          <RankingCard
            rank={1}
            title="サラダチキン（プレーン）"
            subtitle="各社 ・ 約113kcal"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">113</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">24.3g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.5g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              夜食の王道。<Marker>113kcalでタンパク質24.3g</Marker>、脂質わずか1.2g。消化も良く、深夜に食べても胃もたれしにくい最強の夜食です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="味付き半熟ゆでたまご（2個入り）"
            subtitle="各社 ・ 約130kcal"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">130</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">12.8g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">8.8g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              手軽さNo.1の夜食。<Marker color="green">糖質ほぼゼロ</Marker>で腹持ちも良く、深夜のタンパク質補給に最適。1個だけなら65kcalで済みます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="茶碗蒸し"
            subtitle="各社 ・ 約90kcal"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">90</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">7.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">4.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">5.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              温かくて消化に優しい夜食の代表格。<Marker>90kcalと非常に低カロリー</Marker>で、卵のタンパク質もしっかり摂れます。レンジで温めるだけの手軽さも魅力。
            </p>
          </RankingCard>

          <TipBox title="4〜5位もチェック">
            <p className="mb-1">4位: インスタント味噌汁＋豆腐（約80kcal / P5.2g）- 温かいスープで満足感あり</p>
            <p>5位: ギリシャヨーグルト（約100kcal / P10.0g）- 腸内環境にも良い</p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&h=400&fit=crop"
          alt="深夜のコンビニエンスストアの外観"
        />

        {/* Section 4: チェーン店の夜食メニュー */}
        <section className="mb-16">
          <SectionHeading id="chain">
            チェーン店の夜食メニュー
          </SectionHeading>
          <p className="mb-4">
            深夜営業しているチェーン店で、太りにくい夜食メニューを厳選。<Marker>300kcal以下・低脂質</Marker>のメニューを中心に紹介します。
          </p>

          <SubSectionHeading>すき家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "牛丼ライト（ご飯の代わりに豆腐）", calories: 281, protein: 18.5, fat: 15.2, carbs: 14.8, highlight: true },
              { name: "まぐろたたき丼 ミニ", calories: 327, protein: 16.2, fat: 3.5, carbs: 58.2 },
              { name: "鮭朝食（ご飯少なめ）", calories: 358, protein: 22.1, fat: 8.5, carbs: 48.5 },
            ]}
          />

          <SubSectionHeading>松屋</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "湯豆腐変更の定食", calories: 260, protein: 22.0, fat: 12.5, carbs: 8.2, highlight: true },
              { name: "牛めし ミニ", calories: 509, protein: 14.8, fat: 18.2, carbs: 68.5 },
            ]}
          />

          <SubSectionHeading>吉野家</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "ライザップ牛サラダ", calories: 398, protein: 28.0, fat: 23.5, carbs: 17.2, highlight: true },
              { name: "牛丼 小盛", calories: 488, protein: 14.2, fat: 16.8, carbs: 67.5 },
            ]}
          />

          <TipBox title="深夜の外食テクニック">
            <p>
              牛丼チェーンでは<Marker color="blue">ご飯を豆腐に変更</Marker>できるメニューが増えています。糖質を大幅にカットでき、深夜でも罪悪感の少ない食事が可能。味噌汁をセットにすると満足感もアップします。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&h=400&fit=crop"
          alt="深夜に営業しているレストランのイメージ"
        />

        {/* Section 5: 避けるべき深夜メニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            避けるべき深夜メニュー
          </SectionHeading>
          <p className="mb-6">
            以下のメニューは深夜に食べると特に太りやすいため、できる限り避けましょう。
          </p>

          <WarningBox title="深夜NG メニューリスト">
            <p className="mb-2">
              <strong>ラーメン（約800kcal）:</strong> 高脂質・高糖質の典型。スープの塩分でむくみも加速。深夜ラーメンは最も太る行動の一つです。
            </p>
            <p className="mb-2">
              <strong>カツ丼・天丼（約900kcal）:</strong> 揚げ物＋白米の組み合わせは脂質・糖質ともに最悪。BMAL1が活発な時間帯には特に危険。
            </p>
            <p className="mb-2">
              <strong>菓子パン・スナック菓子:</strong> 糖質と脂質のダブルパンチ。血糖値が急上昇し、インスリンの過剰分泌で脂肪蓄積が促進されます。
            </p>
            <p>
              <strong>アイスクリーム（約300kcal）:</strong> 砂糖と乳脂肪の塊。冷たい食べ物は内臓を冷やし、深夜の代謝をさらに低下させます。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "味噌ラーメン（一般的）", calories: 820, protein: 28.5, fat: 32.0, carbs: 95.0, highlight: true },
              { name: "カツ丼（一般的）", calories: 922, protein: 30.2, fat: 28.5, carbs: 120.0 },
              { name: "メロンパン", calories: 380, protein: 6.8, fat: 12.5, carbs: 58.2 },
              { name: "ポテトチップス（1袋60g）", calories: 336, protein: 2.8, fat: 22.4, carbs: 32.5 },
            ]}
          />
        </section>

        {/* CTA */}
        <CTABanner
          title="夜食のカロリーが気になったら"
          subtitle="たべなびで外食メニューの栄養成分をチェックしましょう"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            夜食で太らないためのポイントを振り返りましょう。
          </p>

          <CheckList
            items={[
              "BMAL1が活発な22時〜2時は特に脂肪が蓄積されやすい時間帯",
              "夜食は「低脂質・高タンパク・消化が良い」の3条件で選ぶ",
              "コンビニならサラダチキン・ゆでたまご・茶碗蒸しが最適",
              "チェーン店では「ご飯→豆腐」変更で糖質を大幅カット",
              "ラーメン・揚げ物・菓子パンは深夜に最も避けるべきメニュー",
              "夜食の総カロリーは200〜300kcal以内に抑えるのが理想",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※栄養成分は一般的な数値であり、店舗や商品により異なる場合があります。
          </p>
        </section>

        {/* Article Footer */}
        <FAQSection
          slug="late-night-eating"
          items={[
            { q: "なぜ夜食は太ると言われているのですか?", a: "体内時計を司るBMAL1は午後10時~午前2時に発現が高まり、この時間帯は栄養吸収が効率的になるとされています。加えて夜間は消化機能が低下し、食べ物の胃滞留時間が長くなるため、摂取した食物が脂肪に変わりやすくなる傾向があります。" },
            { q: "深夜の外食チェーン店で選ぶべきメニューは?", a: "すき家の牛丼ライト豆腐版(281kcal)、松屋の湯豆腐定食(260kcal)、吉野家のライザップ牛サラダ(398kcal)が目安。ご飯を豆腐に変更することで糖質を大幅カットできます。" },
            { q: "深夜に避けるべき食べ物は?", a: "ラーメン(約800kcal)・カツ丼(約900kcal)・菓子パン・スナック菓子・アイスクリームなど、高脂質・高糖質の組み合わせは特に危険。血糖値の急上昇でインスリン過剰分泌につながります。" },
            { q: "コンビニで最もヘルシーな夜食は何ですか?", a: "サラダチキン(プレーン)が最適。113kcalでタンパク質24.3g、脂質わずか1.2g。消化も良く、次点はゆでたまご(130kcal)と茶碗蒸し(90kcal)です。" },
            { q: "夜食のタンパク質が重要な理由は何ですか?", a: "タンパク質は食事誘発性熱産生(DIT)が高く、摂取カロリーの約30%が消化吸収に消費されるため実質的なカロリーが低くなります。15g以上の摂取が夜食選びの指標です。" },
          ]}
        />

        <ArticleFooter currentSlug="late-night-eating" />

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
