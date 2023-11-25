/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFEDDE",
        scondary: "#35CD8C",
        bgscondary: "#FFF5EC",
        text:{
          100:"#2E266F",
          200:"#707070",
          300:"#FE043C"
        },
        botton:{
          100: "#FE043C",
          200: "#2E266F"
        },
        border: "#3b1f1c",
        borderScondary: "#FE043C"
      },
      boxShadow: {
        '3xl': '0 60px 60px 25px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui']
      }
    },
  },
  plugins: [],
}

