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
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/family-restaurant-diet" },
  title:
    "【2026年最新】ファミレスダイエット完全ガイド｜サイゼリヤ・ガスト・デニーズのカロリー比較 | たべなび",
  description:
    "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリー・PFC別に徹底比較。ダイエット中のおすすめメニュー、避けるべき高カロリーメニュー、注文テクニックを栄養士監修データで解説。",
  keywords: [
    "ファミレス ダイエット",
    "ファミレス カロリー",
    "ガスト ダイエット",
    "デニーズ カロリー",
    "サイゼリヤ ダイエット",
    "ファミレス 低カロリー",
    "ガスト カロリー",
  ],
  openGraph: {
    title:
      "【2026年最新】ファミレスダイエット完全ガイド｜サイゼリヤ・ガスト・デニーズのカロリー比較",
    description:
      "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリー・PFC別に徹底比較。ダイエット中のおすすめメニューと注文テクニックを解説。",
    url: "https://www.tabenavi.jp/guide/family-restaurant-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ファミレスダイエット完全ガイド｜サイゼリヤ・ガスト・デニーズのカロリー比較",
  description:
    "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリー・PFC別に徹底比較。ダイエット中のおすすめメニューと注文テクニックを解説。",
  datePublished: "2026-03-19",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/family-restaurant-diet",
};

const tocItems = [
  { id: "why-family-restaurant", label: "ファミレスがダイエットに向いている理由" },
  { id: "calorie-comparison", label: "3大ファミレスカロリー比較" },
  { id: "saizeriya-best", label: "サイゼリヤおすすめBEST5" },
  { id: "gusto-best", label: "ガストおすすめBEST5" },
  { id: "dennys-best", label: "デニーズおすすめBEST5" },
  { id: "avoid-menu", label: "絶対避けるべき高カロリーメニュー" },
  { id: "order-technique", label: "ファミレスでの注文テクニック5選" },
  { id: "summary", label: "まとめ" },
];

export default function FamilyRestaurantDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ファミレスダイエット完全ガイド"
        subtitle="サイゼリヤ・ガスト・デニーズのカロリー比較と太らないメニュー選び【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop"
        breadcrumb="ファミレスダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="family-restaurant-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月19日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどファミレスに行きたい」「家族や友人との外食を断れない」――そんな悩みを持つ方は多いのではないでしょうか。実は、ファミレスは<Marker>ダイエット中の外食先として非常に優秀</Marker>なんです。
        </p>
        <p className="mb-4">
          メニュー数が豊富で栄養成分が公開されており、サラダやスープなどヘルシーな選択肢も充実。しかし、選び方を間違えると<Marker color="blue">1食で1,200kcalを超えてしまう</Marker>ことも珍しくありません。
        </p>
        <p className="mb-8">
          この記事では、サイゼリヤ・ガスト・デニーズの3大ファミレスを徹底比較し、ダイエット中に最適なメニューと注文テクニックを詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop" alt="明るく清潔感のあるファミリーレストランの店内" />

        {/* Section 1: ファミレスがダイエットに向いている理由 */}
                <QuickAnswer
          question={"ダイエット中はファミレスで何を食べるべき?"}
          answer={"ダイエット中のファミレス選びは、事前にカロリーをチェックしてから注文することが鍵。サイゼリヤはハンバーグが462kcalと低カロリー、ガストは若鶏のグリル(431kcal)、デニーズは鶏のスパイスグリル(486kcal)がおすすめ。ライス少なめ・ドレッシング別添えなど、注文テクニックで100〜300kcalカット可能。セットメニューは避け、メイン+サラダの組み合わせが効果的です。"}
        />

        <SectionHeading id="why-family-restaurant">ファミレスがダイエットに向いている理由</SectionHeading>

        <p className="mb-4">
          「ダイエット中に外食なんて...」と思うかもしれませんが、ファミレスには以下のようなダイエット向きの特徴があります。
        </p>

        <NumberedList
          items={[
            {
              title: "メニュー数が豊富で選択肢が多い",
              body: "ファミレスは和洋中さまざまなジャンルのメニューが揃っています。サラダ、グリル、スープなど低カロリーメニューも充実しており、ダイエット中でも選びやすい環境です。",
            },
            {
              title: "栄養成分が公開されている",
              body: "サイゼリヤ・ガスト・デニーズともに公式サイトやメニュー表でカロリー・PFCを公開しています。事前にカロリーを確認してから注文できるのは大きなメリットです。",
            },
            {
              title: "カスタマイズが可能",
              body: "ライスの量を減らす、ドレッシングを別添えにする、サイドメニューを変更するなど、ファミレスは柔軟なカスタマイズに対応してくれます。",
            },
            {
              title: "価格が手頃で続けやすい",
              body: "特にサイゼリヤは圧倒的なコスパ。ダイエットは継続が重要なので、財布に優しい選択肢があるのは大きなポイントです。",
            },
          ]}
        />

        <TipBox title="ファミレスダイエットの大前提">
          <p>ファミレスでダイエットを成功させる最大のコツは<Marker>「行く前にメニューを決めておく」</Marker>こと。メニューを見てから悩むと、つい高カロリーなメニューに目が行ってしまいます。公式サイトで事前にカロリーをチェックしておきましょう。</p>
        </TipBox>

        {/* Section 2: 3大ファミレスカロリー比較 */}
        <SectionHeading id="calorie-comparison">3大ファミレスカロリー比較</SectionHeading>

        <p className="mb-4">
          サイゼリヤ・ガスト・デニーズの同じジャンルのメニューでカロリーを比較してみましょう。<Marker>同じ「ハンバーグ」でもチェーンによって200kcal以上の差</Marker>があることがわかります。
        </p>

        <SubSectionHeading>ハンバーグ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー", "P", "F", "C"]}
          rows={[
            ["サイゼリヤ", "ハンバーグステーキ", "462 kcal", "22.5g", "29.8g", "24.6g"],
            ["ガスト", "チーズINハンバーグ", "710 kcal", "30.2g", "45.8g", "42.1g"],
            ["デニーズ", "All Beefハンバーグ", "537 kcal", "28.4g", "35.2g", "26.8g"],
          ]}
          bestRowIndex={0}
        />

        <p className="mb-6 text-sm text-gray-600">
          ハンバーグ系では<Marker color="green">サイゼリヤが462kcalと最も低カロリー</Marker>。ガストのチーズINハンバーグは710kcalと高めですが、タンパク質30.2gと高タンパクでもあります。
        </p>

        <SubSectionHeading>グリル・ステーキ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー", "P", "F", "C"]}
          rows={[
            ["サイゼリヤ", "若鶏のグリル（ディアボラ風）", "543 kcal", "37.2g", "34.5g", "19.8g"],
            ["ガスト", "若鶏のグリル 大葉おろし", "431 kcal", "35.6g", "22.4g", "21.3g"],
            ["デニーズ", "鶏のスパイスグリル", "486 kcal", "33.8g", "28.6g", "22.4g"],
          ]}
          bestRowIndex={1}
        />

        <p className="mb-6 text-sm text-gray-600">
          グリル系では<Marker color="green">ガストの若鶏のグリルが431kcalでトップ</Marker>。大葉おろしソースでさっぱりと食べられ、タンパク質35.6gと非常に優秀です。
        </p>

        <SubSectionHeading>パスタ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー", "P", "F", "C"]}
          rows={[
            ["サイゼリヤ", "ペペロンチーノ", "510 kcal", "15.8g", "12.4g", "82.3g"],
            ["ガスト", "海老と山盛りイカのペペロンチーノ", "612 kcal", "22.4g", "18.6g", "86.5g"],
            ["デニーズ", "海老のペペロンチーノ", "568 kcal", "19.2g", "16.8g", "78.4g"],
          ]}
          bestRowIndex={0}
        />

        <WarningBox title="パスタはダイエット中は要注意">
          <p>パスタ系は全チェーンで500kcal以上。<Marker>炭水化物が80g前後</Marker>と非常に多いため、糖質制限中は避けた方が無難です。どうしてもパスタが食べたい場合は、サイゼリヤのペペロンチーノ（510kcal）が最も低カロリーです。</p>
        </WarningBox>

        <ArticleImage src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop" alt="ジューシーに焼き上げたグリルステーキ" />

        {/* Section 3: サイゼリヤBEST5 */}
        <SectionHeading id="saizeriya-best">サイゼリヤおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          サイゼリヤは<Marker>圧倒的なコスパと低価格</Marker>が魅力。ダイエット中でもワンコイン以下で食事ができます。
        </p>

        <RankingCard rank={1} title="柔らか青豆の温サラダ" subtitle="166kcal / P8.2g / F10.4g / C10.8g / ¥319">
          <p className="text-sm text-gray-700 leading-relaxed">
            サイゼリヤで最もダイエット向きのメニュー。<Marker>166kcalでタンパク質8.2g</Marker>と、サラダながら栄養バランスが良好です。温かいサラダなので満足感もあり、前菜として注文すれば食べ過ぎ防止にもなります。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="小エビのサラダ" subtitle="176kcal / P12.8g / F9.6g / C10.2g / ¥349">
          <p className="text-sm text-gray-700 leading-relaxed">
            エビのタンパク質で<Marker color="blue">12.8gのタンパク質を摂取</Marker>できるサラダ。176kcalと低カロリーながら食べ応えがあります。ドレッシングを少なめにすればさらにカロリーカットが可能です。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="若鶏のグリル（ディアボラ風）" subtitle="543kcal / P37.2g / F34.5g / C19.8g / ¥549">
          <p className="text-sm text-gray-700 leading-relaxed">
            メインディッシュとしては<Marker color="green">タンパク質37.2gと非常に高タンパク</Marker>。543kcalはハンバーグやパスタと比べて控えめ。ライスなしで注文すれば、炭水化物を大幅にカットできます。筋トレ中の方にも最適です。
          </p>
        </RankingCard>

        <NutritionTable
          items={[
            { name: "4位：ミックスグリル", calories: 521, protein: 31.4, fat: 32.8, carbs: 22.6 },
            { name: "5位：ムール貝のガーリック焼き", calories: 180, protein: 11.2, fat: 10.8, carbs: 8.4, highlight: true },
          ]}
          highlightProtein
        />

        <p className="text-xs text-gray-400 mb-8">
          ※価格・栄養成分は2026年3月時点の情報です。店舗・時期により異なる場合があります。
        </p>

        {/* Section 4: ガストBEST5 */}
        <SectionHeading id="gusto-best">ガストおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          ガストは<Marker>糖質控えめメニューやサラダメニューが充実</Marker>。ドリンクバー付きでゆっくり食事できるのも魅力です。
        </p>

        <RankingCard rank={1} title="若鶏のグリル 大葉おろし" subtitle="431kcal / P35.6g / F22.4g / C21.3g / ¥769">
          <p className="text-sm text-gray-700 leading-relaxed">
            ガストのダイエットメニュー筆頭。<Marker>431kcalでタンパク質35.6g</Marker>は驚異的なバランスです。大葉おろしソースがさっぱりとしていて、脂っこさを感じさせません。ライスを抜けば炭水化物をさらにカットできます。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="海老と山盛りイカの塩炒め" subtitle="352kcal / P28.4g / F16.8g / C22.6g / ¥769">
          <p className="text-sm text-gray-700 leading-relaxed">
            シーフード系で<Marker color="blue">352kcalと低カロリーながらタンパク質28.4g</Marker>。海鮮の旨味で満足感が高く、脂質も16.8gと控えめ。ダイエット中に味の変化が欲しいときにおすすめです。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="ほうれん草ベーコンの目玉焼きサラダ" subtitle="268kcal / P14.2g / F18.6g / C10.4g / ¥549">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="green">268kcalで卵のタンパク質とほうれん草の鉄分を同時に摂取</Marker>。軽めのランチや夕食の前菜として最適です。ドレッシングを別添えにすれば、さらにカロリーを抑えられます。
          </p>
        </RankingCard>

        <NutritionTable
          items={[
            { name: "4位：まぐろのたたきサラダ", calories: 218, protein: 18.6, fat: 10.2, carbs: 12.8, highlight: true },
            { name: "5位：ビーフカットステーキ", calories: 498, protein: 32.8, fat: 28.4, carbs: 24.2 },
          ]}
          highlightProtein
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="ファミレスのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 5: デニーズBEST5 */}
        <SectionHeading id="dennys-best">デニーズおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          デニーズは<Marker>素材にこだわったメニューが多く、タンパク質をしっかり摂れる</Marker>のが特徴。価格帯はやや高めですが、その分ボリュームと品質は申し分ありません。
        </p>

        <RankingCard rank={1} title="鶏のスパイスグリル" subtitle="486kcal / P33.8g / F28.6g / C22.4g / ¥879">
          <p className="text-sm text-gray-700 leading-relaxed">
            デニーズのダイエットメニューの定番。<Marker>486kcalでタンパク質33.8g</Marker>と、しっかりメインを食べたい方に最適です。スパイスの風味が効いていて満足度が高く、ライスなしでも十分なボリュームがあります。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="彩りサラダ（Mサイズ）" subtitle="142kcal / P4.8g / F8.6g / C12.4g / ¥549">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="blue">142kcalの低カロリーサラダ</Marker>。デニーズのサラダは新鮮な野菜がたっぷりで、前菜として注文すれば食べ過ぎ防止に効果的。ドレッシングはノンオイルタイプを選びましょう。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="海鮮丼（ミニサイズ）" subtitle="398kcal / P24.6g / F8.2g / C56.8g / ¥769">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="green">脂質わずか8.2gでタンパク質24.6g</Marker>。ローファットダイエット中の方に最適です。ミニサイズでご飯の量を抑えつつ、新鮮な魚介のタンパク質をしっかり摂取できます。
          </p>
        </RankingCard>

        <NutritionTable
          items={[
            { name: "4位：和風きのこおろしハンバーグ", calories: 495, protein: 26.8, fat: 30.4, carbs: 28.2 },
            { name: "5位：10品目のガーデンサラダ", calories: 186, protein: 6.4, fat: 12.8, carbs: 12.2, highlight: true },
          ]}
          highlightProtein
        />

        <TipBox title="デニーズは「バランスプレート」もチェック">
          <p>デニーズは期間限定で「バランスプレート」を提供することがあります。<Marker>500kcal以下でPFCバランスが整ったメニュー</Marker>なので、見つけたら積極的に活用しましょう。公式アプリで最新情報をチェックするのがおすすめです。</p>
        </TipBox>

        {/* Section 6: 絶対避けるべきメニュー */}
        <SectionHeading id="avoid-menu">絶対避けるべき高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          ファミレスには<Marker>1食で1,000kcalを超える危険なメニュー</Marker>が潜んでいます。ダイエット中は以下のメニューを絶対に避けましょう。
        </p>

        <WarningBox title="ファミレスの高カロリー地雷メニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">ガスト：マヨコーンピザ（864kcal）</span> ─ マヨネーズとチーズで脂質48.6g。ピザ系メニューは全般的に高カロリーです。</li>
            <li><span className="font-bold">ガスト：ミックスフライ（982kcal）</span> ─ 揚げ物の盛り合わせで脂質56.2g。ライスを合わせると1,300kcal超えに。</li>
            <li><span className="font-bold">サイゼリヤ：ミラノ風ドリア+パスタセット（約850kcal）</span> ─ ドリア単品は542kcal。セットにするとカロリーが跳ね上がります。</li>
            <li><span className="font-bold">デニーズ：All Beefハンバーグ+ライス+スープセット（約920kcal）</span> ─ セットメニューにすると900kcal超え。単品+サラダに変更しましょう。</li>
            <li><span className="font-bold">各チェーン：デザート全般（300〜600kcal）</span> ─ パフェやパンケーキは食後に追加すると合計カロリーが1,000kcalを軽く超えます。</li>
          </ul>
        </WarningBox>

        <ComparisonTable
          headers={["チェーン", "危険メニュー", "カロリー", "脂質"]}
          rows={[
            ["ガスト", "ミックスフライ定食", "1,282 kcal", "56.2g"],
            ["ガスト", "マヨコーンピザ", "864 kcal", "48.6g"],
            ["サイゼリヤ", "ミラノ風ドリア+サラダセット", "846 kcal", "32.4g"],
            ["デニーズ", "デミハンバーグ定食", "948 kcal", "42.8g"],
            ["デニーズ", "パンケーキ（3枚）", "586 kcal", "24.2g"],
          ]}
        />

        <TipBox title="「セットメニュー」の罠に要注意">
          <p>ファミレスの「お得なセット」はカロリー的には大損です。ライス（約300kcal）+スープ（約80kcal）+ドリンクバーで<Marker>+400kcal以上</Marker>。メイン単品+サラダの組み合わせがダイエット中のベストな注文方法です。</p>
        </TipBox>

        {/* Section 7: 注文テクニック5選 */}
        <SectionHeading id="order-technique">ファミレスでの注文テクニック5選</SectionHeading>

        <p className="mb-6">
          メニュー選びだけでなく、<Marker>注文の仕方を工夫するだけで100〜300kcalのカロリーカット</Marker>が可能です。以下の5つのテクニックを覚えておきましょう。
        </p>

        <NumberedList
          items={[
            {
              title: "ライスを「少なめ」or「なし」にする",
              body: "ファミレスのライス1杯は約300kcal。少なめ（約200kcal）やなし（0kcal）に変更するだけで大幅なカロリーカット。パンに変えるのも手ですが、バターを塗ると脂質が増えるので注意。",
            },
            {
              title: "サラダを最初に注文する",
              body: "食物繊維を先に摂ることで血糖値の上昇が緩やかになりやすく、食べ過ぎを抑えやすくなる傾向があります。サイゼリヤのわかめサラダ（92kcal）やガストのグリーンサラダ（62kcal）がおすすめ。",
            },
            {
              title: "ドレッシングは「別添え」を頼む",
              body: "ドレッシングだけで50〜100kcal上乗せされることも。別添えにして量を自分で調整するか、ノンオイルドレッシングに変更しましょう。",
            },
            {
              title: "ドリンクバーは「お茶」「ブラックコーヒー」",
              body: "ジュース1杯は約80〜120kcal。何杯も飲むと200〜300kcal以上に。お茶やブラックコーヒーにすれば0kcal。カロリーゼロの炭酸水もおすすめです。",
            },
            {
              title: "デザートは「我慢」ではなく「代替」",
              body: "どうしても甘いものが欲しければ、パフェ（400kcal〜）ではなく低カロリーのゼリー系（80〜120kcal）を選びましょう。サイゼリヤのイタリアンプリン（167kcal）は比較的低カロリーです。",
            },
          ]}
        />

        <TipBox title="「サイドメニュー」だけで1食にする裏ワザ">
          <p>サイゼリヤなら、サラダ+スープ+おつまみで<Marker>合計400kcal以下の「サイドメニュー定食」</Marker>が作れます。例：わかめサラダ（92kcal）+コーンクリームスープ（126kcal）+辛味チキン（175kcal）= 合計393kcal。満足感もありながら大幅なカロリーカットが可能です。</p>
        </TipBox>

        <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスの取れたヘルシーな食事プレート" />

        <AffiliateProductGrid
          title="ファミレス外食を支えるおすすめ"
          productIds={["myprotein-impact", "inbar-protein", "tanita-scale", "ultora-whey"]}
        />

        {/* Section 8: まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          ファミレスはダイエット中でも十分に活用できる外食先です。この記事のポイントを整理しました。
        </p>

        <CheckList
          items={[
            "ファミレスは栄養表示・メニュー数の豊富さ・カスタマイズ性でダイエット向き",
            "ハンバーグ系はサイゼリヤ（462kcal）、グリル系はガスト（431kcal）が最も低カロリー",
            "サイゼリヤは圧倒的コスパ、ガストは糖質控えめメニュー、デニーズは素材の質が魅力",
            "セットメニューは避け、メイン単品+サラダの組み合わせがベスト",
            "ライス少なめ・ドレッシング別添え・ドリンクはお茶で100〜300kcalカット可能",
            "ピザ・フライ系・デザートは1品で400〜900kcalの地雷メニュー",
          ]}
        />

        <p className="mt-6 mb-4">
          <Marker>最も重要なのは「事前にメニューを決めておく」こと</Marker>。各チェーンの公式サイトやたべなびでカロリーをチェックしてから来店すれば、ダイエット中でもファミレスを楽しむことができます。
        </p>

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は2026年3月時点の情報です。店舗・時期により異なる場合があります。最新の情報は各チェーンの公式サイトでご確認ください。
        </p>

        {/* End CTA */}
        <CTABanner
          title="たべなびで外食カロリーを簡単チェック"
          subtitle="ファミレスメニューの栄養成分を無料で検索できます"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="family-restaurant-diet"
          items={[
            { q: "ファミレスのメニューでもっとも低カロリーは?", a: "サイゼリヤの柔らか青豆の温サラダが166kcal、デニーズの彩りサラダが142kcalと最も低カロリー。メインメニューではガストの若鶏のグリル大葉おろしが431kcalでタンパク質35.6gと、ダイエット向きの栄養バランスです。" },
            { q: "ファミレスで避けるべき高カロリーメニューは?", a: "ガストのミックスフライ定食(1,282kcal)、マヨコーンピザ(864kcal)、デニーズのデミハンバーグ定食(948kcal)は1食で1,000kcal超えの危険メニュー。ピザ・揚げ物・デザートは脂質も高く、ダイエット中は避けるべきです。" },
            { q: "パスタはダイエット中に食べても大丈夫?", a: "パスタは全チェーンで500kcal以上、炭水化物は80g前後と非常に多いため糖質制限中は避けるべき。どうしても食べたい場合はサイゼリヤのペペロンチーノ(510kcal)が最も低カロリーですが、できれば避けた方が無難です。" },
            { q: "ファミレスで注文するときのコツは?", a: "ライスを少なめまたはなしにして約300kcalカット、ドレッシングは別添えで50〜100kcal削減、サラダを先に食べて血糖値上昇を防ぐ、ドリンクはお茶やブラックコーヒーにするなど。これらで100〜300kcalのカロリー削減が可能です。" },
            { q: "3つのファミレスでダイエット向きなのはどれ?", a: "サイゼリヤは圧倒的なコスパで継続しやすく、ガストは糖質控えめメニューが豊富、デニーズは素材の質にこだわっています。ライフスタイルや予算で選択し、各チェーンの公式サイトでカロリーを確認してから来店するのが成功のコツです。" },
          ]}
        />

        <ArticleFooter currentSlug="family-restaurant-diet" />

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
