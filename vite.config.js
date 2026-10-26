import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const page = (file) => fileURLToPath(new URL(file, import.meta.url))

// One HTML entry per page keeps the existing URLs (/, /privacy.html, /terms.html)
// and lets the site be hosted on any static host without routing rules.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: page('index.html'),
        privacy: page('privacy.html'),
        terms: page('terms.html'),
      },
    },
  },
})
