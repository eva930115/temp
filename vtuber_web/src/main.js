import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 導入 Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
