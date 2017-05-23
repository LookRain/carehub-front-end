import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/pages/Page1'
import Admin from '@/pages/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
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
    }
  ]
})
