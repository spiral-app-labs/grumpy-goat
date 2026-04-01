import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://grumpy-goat-redesign.vercel.app/sitemap.xml",
  };
}
