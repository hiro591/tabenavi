-- migration_v7: profiles にオンボーディング回答カラムを追加(たべなび)
-- 目的: これまでlocalStorageにしか保存されず捨てられていたオンボーディング回答をDBに永続化し、
--       パーソナライズ(よく行く店の優先表示等)・将来の機能に使えるようにする。
--
-- 実行方法: Supabase ダッシュボード → SQL Editor にこの全文を貼って Run。
-- 冪等(IF NOT EXISTS)なので複数回実行しても安全。
-- RLS: profiles は既存ポリシー(本人のみ自分の行をupdate可)のまま。カラム追加はRLSに影響しない。

alter table public.profiles add column if not exists goal text;
alter table public.profiles add column if not exists gender text;
alter table public.profiles add column if not exists birth_year integer;
alter table public.profiles add column if not exists height_cm integer;
alter table public.profiles add column if not exists weight_kg numeric;
alter table public.profiles add column if not exists target_weight_kg numeric;
alter table public.profiles add column if not exists activity_level text;
alter table public.profiles add column if not exists favorite_chains jsonb;
alter table public.profiles add column if not exists onboarded_at timestamptz;
