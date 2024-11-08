import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '../client',  // Ensure Vite works inside the 'client' folder for the build
  plugins: [react()],
  build: {
    outDir: '../build',  
    emptyOutDir: true,   // Ensure the output directory is cleaned before building
  },
});
