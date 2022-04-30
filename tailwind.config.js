//const plugin = require('tailwindcss/plugin')


module.exports = {
  mode: "jit",

  content: [
    "./src/**/*.{js,css}",
    "./components/**/*.{js,css}",
    "./templates/**/*.{html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],
}