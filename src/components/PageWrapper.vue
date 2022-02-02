<template>
    <!-- Page Heading -->
    <header v-if="$slots.header">
        <div class="p-4 sm:p-6">
            <slot name="header" />
        </div>
    </header>

    <!-- Page Content -->
    <main class="mt-6 flex-1">
        <div class="grid gap-6 px-4 sm:px-6">
            <slot />
        </div>
    </main>
</template>
