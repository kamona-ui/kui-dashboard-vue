<script setup>
import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import { useSidebar } from '@/composables'
import {
    MenuFoldLineRightIcon,
    MenuFoldLineLeftIcon,
} from '@/components/icons/outline'

const { isOpen, isHovered, toggle } = useSidebar()
</script>

<template>
    <div class="flex flex-shrink-0 items-center justify-between px-3">
        <router-link
            :to="{ name: 'Dashboard' }"
            class="inline-flex items-center gap-2"
        >
            <span class="sr-only">Dashboard</span>
            <Logo aria-hidden="true" class="h-auto w-10" />
        </router-link>

        <Button
            class="p-2"
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="isOpen || isHovered"
            @click="toggle()"
            :sr-text="isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show="!isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show="isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <span
                aria-hidden="true"
                :class="['iconify tabler--x lg:hidden', iconSizeClasses]"
            ></span>
        </Button>
    </div>
</template>
