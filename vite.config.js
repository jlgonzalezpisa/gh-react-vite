import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jlgonzalezpisa.github.io/gs-react-vite',
  plugins: [react()],
})
