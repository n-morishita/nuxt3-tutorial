// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@invictus.codes/nuxt-vuetify',
    ['@nuxtjs/eslint-module', { lintOnStart: false }]
  ],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  }
})
