<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#1E1E1E" class="pa-0" dark>
          <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="overlay" size="125" tile>
              <v-img :src="band.image_src"></v-img>
              <div
                :class="
                  `playOverlay${!isPlay ? ' active' : isPlay ? ' playing' : ''}`
                "
                @click="playAudio"
              >
                <v-btn icon color="transparant">
                  <v-icon class="play" large>mdi-play</v-icon>
                </v-btn>
              </div>

              <div
                id="stopAudio"
                :class="`pauseOverlay${isPlay ? ' active' : ''}`"
                @click="stopAudio"
              >
                <v-btn icon color="transparant">
                  <v-icon class="stop" large>mdi-pause</v-icon>
                </v-btn>
              </div>
            </v-avatar>
            <div class="d-flex flex-column justify-space-between">
              <v-card-title
                class="headline pt-2"
                v-text="band.title"
              ></v-card-title>
              <!-- <v-card-subtitle class="caption">
                Looking for
              </v-card-subtitle> -->
              <v-card-text class="pb-2">
                <v-chip
                  v-for="genre in band.genres"
                  :key="genre"
                  x-small
                  class="mr-2 mb-2"
                  color="success"
                  outlined
                >
                  {{ genre }}
                </v-chip>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Howl } from 'howler'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  props: {
    band: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isPlay: false
  }),
  computed: {
    ...mapState('player', ['player']),
    ...mapGetters('player', ['isPlaying'])
  },
  beforeDestroy() {
    if (this.player) {
      this.stopAudio()
    }
  },
  methods: {
    ...mapActions('player', ['startPlaying', 'stopPlaying', 'setPlayer']),
    playAudio() {
      if (this.isPlaying) {
        this.stopAudio()
      }

      this.setPlayer(
        new Howl({
          src: require('../../assets/' + this.band.snippet_url)
        })
      )

      this.startAudio()
    },
    stopAudio() {
      this.player.stop()
      this.isPlay = false
      this.stopPlaying()
    },
    startAudio() {
      this.player.play()
      this.startPlaying()
      this.isPlay = true
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: relative;
}

.overlay > .playOverlay,
.overlay > .pauseOverlay {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}

.overlay > .playOverlay > button,
.overlay > .pauseOverlay > button {
  color: #fff;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.overlay:hover > .playOverlay,
.overlay > .playOverlay.active,
.overlay > .pauseOverlay.active {
  display: block;
}

.overlay > .playOverlay.playing {
  display: none !important;
}
</style>
