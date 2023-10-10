// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  modules: ['@pinia/nuxt','@nuxt/ui'],
 
  pinia: {
    autoImports: ['defineStore']
},
  imports: {
    dirs: ["stores"]
  }
})