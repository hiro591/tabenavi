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
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング | たべなび",
  description:
    "ファミリーマートでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。RIZAPコラボ商品やお母さん食堂シリーズを活用した朝昼晩の組み合わせプランも解説します。",
  keywords: [
    "ファミマ ダイエット",
    "ファミリーマート 低カロリー",
    "ファミマ 高タンパク",
    "ファミマ RIZAP",
    "ファミマ お母さん食堂",
    "コンビニ ダイエット ファミマ",
  ],
  openGraph: {
    title:
      "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
    description:
      "ファミリーマートの低カロリー・高タンパク商品を徹底解説。RIZAPコラボ＆お母さん食堂シリーズの活用法も紹介。",
    url: "https://www.tabenavi.jp/guide/familymart-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ファミマダイエット完全ガイド｜低カロリー＆高タンパク商品ランキング",
  description:
    "ファミリーマートでダイエットに最適な低カロリー・高タンパク商品をランキング形式で紹介。RIZAPコラボ商品の活用法も。",
  datePublished: "2026-03-25",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/familymart-diet",
};

const tocItems = [
  { id: "why-familymart", label: "ファミマがダイエットに使える理由" },
  { id: "low-calorie", label: "低カロリー商品TOP10" },
  { id: "high-protein", label: "高タンパク商品TOP5" },
  { id: "meal-plans", label: "朝昼晩の組み合わせプラン" },
  { id: "avoid", label: "避けるべき商品" },
  { id: "summary", label: "まとめ" },
];

export default function FamilyMartDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ファミマダイエット完全ガイド"
        subtitle="低カロリー＆高タンパク商品ランキング【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
        breadcrumb="ファミマダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="familymart-diet">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 10分
          </p>
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="ファミマでダイエット中におすすめは？RIZAP共同開発商品の本命は？"
          answer={
            <>
              <strong>ファミマの強みは「RIZAP共同開発商品」と「お母さん食堂シリーズ」</strong>。RIZAPサラダチキン（約125kcal/P22g）、RIZAPプロテインバー（約200kcal/P10g）が定番。お弁当系では<strong>サラダチキンとたまごのサンド（268kcal/P19g）</strong>が単品完結で優秀。1食300kcal/P30g台の組み合わせがしやすく、特に<strong>ダイエット初心者には最も使いやすいコンビニ</strong>です（220商品ラインナップ・2026年5月時点）。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          全国約16,500店舗を展開するファミリーマート。実は<Marker>ダイエッターにとって非常に優秀なコンビニ</Marker>であることをご存知ですか？RIZAPとのコラボ商品、栄養バランスに優れた「お母さん食堂」シリーズ、そしてファミマ独自の高タンパク商品群。ダイエット食の宝庫と言っても過言ではありません。
        </p>
        <p className="mb-4">
          厚生労働省の「国民健康・栄養調査（令和5年）」によると、日本人の約30%がBMI25以上の肥満に該当します。忙しい現代人にとって、<Marker color="blue">コンビニを賢く活用するダイエット</Marker>は最も現実的な選択肢のひとつです。
        </p>
        <p className="mb-10">
          この記事では、ファミマで買える低カロリー商品TOP10と高タンパク商品TOP5をランキング形式で紹介し、朝昼晩の最適な組み合わせプランも徹底解説します。RIZAPコラボ商品を活用した「コンビニで痩せる」戦略を完全網羅しました。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          alt="コンビニの商品棚のイメージ"
        />

        {/* Section 1: ファミマがダイエットに使える理由 */}
        <section className="mb-16">
          <SectionHeading id="why-familymart">
            ファミリーマートがダイエットに使える理由
          </SectionHeading>

          <p className="mb-6">
            ファミマがダイエットに使えるのは単なる印象ではなく、<Marker>明確な4つの理由</Marker>があります。他のコンビニにはない独自の強みを理解して、賢く活用しましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "RIZAPコラボ商品の充実度が圧倒的",
                body: "ファミマとRIZAPは2016年からコラボを開始し、2026年現在では常時30品目以上を展開。糖質制限スイーツから高タンパクおかず、プロテインドリンクまで幅広いラインナップです。「糖質0g麺」シリーズは1食あたり糖質0gでカロリーも約20kcalと驚異的。パーソナルジムの知見を活かした商品開発は他コンビニにない最大の強みです。",
              },
              {
                title: "「お母さん食堂」シリーズの栄養バランス",
                body: "お母さん食堂シリーズは約200品目を展開。家庭料理をコンセプトにした商品群で、栄養バランスに優れたおかずが1品200〜400円で買えます。ひじきの煮物（67kcal）、切り干し大根の煮物（78kcal）など、低カロリーで食物繊維が豊富な副菜が揃っています。",
              },
              {
                title: "全商品に栄養成分表示＋スマホアプリ連携",
                body: "ファミマの全商品にはカロリー・タンパク質・脂質・炭水化物が表示されています。さらにファミペイアプリでは購入履歴から栄養摂取状況を確認可能。ダイエット中の栄養管理が格段にしやすくなります。",
              },
              {
                title: "サラダチキンのバリエーションが豊富",
                body: "ファミマのサラダチキンは定番のプレーン・ハーブに加え、タンドリーチキン、ガーリックペッパー、レモン、柚子胡椒など常時8種類以上。スティックタイプやほぐしタイプもあり、飽きずにタンパク質を摂り続けられます。",
              },
            ]}
          />

          <TipBox title="ファミペイアプリでお得にダイエット食を購入">
            <p>
              ファミペイアプリでは<Marker color="green">毎週火曜日にダイエット関連商品のクーポン</Marker>が配信されることが多いです。サラダチキン20円引きやRIZAP商品30円引きなど、継続利用でかなりの節約になります。また、ポイント還元率1%もバカになりません。月に15,000円コンビニで使うなら年間1,800ポイントの還元です。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリー商品TOP10 */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">
            ファミマ低カロリー商品TOP10
          </SectionHeading>
          <p className="mb-6">
            ファミリーマートで買える<Marker>200kcal以下の低カロリー商品</Marker>を厳選ランキング。すべて税込300円以下で、毎日の食事に取り入れやすい商品ばかりです。カロリーの低さだけでなく、栄養バランスと満足感も考慮して順位を決定しました。
          </p>

          <NutritionTable
            items={[
              { name: "1位: RIZAP 糖質0g麺（汁なし担々麺風）", calories: 22, protein: 1.8, fat: 0.5, carbs: 0, highlight: true },
              { name: "2位: 味付き半熟ゆでたまご", calories: 66, protein: 6.5, fat: 4.5, carbs: 0.5 },
              { name: "3位: サラダチキンバー（プレーン）", calories: 105, protein: 21.0, fat: 1.2, carbs: 2.0, highlight: true },
              { name: "4位: お母さん食堂 ひじきの煮物", calories: 67, protein: 3.5, fat: 2.0, carbs: 8.5 },
              { name: "5位: お母さん食堂 切り干し大根の煮物", calories: 78, protein: 2.8, fat: 1.8, carbs: 12.0 },
              { name: "6位: サラダチキン（プレーン）110g", calories: 114, protein: 23.8, fat: 1.5, carbs: 0.8, highlight: true },
              { name: "7位: 海藻ミックスサラダ", calories: 52, protein: 2.0, fat: 0.8, carbs: 8.5 },
              { name: "8位: お母さん食堂 ほうれん草の胡麻和え", calories: 75, protein: 3.5, fat: 3.8, carbs: 6.0 },
              { name: "9位: RIZAP コーラグミ（糖質50%オフ）", calories: 88, protein: 2.0, fat: 0.1, carbs: 18.5 },
              { name: "10位: もずく酢（3個パック/1個）", calories: 16, protein: 0.4, fat: 0.1, carbs: 3.2 },
            ]}
          />

          <TipBox title="糖質0g麺の活用テクニック">
            <p>
              RIZAP糖質0g麺は<Marker>わずか22kcal</Marker>で驚くほど低カロリー。味のバリエーションも担々麺風、醤油ラーメン風、冷やし中華風など4種類あります。麺だけでは栄養が偏るので、サラダチキンやゆでたまごと一緒に食べるのがおすすめです。ランチの主食をこれに置き換えるだけで、300〜500kcalのカロリーカットが可能です。
            </p>
          </TipBox>

          <WarningBox title="低カロリー商品でも注意が必要なケース">
            <p>
              低カロリー商品ばかりを選ぶと、1日の総摂取カロリーが基礎代謝を下回る危険があります。<Marker>女性なら最低1,200kcal、男性なら最低1,500kcal</Marker>は確保しましょう。低カロリー商品はあくまで組み合わせの一部として活用するのが正しい使い方です。
            </p>
          </WarningBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop"
          alt="高タンパクなサラダチキンとゆでたまごのイメージ"
        />

        {/* Section 3: 高タンパク商品TOP5 */}
        <section className="mb-16">
          <SectionHeading id="high-protein">
            ファミマ高タンパク商品TOP5（RIZAPコラボ含む）
          </SectionHeading>
          <p className="mb-6">
            ダイエット中に筋肉を維持するためには、<Marker>体重1kgあたり1.2〜1.6gのタンパク質</Marker>が必要です（国際スポーツ栄養学会推奨）。体重60kgなら1日72〜96g。ファミマの高タンパク商品を上手に組み合わせれば、この目標は十分に達成できます。
          </p>

          <RankingCard
            rank={1}
            title="サラダチキン（プレーン）110g"
            subtitle="¥228 ・ 高タンパクの王道"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">114</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">23.8g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              ファミマのサラダチキンは<Marker>タンパク質1gあたり約9.6円</Marker>とコスパ抜群。プレーン以外にもハーブ、タンドリー、ガーリックペッパー、レモンなど8種類以上のフレーバーがあり、毎日食べても飽きません。ほぐしタイプはサラダに混ぜて使えるので、食べ方のバリエーションも広がります。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="RIZAP サラダチキンバー（ブラックペッパー）"
            subtitle="¥178 ・ 手軽さNo.1"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">83</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">15.0g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.5g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">2.8g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              RIZAPコラボのバータイプ。<Marker color="blue">片手で食べられるので忙しい日の間食に最適</Marker>。ブラックペッパーの刺激が効いていて、おやつ感覚でタンパク質15gを補給できます。2本食べてもわずか166kcal。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="グリルチキン（ゆず七味）"
            subtitle="¥298 ・ おかず系最強"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">158</p>
                <p className="text-sky-600 text-[10px]">kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">25.5g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">5.2g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">2.5g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              しっかりとした食べ応えのグリルチキン。<Marker color="green">タンパク質25.5gで158kcal</Marker>という優秀なPFCバランス。ゆず七味の風味が食欲をそそり、メインおかずとして満足度が高いのがポイントです。
            </p>
          </RankingCard>

          <TipBox title="4〜5位もチェック">
            <p className="mb-1">4位: RIZAP 5Diet プロテインバー チョコ味（P15.2g / 144kcal / ¥180）</p>
            <p className="mb-1">5位: たんぱく質が摂れるチキン＆エッグサンド（P22.0g / 272kcal / ¥348）</p>
            <p className="mt-2 text-xs text-gray-500">
              RIZAPのプロテインバーはチョコ味ながら糖質8.5gと控えめ。甘いものが食べたい時のタンパク質補給に最適です。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ファミマ商品の栄養をサクッと検索"
          subtitle="たべなびならコンビニ商品のカロリー・PFCをすぐに確認できます"
        />

        {/* Section 4: 朝昼晩の組み合わせプラン */}
        <section className="mb-16">
          <SectionHeading id="meal-plans">
            朝昼晩のおすすめ組み合わせプラン
          </SectionHeading>
          <p className="mb-6">
            ファミマだけで<Marker>1日1,400kcal以下・タンパク質85g以上</Marker>を達成する3つのプランを紹介します。RIZAPコラボ商品とお母さん食堂シリーズを組み合わせた、栄養バランス重視のプランです。
          </p>

          <SubSectionHeading>朝食プラン（約330kcal / P22g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              ゆでたまご2個 + ギリシャヨーグルト（無糖） + バナナ1本
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 22.4g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                332 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥420
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              朝はタンパク質と良質な糖質でエネルギーをチャージ。ギリシャヨーグルトは通常のヨーグルトの約2倍のタンパク質を含み、腸内環境の改善にも効果的です。バナナの食物繊維で朝の腸の動きを活発にします。
            </p>
          </div>

          <SubSectionHeading>昼食プラン（約520kcal / P38g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              サラダチキン（プレーン） + 雑穀米おにぎり + お母さん食堂 豚汁
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 37.8g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                518 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥580
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              昼は炭水化物もしっかり摂って午後のパフォーマンスを維持。雑穀米おにぎりは白米に比べて食物繊維が豊富でGI値も低め。豚汁は具沢山で満足感が高く、野菜と豚肉のタンパク質も追加で摂れます。
            </p>
          </div>

          <SubSectionHeading>夕食プラン（約350kcal / P28g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              RIZAP 糖質0g麺 + グリルチキン（ゆず七味） + 海藻サラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 27.8g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                232 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥650
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              夕食は<Marker color="green">糖質0g麺で主食のカロリーを大幅カット</Marker>。グリルチキンのしっかりした味で満足感を確保し、海藻サラダでミネラルと食物繊維を補給します。これだけ食べてわずか232kcal。
            </p>
          </div>

          <SubSectionHeading>間食プラン（約180kcal / P15g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              RIZAP プロテインバー + ブラックコーヒー
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 15.2g
              </span>
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                144 kcal
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                約¥280
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              午後の小腹対策に。RIZAPプロテインバーはチョコ味で満足感があり、タンパク質15.2gを補給。ブラックコーヒーのカフェインで代謝アップ効果も期待できます。
            </p>
          </div>

          <TipBox title="1日トータルの栄養バランス">
            <p>
              朝332kcal + 昼518kcal + 夕232kcal + 間食144kcal = <Marker>合計1,226kcal / タンパク質103.2g</Marker>。PFCバランスはP33.7% / F18.2% / C48.1%と理想的。1,500kcal目標の方は、おにぎりをもう1個追加してもOKです。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="バランスの取れた健康的な食事"
        />

        {/* Section 5: 避けるべき商品 */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            ダイエット中に避けるべきファミマ商品
          </SectionHeading>
          <p className="mb-6">
            ファミマにはダイエットに優れた商品が多い反面、<Marker>高カロリー・高脂質でダイエットを台無しにする商品</Marker>も存在します。特にレジ横のホットスナックとパンコーナーには注意が必要です。
          </p>

          <WarningBox title="ダイエット中は避けたい要注意商品">
            <p className="mb-2">
              <strong>ファミチキ:</strong> 252kcal、脂質15.7g。ファミマの看板商品ですが、衣に油がたっぷり。1個で食事1回分のカロリーに匹敵します。どうしても食べたい場合は週1回までにしましょう。
            </p>
            <p className="mb-2">
              <strong>クリームパン:</strong> 約340kcal、脂質14.5g、糖質42g。クリームと生地のダブル糖質で血糖値が急上昇。食後の眠気の原因にもなります。
            </p>
            <p className="mb-2">
              <strong>焼きそばUFO弁当:</strong> 約830kcal、脂質32g。炭水化物と脂質の塊。1食で1日のカロリー目標の半分以上を消費してしまいます。
            </p>
            <p>
              <strong>ジャンボフランク:</strong> 約290kcal、脂質24g。脂質の割合が非常に高く、満足感の割にカロリーが高い典型的なNG食品です。
            </p>
          </WarningBox>

          <NutritionTable
            items={[
              { name: "ファミチキ", calories: 252, protein: 12.8, fat: 15.7, carbs: 14.5, highlight: true },
              { name: "クリームパン", calories: 340, protein: 7.2, fat: 14.5, carbs: 42.0 },
              { name: "焼きそばUFO弁当", calories: 830, protein: 16.5, fat: 32.0, carbs: 112.0, highlight: true },
              { name: "ジャンボフランク", calories: 290, protein: 9.8, fat: 24.0, carbs: 8.5 },
              { name: "チョコクロワッサン", calories: 365, protein: 5.5, fat: 22.0, carbs: 36.5 },
            ]}
          />

          <TipBox title="レジ横の誘惑対策">
            <p>
              ファミチキやフランクなどのホットスナックは、<Marker>レジに並んでいるときに衝動的に追加購入</Marker>しがちです。対策として、買うものを事前にリストアップしてから入店する習慣をつけましょう。ファミペイアプリの「お気に入り」機能を使うと、ダイエット向け商品のリストを簡単に管理できます。
            </p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="ファミマでのダイエット生活を始めよう"
          subtitle="たべなびで賢いコンビニメニュー選びをサポートします"
        />

        <AffiliateProductGrid
          title="ファミマ常連卒業のまとめ買い4点"
          productIds={["salada-chicken-pack", "tuna-can", "inbar-protein", "ultora-whey"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ファミマダイエットの要点を振り返りましょう。RIZAPコラボとお母さん食堂を活用すれば、<Marker>コンビニだけで本格的なダイエット</Marker>が可能です。
          </p>

          <ArticleSummary
            points={[
              "RIZAPコラボ商品は常時30品目以上。糖質0g麺（22kcal）は主食の置き換えに最強",
              "お母さん食堂シリーズは低カロリーで栄養バランスに優れた副菜の宝庫",
              "サラダチキン（約114kcal/P24g）はタンパク質1gあたり約10円とコスパ抜群",
              "サラダチキンとたまごのサンド（268kcal/P19g）など完結型の弁当が充実",
              "1食300kcal/P30g台のプランがファミマだけで実現可能（220商品ラインナップ）",
              "ファミチキ・菓子パン・大盛り弁当はダイエット中はNG",
              "ファミペイアプリのクーポンとお気に入り機能を活用して継続しやすくする",
            ]}
          />

          <div className="mt-8 p-5 bg-sky-50 rounded-lg border border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ファミマダイエットをさらに効果的にするなら、他のコンビニやチェーン店との使い分けもおすすめです。以下の関連記事もぜひチェックしてください。
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guide/seven-eleven-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  セブンイレブンダイエット完全ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/conveni-protein" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  コンビニ高タンパク商品ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/eating-out-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  外食ダイエット完全ガイド
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            ※価格・栄養成分は店舗や時期により異なる場合があります。商品は予告なく変更・終了する場合があります。RIZAPコラボ商品は一部店舗で取り扱いがない場合があります。最新情報は<a href="https://www.family.co.jp/goods/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">ファミマ公式商品情報</a>でご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="familymart-diet"
          items={[
            {
              q: "ファミマでダイエット中におすすめの定番商品は？",
              a: "①RIZAPサラダチキン（約125kcal/P22g）、②サラダチキンとたまごのサンド（268kcal/P19g）、③RIZAPプロテインバー（約200kcal/P10g）、④お母さん食堂のひじき煮（約60kcal）、⑤ライザップ糖質0g麺（22kcal）。これら5品を組み合わせれば1食300〜400kcalで栄養バランス完璧。",
            },
            {
              q: "RIZAPコラボ商品は本当にダイエット効果がある？",
              a: "RIZAP商品は通常品より「カロリー・糖質を抑え、タンパク質を増やす」設計。例えばRIZAPサラダチキンは125kcal/P22gと栄養密度が高い。ただし「これ食べれば痩せる」訳ではなく、1日の総カロリー管理＋運動の補助として活用すると効果的。",
            },
            {
              q: "ファミチキはダイエット中NG？",
              a: "ファミチキ1個は約240kcal/P14g/F15g。タンパク質は摂れますが脂質が高めなので、ダイエット中は週1〜2回までが目安。「ファミチキの皮を一部剥がす」「サラダ＋スープと組み合わせる」など工夫すれば、たまの楽しみとしてOK。",
            },
            {
              q: "ファミマの朝食でダイエット向きは？",
              a: "「サラダチキン+おにぎり1個（昆布・梅・鮭）+ゆで卵」で約350kcal/P32g。または「お母さん食堂のおかずセット+ヨーグルト+RIZAPプロテインドリンク」で約380kcal/P25g。朝の高タンパクは1日の代謝アップに効果的。",
            },
            {
              q: "ファミマのお弁当でダイエット向きは？",
              a: "サラダチキン系の弁当（450kcal前後）、お母さん食堂シリーズの和定食弁当（500kcal前後）が低カロリー＆栄養バランス良好。逆に大盛り焼肉弁当（800kcal超）、ナポリタン大盛り（750kcal前後）は注意。",
            },
            {
              q: "ファミマの低糖質スイーツは？",
              a: "「RIZAPプロテインゼリー」（80kcal/P10g）、「ライザップカップアイス」（130kcal/糖質約7g）、「ライザップ低糖質バウムクーヘン」（150kcal/糖質約10g）など。スイーツ欲を満たしながら糖質をコントロールできます。",
            },
            {
              q: "セブン・ローソンとの違いは？",
              a: "セブン: 商品ラインナップが豊富 / ローソン: ロカボ商品が圧倒的 / ファミマ: RIZAPコラボとお母さん食堂が特徴。ダイエット初心者には「単品で完結する商品が多い」ファミマが最も使いやすいです。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-05-13", note: "ファミマ220商品の最新栄養データに更新。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-25", note: "初稿公開" },
          ]}
        />

        {/* Article Footer */}
        <ArticleFooter currentSlug="familymart-diet" />

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
