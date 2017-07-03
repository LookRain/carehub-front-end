import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hospitalTasks: [],
  	user: {
  		UserGroup: 1
  	},
  	rawCSV: 'init csv',
    wardAssignment: {}
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
    }
  }
})

export default store