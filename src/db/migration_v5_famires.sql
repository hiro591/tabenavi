-- ============================================================
-- たべなび Migration V5
-- Family restaurants, cafe chains, sushi chains, noodle chains
-- Run in Supabase SQL Editor in one shot
-- ============================================================

-- ============================================================
-- PART 1: Ensure chain_restaurants entries exist
-- ============================================================

INSERT INTO chain_restaurants (name, emoji)
SELECT v.name, v.emoji FROM (VALUES
  ('サイゼリヤ',    '🍝'),
  ('ガスト',        '🍽️'),
  ('バーミヤン',    '🥟'),
  ('デニーズ',      '🍽️'),
  ('餃子の王将',    '🥟'),
  ('日高屋',        '🍜'),
  ('スターバックス','☕'),
  ('ドトール',      '☕'),
  ('丸亀製麺',      '🍜'),
  ('くら寿司',      '🍣'),
  ('スシロー',      '🍣')
) AS v(name, emoji)
WHERE NOT EXISTS (SELECT 1 FROM chain_restaurants WHERE chain_restaurants.name = v.name);

-- ============================================================
-- PART 2: サイゼリヤ (Saizeriya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('ミラノ風ドリア', 542, 15.8, 20.5, 73.2, 300, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'サイゼリヤの看板メニュー。ミートソースとホワイトソースのドリア'),
  ('マルゲリータピザ', 567, 22.5, 18.0, 74.5, 400, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'モッツァレラチーズとトマトソースの定番ピザ'),
  ('辛味チキン', 280, 18.5, 18.0, 10.5, 300, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'ピリ辛スパイシーな鶏の唐揚げ'),
  ('ペペロンチーノ', 560, 15.0, 15.5, 85.0, 400, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'ニンニクと唐辛子のシンプルパスタ'),
  ('ミックスグリル', 543, 32.0, 38.0, 12.5, 500, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'ハンバーグ・チキン・ソーセージの盛り合わせ'),
  ('小エビのサラダ', 122, 7.5, 6.0, 10.5, 350, 'サラダ・ヘルシー', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    '小エビがたっぷり入ったサラダ'),
  ('エスカルゴのオーブン焼き', 215, 12.0, 16.5, 5.0, 400, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'ガーリックバターで焼き上げたエスカルゴ'),
  ('ティラミス', 230, 4.5, 14.0, 22.0, 300, 'スイーツ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'マスカルポーネチーズのティラミス'),
  ('ハンバーグステーキ', 498, 25.0, 32.0, 22.0, 500, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'デミグラスソースのハンバーグ'),
  ('たらこソースシシリー', 605, 18.5, 18.0, 88.0, 400, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'たらことクリームソースのパスタ'),
  ('若鶏のディアボラ風', 536, 30.0, 35.0, 18.0, 500, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'スパイシーなソースの若鶏グリル'),
  ('柔らか青豆の温サラダ', 168, 8.0, 10.0, 12.0, 200, 'サラダ・ヘルシー', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    '青豆をガーリックオイルで仕上げた温サラダ'),
  ('アロスティチーニ', 285, 20.0, 20.5, 3.5, 400, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'ラム肉の串焼き'),
  ('プリンとティラミスの盛り合わせ', 310, 6.0, 18.0, 32.0, 400, 'スイーツ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'デザート2種の盛り合わせ'),
  ('コーンクリームスープ', 118, 2.5, 5.5, 15.0, 150, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'サイゼリヤ'),
    'クリーミーなコーンスープ');


-- ============================================================
-- PART 3: ガスト (Gusto)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('チーズINハンバーグ', 695, 30.5, 42.0, 45.0, 769, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'チーズがとろけるハンバーグの人気No.1メニュー'),
  ('若鶏のグリル 大葉おろしの醤油ソース', 452, 35.0, 25.0, 18.5, 659, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'さっぱり和風ソースのチキングリル'),
  ('から好し唐揚げ定食', 845, 38.0, 42.0, 75.0, 769, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'から好し監修のジューシー唐揚げ定食'),
  ('マルゲリータピザ', 568, 20.0, 18.5, 76.0, 439, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'モッツァレラチーズたっぷりのピザ'),
  ('日替わりランチ', 650, 25.0, 22.0, 82.0, 659, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    '日替わりのお得なランチセット'),
  ('ミックスフライ定食', 895, 32.0, 48.0, 80.0, 879, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'エビフライ・メンチカツ・コロッケの定食'),
  ('ビーフシチューハンバーグ', 738, 32.0, 40.0, 55.0, 879, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    '濃厚ビーフシチューソースのハンバーグ'),
  ('山盛りポテトフライ', 445, 5.5, 22.0, 55.0, 329, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'たっぷりサイズのフライドポテト'),
  ('チキンとモッツァレラのトマトソーススパゲッティ', 620, 28.0, 18.0, 82.0, 659, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'チキンとチーズのトマトパスタ'),
  ('ライス', 302, 5.0, 0.5, 67.0, 220, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    '白ごはん'),
  ('セットドリンクバー', 5, 0.0, 0.0, 0.0, 220, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    '各種ドリンク飲み放題'),
  ('目玉焼きハンバーグ', 632, 30.0, 36.0, 42.0, 659, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    '目玉焼きをのせたハンバーグ'),
  ('海老と山芋オクラのねばとろサラダ', 185, 10.5, 8.0, 18.5, 439, 'サラダ・ヘルシー', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'ねばねば食材のヘルシーサラダ'),
  ('ガストバーガー', 548, 22.0, 28.0, 48.0, 549, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ガスト'),
    'ビーフパティのガストオリジナルバーガー');


-- ============================================================
-- PART 4: バーミヤン (Bamiyan)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('油淋鶏', 620, 28.0, 35.0, 42.0, 659, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '甘酢ソースの揚げ鶏。バーミヤンの人気メニュー'),
  ('麻婆豆腐', 365, 18.0, 22.0, 22.0, 549, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '花椒が効いた本格四川風麻婆豆腐'),
  ('五目炒飯', 598, 18.0, 20.0, 82.0, 549, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '具材たっぷりの五目チャーハン'),
  ('レバニラ炒め', 368, 22.0, 18.0, 25.0, 549, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'レバーとニラの定番中華炒め'),
  ('本格焼餃子 (6個)', 290, 12.5, 14.0, 28.0, 297, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'パリッと焼き上げた餃子6個'),
  ('担々麺', 742, 22.0, 32.0, 85.0, 769, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '濃厚ゴマスープの担々麺'),
  ('エビのチリソース', 310, 18.0, 15.0, 25.0, 659, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'プリプリ海老のチリソース炒め'),
  ('酢豚', 420, 18.0, 22.0, 35.0, 659, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '甘酢あんの本格酢豚'),
  ('回鍋肉', 385, 16.0, 25.0, 20.0, 549, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'キャベツと豚肉の味噌炒め'),
  ('バーミヤンラーメン', 498, 18.0, 15.0, 68.0, 549, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '鶏ガラベースのあっさりラーメン'),
  ('油淋鶏定食', 920, 32.0, 40.0, 95.0, 879, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    '油淋鶏にライス・スープ付き'),
  ('春巻 (3本)', 258, 8.0, 14.0, 25.0, 329, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'パリパリの揚げ春巻き'),
  ('杏仁豆腐', 148, 3.5, 6.0, 20.0, 219, 'スイーツ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'バーミヤン'),
    'なめらかな杏仁豆腐');


-- ============================================================
-- PART 5: デニーズ (Denny's Japan)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('All Beefハンバーグ デミグラスソース', 585, 28.0, 35.0, 35.0, 879, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'ビーフ100%のデニーズ看板ハンバーグ'),
  ('オムライス デミグラスソース', 695, 22.0, 25.0, 90.0, 879, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'とろとろ卵のオムライス'),
  ('パンケーキ メープル&ホイップ', 565, 10.0, 22.0, 78.0, 549, 'スイーツ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'ふわふわパンケーキにメープルシロップ'),
  ('日替わりランチ', 680, 25.0, 24.0, 85.0, 880, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '日替わりのお得なランチセット'),
  ('チキンテリヤキ', 520, 30.0, 25.0, 38.0, 879, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '甘辛テリヤキソースのチキン'),
  ('たっぷり野菜のビーフシチュー', 445, 22.0, 20.0, 40.0, 1099, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '野菜ゴロゴロの濃厚ビーフシチュー'),
  ('カルボナーラ', 748, 25.0, 32.0, 82.0, 879, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '濃厚クリームソースのカルボナーラ'),
  ('海老フライ (3本)', 385, 18.0, 22.0, 28.0, 989, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'サクサク衣の大きな海老フライ'),
  ('和風ハンバーグ 大根おろし', 498, 26.0, 28.0, 30.0, 879, '洋食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '大根おろしとポン酢のハンバーグ'),
  ('シーザーサラダ', 198, 8.0, 14.0, 10.0, 549, 'サラダ・ヘルシー', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    '定番のシーザーサラダ'),
  ('フレンチトースト', 488, 12.0, 20.0, 62.0, 659, 'スイーツ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'ふんわり焼き上げたフレンチトースト'),
  ('デニーズハンバーガー', 598, 25.0, 30.0, 50.0, 769, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'デニーズ'),
    'ジューシーなビーフパティのバーガー');


-- ============================================================
-- PART 6: 餃子の王将 (Gyoza no Ohsho)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('餃子 (6個)', 346, 14.5, 18.0, 30.0, 297, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    '王将の看板メニュー。国産素材の焼餃子'),
  ('炒飯', 658, 18.0, 22.0, 92.0, 528, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'パラパラに炒めた王将の炒飯'),
  ('天津飯', 585, 16.0, 15.0, 90.0, 528, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'ふわふわ卵の甘酢あんかけ天津飯'),
  ('レバニラ炒め', 385, 22.0, 20.0, 22.0, 528, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'レバーとニラのスタミナ炒め'),
  ('酢豚', 498, 18.0, 28.0, 38.0, 638, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    '甘酢あんのジューシー酢豚'),
  ('鶏の唐揚げ', 425, 25.0, 28.0, 15.0, 528, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'ジューシーな鶏もも肉の唐揚げ'),
  ('麻婆豆腐', 398, 18.0, 25.0, 20.0, 528, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    '花椒の効いた本格麻婆豆腐'),
  ('エビのチリソース', 325, 16.0, 15.0, 28.0, 638, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'プリプリ海老のピリ辛チリソース'),
  ('餃子定食', 745, 28.0, 32.0, 82.0, 748, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    '餃子2人前にライス・スープ付き'),
  ('回鍋肉', 410, 15.0, 28.0, 18.0, 528, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'キャベツと豚肉の味噌炒め'),
  ('ニラレバ炒め定食', 685, 30.0, 25.0, 78.0, 748, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'レバニラ炒めにライス・スープ付き'),
  ('春巻 (3本)', 265, 8.0, 15.0, 24.0, 297, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '餃子の王将'),
    'パリッと揚げた春巻き3本');


-- ============================================================
-- PART 7: 日高屋 (Hidakaya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('中華そば', 669, 25.0, 18.0, 92.0, 390, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '日高屋の看板メニュー。醤油ベースの中華そば'),
  ('味噌ラーメン', 798, 28.0, 25.0, 98.0, 490, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '濃厚味噌スープのラーメン'),
  ('野菜たっぷりタンメン', 768, 22.0, 22.0, 105.0, 530, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '野菜どっさりの塩味タンメン'),
  ('餃子 (6個)', 315, 12.0, 15.0, 32.0, 250, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'リーズナブルな焼餃子6個'),
  ('炒飯', 628, 16.0, 20.0, 88.0, 470, '中華・アジア', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'パラッと炒めたチャーハン'),
  ('ニラレバ炒め定食', 698, 28.0, 25.0, 80.0, 620, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'レバーとニラのスタミナ炒め定食'),
  ('とんこつラーメン', 752, 25.0, 28.0, 88.0, 490, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '豚骨ベースの濃厚スープ'),
  ('チャーハンセット (半ラーメン付)', 895, 30.0, 28.0, 118.0, 700, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'チャーハンと半ラーメンのお得セット'),
  ('ホイコーロー定食', 725, 22.0, 30.0, 82.0, 620, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '回鍋肉のライス・スープ付き定食'),
  ('バクダン炒め定食', 732, 25.0, 32.0, 78.0, 620, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'ピリ辛バクダン炒めの定食'),
  ('中華そばとチャーハンセット', 985, 32.0, 30.0, 138.0, 700, '定食・セット', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    '中華そばとチャーハンのセット'),
  ('唐揚げ (5個)', 380, 22.0, 22.0, 18.0, 350, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '日高屋'),
    'ジューシーな鶏の唐揚げ5個');


-- ============================================================
-- PART 8: スターバックス (Starbucks Japan)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('ドリップコーヒー Tall', 10, 0.7, 0.0, 1.5, 420, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    '挽きたてドリップコーヒー Tallサイズ'),
  ('スターバックスラテ Tall', 146, 7.5, 6.0, 14.5, 460, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'エスプレッソとスチームミルクのラテ'),
  ('キャラメルマキアート Tall', 200, 7.0, 6.5, 28.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'バニラ・キャラメルソースのマキアート'),
  ('抹茶ティーラテ Tall', 218, 7.5, 5.0, 35.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    '宇治抹茶を使用した抹茶ラテ'),
  ('キャラメルフラペチーノ Tall', 302, 4.5, 11.0, 46.0, 530, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'キャラメル風味の冷たいフラペチーノ'),
  ('抹茶クリームフラペチーノ Tall', 322, 5.5, 10.0, 52.0, 530, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    '抹茶とクリームのフラペチーノ'),
  ('カプチーノ Tall', 113, 7.0, 5.0, 10.0, 460, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'きめ細かなフォームミルクのカプチーノ'),
  ('カフェモカ Tall', 263, 8.0, 9.0, 36.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'エスプレッソとチョコレートのモカ'),
  ('ホワイトモカ Tall', 274, 8.0, 9.5, 38.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'ホワイトチョコレートのモカ'),
  ('アイスコーヒー Tall', 10, 0.5, 0.0, 2.0, 420, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    '挽きたてのアイスコーヒー'),
  ('バニラクリームフラペチーノ Tall', 255, 4.0, 9.0, 40.0, 530, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'バニラ風味のクリーミーフラペチーノ'),
  ('ダークモカチップフラペチーノ Tall', 340, 5.5, 14.0, 48.0, 550, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'チョコチップ入りのダークモカフラペチーノ'),
  ('ほうじ茶ティーラテ Tall', 175, 6.5, 4.5, 26.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    '香ばしいほうじ茶のティーラテ'),
  ('チャイティーラテ Tall', 207, 6.5, 4.5, 34.0, 490, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スターバックス'),
    'スパイス香るチャイティーラテ');


-- ============================================================
-- PART 9: ドトール (Doutor)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('ブレンドコーヒー M', 8, 0.5, 0.0, 1.0, 300, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'ドトール定番のブレンドコーヒーMサイズ'),
  ('カフェラテ M', 108, 5.5, 5.0, 10.0, 370, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'エスプレッソとミルクのカフェラテ'),
  ('ミラノサンドA 生ハム・ボンレスハム・ボローニャソーセージ', 355, 18.0, 14.0, 38.0, 480, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    '3種のハムを使ったドトール人気No.1サンド'),
  ('ジャーマンドッグ', 315, 11.0, 18.0, 28.0, 390, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'パリッとソーセージのホットドッグ'),
  ('アイスカフェラテ M', 95, 5.0, 4.5, 8.5, 370, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'アイスのカフェラテ'),
  ('ミラノサンドB えびとアボカド', 362, 12.0, 18.0, 37.0, 480, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'えびとアボカドのミラノサンド'),
  ('ロイヤルミルクティー M', 165, 5.5, 6.0, 22.0, 390, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    '茶葉をミルクで煮出したロイヤルミルクティー'),
  ('ココア M', 238, 6.5, 9.0, 32.0, 390, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    '濃厚ココア'),
  ('あつあつハムチーズ', 278, 14.0, 12.0, 28.0, 400, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'ハムとチーズのホットサンド'),
  ('レタスドッグ', 285, 10.0, 15.0, 26.0, 390, 'パン・サンドイッチ', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'レタスとソーセージのホットドッグ'),
  ('アイスコーヒー M', 10, 0.3, 0.0, 2.0, 300, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    'すっきりアイスコーヒー'),
  ('豆乳ラテ M', 118, 6.0, 4.5, 14.0, 390, 'ドリンク', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'ドトール'),
    '豆乳を使ったヘルシーラテ');


-- ============================================================
-- PART 10: 丸亀製麺 (Marugame Seimen)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('かけうどん (並)', 299, 8.0, 1.0, 62.0, 340, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    'シンプルなかけだしのうどん'),
  ('ぶっかけうどん 冷 (並)', 302, 8.5, 1.5, 61.5, 340, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '冷たい濃いめのだしをかけたうどん'),
  ('釜揚げうどん (並)', 295, 8.0, 1.0, 61.0, 340, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '茹でたてを釜揚げでいただくうどん'),
  ('カレーうどん (並)', 495, 14.0, 10.0, 82.0, 490, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    'スパイシーなカレーだしのうどん'),
  ('明太釜玉うどん (並)', 412, 16.0, 8.0, 66.0, 490, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '明太子と卵黄のコクうまうどん'),
  ('肉うどん (並)', 475, 18.0, 12.0, 68.0, 590, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '甘辛く煮た牛肉をのせたうどん'),
  ('とり天', 200, 15.0, 12.0, 8.0, 160, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    'サクサク衣の鶏天ぷら'),
  ('ちくわ天', 115, 4.0, 6.0, 11.0, 130, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '丸亀の定番。ちくわの天ぷら'),
  ('えび天', 85, 5.5, 4.5, 6.0, 180, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    'プリプリ海老の天ぷら'),
  ('かしわ天', 190, 14.0, 11.0, 8.5, 150, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '鶏もも肉のジューシー天ぷら'),
  ('野菜かき揚げ', 255, 3.5, 15.0, 27.0, 160, '揚げ物', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '野菜たっぷりの大きなかき揚げ'),
  ('きつねうどん (並)', 428, 14.0, 8.0, 72.0, 440, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '甘く煮た油揚げをのせたうどん'),
  ('釜玉うどん (並)', 365, 12.0, 5.0, 63.0, 390, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = '丸亀製麺'),
    '卵とだし醤油で食べる釜玉うどん');


-- ============================================================
-- PART 11: くら寿司 (Kura Sushi)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('まぐろ (2貫)', 88, 7.5, 0.5, 14.0, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    '定番の赤身まぐろ握り2貫'),
  ('サーモン (2貫)', 102, 6.5, 3.0, 14.0, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    '脂のりの良いサーモン握り2貫'),
  ('えび (2貫)', 72, 5.5, 0.5, 13.0, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'プリプリのえび握り2貫'),
  ('いくら (2貫)', 95, 6.0, 3.0, 13.5, 230, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'プチプチいくらの軍艦2貫'),
  ('玉子 (2貫)', 98, 4.0, 2.0, 16.0, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'ふんわり甘い玉子焼き2貫'),
  ('天然はまち (2貫)', 98, 7.0, 2.5, 13.5, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    '天然のはまち握り2貫'),
  ('エビマヨ (2貫)', 120, 5.0, 4.0, 16.0, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'マヨネーズソースのエビ軍艦'),
  ('ツナマヨ (2貫)', 118, 4.5, 4.5, 15.5, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'ツナマヨネーズの軍艦2貫'),
  ('ビントロ (2貫)', 92, 7.0, 1.5, 13.5, 115, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'とろける食感のビントロ2貫'),
  ('あなご (2貫)', 105, 5.5, 2.5, 15.0, 180, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    'ふっくら煮穴子の握り2貫'),
  ('天ぷらうどん', 398, 12.0, 10.0, 62.0, 390, '麺類', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    '天ぷら入りの温かいうどん'),
  ('シャリカレー', 525, 12.0, 15.0, 82.0, 390, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'くら寿司'),
    '酢飯にカレーをかけたくら寿司名物');


-- ============================================================
-- PART 12: スシロー (Sushiro)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('まぐろ (2貫)', 92, 8.0, 0.5, 14.5, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    '厳選まぐろの赤身握り2貫'),
  ('サーモン (2貫)', 108, 7.0, 3.5, 14.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    '脂のりの良いサーモン握り2貫'),
  ('焼きサーモン (2貫)', 115, 7.5, 4.0, 14.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    '炙りで香ばしい焼きサーモン2貫'),
  ('えび (2貫)', 75, 6.0, 0.5, 13.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'プリプリのボイルえび握り2貫'),
  ('えびアボカド (2貫)', 128, 5.0, 5.0, 16.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'えびとアボカドのクリーミー軍艦'),
  ('ねぎまぐろ (2貫)', 95, 6.5, 1.5, 14.5, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'ねぎとまぐろの軍艦2貫'),
  ('はまち (2貫)', 102, 7.5, 2.5, 14.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    '脂ののったはまち握り2貫'),
  ('いか (2貫)', 78, 5.5, 0.5, 13.5, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'コリコリ食感のいか握り2貫'),
  ('たまご (2貫)', 95, 4.0, 1.5, 16.5, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'ふんわり甘いたまご握り2貫'),
  ('えびてん (2貫)', 135, 5.5, 5.0, 17.0, 150, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'サクサク海老天の握り2貫'),
  ('コーン (2貫)', 108, 3.0, 3.5, 17.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'コーンマヨネーズの軍艦2貫'),
  ('サーモンちーず (2貫)', 128, 7.0, 5.0, 15.0, 150, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'サーモンとチーズの組み合わせ'),
  ('たこ (2貫)', 82, 6.0, 0.5, 14.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    '歯ごたえの良いたこ握り2貫'),
  ('かっぱ巻き (3貫)', 85, 2.5, 0.5, 18.0, 120, '和食', 'chain_restaurant',
    (SELECT id FROM chain_restaurants WHERE name = 'スシロー'),
    'さっぱりきゅうりの細巻き');


-- ============================================================
-- Done! Migration V5 complete.
-- Family restaurants, cafe chains, sushi chains, noodle chains added.
-- ============================================================
