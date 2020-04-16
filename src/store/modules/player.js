export default {
  namespaced: true,
  state: {
    isCurrentlyPlaying: false,
    player: null
  },
  mutations: {
    START_PLAYER(state, payload) {
      state.isCurrentlyPlaying = payload
    },
    STOP_PLAYER(state, payload) {
      state.isCurrentlyPlaying = payload
    },
    SET_PLAYER(state, payload) {
      state.player = payload
    }
  },
  actions: {
    setPlayer({ commit }, payload) {
      commit('SET_PLAYER', payload)
    },
    startPlaying({ commit }) {
      commit('START_PLAYER', true)
    },
    stopPlaying({ commit }) {
      commit('STOP_PLAYER', false)
    }
  },
  getters: {
    isPlaying: state => {
      return state.isCurrentlyPlaying
    }
  }
}
