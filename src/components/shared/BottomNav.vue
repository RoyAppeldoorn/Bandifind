<template>
  <v-bottom-navigation
    class="v-bottom-navigation--custom"
    grow
    color="#BB86FC"
    fixed
  >
    <v-btn style="height: auto" to="/home" exact>
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

    <v-btn style="height: auto" to="/profile" exact>
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-bottom-navigation--custom {
  background-color: #1f1f1f !important;
}
</style>
