import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const checkDeplyment = process.env.NETLIFY === 'true' ? true : false;

export default defineConfig({
  plugins: [react()],
  base: checkDeplyment ? '/' : '/devbyrayyan/',
});