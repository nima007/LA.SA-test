// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

const storeMountPath = path.join(process.cwd(),"/server/files/temp")
// process.env.storeMountPath;
// process.env.storeMountPath;
const relStoreMountPath = storeMountPath?.slice(storeMountPath.search("server") - 1)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/main.css', '~/assets/tp-style.css'],
  modules: ['@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-file-storage','@sidebase/nuxt-auth'],
  app:{
    pageTransition: { name: 'page' },
    head:{
      titleTemplate: '%s - LASA',
      title: 'LASA',
      // meta: [
      //   { charset: 'utf-8' },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   { name: 'description', content: 'LASA' }
      // ]
    }
  },
  fileStorage: {
    mount: storeMountPath,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  auth: {
    globalAppMiddleware: true,
    baseURL: 'http://localhost:3000/api/auth'
    // baseURL: "https://lasa.liara.run/api/auth"
  },
  plugins: ["~/plugins/vue-tel-input.ts"],
  i18n: {
    vueI18n: "~/i18n.config.ts",
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
    // baseUrl: 'https://lasa.liara.run'
  },
  runtimeConfig: {
    mongoose_url: 
    // 'mongodb://root:55s7R1D4PyELefVzDV9Qh6FT@lasa-db:27017/my-app?authSource=admin',
    'mongodb://localhost:27017/LASA_db',

    storeMountPath,
    relStoreMountPath
  },
  nitro: {
    plugins: ['~/server/db/index.js'],
    storage: {
      productsImages: {
        driver: 'fs',
        base: 'public/uploads/products_images'
        // base: '.output/public/uploads/products_images',
      },
      blogFile: {
        driver: 'fs',
        base: 'public/uploads/blog'
        // base: '.output/public/uploads/blog',
      }
    }
  }
})