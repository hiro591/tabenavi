import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  ArticleImage,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
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
    "【2026年最新】外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較 | たべなび",
  description:
    "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。サイゼリヤ、コンビニ、牛丼チェーンなど20メニューをランキング形式で紹介。月間コストのシミュレーションも。",
  keywords: [
    "高タンパク 外食 コスパ",
    "タンパク質 コスパ ランキング",
    "タンパク質 安い 外食",
    "タンパク質 1g 価格",
    "プロテイン コスパ 外食",
    "高タンパク 安い チェーン",
  ],
  openGraph: {
    title:
      "【2026年最新】外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較",
    description:
      "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。20メニューをランキング形式で紹介。",
    url: "https://www.tabenavi.jp/guide/protein-cost-ranking",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食タンパク質コスパ最強ランキング｜1gあたりの価格で徹底比較",
  description:
    "外食チェーンのタンパク質コスパを1gあたりの価格で徹底比較。20メニューをランキング形式で紹介。",
  datePublished: "2026-03-19",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/protein-cost-ranking",
};

const tocItems = [
  { id: "why-cost", label: "なぜタンパク質のコスパが重要か" },
  { id: "ranking-top20", label: "タンパク質1gあたり価格ランキングTOP20" },
  { id: "chain-comparison", label: "チェーン店カテゴリ別コスパ比較" },
  { id: "maximize-tips", label: "コスパを最大化するテクニック5選" },
  { id: "monthly-simulation", label: "月間タンパク質費用シミュレーション" },
  { id: "summary", label: "まとめ" },
];

export default function ProteinCostRankingPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食タンパク質コスパ最強ランキング"
        subtitle="1gあたりの価格で徹底比較【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop"
        breadcrumb="タンパク質コスパランキング"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="protein-cost-ranking">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月19日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          筋トレやダイエットで最も重要な栄養素、タンパク質。しかし外食でタンパク質を摂ろうとすると、<Marker>「高タンパク＝高価格」になりがち</Marker>で、月々の食費が膨れ上がってしまうのが悩みの種です。
        </p>
        <p className="mb-4">
          そこでこの記事では、外食チェーンのメニューを<Marker color="blue">「タンパク質1gあたりの価格」</Marker>で徹底比較。計算式は至ってシンプルです。
        </p>
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 text-center mb-6">
          <p className="text-lg font-bold text-sky-700">
            タンパク質コスパ = 価格（円） &divide; タンパク質（g） = ○○円/g
          </p>
          <p className="text-sm text-gray-500 mt-2">数値が低いほどコスパが良い</p>
        </div>
        <p className="mb-8">
          この指標で20メニューをランキング化。さらにチェーン店カテゴリ別の比較や、月間費用のシミュレーションもお見せします。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ─── Section 1: なぜコスパが重要か ─── */}
                <QuickAnswer
          question={"外食でタンパク質を最もコスパよく摂るにはどのメニューを選べばいいですか?"}
          answer={"コンビニのサラダチキン(プレーン)が1gあたり9.9円で最強のコスパ。温かい食事ではサイゼリヤの若鶏のグリル(14.2円/g)が最優秀です。牛丼チェーンなら松屋の牛めしに卵を追加すると、1食480円でタンパク質29g(16.6円/g)を確保できます。"}
        />

        <SectionHeading id="why-cost">なぜタンパク質のコスパが重要か</SectionHeading>

        <p className="mb-4">
          厚生労働省が推奨する1日のタンパク質摂取量は、成人男性で<Marker>65g</Marker>、成人女性で<Marker>50g</Marker>。しかし筋トレをしている人なら体重1kgあたり1.6〜2.2gが目安とされ、<Marker color="blue">体重70kgの男性なら112〜154g/日</Marker>が必要です。
        </p>

        <ComparisonTable
          headers={["対象者", "体重", "1日のP目標", "1食あたり目安"]}
          rows={[
            ["一般成人（男性）", "70kg", "65g", "約22g"],
            ["一般成人（女性）", "55kg", "50g", "約17g"],
            ["筋トレ中（男性）", "70kg", "112〜154g", "約37〜51g"],
            ["筋トレ中（女性）", "55kg", "88〜121g", "約29〜40g"],
            ["ダイエット中", "体重×1.5g", "体重に依存", "体重÷2g"],
          ]}
        />

        <p className="mb-4">
          仮にタンパク質1gあたり20円のメニューで120g/日を確保しようとすると、<Marker>1日2,400円、月に72,000円</Marker>。一方、1gあたり10円なら月36,000円と、<Marker color="green">コスパの差だけで月3万円以上の節約</Marker>になります。
        </p>

        <NumberedList
          items={[
            {
              title: "継続可能性に直結する",
              body: "タンパク質摂取は毎日のこと。コスパが悪いと食費が圧迫され、結局続けられなくなります。「安くて高タンパク」な選択肢を知っておくことは長期的な成功の鍵。",
            },
            {
              title: "同じ予算でより多くのタンパク質が摂れる",
              body: "1日の食費を2,000円と固定した場合、コスパの良いメニューを選ぶだけでタンパク質摂取量は2倍以上変わります。",
            },
            {
              title: "「高い＝高タンパク」ではない",
              body: "意外にも、高級レストランよりもコンビニのサラダチキンや牛丼チェーンの方がタンパク質コスパに優れていることが多いのです。",
            },
          ]}
        />

        <TipBox title="プロテインパウダーとの比較">
          <p>参考までに、プロテインパウダー（マイプロテイン等）のコスパは<Marker>約3〜5円/g</Marker>。外食で10円/g以下を達成できれば、「固形食としてはトップクラス」と言えます。ただし外食には満足感・栄養バランス・味のバリエーションというメリットがあるため、プロテインと併用するのがベストです。</p>
        </TipBox>

        <AffiliateProductCard productId="myprotein-impact" />

        {/* ─── Section 2: ランキングTOP20 ─── */}
        <SectionHeading id="ranking-top20">タンパク質1gあたり価格ランキングTOP20</SectionHeading>

        <p className="mb-6">
          外食チェーンの主要メニューを<Marker>タンパク質1gあたりの価格</Marker>で比較し、コスパの良い順にランキングしました。
        </p>

        {/* TOP 3 with RankingCard */}
        <RankingCard rank={1} title="コンビニ サラダチキン（プレーン）" subtitle="¥238 / P24.1g = ¥9.9/g">
          <NutritionCard
            name="サラダチキン（プレーン）"
            chain="セブンイレブン"
            calories={114}
            protein={24.1}
            fat={1.2}
            carbs={1.0}
            price={238}
            recommended
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>タンパク質1gあたり9.9円</Marker>で堂々の1位。コンビニで手軽に買えて、脂質わずか1.2gという驚異的な低脂質。味のバリエーション（ハーブ、スモーク、レモン等）も豊富で飽きにくい。外食タンパク質コスパの絶対王者です。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="松屋 牛めし（並盛）" subtitle="¥400 / P22.8g = ¥17.5/g">
          <NutritionCard
            name="牛めし（並盛）"
            chain="松屋"
            calories={692}
            protein={22.8}
            fat={22.5}
            carbs={95.2}
            price={400}
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>1gあたり17.5円</Marker>。牛丼チェーンの中でも松屋は味噌汁付きでこの価格。タンパク質だけでなく炭水化物もしっかり摂れるため、トレーニング後の栄養補給にも最適。ただし脂質22.5gはやや高め。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="サイゼリヤ 若鶏のグリル（ディアボラ風）" subtitle="¥500 / P35.2g = ¥14.2/g">
          <NutritionCard
            name="若鶏のグリル（ディアボラ風）"
            chain="サイゼリヤ"
            calories={480}
            protein={35.2}
            fat={30.5}
            carbs={12.8}
            price={500}
            recommended
          />
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <Marker>1gあたり14.2円でP35.2g</Marker>。1品で35g以上のタンパク質を摂れるメニューは外食チェーン全体でも非常に稀。炭水化物12.8gと低糖質なのもポイント。筋トレ民の「最強の外食」として揺るぎない地位を確立しています。
          </p>
        </RankingCard>

        <ArticleImage
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=400&fit=crop"
          alt="高タンパクな外食メニューのイメージ"
        />

        {/* 4位〜20位のテーブル */}
        <SubSectionHeading>4位〜20位 一覧</SubSectionHeading>

        <ComparisonTable
          headers={["順位", "メニュー", "チェーン", "価格", "P", "円/g"]}
          rows={[
            ["4", "ゆで卵", "コンビニ各社", "¥80", "6.2g", "¥12.9"],
            ["5", "豆腐バー", "コンビニ各社", "¥158", "13.5g", "¥11.7"],
            ["6", "ハンバーグステーキ", "サイゼリヤ", "¥400", "22.5g", "¥17.8"],
            ["7", "すき家 牛丼（並盛）", "すき家", "¥430", "22.0g", "¥19.5"],
            ["8", "吉野家 牛丼（並盛）", "吉野家", "¥468", "22.3g", "¥21.0"],
            ["9", "ミックスグリル", "サイゼリヤ", "¥500", "32.0g", "¥15.6"],
            ["10", "鶏の甘辛味噌定食", "松屋", "¥650", "32.5g", "¥20.0"],
            ["11", "チキンマックナゲット15P", "マクドナルド", "¥580", "28.5g", "¥20.4"],
            ["12", "辛味チキン（3本）", "サイゼリヤ", "¥300", "16.5g", "¥18.2"],
            ["13", "ギリシャヨーグルト", "コンビニ各社", "¥180", "12.0g", "¥15.0"],
            ["14", "ダブルチーズバーガー", "マクドナルド", "¥400", "26.4g", "¥15.2"],
            ["15", "プロテインドリンク", "コンビニ各社", "¥180", "12.3g", "¥14.6"],
            ["16", "しまほっけ炭火焼き定食", "大戸屋", "¥930", "38.5g", "¥24.2"],
            ["17", "ローストチキン", "サブウェイ", "¥490", "22.0g", "¥22.3"],
            ["18", "唐揚げ定食", "やよい軒", "¥780", "32.0g", "¥24.4"],
            ["19", "鶏むね塩麹漬け焼き定食", "大戸屋", "¥990", "42.2g", "¥23.5"],
            ["20", "チキンにこみカレー", "CoCo壱", "¥860", "32.0g", "¥26.9"],
          ]}
          bestRowIndex={0}
        />

        <TipBox title="ランキングの読み方">
          <p><Marker>コンビニのサラダチキン（¥9.9/g）が圧倒的トップ</Marker>。2位以降は14〜27円/gの範囲に分布。全体の傾向として、(1) コンビニのプロテイン系商品が強い、(2) サイゼリヤのグリル系が優秀、(3) 定食系チェーンは価格が高い分コスパは落ちる、という傾向が見えます。</p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="メニューのタンパク質量を今すぐチェック"
          subtitle="たべなびで外食チェーンの栄養データを無料検索"
        />

        <AffiliateProductGrid
          title="外食コスパに勝つ「家プロテイン」3点"
          productIds={["myprotein-impact", "ultora-whey", "shaker-bottle"]}
        />

        {/* ─── Section 3: チェーン店カテゴリ別比較 ─── */}
        <SectionHeading id="chain-comparison">チェーン店カテゴリ別コスパ比較</SectionHeading>

        <p className="mb-6">
          チェーン店をカテゴリ別に分けて、タンパク質コスパの傾向を比較します。<Marker>どのカテゴリが最もコスパが良いのか</Marker>、一目でわかります。
        </p>

        <SubSectionHeading>カテゴリ別 平均タンパク質コスパ</SubSectionHeading>

        <ComparisonTable
          headers={["カテゴリ", "平均円/g", "代表メニュー", "メリット", "デメリット"]}
          rows={[
            ["コンビニ", "¥12.8/g", "サラダチキン", "手軽・種類豊富", "冷たいものが多い"],
            ["ファミレス", "¥16.5/g", "サイゼ若鶏グリル", "温かい・満足感", "サイゼ以外は高め"],
            ["牛丼チェーン", "¥19.3/g", "松屋 牛めし", "安い・早い", "脂質も高め"],
            ["ファストフード", "¥17.0/g", "ナゲット15P", "どこにでもある", "揚げ物が多い"],
            ["定食チェーン", "¥24.0/g", "大戸屋定食", "バランス良い", "価格が高い"],
          ]}
          bestRowIndex={0}
        />

        <SubSectionHeading>コンビニ（平均¥12.8/g）</SubSectionHeading>

        <p className="mb-4">
          <Marker>コンビニはタンパク質コスパの王者</Marker>。特にサラダチキン（¥9.9/g）、ゆで卵（¥12.9/g）、豆腐バー（¥11.7/g）の3強は、他のカテゴリを大きく引き離しています。
        </p>

        <NutritionTable
          items={[
            { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 1.0, highlight: true },
            { name: "ゆで卵（2個）", calories: 128, protein: 12.4, fat: 8.6, carbs: 0.8 },
            { name: "豆腐バー（枝豆味）", calories: 148, protein: 13.5, fat: 8.8, carbs: 3.5, highlight: true },
            { name: "ギリシャヨーグルト", calories: 68, protein: 12.0, fat: 0.0, carbs: 5.8 },
            { name: "プロテインドリンク", calories: 84, protein: 12.3, fat: 2.2, carbs: 3.2 },
          ]}
          highlightProtein
        />

        <p className="mb-6">
          デメリットは「冷たいものが多い」点。冬場はレンジで温められるサラダチキンや、ホットスナックコーナーのチキン（焼き鳥など）を活用しましょう。
        </p>

        <SubSectionHeading>ファミレス（平均¥16.5/g）</SubSectionHeading>

        <p className="mb-4">
          ファミレスのコスパは店舗によって大きく差があります。<Marker color="blue">サイゼリヤが圧倒的にコスパが良く</Marker>、若鶏のグリル（¥14.2/g）、ミックスグリル（¥15.6/g）、ハンバーグ（¥17.8/g）と上位メニューが揃っています。
        </p>

        <ComparisonTable
          headers={["チェーン", "代表メニュー", "価格", "P", "円/g"]}
          rows={[
            ["サイゼリヤ", "若鶏のグリル", "¥500", "35.2g", "¥14.2"],
            ["サイゼリヤ", "ミックスグリル", "¥500", "32.0g", "¥15.6"],
            ["サイゼリヤ", "ハンバーグ", "¥400", "22.5g", "¥17.8"],
            ["ガスト", "チーズINハンバーグ", "¥769", "28.5g", "¥27.0"],
            ["ジョナサン", "若鶏のグリル定食", "¥989", "35.0g", "¥28.3"],
          ]}
          bestRowIndex={0}
        />

        <WarningBox title="サイゼリヤ以外のファミレスに注意">
          <p>ガストやジョナサンは<span className="font-bold">1gあたり27〜28円</span>とコスパが悪化。同じ「若鶏のグリル」でもジョナサンは989円、サイゼリヤは500円と<span className="font-bold">約2倍の価格差</span>。ファミレスでタンパク質コスパを追求するなら、サイゼリヤ一択です。</p>
        </WarningBox>

        <SubSectionHeading>牛丼チェーン（平均¥19.3/g）</SubSectionHeading>

        <p className="mb-4">
          牛丼チェーンは「安い」イメージがありますが、タンパク質コスパでは意外にも中間的なポジション。理由は<Marker>1杯あたりのタンパク質が20〜25gと少なめ</Marker>だからです。
        </p>

        <ComparisonTable
          headers={["チェーン", "メニュー", "価格", "P", "円/g"]}
          rows={[
            ["松屋", "牛めし（並）", "¥400", "22.8g", "¥17.5"],
            ["すき家", "牛丼（並）", "¥430", "22.0g", "¥19.5"],
            ["吉野家", "牛丼（並）", "¥468", "22.3g", "¥21.0"],
          ]}
          bestRowIndex={0}
        />

        <TipBox title="牛丼チェーンでコスパを上げる裏技">
          <p><Marker>「肉大盛り」にするとタンパク質コスパが向上</Marker>します。松屋の牛めし（肉大盛り）は+150円でタンパク質が約10g増加。つまり追加分は¥15/gで、通常より安くタンパク質を追加できます。さらに<Marker color="blue">「卵」を追加（+80円・P6.2g）すると¥12.9/g</Marker>でサラダチキン級のコスパに。</p>
        </TipBox>

        <SubSectionHeading>ファストフード（平均¥17.0/g）</SubSectionHeading>

        <p className="mb-4">
          ファストフードは揚げ物が多く脂質が高い傾向にありますが、メニュー選び次第ではコスパ上位に食い込みます。
        </p>

        <ComparisonTable
          headers={["チェーン", "メニュー", "価格", "P", "F", "円/g"]}
          rows={[
            ["マクドナルド", "ダブルチーズバーガー", "¥400", "26.4g", "23.2g", "¥15.2"],
            ["マクドナルド", "ナゲット15P", "¥580", "28.5g", "22.0g", "¥20.4"],
            ["サブウェイ", "ローストチキン", "¥490", "22.0g", "4.0g", "¥22.3"],
            ["ケンタッキー", "オリジナルチキン(2P)", "¥580", "28.8g", "24.2g", "¥20.1"],
          ]}
          bestRowIndex={0}
        />

        <p className="mb-6">
          <Marker color="blue">サブウェイのローストチキンは脂質わずか4.0g</Marker>と突出した低脂質。コスパは¥22.3/gとやや高いですが、PFCバランスを重視するなら最良の選択肢です。
        </p>

        <SubSectionHeading>定食チェーン（平均¥24.0/g）</SubSectionHeading>

        <p className="mb-6">
          大戸屋ややよい軒などの定食チェーンは、<Marker>栄養バランスは良いがコスパでは最下位</Marker>。1gあたり23〜27円と割高です。ただし「定食」としての完成度が高く、ご飯・味噌汁・副菜込みの値段であることを考慮すると、トータルの食事コスパとしては悪くありません。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="バランスの良い外食定食のイメージ"
        />

        {/* ─── Section 4: コスパ最大化テクニック ─── */}
        <SectionHeading id="maximize-tips">コスパを最大化するテクニック5選</SectionHeading>

        <p className="mb-6">
          ランキングを知った上で、さらに<Marker>タンパク質コスパを引き上げる実践テクニック</Marker>を5つ紹介します。
        </p>

        <NumberedList
          items={[
            {
              title: "コンビニのサラダチキンを「ベース」にする",
              body: "1日3食のうち1食をサラダチキン中心にするだけで、1日のタンパク質コスパが大幅に改善。¥9.9/gの威力は圧倒的です。朝食や昼食をコンビニで済ませ、夜だけ外食チェーンにすると理想的。",
            },
            {
              title: "サイゼリヤのグリル系を活用する",
              body: "ファミレスで唯一コスパ上位に入るサイゼリヤ。若鶏のグリル（¥14.2/g）は温かい食事としてはトップクラス。週2〜3回のサイゼリヤ通いは筋トレ民の定番です。",
            },
            {
              title: "牛丼チェーンでは「卵追加」を必ず行う",
              body: "卵は¥12.9/gのコスパ優良食材。牛丼に+80円で卵を追加するだけで、P6.2gが上乗せされ、全体のコスパが向上します。松屋では「牛めし + 生卵」で¥480・P29g（¥16.6/g）に。",
            },
            {
              title: "ファストフードは「単品注文」で攻める",
              body: "セットメニューのポテトやドリンクはタンパク質がほぼゼロ。ダブルチーズバーガー単品（¥400・P26.4g）を2個注文する方が、セットメニュー1つよりもコスパが良い場合があります。",
            },
            {
              title: "プロテインパウダーと外食を組み合わせる",
              body: "朝のプロテインシェイク（約¥60・P24g = ¥2.5/g）で1日のベースを作り、昼と夜を外食にすれば、1日の平均コスパを¥10/g台に抑えられます。最もコスパの良いハイブリッド戦略です。",
            },
          ]}
        />

        <TipBox title="アプリ・クーポンの活用も忘れずに">
          <p>マクドナルドのアプリクーポン、松屋のモバイルオーダー割引など、<Marker>各チェーンのアプリを活用すれば実質コスパがさらに向上</Marker>します。特にマクドナルドはクーポンで50〜100円引きになることが多く、ダブルチーズバーガーが¥350で買えれば、コスパは¥13.3/gとサイゼリヤ超えも可能です。</p>
        </TipBox>

        <AffiliateProductGrid
          title="外食の合間に常備したい高タンパクアイテム"
          productIds={["inbar-protein", "onebar-protein", "tuna-can", "salada-chicken-pack"]}
        />

        {/* ─── Section 5: 月間シミュレーション ─── */}
        <SectionHeading id="monthly-simulation">月間タンパク質費用シミュレーション</SectionHeading>

        <p className="mb-4">
          筋トレ中の男性（体重70kg）が、<Marker>1日120gのタンパク質を外食で摂取する場合</Marker>、月間費用はどのくらいになるのでしょうか。3つのパターンでシミュレーションします。
        </p>

        <SubSectionHeading>パターン1：コスパ最優先プラン</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "サラダチキン + ゆで卵2個", "36.5g", "¥10.7", "¥398"],
            ["昼食", "松屋 牛めし + 卵", "29.0g", "¥16.6", "¥480"],
            ["夕食", "サイゼ 若鶏のグリル + 辛味チキン", "51.7g", "¥15.5", "¥800"],
            ["間食", "プロテインドリンク", "12.3g", "¥14.6", "¥180"],
            ["1日合計", "", "129.5g", "¥14.3", "¥1,858"],
          ]}
        />

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-green-700 text-center">
            月間費用：¥1,858 &times; 30日 = <Marker color="green">¥55,740</Marker>
          </p>
          <p className="text-sm text-green-600 text-center mt-1">平均¥14.3/g &middot; 1日129.5g</p>
        </div>

        <SubSectionHeading>パターン2：バランス重視プラン</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "マクドナルド エッグマックマフィン", "19.2g", "¥10.4", "¥200"],
            ["昼食", "大戸屋 鶏むね塩麹定食", "42.2g", "¥23.5", "¥990"],
            ["夕食", "サイゼ 若鶏のグリル + 青豆サラダ", "41.0g", "¥17.1", "¥700"],
            ["間食", "ギリシャヨーグルト + プロテインバー", "23.5g", "¥18.3", "¥430"],
            ["1日合計", "", "125.9g", "¥18.4", "¥2,320"],
          ]}
        />

        <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-sky-700 text-center">
            月間費用：¥2,320 &times; 30日 = <Marker>¥69,600</Marker>
          </p>
          <p className="text-sm text-sky-600 text-center mt-1">平均¥18.4/g &middot; 1日125.9g</p>
        </div>

        <SubSectionHeading>パターン3：コスパ無視プラン（参考）</SubSectionHeading>

        <ComparisonTable
          headers={["食事", "メニュー", "P", "円/g", "費用"]}
          rows={[
            ["朝食", "スタバ サンドイッチ + ラテ", "12.0g", "¥66.7", "¥800"],
            ["昼食", "ジョナサン 若鶏グリル定食", "35.0g", "¥28.3", "¥989"],
            ["夕食", "大戸屋 チキン南蛮定食 + サラダ", "38.5g", "¥33.8", "¥1,300"],
            ["間食", "コンビニ プロテインバー(2本)", "33.0g", "¥15.2", "¥500"],
            ["1日合計", "", "118.5g", "¥30.3", "¥3,589"],
          ]}
        />

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
          <p className="text-lg font-bold text-red-700 text-center">
            月間費用：¥3,589 &times; 30日 = <span className="font-bold">¥107,670</span>
          </p>
          <p className="text-sm text-red-600 text-center mt-1">平均¥30.3/g &middot; 1日118.5g</p>
        </div>

        <ComparisonTable
          headers={["プラン", "月間費用", "1日のP", "平均円/g", "年間費用"]}
          rows={[
            ["コスパ最優先", "¥55,740", "129.5g", "¥14.3", "¥668,880"],
            ["バランス重視", "¥69,600", "125.9g", "¥18.4", "¥835,200"],
            ["コスパ無視", "¥107,670", "118.5g", "¥30.3", "¥1,292,040"],
          ]}
          bestRowIndex={0}
        />

        <WarningBox title="コスパ無視プランとの差額に注目">
          <p>コスパ最優先プランとコスパ無視プランの差は<span className="font-bold">月間約5.2万円、年間約62万円</span>。しかもコスパ最優先プランの方がタンパク質摂取量は11g多い。つまり<span className="font-bold">「安くてタンパク質も多い」が実現できる</span>のです。メニュー選びの知識があるだけで、年間60万円以上の節約になります。</p>
        </WarningBox>

        <TipBox title="最強のハイブリッド戦略">
          <p>月間費用をさらに抑えたいなら、<Marker>朝食をプロテインパウダー（¥60・P24g）に置き換える</Marker>のが最も効果的。朝食費が1日¥400→¥60に下がり、月間で約1万円の節約。それだけで月間費用は¥45,000台に突入し、<Marker color="blue">年間で約55万円</Marker>で120g/日のタンパク質を確保できます。</p>
        </TipBox>

        <AffiliateProductCard productId="ultora-whey" />

        {/* ─── Section 6: まとめ ─── */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          外食のタンパク質コスパは、メニューの選び方次第で<Marker>3倍以上の差</Marker>が出ます。この記事のポイントを整理します。
        </p>

        <CheckList
          items={[
            "タンパク質コスパ1位：コンビニ サラダチキン（¥9.9/g）",
            "温かい食事で最強：サイゼリヤ 若鶏のグリル（¥14.2/g）",
            "牛丼チェーンは松屋（¥17.5/g）がベスト。卵追加でさらにコスパUP",
            "カテゴリ別ではコンビニ（¥12.8/g） > ファミレス（¥16.5/g） > ファストフード（¥17.0/g）",
            "定食チェーン（¥24.0/g）はコスパでは不利だが栄養バランスは良い",
            "コスパ最優先プランなら月55,740円で1日130gのタンパク質を確保可能",
            "コスパ無視との差は年間62万円。メニュー選びの知識が大きな節約に",
            "プロテインパウダーとの併用が最強のハイブリッド戦略",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーン店の公式サイトでご確認ください。タンパク質1gあたりの価格は小数点第2位を四捨五入しています。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびでタンパク質量をサクッと検索"
          subtitle="20チェーン・500メニューの栄養データを無料で比較"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="protein-cost-ranking"
          items={[
            { q: "筋トレ中に必要なタンパク質量は1日どのくらいですか?", a: "体重1kgあたり1.6~2.2gが目安。体重70kgの男性なら112~154g/日が必要。一般成人の推奨量(男性65g)の2倍近くです。継続的に確保するにはコスパが重要になります。" },
            { q: "コンビニとファミレスではどちらがタンパク質コスパが良いですか?", a: "コンビニが平均12.8円/gで勝ります。ただしファミレス全体ではなくサイゼリヤ限定で16.5円/gと競争力あり。他のファミレス(ガスト・ジョナサン)は27~28円/gと割高です。" },
            { q: "牛丼チェーンでコスパを上げるコツは何ですか?", a: "松屋の牛めしに卵を追加するのが効果的。追加80円でタンパク質6.2gが増え、追加分は12.9円/g。通常より安くタンパク質を足せます。肉大盛りも同様にコスパが向上します。" },
            { q: "月間でタンパク質コスパ最優先ならいくら必要ですか?", a: "体重70kg男性が1日120gを確保する場合、月55,740円(1食平均14.3円/g)で実現可能。コスパ無視の場合は月107,670円で、年間60万円以上の差が出ます。" },
            { q: "ファストフードでタンパク質コスパが良いメニューはありますか?", a: "マクドナルドのダブルチーズバーガーが15.2円/g。ただし揚げ物が多く脂質高め。低脂質重視ならサブウェイのローストチキン(22.3円/g・脂質4.0g)が最適です。" },
          ]}
        />

        <ArticleFooter currentSlug="protein-cost-ranking" />

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
