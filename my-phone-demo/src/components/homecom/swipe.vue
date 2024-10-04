<template>
    <div class="carousel-container">
        <van-swipe lazy-render class="my-swipe" :autoplay="5000" indicator-color="black">
            <van-swipe-item v-for="image in images" :key="image">
                <img class="swipe-image" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
const images = [
    'https://search-operate.cdn.bcebos.com/b0716a9ac381875c1509966978467e3d.gif',
    'https://img0.baidu.com/it/u=1058961982,3919091402&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1728061200&t=509a64b0ad405929a4ba3bc896a824bb',
];
</script>

<style lang="css" scoped>
.carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.my-swipe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
}

.my-swipe .van-swipe-item {
    position: relative;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;


}

.swipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
</style>