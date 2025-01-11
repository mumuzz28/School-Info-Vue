<template>
    <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-cell-group>
        <van-cell title="头像" @click="router.push('/avatarurl')"><van-image round width="1rem" height="1rem"
                :src="userStore.userInfo.avatarUrl" /></van-cell>
        <van-cell title="用户名" @click="router.push('/changeusername');" :value="userStore.userInfo.username" />
        <van-cell title="生日" :value="userStore.userInfo.birthdate" @click="showPicker1 = true" />
        <van-popup :show="showPicker1" destroy-on-close round position="bottom">
            <van-date-picker v-model="currentDate" title="选择日期" :min-date="minDate" :max-date="maxDate"
                @confirm="confirmBirthday" @cancel="() => { showPicker1 = false; console.log('取消') }" />
        </van-popup>

        <van-cell title="性别" :value="gender" @click="showPicker2 = true" />
        <van-popup v-model:show="showPicker2" destroy-on-close round position="bottom">
            <van-picker :model-value="pickerValue1" :columns="columns1" @cancel="showPicker2 = false"
                @confirm="onGenderConfirm" />
        </van-popup>
        <van-cell title="城市" :value="userStore.userInfo.city" @click="onClikCity" />
        <van-popup v-model:show="showPicker" destroy-on-close round position="bottom">
            <van-picker :model-value="pickerValue" :columns="columns" @cancel="showPicker = false"
                @confirm="onConfirm" />
        </van-popup>
        <van-cell title="签名" :value="userStore.userInfo.sign || '这个家伙很懒还没有签名'" @click="showSignPopup = true" />
        <van-popup v-model:show="showSignPopup" position="center" :style="{ width: '80%' }">
            <van-field v-model="newSign" label="新签名：" :rules="[{ required: true, message: '请输入新签名' }]" />
            <div style="margin: 16px;">
                <van-button size="small" type="primary" block @click="onSignConfirm">确定</van-button>
            </div>
        </van-popup>
        <van-cell title="手机号" :value="userStore.userInfo.phoneNumber" @click="router.push('/changephone')" />
        <van-cell title="修改密码" @click="router.push('/changepassword')" />
    </van-cell-group>
    <van-loading v-if="loading" type="spinner"
        style=" color:aquamarine;  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></van-loading>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userstore'
import { getAllCity } from '@/api/city'
import { loadingProps, showToast, showFailToast, } from 'vant'
import {
    updateBirthdate,
    updateGender,
    updateSign,
    updateCity
} from '@/api/userinfo/index'


const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

//日期模块
const currentDate = ref([new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]);
const minDate = new Date(1970, 0, 1)
const maxDate = new Date(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))




//更改生日
const confirmBirthday = () => {
    loading.value = true;
    console.log(currentDate);
    userStore.userInfo.birthdate = currentDate.value.join('-')


    try {
        //发送请求
        const res = updateBirthdate({
            id: userStore.userInfo.id,
            birthdate: userStore.userInfo.birthdate
        })
        if (res !== 0) {
            userStore.userInfo.birthdate = currentDate.value.join('-')
            showSuccessToast("修改成功")
        } else {
            showFailToast("修改失败")
        }
        showPicker1.value = false;
    } catch (error) {
        console.error('更新生日失败:', error);
    } finally {
        loading.value = false;
    }
}



//性别
const gender = ref()
const showPicker2 = ref(false);
const fieldValue1 = ref('');
const fieldText1 = ref('');
const pickerValue1 = ref([]);
if (userStore.userInfo.gender == 1) {
    gender.value = "男"
} else if (userStore.userInfo.gender == 2) {
    gender.value = "女"
} else {
    gender.value = "保密"
}

const columns1 = [
    { text: '男', value: '1' },
    { text: '女', value: '2' },
    { text: '保密', value: '3' },

];
const onGenderConfirm = ({ selectedValues, selectedOptions }) => {
    showPicker2.value = false;
    pickerValue1.valueOf = selectedValues;
    console.log(selectedOptions);
    fieldValue1.value = selectedOptions[0].value;
    fieldText1.value = selectedOptions[0].text;
    uGender();
}
//修改性别请求函数
const uGender = async (data) => {
    const res = await updateGender({
        id: userStore.userInfo.id,
        gender: fieldValue1.value
    })
    if (res !== 0) {
        userStore.userInfo.gender = fieldValue1.value;
        console.log(userStore.userInfo.gender);
        gender.value = fieldText1.value
        showSuccessToast("修改成功")
    } else {
        showFailToast("修改失败")
    }
}

//城市

const columns = ref([]);
const showPicker1 = ref(false);
const fieldValue = ref('');
const showPicker = ref(false);
const pickerValue = ref([]);


const onClikCity = () => {
    showPicker.value = true;
    // 判断是否已经获取过城市数据
    if (columns.value.length > 0) {
        return;
    }
    getCityInfo();
};


const onConfirm = ({ selectedValues, selectedOptions }) => {
    showPicker.value = false;
    pickerValue.valueOf = selectedValues;
    console.log(selectedOptions);
    fieldValue.value = selectedOptions[0].text;
    uCity();
};
//修改城市请求
const uCity = async (data) => {
    loading.value = true;
    try {
        const res = await updateCity({
            id: userStore.userInfo.id,
            city: fieldValue.value
        })
        if (res !== 0) {
            userStore.userInfo.city = fieldValue.value;
            showSuccessToast("修改成功")
        } else {
            showFailToast("修改失败")
        }
    } catch (error) {
        console.error('获取城市数据失败:', error);
    } finally {
        loading.value = false;
    }

}


// 获取城市数据
const getCityInfo = async () => {
    try {

        const res = await getAllCity();
        for (let i = 0; i < res.length; i++) {
            columns.value.push({
                text: res[i].city,
                value: res[i].lng
            });
        }


    } catch (error) {
        console.error('获取城市数据失败:', error);
    }
};

//修改签名模块
const showSignPopup = ref(false);
const newSign = ref('');

const onSignConfirm = async () => {
    loading.value = true;
    if (newSign.value == '') {
        showFailToast("签名不能为空");

    } else if (newSign.value.length > 15) {
        showFailToast("签名不能超过15个字");
        return;
    }

    try {

        const res = await updateSign({
            id: userStore.userInfo.id,
            sign: newSign.value
        })
        if (res !== 0) {
            showSignPopup.value = false;
            showSuccessToast('修改成功');
            newSign.value = '';
            userStore.userInfo.sign = newSign.value;

        } else {
            showFailToast('修改失败');
        }
    } catch (error) {
        console.error('修改签名失败:', error);
    } finally {
        loading.value = false;
    }


}



//导航返回
const onClickLeft = () => {
    //返回点击的上一页
    router.back()
}

</script>

<style lang="scss" scoped>
// .custom-toast {
//     background-color: #07c160 !important; // 绿色背景
//     color: white !important; // 白色文字
//     opacity: 1 !important; // 确保透明度为1，防止半透明效果
//     font-size: 14px !important; // 确保字体大小合适
// }</style>
