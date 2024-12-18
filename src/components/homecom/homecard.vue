<template>
    <div style="overflow:hidden;">
        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; ">
                <swipe />
                <div style="border-radius: 10px;height: 65px; ">
                    <van-grid :column-num="5" :border="false">
                        <!-- 图标 1 -->
                        <van-grid-item class="van-grid-item1" icon="fire" icon-color="#d81e06" text="必看" />
                        <!-- 图标 2 -->
                        <van-grid-item icon="clock" icon-color="#1296db" text="实况" />
                        <!-- 图标 3 -->
                        <van-grid-item icon="info" icon-color="#d4237a" text="状态" />
                        <!-- 图标 4 -->
                        <van-grid-item icon="column" icon-color="#e6de43" text="日程" />
                        <!-- 图标 5 -->
                        <van-grid-item class="van-grid-item2" icon="chat" icon-color="#b53faa" text="咨询" />
                    </van-grid>
                </div>
            </div>

        </div>

        <!-- 帖子卡片 -->
        <div class="card-body">
            <template v-for="item in dataList" :key="item.id">
                <div class="postcard-container">
                    <postcard style="margin-top: 10px" :list="item" />
                </div>
            </template>
        </div>



    </div>


</template>


<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
    getAllPosts,
    getPostLikes,
    getPostComment,
    getPostfavor,
} from "../../api/postIndex/index";
import type { Post, dataList } from "../../types/postcard";

const dataList = ref<Post[]>([
    {
        id: 0,
        title: "",
        content: "",
        author: "",
        postImg: "",
        createdAt: "",
        updatedAt: "",
        status: 0,
        likeCount: 0,
        commentCount: 0,
        favorCount: 0,
    },
]);



const getPostInfo = async (): Promise<Post[]> => {
    try {
        const post = await getAllPosts();
        const newArr: (Post | null)[] = await Promise.all(
            post.map(async (item) => {
                try {
                    const likeCount = await getPostLikes(item.id);
                    const commentCount = await getPostComment(item.id);
                    const favorCount = await getPostfavor(item.id);
                    return {
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        author: item.author,
                        postImg: item.postImg,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        status: item.status,
                        likeCount,
                        commentCount,
                        favorCount,
                    };
                } catch (error) {

                    //console.error(`Error processing post ${item.id}:`, error);
                    return null;
                }
            })
        );
        const filteredNewArr = newArr.filter(post => post !== null) as Post[];

        if (process.env.NODE_ENV !== 'production') {
            console.log(post);
            console.log(filteredNewArr);
        }

        dataList.value = filteredNewArr;
        return filteredNewArr;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

onMounted(() => {
    console.log("postcard mounted");
    getPostInfo();
});
</script>



<style lang="css" scoped>
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F6F6f7;
    padding-bottom: 0;
    padding: 12px;

}

.van-grid-item1,
.van-grid-item2 {
    border-radius: 10px;
    /* 添加圆角效果 */
    overflow: hidden;
    /* 防止圆角溢出 */
}
</style>
// 获取帖子信息
const getPostInfo = async () => {
try {
const post = await getAllPosts();
// 通过map将帖子信息转换
const newArr: Post[] = await Promise.all(
post.map(async (item) => {
try {
// 获取点赞数
const likeCount = await getPostLikes(item.id);
// 获取评论数
const commentCount = await getPostComment(item.id); // 确保获取评论的函数是正确的
// 获取收藏数
const favorCount = await getPostFavor(item.id); // 确保获取收藏的函数是正确的
// 重新组合帖子信息
return {
id: item.id,
title: item.title,
content: item.content,
author: item.author,
postImg: item.postImg,
createdAt: item.createdAt,
updatedAt: item.updatedAt,
status: item.status,
likeCount,
commentCount,
favorCount,
};
} catch (error) {
console.error(`Error processing post ${item.id}:`, error);
return null; // 返回null或其他默认值
}
})
);
// 过滤掉处理失败的帖子
const filteredNewArr = newArr.filter(post => post !== null);

// 移除生产环境下的日志输出
if (process.env.NODE_ENV !== 'production') {
console.log(post);
console.log(filteredNewArr);
}

// 将数据赋值给dataList
dataList.value = filteredNewArr;
return filteredNewArr;
} catch (error) {
console.error('Error fetching posts:', error);
throw error; // 重新抛出异常以便调用者处理
}
};
// 获取帖子信息
const getPostInfo = async () => {
try {
const post = await getAllPosts();
// 通过map将帖子信息转换
const newArr: Post[] = await Promise.all(
post.map(async (item) => {
try {
// 获取点赞数
const likeCount = await getPostLikes(item.id);
// 获取评论数
const commentCount = await getPostComment(item.id); // 确保获取评论的函数是正确的
// 获取收藏数
const favorCount = await getPostFavor(item.id); // 确保获取收藏的函数是正确的
// 重新组合帖子信息
return {
id: item.id,
title: item.title,
content: item.content,
author: item.author,
postImg: item.postImg,
createdAt: item.createdAt,
updatedAt: item.updatedAt,
status: item.status,
likeCount,
commentCount,
favorCount,
};
} catch (error) {
console.error(`Error processing post ${item.id}:`, error);
return null; // 返回null或其他默认值
}
})
);
// 过滤掉处理失败的帖子
const filteredNewArr = newArr.filter(post => post !== null);

// 移除生产环境下的日志输出
if (process.env.NODE_ENV !== 'production') {
console.log(post);
console.log(filteredNewArr);
}

// 将数据赋值给dataList
dataList.value = filteredNewArr;
return filteredNewArr;
} catch (error) {
console.error('Error fetching posts:', error);
throw error; // 重新抛出异常以便调用者处理
}
};