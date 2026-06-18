import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ft-green": "#1a6e1a",
        "ft-green-dark": "#0d3d0d",
        "ft-green-light": "#2a8f2a",
        "ft-red": "#d42222",
        "ft-yellow": "#f5a611",
        "ft-cream": "#fdf6e3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
