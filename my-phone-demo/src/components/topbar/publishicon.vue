<template>
    <div class="icon">
        <van-icon @click="toPublish" name="add-o" class="right-icon" />
    </div>

</template>

<script setup>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const toPublish = () => {
    // 这里是方法的具体实现
    router.push("/publish");
    console.log("toPublish")
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