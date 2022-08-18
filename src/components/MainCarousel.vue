<template>
    <el-carousel class="main-carousel" :interval="5_000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <el-card shadow="never">
                <template #header>
                    <el-image :src="slideImageSrc"></el-image>
                </template>

                <div>Тренажер Агронавигатора Кампус</div>
                <div>15.03.2022</div>
            </el-card>
        </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts" setup>
import slideImageSrc from '@/assets/img/slide-image.png';
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    display: flex;
    border: none;
    border-radius: 0;

    .el-card__body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.el-carousel {
    padding-top: 1px;

    &__item--card.is-active {
        box-shadow: var(--el-box-shadow);
    }
}

.el-image {
    height: 202px;
    margin: -20px;
}
</style>
