import HomePage from '../components/home-page.vue'
import AppsPage from '../components/apps-page.vue'
import AppDetailsPage from '../components/app-details-page.vue'
import FreelancePage from '../components/freelance-page.vue'
import PhotosPage from '../components/photos-page.vue'
import AboutPage from '../components/about-page.vue'
import TermsPage from '../components/terms-page.vue'

import Apps from './apps.coffee'

export default [
  {
    name: 'home'
    path: '/'
    component: HomePage
    title: "Site web personnel"
  }, {
    name: 'apps'
    path: '/apps'
    component: AppsPage
    title: "Apps"
  }, {
    name: 'app-details'
    path: '/apps/:id'
    component: AppDetailsPage
    props: true
    title: (params) -> Apps.named[params.id]?.title
  }, {
    name: 'freelance'
    path: '/freelance'
    component: FreelancePage
    title: "Freelance"
  }, {
    name: 'photos'
    path: '/photos'
    component: PhotosPage
    title: "Photos"
  }, {
    name: 'about'
    path: '/about'
    component: AboutPage
    title: "À propos"
  }, {
    name: 'terms'
    path: '/terms'
    component: TermsPage
    title: "Mentions légales"
  }, {
    path: '*'
    redirect: '/'
  }
]
