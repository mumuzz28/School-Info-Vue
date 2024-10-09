<template>
    <van-nav-bar title="发布信息" left-text="返回" left-arrow @click-left="onClickLeft" right-text="发布"
        @click-right="onClickRight" />

    <van-tabs v-model="activeTab">
        <van-tab title="信息">
            <div class="content">
                <van-cell title="发布到事件" value="更容易被看到" />
                <van-cell title="分享你的信息" />

                <div class="image-section">
                    <van-image width="100" height="100" icon="photo" />
                </div>

                <van-cell-group>
                    <van-cell title="信息来源" />
                    <van-cell title="信息从何而来" />
                </van-cell-group>
            </div>
        </van-tab>

        <van-tab title="经验">
            <div class="content">经验内容...</div>
        </van-tab>

        <van-tab title="资源">
            <div class="content">资源内容...</div>
        </van-tab>

        <van-tab title="项目">
            <div class="content">项目信息...</div>
        </van-tab>
    </van-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
            console.log("返回");
        },
        onClickRight() {
            this.$router.push('/');
            console.log("发布");
        }
    }
};
</script>

<style scoped>
.content {
    padding: 10px;
}

.image-section {
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.van-cell-group {
    margin-top: 20px;
}
</style>