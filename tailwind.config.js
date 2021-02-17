const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#00ffff',
        'secondary': '#00ffff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
