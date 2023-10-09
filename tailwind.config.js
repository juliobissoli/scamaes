/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    // require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#E9FFEF",
          200: "#B3FFCA",
          300: "#62FF91",
          400: "#33DF67",
          500: "#04D361",
          600: "#0DAB54",
          700: "#00A033",
          800: "#046B25",
          900: "#004717",
        },
      },
    },
    fontFamily: {
      default: ["Poppins", "sans-serif"],
    },
  },
  // plugins: [],
};
