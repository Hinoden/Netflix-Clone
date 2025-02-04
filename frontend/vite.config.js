//original code
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     proxy:{
//       '/api': {
//         target: 'https://netflix-clone-api-xi.vercel.app',
//       }
//     }
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://netflix-clone-api-xi.vercel.app",
        changeOrigin: true,
        secure: true,  // Ensure SSL verification
        rewrite: (path) => path.replace(/^\/api/, '') // Removes `/api` prefix before forwarding
      },
    },
  },
});
