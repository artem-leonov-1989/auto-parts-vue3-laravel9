import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'main-page',
        path: '/',
        component: () => import('../shopper/components/page.vue')
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: () => import('../shopper/components/contacts.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
