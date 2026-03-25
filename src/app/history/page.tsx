"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { FoodLog } from "@/types/database";

type DayData = {
  total: number;
  logs: FoodLog[];
};

export default function HistoryPage() {
  const router = useRouter();
  const [logs, setLogs] = useState<FoodLog[]>([]);
  const [targetCalories, setTargetCalories] = useState(2000);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      // プロフィールから目標カロリー取得
      const { data: profile } = await supabase
        .from("profiles")
        .select("target_calories")
        .eq("id", user.id)
        .single();
      if (profile) setTargetCalories(profile.target_calories);

      // 過去30日分の食事ログ取得
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: foodLogs } = await supabase
        .from("food_logs")
        .select("*, menu_items(name, chain_restaurants(name, emoji))")
        .eq("user_id", user.id)
        .gte("logged_at", thirtyDaysAgo.toISOString())
        .order("logged_at", { ascending: false });

      if (foodLogs) setLogs(foodLogs as FoodLog[]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // 日付ごとにログを集約
  const dayMap = useMemo(() => {
    const map: Record<string, DayData> = {};
    for (const log of logs) {
      const dateKey = log.logged_at.split("T")[0];
      if (!map[dateKey]) {
        map[dateKey] = { total: 0, logs: [] };
      }
      map[dateKey].total += log.calories;
      map[dateKey].logs.push(log);
    }
    return map;
  }, [logs]);

  // カレンダー生成
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [currentMonth]);

  const getDateKey = (day: number) => {
    const y = currentMonth.getFullYear();
    const m = String(currentMonth.getMonth() + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const getCalorieColor = (total: number) => {
    const ratio = total / targetCalories;
    if (ratio <= 0.9) return "bg-green-100 text-green-700";
    if (ratio <= 1.1) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const monthLabel = `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`;
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

  const selectedLogs = selectedDate ? dayMap[selectedDate]?.logs ?? [] : [];

  const getMealTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      breakfast: "朝食",
      lunch: "昼食",
      dinner: "夕食",
      snack: "間食",
    };
    return labels[type] || type;
  };

  if (loading) {
    return (
      <div className="px-4 pt-6 pb-20">
        <div className="h-7 w-32 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4 mx-auto" />
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6 pb-20">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-gray-800">食事履歴</h1>
      </div>

      {logs.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center mb-4">
          <p className="text-gray-500 mb-3">まだ記録がありません</p>
          <Link
            href="/record"
            className="inline-block px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-xl"
          >
            食事を記録する
          </Link>
        </div>
      )}

      {/* カレンダーヘッダー */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
          >
            &lt;
          </button>
          <span className="font-bold text-gray-800">{monthLabel}</span>
          <button
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
          >
            &gt;
          </button>
        </div>

        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-medium text-gray-400"
            >
              {day}
            </div>
          ))}
        </div>

        {/* カレンダー本体 */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, i) => {
            if (day === null) return <div key={`empty-${i}`} />;
            const dateKey = getDateKey(day);
            const data = dayMap[dateKey];
            const isSelected = selectedDate === dateKey;

            return (
              <button
                key={dateKey}
                onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                className={`relative flex flex-col items-center justify-center rounded-lg p-1 min-h-[48px] transition-colors ${
                  isSelected
                    ? "ring-2 ring-orange-400"
                    : ""
                } ${data ? getCalorieColor(data.total) : "hover:bg-gray-50"}`}
              >
                <span className="text-xs font-medium">{day}</span>
                {data && (
                  <span className="text-[8px] font-medium mt-0.5">
                    {data.total}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 凡例 */}
        <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-green-100 inline-block" />
            良好
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-yellow-100 inline-block" />
            普通
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-red-100 inline-block" />
            超過
          </span>
        </div>
      </div>

      {/* 選択した日の食事記録 */}
      {selectedDate && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="font-bold text-gray-800 mb-3">
            {selectedDate.replace(/-/g, "/")} の記録
          </h2>
          {selectedLogs.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">
              この日の記録はありません
            </p>
          ) : (
            <div className="space-y-3">
              {selectedLogs.map((log) => (
                <div
                  key={log.id}
                  className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      {log.menu_items?.chain_restaurants?.emoji && (
                        <span>{log.menu_items.chain_restaurants.emoji}</span>
                      )}
                      <span className="text-sm font-medium text-gray-800">
                        {log.menu_items?.name || log.custom_name || "不明"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-orange-500 font-medium">
                        {getMealTypeLabel(log.meal_type)}
                      </span>
                      {log.menu_items?.chain_restaurants?.name && (
                        <span className="text-[10px] text-gray-400">
                          {log.menu_items.chain_restaurants.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800">
                      {log.calories}
                      <span className="text-[10px] font-normal text-gray-400">
                        kcal
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-400">
                      P{log.protein} F{log.fat} C{log.carbs}
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100 flex justify-between">
                <span className="text-sm font-medium text-gray-500">合計</span>
                <span className="text-sm font-bold text-orange-500">
                  {dayMap[selectedDate]?.total ?? 0} kcal
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
