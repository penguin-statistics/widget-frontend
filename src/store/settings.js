export default {
  namespaced: true,
  state: {
    language: 'en',
    theme: 'light'
  },
  mutations: {
    changeLanguage (state, language) {
      state.language = language
    },
    changeTheme (state, theme) {
      state.theme = theme
    }
  },
  getters: {
    language: (state) => state.language,
    theme: (state) => state.theme
  }
}
