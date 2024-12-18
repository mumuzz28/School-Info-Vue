<template>
    <div class="post-card">
        <!-- 用户信息 -->
        <router-link to="/user" style="text-decoration: none; color: inherit;">
            <div class="user-info">

                <div style="display: flex; align-items: center;">
                    <van-image class="avatar" round width="40px" height="40px" :src="list.postImg" />
                    <div class="user-details">
                        <div class="username">{{ list.author }}</div>
                        <div class="post-time">{{ list.createdAt }}</div>
                    </div>
                </div>
                <!-- <van-icon z-index="100" size="13px" name="arrow-down" /> -->
            </div>

            <!-- 帖子内容 -->
            <div class="post-content">
                {{ list.content }}
            </div>
        </router-link>
        <!-- 帖子操作 -->
        <div class="post-actions">
            <div class="action-item" @click="toggleFavorite">
                <van-icon :name="isFavorite ? 'star' : 'star-o'" color="#ffcc00" size="22px" />
                <span>{{ favoriteCount }}</span>
            </div>
            <div class="action-item" @click="goToCommentPage">
                <van-icon name="comment-o" color="blue" class="icon comment" size="22px" />
                <span>{{ commentCount }}</span>
            </div>
            <div class=" action-item" @click="toggleLike">
                <van-icon :name="isLiked ? 'good-job' : 'good-job-o'" color="#ff6666" size="22px" />
                <span>{{ likeCount }}</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { Post } from '../types/postcard';

const props = defineProps<{
    list: Post;
}>();

const router = useRouter();

const isFavorite = ref(false); // 是否收藏
const isLiked = ref(false);    // 是否点赞
const isContentLoaded = ref(false); // 内容是否加载完成

// 模拟数据加载
onMounted(() => {
    setTimeout(() => {
        isContentLoaded.value = true;
    }, 1500); // 假设1.5秒后数据加载完成
});

// 计算属性，根据 props 数据设置初始值
const favoriteCount = computed({
    get: () => props.list.favorCount,
    set: (value) => {
        // 如果需要更新父组件的数据，可以在这里发送事件
        emit('update-favorite-count', value);
    }
});

const likeCount = computed({
    get: () => props.list.likeCount,
    set: (value) => {
        emit('update-like-count', value);
    }
});

const commentCount = computed({
    get: () => props.list.commentCount,
    set: (value) => {
        emit('update-comment-count', value);
    }
});

const emit = defineEmits<{
    (event: 'update-favorite-count', value: number): void;
    (event: 'update-like-count', value: number): void;
    (event: 'update-comment-count', value: number): void;
}>();

const goToCommentPage = async () => {
    await router.push({ name: 'comment' }); // 跳转到评论页面
};

// 切换收藏状态
const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
    favoriteCount.value += isFavorite.value ? 1 : -1;
};

// 切换点赞状态
const toggleLike = () => {
    isLiked.value = !isLiked.value;
    likeCount.value += isLiked.value ? 1 : -1;
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