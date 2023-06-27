import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './vuetify'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount("#app")
