import { resolve } from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { defineConfig } from 'vite';
import MultiInput from 'rollup-plugin-multi-input';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: './assets',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: [resolve(__dirname, 'src/**/*.html')],
      plugins: [MultiInput.default()],
    },
  },
  plugins: [
    ViteEjsPlugin(
      { title: 'My Vite project!' },
      {
        ejs: {
          rmWhitespace: true,
        },
      }
    ),
  ],
});
