<template>
    <el-container>
        <el-header></el-header>

        <el-main>
            <router-view />
        </el-main>

        <el-footer></el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
$header-height: 80px;
$footer-height: 80px;

.el-header {
    --el-header-height: #{$header-height};
}

.el-footer {
    --el-header-height: #{$footer-height};
}

.el-main {
    min-height: calc(100vh - $header-height - $footer-height);
}
</style>
