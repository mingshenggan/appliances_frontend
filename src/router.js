import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/AppliancesIndex.vue'),
  },
]

export default new Router({
  base: '/appliances_frontend/',
  mode: 'history',
  routes: routes.map((route) => ({
    name: route.name,
    path: route.path,
    component: route.component,
  })),
})
