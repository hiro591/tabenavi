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
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/diet-lunch" },
  title:
    "【2026年最新】ダイエット中のランチ完全ガイド｜外食チェーン店で500kcal以下のおすすめメニュー | たべなび",
  description:
    "ダイエット中のランチ選びに迷わない！主要外食チェーン店の500kcal以下メニューをPFCデータ付きで15品厳選。高タンパク・低脂質・コスパ重視の目的別おすすめランチも紹介。",
  keywords: [
    "ダイエット ランチ",
    "ダイエット 昼食",
    "ヘルシーランチ 外食",
    "500kcal以下 ランチ",
    "ダイエット 外食",
    "低カロリー ランチ",
    "ヘルシー チェーン店",
  ],
  openGraph: {
    title:
      "【2026年最新】ダイエット中のランチ完全ガイド｜外食チェーン店で500kcal以下のおすすめメニュー",
    description:
      "主要外食チェーン店の500kcal以下メニューをPFCデータ付きで15品厳選。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ダイエット中のランチ完全ガイド｜外食チェーン店で500kcal以下のおすすめメニュー",
  description:
    "ダイエット中のランチ選びに迷わない！主要外食チェーン店の500kcal以下メニューをPFCデータ付きで15品厳選。",
  datePublished: "2026-03-19",
  dateModified: "2026-06-23",
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/diet-lunch",
};

const tocItems = [
  { id: "why-lunch-matters", label: "ダイエット中のランチ、なぜ重要？" },
  { id: "best-15", label: "500kcal以下のチェーン店ランチBEST15" },
  { id: "by-purpose", label: "目的別おすすめランチ" },
  { id: "avoid-menus", label: "ランチで避けるべきメニュー" },
  { id: "office-tips", label: "オフィスワーカー向け実践テクニック" },
  { id: "summary", label: "まとめ" },
];

export default function DietLunchPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ダイエット中のランチ完全ガイド｜500kcal以下のおすすめメニュー"
        subtitle="外食チェーン店でもダイエットは続けられる。PFCデータ付きで最適なランチを紹介"
        imageUrl="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop"
        breadcrumb="ダイエットランチガイド"
      />

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <TableOfContents items={tocItems} />
      </div>

      <ArticleLayout tocItems={tocItems} currentSlug="diet-lunch">
        {/* Authority & date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: 2026年6月23日
        </p>
        <AffiliateDisclosure />

        <p className="text-gray-700 leading-relaxed mb-4">
          ダイエット中、最も悩むのが「ランチに何を食べるか」ではないでしょうか。
          特にオフィスワーカーは外食やコンビニに頼ることが多く、
          <Marker>カロリーオーバーになりやすい</Marker>のがランチタイムです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          このガイドでは、主要チェーン店の<Marker color="green">500kcal以下のメニュー</Marker>を
          PFC（タンパク質・脂質・炭水化物）データ付きで厳選。
          高タンパク・低脂質・コスパ重視など目的別のおすすめも紹介します。
          正しいランチ選びで、<Marker>午後のパフォーマンスも向上</Marker>させましょう。
        </p>

        {/* ─── Section 1: なぜ重要？ ─── */}
                <QuickAnswer
          question={"ダイエット中のランチは何kcal程度に抑えるべき？"}
          answer={"1日1,500〜1,800kcal設定の場合、ランチは500kcal以下が目安です。サブウェイのチリチキン（273kcal・タンパク質20.5g）、サイゼリヤの辛味チキン+小エビのサラダ（493kcal）など、主食を控えめにすることで達成可能。ランチを抜くとドカ食いのリスクが高まるため、内容を工夫して必ず食べることが重要です。"}
        />

        <SectionHeading id="why-lunch-matters">
          ダイエット中のランチ、なぜ重要？
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          ランチはダイエット成功のカギを握る食事です。
          1日の摂取カロリーを<Marker>1,500〜1,800kcal</Marker>に設定した場合、
          1食あたりの目安は<Marker color="blue">500〜600kcal</Marker>になります。
        </p>

        <ComparisonTable
          headers={["目的", "1日の目標カロリー", "ランチの目安", "PFCバランス"]}
          rows={[
            ["減量（女性）", "1,200〜1,400 kcal", "400〜470 kcal", "P30% F25% C45%"],
            ["減量（男性）", "1,600〜1,800 kcal", "530〜600 kcal", "P30% F25% C45%"],
            ["ゆるダイエット", "1,800〜2,000 kcal", "600〜670 kcal", "P25% F25% C50%"],
          ]}
          bestRowIndex={0}
        />

        <p className="text-gray-700 leading-relaxed mb-4">
          しかし、一般的な外食ランチのカロリーは<Marker color="blue">700〜1,200kcal</Marker>。
          カツ丼なら約900kcal、ラーメン＋チャーハンセットなら1,200kcal超え。
          何も考えずに注文すると、ランチ1食で1日の半分以上のカロリーを摂ってしまいます。
        </p>

        <WarningBox title="ランチを抜くのはNG">
          <p>
            カロリーを減らしたいからとランチを抜くのは逆効果です。
            血糖値が低い状態が続くと、<strong>夕方に強い空腹感</strong>が生じ、
            夕食や間食でドカ食いしてしまうリスクが高まります。
            また、代謝が低下して痩せにくい体になる原因にも。
            ランチはしっかり食べて、内容を工夫するのがダイエットの鉄則です。
          </p>
        </WarningBox>

        <TipBox title="ダイエット中のランチで意識したい3つの数字">
          <ul className="space-y-1">
            <li>・ <strong>カロリー：</strong>500kcal以下を目標に</li>
            <li>・ <strong>タンパク質（P）：</strong>20g以上で筋肉を維持</li>
            <li>・ <strong>食物繊維：</strong>サラダや野菜メニューでプラス</li>
          </ul>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
          alt="ヘルシーなランチプレートのイメージ"
        />

        {/* ─── Section 2: BEST15 ─── */}
        <SectionHeading id="best-15">
          500kcal以下のチェーン店ランチBEST15
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          主要チェーン店から<Marker>500kcal以下</Marker>のランチメニューを15品厳選しました。
          すべてPFCデータ付きなので、自分のダイエットスタイルに合ったメニューを見つけてください。
        </p>

        {/* TOP 3 with RankingCard */}
        <RankingCard
          rank={1}
          title="サブウェイ｜チリチキン（レギュラー）"
          subtitle="低脂質・野菜たっぷりでダイエットランチの王道"
        >
          <NutritionCard
            name="チリチキン（レギュラー）"
            chain="サブウェイ"
            calories={273}
            protein={20.5}
            fat={4.1}
            carbs={39.7}
            recommended
          />
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            <Marker>脂質わずか4.1g</Marker>と圧倒的に低脂質。
            野菜を無料で増量できるので、食物繊維もしっかり摂れます。
            タンパク質20.5gも確保でき、バランスの取れたダイエットランチの最有力候補です。
          </p>
        </RankingCard>

        <RankingCard
          rank={2}
          title="サイゼリヤ｜辛味チキン＋小エビのサラダ"
          subtitle="約650円で約493kcalにまとまる満足コンビ"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">辛味チキン</p>
                  <p className="text-xs text-gray-500 mt-0.5">サイゼリヤ</p>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="bg-sky-400 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold mb-1">おすすめ</span>
                  <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">295<span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span></span>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-700 mt-2">¥300</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">小エビのサラダ</p>
                  <p className="text-xs text-gray-500 mt-0.5">サイゼリヤ</p>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">198<span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span></span>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-700 mt-2">¥350</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            2品合計で<Marker color="green">約493kcal・650円</Marker>。
            満足感がありながら500kcal前後にまとまるのが魅力で、ライスを頼まないのがポイントです。
            ※サイゼリヤは公式にP/F/C（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリー基準で紹介しています。
          </p>
        </RankingCard>

        <RankingCard
          rank={3}
          title="コンビニ｜サラダチキン＋おにぎり1個＋サラダ"
          subtitle="手軽さNo.1。栄養表示で正確にカロリー管理"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <NutritionCard
              name="サラダチキン"
              chain="コンビニ"
              calories={114}
              protein={24.1}
              fat={1.2}
              carbs={0.3}
              price={220}
              recommended
            />
            <NutritionCard
              name="おにぎり（鮭）"
              chain="コンビニ"
              calories={179}
              protein={4.7}
              fat={1.4}
              carbs={38.2}
              price={140}
            />
            <NutritionCard
              name="ミックスサラダ"
              chain="コンビニ"
              calories={22}
              protein={1.2}
              fat={0.2}
              carbs={4.4}
              price={150}
            />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            3品合計で<Marker>315kcal、タンパク質30.0g</Marker>、合計510円。
            個包装で栄養表示が明確なので、カロリー管理が正確にできるのがコンビニの最大の強みです。
          </p>
        </RankingCard>

        {/* 4-15位のテーブル */}
        <SubSectionHeading>4〜15位：500kcal以下メニュー一覧</SubSectionHeading>

        <NutritionTable
          items={[
            { name: "4. すき家 牛丼ライト（並盛）", calories: 397, protein: 22.8, fat: 26.8, carbs: 16.8, highlight: true },
            { name: "5. 吉野家 牛皿（並盛）", calories: 281, protein: 13.5, fat: 22.9, carbs: 5.2, highlight: true },
            { name: "6. マクドナルド ナゲット5個+サイドサラダ", calories: 272, protein: 15.8, fat: 16.0, carbs: 16.7, highlight: true },
            { name: "7. デニーズ グリルチキン", calories: 425, protein: 37.6, fat: 27.6, carbs: 7.2 },
            { name: "8. サブウェイ サラダチキン サラダ", calories: 93, protein: 14.7, fat: 0.8, carbs: 8.3, highlight: true },
            { name: "9. デニーズ カットステーキ(約130g)", calories: 255, protein: 23.7, fat: 12.8, carbs: 11.3, highlight: true },
            { name: "10. やよい軒 銀鮭の塩焼定食(白米)", calories: 499, protein: 30.0, fat: 16.8, carbs: 62.9 },
            { name: "11. すき家 牛皿（中盛）", calories: 423, protein: 21.1, fat: 32.3, carbs: 12.2 },
            { name: "12. すき家 鮭定食（ミニ）", calories: 436, protein: 21.2, fat: 10.1, carbs: 66.4 },
            { name: "13. CoCo壱番屋 なすとほうれん草のカレードリア", calories: 480, protein: 10.1, fat: 17.7, carbs: 72.3 },
            { name: "14. すき家 おんたま6個", calories: 368, protein: 30.4, fat: 20.5, carbs: 15.5, highlight: true },
            { name: "15. デニーズ 牛みすじステーキ(約120g)", calories: 274, protein: 25.2, fat: 14.9, carbs: 7.7, highlight: true },
          ]}
          highlightProtein
        />

        <TipBox title="500kcal以下ランチの共通ポイント">
          <p>
            上位15メニューに共通するのは、<strong>主食を控えめにしている</strong>こと。
            ライスなし・ライト・ミニサイズなど、ちょっとした工夫でカロリーは大きく変わります。
            「メインはそのまま、主食を調整する」がダイエットランチの鉄則です。
          </p>
        </TipBox>

        {/* Mid CTA */}
        <CTABanner
          title="もっと低カロリーメニューを探す"
          subtitle="たべなびなら500kcal以下のメニューをカロリー順に一覧検索できます"
        />

        {/* ─── Section 3: 目的別おすすめ ─── */}
        <SectionHeading id="by-purpose">
          目的別おすすめランチ
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          ダイエットの方法は人それぞれ。ここでは3つの目的別に最適なランチを紹介します。
        </p>

        {/* 高タンパク重視 */}
        <SubSectionHeading>高タンパク重視ランチ</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          筋トレと組み合わせてダイエットしている方には、
          <Marker>タンパク質25g以上</Marker>のランチがおすすめ。
          筋肉量を維持しながら体脂肪を落とすことで、リバウンドしにくい体を作ります。
        </p>

        <NutritionTable
          items={[
            { name: "デニーズ グリルチキン", calories: 425, protein: 37.6, fat: 27.6, carbs: 7.2, highlight: true },
            { name: "すき家 おんたま6個", calories: 368, protein: 30.4, fat: 20.5, carbs: 15.5, highlight: true },
            { name: "やよい軒 銀鮭の塩焼定食(白米)", calories: 499, protein: 30.0, fat: 16.8, carbs: 62.9, highlight: true },
            { name: "デニーズ 牛みすじステーキ(約120g)", calories: 274, protein: 25.2, fat: 14.9, carbs: 7.7 },
            { name: "コンビニ サラダチキン+ゆで卵+おにぎり", calories: 427, protein: 39.8, fat: 12.0, carbs: 39.1, highlight: true },
          ]}
          highlightProtein
        />

        <TipBox title="高タンパクランチのコツ">
          <p>
            鶏肉・魚・卵を中心に選ぶのがポイント。コンビニなら
            <strong>サラダチキン（P24.1g）＋ゆで卵（P11.0g）＋おにぎり1個</strong>の
            組み合わせで、タンパク質約40gを確保できます。
          </p>
        </TipBox>

        {/* 低脂質重視 */}
        <SubSectionHeading>低脂質重視ランチ</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          脂質制限（ローファット）ダイエット中の方には、
          <Marker>脂質10g以下</Marker>のランチメニューがおすすめ。
          脂質は1gあたり9kcalと高カロリーなので、脂質を抑えるだけで
          効率的にカロリーカットできます。
        </p>

        <NutritionTable
          items={[
            { name: "サブウェイ サラダチキン サラダ", calories: 93, protein: 14.7, fat: 0.8, carbs: 8.3, highlight: true },
            { name: "サブウェイ チリチキン（レギュラー）", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7, highlight: true },
            { name: "コンビニ サラダチキン+おにぎり1個", calories: 293, protein: 28.8, fat: 2.6, carbs: 38.5, highlight: true },
            { name: "やよい軒 しゃけの塩焼朝食(白米)", calories: 378, protein: 26.2, fat: 8.2, carbs: 59.7, highlight: true },
            { name: "すき家 鮭定食（ミニ）", calories: 436, protein: 21.2, fat: 10.1, carbs: 66.4 },
          ]}
          highlightProtein
        />

        <p className="text-gray-700 leading-relaxed mb-4">
          サブウェイは脂質を抑えたい方にとって最強のチェーン店です。
          チリチキンの脂質は<Marker color="green">わずか4.1g</Marker>、サラダチキン サラダなら脂質0.8g。
          さらに野菜を無料で増量でき、満足感もアップします。
        </p>

        {/* コスパ重視 */}
        <SubSectionHeading>コスパ重視ランチ</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          毎日のランチだからこそ、<Marker>500円以下</Marker>でダイエットランチを実現したい方へ。
          コスパの良いチェーン店メニューを紹介します。
        </p>

        <ComparisonTable
          headers={["メニュー", "カロリー", "P / F / C", "価格", "1kcalあたり"]}
          rows={[
            ["サイゼリヤ 辛味チキン", "295 kcal", "非公開", "300円", "1.02円"],
            ["サイゼリヤ 若鶏のディアボラ風", "683 kcal", "非公開", "500円", "0.73円"],
            ["すき家 牛丼ライト（並盛）", "397 kcal", "22.8g / 26.8g / 16.8g", "430円", "1.08円"],
            ["吉野家 牛皿（並盛）", "281 kcal", "13.5g / 22.9g / 5.2g", "368円", "1.31円"],
            ["コンビニ サラダチキン+ゆで卵", "248 kcal", "35.1g / 10.6g / 0.9g", "400円", "1.61円"],
          ]}
          bestRowIndex={1}
        />

        <TipBox title="コスパ最強はサイゼリヤ">
          <p>
            若鶏のディアボラ風（683kcal・500円）は<strong>1kcalあたり約0.73円</strong>と、
            食べ応えとカロリーコスパを両立できるチェーン店随一の一皿。
            辛味チキン（295kcal・300円）も低価格でしっかり満足感が得られます。
            ※サイゼリヤは公式にP/F/Cを公開していないため、ここではカロリー基準で比較しています。
          </p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=400&fit=crop"
          alt="コスパの良いヘルシーランチ"
        />

        <ServiceOffers tag="diet" heading="ランチも栄養バランスよく。宅配食という選択肢" />

        {/* ─── Section 4: 避けるべきメニュー ─── */}
        <SectionHeading id="avoid-menus">
          ランチで避けるべきメニュー
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          ダイエット中のランチで<Marker color="blue">700kcal以上のメニュー</Marker>は避けたいところ。
          以下のメニューは「つい頼みがち」ですが、カロリーが非常に高いので要注意です。
        </p>

        <ComparisonTable
          headers={["メニュー", "カロリー", "ダイエットランチとの差"]}
          rows={[
            ["カツ丼", "約900 kcal", "+400〜500 kcal"],
            ["ラーメン+チャーハンセット", "約1,200 kcal", "+700〜800 kcal"],
            ["天丼", "約850 kcal", "+350〜450 kcal"],
            ["カルボナーラ", "約800 kcal", "+300〜400 kcal"],
            ["マクドナルド ビッグマックセット", "約1,100 kcal", "+600〜700 kcal"],
            ["ファミレス ハンバーグ定食", "約900 kcal", "+400〜500 kcal"],
            ["牛丼（大盛）+味噌汁+サラダ", "約950 kcal", "+450〜550 kcal"],
          ]}
        />

        <WarningBox title="「ランチセット」の罠">
          <p>
            外食のランチセットは、メイン＋ごはん＋味噌汁＋ドリンクで
            一見お得に見えますが、カロリーは<strong>800〜1,000kcal超え</strong>が当たり前。
            特にドリンクバーで甘い飲み物を飲むと、さらに100〜200kcal追加されます。
            セットではなく単品で注文するのがダイエットの基本です。
          </p>
        </WarningBox>

        <SubSectionHeading>要注意！見た目はヘルシーなのに高カロリーなメニュー</SubSectionHeading>

        <NumberedList
          items={[
            {
              title: "タコライス（約700kcal）",
              body: "サラダっぽく見えますが、ごはんの上にチーズ・ひき肉・サルサソースがたっぷり。チーズとひき肉の脂質でカロリーが跳ね上がります。",
            },
            {
              title: "冷やし中華（約650kcal）",
              body: "さっぱりしたイメージですが、麺の糖質と胡麻ダレの脂質で意外と高カロリー。酢醤油ダレの方がやや低カロリーです。",
            },
            {
              title: "ツナマヨおにぎり2個+サラダ（約500kcal）",
              body: "ツナマヨは1個で約250kcal。マヨネーズの脂質が高く、おにぎり系ではカロリー高め。鮭おにぎり（179kcal）に変更するだけで140kcalカットできます。",
            },
            {
              title: "グラノーラ+ヨーグルト（約500kcal）",
              body: "ヘルシーに見えますが、グラノーラは砂糖と油脂が多く1食分で約400kcal。ダイエットフードとしての評価は要注意。",
            },
          ]}
        />

        {/* ─── Section 5: オフィスワーカー向け ─── */}
        <SectionHeading id="office-tips">
          オフィスワーカー向け実践テクニック
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          毎日のオフィスランチでダイエットを継続するための、
          すぐに使える実践テクニックを5つ紹介します。
        </p>

        <NumberedList
          items={[
            {
              title: "「ランチルーティン」を3パターン用意する",
              body: "毎日迷うと判断疲れでジャンクフードに流れがち。あらかじめ「サブウェイの日」「コンビニの日」「サイゼリヤの日」など3パターンを決めておくと、自動的にダイエットランチが選べます。",
            },
            {
              title: "12時前にランチを済ませる",
              body: "12〜13時のピークタイムは混雑でイライラし、つい高カロリーなメニューを頼みがち。11時半〜12時の間に食べるとゆっくり選べて、午後の血糖値の変動も穏やかになります。",
            },
            {
              title: "コンビニランチは「入店前に決める」",
              body: "コンビニに入ってから選ぶと、誘惑に負けてお菓子やデザートをカゴに入れてしまいます。入店前に「サラダチキン+おにぎり1個+サラダ」と決めてから入りましょう。",
            },
            {
              title: "午後の間食対策に「プロテイン」を常備",
              body: "ランチを500kcal以下に抑えると、15〜16時にお腹が空くことも。デスクにプロテインバーやプロテインパウダーを常備しておけば、間食で100〜150kcal・タンパク質15〜20gを補給でき、夕食のドカ食いも防げます。",
            },
            {
              title: "週1回は「ご褒美ランチ」を設ける",
              body: "毎日ストイックだと続きません。週1回は好きなものを食べるランチの日を作りましょう。精神的な余裕がダイエット継続の最大の秘訣です。ただし、2,000kcal超えは避けて。",
            },
          ]}
        />

        <TipBox title="1週間のダイエットランチ例">
          <p className="mb-2">以下は1週間の平均<strong>約350〜450kcal・高タンパク中心</strong>のランチプランです：</p>
          <ul className="space-y-1">
            <li>・ <strong>月：</strong>サブウェイ チリチキン（273kcal / P20.5g）</li>
            <li>・ <strong>火：</strong>コンビニ サラダチキン+おにぎり1個+サラダ（350kcal / P30.0g）</li>
            <li>・ <strong>水：</strong>サイゼリヤ 辛味チキン+小エビのサラダ（約493kcal / カロリー基準）</li>
            <li>・ <strong>木：</strong>すき家 牛丼ライト 並盛（397kcal / P22.8g）</li>
            <li>・ <strong>金：</strong>ご褒美ランチ（好きなもの、700kcal以下で）</li>
          </ul>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=800&h=400&fit=crop"
          alt="オフィスでのヘルシーランチ"
        />

        <WarningBox title="デスクランチの落とし穴">
          <p>
            パソコンを見ながらの「ながら食べ」は、満腹感を感じにくく食べ過ぎの原因になります。
            できるだけ<strong>15分以上かけて</strong>、食事に集中して食べましょう。
            咀嚼回数を増やすことで満腹中枢が刺激され、少量でも満足感が得られます。
          </p>
        </WarningBox>

        <AffiliateProductGrid
          title="ランチ難民を救うストック食品"
          productIds={["base-food-bread", "salada-chicken-pack", "tuna-can", "inbar-protein"]}
        />

        {/* ─── Section 6: まとめ ─── */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          ダイエット中のランチは「何を食べないか」ではなく「何を選ぶか」が大切です。
          チェーン店でも500kcal以下のメニューは豊富にあります。
          以下のポイントを実践して、ランチからダイエットを成功させましょう。
        </p>

        <CheckList
          items={[
            "ダイエット中のランチは500kcal以下を目安にする",
            "タンパク質20g以上を確保して筋肉量を維持",
            "サブウェイのチリチキン（273kcal・F4.1g）が総合1位",
            "サイゼリヤは辛味チキン+小エビのサラダで約493kcal（PFCは非公開）",
            "コンビニはサラダチキン+おにぎり1個が黄金コンビ",
            "セットではなく単品注文でカロリーをコントロール",
            "ランチルーティンを3パターン用意して迷わない仕組みを",
            "週1回のご褒美ランチで継続のモチベーションを維持",
            "たべなびでカロリー順にメニューを検索して事前準備",
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="あなたに合ったダイエットランチを探そう"
          subtitle="たべなびで32チェーン・6,000品以上からカロリーの低い順に検索できます"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="diet-lunch"
          items={[
            { q: "ダイエット中のランチで高タンパク質を摂るにはどうすればいい？", a: "タンパク質25g以上を目安に、鶏肉・魚・卵を中心に選びましょう。コンビニならサラダチキン（約24g）+ゆで卵（約11g）+おにぎり1個で約40gを確保できます。デニーズのグリルチキン（425kcal・P37.6g）、すき家のおんたま6個（368kcal・P30.4g）、やよい軒の銀鮭の塩焼定食（499kcal・P30.0g）も高タンパクで筋肉維持に有効です。" },
            { q: "外食でランチを500kcal以下に抑える工夫は？", a: "主食を控えめにするのが鉄則です。ライスなし、ミニサイズ、ライト版を選択。セットではなく単品注文し、ドリンクバーの甘い飲み物は避けましょう。サブウェイなら野菜を無料で増量できます。" },
            { q: "見た目はヘルシーでも実は高カロリーなランチメニューは？", a: "タコライス（約700kcal）、冷やし中華（約650kcal）、ツナマヨおにぎり2個（約500kcal）、グラノーラ+ヨーグルト（約500kcal）が要注意。チーズ・マヨネーズ・砂糖が隠れているため、栄養表示を確認することが大切です。" },
            { q: "コスパが良いダイエットランチのおすすめは？", a: "サイゼリヤの若鶏のディアボラ風（683kcal・500円）は1kcalあたり約0.73円とカロリーコスパが最強。辛味チキン（295kcal・300円）も低価格で満足感があります（サイゼリヤはP/F/Cを公式に非公開のためカロリー基準で比較）。すき家の牛丼ライト 並盛（397kcal・430円・P22.8g）や吉野家の牛皿 並盛（281kcal・368円）もコスパ良好です。" },
            { q: "オフィスワーカーがダイエットランチを継続するコツは？", a: "あらかじめ3パターンのランチルーティンを決めておく、12時前に食べる、コンビニは入店前に選ぶメニューを決める、午後の間食にプロテインを常備、週1回のご褒美ランチでモチベーション維持が重要です。ながら食べは避け15分以上かけて食べましょう。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="diet-lunch" />

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-10 mb-4">
          ※ 掲載されている栄養成分は各チェーンの公式情報を基にしており、
          店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
          ダイエットを行う際は、体調の変化に注意し、必要に応じて医師や管理栄養士にご相談ください。
        </p>

        {/* Back link */}
        <div className="text-center pb-8">
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
