<template>

    <div>
        <tbs />
        <van-tabs v-model:active="active" sticky>
            <van-tab to="" title="关注">
                <focuscard />
            </van-tab>
            <van-tab title="首页">
                <homecard />
            </van-tab>
            <van-tab to="" title="热门">
                <firecard />
            </van-tab>
            <van-tab to="" title="话题">
                <subject />
            </van-tab>
            <van-tab to="" title="信息">信息</van-tab>
        </van-tabs>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const active = ref(1);
</script>

<style lang="css" scoped></style>