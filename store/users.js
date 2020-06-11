export const state = () => ({
  users: [],
  // path: '',
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  // setPath(state, path) {
  //   state.path = path
  // }
}

export const actions = {
  async fetch({ commit }) {
    const data = await this.$axios.$get(`https://randomuser.me/api/?page=1&results=${state.path}&seed=abc`)
    const users = data.results
    commit("setUsers", users)
  },
  // async setId({ commit, path }) {
  //   commit("setPath", path)
  // }
}

export const getters = {
  users: state => state.users,
}
