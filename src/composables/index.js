import { useDark, useToggle } from '@vueuse/core'
import { reactive, ref } from 'vue'

export const isDark = useDark()

// export const toggleDarkMode = useToggle(isDark)
export const toggleDarkMode = () => {
    isDark.value = !isDark.value

    document.dispatchEvent(new CustomEvent('scheme:changed', {}))
}

export const scrolling = reactive({
    down: false,
    up: false,
})

let lastScrollTop = 0

export const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        // downscroll
        scrolling.down = true
        scrolling.up = false
    } else {
        // upscroll
        scrolling.down = false
        scrolling.up = true
        if (st == 0) {
            //  reset
            scrolling.down = false
            scrolling.up = false
        }
    }
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
}

const isOpen = ref(window.innerWidth > 1024)

const isHovered = ref(false)

export const useSidebar = () => {
    const open = () => {
        isOpen.value = true
    }

    const close = () => {
        isOpen.value = false
    }

    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    const handleHover = (v) => {
        if (window.innerWidth < 1024) {
            return
        }

        isHovered.value = v
    }

    const handleWindowResize = () => {
        if (!isOpen.value) return
        if (window.innerWidth <= 1024) {
            isOpen.value = false
        } else {
            isOpen.value = true
        }
    }

    return {
        isOpen,
        isHovered,
        open,
        close,
        toggle,
        handleHover,
        handleWindowResize,
    }
}
