"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { MenuItem, ChainRestaurant } from "@/types/database";

type CategoryTag = "ぴったり" | "軽め" | "ちょうどいい";

type RecommendedItem = MenuItem & {
  chain_restaurants: ChainRestaurant;
  tag: CategoryTag;
};

export default function RecommendPage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [targetCalories, setTargetCalories] = useState(2000);
  const [items, setItems] = useState<RecommendedItem[]>([]);
  const [chains, setChains] = useState<ChainRestaurant[]>([]);
  const [activeChain, setActiveChain] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const [profileRes, logsRes, menuRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single(),
      supabase
        .from("food_logs")
        .select("calories")
        .eq("user_id", user.id)
        .gte("logged_at", `${today}T00:00:00`)
        .lte("logged_at", `${today}T23:59:59`),
      supabase
        .from("menu_items")
        .select("*, chain_restaurants(*)")
        .order("calories", { ascending: true }),
    ]);

    const target = profileRes.data?.target_calories ?? 2000;
    setTargetCalories(target);

    const consumed =
      logsRes.data?.reduce((sum, l) => sum + (l.calories || 0), 0) ?? 0;
    const remaining = target - consumed;
    setRemainingCalories(remaining);

    if (menuRes.data) {
      const chainMap = new Map<string, ChainRestaurant>();
      const recommended: RecommendedItem[] = [];

      for (const item of menuRes.data as (MenuItem & {
        chain_restaurants: ChainRestaurant;
      })[]) {
        if (!item.chain_restaurants) continue;
        chainMap.set(item.chain_restaurants.id, item.chain_restaurants);

        if (remaining <= 0) continue;
        if (item.calories > remaining) continue;

        let tag: CategoryTag;
        if (Math.abs(item.calories - remaining) <= 50) {
          tag = "ぴったり";
        } else if (item.calories < remaining * 0.5) {
          tag = "軽め";
        } else {
          tag = "ちょうどいい";
        }

        recommended.push({ ...item, tag });
      }

      setChains(Array.from(chainMap.values()));
      setItems(recommended);
    }

    setLoading(false);
  }, [supabase, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const remainingColor =
    remainingCalories > 500
      ? "text-green-500"
      : remainingCalories >= 200
        ? "text-orange-500"
        : "text-red-500";

  const filteredItems = activeChain
    ? items.filter((i) => i.chain_restaurant_id === activeChain)
    : items;

  const tagStyle: Record<CategoryTag, string> = {
    ぴったり: "bg-green-100 text-green-700",
    軽め: "bg-blue-100 text-blue-700",
    ちょうどいい: "bg-orange-100 text-orange-700",
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-lg mx-auto px-4 pt-6">
          {/* Header skeleton */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="flex-1">
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-56 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          {/* Tab skeleton */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
          {/* Card skeletons */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm mb-3 animate-pulse"
            >
              <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
              <div className="h-5 w-48 bg-gray-200 rounded mb-3" />
              <div className="flex gap-2">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/dashboard"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ←
          </Link>
          <h1 className="text-xl font-bold text-gray-800">今日のおすすめ</h1>
        </div>

        {remainingCalories <= 0 ? (
          /* Over budget state */
          <div className="bg-white rounded-2xl p-8 shadow-sm mt-6 text-center">
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-lg font-bold text-gray-800 mb-2">
              今日のカロリーは達成済みです！
            </p>
            <p className="text-sm text-gray-500">明日も頑張りましょう</p>
          </div>
        ) : (
          <>
            {/* Remaining calories */}
            <p className={`text-sm font-semibold mb-6 ml-11 ${remainingColor}`}>
              今日あと{remainingCalories}kcal食べられます
            </p>

            {/* Filter tabs */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
              <button
                onClick={() => setActiveChain(null)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeChain === null
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-600 shadow-sm"
                }`}
              >
                全て
              </button>
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => setActiveChain(chain.id)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeChain === chain.id
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-600 shadow-sm"
                  }`}
                >
                  {chain.emoji ? `${chain.emoji} ` : ""}
                  {chain.name}
                </button>
              ))}
            </div>

            {/* Menu cards */}
            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <p className="text-gray-400 text-sm">
                  条件に合うメニューが見つかりませんでした
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 shadow-sm"
                  >
                    {/* Chain info */}
                    <p className="text-[11px] text-gray-400 mb-1">
                      {item.chain_restaurants.emoji}{" "}
                      {item.chain_restaurants.name}
                    </p>

                    {/* Menu name + tag */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-bold text-gray-800">
                        {item.name}
                      </p>
                      <span
                        className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagStyle[item.tag]}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Calories */}
                    <p className="text-lg font-bold text-orange-500 mb-2">
                      {item.calories}
                      <span className="text-sm font-medium ml-0.5">kcal</span>
                    </p>

                    {/* PFC badges */}
                    <div className="flex gap-2 mb-3">
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        タンパク質 {item.protein}g
                      </span>
                      <span className="text-[10px] bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full">
                        脂質 {item.fat}g
                      </span>
                      <span className="text-[10px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
                        炭水化物 {item.carbs}g
                      </span>
                    </div>

                    {/* Record button */}
                    <Link
                      href={`/record?menu_id=${item.id}`}
                      className="block w-full text-center bg-orange-500 text-white text-sm font-semibold py-2 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all"
                    >
                      記録する
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
