import { createApp } from 'vue';
const app = createApp(App);

import { createPinia } from 'pinia';
app.use(createPinia());

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);

import App from './App.vue';
import router from './router';
app.use(router);

import './scss/base.scss';

app.mount('#app');
