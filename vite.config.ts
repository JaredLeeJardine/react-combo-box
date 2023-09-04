import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const port = 3000
export default defineConfig({
  assetsInclude: ['**/*.svg'],
  plugins: [react()],
  server: {
    port,
  }
})
