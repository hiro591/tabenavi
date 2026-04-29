-- ============================================================
-- たべなび Migration V8: Growth Loops
-- Restaurant requests + combo saves + share tracking
-- Run in Supabase SQL Editor
-- ============================================================

-- ============================================================
-- PART 1: Restaurant request table (Loop 1)
-- ============================================================

CREATE TABLE IF NOT EXISTS restaurant_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_name TEXT NOT NULL,
  anon_id TEXT,
  user_id UUID REFERENCES auth.users(id),
  notify_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_requests_name ON restaurant_requests(restaurant_name);

ALTER TABLE restaurant_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a request
CREATE POLICY "Anyone can request restaurants"
  ON restaurant_requests FOR INSERT
  WITH CHECK (true);

-- Users can read their own requests
CREATE POLICY "Users can read own requests"
  ON restaurant_requests FOR SELECT
  USING (true);

-- ============================================================
-- PART 2: Saved combos table (Loop 3)
-- ============================================================

CREATE TABLE IF NOT EXISTS saved_combos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  chain_restaurant_id UUID REFERENCES chain_restaurants(id),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  items JSONB NOT NULL,
  total_calories INTEGER NOT NULL,
  total_protein NUMERIC NOT NULL,
  total_fat NUMERIC NOT NULL,
  total_carbs NUMERIC NOT NULL,
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_combos_slug ON saved_combos(slug);
CREATE INDEX IF NOT EXISTS idx_combos_chain ON saved_combos(chain_restaurant_id);

ALTER TABLE saved_combos ENABLE ROW LEVEL SECURITY;

-- Anyone can read combos (public SEO pages)
CREATE POLICY "Combos are publicly readable"
  ON saved_combos FOR SELECT
  USING (true);

-- Authenticated users can create combos
CREATE POLICY "Authenticated users can create combos"
  ON saved_combos FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- PART 3: Share tracking table (Loop 2)
-- ============================================================

CREATE TABLE IF NOT EXISTS share_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  menu_item_id UUID REFERENCES menu_items(id),
  combo_id UUID REFERENCES saved_combos(id),
  platform TEXT NOT NULL,
  utm_content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE share_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log shares"
  ON share_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Shares are readable"
  ON share_events FOR SELECT
  USING (true);
