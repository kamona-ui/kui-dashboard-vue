<script setup>
import Button from '@/components/Button.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

defineProps({
    noHeader: {
        type: Boolean,
        default: false,
    },

    bgClasses: {
        type: String,
        default: 'bg-white dark:bg-dark-eval-1',
    },

    title: String,

    actions: {
        type: Array,
        default: [],
    },
})
</script>

<template>
    <div :class="['rounded-md p-4 shadow-md', bgClasses]">
        <!-- Card header -->
        <div class="flex items-center justify-between" v-if="!noHeader">
            <slot name="header">
                <h4 class="text-lg font-medium">{{ title }}</h4>
            </slot>

            <!-- Card actions -->
            <Menu as="div" class="relative" v-if="actions.length">
                <!-- Trigger -->
                <MenuButton as="span">
                    <Button
                        sr-text="Card Actions"
                        icon="tabler--dots"
                        size="sm"
                        variant="secondary"
                    >
                    </Button>
                </MenuButton>

                <!-- Dropdwon menu -->
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 z-30 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-eval-1"
                    >
                        <div class="px-1 py-1">
                            <MenuItem
                                v-slot="{ active }"
                                v-for="({ to, title }, i) in actions"
                                :key="i"
                            >
                                <router-link
                                    :class="[
                                        'block w-full px-4 py-2 text-left text-sm leading-5 transition duration-150 ease-in-out',
                                        'focus:outline-none',
                                        {
                                            'bg-gray-100 dark:bg-dark-eval-3 dark:text-white':
                                                active,
                                            'text-gray-700 dark:text-gray-400':
                                                !active,
                                        },
                                    ]"
                                    :to="to"
                                    >{{ title }}</router-link
                                >
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>

        <!-- Card body -->
        <slot />
    </div>
</template>
