// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css:['~/assets/main.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'fa',
        iso: 'fa-IR',
        language: 'fa-IR',
        name: 'فارسی',
        dir: 'rtl'
      },
      {
        code: 'en',
        iso: 'en-US',
        language: 'en-US',
        name: 'English',
        dir: 'ltr'
      }
    ],
    strategy: 'prefix_and_default',
    baseUrl:'localhsot:3000'
  }
})