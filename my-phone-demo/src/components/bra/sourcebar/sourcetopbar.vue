<template>
    <div>
        <van-tabs v-model:active="active">
            <van-tab to="" title="资源">
                <div style="background-color: #f6f6f7; ">

                </div>
            </van-tab>
            <van-tab to="" title="热门">
            </van-tab>
            <van-tab to="" title="资源广场"></van-tab>
        </van-tabs>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style lang="css" scoped></style>