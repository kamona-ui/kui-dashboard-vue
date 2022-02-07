<template>
    <section class="grid grid-cols-1">
        <h2 class="sr-only">Sales charts</h2>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                <div class="grid grid-cols-2 gap-6">
                    <!-- Today's user -->
                    <BaseCard no-header bg-classes="bg-purple-500">
                        <div class="p-2 grid grid-cols-1 gap-4">
                            <UserAddIcon class="w-10 h-10 text-white" />

                            <div class="grid gap-2">
                                <p class="text-base font-medium text-green-300">+1%</p>
                                <p class="text-3xl font-medium text-white">1,210</p>
                            </div>

                            <p class="text-sm font-medium text-white">Today's Users</p>
                        </div>
                    </BaseCard>

                    <!-- Today's sales -->
                    <BaseCard no-header bg-classes="bg-cyan-500">
                        <div class="p-2 grid grid-cols-1 gap-4">
                            <ChartBarIcon class="w-10 h-10 text-white" />

                            <div class="grid gap-2">
                                <p class="text-base font-medium text-green-300">+4%</p>
                                <p class="text-3xl font-medium text-white">20,350</p>
                            </div>

                            <p class="text-sm font-medium text-white">Today's Sales</p>
                        </div>
                    </BaseCard>
                </div>

                <!-- Earning card -->
                <BaseCard noHeader class="grid grid-cols-2">
                    <div class="grid grid-cols-1 gap-4">
                        <h4 class="text-2xl font-medium">Earning</h4>
                        <p class="text-lg font-medium text-gray-500">This Month</p>
                        <p class="text-base font-medium text-green-400">+20.5%</p>
                        <p class="text-2xl font-medium text-gray-600">$5070.80</p>
                    </div>

                    <!-- Donut chart -->
                    <div class="w-full h-fullflex items-center justify-center">
                        <div ref="earningChartEl"></div>
                    </div>
                </BaseCard>
            </div>

            <!-- Bar chart -->
            <BaseCard title="Salas Analytics" :actions="[{ title: 'View', to: '#' }]">
                <div ref="salesChartEl"></div>
            </BaseCard>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ApexCharts from 'apexcharts'
import { UserAddIcon, ChartBarIcon } from '@heroicons/vue/outline'
import BaseCard from '@/components/BaseCard.vue'


const earningChartEl = ref(null)
const salesChartEl = ref(null)

onMounted(() => {
    let earningChart = new ApexCharts(earningChartEl.value, {
        series: [30, 70],
        chart: {
            type: 'donut',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: { show: false },
        comparedResult: [2, 8],
        labels: ['Sales', ''],
        stroke: { width: 0 },
        colors: ['#a855f7', '#e2e8f0'],
        grid: {
            padding: {
                right: -20,
                bottom: -8,
                left: -20,
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            offsetY: 15,
                        },
                        value: {
                            offsetY: -20,
                            formatter(val) {
                                return `${parseInt(val)}%`
                            },
                        },
                        total: {
                            show: true,
                            label: 'Sales',
                            formatter() {
                                return '30%'
                            },
                        },
                    },
                },
            },
        },
    })
    earningChart.render()

    let salesChart = new ApexCharts(salesChartEl.value, {
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        legend: {
            position: 'top',
        },
        chart: {
            height: '100%',
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    })

    salesChart.render()
})
</script>
