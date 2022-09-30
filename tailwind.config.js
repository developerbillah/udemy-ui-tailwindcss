/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        DMSans : ['DM Sans', 'sans-serif'],
        DMSerif: ['DM Serif Text', 'serif'],
      }, 
    },
  },
  plugins: [],
}
