<template>
  <div>{{ user.name }}</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('userprofile', ['loading', 'error', 'user'])
  },
  created() {
    // this.$store.dispatch('userprofile/fetchUser', null, { root: true })
  }
}
</script>

<style lang="scss" scoped></style>
