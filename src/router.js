import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'aboutUs',
      component: () => import('./views/AboutUs.vue')
    },
    {
      path: '/technologicalStack',
      name: 'technologicalStack',
      component: () => import('./views/TechnologicalStack.vue')
    },
    {
      path: '/contactForm',
      name: 'contactForm',
      component: () => import('./views/ContactForm.vue')
    }
  ]
})
