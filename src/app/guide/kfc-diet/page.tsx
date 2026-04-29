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
} from "@/components/guide/ArticleComponents";
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】ケンタッキーダイエットガイド｜意外と高タンパクなメニューの選び方 | たべなび",
  description:
    "ケンタッキー（KFC）のカロリーランキング、高タンパクおすすめメニュー、ダイエット中の食べ方を徹底解説。オリジナルチキン237kcal・P16.7gなど具体的な栄養データで紹介。",
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
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中にケンタッキー（KFC）はNG」と思っていませんか？
          実は、<Marker>ケンタッキーのチキンは高タンパク・低糖質で、選び方次第でダイエットの強い味方</Marker>になります。
          オリジナルチキン1ピースは237kcal・タンパク質16.7gと、コンビニのサラダチキンに匹敵する栄養バランスです。
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
          <SectionHeading id="why-kfc">KFCはダイエットに向いてる?</SectionHeading>

          <p className="mb-4">
            結論から言えば、<Marker>ケンタッキーはダイエットに「向いている」チェーン</Marker>です。その理由は、チキン自体が高タンパク食材であり、衣の部分を除けば脂質もそこまで高くないため。
          </p>

          <NumberedList
            items={[
              {
                title: "チキンは天然の高タンパク食材",
                body: "鶏肉はタンパク質が豊富で必須アミノ酸のバランスも優秀。オリジナルチキン1ピースでP16.7g、2ピースならP33.4gと、筋トレ後の栄養補給にも十分な量を摂取できます。",
              },
              {
                title: "炭水化物が少ない",
                body: "オリジナルチキンの炭水化物はわずか7.4g。バーガーチェーンのようにバンズから大量の糖質を摂ることがなく、糖質制限ダイエットにも適しています。",
              },
              {
                title: "単品注文でカロリーをコントロールしやすい",
                body: "セットではなく単品でチキンだけを注文すれば、余計なサイドメニューのカロリーを避けられます。1ピース237kcalと計算しやすいのもメリットです。",
              },
            ]}
          />

          <TipBox title="KFC vs 他チェーンのタンパク質比較">
            <p>オリジナルチキン2ピース（474kcal / P33.4g）は、マクドナルドのダブルチーズバーガー（457kcal / P26.4g）よりも<Marker>高タンパクで糖質が大幅に低い</Marker>のがポイント。バンズがない分、炭水化物はわずか14.8gに抑えられます。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop" alt="ジューシーに揚がったフライドチキンのクローズアップ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">ケンタッキー カロリーランキング</SectionHeading>

          <p className="mb-4">
            KFCの主要メニューをカロリーの低い順にランキングしました。<Marker color="blue">チキン単品は200〜300kcal台とコントロールしやすい</Marker>一方、サンドやセットは400kcal以上になることがわかります。
          </p>

          <NutritionTable
            items={[
              { name: "カーネルクリスピー", calories: 130, protein: 6.2, fat: 7.5, carbs: 9.8, highlight: true },
              { name: "骨なしケンタッキー", calories: 204, protein: 15.8, fat: 10.2, carbs: 12.4, highlight: true },
              { name: "オリジナルチキン", calories: 237, protein: 16.7, fat: 14.2, carbs: 7.4, highlight: true },
              { name: "辛口チキン", calories: 266, protein: 16.0, fat: 16.8, carbs: 12.5 },
              { name: "チキンフィレサンド", calories: 415, protein: 22.0, fat: 18.5, carbs: 38.2 },
              { name: "和風チキンカツサンド", calories: 478, protein: 20.8, fat: 24.5, carbs: 42.8 },
              { name: "チキンフィレバーガー", calories: 398, protein: 19.5, fat: 16.2, carbs: 40.5 },
              { name: "ツイスター（てりやき）", calories: 340, protein: 14.8, fat: 14.5, carbs: 36.2 },
              { name: "コールスローS", calories: 92, protein: 0.8, fat: 5.8, carbs: 9.2 },
              { name: "ビスケット", calories: 200, protein: 3.2, fat: 9.8, carbs: 24.5 },
              { name: "フライドポテトS", calories: 195, protein: 2.8, fat: 9.5, carbs: 24.8 },
              { name: "ナゲット（5個）", calories: 230, protein: 13.5, fat: 12.8, carbs: 14.2 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は公式サイトおよび店頭情報を基に作成。季節限定メニューは除く。おすすめマークは250kcal以下のチキンメニューに表示。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>ポイントは<Marker>チキン単品（130〜266kcal）とサンド類（340〜478kcal）の差</Marker>。サンドにはバンズやソースのカロリーが加わるため、同じチキンでもカロリーが1.5〜2倍に。ダイエット中はサンドよりもチキン単品を選ぶのが鉄則です。</p>
          </TipBox>
        </section>

        {/* Section 3: 高タンパクおすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクおすすめメニュー</SectionHeading>

          <p className="mb-6">
            KFCでダイエット中に積極的に選びたい高タンパクメニューをランキング形式で紹介します。<Marker>チキン系はすべてタンパク質が優秀</Marker>ですが、カロリーとのバランスが重要です。
          </p>

          <RankingCard rank={1} title="オリジナルチキン" subtitle="237kcal / P16.7g / F14.2g / C7.4g / ¥310">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              KFCの看板メニューであり、<Marker>ダイエット中にも最もおすすめできる一品</Marker>。1ピース237kcalでタンパク質16.7g、炭水化物わずか7.4gという優秀な栄養バランスが魅力です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              2ピース食べてもP33.4g / 474kcalと、1食分として十分コントロール可能。骨付きなので食べるのに時間がかかり、満腹感を得やすいのも隠れたメリットです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="チキンフィレサンド" subtitle="415kcal / P22.0g / F18.5g / C38.2g / ¥440">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">KFCのサンド類でタンパク質No.1</Marker>。P22gと高タンパクで、パンが付くため満足感も高い。ただし炭水化物38.2gがあるため、糖質制限中は注意が必要です。ランチにしっかり食べたい日に最適。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="骨なしケンタッキー" subtitle="204kcal / P15.8g / F10.2g / C12.4g / ¥290">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">204kcalでP15.8gはKFCの中でも最も優秀なカロリーパフォーマンス</Marker>。骨がないので食べやすく、オリジナルチキンよりも30kcal以上低いのがポイント。脂質も10.2gと控えめです。
            </p>
          </RankingCard>

          <SubSectionHeading>おすすめの組み合わせセット</SubSectionHeading>

          <NutritionCard
            name="オリジナルチキン2ピース + コールスローS"
            chain="ケンタッキー"
            calories={566}
            protein={34.2}
            fat={34.2}
            carbs={24.0}
            price={800}
            recommended
          />

          <p className="mb-4 mt-4">
            <Marker>566kcalでP34.2g</Marker>という、KFCダイエットの定番組み合わせ。コールスローで野菜も摂れるため栄養バランスも良好。ドリンクはゼロカロリーを選べば、1食600kcal以下に収まります。
          </p>

          <NutritionCard
            name="骨なしケンタッキー2個 + コールスローS"
            chain="ケンタッキー"
            calories={500}
            protein={32.4}
            fat={26.2}
            carbs={34.0}
            price={770}
            recommended
          />

          <p className="mb-8 mt-4">
            さらにカロリーを抑えたい方には骨なしケンタッキー2個がおすすめ。<Marker color="blue">500kcalちょうどでP32.4g</Marker>と、ワンコイン感覚のダイエット食が完成します。食べやすさも魅力で、忙しいランチタイムに最適です。
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
              <li><span className="font-bold">和風チキンカツサンド（478kcal）</span> ─ カツの衣 + パンで脂質24.5g・炭水化物42.8g。同じサンドならフィレサンドの方が60kcal以上低い。</li>
              <li><span className="font-bold">ビスケット（200kcal）</span> ─ タンパク質わずか3.2gで炭水化物24.5g。栄養的にはほぼ「甘いパン」です。</li>
              <li><span className="font-bold">フライドポテトS（195kcal）</span> ─ P2.8gしかなく、炭水化物24.8gとダイエットには不向き。チキン追加の方が圧倒的にコスパ良好。</li>
              <li><span className="font-bold">ツイスター てりやき（340kcal）</span> ─ ソースの糖分で炭水化物36.2g。タンパク質14.8gに対してカロリーが割高。</li>
              <li><span className="font-bold">セットメニュー全般</span> ─ ポテト＋ドリンク＋ビスケットが付くと+400kcal以上。単品注文を徹底しましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["オリジナルチキン×2", "474 kcal", "33.4g", "28.4g", "14.8g"],
              ["チキンフィレサンドセット", "810 kcal", "25.2g", "34.8g", "87.5g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6 text-sm text-gray-700">
            上の表を見てわかる通り、<Marker>オリジナルチキン2ピースの方がセットメニューよりもP+8g多く、カロリーは336kcal少ない</Marker>。セットの誘惑に負けない判断力がKFCダイエットの鍵です。
          </p>

          <SubSectionHeading>ナゲットは意外と優秀</SubSectionHeading>
          <p className="mb-4">
            見落とされがちですが、<Marker color="green">ナゲット5個（230kcal / P13.5g）はサイドメニューとしてはかなり優秀</Marker>。ポテトS（195kcal / P2.8g）と比べると、カロリーは35kcal高いだけでタンパク質は約5倍です。
          </p>

          <NutritionCard
            name="ナゲット（5個）"
            chain="ケンタッキー"
            calories={230}
            protein={13.5}
            fat={12.8}
            carbs={14.2}
            price={380}
          />

          <p className="mb-8 mt-4">
            オリジナルチキン1ピース＋ナゲット5個なら<Marker>467kcal / P30.2g</Marker>。チキンだけで飽きてしまう方は、ナゲットで変化をつけるのも一つの手です。
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
            ポテト（195kcal）の代わりにコールスローS（92kcal）を選ぶと<Marker color="green">約100kcalカット</Marker>。さらに食物繊維やビタミンCも摂れるため一石二鳥です。どうしてもサイドが欲しい場合はコールスロー一択と覚えましょう。
          </p>

          <SubSectionHeading>コツ3：ドリンクはゼロカロリーを徹底</SubSectionHeading>
          <p className="mb-6">
            コーラM（140kcal）をペプシゼロやブラックコーヒーに変えるだけで140kcalの節約。<Marker>食事全体で見ると「ドリンクの差」が意外と大きい</Marker>のです。
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
            <p>ケンタッキーはデリバリー対応も多く、深夜に注文しがち。しかし<Marker>22時以降はBMAL1（脂肪蓄積タンパク質）が増加する時間帯</Marker>で、同じカロリーでも脂肪として蓄積されやすくなります。どうしても夜食が必要な場合は、骨なしケンタッキー1個（204kcal）に留めましょう。</p>
          </WarningBox>

          <TipBox title="最強のKFCダイエットセット">
            <p>おすすめの注文は<Marker>「オリジナルチキン2ピース（キール指定）＋コールスローS＋ペプシゼロ」</Marker>。合計566kcal / P34.2g / C24.0gで、満足感の高い食事が完成します。価格も約800円程度とお手頃です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="バランスの取れた食事プレートのイメージ" />

          <CTABanner
            title="たべなびで栄養管理を始めよう"
            subtitle="20チェーン・500メニューの栄養データ、全部無料"
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
              "オリジナルチキン（237kcal / P16.7g / C7.4g）は低糖質・高タンパクの優秀メニュー",
              "2ピースで474kcal・P33.4g。1食分として十分なタンパク質を確保できる",
              "サンド類よりチキン単品を選ぶことでカロリーを大幅カット",
              "サイドはポテトではなくコールスロー（92kcal）を選択",
              "セットメニューは+400kcal以上。単品注文を徹底する",
              "衣を一部はがすテクニックで50〜60kcalカットが可能",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はケンタッキー公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
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
