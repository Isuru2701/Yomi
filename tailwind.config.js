/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#711db0",
        secondary: "#c21292",
        highlight: "#ef4040",
        warm: "#ffa732",
        success: "#98EA97",
        danger: "#EA9797",
        background: "#1F1F1F"
      }  
    },
  },
  plugins: [],
}