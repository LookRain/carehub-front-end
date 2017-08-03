import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:55494/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
})

let fetchUser = instance.get('currentuser').then(
          response => {
            console.log('chain step 1: got user response')
            return response.data
          })
          .catch(err => {
            throw err
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
    hosWorkload: [],
    callHistory: ''

  },
  mutations: {
  	setUser (state, userInfo) {
  		state.user = userInfo
  	},
    setCallHistory (state, callHistory) {
      state.callHistory = callHistory
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
      fetchUser.then(data => {
        commit('setUser', data)
      }).catch(err => {
        alert('Something went wrong while trying to log you in.')
        window.location.replace('/')
      })
    },

    initCallHistory ({commit}) {
      console.log('initcallhistory dispatched')
      fetchUser.then(user => {
        console.log('chain step 2: received user from step 1, requesting for call history')
        return instance.get('claimedcallhistory/values?username=' + user.Email)
        })
      .catch(err => {
        throw err
      })
      .then(calHistoryRes => {
        console.log('chain step 3: received call history')
        commit('setCallHistory', calHistoryRes.data)        
      })
      .catch(err => {
        alert('Failed to retrieve call history, please try re-logging in.')
      })
    }
  }
})

export default store




