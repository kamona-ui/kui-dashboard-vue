<script setup>
import { computed } from 'vue'
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const props = defineProps({
    align: {
        default: 'right',
    },
    width: {
        default: '48',
    },
    contentClasses: {
        default: () => ['py-1', 'bg-white dark:bg-dark-eval-1'],
    },
})

const widthClass = computed(() => {
    return {
        48: 'w-48',
    }[props.width.toString()]
})

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'origin-top-left left-0'
    } else if (props.align === 'right') {
        return 'origin-top-right right-0'
    } else {
        return 'origin-top'
    }
})
</script>

<template>
    <Menu as="div" class="relative">
        <MenuButton as="div">
            <slot name="trigger" />
        </MenuButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="absolute z-50 mt-2 rounded-md shadow-lg"
                :class="[widthClass, alignmentClasses]"
                @click="open = false"
            >
                <div
                    class="rounded-md ring-1 ring-black ring-opacity-5"
                    :class="contentClasses"
                >
                    <slot name="content" />
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
