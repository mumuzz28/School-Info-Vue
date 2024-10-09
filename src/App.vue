<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  router.push({ path: '/' })
  console.log(`the component is now mounted.`)
})

</script>

<template>

  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped></style>
