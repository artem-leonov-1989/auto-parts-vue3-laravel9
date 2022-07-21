import { createRouter, createWebHistory } from "vue-router";
import page from "../shop/сomponents/page.vue";
import basket from "../shop/сomponents/basket.vue";

const routes = [
    {
        name: 'shop',
        path: '/',
        component: page
    },
    {
        name: 'basket',
        path: '/basket',
        component: basket
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
