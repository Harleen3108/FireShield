import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#0a0d12",
          900: "#0a0d12",
          800: "#0d1117",
          700: "#111827",
        },
        navy: {
          DEFAULT: "#0c1322",
          deep: "#091020",
          light: "#13203a",
        },
        ember: {
          DEFAULT: "#FF6B2B",
          light: "#FF8A52",
          dark: "#E55518",
        },
        alert: {
          DEFAULT: "#E53E3E",
          light: "#F56565",
        },
        saffron: "#FF9933",
        india: {
          saffron: "#FF9933",
          white: "#FFFFFF",
          green: "#138808",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-rajdhani)", "var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,107,43,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(255,107,43,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        flicker: "flicker 2.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
