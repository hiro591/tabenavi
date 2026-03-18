import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Lightbulb, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "【2026年最新】外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方 | たべなび",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。PFCバランスの基本も解説。",
  keywords:
    "外食 ダイエット,外食 痩せる,チェーン店 ダイエット,外食 カロリー,ダイエット 外食 おすすめ",
  openGraph: {
    title:
      "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
    description:
      "外食しながら痩せたい人のための完全ガイド。チェーン店別おすすめメニューと太らない食べ方を紹介。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "外食ダイエット完全ガイド｜チェーン店別おすすめメニューと太らない食べ方",
  description:
    "外食しながら痩せたい人のための完全ガイド。マクドナルド・吉野家・サイゼリヤなどチェーン店別の低カロリーおすすめメニューと、太らないための5つのルールを紹介。",
  datePublished: "2026-03-01",
  dateModified: "2026-03-18",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/eating-out-diet",
};

const tocItems = [
  { id: "is-it-possible", label: "外食でダイエットは可能？" },
  { id: "chain-menus", label: "チェーン店別 ダイエットおすすめメニュー" },
  { id: "five-rules", label: "外食で太らないための5つのルール" },
  { id: "pfc-basics", label: "PFCバランスの基本" },
  { id: "tabenavi-cta", label: "たべなびで外食の栄養管理を簡単に" },
  { id: "summary", label: "まとめ" },
];

/* ─── Subcomponents ─── */

function NutritionPill({
  label,
  value,
  unit,
  color,
}: {
  label: string;
  value: string;
  unit: string;
  color: "orange" | "blue" | "amber" | "green";
}) {
  const colorMap = {
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    green: "bg-green-50 text-green-700 border-green-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${colorMap[color]}`}
    >
      {label}
      <span className="font-bold">
        {value}
        {unit}
      </span>
    </span>
  );
}

function MenuCard({
  name,
  calories,
  protein,
  fat,
  carbs,
  recommended,
}: {
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  recommended?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border p-4 transition-shadow hover:shadow-md ${
        recommended
          ? "border-orange-300 bg-gradient-to-br from-orange-50/60 to-white shadow-sm"
          : "border-gray-200 bg-white"
      }`}
    >
      {recommended && (
        <span className="absolute -top-2.5 right-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
          おすすめ
        </span>
      )}
      <p className="font-bold text-gray-900 text-sm sm:text-base mb-3">
        {name}
      </p>
      <div className="flex flex-wrap gap-1.5">
        <NutritionPill
          label="Cal"
          value={String(calories)}
          unit="kcal"
          color="orange"
        />
        <NutritionPill
          label="P"
          value={protein.toFixed(1)}
          unit="g"
          color="blue"
        />
        <NutritionPill
          label="F"
          value={fat.toFixed(1)}
          unit="g"
          color="amber"
        />
        <NutritionPill
          label="C"
          value={carbs.toFixed(1)}
          unit="g"
          color="green"
        />
      </div>
    </div>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 pl-4 border-l-4 border-orange-400 bg-orange-50/40 py-3 pr-4 rounded-r-lg scroll-mt-20"
    >
      {children}
    </h2>
  );
}

function TipBox({
  title,
  children,
  icon,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  icon?: "lightbulb" | "check";
  color?: "blue" | "green" | "amber";
}) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      title: "text-blue-900",
      icon: "text-blue-500",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      title: "text-green-900",
      icon: "text-green-500",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      title: "text-amber-900",
      icon: "text-amber-500",
    },
  };
  const c = colorMap[color];
  const IconComponent = icon === "check" ? CheckCircle : Lightbulb;

  return (
    <div className={`${c.bg} ${c.border} border rounded-xl p-5 sm:p-6 my-6`}>
      <div className="flex items-center gap-2 mb-2">
        <IconComponent className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
        <h3 className={`text-sm sm:text-base font-bold ${c.title}`}>
          {title}
        </h3>
      </div>
      <div className="text-sm sm:text-base text-gray-700 leading-7">
        {children}
      </div>
    </div>
  );
}

function SectionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden my-6 shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        unoptimized
      />
    </div>
  );
}

function CtaBanner({ mid }: { mid?: boolean }) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 sm:p-8 my-10 text-center shadow-lg shadow-orange-200/50">
      <p className="text-white/90 text-sm sm:text-base mb-2">
        {mid
          ? "外食の栄養管理、もっとラクにしませんか？"
          : "ここまで読んでくれたあなたへ"}
      </p>
      <p className="text-white text-lg sm:text-xl font-bold mb-4">
        {mid
          ? "たべなびなら3タップで記録完了"
          : "たべなびで、外食ダイエットを始めよう"}
      </p>
      <Link
        href="/signup"
        className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-orange-50 transition-colors shadow-md"
      >
        無料で始める
      </Link>
    </div>
  );
}

function ComparisonTable({
  headers,
  rows,
  highlightBest,
}: {
  headers: string[];
  rows: (string | number)[][];
  highlightBest?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 my-6 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-orange-50 to-amber-50">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 font-bold text-gray-800 text-xs sm:text-sm"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${
                i === highlightBest
                  ? "bg-orange-50/50 font-semibold"
                  : i % 2 === 0
                  ? "bg-white"
                  : "bg-gray-50/50"
              } border-t border-gray-100`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${
                    j === 0 ? "text-gray-900 font-medium" : "text-gray-700"
                  } ${i === highlightBest ? "text-orange-800" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Main Page ─── */

export default function EatingOutDietPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">ガイド一覧</span>
          </Link>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 pt-10 pb-6">
          <p className="text-orange-600 font-semibold text-sm mb-3 tracking-wide">
            COMPLETE GUIDE
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            外食ダイエット完全ガイド
            <br />
            <span className="text-xl sm:text-2xl font-bold text-gray-600">
              チェーン店別おすすめメニューと太らない食べ方
            </span>
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            最終更新: 2026年3月 | 読了目安: 10分
          </p>
          <div className="relative w-full h-48 sm:h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
              alt="ヘルシーな外食の食事風景"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-10">
        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 mb-8">
          「ダイエット中だけど、外食をやめられない...」そんな悩みを持つ方は多いのではないでしょうか。実は、
          <strong className="text-gray-900">
            外食＝太るというのは大きな誤解
          </strong>
          です。メニューの選び方と食べ方のコツさえ押さえれば、マクドナルドでも吉野家でもダイエットは十分に可能です。
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 mb-8">
          この記事では、主要チェーン店のダイエット向きメニューを
          <strong className="text-gray-900">
            具体的なカロリー・PFCデータ
          </strong>
          とともに紹介し、外食でも確実に痩せるための実践的なルールを解説します。忙しくて自炊ができない方、付き合いで外食が多い方にこそ読んでほしい完全ガイドです。
        </p>

        {/* Table of Contents */}
        <nav className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-2xl border border-orange-200/60 p-6 sm:p-8 mb-12 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xs font-bold">
              目
            </span>
            この記事の目次
          </h2>
          <ol className="space-y-3">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-sm sm:text-base text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors flex-shrink-0">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ─── Section 1: 外食でダイエットは可能？ ─── */}
        <section className="mb-14">
          <SectionHeading id="is-it-possible">
            外食でダイエットは可能？
          </SectionHeading>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-4">
            結論から言えば、
            <strong className="text-gray-900">
              外食でもダイエットは十分に可能
            </strong>
            です。ダイエットの大原則は「消費カロリー &gt; 摂取カロリー」というシンプルな方程式。これは自炊でも外食でも変わりません。
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-6">
            多くの人が「外食＝太る」と思い込んでいるのは、外食時に高カロリーなメニューを無意識に選んでしまうから。実際にはチェーン店のメニューには
            <strong className="text-gray-900">300kcal台のものも多数</strong>
            あり、選び方次第でダイエット食になります。
          </p>

          <TipBox title="カロリー管理の基本数値" icon="lightbulb" color="blue">
            <ul className="space-y-1.5">
              <li>
                -- 成人男性の1日の消費カロリー目安:{" "}
                <strong>約2,200〜2,600kcal</strong>
              </li>
              <li>
                -- 成人女性の1日の消費カロリー目安:{" "}
                <strong>約1,700〜2,000kcal</strong>
              </li>
              <li>
                -- ダイエット中の1食あたりの目安:{" "}
                <strong>500〜700kcal</strong>
              </li>
              <li>
                -- 月に1kg痩せるには: 1日あたり<strong>約240kcalの赤字</strong>
                が必要
              </li>
            </ul>
          </TipBox>

          <p className="text-base sm:text-lg text-gray-600 leading-7">
            つまり、1食を500〜700kcalに抑えれば、外食しても十分にダイエットできます。チェーン店は栄養成分が公開されているので、むしろ個人経営のレストランより管理しやすいとも言えます。
          </p>
        </section>

        {/* ─── Section 2: チェーン店別 ─── */}
        <section className="mb-14">
          <SectionHeading id="chain-menus">
            チェーン店別 ダイエットおすすめメニュー
          </SectionHeading>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-6">
            ここからは、主要チェーン店ごとにダイエット中でも食べられるメニューを具体的なカロリー・PFCデータとともに紹介します。すべてのデータは各社公式サイトの公開情報に基づいています。
          </p>

          {/* マクドナルド */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold shadow-sm">
                M
              </span>
              マクドナルドのダイエットメニュー
            </h3>

            <SectionImage
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop"
              alt="ハンバーガーの写真"
            />

            <p className="text-base sm:text-lg text-gray-600 leading-7 mb-4">
              意外かもしれませんが、マクドナルドにはダイエット向きのメニューが複数あります。ポイントは
              <strong className="text-gray-900">
                バーガー単品で注文し、セットのポテトとドリンクを避ける
              </strong>
              こと。ポテトM（410kcal）とコーラM（140kcal）を追加するだけで550kcalも上乗せされます。
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <MenuCard
                name="ハンバーガー"
                calories={259}
                protein={13.2}
                fat={9.4}
                carbs={30.2}
                recommended
              />
              <MenuCard
                name="エッグマックマフィン"
                calories={311}
                protein={19.2}
                fat={13.5}
                carbs={27.0}
                recommended
              />
              <MenuCard
                name="チキンクリスプ"
                calories={345}
                protein={14.8}
                fat={15.5}
                carbs={36.6}
              />
              <MenuCard
                name="フィレオフィッシュ"
                calories={341}
                protein={14.7}
                fat={14.1}
                carbs={38.2}
              />
              <MenuCard
                name="チキンマックナゲット 5ピース"
                calories={263}
                protein={16.0}
                fat={15.3}
                carbs={15.1}
              />
            </div>

            <TipBox title="マクドナルド攻略のコツ" icon="lightbulb" color="amber">
              <p>
                特におすすめは
                <strong>ハンバーガー単品（259kcal）</strong>
                。たんぱく質13.2gも摂れてワンコイン以下。朝マックなら
                <strong>
                  エッグマックマフィン（311kcal、P19.2g）
                </strong>
                がベストです。セットを頼む場合はポテトをサイドサラダに変更しましょう。
              </p>
            </TipBox>

            <p className="text-sm text-gray-500">
              <Link
                href="/guide/mcdonalds"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                マクドナルドの全メニュー栄養成分一覧はこちら &rarr;
              </Link>
            </p>
          </div>

          {/* 吉野家 */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold shadow-sm">
                吉
              </span>
              吉野家のダイエットメニュー
            </h3>

            <SectionImage
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=400&fit=crop"
              alt="牛丼の写真"
            />

            <p className="text-base sm:text-lg text-gray-600 leading-7 mb-4">
              吉野家でダイエット中に最も重要なのは
              <strong className="text-gray-900">サイズ選び</strong>
              です。牛丼は並盛（635kcal）と大盛（863kcal）で約230kcalもの差があります。また、ライザップとのコラボ商品や、ご飯を豆腐に変更できるメニューが糖質制限中に活躍します。
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <MenuCard
                name="ライザップ牛サラダ"
                calories={398}
                protein={28.0}
                fat={25.2}
                carbs={17.2}
                recommended
              />
              <MenuCard
                name="牛皿（並盛）"
                calories={248}
                protein={14.8}
                fat={17.3}
                carbs={5.7}
                recommended
              />
              <MenuCard
                name="牛丼（小盛）"
                calories={488}
                protein={15.9}
                fat={16.0}
                carbs={66.0}
              />
              <MenuCard
                name="牛丼（並盛）"
                calories={635}
                protein={20.0}
                fat={20.4}
                carbs={89.0}
              />
              <MenuCard
                name="サラシア牛丼（並盛）"
                calories={630}
                protein={19.5}
                fat={20.4}
                carbs={88.0}
              />
            </div>

            {/* Comparison table: size vs calories */}
            <ComparisonTable
              headers={["サイズ", "カロリー", "タンパク質", "差分"]}
              rows={[
                ["牛丼（小盛）", "488 kcal", "15.9g", "基準"],
                ["牛丼（並盛）", "635 kcal", "20.0g", "+147 kcal"],
                ["牛丼（大盛）", "863 kcal", "26.0g", "+375 kcal"],
              ]}
              highlightBest={0}
            />

            <TipBox title="吉野家攻略のコツ" icon="lightbulb" color="green">
              <p>
                一番のおすすめは
                <strong>
                  ライザップ牛サラダ（398kcal、P28.0g）
                </strong>
                。ご飯なしで牛肉の旨味と野菜がしっかり摂れます。糖質制限中の方には
                <strong>牛皿（248kcal）</strong>
                単品もおすすめです。
              </p>
            </TipBox>

            <p className="text-sm text-gray-500">
              <Link
                href="/guide/yoshinoya"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                吉野家の全メニュー栄養成分一覧はこちら &rarr;
              </Link>
            </p>
          </div>

          {/* Mid-article CTA */}
          <CtaBanner mid />

          {/* サイゼリヤ */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold shadow-sm">
                S
              </span>
              サイゼリヤのダイエットメニュー
            </h3>

            <SectionImage
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
              alt="サラダの写真"
            />

            <p className="text-base sm:text-lg text-gray-600 leading-7 mb-4">
              サイゼリヤはダイエッターにとって
              <strong className="text-gray-900">最強のファミレス</strong>
              です。500円以下で高タンパク・低カロリーなメニューが多数あり、コスパと栄養バランスの両立が可能。特にグリル系メニューとサラダの組み合わせが優秀です。
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <MenuCard
                name="若鶏のグリル"
                calories={514}
                protein={35.3}
                fat={28.7}
                carbs={26.6}
                recommended
              />
              <MenuCard
                name="ミックスグリル"
                calories={478}
                protein={32.2}
                fat={30.5}
                carbs={16.0}
                recommended
              />
              <MenuCard
                name="ディアボラ風ハンバーグ"
                calories={542}
                protein={27.5}
                fat={34.1}
                carbs={28.7}
              />
              <MenuCard
                name="柔らか青豆の温サラダ"
                calories={166}
                protein={9.1}
                fat={8.7}
                carbs={12.6}
              />
              <MenuCard
                name="小エビのサラダ"
                calories={125}
                protein={6.4}
                fat={7.5}
                carbs={8.3}
              />
            </div>

            <TipBox
              title="サイゼリヤ攻略のコツ"
              icon="lightbulb"
              color="green"
            >
              <p>
                <strong>若鶏のグリル（514kcal、P35.3g）</strong>
                がイチオシ。税込500円でタンパク質35gは驚異的。小エビのサラダ（125kcal）と組み合わせても合計639kcal、P41.7gで800円以下に収まります。
              </p>
            </TipBox>

            <p className="text-sm text-gray-500">
              <Link
                href="/guide/saizeriya"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                サイゼリヤの全メニュー栄養成分一覧はこちら &rarr;
              </Link>
            </p>
          </div>

          {/* コンビニ */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-bold shadow-sm">
                C
              </span>
              コンビニのダイエットメニュー
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-7 mb-4">
              コンビニは
              <strong className="text-gray-900">
                栄養表示が全商品に記載
              </strong>
              されているため、カロリー管理が最もしやすい外食先です。サラダチキンに代表される高タンパク商品も年々充実しています。
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <MenuCard
                name="サラダチキン（プレーン）"
                calories={114}
                protein={24.1}
                fat={1.2}
                carbs={1.0}
                recommended
              />
              <MenuCard
                name="たんぱく質が摂れるチキン＆チリ"
                calories={252}
                protein={27.4}
                fat={9.3}
                carbs={15.7}
                recommended
              />
              <MenuCard
                name="ゆで卵 2個入り"
                calories={130}
                protein={11.0}
                fat={8.6}
                carbs={0.6}
              />
              <MenuCard
                name="もち麦おにぎり（枝豆と塩昆布）"
                calories={178}
                protein={4.2}
                fat={2.1}
                carbs={36.5}
              />
              <MenuCard
                name="ブランパン 2個入り"
                calories={130}
                protein={6.6}
                fat={3.4}
                carbs={14.6}
              />
            </div>

            <TipBox title="コンビニ黄金コンビ" icon="check" color="green">
              <p>
                時間がないときは
                <strong>
                  サラダチキン＋おにぎり1個（合計約400kcal、P28g超）
                </strong>
                が最強の組み合わせ。サラダチキンは味のバリエーションも豊富で飽きにくいです。
              </p>
            </TipBox>

            <p className="text-sm text-gray-500">
              <Link
                href="/guide/conveni"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-2"
              >
                コンビニの高タンパク商品ランキングはこちら &rarr;
              </Link>
            </p>
          </div>

          {/* Chain comparison table */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
            チェーン店別 ベストメニュー比較
          </h3>
          <ComparisonTable
            headers={["チェーン店", "ベストメニュー", "カロリー", "タンパク質"]}
            rows={[
              ["マクドナルド", "ハンバーガー", "259 kcal", "13.2g"],
              ["吉野家", "ライザップ牛サラダ", "398 kcal", "28.0g"],
              ["サイゼリヤ", "若鶏のグリル", "514 kcal", "35.3g"],
              ["コンビニ", "サラダチキン", "114 kcal", "24.1g"],
            ]}
            highlightBest={3}
          />
        </section>

        {/* ─── Section 3: 5つのルール ─── */}
        <section className="mb-14">
          <SectionHeading id="five-rules">
            外食で太らないための5つのルール
          </SectionHeading>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-8">
            どのチェーン店に行くかより、
            <strong className="text-gray-900">どう選ぶか</strong>
            が重要です。以下の5つのルールを習慣にすれば、どんな外食先でもダイエットを続けられます。
          </p>

          {[
            {
              num: 1,
              title: "メニューのカロリーを事前チェック",
              body: "お店に入る前に、公式サイトやたべなびでカロリーを確認しましょう。空腹の状態でメニューを見ると高カロリーなものに目が行きがちです。事前に「これを食べる」と決めておくことで、衝動的な注文を防げます。大手チェーン店のほとんどが栄養成分を公開しているので、確認は数十秒で完了します。",
            },
            {
              num: 2,
              title: "タンパク質を意識して選ぶ",
              body: "ダイエット中に最も不足しやすいのがタンパク質です。タンパク質が足りないと筋肉が減り、基礎代謝が下がり、リバウンドしやすい体になります。1食あたり20g以上のタンパク質を目安にメニューを選びましょう。肉・魚・卵を使ったメニューを優先し、サイドメニューで補うのも有効です。",
            },
            {
              num: 3,
              title: "ドリンクのカロリーに注意",
              body: "見落としがちなのがドリンクのカロリーです。コーラMサイズ（140kcal）、カフェラテ（約200kcal）、シェイク（約350kcal）と、飲み物だけで軽い食事分のカロリーを摂ってしまうことも。ダイエット中は水・お茶・ブラックコーヒー・ゼロカロリー飲料を選びましょう。",
            },
            {
              num: 4,
              title: "セットよりも単品",
              body: "セットメニューは一見お得ですが、必要ないサイドメニューやドリンクがついてカロリーが大幅に増えます。例えばマクドナルドではバリューセットにするだけで500kcal以上追加されることも。「単品＋水」を基本にし、本当に必要なものだけを追加注文するクセをつけましょう。",
            },
            {
              num: 5,
              title: "記録する習慣をつける",
              body: "食べたものを記録するだけで、意識が変わりダイエット効果が上がることが研究でも証明されています。問題は「面倒で続かない」こと。たべなびなら外食チェーンのメニューを3タップで記録でき、カロリーとPFCバランスを自動で集計。面倒な計算なしで食事管理が続けられます。",
            },
          ].map((rule) => (
            <div
              key={rule.num}
              className="mb-6 rounded-2xl border border-gray-200 overflow-hidden hover:border-orange-200 transition-colors"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-white px-5 py-3 border-b border-gray-100">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {rule.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {rule.title}
                </h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm sm:text-base text-gray-600 leading-7">
                  {rule.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ─── Section 4: PFCバランスの基本 ─── */}
        <section className="mb-14">
          <SectionHeading id="pfc-basics">
            PFCバランスの基本
          </SectionHeading>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-6">
            PFCとは、三大栄養素である
            <strong className="text-gray-900">
              Protein（タンパク質）、Fat（脂質）、Carbohydrate（炭水化物）
            </strong>
            の頭文字です。ダイエットではカロリーの「総量」だけでなく、この3つのバランスも重要になります。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 text-center border border-blue-200/60 shadow-sm">
              <p className="text-3xl font-extrabold text-blue-600 mb-1">P</p>
              <p className="text-sm font-bold text-gray-900 mb-2">
                タンパク質
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                筋肉・肌・髪の材料。1gあたり4kcal。ダイエット中は体重1kgあたり1.5〜2g摂取が目安。
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-5 text-center border border-amber-200/60 shadow-sm">
              <p className="text-3xl font-extrabold text-amber-600 mb-1">F</p>
              <p className="text-sm font-bold text-gray-900 mb-2">脂質</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                ホルモンや細胞膜の材料。1gあたり9kcal。摂りすぎ注意だが、ゼロはNG。
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-5 text-center border border-green-200/60 shadow-sm">
              <p className="text-3xl font-extrabold text-green-600 mb-1">C</p>
              <p className="text-sm font-bold text-gray-900 mb-2">
                炭水化物
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                脳と体のエネルギー源。1gあたり4kcal。過剰分が脂肪として蓄積される。
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 mb-6 border border-gray-200/60">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4">
              ダイエット中のPFC目安比率
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-blue-600 w-24">
                  タンパク質
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: "30%" }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      30%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-amber-600 w-24">
                  脂質
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: "25%" }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      25%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-green-600 w-24">
                  炭水化物
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: "45%" }}
                  >
                    <span className="text-[10px] font-bold text-white">
                      45%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※
              これは一般的なダイエット向けの目安です。体重・運動量・目標によって最適な比率は異なります。
            </p>
          </div>

          <TipBox title="具体的な計算例" icon="lightbulb" color="blue">
            <p>
              例えば1日<strong>1,800kcal</strong>を目標にする場合:
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                -- P（タンパク質）: 540kcal分 ={" "}
                <strong className="text-blue-700">約135g</strong>
              </li>
              <li>
                -- F（脂質）: 450kcal分 ={" "}
                <strong className="text-amber-700">約50g</strong>
              </li>
              <li>
                -- C（炭水化物）: 810kcal分 ={" "}
                <strong className="text-green-700">約203g</strong>
              </li>
            </ul>
            <p className="mt-2">
              外食で高タンパクメニューを選ぶことが、PFCバランスを整える最も簡単な方法です。
            </p>
          </TipBox>
        </section>

        {/* ─── Section 5: CTA ─── */}
        <section className="mb-14">
          <SectionHeading id="tabenavi-cta">
            たべなびで外食の栄養管理を簡単に
          </SectionHeading>
          <p className="text-base sm:text-lg text-gray-600 leading-7 mb-6">
            「カロリーやPFCが大事なのはわかったけど、毎回調べるのは面倒...」という方にこそ使ってほしいのが
            <strong className="text-gray-900">たべなび</strong>です。
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-200/60 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              たべなびの特徴
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              {[
                {
                  icon: "20+",
                  text: "チェーン店の全メニュー栄養データを収録",
                },
                {
                  icon: "3tap",
                  text: "3タップで食事を記録。面倒な手入力は不要",
                },
                {
                  icon: "PFC",
                  text: "1日のカロリー・PFCバランスを自動で集計",
                },
                {
                  icon: "Free",
                  text: "外食中心の食生活でも簡単に栄養管理が続く",
                },
              ].map((feature) => (
                <div
                  key={feature.icon}
                  className="flex items-start gap-3 bg-white/70 rounded-xl p-4"
                >
                  <span className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {feature.icon}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-3.5 rounded-full font-bold text-base transition-all hover:shadow-lg hover:shadow-orange-200 shadow-md"
              >
                たべなびを無料で始める
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section 6: まとめ ─── */}
        <section className="mb-14">
          <SectionHeading id="summary">この記事のまとめ</SectionHeading>

          <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-2xl p-6 sm:p-8 border border-gray-200/60">
            <ul className="space-y-4">
              {[
                {
                  bold: "外食＝太るは誤解。",
                  text: "メニューの選び方次第でダイエットは十分可能",
                },
                {
                  bold: "1食の目安は500〜700kcal。",
                  text: "チェーン店には300kcal台のメニューも多数",
                },
                {
                  bold: "チェーン店のベスト:",
                  text: "マクドナルド ハンバーガー（259kcal）、吉野家 ライザップ牛サラダ（398kcal）、サイゼリヤ 若鶏のグリル（514kcal、P35.3g）",
                },
                {
                  bold: "5つのルール:",
                  text: "「事前チェック」「タンパク質重視」「ドリンク注意」「単品注文」「記録」を習慣に",
                },
                {
                  bold: "PFCバランスは P30:F25:C45",
                  text: "を目安に、高タンパクメニューを優先",
                },
                {
                  bold: "たべなびなら",
                  text: "外食チェーンのメニューを3タップで記録、栄養管理が簡単に",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-700 leading-7">
                    <strong className="text-gray-900">{item.bold}</strong>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related guide links */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            関連するガイド記事
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "mcdonalds", name: "マクドナルド" },
              { slug: "yoshinoya", name: "吉野家" },
              { slug: "saizeriya", name: "サイゼリヤ" },
              { slug: "matsuya", name: "松屋" },
              { slug: "sukiya", name: "すき家" },
              { slug: "conveni", name: "コンビニ" },
              { slug: "muscle-eating-out", name: "筋トレ×外食ガイド" },
            ].map((link) => (
              <Link
                key={link.slug}
                href={`/guide/${link.slug}`}
                className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <CtaBanner />

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
