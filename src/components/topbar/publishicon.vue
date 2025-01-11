<template>
    <div class="icon">
        <van-icon @click="toPublish" name="add-o" class="right-icon" />
    </div>

</template>

<script setup>
import { showToast } from 'vant';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const toPublish = () => {
    if (localStorage.getItem('token') != null) {
        router.push({ path: '/publish' })
        console.log("toPublish")
    } else {
        showToast("请先登陆")
    }

}// 添加分号

</script>

<style lang="css" scoped>
.icon {
    display: inline-block;
}

.right-icon {
    font-size: 24px;
    margin-bottom: 15%;
    padding-right: 10px;
    color: #333;

}
</style>