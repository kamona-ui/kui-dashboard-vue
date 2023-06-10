<script setup>
import { Icon } from '@iconify/vue'

defineProps({
    icon: {
        type: String,
        required: false
    },
    iconClasses: {
        type: String,
        default: 'w-5 h-5'
    },

})
</script>

<template>
    <div
        class="relative text-gray-500  focus-within:text-gray-900 dark:focus-within:text-gray-400"
    >
        <div
            aria-hidden="true"
            class="absolute inset-y-0 flex items-center px-4 pointer-events-none "
        >
            <Icon :icon="icon" :class="iconClasses" />
        </div>

        <slot />
    </div>
</template>
