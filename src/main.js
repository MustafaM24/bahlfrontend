import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css'

// createApp(App).mount('#app')
import router from './router'

createApp(App).use(router).mount('#app')
