"use client";

import { useSyncExternalStore } from "react";
import { isNative, getPlatform } from "./platform";

export type NativeFeaturesState = {
  isNativeApp: boolean;
  platform: "ios" | "android" | "web";
  ready: boolean;
};

const subscribe = () => () => {};

const getClientSnapshot = (): NativeFeaturesState => ({
  isNativeApp: isNative(),
  platform: getPlatform(),
  ready: true,
});

const SERVER_SNAPSHOT: NativeFeaturesState = {
  isNativeApp: false,
  platform: "web",
  ready: false,
};

const getServerSnapshot = (): NativeFeaturesState => SERVER_SNAPSHOT;

export const useNativeFeatures = (): NativeFeaturesState =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
