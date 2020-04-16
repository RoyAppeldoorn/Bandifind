<template>
  <v-row sm="12" md="12">
    <v-col sm="12" md="4">
      <Bio />
    </v-col>
    <v-col sm="12" md="4">
      <AudioPlayer />
    </v-col>
    <v-col sm="12" md="4">
      <BandPhotos />
    </v-col>
    <v-col sm="12" md="4">
      <AlbumHistory />
    </v-col>
  </v-row>
</template>

<script>
import Bio from "@/components/profile/Bio.vue";
import AlbumHistory from "@/components/profile/AlbumHistory.vue";
import BandPhotos from "@/components/profile/BandPhotos.vue";
import AudioPlayer from "@/components/profile/AudioPlayer.vue";

export default {
  components: {
    Bio,
    AlbumHistory,
    BandPhotos,
    AudioPlayer
  }
};
</script>

<style lang="scss" scoped></style>
