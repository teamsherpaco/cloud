import * as types from '../mutation-types'
import { $router } from '../../main'

// initial state
const state = {
  signedIn: false
}

// getters
const getters = {
  signedIn: state => state.signedIn
}

// actions
const actions = {
  signIn ({ commit }) {
    commit(types.SIGN_IN)
  },
  signOut ({ commit }) {
    commit(types.SIGN_OUT)
  }
}

// mutations
const mutations = {
  [types.SIGN_IN] (state) {
    state.signedIn = true
  },
  [types.SIGN_OUT] (state) {
    state.signedIn = false
    $router.go('/')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
