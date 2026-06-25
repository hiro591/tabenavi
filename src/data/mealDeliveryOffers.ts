// A8アフィリの「宅配食・プロテイン等サービス案件」マスタ。
// 既存の affiliateProducts.ts(Amazon/楽天の物販) とは別系統(単一の広告リンクを文脈配置する用)。
//
// 運用フロー(承認後):
//   1. A8で提携承認 → 広告リンク(URL)を取得
//   2. 下の該当オファーの url に貼る
//   → tag が一致する記事の <ServiceOffers tag="..." /> に自動表示される(url が空なら非表示=凍結に影響なし)
//
// 表示は意図の合う面B(ダイエット手法)記事のみ。面A(チェーンカロリー)には出さない方針。
// 景表法/ステマ規制: カードに「PR」表記を付与し、リンクは rel="sponsored nofollow"。

export type ServiceTag = "diet" | "protein" | "restriction";

export type ServiceOffer = {
  id: string;
  name: string;
  description: string;
  url: string; // A8の広告リンク。空なら非表示
  tags: ServiceTag[];
  priceHint?: string;
  // A8が提供する広告素材(バナー画像)のsrc。アフィリ用に利用許諾された画像のみ可。
  // 空なら画像なしで表示(テキスト+ボタンのみ)。公式サイトからの無断転載は不可。
  imageUrl?: string;
  imageAlt?: string;
};

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    id: "nosh",
    name: "nosh（ナッシュ）",
    description: "低糖質・塩分控えめのメニューが中心の宅配食。外食が続いて栄養が偏りがちな日の置き換えに便利です。",
    url: "", // ← A8承認後にリンクを設定
    tags: ["diet", "restriction"],
  },
  {
    id: "muscle-deli",
    name: "マッスルデリ",
    description: "高タンパク・PFCバランスを重視した宅配食。筋トレ・ボディメイク中の食事管理を手軽にしたい人向け。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B61WG+1IRWFM+4CPY+62U35",
    imageUrl: "https://www25.a8.net/svt/bgt?aid=260622880092&wid=001&eno=01&mid=s00000020311001021000&mc=1",
    imageAlt: "マッスルデリの高タンパク宅配食",
    tags: ["protein"],
  },
  {
    id: "tsurukame",
    name: "Dr.つるかめキッチン",
    description: "糖質・塩分・カロリーを抑えた制限食の宅配。健康管理を意識した食事に切り替えたい人向け。",
    url: "https://px.a8.net/svt/ejp?a8mat=4B61WG+1JYRN6+48GW+60OXD",
    imageUrl: "https://www23.a8.net/svt/bgt?aid=260622880094&wid=001&eno=01&mid=s00000019760001011000&mc=1",
    imageAlt: "Dr.つるかめキッチンの制限食宅配",
    tags: ["diet", "restriction"],
  },
  {
    id: "bpro",
    name: "Bpro（ビープロ）",
    description: "chocoZAP（チョコザップ）のプロテイン。ソイ＆ホエイのWプロテインで1食あたりタンパク質20gを手軽に補給。チョコ・バナナ・キャラメルの3フレーバー。",
    url: "",
    tags: ["protein"],
  },
];
