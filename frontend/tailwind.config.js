/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { 'xs': '375px' }, // Mobile optimization
      animation: {
        'scan': 'scan 3s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}