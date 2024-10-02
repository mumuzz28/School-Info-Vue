<script setup lang="ts">
function handleclick() {
  console.log("我被点击了")
}

</script>

<template>
  <van-button plain type="primary">朴素按钮</van-button>
  <van-button plain type="success">朴素按钮</van-button>
  <van-button type="primary" size="large">大号按钮</van-button>

  <van-button size="large" type="primary" @click="handleclick">主要按钮</van-button>
  <van-button size="large" type="success">成功按钮</van-button>
  <van-button size="large" type="default">默认按钮</van-button>
  <van-button size="large" type="danger">危险按钮</van-button>
  <van-button size="large" type="warning">警告按钮</van-button>

</template>

<style scoped></style>
