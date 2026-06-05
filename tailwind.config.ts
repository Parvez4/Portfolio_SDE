import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        fog: "var(--fog)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        sage: "var(--sage)",
      },
      boxShadow: {
        glow: "0 18px 48px rgba(54, 63, 73, 0.08)",
        line: "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
