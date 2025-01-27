<script setup>
import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import { sidebarState } from '@/composables'
</script>

<template>
    <div class="flex flex-shrink-0 items-center justify-between px-3">
        <router-link
            :to="{ name: 'Dashboard' }"
            class="inline-flex items-center gap-2"
        >
            <span class="sr-only">DashboardI</span>
            <Logo aria-hidden="true" class="h-auto w-10" />
        </router-link>

        <Button
            class="p-2"
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :sr-text="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <span
                aria-hidden="true"
                v-show="sidebarState.isOpen"
                :class="[
                    'iconify hidden tabler--menu lg:block',
                    iconSizeClasses,
                ]"
            ></span>

            <span
                aria-hidden="true"
                v-show="!sidebarState.isOpen"
                :class="[
                    'iconify hidden tabler--circle lg:block',
                    iconSizeClasses,
                ]"
            ></span>

            <span
                aria-hidden="true"
                :class="['iconify tabler--x lg:hidden', iconSizeClasses]"
            ></span>
        </Button>
    </div>
</template>
