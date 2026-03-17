"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { FoodLog, Profile } from "@/types/database";

const MEAL_TYPE_LABELS: Record<string, string> = {
  breakfast: "朝食",
  lunch: "昼食",
  dinner: "夕食",
  snack: "間食",
};

const MEAL_TYPE_COLORS: Record<string, string> = {
  breakfast: "bg-yellow-100 text-yellow-700",
  lunch: "bg-orange-100 text-orange-700",
  dinner: "bg-indigo-100 text-indigo-700",
  snack: "bg-pink-100 text-pink-700",
};

type WeeklySummary = {
  date: string;
  label: string;
  calories: number;
};

export default function DashboardPage() {
  const supabase = createClient();
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [logs, setLogs] = useState<FoodLog[]>([]);
  const [weeklySummary, setWeeklySummary] = useState<WeeklySummary[]>([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split("T")[0];

    const [profileRes, logsRes, weeklyLogsRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", currentUser.id).single(),
      supabase
        .from("food_logs")
        .select("*, menu_items(name, chain_restaurants(name, emoji))")
        .eq("user_id", currentUser.id)
        .gte("logged_at", `${todayStr}T00:00:00`)
        .lte("logged_at", `${todayStr}T23:59:59`)
        .order("logged_at", { ascending: false }),
      supabase
        .from("food_logs")
        .select("calories, logged_at")
        .eq("user_id", currentUser.id)
        .gte("logged_at", `${sevenDaysAgoStr}T00:00:00`)
        .order("logged_at", { ascending: false }),
    ]);

    if (profileRes.data) setProfile(profileRes.data);
    if (logsRes.data) setLogs(logsRes.data as FoodLog[]);

    // Build weekly summary from bulk query
    const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];
    const weeklyData: WeeklySummary[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const dayLogs = weeklyLogsRes.data?.filter((l) =>
        l.logged_at.startsWith(dateStr)
      );
      const total =
        dayLogs?.reduce((sum, l) => sum + (l.calories || 0), 0) ?? 0;
      weeklyData.push({
        date: dateStr,
        label: dayLabels[d.getDay()],
        calories: total,
      });
    }
    setWeeklySummary(weeklyData);

    // Calculate streak
    await calculateStreak(currentUser.id);

    setLoading(false);
  }, [supabase, router]);

  const calculateStreak = async (userId: string) => {
    let currentStreak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];

      const { count } = await supabase
        .from("food_logs")
        .select("id", { count: "exact", head: true })
        .eq("user_id", userId)
        .gte("logged_at", `${dateStr}T00:00:00`)
        .lte("logged_at", `${dateStr}T23:59:59`);

      if (count && count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }
    setStreak(currentStreak);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (logId: string) => {
    if (!confirm("この記録を削除しますか？")) return;
    setDeletingId(logId);
    await supabase.from("food_logs").delete().eq("id", logId);
    setLogs((prev) => prev.filter((l) => l.id !== logId));
    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="px-4 pt-6 space-y-4">
        {/* Skeleton header */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-6 w-48 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        {/* Skeleton ring */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-center">
          <div className="w-48 h-48 rounded-full border-16 border-gray-200 animate-pulse" />
        </div>
        {/* Skeleton PFC */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-full bg-gray-100 rounded-full animate-pulse" />
          <div className="h-3 w-full bg-gray-100 rounded-full animate-pulse" />
          <div className="h-3 w-full bg-gray-100 rounded-full animate-pulse" />
        </div>
        {/* Skeleton logs */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-12 w-full bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-12 w-full bg-gray-100 rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  const totalCalories = logs.reduce((sum, l) => sum + (l.calories || 0), 0);
  const totalProtein = logs.reduce((sum, l) => sum + (l.protein || 0), 0);
  const totalFat = logs.reduce((sum, l) => sum + (l.fat || 0), 0);
  const totalCarbs = logs.reduce((sum, l) => sum + (l.carbs || 0), 0);
  const targetCalories = profile?.target_calories ?? 2000;
  const remainingCalories = targetCalories - totalCalories;

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "おはよう";
    if (hour < 18) return "こんにちは";
    return "こんばんは";
  })();

  const displayName = profile?.display_name ?? "ゲスト";

  const todayDate = (() => {
    const d = new Date();
    const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];
    return `${d.getMonth() + 1}月${d.getDate()}日（${dayLabels[d.getDay()]}）`;
  })();

  // PFC recommended values
  const proteinTarget = Math.round((targetCalories * 0.15) / 4);
  const fatTarget = Math.round((targetCalories * 0.25) / 9);
  const carbsTarget = Math.round((targetCalories * 0.6) / 4);

  // Remaining calories banner color
  const remainingColor =
    remainingCalories <= 0
      ? "bg-red-50 border-red-200 text-red-700"
      : remainingCalories < targetCalories * 0.3
        ? "bg-orange-50 border-orange-200 text-orange-700"
        : "bg-green-50 border-green-200 text-green-700";

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-xl font-bold text-gray-800">
          {greeting}、{displayName}さん！
        </h1>
        <Link
          href="/profile"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <span className="text-lg">⚙</span>
        </Link>
      </div>
      <p className="text-sm text-gray-400 mb-5">{todayDate}</p>

      {/* Calorie Ring */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <div className="flex justify-center">
          <CalorieRing total={totalCalories} target={targetCalories} />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {remainingCalories > 0 ? (
            <>
              残り{" "}
              <span className="font-semibold text-gray-700">
                {remainingCalories}
              </span>{" "}
              kcal
            </>
          ) : (
            <span className="text-red-500 font-semibold">
              {Math.abs(remainingCalories)} kcal オーバー
            </span>
          )}
        </p>
      </div>

      {/* PFC Balance */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          PFCバランス
        </h2>
        <div className="space-y-3">
          <PFCBar
            label="タンパク質"
            value={totalProtein}
            target={proteinTarget}
            color="bg-blue-400"
          />
          <PFCBar
            label="脂質"
            value={totalFat}
            target={fatTarget}
            color="bg-yellow-400"
          />
          <PFCBar
            label="炭水化物"
            value={totalCarbs}
            target={carbsTarget}
            color="bg-green-400"
          />
        </div>
      </div>

      {/* Streak & Motivation */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
        {streak > 0 ? (
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="text-base font-bold text-gray-800">
                {streak}日連続記録中
              </p>
              <p className="text-xs text-gray-400">
                {streak >= 7
                  ? "素晴らしい！この調子で続けましょう！"
                  : streak >= 3
                    ? "いい感じです！記録を続けましょう！"
                    : "記録の習慣をつけていきましょう！"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <p className="text-sm text-gray-500">
                今日はまだ記録がありません
              </p>
              <p className="text-xs text-gray-400">
                外食を記録して健康管理を始めましょう！
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Weekly Calorie Trend */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          週間カロリー推移
        </h2>
        <div className="flex items-end justify-between gap-1.5 h-32">
          {weeklySummary.map((day) => {
            const barHeight =
              day.calories > 0
                ? Math.max((day.calories / targetCalories) * 100, 5)
                : 3;
            const isToday =
              day.date === new Date().toISOString().split("T")[0];
            const barColor =
              day.calories === 0
                ? "bg-gray-200"
                : day.calories > targetCalories
                  ? "bg-red-400"
                  : "bg-orange-400";

            return (
              <div
                key={day.date}
                className="flex flex-col items-center flex-1"
              >
                {isToday && day.calories > 0 && (
                  <span className="text-[9px] text-gray-500 font-semibold mb-0.5">
                    {day.calories}
                  </span>
                )}
                <div className="w-full flex justify-center">
                  <div
                    className={`w-7 rounded-t-md transition-all duration-500 ${barColor} ${isToday ? "ring-2 ring-orange-300 ring-offset-1" : ""}`}
                    style={{
                      height: `${Math.min(barHeight, 120)}%`,
                      minHeight: "3px",
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
        {/* Target line label */}
        <div className="flex items-center gap-2 mt-3 justify-center">
          <div className="w-4 h-0.5 bg-orange-300" />
          <span className="text-[10px] text-gray-400">
            目標 {targetCalories} kcal
          </span>
          <div className="w-3 h-3 bg-red-400 rounded-sm" />
          <span className="text-[10px] text-gray-400">超過</span>
        </div>
      </div>

      {/* Quick Recommend Banner */}
      <Link href="/recommend">
        <div
          className={`rounded-2xl p-4 shadow-sm mb-4 border ${remainingColor} flex items-center justify-between`}
        >
          <div>
            <p className="text-sm font-semibold">
              {remainingCalories > 0
                ? `今日あと${remainingCalories}kcal食べられます`
                : "今日の目標カロリーを超えています"}
            </p>
            <p className="text-xs opacity-70 mt-0.5">
              {remainingCalories > 0
                ? "おすすめメニューを見る"
                : "明日の食事に気をつけましょう"}
            </p>
          </div>
          <span className="text-lg">→</span>
        </div>
      </Link>

      {/* Today's Food Logs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">
          今日の記録
        </h2>
        {logs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-4xl mb-3">🍽️</p>
            <p className="text-sm text-gray-500">
              まだ記録がありません。
            </p>
            <p className="text-xs text-gray-400 mt-1">
              外食を記録してみましょう！
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 transition-opacity ${deletingId === log.id ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${MEAL_TYPE_COLORS[log.meal_type] || MEAL_TYPE_COLORS.snack}`}
                  >
                    {MEAL_TYPE_LABELS[log.meal_type] || "間食"}
                  </span>
                  <div className="min-w-0">
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
                </div>
                <div className="flex items-center gap-2 ml-2 shrink-0">
                  <span className="text-sm font-semibold text-orange-500">
                    {log.calories} kcal
                  </span>
                  <button
                    onClick={() => handleDelete(log.id)}
                    disabled={deletingId === log.id}
                    className="text-gray-300 hover:text-red-400 transition-colors text-base leading-none p-1"
                    aria-label="削除"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link
          href="/record"
          className="mt-4 block w-full text-center bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all"
        >
          記録する ＋
        </Link>
      </div>

      {/* Cheat Day Quick Link */}
      <Link href="/cheatday">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-4 shadow-sm mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <div>
              <p className="text-sm font-semibold text-gray-700">
                チートデイを記録
              </p>
              <p className="text-[10px] text-gray-400">
                たまには好きなものを楽しもう！
              </p>
            </div>
          </div>
          <span className="text-gray-400">→</span>
        </div>
      </Link>
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
  const ratio = total / target;
  const progress = Math.min(ratio, 1);
  const strokeDashoffset = circumference * (1 - progress);

  // Color based on consumption
  const strokeColor =
    ratio > 1 ? "#ef4444" : ratio < 0.5 ? "#22c55e" : "#f97316";
  const bgStrokeColor =
    ratio > 1 ? "#fecaca" : ratio < 0.5 ? "#dcfce7" : "#fed7aa";

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Background circle */}
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke={bgStrokeColor}
        strokeWidth="14"
      />
      {/* Progress circle - starts from top, goes clockwise */}
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth="14"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
        style={{ transition: "stroke-dashoffset 0.8s ease, stroke 0.5s ease" }}
      />
      {/* Consumed calories - large */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fill="#1a1a1a"
        fontSize="32"
        fontWeight="bold"
      >
        {total}
      </text>
      {/* kcal label */}
      <text x="100" y="110" textAnchor="middle" fill="#9ca3af" fontSize="12">
        kcal
      </text>
      {/* Target */}
      <text x="100" y="130" textAnchor="middle" fill="#9ca3af" fontSize="12">
        / {target} kcal
      </text>
    </svg>
  );
}

function PFCBar({
  label,
  value,
  target,
  color,
}: {
  label: string;
  value: number;
  target: number;
  color: string;
}) {
  const percentage = target > 0 ? Math.min((value / target) * 100, 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-xs text-gray-500">
          <span className="font-semibold text-gray-700">
            {value.toFixed(1)}
          </span>{" "}
          / {target}g
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
