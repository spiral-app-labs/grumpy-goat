import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grumpy-goat-redesign.vercel.app"),
  title: {
    default: "The Grumpy Goat | Cajun Kitchen & Whiskey Bar — Elgin, IL",
    template: "%s | The Grumpy Goat",
  },
  description:
    "Authentic Cajun & Creole cuisine with 40+ whiskeys at the Highlands of Elgin Golf Course. Enjoy blackened catfish, jambalaya, craft cocktails, and stunning patio views. Rated 4.5 stars.",
  keywords: [
    "Cajun restaurant Elgin IL",
    "whiskey bar Elgin",
    "Grumpy Goat tavern",
    "Creole food Illinois",
    "golf course restaurant",
    "best patio Elgin",
    "Southern food Elgin",
  ],
  openGraph: {
    title: "The Grumpy Goat | Cajun Kitchen & Whiskey Bar",
    description:
      "Authentic Cajun & Creole cuisine with 40+ whiskeys. Located at the Highlands of Elgin Golf Course.",
    url: "https://grumpy-goat-redesign.vercel.app",
    siteName: "The Grumpy Goat",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "The Grumpy Goat — Cajun Kitchen & Whiskey Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grumpy Goat | Cajun Kitchen & Whiskey Bar",
    description:
      "Authentic Cajun cuisine & 40+ whiskeys at Elgin's best patio. Rated 4.5 stars.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Grumpy Goat",
  image:
    "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&h=630&fit=crop",
  "@id": "https://grumpy-goat-redesign.vercel.app",
  url: "https://grumpy-goat-redesign.vercel.app",
  telephone: "(847) 931-5950",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "875 Sports Way",
    addressLocality: "Elgin",
    addressRegion: "IL",
    postalCode: "60123",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0372,
    longitude: -88.2813,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "785",
    bestRating: "5",
  },
  servesCuisine: ["Cajun", "Creole", "Southern"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G24YLHPRJ9"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-G24YLHPRJ9');`}
        </Script>
      </head>
      <body className="font-sans bg-cream text-charcoal">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
