<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <!-- Page Heading -->
    <header v-if="$slots.header || title" class="w-full flex-shrink-0">
        <slot name="header">
            <h2 class="text-xl font-semibold leading-tight">{{ title }}</h2>
        </slot>
    </header>

    <div
        class="flex w-full items-start gap-2 rounded-lg border border-transparent bg-yellow-500 p-4 text-white"
    >
        <span
            aria-hidden="true"
            class="iconify h-6 w-6 tabler--alert-triangle"
        ></span>

        <div>
            <h5 class="mb-1 font-medium leading-none tracking-tight">Alert</h5>
            <div>This template is not finished yet.</div>
        </div>
    </div>

    <!-- Page Content -->
    <main class="w-full flex-1">
        <slot />
    </main>
</template>
