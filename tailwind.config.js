const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        gray: colors.stone,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
