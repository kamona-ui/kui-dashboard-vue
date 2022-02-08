<template>
    <!-- Page Heading -->
    <header v-if="$slots.header || title">
        <div class="p-4 sm:p-6">
            <slot name="header">
                <h2 class="text-xl font-semibold leading-tight">{{ title }}</h2>
            </slot>
        </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1" :class="{ 'mt-6': !$slots.header }">
        <div class="grid gap-6 px-4 sm:px-6">
            <slot />
        </div>
    </main>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>
