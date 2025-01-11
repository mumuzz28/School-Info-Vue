<template>
    <div class="post-card">
        <!-- 用户信息 -->
        <router-link to="/user" style="text-decoration: none; color: inherit;">
            <div class="user-info">

                <div style="display: flex; align-items: center;">
                    <van-image class="avatar" round width="40px" height="40px" :src="list.avatarUrl" />
                    <div class="user-details">
                        <div class="username">{{ list.username }}</div>
                        <div class="post-time">{{ list.createdAt }}</div>
                    </div>
                </div>
                <!-- <van-icon z-index="100" size="13px" name="arrow-down" /> -->
            </div>

            <!-- 帖子内容 -->
            <div class="post-content">
                {{ list.content }}
            </div>
            <!-- 帖子内容 -->
            <div class="post-img" v-if="list.postImg && list.postImg.length > 0">
                <!-- 帖子图片 -->
                <van-image v-for="(img, index) in list.postImg.slice(0, list.postImg.length)" :key="index" :src="img"
                    fit="cover" class="img-item" />
            </div>
        </router-link>
        <!-- 帖子操作 -->
        <div class="post-actions">
            <div class="action-item" @click="toggleFavorite">
                <van-icon :name="isFavorite ? 'star' : 'star-o'" color="#ffcc00" size="22px" />
                <span>{{ list.favorCount }}</span>
            </div>
            <div class="action-item" @click="goToCommentPage">
                <van-icon name="comment-o" color="blue" class="icon comment" size="22px" />
                <span>{{ list.commentCount }}</span>
            </div>
            <div class=" action-item" @click="toggleLike">
                <van-icon :name="isLiked ? 'good-job' : 'good-job-o'" color="#ff6666" size="22px" />
                <span>{{ list.likeCount }}</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
//不检查类型
// @ts-nocheck
import { ref, } from 'vue';
import { useRouter } from 'vue-router';
import type { dataList, FavorPostParams } from '../types/postcard';
import { defineProps } from 'vue';
import { favorPost, likePost } from '../api/postIndex';
import { useUserStore } from '../store/userstore';
import { log } from 'console';
import { showToast } from 'vant';
const userStore = useUserStore();
const props = defineProps<{
    list: dataList;
}>();

const router = useRouter();

const { list } = props;
const isFavorite = ref(false); // 是否收藏
const isLiked = ref(false);    // 是否点赞

// 跳转到评论页面
const goToCommentPage = async () => {
    await router.push({ name: 'comment' });
};
// 获取帖子状态
const fetchPostStatus = async () => {
    try {
        const status = await getPostStatus(list.postId);
        isFavorite.value = status.isFavorited;
        isLiked.value = status.isLiked;
    } catch (error) {
        console.error('获取帖子状态失败:', error);
    }
};


// 切换收藏状态
const toggleFavorite = () => {

    // 获取当前的 postId 和 userId
    const favorPostParams = {
        userId: userStore.userInfo.id,
        postId: list.postId,

    }
    const getFavorPost = async (data: FavorPostParams): Promise<string> => {
        try {

            await favorPost(favorPostParams).then(res => {
                if (res.data == 1) {
                    isFavorite.value = !isFavorite.value;
                    list.favorCount += isFavorite.value ? 1 : -1;
                    showToast(res.msg);
                } else {
                    console.log('取消收藏:', response);
                    showToast(res.msg);
                }
            });


        } catch (error) {
            console.error('Error favor post:', error);
            throw error;
        }
    }
    getFavorPost(favorPostParams);

};

// 切换点赞状态
const toggleLike = () => {
    isLiked.value = !isLiked.value;
    list.likeCount += isLiked.value ? 1 : -1;


};


</script>

<style scoped>
.post-content {

    margin-bottom: 10px;
    color: #333;
    font-size: 14px;
    display: -webkit-box;
    /* 使用弹性盒子模型 */
    -webkit-line-clamp: 3;
    /* 限制显示的行数 */
    -webkit-box-orient: vertical;
    /* 垂直排列 */
    overflow: hidden;
    /* 处理溢出内容 */
    text-overflow: ellipsis;
    /* 超出部分用省略号表示 */
}

.post-img {
    display: flex;
    justify-content: space-between;
}

.img-item {
    width: 32%;
    /* 固定大小 */
    height: 100px;
    /* 固定高度 */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 5px;
}

.post-card {
    min-width: 332px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    max-width: 600px;
    /* 设置最大宽度 */
    margin: 0;
    /* 使卡片居中，并设置左右外边距 */
}

.user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.avatar {
    margin-right: 10px;
}

.user-details {
    display: flex;
    flex-direction: column;
}

.username {
    font-weight: bold;
    font-size: 16px;
}

.post-time {
    color: #999;
    font-size: 12px;
}

.post-content {
    margin-bottom: 10px;
    color: #333;
    font-size: 14px;
}

.post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666;
}

.action-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s;
}

.action-item span {
    margin-left: 5px;
    font-size: 12px;
}

.action-item:hover {
    color: #1989fa;
    /* hover时更改颜色为Vant主题色 */
}
</style>