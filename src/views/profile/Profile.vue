<template>
  <div>{{ user }}</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('userprofiles', ['user']),
    ...mapGetters('userprofiles', ['loading', 'error'])
  },
  created() {
    this.$store.dispatch('userprofile/fetchUser', null, { root: true })
  }
}
</script>

<style lang="scss" scoped></style>
