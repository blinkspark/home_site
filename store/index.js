export const state = () => ({
  scrolled: false,
  user: {},
  articles: [],
  editID: ''
})

export const mutations = {
  setScrolled(state, v) {
    state.scrolled = v
  },
  user(state, v) {
    state.user = v || {}
  },
  articles(state, v) {
    state.articles = v || []
  },
  editID(state, v) {
    state.editID = v || ''
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}