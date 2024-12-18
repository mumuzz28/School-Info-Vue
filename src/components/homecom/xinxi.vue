<template>
    <div v-for="(item, index) in commentList" :key="index" class="comment-card">
        <van-card>
            <!-- 用户信息 -->
            <div class="user-info">
                <van-image :src="defaultAvatar" width="36px" height="36px" round />
                <div class="user-details">
                    <div class="username">{{ item.username }}231312</div>
                    <div class="time">{{ item.time }}2132131</div>
                </div>
            </div>
            <!-- 评论内容 -->
            <div class="comment-content">{{ item.content }}</div>
            <!-- 点赞、评论 -->
            <div class="actions">
                <van-icon name="star-o" size="24" />
                <span>{{ item.comments }}</span>
                <van-icon name="like-o" size="24" @click="likeComment(index)" />
                <span>{{ item.likes }}</span>
            </div>
        </van-card>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import { showToast } from 'vant';

const defaultAvatar = 'https://via.placeholder.com/36'; // 用户默认头像

// 模拟后端数据
const commentList = ref([
    {
        username: '用户名',
        time: '1小时前',
        content: 'Freebiesbug 是一个设计资源平台，它提供免费的设计资源，包括 Axure 组件库、Sketch、Figma 等其他设计工具的模板。',
        likes: 1000,
        comments: 5,
        isLiked: false,
    },
]);

// 点赞功能
const likeComment = (index) => {
    const comment = commentList.value[index];
    if (!comment.isLiked) {
        comment.likes++;
        comment.isLiked = true;
        showToast('点赞成功');
    } else {
        comment.likes--;
        comment.isLiked = false;
        showToast('取消点赞');
    }
};

import axios from 'axios';

onMounted(async () => {
    try {
        const response = await axios.get('http://your-backend-api/comments');
        commentList.value = response.data; // 将数据赋值给 commentList
    } catch (error) {
        console.error('获取数据失败', error);
    }
});

</script>

<style>
.comment-card {
    margin: 10px;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-details {
    font-size: 14px;
    color: #888;
}

.username {
    font-weight: bold;
    color: #333;
}

.comment-content {
    margin-top: 10px;
    font-size: 16px;
    color: #555;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 10px;
}
</style>