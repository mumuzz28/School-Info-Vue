<template>
    <van-nav-bar title="更改头像" style="background-color: #F6F6f7;;" left-text="编辑资料" left-arrow
        @click-left="onClickLeft" />

    <div class="card-body">

        <van-uploader v-model:file-list="fileList" :after-read="handleAfterRead" multiple accept="image/*" max-count="3"
            :max-size="mediaOverSize * 1024 * 1024" @oversize="onOversize">
            <template #default>
                <div class="my-upload">
                    <van-image style="margin-top: 2rem;margin-left: 0.7rem; width: 8rem; height: 8rem;"
                        :src="userStore.userInfo.avatarUrl" alt="" />
                    <van-button type="primary" size="large" style="margin-top: 1rem;"
                        @click="changeavatar">更改头像</van-button>
                </div>
            </template>
        </van-uploader>

        <van-dialog title="预览" v-model:show="showPreview" show-cancel-button @confirm="confirmImg">
            <template #default>
                <van-image :src="previewImage" width="8rem" height="8rem" />
            </template>
        </van-dialog>
        <van-loading v-if="loading" type="spinner"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">上传中...</van-loading>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userstore'
import { updateAvatar } from '@/api/userinfo/index'
import { uploadImage } from '@/api/commonapi/index'
import { showSuccessToast, showFailToast, showToast } from 'vant'
import Compressor from 'compressorjs';

import { flat } from 'vant/lib/utils'
const userStore = useUserStore()
const router = useRouter()
const activeTab = ref(0)
const loading = ref(false)
const finished = ref(false)
const onClickLeft = () => {
    //返回点击的上一页
    router.back()
}

// 预览头像
const previewImage = ref('');
const showPreview = ref(false);
// const changeavatar = async () => {
//     showPreview.value = true
// }




const onLoad = () => {
    // 模拟加载数据
    setTimeout(() => {
        posts.value.push(...[
            { id: 1, title: '这是一个测试帖子', date: '2023-06-01' },
            { id: 2, title: '分享一些经验', date: '2023-06-02' }
        ])
        loading.value = false
        finished.value = true
    }, 1000)
}

const onReplyLoad = () => {
    setTimeout(() => {
        replies.value.push(...[
            { id: 1, content: '回复测试内容1', date: '2023-06-01' },
            { id: 2, content: '回复测试内容2', date: '2023-06-02' }
        ])
        replyLoading.value = false
        replyFinished.value = true
    }, 1000)
}
// 上传图片
const fileList = ref([]);
// 限制文件上传大小
const mediaOverSize = 3;
// 当文件被读取后调用此函数
const handleAfterRead = async file => {
    loading.value = true; // 开始加载
    try {
        // 如果是一次多张上传
        if (Array.isArray(file)) {
            for (const item of file) {
                item.file = await compressImage(item.file);
                await queryUploadFile(item);
            }
        } else {
            // 单文件上传
            file.file = await compressImage(file.file);
            await queryUploadFile(file);
        }
    } catch (error) {
        showFailToast('文件处理失败');
        console.error('文件处理失败:', error);
    } finally {
        loading.value = false; // 结束加载
    }
};
//dialog确认上传
const confirmImg = async (data) => {
    loading.value = true; // 开始加载
    try {
        await updateAvatar(data = {
            id: userStore.userInfo.id,
            avatarUrl: previewImage.value
        }).then(res => {
            console.log(res)
            if (res !== 0) {
                showSuccessToast('更改成功');
                userStore.userInfo.avatarUrl = previewImage.value;
                router.back()
            } else {
                showFailToast('更改失败');
            }
        });

    } catch (error) {
        console.error('更新头像失败:', error);
        showFailToast('更改失败');
    } finally {
        loading.value = false;
    }
};
// 压缩图片并将图片修正
const compressImage = async file => {
    if (!file) {
        return;
    }
    return new Promise((reslove, reject) => {
        // compressorjs 默认开启 checkOrientation 选项
        // 会将图片修正为正确方向
        new Compressor(file, {
            quality: 0.6, // 设置压缩质量，范围从 0 到 1，默认0.8
            maxWidth: 1000,
            maxHeight: 1000,
            convertSize: 1000000,
            checkOrientation: true, // 启用 EXIF 方向修正
            success(result) {
                const compressedImage = new File([result], result.name, { type: result.type });
                reslove(compressedImage);
            },
            error(err) {
                reject(err.message);
            },
        });
    });
};

// 图片上传
const queryUploadFile = async file => {
    file.status = 'uploading'; // 显示上传状态

    // 创建 FormData 对象
    const formData = new FormData();
    formData.append('file', file.file);

    // 发起上传请求
    try {
        const response = await uploadImage(formData)
        if (response !== 0) {
            console.log(response)
            previewImage.value = response
            console.log("新图片的值" + previewImage.value)
            showPreview.value = true
            // showSuccessToast('上传成功')
        } else {
            showFailToast('上传失败')
        }
        // 更新文件列表中的文件状态和返回数据
        updateFileStatus(file, 'success', response.data);
    } catch (error) {
        updateFileStatus(file, 'fail', error.response?.data || error);
        showFailToast('文件上传失败');
        console.error('文件上传失败:', error);
    }
};

// 更新文件状态和返回数据
const updateFileStatus = (file, status, data) => {
    file.status = status;
    file.data = data;
};

// 获取文件上传的状态
const getFileStatus = file => {
    return file.status || 'pending';
};

// 获取文件上传的返回数据
const getUploadData = file => {
    return file.data || {};
};

const onOversize = () => {
    showFailToast(`文件大小不能超过${mediaOverSize}MB`);
};
</script>

<style>
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    padding: 0.3rem;
    background-color: #F6F6f7;
    height: 100%;
}


.forum-user {
    padding-bottom: 50px;
}
</style>
