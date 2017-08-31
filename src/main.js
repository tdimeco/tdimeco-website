import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import './styles/main.less'
import './.htaccess'

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/app/component.vue'
import HomePage from './components/home-page/component.vue'
import AppsPage from './components/apps-page/component.vue'
import FreelancePage from './components/freelance-page/component.vue'
import AboutPage from './components/about-page/component.vue'
import TermsPage from './components/terms-page/component.vue'

// Router

Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  routes: [{
    name: 'home',
    path: '/',
    component: HomePage
  }, {
    name: 'apps',
    path: '/apps',
    component: AppsPage
  }, {
    name: 'freelance',
    path: '/freelance',
    component: FreelancePage
  }, {
    name: 'about',
    path: '/about',
    component: AboutPage
  }, {
    name: 'terms',
    path: '/terms',
    component: TermsPage
  }, {
    path: '*',
    redirect: '/'
  }]
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

// Render the app

new Vue({
  el: '#app',
  render: (function(h) { return h(App) }),
  router: router
})
