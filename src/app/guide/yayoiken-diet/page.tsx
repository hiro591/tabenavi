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
  CheckList,
  NumberedList,
  ComparisonTable,
  ProteinBar,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  ArticleImage,
  MenuPhoto,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "やよい軒の高タンパク・ダイエットメニュー｜定食のタンパク質ランキング【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/yayoiken-diet" },
  description: "やよい軒の定食をタンパク質・カロリー・PFCの実データでランキング。高タンパクな定食やダイエット中におすすめの低カロリーメニュー、ご飯の調整法まで外食減量の視点で解説します。",
  keywords: [
    "やよい軒 ダイエット",
    "やよい軒 カロリー",
    "やよい軒 タンパク質",
    "やよい軒 高タンパク",
    "やよい軒 低カロリー",
    "やよい軒 定食 カロリー",
  ],
  openGraph: {
    title: "やよい軒の高タンパク・ダイエットメニュー｜定食のタンパク質ランキング",
    description: "やよい軒の定食をタンパク質・カロリー・PFCの実データでランキング。高タンパクな定食やダイエット中におすすめの低カロリーメニュー、ご飯の調整法まで外食減量の視点で解説します。",
    url: "https://www.tabenavi.jp/guide/yayoiken-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "やよい軒の高タンパク・ダイエットメニュー｜定食のタンパク質ランキング",
  description: "やよい軒の定食をタンパク質・カロリー・PFCの実データでランキング。高タンパクな定食やダイエット中におすすめの低カロリーメニュー、ご飯の調整法まで外食減量の視点で解説します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/yayoiken-diet",
};

const tocItems = [
  { id: "high-protein-ranking", label: "高タンパク定食ランキング" },
  { id: "low-calorie", label: "低カロリーで選ぶ" },
  { id: "diet-recommended", label: "ダイエット向けおすすめ3選" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方・組み合わせ" },
  { id: "summary", label: "まとめ" },
];

export default function YayoikenDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="やよい軒でダイエット・高タンパク"
        subtitle="定食のタンパク質ランキングと太りにくい食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
        breadcrumb="やよい軒ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="yayoiken-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        <QuickAnswer
          question={"やよい軒で高タンパク・ダイエット向きの定食はどれですか？"}
          answer={
            <>
              やよい軒は<strong>定食メニューが豊富で高タンパク</strong>なのが特徴です。タンパク質を最優先するなら<strong>しまほっけ定食（白米）（631kcal・P50.7g）</strong>が群を抜いており、1食で50g超のタンパク質が摂れます。カロリーを抑えたいなら<strong>銀鮭の塩焼定食（白米）（499kcal・P30g）</strong>や、脂質がわずか3.3gの<strong>ネギまぐろ丼（普通盛）（520kcal・P30.4g）</strong>が好バランス。やよい軒はご飯のサイズ変更（普通盛↔ミニ）や小鉢追加ができるため、糖質量の調整がしやすいのも強みです。
            </>
          }
        />

        <p className="mb-4">
          やよい軒は、たべなびのデータベースでも<Marker>1チェーンで270品と屈指の品数</Marker>を誇る定食チェーンです。魚・肉・大豆ミートまで主菜の選択肢が広く、白米ともち麦ごはんを選べるのも特徴。実は、メニュー選びとご飯の調整次第で、ダイエット中でも栄養バランスの良い食事ができます。
        </p>
        <p className="mb-4">
          高タンパクを狙うなら<Marker color="blue">しまほっけ定食（白米）（P50.7g）</Marker>、カロリーを抑えるなら<Marker color="blue">銀鮭の塩焼定食（白米）（499kcal）</Marker>が軸。一方で、揚げ物が重なる定食は1,000kcalを超えるものもあり、メニュー次第で1食600kcal以上の差がつきます。
        </p>
        <p className="mb-8">
          この記事では、やよい軒の定食をタンパク質・カロリー・PFCの実データでランキングし、太りにくい注文の組み立て方を解説します。
        </p>

        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="yayoiken-shimahokke" genre="grilled-fish" />

        {/* Section 1: 高タンパク定食ランキング */}
        <section className="mb-16">
          <SectionHeading id="high-protein-ranking">やよい軒の高タンパク定食ランキング</SectionHeading>

          <p className="mb-4">
            やよい軒の<Marker>タンパク質が多い定食を多い順</Marker>に並べました（いずれも白米・ごはん普通盛ベース）。魚・牛肉系の主菜が上位を占めます。
          </p>

          <ProteinBar
            title="タンパク質が多い定食トップ5（g）"
            items={[
              { name: "しまほっけ定食", value: 50.7, note: "631kcal" },
              { name: "特カットステーキ定食【おろしぽん酢】", value: 49.6, note: "737kcal" },
              { name: "アカモクねばとろとしまほっけの定食", value: 39.7, note: "595kcal" },
              { name: "カットステーキ定食【おろしぽん酢】", value: 36.7, note: "622kcal" },
              { name: "ネギまぐろ丼", value: 30.4, note: "520kcal" },
            ]}
            caption="出典: やよい軒公式の栄養成分（白米・普通盛）／たべなびDBで検証済み"
          />

          <NutritionTable
            items={[
              { name: "しまほっけ定食 (白米)", calories: 631, protein: 50.7, fat: 21.3, carbs: 61.4, highlight: true },
              { name: "ブラックアンガスビーフの特カットステーキ定食【おろしぽん酢】 (白米)", calories: 737, protein: 49.6, fat: 24.6, carbs: 83.2 },
              { name: "アカモクねばとろとしまほっけの定食 (白米)", calories: 595, protein: 39.7, fat: 19.3, carbs: 72.3, highlight: true },
              { name: "ブラックアンガスビーフのカットステーキ定食【おろしぽん酢】 (白米)", calories: 622, protein: 36.7, fat: 17.9, carbs: 82.2, highlight: true },
              { name: "ネギまぐろ丼 (ごはん普通盛)", calories: 520, protein: 30.4, fat: 3.3, carbs: 94.5, highlight: true },
              { name: "サバの味噌煮定食 (白米)", calories: 621, protein: 30.4, fat: 24.9, carbs: 71.4 },
              { name: "銀鮭の塩焼定食 (白米)", calories: 499, protein: 30.0, fat: 16.8, carbs: 62.9, highlight: true },
              { name: "肉野菜炒め定食 (白米)", calories: 545, protein: 26.4, fat: 18.6, carbs: 71.4 },
            ]}
            highlightProtein
          />

          <SourceNote asOf="2026年6月" />

          <TipBox title="やよい軒で高タンパクを狙うコツ">
            <p>タンパク質を最優先するなら<Marker>しまほっけ定食（白米）（P50.7g）</Marker>が圧倒的。脂質を抑えつつタンパク質を取りたいなら<Marker color="green">ネギまぐろ丼（F3.3g）や銀鮭の塩焼定食（F16.8g）</Marker>が好相性です。さらにタンパク質を上乗せしたい日は、納豆（P7.4g）・冷奴（P2g）・蒸し鶏と海藻のぽん酢和え（P3.7g）などの小鉢を足すと、低カロリーのまま補強できます。</p>
          </TipBox>
        </section>

        {/* Section 2: 低カロリーで選ぶ */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選ぶやよい軒メニュー</SectionHeading>

          <p className="mb-4">
            やよい軒の定食・丼を<Marker color="blue">カロリーの低い順</Marker>に並べました（白米・普通盛ベース）。500kcal前後でもタンパク質をしっかり確保できるメニューがあります。
          </p>

          <NutritionTable
            items={[
              { name: "大豆ミートの野菜炒め定食 (白米)", calories: 408, protein: 18.3, fat: 5.3, carbs: 76.0, highlight: true },
              { name: "アカモクねばとろ定食 (白米)", calories: 438, protein: 20.3, fat: 11.2, carbs: 70.2, highlight: true },
              { name: "銀鮭の塩焼定食 (白米)", calories: 499, protein: 30.0, fat: 16.8, carbs: 62.9, highlight: true },
              { name: "ネギまぐろ丼 (ごはん普通盛)", calories: 520, protein: 30.4, fat: 3.3, carbs: 94.5, highlight: true },
              { name: "肉野菜炒め定食 (白米)", calories: 545, protein: 26.4, fat: 18.6, carbs: 71.4 },
              { name: "アカモクねばとろとしまほっけの定食 (白米)", calories: 595, protein: 39.7, fat: 19.3, carbs: 72.3 },
              { name: "サバの味噌煮定食 (白米)", calories: 621, protein: 30.4, fat: 24.9, carbs: 71.4 },
              { name: "しまほっけ定食 (白米)", calories: 631, protein: 50.7, fat: 21.3, carbs: 61.4 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はやよい軒公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="脂質を抑えたい日はこの2品">
            <p>ダイエット中に脂質を控えたいなら<Marker color="green">ネギまぐろ丼（F3.3g）と大豆ミートの野菜炒め定食（F5.3g）</Marker>が筆頭。どちらも脂質ひとケタg台でタンパク質18〜30gを確保できます。まぐろ・大豆・赤身魚は、低脂質×高タンパクを両立しやすい主菜です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop" alt="低カロリーでバランスの良い和定食のイメージ" />
        </section>

        {/* Section 3: ダイエット向けおすすめ3選 */}
        <section className="mb-16">
          <SectionHeading id="diet-recommended">ダイエット向けおすすめ定食ベスト3</SectionHeading>

          <p className="mb-6">
            カロリーと<Marker>PFCバランス</Marker>を総合したやよい軒のダイエット向け定食ベスト3を紹介します。
          </p>

          <RankingCard
            rank={1}
            title="銀鮭の塩焼定食（白米）"
            subtitle="499kcal / P30.0g / F16.8g / C62.9g"
            calories={499}
            protein={30.0}
            fat={16.8}
            carbs={62.9}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">500kcal以内でタンパク質30g</Marker>を確保できる優等生。焼き魚なので脂質も16.8gと控えめで、和定食らしくバランスが取れています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ご飯をミニにすればさらに糖質を抑えられます。「カロリーもタンパク質も両立したい」という日の第一候補です。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="ネギまぐろ丼（ごはん普通盛）"
            subtitle="520kcal / P30.4g / F3.3g / C94.5g"
            calories={520}
            protein={30.4}
            fat={3.3}
            carbs={94.5}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="green">脂質わずか3.3gで高タンパク</Marker>。脂質を絞りたいローファットダイエットに最適です。まぐろの良質なタンパク質を手軽に摂れます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              丼物なので糖質（C94.5g）はやや高め。気になる場合はご飯を少なめにすると、低脂質・適量糖質の理想的なPFCに近づきます。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="しまほっけ定食（白米）"
            subtitle="631kcal / P50.7g / F21.3g / C61.4g"
            calories={631}
            protein={50.7}
            fat={21.3}
            carbs={61.4}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              「がっつり食べたい・筋トレ後にタンパク質を入れたい」日はこれ。<Marker>タンパク質50.7gはやよい軒の定食でトップクラス</Marker>で、カロリーも631kcalに収まります。同じくタンパク質の多いチキン南蛮定食（843kcal・F37.7g）と比べると、脂質が約16g少なく総カロリーも200kcal以上低いのが利点。高タンパク・適脂質の主菜として優秀な一皿です。
            </p>
          </RankingCard>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="やよい軒の270品をデータで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: 避けたい高カロリーメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            やよい軒には<Marker>1,000kcalを超える定食</Marker>も存在します。揚げ物が重なる組み合わせ系の定食は特に高カロリー・高脂質になりがちです。
          </p>

          <WarningBox title="ダイエット中は頻度を抑えたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">チキン南蛮としょうが焼の人気コンビ定食（白米）（1,189kcal）</span> ─ 脂質64.9gと突出。揚げ物＋炒め物の組み合わせで1食の脂質が一気に跳ね上がります。</li>
              <li><span className="font-bold">ハンバーグとエビフライとから揚げの人気トリオ定食（白米）（1,054kcal）</span> ─ タンパク質53.1gは魅力ですが脂質49.1gと高め。食べるなら頻度を抑えて。</li>
              <li><span className="font-bold">チキン南蛮とエビフライの定食（白米）（1,038kcal）</span> ─ 揚げ物2種で脂質52.5g。衣とタルタルで脂質が積み上がります。</li>
              <li><span className="font-bold">ロースとんかつとエビフライの定食（白米）（992kcal）</span> ─ 揚げ物の王道コンビ。脂質49.2gで満足感は高いがカロリーも高い。</li>
              <li><span className="font-bold">チキン南蛮定食（白米）（843kcal）</span> ─ 単品でも脂質37.7g。タルタルソース（177kcal）が脂質を底上げします。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイド・ご飯量の注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">フライドポテト（305kcal）・タルタルソース（177kcal）</span> ─ 揚げ物・ソース系の追加は脂質が高め。野菜サラダ（67kcal）や冷奴（21kcal）への置き換えを。</li>
              <li><span className="font-bold">ごはんの「大盛・超特盛」</span> ─ 同じ主菜でもご飯量で大きく変わります。例：しょうが焼定食は白米717kcal→もち麦大盛871kcalと約150kcal増。糖質を抑えたい日は普通盛かミニを選びましょう。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 太りにくい食べ方・組み合わせ */}
        <section className="mb-16">
          <SectionHeading id="tips">やよい軒で太りにくい食べ方・組み合わせ</SectionHeading>

          <p className="mb-6">
            やよい軒ならではの<Marker>ご飯サイズ変更・小鉢・もち麦ごはん</Marker>を活用した、太りにくい食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "主菜は焼き魚・赤身魚・大豆を軸にする",
                body: "銀鮭の塩焼定食（499kcal/F16.8g）、ネギまぐろ丼（520kcal/F3.3g）、大豆ミートの野菜炒め定食（408kcal/F5.3g）など、脂質の少ない主菜を選ぶと総カロリーを抑えやすくなります。揚げ物系の定食より脂質を大きくカットできます。",
              },
              {
                title: "ご飯はミニ・普通盛を基本にする",
                body: "やよい軒はご飯のサイズを選べます。大盛・超特盛にすると糖質が一気に増えるため、ダイエット中は普通盛かミニを基本に。主菜のタンパク質量はそのままで、糖質と総カロリーだけを減らせます。",
              },
              {
                title: "もち麦ごはんを選ぶ",
                body: "もち麦ごはんは食物繊維が豊富で、白米より噛みごたえや満足感が得やすいのが特徴です。普通盛同士ならカロリー差はわずかなので、満足感と食物繊維を優先したい日に向いています。",
              },
              {
                title: "小鉢でタンパク質や野菜を補強する",
                body: "納豆（90kcal/P7.4g）、冷奴（21kcal/P2g）、蒸し鶏と海藻のぽん酢和え（22kcal/P3.7g）、野菜サラダ（67kcal）などの小鉢は低カロリーで栄養を底上げできます。揚げ物系の小鉢は避けるのが無難です。",
              },
              {
                title: "汁物から食べ始める",
                body: "みそ汁（21kcal）や貝汁（37kcal）から先に口にすると、胃が温まり満腹感を得やすくなります。豚汁（74kcal）に変えれば具で満足感もアップします。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスを意識した食事のイメージ" />

          <SubSectionHeading>目的別おすすめの組み立て3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["目的", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["カロリー重視", "大豆ミートの野菜炒め定食（白米）", "408 kcal", "P 18.3g"],
              ["バランス型", "銀鮭の塩焼定食（白米）", "499 kcal", "P 30.0g"],
              ["高タンパク", "しまほっけ定食（白米）", "631 kcal", "P 50.7g"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            バランス型の<Marker>「銀鮭の塩焼定食（白米）」は499kcalでP30g</Marker>と、カロリーとタンパク質の両立に優れています。脂質を絞りたい日はネギまぐろ丼（F3.3g）に切り替えるなど、目的に応じて主菜を選ぶのがコツです。
          </p>

          <SubSectionHeading>定食を主菜のPFCで比べる</SubSectionHeading>

          <p className="mb-4">
            タンパク質量が近い定食でも、<Marker>脂質が大きく違う</Marker>ことがあります。同じ高タンパクなら脂質の少ない方を選ぶと、効率よくタンパク質を摂れます。
          </p>

          <ComparisonTable
            headers={["定食メニュー（白米）", "カロリー", "タンパク質", "脂質", "P/F比"]}
            rows={[
              ["しまほっけ定食", "631 kcal", "P 50.7g", "F 21.3g", "2.38"],
              ["カットステーキ定食【おろしぽん酢】", "622 kcal", "P 36.7g", "F 17.9g", "2.05"],
              ["チキン南蛮定食", "843 kcal", "P 27.6g", "F 37.7g", "0.73"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            P/F比（タンパク質÷脂質）が最も高いのはしまほっけ定食。<Marker color="blue">脂質を抑えながらタンパク質をしっかり摂取</Marker>できるため、筋トレ中やローファットダイエット中の方に向いています。一方チキン南蛮定食はP/F比0.73で、揚げ物のため脂質がタンパク質を上回ります。
          </p>

          <SubSectionHeading>やよい軒のダイエット上の強み</SubSectionHeading>

          <CheckList
            items={[
              "定食メニューが豊富 ─ 魚・肉・大豆まで主菜の選択肢が広く、低脂質の主菜を選びやすい",
              "ご飯のサイズ変更ができる ─ ミニ〜超特盛まで選べ、糖質量を自分で調整できる",
              "低カロリーな小鉢が充実 ─ 納豆・冷奴・蒸し鶏の和え物などでタンパク質・野菜を補強できる",
            ]}
          />

          <TipBox title="やよい軒を週間プランに組み込む">
            <p>やよい軒を週3回使う場合のおすすめローテーション：月曜＝銀鮭の塩焼定食（499kcal）、水曜＝ネギまぐろ丼（520kcal、ご飯少なめ）、金曜＝しまほっけ定食（631kcal）。<Marker>同じチェーンでも主菜を変えることで飽きを防ぎ、栄養バランスも整います</Marker>。</p>
          </TipBox>
        </section>

        <ServiceOffers tag="protein" />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "高タンパクを狙うなら、しまほっけ定食（白米）（631kcal・P50.7g）が定食トップクラス",
              "カロリーとタンパク質の両立は銀鮭の塩焼定食（白米）（499kcal・P30g）が最有力",
              "脂質を抑えたいならネギまぐろ丼（F3.3g）や大豆ミートの野菜炒め定食（F5.3g）が好相性",
              "チキン南蛮としょうが焼の人気コンビ定食（1,189kcal・F64.9g）など揚げ物が重なる定食は頻度を抑える",
              "ご飯サイズ変更・低カロリーの小鉢で、糖質とタンパク質を自分で調整するのがやよい軒の強み",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。
          </p>

          <p className="mb-4 text-sm text-gray-600">
            やよい軒の全メニューを目的別に見たい方は、
            <Link href="/chains/yayoiken" className="text-sky-600 underline">やよい軒のメニュー栄養一覧</Link>
            や、
            <Link href="/chains/yayoiken/high-protein" className="text-sky-600 underline">高タンパクメニュー</Link>
            ・
            <Link href="/chains/yayoiken/diet" className="text-sky-600 underline">ダイエット向けメニュー</Link>
            ・
            <Link href="/chains/yayoiken/low-calorie" className="text-sky-600 underline">低カロリーメニュー</Link>
            のランキングも参考になります。
          </p>
          <p className="mb-4 text-sm text-gray-600">
            他チェーンも含めて比較したい方は、
            <Link href="/guide/high-protein-chain-database" className="text-sky-600 underline">高タンパクチェーン横断データベース</Link>
            、
            <Link href="/guide/protein-cost-ranking" className="text-sky-600 underline">タンパク質コスパランキング</Link>
            、
            <Link href="/guide/muscle-eating-out" className="text-sky-600 underline">筋トレ・増量の外食ガイド</Link>
            、
            <Link href="/guide/low-fat-eating-out" className="text-sky-600 underline">低脂質の外食選び</Link>
            もあわせてどうぞ。
          </p>
        </section>

        <FAQSection
          slug="yayoiken-diet"
          items={[
            { q: "やよい軒でタンパク質が一番多い定食は何ですか？", a: "しまほっけ定食（白米）でタンパク質50.7g・631kcalと、やよい軒の定食でトップクラスです。次いでブラックアンガスビーフの特カットステーキ定食【おろしぽん酢】（白米・P49.6g）、アカモクねばとろとしまほっけの定食（白米・P39.7g）が高タンパクです。" },
            { q: "やよい軒でダイエット中におすすめの低カロリー定食は？", a: "大豆ミートの野菜炒め定食（白米・408kcal）、アカモクねばとろ定食（白米・438kcal）、銀鮭の塩焼定食（白米・499kcal）が低カロリーです。中でも銀鮭の塩焼定食は499kcalでタンパク質30gを確保でき、カロリーとタンパク質を両立したい方におすすめです。" },
            { q: "やよい軒で脂質を抑えたいときは何を選べばいいですか？", a: "ネギまぐろ丼（ごはん普通盛・520kcal）が脂質わずか3.3gでタンパク質30.4gと優秀です。次いで大豆ミートの野菜炒め定食（白米・F5.3g）も低脂質。焼き魚や赤身魚、大豆を主菜にすると脂質を抑えやすくなります。" },
            { q: "やよい軒でダイエット中に避けたほうがいい定食は？", a: "チキン南蛮としょうが焼の人気コンビ定食（白米・1,189kcal・F64.9g）、ハンバーグとエビフライとから揚げの人気トリオ定食（白米・1,054kcal）、チキン南蛮とエビフライの定食（白米・1,038kcal）など、揚げ物が重なる組み合わせ系の定食は高カロリー・高脂質です。食べる頻度を抑えましょう。" },
            { q: "やよい軒でご飯の量は調整できますか？", a: "やよい軒はご飯のサイズをミニ〜超特盛まで選べます。ダイエット中は普通盛かミニを基本にすると、主菜のタンパク質量はそのままで糖質と総カロリーだけを減らせます。例えばしょうが焼定食は白米717kcalですが、もち麦大盛では871kcalと約150kcal増えます。" },
            { q: "やよい軒でタンパク質を手軽に増やす方法はありますか？", a: "低カロリーの小鉢を追加するのがおすすめです。納豆（90kcal・P7.4g）、冷奴（21kcal・P2g）、蒸し鶏と海藻のぽん酢和え（22kcal・P3.7g）などは、カロリーを大きく増やさずにタンパク質を上乗せできます。" },
          ]}
        />

        <CTABanner
          title="外食のカロリーとタンパク質をまとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="yayoiken-diet" />

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
