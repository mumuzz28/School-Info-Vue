<template>
    <van-nav-bar title="更改用户手机号 " left-text="编辑资料" left-arrow @click-left="onClickLeft" />

    <van-cell-group inset style=" margin-top: 10px;padding: 1.0rem;">


        <van-field maxlength="11" v-model="oldphone" type="number" label="旧手机号" placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入旧手机号' }]">
        </van-field>
        <van-field maxlength="11" v-model="xinphone" type="password" label="新手机号" placeholder="请输入新手机号"
            :rules="[{ required: true, message: '请输入新手机号' }]" />


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
import { updatePhoneNumber } from '@/api/userinfo/index'
const userStore = useUserStore()
const router = useRouter()
const oldphone = ref('')
const xinphone = ref('')

const show = ref(false);
const loading = ref(false);


const changePassword = () => {
    if (xinphone.value == '' || xinphone.value == ' ') {
        //显示提示
        showFailToast('手机号不能为空');
        return;
    }
    if (oldphone.value != userStore.userInfo.phoneNumber) {
        showFailToast('旧手机号错误');
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
        const res = await updatePhoneNumber({
            id: userStore.userInfo.id,
            phoneNumber: xinphone.value
        });

        console.log('API Response:', res);

        if (res === 0) {
            showFailToast('更改失败');
        } else {
            showSuccessToast('更改成功');
            userStore.userInfo.phoneNumber = xinphone.value;
            oldphone.value = ''
            xinphone.value = ''
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
