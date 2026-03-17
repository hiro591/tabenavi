export type Profile = {
  id: string;
  target_calories: number;
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

export type CheatDay = {
  id: string;
  user_id: string;
  date: string;
  note: string | null;
  reset_plan: string | null;
  created_at: string;
};
