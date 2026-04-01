"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuWidget from "@/components/MenuWidget";
import rawMenu from "@/data/grumpy-goat-menu.json";
import type { MenuWidgetConfig, MenuItem } from "@/lib/types";

interface RawItem {
  id: string;
  name: string;
  category: string;
  price: number | null;
  description?: string | null;
  allergens?: string[];
  dietary?: string[];
  calories?: number | null;
  spicy?: number;
  popular?: boolean;
  image?: string | null;
}

const items: MenuItem[] = (rawMenu.items as RawItem[]).map((item) => ({
  id: item.id,
  name: item.name,
  category: item.category,
  price: item.price,
  description: item.description ?? null,
  allergens: item.allergens ?? [],
  dietary: item.dietary ?? [],
  calories: item.calories ?? null,
  spicy: item.spicy ?? 0,
  popular: item.popular ?? false,
  image: item.image ?? null,
}));

const config: MenuWidgetConfig = {
  restaurant: {
    name: "The Grumpy Goat",
    tagline: "Craft gastropub with steakhouse roots",
  },
  theme: {
    primaryColor: "#8B2020",
    secondaryColor: "#C4813A",
    accentColor: "#2A1A1A",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    headerFont: "'Playfair Display', Georgia, serif",
    borderRadius: "0.5rem",
    cardStyle: "elevated",
    layout: "grid",
    mode: "dark",
  },
  menu: items,
  features: {
    search: true,
    allergyFilters: true,
    mealBuilder: true,
    aiChat: false,
  },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <MenuWidget config={config} />
      <Footer />
    </>
  );
}
