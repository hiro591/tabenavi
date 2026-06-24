import type { MetadataRoute } from "next";
import { createPublicClient } from "@/lib/supabase/public";
import { ARTICLE_CATEGORIES } from "@/lib/articles";
import { CHAIN_SLUGS, GOAL_KEYS } from "@/lib/chains";

// ISR: sitemap regenerates at most every 6 hours. Googlebot reads frequently but content changes slowly.
export const revalidate = 21600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.tabenavi.jp";
  const now = new Date().toISOString();

  // ─── チェーン店の栄養データページ ───
  const chainSlugs = [
    "mcdonalds", "yoshinoya", "matsuya", "sukiya", "saizeriya",
    "starbucks", "conveni", "kfc", "mos", "gusto", "bamiyan",
    "ohsho", "hidakaya", "marugame", "kurasushi", "sushiro",
    "dennys", "doutor", "subway", "ootoya", "yayoiken",
    "tenya", "matsunoya", "ichibanya", "burgerking", "zetteria",
    "seven-eleven", "lawson", "familymart",
    "joyfull", "bikkuri-donkey", "cocos", "steak-gusto",
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
    "diet-mistakes", "eating-out-nutrition-report",
    "hamburger-comparison",
    "conveni-comparison",
    "high-protein-chain-database",
    "ohsho-diet",
    "yayoiken-diet",
    "ichibanya-diet",
    "bikkuri-donkey-diet",
    "mos-diet",
    "doutor-diet",
    "tenya-diet",
    "cocos-diet",
  ];

  // ─── メニュー詳細ページ（DBから取得 / pagination で全件） ───
  let itemPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createPublicClient();
    const PAGE = 1000;
    let allItems: { id: string }[] = [];
    for (let page = 0; ; page++) {
      const { data } = await supabase
        .from("menu_items")
        .select("id")
        .order("id", { ascending: true })
        .range(page * PAGE, page * PAGE + PAGE - 1);
      if (!data || data.length === 0) break;
      allItems = allItems.concat(data);
      if (data.length < PAGE) break;
    }
    itemPages = allItems.map((item) => ({
      url: `${baseUrl}/items/${item.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
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
  // CHAIN_SLUGS / GOAL_KEYS は src/lib/chains.ts が単一の真実。
  // goalページの CHAINS/GOALS と必ず一致 → sitemap とページ実体の drift(=ソフト404) が原理的に起きない。
  const programmaticPages: MetadataRoute.Sitemap = [];
  for (const chain of CHAIN_SLUGS) {
    for (const goal of GOAL_KEYS) {
      programmaticPages.push({
        url: `${baseUrl}/chains/${chain}/${goal}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // ─── チェーンハブページ（/chains/[slug]） ───
  // 256の目的別ランキング(/chains/[slug]/[goal])の親ハブ。CHAIN_SLUGS が単一の真実。
  const chainHubPages: MetadataRoute.Sitemap = CHAIN_SLUGS.map((slug) => ({
    url: `${baseUrl}/chains/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ─── カテゴリハブページ ───
  const categoryPages: MetadataRoute.Sitemap = Object.keys(ARTICLE_CATEGORIES).map((category) => ({
    url: `${baseUrl}/guide/category/${category}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/chains`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...categoryPages,
    ...guidePages,
    ...chainPages,
    ...chainHubPages,
    ...programmaticPages,
    ...itemPages,
    // /search は公開済み(登録不要・2026-06ファネル開放) — 索引対象
    { url: `${baseUrl}/search`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
