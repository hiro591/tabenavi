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
  breakfast: "bg-amber-50 text-amber-600 border border-amber-200/60",
  lunch: "bg-sky-50 text-sky-600 border border-sky-200/60",
  dinner: "bg-violet-50 text-violet-600 border border-violet-200/60",
  snack: "bg-pink-50 text-pink-600 border border-pink-200/60",
};

type WeeklySummary = {
  date: string;
  label: string;
  dayNum: number;
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
        dayNum: d.getDate(),
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

  // ─── Loading ───
  if (loading) {
    return (
      <div className="px-4 pt-5 pb-24">
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 w-36 bg-gray-200 rounded-lg animate-shimmer" />
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-shimmer" />
        </div>
        <div className="flex justify-around mb-5">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="h-3 w-3 bg-gray-200 rounded animate-shimmer" />
              <div className="w-9 h-9 bg-gray-200 rounded-full animate-shimmer" />
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
          <div className="flex items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-gray-100 animate-shimmer" />
            <div className="flex-1 space-y-4">
              <div className="h-3 w-full bg-gray-100 rounded-full animate-shimmer" />
              <div className="h-3 w-full bg-gray-100 rounded-full animate-shimmer" />
              <div className="h-3 w-full bg-gray-100 rounded-full animate-shimmer" />
            </div>
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

  const displayName = profile?.display_name ?? "ゲスト";

  const proteinTarget = Math.round((targetCalories * 0.15) / 4);
  const fatTarget = Math.round((targetCalories * 0.25) / 9);
  const carbsTarget = Math.round((targetCalories * 0.6) / 4);

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="px-4 pt-5 pb-24">
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-xl border border-gray-200 shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* ─── Header ─── */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[15px] font-bold text-gray-900">{displayName}さん</p>
          {streak > 0 && (
            <p className="text-[11px] text-sky-500 font-medium flex items-center gap-1 mt-0.5">
              <Flame className="w-3 h-3" />
              {streak}日連続記録中
            </p>
          )}
        </div>
        <Link
          href="/profile"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Settings className="w-4 h-4" />
        </Link>
      </div>

      {/* ─── Week Calendar ─── */}
      <div className="flex justify-around mb-5">
        {weeklySummary.map((day) => {
          const isToday = day.date === todayStr;
          const hasLog = day.calories > 0;
          return (
            <div key={day.date} className="flex flex-col items-center gap-1">
              <span className={`text-[10px] font-medium ${isToday ? "text-sky-500" : "text-gray-400"}`}>
                {day.label}
              </span>
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all ${
                  isToday
                    ? "bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-md shadow-sky-200"
                    : hasLog
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-gray-50 text-gray-400 border border-gray-100"
                }`}
              >
                {day.dayNum}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Main Card: Calorie Ring + PFC ─── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        <p className="text-xs text-gray-400 mb-4">
          目標: <span className="font-semibold text-gray-600 tabular-nums">{targetCalories}</span> kcal
        </p>

        <div className="flex items-center gap-5">
          {/* Ring */}
          <div className="flex-shrink-0">
            <CalorieRing total={totalCalories} target={targetCalories} remaining={remainingCalories} />
          </div>

          {/* PFC */}
          <div className="flex-1 space-y-3">
            <MiniPFC label="タンパク質" value={totalProtein} target={proteinTarget} color="bg-blue-400" textColor="text-blue-500" />
            <MiniPFC label="炭水化物" value={totalCarbs} target={carbsTarget} color="bg-emerald-400" textColor="text-emerald-500" />
            <MiniPFC label="脂質" value={totalFat} target={fatTarget} color="bg-amber-400" textColor="text-amber-500" />
          </div>
        </div>
      </div>

      {/* ─── Quick Actions ─── */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Link
          href="/search"
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors active:scale-[0.98]"
        >
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
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
          <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-violet-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">組み合わせ</p>
            <p className="text-[11px] text-gray-400">最適な食事を提案</p>
          </div>
        </Link>
      </div>

      {/* ─── Today's Logs ─── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-800">今日の記録</h2>
          <span className="text-xs text-gray-300 tabular-nums">{logs.length}件</span>
        </div>
        {logs.length === 0 ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Utensils className="w-5 h-5 text-gray-300" />
            </div>
            <p className="text-sm text-gray-400">まだ記録がありません</p>
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`flex items-center justify-between rounded-xl px-3.5 py-3 transition-all bg-gray-50/70 ${
                  deletingId === log.id ? "opacity-40 scale-95" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 ${
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
                    <p className="text-[13px] font-medium text-gray-700 truncate">
                      {log.menu_items?.name ?? log.custom_name ?? "不明"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 ml-2 shrink-0">
                  <span className="text-[13px] font-bold text-gray-800 tabular-nums">
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

        <Link
          href="/record"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white text-sm font-bold py-3 rounded-xl transition-all active:scale-[0.98] shadow-md shadow-sky-200"
        >
          <Plus className="w-4 h-4" />
          記録する
        </Link>
      </div>
    </div>
  );
}

// ─── Calorie Ring (compact, shows remaining) ────────────────────────────────

function CalorieRing({
  total,
  target,
  remaining,
}: {
  total: number;
  target: number;
  remaining: number;
}) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const ratio = total / target;
  const progress = Math.min(ratio, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="70" cy="70" r={radius} fill="none" stroke="#F3F4F6" strokeWidth="10" />
      <circle
        cx="70" cy="70" r={radius} fill="none"
        stroke={ratio > 1 ? "#F87171" : "url(#ring-grad)"}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
      {remaining > 0 ? (
        <>
          <text x="70" y="62" textAnchor="middle" fill="#111827" fontSize="26" fontWeight="bold" style={{ fontVariantNumeric: "tabular-nums" }}>
            {remaining}
          </text>
          <text x="70" y="80" textAnchor="middle" fill="#9CA3AF" fontSize="10">
            kcal 残り
          </text>
        </>
      ) : (
        <>
          <text x="70" y="62" textAnchor="middle" fill="#EF4444" fontSize="22" fontWeight="bold" style={{ fontVariantNumeric: "tabular-nums" }}>
            +{Math.abs(remaining)}
          </text>
          <text x="70" y="80" textAnchor="middle" fill="#EF4444" fontSize="10">
            kcal 超過
          </text>
        </>
      )}
    </svg>
  );
}

// ─── Mini PFC Bar (compact for side layout) ─────────────────────────────────

function MiniPFC({
  label,
  value,
  target,
  color,
  textColor,
}: {
  label: string;
  value: number;
  target: number;
  color: string;
  textColor: string;
}) {
  const pct = target > 0 ? Math.min((value / target) * 100, 100) : 0;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <span className={`text-[13px] font-bold tabular-nums ${textColor}`}>
          {Math.round(value)}
        </span>
        <span className="text-[10px] text-gray-400">/ {target}g</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-[6px] overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[10px] text-gray-400 mt-0.5">{label}</p>
    </div>
  );
}
