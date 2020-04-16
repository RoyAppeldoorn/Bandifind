import Axios from 'axios'

export default {
  state: {
    user: null,
    loading: null,
    error: null
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.user = payload
    },

    SET_LOADING(state, payload) {
      state.loading = payload
    },

    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    fetchUser({ commit }, id) {
      commit('SET_LOADING', true)
      Axios.get(`http://localhost:8081/musicianprofile/${id}`)
        .then(response => {
          commit('SET_LOADING', false)
          commit('SET_USER_DATA', response.data)
          commit('SET_ERROR', null)
        })
        .catch(error => {
          commit('SET_ERROR', error.message)
          commit('SET_LOADING', false)
        })
    },

    setHardcodedUser({ commit }, user) {
      commit('SET_USER_DATA', user)
    },

    clearError({ commit }) {
      commit('SET_ERROR', null)
    }
  },
  getters: {
    loading: state => {
      return state.loading
    },

    error: state => {
      return state.error
    },

    loggedIn: state => {
      return !!state.user
    }
  }
}
