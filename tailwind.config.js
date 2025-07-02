/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Playfair': 'Playfair Display',
        'Lato': 'Lato',
      },
      animation: {
        'gradient-x': 'gradient-x 2s ease-in-out infinite',
        floatX: "floatX 10s ease-in-out infinite",
        floatY: "floatY 10s ease-in-out infinite",
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
        floatX: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-40px)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}