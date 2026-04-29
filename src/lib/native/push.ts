import {
  PushNotifications,
  type Token,
  type PushNotificationSchema,
  type ActionPerformed,
} from "@capacitor/push-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { isNative } from "./platform";

export type PushPermissionState = "granted" | "denied" | "prompt" | "unsupported";

export const requestPushPermission = async (): Promise<PushPermissionState> => {
  if (!isNative()) return "unsupported";

  const result = await PushNotifications.requestPermissions();
  if (result.receive === "granted") {
    await PushNotifications.register();
    return "granted";
  }
  return result.receive === "denied" ? "denied" : "prompt";
};

export const onPushTokenRegistered = (handler: (token: string) => void) => {
  if (!isNative()) return () => {};
  const sub = PushNotifications.addListener("registration", (token: Token) => {
    handler(token.value);
  });
  return () => {
    void sub.then((s) => s.remove());
  };
};

export const onPushReceived = (
  handler: (notification: PushNotificationSchema) => void,
) => {
  if (!isNative()) return () => {};
  const sub = PushNotifications.addListener(
    "pushNotificationReceived",
    handler,
  );
  return () => {
    void sub.then((s) => s.remove());
  };
};

export const onPushActionPerformed = (
  handler: (action: ActionPerformed) => void,
) => {
  if (!isNative()) return () => {};
  const sub = PushNotifications.addListener(
    "pushNotificationActionPerformed",
    handler,
  );
  return () => {
    void sub.then((s) => s.remove());
  };
};

const MORNING_REMINDER_ID = 1001;
const EVENING_REMINDER_ID = 1002;

export const scheduleDailyMealReminders = async (): Promise<boolean> => {
  if (!isNative()) return false;

  const perm = await LocalNotifications.requestPermissions();
  if (perm.display !== "granted") return false;

  await LocalNotifications.cancel({
    notifications: [
      { id: MORNING_REMINDER_ID },
      { id: EVENING_REMINDER_ID },
    ],
  });

  await LocalNotifications.schedule({
    notifications: [
      {
        id: MORNING_REMINDER_ID,
        title: "朝食を記録しよう",
        body: "今日の最初の一食、たべなびに残そう。",
        schedule: { on: { hour: 8, minute: 0 }, allowWhileIdle: true },
        smallIcon: "ic_stat_icon_config_sample",
      },
      {
        id: EVENING_REMINDER_ID,
        title: "今日のPFCを確認",
        body: "今日のタンパク質、足りてますか？1分で確認しよう。",
        schedule: { on: { hour: 21, minute: 0 }, allowWhileIdle: true },
        smallIcon: "ic_stat_icon_config_sample",
      },
    ],
  });

  return true;
};

export const cancelDailyMealReminders = async (): Promise<void> => {
  if (!isNative()) return;
  await LocalNotifications.cancel({
    notifications: [
      { id: MORNING_REMINDER_ID },
      { id: EVENING_REMINDER_ID },
    ],
  });
};
