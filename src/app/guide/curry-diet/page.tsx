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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較 | たべなび",
  description:
    "カレーライスのカロリーを徹底解説。CoCo壱番屋・松屋・ガストなどチェーン店別カロリー比較、CoCo壱のカリフラワーライスで糖質カット、ダイエット中でも太らないカレーの食べ方5選を紹介します。",
  keywords: [
    "カレー カロリー",
    "CoCo壱 カロリー",
    "カレー ダイエット",
    "CoCo壱 カリフラワーライス",
    "カレー 太らない",
  ],
  openGraph: {
    title: "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較",
    description:
      "カレーのカロリーをチェーン店別に徹底比較。CoCo壱のカリフラワーライスや太らない食べ方を解説します。",
    url: "https://tabenavi.jp/guide/curry-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】カレーのカロリーは？ダイエット中の食べ方とチェーン店別比較",
  description:
    "カレーのカロリーをチェーン店別に徹底比較。CoCo壱のカリフラワーライスや太らない食べ方を解説します。",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/curry-diet",
};

const tocItems = [
  { id: "curry-calories", label: "カレーのカロリー事情" },
  { id: "chain-comparison", label: "チェーン店別カロリー比較" },
  { id: "cauliflower-rice", label: "CoCo壱のカリフラワーライス" },
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月23日</p>

        {/* Introduction */}
        <p className="mb-4">
          カレーライスは日本人のソウルフードですが、ダイエット中は「カレー＝太る」というイメージから敬遠されがちです。実際、一般的なカレーライス1皿のカロリーは<Marker>700〜900kcal</Marker>と決して低くありません。
        </p>
        <p className="mb-4">
          しかし、<Marker color="blue">CoCo壱番屋のカリフラワーライスを使えば糖質を約50%カット</Marker>できるなど、食べ方次第でカレーもダイエットの味方にできます。チェーン店ごとのカロリー差も200kcal以上あり、正しい知識があれば賢く楽しめます。
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
            人気チェーン店のカレーメニューをカロリー順に比較しました。<Marker>同じ「カレー」でもチェーン店によって300kcal以上の差</Marker>があります。
          </p>

          <SubSectionHeading>CoCo壱番屋のカロリー</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "ポークカレー（普通盛300g）", calories: 755, protein: 18.5, fat: 22.0, carbs: 118.0 },
              { name: "ポークカレー（200g・ご飯少なめ）", calories: 585, protein: 16.0, fat: 20.0, carbs: 82.0, highlight: true },
              { name: "チキンにこみカレー（300g）", calories: 830, protein: 28.0, fat: 25.0, carbs: 118.0 },
              { name: "ロースカツカレー（300g）", calories: 1070, protein: 30.0, fat: 40.0, carbs: 135.0 },
              { name: "カリフラワーライス + ポークカレー", calories: 355, protein: 15.0, fat: 20.0, carbs: 28.0, highlight: true },
              { name: "500gカレー（大盛り）", calories: 1170, protein: 22.0, fat: 24.0, carbs: 210.0 },
            ]}
          />

          <p className="mb-4">
            CoCo壱の普通盛り（ご飯300g）は755kcal。しかし<Marker color="blue">カリフラワーライスに変更するだけで355kcal</Marker>と、なんと半分以下に。これはCoCo壱でダイエットする際の最重要テクニックです。
          </p>

          <SubSectionHeading>その他チェーン店のカレー</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "松屋 オリジナルカレー（並盛）", calories: 680, protein: 15.0, fat: 18.0, carbs: 110.0, highlight: true },
              { name: "松屋 オリジナルカレー（大盛）", calories: 920, protein: 18.0, fat: 20.0, carbs: 155.0 },
              { name: "ガスト チキンカレー", calories: 720, protein: 22.0, fat: 20.0, carbs: 105.0 },
              { name: "すき家 カレー（並盛）", calories: 750, protein: 16.0, fat: 20.5, carbs: 120.0 },
              { name: "吉野家 カレー（並盛）", calories: 710, protein: 14.5, fat: 19.0, carbs: 115.0 },
              { name: "なか卯 カレーうどん", calories: 590, protein: 18.0, fat: 15.0, carbs: 88.0, highlight: true },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>

          <SubSectionHeading>チェーン店カレーの総合ランキング</SubSectionHeading>

          <ComparisonTable
            headers={["順位", "チェーン店・メニュー", "カロリー", "おすすめ度"]}
            rows={[
              ["1位", "CoCo壱 カリフラワーライス + ポークカレー", "355 kcal", "最もおすすめ"],
              ["2位", "なか卯 カレーうどん", "590 kcal", "おすすめ"],
              ["3位", "CoCo壱 ポークカレー（ご飯少なめ200g）", "585 kcal", "おすすめ"],
              ["4位", "松屋 オリジナルカレー（並盛）", "680 kcal", "まずまず"],
              ["5位", "吉野家 カレー（並盛）", "710 kcal", "注意"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            圧倒的1位は<Marker>CoCo壱のカリフラワーライスカレー（355kcal）</Marker>。2位以下と230kcal以上の差があり、ダイエット中にカレーを食べるなら最優先の選択肢です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=400&fit=crop" alt="さまざまなカレーメニュー" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="カレーチェーンのカロリーを比較"
          subtitle="たべなびならCoCo壱・松屋・すき家のカレーメニューの栄養成分をすぐに確認"
        />

        {/* Section 3: CoCo壱カリフラワーライス */}
        <section className="mb-16">
          <SectionHeading id="cauliflower-rice">CoCo壱のカリフラワーライスで糖質大幅カット</SectionHeading>

          <p className="mb-4">
            CoCo壱番屋の<Marker>「低糖質カレー」はカリフラワーをライスの代わりに使った画期的なメニュー</Marker>。ダイエット中のカレー好きにとって救世主的な存在です。
          </p>

          <SubSectionHeading>通常ライス vs カリフラワーライスの比較</SubSectionHeading>

          <ComparisonTable
            headers={["比較項目", "通常ライス（300g）", "カリフラワーライス", "差分"]}
            rows={[
              ["カロリー", "755 kcal", "355 kcal", "-400 kcal"],
              ["糖質", "118g", "28g", "-90g"],
              ["脂質", "22g", "20g", "-2g"],
              ["タンパク質", "18.5g", "15g", "-3.5g"],
              ["食物繊維", "2g", "8g", "+6g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            驚くべきは<Marker color="blue">カロリー400kcal減・糖質90g減</Marker>という圧倒的な差。糖質制限ダイエットをしている方にとって、糖質28gで本格カレーが食べられるのは他にない選択肢です。
          </p>

          <p className="mb-4">
            さらに食物繊維は通常ライスの4倍。カリフラワーは食物繊維が豊富なため、<Marker>血糖値の急上昇を抑え、満腹感も持続しやすい</Marker>というメリットもあります。
          </p>

          <SubSectionHeading>カリフラワーライスのおすすめトッピング</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "カリフラワーライス + ポークカレー", calories: 355, protein: 15.0, fat: 20.0, carbs: 28.0, highlight: true },
              { name: "+ ほうれん草", calories: 385, protein: 17.0, fat: 21.0, carbs: 29.5, highlight: true },
              { name: "+ ゆで卵", calories: 435, protein: 21.5, fat: 24.5, carbs: 28.3 },
              { name: "+ チキンにこみ", calories: 455, protein: 25.0, fat: 23.0, carbs: 30.0, highlight: true },
              { name: "+ ロースカツ", calories: 670, protein: 28.0, fat: 38.0, carbs: 45.0 },
            ]}
          />

          <p className="mb-4">
            カリフラワーライスなら<Marker>トッピングを追加しても500kcal以下</Marker>に収めやすいのが魅力。ほうれん草（+30kcal）やゆで卵（+80kcal）を追加して栄養バランスを強化するのがおすすめです。
          </p>

          <TipBox title="カリフラワーライスの注文方法">
            <p>CoCo壱の券売機またはレジで「低糖質カレー」を注文するだけ。<Marker>追加料金は+150円程度</Marker>で、通常のカレーとほぼ同じ量のカリフラワーライスが提供されます。味もカレーとの相性が良く、初めての方でも違和感なく食べられると評判です。</p>
          </TipBox>

          <WarningBox title="カリフラワーライスの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">ルウの量は同じ</span> ─ カリフラワーライスでもルウの脂質（約20g）は変わりません。脂質も気になる方はルウ少なめを依頼しましょう。</li>
              <li><span className="font-bold">トッピングで台無しにしない</span> ─ ロースカツ（+315kcal）やチーズ（+100kcal）を追加するとカロリーが跳ね上がります。</li>
            </ul>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=400&fit=crop" alt="低糖質カレーのイメージ" />
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
                title: "ご飯を減らす（-150〜250kcal）",
                body: "最も効果的で簡単な方法。ご飯を300gから200gに減らすだけで約170kcalカット。CoCo壱では「ライス少なめ（200g）」を選択可能。松屋でも「ミニ盛」にできます。ご飯100gあたり約168kcalなので、50g減らすごとに約84kcalの節約になります。",
              },
              {
                title: "CoCo壱ならカリフラワーライスを選ぶ（-400kcal）",
                body: "前述の通り、カリフラワーライスに変更するだけで400kcal・糖質90gのカット。追加料金150円で400kcalカットは、あらゆるダイエットテクニックの中でもトップクラスのコスパです。",
              },
              {
                title: "具材はチキンかシーフードを選ぶ",
                body: "チキンカレー（690kcal）とカツカレー（1,100kcal）では410kcalの差。同じカレーでも肉の種類で大きくカロリーが変わります。鶏肉は脂質が少なくタンパク質が豊富、シーフードも同様に低脂質・高タンパクでダイエット向きです。",
              },
              {
                title: "サラダを先に食べる（ベジファースト）",
                body: "カレーの前にサラダを食べることで血糖値の急上昇を防ぎ、インスリンの過剰分泌を抑制できます。CoCo壱ではシーザーサラダ（約80kcal）が注文可能。松屋なら無料の味噌汁を先に飲むのも効果的です。",
              },
              {
                title: "前後の食事で1日のカロリーを調整する",
                body: "カレーを昼食に食べる場合（700kcal）、朝食を300kcal・夕食を400kcalに抑えて1日1,400kcalに。夕食にカレーを食べるなら、朝食300kcal・昼食400kcalで計1,400kcal。カレーの日だけ前後の食事をタンパク質中心の軽食にするのがコツです。",
              },
            ]}
          />

          <SubSectionHeading>食べ方によるカロリー差シミュレーション</SubSectionHeading>

          <ComparisonTable
            headers={["食べ方", "CoCo壱ポークカレーの場合", "カット量"]}
            rows={[
              ["普通盛り（300g）そのまま", "755 kcal", "---"],
              ["ご飯少なめ（200g）", "585 kcal", "-170 kcal"],
              ["カリフラワーライスに変更", "355 kcal", "-400 kcal"],
              ["カリフラワーライス + ほうれん草追加", "385 kcal", "-370 kcal"],
              ["カリフラワーライス + ゆで卵追加", "435 kcal", "-320 kcal"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            <Marker color="blue">カリフラワーライスにゆで卵を追加しても435kcal</Marker>。通常の普通盛りより320kcal低く、タンパク質は21.5gとしっかり確保。栄養バランスとカロリーコントロールを両立した最適解です。
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
            <p>ダイエット中のカレーは<Marker>週1〜2回まで</Marker>が理想。カリフラワーライスを使えば週2回でも問題ありませんが、通常ライスの場合は週1回に抑え、前後の食事で調整しましょう。カレーの日を「ご褒美の日」として設定すると、ダイエットのモチベーション維持にも効果的です。</p>
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
              "一般的なカレーライスは700〜900kcal。最大の原因はご飯の量（420kcal）",
              "CoCo壱のカリフラワーライスなら355kcal（-400kcal）で糖質も90gカット",
              "チェーン店で最もダイエット向きはCoCo壱カリフラワーライスカレー（355kcal）",
              "具材はチキンかシーフードを選び、カツカレー（1,100kcal）は避ける",
              "ご飯少なめ（200g）にするだけでも170kcalカット",
              "サラダを先に食べるベジファーストで血糖値の急上昇を防ぐ",
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
          subtitle="たべなびならCoCo壱・松屋・ガストのカレーメニューの栄養成分をまとめてチェック"
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