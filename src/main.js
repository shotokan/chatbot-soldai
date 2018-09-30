import Vue from 'vue'
import App from './App.vue'
import Chat from 'vue-beautiful-chat'
import VueRouter from 'vue-router'

import routes from '@/routes'

// plugins

Vue.use(VueRouter)
Vue.use(Chat)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
