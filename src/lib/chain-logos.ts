// Chain logos — all served from /public/chain-logos/ (local, high-quality SVG/PNG)
// SVG preferred for infinite scalability; PNG used where only high-res PNG available.

export type ChainLogoInfo = {
  url: string;
  /** bg color to show behind logo (most logos have transparency) */
  bg: string;
};

// Map: chain name keyword → { url, bg }
const CHAIN_LOGO_MAP: [string, ChainLogoInfo][] = [
  // ── コンビニ ──────────────────────────────────────────────────────────────
  ["セブンイレブン",    { url: "/chain-logos/seven-eleven.svg", bg: "#ffffff" }],
  ["セブン-イレブン",   { url: "/chain-logos/seven-eleven.svg", bg: "#ffffff" }],
  ["ローソン",          { url: "/chain-logos/lawson.svg",        bg: "#ffffff" }],
  ["ファミリーマート",  { url: "/chain-logos/familymart.svg",    bg: "#ffffff" }],
  ["ファミマ",          { url: "/chain-logos/familymart.svg",    bg: "#ffffff" }],

  // ── ファストフード ────────────────────────────────────────────────────────
  ["マクドナルド",      { url: "/chain-logos/mcdonalds.svg",     bg: "#DA291C" }],
  ["スターバックス",    { url: "/chain-logos/starbucks.svg",     bg: "#00704a" }],
  ["ケンタッキー",      { url: "/chain-logos/kfc.svg",           bg: "#ffffff" }],
  ["KFC",               { url: "/chain-logos/kfc.svg",           bg: "#ffffff" }],
  ["モスバーガー",      { url: "/chain-logos/mos.svg",           bg: "#ffffff" }],
  ["バーガーキング",    { url: "/chain-logos/burgerking.svg",    bg: "#ffffff" }],
  ["サブウェイ",        { url: "/chain-logos/subway.svg",        bg: "#008c15" }],

  // ── 牛丼・定食 ───────────────────────────────────────────────────────────
  ["吉野家",            { url: "/chain-logos/yoshinoya.svg",     bg: "#E63310" }],
  ["松屋",              { url: "/chain-logos/matsuya.png",       bg: "#E63310" }],
  ["すき家",            { url: "/chain-logos/sukiya.png",        bg: "#E63310" }],
  ["なか卯",            { url: "/chain-logos/nakau.jpg",         bg: "#E63310" }],
  ["大戸屋",            { url: "/chain-logos/ootoya.svg",        bg: "#ffffff" }],
  ["やよい軒",          { url: "/chain-logos/yayoiken.svg",      bg: "#E60012" }],

  // ── ファミレス ───────────────────────────────────────────────────────────
  ["サイゼリヤ",        { url: "/chain-logos/saizeriya.png",     bg: "#006633" }],
  ["ガスト",            { url: "/chain-logos/gusto.png",         bg: "#E63310" }],
  ["ジョナサン",        { url: "/chain-logos/jonathan.png",      bg: "#006633" }],
  ["バーミヤン",        { url: "/chain-logos/bamiyan.png",       bg: "#E63310" }],
  ["デニーズ",          { url: "/chain-logos/dennys.svg",        bg: "#E63310" }],

  // ── 中華・ラーメン ────────────────────────────────────────────────────────
  ["餃子の王将",        { url: "/chain-logos/ohsho.png",         bg: "#E63310" }],
  ["日高屋",            { url: "/chain-logos/hidakaya.png",      bg: "#E63310" }],
  ["幸楽苑",            { url: "/chain-logos/kourakuen.png",     bg: "#E63310" }],

  // ── カフェ ────────────────────────────────────────────────────────────────
  ["コメダ",            { url: "/chain-logos/komeda.png",        bg: "#8B4513" }],
  ["ドトール",          { url: "/chain-logos/doutor.png",        bg: "#006633" }],
  ["ミスタードーナツ",  { url: "/chain-logos/misterdonut.png",   bg: "#FF6600" }],
  ["ミスド",            { url: "/chain-logos/misterdonut.png",   bg: "#FF6600" }],

  // ── 回転寿司 ──────────────────────────────────────────────────────────────
  ["くら寿司",          { url: "/chain-logos/kurasushi.svg",     bg: "#0066CC" }],
  ["はま寿司",          { url: "/chain-logos/hamazushi.png",     bg: "#0066CC" }],
  ["スシロー",          { url: "/chain-logos/sushiro.svg",       bg: "#E63310" }],
  ["かっぱ寿司",        { url: "/chain-logos/kappasushi.png",    bg: "#006633" }],

  // ── うどん・麺 ────────────────────────────────────────────────────────────
  ["丸亀製麺",          { url: "/chain-logos/marugame.svg",      bg: "#E63310" }],
  ["丸亀",              { url: "/chain-logos/marugame.svg",      bg: "#E63310" }],

  // ── 天丼・その他 ─────────────────────────────────────────────────────────
  ["天丼てんや",        { url: "/chain-logos/tenya.png",         bg: "#E63310" }],
  ["てんや",            { url: "/chain-logos/tenya.png",         bg: "#E63310" }],

  // ── ピザ ──────────────────────────────────────────────────────────────────
  ["ドミノ",            { url: "/chain-logos/dominos.svg",       bg: "#006491" }],
  ["ピザハット",        { url: "/chain-logos/pizzahut.svg",      bg: "#E63310" }],
  ["ピザ・ハット",      { url: "/chain-logos/pizzahut.svg",      bg: "#E63310" }],
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
