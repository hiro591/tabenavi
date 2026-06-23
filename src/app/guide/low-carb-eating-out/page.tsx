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
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductCard,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/low-carb-eating-out" },
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
  dateModified: "2026-06-23",
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
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
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="糖質制限中、外食で何を選ぶべき？1食あたり糖質20g以下のメニューは？"
          answer={
            <>
              <strong>「ご飯・パン・パスタを抜いて、肉/魚/卵/野菜をメインに」</strong>が基本ルール。糖質制限中の外食ベストは<strong>すき家「牛丼ライト 並盛」（豆腐ベース・糖質約17g）/ 吉野家「牛皿 並盛」（糖質約5g）＋サラダ / 焼肉系（タレなし）/ コンビニのサラダチキン</strong>。逆に避けたいのは<strong>丼物（糖質80g超）・ラーメン（糖質60g超）・パスタ（糖質70g超）・サンドイッチ（糖質40g超）</strong>。コンビニならゆで卵・鶏むね肉サラダ・チーズ・ナッツが鉄板です。
            </>
          }
        />

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
            特に肉料理・前菜系は主食を抜きやすく、糖質制限の強い味方です。
          </p>
          <ComparisonTable
            headers={["メニュー", "カロリー", "価格", "タイプ"]}
            rows={[
              ["若鶏のディアボラ風", "683 kcal", "¥500", "肉料理（主食なし）"],
              ["辛味チキン", "295 kcal", "¥300", "肉料理（主食なし）"],
              ["ビーフステーキ", "374 kcal", "¥1,090", "肉料理（主食なし）"],
              ["柔らか青豆の温サラダ", "206 kcal", "¥200", "前菜・サラダ"],
              ["小エビのサラダ", "198 kcal", "¥350", "前菜・サラダ"],
            ]}
            bestRowIndex={0}
          />
          <p className="text-xs text-gray-400 mt-2 mb-2">
            ※ サイゼリヤは公式にタンパク質・脂質・炭水化物（PFC）の数値を非公開のため、本記事ではカロリーと価格のみ掲載しています。糖質量を厳密に管理したい場合は、ライス・パンを頼まないことを基準にメニューを選んでください。
          </p>
          <TipBox title="サイゼリヤ攻略法">
            <p>
              若鶏のディアボラ風やビーフステーキなど、
              <strong>主食（ライス・パン）を頼まない肉料理</strong>が糖質制限の基本選択です。
              サラダ＋肉料理の組み合わせで、ご飯由来の糖質を丸ごとカットできます。
              ライスとパンは我慢しましょう。
            </p>
          </TipBox>
        </RankingCard>

        {/* ── 吉野家 ── */}
        <RankingCard
          rank={2}
          title="吉野家"
          subtitle="牛皿＋生野菜サラダでご飯抜きの糖質制限に"
        >
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            吉野家は牛丼チェーンですが、<Marker>牛皿（ご飯なし）＋生野菜サラダ</Marker>の
            組み合わせなら糖質を大きく抑えられます。
            ごはんを別オーダーにせず、おかず中心で注文するのがコツです。
          </p>
          <NutritionTable
            items={[
              { name: "牛皿 並盛", calories: 281, protein: 13.5, fat: 22.9, carbs: 5.2, highlight: true },
              { name: "生野菜サラダ", calories: 88, protein: 1.7, fat: 4.8, carbs: 9.7, highlight: true },
              { name: "牛丼（並）※参考", calories: 633, protein: 19.6, fat: 23.6, carbs: 88.2 },
            ]}
          />
          <TipBox title="吉野家で糖質を抑えるコツ">
            <p>
              牛丼並盛の糖質は<strong>約88g</strong>と1食分を大幅に超えます。
              牛皿並盛（糖質5.2g）＋生野菜サラダ（糖質9.7g）なら合計でも約15gに収まり、
              ご飯ありの牛丼と比べて糖質を約73gカットできます。
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
            通常の牛丼と比べて<Marker>糖質を約8割カット</Marker>できます。
          </p>
          <NutritionTable
            items={[
              { name: "牛丼ライト 並盛", calories: 397, protein: 22.8, fat: 26.8, carbs: 16.8, highlight: true },
              { name: "牛丼ライト ミニ", calories: 309, protein: 18.5, fat: 19.9, carbs: 14.8, highlight: true },
              { name: "牛丼（並）※参考", calories: 695, protein: 21.7, fat: 23.4, carbs: 99.8 },
            ]}
          />
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            牛丼ライト並盛の糖質16.8gは、スーパー糖質制限の基準（10〜20g）すら
            クリアしています。通常の牛丼（99.8g）と比較すると<Marker color="green">糖質83g削減</Marker>です。
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
            { name: "チキンマックナゲット 5ピース", calories: 262, protein: 15.3, fat: 15.9, carbs: 14.4, highlight: true },
            { name: "サイドサラダ", calories: 10, protein: 0.5, fat: 0.1, carbs: 2.3, highlight: true },
            { name: "エッグマックマフィン", calories: 310, protein: 18.6, fat: 13.6, carbs: 27.2 },
            { name: "ハンバーガー", calories: 259, protein: 13.0, fat: 9.5, carbs: 30.3 },
            { name: "マックフライポテト(M)※参考", calories: 409, protein: 5.5, fat: 19.8, carbs: 52.4 },
          ]}
        />
        <WarningBox title="マクドナルドの注意点">
          <p>
            バーガー1個でも糖質は<strong>27〜30g</strong>あります。
            ポテトM（糖質52g）をセットにすると1食で80g超え。
            糖質制限中はナゲット＋サラダの組み合わせ（糖質計16.7g）がベストです。
            てりやきソース系は砂糖が多いので避けましょう。
          </p>
        </WarningBox>

        {/* ── サブウェイ ── */}
        <SubSectionHeading>サブウェイ</SubSectionHeading>
        <p className="text-gray-700 leading-relaxed mb-4">
          サブウェイはパンのサイズを選べるのが強みです。
          また、サンドイッチとは別にサラダメニューも用意されているため、
          糖質制限中はパンなしのサラダを選ぶのがおすすめです。
        </p>
        <NutritionTable
          items={[
            { name: "サラダチキン サラダ", calories: 93, protein: 14.7, fat: 0.8, carbs: 8.3, highlight: true },
            { name: "サイドサラダ プレーン", calories: 96, protein: 7.3, fat: 5.2, carbs: 5.3, highlight: true },
            { name: "サラダチキン（ハニーマスタードソース）※参考", calories: 281, protein: 21.2, fat: 2.8, carbs: 44.1 },
            { name: "BLT（レギュラー）※参考", calories: 335, protein: 11.3, fat: 14.2, carbs: 41.9 },
          ]}
        />
        <TipBox title="サブウェイ糖質制限テクニック">
          <p>
            パンを使うサンドイッチは糖質が40g前後あるため、
            糖質制限中は<strong>サラダメニュー</strong>を選ぶのが基本です。
            サラダチキン サラダなら糖質8.3g・脂質0.8gと非常にヘルシー。
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
            { name: "たんぱく質が摂れる 国産鶏むね肉のサラダ（ローソン）", calories: 206, protein: 23.1, fat: 11.0, carbs: 4.9, highlight: true },
            { name: "ゆでたまご（2個）", calories: 134, protein: 11.0, fat: 9.4, carbs: 0.6, highlight: true },
            { name: "NL たんぱく質が摂れるブランパン 2個入（ローソン）", calories: 66, protein: 6.1, fat: 2.8, carbs: 6.1, highlight: true },
            { name: "枝豆（冷凍）", calories: 118, protein: 10.2, fat: 5.3, carbs: 5.8 },
            { name: "ギリシャヨーグルト", calories: 90, protein: 10.0, fat: 0.2, carbs: 11.0 },
            { name: "おにぎり（鮭）※参考", calories: 179, protein: 4.7, fat: 1.4, carbs: 38.2 },
          ]}
        />
        <p className="text-xs text-gray-400 mt-2 mb-2">
          ※ 枝豆・ギリシャヨーグルト等の一般食材は商品により数値が異なります。チェーン名を冠した値はローソン公式データに基づきます。
        </p>
        <TipBox title="コンビニ低糖質ランチの組み合わせ例">
          <p className="mb-2">以下の組み合わせで<strong>合計糖質9.9g、タンパク質35.3g</strong>：</p>
          <ul className="space-y-1">
            <li>・ 国産鶏むね肉のサラダ（糖質4.9g / P23.1g）</li>
            <li>・ ゆでたまご2個（糖質0.6g / P11.0g）</li>
            <li>・ ミックスサラダ（糖質4.4g / P1.2g）</li>
          </ul>
          <p className="mt-2">合計カロリーも約400kcalと、糖質を抑えつつ満足感のある組み合わせです。</p>
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
            ["サイゼリヤ", "若鶏のディアボラ風", "683 kcal", "非公開", "非公開"],
            ["吉野家", "牛皿 並盛", "281 kcal", "5.2g", "13.5g"],
            ["すき家", "牛丼ライト 並盛", "397 kcal", "16.8g", "22.8g"],
            ["マクドナルド", "ナゲット5個+サラダ", "272 kcal", "16.7g", "15.8g"],
            ["サブウェイ", "サラダチキン サラダ", "93 kcal", "8.3g", "14.7g"],
            ["コンビニ", "鶏むね肉のサラダ+ゆで卵", "340 kcal", "5.5g", "34.1g"],
          ]}
          bestRowIndex={5}
        />
        <p className="text-xs text-gray-400 mt-2 mb-2">
          ※ サイゼリヤは公式にPFCを非公開のためカロリーのみ掲載。
        </p>

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
            ["牛丼（並）", "88〜100g", "+50〜80g"],
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
              body: "糖質を減らすとお腹が空きやすくなります。その分、肉・魚・卵・チーズなどタンパク質と良質な脂質を増やしましょう。サイゼリヤの若鶏のディアボラ風やビーフステーキは、ライス・パンを抜けば糖質を抑えやすい肉料理の代表格です。",
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
            "サイゼリヤは若鶏のディアボラ風などライス・パンを抜く肉料理を選ぶ（PFCは公式非公開）",
            "吉野家は牛皿 並盛（糖質5.2g）＋生野菜サラダを選ぶ",
            "すき家は牛丼ライト 並盛（糖質16.8g）で糖質約8割カット",
            "マクドナルドはナゲット＋サラダ（糖質16.7g）が正解",
            "コンビニの鶏むね肉サラダ＋ゆで卵なら糖質約5gに収まる",
            "主食を抜く・減らすだけで1食40〜60gの糖質カット",
            "ソース・タレ・飲み物の隠れ糖質に注意",
            "たべなびで事前にメニューの栄養成分をチェック",
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="あなたに合った低糖質メニューを探そう"
          subtitle="たべなびで32チェーン・6,000品以上から糖質の低い順に検索できます"
        />

        {/* FAQ */}
        <FAQSection
          slug="low-carb-eating-out"
          items={[
            {
              q: "糖質制限中、外食で1食あたり何gが目安？",
              a: "ロカボ（緩い糖質制限）なら1食20〜40g、本格的な糖質制限（ケトジェニック）なら1食10〜20gが目安です。1日の総糖質量はロカボで70〜130g、ケトで20〜50g。外食で米・麺類を抜くだけで多くのメニューが基準内に収まります。",
            },
            {
              q: "外食で一番低糖質なメニューは？",
              a: "焼肉のカルビ・ロース（タレなし）、サラダチキン、刺身、ステーキ、グリルチキンなどの「肉/魚＋野菜のみ」メニューが最強で、糖質5g以下に抑えられます。具体的な定番は「すき家の牛丼ライト（豆腐ベース）」「吉野家の牛皿＋生野菜サラダ」「ガストの蒸し鶏と彩り野菜のサラダ」など。",
            },
            {
              q: "牛丼チェーンで糖質制限できる？",
              a: "可能です。①すき家の牛丼ライト 並盛（豆腐ベース・糖質約17g）が最強、②吉野家の牛皿 並盛（糖質5.2g）+ 生野菜サラダ、③松屋の牛皿+生野菜+味噌汁。普通の牛丼並盛は糖質88〜100g前後あるため、ご飯抜きor牛皿+サラダで対応するのが鉄則です。",
            },
            {
              q: "コンビニで糖質制限する時のおすすめは？",
              a: "サラダチキン（糖質1g）、ゆで卵（糖質0.4g）、チーズ（糖質1g以下）、ナッツ類、ローカーボ系の冷凍弁当、無糖ヨーグルト、サラダ。逆におにぎり（糖質40g）・サンドイッチ（糖質40g）・パン類（糖質30g以上）は避けましょう。",
            },
            {
              q: "ファミレスで糖質制限OKなメニューは？",
              a: "ガストの「蒸し鶏と彩り野菜のサラダ」、サイゼリヤの「若鶏のディアボラ風」「小エビのサラダ」、デニーズの「カットステーキ」「サーロインステーキ」など。共通点は「肉/魚メインで、ライス・パンを抜ける」こと。ライスは必ず別オーダーにしておくと食べてしまわないコツ。なおサイゼリヤ・ガストは公式にPFCを非公開のため、糖質量を厳密に管理したい場合はカロリー基準で選ぶのがおすすめです。",
            },
            {
              q: "糖質制限中、お酒は飲んでもいい？",
              a: "蒸留酒（焼酎、ウイスキー、ジン、ウォッカ）と糖質ゼロのハイボール・ノンアルコールビールはOK。ビール・日本酒・カクテル・甘いチューハイは糖質高めで避けたい。ワインは赤の方が糖質低めで、グラス1〜2杯までなら影響軽微です。",
            },
            {
              q: "ローカーボとケトジェニック、どう違う？",
              a: "ロカボ（ローカーボ）は1日の糖質を70〜130gに抑える「緩めの糖質制限」、ケトジェニックは20〜50gに抑える「厳格な糖質制限」。初心者・継続性重視ならロカボ、短期的な体重減少重視ならケト。ケトは数日〜2週間で「ケトーシス状態」に入る必要があり、不慣れだと頭痛・倦怠感（ケトフルー）が出る場合も。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-06-08", note: "32チェーン・6,000品以上に対応拡大。栄養数値を公式データで再検証" },
            { date: "2026-05-12", note: "QuickAnswer・FAQ・著者情報を追加。22チェーン対応" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
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
