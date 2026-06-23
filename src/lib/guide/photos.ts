// 記事に挿入する画像の単一の真実(マニフェスト)。
//
// 2系統:
//  1) MENU_PHOTOS … 自分で撮った「実写真」(/public/guide/photos/ に置く)。最優先で表示。
//  2) MENU_STOCK  … 著作権フリー画像(Unsplash)の「代用イメージ」。実写真が無い間の表示。
//                   ※Unsplash CDNから直リンク(別ドメイン配信=Vercelの帯域/Edgeを消費しない)。
//
// 同じ id に実写真を登録すると MENU_STOCK を自動で上書きする。
// 実写真の運用フロー:
//   1. 外食時にメニューをスマホで撮影
//   2. Web用にリサイズ(横1200px・JPG・300KB以下。/public/guide/photos/README.md 参照)
//   3. /public/guide/photos/<id>.jpg として保存
//   4. このファイルの MENU_PHOTOS に1行追加
//   → <MenuPhoto id="<id>" /> が実写真に切り替わる(「撮影: たべなび」表記)。
//
// 実写真は「自分で撮った実物」のみ。公式サイトの写真は著作権上NG。
// 代用イメージは「※写真はイメージ」と明記して表示する(本物と誤認させない)。

export interface PhotoEntry {
  src: string;
  alt: string;
  caption?: string;
}

// ─── 実写真(撮影したら登録。これが最優先) ───
export const MENU_PHOTOS: Record<string, PhotoEntry> = {
  // "seven-sanma-shioyaki": {
  //   src: "/guide/photos/seven-sanma-shioyaki.jpg",
  //   alt: "セブンイレブン 7プレミアム さんまの塩焼",
  //   caption: "セブンの「さんまの塩焼」。162kcalでタンパク質30g",
  // },
};

// ─── 代用イメージ(著作権フリー・Unsplash直リンク・被写体は全て目視確認済み) ───
const U = (id: string) => `https://images.unsplash.com/${id}?w=800&h=400&fit=crop`;

// メニュー個別の代用(id一致で最優先の代用)。
export const MENU_STOCK: Record<string, PhotoEntry> = {
  "seven-sanma-shioyaki": { src: U("photo-1467003909585-2f8a72700288"), alt: "焼き魚のイメージ", caption: "焼き魚のイメージ" },
  "mcdonalds-eguchi": { src: U("photo-1568901346375-23c9450c58cd"), alt: "ハンバーガーのイメージ", caption: "ハンバーガーのイメージ" },
  "yayoiken-shimahokke": { src: U("photo-1490645935967-10de6ba17061"), alt: "バランスの良い定食のイメージ", caption: "バランス定食のイメージ" },
  "ootoya-shimahokke": { src: U("photo-1467003909585-2f8a72700288"), alt: "焼き魚定食のイメージ", caption: "焼き魚定食のイメージ" },
};

// ジャンル別フォールバック。<MenuPhoto id="..." genre="ramen" /> のように指定。
// 個別の代用も実写真も無い場合に、ジャンルの代表イメージを表示する。被写体は全て目視確認済み。
// ※ 牛丼/とんかつ/和定食はUnsplashに正確な無料画像が無いため未収録(誤画像を避ける。実写真で対応)。
export const GENRE_STOCK: Record<string, PhotoEntry> = {
  burger: { src: U("photo-1568901346375-23c9450c58cd"), alt: "ハンバーガーのイメージ", caption: "ハンバーガーのイメージ" },
  pasta: { src: U("photo-1555949258-eb67b1ef0ceb"), alt: "パスタのイメージ", caption: "パスタのイメージ" },
  udon: { src: U("photo-1618841557871-b4664fbf0cb3"), alt: "うどんのイメージ", caption: "うどんのイメージ" },
  chinese: { src: U("photo-1563245372-f21724e3856d"), alt: "中華料理のイメージ", caption: "中華料理のイメージ" },
  ramen: { src: U("photo-1569718212165-3a8278d5f624"), alt: "ラーメンのイメージ", caption: "ラーメンのイメージ" },
  curry: { src: U("photo-1631292784640-2b24be784d5d"), alt: "カレーのイメージ", caption: "カレーのイメージ" },
  "fried-chicken": { src: U("photo-1562967914-608f82629710"), alt: "フライドチキン・唐揚げのイメージ", caption: "フライドチキンのイメージ" },
  "grilled-chicken": { src: U("photo-1532550907401-a500c9a57435"), alt: "グリルチキンのイメージ", caption: "グリルチキンのイメージ" },
  "grilled-fish": { src: U("photo-1467003909585-2f8a72700288"), alt: "焼き魚のイメージ", caption: "焼き魚のイメージ" },
  salmon: { src: U("photo-1580959375944-abd7e991f971"), alt: "鮭・サーモン料理のイメージ", caption: "サーモン料理のイメージ" },
  sushi: { src: U("photo-1611143669185-af224c5e3252"), alt: "寿司のイメージ", caption: "寿司のイメージ" },
  pancake: { src: U("photo-1567620905732-2d1ec7ab7445"), alt: "パンケーキ・朝食のイメージ", caption: "朝食・パンケーキのイメージ" },
  sandwich: { src: U("photo-1539252554453-80ab65ce3586"), alt: "サンドイッチのイメージ", caption: "サンドイッチのイメージ" },
  steak: { src: U("photo-1600891964092-4316c288032e"), alt: "ステーキ・肉料理のイメージ", caption: "ステーキ・肉料理のイメージ" },
  pizza: { src: U("photo-1565299624946-b28f40a0ae38"), alt: "ピザのイメージ", caption: "ピザのイメージ" },
  cafe: { src: U("photo-1495474472287-4d71bcdd2085"), alt: "カフェ・コーヒーのイメージ", caption: "コーヒーのイメージ" },
  salad: { src: U("photo-1490645935967-10de6ba17061"), alt: "ヘルシーなサラダボウルのイメージ", caption: "ヘルシーサラダのイメージ" },
  "chicken-dish": { src: U("photo-1604908176997-125f25cc6f3d"), alt: "鶏肉料理のイメージ", caption: "鶏肉料理のイメージ" },
};
