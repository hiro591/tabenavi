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
    "【2026年最新】代謝を上げる食べ物ランキングTOP15｜痩せやすい体を食事で作る | たべなび",
  description:
    "代謝を上げる食べ物TOP15をランキング形式で紹介。DIT・基礎代謝・NEATの違いから、外食チェーン店での代謝アップメニューの選び方、1日の食事プランまで徹底解説します。",
  keywords: [
    "代謝 上げる 食べ物",
    "代謝アップ 食材",
    "痩せやすい体 食事",
    "基礎代謝 上げる 食事",
    "DIT 食事",
    "代謝を上げる方法",
  ],
  openGraph: {
    title:
      "【2026年最新】代謝を上げる食べ物ランキングTOP15｜痩せやすい体を食事で作る",
    description:
      "代謝を上げる食べ物TOP15を徹底解説。外食チェーン店での代謝アップメニュー選びも紹介。",
    url: "https://www.tabenavi.jp/guide/metabolism-boost-foods",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】代謝を上げる食べ物ランキングTOP15｜痩せやすい体を食事で作る",
  description:
    "代謝を上げる食べ物TOP15をランキング形式で紹介。外食チェーン店での代謝アップメニュー選びも。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/metabolism-boost-foods",
};

const tocItems = [
  { id: "what-is-metabolism", label: "代謝が上がるとは（DIT/基礎代謝/NEAT）" },
  { id: "top15", label: "代謝を上げる食べ物TOP15" },
  { id: "worst5", label: "代謝を下げる食べ物ワースト5" },
  { id: "eating-out", label: "外食で代謝を上げるメニュー選び" },
  { id: "daily-plan", label: "1日の代謝アップ食事例" },
  { id: "summary", label: "まとめ" },
];

export default function MetabolismBoostFoodsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="代謝を上げる食べ物ランキングTOP15"
        subtitle="痩せやすい体を食事で作る【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
        breadcrumb="代謝を上げる食べ物ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="metabolism-boost-foods">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 11分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「何を食べても太りやすくなった」「以前より食べていないのに体重が増える」。そんな悩みの原因は、<Marker>代謝の低下</Marker>かもしれません。30代以降は年齢とともに基礎代謝が低下し、何もしなければ10年で約5%も消費カロリーが減少します。
        </p>
        <p className="mb-4">
          しかし、<Marker color="blue">食べるものを変えるだけで代謝を上げることは可能</Marker>です。食事誘発性熱産生（DIT）を高める食品、体温を上昇させる食品、筋肉の材料となるタンパク質。これらを意識的に摂取することで、「痩せやすい体」を食事で作ることができます。
        </p>
        <p className="mb-10">
          この記事では、代謝を上げる食べ物TOP15をランキング形式で紹介するとともに、代謝を下げてしまうNG食品、外食チェーン店での代謝アップメニューの選び方、そして1日の食事プランまで徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="代謝を上げる食材が並ぶカラフルな食卓"
        />

        {/* Section 1: 代謝が上がるとは */}
        <section className="mb-16">
          <SectionHeading id="what-is-metabolism">
            「代謝が上がる」とは？DIT・基礎代謝・NEATを理解する
          </SectionHeading>

          <p className="mb-4">
            「代謝」とひとくちに言っても、実は3つの要素に分かれます。これらを正しく理解することが、<Marker>代謝アップのための第一歩</Marker>です。
          </p>

          <NumberedList
            items={[
              {
                title: "基礎代謝（BMR）- 全体の約60〜70%",
                body: "呼吸、心臓の拍動、体温維持など、生きているだけで消費されるエネルギー。成人男性で約1,500kcal/日、成人女性で約1,200kcal/日が目安です。筋肉量が多いほど基礎代謝は高くなります。タンパク質を十分に摂取し、筋肉の維持・増強を図ることが基礎代謝アップの王道です。",
              },
              {
                title: "食事誘発性熱産生（DIT）- 全体の約10%",
                body: "食事を消化・吸収・代謝する際に消費されるエネルギー。タンパク質のDITは約30%、糖質は約6%、脂質は約4%と栄養素によって大きく異なります。1日のDITを最大化するには、高タンパクの食事を選ぶのが効果的です。",
              },
              {
                title: "NEAT（非運動性活動熱産生）- 全体の約20〜30%",
                body: "通勤、家事、立ち仕事、歩行など、運動以外の日常活動で消費されるエネルギー。NEATの個人差は1日200〜900kcalにもなり、痩せやすい人と太りやすい人の差はNEATに大きく関係しています。唐辛子や生姜などの食品は体温を上げてNEATを増加させる効果があります。",
              },
            ]}
          />

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">1日の消費カロリーの内訳（成人男性の例: 2,200kcal）</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-16 text-xs font-bold text-blue-600">基礎代謝</span>
                <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                  <div className="bg-blue-500 h-5 rounded-full" style={{ width: "65%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">約1,430kcal（65%）</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-16 text-xs font-bold text-green-600">NEAT</span>
                <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                  <div className="bg-green-500 h-5 rounded-full" style={{ width: "25%" }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">約550kcal（25%）</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-16 text-xs font-bold text-amber-600">DIT</span>
                <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                  <div className="bg-amber-500 h-5 rounded-full" style={{ width: "10%" }}></div>
                  <span className="absolute left-[12%] top-0 text-[10px] font-bold text-amber-800 leading-5">約220kcal（10%）</span>
                </div>
              </div>
            </div>
          </div>

          <TipBox title="食事で代謝を上げるアプローチ">
            <p>
              基礎代謝は筋肉量に依存するため、短期間では変えにくい要素です。一方、<Marker color="green">DITとNEATは食事内容を変えることで即効性が期待</Marker>できます。高タンパクの食事でDITを上げ、香辛料で体温を上げてNEATを増やす。この2つのアプローチが「食べて代謝を上げる」戦略の中核です。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 代謝を上げる食べ物TOP15 */}
        <section className="mb-16">
          <SectionHeading id="top15">
            代謝を上げる食べ物ランキングTOP15
          </SectionHeading>
          <p className="mb-6">
            DIT向上、体温上昇、筋肉維持の3つの観点から、<Marker>代謝を上げる効果が高い食べ物TOP15</Marker>を選定しました。日常的に取り入れやすい食材ばかりです。
          </p>

          <RankingCard
            rank={1}
            title="鶏むね肉"
            subtitle="高タンパクの王道 ・ DIT最大化"
          >
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-sky-50 rounded-lg py-2 px-3 text-center">
                <p className="text-sky-600 font-bold text-sm">108</p>
                <p className="text-sky-600 text-[10px]">kcal/100g</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3 text-center">
                <p className="text-blue-600 font-bold text-sm">23.3g</p>
                <p className="text-blue-600 text-[10px]">タンパク</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">1.9g</p>
                <p className="text-amber-600 text-[10px]">脂質</p>
              </div>
              <div className="bg-green-50 rounded-lg py-2 px-3 text-center">
                <p className="text-green-600 font-bold text-sm">0g</p>
                <p className="text-green-600 text-[10px]">炭水化物</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Marker>タンパク質含有率が約85%</Marker>と、全食品の中でもトップクラス。DITが30%なので、100kcal食べると約30kcalが消化に使われます。コンビニのサラダチキンなら手軽に摂取可能。毎食1品は鶏むね肉を取り入れたい食材です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="唐辛子（カプサイシン）"
            subtitle="体温上昇 ・ 脂肪燃焼促進"
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-red-50 rounded-lg py-2 px-3 text-center">
                <p className="text-red-600 font-bold text-sm">カプサイシン</p>
                <p className="text-red-600 text-[10px]">主要成分</p>
              </div>
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">+50kcal/日</p>
                <p className="text-amber-600 text-[10px]">消費UP目安</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              唐辛子に含まれるカプサイシンは、アドレナリンの分泌を促進し体温を上昇させます。2012年のChemical Sensesの研究では、<Marker color="blue">食事に唐辛子を加えると1日あたり約50kcalの追加消費</Marker>が確認されました。七味、タバスコ、キムチなどで手軽に摂取できます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="生姜（ジンゲロール・ショウガオール）"
            subtitle="体温上昇 ・ 血行促進"
          >
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-amber-50 rounded-lg py-2 px-3 text-center">
                <p className="text-amber-600 font-bold text-sm">ジンゲロール</p>
                <p className="text-amber-600 text-[10px]">生の状態</p>
              </div>
              <div className="bg-orange-50 rounded-lg py-2 px-3 text-center">
                <p className="text-orange-600 font-bold text-sm">ショウガオール</p>
                <p className="text-orange-600 text-[10px]">加熱後（より効果的）</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              生姜は加熱することでジンゲロールがショウガオールに変化し、<Marker color="green">体を深部から温める効果が強まります</Marker>。研究では生姜摂取後に基礎代謝が約20%上昇するデータも。味噌汁に生姜を入れる、生姜焼きを選ぶなど、日常的に取り入れやすい食材です。
            </p>
          </RankingCard>

          <SubSectionHeading>4位〜15位の代謝アップ食材</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "4位: 緑茶（カテキン＋カフェイン）", calories: 2, protein: 0.2, fat: 0, carbs: 0.3 },
              { name: "5位: 卵（完全栄養食）", calories: 151, protein: 12.3, fat: 10.3, carbs: 0.3, highlight: true },
              { name: "6位: 鮭（アスタキサンチン）", calories: 133, protein: 22.3, fat: 4.1, carbs: 0.1 },
              { name: "7位: ブロッコリー（ビタミンC＋食物繊維）", calories: 33, protein: 4.3, fat: 0.5, carbs: 5.2 },
              { name: "8位: 納豆（ナットウキナーゼ）", calories: 200, protein: 16.5, fat: 10.0, carbs: 12.1, highlight: true },
              { name: "9位: アーモンド（ビタミンE＋良質な脂質）", calories: 587, protein: 18.6, fat: 49.4, carbs: 21.7 },
              { name: "10位: ヨーグルト（腸内環境改善）", calories: 62, protein: 3.6, fat: 3.0, carbs: 4.9 },
              { name: "11位: 海藻類（ヨウ素→甲状腺機能）", calories: 15, protein: 1.5, fat: 0.2, carbs: 2.0 },
              { name: "12位: 赤身牛肉（L-カルニチン）", calories: 182, protein: 21.2, fat: 9.6, carbs: 0.5 },
              { name: "13位: コーヒー（カフェイン）", calories: 4, protein: 0.2, fat: 0, carbs: 0.7 },
              { name: "14位: シナモン（血糖値安定化）", calories: 364, protein: 3.6, fat: 3.5, carbs: 79.6 },
              { name: "15位: にんにく（アリシン）", calories: 136, protein: 6.4, fat: 0.9, carbs: 27.5 },
            ]}
          />
          <p className="text-xs text-gray-500 mt-2">
            ※栄養成分は100gあたり（緑茶・コーヒーは100mlあたり）。日本食品標準成分表2020年版（八訂）参照。
          </p>

          <div className="mt-6 bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">各食材の代謝アップメカニズム</p>
            <div className="space-y-3 text-sm text-gray-600">
              <p><strong className="text-gray-800">緑茶:</strong> カテキンとカフェインの相乗効果で脂肪酸化を促進。1日3〜5杯で約80kcalの追加消費（American Journal of Clinical Nutrition, 2005）。</p>
              <p><strong className="text-gray-800">卵:</strong> 完全栄養食品。ビタミンB群が糖質・脂質の代謝をサポート。朝食に卵を食べると1日の食欲が安定する研究結果も。</p>
              <p><strong className="text-gray-800">鮭:</strong> アスタキサンチンが抗酸化作用で細胞のミトコンドリア機能を活性化。オメガ3脂肪酸が脂肪燃焼を促進。</p>
              <p><strong className="text-gray-800">納豆:</strong> ナットウキナーゼが血流を改善し代謝を促進。大豆タンパク質でDITも上昇。朝食に1パック摂取が理想的。</p>
              <p><strong className="text-gray-800">コーヒー:</strong> カフェインが交感神経を活性化し、基礎代謝を3〜11%上昇させる。ただしブラックで飲むことが条件。</p>
            </div>
          </div>

          <TipBox title="効率的な食べ合わせテクニック">
            <p>
              代謝アップ食材は<Marker>組み合わせることで効果が倍増</Marker>します。例えば「鶏むね肉 + 唐辛子 + 生姜」のコンボは、高タンパクDIT + カプサイシン体温上昇 + ショウガオール血行促進のトリプル効果。コンビニなら「サラダチキン + 生姜入り味噌汁」が手軽です。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="代謝アップメニューをチェーン店で探す"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに検索できます"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&h=400&fit=crop"
          alt="代謝を下げる加工食品のイメージ"
        />

        {/* Section 3: 代謝を下げる食べ物ワースト5 */}
        <section className="mb-16">
          <SectionHeading id="worst5">
            代謝を下げる食べ物ワースト5
          </SectionHeading>
          <p className="mb-6">
            代謝を上げる食べ物を意識するだけでなく、<Marker>代謝を下げてしまう食べ物を避けること</Marker>も同じくらい重要です。以下の5つは、習慣的に摂取すると代謝を低下させる食品です。
          </p>

          <WarningBox title="代謝を下げるワースト5食品">
            <p className="mb-3">
              <strong>1位: トランス脂肪酸を含む加工食品</strong><br />
              マーガリン、ショートニング、一部の菓子パンに含まれるトランス脂肪酸は、細胞膜の機能を低下させ、インスリン抵抗性を高めます。Wake Forest大学の研究では、トランス脂肪酸を6年間摂取したサルは、同カロリーの不飽和脂肪酸を摂取したサルと比べて腹部脂肪が33%多く蓄積しました。
            </p>
            <p className="mb-3">
              <strong>2位: 精製糖（白砂糖・異性化糖）</strong><br />
              血糖値を急上昇させ、インスリンの大量分泌を招きます。インスリンは脂肪の蓄積を促進するホルモン。清涼飲料水1本（500ml）に含まれる砂糖は約50〜65g。WHO推奨の1日の遊離糖類摂取量（25g）を1本で大幅に超えます。
            </p>
            <p className="mb-3">
              <strong>3位: 過度なアルコール</strong><br />
              肝臓がアルコールの分解を優先するため、脂肪の代謝が一時停止します。ビール500ml 1杯で脂肪代謝が約73%低下するというデータも。さらにおつまみの高カロリー食品との相乗効果で脂肪蓄積が加速。
            </p>
            <p className="mb-3">
              <strong>4位: 小麦粉の過剰摂取（高GI食品）</strong><br />
              白いパン、うどん、パスタなど精製小麦のGI値は85〜91と非常に高い。血糖値の急上昇→急降下が繰り返されると、体はエネルギー不足と錯覚して代謝を下げます。
            </p>
            <p>
              <strong>5位: 人工甘味料（過剰摂取時）</strong><br />
              カロリーゼロでも、甘味を感じるとインスリンが分泌される「頭相反応」が起きます。また、腸内細菌叢を変化させて耐糖能を低下させる研究（Nature, 2014）もあります。
            </p>
          </WarningBox>

          <TipBox title="完全に避ける必要はない">
            <p>
              上記の食品を「完全にゼロにする」必要はありません。大切なのは<Marker>習慣的な過剰摂取を避けること</Marker>。週に1〜2回のスイーツやアルコールは、ストレス軽減の観点からもOKです。ストレスホルモン（コルチゾール）も代謝を下げる要因なので、我慢しすぎは逆効果です。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 外食で代謝を上げるメニュー選び */}
        <section className="mb-16">
          <SectionHeading id="eating-out">
            外食チェーン店で代謝を上げるメニュー選び
          </SectionHeading>
          <p className="mb-6">
            外食チェーン店でも代謝アップ食材を意識したメニュー選びは十分に可能です。<Marker>「高タンパク」「スパイス入り」「温かいメニュー」</Marker>の3つを基準に選びましょう。
          </p>

          <SubSectionHeading>吉野家 - 生姜焼き定食で代謝アップ</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">豚生姜焼き定食</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">652kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 28.5g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 22.3g</span>
            </div>
            <p className="text-sm text-gray-600">
              豚肉のビタミンB1（糖質代謝を促進）+ 生姜のショウガオール（体温上昇）のコンボ。牛丼より高タンパクでDITも高い。味噌汁の大豆タンパク質もプラス。<Link href="/guide/yoshinoya-diet" className="text-sky-600 hover:text-sky-800 underline">吉野家ダイエットガイド</Link>で詳しく解説。
            </p>
          </div>

          <SubSectionHeading>サイゼリヤ - 高タンパク×低価格</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">若鶏のグリル（ディアボラ風） + 小エビのサラダ</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約480kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 38.2g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 28.5g</span>
            </div>
            <p className="text-sm text-gray-600">
              ディアボラ風のスパイシーなソースにはにんにく・唐辛子が使われており代謝アップ効果あり。鶏肉の高タンパクでDITも上昇。<Marker>2品合わせて900円以下</Marker>とコスパも優秀。<Link href="/guide/saizeriya-diet" className="text-sky-600 hover:text-sky-800 underline">サイゼリヤダイエットガイド</Link>も参考にどうぞ。
            </p>
          </div>

          <SubSectionHeading>松屋 - キムチで手軽に代謝アップ</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">牛焼肉定食 + 豆腐キムチセット</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約720kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 35.0g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 28.8g</span>
            </div>
            <p className="text-sm text-gray-600">
              キムチのカプサイシン + 豆腐の大豆タンパク + 牛肉のL-カルニチン（脂肪燃焼を助けるアミノ酸）。松屋はキムチが無料トッピングなのでコスパも良好。<Link href="/guide/matsuya-diet" className="text-sky-600 hover:text-sky-800 underline">松屋ダイエットガイド</Link>もチェック。
            </p>
          </div>

          <SubSectionHeading>コンビニ - いつでも手軽に代謝アップ食</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">サラダチキン + 生姜入り味噌汁 + 緑茶</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">約180kcal</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">P 28.0g</span>
              <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-bold">F 3.5g</span>
            </div>
            <p className="text-sm text-gray-600">
              高タンパク（DIT）+ 生姜（体温上昇）+ 緑茶カテキン（脂肪酸化）のトリプル代謝アップコンボ。<Marker color="green">わずか180kcalで代謝アップの3要素をすべてカバー</Marker>。間食としてもおすすめです。
            </p>
          </div>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="バランスの取れた代謝アップ食事プレート"
        />

        {/* Section 5: 1日の代謝アップ食事例 */}
        <section className="mb-16">
          <SectionHeading id="daily-plan">
            1日の代謝アップ食事プラン
          </SectionHeading>
          <p className="mb-6">
            代謝を上げる食材を1日の食事に最大限取り入れた<Marker>モデルプラン</Marker>を紹介します。すべて外食・コンビニで実現可能です。
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-4 text-lg">代謝アップ1日食事プラン（約1,580kcal / P105g）</p>
            <div className="space-y-4">
              <div className="border-l-4 border-sky-400 pl-4">
                <p className="text-xs font-bold text-sky-600 mb-1">朝食（7:00）- 約380kcal / P28g</p>
                <p className="text-sm font-bold text-gray-800">ゆでたまご2個 + 納豆1パック + 味噌汁（わかめ＋生姜）+ 緑茶</p>
                <p className="text-xs text-gray-500 mt-1">代謝アップ食材: 卵（DIT）、納豆（ナットウキナーゼ）、生姜（体温上昇）、緑茶（カテキン）</p>
              </div>
              <div className="border-l-4 border-amber-400 pl-4">
                <p className="text-xs font-bold text-amber-600 mb-1">昼食（12:00）- 約580kcal / P35g</p>
                <p className="text-sm font-bold text-gray-800">大戸屋: 鶏むね肉と野菜の黒酢あん定食（五穀米）</p>
                <p className="text-xs text-gray-500 mt-1">代謝アップ食材: 鶏むね肉（高タンパクDIT）、黒酢（アミノ酸）、五穀米（低GI）</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-xs font-bold text-green-600 mb-1">間食（15:00）- 約200kcal / P18g</p>
                <p className="text-sm font-bold text-gray-800">サラダチキンバー + アーモンド10粒 + ブラックコーヒー</p>
                <p className="text-xs text-gray-500 mt-1">代謝アップ食材: 鶏むね肉（DIT）、アーモンド（ビタミンE）、コーヒー（カフェイン）</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="text-xs font-bold text-purple-600 mb-1">夕食（19:00）- 約420kcal / P24g</p>
                <p className="text-sm font-bold text-gray-800">鮭の塩焼き + 冷奴（生姜のせ）+ ほうれん草のおひたし + わかめスープ</p>
                <p className="text-xs text-gray-500 mt-1">代謝アップ食材: 鮭（アスタキサンチン）、生姜（ショウガオール）、海藻（ヨウ素）</p>
              </div>
            </div>
          </div>

          <TipBox title="飲み物でも代謝アップ">
            <p>
              食事だけでなく飲み物も代謝アップに貢献します。<Marker>緑茶を1日3〜5杯、ブラックコーヒーを1日2〜3杯</Marker>飲むことで、合計約120〜180kcalの追加消費が期待できます。ただし、カフェインの摂りすぎは睡眠の質を下げるので、15時以降はカフェインレスを選びましょう。水は1日2リットルが目安です。
            </p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="代謝アップメニューを外食で見つけよう"
          subtitle="たべなびでチェーン店の高タンパクメニューを簡単検索"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            代謝を上げる食べ物と食事戦略の要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "代謝は基礎代謝（60〜70%）、NEAT（20〜30%）、DIT（10%）の3要素",
              "鶏むね肉・唐辛子・生姜がTOP3。高タンパクDIT＋体温上昇のダブル効果を狙う",
              "緑茶3〜5杯で約80kcal、唐辛子で約50kcalの追加消費が期待できる",
              "トランス脂肪酸・精製糖・過度なアルコールは代謝を下げる要因",
              "外食でも「高タンパク・スパイス入り・温かいメニュー」を選べば代謝アップ可能",
              "食材の組み合わせ（鶏むね肉+唐辛子+生姜）で相乗効果を狙う",
            ]}
          />

          <div className="mt-8 p-5 bg-sky-50 rounded-lg border border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              代謝を上げる食事法をさらに深く知りたい方は、以下の関連記事もおすすめです。
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guide/eat-and-lose" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  食べて痩せるダイエット完全ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/pfc-guide" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  PFCバランス入門ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/eating-order" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  太らない食べ順ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/protein-cost-ranking" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  タンパク質コスパランキング
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            ※効果には個人差があります。持病がある方は医師に相談の上で食事内容を変更してください。引用した研究データは一般的な傾向を示すものであり、すべての方に同様の効果を保証するものではありません。
          </p>
        </section>

        {/* Article Footer */}
        <ArticleFooter currentSlug="metabolism-boost-foods" />

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
