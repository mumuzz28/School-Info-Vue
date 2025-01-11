<template>
    <div class="img" @click="goToUserPage">
        <van-image round width="1rem" height="1rem" :src="userStore.userInfo.avatarUrl" />

    </div>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '@/store/userstore';
const userStore = useUserStore()

console.log(userStore.userInfo.avatarUrl)




const goToUserPage = () => {
    if (localStorage.getItem('token') != null) {
        router.push({ path: '/user' })
    } else {
        router.push({ path: '/login' })
    }
}
</script>

<style lang="css" scoped>
.img {
    margin-top: 0.2rem;
    margin-left: 10px;

}
</style>