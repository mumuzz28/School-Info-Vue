<template>

    <van-sticky>
        <van-nav-bar title="用户登录" left-text="返回" left-arrow @click-left="onClickLeft">

            <template #right>
                <P style="color: #1989fa;" @click="goto">注册</P>
            </template>
        </van-nav-bar>
    </van-sticky>
    <div class="content" style="background-color: #f6f6f7; width: 100%; height:calc(100vh - 46px);">
        <div class="login-container">
            <h2 class="title">请登录账号</h2>
            <p class="subtitle">请输入密码</p>

            <van-form>
                <van-field v-model="username" placeholder="用户名、邮箱或手机号"
                    :rules="[{ required: true, message: '请输入用户名、邮箱或手机号' }]" />

                <van-field v-model="password" type="password" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请输入密码' }]" />

                <div class="verification-link">
                    <van-button type="text" size="small" @click="gotologinByCode">验证码登录</van-button>
                </div>

                <div class="login-button">
                    <van-button round block type="primary" native-type="submit" color="#4CAF50" @click="onSubmit"
                        :loading="loading">
                        登 录
                    </van-button>
                </div>
            </van-form>
            <van-loading v-if="loading" size="20px" />
        </div>

    </div>



</template>

<script setup>
import { onMounted, ref } from 'vue';
import { showToast } from 'vant';
import axios from "axios"
import { useRouter } from 'vue-router';
import { loginByCode } from '@/api/login';
import { useUserStore } from '@/store/userstore';
const userStore = useUserStore()
const router = useRouter();
const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');
const username = ref('')
const password = ref('')


// 创建axios实例
const instance = axios.create({
    baseURL: 'http://192.168.0.107:8888',  // 'http://192.168.0.100:8888',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
});
const onSubmit = () => {

    if (username.value == '' || password.value == '') {
        showToast("用户名或密码不能为空")
        return
    } else {
        instance.post("/login/byPassword", {
            username: username.value,
            password: password.value
        }).then(res => {
            if (res.data.code == 200) {
                localStorage.setItem('token', res.data.data.token)
                userStore.setUserInfo(res.data.data)
                showToast(res.data.msg)
                location.reload(onMounted(() => {
                    router.push({ path: '/' })
                }))
            } else {
                showToast(res.data.msg)
            }
        }).catch(err => {
            console.log("err:" + err)
        })
    }



}

const gotologinByCode = () => {
    console.log("loginByCode")
    router.push({ path: '/loginbycode' })
}

</script>

<style lang="css" scoped>
.login-container {
    padding: 20px 10px;
    background-color: #f6f6f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 14px;
    color: #999;
    text-align: center;
    margin-bottom: 30px;
}

:deep(.van-field) {
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
}

:deep(.van-field__control) {
    font-size: 16px;
}

.verification-link {

    text-align: right;
    margin-top: 10px;
    color: #999;
    font: 1em sans-serif;
    border: #f6f6f7;
}

.login-button {
    margin-top: 20px;
}

:deep(.van-button--primary) {
    height: 44px;
    font-size: 18px;
}
</style>