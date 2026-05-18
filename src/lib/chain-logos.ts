// Chain logos — all served from /public/chain-logos/ (local, high-quality SVG/PNG)
// SVG preferred for infinite scalability; PNG used where only high-res PNG available.

export type ChainLogoInfo = {
  url: string;
  /** bg color to show behind logo (most logos have transparency) */
  bg: string;
};

// Map: chain name keyword → { url, bg }
// bg is white for most logos to ensure visibility in both light and dark contexts
const CHAIN_LOGO_MAP: [string, ChainLogoInfo][] = [
  // ── コンビニ ──────────────────────────────────────────────────────────────
  ["セブンイレブン",    { url: "/chain-logos/seven-eleven.svg", bg: "#ffffff" }],
  ["セブン-イレブン",   { url: "/chain-logos/seven-eleven.svg", bg: "#ffffff" }],
  ["ローソン",          { url: "/chain-logos/lawson.svg",        bg: "#ffffff" }],
  ["ファミリーマート",  { url: "/chain-logos/familymart.svg",    bg: "#ffffff" }],
  ["ファミマ",          { url: "/chain-logos/familymart.svg",    bg: "#ffffff" }],

  // ── ファストフード ────────────────────────────────────────────────────────
  ["マクドナルド",      { url: "/chain-logos/mcdonalds.svg",     bg: "#ffffff" }],
  ["スターバックス",    { url: "/chain-logos/starbucks.svg",     bg: "#ffffff" }],
  ["ケンタッキー",      { url: "/chain-logos/kfc.svg",           bg: "#ffffff" }],
  ["KFC",               { url: "/chain-logos/kfc.svg",           bg: "#ffffff" }],
  ["モスバーガー",      { url: "/chain-logos/mos.svg",           bg: "#ffffff" }],
  ["バーガーキング",    { url: "/chain-logos/burgerking.svg",    bg: "#ffffff" }],
  ["サブウェイ",        { url: "/chain-logos/subway.svg",        bg: "#ffffff" }],
  ["ゼッテリア",        { url: "/chain-logos/zetteria.png",      bg: "#ffffff" }],

  // ── 牛丼・定食 ───────────────────────────────────────────────────────────
  ["吉野家",            { url: "/chain-logos/yoshinoya.svg",     bg: "#ffffff" }],
  ["松のや",            { url: "/chain-logos/matsunoya.png",     bg: "#ffffff" }],
  ["松屋",              { url: "/chain-logos/matsuya.png",       bg: "#ffffff" }],
  ["すき家",            { url: "/chain-logos/sukiya.png",        bg: "#ffffff" }],
  ["なか卯",            { url: "/chain-logos/nakau.jpg",         bg: "#ffffff" }],
  ["大戸屋",            { url: "/chain-logos/ootoya.svg",        bg: "#ffffff" }],
  ["やよい軒",          { url: "/chain-logos/yayoiken.svg",      bg: "#ffffff" }],

  // ── ファミレス ───────────────────────────────────────────────────────────
  ["サイゼリヤ",        { url: "/chain-logos/saizeriya.png",     bg: "#ffffff" }],
  ["ガスト",            { url: "/chain-logos/gusto.png",         bg: "#ffffff" }],
  ["ジョナサン",        { url: "/chain-logos/jonathan.png",      bg: "#ffffff" }],
  ["バーミヤン",        { url: "/chain-logos/bamiyan.png",       bg: "#ffffff" }],
  ["デニーズ",          { url: "/chain-logos/dennys.svg",        bg: "#ffffff" }],

  // ── 中華・ラーメン ────────────────────────────────────────────────────────
  ["餃子の王将",        { url: "/chain-logos/ohsho.png",         bg: "#ffffff" }],
  ["日高屋",            { url: "/chain-logos/hidakaya.png",      bg: "#ffffff" }],
  ["幸楽苑",            { url: "/chain-logos/kourakuen.png",     bg: "#ffffff" }],

  // ── カフェ ────────────────────────────────────────────────────────────────
  ["コメダ",            { url: "/chain-logos/komeda.png",        bg: "#ffffff" }],
  ["ドトール",          { url: "/chain-logos/doutor.png",        bg: "#ffffff" }],
  ["ミスタードーナツ",  { url: "/chain-logos/misterdonut.png",   bg: "#ffffff" }],
  ["ミスド",            { url: "/chain-logos/misterdonut.png",   bg: "#ffffff" }],

  // ── 回転寿司 ──────────────────────────────────────────────────────────────
  ["くら寿司",          { url: "/chain-logos/kurasushi.svg",     bg: "#ffffff" }],
  ["はま寿司",          { url: "/chain-logos/hamazushi.png",     bg: "#ffffff" }],
  ["スシロー",          { url: "/chain-logos/sushiro.svg",       bg: "#ffffff" }],
  ["かっぱ寿司",        { url: "/chain-logos/kappasushi.png",    bg: "#ffffff" }],

  // ── うどん・麺 ────────────────────────────────────────────────────────────
  ["丸亀製麺",          { url: "/chain-logos/marugame.svg",      bg: "#ffffff" }],
  ["丸亀",              { url: "/chain-logos/marugame.svg",      bg: "#ffffff" }],

  // ── カレー ────────────────────────────────────────────────────────────────
  ["CoCo壱番屋",        { url: "/chain-logos/ichibanya.png",     bg: "#ffffff" }],
  ["ココイチ",          { url: "/chain-logos/ichibanya.png",     bg: "#ffffff" }],

  // ── 天丼・その他 ─────────────────────────────────────────────────────────
  ["天丼てんや",        { url: "/chain-logos/tenya.png",         bg: "#ffffff" }],
  ["てんや",            { url: "/chain-logos/tenya.png",         bg: "#ffffff" }],

  // ── ピザ ──────────────────────────────────────────────────────────────────
  ["ドミノ",            { url: "/chain-logos/dominos.svg",       bg: "#ffffff" }],
  ["ピザハット",        { url: "/chain-logos/pizzahut.svg",      bg: "#ffffff" }],
  ["ピザ・ハット",      { url: "/chain-logos/pizzahut.svg",      bg: "#ffffff" }],
];

export function getChainLogo(name: string): ChainLogoInfo | null {
  if (!name) return null;
  for (const [key, info] of CHAIN_LOGO_MAP) {
    if (name.includes(key)) return info;
  }
  return null;
}

// Backwards compat
export function getChainLogoUrl(name: string): string | null {
  return getChainLogo(name)?.url ?? null;
}
