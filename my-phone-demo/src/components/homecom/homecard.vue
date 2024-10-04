<template>
    <div style="overflow:hidden;">
        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; ">
                <swipe />
                <div style="border-radius: 10px;height: 60px; ">
                    <van-grid :column-num="5" :border="false">
                        <!-- 图标 1 -->
                        <van-grid-item class="van-grid-item1" icon="fire" icon-color="#d81e06" text="必看" />
                        <!-- 图标 2 -->
                        <van-grid-item icon="clock" icon-color="#1296db" text="实况" />
                        <!-- 图标 3 -->
                        <van-grid-item icon="info" icon-color="#d4237a" text="状态" />
                        <!-- 图标 4 -->
                        <van-grid-item icon="column" icon-color="#e6de43" text="日程" />
                        <!-- 图标 5 -->
                        <van-grid-item class="van-grid-item2" icon="chat" icon-color="#b53faa" text="咨询" />
                    </van-grid>
                </div>
            </div>

        </div>
        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; margin-top: 10px;">
                <postcard style="margin-top: 10px;" />
                <postcard style="margin-top: 10px;" />
                <postcard style="margin-top: 10px;" />
            </div>

        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
const active2 = ref(0)
</script>

<style lang="css" scoped>
.card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F6F6f7;
    padding-bottom: 0;
    padding: 12px;
}

.van-grid-item1,
.van-grid-item2 {
    border-radius: 10px;
    /* 添加圆角效果 */
    overflow: hidden;
    /* 防止圆角溢出 */
}
</style>