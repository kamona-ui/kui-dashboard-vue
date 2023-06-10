<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'

const props = defineProps({
    settings: {
        type: Object,
        default: {},
    },
    tagname: {
        type: String,
        default: 'div',
    }
})

const { settings, tagname } = props

let ps = null

const update = () => {
    if (ps) {
        ps.update()
    }
}

const el = ref(null)

onMounted(() => {
    ps = new PerfectScrollbar(el.value, settings)
})

onUnmounted(() => {
    ps.destroy()
})
</script>

<template>
    <component :is="tagname" ref="el" @mouseover.once="update">
        <slot />
    </component>
</template>

<style>
@import "perfect-scrollbar/css/perfect-scrollbar.css";

.dark .ps__rail-y,
.dark .ps__rail-x {
    background-color: transparent !important;
}
</style>
