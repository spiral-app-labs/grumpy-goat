"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const menuCategories = [
  {
    name: "Starters",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&h=400&fit=crop",
    items: [
      { name: "Charcuterie", desc: "Imported meats & honey, olives, crostinis, candied pecans", price: "$17" },
      { name: "Jumbo Lump Crab Cake", desc: "Red pepper coulis and sautéed spinach", price: "$18" },
      { name: "Cast Iron Skillet Dip", desc: "Baked spinach & artichoke, parmesan cream and cheddar cheeses, warm pita bread", price: "$11" },
      { name: "Spicy PEI Mussels", desc: "Steamed with Blue Moon, shallots, chorizo, crushed peppers, white wine, toasted ciabatta", price: "$16" },
      { name: "Chicken Tenders", desc: "Golden fried, tossed with buffalo, BBQ, mango habanero, garlic parmesan or sticky Asian, with fries", price: "$13" },
      { name: "Wings", desc: "Traditional fried, tossed with Buffalo, BBQ, Sticky Asian, Garlic Parmesan or Mango Habanero", price: "$14" },
      { name: "Chicken Nachos", desc: "Tortilla chips, cheese sauce, black beans, jalapeños, guacamole, sour cream, pico de gallo", price: "$16" },
      { name: "Bowl of Gumbo", desc: "Hearty house-made gumbo", price: "$9" },
      { name: "Hummus & Spread Trio", desc: "Southwest black bean hummus, edamame wasabi hummus, olive tapenade, flatbread", price: "$12" },
      { name: "Baked Goat Cheese", desc: "Slow roasted roma tomatoes, piquillo sauce, grilled flatbread", price: "$11" },
      { name: "Mini Tinga Tacos", desc: "Braised chicken tinga in mini tortillas", price: "$10" },
    ],
  },
  {
    name: "Soups & Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop",
    items: [
      { name: "Soup du Jour", desc: "Ask your server for today's selection", price: "Cup $5 / Bowl $7" },
      { name: "Chopped House Salad", desc: "Applewood smoked bacon, blue cheese crumble, egg, tomato, avocado, cucumber, red onions", price: "$13" },
      { name: "Wedge House Salad", desc: "Iceberg lettuce, egg, bleu cheese crumble, applewood smoked bacon, red onion", price: "$11" },
      { name: "Grilled Caesar Salad", desc: "Grilled baby romaine, Caesar dressing, garlic herb croutons, shaved parmesan", price: "$12" },
      { name: "Steak Salad", desc: "Sliced steak over mixed greens with house vinaigrette", price: "$16" },
      { name: "Grilled Chicken Salad", desc: "Kale, brussel sprouts, Boston bibb, golden raisins, pine nuts, bacon, goat cheese, cranberries", price: "$14" },
      { name: "Seared Ahi Tuna Salad", desc: "Seared ahi tuna over mixed greens", price: "$16" },
      { name: "Creole Cobb", desc: "Cajun-spiced cobb salad with creole dressing", price: "$14" },
    ],
  },
  {
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
    items: [
      { name: "Chop House Burger", desc: "8 oz prime beef, lettuce, tomato, onion on toasted brioche bun", price: "$14" },
      { name: "Bayou Burger", desc: "Crawfish cake and creole hollandaise", price: "$15" },
      { name: "Bleu Goat & Duck Burger", desc: "Blue and goat cheese, piquillo sauce, duck bacon, baby arugula", price: "$15" },
      { name: "Highlander Burger", desc: "BBQ slow-roasted sliced pork and cheese sauce", price: "$14" },
      { name: "South of the Border Burger", desc: "Pepper jack, fried jalapeños, black bean, roasted corn relish, chipotle mayo", price: "$16" },
      { name: "Impossible Burger", desc: "Plant-based patty with lettuce, tomato, onions", price: "$16" },
      { name: "Bulleit Bourbon Burger", desc: "Lettuce, tomato, crispy onion strings, bourbon sauce (21+)", price: "$16" },
      { name: "Fried Egg Burger", desc: "Melted cheddar, bacon, fried egg, lettuce, tomato, onion", price: "$17" },
    ],
  },
  {
    name: "Sandwiches",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=400&fit=crop",
    items: [
      { name: "Pastrami", desc: "Gruyere cheese, grumpy goat slaw, housemade 1000 Island, dark rye bun", price: "$15" },
      { name: "Grand Reuben", desc: "Shaved corned beef piled high, Swiss, sauerkraut, thousand island on toasted marble rye", price: "$15" },
      { name: "Cajun Grouper Po'Boy", desc: "Lightly cajun grouper, Asian coleslaw, lettuce, tomato, citrus aioli", price: "$18" },
      { name: "Smoked Brisket", desc: "Slow-smoked brisket on a toasted bun with BBQ sauce", price: "$16" },
      { name: "Grilled Chicken Sandwich", desc: "Grilled chicken breast with lettuce, tomato, onion, mayo", price: "$14" },
      { name: "Buffalo Wrap", desc: "Crispy buffalo chicken, lettuce, tomato, ranch in a flour tortilla", price: "$13" },
    ],
  },
  {
    name: "Entrees",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop",
    items: [
      { name: "Filet (8 oz)", desc: "Hand-cut certified Angus beef, demi-glace, seasonal vegetables, roasted fingerling potatoes", price: "$34" },
      { name: "Cajun Prime Rib (10 oz)", desc: "Onion blackberry bread pudding, seasonal vegetable, au jus, Guinness horseradish", price: "$29" },
      { name: "Flank Steak Nola", desc: "Grumpy goat cheese sauce, chimichurri, roasted fingerling potatoes, roasted vegetables", price: "$26" },
      { name: "Salmon Orleans", desc: "Bourbon mustard glaze, creole hollandaise, golden raisins, pine nuts, spinach, goat cheese, rice", price: "$21" },
      { name: "Cajun Chicken Orleans", desc: "Grilled with spinach, piquillo sauce, goat cheese, golden raisins, pine nuts, rice", price: "$16" },
      { name: "Classic Crawfish Étouffée", desc: "Traditional étouffée served over rice", price: "$23" },
      { name: "Shrimp Pasta", desc: "Sautéed shrimp, tomato, spinach, red onions, white wine sauce, linguine, garlic bread", price: "$19" },
      { name: "Jambalaya", desc: "Shrimp, andouille, chicken, tomatoes, peppers, onions, cajun spices, rice", price: "$17" },
      { name: "Grumpy Goat Mac & Cheese", desc: "Creamy baked mac & cheese entrée", price: "$13" },
    ],
  },
  {
    name: "Sides",
    image: "https://images.unsplash.com/photo-1585325701165-351af55a77b8?w=800&h=400&fit=crop",
    items: [
      { name: "Tavern Fries", desc: "Classic cut fries", price: "$5" },
      { name: "Cajun Fries", desc: "Seasoned with cajun spices", price: "$5" },
      { name: "Sweet Potato Fries", desc: "Crispy sweet potato fries", price: "$6" },
      { name: "Cajun Sweet Potato Fries", desc: "Sweet potato fries with cajun seasoning", price: "$6" },
      { name: "Dirty Rice", desc: "Cajun-style rice", price: "$4" },
      { name: "Jasmine Rice", desc: "Steamed jasmine rice", price: "$4" },
      { name: "Mac & Cheese", desc: "Grumpy Goat mac & cheese side", price: "$5" },
      { name: "Seasonal Vegetables", desc: "Chef's selection of seasonal vegetables", price: "$4" },
      { name: "Grumpy Goat Cole Slaw", desc: "House-made coleslaw", price: "$4" },
      { name: "Apple Blue Cheese Slaw", desc: "Apple and blue cheese coleslaw", price: "$4" },
      { name: "Bacon Jalapeño Slaw", desc: "Bacon and jalapeño coleslaw", price: "$4" },
      { name: "Fresh Fruit", desc: "Seasonal fresh fruit", price: "$5" },
    ],
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop",
    items: [
      { name: "Cajun Mud Pie", desc: "Chocolate & vanilla ice cream layers, brownie, fudge, heath bar, whipped cream, chocolate & caramel sauce", price: "$16" },
    ],
  },
  {
    name: "Whiskey & Drinks",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=400&fit=crop",
    items: [
      { name: "80+ Whiskey Selection", desc: "Bourbon, rye, scotch — ask about flights", price: "$10–22" },
      { name: "Goat's Old Fashioned", desc: "Our signature twist on a timeless classic", price: "$14" },
      { name: "Bayou Mule", desc: "Bourbon, ginger beer, lime, cajun spice rim", price: "$13" },
      { name: "Cajun Mary", desc: "Vodka bloody mary with a Southern kick", price: "$12" },
      { name: "Local Craft Beers", desc: "9 taps, rotating selection — ask your server", price: "$7–9" },
      { name: "Wine Selection", desc: "Red, white, and rosé by the glass or bottle", price: "$9–14" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=800&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-cream mb-4 text-shadow">
            Our <span className="text-amber">Menu</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            Bold Cajun flavors, Southern comfort, and the finest whiskey
            selection in the Fox Valley
          </p>
        </div>
      </section>

      {/* Online Ordering Banner */}
      <section className="bg-accent py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-white font-semibold">
            Order for pickup or delivery!
          </span>
          <div className="flex gap-3">
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-cream transition-colors"
            >
              DoorDash
            </a>
            <a
              href="https://www.ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-cream transition-colors"
            >
              Uber Eats
            </a>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name}>
              <div className={`${catIdx > 0 ? "mt-20" : ""}`}>
                {/* Category Header */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/80 to-charcoal-dark/40" />
                  <div className="absolute inset-0 flex items-center px-8">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream">
                      {category.name}
                    </h2>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-1">
                  {category.items.map((item, i) => (
                    <ScrollReveal key={item.name} delay={i * 50}>
                      <div className="flex items-start justify-between gap-4 py-4 px-4 rounded-lg hover:bg-cream-dark transition-colors group">
                        <div className="flex-grow">
                          <h3 className="text-lg font-serif font-bold text-charcoal-dark group-hover:text-bourbon transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-charcoal/60 text-sm mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-amber font-bold text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-4">
            Can&apos;t Decide? Come Try It All.
          </h2>
          <p className="text-cream/60 mb-8">
            Our kitchen is ready. Walk in, call ahead, or order online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18479315950"
              className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
            >
              Call (847) 931-5950
            </a>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
