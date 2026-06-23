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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/curry-diet" },
  title:
    "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較 | たべなび",
  description:
    "カレーライスのカロリーを徹底解説。CoCo壱番屋・松屋・すき家などチェーン店別カロリー比較、ライス少なめ・具材選びでカロリーカット、ダイエット中でも太らないカレーの食べ方5選を紹介します。",
  keywords: [
    "カレー カロリー",
    "CoCo壱 カロリー",
    "カレー ダイエット",
    "CoCo壱 ライス少なめ",
    "カレー 太らない",
  ],
  openGraph: {
    title: "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較",
    description:
      "カレーのカロリーをチェーン店別に徹底比較。CoCo壱のライス少なめや太らない食べ方を解説します。",
    url: "https://www.tabenavi.jp/guide/curry-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較",
  description:
    "カレーのカロリーをチェーン店別に徹底比較。CoCo壱のライス少なめや太らない食べ方を解説します。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/curry-diet",
};

const tocItems = [
  { id: "curry-calories", label: "カレーのカロリー事情" },
  { id: "chain-comparison", label: "チェーン店別カロリー比較" },
  { id: "cocoichi-light", label: "CoCo壱でカロリーを抑える" },
  { id: "how-to-eat", label: "太らない食べ方5選" },
  { id: "summary", label: "まとめ" },
];

export default function CurryDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="カレーとダイエットの真実"
        subtitle="カロリー比較とチェーン店別の賢い食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop"
        breadcrumb="カレーダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="curry-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月22日</p>

        {/* Introduction */}
        <p className="mb-4">
          カレーライスは日本人のソウルフードですが、ダイエット中は「カレー＝太る」というイメージから敬遠されがちです。実際、一般的なカレーライス1皿のカロリーは<Marker>700〜900kcal</Marker>と決して低くありません。
        </p>
        <p className="mb-4">
          しかし、<Marker color="blue">CoCo壱番屋ならライスを小盛り（100g）にする、具材を脂質の少ないものに選ぶ</Marker>など、食べ方次第でカレーもダイエットの味方にできます。チェーン店ごとのカロリー差も大きく、正しい知識があれば賢く楽しめます。
        </p>
        <p className="mb-8">
          この記事では、カレーライスのカロリー事情からチェーン店別比較、太らない食べ方まで徹底的に解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=400&fit=crop" alt="カレーライスのイメージ" />

        {/* Section 1: カレーのカロリー事情 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"カレーのカロリーはどのくらいですか？ダイエット中に食べられますか？"}
          answer={"一般的なカレーライスは700〜900kcalです。CoCo壱のポークカレー（通常ライス150g）は約701kcalですが、ライスを小盛り（100g）に変えると78kcalほど抑えられます。具材は脂質の少ないものを選ぶ、サラダを先に食べるなどの工夫で、ダイエット中でも無理なく食べられます。"}
        />

        <SectionHeading id="curry-calories">カレーライスのカロリー事情：なぜ高カロリーなのか</SectionHeading>

          <p className="mb-4">
            カレーライスが高カロリーになる原因は大きく3つあります。<Marker>ルウの脂質・ご飯の糖質・トッピング</Marker>の三重構造です。
          </p>

          <SubSectionHeading>カレーのカロリー内訳</SubSectionHeading>

          <ComparisonTable
            headers={["構成要素", "カロリー", "主な栄養素", "割合"]}
            rows={[
              ["ご飯（250g＝普通盛り）", "420 kcal", "炭水化物 92g", "約55%"],
              ["カレールウ（1人前）", "200 kcal", "脂質 12g / 炭水化物 18g", "約26%"],
              ["具材（肉・野菜）", "100〜150 kcal", "タンパク質 10g", "約15%"],
              ["福神漬け・らっきょう", "20〜30 kcal", "炭水化物 5g", "約4%"],
            ]}
          />

          <p className="mb-4">
            カレーライスの最大のカロリー源は実は<Marker color="blue">ご飯（約420kcal / 糖質92g）</Marker>です。カレールウ自体は200kcal程度ですが、カレーはご飯が進みやすいため、無意識にご飯の量が増えがちという罠があります。
          </p>

          <SubSectionHeading>種類別カロリー比較</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "チキンカレー", calories: 690, protein: 25.0, fat: 18.0, carbs: 100.0, highlight: true },
              { name: "ポークカレー", calories: 750, protein: 22.0, fat: 22.5, carbs: 102.0 },
              { name: "ビーフカレー", calories: 780, protein: 24.0, fat: 25.0, carbs: 100.0 },
              { name: "野菜カレー", calories: 650, protein: 12.0, fat: 15.0, carbs: 108.0, highlight: true },
              { name: "カツカレー", calories: 1100, protein: 35.0, fat: 45.0, carbs: 125.0 },
              { name: "シーフードカレー", calories: 680, protein: 28.0, fat: 15.0, carbs: 98.0, highlight: true },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※一般的な1皿あたりの目安値。ご飯250g基準。
          </p>

          <p className="mb-4">
            最もカロリーが低いのは<Marker>野菜カレー（650kcal）とシーフードカレー（680kcal）</Marker>。具材の脂質が少ないことが理由です。一方、カツカレーは衣の油を吸った揚げ物がのるため1,100kcalと跳ね上がります。
          </p>

          <WarningBox title="カツカレーはダイエットの大敵">
            <ul className="space-y-2">
              <li><span className="font-bold">カツカレー（約1,100kcal / F45g）</span> ─ 脂質45gは1日の推奨量の約75%。カツの衣だけで200kcal以上を占めます。</li>
              <li><span className="font-bold">大盛りカレー（約1,050kcal）</span> ─ ご飯が400gになるだけで、カロリーは約250kcal増加。炭水化物は140g超えに。</li>
              <li><span className="font-bold">チーズトッピング（+100kcal）</span> ─ とろけるチーズ1枚で脂質7g追加。美味しいですがダイエット中は控えましょう。</li>
            </ul>
          </WarningBox>

          <TipBox title="カレーのスパイスにはダイエット効果も">
            <p>カレーに含まれるターメリック（ウコン）やカプサイシンには<Marker>代謝促進・脂肪燃焼効果</Marker>があるとされています。カレー自体が悪いわけではなく、問題はご飯の量と脂質の多さ。スパイスの恩恵を活かしつつカロリーを抑える食べ方がポイントです。</p>
          </TipBox>
        </section>

        {/* Section 2: チェーン店別比較 */}
        <section className="mb-16">
          <SectionHeading id="chain-comparison">チェーン店別カレーのカロリー比較</SectionHeading>

          <p className="mb-4">
            人気チェーン店のカレーメニューをカロリー順に比較しました。<Marker>同じ「カレー」でもチェーン店・メニューによって大きな差</Marker>があります。
          </p>

          <SubSectionHeading>CoCo壱番屋のカロリー</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "甘口ポークカレー（ライス150g）", calories: 681, protein: 10.8, fat: 17.0, carbs: 124.7, highlight: true },
              { name: "ポークカレー（ライス150g）", calories: 701, protein: 11.0, fat: 18.3, carbs: 126.9 },
              { name: "ココイチベジカレー（ライス150g）", calories: 688, protein: 10.1, fat: 15.6, carbs: 130.7, highlight: true },
              { name: "チキンにこみカレー（ライス150g）", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7, highlight: true },
              { name: "やさいカレー（ライス150g）", calories: 783, protein: 12.8, fat: 20.1, carbs: 142.4 },
              { name: "ビーフカレー（ライス150g）", calories: 823, protein: 17.3, fat: 29.6, carbs: 125.8 },
              { name: "ロースカツカレー（ライス150g）", calories: 1116, protein: 27.1, fat: 48.7, carbs: 149.3 },
            ]}
          />

          <p className="mb-4">
            CoCo壱の基準は通常ライス150g。<Marker color="blue">甘口ポークカレー（681kcal）やココイチベジカレー（688kcal）が比較的低カロリー</Marker>で、ロースカツカレー（1,116kcal）とは400kcal以上の差があります。タンパク質を確保したいならチキンにこみカレー（P24.4g）がおすすめです。
          </p>

          <SubSectionHeading>その他チェーン店のカレー</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "吉野家 牛黒カレー（並盛）", calories: 622, protein: 15.0, fat: 17.9, carbs: 103.3, highlight: true },
              { name: "すき家 カレー（並盛）", calories: 653, protein: 12.8, fat: 15.7, carbs: 115.2, highlight: true },
              { name: "松屋 創業ビーフカレー", calories: 769, protein: 17.9, fat: 28.8, carbs: 102.8 },
              { name: "すき家 牛カレー（並盛）", calories: 847, protein: 22.5, fat: 30.7, carbs: 120.6 },
            ]}
          />

          <p className="mb-4">
            ガストはカレーも提供していますが、公式の栄養成分はカロリーのみ公開のため、ここではP/F/Cを断定できません。<Marker>ガストブラックカレーは約499kcal、ガストひれかつブラックカレーは約762kcal</Marker>が目安です（タンパク質・脂質・糖質の確定値は非公開）。
          </p>

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。ガストはカロリーのみ公開。
          </p>

          <SubSectionHeading>チェーン店カレーの総合ランキング（カロリー順）</SubSectionHeading>

          <ComparisonTable
            headers={["順位", "チェーン店・メニュー", "カロリー", "おすすめ度"]}
            rows={[
              ["1位", "ガスト ブラックカレー", "499 kcal", "低カロリー(PFC非公開)"],
              ["2位", "吉野家 牛黒カレー（並盛）", "622 kcal", "最もおすすめ"],
              ["3位", "すき家 カレー（並盛）", "653 kcal", "おすすめ"],
              ["4位", "CoCo壱 甘口ポークカレー", "681 kcal", "まずまず"],
              ["5位", "松屋 創業ビーフカレー", "769 kcal", "まずまず"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            量を抑えたいなら<Marker>吉野家 牛黒カレー（並盛・622kcal）やすき家 カレー（並盛・653kcal）</Marker>が比較的低カロリー（ガストブラックカレーは499kcalだがPFCは非公開）。同じ「カレー」でも、メニューやサイズの選び方で300kcal以上の差が生まれます。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=400&fit=crop" alt="さまざまなカレーメニュー" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="カレーチェーンのカロリーを比較"
          subtitle="たべなびならCoCo壱・松屋・すき家のカレーメニューの栄養成分をすぐに確認"
        />

        {/* Section 3: CoCo壱でカロリーを抑える */}
        <section className="mb-16">
          <SectionHeading id="cocoichi-light">CoCo壱でカロリーを抑える賢い選び方</SectionHeading>

          <p className="mb-4">
            CoCo壱番屋でカロリーを抑えるコツは、<Marker>ライスの量・ソース（具材）・トッピングの3つを意識すること</Marker>です。基準は通常ライス150gで、ここをどう調整するかが鍵になります。
          </p>

          <SubSectionHeading>ライスの量でカロリーを調整</SubSectionHeading>

          <ComparisonTable
            headers={["比較項目", "通常ライス150g", "ライス小100g", "差分"]}
            rows={[
              ["ライスのカロリー", "234 kcal", "156 kcal", "-78 kcal"],
              ["ライスの糖質", "55.7g", "37.1g", "-18.6g"],
              ["ライスのタンパク質", "3.8g", "2.5g", "-1.3g"],
              ["ライスの脂質", "0.5g", "0.3g", "-0.2g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            CoCo壱はライス量を細かく選べます。<Marker color="blue">ライスを150gから小盛り100gに変えるだけで約78kcal・糖質18.6gをカット</Marker>。物足りなければソース（具材）でタンパク質を補うのがおすすめです。
          </p>

          <SubSectionHeading>具材（ソース）別カロリー比較</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "甘口ポークカレー", calories: 681, protein: 10.8, fat: 17.0, carbs: 124.7, highlight: true },
              { name: "ココイチベジカレー", calories: 688, protein: 10.1, fat: 15.6, carbs: 130.7, highlight: true },
              { name: "ポークカレー", calories: 701, protein: 11.0, fat: 18.3, carbs: 126.9 },
              { name: "チキンにこみカレー", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7, highlight: true },
              { name: "ビーフカレー", calories: 823, protein: 17.3, fat: 29.6, carbs: 125.8 },
              { name: "ロースカツカレー", calories: 1116, protein: 27.1, fat: 48.7, carbs: 149.3 },
            ]}
          />

          <p className="mb-4">
            <Marker>甘口ポークカレー（681kcal）とロースカツカレー（1,116kcal）では435kcalもの差</Marker>。揚げ物系トッピングは脂質が一気に増えるため、ダイエット中はにこみ系や野菜系を選ぶのがポイントです。タンパク質を重視するならチキンにこみカレー（P24.4g）が有力です。
          </p>

          <TipBox title="CoCo壱のライス量の選び方">
            <p>CoCo壱ではライス量を100g刻みで選べます（小盛り100g・通常150g・200gなど）。<Marker>追加料金なしで小盛りにできる</Marker>ため、カロリーが気になる日は100gを選ぶのが手軽な節約術。足りない分はサラダや低脂質トッピングで満足感を補いましょう。</p>
          </TipBox>

          <WarningBox title="トッピング選びの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">揚げ物トッピングは脂質が高い</span> ─ ロースカツやチーズは脂質が多く、合計カロリーが跳ね上がります。脂質を抑えたい日は避けましょう。</li>
              <li><span className="font-bold">チーズ（195kcal・F15.8g）</span> ─ 1食分のトッピングで脂質約15.8gを追加。美味しいですがダイエット中は控えめに。</li>
            </ul>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=400&fit=crop" alt="CoCo壱のカレーのイメージ" />
        </section>

        {/* Section 4: 太らない食べ方 */}
        <section className="mb-16">
          <SectionHeading id="how-to-eat">カレーで太らない食べ方5選</SectionHeading>

          <p className="mb-4">
            カレーを完全に我慢する必要はありません。<Marker>以下の5つの方法を実践すれば、ダイエット中でもカレーを罪悪感なく楽しめます</Marker>。
          </p>

          <NumberedList
            items={[
              {
                title: "ライスを減らす（-78〜156kcal）",
                body: "最も効果的で簡単な方法。CoCo壱ではライスを150gから小盛り100gに減らすだけで約78kcal・糖質18.6gをカット。ライスのカロリーは100gあたり約156kcalなので、量を減らすほど節約効果が大きくなります。すき家・松屋でもミニや並盛を選んで量を調整できます。",
              },
              {
                title: "CoCo壱なら甘口ポークや野菜系を選ぶ（-400kcal）",
                body: "ソース（具材）の選び方でカロリーは大きく変わります。甘口ポークカレー（681kcal）やココイチベジカレー（688kcal）は、ロースカツカレー（1,116kcal）より400kcal以上低カロリー。揚げ物トッピングを避けるだけで大幅にカットできます。",
              },
              {
                title: "具材はチキンかシーフードを選ぶ",
                body: "チキンカレー（690kcal）とカツカレー（1,100kcal）では410kcalの差。同じカレーでも肉の種類で大きくカロリーが変わります。鶏肉は脂質が少なくタンパク質が豊富、シーフードも同様に低脂質・高タンパクでダイエット向きです。",
              },
              {
                title: "サラダを先に食べる（ベジファースト）",
                body: "カレーの前にサラダを食べることで血糖値の急上昇を防ぎ、インスリンの過剰分泌を抑える助けになるとされています。CoCo壱ではシーザーサラダ（約102kcal）が注文可能。先に野菜から食べる「ベジファースト」を意識しましょう。",
              },
              {
                title: "前後の食事で1日のカロリーを調整する",
                body: "カレーを昼食に食べる場合（700kcal）、朝食を300kcal・夕食を400kcalに抑えて1日1,400kcalに。夕食にカレーを食べるなら、朝食300kcal・昼食400kcalで計1,400kcal。カレーの日だけ前後の食事をタンパク質中心の軽食にするのがコツです。",
              },
            ]}
          />

          <SubSectionHeading>食べ方によるカロリー差シミュレーション</SubSectionHeading>

          <ComparisonTable
            headers={["食べ方", "CoCo壱の場合", "ポークカレー（150g）との差"]}
            rows={[
              ["ポークカレー（ライス150g）そのまま", "701 kcal", "---"],
              ["ポークカレー → ライス小（100g）", "623 kcal", "-78 kcal"],
              ["甘口ポークカレー（ライス150g）に変更", "681 kcal", "-20 kcal"],
              ["ココイチベジカレー（ライス150g）に変更", "688 kcal", "-13 kcal"],
              ["チキンにこみカレー（高タンパク・150g）", "769 kcal", "+68 kcal"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            <Marker color="blue">ライスを小盛り（100g）にすれば約623kcal</Marker>。タンパク質をしっかり摂りたい日は、カロリーは少し上がりますがチキンにこみカレー（769kcal・P24.4g）を選ぶと栄養バランスを取りやすくなります。
          </p>

          <SubSectionHeading>自宅カレーのカロリーカット術</SubSectionHeading>

          <p className="mb-4">
            外食だけでなく、自宅でカレーを作る際も工夫次第でカロリーを大幅に抑えられます。
          </p>

          <CheckList
            items={[
              "市販のルウを半量にし、カレー粉+トマト缶で味を補う（-100kcal）",
              "鶏むね肉を使い、脂質をカット（-50kcal）",
              "ご飯にしらたきを混ぜて炊く（3割混ぜで-80kcal）",
              "じゃがいもを減らし、きのこやブロッコリーで量を補う",
              "仕上げにヨーグルトを加え、コクを出しつつルウの量を削減",
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&h=400&fit=crop" alt="自宅で作るヘルシーカレー" />

          <TipBox title="カレーを食べる頻度の目安">
            <p>ダイエット中のカレーは<Marker>週1〜2回まで</Marker>が一つの目安。ライス小盛りや低脂質メニューを選べば頻度を増やしやすくなりますが、揚げ物トッピングの日は週1回に抑え、前後の食事で調整しましょう。カレーの日を「ご褒美の日」として設定すると、ダイエットのモチベーション維持にも役立ちます。</p>
          </TipBox>
        </section>

        {/* Section 5: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            カレーは高カロリーなイメージがありますが、食べ方とメニュー選び次第でダイエット中でも十分楽しめます。
          </p>

          <CheckList
            items={[
              "一般的なカレーライスは700〜900kcal。最大の原因はご飯（糖質）の量",
              "CoCo壱はライスを小盛り100gにすると約78kcal・糖質18.6gカット",
              "チェーン店で量を抑えるならすき家カレー（ミニ・390kcal）が低カロリー",
              "CoCo壱の具材は甘口ポークや野菜系を選び、ロースカツカレー（1,116kcal）は避ける",
              "ガストのカレーはカロリーのみ公開（ブラックカレー約499kcal）",
              "サラダを先に食べるベジファーストで血糖値の急上昇を抑える",
              "カレーの日は前後の食事を軽めにして1日のカロリーを調整する",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="カレーメニューのカロリーを簡単比較"
          subtitle="たべなびならCoCo壱・松屋・すき家・吉野家のカレーメニューの栄養成分をまとめてチェック"
        />

        {/* FAQ */}
        <FAQSection
          slug="curry-diet"
          items={[
            { q: "CoCo壱でカロリーを抑えるにはどうすればいいですか？", a: "ライスを小盛り（100g）にすると約78kcal・糖質18.6gをカットできます。さらに具材は甘口ポークカレー（681kcal）やココイチベジカレー（688kcal）など脂質の少ないものを選び、ロースカツなど揚げ物トッピングを避けるのが効果的です。" },
            { q: "カレーに含まれるカロリーの最大要因は何ですか？", a: "ご飯（糖質）が大きな割合を占めます。CoCo壱のライスは150gで約234kcal、100gで約156kcal。ライスの量を減らすことが手軽で効果的なカロリーカット方法です。" },
            { q: "チェーン店のカレーで最もカロリーが低いのはどれですか？", a: "量を抑えたメニューならすき家カレー（ミニ・390kcal）が低く、次に吉野家 黒カレー（並盛・480kcal）、ガスト ブラックカレー（約499kcal）です。CoCo壱の甘口ポークカレーは681kcalです。" },
            { q: "カレーを食べるときのコツは何ですか？", a: "ライスの量を小盛りにする、CoCo壱なら甘口ポークや野菜系の具材を選ぶ、サラダを先に食べるベジファースト、前後の食事で1日のカロリーを調整するのが有効です。" },
            { q: "ガストのカレーの栄養成分はわかりますか？", a: "ガストはカレーを含め公式の栄養情報がカロリーのみ公開のため、タンパク質・脂質・糖質は断定できません。ガストブラックカレーは約499kcal、ガストひれかつブラックカレーは約762kcalが目安です。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "CoCo壱番屋・ガストの全メニューを最新DB実データに再照合。実在しない「CoCo壱 カリフラワーライス（低糖質カレー）355kcal」を記事全体から削除し、実在するライス少なめ（小盛り100g）・具材選びによるカロリーカットに再構成。CoCo壱の各カレーのカロリー・P/F/Cを実値に修正（ポークカレー701kcal、甘口ポークカレー681kcal、チキンにこみカレー769kcal、ロースカツカレー1,116kcal等）。実在しない「なか卯 カレーうどん」を比較から削除。ガストは公式の栄養情報がカロリーのみ公開のためP/F/Cの断定を削除しカロリー基準（ブラックカレー約499kcal等）に縮退。チェーン店ランキング・QuickAnswer・FAQ・まとめ・metadataを新実値に書き換え" },
            { date: "2026-03-23", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="curry-diet" />

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