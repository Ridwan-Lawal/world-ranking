/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        lightGrays: "#D2D5DA",
        grays: "#6C727F",
        darkGrays: "#282B30",
        veryDarkGrays: "#1B1D1F",
        softBlue: "#4E80EE",
      },

      screens: {
        md: "830px",
      },

      backgroundImage: {
        heroImage: "url('/assets/hero-image-wr.jpg')",
      },
      backdropFilter: ["responsive"],
    },
  },
  plugins: [],
};
