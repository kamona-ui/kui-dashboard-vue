<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import StatisticsSection from '@/components/pages/dashboard/StatisticsSection.vue'
import SalesSection from '@/components/pages/dashboard/SalesSection.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'
import Button from '@/components/Button.vue'
</script>

<template>
    <PageWrapper>
        <template #header>
            <div
                class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
                <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>

                <Button
                    target="_blank"
                    href="https://github.com/kamona-ui/kui-dashboard-vue"
                    variant="black"
                    class="max-w-sm justify-center gap-2"
                    start-icon="tabler--brand-github"
                >
                    <span>Star on Github</span>
                </Button>
            </div>
        </template>

        <!-- Statistics section -->
        <StatisticsSection />

        <!-- Sales section -->
        <SalesSection />

        <!-- Latest users & transaction section -->
        <LatestSection />
    </PageWrapper>
</template>
