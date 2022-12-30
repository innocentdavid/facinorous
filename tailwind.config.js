/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-color": "#F0BF4C",
        "blue-color": "#0050DB",
        "success-500": "rgb(79, 255, 138)",
        "primary-500": "#FBAE31",
        "secondary-500": "#0050DB"
      }
    }
  },
  plugins: []
};
