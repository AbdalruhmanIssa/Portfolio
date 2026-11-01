import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Served from https://abdalruhmanissa.github.io/Portfolio/ (the repo name, case-sensitive).
// If the repo is renamed to AbdalruhmanIssa.github.io, change base to '/'.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
