<template>

    <div>
        <!-- 头部导航 -->
        <tbs />
        <van-tabs v-model:active="active" sticky>
            <van-tab title="关注">
                <focuscard />
            </van-tab>
            <van-tab title="首页">
                <homecard />
            </van-tab>
            <van-tab title="热门">
                <firecard />
            </van-tab>
            <van-tab title="话题">
                <subject />
            </van-tab>
            <van-tab title="信息">
                <xinxi />
            </van-tab>
        </van-tabs>

    </div>


</template>

<script setup>
import { ref } from 'vue';

const active = ref(1);



</script>

<style lang="css" scoped></style>