import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const chains = [
    "mcdonalds", "yoshinoya", "matsuya", "sukiya", "saizeriya",
    "starbucks", "conveni", "eating-out-diet",
    "kfc", "mos", "gusto", "bamiyan", "ohsho", "hidakaya",
    "marugame", "kurasushi", "sushiro", "dennys", "doutor",
    "subway", "nakau", "ootoya", "yayoiken",
    "gyudon-comparison", "low-fat-eating-out", "calorie-database",
    "muscle-eating-out", "mcdonalds-diet", "conveni-protein", "saizeriya-diet",
    "low-carb-eating-out", "diet-lunch", "family-restaurant-diet",
    "drinking-party-diet", "daily-meal-plan", "protein-cost-ranking",
  ];

  const guidePages = chains.map((slug) => ({
    url: `https://tabenavi.jp/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://tabenavi.jp", lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: "https://tabenavi.jp/guide", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...guidePages,
    { url: "https://tabenavi.jp/signup", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://tabenavi.jp/login", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "https://tabenavi.jp/privacy", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "https://tabenavi.jp/terms", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];
}
