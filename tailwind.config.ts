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
        // Chrome — warm achromatic neutrals, no saturation anywhere.
        // `<alpha-value>` is what lets `bg-ground/70` and friends work.
        ground: "rgb(var(--ground-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        ink: "rgb(var(--text-rgb) / <alpha-value>)",
        "ink-muted": "rgb(var(--text-muted-rgb) / <alpha-value>)",
        rule: "rgb(var(--text-rgb) / 0.1)",
        "rule-strong": "rgb(var(--text-rgb) / 0.18)",

        // Data — the only saturated values, reserved for charts and figures.
        data: "rgb(var(--data-rgb) / <alpha-value>)",
        "data-strong": "rgb(var(--data-strong-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
