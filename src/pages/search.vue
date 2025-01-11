<template>
    <div>
        <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" right-text=""
            @click-right="onClickRight" />

        <van-search v-model="searchQuery" placeholder="请输入搜索关键词" />
        <!-- 搜索提示 -->
        <van-empty image="search" description="" />
        <!-- <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in items" :key="item.id" :title="item.title" />
        </van-list> -->
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();


const searchQuery = ref('');
const loading = ref(false);
const finished = ref(false);
const items = ref([]);

// const onLoad = () => {
//     loading.value = true;
//     setTimeout(() => {
//         items.value.push(...Array.from({ length: 20 }).map((item, index) => items.value.length + index));
//         loading.value = false;
//     }, 1000);
// };


const onClickLeft = () => {
    router.go(-1);
    console.log("返回");
};

</script>

<style lang="scss" scoped></style>