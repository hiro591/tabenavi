import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tabenavi.jp";
  const now = "2026-04-02T00:00:00.000Z";

  // ─── チェーン店の栄養データページ ───
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

  // ─── メニュー詳細ページ（DBから取得） ───
  let itemPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: items } = await supabase
      .from("menu_items")
      .select("id")
      .limit(500);

    if (items) {
      itemPages = items.map((item) => ({
        url: `${baseUrl}/items/${item.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }));
    }
  } catch {
    // If DB fetch fails, skip item pages
  }

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

  // ─── プログラマティックSEOページ（チェーン×目的） ───
  const programmaticChains = [
    "mcdonalds", "yoshinoya", "matsuya", "sukiya", "saizeriya",
    "gusto", "mos", "kfc", "marugame", "starbucks", "subway",
    "dennys", "hidakaya", "ohsho", "sushiro", "kurasushi",
    "ootoya", "yayoiken", "doutor", "bamiyan",
    "seven-eleven", "lawson", "familymart",
  ];
  const goals = [
    "high-protein", "low-calorie", "diet", "low-fat",
    "protein-cost", "under-500kcal", "under-500yen", "low-carb",
  ];
  const programmaticPages: MetadataRoute.Sitemap = [];
  for (const chain of programmaticChains) {
    for (const goal of goals) {
      programmaticPages.push({
        url: `${baseUrl}/chains/${chain}/${goal}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...guidePages,
    ...chainPages,
    ...programmaticPages,
    ...itemPages,
    { url: `${baseUrl}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
