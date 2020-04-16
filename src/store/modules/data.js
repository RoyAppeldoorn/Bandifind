import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    allgenres: [],
    instruments: [],
  },
  mutations: {
    LOAD_GENRES(state, payload) {
      state.allgenres = payload
    },
  },
  actions: {
    fetchGenres({ commit }) {
      Axios.get('http://localhost:8081/genres').then((data) => {
        console.log(data)
        commit('LOAD_GENRES', data.data)
      })
    },
  },
}
