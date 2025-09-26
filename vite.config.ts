import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: Define `process.env.API_KEY` to make the environment variable
  // available in the client-side code, as required by @google/genai SDK guidelines.
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
})
