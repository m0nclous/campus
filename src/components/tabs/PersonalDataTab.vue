<template>
    <el-form v-model="form" label-position="top" @submit.prevent="onSubmit">
        <el-form-item label="Наименование организации">
            <el-input v-model="form.companyName" />
        </el-form-item>

        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="Телефон">
                    <el-input v-model="form.phone" />
                </el-form-item>
            </el-col>

            <el-col :span="12">
                <el-form-item label="E-mail">
                    <el-input v-model="form.email" />
                </el-form-item>
            </el-col>
        </el-row>

        <el-form-item label="Юридический адрес">
            <el-input v-model="form.legalAddress" />
        </el-form-item>

        <el-form-item>
            <el-button type="success" native-type="submit" round>Сохранить</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
    companyName: '',
    phone: '',
    email: '',
    legalAddress: ''
});

const onSubmit = () => {
    console.log('onSubmit', form);
};
</script>

<style lang="scss" scoped>
.el-form {
    max-width: 625px;
}
</style>
