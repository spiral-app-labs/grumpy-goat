import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore The Grumpy Goat's Cajun & Creole menu — blackened catfish po'boys, jambalaya, whiskey-glazed ribs, 40+ whiskeys, craft cocktails, and more in Elgin, IL.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
