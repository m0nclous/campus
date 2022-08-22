<template>
    <main>
        <el-table :data="priceList">
            <el-table-column prop="name" label="Наименование" />
            <el-table-column prop="wholesalePrice" label="ОПТ" :formatter="currencyFormatter" />
            <el-table-column prop="recommendedRetailPrice" label="РРЦ" :formatter="currencyFormatter" />
        </el-table>
    </main>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import type { PriceListItem } from '@/types';
import { currencyRUB } from '@/helpers/filters';

const currencyFormatter = (row: PriceListItem, column: TableColumnCtx<PriceListItem>) => currencyRUB(row[column.property]);

const priceList: PriceListItem[] = [
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    },
    {
        name: 'Агронавигатор Кампус модель 3',
        wholesalePrice: 85000,
        recommendedRetailPrice: 95000
    }
];
</script>
