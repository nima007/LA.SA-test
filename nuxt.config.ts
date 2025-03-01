// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/main.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-file-storage'],
  fileStorage: {
    mount: process.env.storeMountPath,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  plugins: ["~/plugins/vue-tel-input.ts"],
  i18n: {
    vueI18n: "./i18n.config.ts",
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
    baseUrl: 'localhsot:3000'
  },
  runtimeConfig: {
    mongoose_url: 'mongodb://localhost:27017/LASA_db',
    storeMountPath: process.env.storeMountPath,
    relStoreMountPath:  process.env.storeMountPath?.slice(process.env.storeMountPath.search("server") - 1)
  },
  nitro: {
    plugins: ['~/server/db/index.js'],
    storage: {
      productsImages: {
        driver: 'fs',
        base: 'public/uploads/products_images'
      }
    }
  }
})