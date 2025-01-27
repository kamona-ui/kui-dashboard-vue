<script setup>
import BaseCard from '@/components/BaseCard.vue'
import Button from '@/components/Button.vue'
</script>

<template>
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <h2 class="sr-only">Latest users</h2>

        <!-- Latest users -->
        <BaseCard title="Latest Users" :actions="[{ title: 'View', to: '#' }]">
            <!-- Table -->
        </BaseCard>

        <!-- Recent cards -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            <!-- Recent contacts -->
            <BaseCard
                title="Recent Contacts"
                :actions="[{ title: 'View', to: '#' }]"
            >
                <div
                    class="mt-4 flex items-center justify-between"
                    v-for="i in 4"
                    :key="i"
                >
                    <div class="flex items-center gap-2">
                        <img
                            class="h-10 w-10 rounded-md object-cover"
                            src="/images/1.png"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                Name
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                email@example.com
                            </p>
                        </div>
                    </div>
                    <Button
                        sr-text="Actions"
                        size="sm"
                        icon="tabler--dots-vertical"
                        variant="secondary"
                    />
                </div>
            </BaseCard>

            <!-- Recent transactions -->
            <BaseCard
                title="Recent Transactions"
                :actions="[{ title: 'View', to: '#' }]"
            >
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            :class="[
                                'iconify h-6 w-6 text-green-500 tabler--circle-plus',
                            ]"
                        ></span>

                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                Gillette
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                17 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-green-500"
                        >+$360.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            :class="[
                                'iconify h-6 w-6 text-red-500 tabler--circle-minus',
                            ]"
                        ></span>
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                IBM
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                01 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-red-500"
                        >-$254.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            :class="[
                                'iconify h-6 w-6 text-gray-500 tabler--circle',
                            ]"
                        ></span>

                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                Louis Vuitton
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                8 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-gray-500"
                        >Pending</span
                    >
                </div>
            </BaseCard>
        </div>
    </section>
</template>
