// 再発防止ガード: 公開ページが cookie版Supabaseクライアント(@/lib/supabase/server)を
// import していないか検査する。公開ページが cookies() を読むと動的化し、CDNキャッシュが効かず
// Active CPU が爆発する(2026-06に213%超過した実害の根本原因)。違反があればビルドを失敗させる。
//
// prebuild で実行 → Vercelの `npm run build` 前に走り、回帰デプロイを構造的に防ぐ。
// 認証が絡む非公開/認証ページのみ cookie版の使用を許可する(下記 ALLOW)。
import fs from "fs";
import path from "path";

const APP = "src/app";
const COOKIE_CLIENT = "@/lib/supabase/server";

// cookie版の使用を許可するパス(非公開のログイン後画面・認証・口座削除など)。
const ALLOW = [
  /(^|\/)dashboard(\/|$)/, /(^|\/)record(\/|$)/, /(^|\/)cheatday(\/|$)/,
  /(^|\/)history(\/|$)/, /(^|\/)recommend(\/|$)/, /(^|\/)profile(\/|$)/,
  /(^|\/)weight(\/|$)/, /(^|\/)onboarding(\/|$)/, /(^|\/)favorites(\/|$)/,
  /(^|\/)combo(\/|$)/, /(^|\/)map(\/|$)/, /(^|\/)notifications(\/|$)/,
  /(^|\/)timeline(\/|$)/,
  /(^|\/)auth(\/|$)/, /(^|\/)login(\/|$)/, /(^|\/)signup(\/|$)/,
  /(^|\/)reset-password(\/|$)/, /(^|\/)update-password(\/|$)/,
  /(^|\/)api(\/|$)/, // API Route は本質的に動的。クロール対象でないため対象外。
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === "page.tsx" || e.name === "layout.tsx") files.push(p);
  }
})(APP);

const violations = [];
for (const f of files) {
  const rel = f.slice(APP.length + 1);
  if (ALLOW.some((re) => re.test(rel))) continue;
  const src = fs.readFileSync(f, "utf8");
  if (src.includes(COOKIE_CLIENT)) violations.push(rel);
}

if (violations.length) {
  console.error("\n🚨 公開ページが cookie版Supabase(@/lib/supabase/server)を使用しています。");
  console.error("   公開ページは動的化でCDNキャッシュが効かず Active CPU が爆発します(過去に213%超過)。");
  console.error("   → @/lib/supabase/public(createPublicClient)を使うか、認証はクライアント側(AuthGate等)へ。\n");
  for (const v of violations) console.error("   ✗ src/app/" + v);
  console.error("");
  process.exit(1);
}
console.log("✓ 公開ルートのcookieクライアント混入なし (" + files.length + "ファイル検査)");
