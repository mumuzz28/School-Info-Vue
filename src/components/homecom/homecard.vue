<template>

    <van-pull-refresh v-model="loading" @refresh="onRefresh">


        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; ">
                <swipe />
                <div style="border-radius: 10px;height: 65px; ">
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

        <!-- 帖子卡片 -->
        <div class="card-body" style="margin-bottom: 0.5rem;">
            <!-- <template v-for="item in dataList.slice(0, 60)" :key="item.id">

                <div class="postcard-container">
                    <keep-alive>
                        <postcard style="margin-top: 10px" :list="item" />
                    </keep-alive>
                </div>
            </template> -->
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <template v-for="item in list" :key="item.id">
                    <div class="postcard-container">
                        <keep-alive>
                            <postcard style="margin-top: 10px" :list="item" />
                        </keep-alive>
                    </div>
                </template>
            </van-list>

        </div>

        <backtop />

    </van-pull-refresh>
</template>


<script setup lang="ts">

import { on } from "events";
import { showToast } from "vant";
import { compile, onMounted, ref, } from "vue";
import {
    getAllPosts,
    likePost,
    favorPost
} from "../../api/postIndex/index";
import type { dataList } from "../../types/postcard";
const dataList = ref<dataList[]>([]);
const list = ref<dataList[]>([]);
const finished = ref(false);
const count = ref(0);
const loading = ref(false);

const getPostInfo = async (): Promise<dataList[]> => {
    try {
        const post = await getAllPosts();
        console.log(post);
        dataList.value = post;
        return post;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

onMounted(() => {
    console.log("获取所有的帖子信息");
    getPostInfo().then(() => {
        onLoad();
    });
});
/**
 * 加载数据函数
 * 
 * 该函数用于模拟数据加载过程它会在一段时间后从一个数据列表中取出一部分数据，
 * 更新到当前显示的列表中，并调整计数器和加载状态标志该函数主要用于无限滚动或
 * 分页加载场景,异步数据加载过程.
 */
const onLoad = () => {

    // 异步加载数据的过程，900毫秒后执行加载逻辑
    setTimeout(() => {
        list.value = list.value.concat(dataList.value.slice(count.value, count.value + 10));
        count.value += 10;
        if (count.value >= dataList.value.length) {
            finished.value = true;
        }
        loading.value = false;
    }, 900);
}


// 下拉刷新
const REFRESH_DELAY = 200; // 定义刷新延迟时间
const REFRESH_SUCCESS_MESSAGE = '刷新成功'; // 定义刷新成功的提示信息

const onRefresh = () => {
    if (count.value <= 0) { // 处理 count.value 为负数的情况
        loading.value = false;
        return;
    }

    try {
        setTimeout(() => {
            try {
                showToast(REFRESH_SUCCESS_MESSAGE);
            } finally {
                loading.value = false; // 确保无论如何都会关闭加载状态
            }
        }, REFRESH_DELAY);
    } catch (error) {
        console.error('刷新失败:', error); // 记录错误日志
        loading.value = false; // 确保无论如何都会关闭加载状态
    }
};





</script>



<style lang="css" scoped>
.scroll-container {
    height: 100vh;
    overflow-y: auto;
}

.card-body {
    display: flex;
    flex-direction: column;
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

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10000;
}
</style>