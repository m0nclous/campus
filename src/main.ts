import { createApp } from 'vue';
const app = createApp(App);

import { createPinia } from 'pinia';
app.use(createPinia());

import App from './App.vue';
import router from './router';
app.use(router);

import './scss/base.scss';
import './scss/main.scss';

app.mount('#app');
