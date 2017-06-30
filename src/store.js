import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	user: {
  		UserGroup: 1
  	},
  	rawCSV: 'test'
  },
  mutations: {
  	setUser (state, userInfo) {
  		state.user = userInfo
  	},
  	setCSV(state, csv) {
  		state.rawCSV = csv
  	}
  }
})

export default store