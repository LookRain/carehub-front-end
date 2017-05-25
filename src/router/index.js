import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Admin'
import ExamplePage from '@/pages/ExamplePage'
import AssignPatient from '@/pages/AssignPatient'
import Settings from '@/pages/Settings'
import AdminCalendar from '@/pages/AdminCalendar'
import CallTasks from '@/pages/CallTasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/call_tasks',
      name: 'CallTasks',
      component: CallTasks
    },
    {
      path: '/assign_patient',
      name: 'AssignPatient',
      component: AssignPatient
    },
    {
      path: '/admin_calendar',
      name: 'AdminCalendar',
      component: AdminCalendar
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
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
