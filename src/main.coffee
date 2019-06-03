import './styles/main.less'
import './.htaccess'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMatomo from 'vue-matomo'

import App from './components/app/component.vue'
import HomePage from './components/home-page/component.vue'
import AppsPage from './components/apps-page/component.vue'
import FreelancePage from './components/freelance-page/component.vue'
import PhotosPage from './components/photos-page/component.vue'
import AboutPage from './components/about-page/component.vue'
import TermsPage from './components/terms-page/component.vue'

# Vue Router
Vue.use(VueRouter)

router = new VueRouter(
  mode: 'history'
  routes: [
    {
      name: 'home'
      path: '/'
      component: HomePage
      title: 'Site web personnel'
    }, {
      name: 'apps'
      path: '/apps'
      component: AppsPage
      title: 'Apps'
    }, {
      name: 'freelance'
      path: '/freelance'
      component: FreelancePage
      title: 'Freelance'
    }, {
      name: 'photos'
      path: '/photos'
      component: PhotosPage
      title: 'Photos'
    }, {
      name: 'about'
      path: '/about'
      component: AboutPage
      title: 'À propos'
    }, {
      name: 'terms'
      path: '/terms'
      component: TermsPage
      title: 'Mentions légales'
    }, {
      path: '*'
      redirect: '/'
    }
  ]
)

router.afterEach (to, from) ->

  # Scroll to top
  window.scrollTo(0, 0)

  # Update window title
  infos = router.options.routes.filter((e) -> e.name == to.name)
  if infos.length >= 1 and typeof infos[0].title == 'string'
    document.title = "Thomas Di Meco - #{infos[0].title}"
  else
    document.title = 'Thomas Di Meco'

  return

# Vue Resource
Vue.use(VueResource)

# Vue Matomo
Vue.use(VueMatomo,
  host: 'https://analytics.tdimeco.fr'
  siteId: 1
  router: router
)

# Render the app
new Vue(
  el: '#app'
  render: (h) -> h(App)
  router: router
)
