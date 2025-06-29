/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pacifico': 'Pacifico',
        'Comic-Neue': 'Comic Neue',
        'Sriracha': 'Sriracha',
      }
    },
  },
  plugins: [require("daisyui")],
}