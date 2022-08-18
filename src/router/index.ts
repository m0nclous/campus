import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import PlaceholderView from '../views/PlaceholderView.vue';

import { useUserStore } from '@/stores/user';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/personal-area',
            name: 'personal-area',
            component: PlaceholderView
        },
        {
            path: '/order/create',
            name: 'order-create',
            component: PlaceholderView
        },
        {
            path: '/price',
            name: 'price',
            component: PlaceholderView
        },
        {
            path: '/sales',
            name: 'sales',
            component: PlaceholderView
        },
        {
            path: '/promo',
            name: 'promo',
            component: PlaceholderView
        }
    ]
});

router.beforeEach((to) => {
    const publicPages = ['/login'];
    const userStore = useUserStore();

    if (!publicPages.includes(to.path) && !userStore.token) {
        return '/login';
    }
});

export default router;
