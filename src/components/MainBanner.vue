<template>
    <el-carousel height="480px" arrow="never" indicator-position="none">
        <el-carousel-item>
            <el-image :src="mainBannerSrc" />

            <el-row>
                <el-col :span="6" :offset="1">
                    <div>Подруливатель Кампус Обучение и настройка</div>
                    <el-button type="success" size="large" round>Подробнее</el-button>
                </el-col>
            </el-row>
        </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts" setup>
import mainBannerSrc from '@/assets/img/main-banner.jpg';
</script>

<style lang="scss" scoped>
.el-image {
    position: absolute;
    top: 0;
    width: 100%;
}

.el-carousel {
    margin: -20px;

    &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

.el-row {
    color: var(--el-color-white);
    font-size: 42px;
}

.el-col {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
}
</style>
