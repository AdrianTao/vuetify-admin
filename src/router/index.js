import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
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
      meta: { title: '首页', icon: 'mdi-view-dashboard', affix: true }
    }]
  },

  {
    path: '/about',
    name: 'About',
    component: Layout,
    meta: { title: '关于', icon: 'mdi-cog' },
    children: [
      {
        path: 'about-us',
        name: 'AboutUs',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about-us.vue'),
        meta: { title: '关于我们', icon: 'mdi-cog' }
      },
      {
        path: 'about-you',
        name: 'AboutYou',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about-you.vue'),
        meta: { title: '关于你们', icon: 'mdi-cog' }
      },
      {
        path: 'about-they',
        name: 'AboutThey',
        meta: { title: '关于他们', icon: 'mdi-cog' },
        children: [
          {
            path: 'they1',
            name: 'they1',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/about-they/they2'),
            meta: { title: '他们1', icon: 'mdi-cog' }
          },
          {
            path: 'they2',
            name: 'they2',
            component: () => import(/* webpackChunkName: "about" */ '../views/about/about-they/they2'),
            meta: { title: '他们2', icon: 'mdi-cog' }
          }
        ]
      }
    ]
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

