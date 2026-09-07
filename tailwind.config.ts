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
        ground: "var(--ground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--text)",
        "ink-muted": "var(--text-muted)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",

        // Data — the only saturated values, reserved for charts and figures.
        data: "var(--data)",
        "data-strong": "var(--data-strong)",
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
