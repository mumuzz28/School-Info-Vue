// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: { name: '', email: '' }
    }),
    actions: {
        setUser(user) {
            this.user = user;
        }
    }
});