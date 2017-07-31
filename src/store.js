import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:55494/api/',
  timeout: 1000,
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
})

let fetchUser = new Promise((resolve, reject) => {

        instance.get('currentuser').then(
          (response)=>{
            // commit('setUser', response.data)
            console.log('got it')
            resolve(response.data)
          })
          .catch(err => {
            // alert('Please log in first!')
            // window.location.replace('/')
            reject(err)
          })

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
    // initUser ({commit}) {
    //   instance.get('currentuser').then(
    //     (response)=>{
    //     commit('setUser', response.data)      
    //   }).catch(err => {
    //   alert('Please log in first!')
    //   window.location.replace('/')
    // })
    // }

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
      fetchUser.then(data => {
        // console.log('try this: ' + JSON.stringify(data))
        instance.get('claimedcallhistory/values?username=' + data.Email).then(calHistoryRes => {
          commit('setCallHistory', calHistoryRes.data)
        })
        
      }).catch(err=>{console.log('what happed')})
    }
  }
})

export default store