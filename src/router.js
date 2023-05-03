import { createRouter, createWebHistory } from "vue-router";

import (createRouter)
import (createWebHistory)

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
    ]
})

export {router};