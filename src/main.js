// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'

import fullCalendar from 'vue-fullcalendar'

import 'jquery'
import 'expose-loader?$!expose-loader?jQuery!jquery'
// import 'admin-lte'
import 'bootstrap'
import 'chart.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/skins/skin-green.css'
import 'font-awesome/css/font-awesome.min.css'

import 'admin-lte/dist/js/app.min.js'
import 'admin-lte/dist/js/pages/dashboard.js'
import 'admin-lte/plugins/jQueryUI/jquery-ui.min.js'
import 'jquery-ui/ui/widgets/sortable.js'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/themes/base/datepicker.css'



import store from './store.js'


import axios from 'axios'
window.axios = axios

window.instance = window.axios.create({
        baseURL: '/api/',
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
      })

Vue.component('full-calendar', fullCalendar)
Vue.use(MuseUI)
Vue.config.productionTip = false
// console.log(store)
window.Event = new Vue()
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store: store,
  // template: '<App username="mamamia"></App>',
  components: { App },
  data: {
    panelMode: store.state.mode
  },
  methods: {
    changeMode (m) {
      Event.$emit(m)
    }
  },
  created() {
    // store.state.user = "bbb"
  }
})

