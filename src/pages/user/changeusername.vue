<template>
    <van-nav-bar title="更改用户名 " left-text="编辑资料" left-arrow @click-left="onClickLeft" />

    <van-cell-group inset style=" margin-top: 10px;padding: 1.0rem;">


        <p>当前用户名:<b>{{ userStore.userInfo.username }}</b></p>
        <van-field maxlength="10" v-model="username" label="用户名" placeholder="请输入用户名"
            :rules="[{ required: true, message: '请输入用户名' }]" />

        <van-button style=" margin-top: 1rem ;" type="primary" size="large" @click="changeUsername">确认修改</van-button>
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
import { updateUsername } from '@/api/userinfo/index'
import { flat } from 'vant/lib/utils'
const userStore = useUserStore()
const router = useRouter()
const username = ref('')
const show = ref(false);
const loading = ref(false);
const changeUsername = () => {
    if (username.value == '') {
        //显示提示
        showFailToast('用户名不能为空');
        return;
    }
    show.value = true;


}
//修改用户名请求
const onConfirm = async () => {
    console.log('确认');
    show.value = false;

    if (username.value.length > 10) {
        showFailToast('用户名不能超过10个字');
        return;
    }
    //加载

    loading.value = true;
    try {
        const res = await updateUsername({
            id: userStore.userInfo.id,
            username: username.value
        });

        console.log('API Response:', res);

        if (res === null) {
            showFailToast('更改失败或用户名重复');
        } else {
            showSuccessToast('更改成功');
            userStore.userInfo.username = username.value;
            router.back()
        }

    } catch (error) {
        console.error('API Error:', error);
        showFailToast('更改失败或用户名重复');
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
