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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】ダイエット中の朝食完全ガイド｜朝マック・コンビニ・チェーン店のおすすめメニュー | たべなび",
  description:
    "ダイエット中の朝食を徹底解説。朝マックの低カロリーメニュー、コンビニで買えるダイエット朝食、松屋・なか卯のモーニングまで。PFCバランスに基づくおすすめ朝食を紹介します。",
  keywords: [
    "ダイエット 朝食",
    "朝マック ダイエット",
    "朝食 カロリー",
    "コンビニ 朝食 ダイエット",
    "朝食 PFC",
  ],
  openGraph: {
    title: "【2026年最新】ダイエット中の朝食完全ガイド｜朝マック・コンビニ・チェーン店のおすすめメニュー",
    description:
      "朝マック・コンビニ・チェーン店のダイエット向け朝食メニューを徹底比較。PFCバランスで選ぶ朝食の正解がわかります。",
    url: "https://www.tabenavi.jp/guide/morning-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ダイエット中の朝食完全ガイド｜朝マック・コンビニ・チェーン店のおすすめメニュー",
  description:
    "朝マック・コンビニ・チェーン店のダイエット向け朝食メニューを徹底比較。PFCバランスで選ぶ朝食の正解がわかります。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/morning-diet",
};

const tocItems = [
  { id: "why-breakfast", label: "朝食を食べるべき理由" },
  { id: "morning-mac", label: "朝マックの低カロリーメニュー" },
  { id: "conveni", label: "コンビニの朝食おすすめ" },
  { id: "chain-morning", label: "チェーン店のモーニング" },
  { id: "ideal-pfc", label: "朝食の理想PFCバランス" },
  { id: "summary", label: "まとめ" },
];

export default function MorningDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ダイエット中の朝食完全ガイド"
        subtitle="朝マック・コンビニ・チェーン店のおすすめメニュー【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop"
        breadcrumb="ダイエット朝食ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="morning-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月23日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中は朝食を抜くべき？」と悩む方は多いですが、結論から言うと<Marker>朝食は食べた方がダイエットに有利</Marker>です。朝食を抜くと基礎代謝が落ち、昼食でのドカ食いにつながりやすくなります。
        </p>
        <p className="mb-4">
          とはいえ、何でも食べていいわけではありません。<Marker color="blue">朝マックのエッグマックマフィンは311kcalで意外と優秀</Marker>ですが、ホットケーキセットは640kcalと高カロリー。正しいメニュー選びが重要です。
        </p>
        <p className="mb-8">
          この記事では、朝マック・コンビニ・松屋やなか卯などのチェーン店モーニングを徹底比較し、ダイエット中の朝食の最適解をPFCバランスの観点からお伝えします。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=400&fit=crop" alt="ヘルシーな朝食のイメージ" />

        {/* Section 1: 朝食を食べるべき理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ダイエット中の朝食は食べた方がいい？避けた方がいい？"}
          answer={"ダイエット中でも朝食は食べた方が有利です。朝食により食事誘発熱産生が生じ、昼食のドカ食いも防げます。ただし300～500kcal、タンパク質20g以上の栄養バランスを意識することが重要。エッグマックマフィン（311kcal）やコンビニのサラダチキン組み合わせ（420kcal）など、正しいメニュー選びで効果が期待できます。"}
        />

        <SectionHeading id="why-breakfast">ダイエット中に朝食を食べるべき3つの理由</SectionHeading>

          <p className="mb-4">
            朝食を抜くダイエットは一時的にカロリーカットできますが、<Marker>長期的には逆効果</Marker>になることが多くの研究で示されています。
          </p>

          <NumberedList
            items={[
              {
                title: "基礎代謝がアップする",
                body: "朝食を食べることで体温が上がり、DIT（食事誘発性熱産生）が活性化します。朝食を摂る人は摂らない人と比べて1日の消費カロリーが約100〜200kcal高いというデータもあります。特にタンパク質を含む朝食はDIT効果が高く、脂肪燃焼を促進します。",
              },
              {
                title: "昼食のドカ食いを防ぐ",
                body: "朝食を抜くと昼までの空腹感が強くなり、結果的に昼食で高カロリーな食事を選びがちです。朝に300〜400kcal程度の食事を摂ることで、昼食の摂取量を自然と抑えられます。1日トータルのカロリーは朝食を食べた方が低くなるケースが多いのです。",
              },
              {
                title: "血糖値の急上昇を防ぐ",
                body: "朝食を抜いた状態で昼食を摂ると、血糖値が急上昇しインスリンが大量分泌されます。インスリンは脂肪の蓄積を促すホルモンでもあるため、血糖値の乱高下は太りやすい体質につながります。朝食で緩やかに血糖値を上げることが大切です。",
              },
            ]}
          />

          <TipBox title="朝食の理想カロリーは？">
            <p>ダイエット中の朝食は<Marker>300〜500kcal</Marker>が理想的。1日の摂取カロリーが1,500kcalの場合、朝食400kcal・昼食500kcal・夕食500kcal・間食100kcalという配分がバランス良く痩せやすい体をつくります。</p>
          </TipBox>
        </section>

        {/* Section 2: 朝マック */}
        <section className="mb-16">
          <SectionHeading id="morning-mac">朝マックの低カロリーメニュー完全比較</SectionHeading>

          <p className="mb-4">
            朝マックには意外と<Marker>低カロリーで高タンパクなメニュー</Marker>が揃っています。ただし、選び方を間違えると600kcal超えのメニューもあるので注意が必要です。
          </p>

          <NutritionTable
            items={[
              { name: "エッグマックマフィン", calories: 311, protein: 19.2, fat: 13.5, carbs: 27.0, highlight: true },
              { name: "ソーセージマフィン", calories: 392, protein: 15.5, fat: 23.5, carbs: 27.5 },
              { name: "ソーセージエッグマフィン", calories: 475, protein: 22.0, fat: 28.5, carbs: 28.0 },
              { name: "マックグリドル ソーセージ", calories: 420, protein: 12.8, fat: 22.0, carbs: 42.5 },
              { name: "フィレオフィッシュ", calories: 341, protein: 14.5, fat: 14.0, carbs: 38.0, highlight: true },
              { name: "ホットケーキ（3枚）", calories: 320, protein: 8.5, fat: 7.5, carbs: 55.0 },
              { name: "メガマフィン", calories: 688, protein: 30.2, fat: 44.5, carbs: 39.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はマクドナルド公式サイトの情報をもとに記載。単品の数値です。
          </p>

          <SubSectionHeading>朝マックのベストチョイス：エッグマックマフィン</SubSectionHeading>

          <p className="mb-4">
            <Marker color="blue">エッグマックマフィン（311kcal / P19.2g / F13.5g / C27.0g）</Marker>は朝マックのダイエットメニューで圧倒的No.1です。タンパク質19.2gは卵1個+チーズ+カナディアンベーコンの組み合わせによるもので、朝に必要なタンパク質を十分に補えます。
          </p>

          <p className="mb-4">
            一方で<Marker>避けるべきはメガマフィン（688kcal）</Marker>。脂質44.5gと朝食としては多すぎます。ソーセージエッグマフィン（475kcal）も脂質28.5gとやや高め。
          </p>

          <ComparisonTable
            headers={["おすすめ朝マックセット", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["エッグマックマフィン + ブラックコーヒー", "315 kcal", "P 19.2g", "F 13.5g"],
              ["エッグマックマフィン + サラダ + 爽健美茶", "370 kcal", "P 20.5g", "F 13.8g"],
              ["フィレオフィッシュ + ブラックコーヒー", "345 kcal", "P 14.5g", "F 14.0g"],
            ]}
            bestRowIndex={0}
          />

          <WarningBox title="朝マックで避けるべき組み合わせ">
            <ul className="space-y-2">
              <li><span className="font-bold">メガマフィン + ハッシュポテト + コーラ（計920kcal超）</span> ─ 朝食だけで1日の半分以上のカロリーを摂ることに。</li>
              <li><span className="font-bold">ホットケーキ + シロップ + ハッシュポテト（計510kcal）</span> ─ 糖質が80g超え。タンパク質は10g程度と少なく栄養バランスも悪い。</li>
            </ul>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=400&fit=crop" alt="ファストフードの朝食メニュー" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="外食メニューのカロリーをサクッと検索"
          subtitle="たべなびなら朝マックから牛丼チェーンまで、栄養成分をすぐに確認できます"
        />

        {/* Section 3: コンビニ朝食 */}
        <section className="mb-16">
          <SectionHeading id="conveni">コンビニで作るダイエット朝食おすすめ組み合わせ</SectionHeading>

          <p className="mb-4">
            コンビニ朝食の最大の強みは<Marker>自分で組み合わせを選べる</Marker>こと。タンパク質・炭水化物・脂質を個別にコントロールできるため、実はダイエットに最も向いている朝食手段です。
          </p>

          <SubSectionHeading>おすすめ組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "PFC"]}
            rows={[
              ["高タンパク型", "おにぎり（鮭）+ サラダチキン + 味噌汁", "約420 kcal", "P 32g / F 6g / C 52g"],
              ["低糖質型", "サラダチキン + ゆで卵 + サラダ", "約280 kcal", "P 35g / F 14g / C 3g"],
              ["バランス型", "全粒粉サンドイッチ + ヨーグルト", "約380 kcal", "P 18g / F 12g / C 48g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            最もおすすめは<Marker color="blue">「おにぎり1個 + サラダチキン + インスタント味噌汁」の高タンパク型</Marker>。約420kcalでタンパク質32gを確保でき、価格も500円前後とコスパも抜群です。
          </p>

          <SubSectionHeading>コンビニ朝食の主要アイテム別カロリー</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "おにぎり（鮭）", calories: 180, protein: 5.0, fat: 1.5, carbs: 38.0 },
              { name: "おにぎり（梅）", calories: 165, protein: 3.5, fat: 1.0, carbs: 36.0, highlight: true },
              { name: "サラダチキン（プレーン）", calories: 115, protein: 24.0, fat: 1.5, carbs: 0.5, highlight: true },
              { name: "ゆで卵（1個）", calories: 65, protein: 6.5, fat: 4.5, carbs: 0.3, highlight: true },
              { name: "ギリシャヨーグルト", calories: 60, protein: 10.0, fat: 0.2, carbs: 5.5 },
              { name: "バナナ（1本）", calories: 86, protein: 1.1, fat: 0.2, carbs: 22.5 },
              { name: "菓子パン（メロンパン等）", calories: 380, protein: 6.0, fat: 14.0, carbs: 56.0 },
            ]}
          />

          <WarningBox title="コンビニ朝食で避けるべきもの">
            <ul className="space-y-2">
              <li><span className="font-bold">菓子パン（350〜500kcal）</span> ─ 脂質と糖質のダブルパンチ。タンパク質はわずか5〜8g。満腹感も持続しにくい。</li>
              <li><span className="font-bold">コンビニスイーツ（200〜400kcal）</span> ─ 朝から甘いものを食べると血糖値が急上昇し、その後の急降下で眠気と空腹感に襲われます。</li>
              <li><span className="font-bold">カフェラテ（Lサイズ・190kcal）</span> ─ ミルクと砂糖でカロリーが意外と高い。ブラックコーヒー（5kcal）に置き換えましょう。</li>
            </ul>
          </WarningBox>

          <TipBox title="プロテインバーという選択肢">
            <p>時間がない朝は<Marker>プロテインバー1本（約180kcal / P15g）</Marker>でも最低限のタンパク質は確保できます。ただし、これだけでは食物繊維やビタミンが不足するため、あくまで「時間がない日の応急策」として活用しましょう。</p>
          </TipBox>
        </section>

        {/* Section 4: チェーン店モーニング */}
        <section className="mb-16">
          <SectionHeading id="chain-morning">チェーン店のモーニングメニュー比較</SectionHeading>

          <p className="mb-4">
            牛丼チェーンやファミレスの朝食メニューは、<Marker>しっかり食べたい派のダイエッター</Marker>に最適です。栄養バランスの良い定食スタイルが多く、外食朝食の中でも実は優秀な選択肢です。
          </p>

          <SubSectionHeading>松屋の朝定食</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "ソーセージエッグ定食", calories: 580, protein: 22.5, fat: 20.0, carbs: 75.0 },
              { name: "焼鮭定食", calories: 520, protein: 28.0, fat: 12.5, carbs: 72.0, highlight: true },
              { name: "納豆定食", calories: 495, protein: 20.0, fat: 10.0, carbs: 78.0, highlight: true },
              { name: "牛めしミニ盛（朝利用）", calories: 380, protein: 12.5, fat: 13.2, carbs: 50.8, highlight: true },
            ]}
          />

          <p className="mb-4">
            松屋の朝定食で最もおすすめは<Marker color="blue">焼鮭定食（520kcal / P28.0g）</Marker>。タンパク質28gと高タンパクで脂質は12.5gと控えめ。さらに無料の味噌汁付きで満足感も十分です。
          </p>

          <SubSectionHeading>なか卯の朝食</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "目玉焼き朝定食", calories: 530, protein: 20.0, fat: 15.0, carbs: 75.5 },
              { name: "納豆朝定食", calories: 480, protein: 19.5, fat: 9.5, carbs: 76.0, highlight: true },
              { name: "こだわり卵の親子丼（ミニ）", calories: 395, protein: 18.5, fat: 8.5, carbs: 58.0, highlight: true },
            ]}
          />

          <p className="mb-4">
            なか卯の<Marker>親子丼ミニ（395kcal）</Marker>は朝食として絶妙なカロリー設定。卵と鶏肉でタンパク質18.5gを確保しつつ、脂質8.5gと低脂質。朝からしっかりタンパク質を摂りたい方におすすめです。
          </p>

          <SubSectionHeading>チェーン店朝食の総合比較</SubSectionHeading>

          <ComparisonTable
            headers={["チェーン店", "おすすめメニュー", "カロリー", "P", "コスパ"]}
            rows={[
              ["朝マック", "エッグマックマフィン", "311 kcal", "19.2g", "約200円"],
              ["松屋", "焼鮭定食", "520 kcal", "28.0g", "約500円"],
              ["なか卯", "親子丼ミニ", "395 kcal", "18.5g", "約350円"],
              ["すき家", "たまかけ朝食", "470 kcal", "16.0g", "約350円"],
            ]}
            bestRowIndex={0}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="チェーン店の和朝食イメージ" />

          <TipBox title="朝食チェーン店の使い分け">
            <p>時間がない日は朝マック（エッグマックマフィン311kcal）、しっかり食べたい日は松屋の焼鮭定食（520kcal）、バランス良く済ませたい日はなか卯の親子丼ミニ（395kcal）と<Marker>状況に応じて使い分ける</Marker>のが賢い方法です。</p>
          </TipBox>
        </section>

        {/* Section 5: 理想PFCバランス */}
        <section className="mb-16">
          <SectionHeading id="ideal-pfc">朝食の理想PFCバランスと組み立て方</SectionHeading>

          <p className="mb-4">
            ダイエット中の朝食で意識すべきは<Marker>タンパク質を20g以上確保する</Marker>こと。朝にタンパク質を摂ることで筋肉の分解を防ぎ、代謝の高い体を維持できます。
          </p>

          <ComparisonTable
            headers={["栄養素", "理想量（朝食）", "役割", "食材例"]}
            rows={[
              ["タンパク質（P）", "20〜30g", "筋肉維持・代謝UP", "卵、サラダチキン、鮭、ヨーグルト"],
              ["脂質（F）", "8〜15g", "ホルモン生成・満腹感", "卵黄、チーズ、ナッツ"],
              ["炭水化物（C）", "40〜60g", "エネルギー源・脳の活性化", "おにぎり、パン、バナナ"],
            ]}
          />

          <p className="mb-4">
            朝食の理想カロリーは<Marker color="blue">300〜500kcalで、PFC比率はP:F:C = 25:20:55</Marker>が目安です。特にタンパク質は朝に不足しがちなので、意識的に摂取しましょう。
          </p>

          <SubSectionHeading>ダイエット目的別の朝食設計</SubSectionHeading>

          <ComparisonTable
            headers={["ダイエット方針", "朝食カロリー", "おすすめメニュー", "特徴"]}
            rows={[
              ["糖質制限", "300 kcal", "サラダチキン + ゆで卵 + サラダ", "糖質3g以下"],
              ["ローファット", "400 kcal", "おにぎり + サラダチキン + 味噌汁", "脂質6g"],
              ["カロリー制限", "350 kcal", "エッグマックマフィン + ブラックコーヒー", "手軽で続けやすい"],
              ["筋トレ併用", "500 kcal", "焼鮭定食（松屋）", "P28gの高タンパク"],
            ]}
            bestRowIndex={1}
          />

          <CheckList
            items={[
              "タンパク質は朝食で最低20gを確保する",
              "食物繊維を含む食材（野菜、海藻）を1品追加する",
              "飲み物はブラックコーヒーか緑茶（0〜5kcal）を選ぶ",
              "菓子パンやスイーツは血糖値を急上昇させるため避ける",
              "朝食は起床後1時間以内に摂るのが理想的",
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの取れた朝食プレート" />
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ダイエット中でも朝食は食べるべき。正しいメニュー選びで代謝UP・ドカ食い防止・血糖値安定の3つのメリットが得られます。
          </p>

          <CheckList
            items={[
              "朝食は300〜500kcal、タンパク質20g以上が理想",
              "朝マックならエッグマックマフィン（311kcal / P19.2g）がベスト",
              "コンビニは「おにぎり + サラダチキン + 味噌汁」の組み合わせが最強（約420kcal / P32g）",
              "松屋の焼鮭定食（520kcal / P28g）はしっかり食べたい日に最適",
              "なか卯の親子丼ミニ（395kcal / P18.5g）はバランス型の優等生",
              "菓子パン・甘い飲み物は避け、タンパク質中心の朝食を心がける",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="朝食メニューのカロリーを簡単比較"
          subtitle="たべなびなら朝マック・コンビニ・チェーン店の栄養成分をまとめてチェック"
        />

        {/* ArticleFooter */}
        <FAQSection
          slug="morning-diet"
          items={[
            { q: "朝マックのおすすめメニューは？", a: "エッグマックマフィン（311kcal / タンパク質19.2g）が最適です。高タンパク・低カロリーで、卵・チーズ・カナディアンベーコンで朝に必要なタンパク質を十分補給できます。避けるべきはメガマフィン（688kcal）とホットケーキセット（640kcal）。" },
            { q: "コンビニ朝食の最強組み合わせは？", a: "おにぎり（鮭）＋サラダチキン＋インスタント味噌汁が推奨。約420kcalでタンパク質32g確保でき、価格500円程度とコスパも抜群。自分でPFC比率を調整できるのがコンビニの最大利点です。" },
            { q: "松屋やなか卯の朝食でダイエット向けは？", a: "松屋の焼鮭定食（520kcal / タンパク質28g）、なか卯の親子丼ミニ（395kcal / タンパク質18.5g）がおすすめ。どちらも定食スタイルで栄養バランスが良く、しっかり食べたい日に最適です。" },
            { q: "ダイエット朝食で避けるべき食べ物は？", a: "菓子パン（350～500kcal、タンパク質5～8g）、コンビニスイーツ、砂糖入りカフェラテは避けましょう。血糖値が急上昇し、その後の急降下で眠気と空腹感が生じます。朝から甘いものは避けが鉄則です。" },
            { q: "朝食のタンパク質はなぜ重要？", a: "朝にタンパク質を摂ることで筋肉の分解が防げ、代謝の高い体を維持できます。理想は20～30g。食事誘発性熱産生（DIT）により脂肪燃焼も促進され、基礎代謝のアップにつながります。" },
          ]}
        />

        <ArticleFooter currentSlug="morning-diet" />

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