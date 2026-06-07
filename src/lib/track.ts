// GA4 イベント送信の薄いラッパー。
// SSR / gtag未ロード時は安全に no-op。コア導線にだけ仕込んで「どこで落ちるか」を可視化する。
type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void;
  }
}

/** 任意のカスタムイベント送信。例: trackEvent("search_submit", { calories_max: 600 }) */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** SPA遷移ごとの page_view。layout の Analytics から呼ぶ(config側は send_page_view:false)。 */
export function trackPageView(path: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
