/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'480px',
      },
      animation:{
        "text-spin":"text-spin 4s linear infinite",
        "myBlink" : "blink 1s linear infinite forwards",
        "grow": "grow 4s ease-in infinite alternate",
        "float": "float 5s linear infinite",
        "float-opposite": "float-opposite 6s linear infinite"
      }
    },
  },
  plugins: [],
}

