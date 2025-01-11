<template>

    <!-- 顶部栏 -->
    <van-nav-bar title="我的" @click-left="onClickLeft"></van-nav-bar>



    <!-- 用户信息 -->
    <div class="card-body">
        <van-cell-group inset style="background-color: #F6F6f7; width: 100%; margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
                <van-image round :src="userStore.userInfo.avatarUrl"
                    style="width: 1.5rem; height: 1.5rem; border-radius: 50%;" @click="router.push('/user')" />
                <div style="display: flex; flex-direction: column;" @click="router.push('/user')">
                    <span style="font-size: 28px;">{{ userStore.userInfo.username }}</span>
                    <span style="color: #999999; font-size: 15px;">{{ userStore.userInfo.city }}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.4rem; margin-left: auto;">
                    <van-icon name="qr" size="26" color="#999999" @click.stop="router.push('/qrcode')" />
                    <van-icon name="arrow" size="22" color="#999999" @click.stop="router.push('/user')" />
                </div>
            </div>
        </van-cell-group>
        <!-- 关注粉丝 -->
        <van-cell-group inset style="width: 100%; margin-top: 10px;">
            <van-row gutter="20" style="padding: 0.2rem;">
                <van-col span="8">
                    <div style="text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">{{ userStore.userInfo.posts || 0 }}</div>
                        <div style="color: #999; font-size: 14px;">帖子</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div style="text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">{{ userStore.userInfo.following || 666 }}</div>
                        <div style="color: #999; font-size: 14px;">关注</div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div style="text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">{{ userStore.userInfo.followers || 0 }}</div>
                        <div style="color: #999; font-size: 14px;">粉丝</div>
                    </div>
                </van-col>
            </van-row>
        </van-cell-group>


        <!-- 卡片 -->
        <van-cell-group inset style="width: 100%; margin-top: 10px;">
            <van-grid :column-num="5" :border="false">

                <van-grid-item class="van-grid-item1" icon="fire" icon-color="#d81e06" text="必看" />

                <van-grid-item icon="clock" icon-color="#1296db" text="实况" />

                <van-grid-item icon="info" icon-color="#d4237a" text="状态" />

                <van-grid-item icon="column" icon-color="#e6de43" text="日程" />

                <van-grid-item class="van-grid-item2" icon="chat" icon-color="#b53faa" text="咨询" />
                <van-grid-item class="van-grid-item1" icon="fire" icon-color="#d81e06" text="必看" />

                <van-grid-item icon="clock" icon-color="#1296db" text="实况" />

                <van-grid-item icon="info" icon-color="#d4237a" text="状态" />

                <van-grid-item icon="column" icon-color="#e6de43" text="日程" />

                <van-grid-item class="van-grid-item2" icon="chat" icon-color="#b53faa" text="咨询" />
            </van-grid>
        </van-cell-group>
        <!-- 热榜卡片 -->
        <van-cell-group inset style="width: 100%; margin-top: 10px;">
            <van-cell title="实时热榜" icon="fire-o" size="large" />
            <van-cell v-for="(item, index) in 5" :key="index" :title="`热榜话题 ${index + 1}`">
                <template #right-icon>
                    <van-tag type="danger" v-if="index < 3">HOT</van-tag>
                </template>
            </van-cell>
        </van-cell-group>

        <!-- 我的帖子 -->
        <van-cell-group inset style="width: 100%; margin-top: 10px;">
            <van-cell title="我的帖子" icon="edit" size="large" @click="router.push('/myPost')" />
            <van-cell v-for="(item, index) in 5" :key="index" :title="`我的帖子 ${index + 1}`">

            </van-cell>

        </van-cell-group>
        <!-- 我的收藏 -->
        <van-cell-group inset style="width: 100%; margin-top: 10px;">
            <van-cell title="我的收藏" icon="star" size="large" @click="router.push('/favorites')" />
        </van-cell-group>





        <!-- 退出登录 -->
        <van-button @click="logout" type="primary" style="width: 100%; border-radius: 10px; margin-top: 10px;">退出登陆
        </van-button>

    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from "@/store/userstore";
const userStore = useUserStore();
const router = useRouter();
const onClickLeft = () => {
    //返回点击的上一页
    router.go(-1)
}

// 跳转搜索页面
const toSearch = () => {
    if (localStorage.getItem('token')) {
        router.push('/search')
    } else {
        showToast('请先登录')
    }
}

// 退出登录
const logout = () => {
    localStorage.removeItem('token');
    console.log(userStore.userInfo);
    userStore.clearUser();
    console.log("nini", userStore.userInfo);
    location.reload();
}
</script>

<style lang="css" scoped>
.top-bar {
    display: flex;
    justify-content: right;
    /* 水平居中 */
    align-items: center;
    padding: 0.2rem;
    background-color: #F6F6f7;

}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    padding: 0.3rem;
    background-color: #F6F6f7;
    height: 100%;
}
</style>