import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Lista de rutas o anclas a pre-renderizar (basado en tus IDs)
const prerenderedRoutes = ['/', '/#home', '/#services', '/#about', '/#faq', '/#portfolio', '/#contact'];

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Opcional: Configura puntos de entrada si usas múltiples
    },
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
  // Configuración de pre-renderizado
  vitePluginPrerender: {
    routes: prerenderedRoutes,
    renderer: 'react',
    outputDir: 'dist', // Donde se guardan los archivos pre-renderizados
    renderAfterDocumentEvent: 'render-event', // Evento personalizado para esperar el renderizado
  },
});