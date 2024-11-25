/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      

        primary: "#0a8375", 
        primaryGray: "#f9ac7d",

        secondary: "#4681F4", // blue
        secondaryGray: "#bbebff", //
      },
    },
  },
  plugins: [],
}