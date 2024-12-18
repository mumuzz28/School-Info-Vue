// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: { name: '123 ', email: '123@123.com' }
    }),
    actions: {
        setUser(user) {
            this.userInfo = user;
        }
    }
});