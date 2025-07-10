/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                floatX: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-40px)' },
                },
                floatY: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-40px)' },
                },
            },
            animation: {
                floatX: 'floatX 10s ease-in-out infinite',
                floatY: 'floatY 10s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};