<template>
    <van-nav-bar style="background-color: #F6F6f7;;" left-text="返回" left-arrow @click-left="onClickLeft" />

    <div class="card-body">
        <van-cell-group inset style="background-color: #F6F6f7; width: 100%; margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
                <van-image round :src="userStore.userInfo.avatarUrl"
                    style="width: 2.5rem; height: 2.5rem; border-radius: 50%;" @click="router.push('/userinfo')" />
                <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
                    <van-button @click="router.push('/userinfo')" style="border-radius: 0.5rem;" plain size="small"
                        type="default">编辑资料</van-button>
                    <van-button style="border-radius: 0.5rem;" plain size="small" type="default"><van-icon name="qr"
                            size="26" color="#999999" @click.stop="router.push('/qrcode')" /></van-button>
                </div>
            </div>
        </van-cell-group>
        <!-- 信息 -->
        <van-cell-group inset style="background-color: #F6F6f7; width: 100%; margin-top: 10px;">
            <div style="display: flex; flex-direction: column;margin-left: 0.3rem;">
                <span style="font-size: 28px;">{{ userStore.userInfo.username }}</span>
                <span style="margin-top: 0.3rem; color: #999999; font-size: 15px; " @click="router.push('/userinfo')">{{
                    userStore.userInfo.sign || "请设置你的签名" }}</span>
            </div>
            <div
                style="display: flex; justify-content: space-around; width: 100%; margin-top: 0.3rem; padding: 0.1rem 0;">
                <div style="text-align: center;">
                    <div style="font-size: 20px; font-weight: bold;">0</div>
                    <div style="color: #999; font-size: 14px;">获赞</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 20px; font-weight: bold;">0</div>
                    <div style="color: #999; font-size: 14px;">关注</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 20px; font-weight: bold;">0</div>
                    <div style="color: #999; font-size: 14px;">粉丝</div>
                </div>
            </div>
        </van-cell-group>

        <!-- 我的帖子 -->
        <van-cell-group inset style="background-color: #F6F6f7; width: 100%; margin-top: 10px;">
            <van-tabs v-model:active="activeTab" sticky>
                <van-tab title="我的帖子">
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                        <van-cell v-for="post in posts" :key="post.id">
                            <template #title>
                                <div class="post-title">{{ post.title }}</div>
                            </template>
                            <template #label>
                                <div class="post-date">{{ post.date }}</div>
                            </template>
                        </van-cell>
                    </van-list>
                </van-tab>
                <van-tab title="我的回复">
                    <van-list v-model:loading="replyLoading" :finished="replyFinished" finished-text="没有更多了"
                        @load="onReplyLoad">
                        <van-cell v-for="reply in replies" :key="reply.id">
                            <template #title>
                                <div class="reply-content">{{ reply.content }}</div>
                            </template>
                            <template #label>
                                <div class="reply-date">{{ reply.date }}</div>
                            </template>
                        </van-cell>
                    </van-list>
                </van-tab>
            </van-tabs>
        </van-cell-group>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userstore'
const userStore = useUserStore()
const router = useRouter()
const activeTab = ref(0)
const loading = ref(false)
const finished = ref(false)
const posts = ref([])
const replies = ref([])
const replyLoading = ref(false)
const replyFinished = ref(false)

const onClickLeft = () => {
    //返回点击的上一页
    router.back()
}

const columns = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
];
const fieldValue = ref('');
const showPicker = ref(false);
const pickerValue = ref([]);
const onConfirm = ({ selectedValues, selectedOptions }) => {
    showPicker.value = false;
    pickerValue.valueOf = selectedValues;
    fieldValue.value = selectedOptions[0].text;
};





const onLoad = () => {
    // 模拟加载数据
    setTimeout(() => {
        posts.value.push(...[
            { id: 1, title: '这是一个测试帖子', date: '2023-06-01' },
            { id: 2, title: '分享一些经验', date: '2023-06-02' }
        ])
        loading.value = false
        finished.value = true
    }, 1000)
}

const onReplyLoad = () => {
    setTimeout(() => {
        replies.value.push(...[
            { id: 1, content: '回复测试内容1', date: '2023-06-01' },
            { id: 2, content: '回复测试内容2', date: '2023-06-02' }
        ])
        replyLoading.value = false
        replyFinished.value = true
    }, 1000)
}

const onNewPost = () => {
    // 处理发帖逻辑
}
</script>

<style>
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    padding: 0.3rem;
    background-color: #F6F6f7;
    height: 100%;
}


.forum-user {
    padding-bottom: 50px;
}
</style>
