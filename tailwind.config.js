/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Fuggles']
      },
      colors: {
        limon: "#08FB00"
      },
      screens: {
        'landscape-sm': { 'raw': '(max-width: 800px) and (orientation: landscape)' },
      },
  },
},
plugins: [],
}

