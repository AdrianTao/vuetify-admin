import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
    hidden: true
  },
  
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "page404" */ '@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Home'),
      meta: { title: '首页', icon: 'home', affix: true }
    }]
  },

  {
    path: '/about',
    component: Layout,
    children: [{
      path: 'about-page',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: { title: '关于', icon: 'home', affix: true }
    }]
    
  }
]

export const asyncRoutes = []

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

