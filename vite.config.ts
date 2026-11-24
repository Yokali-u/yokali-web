import path from 'node:path'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(import.meta.dirname, 'src/app'),
      '@pages': path.resolve(import.meta.dirname, 'src/pages'),
      '@widgets': path.resolve(import.meta.dirname, 'src/widgets'),
      '@features': path.resolve(import.meta.dirname, 'src/features'),
      '@entities': path.resolve(import.meta.dirname, 'src/entities'),
      '@shared': path.resolve(import.meta.dirname, 'src/shared'),
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
