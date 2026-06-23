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
  CalorieBar,
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
  alternates: { canonical: "https://www.tabenavi.jp/guide/family-restaurant-diet" },
  title:
    "【2026年最新】ファミレスダイエット完全ガイド｜サイゼリヤ・ガスト・デニーズのカロリー比較 | たべなび",
  description:
    "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリーで徹底比較。ダイエット中のおすすめメニュー、避けるべき高カロリーメニュー、注文テクニックをたべなび収録データで解説。",
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
      "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリーで徹底比較。ダイエット中のおすすめメニューと注文テクニックを解説。",
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
    "サイゼリヤ・ガスト・デニーズの3大ファミレスをカロリーで徹底比較。ダイエット中のおすすめメニューと注文テクニックを解説。",
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
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月22日</p>
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
          answer={"ダイエット中のファミレス選びは、事前にカロリーをチェックしてから注文することが鍵。サイゼリヤなら柔らか青豆の温サラダ(206kcal)、ガストはジューシー若鶏グリル大葉おろし(660kcal)、デニーズはグリルチキン～選べるソース(425kcal)がおすすめ。ライス少なめ・ドレッシング別添えなど、注文テクニックで100〜300kcalカット可能。セットメニューは避け、メイン+サラダの組み合わせが効果的です。"}
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
              title: "カロリーが公開されている",
              body: "サイゼリヤ・ガスト・デニーズともに公式サイトやメニュー表でカロリーを公開しています(デニーズはPFCも公開)。事前にカロリーを確認してから注文できるのは大きなメリットです。",
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
          サイゼリヤ・ガスト・デニーズの同じジャンルのメニューでカロリーを比較してみましょう。<Marker>同じ系統のメニューでもチェーンによって200kcal以上の差</Marker>が出ることがわかります。サイゼリヤとガストはたべなび収録データにPFC（タンパク質・脂質・炭水化物）が含まれていないため、カロリーで比較しています。
        </p>

        <SubSectionHeading>ハンバーグ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー"]}
          rows={[
            ["サイゼリヤ", "ハンバーグステーキ", "567 kcal"],
            ["ガスト", "チーズINハンバーグ", "591 kcal"],
            ["デニーズ", "All Beef ハンバーグ～おろしソース", "444 kcal"],
          ]}
          bestRowIndex={2}
        />

        <p className="mb-6 text-sm text-gray-600">
          ハンバーグ系では<Marker color="green">デニーズのAll Beef ハンバーグ～おろしソースが444kcalと最も低カロリー</Marker>。デニーズはPFCも公開されており、このメニューはタンパク質22.7gとしっかり摂れるのも魅力です。
        </p>

        <SubSectionHeading>グリル・ステーキ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー"]}
          rows={[
            ["サイゼリヤ", "若鶏のディアボラ風", "683 kcal"],
            ["ガスト", "ジューシー若鶏グリル大葉おろし", "660 kcal"],
            ["デニーズ", "グリルチキン～選べるソース", "425 kcal"],
          ]}
          bestRowIndex={2}
        />

        <p className="mb-6 text-sm text-gray-600">
          グリル系では<Marker color="green">デニーズのグリルチキン～選べるソースが425kcalでトップ</Marker>（ソース除く）。タンパク質37.6gと非常に優秀で、さっぱり食べられます。
        </p>

        <SubSectionHeading>パスタ系メニュー比較</SubSectionHeading>

        <ComparisonTable
          headers={["チェーン", "メニュー名", "カロリー"]}
          rows={[
            ["サイゼリヤ", "ペペロンチーノ", "578 kcal"],
            ["ガスト", "ペペロンチーノ", "552 kcal"],
            ["デニーズ", "海老とからすみのスパゲッティ", "521 kcal"],
          ]}
          bestRowIndex={2}
        />

        <WarningBox title="パスタはダイエット中は要注意">
          <p>パスタ系はいずれも500kcal以上。<Marker>糖質も多くなりがち</Marker>なので、糖質制限中は避けた方が無難です。どうしてもパスタが食べたい場合は、上記の中ではデニーズの海老とからすみのスパゲッティ（521kcal）が最も低カロリーです。</p>
        </WarningBox>

        <ArticleImage src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop" alt="ジューシーに焼き上げたグリルステーキ" />

        {/* Section 3: サイゼリヤBEST5 */}
        <SectionHeading id="saizeriya-best">サイゼリヤおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          サイゼリヤは<Marker>圧倒的なコスパと低価格</Marker>が魅力。ダイエット中でも手頃な価格で食事ができます。なお、サイゼリヤはたべなび収録データにPFCが含まれないため、ここではカロリーを基準に紹介します。
        </p>

        <RankingCard rank={1} title="柔らか青豆の温サラダ" subtitle="206kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            サイゼリヤで前菜に選びやすい温サラダ。<Marker>206kcalと低カロリー</Marker>で、温かいぶん満足感もあり、最初に注文すれば食べ過ぎ防止にもつながりやすいメニューです。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="小エビのサラダ" subtitle="198kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            エビ入りで食べ応えのあるサラダ。<Marker color="blue">198kcalと低カロリー</Marker>ながら満足感があります。ドレッシングを少なめにすれば、さらにカロリーを抑えやすくなります。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="若鶏のディアボラ風" subtitle="683kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            鶏肉メインでしっかり食べたいときの一皿。<Marker color="green">683kcal</Marker>とボリュームはありますが、ライスなしで注文すれば糖質をある程度抑えられます。たべなびではPFCの収録がないため、カロリーを目安に量を調整しましょう。
          </p>
        </RankingCard>

        <CalorieBar
          title="サイゼリヤ おすすめ4・5位（カロリー）"
          items={[
            { name: "5位：ムール貝のガーリック焼き", value: 339 },
            { name: "4位：ミックスグリル", value: 702 },
          ]}
        />

        <p className="text-xs text-gray-400 mb-8">
          ※カロリーはたべなび収録データ（2026年6月時点）に基づきます。店舗・時期により異なる場合があります。
        </p>

        {/* Section 4: ガストBEST5 */}
        <SectionHeading id="gusto-best">ガストおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          ガストは<Marker>グリルやサラダなど選択肢が幅広い</Marker>のが魅力。ドリンクバー付きでゆっくり食事できるのもポイントです。ガストはたべなび収録データにPFCが含まれないため、ここではカロリーを基準に紹介します。
        </p>

        <RankingCard rank={1} title="蒸し鶏と彩り野菜のサラダ（L）" subtitle="76kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            ガストで最も低カロリーに食べやすいサラダの一つ。<Marker>Lサイズで76kcal</Marker>と非常に軽く、最初に注文すれば食べ過ぎ防止にもつながります。ドレッシングは別添え・少なめにするとさらに安心です。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="ほうれん草ベーコン" subtitle="181kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="blue">181kcalと低カロリー</Marker>な副菜。野菜をしっかり摂りたいときの一品として使いやすく、メインに添えても総カロリーを抑えやすいメニューです。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="チキンのトマト煮込み" subtitle="351kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="green">351kcal</Marker>と、しっかりメインを食べたいときでも比較的控えめなカロリー。鶏肉のメニューなので食べ応えもあります。ライスなしで注文すれば総カロリーをさらに抑えられます。
          </p>
        </RankingCard>

        <CalorieBar
          title="ガスト おすすめ4・5位（カロリー）"
          items={[
            { name: "4位：赤身ビーフステーキ 約100g", value: 423 },
            { name: "5位：ジューシー若鶏グリル大葉おろし", value: 660 },
          ]}
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="ファミレスのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 5: デニーズBEST5 */}
        <SectionHeading id="dennys-best">デニーズおすすめダイエットメニューBEST5</SectionHeading>

        <p className="mb-6">
          デニーズは<Marker>素材にこだわったメニューが多く、PFC（タンパク質・脂質・炭水化物）も公開されている</Marker>のが特徴。栄養バランスを確認しながら選べるのが大きな強みです。
        </p>

        <RankingCard rank={1} title="グリルチキン～選べるソース" subtitle="425kcal / P37.6g / F27.6g / C7.2g">
          <p className="text-sm text-gray-700 leading-relaxed">
            デニーズでしっかりメインを食べたいときの定番。<Marker>425kcalでタンパク質37.6g</Marker>（ソース除く）と高タンパク・低糖質のバランスが優秀です。ソースは別添え・控えめにするとさらにカロリーを抑えられます。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="シーザーサラダ～４種チーズ使用" subtitle="149kcal / P4.8g / F11.5g / C6.2g">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="blue">149kcalの低カロリーサラダ</Marker>。前菜として注文すれば食べ過ぎ防止に役立ちます。チーズの脂質はやや高めなので、メインとの合計カロリーを意識して組み合わせましょう。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="天然まぐろの漬け丼（みそ汁つき）" subtitle="564kcal / P26.5g / F3.2g / C101.9g">
          <p className="text-sm text-gray-700 leading-relaxed">
            <Marker color="green">脂質わずか3.2gでタンパク質26.5g</Marker>。ローファットを意識したい方に向く一杯です。ただし炭水化物は101.9gと多めなので、糖質制限中はご飯の量に注意しましょう。
          </p>
        </RankingCard>

        <NutritionTable
          items={[
            { name: "4位：和風ハンバーグ", calories: 488, protein: 25.2, fat: 32.8, carbs: 23.6, highlight: true },
            { name: "5位：ローストビーフのパワーサラダ", calories: 180, protein: 10.4, fat: 7.1, carbs: 20.7 },
          ]}
          highlightProtein
        />

        <p className="text-[11px] text-gray-400 mb-6">
          ※4位はライス等、5位はドレッシングを除いた数値です（たべなび収録データ）。
        </p>

        <TipBox title="デニーズは公式アプリで最新メニューをチェック">
          <p>デニーズはPFCを公開しているため、<Marker>カロリーと栄養バランスの両方を確認しながら選べる</Marker>のが強み。期間限定メニューも多いので、公式アプリやたべなびで最新情報をチェックしてから来店するのがおすすめです。</p>
        </TipBox>

        {/* Section 6: 絶対避けるべきメニュー */}
        <SectionHeading id="avoid-menu">絶対避けるべき高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          ファミレスには<Marker>1食で1,000kcalを超える危険なメニュー</Marker>が潜んでいます。ダイエット中は以下のメニューを絶対に避けましょう。
        </p>

        <WarningBox title="ファミレスの高カロリー地雷メニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">ガスト：たっぷりマヨコーンピザ（980kcal）</span> ─ マヨネーズとチーズでカロリーが高め。ピザ系メニューは全般的に高カロリーです。</li>
            <li><span className="font-bold">ガスト：ガストブラックカレー元気盛り（1,196kcal）</span> ─ ボリューム盛りのカレーは1,000kcalを軽く超えます。</li>
            <li><span className="font-bold">サイゼリヤ：半熟卵のカルボナーラ（850kcal）</span> ─ クリーム系パスタは高カロリー。ライスや前菜を足すとさらに増えます。</li>
            <li><span className="font-bold">デニーズ：All Beef のミートスパゲッティ Wサイズ（1,225kcal）</span> ─ 大盛りパスタは1,000kcal超え。通常サイズや単品+サラダに変更しましょう。</li>
            <li><span className="font-bold">各チェーン：デザート全般（150〜600kcal前後）</span> ─ パフェやパンケーキは食後に追加すると合計カロリーが大きく跳ね上がります。</li>
          </ul>
        </WarningBox>

        <ComparisonTable
          headers={["チェーン", "危険メニュー", "カロリー"]}
          rows={[
            ["デニーズ", "All Beef のミートスパゲッティ Wサイズ", "1,225 kcal"],
            ["ガスト", "ガストブラックカレー元気盛り", "1,196 kcal"],
            ["ガスト", "たっぷりマヨコーンピザ", "980 kcal"],
            ["デニーズ", "ミックスフライ定食", "821 kcal"],
            ["サイゼリヤ", "半熟卵のカルボナーラ", "850 kcal"],
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
              body: "食物繊維を先に摂ることで血糖値の上昇が緩やかになりやすく、食べ過ぎを抑えやすくなる傾向があります。サイゼリヤのわかめのサラダ（169kcal）やガストのトマトのグリーンサラダ（39kcal）がおすすめ。",
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
              body: "どうしても甘いものが欲しければ、高カロリーのパフェ類ではなく軽めのデザートを選びましょう。サイゼリヤのミルクジェラート（121kcal）やイタリアンプリン（223kcal）は比較的低カロリーです。",
            },
          ]}
        />

        <TipBox title="「サイドメニュー」だけで1食にする裏ワザ">
          <p>サイゼリヤなら、サラダ+スープ+おつまみで<Marker>合計600kcal台の「サイドメニュー定食」</Marker>が作れます。例：わかめのサラダ（169kcal）+コーンクリームスープ（151kcal）+辛味チキン（295kcal）= 合計615kcal。メイン1品より組み立てを工夫しやすく、満足感を保ちながらカロリーを調整できます。</p>
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
            "ファミレスはカロリー表示・メニュー数の豊富さ・カスタマイズ性でダイエット向き",
            "ハンバーグ系もグリル系も、比較した3チェーンの中ではデニーズ（444kcal／425kcal）が最も低カロリー",
            "サイゼリヤは手頃な価格、ガストは選択肢の幅広さ、デニーズはPFCも公開していて栄養管理しやすい",
            "サイゼリヤ・ガストはたべなび収録データにPFCがなく、カロリーを基準に選ぶ",
            "セットメニューは避け、メイン単品+サラダの組み合わせがベスト",
            "ライス少なめ・ドレッシング別添え・ドリンクはお茶で100〜300kcalカット可能",
            "ピザ・カレー大盛り・大盛りパスタは1品で900〜1,200kcal超えの地雷メニュー",
          ]}
        />

        <p className="mt-6 mb-4">
          <Marker>最も重要なのは「事前にメニューを決めておく」こと</Marker>。各チェーンの公式サイトやたべなびでカロリーをチェックしてから来店すれば、ダイエット中でもファミレスを楽しむことができます。
        </p>

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※カロリー・栄養成分はたべなび収録データ（2026年6月時点）に基づきます。店舗・時期により異なる場合があります。最新の情報は各チェーンの公式サイトでご確認ください。
        </p>

        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "サイゼリヤ・ガスト・デニーズの全メニューをたべなび収録データと突合し、カロリー・メニュー名を実値に修正。サイゼリヤ・ガストはPFC非収録のためカロリー基準に変更し、実在しないメニュー（鶏のスパイスグリル、海鮮丼ミニ等）を実在メニューへ差し替え。比較表・ランキング・FAQ・まとめを実値で再構成。" },
            { date: "2026-03-19", note: "記事公開。" },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="たべなびで外食カロリーを簡単チェック"
          subtitle="ファミレスメニューの栄養成分を無料で検索できます"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="family-restaurant-diet"
          items={[
            { q: "ファミレスのメニューでもっとも低カロリーは?", a: "サラダ系ではガストの蒸し鶏と彩り野菜のサラダ(Lで76kcal)やデニーズのシーザーサラダ～4種チーズ使用(149kcal)が低カロリー。メインメニューではデニーズのグリルチキン～選べるソースが425kcal(ソース除く)でタンパク質37.6gと、ダイエット向きのバランスです。" },
            { q: "ファミレスで避けるべき高カロリーメニューは?", a: "デニーズのAll BeefのミートスパゲッティWサイズ(1,225kcal)、ガストのガストブラックカレー元気盛り(1,196kcal)やたっぷりマヨコーンピザ(980kcal)は高カロリーの代表格。ピザ・カレー大盛り・大盛りパスタはカロリーが高く、ダイエット中は避けるべきです。" },
            { q: "パスタはダイエット中に食べても大丈夫?", a: "パスタは比較した中でいずれも500kcal以上で糖質も多いため、糖質制限中は避けた方が無難です。どうしても食べたい場合は、上記の中ではデニーズの海老とからすみのスパゲッティ(521kcal)が最も低カロリーですが、できれば控えめにするのが安心です。" },
            { q: "ファミレスで注文するときのコツは?", a: "ライスを少なめまたはなしにして約300kcalカット、ドレッシングは別添えで50〜100kcal削減、サラダを先に食べて血糖値の急上昇を抑えやすくする、ドリンクはお茶やブラックコーヒーにするなど。これらで100〜300kcalのカロリー削減が可能です。" },
            { q: "3つのファミレスでダイエット向きなのはどれ?", a: "サイゼリヤは手頃な価格で続けやすく、ガストは選択肢が幅広く、デニーズはPFC(タンパク質・脂質・炭水化物)も公開されていて栄養管理しやすいのが強みです。なおサイゼリヤとガストはたべなび収録データにPFCがないため、カロリーを基準に選ぶとよいでしょう。" },
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
