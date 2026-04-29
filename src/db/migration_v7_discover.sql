-- ============================================================
-- たべなび Migration V7: Discover Feature
-- Adds PFC targets to profiles + store_locations table
-- Run in Supabase SQL Editor
-- ============================================================

-- ============================================================
-- PART 1: Add PFC targets to profiles
-- ============================================================

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS target_protein NUMERIC DEFAULT 60;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS target_fat NUMERIC DEFAULT 50;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS target_carbs NUMERIC DEFAULT 250;

-- ============================================================
-- PART 2: Store locations table
-- ============================================================

CREATE TABLE IF NOT EXISTS store_locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  chain_restaurant_id UUID REFERENCES chain_restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  area TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_store_locations_chain ON store_locations(chain_restaurant_id);
CREATE INDEX IF NOT EXISTS idx_store_locations_lat_lng ON store_locations(lat, lng);

-- ============================================================
-- PART 3: Seed store locations for major Tokyo chains
-- We insert locations for key areas: 新宿, 渋谷, 池袋, 東京, 品川, 上野, 秋葉原, 六本木
-- Each chain gets 3-8 representative locations
-- ============================================================

-- Helper: get chain_restaurant_id by name
-- マクドナルド
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'マクドナルド 新宿西口店', 35.6896, 139.6982, '新宿' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 渋谷センター街店', 35.6595, 139.6985, '渋谷' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 池袋東口店', 35.7295, 139.7130, '池袋' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 東京駅八重洲口店', 35.6812, 139.7690, '東京' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 品川駅店', 35.6284, 139.7387, '品川' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 上野公園前店', 35.7120, 139.7741, '上野' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 秋葉原昭和通り店', 35.6983, 139.7730, '秋葉原' FROM chain_restaurants WHERE name = 'マクドナルド'
UNION ALL
SELECT id, 'マクドナルド 六本木ヒルズ店', 35.6604, 139.7292, '六本木' FROM chain_restaurants WHERE name = 'マクドナルド';

-- 吉野家
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '吉野家 新宿東口店', 35.6927, 139.7036, '新宿' FROM chain_restaurants WHERE name = '吉野家'
UNION ALL
SELECT id, '吉野家 渋谷道玄坂店', 35.6571, 139.6964, '渋谷' FROM chain_restaurants WHERE name = '吉野家'
UNION ALL
SELECT id, '吉野家 池袋東口店', 35.7300, 139.7125, '池袋' FROM chain_restaurants WHERE name = '吉野家'
UNION ALL
SELECT id, '吉野家 東京駅前店', 35.6808, 139.7665, '東京' FROM chain_restaurants WHERE name = '吉野家'
UNION ALL
SELECT id, '吉野家 上野駅前店', 35.7138, 139.7770, '上野' FROM chain_restaurants WHERE name = '吉野家';

-- 松屋
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '松屋 新宿南口店', 35.6880, 139.7005, '新宿' FROM chain_restaurants WHERE name = '松屋'
UNION ALL
SELECT id, '松屋 渋谷店', 35.6593, 139.6997, '渋谷' FROM chain_restaurants WHERE name = '松屋'
UNION ALL
SELECT id, '松屋 池袋西口店', 35.7295, 139.7085, '池袋' FROM chain_restaurants WHERE name = '松屋'
UNION ALL
SELECT id, '松屋 秋葉原店', 35.6985, 139.7710, '秋葉原' FROM chain_restaurants WHERE name = '松屋';

-- すき家
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'すき家 新宿三丁目店', 35.6910, 139.7042, '新宿' FROM chain_restaurants WHERE name = 'すき家'
UNION ALL
SELECT id, 'すき家 渋谷宮益坂店', 35.6610, 139.7020, '渋谷' FROM chain_restaurants WHERE name = 'すき家'
UNION ALL
SELECT id, 'すき家 池袋明治通り店', 35.7310, 139.7150, '池袋' FROM chain_restaurants WHERE name = 'すき家'
UNION ALL
SELECT id, 'すき家 上野浅草通り店', 35.7100, 139.7760, '上野' FROM chain_restaurants WHERE name = 'すき家';

-- サイゼリヤ
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'サイゼリヤ 新宿西口エルタワー店', 35.6920, 139.6958, '新宿' FROM chain_restaurants WHERE name = 'サイゼリヤ'
UNION ALL
SELECT id, 'サイゼリヤ 渋谷東急ハンズ前店', 35.6600, 139.6980, '渋谷' FROM chain_restaurants WHERE name = 'サイゼリヤ'
UNION ALL
SELECT id, 'サイゼリヤ 池袋東口店', 35.7305, 139.7135, '池袋' FROM chain_restaurants WHERE name = 'サイゼリヤ'
UNION ALL
SELECT id, 'サイゼリヤ 秋葉原店', 35.6990, 139.7720, '秋葉原' FROM chain_restaurants WHERE name = 'サイゼリヤ';

-- ガスト
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'ガスト 新宿西口店', 35.6905, 139.6950, '新宿' FROM chain_restaurants WHERE name = 'ガスト'
UNION ALL
SELECT id, 'ガスト 渋谷宇田川町店', 35.6615, 139.6965, '渋谷' FROM chain_restaurants WHERE name = 'ガスト'
UNION ALL
SELECT id, 'ガスト 池袋東口店', 35.7290, 139.7140, '池袋' FROM chain_restaurants WHERE name = 'ガスト';

-- 大戸屋
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '大戸屋 新宿東口店', 35.6930, 139.7040, '新宿' FROM chain_restaurants WHERE name = '大戸屋'
UNION ALL
SELECT id, '大戸屋 渋谷公園通り店', 35.6620, 139.6990, '渋谷' FROM chain_restaurants WHERE name = '大戸屋'
UNION ALL
SELECT id, '大戸屋 池袋東口店', 35.7298, 139.7132, '池袋' FROM chain_restaurants WHERE name = '大戸屋';

-- スターバックス
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'スターバックス 新宿マルイ本館店', 35.6915, 139.7025, '新宿' FROM chain_restaurants WHERE name = 'スターバックス'
UNION ALL
SELECT id, 'スターバックス 渋谷スクランブルスクエア店', 35.6585, 139.7015, '渋谷' FROM chain_restaurants WHERE name = 'スターバックス'
UNION ALL
SELECT id, 'スターバックス 東京駅八重洲口店', 35.6814, 139.7695, '東京' FROM chain_restaurants WHERE name = 'スターバックス'
UNION ALL
SELECT id, 'スターバックス 六本木ヒルズ店', 35.6600, 139.7295, '六本木' FROM chain_restaurants WHERE name = 'スターバックス';

-- モスバーガー
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'モスバーガー 新宿南口店', 35.6878, 139.6998, '新宿' FROM chain_restaurants WHERE name = 'モスバーガー'
UNION ALL
SELECT id, 'モスバーガー 渋谷道玄坂店', 35.6575, 139.6955, '渋谷' FROM chain_restaurants WHERE name = 'モスバーガー'
UNION ALL
SELECT id, 'モスバーガー 池袋西口店', 35.7288, 139.7080, '池袋' FROM chain_restaurants WHERE name = 'モスバーガー';

-- 丸亀製麺
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '丸亀製麺 新宿文化クイントビル店', 35.6935, 139.6945, '新宿' FROM chain_restaurants WHERE name = '丸亀製麺'
UNION ALL
SELECT id, '丸亀製麺 渋谷道玄坂店', 35.6568, 139.6960, '渋谷' FROM chain_restaurants WHERE name = '丸亀製麺'
UNION ALL
SELECT id, '丸亀製麺 池袋店', 35.7292, 139.7110, '池袋' FROM chain_restaurants WHERE name = '丸亀製麺';

-- セブンイレブン
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'セブンイレブン 新宿駅西口店', 35.6895, 139.6975, '新宿' FROM chain_restaurants WHERE name = 'セブンイレブン'
UNION ALL
SELECT id, 'セブンイレブン 渋谷センター街店', 35.6598, 139.6990, '渋谷' FROM chain_restaurants WHERE name = 'セブンイレブン'
UNION ALL
SELECT id, 'セブンイレブン 池袋東口店', 35.7302, 139.7128, '池袋' FROM chain_restaurants WHERE name = 'セブンイレブン'
UNION ALL
SELECT id, 'セブンイレブン 東京駅前店', 35.6810, 139.7680, '東京' FROM chain_restaurants WHERE name = 'セブンイレブン'
UNION ALL
SELECT id, 'セブンイレブン 上野駅前店', 35.7135, 139.7760, '上野' FROM chain_restaurants WHERE name = 'セブンイレブン'
UNION ALL
SELECT id, 'セブンイレブン 秋葉原中央通り店', 35.6988, 139.7715, '秋葉原' FROM chain_restaurants WHERE name = 'セブンイレブン';

-- ローソン
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'ローソン 新宿三丁目店', 35.6912, 139.7038, '新宿' FROM chain_restaurants WHERE name = 'ローソン'
UNION ALL
SELECT id, 'ローソン 渋谷神南店', 35.6625, 139.6985, '渋谷' FROM chain_restaurants WHERE name = 'ローソン'
UNION ALL
SELECT id, 'ローソン 池袋西口店', 35.7290, 139.7078, '池袋' FROM chain_restaurants WHERE name = 'ローソン'
UNION ALL
SELECT id, 'ローソン 東京駅前店', 35.6815, 139.7675, '東京' FROM chain_restaurants WHERE name = 'ローソン';

-- ファミリーマート
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'ファミリーマート 新宿東口店', 35.6925, 139.7032, '新宿' FROM chain_restaurants WHERE name = 'ファミリーマート'
UNION ALL
SELECT id, 'ファミリーマート 渋谷駅前店', 35.6590, 139.7005, '渋谷' FROM chain_restaurants WHERE name = 'ファミリーマート'
UNION ALL
SELECT id, 'ファミリーマート 池袋駅東口店', 35.7308, 139.7138, '池袋' FROM chain_restaurants WHERE name = 'ファミリーマート'
UNION ALL
SELECT id, 'ファミリーマート 上野広小路店', 35.7110, 139.7745, '上野' FROM chain_restaurants WHERE name = 'ファミリーマート';

-- ケンタッキー
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'ケンタッキー 新宿南口店', 35.6882, 139.7002, '新宿' FROM chain_restaurants WHERE name = 'ケンタッキー'
UNION ALL
SELECT id, 'ケンタッキー 渋谷センター街店', 35.6592, 139.6988, '渋谷' FROM chain_restaurants WHERE name = 'ケンタッキー'
UNION ALL
SELECT id, 'ケンタッキー 池袋東口店', 35.7297, 139.7127, '池袋' FROM chain_restaurants WHERE name = 'ケンタッキー';

-- スシロー
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'スシロー 新宿三丁目店', 35.6918, 139.7048, '新宿' FROM chain_restaurants WHERE name = 'スシロー'
UNION ALL
SELECT id, 'スシロー 渋谷店', 35.6605, 139.6975, '渋谷' FROM chain_restaurants WHERE name = 'スシロー';

-- くら寿司
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'くら寿司 池袋東口店', 35.7303, 139.7133, '池袋' FROM chain_restaurants WHERE name = 'くら寿司'
UNION ALL
SELECT id, 'くら寿司 渋谷駅前店', 35.6588, 139.6998, '渋谷' FROM chain_restaurants WHERE name = 'くら寿司';

-- サブウェイ
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'サブウェイ 新宿西口店', 35.6900, 139.6965, '新宿' FROM chain_restaurants WHERE name = 'サブウェイ'
UNION ALL
SELECT id, 'サブウェイ 渋谷店', 35.6597, 139.6992, '渋谷' FROM chain_restaurants WHERE name = 'サブウェイ';

-- デニーズ
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'デニーズ 新宿中央公園店', 35.6915, 139.6920, '新宿' FROM chain_restaurants WHERE name = 'デニーズ'
UNION ALL
SELECT id, 'デニーズ 渋谷公園通り店', 35.6630, 139.6985, '渋谷' FROM chain_restaurants WHERE name = 'デニーズ';

-- 日高屋
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '日高屋 新宿東口店', 35.6930, 139.7035, '新宿' FROM chain_restaurants WHERE name = '日高屋'
UNION ALL
SELECT id, '日高屋 池袋東口店', 35.7300, 139.7130, '池袋' FROM chain_restaurants WHERE name = '日高屋'
UNION ALL
SELECT id, '日高屋 上野駅前店', 35.7140, 139.7768, '上野' FROM chain_restaurants WHERE name = '日高屋';

-- ドトール
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, 'ドトール 新宿靖国通り店', 35.6928, 139.7030, '新宿' FROM chain_restaurants WHERE name = 'ドトール'
UNION ALL
SELECT id, 'ドトール 渋谷宮益坂店', 35.6608, 139.7018, '渋谷' FROM chain_restaurants WHERE name = 'ドトール'
UNION ALL
SELECT id, 'ドトール 池袋西口店', 35.7285, 139.7082, '池袋' FROM chain_restaurants WHERE name = 'ドトール';

-- 餃子の王将
INSERT INTO store_locations (chain_restaurant_id, name, lat, lng, area)
SELECT id, '餃子の王将 新宿東口店', 35.6932, 139.7042, '新宿' FROM chain_restaurants WHERE name = '餃子の王将'
UNION ALL
SELECT id, '餃子の王将 池袋東口店', 35.7295, 139.7125, '池袋' FROM chain_restaurants WHERE name = '餃子の王将';

-- ============================================================
-- PART 4: RLS policies for store_locations (public read)
-- ============================================================

ALTER TABLE store_locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Store locations are viewable by everyone"
  ON store_locations FOR SELECT
  USING (true);
