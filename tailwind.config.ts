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
        vex: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          yellow: "#CCFF00",
          "yellow-alt": "#BFFF00",
          "dark-gray": "#121212",
          "card": "#1A1A1A",
          "mid-gray": "#555555",
          "rose": "#E8B4B8",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "10xl": ["10rem", { lineHeight: "0.9" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px rgba(204,255,0,0.3)" },
          "100%": { textShadow: "0 0 30px rgba(204,255,0,0.8), 0 0 60px rgba(204,255,0,0.3)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-yellow": "radial-gradient(ellipse at center, rgba(204,255,0,0.15) 0%, transparent 70%)",
        "radial-dark": "radial-gradient(ellipse at top, rgba(204,255,0,0.05) 0%, transparent 50%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
