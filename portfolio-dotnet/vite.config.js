import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// The site is served from the root of AbdalruhmanIssa.github.io.
// If the repo gets another name, set base to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
