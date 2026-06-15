import type { NextConfig } from "next";

// ユーザー固有のページ(ログイン後の画面)だけキャッシュ禁止にする。
// 公開ページ(/, /guide, /chains, /items, /sources 等)は Next/Vercel が
// ルートごとに適切なキャッシュヘッダを付与する(ISRはCDNキャッシュされる)ので
// ここで no-store を上書きしない。以前は全HTMLに no-store を付けており、
// 6,000超の公開ページがCDNキャッシュされず毎リクエストでフル処理 → Edge使用量が爆発していた。
const PRIVATE_PATHS =
  "dashboard|record|cheatday|history|recommend|profile|weight|onboarding|favorites|combo|map";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
      ],
    },
    // 認証後のユーザー固有ページのみ no-store(これらはボット流入もほぼ無く使用量に影響しない)
    {
      source: `/:dir(${PRIVATE_PATHS})`,
      headers: [{ key: "Cache-Control", value: "private, no-store" }],
    },
    {
      source: `/:dir(${PRIVATE_PATHS})/:path*`,
      headers: [{ key: "Cache-Control", value: "private, no-store" }],
    },
  ],
};

export default nextConfig;
