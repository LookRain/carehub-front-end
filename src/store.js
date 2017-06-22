import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import axios from 'axios'
let instance = axios.create({
        baseURL: '/api/',
        timeout: 1000,
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")}
      })
let initialState = ''

// instance.get('currentuser').then((response)=>{ console.log(response.data.UserGroup) })



const store = new Vuex.Store({
  state: {
  	user: 'abc',
    mode: 2,
    count: 3
  }
})
instance.get('currentuser').then((response)=>{ store.state.user = response.data })
export default store