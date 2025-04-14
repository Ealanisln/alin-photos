import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true, // Forzar la re-optimización de dependencias
  },
  server: {
    port: 5173,
    strictPort: false, // Permitir cambiar de puerto si está en uso
    hmr: {
      overlay: true, // Mostrar errores en overlay
    },
    watch: {
      usePolling: true, // Mejor soporte para sistemas de archivos
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})
