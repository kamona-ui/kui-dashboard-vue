<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen gap-4 py-6 bg-gray-100 dark:bg-dark-bg"
    >
        <div class="flex-shrink-0">
            <router-link :to="{ name: 'Dashboard' }">
                <Logo class="w-20 h-20" />
                <span class="sr-only">Dashboard</span>
            </router-link>
        </div>

        <main class="flex items-center flex-1 w-full sm:max-w-md">
            <div
                class="w-full px-6 py-4 overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-dark-eval-1"
            >
                <router-view></router-view>
            </div>
        </main>

        <PageFooter />
    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>