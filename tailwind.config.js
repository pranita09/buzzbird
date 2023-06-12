/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#0d9488",
      lightPrimary: "#ccfbf1",
      darkPrimary: "#115e59",
      lightGrey: "#f2f2f2",
      darkGrey: "#333333",
      red: "#ff2c2c",
    },
    fontFamily: {
      sans: ["Poppins", "Arial"],
      serif: [],
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
