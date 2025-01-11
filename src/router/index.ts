// import path from 'path'
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
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/loginbycode',
    name: 'loginbycode',
    component: () => import('@/pages/loginbycode.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/pages/user/user.vue'),
    meta: { requiresAuth: true },
  },
  //用户信息
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('@/pages/user/userinfo.vue'),
    meta: { requiresAuth: true },
  },
  //更改用户头像
  {
    path: '/avatarurl',
    name: 'avatarurl',
    component: () => import('@/pages/user/avatarurl.vue'),
    meta: { requiresAuth: true },
  },
  //更改用户名
  {
    path: '/changeusername',
    name: 'changeusername',
    component: () => import('@/pages/user/changeusername.vue'),
    meta: { requiresAuth: true },
  },
  //更改用户手机号
  {
    path: '/changephone',
    name: 'changephone',
    component: () => import('@/pages/user/changephone.vue'),
    meta: { requiresAuth: true },
  },
  //更改用户密码
  {
    path: '/changepassword',
    name: 'changepassword',
    component: () => import('@/pages/user/changepassword.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('@/pages/publish/publish.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('@/pages/comment.vue'),
    meta: { requiresAuth: true }, // 需要身份验证
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/pages/search.vue'),
    meta: { requiresAuth: true }, // 需要身份验证
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
