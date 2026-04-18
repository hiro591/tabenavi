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
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductCard,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】糖質制限中でも外食OK！チェーン店の低糖質メニュー完全ガイド | たべなび",
  description:
    "糖質制限・ロカボダイエット中でも安心して外食できるチェーン店の低糖質メニューを徹底紹介。サイゼリヤ・吉野家・すき家・マクドナルド・サブウェイ・コンビニの糖質20g以下メニューをPFCデータ付きで完全解説。",
  keywords: [
    "糖質制限 外食",
    "ロカボ チェーン店",
    "低糖質 メニュー",
    "糖質オフ 外食",
    "糖質制限 ダイエット",
    "ロカボ メニュー",
    "低糖質 チェーン店",
  ],
  openGraph: {
    title:
      "【2026年最新】糖質制限中でも外食OK！チェーン店の低糖質メニュー完全ガイド",
    description:
      "糖質制限中でも安心して外食できるチェーン店の低糖質メニューをPFCデータ付きで完全解説。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】糖質制限中でも外食OK！チェーン店の低糖質メニュー完全ガイド",
  description:
    "糖質制限・ロカボダイエット中でも安心して外食できるチェーン店の低糖質メニューを徹底紹介。",
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/low-carb-eating-out",
};

const tocItems = [
  { id: "carb-basics", label: "糖質制限の基本｜1食の糖質目安は20〜40g" },
  { id: "chain-ranking", label: "チェーン店別 低糖質メニューランキング" },
  { id: "avoid-menus", label: "糖質制限中に避けるべきメニュー" },
  { id: "tips", label: "糖質制限×外食の5つのコツ" },
  { id: "summary", label: "まとめ" },
];

export default function LowCarbEatingOutPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="糖質制限中でも外食OK！チェーン店の低糖質メニュー完全ガイド"
        subtitle="ロカボダイエット中でも安心して外食を楽しむための、チェーン店別おすすめメニュー"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="低糖質メニューガイド"
      />

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <TableOfContents items={tocItems} />
      </div>

      <ArticleLayout tocItems={tocItems} currentSlug="low-carb-eating-out">
        {/* Authority & date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: 2026年3月19日
        </p>
        <AffiliateDisclosure />

        <p className="text-gray-700 leading-relaxed mb-4">
          糖質制限ダイエット（ロカボダイエット）は、ごはんやパンなどの糖質を控えることで
          血糖値の急上昇を抑え、脂肪の蓄積を防ぐダイエット法です。
          しかし、外食では「何を食べればいいかわからない」と悩む方が多いのではないでしょうか。
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          このガイドでは、主要チェーン店の<Marker>糖質20g以下のメニュー</Marker>を中心に、
          糖質制限中でも安心して外食できるメニューを<Marker color="green">PFCデータ付き</Marker>で徹底解説します。
          正しいメニュー選びさえできれば、外食を我慢する必要はありません。
        </p>

        {/* ─── Section 1: 糖質制限の基本 ─── */}
        <SectionHeading id="carb-basics">
          糖質制限の基本｜1食の糖質目安は20〜40g
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          糖質制限にはいくつかのレベルがあり、目的や体質に合わせて選ぶことが大切です。
          一般的に「ロカボ」と呼ばれるゆるやかな糖質制限では、
          <Marker>1食あたりの糖質を20〜40g</Marker>に抑えるのが基本です。
        </p>

        <ComparisonTable
          headers={["レベル", "1食の糖質目安", "1日の糖質合計", "難易度"]}
          rows={[
            ["スーパー糖質制限", "10〜20g", "30〜60g", "上級者向け"],
            ["スタンダード糖質制限", "20〜40g", "70〜130g", "おすすめ"],
            ["プチ糖質制限", "40〜60g", "130〜180g", "初心者向け"],
          ]}
          bestRowIndex={1}
        />

        <p className="text-gray-700 leading-relaxed mb-4">
          ちなみに、白米1杯（150g）の糖質は約<Marker color="blue">55.2g</Marker>。
          これだけで1食分の糖質枠をほぼ使い切ってしまいます。
          つまり、糖質制限中の外食では<Marker>「主食をどうするか」</Marker>が最大のポイントです。
        </p>

        <TipBox title="糖質と炭水化物の違い">
          <p>
            栄養表示の「炭水化物」は糖質＋食物繊維の合計値です。
            糖質制限で注意すべきは「糖質」の方。食物繊維は血糖値を上げないため、
            炭水化物量から食物繊維を引いた数値が実際の糖質量になります。
            多くのチェーン店では炭水化物のみ表示されているため、
            このガイドでは炭水化物（C）の数値を糖質の目安として記載しています。
          </p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="糖質制限中の食事イメージ"
        />

        <WarningBox title="極端な糖質カットは危険">
          <p>
            糖質は脳のエネルギー源です。1日の糖質を30g以下にする極端な制限は、
            集中力の低下、疲労感、低血糖症状を引き起こす可能性があります。
            特に運動習慣がある方は、最低でも1日70g以上の糖質を確保しましょう。
            持病がある方は必ず医師に相談してください。
          </p>
        </WarningBox>

        {/* ─── Section 2: チェーン店別ランキング ─── */}
        <SectionHeading id="chain-ranking">
          チェーン店別 低糖質メニューランキング
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          実際にチェーン店で選べる低糖質メニューを、店舗別に紹介します。
          各メニューの<Marker>PFC（タンパク質・脂質・炭水化物）</Marker>を記載しているので、
          自分の目標に合わせて選びましょう。
        </p>

        {/* ── サイゼリヤ ── */}
        <RankingCard
          rank={1}
          title="サイゼリヤ"
          subtitle="低糖質メニューの宝庫！ライスを抜けば糖質10g台も多数"
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            サイゼリヤは<Marker>おかず単品が充実</Marker>しており、
            ライスを頼まなければ自然と低糖質になります。
            特に肉料理・前菜系は糖質が低く、糖質制限の強い味方です。
          </p>
          <NutritionTable
            items={[
              { name: "若鶏のグリル（ディアボラ風）", calories: 514, protein: 35.6, fat: 37.1, carbs: 10.8, highlight: true },
              { name: "リブステーキ", calories: 556, protein: 30.0, fat: 41.7, carbs: 12.3 },
              { name: "辛味チキン", calories: 280, protein: 22.3, fat: 19.0, carbs: 5.0, highlight: true },
              { name: "柔らか青豆の温サラダ", calories: 171, protein: 6.4, fat: 11.7, carbs: 9.5 },
              { name: "小エビのサラダ", calories: 120, protein: 7.8, fat: 7.2, carbs: 5.1 },
            ]}
          />
          <TipBox title="サイゼリヤ攻略法">
            <p>
              若鶏のグリルは<strong>糖質わずか10.8g</strong>でタンパク質35.6g。
              糖質制限中の最強メニューです。サラダ＋肉料理の組み合わせで、
              1食の糖質を20g以下に抑えられます。ライスとパンは我慢しましょう。
            </p>
          </TipBox>
        </RankingCard>

        {/* ── 吉野家 ── */}
        <RankingCard
          rank={2}
          title="吉野家"
          subtitle="ライザップ牛サラダで糖質制限の定番に"
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            吉野家は牛丼チェーンですが、実は<Marker>糖質制限対応メニュー</Marker>があります。
            特にライザップとのコラボメニュー「ライザップ牛サラダ」は、
            ごはんの代わりに豆腐と野菜を使った糖質制限者向けの人気メニューです。
          </p>
          <NutritionTable
            items={[
              { name: "ライザップ牛サラダ", calories: 414, protein: 28.0, fat: 27.4, carbs: 17.2, highlight: true },
              { name: "牛皿（並）", calories: 267, protein: 15.3, fat: 19.4, carbs: 6.5, highlight: true },
              { name: "牛丼（並）※参考", calories: 635, protein: 20.0, fat: 23.4, carbs: 89.0 },
            ]}
          />
          <TipBox title="吉野家で糖質を抑えるコツ">
            <p>
              牛丼並盛の糖質は<strong>約89g</strong>と1食分を大幅に超えます。
              ライザップ牛サラダなら<strong>糖質17.2g</strong>で済むので、
              差は約72g。牛皿単品＋サラダという注文も糖質を抑える有効な手段です。
            </p>
          </TipBox>
        </RankingCard>

        {/* ── すき家 ── */}
        <RankingCard
          rank={3}
          title="すき家"
          subtitle="牛丼ライトで糖質半分以下に"
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            すき家の「牛丼ライト」は、ごはんの代わりに豆腐を使用したメニューで、
            通常の牛丼と比べて<Marker>糖質を約60%カット</Marker>できます。
          </p>
          <NutritionTable
            items={[
              { name: "牛丼ライト（並）", calories: 425, protein: 25.5, fat: 26.0, carbs: 22.5, highlight: true },
              { name: "まぐろたたき丼ライト", calories: 307, protein: 22.8, fat: 12.1, carbs: 25.6 },
              { name: "牛丼（並）※参考", calories: 638, protein: 17.2, fat: 22.0, carbs: 90.5 },
            ]}
          />
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            牛丼ライトの糖質22.5gは、スタンダード糖質制限の基準（20〜40g）を
            クリアしています。通常の牛丼（90.5g）と比較すると<Marker color="green">糖質68g削減</Marker>です。
          </p>
        </RankingCard>

        {/* ── マクドナルド ── */}
        <SubSectionHeading>マクドナルド</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          マクドナルドはバンズ（パン）の糖質が高いのが難点ですが、
          <Marker>単品注文＋サイドサラダ</Marker>の組み合わせで糖質を抑えることが可能です。
          セットのポテトは糖質の塊なので必ず避けましょう。
        </p>
        <NutritionTable
          items={[
            { name: "チキンマックナゲット（5個）", calories: 270, protein: 15.8, fat: 17.2, carbs: 13.1, highlight: true },
            { name: "サイドサラダ", calories: 10, protein: 0.6, fat: 0.1, carbs: 2.1, highlight: true },
            { name: "エッグマックマフィン", calories: 311, protein: 19.2, fat: 13.5, carbs: 27.0 },
            { name: "ハンバーガー", calories: 256, protein: 12.8, fat: 9.4, carbs: 30.3 },
            { name: "マックフライポテト（M）※参考", calories: 410, protein: 5.3, fat: 20.1, carbs: 51.0 },
          ]}
        />
        <WarningBox title="マクドナルドの注意点">
          <p>
            バーガー1個でも糖質は<strong>27〜30g</strong>あります。
            ポテトM（糖質51g）をセットにすると1食で80g超え。
            糖質制限中はナゲット＋サラダの組み合わせ（糖質計15.2g）がベストです。
            てりやきソース系は砂糖が多いので避けましょう。
          </p>
        </WarningBox>

        {/* ── サブウェイ ── */}
        <SubSectionHeading>サブウェイ</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          サブウェイはパンのサイズを選べるのが強みです。
          また、サラダに変更できるため、糖質制限中はサラダ版を選ぶのがおすすめです。
        </p>
        <NutritionTable
          items={[
            { name: "チキンブレスト（サラダ）", calories: 148, protein: 18.0, fat: 3.8, carbs: 10.5, highlight: true },
            { name: "ローストビーフ（サラダ）", calories: 139, protein: 15.2, fat: 4.1, carbs: 10.8, highlight: true },
            { name: "ターキーブレスト（サラダ）", calories: 132, protein: 15.5, fat: 3.0, carbs: 10.2, highlight: true },
            { name: "BLT（レギュラー）※参考", calories: 328, protein: 13.6, fat: 11.8, carbs: 41.5 },
          ]}
        />
        <TipBox title="サブウェイ糖質制限テクニック">
          <p>
            すべてのサンドイッチは<strong>「サラダに変更」</strong>が可能です。
            パンをなくすだけで糖質を約30g削減できます。
            ドレッシングはオイル＆ビネガー（糖質約1g）を選びましょう。
            マヨネーズ系も糖質は低め（約0.5g）です。
          </p>
        </TipBox>

        {/* ── コンビニ ── */}
        <SubSectionHeading>コンビニ（セブン・ファミマ・ローソン）</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          コンビニは<Marker>糖質制限の最強の味方</Marker>です。
          個包装で栄養表示が明確なため、糖質量を正確に把握できます。
          特にローソンは「ロカボ」シリーズが充実しています。
        </p>
        <NutritionTable
          items={[
            { name: "サラダチキン（プレーン）", calories: 114, protein: 24.1, fat: 1.2, carbs: 0.3, highlight: true },
            { name: "ゆでたまご（2個入り）", calories: 134, protein: 11.0, fat: 9.4, carbs: 0.6, highlight: true },
            { name: "ブランパン（ローソン・2個入）", calories: 120, protein: 6.8, fat: 3.6, carbs: 4.4, highlight: true },
            { name: "枝豆（冷凍）", calories: 118, protein: 10.2, fat: 5.3, carbs: 5.8 },
            { name: "ギリシャヨーグルト", calories: 90, protein: 10.0, fat: 0.2, carbs: 11.0 },
            { name: "おにぎり（鮭）※参考", calories: 179, protein: 4.7, fat: 1.4, carbs: 38.2 },
          ]}
        />
        <TipBox title="コンビニ低糖質ランチの組み合わせ例">
          <p className="mb-2">以下の組み合わせで<strong>合計糖質5.3g、タンパク質35.1g</strong>：</p>
          <ul className="space-y-1">
            <li>・ サラダチキン（糖質0.3g / P24.1g）</li>
            <li>・ ゆでたまご2個（糖質0.6g / P11.0g）</li>
            <li>・ ミックスサラダ（糖質4.4g / P1.2g）</li>
          </ul>
          <p className="mt-2">合計カロリーも約300kcalと非常にヘルシーです。</p>
        </TipBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="低糖質メニューをもっと探す"
          subtitle="たべなびなら、栄養素でフィルターして糖質の低い順にメニューが見つかります"
        />

        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="低糖質な食事の盛り付けイメージ"
        />

        {/* ── 全チェーン比較テーブル ── */}
        <SubSectionHeading>チェーン店別 低糖質おすすめメニュー比較</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          各チェーン店のおすすめ低糖質メニューを一覧で比較します。
          <Marker>糖質（C）</Marker>の値に注目してください。
        </p>
        <ComparisonTable
          headers={["チェーン店", "おすすめメニュー", "カロリー", "糖質(C)", "タンパク質(P)"]}
          rows={[
            ["サイゼリヤ", "若鶏のグリル", "514 kcal", "10.8g", "35.6g"],
            ["吉野家", "ライザップ牛サラダ", "414 kcal", "17.2g", "28.0g"],
            ["すき家", "牛丼ライト", "425 kcal", "22.5g", "25.5g"],
            ["マクドナルド", "ナゲット5個+サラダ", "280 kcal", "15.2g", "16.4g"],
            ["サブウェイ", "チキンブレスト(サラダ)", "148 kcal", "10.5g", "18.0g"],
            ["コンビニ", "サラダチキン+ゆで卵", "248 kcal", "0.9g", "35.1g"],
          ]}
          bestRowIndex={5}
        />

        {/* ─── Section 3: 避けるべきメニュー ─── */}
        <SectionHeading id="avoid-menus">
          糖質制限中に避けるべきメニュー
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          糖質制限中に特に注意が必要なのは、<Marker color="blue">主食がメインのメニュー</Marker>です。
          以下のメニューは糖質が非常に高く、1食で1日分の糖質を摂ってしまうこともあります。
        </p>

        <SubSectionHeading>丼物・ごはん系</SubSectionHeading>
        <ComparisonTable
          headers={["メニュー", "糖質(C)", "1食目安との差"]}
          rows={[
            ["牛丼（並）", "89〜90g", "+50〜70g"],
            ["カツ丼", "110〜120g", "+70〜100g"],
            ["親子丼", "95〜105g", "+55〜85g"],
            ["カレーライス", "100〜130g", "+60〜110g"],
            ["チャーハン", "80〜100g", "+40〜80g"],
          ]}
        />

        <SubSectionHeading>麺類</SubSectionHeading>
        <ComparisonTable
          headers={["メニュー", "糖質(C)", "1食目安との差"]}
          rows={[
            ["ラーメン（醤油）", "65〜75g", "+25〜55g"],
            ["うどん", "50〜60g", "+10〜40g"],
            ["パスタ（トマト系）", "70〜85g", "+30〜65g"],
            ["焼きそば", "60〜80g", "+20〜60g"],
          ]}
        />

        <SubSectionHeading>パン・粉物系</SubSectionHeading>
        <ComparisonTable
          headers={["メニュー", "糖質(C)", "1食目安との差"]}
          rows={[
            ["サンドイッチ", "35〜50g", "+0〜30g"],
            ["菓子パン", "40〜70g", "+0〜50g"],
            ["お好み焼き", "50〜70g", "+10〜50g"],
            ["ピザ（1枚）", "60〜90g", "+20〜70g"],
          ]}
        />

        <WarningBox title="「ヘルシー」に見えても糖質が高いもの">
          <p className="mb-2">以下は健康的なイメージがありますが、糖質は意外と高めです：</p>
          <ul className="space-y-1">
            <li>・ <strong>春雨サラダ：</strong>春雨はでんぷんの塊で糖質20g前後</li>
            <li>・ <strong>フルーツスムージー：</strong>果糖が多く糖質40〜60g</li>
            <li>・ <strong>グラノーラ：</strong>1食分で糖質30〜40g</li>
            <li>・ <strong>脂肪ゼロヨーグルト（加糖）：</strong>糖質15〜20g</li>
          </ul>
        </WarningBox>

        {/* ─── Section 4: 5つのコツ ─── */}
        <SectionHeading id="tips">
          糖質制限×外食の5つのコツ
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          糖質制限中の外食を成功させるために、以下の5つのコツを実践しましょう。
          これさえ守れば、<Marker color="green">どんなお店でも糖質を40g以下に抑える</Marker>ことが可能です。
        </p>

        <NumberedList
          items={[
            {
              title: "主食（ライス・パン・麺）を減らす or 抜く",
              body: "糖質の大半は主食から来ます。「ライス抜き」「ライス少なめ」を基本にしましょう。吉野家やすき家では「ライト」メニュー、サブウェイではサラダ変更が使えます。主食を抜くだけで1食あたり40〜60gの糖質をカットできます。",
            },
            {
              title: "タンパク質と脂質でお腹を満たす",
              body: "糖質を減らすとお腹が空きやすくなります。その分、肉・魚・卵・チーズなどタンパク質と良質な脂質を増やしましょう。サイゼリヤの若鶏のグリルやステーキは高タンパク低糖質の代表格です。",
            },
            {
              title: "ソース・タレの糖質に注意する",
              body: "焼肉のタレ（大さじ1で糖質5〜8g）、照り焼きソース、ケチャップ、ポン酢（糖質少なめ）など、ソースの種類で糖質量は大きく変わります。塩・レモン・マヨネーズは低糖質。",
            },
            {
              title: "飲み物はお茶・水・ブラックコーヒー",
              body: "清涼飲料水1本で糖質30〜50g。ジュース、スポーツドリンク、カフェラテ（砂糖入り）は避けましょう。ハイボールや焼酎は糖質ゼロなのでお酒を飲む場合はこちらを選びましょう。",
            },
            {
              title: "事前にメニューの栄養成分を確認する",
              body: "多くのチェーン店は公式サイトで栄養成分を公開しています。たべなびなら複数チェーンのメニューを横断検索でき、糖質の低い順にソートできるので、行く前に確認する習慣をつけましょう。",
            },
          ]}
        />

        <TipBox title="お酒と糖質制限">
          <p className="mb-2">糖質制限中にお酒を飲む場合の糖質目安：</p>
          <ul className="space-y-1">
            <li>・ <strong>ハイボール：</strong>糖質 0g（おすすめ）</li>
            <li>・ <strong>焼酎（ロック/水割り）：</strong>糖質 0g（おすすめ）</li>
            <li>・ <strong>赤ワイン（グラス）：</strong>糖質 約1.5g</li>
            <li>・ <strong>ビール（中ジョッキ）：</strong>糖質 約15g（要注意）</li>
            <li>・ <strong>日本酒（1合）：</strong>糖質 約8g</li>
            <li>・ <strong>カクテル類：</strong>糖質 15〜30g（NG）</li>
          </ul>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
          alt="健康的な低糖質の食事"
        />

        <AffiliateProductCard productId="base-food-bread" />
        <AffiliateProductGrid
          title="自宅でも糖質コントロールするためのおすすめ"
          productIds={["low-carb-noodle", "ultora-whey", "tuna-can", "myprotein-impact"]}
        />

        {/* ─── Section 5: まとめ ─── */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          糖質制限中の外食は「制限」ではなく「選択」です。
          正しいメニューの選び方を知っていれば、チェーン店でも十分に糖質制限を継続できます。
          以下のポイントを押さえて、無理のない糖質コントロールを目指しましょう。
        </p>

        <CheckList
          items={[
            "スタンダード糖質制限は1食あたり糖質20〜40gが目安",
            "サイゼリヤの若鶏のグリル（糖質10.8g）が最強コスパ",
            "吉野家はライザップ牛サラダ（糖質17.2g）を選ぶ",
            "すき家は牛丼ライト（糖質22.5g）で糖質60%カット",
            "マクドナルドはナゲット＋サラダ（糖質15.2g）が正解",
            "コンビニのサラダチキン＋ゆで卵なら糖質1g以下",
            "主食を抜く・減らすだけで1食40〜60gの糖質カット",
            "ソース・タレ・飲み物の隠れ糖質に注意",
            "たべなびで事前にメニューの栄養成分をチェック",
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="あなたに合った低糖質メニューを探そう"
          subtitle="たべなびで20チェーン以上のメニューから糖質の低い順に検索できます"
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="low-carb-eating-out" />

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-10 mb-4">
          ※ 掲載されている栄養成分は各チェーンの公式情報を基にしており、
          店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
          糖質制限を行う際は、体調の変化に注意し、必要に応じて医師や管理栄養士にご相談ください。
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
