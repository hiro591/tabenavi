// Chain restaurant logo URLs via Google Favicon API (free, CDN-cached)
// sz=128 returns 128×128 PNG — major brands return their actual logos

const CHAIN_DOMAIN_MAP: [string, string][] = [
  ["セブンイレブン",    "sej.co.jp"],
  ["セブン-イレブン",   "sej.co.jp"],
  ["ローソン",          "lawson.co.jp"],
  ["ファミリーマート",  "family.co.jp"],
  ["ファミマ",          "family.co.jp"],
  ["マクドナルド",      "mcdonalds.co.jp"],
  ["すき家",            "sukiya.jp"],
  ["吉野家",            "yoshinoya.com"],
  ["松屋",              "matsuyafoods.co.jp"],
  ["スターバックス",    "starbucks.co.jp"],
  ["モスバーガー",      "mos.jp"],
  ["ケンタッキー",      "kfc.co.jp"],
  ["KFC",               "kfc.co.jp"],
  ["サイゼリヤ",        "saizeriya.co.jp"],
  ["ガスト",            "skylark.co.jp"],
  ["バーミヤン",        "bamiyan.co.jp"],
  ["餃子の王将",        "ohsho.co.jp"],
  ["日高屋",            "hidakaya.co.jp"],
  ["コメダ",            "komeda.co.jp"],
  ["ドトール",          "doutor.co.jp"],
  ["ミスタードーナツ",  "misterdonut.jp"],
  ["バーガーキング",    "burgerking.co.jp"],
  ["ロッテリア",        "lotteria.jp"],
  ["イオン",            "aeon.co.jp"],
  ["西友",              "seiyu.co.jp"],
  ["サブウェイ",        "subway.co.jp"],
  ["丸亀製麺",          "toridoll.com"],
  ["くら寿司",          "kurasushi.co.jp"],
  ["はま寿司",          "hamazushi.com"],
  ["スシロー",          "akindo-sushiro.co.jp"],
  ["かっぱ寿司",        "kappasushi.jp"],
  ["デニーズ",          "dennys.co.jp"],
  ["ジョナサン",        "skylark.co.jp"],
  ["幸楽苑",            "kourakuen.co.jp"],
  ["天丼てんや",        "tenya.co.jp"],
  ["大戸屋",            "ootoya.com"],
  ["やよい軒",          "yayoiken.com"],
  ["なか卯",            "nakau.co.jp"],
];

export function getChainLogoUrl(name: string): string | null {
  if (!name) return null;
  for (const [key, domain] of CHAIN_DOMAIN_MAP) {
    if (name.includes(key)) {
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
  }
  return null;
}
