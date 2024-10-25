/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: "450px",
        xmd: "900px",
        xl: "1100px",
      },
      fontFamily: {
        Miracle: ["Miracle", "cursive"],
        HelveticaNeueLTStd: ["HelveticaNeueLTStd", "sans-serif"],
      },
      colors: {
        green: "#313F38",
        yellow: "#FCD043",
      },
      backgroundImage: {
        "room-page-bg": "url('./src/assets/roomp1.png')",
      },
    },
  },
  plugins: [],
};
