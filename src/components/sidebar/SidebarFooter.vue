<script setup>
import Button from '@/components/Button.vue'
import { useSidebar } from '@/composables'
import {
    MenuFoldLineRightIcon,
    MenuFoldLineLeftIcon,
} from '@/components/icons/outline'

const { isOpen, toggle } = useSidebar()
</script>

<template>
    <div class="flex-shrink-0 px-3 lg:hidden">
        <Button
            class="p-2"
            variant="secondary"
            v-slot="{ iconSizeClasses }"
            v-show="!isOpen"
            @click="toggle()"
            :sr-text="isOpen ? 'Close sidebar' : 'Open sidebar'"
        >
            <MenuFoldLineRightIcon
                aria-hidden="true"
                v-show="!isOpen"
                :class="iconSizeClasses"
            />

            <MenuFoldLineLeftIcon
                aria-hidden="true"
                v-show="isOpen"
                :class="iconSizeClasses"
            />
        </Button>
    </div>
</template>
