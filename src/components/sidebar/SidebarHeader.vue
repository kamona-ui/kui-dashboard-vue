<template>
    <div class="flex items-center justify-between flex-shrink-0 px-3">
        <router-link :to="{ name: 'Dashboard' }" class="inline-flex items-center gap-2">
            <span class="sr-only">K-UI</span>
            <Logo aria-hidden="true" class="w-10 h-auto" />
        </router-link>

        <Button
            iconOnly
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :srText="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show="sidebarState.isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show="!sidebarState.isOpen"
                :class="['hidden lg:block', iconSizeClasses]"
            />

            <XIcon aria-hidden="true" :class="['lg:hidden', iconSizeClasses]" />
        </Button>
    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { XIcon } from '@heroicons/vue/outline'
import { sidebarState } from '@/composables'
</script>
