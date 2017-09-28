export const state = () => ({
  counter: 0
})

export const getters = {
  counter (state) {
    return state.counter
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  reduction (state) {
    state.counter--
  }
}
