import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})

export default store