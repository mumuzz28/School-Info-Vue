import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/user.d'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: '',
  }),
  actions: {
    setUserInfo(user) {
      this.userInfo = user
    },
    clearUser() {
      this.userInfo = ''
    },
  },
  getters: {
    getUserInfo() {
      return this.userInfo
    },
  },
  // 为用户状态启用持久化插件
  persist: {
    enabled: true, // 是否启用持久化
    strategies: [
      {
        key: 'user',
        storage: localStorage, // 持久化存储引擎
      },
    ], // 持久化策略
  },
})
