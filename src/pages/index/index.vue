<template>
    <keep-alive>
        <div>

            <router-view v-slot="{ Component }">
                <transition>
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
            <bottombar />

        </div>
    </keep-alive>


</template>

<script setup>

</script>

<style lang="css" scoped></style>