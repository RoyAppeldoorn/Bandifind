import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    allbands: null
  },
  mutations: {
    LOAD_BANDS(state, payload) {
      state.allbands = payload
    }
  },
  actions: {
    fetchBands({ commit }) {
      Axios.get('http://localhost:8081/bands').then(data => {
        console.log(data)
        commit('LOAD_BANDS', data.data)
      })
    }
  }
}
