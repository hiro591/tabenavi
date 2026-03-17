-- ============================================================
-- たべなび Migration V6
-- Correct menu item data based on verified official sources
-- ============================================================

-- ============================================================
-- マクドナルド - Verified from mcdonalds.co.jp (2025)
-- ============================================================

-- Fix prices (verified from official menu page)
UPDATE menu_items SET price = 500 WHERE name = 'ビッグマック' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 480 WHERE name = 'ダブルチーズバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 400 WHERE name = 'てりやきマックバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 410 WHERE name = 'フィレオフィッシュ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 440 WHERE name = 'チキンフィレオ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 190 WHERE name = 'ハンバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 240 WHERE name = 'チーズバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 190 WHERE name = 'マックチキン' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 450 WHERE name = 'ベーコンレタスバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 440 WHERE name = 'えびフィレオ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 290 WHERE name = 'エッグマックマフィン' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET price = 180 WHERE name = 'ソーセージマフィン' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');

-- Fix nutrition (verified from mcdonalds.co.jp/quality/allergy_Nutrition)
UPDATE menu_items SET calories = 525, protein = 26.1, fat = 28.0, carbs = 42.1
  WHERE name = 'ビッグマック' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 459, protein = 26.4, fat = 25.1, carbs = 31.8
  WHERE name = 'ダブルチーズバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 477, protein = 14.5, fat = 30.2, carbs = 37.5
  WHERE name = 'てりやきマックバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 338, protein = 15.0, fat = 14.2, carbs = 37.4
  WHERE name = 'フィレオフィッシュ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 479, protein = 19.9, fat = 23.8, carbs = 47.0
  WHERE name = 'チキンフィレオ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 259, protein = 13.0, fat = 9.5, carbs = 30.3
  WHERE name = 'ハンバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 310, protein = 15.9, fat = 13.5, carbs = 31.0
  WHERE name = 'チーズバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 383, protein = 13.5, fat = 19.2, carbs = 39.5
  WHERE name = 'マックチキン' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 362, protein = 17.4, fat = 19.4, carbs = 30.1
  WHERE name = 'ベーコンレタスバーガー' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 408, protein = 11.4, fat = 18.6, carbs = 49.5
  WHERE name = 'えびフィレオ' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 310, protein = 18.6, fat = 13.6, carbs = 27.2
  WHERE name = 'エッグマックマフィン' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 262, protein = 15.3, fat = 15.9, carbs = 14.4
  WHERE name = 'チキンマックナゲット 5ピース' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 409, protein = 5.5, fat = 19.8, carbs = 52.4
  WHERE name = 'マックフライポテト M' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');
UPDATE menu_items SET calories = 224, protein = 3.0, fat = 10.9, carbs = 28.7
  WHERE name = 'マックフライポテト S' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド');

-- エグチ (add if not exists)
INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
SELECT 'エグチ（エッグチーズバーガー）', 390, 22.4, 19.0, 31.2, 280, '洋食', 'chain_restaurant',
  (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド'),
  'たまごとチーズのお手頃バーガー。公式栄養データ準拠'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'エグチ（エッグチーズバーガー）');

-- マックポーク (add if not exists)
INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
SELECT 'マックポーク', 391, 14.2, 20.5, 38.0, 230, '洋食', 'chain_restaurant',
  (SELECT id FROM chain_restaurants WHERE name = 'マクドナルド'),
  'ポークパティのお手頃バーガー'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'マックポーク');

-- ============================================================
-- 吉野家 - Price corrections (verified from yoshinoya.com 2025)
-- Note: 牛丼並盛 is now ¥498 (tax included, eat-in)
-- ============================================================

UPDATE menu_items SET price = 498 WHERE name = '牛丼（並盛）' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = '吉野家');
UPDATE menu_items SET price = 648 WHERE name = '牛丼（大盛）' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = '吉野家');
UPDATE menu_items SET price = 798 WHERE name = '牛丼（特盛）' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = '吉野家');
UPDATE menu_items SET price = 948 WHERE name = '牛丼（超特盛）' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = '吉野家');
UPDATE menu_items SET price = 398 WHERE name = '牛丼（小盛）' AND chain_restaurant_id = (SELECT id FROM chain_restaurants WHERE name = '吉野家');

-- ============================================================
-- Done
-- ============================================================
