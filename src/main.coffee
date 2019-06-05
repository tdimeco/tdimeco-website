import './styles/main.less'
import './.htaccess'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMatomo from 'vue-matomo'

import App from './components/app.vue'
import Routes from './data/routes.coffee'

# Vue Router
Vue.use(VueRouter)

router = new VueRouter(
  mode: 'history'
  routes: Routes
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
