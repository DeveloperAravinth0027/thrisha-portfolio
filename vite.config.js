import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves this app at the domain root, but the GitHub Pages
// deployment lives under /thrisha-portfolio/. Vercel's build sets the
// VERCEL env var automatically, so use that to pick the right base.
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/thrisha-portfolio/',
  plugins: [react()],
})
