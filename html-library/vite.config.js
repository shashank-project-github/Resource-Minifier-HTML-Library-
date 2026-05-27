import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'HtmlLibrary',
      fileName: 'html-library'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})

// import TerserPlugin from 'terser-webpack-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

