/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        newFont: ["Playwrite+NG+Modern"]
      }
    },
  },
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        'inset-black': 'inset 0 0 4px gray',
        'custom-heavy': '0 0 10px 1000px rgba(0, 0, 0,0.4)'
      }
    },
  },
  
}

