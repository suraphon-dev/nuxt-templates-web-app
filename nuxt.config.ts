import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Kanit: [300, 400, 500, 700],
      Prompt: [300, 400, 500, 700],
    },
    display: 'swap',
  },
})
