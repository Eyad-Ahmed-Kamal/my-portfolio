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
        ink: "#0B0F17",
        "ink-surface": "#0F141F",
        "ink-card": "#141925",
        "cyan-accent": "#22D3EE",
        "emerald-accent": "#34D399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        float: "floatY 6s ease-in-out infinite",
        pulseGlow: "pulseDot 2s infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(52, 211, 153, 0.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(52, 211, 153, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(52, 211, 153, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
