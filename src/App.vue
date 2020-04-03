<template>
  <v-app>
    <v-container>
      <TopNav />

      <v-content class="v-content--custom">
        <router-view />
      </v-content>

      <BottomNav class="hidden-md-and-up" />
    </v-container>
  </v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import TopNav from "@/components/TopNav.vue";

// v-bind:class="{
//   'pa-0': $vuetify.breakpoint.smAndDown
// }"

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    BottomNav,
    TopNav
  }
};
</script>

<style lang="scss">
.v-content--custom {
  transition: none !important;
}
</style>
