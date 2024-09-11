import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '/src/assets/pdf', // Der Quellordner oder die Datei(en), die kopiert werden sollen
          dest: '../static/assets',
        }
      ]
    })
  ],
  build: {
    outDir: '../static/', // Der Zielordner für die Build-Ausgabe
    emptyOutDir: false,   // Entfernt den Inhalt des Ausgabeordners vor dem neuen Build
    sourcemap: true      // Erzeugt Sourcemaps für Debugging
  },
  server: {
    proxy: {
      '/ask': 'http://localhost:5000',
      '/chat': 'http://localhost:5000'
    }
  }
});