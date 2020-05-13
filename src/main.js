import Vue from 'vue'
import App from './App.vue'
import AppliancesView from '@/views/AppliancesView.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

let router = new VueRouter({
  base: '/appliances_frontend/',
  routes: [
    { path: '/', name: 'appliances#index', component: AppliancesView },
    // { path: '/appliances/:id', name: 'appliances#show', component: AppliancesShowView }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
