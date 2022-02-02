<template>
    <div class="min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-bg dark:text-gray-100">
        <Sidebar />

        <div
            style="transition-property: margin; transition-duration: 150ms"
            :class="[
                'min-h-screen flex flex-col',
                {
                    'lg:ml-64': sidebarState.isOpen,
                    'md:ml-16': !sidebarState.isOpen,
                },
            ]"
        >
            <Navbar />

            <router-view></router-view>

            <PageFooter />
        </div>
    </div>
</template>

<script setup>
import { sidebarState } from '@/composables'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>
