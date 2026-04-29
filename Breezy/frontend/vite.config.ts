import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'breezy-donovan.duckdns.org',
    ],
    host: true,
    hmr: {
      clientPort: 5173,
    },
  },
})
