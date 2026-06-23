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
  alternates: { canonical: "https://www.tabenavi.jp/guide/diet-plateau" },
  title:
    "【2026年最新】ダイエット停滞期の原因と乗り越え方｜体重が減らない時の5つの対策 | たべなび",
  description:
    "ダイエット停滞期の原因をホメオスタシスの観点から科学的に解説。体重が減らない時に実践すべき5つの突破法と、やってはいけないNG行動、外食ダイエットでの停滞期対策を紹介します。",
  keywords: [
    "ダイエット 停滞期",
    "体重 減らない",
    "停滞期 乗り越える",
    "ダイエット 停滞期 いつ",
    "停滞期 期間",
    "停滞期 チートデイ",
  ],
  openGraph: {
    title:
      "【2026年最新】ダイエット停滞期の原因と乗り越え方｜体重が減らない時の5つの対策",
    description:
      "ダイエット停滞期の科学的メカニズムと5つの突破法を解説。体重が減らない時に今すぐ実践できる対策を紹介。",
    url: "https://www.tabenavi.jp/guide/diet-plateau",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】ダイエット停滞期の原因と乗り越え方｜体重が減らない時の5つの対策",
  description:
    "ダイエット停滞期の科学的メカニズムと突破法を解説。体重が減らない原因と対策を紹介。",
  datePublished: "2026-03-25",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/diet-plateau",
};

const tocItems = [
  { id: "mechanism", label: "停滞期が起こる科学的メカニズム" },
  { id: "when", label: "停滞期はいつ来る？どのくらい続く？" },
  { id: "breakthrough", label: "停滞期を突破する5つの方法" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "eating-out", label: "外食ダイエットでの停滞期対策" },
  { id: "summary", label: "まとめ" },
];

export default function DietPlateauPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="ダイエット停滞期の原因と乗り越え方"
        subtitle="体重が減らない時の5つの対策【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop"
        breadcrumb="ダイエット停滞期"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="diet-plateau">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月25日 | 読了目安: 10分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          ダイエットを続けていると、必ずと言っていいほどやってくるのが<Marker>停滞期</Marker>です。食事制限も運動も続けているのに体重が減らない。この状態は精神的に非常に辛く、ダイエットを挫折する最大の原因でもあります。
        </p>
        <p className="mb-4">
          しかし、ダイエット停滞期は<Marker color="blue">体が正常に機能している証拠</Marker>でもあります。停滞期のメカニズムを正しく理解し、適切な対策を取れば、必ず乗り越えることができます。
        </p>
        <p className="mb-10">
          この記事では、停滞期が起こる科学的なメカニズムから、体重が減らない時に実践すべき5つの突破法、やってはいけないNG行動まで徹底解説します。<Link href="/guide/eating-out-diet" className="text-sky-500 hover:text-sky-600">外食ダイエット</Link>中の方向けの停滞期対策も紹介します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop"
          alt="体重計のイメージ"
        />

        {/* Section 1: 科学的メカニズム */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ダイエットの停滞期を乗り越えるにはどうしたらいい？"}
          answer={"停滞期は体が急激な体重減少から身を守るホメオスタシスが発動している正常な状態です。焦らず、食事内容の変更（カロリーはそのまま）、チートデイの活用、食べる順の改善、1日2～2.5リットルの水分摂取、7～8時間の睡眠を心がけることで2週間～1ヶ月で突破できます。カロリーの大幅カットは逆効果です。"}
        />

        <SectionHeading id="mechanism">
            停滞期が起こる科学的メカニズム
          </SectionHeading>

          <SubSectionHeading>ホメオスタシス（恒常性維持機能）とは</SubSectionHeading>
          <p className="mb-4">
            ダイエット停滞期の最大の原因は<Marker>ホメオスタシス（恒常性維持機能）</Marker>です。ホメオスタシスとは、体が現在の状態を維持しようとする生理的な仕組みのこと。体温、血圧、血糖値などを一定に保つ機能として知られていますが、体重（体脂肪量）も同様にコントロールされています。
          </p>
          <p className="mb-4">
            ダイエットで急激に体重が減ると、体は「危険な状態だ」と判断し、<Marker color="blue">体重をこれ以上減らさないよう複数の防御機構を発動</Marker>します。これが停滞期の正体です。
          </p>

          <SubSectionHeading>停滞期を引き起こす4つの生理的変化</SubSectionHeading>

          <NumberedList
            items={[
              {
                title: "基礎代謝の低下（適応熱産生）",
                body: "カロリー制限が続くと、体は消費エネルギーを節約するモードに入ります。基礎代謝が10〜15%低下し、同じ食事量でもカロリー赤字が小さくなります。これを「適応熱産生」と呼びます。",
              },
              {
                title: "レプチン分泌の低下",
                body: "脂肪細胞から分泌される満腹ホルモン「レプチン」が減少。代謝を下げ、食欲を増進させる方向に体が変化します。ダイエット開始から2〜3週間で顕著になります。",
              },
              {
                title: "甲状腺ホルモン（T3）の減少",
                body: "代謝を司る甲状腺ホルモンの活性が低下。エネルギー消費効率が下がり、体脂肪が減りにくくなります。",
              },
              {
                title: "コルチゾール（ストレスホルモン）の増加",
                body: "長期のカロリー制限はストレスとなり、コルチゾールが増加。コルチゾールは水分の貯留を促進し、体重計の数字が減らない原因にもなります。",
              },
            ]}
          />

          <TipBox title="停滞期は体の正常な防衛反応">
            <p>
              停滞期を「ダイエットの失敗」と捉える人が多いですが、実際は逆です。<Marker>停滞期は体が正常に機能し、急激な体重減少から身を守ろうとしている証拠</Marker>です。人類は長い飢餓の歴史を経てこの機能を獲得しました。停滞期が来たということは、ダイエットが順調に進んでいるサインでもあります。
            </p>
          </TipBox>

          <SubSectionHeading>「セットポイント理論」を知っておこう</SubSectionHeading>
          <p className="mb-4">
            体にはそれぞれ「快適な体重範囲（セットポイント）」があり、その範囲から外れると元に戻そうとする力が働くという理論です。<Marker>体重がセットポイントを下回ると、停滞期が発生しやすくなります</Marker>。
          </p>
          <p className="mb-4">
            良いニュースとして、セットポイントは固定ではなく、時間をかけて低い方向にシフトさせることが可能です。停滞期を焦らず乗り越え、新しい体重を数週間〜数ヶ月維持することで、体が新しい体重を「通常」と認識するようになります。
          </p>
        </section>

        {/* Section 2: いつ来る？どのくらい続く？ */}
        <section className="mb-16">
          <SectionHeading id="when">
            停滞期はいつ来る？どのくらい続く？
          </SectionHeading>

          <SubSectionHeading>停滞期が始まるタイミング</SubSectionHeading>
          <p className="mb-4">
            ダイエット停滞期が始まる一般的なタイミングは以下の通りです。
          </p>

          <ComparisonTable
            headers={["タイミング", "目安", "メカニズム"]}
            rows={[
              ["体重の5%減少後", "開始1〜2ヶ月", "ホメオスタシスの発動"],
              ["ダイエット開始3〜4週間後", "体重に関係なく", "レプチン低下・代謝適応"],
              ["体脂肪率が一定レベルを切った時", "男性15%・女性25%付近", "セットポイントの抵抗"],
              ["同じメニューを続けて3〜4週間後", "食事の慣れ", "消化吸収の効率化"],
            ]}
          />

          <p className="mb-4">
            最も一般的なのは、<Marker>体重が開始時の5%減少したタイミング</Marker>です。例えば体重70kgの人なら、3.5kg減って66.5kgになった辺りで最初の停滞期が訪れることが多いです。
          </p>

          <SubSectionHeading>停滞期の期間</SubSectionHeading>
          <p className="mb-4">
            停滞期の期間は個人差が大きいですが、一般的には<Marker color="blue">2週間〜1ヶ月程度</Marker>です。適切な対策を取れば短縮できる場合もありますが、焦って極端な行動に出ると長引くこともあります。
          </p>

          <ComparisonTable
            headers={["停滞期の状態", "期間の目安", "対応"]}
            rows={[
              ["軽度（体重横ばい1〜2週間）", "1〜2週間", "焦らず現在のプランを継続"],
              ["中度（体重横ばい2〜3週間）", "2〜4週間", "5つの突破法を実践"],
              ["重度（体重横ばい1ヶ月以上）", "1〜2ヶ月", "食事プランの見直しが必要"],
            ]}
            bestRowIndex={1}
          />

          <WarningBox title="停滞期と「痩せていない」の区別">
            <p className="mb-2">
              体重が減らない原因が「停滞期」ではなく、単純にカロリー収支が合っていない場合もあります。以下をチェックしてください。
            </p>
            <p className="mb-1">
              <strong>本当に停滞期？</strong>
            </p>
            <p className="mb-1">
              - 食事量が増えていないか（間食、調味料、飲み物のカロリーも含めて）
            </p>
            <p className="mb-1">
              - 体重が減ったことで基礎代謝が下がり、カロリー赤字がゼロになっていないか
            </p>
            <p>
              - <Marker>2週間以上、正確なカロリー管理をしているのに体重が変わらない場合</Marker>が「停滞期」です
            </p>
          </WarningBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1505576399279-0d754c0d8953?w=800&h=400&fit=crop"
          alt="健康的な食事の準備のイメージ"
        />

        <CTABanner
          title="正確なカロリー管理で停滞期を判断"
          subtitle="たべなびで外食メニューの栄養データを活用しよう"
        />

        {/* Section 3: 5つの突破法 */}
        <section className="mb-16">
          <SectionHeading id="breakthrough">
            停滞期を突破する5つの方法
          </SectionHeading>

          <p className="mb-6">
            ダイエット停滞期を乗り越えるための具体的な5つの方法を紹介します。すべてを同時に行う必要はなく、<Marker>1〜2つから試してみて、効果を見ながら追加する</Marker>のがおすすめです。
          </p>

          <SubSectionHeading>突破法1：食事内容を変える（カロリーはそのまま）</SubSectionHeading>
          <p className="mb-4">
            同じメニューを毎日食べ続けていると、体が消化吸収を効率化し、<Marker>同じカロリーでもエネルギー取得効率が上がる</Marker>ことがあります。カロリー量は変えずに、食事の内容を変えてみましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "タンパク質源を変える",
                body: "鶏むね肉ばかり食べていたなら、魚、豆腐、卵、牛赤身肉などに切り替える。異なるタンパク質源は消化に必要なエネルギーも異なります。",
              },
              {
                title: "炭水化物の種類を変える",
                body: "白米から玄米、もち麦、さつまいもなどに変更。食物繊維量が変わることで血糖値の動きが変化し、脂肪燃焼パターンが変わります。",
              },
              {
                title: "PFCバランスを微調整する",
                body: "タンパク質の比率を5%上げ、炭水化物を5%下げるなど、小さな調整を試みます。体の代謝パターンが変わるきっかけになります。",
              },
            ]}
          />

          <p className="mb-4 mt-4">
            外食中心なら、<Link href="/guide/eating-out-diet" className="text-sky-500 hover:text-sky-600">外食ダイエット</Link>のメニューローテーションを見直すタイミングです。いつも行くチェーン店を変えるだけでも効果があります。
          </p>

          <SubSectionHeading>突破法2：チートデイを取り入れる</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/cheat-day" className="text-sky-500 hover:text-sky-600">チートデイ</Link>は停滞期突破の最も効果的な手法の一つです。1日だけ計画的にカロリー摂取を増やすことで、<Marker>低下したレプチンの分泌が回復し、代謝が再び上昇</Marker>します。
          </p>

          <TipBox title="停滞期のチートデイの正しいやり方">
            <p className="mb-2">
              停滞期でのチートデイは以下のルールを守りましょう。
            </p>
            <p className="mb-1">- 摂取カロリー目安：体重(kg) x 40〜45kcal</p>
            <p className="mb-1">- 炭水化物を中心に増やす（レプチン回復に最も効果的）</p>
            <p className="mb-1">- 必ず1日で終わらせる</p>
            <p>- 翌日から通常のカロリー制限に戻す</p>
          </TipBox>

          <SubSectionHeading>突破法3：食べる順番を変える</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/eating-order" className="text-sky-500 hover:text-sky-600">食べ順ダイエット</Link>を実践していない場合、停滞期をきっかけに導入しましょう。<Marker color="blue">野菜・汁物 → タンパク質 → 炭水化物</Marker>の順番で食べることで、同じメニューでも血糖値の上昇が抑えられやすく、脂肪蓄積が減りやすくなります。
          </p>
          <p className="mb-4">
            すでに実践している場合は、食事前に<Marker>食物繊維サプリメント（難消化性デキストリンなど）</Marker>を水に溶かして飲むことで、さらに血糖値コントロールを強化できます。
          </p>

          <SubSectionHeading>突破法4：水分摂取を見直す</SubSectionHeading>
          <p className="mb-4">
            水分不足は見落とされがちな停滞期の原因です。水分が不足すると以下の問題が起きます。
          </p>

          <CheckList
            items={[
              "脂肪の代謝が低下する（脂肪分解には水を必要とする反応が関与）",
              "腎臓の機能が低下し、老廃物の排出が滞る",
              "便秘になりやすく、体重が減りにくくなる",
              "体が水分を溜め込みやすくなり、むくみで体重が増える",
            ]}
          />

          <p className="mb-4 mt-4">
            停滞期には<Marker>1日2〜2.5リットルの水</Marker>を意識的に摂りましょう。コーヒーやお茶も含めてOKですが、カフェインの利尿作用があるため、純粋な水も1リットル以上は摂るようにしてください。
          </p>

          <SubSectionHeading>突破法5：睡眠の質を改善する</SubSectionHeading>
          <p className="mb-4">
            睡眠不足は停滞期を長引かせる大きな要因です。シカゴ大学の研究では、<Marker>睡眠時間が5.5時間のグループは8.5時間のグループに比べ、脂肪の減少量が55%少なかった</Marker>と報告されています。
          </p>

          <NumberedList
            items={[
              {
                title: "7〜8時間の睡眠を確保する",
                body: "睡眠中に分泌される成長ホルモンは脂肪分解を促進します。6時間以下の睡眠では成長ホルモンの分泌が大幅に減少します。",
              },
              {
                title: "就寝2時間前に食事を終える",
                body: "消化活動が活発な状態では深い睡眠が妨げられます。特に脂質の多い食事は消化に時間がかかるため、夕食を早めに済ませましょう。",
              },
              {
                title: "寝室の温度を18〜22度に保つ",
                body: "やや涼しい環境で寝ると、体が体温維持のためにカロリーを消費する「褐色脂肪組織」が活性化するという研究もあります。",
              },
              {
                title: "就寝前のスマホ・PCを控える",
                body: "ブルーライトはメラトニン（睡眠ホルモン）の分泌を抑制します。就寝1時間前にはスマホを手放しましょう。",
              },
            ]}
          />

          <ComparisonTable
            headers={["突破法", "効果が出るまで", "難易度", "おすすめ度"]}
            rows={[
              ["食事内容を変える", "1〜2週間", "低", "まず最初に試す"],
              ["チートデイ", "2〜3日", "中", "停滞2週間以上で検討"],
              ["食べる順番を変える", "1〜2週間", "低", "すぐに実践可能"],
              ["水分摂取の改善", "3〜7日", "低", "すぐに実践可能"],
              ["睡眠の改善", "1〜2週間", "中", "長期的な効果大"],
            ]}
            bestRowIndex={0}
          />
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="ヘルシーな野菜サラダ"
        />

        {/* Section 4: やってはいけないこと */}
        <section className="mb-16">
          <SectionHeading id="ng">
            やってはいけないNG行動
          </SectionHeading>

          <p className="mb-6">
            停滞期に焦って行いがちな、逆効果のNG行動を解説します。<Marker>これらの行動は停滞期を長引かせるだけでなく、リバウンドの原因にもなります</Marker>。
          </p>

          <SubSectionHeading>NG1：カロリーをさらに大幅に減らす</SubSectionHeading>
          <p className="mb-4">
            最も多い間違いがこれです。「体重が減らないからもっと食べる量を減らそう」という発想は、停滞期では完全に逆効果です。カロリーをさらに減らすと、<Marker>体はさらに代謝を下げて対抗</Marker>します。結果として、非常に少ない食事量でも体重が減らない「超低代謝状態」に陥ります。
          </p>
          <p className="mb-4">
            特に基礎代謝を下回るカロリー制限は絶対に避けてください。基礎代謝以下の食事を続けると、筋肉の分解が急速に進み、ダイエット終了後のリバウンドリスクが大幅に上がります。
          </p>

          <SubSectionHeading>NG2：有酸素運動を一気に増やす</SubSectionHeading>
          <p className="mb-4">
            停滞期に「走れば痩せるはず」と突然ジョギングを始める人がいますが、カロリー制限中に急に有酸素運動を大量に行うと、<Marker color="blue">コルチゾールが急増し、水分貯留と筋肉分解が進みます</Marker>。運動を取り入れるなら、ウォーキングなどの軽い活動から始め、段階的に増やしましょう。
          </p>

          <SubSectionHeading>NG3：体重計に毎日何度も乗る</SubSectionHeading>
          <p className="mb-4">
            停滞期は精神的に辛い時期です。体重計に頻繁に乗ると、<Marker>水分変動による数百gの増減に一喜一憂</Marker>してしまい、メンタルが不安定になります。停滞期中は体重測定を週1回に減らすか、体重計から離れてウエストサイズで進捗を確認することをおすすめします。
          </p>

          <SubSectionHeading>NG4：ダイエットを完全にやめてしまう</SubSectionHeading>
          <p className="mb-4">
            「もう何をしても痩せない」と諦めてダイエットをやめてしまうのが最悪のパターンです。停滞期中も体の中では変化が起きています。<Marker>脂肪は減りながら水分が増えている</Marker>（体脂肪と水分の入れ替わり）場合、体重は変わらなくても体組成は改善しているのです。
          </p>

          <SubSectionHeading>NG5：サプリメントに頼りすぎる</SubSectionHeading>
          <p className="mb-4">
            「脂肪燃焼サプリ」「代謝アップサプリ」などの広告に惹かれがちですが、科学的に停滞期を突破するエビデンスのあるサプリメントはほぼありません。<Marker color="green">基本的な食事管理と生活習慣の改善が最も効果的</Marker>です。
          </p>

          <WarningBox title="停滞期のNG行動まとめ">
            <p className="mb-1">1. カロリーの大幅カット → 代謝がさらに低下して逆効果</p>
            <p className="mb-1">2. 急な有酸素運動 → コルチゾール増加で水分貯留</p>
            <p className="mb-1">3. 毎日体重を測る → メンタル悪化でモチベーション低下</p>
            <p className="mb-1">4. ダイエットを諦める → 最悪のリバウンドパターン</p>
            <p>5. サプリメント頼み → エビデンスなし、お金の無駄</p>
          </WarningBox>
        </section>

        <CTABanner
          title="停滞期こそ食事管理が重要"
          subtitle="たべなびで正確なカロリー管理を続けよう"
        />

        {/* Section 5: 外食ダイエットでの停滞期対策 */}
        <section className="mb-16">
          <SectionHeading id="eating-out">
            外食ダイエットでの停滞期対策
          </SectionHeading>

          <p className="mb-6">
            外食中心でダイエットしている方が停滞期に入った場合の具体的な対策を紹介します。<Marker>外食だからこそ使えるテクニック</Marker>も多くあります。
          </p>

          <SubSectionHeading>対策1：利用チェーン店をローテーションする</SubSectionHeading>
          <p className="mb-4">
            いつも同じチェーン店で同じメニューを食べていませんか？停滞期を突破するには、<Marker>異なるチェーン店、異なるメニュー</Marker>に切り替えることが効果的です。
          </p>

          <NutritionTable
            items={[
              { name: "月〜火：大戸屋 鶏むね肉の炭火焼き定食", calories: 520, protein: 35.2, fat: 12.8, carbs: 58.5, highlight: true },
              { name: "水〜木：サブウェイ BLT（ウィートブレッド）", calories: 315, protein: 14.8, fat: 10.2, carbs: 42.5 },
              { name: "金：ガスト 若鶏のグリル", calories: 398, protein: 35.2, fat: 12.5, carbs: 32.8, highlight: true },
              { name: "土：すき家 牛丼ライト（お肉1.5倍）", calories: 375, protein: 25.8, fat: 18.5, carbs: 28.2 },
              { name: "日：サイゼリヤ 柔らか青豆の温サラダ + ハンバーグ", calories: 485, protein: 22.5, fat: 25.8, carbs: 38.6 },
            ]}
            highlightProtein
          />

          <SubSectionHeading>対策2：同じカロリーでもPFCバランスを変える</SubSectionHeading>
          <p className="mb-4">
            <Link href="/guide/pfc-guide" className="text-sky-500 hover:text-sky-600">PFCバランス</Link>を変えることで、同じカロリーでも体の反応が変わります。停滞期に試したいPFC調整パターンを紹介します。
          </p>

          <ComparisonTable
            headers={["パターン", "P（タンパク質）", "F（脂質）", "C（炭水化物）", "向いている人"]}
            rows={[
              ["通常バランス", "25%", "25%", "50%", "現在のバランス"],
              ["高タンパク", "35%", "25%", "40%", "筋肉量低下が気になる人"],
              ["低脂質", "30%", "15%", "55%", "脂質を摂りすぎている人"],
              ["カーボサイクル", "30%", "25%", "45%/55%交互", "停滞が長引いている人"],
            ]}
            bestRowIndex={3}
          />

          <p className="mb-4">
            特に<Marker>カーボサイクル</Marker>（炭水化物の量を日によって変える方法）は停滞期突破に効果的です。高炭水化物の日（チェーン店の定食・丼物を活用）と低炭水化物の日（<Link href="/guide/low-carb-eating-out" className="text-sky-500 hover:text-sky-600">糖質制限メニュー</Link>を活用）を交互に設けます。
          </p>

          <SubSectionHeading>対策3：食物繊維を意識的に増やす</SubSectionHeading>
          <p className="mb-4">
            停滞期に便秘気味になる方は多いです。便秘は体重が減らない直接的な原因にもなります。外食で食物繊維を増やすには以下のメニューを追加しましょう。
          </p>

          <NutritionTable
            items={[
              { name: "セブンイレブン もずくスープ", calories: 18, protein: 0.8, fat: 0.3, carbs: 3.2, highlight: true },
              { name: "ファミマ 海藻サラダ", calories: 22, protein: 1.2, fat: 0.5, carbs: 3.8 },
              { name: "サイゼリヤ 小エビのサラダ", calories: 125, protein: 5.8, fat: 8.2, carbs: 6.5 },
              { name: "大戸屋 ひじきの煮物", calories: 65, protein: 2.5, fat: 2.8, carbs: 8.2, highlight: true },
              { name: "味噌汁（わかめ・豆腐）", calories: 42, protein: 3.2, fat: 1.5, carbs: 4.2 },
            ]}
          />

          <SubSectionHeading>対策4：食事のタイミングを変える</SubSectionHeading>
          <p className="mb-4">
            外食の時間帯を変えるだけでも体のリズムが変わり、停滞期突破のきっかけになることがあります。
          </p>

          <CheckList
            items={[
              "朝食をしっかり食べ、夕食を軽くする（カロリーの前倒し）",
              "昼食を12時ではなく13時にずらす（空腹時間を少し延ばす）",
              "夕食を19時から18時に早める（消化時間の確保）",
              "間食のタイミングを15時に固定する（血糖値の安定化）",
            ]}
          />

          <TipBox title="外食ダイエットの停滞期対策まとめ">
            <p>
              外食中心のダイエットで停滞期に入ったら、まず<Marker>利用するチェーン店とメニューを変える</Marker>ことから始めましょう。たべなびの栄養データベースを使えば、異なるチェーン店でも正確なカロリー管理が可能です。同じカロリーでも食材が変わることで体の反応が変わり、停滞期を突破するきっかけになります。
            </p>
          </TipBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop"
          alt="外食での健康的な食事"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-4">
            ダイエット停滞期は、体のホメオスタシスが正常に機能している証拠であり、ダイエットが順調に進んでいるサインです。<Marker>停滞期は必ず終わります</Marker>。焦って極端な行動に出ず、正しい対策を継続することが最も重要です。
          </p>
          <p className="mb-6">
            体重が減らなくなったら、まずは食事内容の変更と水分摂取の改善から始めてみてください。それでも2週間以上変化がなければ、<Link href="/guide/cheat-day" className="text-sky-500 hover:text-sky-600">チートデイ</Link>の導入を検討しましょう。<Link href="/guide/no-exercise-diet" className="text-sky-500 hover:text-sky-600">運動なしで食事だけで痩せている</Link>方は、<Link href="/guide/recording-diet" className="text-sky-500 hover:text-sky-600">食事記録</Link>を改めて見直し、隠れカロリーがないか確認することも大切です。
          </p>

          <CheckList
            items={[
              "停滞期はホメオスタシスによる正常な防衛反応（体重の5%減少後に発生しやすい）",
              "停滞期は通常2週間〜1ヶ月で終わる（焦らないことが重要）",
              "突破法1：食事内容を変える（カロリーはそのまま、食材をローテーション）",
              "突破法2：チートデイで低下したレプチンを回復させる",
              "突破法3：食べる順番を変えて血糖値コントロールを強化する",
              "突破法4：1日2〜2.5リットルの水分を意識的に摂取する",
              "突破法5：7〜8時間の睡眠で成長ホルモンの分泌を促す",
              "絶対NG：カロリーの大幅カット、急な有酸素運動、ダイエットの中止",
              "外食では利用チェーン店とメニューをローテーションすることが効果的",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※効果には個人差があります。持病のある方は医師にご相談ください。
          </p>
        </section>

        <FAQSection
          slug="diet-plateau"
          items={[
            { q: "ダイエット停滞期はいつから始まる？", a: "一般的には体重が開始時の5%減少したタイミングで始まることが多いです。例えば70kgの人なら3.5kg減って66.5kgになったあたりで最初の停滞期が訪れることが多くあります。" },
            { q: "停滞期はどのくらい続く？", a: "個人差が大きいですが、一般的には2週間～1ヶ月程度です。適切な対策を取れば短縮でき、焦って極端な行動に出ると長引くこともあります。2週間以上正確なカロリー管理をしているのに体重が変わらない場合が目安です。" },
            { q: "停滞期に食事量を減らしたら痩せる？", a: "逆効果です。カロリーをさらに減らすと体はさらに代謝を低下させて対抗します。基礎代謝を下回る食事を続けると筋肉の分解が進み、後のリバウンドリスクが大幅に上がります。" },
            { q: "停滞期に効果的なチートデイのやり方は？", a: "摂取カロリー目安は体重(kg)×40～45kcal、炭水化物を中心に増やします。必ず1日で終わらせ、翌日から通常のカロリー制限に戻してください。低下したレプチンの分泌回復に最も効果的です。" },
            { q: "外食ダイエット中の停滞期対策は？", a: "いつも同じチェーン店の同じメニューを避け、異なるチェーン店と異なるメニューに切り替えることが効果的です。同じカロリーでもPFCバランス（タンパク質・脂質・炭水化物の比率）を変えることで体の反応が変わり、停滞期突破のきっかけになります。" },
          ]}
        />

        <ArticleFooter currentSlug="diet-plateau" />

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
