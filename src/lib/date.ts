// 「今日」をユーザーのローカルタイムゾーン(日本ならJST)で扱うためのヘルパー。
// new Date().toISOString() はUTC日付を返すため、JSTでは朝9時前(=UTC前日)の記録が
// 「前日」扱いになるバグがあった。日付の表示・集計・範囲クエリは必ずここを通す。

/** ローカル日付の YYYY-MM-DD */
export function localDateStr(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** n日前のローカル日付の YYYY-MM-DD */
export function localDateStrDaysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return localDateStr(d);
}

/**
 * ローカル日の開始(0:00)と翌日0:00(排他的上限)をUTC ISOで返す。
 * timestamptz カラムへの範囲クエリは gte(startISO) + lt(endISO) で行う。
 */
export function localDayRangeISO(d: Date = new Date()): { startISO: string; endISO: string } {
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { startISO: start.toISOString(), endISO: end.toISOString() };
}

/** timestamptz文字列(UTC)をローカル日付の YYYY-MM-DD に変換 */
export function toLocalDateStr(timestamptz: string): string {
  return localDateStr(new Date(timestamptz));
}
