import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import routes from '@/router/routes'
import { useSidebar } from '@/composables'

const router = createRouter({
    history: createWebHashHistory('kui-dashboard-vue'),
    routes,
})

router.beforeEach(() => {
    NProgress.start()
})

const { close } = useSidebar()

router.afterEach(() => {
    if (window.innerWidth <= 1024) {
        close()
    }
    NProgress.done()
})

export default router
