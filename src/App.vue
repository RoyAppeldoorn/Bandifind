<template>
  <v-app>
    <TopNav class="hidden-sm-and-down" />

    <v-content
      v-bind:class="{
        'pa-0': $vuetify.breakpoint.smAndDown
      }"
    >
      <router-view />
    </v-content>

    <BottomNav class="hidden-md-and-up" />
  </v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";
import TopNav from "@/components/TopNav.vue";

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

<style lang="scss"></style>
