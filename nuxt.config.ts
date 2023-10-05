// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css"
  ],
  build: {
    transpile: ["primevue"]
  },
  ssr: false,
})
