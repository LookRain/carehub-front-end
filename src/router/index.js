import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Admin'
import ExamplePage from '@/pages/ExamplePage'
import AssignPatient from '@/pages/AssignPatient'
import Settings from '@/pages/Settings'
import AdminCalendar from '@/pages/AdminCalendar'
import CallTasks from '@/pages/CallTasks'
import HospitalTasks from '@/pages/HospitalTasks'
import CallClaim from '@/pages/CallClaim'
import CallHistory from '@/pages/CallHistory'
import AdHocCall from '@/pages/AdHocCall'
import Patients from '@/pages/Patients'

import Protocols from '@/pages/Protocols'
import Protocol1 from '@/pages/Protocol1'
import Protocol2 from '@/pages/Protocol2'
import Protocol3 from '@/pages/Protocol3'
import Protocol4 from '@/pages/Protocol4'
import Protocol5 from '@/pages/Protocol5'
import Protocol6 from '@/pages/Protocol6'

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
    path: '/hospital_tasks',
    name: 'HospitalTasks',
    component: HospitalTasks
  },
  {
    path: '/claim',
    name: 'CallClaim',
    component: CallClaim
  },
  {
    path: '/call_history',
    name: 'CallHistory',
    component: CallHistory
  },
  {
    path: '/ad_hoc_call',
    name: 'AdHocCall',
    component: AdHocCall
  },
  {
    path: '/assign_patient',
    name: 'AssignPatient',
    component: AssignPatient
  },
  {
    path: '/patients',
    name: 'Patients',
    component: Patients
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
  },
  {
    path: '/protocols',
    component: Protocols,
    children: [
    {
      path: '',
      component: Protocol1
    },
    {
      path: '1',
      component: Protocol1
    },
    {
      path: '2',
      component: Protocol2
    },
    {
      path: '3',
      component: Protocol3
    },
    {
      path: '4',
      component: Protocol4
    },
    {
      path: '5',
      component: Protocol5
    },
    {
      path: '6',
      component: Protocol6
    }
    
    ]
  }
  ]
})
