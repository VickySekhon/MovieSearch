/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2123",
        "div-one": "#f9d3b4",
      },
      width: {
        "movie-card": "310px"
      }, 
      height: {
        "movie-card": "460px"
      }, 
      boxShadow: {
        "movie-stationary": "0px 13px 10px -7px rgba(0, 0, 0, 0.1)",
        "movie-hover": "0px 30px 18px -8px rgba(0, 0, 0, 0.1)",
      }, 
    },
  },
  plugins: [],
}
