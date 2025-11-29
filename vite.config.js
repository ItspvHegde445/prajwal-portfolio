import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The base property tells the browser where to find assets (CSS/JS)
  base: "/prajwal-portfolio/", 
})
