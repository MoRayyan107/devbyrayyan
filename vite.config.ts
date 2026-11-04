import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const checkDeplyment = process.env.NETLIFY === 'true' ? true : false;

export default defineConfig({
  plugins: [react()],
  base: checkDeplyment ? '/' : '/devbyrayyan/',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        vaultguard: fileURLToPath(new URL('./vaultguard.html', import.meta.url)),
      },
    },
  },
});
