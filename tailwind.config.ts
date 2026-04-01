import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: { DEFAULT: "#D4A24E", light: "#E8C478", dark: "#B8862E" },
        bourbon: { DEFAULT: "#8B4513", light: "#A0522D", dark: "#6B3410" },
        charcoal: { DEFAULT: "#2D2D2D", light: "#3D3D3D", dark: "#1D1D1D" },
        cream: { DEFAULT: "#FFF8F0", dark: "#F5EDDF" },
        accent: { DEFAULT: "#C62828", light: "#E53935", dark: "#8E0000" },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
