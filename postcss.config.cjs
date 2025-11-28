// This is the correct CommonJS syntax for a file named "postcss.config.cjs"
module.exports = {
  plugins: {
    // This plugin processes your CSS and generates all Tailwind utility classes.
    tailwindcss: {},
    // This plugin adds vendor prefixes (like -webkit-, -moz-) to ensure compatibility.
    autoprefixer: {},
  },
};