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
                            <router-link :to="{ name: 'personal-area' }" v-slot="{ href, navigate }" custom>
                                <el-link :href="href" @click="navigate">Личный кабинет</el-link>
                            </router-link>
                            |
                            <el-link @click="user.logout()">Выход</el-link>
                        </el-col>
                    </el-row>
                </el-col>

                <el-col :span="8" :offset="7" class="nav-links">
                    <router-link :to="{ name: 'order-create' }" v-slot="{ href, navigate }" custom>
                        <el-link :href="href" @click="navigate">Новая заявка</el-link>
                    </router-link>

                    <router-link :to="{ name: 'price' }" v-slot="{ href, navigate }" custom>
                        <el-link :href="href" @click="navigate">Прайс</el-link>
                    </router-link>

                    <router-link :to="{ name: 'sales' }" v-slot="{ href, navigate }" custom>
                        <el-link :href="href" @click="navigate">Акции</el-link>
                    </router-link>

                    <router-link :to="{ name: 'promo' }" v-slot="{ href, navigate }" custom>
                        <el-link :href="href" @click="navigate">Промо</el-link>
                    </router-link>
                </el-col>
            </el-row>
        </el-header>

        <el-main>
            <router-view />
        </el-main>

        <el-footer v-if="user.isAuth">
            <el-row>
                <el-col :span="3">
                    <div>Телефон:</div>
                    <el-link href="tel:+78005503732">+7 (800) 550-37-32</el-link>
                </el-col>

                <el-col :span="3">
                    <div>E-mail:</div>
                    <el-link href="mailto:support@campus-agro.ru">support@campus-agro.ru</el-link>
                </el-col>
            </el-row>
        </el-footer>
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
        height: 100%;
        align-items: center;
    }

    .campus-logo {
        max-width: 150px;
        width: 100%;
    }
}

.el-footer {
    --el-footer-height: #{$footer-height};

    .el-row {
        height: 100%;
        align-items: center;
    }

    .el-col {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 7px;

        &::before {
            content: '';
            display: block;
            height: 2px;
            width: 90px;
            background-color: var(--el-color-success);
            border-radius: 2px;
        }
    }
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
