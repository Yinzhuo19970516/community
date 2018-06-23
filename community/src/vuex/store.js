import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {}
}

const mutations = {
  isLogin (state, user) {
    state.user = user
  }
}

export default Vuex.Store({
  state,
  mutations
})
