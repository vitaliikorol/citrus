export const state = () => ({
  users: [],
  count: 0,
  initialCount: 0,
  gender: '',
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setCount(state, payload) {
    state.count = payload.count
  },
  setGender(state, payload) {
    state.gender = payload.gender
  },
  setInitialCount(state, payload) {
    state.initialCount = payload.initialCount
  }
}

export const actions = {
  async fetch({ commit, state }) {
    if (state.count > 0) {
      if (state.gender !== '') {
        const data = await this.$axios.$get(`https://randomuser.me/api/?gender=${state.gender}&results=${state.count}`)
        const users = data.results
        commit("setUsers", users)
      } else {
        const data = await this.$axios.$get(`https://randomuser.me/api/?results=${state.count}`)
        const users = data.results
        commit("setUsers", users)
      }
    } else return
  },
}

export const getters = {
  users: state => state.users,
  count: state => state.count,
  initialCount: state => state.initialCount
}
