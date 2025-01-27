<script setup>
import { ref, toRefs } from 'vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { useSidebar } from '@/composables'

const { isOpen: isSidebarOpen, isHovered } = useSidebar()

const props = defineProps({
    title: {
        type: String,
    },
    icon: {
        type: String,
        default: 'tabler--circle',
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
                    v-show="isSidebarOpen || isHovered"
                    aria-hidden="true"
                    class="relative ml-auto block h-6 w-6"
                >
                    <span
                        :class="[
                            'absolute right-[9px] top-1/2 mt-[-5px] h-2 w-[2px] transition-all duration-200',
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
                            'absolute left-[9px] top-1/2 mt-[-5px] h-2 w-[2px] transition-all duration-200',
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
                v-show="isOpen && (isSidebarOpen || isHovered)"
                class="max-h-0 overflow-hidden transition-all duration-200"
            >
                <ul
                    class="relative ml-5 px-0 pb-0 pt-2 before:absolute before:inset-y-0 before:left-0 before:block before:w-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600"
                >
                    <slot />
                </ul>
            </div>
        </transition>
    </div>
</template>
