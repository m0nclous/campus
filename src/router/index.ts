import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/views/HomeView.vue');
const LoginView = () => import('@/views/LoginView.vue');
const PriceListView = () => import('@/views/PriceListView.vue');
const SalesView = () => import('@/views/SalesView.vue');
const PromoView = () => import('@/views/PromoView.vue');
const PlaceholderView = () => import('@/views/PlaceholderView.vue');

import useUserStore from '@/stores/user';

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
            path: '/price-list',
            name: 'price',
            component: PriceListView
        },
        {
            path: '/sales',
            name: 'sales',
            component: SalesView
        },
        {
            path: '/promo',
            name: 'promo',
            component: PromoView
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
