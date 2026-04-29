import { webkit } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "marketing/app-store-screenshots/raw-auth");
mkdirSync(OUT, { recursive: true });

const BASE = "https://www.tabenavi.jp";
const EMAIL = "bets.sputter_0b@icloud.com";
const PASSWORD = "Vitqig-hegbaj-povhi6";

const VIEWPORT = { width: 440, height: 956 };
const DPR = 3;

const PAGES = [
  { name: "20-dashboard", path: "/dashboard", wait: 4500 },
  { name: "21-history", path: "/history", wait: 3500 },
  { name: "22-weight", path: "/weight", wait: 3500 },
  { name: "23-favorites", path: "/favorites", wait: 3500 },
  { name: "24-cheatday", path: "/cheatday", wait: 3500 },
  { name: "25-record", path: "/record", wait: 3500 },
  { name: "26-recommend", path: "/recommend", wait: 3500 },
  { name: "27-search", path: "/search", wait: 3500 },
  { name: "28-map", path: "/map", wait: 5000 },
  { name: "29-profile", path: "/profile", wait: 3500 },
  { name: "30-notifications", path: "/notifications", wait: 3500 },
  { name: "31-combo", path: "/combo", wait: 3500 },
  { name: "32-timeline", path: "/timeline", wait: 4000 },
];

const main = async () => {
  console.log("🚀 Launching WebKit...");
  const browser = await webkit.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DPR,
    isMobile: true,
    hasTouch: true,
    locale: "ja-JP",
    timezoneId: "Asia/Tokyo",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  });
  const page = await context.newPage();

  console.log("🔐 Navigating to /login...");
  await page.goto(`${BASE}/login`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1500);

  // Inspect available inputs
  const inputs = await page.locator("input").all();
  console.log(`   Found ${inputs.length} input(s)`);
  for (let i = 0; i < inputs.length; i++) {
    const t = await inputs[i].getAttribute("type");
    const ph = await inputs[i].getAttribute("placeholder");
    const nm = await inputs[i].getAttribute("name");
    console.log(`   [${i}] type=${t}, name=${nm}, placeholder=${ph}`);
  }

  // Fill credentials
  console.log("📝 Filling credentials...");
  const emailInput = page
    .locator('input[type="email"], input[type="text"][placeholder*="mail" i], input[name*="mail" i]')
    .first();
  await emailInput.click();
  await emailInput.fill(EMAIL);

  const passwordInput = page.locator('input[type="password"]').first();
  await passwordInput.click();
  await passwordInput.fill(PASSWORD);

  // Find email/password submit button — must be type=submit and NOT Google button
  // Inspect all buttons first
  const buttons = await page.locator("button").all();
  console.log(`   Found ${buttons.length} button(s)`);
  for (let i = 0; i < buttons.length; i++) {
    const text = (await buttons[i].textContent())?.trim();
    const type = await buttons[i].getAttribute("type");
    console.log(`   [${i}] type=${type}, text="${text}"`);
  }

  // Submit by pressing Enter in password field (most reliable)
  console.log("🚪 Submitting login form via Enter key...");
  await Promise.all([
    page
      .waitForURL((url) => !url.toString().includes("/login"), {
        timeout: 20000,
      })
      .catch((e) => console.log(`   waitForURL error: ${e.message?.slice(0, 80)}`)),
    passwordInput.press("Enter"),
  ]);

  await page.waitForTimeout(3000);
  const currentUrl = page.url();
  console.log(`   Current URL after login: ${currentUrl}`);

  // Verify login
  if (currentUrl.includes("/login")) {
    const errorText = await page
      .locator('[role="alert"], .error, .text-rose-600, .text-red-600')
      .allTextContents();
    console.log(`   ⚠️  Still on login page. Errors visible: ${JSON.stringify(errorText)}`);
    // Try one more time to inspect what's wrong
    await page.screenshot({ path: resolve(OUT, "debug-login-fail.png") });
    console.log(`   Saved debug screenshot to debug-login-fail.png`);
  } else {
    console.log(`   ✅ Logged in successfully`);
  }

  // Capture all pages
  let success = 0;
  let failed = 0;
  for (const p of PAGES) {
    const url = `${BASE}${p.path}`;
    try {
      console.log(`📸 ${p.name}: ${p.path}`);
      const res = await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });
      const status = res?.status() ?? 0;
      const finalUrl = page.url();
      if (finalUrl.includes("/login")) {
        console.log(`   ⚠️  Redirected to login (${p.path} requires auth)`);
        failed++;
        continue;
      }
      if (status >= 400) {
        console.log(`   ⚠️  HTTP ${status}, skipping`);
        failed++;
        continue;
      }
      await page.waitForTimeout(p.wait);
      const out = resolve(OUT, `${p.name}.png`);
      await page.screenshot({ path: out, fullPage: false });
      console.log(`   ✅ ${out}`);
      success++;
    } catch (e) {
      console.log(`   ❌ ${e.message?.slice(0, 100)}`);
      failed++;
    }
  }

  await browser.close();
  console.log(`\n🎉 Done. Success: ${success}, Failed: ${failed}`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
