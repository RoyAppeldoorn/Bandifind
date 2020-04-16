import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    allgenres: null,
    allinstruments: null
  },
  mutations: {
    LOAD_GENRES(state, payload) {
      state.allgenres = payload
    },
    LOAD_INSTRUMENTS(state, payload) {
      state.allinstruments = payload
    }
  },
  actions: {
    fetchGenres({ commit }) {
      Axios.get('http://localhost:8081/genres').then(data => {
        console.log(data)
        commit('LOAD_GENRES', data.data)
      })
    },
    fetchInstruments({ commit }) {
      Axios.get('http://localhost:8081/instruments').then(data => {
        console.log(data)
        commit('LOAD_INSTRUMENTS', data.data)
      })
    }
  }
}
