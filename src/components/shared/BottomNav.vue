<template>
  <v-bottom-navigation
    class="v-bottom-navigation--custom"
    grow
    color="#BB86FC"
    app
  >
    <v-btn style="height: auto" to="/" exact>
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn style="height: auto" to="/bands" exact>
      <span>Bands</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

    <v-btn style="height: auto" to="/search" exact>
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn style="height: auto" to="/artists" exact>
      <span>Artists</span>
      <v-icon>mdi-account-music</v-icon>
    </v-btn>

    <v-btn v-if="user !== null" style="height: auto" to="/profile" exact>
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('userprofile', ['user'])
  }
}
</script>

<style lang="scss">
.v-bottom-navigation--custom {
  background-color: #191a1e;
}
</style>
