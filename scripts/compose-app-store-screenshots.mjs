import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const RAW_DIR = resolve(ROOT, "marketing/app-store-screenshots/raw-auth");
const OUT_DIR = resolve(ROOT, "marketing/app-store-screenshots/final");
mkdirSync(OUT_DIR, { recursive: true });

// iPhone 6.9" App Store size
const W = 1320;
const H = 2868;
const HEADER_H = 560;

// 8 screenshots — picked from authenticated app captures for max App Store CVR
const SCREENS = [
  {
    file: "20-dashboard.png",
    caption: ["外食しながら、", "数字で管理。"],
    sub: "カロリー・PFC、すべて自動計算",
    accent: { from: "#0EA5E9", to: "#0284C7" },
  },
  {
    file: "27-search.png",
    caption: ["今日、", "何食べる？"],
    sub: "26チェーン729メニューを30秒で検索",
    accent: { from: "#0EA5E9", to: "#06B6D4" },
  },
  {
    file: "25-record.png",
    caption: ["コンビニから定食まで、", "26チェーン完全網羅。"],
    sub: "セブン・サイゼ・吉野家・スタバ…全部",
    accent: { from: "#0284C7", to: "#0369A1" },
  },
  {
    file: "31-combo.png",
    caption: ["残りカロリーから、", "今夜のメニュー提案。"],
    sub: "タンパク質も同時に最適化",
    accent: { from: "#7C3AED", to: "#5B21B6" },
  },
  {
    file: "24-cheatday.png",
    caption: ["チートデイも、", "計画的に。"],
    sub: "罪悪感ゼロで楽しむ日を設定",
    accent: { from: "#A855F7", to: "#7E22CE" },
  },
  {
    file: "26-recommend.png",
    caption: ["近くで食べられる、", "高タンパクな店。"],
    sub: "現在地から最適なチェーンを発見",
    accent: { from: "#10B981", to: "#047857" },
  },
  {
    file: "21-history.png",
    caption: ["365日の記録、", "一目で振り返り。"],
    sub: "毎日のPFC達成度をカレンダーで",
    accent: { from: "#0EA5E9", to: "#0284C7" },
  },
  {
    file: "32-timeline.png",
    caption: ["みんなの外食、", "ヒントが集まる。"],
    sub: "同じ目的のユーザーから学ぶ",
    accent: { from: "#0EA5E9", to: "#06B6D4" },
  },
];

const buildHeaderSvg = (mainLines, sub, accent) => {
  const lineHeight = 132;
  // Vertically center the text block in the header
  const blockHeight = mainLines.length * lineHeight + 80; // title block + sub
  const titleY = Math.floor((HEADER_H - blockHeight) / 2) + 110;
  return `<svg width="${W}" height="${HEADER_H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hdr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${accent.from}"/>
        <stop offset="100%" stop-color="${accent.to}"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="${W}" height="${HEADER_H}" fill="url(#hdr)"/>
    <!-- subtle noise/circle decor -->
    <circle cx="${W - 120}" cy="80" r="180" fill="white" opacity="0.05"/>
    <circle cx="80" cy="${HEADER_H - 60}" r="140" fill="white" opacity="0.05"/>
    ${mainLines
      .map(
        (line, i) =>
          `<text x="${W / 2}" y="${titleY + i * lineHeight}" text-anchor="middle" font-family="'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif" font-weight="800" font-size="108" fill="#FFFFFF" letter-spacing="-3" filter="url(#glow)">${line}</text>`,
      )
      .join("")}
    <text x="${W / 2}" y="${titleY + mainLines.length * lineHeight + 20}" text-anchor="middle" font-family="'Hiragino Sans', sans-serif" font-weight="500" font-size="42" fill="#FFFFFF" opacity="0.92" letter-spacing="0">${sub}</text>
    <!-- bottom divider -->
    <rect x="${W / 2 - 50}" y="${HEADER_H - 32}" width="100" height="5" rx="2.5" fill="#FFFFFF" opacity="0.45"/>
  </svg>`;
};

const composeOne = async (cfg, index) => {
  const inputPath = resolve(RAW_DIR, cfg.file);
  const outputPath = resolve(
    OUT_DIR,
    `appstore-${String(index + 1).padStart(2, "0")}.png`,
  );

  const headerSvg = buildHeaderSvg(cfg.caption, cfg.sub, cfg.accent);
  const headerBuf = await sharp(Buffer.from(headerSvg)).png().toBuffer();

  // Body geometry: leave 50px top padding under header, 60px bottom padding
  const bodyTopPad = 50;
  const bodyBottomPad = 60;
  const bodyAvailH = H - HEADER_H - bodyTopPad - bodyBottomPad;
  const bodyAvailW = W - 200; // 100px side margins for breathing room

  // Source is 1320x2868 (1:2.173). Fit by height first; check width.
  const srcAspect = 2868 / 1320;
  let screenshotH = bodyAvailH;
  let screenshotW = Math.round(screenshotH / srcAspect);
  if (screenshotW > bodyAvailW) {
    screenshotW = bodyAvailW;
    screenshotH = Math.round(screenshotW * srcAspect);
  }

  const screenshotResized = await sharp(inputPath)
    .resize({ width: screenshotW, height: screenshotH, fit: "fill" })
    .toBuffer();

  const screenshotY = HEADER_H + bodyTopPad + Math.floor((bodyAvailH - screenshotH) / 2);
  const screenshotX = Math.floor((W - screenshotW) / 2);

  // Subtle drop shadow rectangle behind screenshot
  const shadowSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="28"/>
        <feOffset dx="0" dy="14"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.28"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect x="${screenshotX}" y="${screenshotY}" width="${screenshotW}" height="${screenshotH}" rx="56" fill="#0F172A" opacity="0.0" filter="url(#shadow)"/>
    <rect x="${screenshotX}" y="${screenshotY}" width="${screenshotW}" height="${screenshotH}" rx="56" fill="#000000" opacity="0.18" filter="url(#shadow)"/>
  </svg>`;
  const shadowBuf = await sharp(Buffer.from(shadowSvg)).png().toBuffer();

  // Rounded corner mask for screenshot
  const roundedMaskSvg = `<svg width="${screenshotW}" height="${screenshotH}" xmlns="http://www.w3.org/2000/svg"><rect width="${screenshotW}" height="${screenshotH}" rx="52" fill="white"/></svg>`;
  const roundedScreenshot = await sharp(screenshotResized)
    .composite([{ input: Buffer.from(roundedMaskSvg), blend: "dest-in" }])
    .png()
    .toBuffer();

  // Subtle gradient body background using the same accent palette (very soft tint)
  const bodyBgSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
  </svg>`;
  const bodyBgBuf = await sharp(Buffer.from(bodyBgSvg)).png().toBuffer();

  await sharp(bodyBgBuf)
    .composite([
      { input: shadowBuf, top: 0, left: 0 },
      { input: roundedScreenshot, top: screenshotY, left: screenshotX },
      { input: headerBuf, top: 0, left: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`✅ ${cfg.file} → appstore-${String(index + 1).padStart(2, "0")}.png  (${screenshotW}x${screenshotH})`);
};

await Promise.all(SCREENS.map((s, i) => composeOne(s, i)));
console.log(`\n🎉 ${SCREENS.length} App Store screenshots generated in ${OUT_DIR}`);
