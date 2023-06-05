/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.jsx",
    "./index.html"
  ],
  theme: {
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "blue": {
        100: "hsl(200, 15%, 8%)",
        200: "hsl(209, 23%, 22%)",
        300: "hsl(207, 26%, 17%)"
      },
      "gray": {
        100: "hsl(0, 0%, 98%)",
        200: "hsl(0, 0%, 52%)",
      },
      extend: {},
    },
    plugins: [],
  }
}