<script setup>
import { useSidebar } from '@/composables'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'

const { isOpen } = useSidebar()
</script>

<template>
    <div
        class="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-dark-eval-0 dark:text-gray-100"
    >
        <Sidebar />

        <div
            :class="[
                'flex min-h-screen flex-1 flex-col transition-[margin] duration-150 md:ms-16',
                {
                    'lg:ms-64': isOpen,
                },
            ]"
        >
            <Navbar />

            <div
                class="container mx-auto flex flex-1 flex-col items-center gap-4 p-4 sm:gap-6 sm:p-6"
            >
                <router-view></router-view>

                <PageFooter />
            </div>
        </div>
    </div>
</template>
