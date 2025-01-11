<template>
    <van-nav-bar title="更改用户密码 " left-text="编辑资料" left-arrow @click-left="onClickLeft" />

    <van-cell-group inset style=" margin-top: 10px;padding: 1.0rem;">


        <!-- <van-field maxlength="20" v-model="oldpassword" type="password" label="旧密码" placeholder="请输入旧密码"
            :rules="[{ required: true, message: '请输入旧密码' }]" /> -->
        <van-field maxlength="20" v-model="xinpassword" type="password" label="新密码" placeholder="请输入新密码"
            :rules="[{ required: true, message: '请输入新密码' }]" />
        <van-field maxlength="20" v-model="xin2password" type="password" label="新密码" placeholder="请再次输入新密码"
            :rules="[{ required: true, message: '请再次输入新密码' }]" />

        <van-button style=" margin-top: 1rem ;" type="primary" size="large" @click="changePassword">确认修改</van-button>
        <van-dialog v-model:show="show" title="你确定修改吗" show-cancel-button @confirm="onConfirm" @cancel="onCancel" />

    </van-cell-group>
    <van-loading v-if="loading" type="spinner"
        style=" color:aquamarine;  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></van-loading>
</template>

<script setup>

import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userstore'
import { showFailToast, showSuccessToast } from 'vant'
import { updatePassword } from '@/api/userinfo/index'

const userStore = useUserStore()
const router = useRouter()
const oldpassword = ref('')
const xinpassword = ref('')
const xin2password = ref('')

const show = ref(false);
const loading = ref(false);


const changePassword = () => {
    if (xinpassword.value == '' || xin2password.value == '') {
        //显示提示
        showFailToast('密码不能为空');
        return;
    }

    if (xin2password.value != xinpassword.value) {
        showFailToast('两次密码不一致');
        return;
    }
    show.value = true;
}





//修改用户名密码请求
const onConfirm = async () => {

    console.log('确认');
    show.value = false;
    // if (oldpassword.value != userStore.userInfo.password) {
    //     showFailToast('旧密码错误');
    //     return;
    // }
    //加载
    loading.value = true;
    try {
        const res = await updatePassword({
            id: userStore.userInfo.id,
            password: xin2password.value
        });

        console.log('API Response:', res);

        if (res === 0) {
            showFailToast('更改失败');
        } else {
            showSuccessToast('更改成功,请牢记密码');
            oldpassword.value = ''
            xinpassword.value = ''
            xin2password.value = ''
            router.back()
        }

    } catch (error) {
        console.error('API Error:', error);
        showFailToast('更改失败');
    } finally {
        loading.value = false;
    }

}

const cUsername = async (data) => {



}


const onCancel = () => {
    console.log('取消');
    show.value = false;
}

const onClickRight = () => {
    // router.push({ path: '/' })
}


const onClickLeft = () => {
    //返回点击的上一页
    router.go(-1)
}



</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    height: 100%;
}
</style>
