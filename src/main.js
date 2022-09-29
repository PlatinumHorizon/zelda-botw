import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css'

const appInstance = createApp(App)

appInstance.use(router)
appInstance.use(store)
appInstance.mount('#app')
