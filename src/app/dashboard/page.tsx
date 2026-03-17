"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { FoodLog, Profile } from "@/types/database";
import type { User } from "@supabase/supabase-js";

const MEAL_TYPE_LABELS: Record<string, string> = {
  breakfast: "朝食",
  lunch: "昼食",
  dinner: "夕食",
  snack: "間食",
};

const MEAL_TYPE_ICONS: Record<string, string> = {
  breakfast: "🌅",
  lunch: "☀️",
  dinner: "🌙",
  snack: "🍪",
};

type WeeklySummary = {
  date: string;
  label: string;
  calories: number;
};

export default function DashboardPage() {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [logs, setLogs] = useState<FoodLog[]>([]);
  const [weeklySummary, setWeeklySummary] = useState<WeeklySummary[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();
    if (!currentUser) {
      router.push("/");
      return;
    }
    setUser(currentUser);

    const today = new Date().toISOString().split("T")[0];

    const [profileRes, logsRes, weeklyRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", currentUser.id).single(),
      supabase
        .from("food_logs")
        .select("*, menu_items(name, chain_restaurants(name, emoji))")
        .eq("user_id", currentUser.id)
        .gte("logged_at", `${today}T00:00:00`)
        .lte("logged_at", `${today}T23:59:59`)
        .order("logged_at", { ascending: false }),
      fetchWeeklySummary(currentUser.id),
    ]);

    if (profileRes.data) setProfile(profileRes.data);
    if (logsRes.data) setLogs(logsRes.data as FoodLog[]);
    setWeeklySummary(weeklyRes);
    setLoading(false);
  }, [supabase, router]);

  const fetchWeeklySummary = async (userId: string) => {
    const days: WeeklySummary[] = [];
    const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const { data } = await supabase
        .from("food_logs")
        .select("calories")
        .eq("user_id", userId)
        .gte("logged_at", `${dateStr}T00:00:00`)
        .lte("logged_at", `${dateStr}T23:59:59`);

      const total = data?.reduce((sum, l) => sum + (l.calories || 0), 0) ?? 0;
      days.push({
        date: dateStr,
        label: dayLabels[d.getDay()],
        calories: total,
      });
    }
    return days;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (logId: string) => {
    await supabase.from("food_logs").delete().eq("id", logId);
    setLogs((prev) => prev.filter((l) => l.id !== logId));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const totalCalories = logs.reduce((sum, l) => sum + (l.calories || 0), 0);
  const totalProtein = logs.reduce((sum, l) => sum + (l.protein || 0), 0);
  const totalFat = logs.reduce((sum, l) => sum + (l.fat || 0), 0);
  const totalCarbs = logs.reduce((sum, l) => sum + (l.carbs || 0), 0);
  const targetCalories = profile?.target_calories ?? 2000;

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "おはよう";
    if (hour < 18) return "こんにちは";
    return "こんばんは";
  })();

  const displayName = profile?.display_name ?? "ゲスト";

  const groupedLogs = logs.reduce<Record<string, FoodLog[]>>((acc, log) => {
    const type = log.meal_type || "snack";
    if (!acc[type]) acc[type] = [];
    acc[type].push(log);
    return acc;
  }, {});

  const weeklyMax = Math.max(...weeklySummary.map((d) => d.calories), 1);

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          {greeting}、{displayName}さん
        </h1>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ログアウト
        </button>
      </div>

      {/* Calorie Ring */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          今日のカロリー
        </h2>
        <div className="flex justify-center">
          <CalorieRing total={totalCalories} target={targetCalories} />
        </div>
      </div>

      {/* PFC Balance */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          PFCバランス
        </h2>
        <div className="space-y-3">
          <PFCBar label="タンパク質" value={totalProtein} color="bg-blue-400" unit="g" />
          <PFCBar label="脂質" value={totalFat} color="bg-yellow-400" unit="g" />
          <PFCBar label="炭水化物" value={totalCarbs} color="bg-orange-400" unit="g" />
        </div>
      </div>

      {/* Today's Meals */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          今日の食事記録
        </h2>
        {logs.length === 0 ? (
          <p className="text-center text-gray-400 py-4 text-sm">
            まだ記録がありません
          </p>
        ) : (
          <div className="space-y-4">
            {(["breakfast", "lunch", "dinner", "snack"] as const).map(
              (mealType) => {
                const mealLogs = groupedLogs[mealType];
                if (!mealLogs || mealLogs.length === 0) return null;
                return (
                  <div key={mealType}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span>{MEAL_TYPE_ICONS[mealType]}</span>
                      <span className="text-xs font-semibold text-gray-600">
                        {MEAL_TYPE_LABELS[mealType]}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {mealLogs.map((log) => (
                        <div
                          key={log.id}
                          className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5"
                        >
                          <div className="flex-1 min-w-0">
                            {log.menu_items?.chain_restaurants && (
                              <p className="text-[10px] text-gray-400 truncate">
                                {log.menu_items.chain_restaurants.emoji}{" "}
                                {log.menu_items.chain_restaurants.name}
                              </p>
                            )}
                            <p className="text-sm font-medium text-gray-700 truncate">
                              {log.menu_items?.name ?? log.custom_name ?? "不明"}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-2">
                            <span className="text-sm font-semibold text-orange-500 whitespace-nowrap">
                              {log.calories} kcal
                            </span>
                            <button
                              onClick={() => handleDelete(log.id)}
                              className="text-gray-300 hover:text-red-400 transition-colors text-lg leading-none"
                              aria-label="削除"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
        <Link
          href="/record"
          className="mt-4 block w-full text-center bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all"
        >
          + 食事を記録する
        </Link>
      </div>

      {/* Weekly Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          週間サマリー
        </h2>
        <div className="flex items-end justify-between gap-1 h-32">
          {weeklySummary.map((day) => {
            const height =
              weeklyMax > 0 ? (day.calories / weeklyMax) * 100 : 0;
            const isToday =
              day.date === new Date().toISOString().split("T")[0];
            return (
              <div
                key={day.date}
                className="flex flex-col items-center flex-1"
              >
                <span className="text-[10px] text-gray-400 mb-1">
                  {day.calories > 0 ? day.calories : ""}
                </span>
                <div className="w-full flex justify-center">
                  <div
                    className={`w-6 rounded-t-md ${
                      isToday ? "bg-orange-500" : "bg-orange-200"
                    }`}
                    style={{
                      height: `${Math.max(height, 4)}%`,
                      minHeight: "4px",
                    }}
                  />
                </div>
                <span
                  className={`text-xs mt-1 ${
                    isToday
                      ? "text-orange-500 font-bold"
                      : "text-gray-400"
                  }`}
                >
                  {day.label}
                </span>
              </div>
            );
          })}
        </div>
        {weeklySummary.length > 0 && (
          <p className="text-center text-xs text-gray-400 mt-3">
            7日間平均:{" "}
            <span className="font-semibold text-gray-600">
              {Math.round(
                weeklySummary.reduce((s, d) => s + d.calories, 0) /
                  weeklySummary.filter((d) => d.calories > 0).length || 0
              )}{" "}
              kcal
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

function CalorieRing({
  total,
  target,
}: {
  total: number;
  target: number;
}) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(total / target, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="#fed7aa"
        strokeWidth="16"
      />
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="#f97316"
        strokeWidth="16"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
      <text
        x="100"
        y="95"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="28"
        fontWeight="bold"
      >
        {total}
      </text>
      <text x="100" y="118" textAnchor="middle" fill="#9ca3af" fontSize="13">
        / {target} kcal
      </text>
    </svg>
  );
}

function PFCBar({
  label,
  value,
  color,
  unit,
}: {
  label: string;
  value: number;
  color: string;
  unit: string;
}) {
  const maxWidth = 200;
  const width = Math.min(value, maxWidth);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 w-16 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${Math.min((value / maxWidth) * 100, 100)}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-gray-600 w-12 text-right">
        {value.toFixed(1)} {unit}
      </span>
    </div>
  );
}
