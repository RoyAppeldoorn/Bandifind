<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card :color="band.color" dark>
          <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ma-3 overlay" size="125" tile>
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
                :class="`pauseOverlay${isPlay ? ' active' : ''}`"
                @click="stopAudio"
              >
                <v-btn icon color="transparant">
                  <v-icon class="stop" large>mdi-pause</v-icon>
                </v-btn>
              </div>
            </v-avatar>
            <div>
              <v-card-title class="headline" v-text="band.title"></v-card-title>

              <v-card-subtitle v-text="band.artist"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Howl } from "howler";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: {
    band: Object
  },
  data: () => ({
    sound: null,
    isPlay: false
  }),
  computed: {
    ...mapGetters("player", ["isPlaying"])
  },
  methods: {
    ...mapActions("player", ["startPlaying", "stopPlaying"]),
    playAudio() {
      if (this.isPlaying) {
        this.sound.stop();
        this.stopPlaying();
      }

      this.sound = new Howl({
        src: require("../../assets/" + this.band.snippet_url)
      });

      this.sound.play();
      this.isPlay = true;
      this.startPlaying();
    },
    stopAudio() {
      this.sound.stop();
      this.isPlay = false;
      this.stopPlaying();
    }
  }
};
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
