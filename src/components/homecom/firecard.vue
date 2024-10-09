<template>
    <div style="overflow:hidden;">
        <!-- 热榜卡片 -->
        <div class="card-body">
            <div style=" background-color: white;width: 100%; border-radius: 10px; ">
                <div style="display: flex;justify-content: space-between;align-items: center;height: 30px;">
                    <div style="display: flex;align-items: center;">
                        <van-icon style="margin-left: 10px;" name="fire" size="13" color="red" />
                        <p style="font-size: 13px;font-weight: 600;margin-left: 5px;">实时热榜</p>
                    </div>
                    <van-button plain type="primary" size="mini"
                        style="border: none; margin-right: 10px;">更多</van-button>
                </div>
                <div class="hot-list" style=" padding: 10px; padding-top: 0px;">
                    <div v-for="(data, index) in data" :key="data.name"
                        style="display: flex;justify-content: space-between;font-size: 12px;font-weight: 200;margin-left: 10px;margin-top: 3px;"
                        @click="handleClick(data.name)">
                        <div style="display: flex;align-items: center;">
                            <span :style="{ color: data.color }">{{ data.name }}</span> {{ data.content }}
                        </div>
                        <div style="display: flex;align-items: center;">
                            <van-icon name="fire" size="10" color="red" />
                            <span
                                style="font-size: 10px;font-weight: 200;margin-left: 5px;margin-top: 3px;margin-right: 5px;">1000</span>
                        </div>

                    </div>
                </div>
            </div>

            <!-- 帖子卡片 -->
            <div>
                <div v-for="i in 10" :key="i"
                    style=" display: flex; background-color: white;width: 100%; border-radius: 10px;margin-top: 10px; ">
                    <postcard style="margin-top: 10px;" />
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const active = ref(0)

const data = ref([
    { name: '❶', content: '考研考公大潮', color: 'red' },
    { name: '❷', content: '学校大事件', color: '#F59A23' },
    { name: '❸', content: '秋招进行中', color: '#B33600' },
    { name: '❹', content: '校园活动', color: '#802600' },
    { name: '❺', content: '2024年毕业晚会', color: '' },
])

const handleClick = (name) => {
    switch (name) {
        case '❶':
            router.push('/user')
            break;
        case '❷':
            router.push('/comment')
            break;
        case '❸':
            router.push('/user')
            break;
        case '❹':
            router.push('/comment')
            break;
        case '❺':
            router.push('/user')
            break;
    }
    console.log(name)
}

</script>
<style lang="css" scoped>
.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 水平居中 */
    background-color: #F6F6f7;
    padding-bottom: 0;
    padding-top: 0;
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