# たべなび デザインシステム v2.0

> テーマ: Dark Navy × Cyan Gradient
> コンセプト: 「外食のデータを、美しく。」
> 暗すぎず、上品で、データが映えるダークUI

---

## 1. カラーパレット

### ベースカラー
| 用途 | 色 | Tailwind | 備考 |
|------|-----|---------|------|
| 背景（メイン） | #141B2D | bg-[#141B2D] | やや明るめのダークネイビー |
| 背景（カード） | #1E2A3F | bg-[#1E2A3F] | カードやセクション背景 |
| 背景（サーフェス） | #253245 | bg-[#253245] | ホバー状態、入力フィールド |
| 背景（高い） | #2D3B50 | bg-[#2D3B50] | モーダル、ドロップダウン |
| ボーダー | #334155 | border-[#334155] | カード枠、区切り線 |
| ボーダー（薄い） | #1E293B | border-[#1E293B] | 微細な区切り |

### テキストカラー
| 用途 | 色 | Tailwind |
|------|-----|---------|
| テキスト（プライマリ） | #F1F5F9 | text-slate-100 |
| テキスト（セカンダリ） | #94A3B8 | text-slate-400 |
| テキスト（ミュート） | #64748B | text-slate-500 |
| テキスト（無効） | #475569 | text-slate-600 |

### アクセントカラー
| 用途 | 色 | Tailwind |
|------|-----|---------|
| プライマリ（シアン） | #22D3EE | text-cyan-400 |
| プライマリ（ホバー） | #06B6D4 | text-cyan-500 |
| グラデーション開始 | #38BDF8 | sky-400 |
| グラデーション終了 | #06B6D4 | cyan-500 |
| CTA背景 | linear-gradient(135deg, #38BDF8, #06B6D4) | — |

### セマンティックカラー
| 用途 | 色 | Tailwind |
|------|-----|---------|
| 成功 / 低カロリー | #34D399 | text-emerald-400 |
| 警告 / 中カロリー | #FBBF24 | text-amber-400 |
| 危険 / 高カロリー | #F87171 | text-red-400 |
| 情報 | #60A5FA | text-blue-400 |

### PFCカラー（栄養素）
| 栄養素 | 色 | Tailwind | 背景 |
|--------|-----|---------|------|
| カロリー | #22D3EE | text-cyan-400 | bg-cyan-400/10 |
| タンパク質(P) | #60A5FA | text-blue-400 | bg-blue-400/10 |
| 脂質(F) | #FBBF24 | text-amber-400 | bg-amber-400/10 |
| 炭水化物(C) | #34D399 | text-emerald-400 | bg-emerald-400/10 |

### 食事タイプカラー
| タイプ | 色 | バッジBG |
|--------|-----|---------|
| 朝食 | #FBBF24 | bg-amber-400/15 text-amber-400 |
| 昼食 | #22D3EE | bg-cyan-400/15 text-cyan-400 |
| 夕食 | #A78BFA | bg-violet-400/15 text-violet-400 |
| 間食 | #F472B6 | bg-pink-400/15 text-pink-400 |

---

## 2. タイポグラフィ

### フォント
```
font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
```

### サイズスケール
| 用途 | サイズ | Tailwind | ウェイト |
|------|--------|---------|---------|
| 見出し（大） | 28px | text-[28px] | font-bold (700) |
| 見出し（中） | 22px | text-[22px] | font-bold (700) |
| 見出し（小） | 18px | text-lg | font-semibold (600) |
| 本文（大） | 16px | text-base | font-normal (400) |
| 本文（標準） | 14px | text-sm | font-normal (400) |
| キャプション | 12px | text-xs | font-medium (500) |
| ラベル（最小） | 11px | text-[11px] | font-medium (500) |

### 数字（カロリー等）
- フォント: tabular-nums（等幅数字）
- ウェイト: font-bold
- サイズ: 通常の1.5倍

---

## 3. スペーシング

### 基本単位: 4px
| 名前 | 値 | Tailwind | 用途 |
|------|-----|---------|------|
| xs | 4px | p-1 | アイコン内パディング |
| sm | 8px | p-2 | バッジ内パディング |
| md | 12px | p-3 | ボタン内パディング |
| lg | 16px | p-4 | カード内パディング |
| xl | 20px | p-5 | セクション内パディング |
| 2xl | 24px | p-6 | 大きなセクション |

### ページマージン
- モバイル: px-4 (16px)
- タブレット: px-6 (24px)
- コンテナ: max-w-lg (512px) — アプリ画面

---

## 4. コンポーネント

### カード
```
bg-[#1E2A3F] rounded-2xl border border-[#334155]/50 p-5
ホバー: hover:bg-[#253245] transition-colors
```

### ボタン（プライマリ）
```
bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-semibold
rounded-xl px-6 py-3
hover:from-sky-500 hover:to-cyan-600 transition-all
active:scale-[0.98]
shadow-lg shadow-cyan-500/20
```

### ボタン（セカンダリ）
```
bg-[#253245] text-slate-200 font-medium
rounded-xl px-6 py-3 border border-[#334155]
hover:bg-[#2D3B50] transition-colors
```

### ボタン（ゴースト）
```
bg-transparent text-slate-400
rounded-xl px-4 py-2
hover:text-slate-200 hover:bg-[#253245]/50 transition-colors
```

### 入力フィールド
```
bg-[#253245] border border-[#334155] rounded-xl
px-4 py-3 text-slate-100 placeholder:text-slate-500
focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30
transition-colors
```

### バッジ
```
bg-cyan-400/10 text-cyan-400 text-xs font-medium
rounded-full px-2.5 py-0.5
```

### ボトムナビ
```
bg-[#141B2D]/95 backdrop-blur-xl border-t border-[#334155]/50
固定: fixed bottom-0
アクティブ: text-cyan-400
非アクティブ: text-slate-500
アイコンサイズ: w-5 h-5
ラベル: text-[11px]
```

### カロリーリング
```
背景リング: stroke-[#253245]
進捗リング: stroke（グラデーション sky-400 → cyan-500）
中央テキスト: text-[28px] font-bold text-slate-100
```

### PFCバー
```
背景: bg-[#253245] rounded-full h-2
P進捗: bg-blue-400 rounded-full
F進捗: bg-amber-400 rounded-full
C進捗: bg-emerald-400 rounded-full
```

---

## 5. アニメーション

### トランジション
- ページ遷移: fade 200ms
- カードホバー: 150ms ease
- ボタンプレス: scale 100ms
- モーダル: slide-up 300ms

### マイクロインタラクション
- いいねボタン: scale bounce 300ms
- 削除: slide-out-left 200ms
- 追加: fade-in-up 300ms
- ローディング: pulse (既存) + shimmer

---

## 6. ダークUI設計原則

1. **真っ黒(#000)は使わない** → #141B2D（ネイビー系）で温かみを残す
2. **白(#FFF)テキストは使わない** → #F1F5F9（スレート100）で目に優しく
3. **影は使わない** → ボーダーとバックグラウンドの差で奥行きを表現
4. **アクセントカラーは控えめに** → シアンは重要な要素だけに使う
5. **データを主役にする** → 数字は大きく、ラベルは小さく
