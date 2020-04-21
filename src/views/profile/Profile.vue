<template>
  <v-container>
    <h1 class="mb-4">{{ user.name }}</h1>

    <Bio />
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Bio from '@/components//profile/Bio.vue'

export default {
  computed: {
    ...mapGetters('userprofile', ['loading', 'error', 'user'])
  },
  components: {
    Bio
  },
  created() {
    // this.$store.dispatch('userprofile/fetchUser', null, { root: true })
  }
}
</script>

<style lang="scss" scoped></style>
