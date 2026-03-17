-- ============================================================
-- たべなび Migration V5
-- Gyudon & Teishoku chain restaurant menu items
-- 吉野家, 松屋, すき家, なか卯, 大戸屋, やよい軒
-- Run in Supabase SQL Editor in one shot
-- ============================================================

-- ============================================================
-- PART 1: 吉野家 (Yoshinoya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('牛丼 並盛', 635, 20.0, 23.0, 89.0, 468, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '吉野家の看板メニュー。薄切り牛肉と玉ねぎを甘辛く煮込んだ定番牛丼'),
  ('牛丼 大盛', 846, 26.0, 30.5, 117.0, 619, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛丼の大盛り。ご飯と具がたっぷり'),
  ('牛丼 特盛', 1030, 33.0, 41.0, 131.0, 770, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛丼の特盛。肉とご飯の量がさらにアップ'),
  ('牛丼 小盛', 488, 16.0, 18.0, 68.0, 418, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '少なめに食べたい方向けの小盛り'),
  ('豚丼 並盛', 614, 17.5, 18.5, 93.0, 418, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '豚肉を甘辛いタレで仕上げた丼'),
  ('牛カルビ丼 並盛', 758, 20.5, 30.0, 99.0, 618, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '香ばしく焼いた牛カルビの丼'),
  ('ねぎ玉牛丼 並盛', 731, 24.0, 28.0, 93.0, 568, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛丼にねぎと温泉卵をトッピング'),
  ('親子丼 並盛', 652, 28.5, 16.5, 92.0, 518, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'ふわとろ卵と鶏肉の親子丼'),
  ('から揚げ丼 並盛', 766, 26.5, 25.0, 104.0, 568, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'ジューシーなから揚げをご飯に'),
  ('牛すき鍋膳', 918, 38.0, 34.0, 108.0, 798, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛肉と野菜をすき焼き風に仕上げた鍋膳'),
  ('牛皿 並盛', 241, 14.0, 17.0, 8.0, 368, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛丼の具だけを皿盛りに。おかずに最適'),
  ('牛皿 大盛', 452, 26.0, 32.0, 14.0, 519, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛皿の大盛り'),
  ('サラシア牛丼', 600, 19.5, 22.0, 82.0, 528, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'サラシア入りで糖の吸収を穏やかに'),
  ('ライザップ牛サラダ', 414, 30.0, 27.5, 14.0, 598, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '牛肉とサラダの低糖質メニュー'),
  ('味噌汁', 24, 1.5, 0.8, 2.8, 80, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'シンプルな味噌汁'),
  ('けんちん汁', 68, 3.0, 2.5, 8.5, 200, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '野菜たっぷりのけんちん汁'),
  ('生野菜サラダ', 20, 1.0, 0.2, 4.0, 130, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'シャキシャキの生野菜サラダ'),
  ('玉子', 76, 6.0, 5.0, 0.5, 100, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'トッピング用の生卵'),
  ('キムチ', 10, 0.5, 0.2, 2.0, 130, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), 'ピリ辛のキムチ'),
  ('牛丼 超特盛', 1169, 37.0, 48.0, 144.0, 892, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '吉野家'), '最大サイズの超特盛牛丼')
ON CONFLICT DO NOTHING;

-- ============================================================
-- PART 2: 松屋 (Matsuya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('牛めし 並盛', 709, 22.5, 23.0, 100.0, 400, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '松屋の定番牛めし。味噌汁付き'),
  ('牛めし 大盛', 952, 29.0, 30.0, 136.0, 550, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛めし大盛り。ボリューム満点'),
  ('牛めし 特盛', 1164, 38.0, 42.0, 150.0, 700, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛めし特盛り。がっつり食べたい方に'),
  ('プレミアム牛めし 並盛', 741, 23.5, 25.0, 102.0, 480, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '上質な牛肉を使用したプレミアム牛めし'),
  ('ネギたま牛めし 並盛', 810, 27.0, 28.0, 105.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛めしにねぎと生卵をトッピング'),
  ('キムチ牛めし 並盛', 725, 23.0, 23.5, 102.0, 460, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛めしにキムチをトッピング'),
  ('カルビ焼肉定食', 852, 32.0, 33.0, 98.0, 730, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '香ばしく焼いたカルビの定食。味噌汁・ご飯付き'),
  ('豚肩ロースの生姜焼定食', 784, 30.0, 28.0, 94.0, 730, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '生姜が効いた豚肩ロースの生姜焼き定食'),
  ('ブラウンソースハンバーグ定食', 838, 28.5, 35.0, 96.0, 730, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), 'デミグラスソースのハンバーグ定食'),
  ('カレー 並盛', 688, 15.0, 18.0, 115.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '松屋オリジナルのカレー'),
  ('ビビン丼 並盛', 748, 25.0, 24.0, 103.0, 530, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), 'ピリ辛のビビンバ風丼'),
  ('豚めし 並盛', 680, 20.0, 19.0, 102.0, 400, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '豚肉を甘辛く仕上げた豚めし'),
  ('おろしポン酢牛めし 並盛', 728, 23.0, 23.5, 103.0, 480, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '大根おろしとポン酢でさっぱり'),
  ('牛焼肉定食', 876, 34.0, 34.0, 99.0, 730, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛焼肉の定食。ご飯・味噌汁・小鉢付き'),
  ('厚切り豚テキ定食', 810, 35.0, 28.0, 95.0, 730, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '厚切り豚肉のステーキ定食'),
  ('味噌汁', 21, 1.5, 0.7, 2.5, 0, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '松屋は味噌汁が無料で付く'),
  ('生野菜', 15, 0.8, 0.1, 3.2, 110, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), 'シンプルな生野菜サラダ'),
  ('半熟玉子', 76, 6.0, 5.0, 0.5, 80, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), 'トッピング用の半熟玉子'),
  ('牛めし ミニ盛', 506, 16.0, 16.5, 72.0, 330, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '少量で済ませたい方向けのミニ盛'),
  ('チーズ牛めし 並盛', 825, 28.0, 32.0, 103.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '松屋'), '牛めしにとろけるチーズをトッピング')
ON CONFLICT DO NOTHING;

-- ============================================================
-- PART 3: すき家 (Sukiya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('牛丼 並盛', 638, 19.5, 22.5, 89.5, 400, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'すき家の定番牛丼'),
  ('牛丼 大盛', 873, 26.5, 31.0, 121.0, 550, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '牛丼大盛り'),
  ('牛丼 特盛', 1044, 33.0, 42.5, 133.0, 700, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '牛丼特盛。肉2倍'),
  ('牛丼 メガ', 1179, 42.0, 56.0, 121.0, 850, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '肉3倍のメガサイズ牛丼'),
  ('牛丼 ミニ', 496, 15.0, 17.5, 69.0, 350, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '少量で食べたい方向けのミニサイズ'),
  ('ねぎ玉牛丼 並盛', 744, 24.0, 29.0, 93.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '青ねぎと温泉卵をトッピングした牛丼'),
  ('キムチ牛丼 並盛', 658, 20.5, 23.0, 91.0, 480, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '白菜キムチをトッピング'),
  ('3種のチーズ牛丼 並盛', 779, 26.0, 33.0, 92.0, 550, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '3種のチーズが牛丼にとろける'),
  ('おんたま牛丼 並盛', 715, 25.0, 27.5, 90.0, 450, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '温泉卵トッピングの牛丼'),
  ('とりそぼろ丼 並盛', 582, 22.0, 11.0, 98.0, 400, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '鶏そぼろと卵の二色丼'),
  ('豚丼 並盛', 655, 21.0, 20.0, 96.0, 400, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '豚肉の丼。手頃な価格'),
  ('まぐろたたき丼 並盛', 504, 22.5, 5.5, 90.0, 580, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '新鮮なまぐろたたきの海鮮丼'),
  ('カレー 並盛', 751, 18.0, 21.0, 118.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'すき家のオリジナルカレー'),
  ('牛丼ライト 並盛', 352, 19.0, 19.0, 24.0, 430, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'ご飯の代わりに豆腐とサラダ。低糖質'),
  ('高菜明太マヨ牛丼 並盛', 780, 22.5, 30.0, 103.0, 530, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '高菜・明太子・マヨネーズの組み合わせ'),
  ('牛カルビ丼 並盛', 768, 21.0, 29.5, 102.0, 550, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '香ばしく焼いたカルビの丼'),
  ('山かけ牛丼 並盛', 680, 21.0, 23.0, 96.0, 500, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'とろろ山芋をトッピングした牛丼'),
  ('納豆牛丼 並盛', 720, 25.5, 25.0, 96.0, 470, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), '牛丼に納豆をトッピング'),
  ('味噌汁', 25, 1.5, 0.8, 3.0, 100, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'すき家の味噌汁'),
  ('サラダセット', 25, 1.2, 0.2, 4.5, 140, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'すき家'), 'ミニサラダとドレッシングのセット')
ON CONFLICT DO NOTHING;

-- ============================================================
-- PART 4: なか卯 (Nakau)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('親子丼 並盛', 695, 30.0, 18.0, 98.0, 490, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'なか卯の看板メニュー。こだわり卵のふわとろ親子丼'),
  ('親子丼 大盛', 889, 37.0, 22.0, 128.0, 620, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '親子丼の大盛り'),
  ('親子丼 ミニ', 475, 21.0, 12.5, 67.0, 390, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '親子丼のミニサイズ。うどんとのセットにも'),
  ('カツ丼 並盛', 868, 32.0, 28.0, 116.0, 690, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'サクサクのカツを卵でとじたカツ丼'),
  ('牛丼 並盛', 632, 20.0, 21.0, 88.0, 430, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'なか卯の牛丼'),
  ('牛丼 大盛', 842, 26.0, 28.0, 118.0, 560, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '牛丼の大盛り'),
  ('海鮮かき揚げ丼 並盛', 712, 15.0, 22.0, 108.0, 590, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '海鮮かき揚げを乗せた丼'),
  ('はいからうどん 並盛', 345, 10.0, 4.5, 64.0, 290, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '揚げ玉入りのシンプルなうどん'),
  ('きつねうどん 並盛', 424, 14.0, 9.0, 70.0, 390, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '甘く煮た油揚げのきつねうどん'),
  ('鶏塩うどん 並盛', 402, 20.0, 8.5, 60.0, 490, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '鶏肉を塩味で仕上げたうどん'),
  ('肉うどん 並盛', 468, 18.5, 11.5, 68.0, 530, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '甘辛い牛肉を乗せたうどん'),
  ('ざるうどん 並盛', 312, 9.5, 2.0, 62.0, 340, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '冷たいつけ汁で食べるざるうどん'),
  ('親子丼とはいからうどんセット', 1040, 40.0, 22.5, 162.0, 710, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '人気No.1セット。親子丼ミニとうどん'),
  ('カツ丼とはいからうどんセット', 1213, 42.0, 32.5, 180.0, 910, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'カツ丼ミニとうどんのセット'),
  ('朝まぜごはん牛小鉢定食', 488, 18.0, 14.0, 68.0, 400, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '朝定食。まぜごはんと牛小鉢'),
  ('味噌汁', 26, 1.5, 0.8, 3.0, 100, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'なか卯の味噌汁'),
  ('小うどん', 215, 6.5, 2.0, 42.0, 190, '麺類', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), '丼のお供に最適な小うどん'),
  ('唐揚げ(3個)', 240, 15.0, 15.0, 10.0, 270, '揚げ物', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'なか卯'), 'ジューシーな唐揚げ3個')
ON CONFLICT DO NOTHING;

-- ============================================================
-- PART 5: 大戸屋 (Ootoya)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('チキンかあさん煮定食', 800, 42.0, 28.0, 88.0, 920, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '大戸屋の人気No.1。鶏の竜田揚げを特製出汁で煮込んだ定食'),
  ('鶏と野菜の黒酢あん定食', 820, 32.0, 25.0, 108.0, 970, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '野菜たっぷりの黒酢あんかけ定食'),
  ('さばの味噌煮定食', 745, 32.5, 28.0, 80.0, 920, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '脂の乗ったさばを味噌で煮込んだ定食'),
  ('手造り豆腐のねぎ味噌ちゃんこ鍋定食', 685, 38.0, 22.0, 72.0, 970, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '手造り豆腐と野菜のちゃんこ鍋定食'),
  ('鶏の竜田揚げ定食', 890, 35.0, 38.0, 92.0, 870, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'サクサクの鶏竜田揚げの定食'),
  ('もうひとつの大戸屋ランチ', 650, 28.0, 18.0, 82.0, 870, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'バランスの良い日替わりランチ'),
  ('大戸屋ランチ', 720, 30.0, 22.0, 88.0, 870, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'おかず2品が選べるお得なランチ定食'),
  ('しまほっけの炭火焼き定食', 620, 35.0, 18.0, 72.0, 970, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '大きなしまほっけを炭火で焼き上げた定食'),
  ('すけそう鱈と野菜の黒酢あん定食', 780, 28.0, 22.0, 105.0, 920, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'すけそう鱈の唐揚げと野菜の黒酢あん'),
  ('豚ロースの味噌漬け炭火焼き定食', 810, 33.0, 30.0, 85.0, 970, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '味噌漬けの豚ロースを炭火焼きに'),
  ('四元豚のロースかつ定食', 935, 35.0, 42.0, 92.0, 1020, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'サクサクの四元豚ロースかつ定食'),
  ('鶏むね肉のグリル定食', 580, 38.0, 12.0, 68.0, 870, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '高タンパク低脂肪の鶏むねグリル'),
  ('野菜と鶏の雑炊', 380, 22.0, 8.0, 52.0, 820, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '野菜と鶏肉の優しい味わいの雑炊'),
  ('ばくだん丼', 628, 28.0, 15.0, 88.0, 870, '丼もの', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'まぐろ・納豆・オクラ・卵のネバネバ丼'),
  ('ミニサラダ', 28, 1.5, 0.5, 5.0, 160, 'サラダ・ヘルシー', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), 'セットにプラスできるミニサラダ'),
  ('五穀ご飯に変更', 252, 5.0, 1.5, 53.0, 50, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '白ご飯を五穀ご飯に変更可能'),
  ('手造り豆腐', 105, 7.5, 6.0, 4.5, 200, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '大戸屋名物の手造り豆腐'),
  ('味噌汁', 32, 2.0, 1.0, 3.5, 0, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = '大戸屋'), '定食に付く味噌汁')
ON CONFLICT DO NOTHING;

-- ============================================================
-- PART 6: やよい軒 (Yayoi-ken)
-- ============================================================

INSERT INTO menu_items (name, calories, protein, fat, carbs, price, category, source_type, chain_restaurant_id, description)
VALUES
  ('しょうが焼定食', 905, 32.0, 38.0, 102.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'やよい軒人気No.1。豚肉の生姜焼き定食。ご飯おかわり自由'),
  ('チキン南蛮定食', 955, 35.0, 42.0, 98.0, 800, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'タルタルソースたっぷりのチキン南蛮'),
  ('なす味噌と焼魚の定食', 740, 30.0, 22.0, 98.0, 830, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'なす味噌炒めと焼き魚の2品定食'),
  ('味噌かつ煮定食', 885, 38.0, 35.0, 95.0, 800, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '味噌ダレで煮込んだかつの定食'),
  ('サバの塩焼定食', 680, 30.0, 25.0, 72.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '脂の乗ったサバの塩焼き定食'),
  ('サバの味噌煮定食', 740, 30.0, 28.0, 78.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'サバを甘めの味噌ダレで煮込んだ定食'),
  ('鶏もも肉の唐揚げ定食', 920, 35.0, 40.0, 95.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'ジューシーな鶏もも唐揚げの定食'),
  ('野菜炒め定食', 680, 22.0, 28.0, 78.0, 700, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'たっぷり野菜の炒め物定食'),
  ('肉野菜炒め定食', 780, 28.0, 32.0, 82.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '豚肉と野菜をたっぷり炒めた定食'),
  ('鶏の竜田揚げ定食', 910, 34.0, 40.0, 92.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'サクサク食感の鶏竜田揚げ定食'),
  ('回鍋肉定食', 820, 25.0, 35.0, 88.0, 750, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '甘辛い味噌ダレの回鍋肉定食'),
  ('すき焼き定食', 860, 35.0, 30.0, 98.0, 830, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '牛肉と野菜のすき焼き定食'),
  ('ハンバーグ定食', 848, 30.0, 38.0, 88.0, 780, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'デミグラスソースのハンバーグ定食'),
  ('目玉焼朝食', 525, 20.0, 18.0, 68.0, 460, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '目玉焼き・ウインナー・サラダの朝食セット'),
  ('納豆朝食', 475, 18.5, 10.0, 72.0, 410, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '納豆・味噌汁・ご飯のシンプル朝食'),
  ('しらす明太子朝食', 520, 22.0, 12.0, 75.0, 510, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'しらすと明太子の朝食セット'),
  ('銀鮭の塩焼朝食', 545, 25.0, 14.0, 72.0, 550, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '脂の乗った銀鮭の塩焼き朝食'),
  ('和風おろしハンバーグ定食', 810, 30.0, 34.0, 86.0, 780, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '大根おろしとポン酢でさっぱり'),
  ('カットステーキ定食', 830, 38.0, 32.0, 78.0, 1050, '定食・セット', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), 'カットステーキの贅沢定食'),
  ('味噌汁', 28, 1.8, 0.8, 3.2, 0, '和食', 'chain_restaurant', (SELECT id FROM chain_restaurants WHERE name = 'やよい軒'), '定食に付く味噌汁。おかわり自由')
ON CONFLICT DO NOTHING;

-- ============================================================
-- Done! Migration V5 complete.
-- Gyudon & Teishoku chains: 吉野家(20), 松屋(20), すき家(20),
-- なか卯(18), 大戸屋(18), やよい軒(20) = 116 items total
-- ============================================================
