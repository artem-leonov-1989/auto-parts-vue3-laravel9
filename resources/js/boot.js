import { createApp } from "vue";
import router from "./config/router";
import store from "./config/store";

import App from "./core/сomponents/app.vue";
import {instance} from "./config/axios";

const app = createApp(App);
app.config.globalProperties.$query = instance;
app.use(router);
app.use(store);
app.mount('#app');

