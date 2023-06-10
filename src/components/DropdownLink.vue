<script setup>
import { MenuItem } from '@headlessui/vue'
</script>

<template>
    <MenuItem v-slot="{ active, disabled }">
        <router-link
            :class="[
                'block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out focus:outline-none dark:focus:text-white dark:focus:bg-dark-eval-3 dark:text-gray-400',
                {
                    'bg-gray-100 dark:text-gray-200 dark:bg-dark-eval-3':
                        active,
                    'pointer-events-none': disabled,
                },
            ]"
        >
            <slot />
        </router-link>
    </MenuItem>
</template>
