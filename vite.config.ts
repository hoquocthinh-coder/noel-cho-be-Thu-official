import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/noel-cho-be-thu-official/",
  plugins: [react()],
});
