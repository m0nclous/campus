<template>
    <main>
        <MainBanner />
        <MainCarousel />
    </main>
</template>

<script setup lang="ts">
import MainBanner from '@/components/MainBanner.vue';
import MainCarousel from '@/components/MainCarousel.vue';
</script>

<style lang="scss" scoped>
.main-carousel {
    margin-top: 70px;
}
</style>
