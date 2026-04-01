"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&h=800&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-cream mb-4 text-shadow">
            Find <span className="text-amber">Us</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            Located in the Highlands of Elgin Golf Course
          </p>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollReveal>
            <div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                Visit Us
              </span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-8 text-charcoal-dark">
                Come Hungry, <span className="text-bourbon">Leave Happy</span>
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-charcoal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-charcoal-dark">Address</h3>
                    <p className="text-charcoal/70 mt-1">
                      875 Sports Way<br />
                      Elgin, IL 60123
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=875+Sports+Way+Elgin+IL+60123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-bourbon font-semibold text-sm mt-2 hover:text-amber transition-colors"
                    >
                      Get Directions
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-charcoal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-charcoal-dark">Phone</h3>
                    <a
                      href="tel:+18479315950"
                      className="text-charcoal/70 hover:text-amber transition-colors text-lg mt-1 block"
                    >
                      (847) 931-5950
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-charcoal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-charcoal-dark">Hours</h3>
                    <div className="mt-2 space-y-2 text-charcoal/70">
                      <div className="flex justify-between gap-8">
                        <span>Monday — Thursday</span>
                        <span className="font-medium">11am — 10pm</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Friday — Saturday</span>
                        <span className="font-medium">11am — 12am</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="font-medium">10am — 9pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18479315950"
                  className="bg-amber hover:bg-amber-dark text-charcoal-dark px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 text-center"
                >
                  Call Us
                </a>
                <a
                  href="mailto:info@grumpygoattavern.net"
                  className="bg-bourbon hover:bg-bourbon-dark text-cream px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Map */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.5!2d-88.2813!3d42.0372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s875+Sports+Way%2C+Elgin%2C+IL+60123!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Grumpy Goat Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Order Online */}
      <section className="py-16 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cream mb-4">
              Prefer to Order Online?
            </h2>
            <p className="text-cream/60 mb-8">
              Get your Cajun favorites delivered right to your door
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.doordash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Order on DoorDash
              </a>
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-cream border-2 border-cream/30 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Order on Uber Eats
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
