import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * iOS / Capacitor Splash 生成スクリプト
 *
 * 出力: ios/App/App/Assets.xcassets/Splash.imageset/splash-2732x2732{,-1,-2}.png
 *      (1x/2x/3x すべて同一のソース画像、Capacitor の慣例どおり)
 *
 * 設計方針:
 *  - 背景は #F9FAFB (アプリ起動後のログイン画面と同色 = フラッシュなしで滑らかにハンドオフ)
 *  - 中心にアプリアイコンと同じ "fork + knife on blue gradient" の squircle (640px)
 *  - その下に「たべなび」ワードマーク
 *  - 余白は generous に。2732×2732 は iPhone で aspect fill されるため周辺は切れる前提
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SPLASH_DIR = resolve(
  ROOT,
  "ios/App/App/Assets.xcassets/Splash.imageset",
);
mkdirSync(SPLASH_DIR, { recursive: true });

const SIZE = 2732;
const ICON_BOX = 640;
const ICON_RADIUS = 144; // squircle 風 (1024 アイコンの 112*1.28 ≒ 143)

const cx = SIZE / 2;
const cy = SIZE / 2;
const iconX = cx - ICON_BOX / 2;
const iconY = cy - ICON_BOX / 2 - 60; // 下のワードマーク分だけ上に寄せる

const SPLASH_SVG = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="32"/>
      <feOffset dx="0" dy="20" result="offsetblur"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- background: matches Capacitor StatusBar / login screen bg -->
  <rect width="${SIZE}" height="${SIZE}" fill="#F9FAFB"/>

  <!-- icon squircle with shadow -->
  <rect x="${iconX}" y="${iconY}" width="${ICON_BOX}" height="${ICON_BOX}" rx="${ICON_RADIUS}" fill="url(#iconBg)" filter="url(#iconShadow)"/>

  <!-- fork + knife mark (scaled from 1024 design to ${ICON_BOX}px) -->
  <g transform="translate(${iconX}, ${iconY}) scale(${ICON_BOX / 1024})" fill="#FFFFFF">
    <!-- Prong tines -->
    <rect x="350" y="220" width="22" height="180" rx="6"/>
    <rect x="394" y="220" width="22" height="180" rx="6"/>
    <rect x="438" y="220" width="22" height="180" rx="6"/>
    <!-- Fork head + handle -->
    <path d="M 330 380
             Q 330 440 380 460
             L 380 800
             Q 380 822 405 822
             L 405 822
             Q 430 822 430 800
             L 430 460
             Q 480 440 480 380
             Z"/>
    <!-- Knife blade + handle -->
    <path d="M 580 220
             Q 580 220 595 222
             Q 660 230 670 360
             Q 678 460 670 510
             L 590 510
             Q 580 460 580 360
             Z
             M 605 510
             L 605 800
             Q 605 822 627 822
             L 645 822
             Q 668 822 668 800
             L 668 510
             Z"/>
  </g>

  <!-- wordmark "たべなび" -->
  <text
    x="${cx}"
    y="${iconY + ICON_BOX + 180}"
    text-anchor="middle"
    font-family="'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif"
    font-weight="800"
    font-size="120"
    fill="#0F172A"
    letter-spacing="-2"
  >たべなび</text>

  <!-- tagline -->
  <text
    x="${cx}"
    y="${iconY + ICON_BOX + 260}"
    text-anchor="middle"
    font-family="'Hiragino Sans', sans-serif"
    font-weight="500"
    font-size="48"
    fill="#64748B"
    letter-spacing="2"
  >外食しながら、カラダづくり。</text>
</svg>`;

async function main() {
  const buf = await sharp(Buffer.from(SPLASH_SVG))
    .png({ compressionLevel: 9, quality: 100 })
    .toBuffer();

  // Capacitor convention: write all 3 scales as the same 2732x2732 source.
  const targets = [
    "splash-2732x2732.png",
    "splash-2732x2732-1.png",
    "splash-2732x2732-2.png",
  ];
  for (const name of targets) {
    await sharp(buf).png({ compressionLevel: 9 }).toFile(resolve(SPLASH_DIR, name));
  }

  const meta = await sharp(resolve(SPLASH_DIR, targets[0])).metadata();
  console.log(`✅ Splash generated (3 copies): ${meta.width}×${meta.height}`);
  console.log(`   ${SPLASH_DIR}/`);
  for (const t of targets) console.log(`     - ${t}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
