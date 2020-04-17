<template>
  <div>
    <v-app-bar
      app
      class="v-app-bar--custom"
      :color="this.$route.meta.title === 'Home' ? 'rgb(0, 0, 0, 0)' : '#191A1E'"
    >
      <v-btn icon to="/home" exact>
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 1H3.5C2.11929 1 1 2.02974 1 3.3V21.7C1 22.9703 2.11929 24 3.5 24H18.5C19.8807 24 21 22.9703 21 21.7V3.3C21 2.02974 19.8807 1 18.5 1Z"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 19.3997C13.7614 19.3997 16 17.3402 16 14.7997C16 12.2592 13.7614 10.1997 11 10.1997C8.23858 10.1997 6 12.2592 6 14.7997C6 17.3402 8.23858 19.3997 11 19.3997Z"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 5.6001H11.0131"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </v-btn>
      <div class="ml-5">
        <span v-if="this.$route.meta.title === 'Home'">
          Bandifind
        </span>
        <span v-else>
          {{ this.$route.meta.title }}
        </span>
      </div>
      <!-- <v-text-field
        v-if="this.$route.meta.title === 'Search'"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
      /> -->

      <v-spacer></v-spacer>

      <v-btn id="install-button" class="d-none" tile outlined color="success"
        ><v-icon left>mdi-pencil</v-icon> Install</v-btn
      >
      <div v-if="!loggedIn" class="my-2">
        <v-btn text small color="#BB86FC" to="/artistregistration" exact
          >Register</v-btn
        >
      </div>
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
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('userprofile', ['loggedIn']),
    ...mapState('userprofile', ['user'])
  }
}
</script>

<style lang="scss">
.v-app-bar--custom {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1) !important;
}
</style>
