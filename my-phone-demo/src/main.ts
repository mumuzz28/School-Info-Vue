//@ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import "vant/lib/index.css"
import "amfe-flexible"

import router from "@/router/index.js"
createApp(App)
    .use(router)
    .mount('#app') 
