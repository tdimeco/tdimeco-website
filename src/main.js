import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import './styles/main.less'
import './.htaccess'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/app/app.vue'
import HomePage from './components/home-page/home-page.vue'
import AboutPage from './components/about-page/about-page.vue'

// Router

Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage
    }, {
      name: 'about',
      path: '/about',
      component: AboutPage
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

// Render the app

new Vue({
  el: '#app',
  render: (function(h) { return h(App) }),
  router: router
})
