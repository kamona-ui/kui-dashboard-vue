<script setup>
import { ref, toRefs } from 'vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { sidebarState } from '@/composables'

const props = defineProps({
    title: {
        type: String,
    },
    icon: {
        type: String,
        default: 'mdi:circle-outline',
    },
    active: {
        type: Boolean,
    },
})

const { active } = toRefs(props)

const isOpen = ref(active.value)

const beforeEnter = (el) => {
    el.style.maxHeight = `0px`
}

const enter = (el) => {
    el.style.maxHeight = `${el.scrollHeight}px`
}

const beforeLeave = (el) => {
    el.style.maxHeight = `${el.scrollHeight}px`
}

const leave = (el) => {
    el.style.maxHeight = `0px`
}
</script>

<template>
    <div class="relative">
        <SidebarLink
            :icon="icon"
            @click="isOpen = !isOpen"
            :title="title"
            :active="active"
        >
            <template #arrow>
                <span
                    v-show="sidebarState.isOpen || sidebarState.isHovered"
                    aria-hidden="true"
                    class="relative block w-6 h-6 ml-auto"
                >
                    <span
                        :class="[
                            'absolute right-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200',
                            {
                                '-rotate-45': isOpen,
                                'rotate-45': !isOpen,
                                'bg-white': active,
                                'bg-gray-400': !active,
                            },
                        ]"
                    ></span>
                    <span
                        :class="[
                            'absolute left-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200',
                            {
                                'rotate-45': isOpen,
                                '-rotate-45': !isOpen,
                                'bg-white': active,
                                'bg-gray-400': !active,
                            },
                        ]"
                    ></span>
                </span>
            </template>
        </SidebarLink>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
            appear
        >
            <div
                v-show="
                    isOpen && (sidebarState.isOpen || sidebarState.isHovered)
                "
                class="overflow-hidden transition-all duration-200 max-h-0"
            >
                <ul
                    class="relative px-0 pt-2 pb-0 ml-5 before:w-0 before:block before:absolute before:inset-y-0 before:left-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600"
                >
                    <slot />
                </ul>
            </div>
        </transition>
    </div>
</template>
