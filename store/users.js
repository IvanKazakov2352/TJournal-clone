export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  deleteUser(state, payload) {
    state.users = state.users.filter(user => user.id !== payload)
  }
}

export const actions = {
  async getUsers({ commit }) {
    const users = await this.$axios.$get("https://jsonplaceholder.typicode.com/users")
    commit("setUsers", users)
  },
}

export const getters = {
  users: state => state.users
}
