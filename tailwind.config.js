const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#fbd014",
        secondary: "#0d04f5",
      },
      transform: ["hover", "focus"],
      minHeight: {
        0: "0",
        "1/4s": "25vh",
        "1/2s": "50vh",
        "3/4s": "75vh",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
