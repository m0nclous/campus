<template>
    <el-container :class="`page-${$route.name}`">
        <el-header v-if="user.isAuth">
            <el-row>
                <el-col :span="3">
                    <router-link to="/">
                        <campus-logo />
                    </router-link>
                </el-col>

                <el-col :span="6">
                    <el-row>
                        <el-col :span="24" class="user__company">ИП Иванов С. А.</el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <el-link>Личный кабинет</el-link>
                            |
                            <el-link @click="user.logout()">Выход</el-link>
                        </el-col>
                    </el-row>
                </el-col>

                <el-col :span="8" :offset="7" class="nav-links">
                    <el-link>Новая заявка</el-link>
                    <el-link>Прайс</el-link>
                    <el-link>Акции</el-link>
                    <el-link>Промо</el-link>
                </el-col>
            </el-row>
        </el-header>

        <el-main>
            <router-view />
        </el-main>

        <el-footer v-if="user.isAuth"></el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import { useUserStore } from '@/stores/user';
const user = useUserStore();

import CampusLogo from '@/components/CampusLogo.vue';
</script>

<style lang="scss" scoped>
$header-height: 80px;
$footer-height: 80px;

.el-header {
    --el-header-height: #{$header-height};

    .el-row {
        align-items: center;
    }

    .campus-logo {
        max-width: 150px;
        width: 100%;
    }
}

.el-footer {
    --el-header-height: #{$footer-height};
}

.el-main {
    min-height: calc(100vh - $header-height - $footer-height);
}

.user__company {
    color: var(--el-color-info);
}

.nav-links {
    display: flex;
    justify-content: end;
    gap: 30px;
}
</style>
