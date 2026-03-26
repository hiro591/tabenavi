"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import {
  Settings,
  Search,
  Flame,
  Trash2,
  Utensils,
  ChevronRight,
  Plus,
  TrendingUp,
} from "lucide-react";
import type { FoodLog, Profile } from "@/types/database";

const MEAL_TYPE_LABELS: Record<string, string> = {
  breakfast: "朝食",
  lunch: "昼食",
  dinner: "夕食",
  snack: "間食",
};

const MEAL_TYPE_COLORS: Record<string, string> = {
  breakfast: "bg-amber-400/15 text-amber-600",
  lunch: "bg-cyan-400/15 text-cyan-600",
  dinner: "bg-violet-400/15 text-violet-600",
  snack: "bg-pink-400/15 text-pink-600",
};

const MEAL_TYPE_BORDER: Record<string, string> = {
  breakfast: "border-l-2 border-l-amber-400/60",
  lunch: "border-l-2 border-l-cyan-400/60",
  dinner: "border-l-2 border-l-violet-400/60",
  snack: "border-l-2 border-l-pink-400/60",
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
  const [toast, setToast] = useState("");

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
    await calculateStreak(currentUser.id);
    setLoading(false);
  }, [supabase, router]);

  const calculateStreak = async (userId: string) => {
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setDate(today.getDate() - 364);
    const yearAgoStr = yearAgo.toISOString().split("T")[0];
    const todayStr = today.toISOString().split("T")[0];

    const { data } = await supabase
      .from("food_logs")
      .select("logged_at")
      .eq("user_id", userId)
      .gte("logged_at", `${yearAgoStr}T00:00:00`)
      .lte("logged_at", `${todayStr}T23:59:59`);

    const loggedDates = new Set(
      data?.map((log) => log.logged_at.split("T")[0]) ?? []
    );

    let currentStreak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      if (loggedDates.has(dateStr)) {
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
    try {
      const { error } = await supabase.from("food_logs").delete().eq("id", logId);
      if (error) throw error;
      setLogs((prev) => prev.filter((l) => l.id !== logId));
      setToast("削除しました");
      setTimeout(() => setToast(""), 2000);
    } catch {
      setToast("削除に失敗しました");
      setTimeout(() => setToast(""), 2000);
    } finally {
      setDeletingId(null);
    }
  };

  // ─── Loading skeleton ───
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-24">
        <div className="max-w-lg mx-auto space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="h-6 w-48 bg-gray-200 rounded-lg animate-shimmer" />
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-shimmer" />
          </div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-shimmer" />
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-100 animate-shimmer" />
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-3">
            <div className="h-4 w-24 bg-gray-100 rounded animate-shimmer" />
            <div className="h-2.5 w-full bg-gray-100 rounded-full animate-shimmer" />
            <div className="h-2.5 w-full bg-gray-100 rounded-full animate-shimmer" />
            <div className="h-2.5 w-full bg-gray-100 rounded-full animate-shimmer" />
          </div>
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

  const proteinTarget = Math.round((targetCalories * 0.15) / 4);
  const fatTarget = Math.round((targetCalories * 0.25) / 9);
  const carbsTarget = Math.round((targetCalories * 0.6) / 4);

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-24">
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-xl border border-gray-200 shadow-lg">
          {toast}
        </div>
      )}
      <div className="max-w-lg mx-auto">
        {/* ─── Header ─── */}
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-lg font-bold text-gray-900">
            {greeting}、<span className="text-sky-500">{displayName}</span>さん
          </h1>
          <Link
            href="/profile"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Settings className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-xs text-gray-400 mb-5">{todayDate}</p>

        {/* ─── Calorie Ring ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
          <div className="flex justify-center">
            <CalorieRing total={totalCalories} target={targetCalories} />
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            {remainingCalories > 0 ? (
              <>
                残り{" "}
                <span className="font-bold text-gray-900 tabular-nums">
                  {remainingCalories}
                </span>{" "}
                kcal
              </>
            ) : (
              <span className="text-red-500 font-bold">
                {Math.abs(remainingCalories)} kcal オーバー
              </span>
            )}
          </p>
        </div>

        {/* ─── PFC Balance ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <h2 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            PFCバランス
          </h2>
          <div className="space-y-3.5">
            <PFCBar
              label="タンパク質"
              value={totalProtein}
              target={proteinTarget}
              color="bg-blue-400"
              dotColor="bg-blue-400"
            />
            <PFCBar
              label="脂質"
              value={totalFat}
              target={fatTarget}
              color="bg-amber-400"
              dotColor="bg-amber-400"
            />
            <PFCBar
              label="炭水化物"
              value={totalCarbs}
              target={carbsTarget}
              color="bg-emerald-400"
              dotColor="bg-emerald-400"
            />
          </div>
        </div>

        {/* ─── Quick Actions ─── */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Link
            href="/search"
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <Search className="w-5 h-5 text-sky-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">メニュー検索</p>
              <p className="text-[11px] text-gray-400">PFCで絞り込み</p>
            </div>
          </Link>
          <Link
            href="/combo"
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-400/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">組み合わせ</p>
              <p className="text-[11px] text-gray-400">最適な食事を提案</p>
            </div>
          </Link>
        </div>

        {/* ─── Streak ─── */}
        {streak > 0 && (
          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl border border-sky-200/50 p-4 mb-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-sky-200">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                <span className="text-sky-500 tabular-nums">{streak}</span>日連続記録中
              </p>
              <p className="text-[11px] text-gray-400">
                {streak >= 7
                  ? "素晴らしい！この調子で続けましょう"
                  : streak >= 3
                    ? "いい感じ！記録を続けましょう"
                    : "記録の習慣をつけていきましょう"}
              </p>
            </div>
          </div>
        )}

        {/* ─── Weekly Trend ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <h2 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            週間カロリー
          </h2>
          <div className="flex items-end justify-between gap-1.5 h-28">
            {weeklySummary.map((day) => {
              const barHeight =
                day.calories > 0
                  ? Math.max((day.calories / targetCalories) * 100, 5)
                  : 3;
              const isToday =
                day.date === new Date().toISOString().split("T")[0];
              const isOver = day.calories > targetCalories;

              return (
                <div
                  key={day.date}
                  className="flex flex-col items-center flex-1"
                >
                  {isToday && day.calories > 0 && (
                    <span className="text-[10px] text-gray-500 font-semibold mb-1 tabular-nums">
                      {day.calories}
                    </span>
                  )}
                  <div className="w-full flex justify-center">
                    <div
                      className={`w-7 rounded-t-md transition-all duration-500 ${
                        day.calories === 0
                          ? "bg-gray-100"
                          : isOver
                            ? "bg-red-400"
                            : isToday
                              ? "bg-gradient-to-t from-sky-400 to-cyan-400"
                              : "bg-sky-300/60"
                      } ${isToday ? "ring-1 ring-sky-400/30 ring-offset-1 ring-offset-white" : ""}`}
                      style={{
                        height: `${Math.min(barHeight, 120)}%`,
                        minHeight: "3px",
                      }}
                    />
                  </div>
                  <span
                    className={`text-[11px] mt-1.5 ${
                      isToday
                        ? "text-sky-500 font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {day.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Today's Logs ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              今日の記録
            </h2>
            <span className="text-xs text-gray-300 tabular-nums">{logs.length}件</span>
          </div>
          {logs.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">まだ記録がありません</p>
              <p className="text-xs text-gray-300 mt-1">
                外食を記録してみましょう
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className={`flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 transition-all ${
                    MEAL_TYPE_BORDER[log.meal_type] || MEAL_TYPE_BORDER.snack
                  } ${deletingId === log.id ? "opacity-40 scale-95" : ""}`}
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                        MEAL_TYPE_COLORS[log.meal_type] || MEAL_TYPE_COLORS.snack
                      }`}
                    >
                      {MEAL_TYPE_LABELS[log.meal_type] || "間食"}
                    </span>
                    <div className="min-w-0">
                      {log.menu_items?.chain_restaurants && (
                        <p className="text-[10px] text-gray-400 truncate">
                          {log.menu_items.chain_restaurants.name}
                        </p>
                      )}
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {log.menu_items?.name ?? log.custom_name ?? "不明"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-2 shrink-0">
                    <span className="text-sm font-bold text-sky-500 tabular-nums">
                      {log.calories}
                    </span>
                    <span className="text-[10px] text-gray-400">kcal</span>
                    <button
                      onClick={() => handleDelete(log.id)}
                      disabled={deletingId === log.id}
                      className="text-gray-300 hover:text-red-400 transition-colors p-1 ml-1"
                      aria-label="削除"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Record button */}
          <Link
            href="/record"
            className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white text-sm font-bold py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-sky-200"
          >
            <Plus className="w-4 h-4" />
            記録する
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Calorie Ring ───────────────────────────────────────────────────────────

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

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Background circle */}
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="12"
      />
      {/* Progress circle */}
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke={ratio > 1 ? "#F87171" : "url(#ring-gradient)"}
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
        style={{
          transition: "stroke-dashoffset 0.8s ease, stroke 0.5s ease",
        }}
      />
      {/* Calories */}
      <text
        x="100"
        y="88"
        textAnchor="middle"
        fill="#111827"
        fontSize="34"
        fontWeight="bold"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {total}
      </text>
      <text x="100" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="12">
        kcal
      </text>
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fill="#9CA3AF"
        fontSize="11"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        / {target}
      </text>
    </svg>
  );
}

// ─── PFC Bar ────────────────────────────────────────────────────────────────

function PFCBar({
  label,
  value,
  target,
  color,
  dotColor,
}: {
  label: string;
  value: number;
  target: number;
  color: string;
  dotColor?: string;
}) {
  const percentage = target > 0 ? Math.min((value / target) * 100, 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-gray-500 flex items-center gap-1.5">
          {dotColor && (
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
          )}
          {label}
        </span>
        <span className="text-xs text-gray-400 tabular-nums">
          <span className="font-semibold text-gray-700">
            {value.toFixed(1)}
          </span>{" "}
          / {target}g
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
