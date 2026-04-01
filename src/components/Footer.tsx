import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-charcoal-dark font-bold text-lg font-serif">
                GG
              </div>
              <h3 className="text-xl font-serif font-bold text-amber">
                The Grumpy Goat
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Cajun Kitchen & Whiskey Bar nestled in the Highlands of Elgin Golf
              Course. Serving authentic Southern flavors with a 40+ whiskey
              selection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>875 Sports Way<br />Elgin, IL 60123</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18479315950" className="hover:text-amber transition-colors">
                  (847) 931-5950
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-amber font-serif text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-cream/60">11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-cream/60">11am - 12am</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream/60">10am - 9pm</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center hover:bg-amber transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-charcoal-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center hover:bg-amber transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-charcoal-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center hover:bg-amber transition-colors group"
                aria-label="Yelp"
              >
                <svg className="w-4 h-4 text-cream/60 group-hover:text-charcoal-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.105c-.62.138-.385.811.09.811l5.093.154c.376.012.503-.394.19-.583l-.378-.258v-.001zm-1.736-3.301l-4.585 2.36c-.567.292-.197.911.283.747l4.878-1.663c.357-.122.328-.577-.06-.623l-.516-.079v.258zm-4.21-3.317l-2.02 4.588c-.248.565.407.87.742.427l3.396-4.5c.232-.307-.018-.646-.388-.536l-.73.195-.001.826v-1zm-5.032-3.09L7.36 7.768c-.292.564.341.907.72.49l3.816-4.198c.261-.287.025-.666-.354-.573l-.56.137-.047.262zm-3.554 6.837l1.333 4.93c.165.609.878.453.878-.115l-.004-5.116c-.001-.382-.446-.48-.642-.148l-.252.43.687.019z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} The Grumpy Goat. All rights reserved.</p>
          <p>
            Located in the Highlands of Elgin Golf Course
          </p>
        </div>
      </div>
    </footer>
  );
}
