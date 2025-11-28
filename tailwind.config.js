/** @type {import('tailwindcss').Config} */
module.exports = {
  // This critical section tells Tailwind where to find your utility classes.
  // It MUST include all file types where you use Tailwind classes.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define a custom grid for the portfolio layout
      gridTemplateColumns: {
        'portfolio-desktop': '1.5fr 1fr 1fr', // 3 columns for large screens
        'portfolio-mobile': '1fr', // 1 column for mobile
      },
      // Custom colors used in the portfolio design
      colors: {
        'accent-neon': '#D0FF00', // The bright lime green used
        'dark-bg': '#121212', // The main background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the main font
      },
    },
  },
  plugins: [],
}