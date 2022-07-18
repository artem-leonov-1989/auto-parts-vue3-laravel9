import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'main-page',
        path: '/',
        component: () => import('../shopper/components/page.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
