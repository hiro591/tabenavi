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
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】ラーメンはダイエット中に食べていい？カロリー比較と太らない食べ方 | たべなび",
  description:
    "ラーメンのカロリーを味噌・醤油・豚骨・塩で徹底比較。日高屋・丸亀製麺・リンガーハットなどチェーン店別ランキングと、ダイエット中でも太らないラーメンの食べ方5選を解説します。",
  keywords: [
    "ラーメン カロリー",
    "ラーメン ダイエット",
    "ラーメン 太る",
    "日高屋 カロリー",
    "ラーメン 太らない食べ方",
  ],
  openGraph: {
    title: "【2026年最新】ラーメンはダイエット中に食べていい？カロリー比較と太らない食べ方",
    description:
      "ラーメンのカロリーを味別・チェーン店別に徹底比較。太らない食べ方5つのコツを紹介します。",
    url: "https://www.tabenavi.jp/guide/ramen-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ラーメンはダイエット中に食べていい？カロリー比較と太らない食べ方",
  description:
    "ラーメンのカロリーを味別・チェーン店別に徹底比較。太らない食べ方5つのコツを紹介します。",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/ramen-diet",
};

const tocItems = [
  { id: "ramen-calories", label: "ラーメンのカロリー事情" },
  { id: "chain-ranking", label: "チェーン店カロリーランキング" },
  { id: "how-to-eat", label: "太らない食べ方5選" },
  { id: "alternatives", label: "ラーメンの代替案" },
  { id: "summary", label: "まとめ" },
];

export default function RamenDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ラーメンとダイエットの真実"
        subtitle="カロリー比較と太らない食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=400&fit=crop"
        breadcrumb="ラーメンダイエットガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="ramen-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年3月23日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけどラーメンが食べたい...」そんな葛藤を抱える方は多いはず。結論から言うと、<Marker>ラーメンはダイエット中でも食べてOK</Marker>です。ただし、食べ方とメニュー選びにコツがあります。
        </p>
        <p className="mb-4">
          一般的なラーメン1杯のカロリーは<Marker color="blue">500〜900kcal</Marker>と幅が広く、味の種類やトッピング、スープを飲むかどうかで大きく変わります。醤油ラーメン1杯（約500kcal）とこってり豚骨ラーメン（約900kcal）では400kcalもの差があるのです。
        </p>
        <p className="mb-8">
          この記事では、ラーメンの味別カロリー比較、チェーン店別ランキング、そして太らないための具体的な食べ方を徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=400&fit=crop" alt="ラーメンのイメージ写真" />

        {/* Section 1: ラーメンのカロリー事情 */}
        <section className="mb-16">
          <SectionHeading id="ramen-calories">ラーメンのカロリー事情：味別で徹底比較</SectionHeading>

          <p className="mb-4">
            ラーメンのカロリーは<Marker>スープのベース</Marker>によって大きく変わります。同じ1杯でも、あっさり系とこってり系では300〜400kcalの差がつくことも珍しくありません。
          </p>

          <SubSectionHeading>味別カロリー比較（1杯あたり）</SubSectionHeading>

          <NutritionTable
            items={[
              { name: "塩ラーメン", calories: 470, protein: 18.0, fat: 8.5, carbs: 72.0, highlight: true },
              { name: "醤油ラーメン", calories: 500, protein: 20.5, fat: 10.0, carbs: 70.0, highlight: true },
              { name: "味噌ラーメン", calories: 580, protein: 22.0, fat: 15.5, carbs: 75.0 },
              { name: "豚骨ラーメン", calories: 650, protein: 25.0, fat: 22.0, carbs: 72.5 },
              { name: "豚骨味噌ラーメン", calories: 750, protein: 28.0, fat: 28.5, carbs: 78.0 },
              { name: "家系ラーメン", calories: 800, protein: 30.0, fat: 35.0, carbs: 75.0 },
              { name: "二郎系ラーメン", calories: 1500, protein: 65.0, fat: 70.0, carbs: 135.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※一般的な1杯あたりの目安値。店舗・レシピにより異なります。
          </p>

          <p className="mb-4">
            最もカロリーが低いのは<Marker color="blue">塩ラーメン（約470kcal）</Marker>。スープに油脂が少なく、シンプルな味付けのためカロリーが抑えられます。次いで醤油ラーメン（約500kcal）も比較的低カロリーです。
          </p>

          <p className="mb-4">
            一方、<Marker>二郎系ラーメンは1杯で約1,500kcal</Marker>と驚異的な数値。これは成人男性の1日の推定必要カロリー（2,200kcal）の約7割に相当します。ダイエット中は避けるのが賢明です。
          </p>

          <ComparisonTable
            headers={["味の種類", "カロリー", "脂質", "ダイエット評価"]}
            rows={[
              ["塩ラーメン", "470 kcal", "F 8.5g", "最もおすすめ"],
              ["醤油ラーメン", "500 kcal", "F 10.0g", "おすすめ"],
              ["味噌ラーメン", "580 kcal", "F 15.5g", "まずまず"],
              ["豚骨ラーメン", "650 kcal", "F 22.0g", "注意"],
              ["家系ラーメン", "800 kcal", "F 35.0g", "非推奨"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="カロリーの大部分はスープにある">
            <p>ラーメンのカロリーの<Marker>約30〜40%はスープに含まれています</Marker>。つまり、スープを全部飲むか残すかで150〜250kcalもの差が出ます。これはおにぎり1個分に相当するカロリー差。スープを残すだけで大きなカロリーカットが可能です。</p>
          </TipBox>
        </section>

        {/* Section 2: チェーン店ランキング */}
        <section className="mb-16">
          <SectionHeading id="chain-ranking">チェーン店ラーメンのカロリーランキング</SectionHeading>

          <p className="mb-4">
            人気ラーメンチェーン店の主要メニューをカロリー順にランキング。<Marker>同じラーメンでもチェーン店によって200kcal以上の差</Marker>があります。
          </p>

          <NutritionTable
            items={[
              { name: "リンガーハット 長崎ちゃんぽん（麺半分）", calories: 390, protein: 20.0, fat: 12.0, carbs: 45.0, highlight: true },
              { name: "日高屋 中華そば", calories: 430, protein: 18.5, fat: 10.5, carbs: 62.0, highlight: true },
              { name: "丸亀製麺 かけうどん（並）", calories: 305, protein: 8.5, fat: 1.5, carbs: 63.0, highlight: true },
              { name: "リンガーハット 長崎ちゃんぽん", calories: 682, protein: 30.5, fat: 22.0, carbs: 82.0 },
              { name: "日高屋 味噌ラーメン", calories: 720, protein: 28.0, fat: 25.5, carbs: 82.5 },
              { name: "幸楽苑 中華そば", calories: 510, protein: 19.0, fat: 12.0, carbs: 72.0 },
              { name: "天下一品 こってりラーメン（並）", calories: 799, protein: 32.5, fat: 42.0, carbs: 68.0 },
              { name: "ラーメン二郎 小ラーメン", calories: 1400, protein: 60.0, fat: 65.0, carbs: 130.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は各チェーン公式サイトおよび一般的な推計値をもとに記載。
          </p>

          <SubSectionHeading>ダイエット中のベストチョイス3選</SubSectionHeading>

          <p className="mb-4">
            チェーン店で麺類を食べるなら、以下の3つが特におすすめです。
          </p>

          <NutritionCard
            name="丸亀製麺 かけうどん（並）"
            calories={305}
            protein={8.5}
            fat={1.5}
            carbs={63.0}
          />

          <p className="mb-4">
            厳密にはラーメンではありませんが、<Marker color="blue">丸亀製麺のかけうどん（305kcal / F1.5g）</Marker>は麺類の中で圧倒的に低カロリー・低脂質。「麺が食べたい」欲求を満たすなら最もダイエット向きです。
          </p>

          <NutritionCard
            name="日高屋 中華そば"
            calories={430}
            protein={18.5}
            fat={10.5}
            carbs={62.0}
          />

          <p className="mb-4">
            ラーメンの中では<Marker>日高屋の中華そば（430kcal）</Marker>がトップクラスの低カロリー。あっさりした醤油ベースでタンパク質18.5gもしっかり摂れます。価格も400円前後とコスパ抜群。
          </p>

          <NutritionCard
            name="リンガーハット 長崎ちゃんぽん（麺半分）"
            calories={390}
            protein={20.0}
            fat={12.0}
            carbs={45.0}
          />

          <p className="mb-4">
            リンガーハットの<Marker color="blue">麺半分オプション（390kcal）</Marker>は野菜たっぷりでタンパク質20g。麺を半分にすることで糖質を大幅カットしながら、野菜480gで食物繊維とビタミンを豊富に摂取できます。
          </p>

          <WarningBox title="ダイエット中に避けるべきラーメン">
            <ul className="space-y-2">
              <li><span className="font-bold">天下一品 こってり（799kcal / F42g）</span> ─ 脂質42gはダイエット中の1食分としては多すぎ。どうしても行くなら「あっさり」を選択。</li>
              <li><span className="font-bold">ラーメン二郎 小ラーメン（約1,400kcal）</span> ─ 1杯で1日分のカロリーに迫る。「野菜マシ」でも焼け石に水。</li>
              <li><span className="font-bold">つけ麺（特盛）（800〜1,000kcal）</span> ─ 麺量が多くなるため、カロリーが跳ね上がる。並盛でも650kcal前後。</li>
            </ul>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&h=400&fit=crop" alt="チェーン店のラーメン" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ラーメンチェーンのカロリーを比較"
          subtitle="たべなびなら日高屋・幸楽苑・リンガーハットの栄養成分をすぐにチェック"
        />

        {/* Section 3: 太らない食べ方 */}
        <section className="mb-16">
          <SectionHeading id="how-to-eat">ラーメンを食べても太らない5つの方法</SectionHeading>

          <p className="mb-4">
            ラーメンを完全に我慢するのはストレスの原因。<Marker>賢い食べ方を知っていれば、ダイエット中でもラーメンを楽しめます</Marker>。以下の5つの方法を実践すれば、ラーメン1杯のカロリーを大幅にカットできます。
          </p>

          <NumberedList
            items={[
              {
                title: "スープは残す（-150〜250kcal）",
                body: "最も効果的なカロリーカット法。ラーメンのスープには脂質と塩分が凝縮されており、全部飲むと150〜250kcalを余分に摂取することになります。「麺と具だけ食べてスープは残す」を徹底するだけで、豚骨ラーメンでも500kcal台に抑えられます。塩分の過剰摂取によるむくみも防げて一石二鳥です。",
              },
              {
                title: "麺少なめ・替え玉なし（-100〜150kcal）",
                body: "ラーメンの麺1玉は約300kcal。麺少なめ（0.5玉）にすれば約150kcalのカット。替え玉（+300kcal）は絶対に避けましょう。リンガーハットの「麺半分」オプションのように、チェーン店では麺量の調整に対応してくれるところが増えています。",
              },
              {
                title: "トッピングはタンパク質系を選ぶ",
                body: "チャーシュー（約80kcal/2枚）、味玉（約80kcal）はタンパク質が豊富。一方、バター（約70kcal）やコーン（約50kcal）は糖質・脂質が増えるだけ。トッピングを選ぶなら「煮卵」か「チャーシュー」が正解です。",
              },
              {
                title: "あっさり系の味を選ぶ",
                body: "塩ラーメン（470kcal）と豚骨味噌ラーメン（750kcal）では280kcalの差。同じ1杯なら、塩か醤油のあっさり系を選ぶだけで大きなカロリーダウン。こってり系が好きな方は、頻度を月1〜2回に制限するのがおすすめです。",
              },
              {
                title: "前後の食事で調整する",
                body: "ラーメンを食べる日は、前後の食事を軽めに。昼にラーメン（500kcal）を食べるなら、朝食を300kcal、夕食を500kcalに抑えて1日1,300kcalに。ラーメンの日の夕食はサラダチキン+サラダ（約200kcal）のような高タンパク・低カロリーメニューがベストです。",
              },
            ]}
          />

          <SubSectionHeading>食べ方によるカロリー差シミュレーション</SubSectionHeading>

          <ComparisonTable
            headers={["食べ方", "豚骨ラーメンの場合", "カット量"]}
            rows={[
              ["そのまま全部食べる", "650 kcal", "---"],
              ["スープ残す", "450 kcal", "-200 kcal"],
              ["スープ残す + 麺少なめ", "300 kcal", "-350 kcal"],
              ["スープ残す + 麺少なめ + 味玉追加", "380 kcal", "-270 kcal"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            驚くべきことに、<Marker color="blue">スープを残して麺を半分にするだけで、豚骨ラーメンが300kcal</Marker>まで下がります。これはコンビニおにぎり2個分以下のカロリー。味玉を追加してもたった380kcalで、タンパク質もしっかり確保できます。
          </p>

          <TipBox title="ラーメンを食べる頻度の目安">
            <p>ダイエット中のラーメンは<Marker>週1回まで</Marker>が理想。上記の食べ方を守れば、週1回のラーメンがダイエットの妨げになることはほぼありません。完全に我慢するよりも、ルールを決めて楽しむ方が長続きします。</p>
          </TipBox>
        </section>

        {/* Section 4: 代替案 */}
        <section className="mb-16">
          <SectionHeading id="alternatives">ラーメンの代替メニュー：低カロリーで満足できる麺類</SectionHeading>

          <p className="mb-4">
            「ラーメンが食べたいけどカロリーが気になる」という日は、<Marker>代替メニューで麺欲を満たす</Marker>のも賢い選択です。
          </p>

          <NutritionTable
            items={[
              { name: "かけうどん（丸亀製麺）", calories: 305, protein: 8.5, fat: 1.5, carbs: 63.0, highlight: true },
              { name: "タンメン（日高屋）", calories: 490, protein: 20.0, fat: 12.0, carbs: 68.0, highlight: true },
              { name: "長崎ちゃんぽん麺半分（リンガーハット）", calories: 390, protein: 20.0, fat: 12.0, carbs: 45.0, highlight: true },
              { name: "ざるそば（一般的）", calories: 350, protein: 12.0, fat: 2.0, carbs: 68.0 },
              { name: "フォー（一般的）", calories: 380, protein: 15.0, fat: 5.0, carbs: 62.0 },
              { name: "春雨スープ（コンビニ）", calories: 150, protein: 3.0, fat: 2.0, carbs: 30.0 },
            ]}
          />

          <SubSectionHeading>タンメンはラーメンの上位互換</SubSectionHeading>

          <p className="mb-4">
            日高屋の<Marker color="blue">タンメン（490kcal / P20g）</Marker>は野菜たっぷりで食物繊維が豊富。通常のラーメンと比べて野菜量が約2〜3倍で、食べごたえがありながらカロリーは控えめです。スープもあっさり塩味ベースで脂質12gと低め。
          </p>

          <p className="mb-4">
            「ラーメンの代わりに何を食べよう」と迷ったら、<Marker>タンメンかちゃんぽん（麺半分）</Marker>を選べば、麺の満足感を保ちながらカロリーと栄養バランスを両立できます。
          </p>

          <SubSectionHeading>コンビニの低カロリー麺類</SubSectionHeading>

          <p className="mb-4">
            コンビニにも優秀な低カロリー麺類があります。特に<Marker>春雨スープ（約150kcal）</Marker>はラーメン欲を手軽に満たせる救世主。糖質も30g程度と控えめで、夜食にも最適です。
          </p>

          <ComparisonTable
            headers={["代替メニュー", "カロリー", "メリット", "デメリット"]}
            rows={[
              ["タンメン", "490 kcal", "野菜たっぷり・高タンパク", "やや塩分高め"],
              ["ちゃんぽん（麺半分）", "390 kcal", "野菜480g・P20g", "店舗が限られる"],
              ["かけうどん", "305 kcal", "最低カロリー・低脂質", "タンパク質が少ない"],
              ["春雨スープ", "150 kcal", "超低カロリー・手軽", "満足感は低め"],
            ]}
            bestRowIndex={1}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1552611052-33e04de1b100?w=800&h=400&fit=crop" alt="野菜たっぷりのタンメン" />

          <TipBox title="つけ麺の注意点">
            <p>つけ麺は「スープを残しやすいからヘルシー」と思われがちですが、実は<Marker>麺の量が通常のラーメンの1.5〜2倍</Marker>あることが多いです。並盛でも麺だけで450kcal前後。つけ麺を食べるなら必ず「麺少なめ」で注文しましょう。</p>
          </TipBox>
        </section>

        <AffiliateProductGrid
          title="ラーメン欲を抑える低糖質アイテム"
          productIds={["low-carb-noodle", "konjac-rice", "miso-soup-pack", "myprotein-impact"]}
        />

        {/* Section 5: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            ラーメンはダイエット中でも食べてOK。味の選び方と食べ方の工夫で、カロリーを大幅にコントロールできます。
          </p>

          <CheckList
            items={[
              "塩・醤油ラーメン（470〜500kcal）を選び、豚骨・家系は控える",
              "スープを残すだけで150〜250kcalカット（最重要ルール）",
              "麺少なめ + スープ残しで豚骨ラーメンも300kcalに",
              "チェーン店なら日高屋の中華そば（430kcal）がベスト",
              "リンガーハットの麺半分ちゃんぽん（390kcal）は野菜も摂れて優秀",
              "ラーメンの頻度は週1回まで、前後の食事で1日のカロリーを調整する",
              "代替案としてタンメン・うどん・春雨スープも活用する",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトおよび一般的な推計値をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="ラーメンチェーンのカロリーを簡単比較"
          subtitle="たべなびなら日高屋・幸楽苑・リンガーハットの栄養成分をまとめてチェック"
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="ramen-diet" />

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