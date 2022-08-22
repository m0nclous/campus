import { defineStore } from 'pinia';
import router from '@/router';

export default defineStore({
    id: 'user',

    state: () => ({
        token: localStorage.getItem('token')
    }),

    getters: {
        isAuth: (state) => !!state.token
    },

    actions: {
        async login() {
            this.token = 'mock';

            localStorage.setItem('token', this.token);

            await router.push('/');
        },

        async logout() {
            this.token = null;

            localStorage.removeItem('token');

            await router.push('/login');
        }
    }
});
