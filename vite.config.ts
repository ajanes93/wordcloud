import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/wordcloud/',
    plugins: [
        vue({
            reactivityTransform: true
        }),
        legacy({
            targets: ['defaults', 'Chrome >= 62', 'Safari >= 11', 'Edge >= 40', 'Firefox >= 57']
        })
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            reporter: ['cobertura']
        }
    }
})
