import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification with esbuild (default, faster)
    minify: 'esbuild',
    // Generate sourcemaps for production debugging (optional)
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide': ['lucide-react']
        }
      }
    },
    // Increase chunk size warning limit (default is 500kb)
    chunkSizeWarningLimit: 1000
  }
})
