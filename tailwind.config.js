/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'Geomanist': ['"Geomanist"', 'sans-serif'],
      'geomanistregular': ['geomanistregular', 'sans-serif'],
    },
    extend: {
      colors: {
        "yellow-color": "#F0BF4C",
        "blue-color": "#3079ed",
        "success-500": "rgb(79, 255, 138)"
      }
    }
  },
  plugins: []
};
