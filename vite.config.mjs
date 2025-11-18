import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/afshuportfolio/' : '/', // 👈 correct repo name
})
