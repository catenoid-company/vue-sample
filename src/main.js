import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'

axios.interceptors.request.use((config) => {
  const cookie = {}
  decodeURIComponent(document.cookie).split('; ').forEach((item) => {
    const temp = item.split('=')
    cookie[temp[0]] = temp[1]
  })
  config.headers['x-auth-token'] = cookie.token

  return config
})

createApp(App).use(store).use(router).mount('#app')
