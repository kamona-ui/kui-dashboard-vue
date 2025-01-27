<script setup>
import Logo from '@/components/Logo.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
    <div
        class="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 py-6 dark:bg-dark-eval-0"
    >
        <div class="flex-shrink-0">
            <router-link :to="{ name: 'Dashboard' }">
                <Logo class="h-20 w-20" />
                <span class="sr-only">Dashboard</span>
            </router-link>
        </div>

        <main class="flex w-full flex-1 items-center sm:max-w-md">
            <div
                class="w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-dark-eval-1 sm:rounded-lg"
            >
                <router-view></router-view>
            </div>
        </main>

        <PageFooter />
    </div>
</template>
