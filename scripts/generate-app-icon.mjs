import sharp from "sharp";
import { mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SOURCE = resolve(ROOT, "public/icon-512x512.png");
const ICON_SET = resolve(
  ROOT,
  "ios/App/App/Assets.xcassets/AppIcon.appiconset",
);
const OUTPUT = resolve(ICON_SET, "AppIcon-512@2x.png");
const PUBLIC_OUTPUT = resolve(ROOT, "public/app-icon-1024.png");

const SIZE = 1024;

const BG_GRADIENT_SVG = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" fill="url(#bg)"/>
</svg>`;

const FORK_KNIFE_SVG = `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <g fill="#FFFFFF">
    <!-- Fork: 3 thin prongs, wider head, tapered handle -->
    <!-- Prong tines (3) -->
    <rect x="350" y="220" width="22" height="180" rx="6"/>
    <rect x="394" y="220" width="22" height="180" rx="6"/>
    <rect x="438" y="220" width="22" height="180" rx="6"/>
    <!-- Fork head + handle merged -->
    <path d="M 330 380
             Q 330 440 380 460
             L 380 800
             Q 380 822 405 822
             L 405 822
             Q 430 822 430 800
             L 430 460
             Q 480 440 480 380
             L 480 380
             Q 480 380 480 380
             L 480 380
             L 480 380
             Z"/>

    <!-- Knife: clear blade shape (asymmetric, sharp) + thin handle -->
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
</svg>`;

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Source icon not found at: ${SOURCE}`);
    process.exit(1);
  }
  mkdirSync(ICON_SET, { recursive: true });

  const background = await sharp(Buffer.from(BG_GRADIENT_SVG))
    .png()
    .toBuffer();

  const foreground = await sharp(Buffer.from(FORK_KNIFE_SVG))
    .png()
    .toBuffer();

  await sharp(background)
    .composite([{ input: foreground, blend: "over" }])
    .removeAlpha()
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(OUTPUT);

  await sharp(background)
    .composite([{ input: foreground, blend: "over" }])
    .removeAlpha()
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(PUBLIC_OUTPUT);

  console.log(`✅ App icon generated:`);
  console.log(`   ${OUTPUT}`);
  console.log(`   ${PUBLIC_OUTPUT}`);

  const meta = await sharp(OUTPUT).metadata();
  console.log(
    `   Size: ${meta.width}x${meta.height}, channels: ${meta.channels}, hasAlpha: ${meta.hasAlpha}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
