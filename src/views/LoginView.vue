<template>
    <el-row>
        <el-col :span="3" :offset="10">
            <CampusLogo />
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="3" :offset="10">
            <h2>Вход</h2>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="3" :offset="10">
            <el-form>
                <el-form-item prop="login">
                    <el-input v-model="form.username" placeholder="Логин" size="large" />
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="Пароль" size="large" />
                </el-form-item>

                <el-form-item>
                    <el-button type="success">Войти</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import CampusLogo from '@/components/CampusLogo.vue';

import { ref } from 'vue';

const form = ref({
    username: '',
    password: ''
});
</script>

<style scoped>
.el-form {
}
</style>