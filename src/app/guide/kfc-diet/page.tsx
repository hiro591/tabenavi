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
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/kfc-diet" },
  title:
    "【2026年最新】ケンタッキーダイエットガイド｜意外と高タンパクなメニューの選び方 | たべなび",
  description:
    "ケンタッキー（KFC）のカロリーランキング、高タンパクおすすめメニュー、ダイエット中の食べ方を徹底解説。オリジナルチキン218kcal・P16.5gなど具体的な栄養データで紹介。",
  keywords: [
    "ケンタッキー ダイエット",
    "KFC カロリー",
    "ケンタッキー タンパク質",
    "ケンタッキー 低カロリー",
    "KFC ダイエット",
  ],
  openGraph: {
    title: "【2026年最新】ケンタッキーダイエットガイド｜意外と高タンパクなメニューの選び方",
    description:
      "ケンタッキーのカロリーランキング、高タンパクおすすめメニュー、ダイエット中の食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/kfc-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ケンタッキーダイエットガイド｜意外と高タンパクなメニューの選び方",
  description:
    "ケンタッキーのカロリーランキング、高タンパクおすすめメニュー、ダイエット中の食べ方を徹底解説。",
  datePublished: "2026-03-19",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/kfc-diet",
};

const tocItems = [
  { id: "why-kfc", label: "KFCはダイエットに向いてる?" },
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "high-protein", label: "高タンパクおすすめメニュー" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function KfcDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data for SEO - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ケンタッキーダイエットガイド"
        subtitle="意外と高タンパクなメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=400&fit=crop"
        breadcrumb="ケンタッキーダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="kfc-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中にケンタッキー（KFC）はNG」と思っていませんか？
          実は、<Marker>ケンタッキーのチキンは高タンパク・低糖質で、選び方次第でダイエットの強い味方</Marker>になります。
          オリジナルチキン1ピースは218kcal・タンパク質16.5gと、コンビニのサラダチキンに匹敵する栄養バランスです。
        </p>
        <p className="mb-4">
          一方で、サイドメニューやセットの組み合わせ方を間違えると一食で1,000kcalを超えることも。<Marker color="blue">メニュー選びと組み合わせ方が成否を分けます</Marker>。
        </p>
        <p className="mb-8">
          この記事では、ケンタッキーの全メニューをカロリー順にランキングし、ダイエット中に最適な食べ方を具体的なPFCデータとともに徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: KFCはダイエットに向いてる? */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ケンタッキー（KFC）はダイエット中に食べられる？"}
          answer={"ケンタッキーはダイエットに向いているチェーン店です。オリジナルチキン1ピースは218kcal・タンパク質16.5g・炭水化物9.1gと高タンパク低糖質。チキン単品を選び、サイドはコールスロー、ドリンクはゼロカロリーにするなどメニュー選びを工夫することで、ダイエット中でも活用できます。"}
        />

        <SectionHeading id="why-kfc">KFCはダイエットに向いてる?</SectionHeading>

          <p className="mb-4">
            結論から言えば、<Marker>ケンタッキーはダイエットに「向いている」チェーン</Marker>です。その理由は、チキン自体が高タンパク食材であり、衣の部分を除けば脂質もそこまで高くないため。
          </p>

          <NumberedList
            items={[
              {
                title: "チキンは天然の高タンパク食材",
                body: "鶏肉はタンパク質が豊富で必須アミノ酸のバランスも優秀。オリジナルチキン1ピースでP16.5g、2ピースならP33.0gと、筋トレ後の栄養補給にも十分な量を摂取できます。",
              },
              {
                title: "炭水化物が少ない",
                body: "オリジナルチキンの炭水化物はわずか9.1g。バーガーチェーンのようにバンズから大量の糖質を摂ることがなく、糖質制限ダイエットにも適しています。",
              },
              {
                title: "単品注文でカロリーをコントロールしやすい",
                body: "セットではなく単品でチキンだけを注文すれば、余計なサイドメニューのカロリーを避けられます。1ピース218kcalと計算しやすいのもメリットです。",
              },
            ]}
          />

          <TipBox title="KFC vs 他チェーンのタンパク質比較">
            <p>オリジナルチキン2ピース（436kcal / P33.0g）は、マクドナルドのダブルチーズバーガー（459kcal / P26.4g）よりも<Marker>高タンパクで糖質が大幅に低い</Marker>のがポイント。バンズがない分、炭水化物はわずか18.2gに抑えられます。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop" alt="ジューシーに揚がったフライドチキンのクローズアップ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">ケンタッキー カロリーランキング</SectionHeading>

          <p className="mb-4">
            KFCの主要メニューをカロリーの低い順にランキングしました。<Marker color="blue">チキン単品は100〜300kcal台とコントロールしやすい</Marker>一方、バーガーやツイスターは300kcal以上になることがわかります。
          </p>

          <NutritionTable
            items={[
              { name: "コールスローＳ", calories: 85, protein: 1.0, fat: 6.3, carbs: 6.3 },
              { name: "カーネルクリスピー", calories: 119, protein: 6.8, fat: 6.6, carbs: 8.2, highlight: true },
              { name: "骨なしケンタッキー", calories: 191, protein: 20.3, fat: 8.5, carbs: 8.3, highlight: true },
              { name: "フライドポテト S", calories: 195, protein: 2.6, fat: 7.8, carbs: 28.7 },
              { name: "ビスケット", calories: 211, protein: 3.2, fat: 12.5, carbs: 21.3 },
              { name: "オリジナルチキン", calories: 218, protein: 16.5, fat: 12.8, carbs: 9.1, highlight: true },
              { name: "ナゲット 5ピース", calories: 222, protein: 13.3, fat: 13.4, carbs: 11.8 },
              { name: "レモン香るパリパリ旨塩チキン", calories: 253, protein: 17.6, fat: 15.0, carbs: 11.9, highlight: true },
              { name: "レッドホットチキン", calories: 271, protein: 20.9, fat: 16.7, carbs: 9.3 },
              { name: "てりやきツイスター", calories: 360, protein: 11.6, fat: 18.8, carbs: 35.0 },
              { name: "チキンフィレバーガー", calories: 398, protein: 24.3, fat: 19.7, carbs: 31.1 },
              { name: "和風チキンカツバーガー", calories: 426, protein: 16.0, fat: 22.3, carbs: 40.5 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は公式サイトおよび店頭情報を基に作成。季節・地域限定メニューは一部除く。おすすめマークは260kcal以下のチキンメニューに表示。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>ポイントは<Marker>チキン単品（119〜271kcal）とバーガー・ツイスター類（360〜426kcal）の差</Marker>。バーガーにはバンズやソースのカロリーが加わるため、同じチキンでもカロリーが1.5〜2倍に。ダイエット中はバーガーよりもチキン単品を選ぶのが鉄則です。</p>
          </TipBox>
        </section>

        {/* Section 3: 高タンパクおすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクおすすめメニュー</SectionHeading>

          <p className="mb-6">
            KFCでダイエット中に積極的に選びたい高タンパクメニューをランキング形式で紹介します。<Marker>チキン系はすべてタンパク質が優秀</Marker>ですが、カロリーとのバランスが重要です。
          </p>

          <RankingCard rank={1} title="骨なしケンタッキー" subtitle="191kcal / P20.3g / F8.5g / C8.3g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker>191kcalでタンパク質20.3gはKFC屈指のカロリーパフォーマンス</Marker>。骨がないので食べやすく、オリジナルチキンよりも約27kcal低いうえにタンパク質はむしろ多いのがポイントです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              脂質も8.5gと控えめで、炭水化物は8.3gと低糖質。2個食べても382kcal / P40.6gと、1食分のタンパク質をしっかり確保できます。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="オリジナルチキン" subtitle="218kcal / P16.5g / F12.8g / C9.1g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              KFCの看板メニューであり、<Marker>ダイエット中にも安心して選べる一品</Marker>。1ピース218kcalでタンパク質16.5g、炭水化物わずか9.1gという優秀な栄養バランスが魅力です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              2ピース食べてもP33.0g / 436kcalと、1食分として十分コントロール可能。骨付きなので食べるのに時間がかかり、満腹感を得やすいのも隠れたメリットです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="チキンフィレバーガー" subtitle="398kcal / P24.3g / F19.7g / C31.1g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">バーガー類（ダブル系を除く）でタンパク質トップクラス</Marker>。P24.3gと高タンパクで、バンズが付くため満足感も高い。ただし炭水化物31.1gがあるため、糖質制限中は注意が必要です。ランチにしっかり食べたい日に最適。
            </p>
          </RankingCard>

          <SubSectionHeading>おすすめの組み合わせセット</SubSectionHeading>

          <NutritionCard
            name="オリジナルチキン2ピース + コールスローＳ"
            chain="ケンタッキー"
            calories={521}
            protein={34.0}
            fat={31.9}
            carbs={24.5}
            recommended
          />

          <p className="mb-4 mt-4">
            <Marker>521kcalでP34.0g</Marker>という、KFCダイエットの定番組み合わせ。コールスローで野菜も摂れるため栄養バランスも良好。ドリンクはゼロカロリーを選べば、1食550kcal以下に収まります。
          </p>

          <NutritionCard
            name="骨なしケンタッキー2個 + コールスローＳ"
            chain="ケンタッキー"
            calories={467}
            protein={41.6}
            fat={23.3}
            carbs={22.9}
            recommended
          />

          <p className="mb-8 mt-4">
            さらにカロリーを抑えたい方には骨なしケンタッキー2個がおすすめ。<Marker color="blue">467kcalでP41.6g</Marker>と、高タンパク低カロリーのダイエット食が完成します。食べやすさも魅力で、忙しいランチタイムに最適です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=400&fit=crop" alt="テーブルに並ぶ様々なチキンメニュー" />

          <CTABanner
            title="ケンタッキーのカロリーをサクッと検索"
            subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
          />
        </section>

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            KFCにはダイエット中に避けた方がよいメニューもあります。<Marker>特にサイドメニューとセットメニューには要注意</Marker>です。
          </p>

          <WarningBox title="ダイエット中は要注意なメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">和風チキンカツバーガー（426kcal）</span> ─ カツの衣 + バンズで脂質22.3g・炭水化物40.5g。同じバーガーならチキンフィレバーガーの方が28kcal低くタンパク質も多い。</li>
              <li><span className="font-bold">ビスケット（211kcal）</span> ─ タンパク質わずか3.2gで炭水化物21.3g。栄養的にはほぼ「甘いパン」です。</li>
              <li><span className="font-bold">フライドポテト S（195kcal）</span> ─ P2.6gしかなく、炭水化物28.7gとダイエットには不向き。チキン追加の方が圧倒的にコスパ良好。</li>
              <li><span className="font-bold">てりやきツイスター（360kcal）</span> ─ ソースの糖分で炭水化物35.0g。タンパク質11.6gに対してカロリーが割高。</li>
              <li><span className="font-bold">セットメニュー全般</span> ─ ポテト＋ドリンク＋ビスケットが付くと+400kcal以上。単品注文を徹底しましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["オリジナルチキン×2", "436 kcal", "33.0g", "25.6g", "18.2g"],
              ["和風チキンカツバーガー", "426 kcal", "16.0g", "22.3g", "40.5g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6 text-sm text-gray-700">
            上の表を見てわかる通り、<Marker>オリジナルチキン2ピースは和風チキンカツバーガーとほぼ同じカロリーながらタンパク質が2倍以上、炭水化物は半分以下</Marker>。バーガーの誘惑に負けず、チキン単品を選ぶ判断力がKFCダイエットの鍵です。
          </p>

          <SubSectionHeading>ナゲットは意外と優秀</SubSectionHeading>
          <p className="mb-4">
            見落とされがちですが、<Marker color="green">ナゲット5ピース（222kcal / P13.3g）はサイドメニューとしてはかなり優秀</Marker>。フライドポテト S（195kcal / P2.6g）と比べると、カロリーは27kcal高いだけでタンパク質は約5倍です。
          </p>

          <NutritionCard
            name="ナゲット 5ピース"
            chain="ケンタッキー"
            calories={222}
            protein={13.3}
            fat={13.4}
            carbs={11.8}
          />

          <p className="mb-8 mt-4">
            オリジナルチキン1ピース＋ナゲット5ピースなら<Marker>440kcal / P29.8g</Marker>。チキンだけで飽きてしまう方は、ナゲットで変化をつけるのも一つの手です。
          </p>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">ダイエット中のKFC 食べ方のコツ</SectionHeading>

          <p className="mb-6">
            ケンタッキーでダイエット効果を最大化するためのテクニックを紹介します。<Marker>ちょっとした工夫で、同じメニューでもカロリーを大幅にカット</Marker>できます。
          </p>

          <SubSectionHeading>コツ1：衣を一部はがして食べる</SubSectionHeading>
          <p className="mb-6">
            オリジナルチキンのカロリーの約40%は衣に集中しています。<Marker color="blue">衣を半分はがすだけで約50〜60kcalカット</Marker>が可能。完全にはがす必要はなく、厚い部分だけ取り除くのがおすすめです。タンパク質はほぼそのまま残るため、PFCバランスが劇的に改善します。
          </p>

          <SubSectionHeading>コツ2：サイドはコールスローを選ぶ</SubSectionHeading>
          <p className="mb-6">
            フライドポテト S（195kcal）の代わりにコールスローＳ（85kcal）を選ぶと<Marker color="green">約110kcalカット</Marker>。さらに食物繊維やビタミンも摂れる可能性があり一石二鳥です。どうしてもサイドが欲しい場合はコールスロー一択と覚えましょう。
          </p>

          <SubSectionHeading>コツ3：ドリンクはゼロカロリーを徹底</SubSectionHeading>
          <p className="mb-6">
            ペプシコーラ（100kcal）をブラックコーヒー（2kcal）やお茶に変えるだけで約100kcalの節約。<Marker>食事全体で見ると「ドリンクの差」が意外と大きい</Marker>のです。
          </p>

          <SubSectionHeading>コツ4：部位の選び方を意識する</SubSectionHeading>
          <p className="mb-6">
            オリジナルチキンには5つの部位（キール・ウィング・リブ・サイ・ドラム）がありますが、<Marker>最も低脂質なのはキール（胸肉）</Marker>で、脂質が他の部位より2〜3g少ないとされています。注文時に「キールでお願いします」と伝えると、在庫があれば対応してもらえます。
          </p>

          <ComparisonTable
            headers={["部位", "特徴", "脂質の目安", "おすすめ度"]}
            rows={[
              ["キール（胸）", "最も低脂質・あっさり", "少なめ", "★★★"],
              ["ウィング（手羽）", "小ぶり・食べやすい", "やや少なめ", "★★☆"],
              ["リブ（あばら）", "ジューシー・骨が多い", "普通", "★★☆"],
              ["ドラム（脚）", "食べ応えあり", "やや多め", "★☆☆"],
              ["サイ（腰）", "最も大きい・脂多め", "多め", "★☆☆"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>コツ5：食べる時間帯を意識する</SubSectionHeading>
          <p className="mb-8">
            同じメニューでも食べるタイミングで体への影響が変わります。<Marker color="green">ケンタッキーを食べるなら昼食がベスト</Marker>。活動量が多い日中に食べれば、摂取したカロリーを消費しやすくなります。夜遅い時間帯の摂取は脂質が体脂肪になりやすいため、できれば20時前に食べ終えましょう。
          </p>

          <WarningBox title="深夜のKFCに注意">
            <p>ケンタッキーはデリバリー対応も多く、深夜に注文しがち。しかし<Marker>22時以降は夜間時間帯</Marker>で脂肪が蓄積しやすくなる可能性を指摘する研究もありますが、ダイエットの基本はカロリー収支です。どうしても夜食が必要な場合は、骨なしケンタッキー1個（191kcal）に留めましょう。</p>
          </WarningBox>

          <TipBox title="最強のKFCダイエットセット">
            <p>おすすめの注文は<Marker>「オリジナルチキン2ピース（キール指定）＋コールスローＳ＋ゼロカロリードリンク」</Marker>。合計521kcal / P34.0g / C24.5gで、満足感の高い食事が完成します。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="バランスの取れた食事プレートのイメージ" />

          <CTABanner
            title="そのメニュー、何kcal？ たべなびで今すぐ検索"
            subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
          />
        </section>

        <AffiliateProductGrid
          title="KFCの脂質を翌日にリカバリーする4点"
          productIds={["ultora-whey", "kombu-cha", "miso-soup-pack", "tanita-scale"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ケンタッキーはダイエット中でも賢く活用できるチェーン店です。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "骨なしケンタッキー（191kcal / P20.3g / C8.3g）は低糖質・高タンパクの最優秀メニュー",
              "オリジナルチキン（218kcal / P16.5g / C9.1g）も低糖質・高タンパクで使いやすい",
              "2ピースで436kcal・P33.0g。1食分として十分なタンパク質を確保できる",
              "バーガー・ツイスター類よりチキン単品を選ぶことでカロリーを大幅カット",
              "サイドはポテトではなくコールスローＳ（85kcal）を選択",
              "セットメニューは+400kcal以上。単品注文を徹底する",
              "衣を一部はがすテクニックで脂質をさらにカットできる可能性",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はケンタッキー公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="kfc-diet"
          items={[
            { q: "ケンタッキーで最もカロリーが低いメニューは何？", a: "チキン系で最も低いのはカーネルクリスピーで119kcal。タンパク質とのバランスを考えると、骨なしケンタッキー（191kcal・タンパク質20.3g）が最も優秀なカロリーパフォーマンスを発揮します。" },
            { q: "ケンタッキーで避けるべきメニューは？", a: "避けたいのは和風チキンカツバーガー（426kcal）、フライドポテト S（195kcal・タンパク質2.6g）、セットメニューです。セットはポテト・ドリンク・ビスケットで+400kcal以上。単品注文を徹底しましょう。" },
            { q: "ケンタッキーでタンパク質が最も多いメニューは？", a: "単品ではダブルチキンフィレバーガーが44.6gで最多、チーズチキンフィレバーガーなども26.8gと高タンパクです。チキン単品なら骨なしケンタッキーが20.3gで優秀。オリジナルチキン2ピースなら33.0gとカロリーを抑えつつしっかり確保でき、ダイエット中はチキン単品がおすすめです。" },
            { q: "ケンタッキーで賢い食べ方のコツは？", a: "衣を一部はがすと脂質をさらにカットできる可能性があり、サイドはフライドポテト S（195kcal）からコールスローＳ（85kcal）に変更すると約110kcalカット。ドリンクはゼロカロリー、食べるなら昼食時がおすすめです。" },
            { q: "ケンタッキーで高タンパクなおすすめメニュー組み合わせは？", a: "「オリジナルチキン2ピース＋コールスローＳ＋ゼロカロリードリンク」で521kcal・タンパク質34.0g。または「骨なしケンタッキー2個＋コールスローＳ」で467kcal・タンパク質41.6gがおすすめです。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全栄養値をたべなびDBの実測値に更新（オリジナルチキン237→218kcal、骨なしケンタッキー204→191kcal・P15.8→20.3g等）。実在しないメニュー（チキンフィレサンド・和風チキンカツサンド・辛口チキン）を実在のバーガー・チキンへ差し替え。ランキング・比較・FAQ・まとめを実値に合わせて再構成。" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="kfc-diet" />

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
