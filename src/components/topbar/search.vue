<template>
    <div class="search">
        <van-search style="caret-color: transparent;  /* 隐藏光标 */" @click="toSearch" placeholder="请输入搜索关键词"
            input-align="center" />
    </div>



</template>

<script setup>
import { showToast } from 'vant'
import { ref, } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const value = ref('');
const onSearch = (val) => showToast(val);

const toSearch = () => {
    if (localStorage.getItem('token')) {
        router.push('/search')
    } else {
        showToast('请先登录')
    }
}

</script>

<style lang="css" scoped></style>