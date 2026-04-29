# たべなび Premium v1.1 仕様書

> 作成: 2026-04-29
> 対象 release: v1.1 (v1.0 ship 後 4-6 週間で実装)
> 設計理念: 「外食ダイエットの decision を AI が肩代わりする」体験

---

## 0. Executive Summary

**Monetization model**: ハイブリッド (広告 + Premium)
- Free: 機能 80% 提供 + 広告
- Premium ¥600/月: 広告 OFF + AI 無制限 + Premium-only 機能
- Annual ¥3,800/年 (47% OFF)
- Trial: 7日無料 (Japan 標準)

**Revenue projection** (5,000 user, 12ヶ月後): ¥830,000/月

**v1.1 Premium 機能数**: 5 (lean launch、月毎 phased rollout で拡張)

---

## 1. Free / Premium 機能比較

### Free (永続無料)

| 機能 | 制限 |
|---|---|
| 26 チェーン 729 メニュー検索 | 無制限 |
| 食事記録 (3 タップ) | 無制限 |
| PFC 自動計算 | 無制限 |
| 体重記録 | 無制限 |
| お気に入り | 20 件まで (rewarded ad で +5/週) |
| AI Order Coach | 3 回/日 (rewarded ad で +2 = 最大 5回/日) |
| 月次レポート | 当月のみ |
| 通知 | 基本 |
| 広告 | 表示あり (詳細は §3) |

### Premium ¥600/月 (Annual ¥3,800/年 = 47% OFF)

| 機能 | 詳細 |
|---|---|
| ⭐ 広告完全 OFF | banner / interstitial / native すべて消える |
| ⭐ AI Order Coach 無制限 | 30 回/日 (cost cap、99% user は到達しない) |
| ⭐ お気に入り無制限 | 制限なし |
| ⭐ 月次・年次レポート全期間 | 365日全データ閲覧可 |
| 🎯 ゴールペース予測 | "現状ペースで -5kg を 12週で達成"等の予測 + 通知 |

**Trial**: 7日無料 (新規ユーザー全員、自動継続 or キャンセル選択可)

---

## 2. AI Order Coach (Killer Feature)

### Wizard フロー (3 ステップ、全 step skip 可)

#### Step 1: チェーン選択

```
[現在地から近い店 (位置情報 ON 時)]
  └ [近くのセブン] [近くのファミマ] [近くの松屋]

[よく行く (履歴 top 5)]
  └ [セブン] [サイゼ] [すき家]

[全 26 チェーンから選ぶ →] (manual search)

[🤔 おまかせ (どこでもいい)] ← Skip オプション
```

#### Step 2: 目的 wizard (全 skip 可、smart conditional)

```
質問 1: 「今日重視するのは?」(skip 可)
  □ 🥩 タンパク質しっかり
  □ 🥗 さっぱり軽め
  □ 🍚 がっつり
  □ 🥬 糖質控えめ
  □ 🤔 おまかせ

質問 2: 「気分は?」(skip 可)
  □ あったかい / 冷たい / 味濃いめ / あっさり / 指定なし

質問 3: 「予算?」(skip 可)
  □ 〜500円 / 〜800円 / 〜1,200円 / 気にしない

[全部スキップして AI に丸投げ →]
```

→ Skip しても AI は **過去 7 日の食事傾向 + 残り PFC** から自動で defaults を推定

#### Step 3: 提案結果 (3 options 提示)

```
✨ 一押し提案
┌─────────────────────────────┐
│ サラダチキン + ほうれん草の卵焼き │
│ + ところてん                    │
│                               │
│ 💪 P: 32g  🥑 F: 8g  🍚 C: 12g  │
│ 🔥 285 kcal  💴 ¥598          │
│                               │
│ 🎯 なぜこれ?:                  │
│ ・残りタンパク質 35g → 92% 達成 │
│ ・低脂質で目標カロリー内に収まる │
│ ・冷たい組み合わせで気分一致     │
│                               │
│ [📝 記録する] [💚 お気に入り]  │
└─────────────────────────────┘

🥈 代替案 1: コスパ重視
🥉 代替案 2: ボリューム重視

[他のオプションを見る] (1日3回 free, ad で +2)
[手動で選ぶ]
```

### Free user の制限到達時 UX

```
[ダイアログ表示]
─────────────────────────
🤖 今日の AI 提案は使い切りました

[📺 30秒の広告を見る → +1回]
[👑 Premium に upgrade → 無制限]
[ ✕ あとで]
─────────────────────────
```

### API cost optimization

| 仕組み | 効果 |
|---|---|
| Claude **Haiku 4.5** を使用 (Sonnet ではない) | $0.008/call (Sonnet 比 67% off) |
| Prompt caching (システム指示 + メニュー DB) | 入力 token の 90% off |
| Batch API (バックグラウンド処理) | 50% off |
| **Effective cost** | **$0.002-0.003/call** |

→ Premium heavy user (30/日) でも cost ¥9-13/日/人、¥270-390/月/人 = ¥600 Premium 内で十分黒字

---

## 3. 広告戦略

### Placement と頻度

| Ad type | 配置 | 頻度 | eCPM (Japan) |
|---|---|---|---|
| Native Ad | メニュー検索結果に「PR」表示 | 5 件中 1 件 | $5 |
| Interstitial | 食事記録 save 後 | 1:5 (5回に1回) | $10 |
| Rewarded Video | 機能 unlock 時の self-opt-in | on demand | $15-30 |
| Banner (history page) | 履歴ページ下部のみ (低使用ページ) | 常時 | $1 |

**重要設計判断**:
- ❌ Banner on dashboard は削除 (long-term retention killer)
- ❌ Pre-action interstitial は採用しない (post-action のみ = UX 許容範囲)
- ✅ Rewarded ad は self-opt-in = 押し付けない、user が valuable と感じる時のみ

### Rewarded Ad で unlock できる free 機能

| 機能 | Free 上限 | Ad 視聴で +1 |
|---|---|---|
| AI Order Coach | 3 回/日 | +1 (最大 5回/日) |
| お気に入り | 20 件 | +5 件/週 |
| 月次レポート | 当月のみ | 1ヶ月遡れる/週 |
| (v1.2) 写真認識 | 1 回/日 | +1 (最大 3回/日) |

### 広告プロバイダ

| プロバイダ | 採用 | 理由 |
|---|---|---|
| **Google AdMob** | ✅ メイン | Capacitor plugin あり、Japan eCPM 高い |
| Meta Audience Network | ⏭ v1.2 で並列 | eCPM 競争で +10-20% |
| Unity Ads | ⏭ v1.2 で並列 | rewarded 強い |

---

## 4. 価格戦略

### Pricing tier

```
🎁 Trial: 7日無料 (Japan 標準、全 Premium 機能フル利用可)

⭐ Premium Monthly: ¥600/月

📅 Premium Annual: ¥3,800/年
  - 月割り: ¥317
  - 47% OFF (¥600 × 12 = ¥7,200 比)
  - industry top 設定 (RevenueCat median 35-45%)
```

### Price tier の根拠

| 比較対象 | Monthly | Annual |
|---|---|---|
| あすけん (#1 競合) | ¥480 | ¥3,600 (38% OFF) |
| カロミル | ¥484 | — |
| FiNC Plus | ¥480 | ¥1,950/6mo |
| MyFitnessPal Japan | ~¥1,200 | ~¥9,600 |
| **たべなび** | **¥600** | **¥3,800 (47% OFF)** |

→ あすけんより 25% 高い設定の根拠:
1. AI Coach (none in competitors)
2. 外食特化 = niche premium 価格 OK
3. Japan ARPD top 1 国 ($5.32) で価格弾力性あり

→ MyFitnessPal より 50% 安い設定の根拠:
1. 機能 scope 限定 (外食特化、グローバル展開なし)
2. Indie 開発者 = ブランド premium なし
3. Conversion 最大化優先

---

## 5. Onboarding 戦略 (Premium への流れ)

```
Day 1 (signup):
  - Premium prompt なし
  - 14日 trial の存在は signup 後の welcome screen で軽く表示

Day 3 (3回目の AI Coach 使用後):
  - 「無料 trial で全機能試せます」prompt

Day 7 (week 1 finished):
  - 「あなたは平均より積極的、Premium で 5x 機能解放」

Free 3/日 limit 到達時:
  - Trial offer (7日無料)

1ヶ月後 (継続 user):
  - Annual 47% OFF prompt (loyalty 報酬として)
```

→ "Premium pushy" を避けて natural 体験に組み込む = conversion ↑ retention ↑

---

## 6. Phased Rollout (v1.1 → v1.2 → v1.3)

### v1.1 (1ヶ月後 = 2026-06-01)

```
新機能:
  - ⭐ 広告完全 OFF
  - ⭐ AI Order Coach (free 3/日, premium 30/日)
  - ⭐ お気に入り無制限
  - ⭐ レポート全期間
  - 🎯 ゴールペース予測 + 通知

実装規模: 18-26 時間
```

### v1.2 (3ヶ月後 = 2026-08-01)

```
追加機能:
  - 🍱 AI 週間メニュープラン (7日分自動生成)
  - 📸 食事写真認識 (Claude Vision)
  - 🍻 Smart 飲み会 Mode

実装規模: 24-36 時間
```

### v1.3 (6ヶ月後 = 2026-11-01)

```
追加機能:
  - 📊 Body composition trends (体脂肪率、筋肉量)
  - ⚖ Withings/Tanita 体組成計連携
  - ⚡ Premium chain request (新チェーン優先追加)

実装規模: 30-50 時間
```

---

## 7. Revenue Projection

### Per-user economics

```
Free user:
  Banner (history): ¥4.5/月
  Native (search): ¥45/月
  Interstitial (meal save): ¥27/月
  Rewarded (opt-in): ¥60/月
  Total ad revenue: ¥136.5/月/user

  AI Coach cost: 3 calls/day × $0.003 × 30日 = $0.27/月 = ¥40.5/月
  Net per free user: ¥96/月
```

```
Premium user:
  Subscription (monthly): ¥600
  Subscription (annual): ¥317/月相当
  Average (57% annual + 43% monthly): ¥438/月

  AI Coach cost: avg 5 calls/day × $0.003 × 30日 = $0.45/月 = ¥67.5/月
  Net per Premium user: ¥370/月
```

### Scenario projection

#### Conservative (3,000 users, 6ヶ月後)

```
Free: 2,800 users × ¥96 = ¥268,800/月
Premium: 200 users (6.7% conversion) × ¥438 = ¥87,600/月
合計: ¥356,400/月
```

#### Realistic (5,000 users, 12ヶ月後)

```
Free: 4,500 users × ¥96 = ¥432,000/月
Premium: 500 users (10% conversion) × ¥438 = ¥219,000/月
合計: ¥651,000/月
```

#### Optimistic (10,000 users, 18ヶ月後)

```
Free: 8,500 users × ¥96 = ¥816,000/月
Premium: 1,500 users (15% conversion) × ¥438 = ¥657,000/月
合計: ¥1,473,000/月 ≈ ¥150 万/月
```

---

## 8. Sticky Feature Hierarchy (churn 防止)

| 機能 | Sticky 度 | 理由 |
|---|---|---|
| 🎯 ゴールペース予測 (v1.1) | ★★★ | 数ヶ月の commitment、目標達成までやめづらい |
| 🍱 週間メニュープラン (v1.2) | ★★★ | プラン途中でやめづらい |
| 📊 Body composition trends (v1.3) | ★★★ | 履歴データの蓄積価値 |
| AI Coach 無制限 | ★★ | 課金 motivation だが substitute 可能 |
| お気に入り無制限 | ★ | nice-to-have |
| 広告 OFF | ★ | 心地よさ、長期離脱要因弱い |

→ v1.1 ★3 機能 1 個だけ追加 (ゴールペース予測) は churn 防止 minimum 設計

---

## 9. Implementation Roadmap (v1.1)

### Phase A: Foundation (week 1)

- [ ] Capacitor StoreKit plugin 統合
- [ ] App Store Connect で IAP 商品 3 件作成 (Monthly / Annual / Trial 7日)
- [ ] Receipt validation server-side 実装
- [ ] Premium 状態管理 (Supabase に user.premium_until 列追加)

### Phase B: AI Order Coach (week 2)

- [ ] Wizard UI (3 step、全 skip 可)
- [ ] Claude Haiku 4.5 API integration
- [ ] Prompt caching 設定 (システム指示 + メニュー DB)
- [ ] Rate limiting (free 3/日, premium 30/日)
- [ ] Result UI (3 options + reasoning + 記録 button)

### Phase C: 広告統合 (week 3)

- [ ] Capacitor AdMob plugin 統合
- [ ] Banner (history page only)
- [ ] Interstitial (food log save 後 1:5)
- [ ] Native ad (search results 1:5)
- [ ] Rewarded video (機能 unlock 時)

### Phase D: ゴールペース予測 (week 3-4)

- [ ] 目標設定 UI (体重 + 期日)
- [ ] Pace calculation algorithm
- [ ] 通知設定 (朝 8時 / 夜 21時)
- [ ] Dashboard 表示 ("残り XX 日で達成 ペース")

### Phase E: Premium Onboarding (week 4)

- [ ] Trial offer prompt (Day 3, Day 7, limit 到達時)
- [ ] Annual upsell (1ヶ月後の継続 user)
- [ ] Subscription management UI (cancel / renew / upgrade)

### Phase F: Testing + ship (week 4-5)

- [ ] Sandbox IAP testing
- [ ] Ad serving testing
- [ ] AI Coach response quality QA
- [ ] App Store submission (v1.1)

**合計実装時間**: 60-80 時間 (4-5 週間 part-time)

---

## 10. Risk Mitigation

| Risk | 対応 |
|---|---|
| AI Coach の提案精度低い | Prompt iteration + user feedback ループで改善 |
| API cost が想定超え | Daily cap (free 3, premium 30) + Haiku 採用 |
| Premium conversion 低い | Onboarding A/B test + trial period 14日 trial |
| 広告が UX 悪化させる | A/B test で frequency / placement 微調整 |
| Apple IAP 審査リジェクト | Subscription guidelines 厳守、receipt validation 完璧化 |
| 競合 (あすけん) が AI 機能追加 | "外食特化" niche を keep、generic 路線取らない |

---

## 11. Success Metrics (v1.1 launch 後 3ヶ月)

| Metric | Target |
|---|---|
| Free user 数 | 3,000+ |
| Trial 開始数 | 600+ (Free の 20%) |
| Trial → Premium conversion | 30%+ (= 180 Premium) |
| Premium MRR | ¥80,000+ |
| Free user ad revenue | ¥150,000+ |
| **Total MRR** | **¥230,000+** |
| Premium churn (monthly) | <12% |
| Free → Premium overall conversion | >5% |

---

## 12. 関連ドキュメント

- `docs/APP_STORE_SUBMISSION.md` — v1.0 submission メタデータ
- `docs/APP_STORE_SUBMISSION_CHECKLIST.md` — App Store Connect 入力チェック
- `docs/APP_STORE_SUBMISSION_TODAY.md` — v1.0 提出当日プレイブック
- `docs/IOS_BUILD_GUIDE.md` — iOS ビルド手順
- (v1.1 実装時に追加) `docs/PREMIUM_V1.1_IMPLEMENTATION.md` — 実装詳細手順

---

## 13. 決定事項記録 (2026-04-29)

| 項目 | 決定 |
|---|---|
| Trial 期間 | 7日 (Japan 標準) |
| 星 3 sticky 機能 | ゴールペース予測のみ (week menu plan は v1.2 に延期) |
| Lifetime オプション | 不採用 |
| Body composition | v1.3 に延期 |
| AI 提供 model | Claude Haiku 4.5 |
| Wizard 質問 | 全 step skip 可 |
| Premium 価格 | ¥600/月、¥3,800/年 (47% OFF) |
| 広告プロバイダ初期 | AdMob 単独 |
