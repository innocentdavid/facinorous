/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F0BF4C",
        blue: "#3079ed",
        "success-500": "rgb(79, 255, 138)"
      }
    }
  },
  plugins: []
};
