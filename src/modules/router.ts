import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: setupLayouts(routes),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    else
      return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path)
    NProgress.start()
  next()
})

router.afterEach((to, from) => {
  if (to.path !== from.path)
    NProgress.done()
})

export default router
