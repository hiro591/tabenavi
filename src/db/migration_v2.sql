-- ============================================================
-- たべなび Migration V2
-- Schema updates + convenience store products + category tags
-- Run in Supabase SQL Editor in one shot
-- ============================================================

-- ============================================================
-- PART 1: Schema Updates - Add new columns to menu_items
-- ============================================================

ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS category TEXT;
ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS price INTEGER;
ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS source_type TEXT DEFAULT 'chain_restaurant';
ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS description TEXT;

-- ============================================================
-- PART 2: Categorize existing menu items using pattern matching
-- ============================================================

-- Noodles
UPDATE menu_items SET category = '麺類'
WHERE name ILIKE '%うどん%'
   OR name ILIKE '%そば%'
   OR name ILIKE '%ラーメン%'
   OR name ILIKE '%麺%'
   OR name ILIKE '%パスタ%'
   OR name ILIKE '%スパゲッティ%';

-- Rice bowls
UPDATE menu_items SET category = '丼もの'
WHERE category IS NULL
  AND (name ILIKE '%丼%' OR name ILIKE '%牛めし%' OR name ILIKE '%めし%');

-- Fried food
UPDATE menu_items SET category = '揚げ物'
WHERE category IS NULL
  AND (name ILIKE '%フライド%'
    OR name ILIKE '%チキン%'
    OR name ILIKE '%から揚げ%'
    OR name ILIKE '%唐揚げ%'
    OR name ILIKE '%カツ%'
    OR name ILIKE '%天ぷら%');

-- Burgers & sandwiches
UPDATE menu_items SET category = 'パン・サンドイッチ'
WHERE category IS NULL
  AND (name ILIKE '%バーガー%'
    OR name ILIKE '%サンド%'
    OR name ILIKE '%パン%');

-- Sweets
UPDATE menu_items SET category = 'スイーツ'
WHERE category IS NULL
  AND (name ILIKE '%パフェ%'
    OR name ILIKE '%ケーキ%'
    OR name ILIKE '%スイーツ%'
    OR name ILIKE '%デザート%'
    OR name ILIKE '%プリン%'
    OR name ILIKE '%アイス%');

-- Drinks
UPDATE menu_items SET category = 'ドリンク'
WHERE category IS NULL
  AND (name ILIKE '%コーヒー%'
    OR name ILIKE '%ラテ%'
    OR name ILIKE '%ティー%'
    OR name ILIKE '%ジュース%'
    OR name ILIKE '%スムージー%'
    OR name ILIKE '%ドリンク%'
    OR name ILIKE '%抹茶%'
    OR name ILIKE '%フラペチーノ%');

-- Salads / healthy
UPDATE menu_items SET category = 'サラダ・ヘルシー'
WHERE category IS NULL
  AND name ILIKE '%サラダ%';

-- Set meals
UPDATE menu_items SET category = '定食・セット'
WHERE category IS NULL
  AND (name ILIKE '%定食%' OR name ILIKE '%セット%');

-- Western food
UPDATE menu_items SET category = '洋食'
WHERE category IS NULL
  AND (name ILIKE '%ハンバーグ%'
    OR name ILIKE '%グラタン%'
    OR name ILIKE '%ドリア%'
    OR name ILIKE '%ステーキ%'
    OR name ILIKE '%オムライス%'
    OR name ILIKE '%ピザ%');

-- Chinese / Asian
UPDATE menu_items SET category = '中華・アジア'
WHERE category IS NULL
  AND (name ILIKE '%餃子%'
    OR name ILIKE '%チャーハン%'
    OR name ILIKE '%中華%'
    OR name ILIKE '%麻婆%'
    OR name ILIKE '%エビチリ%');

-- Onigiri / light meals
UPDATE menu_items SET category = 'おにぎり・軽食'
WHERE category IS NULL
  AND (name ILIKE '%おにぎり%'
    OR name ILIKE '%おむすび%');

-- Remaining items default to 和食
UPDATE menu_items SET category = '和食'
WHERE category IS NULL;

-- ============================================================
-- PART 2b: Mark convenience store items with correct source_type
-- ============================================================

UPDATE menu_items SET source_type = 'convenience_store'
WHERE chain_restaurant_id IN (
  SELECT id FROM chain_restaurants
  WHERE name IN ('セブンイレブン', 'ローソン', 'ファミリーマート')
);

-- ============================================================
-- PART 2c: Approximate prices for existing chain restaurant items
-- ============================================================

-- Fast food burgers
UPDATE menu_items SET price = 200 WHERE name ILIKE '%ハンバーガー' AND price IS NULL;
UPDATE menu_items SET price = 450 WHERE name ILIKE '%ビッグマック%' AND price IS NULL;
UPDATE menu_items SET price = 400 WHERE name ILIKE '%てりやきバーガー%' AND price IS NULL;
UPDATE menu_items SET price = 390 WHERE name ILIKE '%チーズバーガー%' AND price IS NULL;
UPDATE menu_items SET price = 340 WHERE name ILIKE '%チキンフィレ%' AND price IS NULL;
UPDATE menu_items SET price = 200 WHERE name ILIKE '%マックチキン%' AND price IS NULL;
UPDATE menu_items SET price = 150 WHERE name ILIKE '%ポテト%' AND price IS NULL;
UPDATE menu_items SET price = 300 WHERE name ILIKE '%ナゲット%' AND price IS NULL;

-- Mos Burger
UPDATE menu_items SET price = 440 WHERE name ILIKE '%モスバーガー%' AND price IS NULL;
UPDATE menu_items SET price = 430 WHERE name ILIKE '%テリヤキバーガー%' AND price IS NULL;

-- KFC
UPDATE menu_items SET price = 310 WHERE name ILIKE '%オリジナルチキン%' AND price IS NULL;
UPDATE menu_items SET price = 270 WHERE name ILIKE '%クリスピー%' AND price IS NULL;

-- Gyudon chains
UPDATE menu_items SET price = 430 WHERE name ILIKE '%牛めし%' AND price IS NULL;
UPDATE menu_items SET price = 380 WHERE name ILIKE '%牛丼%' AND price IS NULL;
UPDATE menu_items SET price = 500 WHERE name ILIKE '%豚丼%' AND price IS NULL;
UPDATE menu_items SET price = 560 WHERE name ILIKE '%親子丼%' AND price IS NULL;
UPDATE menu_items SET price = 560 WHERE name ILIKE '%カツ丼%' AND price IS NULL;
UPDATE menu_items SET price = 520 WHERE name ILIKE '%カレー%' AND price IS NULL;

-- Udon
UPDATE menu_items SET price = 390 WHERE name ILIKE '%かけうどん%' AND price IS NULL;
UPDATE menu_items SET price = 490 WHERE name ILIKE '%ぶっかけうどん%' AND price IS NULL;
UPDATE menu_items SET price = 590 WHERE name ILIKE '%天ぷらうどん%' AND price IS NULL;
UPDATE menu_items SET price = 690 WHERE name ILIKE '%肉うどん%' AND price IS NULL;

-- Family restaurants
UPDATE menu_items SET price = 500 WHERE name ILIKE '%ミラノ風ドリア%' AND price IS NULL;
UPDATE menu_items SET price = 400 WHERE name ILIKE '%マルゲリータ%' AND price IS NULL;
UPDATE menu_items SET price = 300 WHERE name ILIKE '%辛味チキン%' AND price IS NULL;
UPDATE menu_items SET price = 550 WHERE name ILIKE '%ハンバーグ%' AND price IS NULL;
UPDATE menu_items SET price = 800 WHERE name ILIKE '%ステーキ%' AND price IS NULL;

-- Teishoku chains
UPDATE menu_items SET price = 850 WHERE name ILIKE '%定食%' AND price IS NULL;

-- Coffee shops
UPDATE menu_items SET price = 390 WHERE name ILIKE '%ドリップコーヒー%' AND price IS NULL;
UPDATE menu_items SET price = 350 WHERE name ILIKE '%ブレンドコーヒー%' AND price IS NULL;
UPDATE menu_items SET price = 480 WHERE name ILIKE '%カフェラテ%' AND price IS NULL;
UPDATE menu_items SET price = 550 WHERE name ILIKE '%フラペチーノ%' AND price IS NULL;
UPDATE menu_items SET price = 430 WHERE name ILIKE '%抹茶%' AND price IS NULL;
UPDATE menu_items SET price = 380 WHERE name ILIKE '%ティー%' AND price IS NULL;

-- Generic fallback for remaining items without prices
UPDATE menu_items SET price = 500 WHERE price IS NULL AND source_type = 'chain_restaurant';

-- ============================================================
-- PART 3: Convenience Store Products
-- ============================================================

-- -----------------------------------------------------------
-- 3a: セブンイレブン (20 items)
-- -----------------------------------------------------------

INSERT INTO menu_items (chain_restaurant_id, name, calories, protein, fat, carbs, price, category, source_type)
SELECT
  (SELECT id FROM chain_restaurants WHERE name = 'セブンイレブン'),
  v.name, v.calories, v.protein, v.fat, v.carbs, v.price, v.category, 'convenience_store'
FROM (VALUES
  ('サラダチキン (プレーン)',       113, 24.3, 1.5,  0.0,  214, 'サラダ・ヘルシー'),
  ('ゆで卵2個',                    130, 12.8, 9.0,  0.2,  108, 'おにぎり・軽食'),
  ('7プレミアム サラダチキン スモーク', 105, 22.6, 1.1, 0.5, 214, 'サラダ・ヘルシー'),
  ('1/2日分の野菜が摂れるサラダ',   89,  3.2,  5.8,  6.8,  321, 'サラダ・ヘルシー'),
  ('おにぎり 鮭',                  178, 5.3,  1.8,  34.8, 130, 'おにぎり・軽食'),
  ('おにぎり ツナマヨ',            211, 5.1,  7.4,  30.5, 140, 'おにぎり・軽食'),
  ('おにぎり 梅',                  163, 4.1,  0.8,  34.0, 120, 'おにぎり・軽食'),
  ('7プレミアム 北海道産小豆のおしるこ', 180, 3.5, 0.5, 40.0, 161, 'スイーツ'),
  ('炭水化物を考えた 卵とハムのサンド', 266, 13.5, 14.2, 20.8, 321, 'パン・サンドイッチ'),
  ('ハムたまごサンド',             310, 12.8, 15.2, 30.1, 280, 'パン・サンドイッチ'),
  ('たまごサラダサンド',           326, 9.3,  18.3, 31.5, 259, 'パン・サンドイッチ'),
  ('ロールケーキ',                 220, 3.8,  12.5, 24.5, 162, 'スイーツ'),
  ('プリン',                       150, 4.5,  7.0,  17.5, 140, 'スイーツ'),
  ('ギリシャヨーグルト プレーン',   109, 10.0, 5.0,  6.5,  205, 'サラダ・ヘルシー'),
  ('チョコレートブラウニー',       285, 3.2,  14.5, 36.5, 162, 'スイーツ'),
  ('スパゲッティナポリタン',       450, 14.5, 10.8, 73.0, 498, '麺類'),
  ('幕の内弁当',                   620, 22.5, 18.5, 87.5, 594, '定食・セット'),
  ('唐揚げ棒',                     195, 11.2, 12.5, 9.8,  140, '揚げ物'),
  ('ブラックコーヒー (S)',          5,   0.3,  0.0,  0.6,  110, 'ドリンク'),
  ('カフェラテ (S)',               110, 5.5,  5.8,  9.5,  170, 'ドリンク')
) AS v(name, calories, protein, fat, carbs, price, category);

-- -----------------------------------------------------------
-- 3b: ローソン (20 items)
-- -----------------------------------------------------------

INSERT INTO menu_items (chain_restaurant_id, name, calories, protein, fat, carbs, price, category, source_type)
SELECT
  (SELECT id FROM chain_restaurants WHERE name = 'ローソン'),
  v.name, v.calories, v.protein, v.fat, v.carbs, v.price, v.category, 'convenience_store'
FROM (VALUES
  ('Lチキ (しお)',                  204, 16.5, 11.5, 9.5,  216, '揚げ物'),
  ('からあげクン レギュラー (5個)', 246, 14.8, 15.2, 11.5, 238, '揚げ物'),
  ('たんぱく質が摂れるサラダチキンバー プレーン', 98, 20.8, 1.0, 0.5, 198, 'サラダ・ヘルシー'),
  ('ブランパン',                   157, 7.5,  6.8,  16.5, 140, 'パン・サンドイッチ'),
  ('ブランのロールサンド ハム&マヨネーズ', 220, 9.8, 9.5, 22.5, 198, 'パン・サンドイッチ'),
  ('おにぎり 焼きたらこ',         181, 5.8,  2.1,  34.5, 140, 'おにぎり・軽食'),
  ('おにぎり 昆布',               165, 4.2,  0.5,  34.8, 120, 'おにぎり・軽食'),
  ('成城石井監修 ロブスタービスク', 98,  3.5,  5.5,  8.8,  278, '洋食'),
  ('ヨーグルト 脂肪0',            84,  9.5,  0.0,  12.5, 138, 'サラダ・ヘルシー'),
  ('プレミアムロールケーキ',       310, 4.5,  18.5, 32.5, 220, 'スイーツ'),
  ('バスチー (バスク風チーズケーキ)', 285, 5.8, 18.5, 24.5, 270, 'スイーツ'),
  ('牛肉どまん中弁当',            718, 26.8, 22.5, 99.5, 702, '丼もの'),
  ('カスタードシュークリーム',     170, 4.2,  8.5,  19.5, 135, 'スイーツ'),
  ('クリームたっぷりエクレア',     250, 4.8,  12.5, 30.5, 198, 'スイーツ'),
  ('素材にこだわったスムージー 5種の野菜', 89, 2.5, 1.5, 16.5, 248, 'ドリンク'),
  ('ウチカフェ ダブルシュークリーム', 198, 4.5, 10.8, 22.5, 160, 'スイーツ'),
  ('牧場しぼり カフェオレ',        105, 4.5,  4.8,  11.5, 162, 'ドリンク'),
  ('ヘルシーグリーンサラダ',       35,  1.8,  0.2,  6.5,  278, 'サラダ・ヘルシー'),
  ('新食感チョコサンド',           320, 5.5,  18.5, 35.5, 195, 'スイーツ'),
  ('ネギ塩チキン',                 185, 15.5, 11.5, 5.5,  198, '揚げ物')
) AS v(name, calories, protein, fat, carbs, price, category);

-- -----------------------------------------------------------
-- 3c: ファミリーマート (20 items)
-- -----------------------------------------------------------

INSERT INTO menu_items (chain_restaurant_id, name, calories, protein, fat, carbs, price, category, source_type)
SELECT
  (SELECT id FROM chain_restaurants WHERE name = 'ファミリーマート'),
  v.name, v.calories, v.protein, v.fat, v.carbs, v.price, v.category, 'convenience_store'
FROM (VALUES
  ('ファミチキ',                   245, 15.8, 15.5, 11.5, 220, '揚げ物'),
  ('ファミマ・ザ・メロンパン',     328, 8.5,  8.5,  55.0, 162, 'パン・サンドイッチ'),
  ('窯焼きビーフカレーパン',       295, 9.5,  10.5, 41.5, 182, 'パン・サンドイッチ'),
  ('たんぱく質が摂れるサラダチキン プレーン', 110, 23.5, 1.5, 0.0, 214, 'サラダ・ヘルシー'),
  ('おにぎり 紅鮭',               182, 6.5,  2.5,  34.5, 138, 'おにぎり・軽食'),
  ('おにぎり 明太子',             190, 5.8,  2.8,  35.0, 148, 'おにぎり・軽食'),
  ('クリームたっぷりのシュークリーム', 185, 4.2, 10.5, 20.5, 130, 'スイーツ'),
  ('もっちりとした食感のわらびもち', 175, 1.5,  0.5,  42.5, 162, 'スイーツ'),
  ('酸味のきいたヨーグルト',       92,  9.5,  0.5,  13.5, 130, 'サラダ・ヘルシー'),
  ('チーズinハンバーグ弁当',       655, 28.5, 25.5, 76.5, 594, '定食・セット'),
  ('豚の生姜焼き弁当',            598, 24.5, 18.5, 76.5, 548, '定食・セット'),
  ('ゆず塩鶏サラダ',              75,  8.5,  2.5,  5.5,  298, 'サラダ・ヘルシー'),
  ('ストレートティー',             0,   0.0,  0.0,  0.0,  140, 'ドリンク'),
  ('カフェラテ',                   118, 5.8,  5.5,  11.5, 180, 'ドリンク'),
  ('コーヒーゼリー',               45,  2.5,  0.5,  8.5,  148, 'スイーツ'),
  ('海老アボカドサラダ',           165, 8.5,  11.5, 7.5,  348, 'サラダ・ヘルシー'),
  ('バナナ (1本)',                  86,  1.1,  0.2,  22.5, 108, 'おにぎり・軽食'),
  ('北海道牛乳プリン',             145, 4.5,  7.5,  16.5, 145, 'スイーツ'),
  ('高タンパク クリームチーズinブランパン', 248, 12.5, 9.5, 28.5, 198, 'パン・サンドイッチ'),
  ('ポテトサラダ',                 285, 4.5,  18.5, 25.5, 278, 'サラダ・ヘルシー')
) AS v(name, calories, protein, fat, carbs, price, category);

-- ============================================================
-- Done! Migration V2 complete.
-- ============================================================
