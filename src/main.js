import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/less/bootstrap.less'

import './.htaccess'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/app/app.vue'
import Home from './components/home/home.vue'
import About from './components/about/about.vue'

// Router
Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    }, {
      name: 'about',
      path: '/about',
      component: About
    }
  ]
})

// Render the app
new Vue({
  el: '#app',
  render: (function(h) { return h(App) }),
  router: router
})
