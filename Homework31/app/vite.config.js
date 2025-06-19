import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,         // позволяет использовать test/expect без импорта
    environment: 'jsdom',  // симуляция браузера
    setupFiles: './src/setupTests.js' // можно переименовать, если надо
  }
});