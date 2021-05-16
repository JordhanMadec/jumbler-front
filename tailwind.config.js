const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    'src/**/*.ts',
    'src/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.teal,
        error: colors.rose,
        warn: colors.amber,
        success: colors.emerald,
        info: colors.blue,
        gray: colors.coolGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
