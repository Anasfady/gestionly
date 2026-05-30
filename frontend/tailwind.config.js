/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#FFF7E0", // Cream
          400: "#FFC122", // Yellow
          500: "#F59518", // Orange
          900: "#161B26", // Dark Navy
        },
      },
    },
  },
  plugins: [],
};
