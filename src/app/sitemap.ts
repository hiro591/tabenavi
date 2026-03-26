import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tabenavi.jp";
  const now = "2026-03-25T00:00:00.000Z";

  // ─── チェーン店の栄養データページ（/guide/[slug]） ───
  const chainSlugs = [
    "mcdonalds", "yoshinoya", "matsuya", "sukiya", "saizeriya",
    "starbucks", "conveni", "kfc", "mos", "gusto", "bamiyan",
    "ohsho", "hidakaya", "marugame", "kurasushi", "sushiro",
    "dennys", "doutor", "subway", "nakau", "ootoya", "yayoiken",
  ];

  // ─── SEOガイド記事 ───
  const guideSlugs = [
    "eating-out-diet", "muscle-eating-out", "mcdonalds-diet",
    "conveni-protein", "saizeriya-diet", "gyudon-comparison",
    "low-fat-eating-out", "calorie-database",
    "low-carb-eating-out", "diet-lunch", "family-restaurant-diet",
    "drinking-party-diet", "daily-meal-plan", "protein-cost-ranking",
    "yoshinoya-diet", "matsuya-diet", "sukiya-diet", "kfc-diet",
    "gusto-diet", "subway-diet", "ootoya-diet", "dennys-diet",
    "starbucks-diet", "marugame-diet",
    "morning-diet", "ramen-diet", "curry-diet", "sushi-diet",
    "pfc-guide", "recording-diet", "late-night-eating",
    "eating-order", "seven-eleven-diet", "bulkup-eating-out",
    "cheat-day", "no-exercise-diet", "diet-plateau",
    "rebound-prevention", "bmr-calculator", "lawson-diet",
    "familymart-diet", "eat-and-lose", "metabolism-boost-foods",
    "diet-mistakes",
  ];

  const chainPages: MetadataRoute.Sitemap = chainSlugs.map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    // トップ
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },

    // ガイド一覧
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // SEOガイド記事（高優先度）
    ...guidePages,

    // チェーン店データページ
    ...chainPages,

    // 主要ページ
    { url: `${baseUrl}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/signup`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/login`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
