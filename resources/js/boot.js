import { createApp } from "vue";
import router from "./config/router";
import store from "./config/store";

import App from "./core/сomponents/app.vue";
import {instance} from "./config/axios";
import navBar from "./shop/сomponents/nav-bar.vue";

const app = createApp(App);
app.config.globalProperties.$query = instance;
app.component('nav-bar', navBar);
app.use(router);
app.use(store);
app.mount('#app');

