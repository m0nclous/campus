<template>
    <main>
        <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="Фотографии" name="photos">
                <PhotosTab />
            </el-tab-pane>

            <el-tab-pane label="Видео" name="videos">
                <VideosTab />
            </el-tab-pane>

            <el-tab-pane label="Коммерческие предложения" name="commercialOffers">
                <PDFsTab />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PDFsTab from '@/components/tabs/PDFsTab.vue';
import PhotosTab from '@/components/tabs/PhotosTab.vue';
import VideosTab from '@/components/tabs/VideosTab.vue';

const activeTab = ref('photos');
</script>

<style lang="scss" scoped>
:deep(*) {
    .el-tabs {
        &__content {
            overflow: visible;
        }
    }
}
</style>
