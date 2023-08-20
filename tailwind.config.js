/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#94a3b8",
        ungu: "#5D50C6",
        pink: "#F85E9F",
        oren: "#FF5722",
        kuning: "#FACD49",
        grey: "#19182580",
        orenmuda: "#FACD4914",
        textDark2: "#D1D5DB",
        textDark: "#D1D5DB",
        bgLigth: "#E5E7EB",
        bgDark: "#374151",
        cardDark: "#1F2937",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    {
      autoprefixer: {},
    },
  ],
};
