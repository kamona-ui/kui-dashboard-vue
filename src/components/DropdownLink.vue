<script setup>
import { MenuItem } from '@headlessui/vue'
</script>

<template>
    <MenuItem v-slot="{ active, disabled }">
        <router-link
            :class="[
                'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out focus:outline-none dark:text-gray-400 dark:focus:bg-dark-eval-3 dark:focus:text-white',
                {
                    'bg-gray-100 dark:bg-dark-eval-3 dark:text-gray-200':
                        active,
                    'pointer-events-none': disabled,
                },
            ]"
        >
            <slot />
        </router-link>
    </MenuItem>
</template>
