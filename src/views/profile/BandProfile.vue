<template>
  <v-row v-if="!loading" sm="12" md="12">
    <v-col sm="12" md="4">
      <Bio :item="item" />
    </v-col>
    <v-col sm="12" md="4">
      <AudioPlayer :item="item" />
    </v-col>
    <v-col sm="12" md="4">
      <BandPhotos :item="item" />
    </v-col>
    <v-col sm="12" md="4">
      <AlbumHistory :item="item" />
    </v-col>
  </v-row>
</template>

<script>
import Bio from '@/components/band/profile/Bio.vue'
import AlbumHistory from '@/components/band/profile/AlbumHistory.vue'
import BandPhotos from '@/components/band/profile/BandPhotos.vue'
import AudioPlayer from '@/components/band/profile/AudioPlayer.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    Bio,
    AlbumHistory,
    BandPhotos,
    AudioPlayer
  },
  computed: {
    ...mapState('bandprofile', ['loading']),
    item() {
      return this.$store.getters['bandprofile/getBandById'](
        this.$route.params.id
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
