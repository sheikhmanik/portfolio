/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Eater': 'Eater',
        'Shizuru': 'Shizuru',
        'ComicNeue': 'Comic Neue',
      },
      animation: {
        'gradient-x': 'gradient-x 2s ease-in-out infinite',
        float: "float 10s ease-in-out infinite",
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        float: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-40px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}