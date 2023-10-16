// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  app:{
    head:{
      title:"Add your notes",
      meta:[
        {
           name:"viewport",
          content:"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        },
        {
          name:"description",
          content:"You can add your notes easily and quickly"
        }
      ],
    }
  },
  alias: {
    '@': resolve(__dirname, '/'),

  },
  modules: ['@pinia/nuxt', '@nuxt/ui', 'nuxt-vuefire'],
  vuefire: {
    config: {
      apiKey: "AIzaSyB2o_TO9cFh5kDwpiMGohVNj7QMubjtpOU",
      authDomain: "addnotes-f8a58.firebaseapp.com",
      projectId: "addnotes-f8a58",
      storageBucket: "addnotes-f8a58.appspot.com",
      messagingSenderId: "838013368437",
      appId: "1:838013368437:web:4e6fdfe9d2db6a99b8a03c",
      measurementId: "G-20B200L5M7"
    },
  },

  pinia: {
    autoImports: ['defineStore']
  },
  imports: {
    dirs: ["stores","vuefire"]
  },
  plugins:["~/plugins/firebase/firestore"],

})