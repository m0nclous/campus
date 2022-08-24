<template>
    <el-table :data="orders" :show-header="false" stripe>
        <el-table-column>
            <template #default="scope: { row: Order }">
                <strong>#{{ number(scope.row.id) }} {{ scope.row.companyName }}</strong>
                <div v-for="item in scope.row.items" :key="item.id">{{ item.amount }} х {{ item.name }}</div>
            </template>
        </el-table-column>

        <el-table-column prop="city" width="150" align="right" />

        <el-table-column width="200" align="right">
            <template #default="scope: { row: Order }">
                <div>Предоплата</div>
                <div>Документы загружены</div>
                <div>Не оплачена</div>
                <div>Счет #48</div>
            </template>
        </el-table-column>

        <el-table-column width="200" align="right">
            <template #default="scope: { row: Order }">
                <small>15.02.2022 10:27</small>
                <div>Отгружена</div>
                <div>1315675406</div>
                <div>2022-02-14</div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import type { Order } from '@/types';
import { number } from '@/helpers/filters';

const orders: Order[] = [
    {
        id: 1,
        companyName: 'ИП Иванов Сергей Александрович',
        city: 'Липецк',
        items: [
            {
                id: 1,
                name: 'Агронавигатор Кампус модель 4',
                amount: 1
            }
        ]
    },
    {
        id: 2,
        companyName: 'ИП Иванов Сергей Александрович',
        city: 'Новосибирск',
        items: [
            {
                id: 2,
                name: 'Агронавигатор Кампус модель 4',
                amount: 1
            },
            {
                id: 3,
                name: 'Агронавигатор Кампус модель 3',
                amount: 2
            },
            {
                id: 4,
                name: 'Агронавигатор Кампус модель 2',
                amount: 4
            }
        ]
    },
    {
        id: 3,
        companyName: 'ИП Иванов Сергей Александрович',
        city: 'Омск',
        items: [
            {
                id: 5,
                name: 'Агронавигатор Кампус модель 1',
                amount: 6
            }
        ]
    }
];
</script>

<style lang="scss" scoped>
small {
    color: var(--el-color-info);
}

.el-table:deep(.el-table__inner-wrapper) {
    &::before {
        display: none;
    }
}

.el-table:deep(.el-table__cell) {
    border: none;
}
</style>
