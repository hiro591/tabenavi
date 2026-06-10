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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/no-exercise-diet" },
  title:
    "【2026年最新】運動なしで痩せる！食事だけで確実に体重を落とす方法 | たべなび",
  description:
    "運動なしで痩せる方法を科学的根拠とともに徹底解説。CICO原則に基づくカロリー計算、外食中心でも実践できる食事プラン、避けるべき食事パターンまで。食事だけで確実に体重を落とす具体的な方法を紹介します。",
  keywords: [
    "ダイエット 運動なし",
    "食事だけ 痩せる",
    "運動しない ダイエット",
    "カロリー制限 やり方",
    "食事制限 痩せる",
    "外食 ダイエット 運動なし",
  ],
  openGraph: {
    title:
      "【2026年最新】運動なしで痩せる！食事だけで確実に体重を落とす方法",
    description:
      "運動なしでも食事管理だけで痩せられる科学的根拠を解説。外食中心でも実践できる具体的な食事プランを紹介。",
    url: "https://www.tabenavi.jp/guide/no-exercise-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】運動なしで痩せる！食事だけで確実に体重を落とす方法",
  description:
    "運動なしでも食事管理だけで痩せられる科学的根拠と実践方法を解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/no-exercise-diet",
};

const tocItems = [
  { id: "science", label: "運動なしで痩せられる科学的根拠" },
  { id: "calorie-calc", label: "1日の摂取カロリーの決め方" },
  { id: "meal-plan", label: "外食中心でも実践できる食事プラン" },
  { id: "avoid", label: "避けるべき食事パターン" },
  { id: "caution", label: "運動なしダイエットの注意点" },
  { id: "rules", label: "成功のための5つのルール" },
  { id: "summary", label: "まとめ" },
];

export default function NoExerciseDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="運動なしで痩せる！食事だけダイエット"
        subtitle="食事管理だけで確実に体重を落とす方法【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="運動なしダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="no-exercise-diet">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 11分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「運動なしで痩せるなんて無理」と思っていませんか？実は、<Marker>体重の減少の8割は食事で決まる</Marker>と言われています。運動しないダイエットは科学的にも十分成立する方法であり、忙しくて運動する時間がない方や、膝や腰に不安がある方にも実践可能です。
        </p>
        <p className="mb-4">
          この記事では、運動なしで食事だけで確実に痩せるための方法を、<Marker color="blue">科学的根拠（CICO原則）に基づいて</Marker>徹底解説します。カロリー計算の具体的な方法から、外食中心でも実践できる食事プラン、避けるべき食事パターンまで、すぐに使える実践的な内容です。
        </p>
        <p className="mb-10">
          <Link href="/guide/eating-out-diet" className="text-sky-500 hover:text-sky-600">外食ダイエット</Link>や<Link href="/guide/recording-diet" className="text-sky-500 hover:text-sky-600">レコーディングダイエット</Link>と組み合わせれば、さらに効果的です。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="ヘルシーな食事のイメージ"
        />

        {/* Section 1: 科学的根拠 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"運動なしで痩せることは可能ですか？"}
          answer={"はい、可能です。体重減少の約8割は食事で決まり、CICO原則（摂取カロリー<消費カロリー）に基づいて食事を管理すれば必ず痩せます。運動で30分間に消費できるカロリーはおにぎり1個程度に過ぎず、食事管理の方が効率的です。"}
        />

        <SectionHeading id="science">
            運動なしで痩せられる科学的根拠
          </SectionHeading>

          <SubSectionHeading>CICO原則とは</SubSectionHeading>
          <p className="mb-4">
            ダイエットの基本原則は<Marker>CICO（Calories In, Calories Out）</Marker>です。摂取カロリー（Calories In）が消費カロリー（Calories Out）を下回れば、体は不足分を体脂肪から補うため、必ず痩せます。これは熱力学の第一法則に基づく、覆しようのない物理法則です。
          </p>
          <p className="mb-4">
            つまり、運動をしなくても、食事で摂るカロリーを消費カロリー以下に抑えれば体重は確実に減ります。運動は消費カロリーを増やす手段の一つに過ぎず、<Marker color="blue">食事管理はカロリー収支をコントロールする最も効率的な方法</Marker>なのです。
          </p>

          <SubSectionHeading>運動で消費できるカロリーは意外と少ない</SubSectionHeading>
          <p className="mb-4">
            「ダイエット=運動」というイメージが強いですが、実際に運動で消費できるカロリーは多くの人が思っているよりずっと少ないのが現実です。
          </p>

          <ComparisonTable
            headers={["運動（30分間）", "消費カロリー", "食品換算"]}
            rows={[
              ["ウォーキング（時速5km）", "約130kcal", "おにぎり約0.7個分"],
              ["ジョギング（時速8km）", "約250kcal", "おにぎり約1.3個分"],
              ["水泳（クロール）", "約300kcal", "おにぎり約1.6個分"],
              ["自転車（時速15km）", "約180kcal", "おにぎり約1個分"],
              ["筋トレ（中強度）", "約150kcal", "おにぎり約0.8個分"],
            ]}
          />

          <p className="mb-4">
            30分のジョギングで消費できるのは約250kcal。これは<Marker>おにぎり1.3個分、コンビニのメロンパン半分程度</Marker>に相当します。一方、食事で250kcalを減らすのは、ご飯を1杯（150g）減らすだけ。食事管理の方がはるかに効率的であることが分かります。
          </p>

          <TipBox title="1kgの脂肪を落とすには何kcal必要？">
            <p>
              体脂肪1kgを落とすには約<Marker>7,200kcalの赤字</Marker>が必要です。1日に500kcalの赤字を作れば、約14日で1kg減量できる計算です。運動なしでも、食事で500kcalを減らすだけで月に約2kgのペースで痩せられます。
            </p>
          </TipBox>

          <SubSectionHeading>「食事8割・運動2割」の法則</SubSectionHeading>
          <p className="mb-4">
            アメリカの肥満研究専門誌に掲載された研究では、体重減少に対する食事と運動の寄与度を分析した結果、<Marker>食事制限が約80%、運動が約20%</Marker>という結果が報告されています。つまり、運動なしでもダイエット効果の大部分は達成可能です。
          </p>
          <p className="mb-4">
            特にBMI25以上の方の場合、まず食事管理で体重を落とし、ある程度減量してから運動を取り入れる方が、関節への負担も少なく安全です。
          </p>
        </section>

        {/* Section 2: カロリー計算 */}
        <section className="mb-16">
          <SectionHeading id="calorie-calc">
            1日の摂取カロリーの決め方
          </SectionHeading>

          <SubSectionHeading>ステップ1：基礎代謝を計算する</SubSectionHeading>
          <p className="mb-4">
            まず、自分の基礎代謝（何もしなくても消費するカロリー）を計算します。最も広く使われているのが<Marker>ハリス・ベネディクト方程式</Marker>です。
          </p>

          <TipBox title="基礎代謝の計算式">
            <p className="mb-2">
              <strong>男性</strong>：88.362 + (13.397 x 体重kg) + (4.799 x 身長cm) - (5.677 x 年齢)
            </p>
            <p className="mb-2">
              <strong>女性</strong>：447.593 + (9.247 x 体重kg) + (3.098 x 身長cm) - (4.330 x 年齢)
            </p>
            <p className="mb-2 mt-3">
              <strong>計算例（30歳男性・身長170cm・体重75kg）</strong>
            </p>
            <p>
              88.362 + (13.397 x 75) + (4.799 x 170) - (5.677 x 30) = <Marker>約1,730kcal</Marker>
            </p>
          </TipBox>

          <SubSectionHeading>ステップ2：活動代謝を計算する</SubSectionHeading>
          <p className="mb-4">
            基礎代謝に活動係数をかけて、1日の総消費カロリー（TDEE）を算出します。運動なしの場合は<Marker color="blue">活動係数1.2（座位中心の生活）</Marker>を使います。
          </p>

          <ComparisonTable
            headers={["活動レベル", "活動係数", "具体例"]}
            rows={[
              ["座位中心", "1.2", "デスクワーク、運動なし"],
              ["軽い活動", "1.375", "軽い運動を週1〜3回"],
              ["中程度の活動", "1.55", "運動を週3〜5回"],
              ["活動的", "1.725", "激しい運動を週6〜7回"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            先ほどの例で計算すると、TDEE = 1,730 x 1.2 = <Marker>約2,076kcal</Marker>となります。
          </p>

          <SubSectionHeading>ステップ3：目標摂取カロリーを設定する</SubSectionHeading>
          <p className="mb-4">
            TDEEから300〜500kcalを引いた値が、運動なしダイエットの目標摂取カロリーです。
          </p>

          <NumberedList
            items={[
              {
                title: "ゆっくり減量（月1〜1.5kg）：TDEE - 300kcal",
                body: "筋肉量の維持を重視する場合に最適。上記の例なら1日約1,776kcal。ストレスが少なく継続しやすい。",
              },
              {
                title: "標準的な減量（月1.5〜2kg）：TDEE - 500kcal",
                body: "最もバランスの良い設定。上記の例なら1日約1,576kcal。多くの人におすすめ。",
              },
              {
                title: "急速な減量（月2〜3kg）：TDEE - 700kcal",
                body: "上記の例なら1日約1,376kcal。短期間で結果を出したい場合に。ただし筋肉量の低下リスクがある。",
              },
            ]}
          />

          <WarningBox title="基礎代謝を下回らないこと">
            <p>
              どんなに急いで痩せたくても、<Marker>摂取カロリーを基礎代謝以下にしてはいけません</Marker>。基礎代謝以下の食事は代謝の大幅な低下、筋肉の分解、栄養失調のリスクがあります。上記の例なら1,730kcal以下を下限としてください。長期的にはリバウンドの原因にもなります。
            </p>
          </WarningBox>
        </section>

        <CTABanner
          title="外食メニューのカロリーを簡単チェック"
          subtitle="たべなびなら32チェーン・6,000品以上の栄養データが無料で使える"
        />

        {/* Section 3: 外食中心の食事プラン */}
        <section className="mb-16">
          <SectionHeading id="meal-plan">
            外食中心でも実践できる食事プラン
          </SectionHeading>

          <p className="mb-6">
            「運動なしで食事だけ痩せる」を外食中心で実践するための具体的な食事プランを、<Marker>1日1,600kcal目標</Marker>で紹介します。全てチェーン店で揃えられるメニューです。
          </p>

          <SubSectionHeading>プランA：定食スタイル（和食中心）</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/ootoya-diet" className="text-sky-500 hover:text-sky-600">大戸屋</Link>ややよい軒などの定食チェーンを活用するプランです。栄養バランスが良く、食事だけで痩せるダイエットに最適です。
          </p>

          <NutritionTable
            items={[
              { name: "朝：セブンイレブン たまごサンド", calories: 298, protein: 10.2, fat: 16.5, carbs: 26.8 },
              { name: "昼：大戸屋 鶏むね肉と野菜の黒酢あん定食", calories: 580, protein: 28.5, fat: 12.8, carbs: 82.3, highlight: true },
              { name: "夜：やよい軒 しまほっけ定食（ご飯少なめ）", calories: 485, protein: 30.2, fat: 14.5, carbs: 55.8, highlight: true },
              { name: "間食：ギリシャヨーグルト", calories: 100, protein: 10.0, fat: 0.5, carbs: 12.5 },
            ]}
            highlightProtein
          />

          <p className="mb-6 text-sm text-gray-600">
            合計：約1,463kcal / P:78.9g / F:44.3g / C:177.4g
          </p>

          <SubSectionHeading>プランB：コンビニ活用スタイル</SubSectionHeading>
          <p className="mb-4">
            忙しい方向けに、<Link href="/guide/seven-eleven-diet" className="text-sky-500 hover:text-sky-600">コンビニ商品</Link>だけで組み立てるプランです。カロリー表示が正確なので、運動しないダイエットでのカロリー管理が簡単です。
          </p>

          <NutritionTable
            items={[
              { name: "朝：おにぎり（鮭）+ 味噌汁", calories: 248, protein: 7.5, fat: 2.8, carbs: 48.2 },
              { name: "昼：サラダチキン + 雑穀おにぎり + サラダ", calories: 420, protein: 32.5, fat: 5.2, carbs: 58.6, highlight: true },
              { name: "夜：幕の内弁当（ミニサイズ）", calories: 520, protein: 18.8, fat: 15.2, carbs: 72.5 },
              { name: "間食：プロテインバー", calories: 185, protein: 15.0, fat: 8.5, carbs: 15.2 },
            ]}
            highlightProtein
          />

          <p className="mb-6 text-sm text-gray-600">
            合計：約1,373kcal / P:73.8g / F:31.7g / C:194.5g
          </p>

          <SubSectionHeading>プランC：ファミレス活用スタイル</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/family-restaurant-diet" className="text-sky-500 hover:text-sky-600">ファミレス</Link>は栄養情報が充実しており、メニューの選択肢も広いため、食事だけダイエットに向いています。
          </p>

          <NutritionTable
            items={[
              { name: "朝：サブウェイ ローストチキン（ウィートブレッド）", calories: 282, protein: 22.5, fat: 4.8, carbs: 38.6, highlight: true },
              { name: "昼：ガスト 若鶏のグリル 大葉おろしの醤油ソース", calories: 398, protein: 35.2, fat: 12.5, carbs: 32.8, highlight: true },
              { name: "夜：サイゼリヤ 若鶏のディアボラ風 + 小エビのサラダ", calories: 610, protein: 32.8, fat: 28.5, carbs: 52.3 },
              { name: "間食：ナッツ（25g）", calories: 155, protein: 5.2, fat: 13.5, carbs: 3.8 },
            ]}
            highlightProtein
          />

          <p className="mb-6 text-sm text-gray-600">
            合計：約1,445kcal / P:95.7g / F:59.3g / C:127.5g
          </p>

          <TipBox title="食事だけで痩せるためのPFCバランス">
            <p>
              運動なしダイエットでは<Link href="/guide/pfc-guide" className="text-sky-500 hover:text-sky-600">PFCバランス</Link>が特に重要です。推奨比率は<Marker>P（タンパク質）30% : F（脂質）25% : C（炭水化物）45%</Marker>。タンパク質を多めに摂ることで、筋肉量の維持と満腹感の持続が期待できます。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="バランスの良い食事プレート"
        />

        {/* Section 4: 避けるべき食事パターン */}
        <section className="mb-16">
          <SectionHeading id="avoid">
            避けるべき食事パターン
          </SectionHeading>

          <p className="mb-6">
            運動なしで食事だけ痩せる場合、カロリーだけでなく<Marker>食事の質</Marker>も重要です。以下のパターンは避けてください。
          </p>

          <SubSectionHeading>パターン1：極端な糖質制限</SubSectionHeading>
          <p className="mb-4">
            糖質を極端にカットすると、短期的には体重が落ちますが、その多くは水分です。糖質1gは約3gの水分と結合しているため、糖質を減らすと水分が排出されて体重が減りますが、<Marker>脂肪はほとんど減っていません</Marker>。また、脳のエネルギー源であるブドウ糖が不足し、集中力低下や倦怠感を招きます。
          </p>

          <SubSectionHeading>パターン2：1日1食ダイエット</SubSectionHeading>
          <p className="mb-4">
            「食べる回数を減らせば痩せる」と思いがちですが、1日1食にすると<Marker color="blue">血糖値の急上昇・急降下</Marker>が起き、脂肪蓄積が促進されます。また、1食で大量に食べることになるため、胃腸への負担も大きく、栄養の吸収効率も悪化します。
          </p>
          <p className="mb-4">
            運動しないダイエットでは、1日3食を規則正しく食べ、各食事のカロリーをコントロールする方が効果的です。
          </p>

          <SubSectionHeading>パターン3：置き換えダイエットのみ</SubSectionHeading>
          <p className="mb-4">
            プロテインシェイクやダイエット食品だけの食事は、短期的には痩せますが持続できません。通常の食事に戻した途端にリバウンドするケースが大半です。<Marker>普段の外食や自炊の中でカロリーを管理する</Marker>スキルを身につけることが、長期的な成功の鍵です。
          </p>

          <SubSectionHeading>パターン4：「低カロリー」食品ばかり食べる</SubSectionHeading>
          <p className="mb-4">
            こんにゃく、サラダ、豆腐ばかりの食事は栄養が偏り、代謝が低下します。特にタンパク質不足は<Marker>筋肉量の低下を加速させ、基礎代謝を下げる</Marker>原因になります。カロリーを抑えつつ、栄養バランスは保つことが大切です。
          </p>

          <WarningBox title="「ゼロカロリー」の落とし穴">
            <p>
              ゼロカロリー飲料やゼロカロリーゼリーは、カロリーこそ低いものの、人工甘味料が甘味への欲求を増大させることが研究で指摘されています。完全に避ける必要はありませんが、<Marker>水やお茶を基本の飲み物にする</Marker>方が、長期的なダイエット成功率は高くなります。
            </p>
          </WarningBox>

          <ComparisonTable
            headers={["避けるべきパターン", "問題点", "代わりにすべきこと"]}
            rows={[
              ["極端な糖質制限", "水分が減るだけ・脳機能低下", "適度な糖質摂取（体重x3〜4g）"],
              ["1日1食", "血糖値急変動・栄養吸収悪化", "1日3食で均等にカロリー配分"],
              ["置き換えのみ", "リバウンド確実", "通常食でカロリー管理を習慣化"],
              ["低カロリー偏食", "筋肉低下・代謝低下", "タンパク質を体重x1.2〜1.5g確保"],
            ]}
          />
        </section>

        {/* Section 5: 注意点 */}
        <section className="mb-16">
          <SectionHeading id="caution">
            運動なしダイエットの注意点
          </SectionHeading>

          <SubSectionHeading>最大のリスク：筋肉量の低下</SubSectionHeading>
          <p className="mb-4">
            運動なしで食事だけ痩せる場合、最大のリスクは<Marker>筋肉量の低下</Marker>です。カロリー制限中は体脂肪と一緒に筋肉も分解されます。運動（特に筋トレ）なしだと、減量分の20〜30%が筋肉になるというデータもあります。
          </p>
          <p className="mb-4">
            筋肉が減ると基礎代謝が低下し、<Marker color="blue">同じカロリーを食べても太りやすい体</Marker>になってしまいます。これがリバウンドの最大の原因です。
          </p>

          <SubSectionHeading>筋肉量を維持するための食事戦略</SubSectionHeading>
          <p className="mb-4">
            運動なしでも、食事戦略で筋肉量の低下をある程度抑えることは可能です。
          </p>

          <NumberedList
            items={[
              {
                title: "タンパク質を体重x1.2〜1.6g摂取する",
                body: "体重65kgなら1日78〜104gのタンパク質が必要。これはサラダチキン3〜4個分に相当します。毎食25〜35gのタンパク質を意識しましょう。",
              },
              {
                title: "カロリー制限を緩やかにする",
                body: "急激な減量ほど筋肉の分解が進みます。TDEEからの赤字は500kcal以内に抑え、月2kg以内のペースで減量しましょう。",
              },
              {
                title: "食事回数を3〜4回に分ける",
                body: "タンパク質は1回の食事で吸収できる量に限りがあります。3〜4回に分けて摂取することで、筋肉合成の機会を増やせます。",
              },
              {
                title: "日常の活動量を上げる",
                body: "「運動」はしなくても、階段を使う、1駅歩くなど日常の活動量（NEAT）を上げることで筋肉への刺激を維持できます。",
              },
            ]}
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1432139509613-5c4255a1d916?w=800&h=400&fit=crop"
            alt="高タンパクな食事のイメージ"
          />

          <SubSectionHeading>代謝の低下（適応熱産生）への対策</SubSectionHeading>
          <p className="mb-4">
            カロリー制限を続けると、体は徐々に消費カロリーを下げて適応します。これを「適応熱産生」と呼びます。<Marker>運動なしダイエットでは特にこの影響が大きい</Marker>ため、以下の対策が重要です。
          </p>

          <CheckList
            items={[
              "2〜3ヶ月に1度、1〜2週間のダイエット休止期間（メンテナンスカロリー摂取）を設ける",
              "チートデイを適切な頻度で取り入れる（レプチンの回復効果）",
              "水分を1日2リットル以上摂り、代謝を維持する",
              "睡眠を7〜8時間確保する（睡眠不足は代謝を5〜20%低下させる）",
              "カフェイン（コーヒー、緑茶）を適度に摂る（代謝を3〜11%上げる効果）",
            ]}
          />

          <TipBox title="「ダイエット休止期間」の効果">
            <p>
              タスマニア大学の研究（2018年）では、2週間の制限と2週間の休止を交互に繰り返したグループは、16週間連続で制限したグループより<Marker>体脂肪が約50%多く減少</Marker>し、基礎代謝の低下も少なかったことが報告されています。<Link href="/guide/diet-plateau" className="text-sky-500 hover:text-sky-600">停滞期の乗り越え方</Link>としても有効な手法です。
            </p>
          </TipBox>
        </section>

        <CTABanner
          title="食事だけダイエットを始めよう"
          subtitle="たべなびでカロリー管理をもっと手軽に"
        />

        {/* Section 6: 成功のための5つのルール */}
        <section className="mb-16">
          <SectionHeading id="rules">
            成功のための5つのルール
          </SectionHeading>

          <p className="mb-6">
            運動なしで食事だけ痩せるダイエットを成功させるために、必ず守りたい5つのルールを紹介します。
          </p>

          <SubSectionHeading>ルール1：毎日の食事を記録する</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/recording-diet" className="text-sky-500 hover:text-sky-600">レコーディングダイエット</Link>の効果は科学的に実証されています。アメリカの研究では、食事を記録するだけで<Marker>体重減少量が2倍になった</Marker>という結果が出ています。たべなびなどのアプリを使えば、外食メニューのカロリーを簡単に記録できます。
          </p>

          <SubSectionHeading>ルール2：タンパク質ファースト</SubSectionHeading>
          <p className="mb-4">
            毎食必ずタンパク質を最初に食べましょう。タンパク質は消化に最もエネルギーを使う栄養素で、<Marker color="blue">食事誘発性熱産生（DIT）が炭水化物の2倍以上</Marker>あります。つまり、同じカロリーでもタンパク質中心の食事の方が実質的な摂取カロリーが少なくなります。
          </p>

          <SubSectionHeading>ルール3：食べる順番を守る</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/eating-order" className="text-sky-500 hover:text-sky-600">食べ順ダイエット</Link>を取り入れましょう。野菜・汁物 → タンパク質 → 炭水化物の順番で食べることで、血糖値の急上昇を防ぎ、<Marker>同じメニューでも脂肪になりにくく</Marker>なります。
          </p>

          <SubSectionHeading>ルール4：週に1回は体の変化を確認する</SubSectionHeading>
          <p className="mb-4">
            体重は毎日変動するため、一喜一憂しないことが大切です。<Marker>週1回、同じ条件（朝起床後・排泄後）で測定</Marker>し、1〜2週間の平均値で判断しましょう。体重だけでなく、ウエストサイズや服のフィット感も参考になります。
          </p>

          <SubSectionHeading>ルール5：完璧を目指さない</SubSectionHeading>
          <p className="mb-4">
            毎日完璧にカロリーを守る必要はありません。<Marker color="green">週単位でカロリー収支を管理</Marker>すれば十分です。1日食べ過ぎても、残りの日で調整すればOK。80%達成できていれば十分に結果は出ます。完璧主義はダイエット挫折の最大の原因です。
          </p>

          <NumberedList
            items={[
              {
                title: "ルール1：毎日の食事を記録する",
                body: "記録するだけで食事量が自然と適正化される。たべなびで外食の栄養データを活用。",
              },
              {
                title: "ルール2：タンパク質ファースト",
                body: "毎食25〜35gのタンパク質を最初に食べる。満腹感の持続と筋肉量の維持に直結。",
              },
              {
                title: "ルール3：食べる順番を守る",
                body: "野菜→タンパク質→炭水化物の順番で血糖値コントロール。",
              },
              {
                title: "ルール4：週1回の測定",
                body: "同じ条件で週1回測定。体重・ウエスト・見た目の変化を総合的に判断。",
              },
              {
                title: "ルール5：80%の達成率でOK",
                body: "週単位でカロリー管理。完璧主義は挫折のもと。",
              },
            ]}
          />
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
          alt="バランスの良い和食のイメージ"
        />

        {/* Section 7: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-4">
            運動なしで食事だけ痩せることは、科学的に十分可能です。CICO原則に基づき、<Marker>消費カロリー以下の食事を続ければ、体重は確実に減ります</Marker>。重要なのは、正しいカロリー計算と、栄養バランスを保った食事管理です。
          </p>
          <p className="mb-6">
            外食中心の生活でも、チェーン店の栄養データを活用すれば精度の高いカロリー管理が可能です。まずは自分のTDEEを計算し、そこから500kcal引いた値を目標摂取カロリーに設定するところから始めてみましょう。<Link href="/guide/cheat-day" className="text-sky-500 hover:text-sky-600">チートデイ</Link>を適切に取り入れることで、停滞期も乗り越えられます。
          </p>

          <CheckList
            items={[
              "体重減少の8割は食事で決まる（運動は2割）",
              "CICO原則：摂取カロリー < 消費カロリーで必ず痩せる",
              "目標カロリー = TDEE - 500kcal（月約2kgペース）",
              "タンパク質は体重x1.2〜1.6g確保して筋肉量を維持",
              "食事記録で体重減少量が2倍に（レコーディングダイエット）",
              "外食チェーンの栄養データを活用すれば正確な管理が可能",
              "週単位でカロリー管理、80%の達成率でOK",
              "基礎代謝を下回るカロリー制限は絶対NG",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※効果には個人差があります。持病のある方は医師にご相談ください。
          </p>
        </section>

        <FAQSection
          slug="no-exercise-diet"
          items={[
            { q: "1日の目標摂取カロリーはどう決めるのか", a: "基礎代謝をハリス・ベネディクト方程式で計算し、活動係数1.2を掛けて総消費カロリー（TDEE）を出します。そこから300～500kcal引いた値が目標です。例：体重75kg・30歳男性は約1,730kcal基礎代謝→約2,076kcal総消費→目標1,576kcal（月2kg減）。" },
            { q: "食事だけダイエットで筋肉が減らないようにするには", a: "タンパク質を体重1kgあたり1.2～1.6g摂取し、毎食25～35g意識的に取ります。カロリー赤字は月2kg以内、食事を3～4回に分けて摂取、階段利用など日常活動を増やすことで筋肉への刺激を維持できます。" },
            { q: "運動なしダイエットで避けるべき食事パターンは何か", a: "極端な糖質制限（水分減少のみで脂肪はほぼ減らない）、1日1食（血糖値急変動）、置き換えダイエットのみ（リバウンド確実）、低カロリー偏食（筋肉低下）。通常食でカロリー管理する習慣が長期成功の鍵です。" },
            { q: "外食チェーンでカロリー管理しながら痩せられるか", a: "できます。セブンイレブン、大戸屋、やよい軒、ガスト、サイゼリヤなど栄養データ充実のチェーンを活用すれば1日1,600kcal程度で管理可能。例えば朝卵サンド298kcal→昼黒酢あん定食580kcal→夜ほっけ定食485kcalで構成できます。" },
            { q: "カロリー制限で代謝が低下する（適応熱産生）対策は", a: "2～3ヶ月ごとに1～2週間のダイエット休止（メンテナンスカロリー摂取）、チートデイの活用、水分1日2ℓ以上、7～8時間睡眠確保、コーヒー・緑茶でカフェイン摂取が有効とされています。研究により、交互方式は継続的なカロリー制限と比べて効果がある可能性が示唆されていますが、個人差が大きいため注意が必要です。" },
          ]}
        />

        <ArticleFooter currentSlug="no-exercise-diet" />

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
