import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base para GitHub Pages (el repositorio se llama lading_page)
  base: '/lading_page/',
})
