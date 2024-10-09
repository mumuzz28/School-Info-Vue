<template>
    <div class="bottom-bar">
        <van-tabbar v-model="active" router>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/source" icon="apps-o">资源</van-tabbar-item>
            <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace :to="isLogin ? { name: 'logged' } : { name: 'notlogin' }"
                icon="contact-o">我的</van-tabbar-item>
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
// 判断是否登录
const isLogin = ref(localStorage.getItem('token') != null)
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