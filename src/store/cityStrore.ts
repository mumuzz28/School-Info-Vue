import { defineStore } from 'pinia'

export const cityStore = defineStore('cityStore', {
  state: () => ({
    city: '',
  }),
  actions: {
    setCity(city) {
      this.city = city
    },
  },
  getters: {
    getCity() {
      return this.city
    },
  },
})

  // 启用持久化插件
  persist: {
    enabled: true, // 是否启用持久化
    strategies: [
      {
        key: 'cityStore',
        storage: localStorage, // 持久化存储引擎
      },
    ], // 持久化策略
  },

