import * as types from '../mutation-types'

// initial state
const state = {
  navigatorVisible: false,
  settingsVisible: false,
  isLoading: false
}

// getters
const getters = {
  navigatorVisible: state => state.navigatorVisible,
  settingsVisible: state => state.settingsVisible,
  isLoading: state => state.isLoading
}

// actions
const actions = {
  toggleNavigator ({ commit }) {
    commit(types.TOGGLE_NAVIGATOR)
  },
  closeNavigator ({ commit }) {
    commit(types.CLOSE_NAVIGATOR)
  },
  openSettings ({ commit, state }) {
    commit(types.OPEN_SETTINGS)
  },
  closeSettings ({ commit, state }) {
    commit(types.CLOSE_SETTINGS)
  },
  showLoader ({ commit, state }) {
    commit(types.SHOW_LOADER)
  },
  hideLoader ({ commit, state }) {
    commit(types.HIDE_LOADER)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = !state.navigatorVisible
  },
  [types.CLOSE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = false
  },
  [types.OPEN_SETTINGS] (state) {
    state.navigatorVisible = false
    state.settingsVisible = true
  },
  [types.CLOSE_SETTINGS] (state) {
    state.settingsVisible = false
  },
  [types.SHOW_LOADER] (state) {
    state.isLoading = true
  },
  [types.HIDE_LOADER] (state) {
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
