<template>
  <v-row sm="12" md="12">
    <v-col sm="12" md="4">
      <Bio />
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

export default {
  components: {
    Bio,
    AlbumHistory,
    BandPhotos
  }
};
</script>

<style lang="scss" scoped></style>
