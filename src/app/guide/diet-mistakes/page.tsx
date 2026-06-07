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
  alternates: { canonical: "https://www.tabenavi.jp/guide/diet-mistakes" },
  title:
    "【2026年最新】ダイエットで絶対やってはいけないこと10選｜失敗する人の共通点 | たべなび",
  description:
    "ダイエットで失敗する人がやりがちな間違い10選を徹底解説。極端なカロリー制限、朝食抜き、脂質完全カットなど、科学的根拠とともにNG行動と正しい対策を紹介します。",
  keywords: [
    "ダイエット やってはいけない",
    "ダイエット 失敗",
    "ダイエット 間違い",
    "ダイエット NG",
    "ダイエット リバウンド 原因",
    "痩せない 原因",
  ],
  openGraph: {
    title:
      "【2026年最新】ダイエットで絶対やってはいけないこと10選｜失敗する人の共通点",
    description:
      "ダイエット失敗者に共通するNG行動10選。科学的根拠とともに正しい対策を完全解説。",
    url: "https://www.tabenavi.jp/guide/diet-mistakes",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ダイエットで絶対やってはいけないこと10選｜失敗する人の共通点",
  description:
    "ダイエットで失敗する人がやりがちな間違い10選を科学的根拠とともに解説。正しいダイエットの5原則も紹介。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/diet-mistakes",
};

const tocItems = [
  { id: "failure-rate", label: "ダイエット失敗率の現実" },
  { id: "mistakes-10", label: "やってはいけないこと10選" },
  { id: "correct-principles", label: "正しいダイエットの5原則" },
  { id: "eating-out-works", label: "外食ダイエットなら続けられる理由" },
  { id: "summary", label: "まとめ" },
];

export default function DietMistakesPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ダイエットで絶対やってはいけないこと10選"
        subtitle="失敗する人の共通点【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
        breadcrumb="ダイエットの間違い10選"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="diet-mistakes">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 12分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「何度ダイエットしても痩せない」「痩せてもすぐリバウンドする」。そんな経験はありませんか？実は、ダイエットに失敗する人には<Marker>共通のNG行動パターン</Marker>が存在します。
        </p>
        <p className="mb-4">
          問題なのは「意志が弱い」ことではなく、<Marker color="blue">間違った方法でダイエットをしている</Marker>ことです。極端なカロリー制限、朝食抜き、脂質の完全カット。一見効果がありそうなこれらの行動が、実は代謝を下げ、リバウンドを引き起こし、ダイエットを失敗に導いています。
        </p>
        <p className="mb-10">
          この記事では、ダイエットで絶対にやってはいけないこと10選を科学的根拠とともに解説し、代わりに実践すべき正しいダイエットの5原則を紹介します。この記事を読めば、なぜ今まで失敗していたのか、そしてこれからどうすれば成功できるのかが明確になります。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
          alt="食卓に並ぶ食事のイメージ"
        />

        {/* Section 1: ダイエット失敗率の現実 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ダイエットに失敗する人の共通点は何ですか？"}
          answer={"ダイエット失敗者の最大原因は「間違った方法」です。極端なカロリー制限・朝食抜き・脂質完全カット・完璧主義など、科学的根拠のないNG行動を続けると、基礎代謝が低下してリバウンドしやすくなります。UCLA研究によると5年以内にリバウンドする率は80%。適度なカロリー赤字・高タンパク・十分な睡眠など科学的に正しい方法を選ぶことが成功の鍵です。"}
        />

        <SectionHeading id="failure-rate">
            ダイエット失敗率の衝撃的な現実
          </SectionHeading>

          <p className="mb-4">
            まず、ダイエットの失敗率がどれほど高いかを知っておきましょう。UCLAの研究者Traci Mannらが2007年に発表したメタ分析によると、<Marker>ダイエット参加者の約80%が5年以内にリバウンド</Marker>しています。さらにその約半数は、ダイエット前よりも体重が増加していました。
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">ダイエット失敗の統計データ</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-red-600 font-bold text-3xl">80%</p>
                <p className="text-xs text-gray-600 mt-1">5年以内にリバウンドする割合</p>
                <p className="text-[10px] text-gray-400">UCLA, 2007</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <p className="text-amber-600 font-bold text-3xl">95%</p>
                <p className="text-xs text-gray-600 mt-1">極端な食事制限ダイエットの失敗率</p>
                <p className="text-[10px] text-gray-400">NEJM, 2011</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-4 text-center">
                <p className="text-sky-600 font-bold text-3xl">2/3</p>
                <p className="text-xs text-gray-600 mt-1">リバウンドで元より太る人の割合</p>
                <p className="text-[10px] text-gray-400">Mann et al., 2007</p>
              </div>
            </div>
          </div>

          <p className="mb-4">
            なぜこれほど多くの人がダイエットに失敗するのでしょうか？その最大の原因は、<Marker>「正しいと思い込んでいるNG行動」</Marker>を続けてしまうことにあります。以下の10項目に1つでも心当たりがある方は、今すぐ改善しましょう。
          </p>

          <WarningBox title="あなたのダイエット、大丈夫？">
            <p>
              以下の10項目のうち、3つ以上に該当する場合は、ダイエットの方法自体を見直す必要があります。該当数が多いほどリバウンドリスクが高い状態です。
            </p>
          </WarningBox>
        </section>

        {/* Section 2: やってはいけないこと10選 */}
        <section className="mb-16">
          <SectionHeading id="mistakes-10">
            ダイエットでやってはいけないこと10選
          </SectionHeading>

          {/* Mistake 1 */}
          <SubSectionHeading>NG1: 極端なカロリー制限（1日1,000kcal以下）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 最大</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">リバウンド率: 高い</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              1日1,000kcal以下の極端なカロリー制限は、短期的には体重が落ちますが、体は「飢餓状態」と判断して<Marker>基礎代謝を最大40%低下</Marker>させます（Minnesota Starvation Experiment）。その結果、通常の食事に戻した途端に以前より太りやすい体になります。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">基礎代謝（女性約1,200kcal、男性約1,500kcal）を下回らない範囲で、消費カロリーの80〜90%程度に設定する。月に2〜3kgの減量ペースが理想的。</p>
            </div>
          </div>

          {/* Mistake 2 */}
          <SubSectionHeading>NG2: 朝食を抜く</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 高</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">該当者: 日本人の約30%</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              「朝食を抜けばカロリーカットできる」と考える人は多いですが、逆効果です。朝食を抜くと<Marker color="blue">昼食時の血糖値が急上昇</Marker>し、インスリンが大量分泌されて脂肪蓄積が促進されます。2017年のJournal of Nutritionの研究では、朝食を抜く習慣がある人はBMIが平均1.8ポイント高いことが報告されています。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">朝食にタンパク質を20g以上含む食事を摂る。コンビニならゆでたまご2個+ヨーグルト（約15分で準備可能）。朝の代謝スイッチをONにすることが重要。</p>
            </div>
          </div>

          {/* Mistake 3 */}
          <SubSectionHeading>NG3: 脂質を完全にカットする</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 中〜高</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">女性に多い</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              「脂質=太る」と思い込んで脂質を完全カットすると、ホルモンバランスが崩れます。脂質はテストステロンやエストロゲンの原料であり、<Marker>脂質が不足するとホルモン分泌が低下して基礎代謝が下がります</Marker>。さらに、脂溶性ビタミン（A・D・E・K）の吸収も阻害されます。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">総カロリーの20〜30%は脂質から摂取する。良質な脂質（オリーブオイル、魚油、ナッツ、アボカド）を選び、トランス脂肪酸や飽和脂肪酸の過剰摂取を避ける。</p>
            </div>
          </div>

          {/* Mistake 4 */}
          <SubSectionHeading>NG4: 毎日体重計に乗って一喜一憂する</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 中</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">精神面に悪影響</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              体重は1日の中で<Marker>最大2kg程度変動</Marker>します。水分摂取量、塩分摂取量、排泄のタイミング、女性なら月経周期によっても大きく変わります。毎日の数値に一喜一憂すると、ストレスホルモン（コルチゾール）が上昇し、かえって脂肪が蓄積しやすくなります。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">週1回、同じ曜日・同じ時間（起床後トイレ後）に計測する。7日間の平均値で比較する。体脂肪率やウエストサイズも併せて記録すると、より正確な変化が把握できる。</p>
            </div>
          </div>

          {/* Mistake 5 */}
          <SubSectionHeading>NG5: 完璧主義（オール・オア・ナッシング思考）</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 高</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">挫折の最大原因</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              「ケーキを1個食べてしまったからもうダイエットは台無し」。こうした完璧主義は<Marker>ダイエット挫折の最大原因</Marker>です。心理学では「The What-The-Hell Effect（もういいや効果）」と呼ばれ、1回の逸脱が暴食につながるパターンです。2010年のAppetite誌の研究では、完璧主義者ほどダイエットの継続率が低いことが示されています。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">「80点ルール」を採用する。1週間のうち80%（5〜6日）良い食事ができればOK。1回の逸脱は翌日の食事で調整すれば問題ない。完璧を目指すのではなく、継続を目指す。</p>
            </div>
          </div>

          <ArticleImage
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop"
            alt="運動とダイエットのイメージ"
          />

          {/* Mistake 6 */}
          <SubSectionHeading>NG6: 有酸素運動だけに頼る</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 中</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">効率が悪い</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              「痩せるにはとにかく走る」と考える人が多いですが、有酸素運動だけでは効率が悪いです。30分のジョギングで消費するカロリーは約200〜300kcal。おにぎり1個分です。さらに、<Marker color="blue">有酸素運動だけでは筋肉が減少し、基礎代謝が低下</Marker>します。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">筋トレ（週2〜3回）で筋肉を維持・増強し、基礎代謝を上げる。その上で有酸素運動を組み合わせる。食事管理が最も重要で、運動は補助的な位置づけ。「ダイエットは8割が食事」が鉄則。</p>
            </div>
          </div>

          {/* Mistake 7 */}
          <SubSectionHeading>NG7: タンパク質が不足している</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 高</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">日本人の約70%が不足</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              厚生労働省の調査によると、日本人の平均タンパク質摂取量は約65g/日。ダイエット中は<Marker>体重1kgあたり1.2〜1.6gが推奨</Marker>されるため、体重60kgなら72〜96g必要です。タンパク質が不足すると筋肉が分解され、基礎代謝が低下。さらにDIT（食事誘発性熱産生）も下がり、痩せにくい体になります。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">毎食20〜30gのタンパク質を確保する。コンビニのサラダチキン（P24g）、ゆでたまご2個（P13g）、ギリシャヨーグルト（P10g）など、手軽に摂取できる食品を活用する。</p>
            </div>
          </div>

          {/* Mistake 8 */}
          <SubSectionHeading>NG8: 水分摂取が不足している</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 中</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">見落としがち</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              水分不足は代謝低下に直結します。体内の水分が2%低下するだけで<Marker>代謝が約3%低下</Marker>するというデータがあります。また、脱水状態では空腹感と喉の渇きを混同しやすく、不必要な間食の原因になります。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">1日2リットルの水分摂取を目標にする。食前に500mlの水を飲むと食事量が自然に減る効果も。コーヒーや緑茶もカウントOKだが、糖分入り飲料はNG。</p>
            </div>
          </div>

          {/* Mistake 9 */}
          <SubSectionHeading>NG9: 睡眠不足を放置している</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 高</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">ホルモンバランス崩壊</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              睡眠不足はダイエットの大敵です。シカゴ大学の研究では、<Marker color="blue">睡眠を5.5時間に制限すると、8.5時間睡眠と比べて脂肪減少量が55%減少し、筋肉の減少量が60%増加</Marker>しました。また、睡眠不足は食欲増進ホルモン（グレリン）を28%増加させ、食欲抑制ホルモン（レプチン）を18%減少させます。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">7〜9時間の睡眠を確保する。就寝1時間前にはスマホを手放し、寝室を暗くする。どうしても睡眠時間が取れない場合は、20分の昼寝でも効果的。</p>
            </div>
          </div>

          {/* Mistake 10 */}
          <SubSectionHeading>NG10: 一人で孤独にダイエットする</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">危険度: 中</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">継続率に大きく影響</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              2012年のObesity誌の研究では、<Marker>ダイエット仲間がいる人は、一人でダイエットする人と比べて成功率が約2倍</Marker>になることが報告されています。孤独なダイエットは、モチベーション低下時に支えがなく、挫折しやすい状態です。
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs font-bold text-green-700 mb-1">正しい方法:</p>
              <p className="text-xs text-gray-600">家族や友人に宣言する、SNSで記録を共有する、ダイエットアプリのコミュニティに参加するなど、誰かとつながりながらダイエットする。たべなびのような食事管理ツールも、自分の食事を「見える化」する有効な手段です。</p>
            </div>
          </div>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="正しいダイエットを、たべなびで"
          subtitle="外食・コンビニのカロリー＆PFCを簡単検索。食事管理をもっとラクに。"
        />

        {/* Section 3: 正しいダイエットの5原則 */}
        <section className="mb-16">
          <SectionHeading id="correct-principles">
            正しいダイエットの5原則
          </SectionHeading>
          <p className="mb-6">
            10のNG行動を避けた上で、<Marker>科学的に正しいダイエットの5つの原則</Marker>を実践しましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "適度なカロリー赤字を作る（消費の80〜90%を摂取）",
                body: "基礎代謝を下回らない範囲で、消費カロリーの10〜20%をカットする。体重60kgの成人男性なら1,700〜1,900kcal程度。急激な制限ではなく、月2〜3kgの緩やかな減量を目指す。これなら筋肉を維持しながら脂肪だけを落とせます。",
              },
              {
                title: "タンパク質を最優先にする（体重×1.2〜1.6g/日）",
                body: "毎食20〜30gのタンパク質を確保。鶏むね肉、卵、魚、大豆製品、乳製品をメインに。タンパク質のDIT（食事誘発性熱産生）は30%と最も高く、同じカロリーでもタンパク質中心の食事は消費カロリーが多くなります。",
              },
              {
                title: "食事の質と栄養バランスを重視する",
                body: "PFCバランスをP25〜30%、F20〜25%、C45〜50%に設定。食物繊維は1日18g以上、水分は2リットル以上を目標に。野菜・海藻・きのこ類を毎食取り入れ、ビタミン・ミネラルも十分に摂取する。",
              },
              {
                title: "80点ルールで継続する",
                body: "週の80%（5〜6日）良い食事ができれば合格。1回の逸脱は翌日の食事で調整。完璧主義を捨て、「継続できる範囲の最善」を追求する。週1回のチートデーも計画的に取り入れてOK。",
              },
              {
                title: "睡眠・水分・運動の三本柱を整える",
                body: "睡眠7〜9時間、水分2リットル、筋トレ週2〜3回。食事管理だけでなく、この3つを整えることでダイエット効果が最大化されます。特に睡眠は見落としがちですが、ホルモンバランスへの影響が非常に大きいです。",
              },
            ]}
          />

          <TipBox title="PFCバランスの簡単な計算方法">
            <p>
              1日1,800kcal目標の場合：<Marker color="green">P(30%)=540kcal=135g、F(25%)=450kcal=50g、C(45%)=810kcal=202g</Marker>。まずはタンパク質量を決め、次に脂質、最後に炭水化物を調整する方法が簡単です。詳しくは<Link href="/guide/pfc-guide" className="text-sky-600 hover:text-sky-800 underline">PFCバランス入門ガイド</Link>をご覧ください。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop"
          alt="外食チェーン店の健康的なメニュー"
        />

        {/* Section 4: 外食ダイエットなら続けられる理由 */}
        <section className="mb-16">
          <SectionHeading id="eating-out-works">
            外食ダイエットなら続けられる理由
          </SectionHeading>
          <p className="mb-6">
            「ダイエット=自炊」と思い込んでいませんか？実は<Marker>外食やコンビニを活用したダイエット</Marker>こそ、忙しい現代人にとって最も続けやすい方法です。
          </p>

          <NumberedList
            items={[
              {
                title: "栄養成分が明確で計算が楽",
                body: "チェーン店やコンビニの商品は栄養成分が公開されています。自炊だと食材の計量や調味料の計算が必要ですが、外食ならメニュー表やアプリで一発確認。レコーディングダイエットとの相性が抜群です。",
              },
              {
                title: "調理の手間がゼロ",
                body: "仕事で疲れた夜に自炊するのは大変です。「疲れたから適当に食べよう」がダイエット失敗の典型パターン。外食なら正しいメニューを選ぶだけで、調理・片付けの負担はゼロ。継続のハードルが格段に下がります。",
              },
              {
                title: "バリエーションが豊富で飽きない",
                body: "自炊だとメニューがマンネリ化しがちですが、チェーン店を使い分ければ毎日違うメニューが楽しめます。サイゼリヤ、大戸屋、サブウェイ、すき家など、ダイエット向きメニューが豊富なチェーン店は数多くあります。",
              },
              {
                title: "「我慢している感」が少ない",
                body: "自炊の鶏むね肉＋ブロッコリーの繰り返しは精神的にキツい。外食ならチェーン店の美味しいメニューを楽しみながらダイエットできるので、完璧主義に陥りにくく、80点ルールが自然と実践できます。",
              },
            ]}
          />

          <SubSectionHeading>外食ダイエットの成功ルール</SubSectionHeading>
          <CheckList
            items={[
              "注文前に栄養成分を確認する（たべなびや公式サイト活用）",
              "主菜は高タンパク・低脂質を基準に選ぶ",
              "白米を玄米・五穀米に変更可能な店を優先する",
              "揚げ物よりグリル・蒸し・煮物を選ぶ",
              "サラダやスープを先に注文して食べ順を意識する",
              "ドリンクは無糖（水・お茶・ブラックコーヒー）を選ぶ",
            ]}
          />

          <div className="mt-6 bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-3">チェーン店別おすすめ記事</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link href="/guide/saizeriya-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                サイゼリヤダイエットガイド
              </Link>
              <Link href="/guide/ootoya-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                大戸屋ダイエットガイド
              </Link>
              <Link href="/guide/subway-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                サブウェイダイエットガイド
              </Link>
              <Link href="/guide/sukiya-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                すき家ダイエットガイド
              </Link>
              <Link href="/guide/seven-eleven-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                セブンイレブンダイエットガイド
              </Link>
              <Link href="/guide/familymart-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1">
                ファミマダイエットガイド
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="ダイエットを成功させるなら、たべなび"
          subtitle="外食・コンビニの栄養成分をワンタップで検索。正しい食事管理をサポートします。"
        />

        {/* Section 5: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ダイエットの失敗を防ぐための要点を振り返りましょう。
          </p>

          <CheckList
            items={[
              "ダイエットの80%は5年以内にリバウンド。原因は「間違った方法」にある",
              "極端なカロリー制限（1,000kcal以下）は基礎代謝を最大40%低下させる",
              "朝食抜き・脂質完全カット・完璧主義は逆効果。科学的根拠に基づいた方法を選ぶ",
              "睡眠不足は脂肪減少を55%阻害。7〜9時間の睡眠が必須",
              "正しいダイエット=適度なカロリー赤字+高タンパク+80点ルール+三本柱",
              "外食ダイエットは栄養計算が楽・手間ゼロ・飽きない・我慢が少ない",
            ]}
          />

          <div className="mt-8 p-5 bg-sky-50 rounded-lg border border-sky-200">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              正しいダイエット知識をさらに深めたい方は、以下の関連記事もおすすめです。
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guide/eat-and-lose" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  食べて痩せるダイエット完全ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/metabolism-boost-foods" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  代謝を上げる食べ物ランキングTOP15
                </Link>
              </li>
              <li>
                <Link href="/guide/pfc-guide" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  PFCバランス入門ガイド
                </Link>
              </li>
              <li>
                <Link href="/guide/recording-diet" className="text-sm text-sky-600 hover:text-sky-800 transition-colors">
                  レコーディングダイエット完全ガイド
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
            ※本記事の内容は一般的な情報提供を目的としており、医療アドバイスではありません。持病がある方、BMIが30以上の方は、ダイエットを始める前に医師に相談してください。引用した研究データは一般的な傾向を示すものです。
          </p>
        </section>

        {/* Article Footer */}
        <FAQSection
          slug="diet-mistakes"
          items={[
            { q: "極端なカロリー制限はなぜ危険ですか？", a: "1日1,000kcal以下の極端な制限は、体が飢餓状態と判断して基礎代謝を低下させます。短期的に体重は落ちますが、通常の食事に戻ると逆に太りやすい体になり、リバウンドリスクが高まります。" },
            { q: "朝食抜きでカロリーカットできませんか？", a: "逆効果です。朝食を抜くと昼食時に血糖値が急上昇し、インスリンが大量分泌されて脂肪蓄積が促進されます。研究では朝食抜き習慣がある人のBMIが平均1.8ポイント高いことが報告されています。" },
            { q: "ダイエット中にタンパク質はどのくらい必要ですか？", a: "体重1kgあたり1.2～1.6gが推奨されます。体重60kgなら72～96g必要です。毎食20～30gを目安に、鶏むね肉・卵・サラダチキン・ヨーグルトなど手軽に摂取できる食品を活用しましょう。" },
            { q: "睡眠不足がダイエットに与える影響は？", a: "睡眠不足は脂肪よりも筋肉の減少を促進し、食欲増進ホルモンの分泌を高める傾向があります。個人差が大きいため、7～9時間の確保が推奨されています。" },
            { q: "完璧主義がダイエット失敗につながるのはなぜ？", a: "「ケーキを1個食べたからもう台無し」という思考が、暴食へ転じる心理的効果（What-The-Hell Effect）を引き起こします。80点ルール（週80%の良い食事でOK）を採用し、1回の逸脱は翌日で調整するアプローチが継続につながります。" },
          ]}
        />

        <ArticleFooter currentSlug="diet-mistakes" />

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
