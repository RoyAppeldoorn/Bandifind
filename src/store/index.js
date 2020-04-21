import Vue from 'vue'
import Vuex from 'vuex'
import player from '@/store/modules/player.js'
import userprofile from '@/store/modules/userprofile.js'
import bandprofile from '@/store/modules/bandprofile.js'
import data from '@/store/modules/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    player,
    data,
    userprofile,
    bandprofile
  }
})
