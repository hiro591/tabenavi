import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  ComparisonTable,
  RankingCard,
  CheckList,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "ドトールのダイエット・カロリーガイド｜低カロリーなフード・ドリンクの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/doutor-diet" },
  description: "ドトールでダイエット中に選びたいメニューを、カロリー・タンパク質・PFCの実データで解説。サンドイッチなどのフードとドリンクのカロリー比較、低カロリー・高タンパクな組み合わせ、糖質を抑える選び方を紹介します。",
  keywords: [
    "ドトール カロリー",
    "ドトール ダイエット",
    "ドトール 栄養",
    "ドトール 低カロリー",
    "ドトール 太らない",
    "ドトール カフェラテ カロリー",
  ],
  openGraph: {
    title: "ドトールのダイエット・カロリーガイド｜低カロリーなフード・ドリンクの選び方",
    description: "ドトールでダイエット中に選びたいメニューを、カロリー・タンパク質・PFCの実データで解説。フードとドリンクのカロリー比較、低カロリー・高タンパクな組み合わせ、糖質を抑える選び方を紹介します。",
    url: "https://www.tabenavi.jp/guide/doutor-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ドトールのダイエット・カロリーガイド｜低カロリーなフード・ドリンクの選び方",
  description: "ドトールでダイエット中に選びたいメニューを、カロリー・タンパク質・PFCの実データで解説。フードとドリンクのカロリー比較、低カロリー・高タンパクな組み合わせ、糖質を抑える選び方を紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/doutor-diet",
};

const tocItems = [
  { id: "drink-ranking", label: "ドリンクのカロリーランキング" },
  { id: "high-protein", label: "高タンパクなフードの選び方" },
  { id: "low-calorie", label: "低カロリーな組み合わせ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function DoutorDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ドトールでダイエット"
        subtitle="低カロリーなフード・ドリンクの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop"
        breadcrumb="ドトールダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="doutor-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          ドトールはコーヒー1杯から気軽に立ち寄れるカフェですが、実はダイエットの観点では<Marker>ドリンクの選び方ひとつでカロリーが大きく変わる</Marker>のが特徴です。同じコーヒー系でも、<Marker color="blue">ブレンドコーヒーS（5kcal）</Marker>とカフェ・モカ L（293kcal）では、なんと約290kcalもの差がつきます。
        </p>
        <p className="mb-4">
          フードも、枝豆（111kcal）やひとくちミックスサンド（227kcal）のような軽めの品から、ごろっとりんごのアップルパイ（355kcal）や黒糖ドーナツボール（315kcal・脂質23.2g）のような高脂質スイーツまで幅広く揃っています。何気なく「ラテ＋甘いパン」を選ぶと、それだけで500kcalを超えることも珍しくありません。
        </p>
        <p className="mb-8">
          この記事では、ドトールのメニューをカロリー・タンパク質・PFCの実データで整理し、ダイエット中でも満足できる賢い組み合わせ方を解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="doutor-diet-cafe" genre="cafe" priority />

        {/* Section 1: ドリンクのカロリーランキング */}
        <section className="mb-16">
          <QuickAnswer
            question={"ドトールでダイエット中に選ぶべきメニューは何ですか？"}
            answer={"ドリンクはブラックのブレンドコーヒーS（5kcal）やルイボスティー（2kcal）が最も低カロリーです。ミルクが入るカフェ・ラテS（76kcal）でも比較的軽く、砂糖やシロップの入る沖縄黒糖ラテS（147kcal）や塩キャラメルラテS（158kcal）、カフェ・モカS（191kcal）はカロリーが一気に上がります。フードでタンパク質を摂りたいなら、あつあつカマンベール（185kcal/P12.5g）や唐揚げ（234kcal/P13.3g）、枝豆（111kcal/P9.1g）が候補。ブレンドコーヒーS＋枝豆なら合計約116kcalで小腹を満たせます。"}
          />

          <SectionHeading id="drink-ranking">ドトールのドリンク：カロリーランキング</SectionHeading>

          <p className="mb-4">
            ドトールのダイエットでまず押さえたいのが、<Marker color="blue">ドリンクは「ブラック→ミルク→砂糖・シロップ入り」の順でカロリーが上がる</Marker>という基本構造です。主要ドリンク（小〜中サイズ）をカロリーの低い順に並べました。
          </p>

          <NutritionTable
            items={[
              { name: "ルイボスティー", calories: 2, protein: 0, fat: 0, carbs: 0.5, highlight: true },
              { name: "ブレンドコーヒー S", calories: 5, protein: 0.1, fat: 0, carbs: 1.1, highlight: true },
              { name: "アイスティー S", calories: 5, protein: 0, fat: 0, carbs: 1.1, highlight: true },
              { name: "ブレンドコーヒー M", calories: 7, protein: 0.2, fat: 0, carbs: 1.4 },
              { name: "カフェインレス コーヒー", calories: 10, protein: 0.3, fat: 0, carbs: 1.9 },
              { name: "豆乳ラテ S", calories: 64, protein: 4.3, fat: 3.3, carbs: 4.4, highlight: true },
              { name: "カフェ・ラテ S", calories: 76, protein: 3.8, fat: 4.1, carbs: 6.2, highlight: true },
              { name: "カフェ・オレ S", calories: 78, protein: 4.1, fat: 4.1, carbs: 6.4 },
              { name: "ロイヤルミルクティー S", calories: 91, protein: 4.6, fat: 5, carbs: 6.9 },
              { name: "沖縄黒糖ラテ S", calories: 147, protein: 4, fat: 6.6, carbs: 18.5 },
              { name: "塩キャラメルラテ S", calories: 158, protein: 3.4, fat: 6.1, carbs: 23 },
              { name: "カフェ・モカ S", calories: 191, protein: 3.1, fat: 11.2, carbs: 19.4 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はドトール公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="ドトールならではのポイント">
            <p>ブラックコーヒー（ブレンドコーヒーS・5kcal）は実質ノーカロリーで、食後の満足感を演出できます。ミルクを足したい場合も<Marker>カフェ・ラテS（76kcal）や豆乳ラテS（64kcal）まで</Marker>に留めれば軽め。一方で「黒糖」「塩キャラメル」「モカ」など名前に甘さが付くドリンクは、砂糖・チョコ・シロップで炭水化物が一気に増えます。カフェ・モカSは脂質も11.2gと高めなので、ダイエット中は頻度を抑えたい一杯です。</p>
          </TipBox>
        </section>

        {/* Section 2: 高タンパクなフードの選び方 */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクなフードの選び方</SectionHeading>

          <p className="mb-6">
            カフェのフードは「糖質ばかりで満腹感が続かない」と思われがちですが、ドトールには<Marker>タンパク質を1食10g前後とれるフード</Marker>もあります。コーヒーとあわせて軽食にするなら、タンパク質量で選ぶのがおすすめです。
          </p>

          <NutritionTable
            items={[
              { name: "枝豆", calories: 111, protein: 9.1, fat: 5.3, carbs: 7.4, highlight: true },
              { name: "ハム・ボローニャソーセージ・チーズ盛り合わせ", calories: 141, protein: 12.3, fat: 9.6, carbs: 1.3, highlight: true },
              { name: "あつあつカマンベール", calories: 185, protein: 12.5, fat: 14.7, carbs: 0.6, highlight: true },
              { name: "ソーセージ＆あつあつカマンベール", calories: 249, protein: 13, fat: 20.7, carbs: 2.8 },
              { name: "唐揚げ", calories: 234, protein: 13.3, fat: 15.4, carbs: 8.4, highlight: true },
              { name: "ソーセージ", calories: 306, protein: 13.2, fat: 26.3, carbs: 4.3 },
              { name: "チキンカツ＆レモンタルタルタマゴサンド", calories: 287, protein: 10.4, fat: 12.3, carbs: 33.7 },
              { name: "ミックスサンド", calories: 263, protein: 9.4, fat: 11.6, carbs: 30.5 },
            ]}
            highlightProtein
          />

          <p className="mb-4">
            タンパク質と糖質のバランスで見ると、<Marker color="green">あつあつカマンベール（P12.5g・C0.6g）やハム・ボローニャソーセージ・チーズ盛り合わせ（P12.3g・C1.3g）は、糖質がほぼゼロ</Marker>。糖質制限中でもタンパク質をしっかり摂れる、ドトールでは貴重なフードです。ただし脂質はやや高め（カマンベールはF14.7g）なので、組み合わせるドリンクはブラックにするなど、トータルで調整しましょう。
          </p>

          <RankingCard
            rank={1}
            title="枝豆"
            subtitle="111kcal / P9.1g / F5.3g / C7.4g"
            calories={111}
            protein={9.1}
            fat={5.3}
            carbs={7.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">カロリーあたりのタンパク質効率が高い</Marker>軽食。100kcal台でP9.1gを確保でき、脂質・糖質も控えめです。ブレンドコーヒーS（5kcal）と合わせても合計約116kcalに収まり、間食やちょい飲みのお供に最適なヘルシー枠です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="ハム・ボローニャソーセージ・チーズ盛り合わせ"
            subtitle="141kcal / P12.3g / F9.6g / C1.3g"
            calories={141}
            protein={12.3}
            fat={9.6}
            carbs={1.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">糖質わずか1.3gでタンパク質12.3g</Marker>という、低糖質ダイエット向きの組み合わせ。141kcalと軽く、ブラックコーヒーと合わせれば150kcal前後で高タンパクな軽食が完成します。脂質は9.6gと適度なので、空腹を抑えたい場面に向いています。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="唐揚げ"
            subtitle="234kcal / P13.3g / F15.4g / C8.4g"
            calories={234}
            protein={13.3}
            fat={15.4}
            carbs={8.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              フードの中で<Marker>最もタンパク質が多い13.3g</Marker>。揚げ物のため脂質は15.4gとやや高めですが、糖質は8.4gと低めです。しっかり食べたい日にメインにするなら、ドリンクをブラックにしてトータルカロリーを抑えるのがおすすめ。フライドポテト系を足すと脂質過多になりやすい点に注意しましょう。
            </p>
          </RankingCard>

          <MenuPhoto id="doutor-diet-food" genre="cafe" />
        </section>

        {/* Section 3: 低カロリーな組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーな組み合わせ（ドリンク＋フード）</SectionHeading>

          <p className="mb-6">
            ドトールでの食事は<Marker>「ドリンク＋フード」のセットで考える</Marker>のが基本。組み合わせ次第で総カロリーが大きく変わります。目的別におすすめの組み合わせを整理しました。
          </p>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "ブレンドコーヒー S ＋ ハム・チーズ盛り合わせ", "約146 kcal", "P 12.4g"],
              ["バランス型", "カフェ・ラテ S ＋ 枝豆", "約187 kcal", "P 12.9g"],
              ["高タンパク", "ブレンドコーヒー S ＋ 唐揚げ", "約239 kcal", "P 13.4g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker color="blue">「ブレンドコーヒーS＋ハム・ボローニャソーセージ・チーズ盛り合わせ」なら合計約146kcal・P約12g、糖質はわずか約2.4g</Marker>。糖質制限ダイエット中でも罪悪感なく楽しめる組み合わせです。タンパク質をしっかり摂りつつカロリーを抑えたいなら、ドリンクはブラックを選ぶのが鉄則です。
          </p>

          <SubSectionHeading>サンドイッチで選ぶなら</SubSectionHeading>

          <p className="mb-4">
            しっかり食事にしたいときのサンド系は、<Marker>具材によってカロリーとタンパク質が変わります</Marker>。同じサンドでも栄養バランスに差があるため、比較して選びましょう。
          </p>

          <ComparisonTable
            headers={["サンド系メニュー", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["ひとくちミックスサンド", "227 kcal", "P 8.2g", "F 8.4g", "C 29.9g"],
              ["ミックスサンド", "263 kcal", "P 9.4g", "F 11.6g", "C 30.5g"],
              ["ナポリタン＆エビカツサンド", "276 kcal", "P 8.5g", "F 7.3g", "C 43.9g"],
              ["チキンカツ＆レモンタルタルタマゴサンド", "287 kcal", "P 10.4g", "F 12.3g", "C 33.7g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            軽く済ませたいなら<Marker color="blue">ひとくちミックスサンド（227kcal）が最軽量</Marker>。タンパク質を重視するならチキンカツ＆レモンタルタルタマゴサンド（P10.4g）が候補ですが、脂質は12.3gと高めです。炭水化物を抑えたい場合は、炭水化物43.9gのナポリタン＆エビカツサンドは避けると無難です。
          </p>

          <TipBox title="サンドにブラックコーヒーを合わせる">
            <p>サンド系はそれだけで250〜290kcal前後あるため、合わせるドリンクは<Marker>ブレンドコーヒーS（5kcal）やアイスティーS（5kcal）</Marker>のような低カロリーなものに。ここでカフェ・モカ（S191kcal〜L293kcal）を選ぶと、軽い昼食のつもりが500kcal超えになってしまいます。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ドトールのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            ドトールにも、知らずに頼むと一気にカロリーが跳ね上がるメニューがあります。特に<Marker>甘いドリンク・スイーツ・揚げ物の組み合わせ</Marker>には注意が必要です。
          </p>

          <WarningBox title="ダイエット中は頻度を抑えたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">ごろっとりんごのアップルパイ（355kcal）</span> ─ フードの中で最も高カロリー。脂質18.6g・炭水化物43.5gと、脂質と糖質の両方が高めです。</li>
              <li><span className="font-bold">トッピングシェイク ～コーヒー＆ナッツ～（353kcal）</span> ─ デザートドリンク。脂質16.3g・炭水化物42.9gで、1杯で食事並みのカロリーになります。</li>
              <li><span className="font-bold">黒糖ドーナツボール（315kcal）</span> ─ 脂質23.2gと揚げ菓子ならではの高脂質。1袋で300kcal超えです。</li>
              <li><span className="font-bold">ソーセージ（306kcal）</span> ─ タンパク質13.2gは取れますが、脂質26.3gと非常に高め。高タンパク狙いなら枝豆や唐揚げの方が効率的です。</li>
              <li><span className="font-bold">カフェ・モカ L（293kcal）</span> ─ チョコ＋ミルク＋シロップで脂質17.1g。ドリンク1杯としてはかなりの高カロリーです。</li>
            </ul>
          </WarningBox>

          <WarningBox title="組み合わせの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">甘いラテ ＋ スイーツ</span> ─ 例えば塩キャラメルラテS（158kcal）＋ごろっとりんごのアップルパイ（355kcal）で合計513kcal。カフェの一服のつもりが1食分に。</li>
              <li><span className="font-bold">フライドポテト系の追加</span> ─ フライドポテト～トリュフソース～（230kcal・脂質15.9g）は脂質が高く、タンパク質も1.5gと少なめ。間食に足すと脂質過多になりがちです。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 太りにくい食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">ドトールで太りにくい食べ方のコツ</SectionHeading>

          <p className="mb-6">
            ドトールの<Marker>ドリンク選びとフードの組み合わせ</Marker>を意識するだけで、カロリーは大きく変わります。実践しやすいコツをまとめました。
          </p>

          <CheckList
            items={[
              "ドリンクは基本ブラック ─ ブレンドコーヒーS（5kcal）やルイボスティー（2kcal）なら実質ノーカロリー",
              "ミルク入りはカフェ・ラテS（76kcal）・豆乳ラテS（64kcal）までに留める",
              "「黒糖」「塩キャラメル」「モカ」が付くドリンクは糖質・脂質が高めなので頻度を抑える",
              "フードはタンパク質量で選ぶ ─ 枝豆（P9.1g）・カマンベール（P12.5g）・唐揚げ（P13.3g）が候補",
              "甘いドリンク＋スイーツの同時注文は500kcal超えになりやすいので避ける",
            ]}
          />

          <SubSectionHeading>目的別の最適メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（糖質制限・ローファット・カロリー制限）によって、<Marker>ドトールで選ぶべきメニューは変わります</Marker>。目的別に整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ構成", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "ブレンドコーヒー S ＋ ハム・チーズ盛り合わせ", "約146 kcal", "糖質約2.4gでP約12g"],
              ["ローファット", "カフェ・ラテ S ＋ 枝豆", "約187 kcal", "脂質を抑えつつP12.9g"],
              ["カロリー制限", "ブレンドコーヒー S ＋ 枝豆", "約116 kcal", "100kcal台で小腹を満たす"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            糖質を抑えたい日は<Marker color="blue">ブラックコーヒー＋糖質ほぼゼロのチーズ・ハム系</Marker>、脂質を抑えたい日はミルク控えめ＋枝豆が好相性。いずれもドリンクをブラックや低脂質に寄せることで、フードの選択肢を広げられます。
          </p>

          <TipBox title="セットメニューの落とし穴に注意">
            <p>ドトールでは「サンド＋ドリンク」のようなセットがお得に見えますが、ドリンクを甘いラテにするとカロリーが上乗せされます。<Marker>セットでもドリンクはブラックに変更</Marker>できるので、カロリーを抑えたいときは積極的に活用しましょう。同じ価格でも、組み合わせ次第で100〜200kcalの差が生まれます。</p>
          </TipBox>
        </section>

        <ServiceOffers tag="diet" />

        {/* Internal links */}
        <section className="mb-12">
          <p className="mb-4 text-sm text-gray-600">
            ドトールのメニューをもっと詳しく見るなら、チェーン別ページが便利です。
            <Link href="/chains/doutor" className="text-sky-600 hover:underline font-medium">ドトールのメニュー一覧</Link>
            のほか、
            <Link href="/chains/doutor/high-protein" className="text-sky-600 hover:underline font-medium">高タンパクメニュー</Link>
            ・
            <Link href="/chains/doutor/diet" className="text-sky-600 hover:underline font-medium">ダイエット向けメニュー</Link>
            ・
            <Link href="/chains/doutor/low-calorie" className="text-sky-600 hover:underline font-medium">低カロリーメニュー</Link>
            を栄養データで絞り込めます。
          </p>
          <p className="text-sm text-gray-600">
            ほかのカフェや外食ダイエットの記事もあわせてどうぞ。
            <Link href="/guide/starbucks-diet" className="text-sky-600 hover:underline font-medium">スターバックスのダイエットガイド</Link>
            、
            <Link href="/guide/morning-diet" className="text-sky-600 hover:underline font-medium">朝食ダイエットのコツ</Link>
            、
            <Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline font-medium">外食ダイエットの基本</Link>
            、
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">外食で低糖質を実践する方法</Link>
            。
          </p>
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <ArticleSummary
            points={[
              "ドリンクはブラック（ブレンドコーヒーS・5kcal／ルイボスティー・2kcal）が最も低カロリー",
              "ミルク入りはカフェ・ラテS（76kcal）まで、甘い黒糖・塩キャラメル・モカ系は頻度を抑える",
              "フードはタンパク質量で選ぶ。あつあつカマンベール（P12.5g）・唐揚げ（P13.3g）・枝豆（P9.1g）が候補",
              "ブレンドコーヒーS＋ハム・チーズ盛り合わせなら約146kcal・糖質約2.4gで高タンパク",
              "アップルパイ（355kcal）・黒糖ドーナツボール（315kcal）・カフェ・モカL（293kcal）は高カロリーなので注意",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はドトール公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>
        </section>

        <FAQSection
          slug="doutor-diet"
          items={[
            { q: "ドトールでカロリーが最も低いドリンクは何ですか？", a: "ルイボスティー（2kcal）やブレンドコーヒーS（5kcal）、アイスティーS（5kcal）が最も低カロリーです。ミルク入りでもカフェ・ラテS（76kcal）や豆乳ラテS（64kcal）なら比較的軽め。一方で沖縄黒糖ラテS（147kcal）、塩キャラメルラテS（158kcal）、カフェ・モカS（191kcal）は砂糖・シロップでカロリーが大きく上がります。" },
            { q: "ドトールでタンパク質が摂れるフードはありますか？", a: "唐揚げ（234kcal/P13.3g）が最もタンパク質が多く、あつあつカマンベール（185kcal/P12.5g）、ハム・ボローニャソーセージ・チーズ盛り合わせ（141kcal/P12.3g）、枝豆（111kcal/P9.1g）も高タンパクです。特にカマンベールやハム・チーズ盛り合わせは糖質が1g前後と少なく、低糖質ダイエット中にも向いています。" },
            { q: "ドトールでダイエット中に避けたほうがいいメニューは何ですか？", a: "ごろっとりんごのアップルパイ（355kcal・脂質18.6g）、トッピングシェイク～コーヒー＆ナッツ～（353kcal）、黒糖ドーナツボール（315kcal・脂質23.2g）、ソーセージ（306kcal・脂質26.3g）、カフェ・モカL（293kcal）は高カロリー・高脂質です。甘いラテとスイーツを同時に頼むと500kcalを超えやすいので注意しましょう。" },
            { q: "ドトールのカフェ・ラテはダイエット中に飲んでも大丈夫ですか？", a: "カフェ・ラテSは76kcalと、ミルク入りドリンクの中では比較的軽めです。ブラックの5kcalには及びませんが、適量なら問題ありません。ただし砂糖やシロップを加えるとカロリーが上がるため、無糖で楽しむのがおすすめです。甘さが欲しい場合は、より低カロリーな豆乳ラテS（64kcal）も選択肢になります。" },
            { q: "ドトールで低糖質に食事をするにはどう選べばいいですか？", a: "ドリンクはブラック（ブレンドコーヒーS・5kcal／糖質1.1g）、フードは糖質の少ないあつあつカマンベール（C0.6g）やハム・ボローニャソーセージ・チーズ盛り合わせ（C1.3g）を選びましょう。この組み合わせなら合計約146kcal・糖質約2.4gで、タンパク質を約12g確保できます。サンドやパン、甘いドリンクは糖質が高いので控えめにするのがコツです。" },
            { q: "ドトールでサンドイッチを選ぶならどれがダイエット向きですか？", a: "軽く済ませたいならひとくちミックスサンド（227kcal）が最も低カロリーです。タンパク質重視ならチキンカツ＆レモンタルタルタマゴサンド（287kcal/P10.4g）が候補ですが脂質12.3gとやや高め。炭水化物を抑えたい場合は、炭水化物43.9gのナポリタン＆エビカツサンドは避けると無難です。合わせるドリンクはブラックコーヒーにするとトータルを抑えられます。" },
          ]}
        />

        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="doutor-diet" />

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
