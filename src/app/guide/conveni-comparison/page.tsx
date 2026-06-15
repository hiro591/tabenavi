import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  RankingCard,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "コンビニ3社カロリー比較｜セブン・ローソン・ファミマ ダイエットならどこ？【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/conveni-comparison" },
  description:
    "セブン・ローソン・ファミマの公式栄養データを横断比較。高タンパクサラダ・低カロリー総菜・低糖質パンを3社で対決し、ダイエット中にどのコンビニで何を選ぶべきかPFC付きで解説します。",
  keywords: [
    "コンビニ ダイエット 比較",
    "セブン ローソン ファミマ 比較",
    "コンビニ カロリー",
    "コンビニ 低カロリー",
    "コンビニ 低糖質",
    "コンビニ 高タンパク",
  ],
  openGraph: {
    title: "コンビニ3社カロリー比較｜セブン・ローソン・ファミマ ダイエットならどこ？",
    description:
      "セブン・ローソン・ファミマを公式栄養データで横断比較。高タンパクサラダ・低カロリー総菜・低糖質パンを3社対決。",
    url: "https://www.tabenavi.jp/guide/conveni-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "コンビニ3社カロリー比較｜セブン・ローソン・ファミマ ダイエットならどこ？",
  description:
    "セブン・ローソン・ファミマの公式栄養データを横断比較。ダイエット中の選び方をPFC付きで解説。",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/conveni-comparison",
};

const tocItems = [
  { id: "protein-salad", label: "高タンパクサラダ3社対決" },
  { id: "low-calorie", label: "低カロリー総菜ランキング" },
  { id: "low-carb", label: "低糖質はローソンが頭ひとつ抜ける" },
  { id: "by-goal", label: "目的別・3社の使い分け" },
  { id: "avoid", label: "避けたい高カロリー商品" },
  { id: "tips", label: "太らないコンビニ飯の組み立て方" },
  { id: "summary", label: "まとめ" },
];

export default function ConveniComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="コンビニ3社カロリー比較"
        subtitle="セブン・ローソン・ファミマ、ダイエットならどこで何を選ぶ？【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
        breadcrumb="コンビニ3社比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="conveni-comparison">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月15日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question="ダイエット中はセブン・ローソン・ファミマのどれがいい？何を選べばいい？"
          answer={
            <>
              <strong>3社とも「たんぱく質が摂れる」サラダで高タンパク・低カロリーが狙えます</strong>。同シリーズの鶏むねサラダで比べると、最もカロリー効率が良いのは<strong>ファミマ（169kcal/P23.0g）</strong>、次いでセブン（199kcal/P21.8g）、ローソン（206kcal/P23.1g）。<strong>低糖質で選ぶならローソン</strong>（NL ブランパン2個入66kcalなど専用ラインが手厚い）、<strong>総菜・サラダの種類で選ぶならセブン</strong>が強みです。基本は「たんぱく質サラダ＋おでんや茶碗蒸し＋無糖の飲み物」で1食300〜400kcal台に収まります。
            </>
          }
        />

        <p className="mb-4">
          「自炊できないけどダイエットしたい」人にとって、コンビニは最強の味方にも、太る原因にもなります。違いは<Marker>同じ棚で何を選ぶか</Marker>だけ。
        </p>
        <p className="mb-4">
          この記事では、セブンイレブン・ローソン・ファミリーマートの<Marker color="blue">公式栄養データ</Marker>を横断比較します。各社の「たんぱく質が摂れる」サラダ、低カロリー総菜、低糖質パンを実数値で対決させ、<Marker>ダイエット・筋トレ・糖質制限のどれを狙うかで「行くべきコンビニ」</Marker>が変わることを示します。
        </p>
        <p className="mb-8">
          結論を先に言うと、3社に絶対的な優劣はなく「目的別に強みが違う」が答えです。自分の目的に合った1社と定番商品を覚えておけば、毎日の選択で迷わなくなります。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="新鮮な野菜とチキンのサラダ" />

        {/* Section 1: 高タンパクサラダ対決 */}
        <section className="mb-16">
          <SectionHeading id="protein-salad">高タンパクサラダ3社対決</SectionHeading>

          <p className="mb-4">
            各社が展開する<Marker>「たんぱく質が摂れる」鶏むね肉サラダ</Marker>は、ダイエット・筋トレ中の主役。同コンセプトの商品同士なので、純粋にカロリー効率を比べられます。
          </p>

          <ComparisonTable
            headers={["チェーン", "商品", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["ファミマ", "鶏むね肉とたまごのサラダ", "169 kcal", "23.0g", "7.2g"],
              ["セブン", "鶏むね肉サラダ", "199 kcal", "21.8g", "10.9g"],
              ["ローソン", "国産鶏むね肉のサラダ", "206 kcal", "23.1g", "11.0g"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※各社「たんぱく質が摂れる」シリーズの鶏むね肉サラダで比較。栄養成分は各社公式情報に基づく。
          </p>

          <TipBox title="対決のポイント">
            <p>タンパク質量はほぼ横並び（21.8〜23.1g）ですが、<Marker>ファミマの「鶏むね肉とたまごのサラダ」は169kcal・脂質7.2gと頭ひとつ抜けて低カロリー低脂質</Marker>。卵が入ってタンパク質23gを確保しつつ脂質を抑えており、ローファット中の一皿としては3社で最も優秀です。ローソン・セブンは脂質が約11gとやや高めですが、その分ドレッシングやトッピングの満足感があります。</p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリー総菜 */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリー総菜ランキング（3社横断）</SectionHeading>

          <p className="mb-4">
            「もう一品足したい」ときに頼れる、<Marker>100kcal未満で買える総菜・サラダ</Marker>を3社横断でランキングしました。タンパク質も摂れるものを優先しています。
          </p>

          <NutritionTable
            items={[
              { name: "おでん 味しみ絹厚揚げ（セブン）", calories: 55, protein: 4.0, fat: 3.7, carbs: 1.8, highlight: true },
              { name: "海老入り茶碗蒸し（ローソン）", calories: 56, protein: 4.5, fat: 3.2, carbs: 2.7 },
              { name: "オクラのネバネバサラダ（ファミマ）", calories: 58, protein: 2.9, fat: 1.1, carbs: 11.7 },
              { name: "サラダチキンのサラダ（ファミマ）", calories: 60, protein: 9.4, fat: 1.3, carbs: 3.6, highlight: true },
              { name: "ツナたまごコーンのサラダ（セブン）", calories: 60, protein: 5.2, fat: 2.3, carbs: 5.5 },
              { name: "ローストチキンのサラダ（ローソン）", calories: 65, protein: 8.8, fat: 1.8, carbs: 4.3, highlight: true },
              { name: "おでん なんこつ入り鶏つくね串（セブン）", calories: 66, protein: 7.0, fat: 4.0, carbs: 0.7 },
              { name: "1/3日分の野菜サラダ（ファミマ）", calories: 72, protein: 6.7, fat: 2.5, carbs: 7.2 },
            ]}
          />

          <TipBox title="100kcal未満でもタンパク質は摂れる">
            <p>カロリー効率で光るのは<Marker color="blue">ファミマ「サラダチキンのサラダ」（60kcal/P9.4g）</Marker>と<Marker color="blue">ローソン「ローストチキンのサラダ」（65kcal/P8.8g）</Marker>。どちらも60〜65kcalでタンパク質9g前後と、低カロリーでしっかりタンパク質を上乗せできます。寒い季節はセブンの<Marker>おでん（厚揚げ55kcal・つくね串66kcal）</Marker>が、低カロリーで満腹感を得やすい隠れた優等生です。</p>
          </TipBox>
        </section>

        {/* Section 3: 低糖質 */}
        <section className="mb-16">
          <SectionHeading id="low-carb">低糖質はローソンが頭ひとつ抜ける</SectionHeading>

          <p className="mb-4">
            糖質制限を狙うなら、<Marker>ローソンの「NL（ナチュラルローソン）」と「ブランパン」シリーズ</Marker>が3社で最も手厚い専用ラインです。主食を低糖質に置き換えられるのが強みです。
          </p>

          <NutritionTable
            items={[
              { name: "NL ブランパン 2個入（ローソン）", calories: 66, protein: 6.1, fat: 2.8, carbs: 6.1, highlight: true },
              { name: "NL ブラン入り食パン 4枚入（ローソン・1枚あたり）", calories: 104, protein: 7.2, fat: 2.1, carbs: 16.0 },
              { name: "ROLLサンド チキンとブロッコリー（ローソン）", calories: 344, protein: 15.7, fat: 18.6, carbs: 29.7 },
            ]}
          />

          <p className="mb-4">
            ブランパンは<Marker color="green">2個でも炭水化物が控えめ</Marker>で、食物繊維も摂れるのが特徴。普通の菓子パン1個（300〜400kcal・糖質40g超が多い）の代わりにすれば、糖質とカロリーを大きく抑えながら満足感を保てます。セブン・ファミマにもサラダやスープなど低糖質に組める商品はありますが、<Marker>「主食そのものを低糖質に置き換える専用パン」が定番化しているのはローソン</Marker>です。
          </p>

          <TipBox title="糖質制限のコンビニ朝食テンプレ">
            <p>ローソンなら<Marker>「ブランパン2個＋たんぱく質が摂れるサラダ＋無糖コーヒー」</Marker>で、朝食を低糖質・高タンパクにまとめられます。忙しい朝でも数百kcal台で1食が完結します。</p>
          </TipBox>
        </section>

        {/* Mid CTA */}
        <CTABanner
          title="3社のコンビニ商品を栄養データで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFCで絞り込めます"
        />

        <ArticleImage src="https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=400&fit=crop" alt="グリルチキンのヘルシーな一皿" />

        {/* Section 4: 目的別 */}
        <section className="mb-16">
          <SectionHeading id="by-goal">目的別・3社の使い分け</SectionHeading>

          <p className="mb-6">
            どのコンビニも優秀なので、<Marker>「自分の目的に強い1社」</Marker>を決めておくのが賢い使い方です。
          </p>

          <RankingCard rank={1} title="糖質制限なら → ローソン" subtitle="主食の低糖質置き換えに3社で最も手厚い">
            <p className="text-sm text-gray-700 leading-relaxed">
              主食を低糖質パンに置き換えられる専用ラインが定番化。<Marker color="green">ブランパン（2個66kcal）やブラン入り食パン</Marker>で、糖質制限中でも「パンを食べる満足感」を諦めずに済みます。たんぱく質サラダと合わせれば低糖質・高タンパクが一度に揃います。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="サラダ・総菜の種類なら → セブン" subtitle="組み合わせの自由度が高い">
            <p className="text-sm text-gray-700 leading-relaxed">
              サラダ・総菜・おでんなど低カロリー帯の選択肢が幅広く、<Marker color="blue">その日の気分で組み合わせを変えやすい</Marker>のが強み。おでん（厚揚げ55kcal・つくね串66kcalなど）は寒い季節の低カロリー満腹メニューとして優秀です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ローファット（低脂質）なら → ファミマ" subtitle="鶏むね肉とたまごのサラダ 169kcal/P23g/F7.2g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「鶏むね肉とたまごのサラダ」が<Marker>169kcal・タンパク質23g・脂質7.2g</Marker>と、3社のたんぱく質サラダで最も低カロリー低脂質。脂質を抑えて高タンパクを摂りたいローファット派に向いています。
            </p>
          </RankingCard>
        </section>

        {/* Section 5: 避ける */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けたい高カロリー商品</SectionHeading>

          <p className="mb-4">
            コンビニは低カロリー商品が充実する一方、<Marker>大盛パスタ・濃厚ラーメン・揚げ物大容量</Marker>は1品で1日の摂取目安に迫ります。
          </p>

          <WarningBox title="ダイエット中は要注意">
            <ul className="space-y-2">
              <li><span className="font-bold">濃厚G系ラーメン（セブン・1,595kcal）</span> ─ 脂質102g。1食で大半の人の1日の脂質目安を超える水準です。</li>
              <li><span className="font-bold">700g超 カレー＆ミートパスタ（ファミマ・1,088kcal）</span> ─ 炭水化物164gと糖質が突出。</li>
              <li><span className="font-bold">からあげクン レッド3倍 BOX 20個入り（ローソン・904kcal）</span> ─ 大容量シェア向け。1人で食べると脂質56g。</li>
              <li><span className="font-bold">大盛ペペロンチーノ系（各社800kcal超）</span> ─ 「シンプル＝低カロリー」ではない代表格。</li>
            </ul>
          </WarningBox>

          <p className="mb-4 mt-4">
            これらは「絶対ダメ」ではなく、<Marker color="green">食べる日は前後の食事で調整する</Marker>のが現実的。問題は無自覚に毎日選ぶことなので、数値を知ったうえで頻度を決めましょう。
          </p>
        </section>

        {/* Section 6: コツ */}
        <section className="mb-16">
          <SectionHeading id="tips">太らないコンビニ飯の組み立て方 5つ</SectionHeading>

          <NumberedList
            items={[
              {
                title: "主役は「たんぱく質が摂れる」サラダ",
                body: "3社とも169〜206kcalでタンパク質21〜23gが摂れる鶏むねサラダがあります。これを1食の軸にすれば、低カロリーでも満足感とタンパク質を確保できます。",
              },
              {
                title: "もう一品は100kcal未満の総菜から",
                body: "ファミマ サラダチキンのサラダ（60kcal/P9.4g）、ローソン ローストチキンのサラダ（65kcal/P8.8g）、セブン おでんなど。100kcal未満でタンパク質を上乗せできます。",
              },
              {
                title: "主食は低糖質パンかおにぎり1個に絞る",
                body: "糖質を抑えたい日はローソンのブランパン、しっかり食べたい日はおにぎり1個（おおむね180〜230kcal）まで。菓子パン（300〜400kcal・高糖質）の習慣買いをやめるだけで差が出ます。",
              },
              {
                title: "飲み物は無糖を選ぶ",
                body: "加糖飲料は1本で100〜150kcal前後。無糖のお茶・水・ブラックコーヒーに変えれば、満足感を保ちつつ毎日のカロリーを抑えやすくなります。",
              },
              {
                title: "迷ったらPFCを見て選ぶ",
                body: "パッケージ裏の栄養成分表示を見る習慣をつけるのが最短の近道。たべなびなら3社の商品をカロリー・タンパク質で横断検索でき、買う前に最適な一品を選べます。",
              },
            ]}
          />
        </section>

        {/* 内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>各社の全商品を目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            低カロリー・高タンパク・低糖質ランキングは、各チェーンのページから全商品を確認できます。商品単位の深掘りは
            <Link href="/guide/conveni-protein" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700 mx-0.5">コンビニ高タンパク商品ランキング</Link>
            、チェーン別は
            <Link href="/guide/seven-eleven-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700 mx-0.5">セブン</Link>・
            <Link href="/guide/lawson-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700 mx-0.5">ローソン</Link>・
            <Link href="/guide/familymart-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700 mx-0.5">ファミマ</Link>
            のダイエットガイドへ。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/seven-eleven" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 セブンイレブン</Link>
            <Link href="/chains/lawson" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 ローソン</Link>
            <Link href="/chains/familymart" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🏪 ファミリーマート</Link>
          </div>
        </section>

        <AffiliateProductGrid
          title="コンビニ飯に足すタンパク質補給"
          productIds={["inbar-protein", "onebar-protein", "ultora-whey", "base-food-bread"]}
        />

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            コンビニ3社に絶対の優劣はなく、目的で強みが分かれます。要点はこれだけです。
          </p>

          <ArticleSummary
            points={[
              "高タンパクサラダ3社の鶏むねサラダはP21〜23gでほぼ互角。最も低カロリー低脂質はファミマ（169kcal/P23g/F7.2g）",
              "100kcal未満の総菜ならファミマ サラダチキンのサラダ（60kcal/P9.4g）・ローソン ローストチキンのサラダ（65kcal/P8.8g）が高効率",
              "低糖質はローソン（NL・ブランパンで主食を低糖質に置き換えられる）が3社で最も手厚い",
              "サラダ・総菜・おでんの選択肢の広さならセブン",
              "避けたいのは大盛パスタ・濃厚ラーメン・揚げ物大容量（800〜1,600kcal級）",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分・商品ラインナップは店舗・時期により異なる場合があります。栄養成分は各社公式情報に基づき記載しています。
          </p>
        </section>

        <FAQSection
          slug="conveni-comparison"
          items={[
            {
              q: "ダイエット中、コンビニはセブン・ローソン・ファミマのどれがいい？",
              a: "目的によります。低糖質（糖質制限）を狙うならローソンが最も強く、NL・ブランパンで主食を低糖質に置き換えられます。サラダや総菜の種類の多さで選ぶならセブン、脂質を抑えた高タンパク（ローファット）ならファミマの「鶏むね肉とたまごのサラダ」（169kcal/タンパク質23g/脂質7.2g）が優秀です（2026年6月時点・各社公式栄養データ）。",
            },
            {
              q: "コンビニで一番低カロリーで高タンパクなサラダは？",
              a: "3社の「たんぱく質が摂れる」鶏むねサラダで比較すると、ファミマの鶏むね肉とたまごのサラダが169kcal・タンパク質23gで最もカロリー効率が良いです。セブンの鶏むね肉サラダは199kcal・21.8g、ローソンの国産鶏むね肉のサラダは206kcal・23.1gで、タンパク質量はほぼ横並びです。",
            },
            {
              q: "糖質制限ならどのコンビニ？",
              a: "ローソンがおすすめです。NL（ナチュラルローソン）とブランパンのシリーズが3社で最も手厚く、ブランパン2個入（66kcal）など主食そのものを低糖質に置き換えられる商品が定番化しています。普通の菓子パン（300〜400kcal・糖質40g超が多い）の代わりにすれば、糖質とカロリーを大きく抑えられます。",
            },
            {
              q: "100kcal以下で買えるおすすめ総菜は？",
              a: "ファミマのサラダチキンのサラダ（60kcal/タンパク質9.4g）、ローソンのローストチキンのサラダ（65kcal/8.8g）、セブンのおでん（味しみ絹厚揚げ55kcal、なんこつ入り鶏つくね串66kcal）などが、低カロリーながらタンパク質も摂れておすすめです。",
            },
            {
              q: "コンビニで避けたほうがいい商品は？",
              a: "濃厚系ラーメン（セブンの濃厚G系ラーメンは1,595kcal・脂質102g）、700g超の大盛パスタ（ファミマのカレー＆ミートパスタは1,088kcal・炭水化物164g）、大容量の揚げ物などは1品で1日の摂取目安に迫ります。食べる日は前後の食事で調整しましょう。",
            },
            {
              q: "コンビニ飯でダイエットを続けるコツは？",
              a: "「たんぱく質が摂れるサラダ＋100kcal未満の総菜＋主食はおにぎり1個か低糖質パン＋無糖の飲み物」を基本形にすると、1食300〜400kcal台でタンパク質も確保できます。栄養成分表示を見る習慣をつけ、加糖飲料と菓子パンの習慣買いをやめるのが続けやすいコツです。",
            },
          ]}
        />

        <CTABanner
          title="コンビニ3社の商品をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />

        <UpdateHistory
          entries={[
            { date: "2026-06-15", note: "初稿公開（セブン・ローソン・ファミマの公式栄養データに基づく横断比較）" },
          ]}
        />

        <ArticleFooter currentSlug="conveni-comparison" />

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
