<template>
    <PageWrapper>
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>
                <Button
                    target="_blank"
                    href="https://github.com/kamona-ui/kui-dashboard-vue"
                    variant="black"
                    class="justify-center max-w-sm gap-2"
                    v-slot="{ iconSizeClasses }"
                >
                    <GithubIcon aria-hidden="true" :class="iconSizeClasses" />
                    <span>Star on Github</span>
                </Button>
            </div>
        </template>

        <!-- Statistics section -->
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <h2 class="sr-only">Quick statistics</h2>

            <!-- Customers card -->
            <QuiclStatisticsCard
                title="Customers"
                :chartData="customersData"
                result="12.4k"
                percentage="32.40%"
            >
                <template #icon="{ sizeClasses }">
                    <UserGroupIcon aria-hidden="true" :class="sizeClasses" />
                </template>
            </QuiclStatisticsCard>

            <!-- Visits card -->
            <QuiclStatisticsCard
                title="Visits"
                :chartData="visitsData"
                result="-2.6k"
                status="danger"
                percentage="-2.10%"
            >
                <template #icon="{ sizeClasses }">
                    <EyeIcon aria-hidden="true" :class="sizeClasses" />
                </template>
            </QuiclStatisticsCard>

            <!-- Orders card -->
            <QuiclStatisticsCard
                title="Orders"
                :chartData="ordersData"
                result="34.4k"
                status="warning"
                percentage="0.60%"
            >
                <template #icon="{ sizeClasses }">
                    <ShoppingCartIcon aria-hidden="true" :class="sizeClasses" />
                </template>
            </QuiclStatisticsCard>

            <!-- Growth card -->
            <QuiclStatisticsCard
                title="Growth"
                :chartData="growthData"
                result="15.6%"
                percentage="7.20%"
            >
                <template #icon="{ sizeClasses }">
                    <ChartPieIcon aria-hidden="true" :class="sizeClasses" />
                </template>
            </QuiclStatisticsCard>
        </section>

        <section>
            <h2
                class="text-2xl text-red-400 animate-pulse"
            >Still in design phase, Will be available soon.</h2>
        </section>
    </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import Button from '@/components/Button.vue'
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard.vue'
import { GithubIcon } from '@/components/icons/brands'
import { UserGroupIcon, EyeIcon, ShoppingCartIcon, ChartPieIcon } from '@heroicons/vue/outline'

const customersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const visitsData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13].reverse()
const ordersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
const growthData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
</script>
