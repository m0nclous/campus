<template>
    <main>
        <el-row :gutter="20">
            <el-col v-for="sale in sales" :key="sale.id" :span="8">
                <el-card>
                    <h3>{{ sale.name }}</h3>
                    <main>{{ sale.content }}</main>
                    <label>{{ sale.label }}</label>
                </el-card>
            </el-col>
        </el-row>
    </main>
</template>

<script lang="ts" setup>
import type { Sale } from '@/types';

const sales: Sale[] = [
    {
        id: 1,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    },
    {
        id: 2,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    },
    {
        id: 3,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    },
    {
        id: 4,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    },
    {
        id: 5,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    },
    {
        id: 6,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        label: '-5%',
        content: 'Двухчастотный GNSS навигатор со скидкой -5%'
    }
];
</script>

<style lang="scss" scoped>
.el-row {
    row-gap: 20px;
}

:deep(*) {
    .el-card {
        &__body {
            display: grid;
            grid-template-columns: 1fr 0fr;

            h3 {
                margin-top: 0;
            }

            label {
                align-self: start;
                grid-column: 2/3;
                grid-row: 1/2;

                display: block;
                padding: 3px 16px;

                position: relative;
                left: 20px;

                background-color: var(--el-color-success);
                color: var(--el-color-white);
            }
        }
    }
}
</style>
