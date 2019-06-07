import './styles/main.scss'
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
  title = infos?[0]?.title
  title = title(to.params) if typeof title is 'function'
  if typeof title is 'string'
    document.title = "Thomas Di Meco - #{title}"
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
