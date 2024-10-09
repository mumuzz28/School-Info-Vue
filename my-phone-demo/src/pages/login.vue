<template>

    <van-sticky>
        <van-nav-bar title="用户登录" left-text="返回" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon @click="onClickRight" name="search" size="18" />
            </template>
        </van-nav-bar>
    </van-sticky>
    <div class="content" style="background-color: #f6f6f7; width: 100%; height:calc(100vh - 46px);">
        <div class="login-container">
            <h2 class="title">请登录账号</h2>
            <p class="subtitle">请输入密码</p>

            <van-form @submit="onSubmit">
                <van-field v-model="username" placeholder="用户名、邮箱或手机号"
                    :rules="[{ required: true, message: '请输入用户名、邮箱或手机号' }]" />

                <van-field v-model="password" type="password" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请输入密码' }]" />

                <!-- <div class="verification-link">
                    <van-button type="text" size="small">验证码登录</van-button>
                </div> -->

                <div class="login-button">
                    <van-button round block type="primary" native-type="submit" color="#4CAF50" @click="onLogin">
                        登 录
                    </van-button>
                </div>
            </van-form>
        </div>

    </div>



</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import axios from "axios"
import { useRouter } from 'vue-router';
const router = useRouter();
const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');
const username = ref('')
const password = ref('')


// 创建axios实例
const instance = axios.create({
    baseURL: 'http://localhost:8888/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
});
const onSubmit = () => {

    instance.post("/login", {
        username: username.value,
        password: password.value
    }).then(res => {
        console.log("res:" + res.data)
        if (res.data != "用户名或密码错误") {
            localStorage.setItem('token', res.data)
            showToast("登录成功")
            router.push("/")
        } else {
            showToast("登录失败")
        }
    }).catch(err => {
        console.log("err:" + err)
    })
}
const onLogin = () => {
    console.log("onLogin")
    onSubmit()
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
}

.login-button {
    margin-top: 20px;
}

:deep(.van-button--primary) {
    height: 44px;
    font-size: 18px;
}
</style>