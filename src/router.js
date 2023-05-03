import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Portfolio from './components/pages/Portfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
    ]
})

export {router};