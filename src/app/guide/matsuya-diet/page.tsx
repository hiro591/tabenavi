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
    "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較、PFCバランスで選ぶ食べ方を徹底解説。松屋で太らない注文法がわかります。",
  keywords: [
    "松屋 ダイエット",
    "松屋 カロリー",
    "松屋 低カロリー",
    "松屋 太らない",
    "松屋 定食 カロリー",
  ],
  openGraph: {
    title: "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較を徹底解説。",
    url: "https://tabenavi.jp/guide/matsuya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】松屋ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "松屋のカロリー低い順ランキング、ダイエット向けおすすめメニュー、定食と丼の比較を徹底解説。",
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/matsuya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "teishoku-vs-don", label: "定食 vs 丼の比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function MatsuyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="松屋でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=400&fit=crop"
        breadcrumb="松屋ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="matsuya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          松屋は牛丼チェーンの中でも<Marker>定食メニューが充実している</Marker>のが特徴です。みそ汁が無料で付いてくるのも嬉しいポイント。実は定食スタイルを活用することで、ダイエット中でも栄養バランスの良い食事が可能です。
        </p>
        <p className="mb-4">
          最もカロリーを抑えたいなら<Marker color="blue">牛めしミニ盛（380kcal）</Marker>がおすすめ。一方で牛焼肉定食は827kcalとハイカロリーです。メニュー選びで400kcal以上の差がつくため、正しい知識が大切です。
        </p>
        <p className="mb-8">
          この記事では、松屋のメニューをカロリー低い順にランキングし、定食と丼の賢い使い分け方を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=400&fit=crop" alt="和食の定食イメージ" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">松屋メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            松屋の主要メニューをカロリーの低い順に並べました。<Marker color="blue">ミニ盛や小鉢系を活用する</Marker>のがカロリーコントロールの鍵です。
          </p>

          <NutritionTable
            items={[
              { name: "豚汁", calories: 168, protein: 8.5, fat: 10.2, carbs: 10.5, highlight: true },
              { name: "牛皿（並盛）", calories: 243, protein: 14.5, fat: 17.0, carbs: 5.5, highlight: true },
              { name: "牛めしミニ盛", calories: 380, protein: 12.5, fat: 13.2, carbs: 50.8, highlight: true },
              { name: "牛めし並盛", calories: 640, protein: 19.8, fat: 20.5, carbs: 91.0 },
              { name: "豚肩ロース焼肉定食", calories: 710, protein: 30.5, fat: 22.0, carbs: 95.5 },
              { name: "ネギたっぷり旨辛ネギたま牛めし", calories: 748, protein: 23.0, fat: 26.5, carbs: 98.0 },
              { name: "カルビ焼肉定食", calories: 756, protein: 28.5, fat: 28.2, carbs: 95.8 },
              { name: "牛焼肉定食", calories: 827, protein: 34.2, fat: 30.5, carbs: 98.5 },
              { name: "牛めし大盛", calories: 855, protein: 27.2, fat: 27.8, carbs: 121.0 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は松屋公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="松屋ならではのポイント">
            <p>松屋は<Marker>みそ汁が無料</Marker>で付いてきます。みそ汁を食事の最初に飲むことで満腹感が得やすくなり、食べ過ぎを防止できます。また、豚汁（168kcal）への変更も可能で、具だくさんの豚汁は満足感が高くおすすめです。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーと<Marker>PFCバランス</Marker>を考慮した、松屋のダイエット向けメニューベスト3を紹介します。
          </p>

          <RankingCard rank={1} title="牛めしミニ盛" subtitle="380kcal / P12.5g / F13.2g / C50.8g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              松屋でダイエットなら<Marker>まずミニ盛を選ぶのが鉄則</Marker>。並盛（640kcal）から約260kcalもカットでき、ご飯の量が控えめになることで炭水化物も大幅に削減できます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              価格も並盛より安く、お財布にも優しい選択。みそ汁無料と合わせて、コスパの良いダイエット食になります。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="牛皿（並盛）+ みそ汁" subtitle="合計 約280kcal / P16.5g / F17.5g / C8.5g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">ご飯を完全にカットして牛皿単品+無料みそ汁</Marker>という組み合わせ。糖質制限中の方にはこれがベスト。糖質わずか8.5gで、しっかりとしたおかずを楽しめます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              物足りなさを感じたらサラダ（約30kcal）を追加しても約310kcal。低カロリーを維持しやすい組み合わせです。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="豚肩ロース焼肉定食" subtitle="710kcal / P30.5g / F22.0g / C95.5g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「がっつり食べたい日」はこの定食。カロリーは710kcalとやや高めですが、<Marker color="green">タンパク質30.5gと高タンパク</Marker>で脂質は22gと比較的控えめ。筋トレ後の食事や、1日の中でメインの食事にするなら十分許容範囲です。定食なので野菜も摂れます。
            </p>
          </RankingCard>

          <ArticleImage src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop" alt="ヘルシーな和食プレート" />
        </section>

        {/* Section 3: 定食 vs 丼の比較 */}
        <section className="mb-16">
          <SectionHeading id="teishoku-vs-don">定食 vs 丼：どちらがダイエット向き？</SectionHeading>

          <p className="mb-6">
            松屋の強みは定食メニューの充実度。<Marker>同じ肉量でも「丼」と「定食」で栄養バランスが大きく変わります</Marker>。
          </p>

          <ComparisonTable
            headers={["比較項目", "牛めし（丼）並盛", "牛焼肉定食"]}
            rows={[
              ["カロリー", "640 kcal", "827 kcal"],
              ["タンパク質", "19.8g", "34.2g"],
              ["脂質", "20.5g", "30.5g"],
              ["炭水化物", "91.0g", "98.5g"],
              ["野菜", "少ない", "サラダ付き"],
              ["みそ汁", "無料付き", "無料付き"],
            ]}
          />

          <p className="mb-4">
            カロリーだけで見ると牛めし並盛の方が低いですが、<Marker color="blue">定食はタンパク質が約1.7倍</Marker>。定食には野菜サラダやキャベツが付くため、食物繊維やビタミンも摂取できます。
          </p>

          <TipBox title="定食の賢い活用法">
            <p>定食のご飯を<Marker>「ミニ盛」に変更</Marker>することで、カロリーを約100kcal抑えられます。タンパク質はそのままで糖質だけをカットできるため、ダイエット中こそ定食+ご飯ミニ盛がおすすめの組み合わせです。</p>
          </TipBox>

          <SubSectionHeading>松屋で使える裏技：「ご飯少なめ」</SubSectionHeading>

          <p className="mb-4">
            松屋では券売機で「ミニ盛」を選べるほか、口頭で「ご飯少なめ」とお願いすることも可能です。<Marker color="green">ご飯を半分にするだけで約150kcalのカロリーカット</Marker>になります。定食メニューでも活用できるので積極的に使いましょう。
          </p>

          <SubSectionHeading>定食メニューの詳細比較</SubSectionHeading>

          <p className="mb-4">
            松屋の定食メニューをPFCバランスの観点から比較しました。<Marker>脂質とタンパク質のバランスに注目</Marker>して選ぶと、より効果的なダイエットが可能です。
          </p>

          <ComparisonTable
            headers={["定食メニュー", "カロリー", "タンパク質", "脂質", "P/F比"]}
            rows={[
              ["豚肩ロース焼肉定食", "710 kcal", "P 30.5g", "F 22.0g", "1.39"],
              ["カルビ焼肉定食", "756 kcal", "P 28.5g", "F 28.2g", "1.01"],
              ["牛焼肉定食", "827 kcal", "P 34.2g", "F 30.5g", "1.12"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            P/F比（タンパク質/脂質）が最も高いのは豚肩ロース焼肉定食。<Marker color="blue">脂質を抑えながらタンパク質をしっかり摂取</Marker>できるため、筋トレ中の方やローファットダイエット中の方に最もおすすめの定食です。
          </p>

          <p className="mb-4">
            逆に、カルビ焼肉定食はP/F比が1.01と脂質とタンパク質がほぼ同量。同じ焼肉定食でも<Marker>豚肩ロースを選ぶだけで脂質を6.2g抑えられます</Marker>。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="松屋のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            松屋にも<Marker>800kcalを超える高カロリーメニュー</Marker>が存在します。知らずに注文すると1食でカロリーオーバーになりかねません。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛めし大盛（855kcal）</span> ─ 並盛から+215kcal。ご飯の量が大幅に増え、炭水化物121gに。</li>
              <li><span className="font-bold">牛焼肉定食（827kcal）</span> ─ タンパク質34.2gは優秀だが、カロリーと脂質が高め。がっつり食べたい日以外は避けましょう。</li>
              <li><span className="font-bold">カルビ焼肉定食（756kcal）</span> ─ カルビの脂質28.2gが高い。同じ焼肉定食なら豚肩ロース（710kcal/F22g）の方がまし。</li>
              <li><span className="font-bold">ネギたっぷり旨辛ネギたま牛めし（748kcal）</span> ─ トッピングの卵とソースでカロリーが上乗せ。名前の印象ほどヘルシーではない。</li>
              <li><span className="font-bold">カレー大盛（920kcal）</span> ─ カレーはルウに脂質と糖質が凝縮。大盛にすると900kcal超えに。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイドメニューの注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">フライドポテト（320kcal）</span> ─ 揚げ物系サイドは脂質が高い。サラダ（約30kcal）に変更を。</li>
              <li><span className="font-bold">牛めし+カレーのセット</span> ─ 合計で軽く1,000kcal超え。お得に見えてもカロリー的には大損です。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">松屋ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            松屋ならではの<Marker>無料みそ汁や定食システムを活用</Marker>した、ダイエット向きの食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "まずみそ汁から飲む",
                body: "松屋の無料みそ汁を食事の最初に飲むことで、胃が温まり満腹感を感じやすくなります。これだけで自然と食べ過ぎを防止。豚汁（168kcal）に変更すれば具材で満足感もアップします。",
              },
              {
                title: "ミニ盛を基本にする",
                body: "牛めしはミニ盛（380kcal）を基本サイズに。並盛より260kcal低く、物足りなければサラダ（約30kcal）を追加しても合計410kcalに収まります。",
              },
              {
                title: "定食のご飯を「ミニ」に",
                body: "定食メニューを注文する際、ご飯をミニ盛に変更しましょう。タンパク質量はそのままで、炭水化物と総カロリーだけをカットできる賢い方法です。",
              },
              {
                title: "丼より定食スタイルを選ぶ",
                body: "定食はおかずとご飯が分かれているため、ご飯の量を調整しやすい。また野菜サラダが付くので栄養バランスも優れています。丼はご飯量のコントロールが難しいのがデメリット。",
              },
              {
                title: "ドレッシングとソースは控えめに",
                body: "サラダのドレッシングや焼肉のタレは意外とカロリーが高い。ドレッシングは半量にする、タレは別皿にしてつけながら食べるなどの工夫で、50〜100kcal程度の節約が可能です。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop" alt="栄養バランスの良い食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛皿 + 無料みそ汁 + サラダ", "310 kcal", "P 17.0g"],
              ["バランス型", "牛めしミニ盛 + サラダ", "410 kcal", "P 14.5g"],
              ["高タンパク", "豚肩ロース焼肉定食（ご飯ミニ）", "610 kcal", "P 30.5g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker>「牛皿+みそ汁+サラダ」なら310kcalでP17g</Marker>。糖質制限ダイエット中の方に最適な組み合わせです。みそ汁が無料なのは松屋ならではのメリットです。
          </p>

          <SubSectionHeading>PFCバランスで見る松屋メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（糖質制限・ローファット・カロリー制限）によって、<Marker>松屋で選ぶべきメニューは変わります</Marker>。目的別の最適解を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "牛皿 + みそ汁", "280 kcal", "糖質8.5gの超低糖質"],
              ["ローファット", "豚肩ロース焼肉定食（ご飯ミニ）", "610 kcal", "P30.5gで脂質控えめ"],
              ["カロリー制限", "牛めしミニ盛", "380 kcal", "手軽に400kcal以下"],
            ]}
            bestRowIndex={2}
          />

          <p className="mb-4">
            松屋は定食メニューが充実しているため、<Marker color="blue">ローファットダイエットとの相性が特に良い</Marker>のが特徴です。焼肉定食系はタンパク質が豊富で、ご飯をミニに変更すれば脂質を抑えつつ高タンパクな食事が実現できます。
          </p>

          <TipBox title="松屋を週間プランに組み込む">
            <p>松屋を週3回利用する場合のおすすめローテーション：月曜＝牛めしミニ盛（380kcal）、水曜＝牛皿+みそ汁（280kcal）、金曜＝豚肩ロース焼肉定食ご飯ミニ（610kcal）。<Marker>同じチェーンでも注文を変えることで飽きを防ぎ、栄養バランスも整います</Marker>。</p>
          </TipBox>

          <SubSectionHeading>松屋 vs 他チェーンの比較</SubSectionHeading>

          <p className="mb-4">
            牛丼3大チェーン（吉野家・松屋・すき家）の中で、松屋のダイエット上の強みは以下の3点です。
          </p>

          <CheckList
            items={[
              "みそ汁無料 ─ 食事の最初に飲んで満腹感を高められる（他チェーンは有料）",
              "定食メニューが充実 ─ 野菜サラダ付きで栄養バランスが良い",
              "券売機でミニ盛を選択 ─ 口頭で伝える必要がなく確実にカロリーカット",
            ]}
          />
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            松屋は無料みそ汁と定食メニューを活用することで、ダイエット中でもバランスの良い食事ができます。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "牛めしミニ盛（380kcal）を基本サイズにするだけで大幅カロリーカット",
              "牛皿+みそ汁+サラダで310kcalの低糖質セットが完成",
              "定食はご飯を「ミニ」に変更してタンパク質を維持しつつ糖質カット",
              "丼より定食スタイルの方が栄養バランスに優れている",
              "まずみそ汁から飲んで満腹感を高め、食べ過ぎを防止",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は松屋公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="matsuya-diet" />

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
