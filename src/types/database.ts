export type Profile = {
  id: string;
  target_calories: number;
  target_protein: number;
  target_fat: number;
  target_carbs: number;
  display_name: string | null;
  created_at: string;
};

export type ChainRestaurant = {
  id: string;
  name: string;
  emoji: string | null;
  created_at: string;
};

export type MenuItem = {
  id: string;
  chain_restaurant_id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  price: number | null;
  category: string | null;
  source_type: string | null;
  created_at: string;
  chain_restaurants?: ChainRestaurant;
};

export type FoodLog = {
  id: string;
  user_id: string;
  menu_item_id: string | null;
  custom_name: string | null;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  meal_type: string;
  logged_at: string;
  created_at: string;
  menu_items?: MenuItem & { chain_restaurants?: ChainRestaurant };
};

export type StoreLocation = {
  id: string;
  chain_restaurant_id: string;
  name: string;
  lat: number;
  lng: number;
  area: string | null;
  created_at: string;
  chain_restaurants?: ChainRestaurant;
};

export type RestaurantRequest = {
  id: string;
  restaurant_name: string;
  anon_id: string | null;
  user_id: string | null;
  notify_email: string | null;
  created_at: string;
};

export type SavedCombo = {
  id: string;
  user_id: string | null;
  chain_restaurant_id: string;
  slug: string;
  title: string;
  items: { name: string; calories: number; protein: number; fat: number; carbs: number }[];
  total_calories: number;
  total_protein: number;
  total_fat: number;
  total_carbs: number;
  comment: string | null;
  created_at: string;
  chain_restaurants?: ChainRestaurant;
};

export type CheatDay = {
  id: string;
  user_id: string;
  date: string;
  note: string | null;
  reset_plan: string | null;
  created_at: string;
};
