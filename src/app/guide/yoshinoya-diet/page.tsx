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
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。牛丼を食べながら痩せるコツがわかります。",
  keywords: [
    "吉野家 ダイエット",
    "吉野家 カロリー",
    "吉野家 低カロリー",
    "ライザップ牛サラダ",
    "吉野家 太らない",
  ],
  openGraph: {
    title: "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/yoshinoya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】吉野家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "吉野家のカロリー低い順ランキング、ライザップ牛サラダなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/yoshinoya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "size-comparison", label: "サイズ別カロリー比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function YoshinoyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="吉野家でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="吉野家ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="yoshinoya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中に牛丼は食べていいの？」――これは多くのダイエッターが抱える疑問です。結論から言えば、<Marker>メニューの選び方とサイズの工夫で吉野家は十分にダイエット向き</Marker>です。
        </p>
        <p className="mb-4">
          吉野家には<Marker color="blue">ライザップ牛サラダ（398kcal/P28g）</Marker>という低カロリー高タンパクの優秀メニューがあり、牛丼のご飯を抜いた牛皿（248kcal）も活用できます。一方で牛丼の特盛は929kcalと高カロリー。選び方次第で大きな差が出ます。
        </p>
        <p className="mb-8">
          この記事では、吉野家の全メニューをカロリー低い順にランキングし、ダイエットに最適なメニューやサイズ選びのコツを詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="美味しそうな牛丼のイメージ写真" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">吉野家メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            吉野家の主要メニューをカロリーの低い順に並べました。ダイエット中は<Marker color="blue">400kcal以下のメニュー</Marker>を中心に選ぶのがポイントです。
          </p>

          <NutritionTable
            items={[
              { name: "牛皿（並盛）", calories: 248, protein: 14.8, fat: 17.5, carbs: 5.8, highlight: true },
              { name: "ライザップ牛サラダ", calories: 398, protein: 28.0, fat: 24.5, carbs: 17.2, highlight: true },
              { name: "牛丼（小盛）", calories: 488, protein: 16.2, fat: 17.8, carbs: 63.5 },
              { name: "から揚げ丼（並盛）", calories: 594, protein: 22.5, fat: 17.8, carbs: 85.2 },
              { name: "牛丼（並盛）", calories: 635, protein: 20.0, fat: 20.4, carbs: 89.0 },
              { name: "豚丼（並盛）", calories: 656, protein: 22.0, fat: 22.8, carbs: 89.5 },
              { name: "ねぎ玉牛丼（並盛）", calories: 731, protein: 25.2, fat: 28.5, carbs: 92.0 },
              { name: "牛丼（大盛）", calories: 846, protein: 27.6, fat: 28.0, carbs: 118.4 },
              { name: "牛丼（特盛）", calories: 929, protein: 32.8, fat: 32.5, carbs: 126.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は吉野家公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="カロリーランキングのポイント">
            <p><Marker>牛皿（248kcal）とライザップ牛サラダ（398kcal）</Marker>がダイエット向きの2大メニュー。ご飯なしの牛皿はタンパク質14.8gを低カロリーで摂取でき、ライザップ牛サラダは野菜もたっぷり。この2つを覚えておけば安心です。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーだけでなく<Marker>PFCバランス（タンパク質・脂質・炭水化物）</Marker>と満足感を考慮した、吉野家のダイエット向けおすすめメニューを紹介します。
          </p>

          <RankingCard rank={1} title="ライザップ牛サラダ" subtitle="398kcal / P28.0g / F24.5g / C17.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              吉野家のダイエットメニューの大本命。RIZAPとのコラボ商品で、<Marker>398kcalながらタンパク質28g、糖質わずか17.2g</Marker>という驚異的な栄養バランスを実現しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              牛肉・半熟卵・ブロッコリー・キャベツが入っており、糖質制限ダイエットにも最適。ドレッシングはノンオイルを選ぶとさらにカロリーカットできます。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="牛皿（並盛）" subtitle="248kcal / P14.8g / F17.5g / C5.8g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">ご飯なしで248kcal、糖質わずか5.8g</Marker>。究極の低糖質メニューです。牛丼のご飯部分（約400kcal）をカットすることで大幅なカロリーダウンが可能。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              サラダやみそ汁と組み合わせれば、バランスの良い低糖質食の完成。糖質制限中の方には最もおすすめです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="牛丼（小盛）" subtitle="488kcal / P16.2g / F17.8g / C63.5g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「やっぱり牛丼が食べたい」という方におすすめなのが小盛。並盛（635kcal）から<Marker color="green">約150kcalのカロリーダウン</Marker>で、しっかり牛丼の満足感を得られます。ご飯もお肉も楽しみたい方に最適なサイズ感です。
            </p>
          </RankingCard>

          <SubSectionHeading>その他のおすすめメニュー</SubSectionHeading>

          <NutritionCard
            name="お新香"
            chain="吉野家"
            calories={15}
            protein={0.5}
            fat={0.1}
            carbs={3.2}
          />

          <p className="mb-4 mt-4">
            <Marker>わずか15kcal</Marker>のサイドメニュー。牛皿やライザップ牛サラダと組み合わせて、満足感をプラスするのに最適です。
          </p>

          <NutritionCard
            name="みそ汁"
            chain="吉野家"
            calories={27}
            protein={1.8}
            fat={1.0}
            carbs={2.5}
          />

          <p className="mb-8 mt-4">
            27kcalで体を温めてくれるみそ汁は、食事の最初に飲むことで満腹感を高める効果があります。牛皿+みそ汁で275kcalという低カロリーな組み合わせが可能です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop" alt="ヘルシーなサラダボウルのイメージ" />
        </section>

        {/* Section 3: サイズ別カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="size-comparison">牛丼のサイズ別カロリー比較</SectionHeading>

          <p className="mb-6">
            吉野家の牛丼はサイズによってカロリーが大きく異なります。<Marker>サイズ選びがそのままカロリー管理に直結する</Marker>ため、違いをしっかり把握しておきましょう。
          </p>

          <ComparisonTable
            headers={["サイズ", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["小盛", "488 kcal", "P 16.2g", "F 17.8g", "C 63.5g"],
              ["並盛", "635 kcal", "P 20.0g", "F 20.4g", "C 89.0g"],
              ["アタマの大盛", "745 kcal", "P 25.5g", "F 25.8g", "C 96.5g"],
              ["大盛", "846 kcal", "P 27.6g", "F 28.0g", "C 118.4g"],
              ["特盛", "929 kcal", "P 32.8g", "F 32.5g", "C 126.0g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="サイズ選びのコツ">
            <p>並盛から小盛に変えるだけで<Marker>約150kcalのカロリーカット</Marker>。物足りないと感じる場合は、牛皿を追加する「牛皿＋ミニ牛丼」方式にすると、タンパク質を増やしつつカロリーの総量を調整しやすくなります。</p>
          </TipBox>

          <p className="mb-4">
            また、<Marker color="blue">「アタマの大盛」はお肉多め・ご飯は並盛</Marker>というサイズ。ご飯の量を抑えつつ肉を増量できるため、タンパク質重視の方には並盛より賢い選択肢です。
          </p>

          <SubSectionHeading>吉野家 vs 他チェーンのサイズ比較</SubSectionHeading>

          <ComparisonTable
            headers={["チェーン", "最小サイズ", "カロリー", "タンパク質"]}
            rows={[
              ["吉野家（小盛）", "小盛", "488 kcal", "P 16.2g"],
              ["松屋（ミニ盛）", "ミニ盛", "380 kcal", "P 12.5g"],
              ["すき家（ミニ）", "ミニ", "496 kcal", "P 15.2g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            吉野家の小盛は488kcalで、松屋のミニ盛（380kcal）よりやや高め。ただし<Marker color="green">ライザップ牛サラダ（398kcal）やうな牛皿（248kcal）</Marker>など、ご飯を使わないダイエットメニューの選択肢が豊富なのが吉野家の強みです。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="吉野家のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            吉野家には高カロリーなメニューも多く存在します。<Marker>特にトッピングの追加やサイズアップは要注意</Marker>です。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛丼特盛（929kcal）</span> ─ 1食で1日の摂取カロリーの半分近く。タンパク質32.8gに対して炭水化物126gと糖質過多。</li>
              <li><span className="font-bold">ねぎ玉牛丼・並盛（731kcal）</span> ─ 並盛にトッピングが加わり脂質28.5g。卵と追加ソースでカロリーが跳ね上がります。</li>
              <li><span className="font-bold">牛丼大盛（846kcal）</span> ─ 並盛の約1.3倍のカロリー。ご飯の量が大幅に増え、炭水化物118.4gに。</li>
              <li><span className="font-bold">牛カルビ丼・並盛（827kcal）</span> ─ カルビ肉は脂質が非常に多く、脂質35.2gとトップクラス。</li>
              <li><span className="font-bold">月見牛とじ丼（780kcal）</span> ─ 卵とじで見た目はヘルシーですが、卵2個分と甘辛だしでカロリーが高め。</li>
            </ul>
          </WarningBox>

          <WarningBox title="トッピングの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">チーズ追加（+約80kcal）</span> ─ 脂質が大幅に増加。牛丼との相性は良いが、ダイエット中は控えましょう。</li>
              <li><span className="font-bold">キムチ追加（+約20kcal）</span> ─ カロリーは低めなので、追加するならこちらが安全。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">吉野家ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            メニュー選びに加えて、<Marker>注文の仕方や食べ方の工夫</Marker>でさらにカロリーを抑えることができます。
          </p>

          <NumberedList
            items={[
              {
                title: "牛皿+みそ汁で低糖質セットに",
                body: "牛皿（248kcal）+みそ汁（27kcal）=合計275kcal。ご飯を完全にカットすることで、糖質をわずか8.3gに抑えられます。糖質制限ダイエット中の方に最もおすすめの注文法です。",
              },
              {
                title: "小盛を活用してご飯を減らす",
                body: "並盛から小盛にするだけで約150kcalカット。「ご飯少なめ」と口頭で伝えるよりも確実にカロリーを抑えられます。物足りなさは牛皿の追加で調整しましょう。",
              },
              {
                title: "ライザップ牛サラダを活用する",
                body: "398kcalでタンパク質28g、糖質17.2gという理想的な栄養バランス。ランチで糖質を控えたい時にぴったりです。ドレッシングは別添えにして量を調節するのがコツ。",
              },
              {
                title: "紅生姜をたっぷり活用",
                body: "紅生姜はほぼ0kcalで味にアクセントを加えてくれます。少ない量のご飯でも満足感が得られる上、生姜の成分が代謝アップにも貢献。無料トッピングなので積極的に使いましょう。",
              },
              {
                title: "つゆだくは避ける",
                body: "つゆだくにするとご飯がつゆを吸って実質的にカロリーアップ。また、塩分も増えてむくみの原因に。「つゆ少なめ」がダイエット的にはベストです。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの取れた食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛皿 + みそ汁 + お新香", "290 kcal", "P 17.1g"],
              ["バランス型", "ライザップ牛サラダ + みそ汁", "425 kcal", "P 29.8g"],
              ["満足型", "牛丼小盛 + みそ汁", "515 kcal", "P 18.0g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            <Marker color="green">バランス型の「ライザップ牛サラダ+みそ汁」は425kcalでP29.8g</Marker>と、ダイエット中の昼食として理想的。野菜も牛肉もしっかり摂れて、午後のエネルギーも十分に補給できます。
          </p>

          <SubSectionHeading>PFCバランスで見る吉野家メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットではカロリーだけでなく、<Marker>PFC（タンパク質・脂質・炭水化物）の比率</Marker>が重要です。目的別に最適なメニューを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "P/F/C比率", "ポイント"]}
            rows={[
              ["糖質制限", "牛皿（並盛）", "P24%/F63%/C13%", "糖質5.8gと超低糖質"],
              ["ローファット", "ライザップ牛サラダ", "P40%/F35%/C25%", "脂質控えめ高タンパク"],
              ["バランス型", "牛丼（小盛）", "P13%/F15%/C72%", "無理なく続けられる"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            糖質制限なら牛皿、ローファットならライザップ牛サラダ、カロリー制限ならわら牛丼小盛と、<Marker color="blue">ダイエットの方針によって最適なメニューが変わります</Marker>。自分のダイエット方針に合ったメニューを選びましょう。
          </p>

          <TipBox title="1日の食事プランに組み込むコツ">
            <p>吉野家を昼食に利用する場合、ライザップ牛サラダ（398kcal）を選べば、1日の総カロリー1,600kcalの場合でも朝・夕食に各600kcal使えます。<Marker>外食1食を400kcal以下に抑える</Marker>ことで、他の食事の自由度が格段に上がります。</p>
          </TipBox>
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            吉野家はメニュー選びを工夫するだけで、ダイエット中でも安心して利用できます。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "ライザップ牛サラダ（398kcal/P28g）がダイエットの大本命メニュー",
              "牛皿（248kcal）+みそ汁で糖質制限にも対応可能",
              "牛丼は小盛を選ぶだけで約150kcalカット",
              "トッピング追加やサイズアップに注意。特盛は929kcalに",
              "紅生姜を活用し、つゆだくは避けるのがダイエットのコツ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は吉野家公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="yoshinoya-diet" />

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
