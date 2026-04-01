import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find The Grumpy Goat at 875 Sports Way, Elgin, IL 60123. Hours, directions, phone, and online ordering. Located at the Highlands of Elgin Golf Course.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
