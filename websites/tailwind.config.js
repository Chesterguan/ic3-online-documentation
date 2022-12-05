/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // => @media (min-width: 996px) { ... }
      'lg': '996px',
    }
  },
  plugins: [],
}