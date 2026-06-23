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
  alternates: { canonical: "https://www.tabenavi.jp/guide/sukiya-diet" },
  title:
    "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "すき家のカロリー低い順ランキング、牛丼ライト（並盛397kcal）などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。すき家で太らない注文法がわかります。",
  keywords: [
    "すき家 ダイエット",
    "すき家 カロリー",
    "すき家 低カロリー",
    "牛丼ライト",
    "すき家 太らない",
  ],
  openGraph: {
    title: "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "すき家のカロリー低い順ランキング、牛丼ライト（並盛397kcal）などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/sukiya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "すき家のカロリー低い順ランキング、牛丼ライト（並盛397kcal）などダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/sukiya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "size-comparison", label: "サイズ別カロリー比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function SukiyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="すき家でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop"
        breadcrumb="すき家ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="sukiya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          すき家は牛丼チェーン最大手。メニューの豊富さが魅力ですが、ダイエット中に最も注目すべきは<Marker>牛丼ライト（並盛397kcal/P22.8g）</Marker>の存在です。ご飯の代わりに豆腐と野菜を使った画期的なメニューで、通常の牛丼（並）695kcalと比べて大幅にカロリーを抑えられます（ミニサイズなら309kcal）。
        </p>
        <p className="mb-4">
          また、<Marker color="blue">まぐろユッケ丼（並盛699kcal/P36.3g）</Marker>や山かけまぐろたたき丼（並盛639kcal/F10.1g）のような魚メニューも充実しており、牛丼チェーンの中では最もメニューの選択肢が広いのがすき家の強みです。
        </p>
        <p className="mb-8">
          この記事では、すき家の全メニューをカロリー低い順にランキングし、ダイエットに最適なメニューの選び方を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop" alt="牛丼のイメージ写真" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
                  <QuickAnswer
          question={"すき家でダイエット中に選ぶべき一番低カロリーなメニューは何ですか？"}
          answer={"すき家の牛丼ライト（ミニ309kcal／並盛397kcal）がダイエットに最適です。ご飯を豆腐と野菜で置き換えており、並盛でも糖質16.8gと低糖質。通常の牛丼（並）695kcalと比べて大幅にカロリーを抑えられます。豆腐由来のタンパク質も加わり並盛でP22.8g。牛丼チェーンの中で唯一このメニューを提供しており、ダイエッターの強い味方です。"}
        />

        <SectionHeading id="calorie-ranking">すき家メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            すき家の主要な丼・定食メニューをカロリーの低い順に並べました。<Marker color="blue">牛丼ライトと魚系メニュー</Marker>がダイエット向けの上位を占めています。
          </p>

          <NutritionTable
            items={[
              { name: "牛丼ライト ミニ", calories: 309, protein: 18.5, fat: 19.9, carbs: 14.8, highlight: true },
              { name: "牛丼ライト 並盛", calories: 397, protein: 22.8, fat: 26.8, carbs: 16.8, highlight: true },
              { name: "鮭定食 ミニ", calories: 436, protein: 21.2, fat: 10.1, carbs: 66.4, highlight: true },
              { name: "牛丼 ミニ", calories: 464, protein: 14.8, fat: 16.0, carbs: 65.7 },
              { name: "焼鮭朝食 ミニ", calories: 480, protein: 22.2, fat: 13.4, carbs: 69.5, highlight: true },
              { name: "山かけまぐろたたき丼 並盛", calories: 639, protein: 30.2, fat: 10.1, carbs: 106.7, highlight: true },
              { name: "牛丼（並）", calories: 695, protein: 21.7, fat: 23.4, carbs: 99.8 },
              { name: "まぐろユッケ丼 並盛", calories: 699, protein: 36.3, fat: 16.8, carbs: 100.4, highlight: true },
              { name: "キムチ牛丼 並盛", calories: 725, protein: 23.3, fat: 23.8, carbs: 104.8 },
              { name: "牛丼 中盛", calories: 752, protein: 26.6, fat: 33.4, carbs: 86.5 },
              { name: "ねぎ玉牛丼 並盛", calories: 802, protein: 29.4, fat: 29.9, carbs: 104.8 },
              { name: "とろ～り3種のチーズ牛丼 並盛", calories: 871, protein: 32.9, fat: 36.7, carbs: 102.8 },
              { name: "牛丼（大盛）", calories: 908, protein: 28.4, fat: 30.7, carbs: 130.1 },
              { name: "牛丼 特盛", calories: 1100, protein: 37.8, fat: 45.6, carbs: 134.9 },
              { name: "牛丼 メガ", calories: 1365, protein: 50.8, fat: 66.3, carbs: 141.6 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はすき家公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="すき家のダイエットの強み">
            <p>すき家は牛丼チェーンの中で唯一<Marker>「牛丼ライト」（ご飯→豆腐＋野菜）</Marker>を提供しています。ミニ309kcal／並盛397kcalで、糖質はミニ14.8g・並盛16.8gと非常に低いのが特長。また、山かけまぐろたたき丼やまぐろユッケ丼など魚系メニューも充実しており、選択肢の広さはトップクラスです。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーと<Marker>PFCバランス</Marker>を考慮した、すき家のダイエット向けメニューベスト3を紹介します。
          </p>

          <RankingCard rank={1} title="牛丼ライト（並盛）" subtitle="397kcal / P22.8g / F26.8g / C16.8g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              すき家ダイエットの絶対的エース。<Marker>ご飯の代わりに豆腐と野菜サラダ</Marker>を使用し、牛丼の味わいはそのままにカロリーを大幅カット。通常の牛丼（並）695kcalと比べて298kcalもの差があります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              糖質はわずか16.8gと超低糖質で、豆腐のタンパク質も加わってP22.8g。さらに抑えたいならミニ（309kcal）も選べます。糖質制限ダイエットの外食で最も頼りになるメニューです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="山かけまぐろたたき丼（並盛）" subtitle="639kcal / P30.2g / F10.1g / C106.7g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">脂質わずか10.1gで高タンパク30.2g</Marker>という優秀なPFCバランス。脂質を抑えたい方に向くメニューです。さらにあっさりさせたい場合は「まぐろたたき皿（並盛591kcal／F10.1g）」を単品で選ぶ手もあります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              まぐろにはDHA・EPAなどの脂肪酸が含まれているとされ、魚メニューが充実しているのはすき家ならではの魅力です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="牛丼（ミニ）" subtitle="464kcal / P14.8g / F16.0g / C65.7g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「やっぱり普通の牛丼が食べたい」という方はミニサイズを。並盛（695kcal）から<Marker color="green">231kcalのカロリーダウン</Marker>で、500kcal以下に収まります。牛丼の味をしっかり楽しみながらカロリーを抑えたい方に最適です。
            </p>
          </RankingCard>

          <SubSectionHeading>注目メニュー：鮭定食</SubSectionHeading>

          <NutritionCard
            name="鮭定食（ミニ）"
            chain="すき家"
            calories={436}
            protein={21.2}
            fat={10.1}
            carbs={66.4}
            recommended
          />

          <p className="mb-8 mt-4">
            すき家の定食・朝食メニューも見逃せません。鮭定食（ミニ）は<Marker>436kcalでP21.2g、脂質わずか10.1g</Marker>というバランスのよい栄養構成。ご飯・みそ汁・おかずが揃った定食スタイルで、朝から食事を整えやすいメニューです（朝食の焼鮭朝食ミニは480kcal）。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1532347231146-80afc9c3df2b?w=800&h=400&fit=crop" alt="新鮮な魚の料理イメージ" />
        </section>

        {/* Section 3: サイズ別カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="size-comparison">牛丼のサイズ別カロリー比較</SectionHeading>

          <p className="mb-6">
            すき家の牛丼はミニからメガまで6サイズ展開。<Marker>サイズ選びでカロリーは約3倍の差</Marker>がつきます。
          </p>

          <ComparisonTable
            headers={["サイズ", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["ミニ", "464 kcal", "P 14.8g", "F 16.0g", "C 65.7g"],
              ["並", "695 kcal", "P 21.7g", "F 23.4g", "C 99.8g"],
              ["中盛", "752 kcal", "P 26.6g", "F 33.4g", "C 86.5g"],
              ["大盛", "908 kcal", "P 28.4g", "F 30.7g", "C 130.1g"],
              ["特盛", "1100 kcal", "P 37.8g", "F 45.6g", "C 134.9g"],
              ["メガ", "1365 kcal", "P 50.8g", "F 66.3g", "C 141.6g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="「中盛」の裏技">
            <p>すき家の「中盛」は<Marker>ご飯少なめ・肉多め</Marker>というサイズ。並より+57kcalですが、タンパク質は26.6gとアップし、炭水化物は並より少ない86.5g。タンパク質を重視しつつ糖質を抑えたい方には、並より中盛の方が向いています。</p>
          </TipBox>

          <SubSectionHeading>牛丼ライトとの比較</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "炭水化物", "差分"]}
            rows={[
              ["牛丼ライト 並盛", "397 kcal", "P 22.8g", "C 16.8g", "基準"],
              ["牛丼 ミニ", "464 kcal", "P 14.8g", "C 65.7g", "+67 kcal"],
              ["牛丼（並）", "695 kcal", "P 21.7g", "C 99.8g", "+298 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            牛丼ライト並盛は通常の牛丼（並）と比べて<Marker color="blue">298kcalも低く、炭水化物は約1/6</Marker>。ご飯を豆腐に置き換えるだけでこれだけの差が出ます。ダイエット中は積極的に牛丼ライトを活用しましょう。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="すき家のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            すき家のメニューは豊富な反面、<Marker>1,000kcalを超える超高カロリーメニュー</Marker>も存在します。ダイエット中は特に注意が必要です。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛丼メガ（1,365kcal）</span> ─ 肉が多く脂質66.3g。1食で1日分のカロリーの大半を消費してしまいます。</li>
              <li><span className="font-bold">牛丼特盛（1,100kcal）</span> ─ 脂質45.6g・炭水化物134.9gと高カロリー。並と比べて405kcalも多くなります。</li>
              <li><span className="font-bold">牛丼大盛（908kcal）</span> ─ 炭水化物130.1gと糖質過多。ご飯の量が多くカロリーの多くが炭水化物由来。</li>
              <li><span className="font-bold">とろ～り3種のチーズ牛丼・並盛（871kcal）</span> ─ チーズで並より+176kcal、脂質36.7g。人気ですがダイエットには不向き。</li>
              <li><span className="font-bold">ねぎ玉牛丼・並盛（802kcal）</span> ─ 卵とねぎのトッピングで脂質29.9g。見た目以上に高脂質。</li>
            </ul>
          </WarningBox>

          <WarningBox title="トッピングの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">とろ～り3種チーズ（110kcal）</span> ─ 脂質12.1gとほぼ脂質。すき家のチーズトッピングは高脂質です。</li>
              <li><span className="font-bold">おろしポン酢（100kcal）</span> ─ 脂質8.9g。さっぱり見えても意外とカロリーがあるので量に注意。</li>
              <li><span className="font-bold">おんたま2個（123kcal）</span> ─ 1個あたり約62kcal。卵は良質なタンパク源ですが、入れすぎには注意を。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">すき家ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            すき家の<Marker>豊富なメニューを活用したダイエット向きの食べ方</Marker>を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "「牛丼ライト」を第一選択に",
                body: "迷ったら牛丼ライト（並盛397kcal／ミニ309kcal）。ご飯→豆腐＋野菜への置き換えで、牛丼の満足感はそのままにカロリーと糖質を大幅カット。糖質制限中の方はこれ一択と言っても過言ではありません。",
              },
              {
                title: "魚メニューを積極的に活用",
                body: "山かけまぐろたたき丼（639kcal/P30.2g/F10.1g）やまぐろたたき皿（591kcal/F10.1g）は、脂質を抑えたい方に向きます。すき家ならではの魚メニューを活用して、牛丼一辺倒にならない食事バリエーションを持ちましょう。",
              },
              {
                title: "ミニサイズを基本にする",
                body: "牛丼ミニ（464kcal）を基本サイズに。並（695kcal）から231kcalのカロリーカットで500kcal以下に収まります。物足りなければサラダやみそ汁を追加して調整を。",
              },
              {
                title: "朝食・定食メニューを活用する",
                body: "鮭定食ミニ（436kcal/P21.2g/F10.1g）や焼鮭朝食ミニ（480kcal/F13.4g）など、すき家の定食・朝食は脂質が低めでバランスのよいものが多い。朝食をすき家で摂ることで、1日のスタートから食事を整えやすくなります。",
              },
              {
                title: "トッピングは慎重に選ぶ",
                body: "とろ～り3種チーズ（110kcal/F12.1g）やおろしポン酢（100kcal/F8.9g）はカロリーが高め。キムチ（37kcal）など低カロリーなトッピングを選ぶのがおすすめです。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="健康的な食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛丼ライト 並盛 + みそ汁", "434 kcal", "P 25.1g"],
              ["ローファット", "山かけまぐろたたき丼 並盛 + みそ汁", "676 kcal", "P 32.5g"],
              ["バランス型", "牛丼ミニ + サラダ + みそ汁", "538 kcal", "P 19.2g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker>「牛丼ライト並盛+みそ汁」は434kcalでP25.1g</Marker>。炭水化物は約21gと非常に低く、糖質制限ダイエット中の外食で最も頼りになる組み合わせです。
          </p>

          <p className="mb-4">
            ローファットパターンの<Marker color="blue">「山かけまぐろたたき丼+みそ汁」は676kcalで脂質約11.5g</Marker>。脂質を抑えたい方に向く構成で、タンパク質32.5gも確保できます。
          </p>

          <SubSectionHeading>PFCバランスで見るすき家メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針によって、<Marker>すき家で選ぶべきメニューは大きく変わります</Marker>。目的別の最適メニューを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "牛丼ライト 並盛", "397 kcal", "炭水化物16.8gで豆腐ベース"],
              ["ローファット", "山かけまぐろたたき丼 並盛", "639 kcal", "脂質10.1gと低脂質"],
              ["高タンパク", "まぐろユッケ丼 並盛", "699 kcal", "P36.3gで脂質16.8g"],
              ["カロリー制限", "牛丼 ミニ", "464 kcal", "500kcal以下でシンプル"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            すき家の最大の強みは<Marker color="green">あらゆるダイエット方針に対応できるメニューの広さ</Marker>。糖質制限なら牛丼ライト、ローファットならまぐろたたき系メニューと、他の牛丼チェーンにはない選択肢が揃っています。
          </p>

          <TipBox title="すき家を1日の食事プランに組み込む">
            <p>1日の目標カロリー1,600kcalの場合、昼食に牛丼ライト並盛（397kcal）を選べば朝・夕食で1,203kcal使えます。牛丼ライトなら<Marker>炭水化物も16.8gと低く</Marker>、血糖値の急な上昇を抑えたい仕事中のランチにも向いています。</p>
          </TipBox>

          <SubSectionHeading>すき家 vs 他チェーンの比較</SubSectionHeading>

          <p className="mb-4">
            牛丼3大チェーン（吉野家・松屋・すき家）の中で、すき家のダイエット上の強みは以下の3点です。
          </p>

          <CheckList
            items={[
              "牛丼ライト ─ ご飯を豆腐+野菜に置換できる唯一のチェーン",
              "魚メニュー ─ 山かけまぐろたたき丼やまぐろユッケ丼など脂質10g台のローファットメニューが選べる",
              "サイズ展開 ─ ミニから特盛・メガまで、目的に合わせた細かいサイズ調整が可能",
            ]}
          />

          <p className="mb-4">
            特に脂質を抑えたい方には、<Marker color="blue">山かけまぐろたたき丼（F10.1g）は牛丼ボリュームながら低脂質なメニュー</Marker>です。牛丼チェーンで魚系の低脂質メニューが選べるのはすき家ならではの強みです。
          </p>
        </section>

        <AffiliateProductGrid
          title="牛丼ライト派の食卓を支える家ストック"
          productIds={["myprotein-impact", "tuna-can", "konjac-rice", "shaker-bottle"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            すき家は牛丼ライトや魚メニューなど、ダイエッター向けの選択肢が最も充実した牛丼チェーンです。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "牛丼ライト（並盛397kcal/P22.8g、ミニ309kcal）はすき家ダイエットの最強メニュー",
              "山かけまぐろたたき丼（639kcal/P30.2g/F10.1g）はローファット向き",
              "牛丼はミニサイズ（464kcal）を選んで500kcal以下に",
              "牛丼メガ（1,365kcal）やチーズトッピングは避ける",
              "鮭定食・焼鮭朝食など定食メニューも脂質低めでダイエット向き",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はすき家公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="sukiya-diet"
          items={[
            { q: "すき家の牛丼ライトのカロリーと栄養はどうですか？", a: "牛丼ライト並盛は397kcal、タンパク質22.8g、脂質26.8g、炭水化物16.8g（ミニは309kcal）。ご飯を豆腐と野菜サラダで置き換えており、通常の牛丼（並）695kcalから約298kcal削減できます。炭水化物が非常に低く、糖質制限中の外食に向いています。" },
            { q: "すき家でローファットダイエット向けのメニューは？", a: "山かけまぐろたたき丼（並盛）が脂質10.1g、タンパク質30.2g、639kcal。まぐろたたき皿（並盛591kcal/F10.1g）も低脂質です。まぐろにはDHA・EPAなどの脂肪酸が含まれているとされ、他の牛丼チェーンでは珍しい魚系メニューが選べます。" },
            { q: "すき家の牛丼ミニのカロリーは？", a: "牛丼ミニは464kcal、タンパク質14.8g。並（695kcal）から231kcal削減でき、500kcal以下に抑えられます。普通の牛丼の味わいを保ちながらカロリーを抑えたい方に向くサイズです。" },
            { q: "すき家のダイエット中に避けるべきメニューは？", a: "牛丼メガ（1,365kcal）、牛丼特盛（1,100kcal）、牛丼大盛（908kcal）はカロリーが高め。また、とろ～り3種チーズ（110kcal/F12.1g）やおろしポン酢（100kcal/F8.9g）などのトッピング追加も脂質が増えるので量に注意しましょう。" },
            { q: "すき家の朝食・定食メニューはダイエット向き？", a: "鮭定食ミニは436kcal、タンパク質21.2g、脂質10.1g、焼鮭朝食ミニは480kcal/F13.4g。ご飯・みそ汁・おかずが揃った定食スタイルで脂質が低めなので、朝食として活用しやすいメニューです。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "実在しない数値・メニュー（牛丼ライト352kcal、まぐろたたき丼455kcal、鮭朝食468kcal等）を全面修正。牛丼ライト（並盛397kcal）・山かけまぐろたたき丼・鮭定食などを軸に、サイズ別カロリーや各メニューの栄養成分を最新の公式栄養成分（DB実値）に統一。ランキング・比較表・QuickAnswer・FAQ・まとめを更新" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="sukiya-diet" />

        {/* Back link */}
        <div className="text-center pt-8 pb-4">
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
