/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563eb', // Matches your ThreatMonitor progress bar
      },
      animation: {
        'progress': 'progress 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}