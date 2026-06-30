import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'


import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico', // assuming you have one at public/favicon.ico
        'img/icons/favicon-16x16.png',
        'img/icons/favicon-32x32.png',
        'img/icons/apple-touch-icon.png',
        'img/icons/safari-pinned-tab.svg'
      ],
      manifest: {
        name: 'Spevník',
        short_name: 'Spevník',
        description: 'Spevník na sústredenia',
        theme_color: '#4a5565',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'img/icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rolldownOptions: {
      onLog (level, log, defaultHandler) {
        if (log.code === 'INVALID_ANNOTATION') {
          return
        }

        defaultHandler(level, log)
      }
    },
    manifest: true
  }
})
