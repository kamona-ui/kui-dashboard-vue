import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router/routes'
import { sidebarState } from '@/composables'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach(() => {
  if (window.innerWidth <= 1024) {
    sidebarState.isOpen = false
  }
})

export default router
