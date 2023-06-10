<script setup>
import Button from '@/components/Button.vue'
import { sidebarState } from '@/composables'
</script>

<template>
    <div class="flex-shrink-0 px-3 lg:hidden">
        <Button
            icon-only
            variant="secondary"
            v-show="!sidebarState.isOpen"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            sr-text="Open sidebar"
            icon="mdi:menu-close"
        />
    </div>
</template>
