import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with the actual name of your GitHub repository
// For example, if your repo is 'prajwal-portfolio', use '/prajwal-portfolio/'
const base = process.env.NODE_ENV === 'production' ? '/prajwal-portfolio/' : '/';

// The 'base' option is CRITICAL for deployment to GitHub Pages (or any subdirectory)
// It ensures all asset paths (CSS, JS, images) are correctly prefixed.

export default defineConfig({
  plugins: [react()],
  // Sets the base public path when served in production
  base: base,
  
  // Optional: If you were still running into a CJS/ESM error with older Node versions,
  // this would fix it, but the postcss.config.cjs fix already addressed this.
  // css: {
  //   postcss: {
  //     plugins: {
  //       'postcss-import': {},
  //       'tailwindcss/nesting': {},
  //       tailwindcss: {},
  //       autoprefixer: {},
  //     }
  //   }
  // }
})