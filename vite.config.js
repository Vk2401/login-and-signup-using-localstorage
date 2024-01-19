import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        table: resolve(__dirname, 'table.html'),
        tableJs: resolve(__dirname, './assets/js/table.js'),
      },
    },
  },
});