"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff, Loader2 } from "lucide-react";
import { Preferences } from "@capacitor/preferences";
import {
  scheduleDailyMealReminders,
  cancelDailyMealReminders,
  requestPushPermission,
} from "@/lib/native/push";
import { useNativeFeatures } from "@/lib/native/useNativeFeatures";

const PREF_KEY = "tabenavi.notifications.dailyReminders";

type Status = "loading" | "off" | "on" | "denied" | "saving";

export const NativePushToggle = () => {
  const { isNativeApp, ready } = useNativeFeatures();
  const [savedStatus, setSavedStatus] = useState<Status | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!ready || !isNativeApp) return;
    let active = true;
    void Preferences.get({ key: PREF_KEY }).then(({ value }) => {
      if (!active) return;
      setSavedStatus(value === "true" ? "on" : "off");
    });
    return () => {
      active = false;
    };
  }, [ready, isNativeApp]);

  const effectiveStatus: Status =
    !ready || !isNativeApp
      ? "off"
      : status !== "loading"
        ? status
        : (savedStatus ?? "loading");

  if (!ready) return null;
  if (!isNativeApp) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Push 通知は iOS アプリ版で利用できます。App Store からインストールしてください。
      </div>
    );
  }

  const handleEnable = async () => {
    setStatus("saving");
    const perm = await requestPushPermission();
    if (perm === "denied") {
      setStatus("denied");
      return;
    }
    const ok = await scheduleDailyMealReminders();
    if (ok) {
      await Preferences.set({ key: PREF_KEY, value: "true" });
      setStatus("on");
    } else {
      setStatus("denied");
    }
  };

  const handleDisable = async () => {
    setStatus("saving");
    await cancelDailyMealReminders();
    await Preferences.set({ key: PREF_KEY, value: "false" });
    setStatus("off");
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start gap-3">
        {effectiveStatus === "on" ? (
          <Bell className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
        ) : (
          <BellOff className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">毎日の食事リマインド</h3>
          <p className="mt-1 text-sm text-gray-600">
            朝 8:00 と夜 21:00 に通知が届きます。記録の習慣化に効果的です。
          </p>
          {effectiveStatus === "denied" && (
            <p className="mt-2 text-sm text-rose-600">
              通知が拒否されています。設定アプリから「通知」を許可してください。
            </p>
          )}
        </div>
        <div>
          {effectiveStatus === "saving" || effectiveStatus === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
          ) : effectiveStatus === "on" ? (
            <button
              onClick={handleDisable}
              className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-sky-600"
            >
              ON
            </button>
          ) : (
            <button
              onClick={handleEnable}
              className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              OFF
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
