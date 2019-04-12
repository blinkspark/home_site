import md5 from 'md5'

export const state = () => ({
  scrolled: false,
  user: {},
  articles: [],
  editID: '',
  notifies: []
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
  },
  addNotify(state, v) {
    state.notifies.push(v)
  },
  rmNotify(state, v) {
    state.notifies = state.notifies.filter(nv => nv.id !== v.id)
  }
}

const NOTIFY_DELAY = 3 * 1000

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  },
  addNotify({ commit }, payload) {
    payload = payload || ''
    if (payload && payload !== '') {
      payload = { id: md5(payload + Date.now()), msg: payload }
      commit('addNotify', payload)
      setTimeout(() => {
        commit('rmNotify', payload)
      }, NOTIFY_DELAY)
    }
  }
}