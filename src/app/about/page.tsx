"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=800&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-cream mb-4 text-shadow">
            Our <span className="text-amber">Story</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            A Cajun soul kitchen born on the fairways of Elgin
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                The Beginning
              </span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6 text-charcoal-dark">
                From the Bayou to the <span className="text-bourbon">Fairway</span>
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  The Grumpy Goat was born from a simple idea: bring the bold,
                  soulful flavors of Louisiana to the heart of Illinois. Nestled
                  within the Highlands of Elgin Golf Course, we&apos;ve created a
                  place where the warmth of Cajun hospitality meets the beauty
                  of the Fox Valley.
                </p>
                <p>
                  What started as a humble golfer&apos;s stop has grown into one of
                  Elgin&apos;s most beloved dining destinations. Our kitchen blends
                  traditional Cajun and Creole recipes with locally sourced
                  ingredients, while our bar boasts a collection of over 40
                  whiskeys that would make any bourbon enthusiast smile.
                </p>
                <p>
                  Named after the stubborn (but lovable) spirit that drives
                  everything we do, The Grumpy Goat is a place where good food,
                  great drinks, and genuine hospitality come together — whether
                  you&apos;re celebrating after 18 holes or just looking for the
                  best patio in town.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=700&fit=crop"
                alt="Restaurant dining area with warm lighting"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                What We Stand For
              </span>
              <h2 className="text-4xl font-serif font-bold mt-2 text-cream">
                Our Pillars
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Cajun",
                desc: "Every dish is rooted in the bold, soulful traditions of Louisiana cuisine — from the holy trinity to our house-made remoulade.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "Whiskey Obsessed",
                desc: "Our 40+ whiskey collection is carefully curated — from rare small-batch bourbons to classic single malts. We take our spirits seriously.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                title: "Community First",
                desc: "We're more than a restaurant — we're your neighborhood gathering spot. From regulars to first-timers, everyone's welcome at The Goat.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 150}>
                <div className="bg-charcoal rounded-2xl p-8 text-center hover-lift h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                    <svg className="w-8 h-8 text-charcoal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {value.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-amber mb-3">
                    {value.title}
                  </h3>
                  <p className="text-cream/60 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bourbon">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 40, suffix: "+", label: "Premium Whiskeys" },
            { end: 785, suffix: "+", label: "Happy Guests" },
            { end: 4.5, suffix: "", label: "Star Rating", decimals: 1 },
            { end: 15, suffix: "+", label: "Years Strong" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-cream/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Patio Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=500&fit=crop"
                alt="Outdoor patio overlooking golf course"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="order-1 lg:order-2">
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                The Patio
              </span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-6 text-charcoal-dark">
                Best Views in <span className="text-bourbon">Elgin</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Our patio is the crown jewel of The Grumpy Goat. Overlooking the
                lush fairways of the Highlands of Elgin Golf Course, it&apos;s the
                perfect spot to unwind with a whiskey flight as the sun sets
                over the Fox Valley.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Whether it&apos;s a lazy Sunday brunch, a weeknight happy hour, or a
                weekend celebration, our patio delivers an atmosphere that&apos;s
                hard to beat — and our guests agree.
              </p>
              <blockquote className="border-l-4 border-amber pl-4 italic text-charcoal/60">
                &ldquo;Best patio in Elgin hands down. Overlooking the golf course
                with a whiskey flight — doesn&apos;t get better than that.&rdquo;
                <span className="block text-sm mt-2 not-italic text-amber">
                  — Google Review
                </span>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-bold text-cream mb-4">
              Come Experience The Goat
            </h2>
            <p className="text-cream/60 mb-8 text-lg">
              Pull up a chair, grab a whiskey, and taste what everyone&apos;s
              talking about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                View Our Menu
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-cream border-2 border-cream/30 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Get Directions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
