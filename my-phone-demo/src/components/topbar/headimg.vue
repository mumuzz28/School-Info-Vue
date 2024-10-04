<template>
    <div class="img" @click="goToUserPage">
        <van-image round width="1rem" height="1rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToUserPage = () => {
    console.log('goToUserPage')
    router.push({ path: '/user' })
}
</script>

<style lang="css" scoped>
.img {
    margin-top: 0.2rem;
}
</style>