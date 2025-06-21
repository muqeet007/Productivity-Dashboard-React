/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['"Playwrite GB J"', 'cursive'], // Define the custom font
      },
    },
  },
  plugins: [],
}
