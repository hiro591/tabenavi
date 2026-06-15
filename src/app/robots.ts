import type { MetadataRoute } from "next";

// クロール方針(Vercel Edge使用量の大半はボット由来のため、無価値な大量クローラを遮断する):
// - 検索エンジン(Google/Bing)とAIアシスタント(引用=AEO価値あり)はフル許可。これが集客の本命。
// - SEOツール系・大量スクレイパー(自社に直接の価値がなく負荷だけ高い)は全面ブロック。
// - その他のボットは許可しつつ Crawl-delay で負荷を抑制。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 本命: 検索エンジン + Google AI Overview
      {
        userAgent: ["Googlebot", "Bingbot", "Google-Extended", "Applebot"],
        allow: "/",
        disallow: ["/api/", "/admin", "/auth/"],
      },
      // AIアシスタント(回答内での引用=潜在的な流入価値。負荷が問題なら将来見直し)
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: ["/api/", "/admin", "/auth/"],
      },
      // 自社に価値がなく負荷だけ高いスクレイパー/SEOツール系 — 全面ブロック
      {
        userAgent: [
          "Bytespider",
          "CCBot",
          "Amazonbot",
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "DataForSeoBot",
          "PetalBot",
          "ImagesiftBot",
        ],
        disallow: "/",
      },
      // その他のボット: 許可しつつ Crawl-delay で抑制
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/auth/"],
        crawlDelay: 10,
      },
    ],
    sitemap: "https://www.tabenavi.jp/sitemap.xml",
  };
}
