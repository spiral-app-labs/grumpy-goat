"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const menuCategories = [
  {
    name: "Appetizers",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&h=400&fit=crop",
    items: [
      { name: "Cajun Fried Pickles", desc: "Hand-battered, served with remoulade", price: "$12" },
      { name: "Boudin Balls", desc: "Cajun sausage fritters with creole mustard", price: "$14" },
      { name: "Blackened Shrimp Skewers", desc: "Grilled with cajun seasoning", price: "$15" },
      { name: "Wings", desc: "Choice of cajun dry rub, buffalo, or whiskey glaze", price: "$14" },
      { name: "Loaded Crawfish Nachos", desc: "Crawfish, queso, jalapeños, cajun seasoning", price: "$16" },
    ],
  },
  {
    name: "Entrees",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop",
    items: [
      { name: "Blackened Catfish Po'Boy", desc: "With cajun slaw and remoulade", price: "$16" },
      { name: "Cajun Burger", desc: "Pepper jack, jalapeños, cajun aioli on brioche", price: "$17" },
      { name: "Whiskey-Glazed Baby Back Ribs", desc: "Full or half rack", price: "$24 / $18" },
      { name: "Grilled Chicken & Andouille Sausage", desc: "Over dirty rice", price: "$19" },
      { name: "Shrimp & Grits", desc: "Creole style with andouille", price: "$22" },
      { name: "Jambalaya", desc: "Chicken, shrimp, andouille", price: "$20" },
      { name: "Blackened Chicken Pasta", desc: "Cajun cream sauce", price: "$18" },
      { name: "Golf Course Club Sandwich", desc: "Triple-decker classic", price: "$15" },
    ],
  },
  {
    name: "Sides",
    image: "https://images.unsplash.com/photo-1585325701165-351af55a77b8?w=800&h=400&fit=crop",
    items: [
      { name: "Cajun Fries", desc: "Seasoned and crispy", price: "$6" },
      { name: "Sweet Potato Fries", desc: "With cinnamon sugar dust", price: "$7" },
      { name: "Dirty Rice", desc: "Cajun-style rice with trinity", price: "$6" },
      { name: "Coleslaw", desc: "Creamy cajun slaw", price: "$5" },
      { name: "Mac & Cheese", desc: "Creamy, baked, golden crust", price: "$7" },
    ],
  },
  {
    name: "Whiskey & Drinks",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=400&fit=crop",
    items: [
      { name: "40+ Whiskey Selection", desc: "Bourbon, rye, scotch — ask about flights", price: "$10-22" },
      { name: "Goat's Old Fashioned", desc: "Our signature twist on a timeless classic", price: "$14" },
      { name: "Bayou Mule", desc: "Bourbon, ginger beer, lime, cajun spice rim", price: "$13" },
      { name: "Cajun Mary", desc: "Vodka bloody mary with a Southern kick", price: "$12" },
      { name: "Local Craft Beers", desc: "Rotating taps — ask your server", price: "$7-9" },
      { name: "Wine Selection", desc: "Red, white, and rosé by the glass or bottle", price: "$9-14" },
    ],
  },
  {
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop",
    items: [
      { name: "Bourbon Pecan Pie", desc: "Rich, nutty, with a bourbon kick", price: "$10" },
      { name: "Beignets", desc: "Fresh-fried, dusted with powdered sugar", price: "$9" },
      { name: "Bread Pudding", desc: "With whiskey sauce", price: "$11" },
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
