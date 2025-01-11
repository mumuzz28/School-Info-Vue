<template>
    <van-cell v-for="item in list" :key="item" :title="item" /> <van-back-top />
</template>


<script setup>
//返回顶部
const list = [...Array().keys()];
</script>

<style></style>