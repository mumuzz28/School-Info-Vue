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
            <p class="subtitle">请输入手机号和验证码</p>

            <van-form>
                <van-field maxlength="11" v-model="phoneNumber" placeholder="请输入手机号" type="number"
                    :rules="[{ required: true, message: '请输入手机号' }, { message: '手机号必须为11位数字' }]" />

                <van-field maxlength="6" v-model="code" type="text" placeholder="请输入验证码"
                    :rules="[{ required: true, message: '请输入验证码' }, { message: '验证码必须为6位数字' }]" />

                <div class="verification-link">
                    <van-button type="text" size="small" @click="ongetcode">获取验证码</van-button>
                </div>

                <div class="login-button">
                    <van-button round block type="primary" native-type="submit" color="#4CAF50" @click="onSubmit"
                        :loading="loading">
                        验证码登录
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
import { useUserStore } from '@/store/userstore';
const userStore = useUserStore()
const router = useRouter();
const onClickLeft = () => history.back();
const phoneNumber = ref('')
const code = ref('')


// 创建axios实例
const instance = axios.create({
    baseURL: 'http://192.168.0.107:8888',//'http://192.168.0.100:8888',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
});

const getCode = () => {
    instance.get("/login/sendCode" + "?phoneNumber=" + phoneNumber.value).then(res => {
        if (res.data.code == 200) {
            showToast(res.data.msg)
        } else {
            showToast(res.data.msg)
        }
    }).catch(err => {
        console.log("err:" + err)
    })
}

// 验证码的获取
const ongetcode = () => {
    //如果用户名为空
    if (phoneNumber.value == '') {
        showToast("请输入手机号")
        return
    } else {
        //获取验证码
        console.log(phoneNumber.value)
        getCode()
    }
}

//登录
const onSubmit = () => {

    if (phoneNumber.value.length != 11 || code.value.length != 6) {
        showToast("手机号或验证码错误")
        return
    } else {
        instance.post("/login/byPhone", {
            phoneNumber: phoneNumber.value,
            code: code.value
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