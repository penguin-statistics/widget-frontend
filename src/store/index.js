import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    settings
  },
  plugins: [
    createPersistedState({
      key: 'penguin-stats-widget-settings',
      paths: [
        'settings'
      ]
    })
  ]
})
