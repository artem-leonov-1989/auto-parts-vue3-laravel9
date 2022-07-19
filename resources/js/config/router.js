import { createRouter, createWebHistory } from "vue-router";
import page from "../shop/сomponents/page.vue";

const routes = [
    {
        name: 'shop',
        path: '/',
        component: page
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
