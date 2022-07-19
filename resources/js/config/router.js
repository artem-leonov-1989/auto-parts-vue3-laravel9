import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'main-page',
        path: '/',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
