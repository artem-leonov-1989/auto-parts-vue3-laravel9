import { createApp } from "vue";
import router from "./config/router";

import App from "./core/сomponents/app.vue";
import navBarShopper from "./core/сomponents/nav-bar-shopper.vue";

const app = createApp(App);
app.component('nav-bar-shopper', navBarShopper);
app.use(router);
app.mount('#app');
