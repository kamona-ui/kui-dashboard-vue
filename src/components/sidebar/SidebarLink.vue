<script setup>
import { sidebarState } from '@/composables'

defineProps({
    href: {
        type: String,
        required: false,
    },
    to: {
        type: [String, Object],
        required: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: 'tabler--circle',
    },
})
</script>

<template>
    <a
        v-if="href"
        :href="href"
        :class="[
            'flex items-center gap-2 rounded-md p-2 transition-colors',
            {
                'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                    !active,
                'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                    active,
            },
        ]"
    >
        <span
            aria-hidden="true"
            :class="['iconify h-6 w-6 flex-shrink-0', icon]"
        ></span>

        <span
            class="text-base font-medium"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            >{{ title }}</span
        >
    </a>
    <router-link
        v-else-if="to"
        :to="to"
        :class="[
            'flex items-center gap-2 rounded-md p-2 transition-colors',
            {
                'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                    !active,
                'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                    active,
            },
        ]"
    >
        <span
            aria-hidden="true"
            :class="['iconify h-6 w-6 flex-shrink-0', icon]"
        ></span>

        <span
            class="text-base font-medium"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
        >
            {{ title }}
        </span>
    </router-link>
    <button
        v-else
        type="button"
        :class="[
            'flex w-full items-center gap-2 rounded-md p-2 transition-colors',
            {
                'text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-dark-eval-2 dark:hover:text-gray-300':
                    !active,
                'bg-purple-500 text-white shadow-lg hover:bg-purple-600':
                    active,
            },
        ]"
    >
        <span
            aria-hidden="true"
            :class="['iconify h-6 w-6 flex-shrink-0', icon]"
        ></span>

        <span
            class="text-base font-medium"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
            >{{ title }}</span
        >
        <slot name="arrow" />
    </button>
</template>
