import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#parkour63')

console.log('%c Made with 🕑 and 💖 by Emmanuel Béziat', 'background: #181317; color: #ddd; padding: .5em 1em;')
