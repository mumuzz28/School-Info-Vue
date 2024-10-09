
import path from 'path'
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/pages/home/home.vue'),
            },
            {
                path: '/source',
                component: () => import('@/pages/source/source.vue'),
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('@/pages/message/message.vue'),
            },
            {
                path: '/logged',
                name: 'logged',
                component: () => import('@/pages/main/logged.vue'),
            },
            {
                path: '/notlogin',
                name: 'notlogin',
                component: () => import('@/pages/main/notlogin.vue'),
            },
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/user/user.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login.vue'),
    },
    {
        path: '/publish',
        name: 'publish',
        component: () => import('@/pages/publish/publish.vue'),
    },
    {
        path: '/comment',
        name: 'comment',
        component: () => import('@/pages/comment.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/pages/search.vue'),
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router



