/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fffdf9',
        gold: '#967003',
        purple: '#5b0e5d',
        olive: '#443300',
        charcoal: '#252725',
        tempred: '#c92a2a',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
