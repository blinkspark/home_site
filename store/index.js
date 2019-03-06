export const state = () => ({
  scrolled: false
})

export const mutations = {
  setScrolled(state, v) {
    state.scrolled = v
  }
}