// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Chuanxin - China's QQLink",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Chuanxin - China\'s QQLink. Chat & Translate made simple.' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }, // ✅ your favicon
        { rel: 'apple-touch-icon', href: '/icon.png' },        // ✅ for iOS devices
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  }
})
