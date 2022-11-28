import { resolve } from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { defineConfig } from 'vite';
import MultiInput from 'rollup-plugin-multi-input';

export default defineConfig({
  root: resolve(__dirname, 'src/'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(__dirname, 'src/**/*.html'),
        /* resolve(__dirname, 'src/pages/test.html'), */
      ],
      plugins: [
        MultiInput.default()
      ]
    },
  },
  plugins: [
    ViteEjsPlugin(
      { title: 'My vue project!' },
      {
        ejs: {
          
        },
      }
    ),
  ],
});
