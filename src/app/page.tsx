"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import StarRating from "@/components/StarRating";

const reviews = [
  {
    text: "Hidden gem at the golf course, best food in Elgin",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Po'boy Mondays are a MUST",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Whiskey selection is insane, over 80 options",
    source: "Google Review",
    rating: 5,
  },
];

const featured = [
  {
    name: "Bulleit Bourbon Burger",
    desc: "$16 — Our signature smash burger with bourbon-glazed onions",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop",
  },
  {
    name: "Jumbo Lump Crab Cake",
    desc: "$18 — Pan-seared with remoulade and cajun slaw",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
  },
  {
    name: "18oz Bone-In Ribeye",
    desc: "$58 — Hand-cut, seasoned with our Cajun dry rub",
    img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop",
  },
  {
    name: "Jambalaya",
    desc: "$24 — Andouille, shrimp, and chicken in Creole sauce",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1920&h=1080&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 text-shadow animate-fade-in">
            Cajun Soul.{" "}
            <span className="text-amber">Whiskey Spirit.</span>
          </h1>
          <p className="text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Authentic Southern flavors and 80+ whiskeys overlooking the
            Highlands of Elgin Golf Course
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/menu"
              className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              View Our Menu
            </Link>
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Order Online
            </a>
          </div>

          {/* Google Rating Badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-charcoal-dark/80 backdrop-blur-md rounded-full px-6 py-3">
            <StarRating rating={4.5} />
            <span className="text-cream font-semibold">4.5</span>
            <span className="text-cream/60 text-sm">785 Google Reviews</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal-dark py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { end: 80, suffix: "+", label: "Whiskeys" },
            { end: 785, suffix: "", label: "Google Reviews" },
            { end: 4.5, suffix: "", label: "Star Rating", decimals: 1 },
            { end: 15, suffix: "+", label: "Years Serving" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-cream/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2 mb-6 text-charcoal-dark">
                Where the Bayou Meets <span className="text-bourbon">the Fairway</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Nestled in the Highlands of Elgin Golf Course, The Grumpy Goat
                brings authentic Cajun and Creole flavors to the heart of
                Illinois. Our kitchen serves up bold, soulful dishes — from
                blackened catfish po&apos;boys to whiskey-glazed ribs — paired with
                one of the area&apos;s most impressive whiskey collections.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Whether you&apos;re wrapping up a round of golf, settling into our
                stunning patio, or gathering with friends over craft cocktails,
                The Grumpy Goat delivers Southern hospitality with every visit.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-bourbon font-semibold hover:text-amber transition-colors group"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=500&fit=crop"
                alt="The Grumpy Goat restaurant interior with warm ambient lighting"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber rounded-xl p-6 shadow-lg">
                <div className="text-charcoal-dark font-serif font-bold text-2xl">
                  Est. 2010
                </div>
                <div className="text-charcoal-dark/70 text-sm">
                  Elgin&apos;s Cajun Favorite
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                From Our Kitchen
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2 text-cream">
                Fan Favorites
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 150}>
                <div className="hover-lift rounded-2xl overflow-hidden bg-charcoal group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dish.img}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-cream/60">{dish.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Whiskey Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&h=800&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-amber font-semibold text-sm uppercase tracking-widest">
              The Bar
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2 mb-6 text-cream">
              80+ Whiskeys. Endless Possibilities.
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              From small-batch bourbons to single-malt scotches, our curated
              collection is one of the best in the Fox Valley. Try a flight,
              enjoy a signature cocktail, or let our bartenders craft something
              just for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { name: "Goat's Old Fashioned", desc: "Our signature twist on a classic" },
                { name: "Bayou Mule", desc: "Bourbon, ginger, lime, Cajun spice" },
                { name: "Cajun Mary", desc: "Bloody Mary with a Southern kick" },
              ].map((drink) => (
                <div
                  key={drink.name}
                  className="bg-charcoal-dark/60 backdrop-blur-md rounded-xl p-4 border border-amber/20"
                >
                  <h3 className="font-serif font-bold text-amber">
                    {drink.name}
                  </h3>
                  <p className="text-cream/60 text-sm mt-1">{drink.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                What People Say
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2 text-charcoal-dark">
                Loved by <span className="text-bourbon">785+ Guests</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <StarRating rating={4.5} size="w-6 h-6" />
                <span className="text-charcoal font-semibold text-lg">
                  4.5 out of 5
                </span>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="hover-lift bg-white rounded-2xl p-6 shadow-md h-full flex flex-col">
                  <StarRating rating={review.rating} />
                  <p className="text-charcoal/80 mt-4 flex-grow italic leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-cream-dark">
                    <span className="text-sm text-charcoal/50">
                      — {review.source}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bourbon">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4">
              Ready to Dig In?
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Visit us at the Highlands of Elgin Golf Course or order online for
              delivery.
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
                className="bg-white/10 hover:bg-white/20 text-cream border-2 border-cream/30 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Order on DoorDash
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
