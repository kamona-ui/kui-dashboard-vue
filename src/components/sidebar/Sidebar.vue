<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useSidebar } from '@/composables'
import SidebarHeader from '@/components/sidebar/SidebarHeader.vue'
import SidebarContent from '@/components/sidebar/SidebarContent.vue'
import SidebarFooter from '@/components/sidebar/SidebarFooter.vue'

const { isOpen, isHovered, close, handleHover, handleWindowResize } =
    useSidebar()

onMounted(() => {
    window.addEventListener('resize', handleWindowResize)

    onUnmounted(() => {
        window.removeEventListener('resize', handleWindowResize)
    })
})
</script>

<template>
    <transition
        enter-active-class="transition"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-show="isOpen"
            @click="close()"
            class="fixed inset-0 z-40 bg-black/50 duration-700 md:hidden"
        ></div>
    </transition>

    <aside
        style="
            transition-property: width, transform;
            transition-duration: 150ms;
        "
        :class="[
            'fixed inset-y-0 z-40 flex w-64 -translate-x-full flex-col gap-6 bg-white py-3 shadow-lg transition-all duration-200 dark:bg-dark-eval-1 md:transition-[width] lg:translate-x-0',
            {
                'w-64 translate-x-0': isOpen || isHovered,
                'w-64 -translate-x-full md:w-16 md:translate-x-0':
                    !isOpen && !isHovered,
            },
        ]"
        @mouseenter="handleHover(true)"
        @mouseleave="handleHover(false)"
    >
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter />
    </aside>
</template>
