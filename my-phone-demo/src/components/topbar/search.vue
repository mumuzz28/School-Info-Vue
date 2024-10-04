<template>
    <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>


</template>

<script setup>
import { showToast } from 'vant'
import { ref } from 'vue';

const value = ref('');
const onSearch = (val) => showToast(val);
</script>

<style lang="css" scoped></style>