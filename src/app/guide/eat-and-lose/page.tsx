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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】食べて痩せるダイエット完全ガイド｜我慢しないで確実に体重を落とす方法 | たべなび",
  description:
    "食べて痩せるダイエットの科学的根拠と5つの原則を徹底解説。高タンパク・低GI・食物繊維を活用した我慢しないダイエット法。チェーン店を活用した実践メニュー例も紹介。",
  keywords: [
    "食べて痩せる",
    "食事制限なし ダイエット",
    "我慢しない ダイエット",
    "食べて痩せる 方法",
    "ダイエット 食べていい",
    "食べて痩せるメニュー",
  ],
  openGraph: {
    title:
      "【2026年最新】食べて痩せるダイエット完全ガイド｜我慢しないで確実に体重を落とす方法",
    description:
      "食べて痩せるダイエットの科学的根拠と実践メニューを完全解説。チェーン店活用法も紹介。",
    url: "https://www.tabenavi.jp/guide/eat-and-lose",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】食べて痩せるダイエット完全ガイド｜我慢しないで確実に体重を落とす方法",
  description:
    "食べて痩せるダイエットの科学的根拠と5つの原則を徹底解説。高タンパク・低GI・食物繊維を活用した実践メニュー。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/eat-and-lose",
};

const tocItems = [
  { id: "is-it-possible", label: "食べて痩せるは可能か（科学的根拠）" },
  { id: "five-principles", label: "食べて痩せる5つの原則" },
  { id: "chain-menus", label: "チェーン店活用メニュー例" },
  { id: "boundary", label: "「食べて痩せる」と「食べすぎて太る」の境界線" },
  { id: "daily-plans", label: "1日の食事例3パターン" },
  { id: "summary", label: "まとめ" },
];

export default function EatAndLosePage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="食べて痩せるダイエット完全ガイド"
        subtitle="我慢しないで確実に体重を落とす方法【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
        breadcrumb="食べて痩せるダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="eat-and-lose">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 12分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「食べて痩せる」と聞くと、夢のような話に思えるかもしれません。しかし、<Marker>正しい知識と食材選びがあれば、しっかり食べながら体重を落とすことは科学的に可能</Marker>です。実際に、極端な食事制限をしたダイエットの80%以上がリバウンドするという研究結果もあります（UCLA、2007年）。
        </p>
        <p className="mb-4">
          問題なのは「食べないこと」ではなく「何を食べるか」。カロリーの質を変え、食べるタイミングを工夫するだけで、<Marker color="blue">1日3食しっかり食べながら月2〜3kgの減量</Marker>は十分に達成可能です。
        </p>
        <p className="mb-10">
          この記事では、食べて痩せるダイエットの科学的根拠を解説し、今日から実践できる5つの原則とチェーン店を活用した具体的なメニュー例を紹介します。我慢や根性に頼らない、持続可能なダイエットの完全ガイドです。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
          alt="新鮮な野菜とタンパク質が並ぶ食卓"
        />

        {/* Section 1: 食べて痩せるは可能か */}
        <section className="mb-16">
          <SectionHeading id="is-it-possible">
            「食べて痩せる」は本当に可能なのか？科学的根拠を解説
          </SectionHeading>

          <p className="mb-4">
            「食べて痩せる」が可能な科学的根拠は、<Marker>食事誘発性熱産生（DIT: Diet Induced Thermogenesis）</Marker>にあります。DITとは、食事を摂った後に消化・吸収のためにエネルギーが消費される現象のことです。
          </p>

          <SubSectionHeading>DITは栄養素によって大きく異なる</SubSectionHeading>
          <p className="mb-4">
            重要なのは、DITの割合が栄養素によって大きく異なるという事実です。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 text-xs font-bold text-blue-600 bg-blue-50 rounded-full px-3 py-1 text-center">タンパク質</span>
                <div className="flex-1 bg-blue-100 rounded-full h-4 relative">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: "100%" }}></div>
                  <span className="absolute right-2 top-0 text-[10px] text-white font-bold leading-4">約30%</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 text-xs font-bold text-amber-600 bg-amber-50 rounded-full px-3 py-1 text-center">糖質</span>
                <div className="flex-1 bg-amber-100 rounded-full h-4 relative">
                  <div className="bg-amber-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                  <span className="absolute left-[22%] top-0 text-[10px] text-amber-800 font-bold leading-4">約6%</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-20 text-xs font-bold text-red-600 bg-red-50 rounded-full px-3 py-1 text-center">脂質</span>
                <div className="flex-1 bg-red-100 rounded-full h-4 relative">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: "13%" }}></div>
                  <span className="absolute left-[15%] top-0 text-[10px] text-red-800 font-bold leading-4">約4%</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              ※DIT: 食事誘発性熱産生の割合。摂取カロリーのうち消化吸収に使われるエネルギーの比率。
            </p>
          </div>

          <p className="mb-4">
            つまり、<Marker>同じ100kcalでも、タンパク質なら30kcalが消化に使われ、脂質ならたった4kcalしか使われない</Marker>のです。タンパク質中心の食事にするだけで、同じカロリーでも実質的な吸収カロリーを減らせます。
          </p>

          <SubSectionHeading>食事制限ダイエットが失敗する理由</SubSectionHeading>
          <p className="mb-4">
            極端なカロリー制限をすると、体は「飢餓状態」と判断して基礎代謝を下げます。UCLAの研究（2007年）によると、<Marker color="blue">ダイエット参加者の83%が2年以内にリバウンド</Marker>し、その多くがダイエット前より体重が増加しました。
          </p>
          <p className="mb-6">
            これは「食べない」ことで基礎代謝が低下し、通常の食事量に戻した途端に太りやすい体になってしまうためです。だからこそ、「食べて痩せる」アプローチが重要なのです。
          </p>

          <TipBox title="基礎代謝を下げないための最低カロリー">
            <p>
              一般的に、<Marker color="green">女性は1日1,200kcal、男性は1日1,500kcal</Marker>を下回らないようにしましょう。これを下回ると基礎代謝の低下が始まり、かえって痩せにくくなります。「食べて痩せる」の本質は、この最低ラインを守りながらカロリーの質を上げることです。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 食べて痩せる5つの原則 */}
        <section className="mb-16">
          <SectionHeading id="five-principles">
            食べて痩せる5つの原則
          </SectionHeading>
          <p className="mb-6">
            食べて痩せるための具体的な5つの原則を解説します。すべて科学的な根拠に基づいており、<Marker>今日から実践できる</Marker>ものばかりです。
          </p>

          <SubSectionHeading>原則1: 高タンパク質を最優先にする</SubSectionHeading>
          <p className="mb-4">
            タンパク質はDITが最も高い栄養素であると同時に、<Marker>満腹感を最も長く持続させる栄養素</Marker>でもあります。2015年のAmerican Journal of Clinical Nutritionの研究では、タンパク質の割合を総カロリーの25〜30%にした群は、15%の群と比べて1日の摂取カロリーが平均441kcal少なかったと報告されています。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">高タンパク食材の例（100gあたり）</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">鶏むね肉</p>
                <p className="text-blue-600 font-bold text-lg">23.3g</p>
                <p className="text-xs text-gray-500">108kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">マグロ赤身</p>
                <p className="text-blue-600 font-bold text-lg">26.4g</p>
                <p className="text-xs text-gray-500">125kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">卵（2個）</p>
                <p className="text-blue-600 font-bold text-lg">12.3g</p>
                <p className="text-xs text-gray-500">151kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">納豆（1パック）</p>
                <p className="text-blue-600 font-bold text-lg">8.3g</p>
                <p className="text-xs text-gray-500">100kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">ギリシャヨーグルト</p>
                <p className="text-blue-600 font-bold text-lg">10.0g</p>
                <p className="text-xs text-gray-500">59kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-sm font-bold text-gray-800">豆腐（半丁）</p>
                <p className="text-blue-600 font-bold text-lg">6.6g</p>
                <p className="text-xs text-gray-500">72kcal</p>
              </div>
            </div>
          </div>

          <SubSectionHeading>原則2: 低GI食品で血糖値をコントロール</SubSectionHeading>
          <p className="mb-4">
            GI値（グリセミック・インデックス）とは、食後の血糖値の上昇度を示す指標です。<Marker>GI値が高い食品を食べると血糖値が急上昇し、インスリンが大量分泌されて脂肪が蓄積</Marker>されやすくなります。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">主食のGI値比較</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">白米</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-100 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full" style={{ width: "84%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-red-600 w-8">84</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">食パン</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-100 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-red-600 w-8">91</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">玄米</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-100 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{ width: "56%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-green-600 w-8">56</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">オートミール</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-100 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-green-600 w-8">55</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">そば</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-100 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{ width: "46%" }}></div>
                  </div>
                  <span className="text-sm font-bold text-green-600 w-8">46</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">※GI値55以下が低GI食品の基準</p>
          </div>

          <SubSectionHeading>原則3: 食物繊維で満腹感を長持ちさせる</SubSectionHeading>
          <p className="mb-4">
            食物繊維は<Marker>胃の中で水分を吸って膨張し、満腹感を持続</Marker>させます。また、食後の血糖値上昇を緩やかにする効果もあります。厚生労働省は1日の食物繊維目標量を男性21g以上、女性18g以上としていますが、実際の平均摂取量は約14gと大幅に不足しています。
          </p>
          <p className="mb-6">
            食物繊維が豊富な食品：海藻類、きのこ類、ごぼう、オクラ、アボカド、ブロッコリー、大豆製品、オートミール。これらを毎食1品以上取り入れることを目指しましょう。
          </p>

          <SubSectionHeading>原則4: 水分摂取で代謝を上げる</SubSectionHeading>
          <p className="mb-4">
            2003年のJournal of Clinical Endocrinology & Metabolismの研究では、<Marker color="blue">500mlの水を飲むと30分後に代謝が30%上昇する</Marker>ことが報告されています。1日2リットルの水を飲む習慣だけで、1日あたり約96kcalの追加消費が期待できます。
          </p>
          <p className="mb-6">
            食前に水を500ml飲む習慣もおすすめです。バージニア工科大学の研究では、食前に水を飲んだグループは12週間で平均2kg多く体重が減少しました。
          </p>

          <SubSectionHeading>原則5: 食べるタイミングを最適化する</SubSectionHeading>
          <p className="mb-4">
            同じカロリーでも、食べるタイミングで体重への影響は変わります。<Marker>朝にしっかり食べて夜は控えめにする</Marker>のが基本です。
          </p>
          <NumberedList
            items={[
              {
                title: "朝食を絶対に抜かない",
                body: "朝食を抜くと昼に血糖値が急上昇しやすくなり、脂肪を蓄積しやすい状態に。朝食にタンパク質を20g以上摂ると、1日の食欲が安定することが研究で示されています。",
              },
              {
                title: "昼食は1日で最もボリュームを持たせる",
                body: "活動量が多い昼間にカロリーを集中させることで、エネルギーとして効率的に消費されます。全体の40%程度を昼食で摂るのが理想的。",
              },
              {
                title: "夕食は就寝3時間前までに済ませる",
                body: "就寝中は代謝が低下するため、夜遅い食事は脂肪になりやすい。どうしても遅くなる場合は、消化しやすい高タンパク・低脂質の食事を選びましょう。",
              },
            ]}
          />

          <TipBox title="食べ順ダイエットとの組み合わせが最強">
            <p>
              食べて痩せる原則に<Marker color="green">「食べ順」</Marker>を組み合わせるとさらに効果的。野菜（食物繊維）→タンパク質→炭水化物の順に食べると、血糖値の急上昇を防げます。詳しくは<Link href="/guide/eating-order" className="text-sky-600 hover:text-sky-800 underline">太らない食べ順ガイド</Link>をご覧ください。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="外食のカロリー・PFCをすぐ検索"
          subtitle="たべなびで「食べて痩せる」メニュー選びをサポート"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop"
          alt="バランスの取れた健康的なプレート"
        />

        {/* Section 3: チェーン店活用メニュー例 */}
        <section className="mb-16">
          <SectionHeading id="chain-menus">
            チェーン店を活用した「食べて痩せる」メニュー例
          </SectionHeading>
          <p className="mb-6">
            自炊が理想ですが、毎日は難しいもの。チェーン店でも<Marker>正しい選び方をすれば「食べて痩せる」は十分に実践可能</Marker>です。各チェーンの具体的なおすすめメニューを紹介します。
          </p>

          <SubSectionHeading>大戸屋 - 定食スタイルで栄養バランス抜群</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              おすすめ: しまほっけの炭火焼き定食（五穀米に変更）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約530kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 32.5g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 15.8g</span>
            </div>
            <p className="text-sm text-gray-600">
              魚のタンパク質＋五穀米の低GI＋味噌汁の食物繊維。大戸屋は白米を五穀米に無料変更可能で、食物繊維とミネラルを追加摂取できます。詳しくは<Link href="/guide/ootoya-diet" className="text-sky-600 hover:text-sky-800 underline">大戸屋ダイエットガイド</Link>で紹介しています。
            </p>
          </div>

          <SubSectionHeading>サブウェイ - カスタマイズ自在の高タンパクサンド</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              おすすめ: ローストチキン（全粒粉パン・野菜多め）
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約310kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 22.0g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 5.8g</span>
            </div>
            <p className="text-sm text-gray-600">
              全粒粉パンでGI値を抑え、野菜多めで食物繊維もたっぷり。マヨネーズの代わりにマスタードを選ぶと脂質をさらにカットできます。<Link href="/guide/subway-diet" className="text-sky-600 hover:text-sky-800 underline">サブウェイダイエットガイド</Link>も参考にどうぞ。
            </p>
          </div>

          <SubSectionHeading>すき家 - 牛丼チェーンでも食べて痩せる</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              おすすめ: 牛丼ライト（豆腐ベース）+ たまご
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約425kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 25.8g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 22.5g</span>
            </div>
            <p className="text-sm text-gray-600">
              ご飯の代わりに豆腐を使った「牛丼ライト」は糖質を大幅カット。通常の牛丼（約735kcal）と比べて<Marker>約310kcalのカットが可能</Marker>。卵を追加することでタンパク質を強化できます。<Link href="/guide/sukiya-diet" className="text-sky-600 hover:text-sky-800 underline">すき家ダイエットガイド</Link>もぜひ。
            </p>
          </div>

          <SubSectionHeading>コンビニ - 手軽に実践できる最強の選択肢</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              おすすめ: サラダチキン + 雑穀米おにぎり + 味噌汁 + サラダ
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約480kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 35.0g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 8.5g</span>
            </div>
            <p className="text-sm text-gray-600">
              コンビニ食は栄養成分が明確で管理しやすいのが最大のメリット。サラダチキンでタンパク質を確保し、雑穀米おにぎりで低GIの炭水化物、味噌汁とサラダで食物繊維を摂取。詳しくは<Link href="/guide/seven-eleven-diet" className="text-sky-600 hover:text-sky-800 underline">セブンイレブンダイエットガイド</Link>や<Link href="/guide/conveni-protein" className="text-sky-600 hover:text-sky-800 underline">コンビニ高タンパク商品ガイド</Link>をご覧ください。
            </p>
          </div>
        </section>

        {/* Section 4: 境界線 */}
        <section className="mb-16">
          <SectionHeading id="boundary">
            「食べて痩せる」と「食べすぎて太る」の境界線
          </SectionHeading>
          <p className="mb-6">
            食べて痩せるダイエットには「食べていい上限」があります。<Marker>この境界線を理解しないと、「食べて痩せる」が「食べすぎて太る」に変わってしまいます</Marker>。
          </p>

          <SubSectionHeading>カロリー収支の基本を理解する</SubSectionHeading>
          <p className="mb-4">
            「食べて痩せる」とは「好きなだけ食べて痩せる」ではありません。<Marker color="blue">消費カロリー &gt; 摂取カロリー</Marker>の原則は変わりません。ただし、カロリーの質を上げることで、同じカロリーでもより多くの食事量を確保できるのです。
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">同じ500kcalでもこんなに違う</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm font-bold text-red-700 mb-2">NG例: 菓子パン1個</p>
                <p className="text-xs text-gray-600">P 8g / F 22g / C 65g</p>
                <p className="text-xs text-gray-500 mt-1">食物繊維: 1.2g</p>
                <p className="text-xs text-gray-500">満腹持続: 約1時間</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-bold text-green-700 mb-2">OK例: サラダチキン+おにぎり+サラダ</p>
                <p className="text-xs text-gray-600">P 32g / F 6g / C 55g</p>
                <p className="text-xs text-gray-500 mt-1">食物繊維: 5.8g</p>
                <p className="text-xs text-gray-500">満腹持続: 約3〜4時間</p>
              </div>
            </div>
          </div>

          <WarningBox title="「食べて痩せる」の落とし穴">
            <p className="mb-2">
              <strong>ヘルシー食品の食べすぎ:</strong> ナッツやアボカドは健康的ですが高カロリー。アーモンド100gは約600kcal、アボカド1個は約230kcalです。
            </p>
            <p className="mb-2">
              <strong>「ゼロカロリー」の過信:</strong> ゼロカロリー飲料の人工甘味料は食欲を刺激する可能性があります。飲みすぎには注意。
            </p>
            <p>
              <strong>チートデーの頻度:</strong> 週1回のチートデーは問題ありませんが、「食べて痩せる」を理由に毎日チートデーにならないよう注意。
            </p>
          </WarningBox>

          <SubSectionHeading>目安となるカロリー設定</SubSectionHeading>
          <NutritionTable
            items={[
              { name: "女性（デスクワーク中心）", calories: 1400, protein: 70, fat: 40, carbs: 175 },
              { name: "女性（適度な運動あり）", calories: 1600, protein: 80, fat: 45, carbs: 200 },
              { name: "男性（デスクワーク中心）", calories: 1800, protein: 90, fat: 50, carbs: 225, highlight: true },
              { name: "男性（適度な運動あり）", calories: 2000, protein: 100, fat: 55, carbs: 250, highlight: true },
            ]}
          />
          <p className="text-xs text-gray-500 mt-2">
            ※ダイエット時の目安。現在の体重や活動量により個人差があります。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop"
          alt="計画的に盛り付けられた健康的な食事プレート"
        />

        {/* Section 5: 1日の食事例3パターン */}
        <section className="mb-16">
          <SectionHeading id="daily-plans">
            1日の食事例3パターン
          </SectionHeading>
          <p className="mb-6">
            「食べて痩せる」5つの原則を実践した、<Marker>リアルな1日の食事例</Marker>を3パターン紹介します。すべてチェーン店やコンビニで実現可能なメニューです。
          </p>

          <SubSectionHeading>パターンA: コンビニ中心プラン（1,380kcal / P92g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-sky-600 bg-sky-50 rounded-full px-3 py-1">朝</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">ゆでたまご2個 + ギリシャヨーグルト + バナナ（332kcal / P22g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-amber-600 bg-amber-50 rounded-full px-3 py-1">昼</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">サラダチキン + 雑穀米おにぎり + 味噌汁 + サラダ（480kcal / P35g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-green-600 bg-green-50 rounded-full px-3 py-1">間食</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">プロテインバー + ブラックコーヒー（148kcal / P15g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-purple-600 bg-purple-50 rounded-full px-3 py-1">夜</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">サラダチキンバー + 豆腐 + もずく酢 + ゼロカロリーゼリー（420kcal / P20g）</p>
                </div>
              </div>
            </div>
          </div>

          <SubSectionHeading>パターンB: 外食チェーン中心プラン（1,520kcal / P88g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-sky-600 bg-sky-50 rounded-full px-3 py-1">朝</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">コンビニ: 全粒粉サンド + 無糖ラテ（380kcal / P18g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-amber-600 bg-amber-50 rounded-full px-3 py-1">昼</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">大戸屋: しまほっけの炭火焼き定食・五穀米（530kcal / P32g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-green-600 bg-green-50 rounded-full px-3 py-1">間食</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">コンビニ: ゆでたまご + アーモンド10粒（150kcal / P10g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-purple-600 bg-purple-50 rounded-full px-3 py-1">夜</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">サイゼリヤ: 若鶏のグリル + 小エビのサラダ（460kcal / P28g）</p>
                </div>
              </div>
            </div>
          </div>

          <SubSectionHeading>パターンC: 混合プラン（1,450kcal / P95g）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-sky-600 bg-sky-50 rounded-full px-3 py-1">朝</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">自炊: オートミール + プロテイン + ブルーベリー（350kcal / P30g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-amber-600 bg-amber-50 rounded-full px-3 py-1">昼</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">サブウェイ: ローストチキン全粒粉パン + ミネストローネ（420kcal / P26g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-green-600 bg-green-50 rounded-full px-3 py-1">間食</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">コンビニ: ギリシャヨーグルト + ナッツ（180kcal / P12g）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-xs font-bold text-purple-600 bg-purple-50 rounded-full px-3 py-1">夜</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">すき家: 牛丼ライト + たまご + 味噌汁（500kcal / P27g）</p>
                </div>
              </div>
            </div>
          </div>

          <TipBox title="自分に合ったパターンを見つけよう">
            <p>
              3パターンはあくまで参考例です。大切なのは<Marker>「高タンパク・低GI・食物繊維豊富」の原則を守ること</Marker>。自分のライフスタイルに合わせて、コンビニ・外食・自炊を組み合わせてください。たべなびを使えば、チェーン店やコンビニの栄養成分を簡単に検索できます。
            </p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="食べて痩せるメニュー探しはたべなびで"
          subtitle="チェーン店・コンビニの栄養成分をワンタップで検索"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            「食べて痩せる」ダイエットの要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "食べて痩せるは科学的に可能。DITの違い（タンパク質30% vs 脂質4%）がカギ",
              "5つの原則: 高タンパク・低GI・食物繊維・水分・食べるタイミング",
              "極端なカロリー制限は83%がリバウンド。基礎代謝を下回らないことが大前提",
              "チェーン店でも正しい選び方をすれば食べて痩せるは実践可能",
              "同じ500kcalでもカロリーの質で満腹持続が1時間 vs 4時間の差",
              "コンビニ・外食・自炊を組み合わせて、自分に合ったパターンを構築する",
            ]}
          />

          <div className="mt-8 p-5 bg-sky-50 rounded-lg border border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              食べて痩せるダイエットを実践するなら、以下の関連記事もおすすめです。
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guide/eating-order" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  太らない食べ順ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/pfc-guide" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  PFCバランス入門ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/metabolism-boost-foods" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  代謝を上げる食べ物ランキングTOP15
                </Link>
              </li>
              <li>
                <Link href="/guide/diet-mistakes" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  ダイエットでやってはいけないこと10選
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            ※栄養成分値は目安です。商品や店舗により異なる場合があります。持病がある方は医師に相談の上でダイエットを始めてください。
          </p>
        </section>

        {/* Article Footer */}
        <ArticleFooter currentSlug="eat-and-lose" />

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
