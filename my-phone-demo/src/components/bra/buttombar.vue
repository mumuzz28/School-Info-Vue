<template>
    <div class="bottom-bar">
        <van-tabbar v-model="active" router>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/source" icon="apps-o">资源</van-tabbar-item>
            <van-tabbar-item replace to="" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace to="/main" icon="contact-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    initialActive: {
        type: Number,
        default: 0
    }
});

const active = ref(props.initialActive);

watch(() => props.initialActive, (newValue) => {
    active.value = newValue;
});

</script>

<style lang="css" scoped>
.bottom-bar {
    position: fixed;
    z-index: 1000;
}
</style>