/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // Modo oscuro
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#6C757D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
