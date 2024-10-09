<template>

    <div class="top-bar">

        <div style="display: flex; justify-content: space-around; background-color: none;">
            <van-icon @click="toSearch" style="font-size:x-large;margin-right: 0.3rem;margin-top:0.45rem ;"
                name="search" />
            <!-- 右边的图标 -->
            <publishicon />
        </div>

    </div>
    <div style=" padding-bottom: 0;padding:0.3rem ; background-color: #F6F6f7;height: 100%;">
        <headimg />
    </div>
    <!-- 热榜卡片 -->
    <div class="card-body">
        <div style=" background-color: white;width: 100%; border-radius: 10px; ">
            你好
        </div>
        <div style=" background-color: white;width: 100%; border-radius: 10px; ">
            <div style="display: flex;justify-content: space-between;align-items: center;height: 30px;">
                <div style="display: flex;align-items: center;">
                    <van-icon style="margin-left: 10px;" name="fire" size="13" color="red" />
                    <p style="font-size: 13px;font-weight: 600;margin-left: 5px;">实时热榜</p>
                </div>
                <van-button plain type="primary" size="mini" style="border: none; margin-right: 10px;">更多</van-button>
            </div>
        </div>

    </div>




</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const back = () => {
    router.back();
}
const toSearch = () => {
    if (localStorage.getItem('token')) {
        router.push('/search')
    } else {
        showToast('请先登录')
    }
}
</script>

<style lang="css" scoped>
.top-bar {
    display: flex;
    justify-content: right;
    /* 水平居中 */
    align-items: center;
    padding: 0.2rem;
    background-color: #F6F6f7;

}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F6F6f7;
    padding-bottom: 0;
    padding: 0.3rem;
}
</style>