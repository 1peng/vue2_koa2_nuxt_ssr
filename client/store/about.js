export const state = () => ({
  abouts: [
    {
      text: 'aaaa11',
      done: false
    },
    {
      text: 'aaaa2222',
      done: false
    },
    {
      text: '222221119999999922',
      done: false
    }
  ]
})
export const getters = {
  abouts (state) {
    return state.abouts
  }
}

export const mutations = {
  add (state, text) {
    state.abouts.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.abouts.splice(state.abouts.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
