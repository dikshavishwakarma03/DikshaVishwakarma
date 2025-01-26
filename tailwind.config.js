/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        richBlack: 'rgb(10, 25, 47)',
      }
    },
  },
  plugins: [],
}
