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
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/drinking-party-diet" },
  title:
    "【2026年最新】飲み会で太らない完全ガイド｜居酒屋メニューのカロリー・おつまみの選び方 | たべなび",
  description:
    "飲み会でも太らないためのお酒・おつまみの選び方を徹底解説。ビール・ハイボール・ワインのカロリー比較、居酒屋で選ぶべきおつまみBEST10、飲み会前・中・後の3段階テクニックを紹介。",
  keywords: [
    "飲み会 ダイエット",
    "飲み会 太らない",
    "居酒屋 カロリー",
    "おつまみ ダイエット",
    "お酒 カロリー",
    "ハイボール カロリー",
    "居酒屋 ダイエット",
  ],
  openGraph: {
    title:
      "【2026年最新】飲み会で太らない完全ガイド｜居酒屋メニューのカロリー・おつまみの選び方",
    description:
      "飲み会でも太らないためのお酒・おつまみの選び方を徹底解説。カロリー比較と3段階テクニックで飲み会を乗り越えよう。",
    url: "https://www.tabenavi.jp/guide/drinking-party-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】飲み会で太らない完全ガイド｜居酒屋メニューのカロリー・おつまみの選び方",
  description:
    "飲み会でも太らないためのお酒・おつまみの選び方を徹底解説。カロリー比較と3段階テクニックで飲み会を乗り越えよう。",
  datePublished: "2026-03-19",
  dateModified: "2026-06-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/drinking-party-diet",
};

const tocItems = [
  { id: "alcohol-enemy", label: "飲み会はダイエットの大敵？" },
  { id: "alcohol-calories", label: "お酒のカロリー比較" },
  { id: "best-otsumami", label: "居酒屋で選ぶべきおつまみBEST10" },
  { id: "worst-otsumami", label: "絶対避けるべきおつまみワースト5" },
  { id: "three-stage", label: "飲み会前・中・後の3段階テクニック" },
  { id: "chain-izakaya", label: "チェーン居酒屋のダイエットメニュー" },
  { id: "summary", label: "まとめ" },
];

export default function DrinkingPartyDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="飲み会で太らない完全ガイド"
        subtitle="居酒屋メニューのカロリー・おつまみの選び方で飲み会を乗り越えよう【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=400&fit=crop"
        breadcrumb="飲み会ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="drinking-party-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月19日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中なのに飲み会のお誘いが...」「断れない付き合いの飲み会で毎回リバウンド」――ダイエッターにとって飲み会は最大の敵と言っても過言ではありません。
        </p>
        <p className="mb-4">
          実際、飲み会1回で<Marker>摂取カロリーが2,000〜3,000kcalに達する</Marker>ことも珍しくありません。これは成人男性の1日分のカロリーに相当します。しかし、お酒やおつまみの選び方次第で、飲み会のカロリーを<Marker color="blue">半分以下に抑える</Marker>ことが可能です。
        </p>
        <p className="mb-8">
          この記事では、お酒のカロリー比較からおつまみの選び方、飲み会前後のテクニックまで、飲み会で太らないための完全ガイドをお届けします。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1575037614876-c38a4c44f5b8?w=800&h=400&fit=crop"
          alt="居酒屋のカウンターに並ぶビールやカクテルのグラス"
        />

        {/* Section 1: 飲み会はダイエットの大敵？ */}
                <QuickAnswer
          question={"飲み会で太らないようにするには、どのお酒とおつまみを選べばいい？"}
          answer={"ハイボール（約70kcal/杯）をベースに、枝豆・刺身・焼き鳥（塩）などの高タンパク・低脂質なおつまみを選びましょう。飲み会1回のカロリーを、通常の3,000kcalから990kcal以下に抑えることが可能です。"}
        />

        <SectionHeading id="alcohol-enemy">飲み会はダイエットの大敵？アルコールと体脂肪の関係</SectionHeading>

        <p className="mb-4">
          まずは飲み会がなぜ太りやすいのか、そのメカニズムを理解しましょう。原因はアルコールだけではありません。
        </p>

        <SubSectionHeading>アルコールの「エンプティカロリー」の真実</SubSectionHeading>

        <p className="mb-4">
          アルコール1gあたりのカロリーは<Marker>約7kcal</Marker>。これはタンパク質・炭水化物（4kcal/g）より高く、脂質（9kcal/g）に近い数値です。「エンプティカロリーだから太らない」という説がありますが、これは半分正解で半分不正解です。
        </p>
        <p className="mb-4">
          アルコール自体は体脂肪にはなりにくいものの、<Marker color="blue">アルコールの代謝中は脂肪の分解がストップ</Marker>します。つまり、お酒と一緒に食べた脂っこいおつまみの脂質がそのまま体脂肪として蓄積されやすくなるのです。
        </p>

        <SubSectionHeading>飲み会で太る3つの原因</SubSectionHeading>

        <NumberedList
          items={[
            {
              title: "アルコールによる食欲増進効果",
              body: "お酒を飲むと脳の食欲中枢が刺激され、普段より食べ過ぎてしまいます。「シメのラーメン」が食べたくなるのはこのためです。研究では、アルコール摂取により食事量が平均で約30%増加するという報告もあります。",
            },
            {
              title: "脂質代謝の低下",
              body: "肝臓がアルコールの分解を優先するため、脂質の代謝が後回しに。同じ食事でも、お酒と一緒だと体脂肪になりやすくなります。",
            },
            {
              title: "おつまみの高カロリー",
              body: "唐揚げ、フライドポテト、ピザなど、居酒屋の定番おつまみは高脂質・高カロリーのものが多い。さらに長時間のダラダラ食べで摂取量が増えがちです。",
            },
          ]}
        />

        <WarningBox title="「飲み放題」は最大のリスク">
          <p>飲み放題だと「元を取ろう」という心理が働き、普段より飲酒量が増えます。ビール5杯（約1,000kcal）+おつまみで<Marker>合計2,500kcal超え</Marker>になることも。飲み放題でも「3杯まで」と自分ルールを決めるのが鉄則です。</p>
        </WarningBox>

        {/* Section 2: お酒のカロリー比較 */}
        <SectionHeading id="alcohol-calories">お酒のカロリー徹底比較｜ダイエット中に選ぶべきお酒は？</SectionHeading>

        <p className="mb-4">
          同じ「1杯」でもお酒の種類によってカロリーは大きく異なります。<Marker>ハイボールと生ビールでは1杯あたり約100kcalの差</Marker>があります。
        </p>

        <ComparisonTable
          headers={["お酒の種類", "1杯の目安量", "カロリー", "糖質"]}
          rows={[
            ["ハイボール", "350ml", "約70 kcal", "0g"],
            ["焼酎（ロック）", "シングル60ml", "約85 kcal", "0g"],
            ["ウーロンハイ", "350ml", "約95 kcal", "0g"],
            ["赤ワイン", "グラス125ml", "約90 kcal", "1.5g"],
            ["白ワイン", "グラス125ml", "約88 kcal", "2.0g"],
            ["レモンサワー", "350ml", "約110 kcal", "3.5g"],
            ["生ビール（中）", "350ml", "約145 kcal", "10.9g"],
            ["日本酒（1合）", "180ml", "約190 kcal", "6.5g"],
            ["梅酒ロック", "90ml", "約140 kcal", "18.6g"],
            ["カシスオレンジ", "350ml", "約180 kcal", "24.0g"],
          ]}
          bestRowIndex={0}
        />

        <TipBox title="ダイエット中のベストドリンクは「ハイボール」">
          <p><Marker>ハイボールは1杯約70kcalで糖質ゼロ</Marker>。ウイスキーを炭酸水で割っているだけなので、余計な糖質がありません。3杯飲んでも210kcalと、生ビール2杯分以下。ダイエット中のお酒はハイボール一択と言っても過言ではありません。</p>
        </TipBox>

        <SubSectionHeading>生ビールを飲む場合の対策</SubSectionHeading>

        <p className="mb-4">
          「それでもビールが飲みたい！」という方は、<Marker color="blue">最初の1杯だけ生ビール、2杯目からハイボール</Marker>に切り替えるのがおすすめです。最初の1杯のビールで満足感を得て、その後は低カロリーなハイボールでペースを作りましょう。
        </p>
        <p className="mb-8">
          また、ビールを飲むなら「中ジョッキ（約350ml・145kcal）」で止めること。大ジョッキ（約700ml・290kcal）にすると一気にカロリーが倍増します。
        </p>

        {/* Section 3: おつまみBEST10 */}
        <SectionHeading id="best-otsumami">居酒屋で選ぶべきおつまみBEST10</SectionHeading>

        <p className="mb-6">
          お酒の選び方と同じくらい重要なのがおつまみ選び。<Marker>高タンパク・低脂質のおつまみを選ぶ</Marker>ことで、飲み会のカロリーを大幅に抑えられます。
        </p>

        <RankingCard rank={1} title="枝豆" subtitle="約135kcal / P11.7g / F6.2g / C8.8g（1皿約100g）">
          <p className="text-sm text-gray-700 leading-relaxed">
            居酒屋おつまみの王道にして最強のダイエットメニュー。<Marker>タンパク質11.7gで脂質6.2g</Marker>と栄養バランスが抜群。食物繊維も豊富で満腹感が持続します。飲み会開始直後に必ず注文しましょう。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="刺身盛り合わせ" subtitle="約180kcal / P28.6g / F5.8g / C1.2g（5切れ盛り）">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="blue">圧倒的な高タンパク・低脂質</Marker>。まぐろ赤身・サーモン・鯛・イカ・たこなど、どの魚介を選んでも低カロリーです。特にまぐろ赤身は100gあたり125kcal/P26.4g。醤油のつけすぎだけ注意しましょう。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="焼き鳥（塩）" subtitle="約80kcal / P12.4g / F3.2g / C0.2g（もも・1本）">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="green">1本約80kcalで高タンパク12.4g</Marker>。タレより塩を選ぶのがポイント。タレは砂糖が多く、1本あたり約15kcal上乗せされます。もも・むね・ささみがおすすめ。皮は1本約160kcalと高カロリーなので避けましょう。
          </p>
        </RankingCard>

        <NutritionTable
          items={[
            { name: "4位：冷奴", calories: 80, protein: 7.0, fat: 4.2, carbs: 2.8, highlight: true },
            { name: "5位：海藻サラダ", calories: 45, protein: 1.8, fat: 0.4, carbs: 8.6, highlight: true },
            { name: "6位：だし巻き卵", calories: 128, protein: 10.2, fat: 8.6, carbs: 2.4 },
            { name: "7位：たこわさ", calories: 62, protein: 10.8, fat: 0.8, carbs: 2.6, highlight: true },
            { name: "8位：もずく酢", calories: 28, protein: 0.6, fat: 0.2, carbs: 5.8, highlight: true },
            { name: "9位：砂肝焼き", calories: 94, protein: 14.6, fat: 3.8, carbs: 0.2 },
            { name: "10位：漬物盛り合わせ", calories: 35, protein: 1.2, fat: 0.2, carbs: 7.4, highlight: true },
          ]}
          highlightProtein
        />

        <TipBox title="「最初の注文」がカロリーを左右する">
          <p>飲み会の最初に「とりあえず唐揚げ！」ではなく、<Marker>「とりあえず枝豆・冷奴・海藻サラダ！」</Marker>と注文しましょう。最初に低カロリーなおつまみで空腹感を和らげておくと、その後の食べ過ぎを防げます。さらに食物繊維を先に摂ることで血糖値の急上昇も抑えられます。</p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=800&h=400&fit=crop"
          alt="枝豆や刺身などヘルシーな居酒屋おつまみが並ぶテーブル"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="居酒屋メニューのカロリーを簡単検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: ワーストおつまみ */}
        <SectionHeading id="worst-otsumami">絶対避けるべきおつまみワースト5</SectionHeading>

        <p className="mb-4">
          居酒屋の定番おつまみには<Marker>1品で500kcalを超える危険なメニュー</Marker>が潜んでいます。以下の5品はダイエット中は絶対に避けましょう。
        </p>

        <WarningBox title="飲み会の地雷おつまみ TOP5">
          <ul className="space-y-3">
            <li><span className="font-bold">1位：フライドポテト（約420kcal / F22.8g）</span> ─ 炭水化物+脂質の最悪コンビ。塩気でビールが進み、さらにカロリーが増える悪循環に。</li>
            <li><span className="font-bold">2位：鶏の唐揚げ（約380kcal / F24.6g・5個）</span> ─ 揚げ衣が油を大量に吸収。「みんなで食べるから」と油断して4〜5個食べると400kcal近くに。</li>
            <li><span className="font-bold">3位：ピザ（約550kcal / F26.4g・1/2枚）</span> ─ チーズ+生地で高カロリー・高脂質。1切れで約180kcal、2〜3切れ食べると一瞬で500kcal超え。</li>
            <li><span className="font-bold">4位：焼きそば・焼きうどん（約480kcal / F18.2g）</span> ─ 炭水化物の塊。ソースの糖質も加わり、シメに食べると致命的。</li>
            <li><span className="font-bold">5位：締めのラーメン（約500kcal / F18.6g）</span> ─ 飲み会の最後に炭水化物+脂質を摂るのは最悪のパターン。深夜の食事は体脂肪として蓄積されやすい。</li>
          </ul>
        </WarningBox>

        <ComparisonTable
          headers={["おつまみ", "カロリー", "タンパク質", "脂質", "炭水化物"]}
          rows={[
            ["フライドポテト", "420 kcal", "4.8g", "22.8g", "52.4g"],
            ["唐揚げ（5個）", "380 kcal", "22.4g", "24.6g", "16.8g"],
            ["ピザ（1/2枚）", "550 kcal", "18.6g", "26.4g", "58.2g"],
            ["焼きそば", "480 kcal", "12.4g", "18.2g", "64.6g"],
            ["締めラーメン", "500 kcal", "16.8g", "18.6g", "62.4g"],
          ]}
        />

        <TipBox title="唐揚げの代わりに「焼き鳥」を">
          <p>「揚げる」を「焼く」に変えるだけでカロリーは半分以下に。唐揚げ5個（380kcal）の代わりに<Marker>焼き鳥3本（240kcal）</Marker>を選べば、タンパク質はほぼ同等で脂質を大幅カットできます。</p>
        </TipBox>

        {/* Section 5: 3段階テクニック */}
        <SectionHeading id="three-stage">飲み会前・中・後の3段階テクニック</SectionHeading>

        <p className="mb-6">
          飲み会で太らないためには、<Marker>飲み会の「前」「中」「後」それぞれで対策を打つ</Marker>ことが重要です。
        </p>

        <SubSectionHeading>STAGE 1：飲み会「前」の準備</SubSectionHeading>

        <NumberedList
          items={[
            {
              title: "昼食は高タンパク・低脂質にする",
              body: "飲み会がある日の昼食は、鶏むね肉やプロテインドリンクなど高タンパク質の食事を。空腹で飲み会に行くと食べ過ぎるので、適度な量を食べておきましょう。",
            },
            {
              title: "飲み会の30分前にプロテインを飲む",
              body: "プロテイン1杯（約120kcal・P24g）を飲んでおくと、空腹感が和らぎ食べ過ぎを防げます。さらにタンパク質の摂取量も確保できて一石二鳥です。",
            },
            {
              title: "水を500ml飲んでおく",
              body: "水分を事前に摂っておくことで、お酒の飲みすぎを防止。アルコールによる脱水も軽減でき、翌日のむくみ予防にもなります。",
            },
          ]}
        />

        <SubSectionHeading>STAGE 2：飲み会「中」のテクニック</SubSectionHeading>

        <NumberedList
          items={[
            {
              title: "最初の注文は「枝豆・サラダ・冷奴」",
              body: "食物繊維とタンパク質を先に摂ることで、血糖値の急上昇を防ぎます。最初の15分は低カロリーおつまみで様子を見ましょう。",
            },
            {
              title: "お酒はハイボールをベースに",
              body: "1杯目のビールの後は、ハイボール（約70kcal）に切り替え。3杯飲んでも210kcalです。焼酎のお茶割り（約85kcal）もおすすめ。",
            },
            {
              title: "「お酒1杯 = お水1杯」ルール",
              body: "お酒1杯飲むごとにお水を1杯飲むと、飲酒ペースが自然と落ち、総摂取カロリーが抑えられます。二日酔い防止にも効果的です。",
            },
            {
              title: "メインは焼き鳥（塩）・刺身を中心に",
              body: "高タンパク・低脂質のおつまみを中心に注文。揚げ物が来ても「1個だけ」と決めておきましょう。",
            },
            {
              title: "シメの炭水化物は絶対NG",
              body: "ラーメン・お茶漬け・焼きおにぎりなどのシメは500kcal超。どうしても食べたい場合は、お茶漬け（約230kcal）が最もマシな選択です。",
            },
          ]}
        />

        <SubSectionHeading>STAGE 3：飲み会「後」のリカバリー</SubSectionHeading>

        <NumberedList
          items={[
            {
              title: "帰宅後は水をたっぷり飲む",
              body: "アルコールの分解には水分が必要。500ml〜1Lの水を飲んでから寝ましょう。むくみ防止と二日酔い対策になります。",
            },
            {
              title: "翌朝は軽めの食事+運動",
              body: "翌朝はプロテイン+バナナ程度の軽めの食事にし、可能であれば30分のウォーキングを。消費カロリーを増やし、前日のカロリー超過をリカバリーします。",
            },
            {
              title: "翌日の食事で調整する",
              body: "飲み会翌日の昼食・夕食は合計800kcal以下を目安に。サラダチキンやプロテインなど高タンパク・低カロリーの食事で1日のカロリーをコントロールしましょう。",
            },
          ]}
        />

        <TipBox title="「週末の飲み会」は金曜日がベスト">
          <p>土曜日に飲み会があると日曜日がリカバリーで終わってしまいますが、<Marker>金曜夜の飲み会なら土日2日間でリカバリーが可能</Marker>。飲み会の日程を選べるなら、金曜日を推奨しましょう。</p>
        </TipBox>

        {/* Section 6: チェーン居酒屋 */}
        <SectionHeading id="chain-izakaya">居酒屋メニューのダイエット的な選び方</SectionHeading>

        <p className="mb-6">
          居酒屋はメニューの幅が広く、選び方次第でカロリーが大きく変わります。チェーンによって栄養成分の公開状況は異なりますが、<Marker>「調理法」と「食材」で見分ける</Marker>クセをつければ、店が変わっても太りにくいメニューを選べます。
        </p>

        <SubSectionHeading>焼き鳥は「塩」「むね・ささみ」を選ぶ</SubSectionHeading>

        <p className="mb-4">
          焼き鳥は<Marker color="blue">塩＋むね・ささみ・砂肝</Marker>を選べば、高タンパク・低脂質のおつまみになります。タレは砂糖で糖質が上乗せされるため塩がおすすめ。逆に皮・つくね・手羽は脂質が多めなので量を控えましょう。具体的な数値は本記事冒頭の「おつまみBEST10」の焼き鳥（塩・もも1本約80kcal／P12.4g）を目安にしてください。
        </p>

        <SubSectionHeading>刺身・冷奴・枝豆・海藻サラダは鉄板の低カロリー枠</SubSectionHeading>

        <p className="mb-4">
          どの居酒屋でも置いてある<Marker>刺身・冷奴・枝豆・海藻サラダ</Marker>は、高タンパクまたは低カロリーで失敗が少ない定番。刺身は脂の乗ったトロより赤身、サラダはドレッシングを別添えにするとさらにカロリーを抑えられます。揚げ出し豆腐よりは冷奴、ポテトサラダよりは海藻サラダを選びましょう。
        </p>

        <TipBox title="店が変わっても使える注文ルール">
          <p>細かい数値が分からないチェーンでも、<Marker>「焼く・蒸す・茹でる＞揚げる」「塩＞タレ」「むね・ささみ＞皮・つくね」</Marker>の3原則で選べば大きく外しません。最初に枝豆・冷奴・海藻サラダ・刺身を頼み、メインは焼き鳥（塩）でタンパク質を確保するのが太りにくい基本形です。</p>
        </TipBox>

        <p className="mb-8 text-sm text-gray-600">
          ※カロリー・栄養成分はチェーンや店舗・盛り付けにより異なります。栄養成分を公開しているチェーンでは、たべなびや公式サイトで事前に確認すると確実です。
        </p>

        <SubSectionHeading>飲み会1回のカロリーシミュレーション</SubSectionHeading>

        <p className="mb-4">
          「何も考えずに飲む場合」と「テクニックを実践した場合」で、カロリーがどれだけ変わるか比較してみましょう。
        </p>

        <ComparisonTable
          headers={["項目", "無意識プラン", "ダイエットプラン"]}
          rows={[
            ["お酒", "ビール5杯（725kcal）", "ビール1杯+ハイボール3杯（355kcal）"],
            ["おつまみ1", "唐揚げ（380kcal）", "枝豆（135kcal）"],
            ["おつまみ2", "フライドポテト（420kcal）", "刺身盛り（180kcal）"],
            ["おつまみ3", "ピザ1/2枚（550kcal）", "焼き鳥3本・塩（240kcal）"],
            ["おつまみ4", "焼きそば（480kcal）", "冷奴（80kcal）"],
            ["シメ", "ラーメン（500kcal）", "なし（0kcal）"],
            ["合計", "3,055 kcal", "990 kcal"],
          ]}
          bestRowIndex={6}
        />

        <p className="mb-8">
          なんと<Marker>差は2,065kcal</Marker>。ダイエットプランなら飲み会1回のカロリーを1,000kcal以下に抑えられます。これは「飲み会で何も食べない」のではなく、<Marker color="blue">「選び方を変える」だけで達成できる数字</Marker>です。
        </p>

        <ArticleImage
          src="https://images.unsplash.com/photo-1529268209110-62be1d87fe75?w=800&h=400&fit=crop"
          alt="友人同士で乾杯しながら楽しく飲み会を過ごす様子"
        />

        <AffiliateProductGrid
          title="飲み会の前後におすすめ"
          productIds={["ukon", "highball-can", "miso-soup-pack", "tuna-can"]}
        />

        {/* Section 7: まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          飲み会はダイエット中でも完全に避ける必要はありません。お酒とおつまみの選び方を変えるだけで、カロリーを大幅に抑えられます。
        </p>

        <CheckList
          items={[
            "お酒はハイボール（70kcal/杯）をベースに。生ビールは最初の1杯だけ",
            "おつまみは枝豆・刺身・焼き鳥（塩）・冷奴を中心に注文",
            "唐揚げ・フライドポテト・ピザ・シメのラーメンは絶対NG",
            "飲み会前にプロテインと水500mlを摂取しておく",
            "飲み会中は「お酒1杯=お水1杯」ルールで飲みすぎ防止",
            "翌日は軽い食事+運動でリカバリー。1日かけてカロリー調整",
            "テクニックを実践すれば、飲み会のカロリーを3,000kcal→1,000kcal以下に",
          ]}
        />

        <p className="mt-6 mb-4">
          <Marker>大切なのは「完璧を目指さない」こと</Marker>。飲み会はコミュニケーションの場でもあります。ストイックになりすぎず、7割くらいの意識で実践するだけでも、飲み会の度にリバウンドする悪循環から抜け出せるはずです。
        </p>

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※栄養成分は一般的な居酒屋メニューの参考値です。店舗により異なる場合があります。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびで外食カロリーを簡単管理"
          subtitle="居酒屋メニューの栄養成分も無料で検索できます"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="drinking-party-diet"
          items={[
            { q: "飲み会でビールを飲む場合、カロリーを抑えるコツは？", a: "生ビール（中・約145kcal）は最初の1杯だけに限定し、2杯目からはハイボール（約70kcal）に切り替えるのがおすすめです。ビール5杯より、ビール1杯＋ハイボール3杯の方が410kcal少なくなります。" },
            { q: "居酒屋でおすすめのおつまみは何か？", a: "枝豆（タンパク質11.7g・135kcal）、刺身盛り（タンパク質28.6g・180kcal）、焼き鳥塩（1本約80kcal）、冷奴（80kcal）が最適です。注文時に『とりあえず枝豆と刺身！』と言うのが鉄則です。" },
            { q: "飲み会で絶対に避けるべきおつまみは？", a: "フライドポテト（420kcal）、唐揚げ（380kcal）、ピザ（550kcal）、焼きそば（480kcal）、締めのラーメン（500kcal）は避けましょう。揚げ物や炭水化物は脂質代謝が低下した状態では体脂肪になりやすいです。" },
            { q: "飲み会の前後に何をすればダイエット効果が高まる？", a: "飲み会30分前にプロテイン1杯とお水500mlを摂取し、飲み会中は『お酒1杯=お水1杯』ルールを守りましょう。翌朝は軽い食事と30分のウォーキングでリカバリーします。" },
            { q: "飲み放題の場合、カロリーを抑えるポイントは？", a: "飲み放題では『元を取ろう』と飲みすぎになりやすく、ビール5杯＋おつまみで2,500kcalを超える危険があります。『3杯までに限定する』と自分ルールを決めることが最重要です。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="drinking-party-diet" />

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
