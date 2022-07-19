import { createApp } from "vue";
import router from "./config/router";

import App from "./core/сomponents/app.vue";

const app = createApp(App);
app.mount('#app');
app.use(router);


