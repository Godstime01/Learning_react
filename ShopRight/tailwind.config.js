/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.jsx",
    "./src/components/**/*.jsx",
    "./index.html"
  ],
  theme: {
    colors : {
      "pink" : "#FB2E86",
      'blue' : {
        100 : "#2F1AC4",
        200 : "#151875",
        300 : "#F3F9FF",
        400 : "#3F509E",
        500 : "#151875",
        600 : '#EEEFFB'
      },
      "purple" : {
        100: "#7E33E0",
        200: "#9F63B5",
        300: "#E0D3F5"
      }, 
      'red' : "#FB2448",
      'white' : '#fff',
      'copy' : '#9DA0AE',
      'copy2' : '#E7E4F8'
    },
    extend: {},
    container : {
      center: true,
      padding: "2rem",
    }
  },
  plugins: [],
}

/*

#FB2E86 - pink
#151875 - navy blue
#3F509E - off navy blue
#7E33E0 - purple
#9F63B5 - off purple
#F3F9FF - sky blue
#E0D3F5 - panton purple
#FB2448 - red
#2F1AC4 - blue
#151875 - off blue

josefin sans
Lato

*/