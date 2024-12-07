/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
      },
      container: {
        padding: "30px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1260px",
        },
      },
      colors: {
        primary: "#f37121",
        text: "#999999",
      },
    },
  },
  plugins: [],
};
