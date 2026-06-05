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
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】大戸屋ダイエットガイド｜定食の選び方とおすすめ低カロリーメニュー | たべなび",
  description:
    "大戸屋の低カロリー定食ランキング、五穀米変更のコツ、ダイエット中におすすめの定食メニューを徹底解説。手作り定食で健康的に痩せる方法がわかります。",
  keywords: [
    "大戸屋 ダイエット",
    "大戸屋 カロリー",
    "大戸屋 低カロリー",
    "大戸屋 定食 ダイエット",
    "大戸屋 五穀米",
  ],
  openGraph: {
    title: "【2026年最新】大戸屋ダイエットガイド｜定食の選び方とおすすめ低カロリーメニュー",
    description:
      "大戸屋の低カロリー定食ランキング、五穀米変更のコツ、ダイエット中におすすめの定食メニューを徹底解説。",
    url: "https://www.tabenavi.jp/guide/ootoya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】大戸屋ダイエットガイド｜定食の選び方とおすすめ低カロリーメニュー",
  description:
    "大戸屋の低カロリー定食ランキング、五穀米変更のコツ、ダイエット中におすすめの定食メニューを徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/ootoya-diet",
};

const tocItems = [
  { id: "why-ootoya", label: "大戸屋がダイエットに最適な理由" },
  { id: "calorie-ranking", label: "カロリーランキング（低い順）" },
  { id: "recommended", label: "おすすめメニュー" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function OotoyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="大戸屋ダイエットガイド"
        subtitle="定食の選び方とおすすめ低カロリーメニュー【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="大戸屋ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="ootoya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          大戸屋は「手作り定食」をコンセプトに掲げる定食チェーンで、<Marker>ダイエット中の外食先として非常に優秀</Marker>です。店内調理にこだわり、化学調味料を極力使わない姿勢は、健康志向の高い方から支持されています。
        </p>
        <p className="mb-4">
          特に注目すべきは<Marker>白米を五穀米に無料で変更できる</Marker>点。食物繊維やミネラルが豊富な五穀米に切り替えるだけで、血糖値の急上昇を抑え、腹持ちも良くなります。さらに、焼き魚定食やチキン定食など、高タンパク・低脂質なメニューが充実しています。
        </p>
        <p className="mb-4">
          この記事では、大戸屋のメニューをカロリー順にランキングし、ダイエット中の最適な注文方法を詳しく解説します。
        </p>
        <p className="mb-8">
          「外食＝太る」というイメージを覆す、大戸屋の賢い活用法をぜひマスターしてください。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: 大戸屋がダイエットに最適な理由 */}
        <section className="mb-16">
                  <QuickAnswer
          question={"大戸屋でダイエット向きのメニューは何ですか？"}
          answer={"大戸屋でダイエットに最適なのは低カロリーメニューです。しまほっけの炭火焼き定食（642kcal・タンパク質36.8g）が最もおすすめ。白米を五穀米に無料変更し、ご飯を少なめにすることで、カロリーをさらに削減。焼き魚・蒸し鶏・煮メニューを選び、揚げ物を避けることが成功の鍵です。"}
        />

        <SectionHeading id="why-ootoya">大戸屋がダイエットに最適な理由</SectionHeading>

          <p className="mb-4">
            数ある外食チェーンの中でも、大戸屋がダイエットに向いている理由は大きく3つあります。
          </p>

          <NumberedList
            items={[
              {
                title: "手作り定食で栄養バランスが整う",
                body: "大戸屋の定食は主菜・副菜・味噌汁・ご飯がセットになっており、一食で必要な栄養素をバランスよく摂取できます。コンビニ弁当や丼もの単品と違い、食物繊維やビタミンも自然と補えます。",
              },
              {
                title: "五穀米への無料変更が可能",
                body: "白米を五穀米に変更すると、食物繊維が約2倍に。GI値も白米（88）に対して五穀米（55前後）と大幅に低く、血糖値の急上昇を抑えて脂肪の蓄積を防げます。",
              },
              {
                title: "焼き魚・蒸し鶏など低脂質メニューが豊富",
                body: "揚げ物に頼らず、焼き・蒸し・煮るといった調理法のメニューが充実。脂質を抑えながら良質なタンパク質を摂取できるのは大戸屋ならではの強みです。",
              },
            ]}
          />

          <TipBox title="大戸屋の「手作り」は本当？">
            <p>大戸屋は店内に調理場を持ち、注文を受けてから調理する「手作りスタイル」を採用。<Marker>冷凍食品の温め直しではなく、素材から調理している</Marker>ため、添加物や余分な油を控えた健康的な食事が期待できます。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" alt="バランスの取れた和定食のイメージ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">大戸屋カロリーランキング（低い順）</SectionHeading>

          <p className="mb-4">
            大戸屋の主要定食メニューをカロリーの低い順に並べました。<Marker color="blue">焼き魚定食や蒸し鶏系は600kcal台と低カロリー</Marker>で、揚げ物系でも800kcal前後に収まるメニューが多いのが特徴です。
          </p>

          <NutritionTable
            items={[
              { name: "しまほっけの炭火焼き定食", calories: 642, protein: 36.8, fat: 18.5, carbs: 78.2, highlight: true },
              { name: "さばの炭火焼き定食", calories: 668, protein: 32.5, fat: 24.8, carbs: 74.5, highlight: true },
              { name: "蒸し鶏と野菜のせいろ蒸し定食", calories: 685, protein: 34.2, fat: 16.8, carbs: 82.5 },
              { name: "鶏と野菜の黒酢あん定食", calories: 752, protein: 32.5, fat: 22.4, carbs: 94.8 },
              { name: "チキンかあさん煮定食", calories: 804, protein: 40.2, fat: 28.5, carbs: 86.4 },
              { name: "大戸屋風チキン南蛮定食", calories: 892, protein: 35.8, fat: 38.2, carbs: 95.6 },
              { name: "ロースかつ定食", calories: 948, protein: 32.4, fat: 42.5, carbs: 98.2 },
              { name: "四元豚のロースかつ定食", calories: 985, protein: 34.8, fat: 45.2, carbs: 96.8 },
              { name: "鶏と野菜の黒酢あん（大盛り）", calories: 1024, protein: 38.5, fat: 28.8, carbs: 132.5 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は「ご飯普通盛り」での値です。五穀米変更時はカロリーがほぼ同等ですがGI値が低下します。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>注目すべきは<Marker>焼き魚定食（642〜668kcal）とフライ系定食（892〜985kcal）の間に約300kcalの差がある</Marker>点。調理法の違いだけでこれだけの差が出ます。ダイエット中は「焼き」「蒸し」「煮」を選ぶのが鉄則です。</p>
          </TipBox>

          <SubSectionHeading>PFCバランスで見る大戸屋メニューの特徴</SubSectionHeading>
          <p className="mb-4">
            大戸屋のメニューは全体的に<Marker color="green">タンパク質が30g以上のメニューが多い</Marker>のが特徴です。定食スタイルなので炭水化物（ご飯）は含まれますが、ご飯の量を調整すれば糖質コントロールも可能。脂質は調理法で大きく変わるため、メニュー選びが重要になります。
          </p>
          <p className="mb-8">
            特に焼き魚系は<Marker>DHA・EPAなどのオメガ3脂肪酸を含む「良い脂質」</Marker>が摂れる点も魅力。単にカロリーだけでなく、脂質の質まで考慮すると、しまほっけやさばの炭火焼きは最もダイエットに適したメニューと言えます。
          </p>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中におすすめの大戸屋メニュー</SectionHeading>

          <p className="mb-6">
            大戸屋のメニューの中から、<Marker>カロリーとタンパク質のバランスが特に優れたメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="しまほっけの炭火焼き定食" subtitle="642kcal / P36.8g / F18.5g / C78.2g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              大戸屋の<Marker>低カロリーNo.1定食</Marker>。しまほっけは脂質が低く、DHAやEPAなどの良質な脂肪酸を含む優秀な食材です。タンパク質36.8gと高く、脂質はわずか18.5g。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              定食としての完成度が高く、味噌汁と小鉢で野菜やミネラルも補えます。五穀米に変更すれば、さらに栄養価がアップします。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="チキンかあさん煮定食" subtitle="804kcal / P40.2g / F28.5g / C86.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              大戸屋の看板メニューであり、<Marker color="blue">タンパク質40.2gはトップクラス</Marker>。鶏むね肉を揚げてから出汁で煮るスタイルで、揚げ物でありながら煮汁で余分な油が落ちるため、脂質は28.5gと控えめ。大根おろしでさっぱりと食べられます。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="鶏と野菜の黒酢あん定食" subtitle="752kcal / P32.5g / F22.4g / C94.8g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">野菜がたっぷり摂れる</Marker>のがこのメニューの最大の魅力。黒酢のクエン酸は疲労回復効果もあり、トレーニング後の食事にも適しています。タンパク質32.5gで脂質22.4gとバランスの良い一品です。
            </p>
          </RankingCard>

          <SubSectionHeading>その他おすすめメニュー</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <NutritionCard
              name="さばの炭火焼き定食"
              chain="大戸屋"
              calories={668}
              protein={32.5}
              fat={24.8}
              carbs={74.5}
              recommended
            />
            <NutritionCard
              name="蒸し鶏と野菜のせいろ蒸し定食"
              chain="大戸屋"
              calories={685}
              protein={34.2}
              fat={16.8}
              carbs={82.5}
              recommended
            />
          </div>

          <p className="mb-4">
            さばの炭火焼きは<Marker>EPA・DHAが豊富で、血液サラサラ効果</Marker>も期待できます。蒸し鶏定食は脂質わずか16.8gと、大戸屋メニューの中でも最も脂質が低い選択肢。蒸し料理は素材の栄養を逃さず、余分な油も使わないため、ダイエット中の理想的な調理法です。
          </p>

          <p className="mb-8">
            どちらのメニューも<Marker color="blue">五穀米に変更し、ご飯少なめ</Marker>にすることで、さらに50〜100kcalのカットが可能。定番のローテーションメニューとして活用しましょう。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="焼き魚定食のイメージ写真" />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="大戸屋のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            大戸屋は全体的にヘルシーですが、<Marker>揚げ物系やタレが濃いメニューはカロリーが高め</Marker>。特に以下のメニューには注意が必要です。
          </p>

          <WarningBox title="ダイエット中は要注意なメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">四元豚のロースかつ定食（985kcal）</span> ─ 脂質45.2gとかなり高め。タンパク質34.8gは魅力的だが、カロリーが高すぎます。</li>
              <li><span className="font-bold">ロースかつ定食（948kcal）</span> ─ 衣の吸油量が多く、脂質42.5g。同じ豚肉なら生姜焼き系を選びましょう。</li>
              <li><span className="font-bold">大戸屋風チキン南蛮定食（892kcal）</span> ─ タルタルソースが脂質を押し上げ、F38.2g。チキンかあさん煮（804kcal）の方が約90kcal低い。</li>
              <li><span className="font-bold">大盛りメニュー全般</span> ─ ご飯大盛りで+約150kcal。ダイエット中は普通盛りか少なめを選びましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "判定"]}
            rows={[
              ["しまほっけ定食", "642 kcal", "36.8g", "18.5g", "◎"],
              ["チキンかあさん煮", "804 kcal", "40.2g", "28.5g", "○"],
              ["チキン南蛮定食", "892 kcal", "35.8g", "38.2g", "△"],
              ["ロースかつ定食", "948 kcal", "32.4g", "42.5g", "×"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="「揚げ物だけど煮る」がポイント">
            <p>チキンかあさん煮は揚げた鶏肉を出汁で煮るため、<Marker>揚げ物の衣に含まれる油が煮汁に溶け出し、実質的な脂質が下がります</Marker>。同じ揚げ鶏でもチキン南蛮（F38.2g）とかあさん煮（F28.5g）では約10gの差。この「煮る」工程が大戸屋独自のヘルシーポイントです。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop" alt="ヘルシーな和食プレートのイメージ" />
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">大戸屋で痩せるための食べ方のコツ</SectionHeading>

          <p className="mb-6">
            大戸屋の定食をさらにダイエット向きにするための<Marker>実践テクニック</Marker>を紹介します。
          </p>

          <SubSectionHeading>コツ1：白米を五穀米に変更する</SubSectionHeading>
          <p className="mb-6">
            大戸屋では<Marker color="blue">白米を五穀米に無料で変更可能</Marker>。五穀米はGI値が低く、血糖値の急上昇を防ぎます。食物繊維も豊富なため、満腹感が持続しやすく間食を防ぐ効果も。カロリーはほぼ同じですが、ダイエット効果は大きく異なります。
          </p>

          <SubSectionHeading>コツ2：ご飯は「少なめ」で注文する</SubSectionHeading>
          <p className="mb-6">
            ご飯の量を少なめにすると<Marker>約80〜100kcalカット</Marker>できます。定食のおかずはしっかりとした味付けなので、ご飯が少なくても十分満足できます。五穀米 + 少なめの組み合わせが最強です。
          </p>

          <SubSectionHeading>コツ3：味噌汁から先に食べる</SubSectionHeading>
          <p className="mb-6">
            定食の味噌汁を最初に飲むことで胃が温まり、満腹中枢が早く刺激されます。次にサラダや副菜を食べ、最後にメインとご飯に取りかかる「ベジファースト」を実践しましょう。
          </p>

          <SubSectionHeading>コツ4：「焼き」「蒸し」「煮」メニューを選ぶ</SubSectionHeading>
          <p className="mb-6">
            揚げ物を避け、<Marker color="green">焼き魚定食・蒸し鶏定食・煮魚定食</Marker>を選ぶだけで脂質を大幅にカットできます。同じ鶏肉でもチキン南蛮（F38.2g）とチキンかあさん煮（F28.5g）では約10gの差があります。
          </p>

          <SubSectionHeading>コツ5：おすすめの組み合わせパターン</SubSectionHeading>
          <p className="mb-4">
            大戸屋で特におすすめの注文パターンをまとめました。目的に合わせて使い分けましょう。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめ定食", "カロリー", "タンパク質"]}
            rows={[
              ["最小カロリー", "しまほっけ定食（五穀米・少なめ）", "約560 kcal", "36.8g"],
              ["高タンパク", "チキンかあさん煮定食（五穀米）", "804 kcal", "40.2g"],
              ["バランス重視", "鶏と野菜の黒酢あん定食（五穀米）", "752 kcal", "32.5g"],
              ["低脂質", "蒸し鶏と野菜のせいろ蒸し定食", "685 kcal", "34.2g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-8">
            いずれのパターンも<Marker>五穀米に変更し、味噌汁→副菜→メインの順で食べる</Marker>ことで、ダイエット効果を最大化できます。週に2〜3回通う方は、ローテーションで飽きを防ぎましょう。
          </p>

          <TipBox title="ランチタイムの裏技">
            <p>大戸屋のランチメニューは定食にサラダがセットになることが多く、<Marker>通常より野菜を多く摂れるチャンス</Marker>です。ランチ限定の低カロリーセットも見逃さないようにしましょう。</p>
          </TipBox>

          <WarningBox title="「ご飯おかわり無料」の罠">
            <p>一部の大戸屋店舗ではご飯おかわり無料のサービスがあります。しかし<Marker>ご飯1杯追加で約250kcal・炭水化物55g</Marker>の上乗せに。せっかく低カロリーなメニューを選んでも、おかわりで台無しになります。「少なめ1杯」で十分です。</p>
          </WarningBox>

          <ArticleImage src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=800&h=400&fit=crop" alt="五穀米と和食のイメージ" />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="たべなびで外食の栄養管理を始めよう"
          subtitle="20チェーン・500メニューの栄養データ、全部無料"
        />

        {/* Extra Image */}
        <ArticleImage src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop" alt="彩り豊かな和食プレートのイメージ" />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-4">
            大戸屋はダイエット中の外食先として最適なチェーンの一つです。手作り定食の栄養バランス、五穀米への無料変更、焼き魚・蒸し鶏の低脂質メニューが揃っている点は、他チェーンにはない大きな強みです。
          </p>
          <p className="mb-6">
            この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "しまほっけ定食（642kcal/P36.8g）が低カロリーNo.1でおすすめ",
              "チキンかあさん煮定食（804kcal/P40.2g）はタンパク質トップクラス",
              "白米→五穀米の変更は無料。GI値が下がり脂肪蓄積を防げる",
              "ご飯少なめで約80〜100kcalカット可能",
              "「焼き」「蒸し」「煮」を選び、揚げ物は避ける",
              "味噌汁→副菜→メイン→ご飯の順で食べるとダイエット効果アップ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報は大戸屋公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="ootoya-diet"
          items={[
            { q: "大戸屋の白米を五穀米に変更するメリットは何ですか？", a: "五穀米は白米（GI値88）より低GI値（55程度）で、血糖値の急上昇を抑えます。食物繊維も約2倍で満腹感が続き、間食を防げます。カロリーはほぼ同等ですが、ダイエット効果が大きく異なります。" },
            { q: "大戸屋の定食でダイエット中に避けるべきメニューは？", a: "四元豚ロースかつ定食（985kcal・脂質45.2g）、通常ロースかつ定食（948kcal）、チキン南蛮定食（892kcal・脂質38.2g）は高脂質。大盛りメニューも+150kcal増加するため避けましょう。" },
            { q: "大戸屋の定食でご飯を少なめにするとカロリーは何kcal減りますか？", a: "ご飯少なめで約80～100kcalをカットできます。五穀米への変更と組み合わせると、しまほっけ定食は約560kcalまで低下。同じメニューでも注文方法で大きな差が生まれます。" },
            { q: "チキンかあさん煮定食がダイエット向きなのはなぜですか？", a: "揚げた鶏肉を出汁で煮るため、衣の油が煮汁に落ちます。804kcal・タンパク質40.2gで、同じ揚げ鶏のチキン南蛮（38.2g脂質）より脂質が10g少ない設計です。大戸屋独自のヘルシーメニューです。" },
            { q: "大戸屋でダイエット中の食べる順序のコツはありますか？", a: "味噌汁→副菜→メイン→ご飯の順が理想的。味噌汁で胃を温め、野菜から食べることで血糖値上昇を抑え、満腹中枢が早く刺激されます。ベジファーストの実践がダイエット効果を最大化します。" },
          ]}
        />

        <ArticleFooter currentSlug="ootoya-diet" />

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
