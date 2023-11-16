import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
})

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')