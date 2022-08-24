<template>
    <main>
        <el-tabs v-model="activeTab">
            <el-tab-pane label="Персональные данные" name="personalData">
                <PersonalDataTab />
            </el-tab-pane>

            <el-tab-pane label="История заказов" name="purchaseHistory">
                <PurchaseHistoryTab />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import PersonalDataTab from '@/components/tabs/PersonalDataTab.vue';
import PurchaseHistoryTab from '@/components/tabs/PurchaseHistoryTab.vue';

const activeTab = ref('personalData');
</script>
