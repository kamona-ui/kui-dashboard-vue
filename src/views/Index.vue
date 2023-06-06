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
        <StatisticsSection />

        <!-- Sales section -->
        <SalesSection />

        <!-- Latest users & transaction section -->
        <LatestSection />
    </PageWrapper>
</template>

<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import StatisticsSection from '@/components/pages/dashboard/StatisticsSection.vue'
import SalesSection from '@/components/pages/dashboard/SalesSection.vue'
import LatestSection from '@/components/pages/dashboard/LatestSection.vue'
import Button from '@/components/Button.vue'
import { GithubIcon } from '@/components/icons/brands'
</script>