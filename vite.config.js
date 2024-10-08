import { defineConfig } from 'vite';

console.log("Vite config has been loaded");

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
