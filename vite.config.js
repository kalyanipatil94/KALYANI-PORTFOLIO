import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Remove the '1' here!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kalyani-portfolio/", 
})