<script setup>
import { toRefs, computed, useAttrs } from 'vue'
import { twMerge, twJoin } from 'tailwind-merge'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator(value) {
            return [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'black',
            ].includes(value)
        },
    },
    type: {
        type: String,
        default: 'button',
    },
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['sm', 'base', 'lg'].includes(value)
        },
    },
    squared: {
        type: Boolean,
        default: false,
    },
    pill: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
    },
    to: {
        type: [String, Object],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    srText: {
        type: String || undefined,
        default: undefined,
    },
    icon: {
        type: String || undefined,
        default: undefined,
    },
    startIcon: {
        type: String || undefined,
        default: undefined,
    },
    endIcon: {
        type: String || undefined,
        default: undefined,
    },
})

const emit = defineEmits(['click'])

const {
    type,
    variant,
    size,
    squared,
    pill,
    href,
    srText,
    startIcon,
    endIcon,
    icon,
} = props

const { disabled } = toRefs(props)

const baseClasses =
    'inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-eval-2'

let variantClasses = ''
switch (variant) {
    case 'primary':
        variantClasses =
            'bg-primary text-white hover:bg-primary-dark focus:ring-primary'
        break
    case 'secondary':
        variantClasses =
            'bg-white text-gray-500 hover:bg-gray-100 focus:ring-primary dark:text-gray-400 dark:bg-dark-eval-1 dark:hover:bg-dark-eval-2 dark:hover:text-gray-200'
        break
    case 'success':
        variantClasses =
            'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
        break
    case 'info':
        variantClasses =
            'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500'
        break
    case 'warning':
        variantClasses =
            'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500'
        break
    case 'danger':
        variantClasses =
            'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
        break
    case 'black':
        variantClasses =
            'bg-black text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-black dark:hover:bg-dark-eval-3'
        break
}

const classes = twMerge(
    baseClasses,
    variantClasses,
    !squared && !pill && 'rounded-md',
    pill && 'rounded-full',
    href && disabled.value && 'pointer-events-none opacity-50',
    size == 'sm' && (icon ? 'p-1.5' : 'px-2.5 py-1.5 text-sm'),
    size == 'base' && (icon ? 'p-2' : 'px-4 py-2'),
    size == 'lg' && (icon ? 'p-3' : 'px-5 py-2 text-xl'),
    useAttrs().class,
)

const iconSizeClasses = [
    {
        'w-5 h-5': size == 'sm',
        'w-6 h-6': size == 'base',
        'w-7 h-7': size == 'lg',
    },
]

const handleClick = (e) => {
    if (disabled.value) {
        e.preventDefault()
        e.stopPropagation()
        return
    }
    emit('click', e)
}
</script>

<template>
    <router-link
        v-if="to"
        :to="!disabled ? to : null"
        :class="classes"
        :aria-disabled="disabled.toString()"
    >
        <span v-if="srText" class="sr-only">{{ srText }}</span>

        <span
            aria-hidden="true"
            v-if="startIcon"
            :class="['iconify', startIcon, iconSizeClasses]"
        ></span>

        <span
            aria-hidden="true"
            v-if="icon"
            :class="['iconify', icon, iconSizeClasses]"
        ></span>

        <slot :iconSizeClasses="iconSizeClasses" />

        <span
            aria-hidden="true"
            v-if="endIcon"
            :class="['iconify', endIcon, iconSizeClasses]"
        ></span>
    </router-link>
    <a
        v-else-if="href"
        :href="!disabled ? href : null"
        :class="classes"
        :aria-disabled="disabled.toString()"
    >
        <span v-if="srText" class="sr-only">{{ srText }}</span>

        <span
            aria-hidden="true"
            v-if="startIcon"
            :class="['iconify', startIcon, iconSizeClasses]"
        ></span>

        <span
            aria-hidden="true"
            v-if="icon"
            :class="['iconify', icon, iconSizeClasses]"
        ></span>

        <slot :iconSizeClasses="iconSizeClasses" />

        <span
            aria-hidden="true"
            v-if="endIcon"
            :class="['iconify', endIcon, iconSizeClasses]"
        ></span>
    </a>
    <button
        v-else
        :type="type"
        :class="classes"
        @click="handleClick"
        :disabled="disabled"
    >
        <span v-if="srText" class="sr-only">{{ srText }}</span>

        <span
            aria-hidden="true"
            v-if="startIcon"
            :class="['iconify', startIcon, iconSizeClasses]"
        ></span>

        <span
            aria-hidden="true"
            v-if="icon"
            :class="['iconify', icon, iconSizeClasses]"
        ></span>

        <slot :iconSizeClasses="iconSizeClasses" />

        <span
            aria-hidden="true"
            v-if="endIcon"
            :class="['iconify', endIcon, iconSizeClasses]"
        ></span>
    </button>
</template>
