//@ts-nocheck
import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import "amfe-flexible";
import router from "@/router/index.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App).use(router).use(pinia).mount("#app");
