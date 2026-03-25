// IMPORTANT: Run this SQL in Supabase SQL Editor before this page works:
// CREATE TABLE weight_logs (
//   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
//   user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
//   weight DECIMAL(5,1) NOT NULL,
//   logged_at DATE NOT NULL DEFAULT CURRENT_DATE,
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );
// ALTER TABLE weight_logs ENABLE ROW LEVEL SECURITY;
// CREATE POLICY "Users can manage own weight logs" ON weight_logs FOR ALL USING (auth.uid() = user_id);

"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type WeightLog = {
  id: string;
  user_id: string;
  weight: number;
  logged_at: string;
  created_at: string;
};

export default function WeightPage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [weight, setWeight] = useState("");
  const [saving, setSaving] = useState(false);
  const [todayEntry, setTodayEntry] = useState<WeightLog | null>(null);
  const [recentLogs, setRecentLogs] = useState<WeightLog[]>([]);
  const [last30Logs, setLast30Logs] = useState<WeightLog[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const fetchData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const thirtyDaysAgoStr = thirtyDaysAgo.toISOString().split("T")[0];

    // Fetch last 30 days for chart
    const { data: logs30 } = await supabase
      .from("weight_logs")
      .select("*")
      .eq("user_id", user.id)
      .gte("logged_at", thirtyDaysAgoStr)
      .order("logged_at", { ascending: true });

    if (logs30) {
      setLast30Logs(logs30 as WeightLog[]);
    }

    // Fetch last 10 for history
    const { data: recent } = await supabase
      .from("weight_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("logged_at", { ascending: false })
      .limit(10);

    if (recent) {
      setRecentLogs(recent as WeightLog[]);
    }

    // Check today's entry
    const { data: todayData } = await supabase
      .from("weight_logs")
      .select("*")
      .eq("user_id", user.id)
      .eq("logged_at", today)
      .maybeSingle();

    if (todayData) {
      setTodayEntry(todayData as WeightLog);
      setWeight(String(todayData.weight));
    }

    setLoading(false);
  }, [supabase, router, today]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSave = async () => {
    setError(null);
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum < 30 || weightNum > 300) {
      setError("30〜300kgの範囲で入力してください");
      return;
    }

    setSaving(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      if (todayEntry) {
        const { error: updateError } = await supabase
          .from("weight_logs")
          .update({ weight: weightNum })
          .eq("id", todayEntry.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("weight_logs").insert({
          user_id: user.id,
          weight: weightNum,
          logged_at: today,
        });
        if (insertError) throw insertError;
      }

      await fetchData();
    } catch {
      setError("保存に失敗しました。もう一度お試しください。");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setError(null);
    setDeleting(id);
    try {
      const { error: deleteError } = await supabase.from("weight_logs").delete().eq("id", id);
      if (deleteError) throw deleteError;
      await fetchData();
    } catch {
      setError("削除に失敗しました。もう一度お試しください。");
    } finally {
      setDeleting(null);
    }
  };

  // Chart data: last 14 entries from last30Logs
  const chartData = last30Logs.slice(-14);
  const chartWeights = chartData.map((l) => Number(l.weight));
  const chartMin = chartWeights.length > 0 ? Math.min(...chartWeights) - 1 : 0;
  const chartMax = chartWeights.length > 0 ? Math.max(...chartWeights) + 1 : 100;
  const chartRange = chartMax - chartMin || 1;

  // Progress stats
  const currentWeight = last30Logs.length > 0 ? Number(last30Logs[last30Logs.length - 1].weight) : null;
  const startWeight = last30Logs.length > 0 ? Number(last30Logs[0].weight) : null;
  const weightChange = currentWeight !== null && startWeight !== null ? currentWeight - startWeight : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/dashboard"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ←
          </Link>
          <h1 className="text-xl font-bold text-gray-800">体重記録</h1>
        </div>

        {/* Weight Input Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <p className="text-sm text-gray-400 mb-1">{today}</p>
          {todayEntry && (
            <p className="text-xs text-green-600 mb-3">本日の記録済み</p>
          )}
          <div className="flex items-end gap-3 mb-4">
            <input
              type="number"
              step="0.1"
              min="30"
              max="300"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.0"
              className="text-4xl font-bold text-gray-800 w-full bg-transparent outline-none border-b-2 border-gray-200 focus:border-orange-500 transition-colors pb-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-xl text-gray-400 pb-1 shrink-0">kg</span>
          </div>
          {error && (
            <p className="text-sm text-red-500 mb-3">{error}</p>
          )}
          <button
            onClick={handleSave}
            disabled={saving || !weight}
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "記録中..." : todayEntry ? "更新する" : "記録する"}
          </button>
        </div>

        {/* Progress Section */}
        {last30Logs.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <h2 className="text-sm font-semibold text-gray-500 mb-4">
              30日間の推移
            </h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center">
                <p className="text-xs text-gray-400">現在</p>
                <p className="text-lg font-bold text-gray-800">
                  {currentWeight?.toFixed(1)}
                </p>
                <p className="text-xs text-gray-400">kg</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">開始時</p>
                <p className="text-lg font-bold text-gray-800">
                  {startWeight?.toFixed(1)}
                </p>
                <p className="text-xs text-gray-400">kg</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">変化</p>
                <p
                  className={`text-lg font-bold ${
                    weightChange !== null && weightChange < 0
                      ? "text-green-500"
                      : weightChange !== null && weightChange > 0
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  {weightChange !== null
                    ? `${weightChange > 0 ? "+" : ""}${weightChange.toFixed(1)}`
                    : "-"}
                </p>
                <p className="text-xs text-gray-400">kg</p>
              </div>
            </div>

            {/* SVG Chart */}
            {chartData.length >= 2 && (
              <div className="relative">
                <svg
                  viewBox={`0 0 ${Math.max(chartData.length - 1, 1) * 40 + 40} 160`}
                  className="w-full h-40"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
                    const y = 10 + (1 - frac) * 130;
                    return (
                      <line
                        key={frac}
                        x1="0"
                        y1={y}
                        x2={Math.max(chartData.length - 1, 1) * 40 + 40}
                        y2={y}
                        stroke="#f3f4f6"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Line */}
                  <polyline
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={chartData
                      .map((l, i) => {
                        const x = 20 + i * 40;
                        const y =
                          10 +
                          (1 - (Number(l.weight) - chartMin) / chartRange) * 130;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                  />

                  {/* Dots */}
                  {chartData.map((l, i) => {
                    const x = 20 + i * 40;
                    const y =
                      10 +
                      (1 - (Number(l.weight) - chartMin) / chartRange) * 130;
                    return (
                      <circle
                        key={l.id}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#f97316"
                        stroke="white"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>

                {/* X-axis labels */}
                <div
                  className="flex justify-between text-[10px] text-gray-400 mt-1 overflow-hidden"
                >
                  {chartData.map((l, i) => {
                    // Show label for first, last, and every ~3rd entry
                    const show = i === 0 || i === chartData.length - 1 || i % 3 === 0;
                    const d = new Date(l.logged_at);
                    return (
                      <span key={l.id} className="text-center" style={{ minWidth: "30px" }}>
                        {show ? `${d.getMonth() + 1}/${d.getDate()}` : ""}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* History */}
        {recentLogs.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-500 mb-4">
              記録履歴
            </h2>
            <div className="space-y-2">
              {recentLogs.map((log) => {
                const d = new Date(log.logged_at);
                const dateStr = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
                return (
                  <div
                    key={log.id}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{dateStr}</span>
                      <span className="font-bold text-gray-800">
                        {Number(log.weight).toFixed(1)} kg
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(log.id)}
                      disabled={deleting === log.id}
                      className="text-xs text-red-400 hover:text-red-600 px-2 py-1 rounded transition-colors disabled:opacity-50"
                    >
                      {deleting === log.id ? "..." : "削除"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
