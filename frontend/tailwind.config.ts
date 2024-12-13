import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2A93D5",
        "secondary": "#F4A261",
        "tertiary": "#3C9A5F",
        "neutral": "#F5F5F5",
        "dark": "#2E2E2E",
      },
    },
  },
  plugins: [],
} satisfies Config;
