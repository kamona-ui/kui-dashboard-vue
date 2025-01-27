<script setup>
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard.vue'

const customersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const visitsData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13].reverse()
const ordersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const growthData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
</script>

<template>
    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <h2 class="sr-only">Quick statistics</h2>

        <!-- Customers card -->
        <QuiclStatisticsCard
            title="Customers"
            :chartData="customersData"
            result="12.4k"
            percentage="32.40%"
            :actions="[{ title: 'View', to: '#' }]"
            icon="tabler--users-group"
        />

        <!-- Visits card -->
        <QuiclStatisticsCard
            title="Visits"
            :chartData="visitsData"
            result="-2.6k"
            status="danger"
            percentage="-2.10%"
            :actions="[{ title: 'View', to: '#' }]"
            icon="tabler--eye"
        />

        <!-- Orders card -->
        <QuiclStatisticsCard
            title="Orders"
            :chartData="ordersData"
            result="34.4k"
            status="warning"
            percentage="0.60%"
            :actions="[{ title: 'View', to: '#' }]"
            icon="tabler--shopping-cart"
        />

        <!-- Growth card -->
        <QuiclStatisticsCard
            title="Growth"
            :chartData="growthData"
            result="15.6%"
            percentage="7.20%"
            :actions="[{ title: 'View', to: '#' }]"
            icon="tabler--chart-pie"
        />
    </section>
</template>
