/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,jpg,png}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#f5f5f5',
        secondary1: '#1266dd',
        secondary2: '#f73859'

      },
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      },
      minWidth: {
        '200': '200px',
        '1100': '1100px'
      },
      cursor: {
        pointer: 'pointer'
      },
      backgroundImage: {
        tb: 'linear-gradient(0,#bdc14a,#c5ea0)'
      }
    },
  },
  plugins: [
  ],
}