// Chain logo URLs — priority order:
// 1. Direct high-quality PNG/SVG from official CDNs or Wikipedia Commons
// 2. Apple touch icon (180×180, designed for icon display)
// 3. Google Favicon API sz=256 as fallback

// Direct high-quality URLs for chains with known stable assets
const CHAIN_DIRECT_MAP: [string, string][] = [
  // ── コンビニ ──────────────────────────────────────────────────────────────
  [
    "セブンイレブン",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/7-eleven_logo.svg",
  ],
  [
    "セブン-イレブン",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/7-eleven_logo.svg",
  ],
  [
    "ローソン",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lawson_logo.svg",
  ],
  [
    "ファミリーマート",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/FamilyMart_logo.svg",
  ],
  [
    "ファミマ",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/FamilyMart_logo.svg",
  ],

  // ── ファストフード ────────────────────────────────────────────────────────
  [
    "マクドナルド",
    "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  ],
  [
    "スターバックス",
    "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
  ],
  [
    "ケンタッキー",
    "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg",
  ],
  ["KFC", "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg"],
  [
    "モスバーガー",
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mos_Burger_logo.svg",
  ],
  [
    "バーガーキング",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%281999%29.svg",
  ],
  [
    "サブウェイ",
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg",
  ],
];

// Fallback: Google Favicon API sz=256 (256×256 PNG, free, CDN-cached)
const CHAIN_DOMAIN_MAP: [string, string][] = [
  ["すき家",          "sukiya.jp"],
  ["吉野家",          "yoshinoya.com"],
  ["松屋",            "matsuyafoods.co.jp"],
  ["サイゼリヤ",      "saizeriya.co.jp"],
  ["ガスト",          "skylark.co.jp"],
  ["バーミヤン",      "bamiyan.co.jp"],
  ["餃子の王将",      "ohsho.co.jp"],
  ["日高屋",          "hidakaya.co.jp"],
  ["コメダ",          "komeda.co.jp"],
  ["ドトール",        "doutor.co.jp"],
  ["ミスタードーナツ","misterdonut.jp"],
  ["ロッテリア",      "lotteria.jp"],
  ["イオン",          "aeon.co.jp"],
  ["西友",            "seiyu.co.jp"],
  ["丸亀製麺",        "toridoll.com"],
  ["くら寿司",        "kurasushi.co.jp"],
  ["はま寿司",        "hamazushi.com"],
  ["スシロー",        "akindo-sushiro.co.jp"],
  ["かっぱ寿司",      "kappasushi.jp"],
  ["デニーズ",        "dennys.co.jp"],
  ["ジョナサン",      "skylark.co.jp"],
  ["幸楽苑",          "kourakuen.co.jp"],
  ["天丼てんや",      "tenya.co.jp"],
  ["大戸屋",          "ootoya.com"],
  ["やよい軒",        "yayoiken.com"],
  ["なか卯",          "nakau.co.jp"],
  ["ドミノ",          "dominos.co.jp"],
  ["ピザハット",      "pizzahut.co.jp"],
  ["吉祥寺",          "yoshinoya.com"],
];

export type ChainLogoInfo = {
  url: string;
  /** bg color to show behind logo (most logos have transparency) */
  bg: string;
};

// Brand background colors (use white if unsure — most logos read well on white)
const BRAND_BG: [string, string][] = [
  ["セブン", "#ffffff"],
  ["ローソン", "#0068b7"],
  ["ファミリーマート", "#ffffff"],
  ["ファミマ", "#ffffff"],
  ["マクドナルド", "#FFC72C"],
  ["スターバックス", "#00704a"],
  ["ケンタッキー", "#ffffff"],
  ["KFC", "#ffffff"],
  ["モスバーガー", "#ffffff"],
  ["バーガーキング", "#ffffff"],
  ["サブウェイ", "#008c15"],
];

function getBrandBg(name: string): string {
  for (const [key, bg] of BRAND_BG) {
    if (name.includes(key)) return bg;
  }
  return "#ffffff";
}

export function getChainLogo(name: string): ChainLogoInfo | null {
  if (!name) return null;

  // 1. Direct high-quality URL
  for (const [key, url] of CHAIN_DIRECT_MAP) {
    if (name.includes(key)) {
      return { url, bg: getBrandBg(name) };
    }
  }

  // 2. Google Favicon sz=256
  for (const [key, domain] of CHAIN_DOMAIN_MAP) {
    if (name.includes(key)) {
      return {
        url: `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
        bg: "#ffffff",
      };
    }
  }

  return null;
}

// Backwards compat for item detail page
export function getChainLogoUrl(name: string): string | null {
  return getChainLogo(name)?.url ?? null;
}
