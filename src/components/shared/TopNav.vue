<template>
  <div>
    <v-app-bar light app class="v-app-bar--custom">
      <v-toolbar-title class="text--dark mr-10"
        >{{ this.$route.meta.title }}
      </v-toolbar-title>
      <v-text-field
        v-if="this.$route.meta.title === 'Search'"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
      />
      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn icon to="/home" exact>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon to="/bands" exact>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn icon to="/search" exact>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon to="/artists" exact>
          <v-icon>mdi-account-music</v-icon>
        </v-btn>

        <v-btn icon to="/profile" exact>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-app-bar--custom {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1) !important;
}
</style>
