<template>
    <div style="overflow:hidden;">
        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; ">
                <div style="display: flex;justify-content: space-between;align-items: center;height: 30px;">
                    <p style="font-size: 13px;font-weight: 600;margin-left: 10px;">有更新的关注</p>
                    <div style="display: flex;align-items: center;height: 30px;margin-right: 10px;">
                        <van-icon size="13px" name="arrow" />
                    </div>
                </div>


                <div style="border-radius: 10px;height: 60px; ">
                    <van-grid :column-num="5" :border="false">

                        <van-grid-item class="van-grid-item1" icon="fire" icon-color="#d81e06" text="必看" />

                        <van-grid-item icon="clock" icon-color="#1296db" text="实况" />

                        <van-grid-item icon="info" icon-color="#d4237a" text="状态" />

                        <van-grid-item icon="column" icon-color="#e6de43" text="日程" />

                        <van-grid-item class="van-grid-item2" icon="chat" icon-color="#b53faa" text="咨询" />
                    </van-grid>
                </div>
            </div>

        </div>
        <!-- 帖子卡片 -->
        <div class="card-body">
            <div v-for="i in 10" :key="i"
                style=" display: flex; background-color: white;width: 100%; border-radius: 10px; margin-top: 10px;">
                <postcard style="margin-top: 10px;" />
            </div>

        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';
const active = ref(0)
</script>

<style lang="css" scoped>
.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 水平居中 */
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