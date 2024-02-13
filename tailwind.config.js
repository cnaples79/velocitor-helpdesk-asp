/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Pages/**/*.cshtml',
    './Views/**/*.cshtml',
    './Areas/**/*.cshtml',
  ],
  theme: {
    extend: {
      colors: {
        velblue: '#3097b9',
        velgreen: '#40bf89',
        velorange: '#f3a64b',
        velred: '#fd5a4b',
        velyellow: '#f8dc5a',
        velyellowgreen: '#d9e252',
        veldarkgray: '#21292e',
        velgray: '#263238',
        vellightgray: '#bbc1c7',
        vellink: '#56bfb5',
        officegreen: '#008000',
        officelightgreen: '#009e00',
      },
    },
  },
  plugins: [],
}

