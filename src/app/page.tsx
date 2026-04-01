"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import StarRating from "@/components/StarRating";

/* ─── Data ─────────────────────────────────────────────── */

const reviews = [
  {
    text: "The patio is absolutely stunning — views of the golf course, great food, and the staff couldn't be nicer. We'll be back every summer.",
    author: "Sarah M.",
    source: "Google",
    rating: 5,
  },
  {
    text: "Hidden gem in Elgin. Po'boy Mondays are an absolute must. The Cajun seasoning is legit — not watered down for the suburbs.",
    author: "James T.",
    source: "Yelp",
    rating: 5,
  },
  {
    text: "Whiskey selection is insane. Over 80 options and the bartenders actually know their stuff. Best bar in the Fox Valley, full stop.",
    author: "Mike R.",
    source: "Google",
    rating: 5,
  },
  {
    text: "Came for the view, stayed for the crab cakes. The wrap-around patio during golden hour is something else. 5/5 every time.",
    author: "Priya K.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Grumpy Goat is our go-to for group dinners. Kitchen handles big tables with ease and the food always hits. Jambalaya is fire.",
    author: "Chris & Lena D.",
    source: "Google",
    rating: 5,
  },
  {
    text: "That ribeye with the Cajun dry rub is one of the best steaks I've had anywhere. Period. Not just in the suburbs — anywhere.",
    author: "Tony V.",
    source: "Yelp",
    rating: 5,
  },
];

const featured = [
  {
    name: "Jumbo Lump Crab Cake",
    desc: "Pan-seared with house remoulade and Cajun slaw",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
  },
  {
    name: "Blackened Catfish Po'Boy",
    desc: "Gulf catfish, pickled jalapeños, house aioli on French bread",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
  },
  {
    name: "Andouille Jambalaya",
    desc: "House andouille, Gulf shrimp, chicken thigh in Creole sauce",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=600&fit=crop",
  },
  {
    name: "Bone-In Ribeye",
    desc: "Hand-cut, Cajun dry rub, finished with herb butter",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop",
  },
];

const socialPosts = [
  {
    img: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=600&h=600&fit=crop",
    caption: "Patio season is HERE 🌿",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&fit=crop",
    caption: "Crab cake just landed 🦀",
  },
  {
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop",
    caption: "Jambalaya Fridays 🔥",
  },
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop",
    caption: "Golden hour from the patio 🌅",
  },
  {
    img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=600&fit=crop",
    caption: "80+ whiskeys, pick your poison 🥃",
  },
  {
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=600&fit=crop",
    caption: "Ribeye night never misses 🥩",
  },
];

/* ─── Animation Variants ────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Sub-Components ────────────────────────────────────── */

function DishCard({ dish }: { dish: typeof featured[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={dish.img}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-serif font-bold text-amber mb-1">{dish.name}</h3>
          <p className="text-cream/75 text-sm leading-relaxed">{dish.desc}</p>
        </div>
      </div>
      <div className="absolute inset-0 ring-2 ring-amber/0 group-hover:ring-amber/40 rounded-2xl transition-all duration-300" />
    </motion.div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-7 shadow-md flex flex-col gap-4 border border-cream-dark/60"
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <StarRating rating={review.rating} />
      <p className="text-charcoal/80 italic leading-relaxed flex-grow">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="pt-4 border-t border-cream-dark flex items-center justify-between">
        <span className="font-semibold text-charcoal text-sm">{review.author}</span>
        <span className="text-xs text-charcoal/40 uppercase tracking-wide">{review.source}</span>
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const vibeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: vibeScroll } = useScroll({
    target: vibeRef,
    offset: ["start end", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const vibeY = useTransform(vibeScroll, [0, 1], ["-10%", "10%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1920&h=1200&fit=crop)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-amber font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Highlands of Elgin · Golf Course Views
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-cream mb-6 text-shadow leading-tight">
              Cajun Soul.{" "}
              <span className="text-amber block sm:inline">Whiskey Spirit.</span>
            </h1>
            <p className="text-lg sm:text-xl text-cream/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Authentic Southern flavors and 80+ whiskeys at the edge of the
              fairway. Elgin&apos;s boldest gastropub is waiting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Our Menu
            </Link>
            <a
              href="https://www.doordash.com/store/grumpy-goat-tavern-elgin-25853398/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-cream border-2 border-cream/30 hover:border-cream/60 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Order Delivery
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 inline-flex items-center gap-3 bg-charcoal-dark/70 backdrop-blur-md rounded-full px-6 py-3"
          >
            <StarRating rating={4.5} />
            <span className="text-cream font-semibold">4.5</span>
            <span className="text-cream/55 text-sm">785 Google Reviews</span>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <svg
            className="w-6 h-6 text-cream/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Quick Menu Bar */}
      <div className="bg-charcoal-dark py-4 sticky top-0 z-40 border-b border-amber/20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
          <span className="text-cream/70 text-sm font-medium hidden sm:block">
            Open daily for lunch &amp; dinner · 875 Sports Way, Elgin, IL
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+18479315950"
              className="text-amber hover:text-amber-dark text-sm font-semibold transition-colors"
            >
              (847) 931-5950
            </a>
            <span className="text-cream/20">|</span>
            <Link
              href="/menu"
              className="bg-amber hover:bg-amber-dark text-charcoal-dark px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="bg-charcoal py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { end: 80, suffix: "+", label: "Whiskeys", icon: "🥃" },
              { end: 785, suffix: "+", label: "Google Reviews", icon: "⭐" },
              { end: 5, suffix: ".0", label: "TripAdvisor Score", icon: "🏆" },
              { end: 154, suffix: "+", label: "Yelp Photos", icon: "📸" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-amber">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={0}
                  />
                </div>
                <div className="text-cream/55 text-sm mt-1 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Patio / Vibe Showcase */}
      <section ref={vibeRef} className="relative py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: vibeY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-amber font-semibold text-sm uppercase tracking-[0.25em] mb-4"
            >
              The Experience
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 text-shadow leading-tight"
            >
              Patio Season.{" "}
              <span className="text-amber">Game Day.</span>{" "}
              <span className="block">Date Night.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/80 text-lg mb-8 leading-relaxed"
            >
              Our wrap-around patio overlooks the 18th hole at the Highlands of
              Elgin — one of the most breathtaking dining views in the suburbs.
              Morning mimosas, afternoon games, evening cocktails. Any excuse to
              be outside.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                "Wrap-Around Patio",
                "Golf Course Views",
                "Live Sports",
                "Private Events",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-cream px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-amber font-semibold text-sm uppercase tracking-[0.25em]">
                From Our Kitchen
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 text-cream">
                Cajun Classics.{" "}
                <span className="text-amber">No Compromises.</span>
              </h2>
              <p className="text-cream/60 mt-4 max-w-xl mx-auto text-lg">
                Real Cajun and Creole cooking — bold, soulful, and made from
                scratch daily.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((dish) => (
                <DishCard key={dish.name} dish={dish} />
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-14">
              <Link
                href="/menu"
                className="bg-amber hover:bg-amber-dark text-charcoal-dark px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
              >
                Explore the Full Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-amber font-semibold text-sm uppercase tracking-[0.25em] mb-3"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-charcoal-dark leading-tight"
            >
              Where the Bayou Meets{" "}
              <span className="text-bourbon">the Fairway</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 leading-relaxed mb-5 text-lg"
            >
              Located within the Highlands of Elgin, the Grumpy Goat brings
              bold Cajun flavors to the suburbs. Our kitchen draws from the rich
              culinary traditions of Louisiana — andouille sausage, blackened
              fish, Creole spice blends — and makes them at home right here in
              Illinois.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 leading-relaxed mb-8 text-lg"
            >
              Whether you&apos;re wrapping up a round of golf, bringing the family
              for Sunday brunch, or settling in for game night on the patio with
              80+ whiskeys at your disposal — we built this place for you.
              Southern hospitality. Northern roots.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-bourbon font-semibold hover:text-amber transition-colors group text-lg"
              >
                Learn Our Story
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=560&fit=crop"
                alt="The Grumpy Goat patio with golf course views"
                width={700}
                height={560}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber rounded-xl p-6 shadow-xl">
                <div className="text-charcoal-dark font-serif font-bold text-2xl">
                  Est. 2010
                </div>
                <div className="text-charcoal-dark/70 text-sm mt-0.5">
                  Elgin&apos;s Cajun Landmark
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-charcoal-dark rounded-xl p-4 shadow-xl border border-amber/30">
                <div className="flex items-center gap-2">
                  <span className="text-amber text-2xl">⭐</span>
                  <div>
                    <div className="text-cream font-bold text-lg leading-none">
                      5.0
                    </div>
                    <div className="text-cream/50 text-xs">TripAdvisor</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-amber font-semibold text-sm uppercase tracking-[0.25em]">
                What People Say
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 text-charcoal-dark">
                Loved by <span className="text-bourbon">785+ Guests</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <StarRating rating={4.5} size="w-6 h-6" />
                <span className="text-charcoal font-semibold text-lg">
                  4.5 / 5
                </span>
                <span className="text-charcoal/40 text-sm">
                  across Google, Yelp &amp; TripAdvisor
                </span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-amber font-semibold text-sm uppercase tracking-[0.25em]">
                @GrumpyGoatTavern
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 text-cream">
                Follow the Goat 🐐
              </h2>
              <p className="text-cream/55 mt-3 text-lg">
                Life at the tavern, one plate and pour at a time.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {socialPosts.map((post, i) => (
                <motion.a
                  key={i}
                  variants={fadeUp}
                  href="https://www.facebook.com/GrumpyGoatTavern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden block"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={post.img}
                    alt={post.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-3">
                    <p className="text-cream text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                      {post.caption}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <a
                href="https://www.facebook.com/GrumpyGoatTavern"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1460cc] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-amber font-semibold text-sm uppercase tracking-[0.25em]">
                Find Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-3 text-charcoal-dark">
                Come Hang
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeUp}
                className="bg-charcoal-dark rounded-2xl p-8 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-serif font-bold text-amber text-xl mb-3">
                  Location
                </h3>
                <p className="text-cream/75 leading-relaxed">
                  875 Sports Way
                  <br />
                  Elgin, IL 60120
                  <br />
                  <span className="text-cream/50 text-sm">
                    Highlands of Elgin Golf Course
                  </span>
                </p>
                <a
                  href="https://maps.google.com/?q=875+Sports+Way+Elgin+IL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-amber hover:text-amber-dark text-sm font-semibold transition-colors"
                >
                  Get Directions →
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-charcoal-dark rounded-2xl p-8 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="font-serif font-bold text-amber text-xl mb-3">
                  Hours
                </h3>
                <div className="text-cream/75 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-6">
                    <span>Mon – Thu</span>
                    <span className="text-cream/50">11am – 10pm</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Friday</span>
                    <span className="text-cream/50">11am – 11pm</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Saturday</span>
                    <span className="text-cream/50">10am – 11pm</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Sunday</span>
                    <span className="text-cream/50">10am – 9pm</span>
                  </div>
                </div>
                <p className="text-cream/35 text-xs mt-4">
                  Hours may vary seasonally
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-charcoal-dark rounded-2xl p-8 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-serif font-bold text-amber text-xl mb-3">
                  Reservations
                </h3>
                <p className="text-cream/75 mb-5 leading-relaxed">
                  Walk-ins welcome. For large groups or private events, give us
                  a call.
                </p>
                <a
                  href="tel:+18479315950"
                  className="inline-block bg-amber hover:bg-amber-dark text-charcoal-dark px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  (847) 931-5950
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 parallax-hero"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1920&h=600&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4"
            >
              Ready to Dig In?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream/75 text-lg mb-10 max-w-xl mx-auto"
            >
              Come for the view. Stay for the food. Leave obsessed.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+18479315950"
                className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Call (847) 931-5950
              </a>
              <a
                href="https://www.doordash.com/store/grumpy-goat-tavern-elgin-25853398/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-cream border-2 border-cream/30 hover:border-cream/60 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Order Delivery
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
