<template>
    <div class="img" @click="goToUserPage">
        <van-image round width="1rem" height="1rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

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