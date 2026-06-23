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
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/ootoya-diet" },
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
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年6月19日</p>

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
          answer={"大戸屋でダイエット向きなのは、脂質が低く高タンパクなメニューです。大戸屋ばくだん丼（568kcal・タンパク質28.8g・脂質12.0g）、しまほっけの炭火焼き（612kcal・タンパク質45.5g・脂質13.1g）、豚ヒレの冷しゃぶ おろし柚香だれ（627kcal・脂質わずか8.0g）が特におすすめ。白米を五穀米に無料変更し、ご飯を少なめにするとさらに削減できます。チキン南蛮やかつ系の揚げ物は脂質が高いので頻度を抑えましょう。"}
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
                body: "白米を五穀米に変更すると、食物繊維をより多く摂取できます。GI値も白米（88）に対して五穀米（55前後）と低めで、血糖値の急上昇が穏やかになりやすいとされています。",
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
            大戸屋の主菜メニューをカロリーの低い順に並べました。<Marker color="blue">丼・焼き魚系は500〜700kcal台と低カロリー</Marker>な一方、揚げ物系（チキン南蛮など）は900〜1,300kcalと高めで、選ぶメニュー次第でカロリーが倍近く変わります。
          </p>

          <NutritionTable
            items={[
              { name: "大戸屋ばくだん丼", calories: 568, protein: 28.8, fat: 12.0, carbs: 83.6, highlight: true },
              { name: "しまほっけの炭火焼き", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
              { name: "豚ヒレの冷しゃぶ おろし柚香だれ", calories: 627, protein: 42.3, fat: 8.0, carbs: 97.7, highlight: true },
              { name: "鰹の梅はさみ揚げ", calories: 672, protein: 27.6, fat: 19.2, carbs: 96.9 },
              { name: "鰆の西京焼き 菜の花からし和え添え", calories: 699, protein: 40.5, fat: 17.8, carbs: 94.5 },
              { name: "さばの味噌煮", calories: 739, protein: 36.9, fat: 26.9, carbs: 85.1 },
              { name: "さばの炭火焼き", calories: 870, protein: 35.9, fat: 47.4, carbs: 79.7 },
              { name: "チキンかあさん煮", calories: 897, protein: 29.5, fat: 32.2, carbs: 118.8 },
              { name: "鶏と野菜の黒酢あん", calories: 952, protein: 27.5, fat: 33.5, carbs: 135.3 },
              { name: "大戸屋風チキン南蛮", calories: 1283, protein: 44.1, fat: 70.8, carbs: 109.6 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はたべなび収録のDB値（ご飯を含む定食・丼の値）です。五穀米変更時はカロリーがほぼ同等で、最新値は大戸屋公式でご確認ください。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>注目すべきは<Marker>丼・焼き魚系（568〜700kcal）と揚げ物系（870〜1,283kcal）の間に400〜700kcalもの差がある</Marker>点。調理法の違いでこれだけ差が出ます。意外なのは焼き魚でも<Marker color="blue">さばの炭火焼きは脂質47.4gと高め</Marker>な点。「焼き＝低脂質」とは限らないので、脂質を抑えたい日は魚種にも注目しましょう。</p>
          </TipBox>

          <SubSectionHeading>PFCバランスで見る大戸屋メニューの特徴</SubSectionHeading>
          <p className="mb-4">
            大戸屋のメニューは全体的に<Marker color="green">タンパク質が30g以上のメニューが多い</Marker>のが特徴です。定食スタイルなので炭水化物（ご飯）は含まれますが、ご飯の量を調整すれば糖質コントロールも可能。脂質は調理法で大きく変わるため、メニュー選びが重要になります。
          </p>
          <p className="mb-8">
            焼き魚系は<Marker>DHA・EPAなどのオメガ3脂肪酸を含む「良い脂質」</Marker>が摂れる点も魅力。特にしまほっけの炭火焼きは脂質13.1g・タンパク質45.5gと、低脂質・高タンパクの理想形です。ただし<Marker color="blue">同じ焼き魚でもさばの炭火焼きは脂質47.4gと高い</Marker>ため、総脂質を抑えたい日はしまほっけや豚ヒレの冷しゃぶを選ぶのがおすすめです。
          </p>
        </section>

        {/* Section 3: おすすめメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中におすすめの大戸屋メニュー</SectionHeading>

          <p className="mb-6">
            大戸屋のメニューの中から、<Marker>カロリーとタンパク質のバランスが特に優れたメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="しまほっけの炭火焼き" subtitle="612kcal / P45.5g / F13.1g / C79.3g">
            <MenuPhoto id="ootoya-shimahokke" />
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker>低カロリー・高タンパクの大戸屋No.1</Marker>。タンパク質45.5gは大戸屋メニュー屈指の多さで、脂質はわずか13.1g。しまほっけはDHA・EPAなどの良質な脂肪酸も含む優秀な食材です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              味噌汁と小鉢で野菜やミネラルも補え、定食としての完成度が高い一品。五穀米に変更すれば食物繊維もプラスできます。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="大戸屋ばくだん丼" subtitle="568kcal / P28.8g / F12.0g / C83.6g">
            <p className="text-sm text-gray-700 leading-relaxed">
              主菜の中で<Marker color="blue">最も低カロリー（568kcal）かつ脂質も12.0gと低い</Marker>一杯。まぐろ・オクラ・山芋などを合わせた丼で、タンパク質28.8gを確保しつつ脂質を抑えたい日に最適です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="豚ヒレの冷しゃぶ おろし柚香だれ" subtitle="627kcal / P42.3g / F8.0g / C97.7g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">脂質わずか8.0gは大戸屋の主菜で最も低い</Marker>水準。それでいてタンパク質42.3gと非常に高く、「低脂質・高タンパク」を最優先したい人の本命です。おろし柚香だれでさっぱり食べられます。
            </p>
          </RankingCard>

          <SubSectionHeading>その他おすすめメニュー</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <NutritionCard
              name="鰆の西京焼き 菜の花からし和え添え"
              chain="大戸屋"
              calories={699}
              protein={40.5}
              fat={17.8}
              carbs={94.5}
              recommended
            />
            <NutritionCard
              name="鰹の梅はさみ揚げ"
              chain="大戸屋"
              calories={672}
              protein={27.6}
              fat={19.2}
              carbs={96.9}
              recommended
            />
          </div>

          <p className="mb-4">
            鰆の西京焼きは<Marker>タンパク質40.5gと高く、脂質も17.8gと控えめ</Marker>。焼き魚ながら脂質が抑えられた優秀な一品で、青魚のDHA・EPAも摂れます。鰹の梅はさみ揚げは揚げ物の中では672kcalと比較的低カロリーで、梅でさっぱり食べられます。
          </p>

          <p className="mb-8">
            いずれも<Marker color="blue">五穀米に変更し、ご飯少なめ</Marker>にすることで、さらに約80〜100kcalのカットが可能。低脂質を最優先するなら、しまほっけ・豚ヒレの冷しゃぶ・鰆の西京焼きをローテーションするのがおすすめです。
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
              <li><span className="font-bold">大戸屋風チキン南蛮（1,283kcal）</span> ─ タルタルソースで脂質70.8gと突出。タンパク質44.1gは魅力的ですが、カロリー・脂質ともに高すぎます。</li>
              <li><span className="font-bold">鶏と野菜の黒酢あん（952kcal）</span> ─ 野菜は摂れますが脂質33.5g・炭水化物135gと高め。食べるならご飯少なめがおすすめ。</li>
              <li><span className="font-bold">さばの炭火焼き（870kcal）</span> ─ 焼き魚ですが、さばは脂が多く脂質47.4g。脂質を抑えたい日はしまほっけや豚ヒレの冷しゃぶに。</li>
              <li><span className="font-bold">大盛り・ご飯おかわり</span> ─ ご飯1杯で約250kcalの上乗せ。ダイエット中は普通盛りか少なめを選びましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "脂質", "判定"]}
            rows={[
              ["大戸屋ばくだん丼", "568 kcal", "28.8g", "12.0g", "◎"],
              ["しまほっけの炭火焼き", "612 kcal", "45.5g", "13.1g", "◎"],
              ["チキンかあさん煮", "897 kcal", "29.5g", "32.2g", "△"],
              ["大戸屋風チキン南蛮", "1,283 kcal", "44.1g", "70.8g", "×"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="「揚げ物だけど煮る」がポイント">
            <p>チキンかあさん煮は揚げた鶏肉を出汁で煮るため、<Marker>揚げ物の衣に含まれる油が煮汁に溶け出し、実質的な脂質が下がります</Marker>。同じ揚げ鶏でも大戸屋風チキン南蛮（脂質70.8g）とかあさん煮（脂質32.2g）では2倍以上の差。同じ「鶏の揚げ物」でも調理の仕上げ方でこれだけ変わります。</p>
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
            揚げ物を避け、<Marker color="green">焼き魚・煮魚・丼・冷しゃぶ系</Marker>を選ぶだけで脂質を大幅にカットできます。同じ鶏の揚げ物でも大戸屋風チキン南蛮（脂質70.8g）とチキンかあさん煮（脂質32.2g）では2倍以上の差があります。
          </p>

          <SubSectionHeading>コツ5：おすすめの組み合わせパターン</SubSectionHeading>
          <p className="mb-4">
            大戸屋で特におすすめの注文パターンをまとめました。目的に合わせて使い分けましょう。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "タンパク質"]}
            rows={[
              ["最小カロリー", "大戸屋ばくだん丼", "568 kcal", "28.8g"],
              ["高タンパク", "しまほっけの炭火焼き", "612 kcal", "45.5g"],
              ["低脂質", "豚ヒレの冷しゃぶ おろし柚香だれ", "627 kcal", "42.3g"],
              ["バランス重視", "鰆の西京焼き", "699 kcal", "40.5g"],
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
          title="そのメニュー、何kcal？ たべなびで今すぐ検索"
          subtitle="32チェーン・6,000品以上を、カロリー・タンパク質・脂質で絞り込み検索。登録不要・無料です。"
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
              "大戸屋ばくだん丼（568kcal/脂質12.0g）としまほっけの炭火焼き（612kcal/P45.5g）が低カロリー・高タンパクの二枚看板",
              "豚ヒレの冷しゃぶは脂質わずか8.0gで主菜の中で最も低脂質",
              "白米→五穀米の変更は無料。GI値が低めで食物繊維も摂れるとされる",
              "ご飯少なめで約80〜100kcalカット可能",
              "揚げ物系（チキン南蛮1,283kcal/脂質70.8g）は脂質が高いので頻度を抑える",
              "さばの炭火焼きは焼き魚でも脂質47.4gと高め（意外な落とし穴）",
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
            { q: "大戸屋でダイエット中に避けるべきメニューは？", a: "大戸屋風チキン南蛮（1,283kcal・脂質70.8g）、鶏と野菜の黒酢あん（952kcal・脂質33.5g）、チキンかあさん煮（897kcal）が高カロリー。さばの炭火焼きも焼き魚ながら脂質47.4gと高めなので、脂質を抑えたい日は量に注意しましょう。" },
            { q: "大戸屋でご飯を少なめにするとカロリーは何kcal減りますか？", a: "ご飯少なめで約80〜100kcalをカットできます。五穀米への変更と組み合わせると、しまほっけの炭火焼きは約520kcalまで下げられます。同じメニューでも注文方法で差が生まれます。" },
            { q: "チキンかあさん煮がダイエット向きと言われるのはなぜですか？", a: "揚げた鶏肉を出汁で煮るため、衣の油が煮汁に落ちます。897kcal・タンパク質29.5gで、同じ揚げ鶏の大戸屋風チキン南蛮（脂質70.8g）より脂質（32.2g）が大幅に少ないのが特徴です。ただしカロリーは高めなので、ご飯少なめと合わせるのがおすすめです。" },
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
