module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // Add all files that use Tailwind classes
  ],
  theme: {
    extend: {
        fontFamily: {
        lexend: ['"Lexend Exa"', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
