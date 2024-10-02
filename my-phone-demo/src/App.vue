<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <img src="@/assets/aaa.jpg">
  <HelloWorld />
  <div>
    <!-- 可以使用 CellGroup 作为容器 -->
    <van-cell-group inset>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
  </div>

</template>

<style scoped></style>
