<template>
    <div class="message-page">
        <van-nav-bar title="消息"></van-nav-bar>

        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多信息" @load="onLoad">
            <van-swipe-cell :before-close="beforeClose" v-for="message in messages" :key="message.id"
                :title="message.text">
                <van-cell :border="false" title="单元格" value="内容" />
                <template #right>
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
        </van-list>
    </div>

    <van-list :finished="finished" @load="onLoad" v-model:loading="loading">
        <div v-for="(items, indexs) in dataNewList" :key="indexs">
            {{ items.content }}
        </div>
    </van-list>


    <backtop />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const messages = ref([]);
const loading = ref(false);
const finished = ref(false);




const onLoad = () => {
    // Simulate loading messages
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            messages.value.push({ id: messages.value.length, text: `Message ${messages.value.length + 1}` });
        }
        loading.value = false;
        if (messages.value.length >= 10) {
            finished.value = true;
        }
    }, 1000);
};

// position 为关闭时点击的位置
const beforeClose = ({ position }) => {
    switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
            return true;
        case 'right':
            return new Promise((resolve) => {
                showConfirmDialog({
                    title: '确定删除吗？',
                }).then(() => resolve(true))
                    .catch(() => resolve(false));
            });
    }
}
</script>

<style lang="scss" scoped></style>
<style lang="scss" scoped>
.message-page {
    min-height: 100vh;
    background: #f7f8fa;

    .van-nav-bar {
        background: #fff;
        border-bottom: 1px solid #ebedf0;
    }

    .van-cell {
        margin: 8px 0;
        border-radius: 8px;
        background: #fff;

        &__title {
            font-size: 14px;
            color: #323233;
        }

        &__value {
            color: #969799;
        }
    }

    .van-button--danger {
        height: 100%;
    }

    .van-list {
        padding: 10px 16px;
    }

    .van-swipe-cell {
        margin-bottom: 8px;
    }
}
</style>