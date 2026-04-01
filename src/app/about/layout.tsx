import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Grumpy Goat — Elgin's favorite Cajun kitchen & whiskey bar at the Highlands of Elgin Golf Course. Authentic Southern food, 40+ whiskeys, and the best patio in town.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
