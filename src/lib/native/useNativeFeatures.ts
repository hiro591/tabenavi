"use client";

import { useSyncExternalStore } from "react";
import { isNative, getPlatform } from "./platform";

export type NativeFeaturesState = {
  isNativeApp: boolean;
  platform: "ios" | "android" | "web";
  ready: boolean;
};

const subscribe = () => () => {};

// useSyncExternalStore の getSnapshot は「同一参照」を返さなければならない。
// 毎回新しいオブジェクトを返すと React が変化を検知し続け、無限再レンダーで
// クラッシュする(= client-side exception)。isNative()/getPlatform() は実行中に
// 変化しないため、初回に一度だけ算出して同じ参照を返し続ける。
let cachedClientSnapshot: NativeFeaturesState | null = null;

const getClientSnapshot = (): NativeFeaturesState => {
  if (cachedClientSnapshot === null) {
    cachedClientSnapshot = {
      isNativeApp: isNative(),
      platform: getPlatform(),
      ready: true,
    };
  }
  return cachedClientSnapshot;
};

const SERVER_SNAPSHOT: NativeFeaturesState = {
  isNativeApp: false,
  platform: "web",
  ready: false,
};

const getServerSnapshot = (): NativeFeaturesState => SERVER_SNAPSHOT;

export const useNativeFeatures = (): NativeFeaturesState =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
