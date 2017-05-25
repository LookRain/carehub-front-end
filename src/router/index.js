import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/pages/Page1'
import Admin from '@/pages/Admin'
import ExamplePage from '@/pages/ExamplePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/example',
      name: 'ExamplePage',
      component: ExamplePage
    }
  ]
})
