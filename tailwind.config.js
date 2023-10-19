/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'white-custom': '#F5F5F5',
        'dark-custom': '#232323',
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

