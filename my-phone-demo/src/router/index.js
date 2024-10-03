import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index/index.vue'),
        // children: [
        //     {
        //         path: '/sourcetopbar',
        //         component: () => import('@/components/bra/sourcebar/sourcetopbar.vue'),

        //     }
        // ]
    },
    {
        path: '/source',
        component: () => import('@/pages/source/source.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/pages/main/main.vue'),
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


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router