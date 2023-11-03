/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        darkTheme: '#2B2B2B',
        orange: '#D67300',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      screens: {
        'xsm': '300px',
        '2xsm': '200px',
      },
    },
  },
  plugins: [],
}
