/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#ffe4e6',
        'soft-purple': '#f3e8ff',
        'garden-pink': '#ff79c6',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        bubble: ['"DynaPuff"', 'cursive'],
        cute: ['"Mochiay Pop One"', 'sans-serif'],
        hand: ['Gaegu', 'cursive'],
        sans: ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
