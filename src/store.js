import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	user: 'abc',
    mode: 2,
    count: 3
  },
  mutations: {
  	setUser (state, userInfo) {
  		state.user = userInfo
  	}
  }
})

export default store