import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/abigail-website/', // 👈 VERY IMPORTANT: match your GitHub repo name
})
