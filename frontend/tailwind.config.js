/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Defining your custom light blue brand colors
        brand: {
          light: '#E0F2FE', // Very light blue for backgrounds
          blue: '#00AEEF',  // Main logo blue
          dark: '#007BB5',  // Darker blue for hover states
        }
      },
    },
  },
  plugins: [],
}