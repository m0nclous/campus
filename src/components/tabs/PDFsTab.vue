<template>
    <el-row :gutter="20">
        <el-col v-for="offer in offers" :key="offer.id" :span="6">
            <el-card>
                <h3>{{ offer.name }}</h3>
                <main>{{ offer.content }}</main>
                <el-link target="_blank" :href="offer.PDF.src" :underline="false">
                    <el-button type="success" round>
                        <el-icon size="1.4em">
                            <Download />
                        </el-icon>

                        <span>Скачать PDF</span>
                    </el-button>
                </el-link>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import type { PDF, CommercialOffer } from '@/types';

const PDF_file: PDF = {
    id: 1,
    src: 'https://www.africau.edu/images/default/sample.pdf'
};

const offers: CommercialOffer[] = [
    {
        id: 1,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        content: 'Двухчастотный GNSS навигатор',
        PDF: PDF_file
    },
    {
        id: 2,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        content: 'Двухчастотный GNSS навигатор',
        PDF: PDF_file
    },
    {
        id: 3,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        content: 'Двухчастотный GNSS навигатор',
        PDF: PDF_file
    },
    {
        id: 4,
        name: 'Навигатор «Кампус» Модель 4 + РТК',
        content: 'Двухчастотный GNSS навигатор',
        PDF: PDF_file
    }
];
</script>

<style lang="scss" scoped>
.el-row {
    row-gap: 20px;
}

:deep(*) {
    .el-card {
        margin: 5px 0;

        &__body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1em;
        }

        h3 {
            margin: 0;
        }
    }
}
</style>
