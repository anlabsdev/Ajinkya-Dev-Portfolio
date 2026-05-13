import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.mp3'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'root': path.resolve(__dirname, '.')
    }
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/\.(mp3|wav|ogg)$/i.test(assetInfo.name)) {
            extType = 'audio'
          } else if (/\.(glb|gltf|obj|fbx)$/i.test(assetInfo.name)) {
            extType = 'models'
          } else if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name)) {
            extType = 'images'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion'
    ],
    exclude: ['@react-spring/three']
  },
  // Server configuration
  server: {
    // Enable HMR
    hmr: true,
    // Optimize file watching
    watch: {
      usePolling: false,
    }
  }
})
