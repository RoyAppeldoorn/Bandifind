import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    bands: null,
    loading: null
  },
  mutations: {
    LOAD_BANDS(state, payload) {
      state.bands = payload
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    fetchBands({ commit }) {
      commit('SET_LOADING', true)
      Axios.get('http://localhost:8081/bands').then(data => {
        commit('LOAD_BANDS', data.data)
        commit('SET_LOADING', false)
      })
    }
  },
  getters: {
    getBandById: state => id => {
      return state.bands.find(band => band.id === id)
    }
  }
}
