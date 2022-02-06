<template>
    <div class="flex-shrink-0 px-3 lg:hidden">
        <Button
            iconOnly
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="!sidebarState.isOpen"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            :srText="sidebarState.isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show="sidebarState.isOpen"
                :class="[iconSizeClasses]"
            />

            <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show="!sidebarState.isOpen"
                :class="[iconSizeClasses]"
            />
        </Button>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { sidebarState } from '@/composables'
</script>
