/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <-- CRITICAL: Required for Light/Dark mode to work
  theme: {
    extend: {
      colors: {
        // Core Gestionly Brand Palette
        brand: {
          50: "#FFFDF5", // Lightest cream
          100: "#FFF7E0", // Cream (Original)
          200: "#FFEAA3", // Soft yellow
          300: "#FFD666", // Bright yellow
          400: "#FFC122", // Yellow (Original)
          500: "#F59518", // Orange (Original)
          600: "#D97706", // Darker orange (Primary Buttons)
          700: "#B45309", // Deep orange (Hover States)
          800: "#2A3241", // Slate-Navy
          900: "#161B26", // Dark Navy (Original)
          950: "#0B0E14", // Deepest Navy
        },
        // Cyberpunk/Neon Palette for Authentication & Landing Page
        cyber: {
          400: "#00e2ff", // Neon Cyan
          500: "#00b8d4", // Deep Cyan
        },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "blur-in": "blurIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spin-glow":
          "spinGlow 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blurIn: {
          "0%": {
            opacity: "0",
            filter: "blur(12px)",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        spinGlow: {
          "0%": { transform: "rotate(0deg)", boxShadow: "0 0 10px #00e2ff" },
          "50%": { boxShadow: "0 0 30px #00e2ff, inset 0 0 10px #00e2ff" },
          "100%": {
            transform: "rotate(360deg)",
            boxShadow: "0 0 10px #00e2ff",
          },
        },
      },
    },
  },
  plugins: [],
};
