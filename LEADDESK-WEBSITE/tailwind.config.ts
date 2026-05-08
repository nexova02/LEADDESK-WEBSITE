import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#ffffff",
          100: "#f9f9f9",
          150: "#f5f5f5",
          200: "#e0e0e0",
          300: "#d1d1d1",
          400: "#999999",
          500: "#888888",
          600: "#808080",
          700: "#555555",
          800: "#333333",
          850: "#2a2a2a",
          900: "#1a1a1a",
          950: "#0f0f0f",
          1000: "#000000"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.08)",
        medium: "0 4px 12px rgba(0,0,0,0.12)",
        strong: "0 8px 24px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
