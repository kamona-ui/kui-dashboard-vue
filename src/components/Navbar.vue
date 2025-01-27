<script setup>
import { onMounted, onUnmounted } from 'vue'
import {
    handleScroll,
    isDark,
    scrolling,
    toggleDarkMode,
    sidebarState,
} from '@/composables'
import Button from '@/components/Button.vue'
import Logo from '@/components/Logo.vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownLink from '@/components/DropdownLink.vue'

onMounted(() => {
    document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav
        aria-label="secondary"
        :class="[
            'sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 transition-transform duration-500 dark:bg-dark-eval-1',
            {
                '-translate-y-full': scrolling.down,
                'translate-y-0': scrolling.up,
            },
        ]"
    >
        <div class="flex items-center gap-2">
            <Button
                class="p-2 md:hidden"
                variant="secondary"
                @click="toggleDarkMode"
                v-slot="{ iconSizeClasses }"
                srText="Toggle dark mode"
            >
                <span
                    aria-hidden="true"
                    v-show="!isDark"
                    :class="['iconify tabler--moon', iconSizeClasses]"
                ></span>

                <span
                    aria-hidden="true"
                    v-show="isDark"
                    :class="['iconify tabler--sun', iconSizeClasses]"
                ></span>
            </Button>
        </div>

        <div class="flex items-center gap-2">
            <Button
                variant="secondary"
                @click="toggleDarkMode()"
                v-slot="{ iconSizeClasses }"
                class="hidden p-2 md:inline-flex"
                srText="Toggle dark mode"
            >
                <span
                    aria-hidden="true"
                    v-show="!isDark"
                    :class="['iconify tabler--moon', iconSizeClasses]"
                ></span>

                <span
                    aria-hidden="true"
                    v-show="isDark"
                    :class="['iconify tabler--sun', iconSizeClasses]"
                ></span>
            </Button>

            <!-- Dropdwon -->
            <Dropdown align="right" width="48">
                <template #trigger>
                    <button
                        class="flex rounded-md border-2 border-transparent text-sm transition focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark-eval-1"
                    >
                        <img
                            class="h-8 w-8 rounded-md object-cover"
                            src="/images/avatar.jpeg"
                            alt="Ahmed Kamel"
                        />
                    </button>
                </template>
                <template #content>
                    <DropdownLink to="#">Log Out</DropdownLink>
                </template>
            </Dropdown>
        </div>
    </nav>

    <!-- Mobile bottom bar -->
    <div
        :class="[
            'fixed inset-x-0 z-10 bottom-0 flex items-center justify-between bg-white px-4 py-4 transition-transform duration-500 dark:bg-dark-eval-1 sm:px-6 md:hidden',
            {
                'translate-y-full': scrolling.down,
                'translate-y-0': scrolling.up,
            },
        ]"
    >
        <Button
            icon="tabler--search"
            iconOnly
            variant="secondary"
            srText="Search"
        />

        <router-link :to="{ name: 'Dashboard' }">
            <Logo aria-hidden="true" class="h-10 w-10" />
            <span class="sr-only">Dashboard</span>
        </router-link>

        <Button
            icon="tabler--menu"
            variant="secondary"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            class="md:hidden"
            srText="toggle menu"
        />
    </div>
</template>
