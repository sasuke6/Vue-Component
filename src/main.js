// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Todos from './components/Todos'
import Todo from './components/Todo'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Todos },
  { path: '/todo/:id', component: Todo , name: 'todo'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
