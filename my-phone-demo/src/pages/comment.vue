<template>
    <div class="comment-page">
        <!-- 顶部返回按钮和标题 -->
        <div class="header">
            <van-icon name="arrow-left" @click="goBack" />
            <span class="title">评论</span>
        </div>

        <!-- 评论列表 -->
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多评论了" @load="loadComments">
            <van-cell v-for="(comment, index) in comments" :key="index" :title="comment.userName">
                <template #icon>
                    <van-image :src="comment.avatar" width="40px" height="40px" round />
                </template>
                <template #label>
                    <div class="comment-content">{{ comment.content }}</div>
                    <div class="comment-actions">
                        <van-icon name="like-o" @click="likeComment(index)" />
                        <span>{{ comment.likes }}</span>
                        <van-icon name="comment-o" @click="replyComment(comment)" />
                        <span>回复</span>
                    </div>
                </template>
            </van-cell>
        </van-list>

        <!-- 评论输入框 -->
        <van-field v-model="newComment" placeholder="发表你的评论..." right-icon="send" @click-right-icon="submitComment" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 模拟的评论数据
const comments = ref([
    { userName: '用户A', avatar: 'https://example.com/avatar1.png', content: '这是一个很棒的帖子！', likes: 10 },
    { userName: '用户B', avatar: 'https://example.com/avatar2.png', content: '感谢分享！', likes: 5 },
    // 更多评论...
]);

const loading = ref(false);
const finished = ref(false);
const newComment = ref('');

// 返回上一页
const goBack = () => {
    router.go(-1);
};

// 模拟加载评论
const loadComments = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        finished.value = true;
    }, 1000);
};

// 点赞评论
const likeComment = (index) => {
    comments.value[index].likes += 1;
};

// 回复评论
const replyComment = (comment) => {
    newComment.value = `回复 @${comment.userName}：`;
};

// 提交评论
const submitComment = () => {
    if (newComment.value.trim()) {
        comments.value.push({
            userName: '我',
            avatar: 'https://example.com/my-avatar.png',
            content: newComment.value,
            likes: 0,
        });
        newComment.value = '';
    }
};
</script>

<style scoped>
.comment-page {
    padding: 16px;
}

.header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.header .title {
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
}

.comment-content {
    color: #333;
    margin-bottom: 5px;
}

.comment-actions {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 12px;
}

.comment-actions van-icon {
    margin-right: 5px;
    font-size: 16px;
}

van-field {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
}
</style>