import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin para copiar index.html a 404.html después del build (para GitHub Pages)
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = join(__dirname, 'dist')
        copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'))
      }
    }
  ],
  base: '/viaja-por-wpp',
})

