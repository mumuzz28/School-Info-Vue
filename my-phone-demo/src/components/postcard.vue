<template>
    <div class="post-card">
        <!-- 用户信息 -->
        <router-link to="/user" style="text-decoration: none; color: inherit;">
            <div class="user-info">

                <div style="display: flex; align-items: center;">
                    <van-image class="avatar" round width="40px" height="40px" src="https://example.com/avatar.png" />
                    <div class="user-details">
                        <div class="username">用户名</div>
                        <div class="post-time">1小时前</div>
                    </div>
                </div>
                <!-- <van-icon z-index="100" size="13px" name="arrow-down" /> -->
            </div>

            <!-- 帖子内容 -->
            <div class="post-content">
                Freebiesbug 是一个设计资源平台，它提供免费的设计资源，包括 Axure 组件库、Sketch、Figma 等其他设计工具的模板。
                Freebiesbug 是一个设计资源平台，它提供免费的设计资源，包括 Axure 组件库、Sketch、Figma 等其他设计工具的模板。
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
            <div class=" action-item">
                <van-icon :name="isLiked ? 'good-job' : 'good-job-o'" color="#ff6666" size="22px" />
                <span>{{ likeCount }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCommentPage = async () => {
    await router.push({ name: 'comment' }); // 跳转到评论页面
    this.isMenuOpen = false
};

const isFavorite = ref(false); // 是否收藏
const isLiked = ref(false);    // 是否点赞
const favoriteCount = ref(0);  // 收藏数
const likeCount = ref(1000);    // 点赞数
const commentCount = ref(5);   // 评论数

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
.post-card {
    background-color: white;
    padding: 10px;
    border-radius: 8px;

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