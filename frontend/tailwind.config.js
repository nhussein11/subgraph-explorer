module.exports = {
  darkMode: 'class', // enable dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ], // add this line
  theme: {
    extend: {
      colors: {
        'dark-blue': '#22283D',
        white: '#ffffff',
      },
    },
  },
}
