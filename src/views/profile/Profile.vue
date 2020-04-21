<template>
  <v-container>
    <v-col sm="12" md="4">
      <h1 class="mb-6 headline">{{ user.name }}</h1>
      <h3 class="mb-4 subtitle-1">About me</h3>
      <Bio class="mb-4" :profile="user" />
    </v-col>
    <v-col sm="12" md="4">
      <h3 class="mb-4 subtitle-1">Instruments / gear</h3>
      <Instruments :profile="user" />
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Bio from '@/components/profile/Bio.vue'
import Instruments from '@/components/profile/Instruments.vue'

export default {
  computed: {
    ...mapGetters('userprofile', ['loading', 'error', 'user'])
  },
  components: {
    Bio,
    Instruments
  },
  created() {
    // this.$store.dispatch('userprofile/fetchUser', null, { root: true })
  }
}
</script>

<style lang="scss" scoped></style>
