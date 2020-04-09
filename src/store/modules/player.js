export default {
  namespaced: true,
  state: {
    isCurrentlyPlaying: false
  },
  mutations: {
    START_PLAYER(state, payload) {
      state.isCurrentlyPlaying = payload;
    },
    STOP_PLAYER(state, payload) {
      state.isCurrentlyPlaying = payload;
    }
  },
  actions: {
    startPlaying({
      commit
    }) {
      commit("START_PLAYER", true);
    },
    stopPlaying({
      commit
    }) {
      commit("STOP_PLAYER", false);
    }
  },
  getters: {
    isPlaying: state => {
      return state.isCurrentlyPlaying;
    }
  }
};