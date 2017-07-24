import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:55494/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hospitalTasks: [],
    callTasks: [],
  	user: {
  		UserGroup: 1
  	},
  	rawCSV: 'init csv',
    allHosUsers: [],
    wardAssignment: {},
    hosWorkload: []

  },
  mutations: {
  	setUser (state, userInfo) {
  		state.user = userInfo
  	},
  	setCSV(state, csv) {
  		state.rawCSV = csv
  	},
    setWardAssignment(state, assignment) {
      state.wardAssignment = assignment
    },
    setHospitalTasks(state, tasks) {
      state.hospitalTasks = patients
    },
    setAllHosUsers(state, users) {
      state.allHosUsers = users
    },
    setCallTasks(state, tasks) {
      state.callTasks = tasks
    },
    setHosWorkload(state, load) {
      state.hosWorkload = load
    }
  },
  actions: {
    initUser ({commit}) {
      instance.get('currentuser').then(
        (response)=>{
        commit('setUser', response.data)      
      }).catch(err => {
      alert('Please log in first!')
      window.location.replace('/')
    })
    }
  }
})

export default store