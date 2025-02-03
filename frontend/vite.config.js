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

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/proxy": {
        target: "https://netflix-clone-api-xi.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, '')
      },
    },
  }
})
